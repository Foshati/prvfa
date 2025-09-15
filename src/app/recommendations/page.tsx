import React from 'react';
import { CheckCircle, Target, Wrench, Lightbulb } from 'lucide-react';

export default function PRVSummary() {
  const results = [
    { title: "مدل‌های منتخب", desc: "PRV-SM2 (ساده، 31.58% کاهش فشار) و PRV-AM2 (پیشرفته، 66.20% کاهش فشار)" },
    { title: "مواد موفق", desc: "PVC و UPVC با مقاومت بالا در برابر خوردگی و وزن سبک" },
    { title: "چسب‌های فشارقوی", desc: "تارگت، پاتکس و REINZOSIL با کارایی عالی در آب‌بندی" },
    { title: "تیوب‌های لاستیکی", desc: "کاهش شوک هیدرولیکی و ضربه قوچ" },
    { title: "اتصالات رزوه‌ای", desc: "افزایش مقاومت در برابر فشارهای بالا" },
    { title: "طراحی چندمرحله‌ای", desc: "پایداری بالا و کاهش کاویتاسیون" },
    { title: "فیلتر ورودی", desc: "افزایش طول عمر و جلوگیری از انسداد" },
    { title: "اورینگ الاستومری", desc: "آب‌بندی کامل تا فشار ۶ بار" }
  ];

  const suggestions = [
    { title: "آزمایش فشار بالا", desc: "تست در فشار ۸-۱۰ بار برای کاربردهای صنعتی" },
    { title: "ابزار دقیق", desc: "استفاده از فلومتر و ترانسمیتر برای اندازه‌گیری دقیق" },
    { title: "اتصالات قوی‌تر", desc: "UPVC استخری + چسب سه‌مرحله‌ای برای فشار ۱۶-۲۵ بار" },
    { title: "سیستم هوشمند", desc: "ادغام IoT و الگوریتم‌های هوشمند برای کنترل خودکار" },
    { title: "آزمایش محیطی", desc: "تست در دماهای -۱۰ تا +۵۰ درجه سانتی‌گراد" },
    { title: "طراحی ماژولار", desc: "امکان تعویض سریع قطعات برای تعمیر آسان" },
    { title: "آموزش کاربران", desc: "برنامه‌های آموزشی برای نصب و نگهداری صحیح" },
    { title: "استانداردسازی", desc: "تولید در سایزهای مختلف طبق استانداردهای ISO و ISIRI" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            تحقیق شیر فشارشکن پلیمری
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            طراحی، ساخت و آزمایش شیر فشارشکن پلیمری برای کنترل فشار در شبکه‌های آبرسانی
          </p>
        </div>

        {/* Main Results */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <Target className="text-green-600 ml-3" size={28} />
            <h2 className="text-2xl font-bold text-gray-800">نتایج کلیدی تحقیق</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((result, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow">
                <div className="flex items-start">
                  <CheckCircle className="text-green-500 mt-1 ml-3 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">{result.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{result.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Performance Stats */}
        <div className="mb-12">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">عملکرد مدل‌های منتخب</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 rounded-lg p-6">
                  <h4 className="font-bold text-blue-800 mb-2">PRV-SM2 (ساده)</h4>
                  <div className="text-2xl font-bold text-blue-600 mb-1">31.58%</div>
                  <p className="text-sm text-gray-600">کاهش فشار</p>
                  <p className="text-xs text-gray-500 mt-2">انحراف معیار: ۳٫۶۳ psi</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-green-100 rounded-lg p-6">
                  <h4 className="font-bold text-green-800 mb-2">PRV-AM2 (پیشرفته)</h4>
                  <div className="text-2xl font-bold text-green-600 mb-1">66.20%</div>
                  <p className="text-sm text-gray-600">کاهش فشار</p>
                  <p className="text-xs text-gray-500 mt-2">انحراف معیار:  ۰٫۵ psi</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Suggestions */}
        <div>
          <div className="flex items-center mb-6">
            <Lightbulb className="text-orange-600 ml-3" size={28} />
            <h2 className="text-2xl font-bold text-gray-800">پیشنهادهای بهبود</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {suggestions.map((suggestion, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow border-r-4 border-orange-400">
                <div className="flex items-start">
                  <Wrench className="text-orange-500 mt-1 ml-3 flex-shrink-0" size={18} />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">{suggestion.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{suggestion.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <div className="bg-gray-100 rounded-lg p-6">
            <p className="text-gray-600">
              این تحقیق نشان داد که شیرهای فشارشکن پلیمری می‌توانند جایگزینی مقرون‌به‌صرفه و کارآمد 
              برای شیرهای فلزی سنتی باشند و با بهبودهای پیشنهادی، عملکرد بهتری خواهند داشت.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}