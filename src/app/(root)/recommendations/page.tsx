import React from 'react';
import { CheckCircle, Target, Wrench, Lightbulb } from 'lucide-react';

export default function PRVSummary() {
  const results = [
    { title: "مدل‌های منتخب ", desc: "PRV-SM2 (ساده، 31.58% کاهش فشار) و PRV-AM2 (پیشرفته، 66.20% کاهش فشار)" },
    { title: "مکانیزم مستقیم درپوشی", desc: "مکانیزم مهندسی سبک و مقرون‌به‌صرفه که مشکلات مکانیزم‌های پیستونی و دیافراگمی را ندارد و عملکرد پایدار و دقیق ارائه می‌دهد" },
    { title: "جنس بدنه و  اتصالات داخلی", desc: "PVC,UPVC برای اتصالات بدنه شیر فشار شکن و PPR برای اتصالات داخلی شیر فشار شکن استفاده شد." },
    { title: "چسب‌های فشارقوی", desc: "تارگت، پاتکس و REINZOSIL با کارایی عالی در آب‌بندی" },
    { title: "تیوب‌های لاستیکی", desc: "کاهش شوک هیدرولیکی و ضربه قوچ" },
    { title: "اتصالات رزوه‌ای", desc: "افزایش مقاومت اتصالات داخلی در برابر فشارهای بالا" },
    { title: "طراحی چندمرحله‌ای", desc: " باعث کاهش فشار در چندین مرحله به صورت پله ای می شود که منجر به کاهش کاویتاسیون می شود" },
    { title: "فیلتر ورودی", desc: "افزایش طول عمر و جلوگیری از انسداد" },
    { title: "مسدود کننده و نشیمنگاه پلیمری ", desc: "  با استفاده از درپوش پایه بلند پلاستیکی و اورینگ و تبدیل ۶۳ به ۳۲ هم مرکز پلیکا به خوبی عملکرد نشیمنگاه و مسدود کننده ایجاد شد. " }
  ];

  const suggestions = [
    { title: "آزمایش در فشار های بالاتر", desc: "تست در فشار ۸-۱۰ بار برای گسترش کاربردها" },
    { title: "  استفاده از ابزار دقیق", desc: "استفاده از فلومتر و ترانسمیتر برای اندازه‌گیری دقیق دبی و فشار لحظه ای" },
    { title: "اتصالات قوی‌تر", desc: "UPVC استخری + چسب سه‌مرحله‌ای برای فشار ۱۶-۲۵ بار" },
    { title: "سیستم هوشمند", desc: "ادغام IoT و الگوریتم‌های هوشمند برای کنترل خودکار" },
    { title: "آزمایش محیطی", desc: "تست در دماهای -۱۰ تا +۵۰ درجه سانتی‌گراد" },
    { title: "طراحی ماژولار", desc: "امکان تعویض سریع قطعات برای تعمیر آسان" },
    { title: "آموزش کاربران", desc: "برنامه‌های آموزشی برای نصب و نگهداری صحیح" },
    { title: "استانداردسازی", desc: "تولید در سایزهای مختلف و استانداردهای ISO و ISIRI" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-6xl mx-auto">
  

        {/* Main Results */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <Target className="text-green-600 ml-3" size={28} />
            <h2 className="text-2xl font-bold text-gray-800">نتایج کلیدی و جمع بندی</h2>
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

     
        {/* Suggestions */}
        <div>
          <div className="flex items-center mb-6">
            <Lightbulb className="text-orange-600 ml-3" size={28} />
            <h2 className="text-2xl font-bold text-gray-800">پیشنهادها</h2>
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
              The End
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}