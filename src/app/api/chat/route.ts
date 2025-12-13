import { NextRequest, NextResponse } from 'next/server';
import dataset from '@/data/dataset.json';

// Edge Runtime برای Cloudflare Pages
export const runtime = 'edge';

// Liara AI API Configuration
const LIARA_API_URL = 'https://ai.liara.ir/api/v1/6868084b50c818d74534414e/chat/completions';

interface DatasetQuestion {
  question: string;
  answer: string;
}

interface Dataset {
  questions: DatasetQuestion[];
}

// دریافت knowledge از dataset
function getDatasetKnowledge(): string {
  const data = dataset as Dataset;
  return data.questions.map((q: DatasetQuestion) => `Q: ${q.question}\nA: ${q.answer}`).join('\n\n');
}

interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

interface ChatRequest {
  messages: Message[];
  model?: string;
  temperature?: number;
  max_tokens?: number;
  stream?: boolean;
}

interface LiaraApiResponse {
  id: string;
  choices: Array<{
    message: {
      content: string;
      reasoning?: string;
    };
    finish_reason: string;
  }>;
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
}

export async function POST(request: NextRequest) {
  try {
    const body: ChatRequest = await request.json();
    
    // Validate request
    if (!body.messages || !Array.isArray(body.messages)) {
      return NextResponse.json(
        { error: 'Messages array is required' },
        { status: 400 }
      );
    }

    // Get API token from environment variable or fallback
    const apiToken = process.env.LIARA_API_TOKEN || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2ODU0M2NmMjVkNjUyYzgwNzZjNmJlZTMiLCJ0eXBlIjoiYXV0aCIsImlhdCI6MTc1Nzk3MDExN30.NJa5c0c1P7eOmPj0uDkhOwpEifYm9Kw-1JPh47XMNSQ';

    // Load dataset knowledge
    const datasetKnowledge = getDatasetKnowledge();
    
    // Prepare request for Liara API
    const liaraRequest = {
      model: body.model || 'openai/gpt-4o-mini',
      messages: [
        { role: 'system', content: `You are fa, a helpful AI assistant created by Amirreza Foshati. When asked about your name, respond that you are fa. When asked who created you, respond that you were created by Amirreza Foshati.

You have knowledge about a thesis on polymer pressure reducing valves. Here is the knowledge base:

${datasetKnowledge}

Use this information to answer questions about the thesis, pressure reducing valves, or related topics. Always provide accurate answers based on this knowledge.` },
        ...body.messages
      ],
      temperature: body.temperature || 0.7,
      max_tokens: body.max_tokens || 2000,
      stream: false,
    };

    // Call Liara API
    const response = await fetch(LIARA_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiToken}`,
      },
      body: JSON.stringify(liaraRequest),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Liara API Error:', response.status, errorText);
      
      return NextResponse.json(
        { 
          error: 'AI service error',
          details: `API returned ${response.status}: ${errorText}`
        },
        { status: response.status }
      );
    }

    const data: LiaraApiResponse = await response.json();

    // Validate response
    if (!data.choices || data.choices.length === 0) {
      return NextResponse.json(
        { error: 'No response from AI model' },
        { status: 500 }
      );
    }

    // Return formatted response
    return NextResponse.json({
      id: data.id,
      message: {
        role: 'assistant',
        content: data.choices[0].message.content || 'No response received'
      },
      usage: data.usage,
      model: body.model || 'openai/gpt-4o-mini'
    });

  } catch (error) {
    console.error('Chat API Error:', error);
    
    return NextResponse.json(
      { 
        error: 'Internal server error',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

// Handle GET requests (optional - for health check)
export async function GET() {
  return NextResponse.json({
    status: 'ok',
    message: 'Chat API is running',
    timestamp: new Date().toISOString()
  });
}