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
      model: "شیر فشارشکن پلیمری ساده",
      mechanism: "مستقیم ساده",
      material: "PVC / UPVC",
      maxPressure: 116,
      maxPressureBar: 8,
      maxPressureRange: "۵-۸ / ۷۲-۱۱۶",
      outputPressure: "پیش تنظیم (بدون پیچ تنظیم)",
      efficiencyMin: 20,
      efficiencyMax: 35,
      efficiency: 27.5,
      stabilityText: "پایداری کم و متغیر",
      priceMin: 5,
      priceMax: 10,
      price: 7.5,
      application: "مصارف خانگی سبک غیر حساس — قسمت‌های آبیاری باغ و باغچه",
      color: "#FF6B6B",
    },
    {
      id: 2,
      model: "شیر فشارشکن پلیمری پیشرفته",
      mechanism: "مستقیم درپوش",
      material: "PVC / UPVC",
      maxPressure: 116,
      maxPressureBar: 8,
      maxPressureRange: "۵-۸ / ۷۲-۱۱۶",
      outputPressure: "قابل تنظیم",
      efficiencyMin: 55,
      efficiencyMax: 70,
      efficiency: 62.5,
      stabilityText: "بسیار پایدار (<۰.۵ psi)",
      priceMin: 10,
      priceMax: 20,
      price: 15,
      application: "خانگی، نیمه‌تجاری، مزارع",
      color: "#4ECDC4",
    },
    {
      id: 3,
      model: "شیر فشارشکن پلیمری بهبودیافته",
      mechanism: "مستقیم درپوش",
      material: "UPVC فشار قوی",
      maxPressure: 232,
      maxPressureBar: 16,
      maxPressureRange: "۱۶ / ۲۳۲",
      outputPressure: "قابل تنظیم",
      efficiencyMin: 60,
      efficiencyMax: 75,
      efficiency: 67.5,
      stabilityText: "بسیار پایدار",
      priceMin: 25,
      priceMax: 40,
      price: 32.5,
      application:
        "صنعتی سبک، شبکه‌های اصلی، خانگی، شبکه‌های توزیع آب، مزارع و کشاورزی",
      color: "#45B7D1",
    },
    {
      id: 4,
      model: "Watts LF25AUB-Z3",
      mechanism: "مستقیم دیافراگمی",
      material: "آلیاژ مس سیلیکون بدون سرب",
      maxPressure: 300,
      maxPressureBar: 20.7,
      maxPressureRange: "۲۰.۷ / ۳۰۰",
      outputPressure: "قابل تنظیم",
      efficiencyMin: 45,
      efficiencyMax: 70,
      efficiency: 57.5,
      stabilityText: "پایدار",
      priceMin: 150,
      priceMax: 250,
      price: 200,
      application: "تاسیسات آب بهداشتی و ساختمانی، سیستم‌های گرمایشی و سرمایشی",
      color: "#96CEB4",
    },
    {
      id: 5,
      model: "Apollo™ 3610401 — 36 Series",
      mechanism: "مستقیم پیستونی",
      material: "برنز (Bronze)",
      maxPressure: 300,
      maxPressureBar: 20.7,
      maxPressureRange: "۲۰.۷ / ۳۰۰",
      outputPressure: "قابل تنظیم",
      efficiencyMin: 40,
      efficiencyMax: 70,
      efficiency: 55,
      stabilityText: "پایدار",
      priceMin: 300,
      priceMax: 400,
      price: 350,
      application: "صنعتی، شهری، خطوط توزیع آب اصلی و حفاظت تجهیزات ساختمانی",
      color: "#FECA57",
    },
    {
      id: 6,
      model: "GF Type 582 — 1″ PVC socket (EPDM)",
      mechanism: "مستقیم دیافراگمی",
      material: "PVC-U + EPDM",
      maxPressure: 218,
      maxPressureBar: 15,
      maxPressureRange: "-۱۰ / ۲۱۸-۱۵۰ ۱۵",
      outputPressure: "قابل تنظیم",
      efficiencyMin: 50,
      efficiencyMax: 60,
      efficiency: 55,
      stabilityText: "بسیار پایدار",
      priceMin: 800,
      priceMax: 1500,
      price: 1150,
      application:
        "آزمایشگاهی، صنعتی سبک، فرایندهای شیمیایی، آب‌خالص و نیمه‌رسانا",
      color: "#FF9FF3",
    },
    {
      id: 7,
      model: "NeoFlow PRV (GF)",
      mechanism: "پایلوت دار خارجی",
      material: "POM-C / متریال پلیمری GF",
      maxPressure: 232,
      maxPressureBar: 16,
      maxPressureRange: "۱۶ / ۲۳۲",
      outputPressure: "قابل تنظیم (پایلوتی)",
      efficiencyMin: 55,
      efficiencyMax: 70,
      efficiency: 62.5,
      stabilityText: "بسیار پایدار",
      priceMin: 1000,
      priceMax: 2000,
      price: 1500,
      application:
        "صنعتی بزرگ، شبکه‌های توزیع شهری، خطوط اصلی توزیع آب، مدیریت فشار شبکه",
      color: "#54A0FF",
    },
  ];

  const convertToFarsiNumbers = (num: number): string => {
    const farsiDigits: string[] = [
      "۰",
      "۱",
      "۲",
      "۳",
      "۴",
      "۵",
      "۶",
      "۷",
      "۸",
      "۹",
    ];
    return num.toString().replace(/[0-9]/g, (w) => farsiDigits[+w]);
  };

  const chartData: ChartData[] = prvData.map((item) => ({
    name: item.model.substring(0, 20) + "...",
    fullName: item.model,
    efficiency: item.efficiency,
    maxPressure: item.maxPressure,
    price: item.price,
    color: item.color,
  }));

  const getShortName = (fullName: string): string => {
    if (fullName.includes("پلیمری ساده")) return "پلیمری ساده";
    if (fullName.includes("پلیمری پیشرفته") && !fullName.includes("بهبود"))
      return "پلیمری پیشرفته";
    if (fullName.includes("پلیمری بهبودیافته")) return "پلیمری پیشرفته بهبودیافته";
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
    name: `مدل ${convertToFarsiNumbers(item.id)}`,
    fill: item.color,
  }));

  // داده‌های منحنی فشار
  const pressureCurveData: ChartData[] = [
    { name: "پلیمری ساده", pressure: 116 },
    { name: "پلیمری پیشرفته", pressure: 116 },
    { name: "پلیمری پیشرفته بهبودیافته", pressure: 232 },
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
                  value: "راندمان (%)",
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
                  `${convertToFarsiNumbers(value)}%`,
                  "راندمان",
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
                angle={-60}
                textAnchor="end"
                height={80}
                interval={0}
              />
              <YAxis
                label={{
                  value: "حداکثر فشار ورودی (psi)",
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
                  `${convertToFarsiNumbers(value)} psi`,
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
                  value: "حداکثر فشار (psi)",
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
                  `${convertToFarsiNumbers(value)} psi`,
                  "حداکثر فشار",
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
                  value: "قیمت (USD)",
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
                  value: "راندمان (%)",
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
                    return [`${convertToFarsiNumbers(value)}%`, "راندمان"];
                  if (name === "price")
                    return [`${convertToFarsiNumbers(value)}`, "قیمت"];
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
                          راندمان: {convertToFarsiNumbers(data.efficiency)}%
                        </p>
                        <p className="text-sm text-gray-600">
                          قیمت: {convertToFarsiNumbers(data.price)} دلار
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
    <div className="max-w-7xl mx-auto p-6 bg-white min-h-screen" dir="rtl">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        تحلیل و مقایسه شیرهای فشارشکن
      </h1>

      {/* جدول اصلی */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="px-3 py-3 text-right">مدل شیر</th>
                <th className="px-3 py-3 text-center">مکانیزم</th>
                <th className="px-3 py-3 text-center">جنس بدنه</th>
                <th className="px-3 py-3 text-center">
                  حداکثر فشار ورودی (psi / bar)
                </th>
                <th className="px-3 py-3 text-center">فشار خروجی</th>
                <th className="px-3 py-3 text-center">راندمان کاهش فشار (%)</th>
                <th className="px-3 py-3 text-center">انحراف / پایداری</th>
                <th className="px-3 py-3 text-center">قیمت تقریبی (USD)</th>
                <th className="px-3 py-3 text-center">
                  محدوده عملکرد + سطح کاربرد
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
                    className="px-3 py-3 border-r-4"
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
                      {convertToFarsiNumbers(item.efficiencyMin)}–
                      {convertToFarsiNumbers(item.efficiencyMax)}%
                    </span>
                  </td>
                  <td className="px-3 py-3 text-center text-gray-700 text-xs">
                    {item.stabilityText}
                  </td>
                  <td className="px-3 py-3 text-center">
                    <span className="text-green-600 font-medium text-xs">
                      {convertToFarsiNumbers(item.priceMin)}–
                      {convertToFarsiNumbers(item.priceMax)} دلار
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

      {/* کنترل‌های نمودار */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          نمودارهای مقایسه‌ای
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
            مقایسه راندمان
          </button>
          <button
            onClick={() => setSelectedChart("pressure")}
            className={`px-6 py-2 rounded-lg transition-colors ${
              selectedChart === "pressure"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            منحنی حداکثر فشار ورودی
          </button>
          <button
            onClick={() => setSelectedChart("pressureBar")}
            className={`px-6 py-2 rounded-lg transition-colors ${
              selectedChart === "pressureBar"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            مقایسه میله‌ای فشار
          </button>
          <button
            onClick={() => setSelectedChart("comparison")}
            className={`px-6 py-2 rounded-lg transition-colors ${
              selectedChart === "comparison"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            نمودار پراکندگی قیمت-راندمان
          </button>
        </div>

        <div className="w-full overflow-hidden">
          {renderChart()}
        </div>
      </div>

      {/* خلاصه آماری */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-bold mb-4 text-gray-800">
            بالاترین راندمان
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
                  {convertToFarsiNumbers(item.efficiencyMin)}–
                  {convertToFarsiNumbers(item.efficiencyMax)}%
                </span>
              </div>
            ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-bold mb-4 text-gray-800">
            بالاترین فشار
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
                  {convertToFarsiNumbers(item.maxPressure)} psi
                </span>
              </div>
            ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-bold mb-4 text-gray-800">بهترین قیمت</h3>
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
                  {convertToFarsiNumbers(item.priceMin)}–
                  {convertToFarsiNumbers(item.priceMax)} دلار
                </span>
              </div>
            ))}
        </div>
      </div>

      {/* راهنمای رنگ‌ها */}
      <div className="bg-white rounded-lg shadow-lg p-6 mt-8">
        <h3 className="text-lg font-bold mb-4 text-gray-800">راهنمای رنگ‌ها</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {prvData.map((item: PRVData) => (
            <div key={item.id} className="flex items-center">
              <div
                className="w-4 h-4 rounded mr-3"
                style={{ backgroundColor: item.color }}
              ></div>
              <span className="text-sm text-gray-900 font-medium">{`مدل ${convertToFarsiNumbers(
                item.id
              )}: ${item.model}`}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PRVAnalysisDashboard;
