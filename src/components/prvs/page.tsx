"use client"
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
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

const PRVAnalysisDashboard: React.FC = () => {
  const [selectedChart, setSelectedChart] = useState<string>("efficiency");

  const prvData: PRVData[] = [
    {
      id: 1,
      model: "PRV-SM2",
      mechanism: "مستقیم ساده",
      material: "UPVC/PVC",
      maxPressure: 116,
      maxPressureBar: 8,
      maxPressureRange: "72-116 / 5-8",
      outputPressure: "پیش تنظیم",
      efficiencyMin: 35,
      efficiencyMax: 70,
      efficiency: 52.5,
      stabilityText: "پایداری کم و متغیر",
      priceMin: 5,
      priceMax: 10,
      price: 7.5,
      application: "مصارف خانگی، سبک، غیر حساس، قسمت های آبیاری، باغ و باغچه",
      color: "#FF6B6B",
    },
    {
      id: 2,
      model: "PRV-AM2",
      mechanism: "مستقیم در پوشی",
      material: "UPVC/PVC",
      maxPressure: 116,
      maxPressureBar: 8,
      maxPressureRange: "72-116 / 5-8",
      outputPressure: "قابل تنظیم",
      efficiencyMin: 70,
      efficiencyMax: 55,
      efficiency: 62.5,
      stabilityText: "بسیار پایدار (<5psi)",
      priceMin: 10,
      priceMax: 20,
      price: 15,
      application: "خانگی، خطوط انتقال اصلی آب، مزارع و کشاورزی",
      color: "#4ECDC4",
    },
    {
      id: 3,
      model: "PRV-AM2+",
      mechanism: "مستقیم در پوشی بهبود یافته",
      material: "UPVC فشار قوی",
      maxPressure: 232,
      maxPressureBar: 16,
      maxPressureRange: "232 / 16",
      outputPressure: "قابل تنظیم",
      efficiencyMin: 75,
      efficiencyMax: 60,
      efficiency: 67.5,
      stabilityText: "بسیار پایدار",
      priceMin: 25,
      priceMax: 40,
      price: 32.5,
      application: "صنعتی سبک، شبکه های اصلی، مسکونی، شبکه های توزیع آب، مزارع و کشاورزی",
      color: "#45B7D1",
    },
    {
      id: 4,
      model: "Watts LF25AUB-Z3",
      mechanism: "دیافراگم مستقیم",
      material: "آلیاژ مس سیلیکون بدون سرب",
      maxPressure: 300,
      maxPressureBar: 20.7,
      maxPressureRange: "300 / 20.7",
      outputPressure: "قابل تنظیم",
      efficiencyMin: 70,
      efficiencyMax: 45,
      efficiency: 57.5,
      stabilityText: "پایدار",
      priceMin: 150,
      priceMax: 250,
      price: 200,
      application: "تأسیسات آب بهداشتی و ساختمانی، سیستم های گرمایشی و سرمایشی",
      color: "#96CEB4",
    },
    {
      id: 5,
      model: "Apollo 3610401 – 35 Series",
      mechanism: "پیستون مستقیم",
      material: "برنز (Bronze)",
      maxPressure: 300,
      maxPressureBar: 20.7,
      maxPressureRange: "300 / 20.7",
      outputPressure: "قابل تنظیم",
      efficiencyMin: 70,
      efficiencyMax: 40,
      efficiency: 55,
      stabilityText: "پایدار",
      priceMin: 300,
      priceMax: 400,
      price: 350,
      application: "صنعتی، شهری، خطوط توزیع آب و حفاظت تجهیزات ساختمان",
      color: "#FECA57",
    },
    {
      id: 6,
      model: "GF Type 582 - 1″ PVCsocket (EPDM)",
      mechanism: "دیافراگم مستقیم",
      material: "PVC-U+ EPDM",
      maxPressure: 218,
      maxPressureBar: 15,
      maxPressureRange: "150-218 / 10-15",
      outputPressure: "قابل تنظیم",
      efficiencyMin: 60,
      efficiencyMax: 50,
      efficiency: 55,
      stabilityText: "بسیار پایدار",
      priceMin: 800,
      priceMax: 1500,
      price: 1150,
      application: "آزمایشگاهی، صنعتی سبک، فرآیندهای شیمیایی آب خالص و نیمه رسانا",
      color: "#FF9FF3",
    },
    {
      id: 7,
      model: "NeoFlow PRV (GF)",
      mechanism: "پایلوت در خارجی",
      material: "POM-C مترءیال پلیمری GF",
      maxPressure: 232,
      maxPressureBar: 16,
      maxPressureRange: "232 / 16",
      outputPressure: "قابل تنظیم (پایلوتی)",
      efficiencyMin: 70,
      efficiencyMax: 55,
      efficiency: 62.5,
      stabilityText: "بسیار پایدار",
      priceMin: 1000,
      priceMax: 2000,
      price: 1500,
      application: "صنعتی بزرگ، شبکه های توزیع شهری، خطوط توزیع آب، مدیریت فشار",
      color: "#54A0FF",
    },
  ];

  const getShortName = (fullName: string): string => {
    if (fullName.includes("PRV-SM2")) return "PRV-SM2";
    if (fullName.includes("PRV-AM2+")) return "PRV-AM2+";
    if (fullName.includes("PRV-AM2")) return "PRV-AM2";
    if (fullName.includes("Watts")) return "Watts LF25AUB";
    if (fullName.includes("Apollo")) return "Apollo 35 Series";
    if (fullName.includes("GF Type")) return "GF Type 582";
    if (fullName.includes("NeoFlow")) return "NeoFlow PRV";
    return fullName;
  };

  const efficiencyData = prvData.map((item) => ({
    name: getShortName(item.model),
    efficiency: item.efficiency,
    efficiencyMin: item.efficiencyMin,
    efficiencyMax: item.efficiencyMax,
    fill: item.color,
  }));

  const pressureData = prvData.map((item) => ({
    name: getShortName(item.model),
    pressure: item.maxPressure,
    fill: item.color,
  }));

  const priceEfficiencyData = prvData.map((item) => ({
    price: item.price,
    efficiency: item.efficiency,
    name: `مدل ${item.id}`,
    fill: item.color,
  }));

  const pressureCurveData = prvData.map((item) => ({
    name: getShortName(item.model),
    pressure: item.maxPressure,
  }));

  const renderChart = () => {
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
                height={80}
                interval={0}
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
                formatter={(value: any) => [`${value}%`, "راندمان"]}
                labelFormatter={(label: any) => `${label}`}
                contentStyle={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  fontSize: "12px",
                  direction: "rtl",
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
                height={100}
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
                formatter={(value: any) => [`${value} psi`, "حداکثر فشار ورودی"]}
                labelFormatter={(label: any) => label}
                contentStyle={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  fontSize: "12px",
                  direction: "rtl",
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
              margin={{ top: 40, right: 30, left: 20, bottom: 80 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
              <XAxis
                dataKey="name"
                tick={{ fontSize: 11, fill: "#333" }}
                height={80}
                interval={0}
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
                formatter={(value: any) => [`${value} psi`, "حداکثر فشار"]}
                labelFormatter={(label: any) => `${label}`}
                contentStyle={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  fontSize: "12px",
                  direction: "rtl",
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
                  value: "قیمت (دلار آمریکا)",
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
                content={({ active, payload }: any) => {
                  if (active && payload && payload.length) {
                    const data = payload[0].payload;
                    return (
                      <div className="bg-white p-3 border rounded-lg shadow-lg" style={{ direction: 'rtl' }}>
                        <p className="font-semibold text-gray-800 mb-1">
                          {data.name}
                        </p>
                        <p className="text-sm text-gray-600">
                          راندمان: {data.efficiency}%
                        </p>
                        <p className="text-sm text-gray-600">
                          قیمت: ${data.price}
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
    <div className="max-w-7xl mx-auto p-6 bg-gray-50 min-h-screen font-sans" style={{ direction: 'rtl' }}>
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        تحلیل و مقایسه شیرهای کاهنده فشار
      </h1>

      {/* Main table */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="px-3 py-3 text-right">مدل شیر</th>
                <th className="px-3 py-3 text-center">مکانیزم</th>
                <th className="px-3 py-3 text-center">جنس بدنه</th>
                <th className="px-3 py-3 text-center">
                  حداکثر فشار ورودی (Psi/bar)
                </th>
                <th className="px-3 py-3 text-center">
                  فشار خروجی<br/>(روش تنظیم)
                </th>
                <th className="px-3 py-3 text-center">
                  راندمان<br/>کاهش فشار (%)
                </th>
                <th className="px-3 py-3 text-center">
                  انحراف معیار<br/>(پایداری)
                </th>
                <th className="px-3 py-3 text-center">
                  قیمت تقریبی<br/>(USD)
                </th>
                <th className="px-3 py-3 text-center">
                  محدوده عملکرد + سطح کاربرد
                </th>
              </tr>
            </thead>
            <tbody>
              {prvData.map((item, index) => (
                <tr
                  key={item.id}
                  className={`${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } hover:bg-gray-100 transition-colors text-xs`}
                >
                  <td
                    className="px-3 py-3 border-r-4 font-medium text-gray-900"
                    style={{ borderColor: item.color }}
                  >
                    {item.model}
                  </td>
                  <td className="px-3 py-3 text-center text-gray-700">
                    {item.mechanism}
                  </td>
                  <td className="px-3 py-3 text-center text-gray-700">
                    {item.material}
                  </td>
                  <td className="px-3 py-3 text-center text-gray-900 font-medium">
                    {item.maxPressureRange}
                  </td>
                  <td className="px-3 py-3 text-center text-gray-700">
                    {item.outputPressure}
                  </td>
                  <td className="px-3 py-3 text-center">
                    <span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded font-medium">
                      {Math.min(item.efficiencyMin, item.efficiencyMax)}–{Math.max(item.efficiencyMin, item.efficiencyMax)}%
                    </span>
                  </td>
                  <td className="px-3 py-3 text-center text-gray-700">
                    {item.stabilityText}
                  </td>
                  <td className="px-3 py-3 text-center">
                    <span className="text-green-600 font-medium">
                      ${item.priceMin}–${item.priceMax}
                    </span>
                  </td>
                  <td className="px-3 py-3 text-center text-gray-700">
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
            مقایسه نواری فشار
          </button>
          <button
            onClick={() => setSelectedChart("comparison")}
            className={`px-6 py-2 rounded-lg transition-colors ${
              selectedChart === "comparison"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            نمودار پراکنش قیمت-راندمان
          </button>
        </div>

        <div className="w-full overflow-hidden bg-white p-4 rounded-lg">
          {renderChart()}
        </div>
      </div>

      {/* Statistical summary */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-bold mb-4 text-gray-800">
            بالاترین راندمان
          </h3>
          {prvData
            .sort((a, b) => b.efficiency - a.efficiency)
            .slice(0, 3)
            .map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center py-3 border-b last:border-b-0"
              >
                <span className="text-sm font-medium text-gray-700">
                  {item.model}
                </span>
                <span className="font-bold text-green-600 text-sm">
                  {Math.min(item.efficiencyMin, item.efficiencyMax)}–{Math.max(item.efficiencyMin, item.efficiencyMax)}%
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
            .map((item) => (
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
          <h3 className="text-lg font-bold mb-4 text-gray-800">بهترین قیمت</h3>
          {prvData
            .sort((a, b) => a.price - b.price)
            .slice(0, 3)
            .map((item) => (
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
        <h3 className="text-lg font-bold mb-4 text-gray-800">راهنمای رنگ‌ها</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {prvData.map((item) => (
            <div key={item.id} className="flex items-center">
              <div
                className="w-4 h-4 rounded ml-3"
                style={{ backgroundColor: item.color }}
              ></div>
              <span className="text-sm text-gray-900 font-medium">
                {item.model}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PRVAnalysisDashboard;