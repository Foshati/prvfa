"use client";

export default function HistoryPage() {
  const historyData = [
    {
      id: 1,
      generation: "دهه ۱۸۸۰",
      summary: "معرفی نخستین شیرهای کاهشدهنده فشار مستقیمعملکننده توسط ویلیام فیشر با مکانیزم پیستونی و فنر، تأسیس شرکت فیشر، طراحی شیرهای بخار برای ناوگان دریایی توسط ویلیام بی میسون"
    },
    {
      id: 2,
      generation: "اوایل تا اواسط قرن بیستم",
      summary: "توسعه شیرهای دو مرحلهای پایلوتدار، معرفی شیرهای فولادی مقاوم توسط توماس نیلان، تحمل فشارهای بالا برای خطوط انتقال آب و نفت، افزایش ایمنی شبکههای صنعتی"
    },
    {
      id: 3,
      generation: "اواخر قرن بیستم",
      summary: "گسترش اتوماسیون با محرکهای دیافراگمی چندفنره، موقعیتدهندههای الکترونیکی، اتصال به سیستمهای SCADA، بهبود متریال بدنه با آلیاژها و پوششهای مقاوم"
    },
    {
      id: 4,
      generation: "قرن بیستویکم",
      summary: "شیرهای هوشمند با حسگرها و کنترلرهای الکترونیکی، قابلیت اتصال به اینترنت اشیا (IoT)، پایش و تنظیم از راه دور، الگوریتمهای پیشرفته کنترل، آلیاژهای بدون سرب"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white min-h-screen" dir="rtl">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        تاریخچه توسعه شیرهای فشارشکن
      </h1>

      {/* خلاصه متن */}
      <div className="bg-gray-50 rounded-lg p-6 mb-8">
        <p className="text-gray-700 leading-relaxed text-justify">
          شیرهای فشارشکن به عنوان یکی از اجزای کلیدی سیستمهای انتقال و توزیع سیالات، نقش مهمی در کنترل فشار، حفاظت از تجهیزات و افزایش کارایی شبکههای آب، نفت و بخار ایفا کردند. 
          با گسترش شبکههای آبرسانی و توسعه فناوریهای صنعتی در قرن نوزدهم، نیاز به ابزارهای خودکار و دقیق برای کنترل فشار سیالات به صورت پیوسته افزایش یافت. 
          از معرفی نخستین نمونههای شیرهای کاهشدهنده فشار در دهه ۱۸۸۰ تا شیرهای هوشمند امروزی با قابلیت اتصال به اینترنت اشیا، این تجهیزات تکامل قابل توجهی داشتهاند.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="px-4 py-4 text-center font-medium">دوران زمانی</th>
                <th className="px-4 py-4 text-center font-medium">خلاصه تحولات</th>
              </tr>
            </thead>
            <tbody>
              {historyData.map((item, index) => (
                <tr
                  key={item.id}
                  className={`${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } hover:bg-gray-100 transition-colors`}
                >
                  <td className="px-4 py-6 text-center">
                    <div className="font-medium text-gray-900 text-sm">
                      {item.generation}
                    </div>
                  </td>
                  <td className="px-4 py-6 text-right">
                    <div className="text-gray-700 text-sm leading-relaxed">
                      {item.summary}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}