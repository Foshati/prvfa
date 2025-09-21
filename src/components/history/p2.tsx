import React from 'react';

const ResearchTable = () => {
  const researches = [
    {
      id: 1,
      researchers: "سیگنورتی و همکاران",
      year: "2016",
      description: "انواع شیرهای فشارشکن با مکانیزم‌های داخلی متحرک مورد بررسی قرار گرفتند. این مکانیزم‌ها شامل ، فنری (همراه با دیافراگم یا پیستون) دیافراگمی و  پیستونی   بودند. نتایج نشان می‌دهد که طراحی و انتخاب نوع مکانیزم داخلی نقش مهمی در کارایی، دقت کنترل فشار و دامنه کاربرد این شیرها دارد.",
      category: "پیشینه کلی"
    },
    {
      id: 2,
      researchers: "فرارسه و مالاواسی ",
      year: "2022",
      description: "عملکرد شیرهای فشارشکن مستقیم، پایلوت‌دار و الکترونیکی در شرایط ناپایدار مورد مقایسه قرار دادند. نتایج نشان داد که شیرهای الکترونیکی در این شرایط عملکرد مطلوب‌تری دارند، در حالی‌که شیرهای پایلوت‌دار با تأخیر در پاسخگویی مواجه‌اند و شیرهای مستقیم نیز کمترین دقت را از خود نشان می‌دهند",
      category: "پیشینه کلی"
    },
    {
      id: 3,
      researchers: "تراپ و اور",
      year: "2019",
      description: "به برسی شیر های فشار شکن در ساختمان های بلند پرداختند و استفاده از شیر های فشار شکن برای ساختمان های بالای ۱۵-۲۰ طبقه ضروری عنوان کردند.",
      category: "مستقیم پیستونی"
    },
    {
      id: 4,
      researchers: "فو و همکاران",
      year: "2024",
      description: "با بررسی شیر های فشار شکن با ذرات معلق(شن) به این نتیجه رسیدند که افزایش غلظت ذرات باعث تجمع در گلوگاه و کاهش عملکرد و خرابی شیر فشارشکن می شود که بهتر است از فیلتر استفاده شود.",
      category: "مستقیم پیستونی"
    },
    {
      id: 5,
      researchers: "ما و همکاران",
      year: "2024",
      description: "رفتار آکوستیکی شیرهای فشارشکن مورد تحلیل قرار دادند. نتایج نشان داد که بخش مخروط گلوگاه بیشترین میزان تولید نویز را دارد و پس از آن، بدنه شیر و سپس دیواره منحرف‌کننده به‌ترتیب سهم بیشتری در ایجاد نویز دارند.",
      category: "مستقیم پیستونی"
    },
    {
      id: 6,
      researchers: "اولسون",
      year: "2013",
      description:"با طراحی بهینه نسل جدید مکانیزم دیافراگمی شیر فشارشکن به شکل دایره، عملکرد شیرها بهبود یافته و میزان خرابی آن‌ها کاهش یافته است.",
      category: "مستقیم دیافراگمی"
    },
    {
      id: 7,
      researchers: " یانگ و همکاران",
      year: "2025",
      description: "با بررسی عددی و اماری که انجام دادند استفاده از شیر های فشارشکن را گزینه ای کارامد برای شبکه های ابیاری و کشاورزی معرفی کردند.",
      category: "مستقیم دیافراگمی"
    },
    {
      id: 8,
      researchers: "سوزوکی و اوتارا",
      year: "2008",
      description: "در طراحی  شیرهای فشارشکن، با تعبیه دو گلوگاه کوچک به‌صورت پشت‌سرهم، مسیر جریان محدود کردند تا فشار آب به‌صورت تدریجی و مرحله‌ای کاهش یابد؛ روشی که از بروز کاویتاسیون جلوگیری می‌کند.",
      category: "پایلوت‌دار داخلی"
    },
    {
      id: 9,
      researchers: "منی کانی و همکاران",
      year: "2016",
      description: "با برسی شیر های فشار شکن پایلوت دار داخلی به این نتیجه رسیدند که نوسانان فشاری کوتاه مدت بوده و به بالا دست منتقل نمی شود.",
      category: "پایلوت‌دار داخلی"
    },
    {
      id: 10,
      researchers: "پرسکات و اولانیکی",
      year: "2003",
      description: "برای توصیف عملکرد شیر های فشارشکن می توان از مدل رفتاری استفاده کرد که با روابط تجربی و مقادیر فشار ورودی و خروجی توصیف می شوند.",
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