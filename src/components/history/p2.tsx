import React from 'react';

const ResearchTable = () => {
  const researches = [
    // پیشینه تحقیقات انواع شیرهای فشارشکن (1-3)
    {
      id: 1,
      researchers: "Signoreti و همکاران",
      year: "2016",
      title: "بررسی نصب شیرهای فشارشکن در شبکه‌های توزیع آب",
      work: "طبقه‌بندی شیرهای فشارشکن به سه گروه فنری، پیستونی و دیافراگمی",
      results: "طراحی دقیق مکانیزم داخلی تأثیر مهمی در افزایش پایداری فشار دارد",
      application: "بهبود کنترل فشار و کاهش نشتی در شبکه‌های آبرسانی",
      category: "پیشینه کلی"
    },
    {
      id: 2,
      researchers: "García-Ávila و همکاران",
      year: "2019",
      title: "نقش کنترل فشار در کاهش تلفات واقعی شبکه‌ها",
      work: "مدل‌سازی هیدرولیکی و شبیه‌سازی سناریوهای مختلف نصب شیر",
      results: "تعیین محل مناسب و تنظیم صحیح فشار کاهش قابل توجه نشتی",
      application: "طراحی الگوی کاربردی برای شبکه‌های توزیع آب",
      category: "پیشینه کلی"
    },
    {
      id: 3,
      researchers: "Ferrarese و Malavasi",
      year: "2022",
      title: "بررسی آزمایشگاهی انواع شیرهای فشارشکن",
      work: "مقایسه عملکرد شیرهای مستقیم، پایلوت‌دار و الکترونیکی",
      results: "شیرهای الکترونیکی عملکرد بهتری در شرایط ناپایدار",
      application: "انتخاب نوع مناسب شیر بر اساس شرایط شبکه",
      category: "پیشینه کلی"
    },
    // شیرهای فشارشکن مستقیم پیستونی (4-6)
    {
      id: 4,
      researchers: "Trap و Orr",
      year: "2019",
      title: "شیرهای فشارشکن پیستونی در سیستم‌های آتش‌نشانی",
      work: "بررسی نقش شیرهای پیستونی در ساختمان‌های بلند",
      results: "استفاده از شیر در ساختمان‌های بالای 15-20 طبقه ضروری",
      application: "حفاظت و ایمنی در سیستم‌های آتش‌نشانی",
      category: "مستقیم پیستونی"
    },
    {
      id: 5,
      researchers: "Fu و همکاران",
      year: "2024",
      title: "رفتار هیدرولیکی شیر پیستونی با ذرات معلق",
      work: "شبیه‌سازی CFD جریان آب حاوی شن با غلظت‌های مختلف",
      results: "افزایش غلظت ذرات باعث تجمع در گلوگاه و کاهش عملکرد",
      application: "بهینه‌سازی طراحی گلوگاه و استفاده از فیلترها",
      category: "مستقیم پیستونی"
    },
    {
      id: 6,
      researchers: "Ma و همکاران",
      year: "2024",
      title: "تحلیل رفتار آکوستیک شیر پیستونی",
      work: "بررسی منابع تولید نویز در سه ناحیه اصلی شیر",
      results: "مخروط گلوگاه بیشترین سهم در تولید نویز را دارد",
      application: "کاهش آلودگی صوتی با بهبود طراحی گلوگاه",
      category: "مستقیم پیستونی"
    },
    // شیرهای فشارشکن مستقیم دیافراگمی (7-9)
    {
      id: 7,
      researchers: "Ohlsson",
      year: "2013",
      title: "محدودیت‌های طراحی شیرهای دیافراگمی",
      work: "بررسی مشکلات شیرهای سنتی در صنایع دارویی",
      results: "طراحی نسل جدید دیافراگم با عمر طولانی‌تر",
      application: "بهبود ایمنی و کیفیت در فرآیندهای دارویی",
      category: "مستقیم دیافراگمی"
    },
    {
      id: 8,
      researchers: "Wu و همکاران",
      year: "2015",
      title: "مدل‌سازی CFD شیر دیافراگمی مستقیم",
      work: "شبیه‌سازی عملکرد جریان و توزیع فشار روی دیافراگم",
      results: "بهینه‌سازی هندسه باعث 8% افزایش دقت تنظیم فشار",
      application: "طراحی بهینه شیرهای دیافراگمی",
      category: "مستقیم دیافراگمی"
    },
    {
      id: 9,
      researchers: "Yang و همکاران",
      year: "2025",
      title: "شیرهای دیافراگمی در شبکه‌های آبیاری",
      work: "مروری بر مزایای اقتصادی شیرهای دیافراگمی",
      results: "طراحی ساده‌تر، نگهداری راحت‌تر و هزینه کمتر",
      application: "کاربرد در پروژه‌های آبیاری و کشاورزی",
      category: "مستقیم دیافراگمی"
    },
    // شیرهای فشارشکن پایلوت‌دار داخلی (10-12)
    {
      id: 10,
      researchers: "Suzuki و Urata",
      year: "2008",
      title: "شیر پایلوت‌دار داخلی ضد کاویتاسیون",
      work: "طراحی دو گلوگاه پشت سرهم و استفاده از حسگر دقیق",
      results: "عملکرد پایدار تا فشار 14 بار بدون کاویتاسیون",
      application: "کاربرد در سیستم‌های فشار بالا",
      category: "پایلوت‌دار داخلی"
    },
    {
      id: 11,
      researchers: "Meniconi و همکاران",
      year: "2016",
      title: "مطالعه آزمایشگاهی شیر پایلوت‌دار داخلی",
      work: "بررسی قابلیت حفظ فشار و رفتار پایدار شیر",
      results: "نوسانات فشاری کوتاه‌مدت و عدم انتقال به بالادست",
      application: "کنترل پایدار فشار در شبکه‌های آبرسانی",
      category: "پایلوت‌دار داخلی"
    },
    {
      id: 12,
      researchers: "Mao و همکاران",
      year: "2017",
      title: "شیر پایلوت‌دار داخلی در محیط آب شور",
      work: "شبیه‌سازی رفتار استاتیکی و دینامیکی شیر",
      results: "زمان پاسخ کمتر از 0.2 ثانیه و نشتی بسیار کم",
      application: "سیستم‌های هیدرولیک دریایی و فشار بالا",
      category: "پایلوت‌دار داخلی"
    },
    // شیرهای فشارشکن پایلوت‌دار خارجی (13-15)
    {
      id: 13,
      researchers: "Prescott و Ulanicki",
      year: "2003",
      title: "مدل‌های دینامیکی شیرهای پایلوت‌دار خارجی",
      work: "ارائه چهار مدل مختلف برای توصیف رفتار شیر",
      results: "مدل‌های پدیده‌ای دقیق‌ترین، مدل‌های رفتاری عملی‌تر",
      application: "انتخاب مدل مناسب برای کاربردهای مختلف",
      category: "پایلوت‌دار خارجی"
    },
    {
      id: 14,
      researchers: "Marsili و همکاران",
      year: "2020",
      title: "شیر پایلوت‌دار خارجی با محرک پیستونی",
      work: "آزمایش عملکرد در جریان‌های کم",
      results: "مشکلات عملکردی در جریان‌های کمتر از 0.7 l/s",
      application: "توجه به محدودیت‌ها در جریان‌های کم",
      category: "پایلوت‌دار خارجی"
    },
    {
      id: 15,
      researchers: "Doghri و Duchesne",
      year: "2022",
      title: "مدهای کنترل فشار در شیرهای پایلوت‌دار خارجی",
      work: "بررسی سه مد ثابت، زمان‌بندی و بلادرنگ",
      results: "مد بلادرنگ کاهش نشتی اما محدودیت‌های مکانیکی",
      application: "طراحی شبکه‌های هوشمند آبرسانی",
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
    <div className="w-full max-w-7xl mx-auto p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">
          پیشینه تحقیقات شیرهای فشارشکن
        </h1>
        <p className="text-lg text-gray-600">
          خلاصه مطالعات انجام شده در زمینه انواع شیرهای فشارشکن و کاربردهای آنها
        </p>
      </div>

      {/* Main Table */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
        <table className="w-full border-collapse">
          {/* Table Header */}
          <thead>
            <tr className="bg-slate-700">
              <th className="border border-slate-600 px-4 py-4 text-white text-center font-semibold text-sm w-12">
                ردیف
              </th>
              <th className="border border-slate-600 px-4 py-4 text-white text-center font-semibold text-sm">
                محققان
              </th>
              <th className="border border-slate-600 px-4 py-4 text-white text-center font-semibold text-sm w-16">
                سال
              </th>
              <th className="border border-slate-600 px-4 py-4 text-white text-center font-semibold text-sm">
                موضوع تحقیق
              </th>
              <th className="border border-slate-600 px-4 py-4 text-white text-center font-semibold text-sm">
                کار انجام شده
              </th>
              <th className="border border-slate-600 px-4 py-4 text-white text-center font-semibold text-sm">
                نتایج
              </th>
              <th className="border border-slate-600 px-4 py-4 text-white text-center font-semibold text-sm">
                کاربرد
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
                <td className="border border-gray-300 px-3 py-3 text-center text-sm font-medium text-slate-700">
                  {research.id}
                </td>
                <td className="border border-gray-300 px-4 py-3 text-right text-sm text-slate-800 font-medium">
                  {research.researchers}
                </td>
                <td className="border border-gray-300 px-3 py-3 text-center text-sm font-semibold text-blue-700">
                  {research.year}
                </td>
                <td className="border border-gray-300 px-4 py-3 text-right text-sm text-slate-700 leading-relaxed">
                  {research.title}
                </td>
                <td className="border border-gray-300 px-4 py-3 text-right text-sm text-slate-600 leading-relaxed">
                  {research.work}
                </td>
                <td className="border border-gray-300 px-4 py-3 text-right text-sm text-slate-600 leading-relaxed">
                  {research.results}
                </td>
                <td className="border border-gray-300 px-4 py-3 text-right text-sm text-slate-600 leading-relaxed">
                  {research.application}
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
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
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

        {/* Summary Box */}
        <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
          <h4 className="text-lg font-bold text-slate-800 mb-4 text-center">
            خلاصه نتایج کلیدی
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-700">
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>شیرهای الکترونیکی برای کنترل دقیق و سریع مناسب‌ترند</div>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>شیرهای دیافراگمی ساده‌تر و اقتصادی‌تر از شیرهای پیستونی هستند</div>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>شیرهای پایلوت‌دار داخلی پایداری بهتری نسبت به خارجی دارند</div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>محل نصب و تنظیم دقیق فشار نقش کلیدی در عملکرد دارد</div>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>مواد پلیمری می‌توانند جایگزین مناسبی برای فلزات باشند</div>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>کنترل کاویتاسیون و آلودگی صوتی از چالش‌های مهم طراحی است</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchTable;