"use client";
import React, { useEffect, useRef } from "react";
import { Chart, registerables, ChartConfiguration } from "chart.js";

// Register Chart.js components
Chart.register(...registerables);

// Type definitions
interface ValveTestData {
  test: number;
  pIn: number;
  pOut: number;
}

interface ProcessedValveData extends ValveTestData {
  pressureDrop: number;
  efficiency: string;
}

interface SummaryData {
  avgDrop: string;
  avgEfficiency: string;
  stdDev: string;
}

const ValveAnalysis: React.FC = () => {
  const efficiencyChartRef = useRef<HTMLCanvasElement | null>(null);
  const pressureDropChartRef = useRef<HTMLCanvasElement | null>(null);
  const efficiencyChartInstance = useRef<Chart | null>(null);
  const pressureDropChartInstance = useRef<Chart | null>(null);

  // داده‌های آزمایش
  const simpleValveData: ValveTestData[] = [
    { test: 1, pIn: 41, pOut: 29 },
    { test: 2, pIn: 59, pOut: 39 },
    { test: 3, pIn: 48, pOut: 33 },
    { test: 4, pIn: 47, pOut: 32 },
  ];

  const advancedValveData: ValveTestData[] = [
    { test: 1, pIn: 49, pOut: 16 },
    { test: 2, pIn: 46, pOut: 15 },
    { test: 3, pIn: 41, pOut: 15 },
    { test: 4, pIn: 45, pOut: 15 },
  ];

  // محاسبه پارامترها
  const calculateParameters = (data: ValveTestData[]): ProcessedValveData[] => {
    return data.map((item) => ({
      ...item,
      pressureDrop: item.pIn - item.pOut,
      efficiency: (((item.pIn - item.pOut) / item.pIn) * 100).toFixed(2),
    }));
  };

  // محاسبه انحراف معیار
  const calculateStdDev = (outputPressures: number[]): string => {
    const mean =
      outputPressures.reduce((a, b) => a + b, 0) / outputPressures.length;
    const variance =
      outputPressures.reduce(
        (sum, value) => sum + Math.pow(value - mean, 2),
        0
      ) / outputPressures.length;
    return Math.sqrt(variance).toFixed(2);
  };

  const simpleProcessed: ProcessedValveData[] =
    calculateParameters(simpleValveData);
  const advancedProcessed: ProcessedValveData[] =
    calculateParameters(advancedValveData);

  // محاسبه میانگین‌ها
  const calculateSummary = (processed: ProcessedValveData[]): SummaryData => {
    const avgDrop = (
      processed.reduce((sum, item) => sum + item.pressureDrop, 0) /
      processed.length
    ).toFixed(2);
    const avgEfficiency = (
      processed.reduce((sum, item) => sum + parseFloat(item.efficiency), 0) /
      processed.length
    ).toFixed(2);
    const stdDev = calculateStdDev(processed.map((item) => item.pOut));

    return { avgDrop, avgEfficiency, stdDev };
  };

  const simpleSummary = calculateSummary(simpleProcessed);
  const advancedSummary = calculateSummary(advancedProcessed);

  useEffect(() => {
    // Clean up existing charts
    if (efficiencyChartInstance.current) {
      efficiencyChartInstance.current.destroy();
    }
    if (pressureDropChartInstance.current) {
      pressureDropChartInstance.current.destroy();
    }

    // رسم نمودار راندمان
    const efficiencyCtx = efficiencyChartRef.current?.getContext("2d");

    if (efficiencyCtx) {
      const efficiencyConfig: ChartConfiguration = {
        type: "bar",
        data: {
          labels: ["آزمایش 1", "آزمایش 2", "آزمایش 3", "آزمایش 4"],
          datasets: [
            {
              label: "شیر فشارشکن پلیمری ساده",
              data: simpleProcessed.map((item) => parseFloat(item.efficiency)),
              backgroundColor: "rgba(46, 204, 113, 0.8)",
              borderColor: "rgba(39, 174, 96, 1)",
              borderWidth: 2,
            },
            {
              label: "شیر فشارشکن پلیمری پیشرفته",
              data: advancedProcessed.map((item) =>
                parseFloat(item.efficiency)
              ),
              backgroundColor: "rgba(52, 152, 219, 0.8)",
              borderColor: "rgba(41, 128, 185, 1)",
              borderWidth: 2,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: "مقایسه نسبت کاهش فشار (راندمان کنترل فشار)",
              font: { size: 16, family: "Tahoma" },
            },
            legend: {
              labels: { font: { family: "Tahoma" } },
            },
          },
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: "نسبت کاهش فشار (%)",
                font: { family: "Tahoma" },
              },
            },
            x: {
              title: {
                display: true,
                text: "شماره آزمایش",
                font: { family: "Tahoma" },
              },
            },
          },
        },
      };

      efficiencyChartInstance.current = new Chart(
        efficiencyCtx,
        efficiencyConfig
      );
    }

    // رسم نمودار افت فشار
    const pressureDropCtx = pressureDropChartRef.current?.getContext("2d");

    if (pressureDropCtx) {
      const pressureDropConfig: ChartConfiguration = {
        type: "line",
        data: {
          labels: ["آزمایش 1", "آزمایش 2", "آزمایش 3", "آزمایش 4"],
          datasets: [
            {
              label: "شیر فشارشکن پلیمری ساده",
              data: simpleProcessed.map((item) => item.pressureDrop),
              backgroundColor: "rgba(46, 204, 113, 0.3)",
              borderColor: "rgba(39, 174, 96, 1)",
              borderWidth: 3,
              fill: true,
              tension: 0.4,
            },
            {
              label: "شیر فشارشکن پلیمری پیشرفته",
              data: advancedProcessed.map((item) => item.pressureDrop),
              backgroundColor: "rgba(52, 152, 219, 0.3)",
              borderColor: "rgba(41, 128, 185, 1)",
              borderWidth: 3,
              fill: true,
              tension: 0.4,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: "مقایسه افت فشار",
              font: { size: 16, family: "Tahoma" },
            },
            legend: {
              labels: { font: { family: "Tahoma" } },
            },
          },
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: "افت فشار (psi)",
                font: { family: "Tahoma" },
              },
            },
            x: {
              title: {
                display: true,
                text: "شماره آزمایش",
                font: { family: "Tahoma" },
              },
            },
          },
        },
      };

      pressureDropChartInstance.current = new Chart(
        pressureDropCtx,
        pressureDropConfig
      );
    }

    // Clean up charts on component unmount
    return () => {
      if (efficiencyChartInstance.current) {
        efficiencyChartInstance.current.destroy();
      }
      if (pressureDropChartInstance.current) {
        pressureDropChartInstance.current.destroy();
      }
    };
  }, [simpleProcessed, advancedProcessed]);

  // Render table rows for valve data
  const renderValveRows = (
    data: ProcessedValveData[],
    valveType: string,
    borderColor: string
  ) => {
    return data.map((item, index) => (
      <tr
        key={`${valveType}-${index}`}
        className={`${borderColor} bg-white hover:bg-blue-50 hover:scale-[1.01] transition-all duration-200 hover:shadow-md even:bg-gray-50`}
      >
        {index === 0 && (
          <td
            rowSpan={4}
            className="border border-gray-300 p-4 text-sm text-center font-bold text-slate-700 bg-white"
          >
            {valveType === "simple"
              ? "شیر فشارشکن پلیمری ساده"
              : "شیر فشارشکن پلیمری پیشرفته"}
          </td>
        )}
        <td className="border border-gray-300 p-4 text-sm text-center">
          {item.test}
        </td>
        <td className="border border-gray-300 p-4 text-sm text-center">
          {item.pIn}
        </td>
        <td className="border border-gray-300 p-4 text-sm text-center">
          {item.pOut}
        </td>
        <td className="border border-gray-300 p-4 text-sm text-center">
          {item.pressureDrop}
        </td>
        <td className="border border-gray-300 p-4 text-sm text-center">
          {item.efficiency}
        </td>
      </tr>
    ));
  };

  return (
    <div
      dir="rtl"
      className="font-['Tahoma',Arial,sans-serif] m-5 bg-gray-100 min-h-screen"
    >
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-center text-slate-700 mb-8 border-b-4 border-blue-500 pb-3 text-2xl font-bold">
          تحلیل عملکرد شیرهای فشارشکن پلیمری
        </h1>

        <h2 className="text-slate-600 my-6 border-r-4 border-blue-500 pr-3 text-xl">
          جدول نتایج آزمایش‌های انجام شده
        </h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200">
            <thead>
              <tr className="bg-gradient-to-br from-slate-700 to-slate-600 text-white">
                <th className="border border-gray-300 p-4 text-sm font-bold text-center">
                  نوع شیر
                </th>
                <th className="border border-gray-300 p-4 text-sm font-bold text-center">
                  آزمایش
                </th>
                <th className="border border-gray-300 p-4 text-sm font-bold text-center">
                  فشار ورودی (psi)
                </th>
                <th className="border border-gray-300 p-4 text-sm font-bold text-center">
                  فشار خروجی (psi)
                </th>
                <th className="border border-gray-300 p-4 text-sm font-bold text-center">
                  افت فشار (psi)
                </th>
                <th className="border border-gray-300 p-4 text-sm font-bold text-center">
                  نسبت کاهش فشار (%)
                </th>
              </tr>
            </thead>
            <tbody>
              {renderValveRows(
                simpleProcessed,
                "simple",
                "border-r-4 border-green-500"
              )}
              {renderValveRows(
                advancedProcessed,
                "advanced",
                "border-r-4 border-blue-500"
              )}
            </tbody>
          </table>
        </div>

        <h2 className="text-slate-600 my-6 border-r-4 border-blue-500 pr-3 text-xl">
          جدول خلاصه نتایج
        </h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200">
            <thead>
              <tr className="bg-gradient-to-br from-slate-700 to-slate-600 text-white">
                <th className="border border-gray-300 p-4 text-sm font-bold text-center">
                  نوع شیر
                </th>
                <th className="border border-gray-300 p-4 text-sm font-bold text-center">
                  میانگین افت فشار (psi)
                </th>
                <th className="border border-gray-300 p-4 text-sm font-bold text-center">
                  میانگین نسبت کاهش فشار (%)
                </th>
                <th className="border border-gray-300 p-4 text-sm font-bold text-center">
                  انحراف معیار فشار خروجی (psi)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-r-4 border-green-500 bg-white hover:bg-blue-50 transition-all duration-200">
                <td className="border border-gray-300 p-4 text-sm text-center font-bold text-slate-700">
                  شیر فشارشکن پلیمری ساده
                </td>
                <td className="border border-gray-300 p-4 text-sm text-center">
                  {simpleSummary.avgDrop}
                </td>
                <td className="border border-gray-300 p-4 text-sm text-center">
                  {simpleSummary.avgEfficiency}
                </td>
                <td className="border border-gray-300 p-4 text-sm text-center">
                  {simpleSummary.stdDev}
                </td>
              </tr>
              <tr className="border-r-4 border-blue-500 bg-gray-50 hover:bg-blue-50 transition-all duration-200">
                <td className="border border-gray-300 p-4 text-sm text-center font-bold text-slate-700">
                  شیر فشارشکن پلیمری پیشرفته
                </td>
                <td className="border border-gray-300 p-4 text-sm text-center">
                  {advancedSummary.avgDrop}
                </td>
                <td className="border border-gray-300 p-4 text-sm text-center">
                  {advancedSummary.avgEfficiency}
                </td>
                <td className="border border-gray-300 p-4 text-sm text-center">
                  {advancedSummary.stdDev}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="my-8 bg-white p-5 rounded-lg shadow-md">
          <h2 className="text-slate-600 mb-4 border-r-4 border-blue-500 pr-3 text-xl">
            نمودار مقایسه نسبت کاهش فشار (راندمان کنترل فشار)
          </h2>
          <canvas ref={efficiencyChartRef} className="w-full h-80"></canvas>
        </div>

        <div className="my-8 bg-white p-5 rounded-lg shadow-md">
          <h2 className="text-slate-600 mb-4 border-r-4 border-blue-500 pr-3 text-xl">
            نمودار مقایسه افت فشار
          </h2>
          <canvas ref={pressureDropChartRef} className="w-full h-80"></canvas>
        </div>

        <div className="bg-gray-100 p-5 my-5 rounded-lg border-r-4 border-red-500">
          <h2 className="text-slate-600 mb-4 text-xl">
            نمونه محاسبه - آزمایش اول شیر فشارشکن پیشرفته
          </h2>
          <p className="font-bold mb-2">داده‌های ورودی:</p>
          <ul className="list-disc mr-5 mb-4">
            <li>فشار ورودی: 49 psi</li>
            <li>فشار خروجی: 16 psi</li>
          </ul>

          <p className="font-bold mb-2">محاسبات:</p>

          <p className="mb-2">1. افت فشار:</p>
          <div className="bg-white p-4 my-2 rounded border border-gray-300 font-mono text-center">
            Pressure Drop = P_in - P_out = 49 - 16 = 33 psi
          </div>

          <p className="mb-2">2. نسبت کاهش فشار (راندمان کنترل فشار):</p>
          <div className="bg-white p-4 my-2 rounded border border-gray-300 font-mono text-center">
            Efficiency = ((P_in - P_out) / P_in) × 100 = ((49 - 16) / 49) × 100
            = 67.35%
          </div>

          <p className="mb-2">
            3. انحراف معیار فشار خروجی (برای کل آزمایش‌های شیر پیشرفته):
          </p>
          <div className="bg-white p-4 my-2 rounded border border-gray-300 font-mono text-center">
            P̄ = (16 + 15 + 15 + 15) / 4 = 15.25 psi
            <br />σ = √[(1/4) × ((16-15.25)² + (15-15.25)² + (15-15.25)² +
            (15-15.25)²)] = √[(1/4) × (0.5625 + 0.0625 + 0.0625 + 0.0625)] =
            0.43 psi
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValveAnalysis;
