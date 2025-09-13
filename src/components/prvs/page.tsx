/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import { JSX } from "react/jsx-runtime";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
  Line,
  ResponsiveContainer,
  ScatterChart,
  Scatter,
  Area,
  AreaChart,
} from "recharts";

interface PRVData {
  id: number;
  model: string;
  mechanism: string;
  material: string;
  maxPressure: number;
  maxPressureBar: number;
  maxPressureRange: string;
  outputPressure: string;
  efficiencyMin: number;
  efficiencyMax: number;
  efficiency: number;
  stabilityText: string;
  priceMin: number;
  priceMax: number;
  price: number;
  application: string;
  color: string;
}

interface ChartData {
  name: string;
  fullName?: string;
  efficiency?: number;
  maxPressure?: number;
  price?: number;
  color?: string;
  pressure?: number;
  efficiencyMin?: number;
  efficiencyMax?: number;
  fill?: string;
}

const PRVAnalysisDashboard: React.FC = () => {
  const [selectedChart, setSelectedChart] = useState<string>("efficiency");

  const prvData: PRVData[] = [
    {
      id: 1,
      model: "PRV-SM2",
      mechanism: "Direct Simple",
      material: "PVC / UPVC",
      maxPressure: 116,
      maxPressureBar: 8,
      maxPressureRange: "5-8 / 72-116",
      outputPressure: "Pre-set (no adjustment screw)",
      efficiencyMin: 20,
      efficiencyMax: 35,
      efficiency: 27.5,
      stabilityText: "Low & Variable Stability",
      priceMin: 5,
      priceMax: 10,
      price: 7.5,
      application: "Light residential non-critical uses, garden and landscape irrigation",
      color: "#FF6B6B",
    },
    {
      id: 2,
      model: "PRV-AM2",
      mechanism: "Direct Diaphragm",
      material: "PVC / UPVC",
      maxPressure: 116,
      maxPressureBar: 8,
      maxPressureRange: "5-8 / 72-116",
      outputPressure: "Adjustable",
      efficiencyMin: 55,
      efficiencyMax: 70,
      efficiency: 62.5,
      stabilityText: "Very Stable (<0.5 psi)",
      priceMin: 10,
      priceMax: 20,
      price: 15,
      application: "Residential, main water transmission lines, farms, agriculture",
      color: "#4ECDC4",
    },
    {
      id: 3,
      model: "Enhanced Polymer PRV",
      mechanism: "Direct Diaphragm",
      material: "High Pressure UPVC",
      maxPressure: 232,
      maxPressureBar: 16,
      maxPressureRange: "16 / 232",
      outputPressure: "Adjustable",
      efficiencyMin: 60,
      efficiencyMax: 75,
      efficiency: 67.5,
      stabilityText: "Very Stable",
      priceMin: 25,
      priceMax: 40,
      price: 32.5,
      application: "Light industrial, main networks, residential, water distribution networks, farms and agriculture",
      color: "#45B7D1",
    },
    {
      id: 4,
      model: "Watts LF25AUB-Z3",
      mechanism: "Direct Diaphragm",
      material: "Lead-free Silicon Copper Alloy",
      maxPressure: 300,
      maxPressureBar: 20.7,
      maxPressureRange: "20.7 / 300",
      outputPressure: "Adjustable",
      efficiencyMin: 45,
      efficiencyMax: 70,
      efficiency: 57.5,
      stabilityText: "Stable",
      priceMin: 150,
      priceMax: 250,
      price: 200,
      application: "Sanitary and building water systems, heating and cooling systems",
      color: "#96CEB4",
    },
    {
      id: 5,
      model: "Apollo™ 3610401 — 36 Series",
      mechanism: "Direct Piston",
      material: "Bronze",
      maxPressure: 300,
      maxPressureBar: 20.7,
      maxPressureRange: "20.7 / 300",
      outputPressure: "Adjustable",
      efficiencyMin: 40,
      efficiencyMax: 70,
      efficiency: 55,
      stabilityText: "Stable",
      priceMin: 300,
      priceMax: 400,
      price: 350,
      application: "Industrial, municipal, main water distribution lines and building equipment protection",
      color: "#FECA57",
    },
    {
      id: 6,
      model: "GF Type 582 — 1″ PVC socket (EPDM)",
      mechanism: "Direct Diaphragm",
      material: "PVC-U + EPDM",
      maxPressure: 218,
      maxPressureBar: 15,
      maxPressureRange: "10-15 / 218-150",
      outputPressure: "Adjustable",
      efficiencyMin: 50,
      efficiencyMax: 60,
      efficiency: 55,
      stabilityText: "Very Stable",
      priceMin: 800,
      priceMax: 1500,
      price: 1150,
      application: "Laboratory, light industrial, chemical processes, pure and semi-conductive water",
      color: "#FF9FF3",
    },
    {
      id: 7,
      model: "NeoFlow PRV (GF)",
      mechanism: "External Pilot",
      material: "POM-C / GF Polymer Material",
      maxPressure: 232,
      maxPressureBar: 16,
      maxPressureRange: "16 / 232",
      outputPressure: "Adjustable (Pilot)",
      efficiencyMin: 55,
      efficiencyMax: 70,
      efficiency: 62.5,
      stabilityText: "Very Stable",
      priceMin: 1000,
      priceMax: 2000,
      price: 1500,
      application: "Large industrial, urban distribution networks, main water distribution lines, network pressure management",
      color: "#54A0FF",
    },
  ];

  const chartData: ChartData[] = prvData.map((item) => ({
    name: item.model.substring(0, 20) + "...",
    fullName: item.model,
    efficiency: item.efficiency,
    maxPressure: item.maxPressure,
    price: item.price,
    color: item.color,
  }));

  const getShortName = (fullName: string): string => {
    if (fullName.includes("PRV-SM2")) return "PRV-SM2";
    if (fullName.includes("PRV-AM2"))
      return "PRV-AM2";
    if (fullName.includes("Enhanced Polymer")) return "PRV-AM2+";
    if (fullName.includes("Watts")) return "Watts LF25AUB";
    if (fullName.includes("Apollo")) return "Apollo 36 Series";
    if (fullName.includes("GF Type")) return "GF Type 582";
    if (fullName.includes("NeoFlow")) return "NeoFlow PRV";
    return fullName;
  };

  const efficiencyData: ChartData[] = prvData.map((item) => ({
    name: getShortName(item.model),
    efficiency: item.efficiency,
    efficiencyMin: item.efficiencyMin,
    efficiencyMax: item.efficiencyMax,
    fill: item.color,
  }));

  const pressureData: ChartData[] = prvData.map((item) => ({
    name: getShortName(item.model),
    pressure: item.maxPressure,
    fill: item.color,
  }));

  const priceEfficiencyData: ChartData[] = prvData.map((item) => ({
    price: item.price,
    efficiency: item.efficiency,
    name: `Model ${item.id}`,
    fill: item.color,
  }));

  // Pressure curve data
  const pressureCurveData: ChartData[] = [
    { name: "PRV-SM2", pressure: 116 },
    { name: "PRV-AM2", pressure: 116 },
    { name: "PRV-AM2+", pressure: 232 },
    { name: "Watts LF25AUB-Z3", pressure: 300 },
    { name: "Apollo™ 36 Series", pressure: 300 },
    { name: "GF Type 582", pressure: 218 },
    { name: "NeoFlow", pressure: 232 },
  ];

  const renderChart = (): JSX.Element | null => {
    switch (selectedChart) {
      case "efficiency":
        return (
          <ResponsiveContainer width="100%" height={500}>
            <BarChart
              data={efficiencyData}
              margin={{ top: 40, right: 30, left: 20, bottom: 60 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
              <XAxis
                dataKey="name"
                tick={{ fontSize: 11, fill: "#333" }}
                angle={0}
                textAnchor="middle"
                height={60}
                interval={0}
                width={80}
              />
              <YAxis
                label={{
                  value: "(%) راندمان",
                  angle: -90,
                  position: "insideLeft",
                  style: {
                    textAnchor: "middle",
                    fontSize: "12px",
                    fill: "#333",
                  },
                }}
                tick={{ fontSize: 12, fill: "#333" }}
                domain={[0, 80]}
              />
              <Tooltip
                formatter={(value: any, name: any) => [
                  `${value}%`,
                  "Efficiency",
                ]}
                labelFormatter={(label: any) => `${label}`}
                contentStyle={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  fontSize: "12px",
                }}
              />
              <Bar
                dataKey="efficiency"
                radius={[4, 4, 0, 0]}
                stroke="#fff"
                strokeWidth={1}
              />
            </BarChart>
          </ResponsiveContainer>
        );

      case "pressure":
        return (
          <ResponsiveContainer width="100%" height={450}>
            <AreaChart
              data={pressureCurveData}
              margin={{ top: 40, right: 30, left: 20, bottom: 100 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
              <XAxis
                dataKey="name"
                tick={{ fontSize: 12, fill: "#333" }}
                angle={0}
                textAnchor="middle"
                height={80}
                interval={0}
              />
              <YAxis
                label={{
                  value: "(psi) حداکثر فشار ورودی",
                  angle: -90,
                  position: "insideLeft",
                  style: {
                    textAnchor: "middle",
                    fontSize: "12px",
                    fill: "#333",
                  },
                }}
                tick={{ fontSize: 12, fill: "#333" }}
                domain={[0, 400]}
              />
              <Tooltip
                formatter={(value: any, name: any) => [
                  `${value} psi`,
                  "حداکثر فشار ورودی",
                ]}
                labelFormatter={(label: any) => label}
                contentStyle={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  fontSize: "12px",
                }}
              />
              <Area
                type="monotone"
                dataKey="pressure"
                stroke="#8B5FBF"
                strokeWidth={3}
                fill="url(#colorGradient)"
                dot={{ fill: "#8B5FBF", strokeWidth: 2, r: 5 }}
                activeDot={{
                  r: 6,
                  stroke: "#8B5FBF",
                  strokeWidth: 2,
                  fill: "#fff",
                }}
              />
              <defs>
                <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8B5FBF" stopOpacity={0.7} />
                  <stop offset="95%" stopColor="#8B5FBF" stopOpacity={0.2} />
                </linearGradient>
              </defs>
            </AreaChart>
          </ResponsiveContainer>
        );

      case "pressureBar":
        return (
          <ResponsiveContainer width="100%" height={500}>
            <BarChart
              data={pressureData}
              margin={{ top: 40, right: 30, left: 20, bottom: 60 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
              <XAxis
                dataKey="name"
                tick={{ fontSize: 11, fill: "#333" }}
                angle={0}
                textAnchor="middle"
                height={60}
                interval={0}
                width={80}
              />
              <YAxis
                label={{
                  value: "Max Pressure (psi)",
                  angle: -90,
                  position: "insideLeft",
                  style: {
                    textAnchor: "middle",
                    fontSize: "12px",
                    fill: "#333",
                  },
                }}
                tick={{ fontSize: 12, fill: "#333" }}
                domain={[0, 350]}
              />
              <Tooltip
                formatter={(value: any, name: any) => [
                  `${value} psi`,
                  "Max Pressure",
                ]}
                labelFormatter={(label: any) => `${label}`}
                contentStyle={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  fontSize: "12px",
                }}
              />
              <Bar
                dataKey="pressure"
                radius={[4, 4, 0, 0]}
                stroke="#fff"
                strokeWidth={1}
              />
            </BarChart>
          </ResponsiveContainer>
        );

      case "comparison":
        return (
          <ResponsiveContainer width="100%" height={450}>
            <ScatterChart margin={{ top: 40, right: 30, left: 40, bottom: 80 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
              <XAxis
                dataKey="price"
                type="number"
                domain={["dataMin", "dataMax"]}
                label={{
                  value: "Price (USD)",
                  position: "insideBottom",
                  offset: -10,
                  style: {
                    textAnchor: "middle",
                    fontSize: "12px",
                    fill: "#333",
                  },
                }}
                tick={{ fontSize: 12, fill: "#333" }}
              />
              <YAxis
                dataKey="efficiency"
                type="number"
                label={{
                  value: "Efficiency (%)",
                  angle: -90,
                  position: "insideLeft",
                  style: {
                    textAnchor: "middle",
                    fontSize: "12px",
                    fill: "#333",
                  },
                }}
                tick={{ fontSize: 12, fill: "#333" }}
                domain={[0, 80]}
              />
              <Tooltip
                formatter={(value: any, name: any, props: any) => {
                  if (name === "efficiency")
                    return [`${value}%`, "Efficiency"];
                  if (name === "price")
                    return [`${value}`, "Price"];
                  return [value, name];
                }}
                labelFormatter={() => ""}
                content={({ active, payload }: any) => {
                  if (active && payload && payload.length) {
                    const data = payload[0].payload;
                    return (
                      <div className="bg-white p-3 border rounded-lg shadow-lg">
                        <p className="font-semibold text-gray-800 mb-1">
                          {data.name}
                        </p>
                        <p className="text-sm text-gray-600">
                          Efficiency: {data.efficiency}%
                        </p>
                        <p className="text-sm text-gray-600">
                          Price: ${data.price}
                        </p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Scatter data={priceEfficiencyData} fill="#8B5FBF" />
            </ScatterChart>
          </ResponsiveContainer>
        );

      default:
        return null;
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white min-h-screen font-['Arial',sans-serif]">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Pressure Reducing Valves Analysis & Comparison
      </h1>

      {/* Main table */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="px-3 py-3 text-left">Valve Model</th>
                <th className="px-3 py-3 text-center">Mechanism</th>
                <th className="px-3 py-3 text-center">Body Material</th>
                <th className="px-3 py-3 text-center">
                  Max Inlet Pressure (psi / bar)
                </th>
                <th className="px-3 py-3 text-center">Output Pressure (Adjustment Method)</th>
                <th className="px-3 py-3 text-center">Pressure Reduction Efficiency (%)</th>
                <th className="px-3 py-3 text-center">Standard Deviation (Stability)</th>
                <th className="px-3 py-3 text-center">Approximate Price (USD)</th>
                <th className="px-3 py-3 text-center">
                  Operating Range + Application Level
                </th>
              </tr>
            </thead>
            <tbody>
              {prvData.map((item: PRVData, index: number) => (
                <tr
                  key={item.id}
                  className={`${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } hover:bg-gray-100 transition-colors text-xs`}
                >
                  <td
                    className="px-3 py-3 border-l-4"
                    style={{ borderColor: item.color }}
                  >
                    <div className="font-medium text-gray-900">
                      {item.model}
                    </div>
                  </td>
                  <td className="px-3 py-3 text-center text-gray-700">
                    {item.mechanism}
                  </td>
                  <td className="px-3 py-3 text-center text-gray-700">
                    {item.material}
                  </td>
                  <td className="px-3 py-3 text-center">
                    <div className="text-gray-900 font-medium">
                      {item.maxPressureRange}
                    </div>
                  </td>
                  <td className="px-3 py-3 text-center text-gray-700 text-xs">
                    {item.outputPressure}
                  </td>
                  <td className="px-3 py-3 text-center">
                    <span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded font-medium text-xs">
                      {item.efficiencyMin}–{item.efficiencyMax}%
                    </span>
                  </td>
                  <td className="px-3 py-3 text-center text-gray-700 text-xs">
                    {item.stabilityText}
                  </td>
                  <td className="px-3 py-3 text-center">
                    <span className="text-green-600 font-medium text-xs">
                      ${item.priceMin}–${item.priceMax}
                    </span>
                  </td>
                  <td className="px-3 py-3 text-center text-gray-700 text-xs">
                    {item.application}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Chart controls */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Comparative Charts
        </h2>

        <div className="flex flex-wrap gap-4 mb-6">
          <button
            onClick={() => setSelectedChart("efficiency")}
            className={`px-6 py-2 rounded-lg transition-colors ${
              selectedChart === "efficiency"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Efficiency Comparison
          </button>
          <button
            onClick={() => setSelectedChart("pressure")}
            className={`px-6 py-2 rounded-lg transition-colors ${
              selectedChart === "pressure"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Max Inlet Pressure Curve
          </button>
          <button
            onClick={() => setSelectedChart("pressureBar")}
            className={`px-6 py-2 rounded-lg transition-colors ${
              selectedChart === "pressureBar"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Pressure Bar Comparison
          </button>
          <button
            onClick={() => setSelectedChart("comparison")}
            className={`px-6 py-2 rounded-lg transition-colors ${
              selectedChart === "comparison"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Price-Efficiency Scatter Plot
          </button>
        </div>

        <div className="w-full overflow-hidden">
          {renderChart()}
        </div>
      </div>

      {/* Statistical summary */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-bold mb-4 text-gray-800">
            Highest Efficiency
          </h3>
          {prvData
            .sort((a, b) => b.efficiency - a.efficiency)
            .slice(0, 3)
            .map((item: PRVData, index: number) => (
              <div
                key={item.id}
                className="flex justify-between items-center py-3 border-b last:border-b-0"
              >
                <span className="text-sm font-medium text-gray-700">
                  {item.model}
                </span>
                <span className="font-bold text-green-600 text-sm">
                  {item.efficiencyMin}–{item.efficiencyMax}%
                </span>
              </div>
            ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-bold mb-4 text-gray-800">
            Highest Pressure
          </h3>
          {prvData
            .sort((a, b) => b.maxPressure - a.maxPressure)
            .slice(0, 3)
            .map((item: PRVData, index: number) => (
              <div
                key={item.id}
                className="flex justify-between items-center py-3 border-b last:border-b-0"
              >
                <span className="text-sm font-medium text-gray-700">
                  {item.model}
                </span>
                <span className="font-bold text-blue-600 text-sm">
                  {item.maxPressure} psi
                </span>
              </div>
            ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-bold mb-4 text-gray-800">Best Price</h3>
          {prvData
            .sort((a, b) => a.price - b.price)
            .slice(0, 3)
            .map((item: PRVData, index: number) => (
              <div
                key={item.id}
                className="flex justify-between items-center py-3 border-b last:border-b-0"
              >
                <span className="text-sm font-medium text-gray-700">
                  {item.model}
                </span>
                <span className="font-bold text-green-600 text-sm">
                  ${item.priceMin}–${item.priceMax}
                </span>
              </div>
            ))}
        </div>
      </div>

      {/* Color guide */}
      <div className="bg-white rounded-lg shadow-lg p-6 mt-8">
        <h3 className="text-lg font-bold mb-4 text-gray-800">Color Guide</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {prvData.map((item: PRVData) => (
            <div key={item.id} className="flex items-center">
              <div
                className="w-4 h-4 rounded ml-3"
                style={{ backgroundColor: item.color }}
              ></div>
              <span className="text-sm text-gray-900 font-medium">{`Model ${item.id}: ${item.model}`}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PRVAnalysisDashboard;