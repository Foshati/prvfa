import React from 'react';

const ResearchTable = () => {
  const researches = [
    {
      id: 1,
      researchers: "سیگنورتی و همکاران",
      year: "2016",
      description: "طراحی روش حاملی کار تشریحی در آمیزه فشار جداد، جرارت شیرهای فشارشکن با یک شیر ظاهری سفری بررسی گردید.",
      category: "پیشینه کلی"
    },
    {
      id: 2,
      researchers: "فرارا سی و مالاراسی",
      year: "2022",
      description: "عملکرد شیرهای مستقیم، پایلوت‌دار و الکترونیکی درشرایط نا پایدار خمکرد جهیده ضدنوریل خود رفتاری عملکرد نتوانست.",
      category: "پیشینه کلی"
    },
    {
      id: 3,
      researchers: "تراپ و اور",
      year: "2019",
      description: "بررسی شیرهای فشارشکن در ساختمان‌های بلند 15 - 20 طبقه با سیستم جریان",
      category: "مستقیم پیستونی"
    },
    {
      id: 4,
      researchers: "فو و همکاران",
      year: "2020",
      description: "بهیوت تئورستان تلوفلاستیک درئیت طیف تعیین، کردگین‌ها وسیع نمیدان تیل در کرده شود. نئوت نوین درفرد مفود کلانوله و حس مخروط سفری کاهش بررسی نکرده شن.",
      category: "مستقیم پیستونی"
    },
    {
      id: 5,
      researchers: "ما و همکاران",
      year: "2024",
      description: "بررسی منابع تولید نویز در سه پگاه شیر و درجات مخروط سفری 444 نوعردوش.",
      category: "مستقیم پیستونی"
    },
    {
      id: 6,
      researchers: "اولسون",
      year: "2013",
      description: "با طراحی بهینه دیافرام با طول عمر ضعیف درعمل شیرهای تشدیدگی شیرهای فشارشکن سپست.",
      category: "مستقیم دیافراگمی"
    },
    {
      id: 7,
      researchers: "یلدغ و میرزائین",
      year: "2025",
      description: "با تیوانیزم کلاس نوع بابرقیات کادهای پالحظه در جها ورود قیت و کتعمل درعمل شیرهای فشارشکن عملکرد پایدار فشار اندازه‌گیری از ویژگی نابعی گین مین پیش کرده درآورد.",
      category: "مستقیم دیافراگمی"
    },
    {
      id: 8,
      researchers: "سوزوکی و اوراتا",
      year: "2008",
      description: "با پایلوت کیری سریع فشارشکن بل درآن نیم دور نیز تا مسیر فشلان کی جریری کاذبان درگیری میتافیاری آمداد.",
      category: "پایلوت‌دار داخلی"
    },
    {
      id: 9,
      researchers: "منیکونی و همکاران",
      year: "2016",
      description: "عملکرد ویژگی شیرهای فشارشکن پایلوت‌دار حاصل وار حافص وناسات فشاری میابین پیدید نوسام کردید کیری میدان.",
      category: "پایلوت‌دار داخلی"
    },
    {
      id: 10,
      researchers: "پرسکات و اولانیکی",
      year: "2003",
      description: "عملکرد نماینگی لازمه‌ای مخاری نقیصه مل راهکار پور بفال میلیاست ها (با رویکرد تقریطی)",
      category: "پایلوت‌دار خارجی"
    }
  ];

  const getCategoryBorder = (category: string) => {
    switch (category) {
      case "پیشینه کلی":
        return "border-r-8 border-r-purple-500";
      case "مستقیم پیستونی":
        return "border-r-8 border-r-green-500";
      case "مستقیم دیافراگمی":
        return "border-r-8 border-r-blue-500";
      case "پایلوت‌دار داخلی":
        return "border-r-8 border-r-orange-500";
      case "پایلوت‌دار خارجی":
        return "border-r-8 border-r-red-500";
      default:
        return "";
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">
          پیشینه تحقیقات شیرهای فشارشکن
        </h1>
        <p className="text-lg text-gray-600">
          خلاصه مطالعات انجام شده در زمینه انواع شیرهای فشارشکن
        </p>
      </div>

      {/* Main Table */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
        <table className="w-full border-collapse">
          {/* Table Header */}
          <thead>
            <tr className="bg-slate-700">
              <th className="border border-slate-600 px-4 py-4 text-white text-center font-semibold text-sm w-16">
                ردیف
              </th>
              <th className="border border-slate-600 px-4 py-4 text-white text-center font-semibold text-sm w-48">
                محققان
              </th>
              <th className="border border-slate-600 px-4 py-4 text-white text-center font-semibold text-sm w-20">
                سال
              </th>
              <th className="border border-slate-600 px-4 py-4 text-white text-center font-semibold text-sm">
                کار انجام شده و نتایج
              </th>
            </tr>
          </thead>
          
          {/* Table Body */}
          <tbody>
            {researches.map((research, index) => (
              <tr 
                key={research.id} 
                className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-gray-100 transition-colors ${getCategoryBorder(research.category)}`}
              >
                <td className="border border-gray-300 px-3 py-4 text-center text-sm font-medium text-slate-700">
                  {research.id}
                </td>
                <td className="border border-gray-300 px-4 py-4 text-right text-sm text-slate-800 font-medium">
                  {research.researchers}
                </td>
                <td className="border border-gray-300 px-3 py-4 text-center text-sm font-semibold text-blue-700">
                  {research.year}
                </td>
                <td className="border border-gray-300 px-4 py-4 text-right text-sm text-slate-600 leading-relaxed">
                  {research.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Legend Section */}
      <div className="mt-8 bg-white rounded-lg shadow-lg p-6 border border-gray-200">
        <h3 className="text-xl font-bold text-slate-800 mb-6 text-center">
          راهنمای رنگ‌بندی دسته‌های تحقیقاتی
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg border border-purple-200">
            <div className="w-6 h-6 bg-purple-500 rounded"></div>
            <div className="text-right">
              <div className="font-semibold text-slate-800 text-sm">پیشینه کلی</div>
              <div className="text-xs text-gray-600">(ردیف 1-3)</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
            <div className="w-6 h-6 bg-green-500 rounded"></div>
            <div className="text-right">
              <div className="font-semibold text-slate-800 text-sm">مستقیم پیستونی</div>
              <div className="text-xs text-gray-600">(ردیف 4-6)</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
            <div className="w-6 h-6 bg-blue-500 rounded"></div>
            <div className="text-right">
              <div className="font-semibold text-slate-800 text-sm">مستقیم دیافراگمی</div>
              <div className="text-xs text-gray-600">(ردیف 7-9)</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg border border-orange-200">
            <div className="w-6 h-6 bg-orange-500 rounded"></div>
            <div className="text-right">
              <div className="font-semibold text-slate-800 text-sm">پایلوت‌دار داخلی</div>
              <div className="text-xs text-gray-600">(ردیف 10-12)</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg border border-red-200">
            <div className="w-6 h-6 bg-red-500 rounded"></div>
            <div className="text-right">
              <div className="font-semibold text-slate-800 text-sm">پایلوت‌دار خارجی</div>
              <div className="text-xs text-gray-600">(ردیف 13-15)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchTable;