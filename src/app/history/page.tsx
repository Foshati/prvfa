"use client";

export default function HistoryPage() {
  const historyData = [
    {
      id: 1,
      generation: "قرن نوزدهم - اواسط ۱۸۸۰",
      algorithms: "طراحی نخستین شیرهای کاهش‌دهنده فشار مستقیم‌عمل با مکانیزم پیستونی و فنر",
      features: "ویلیام فیشر شیرهای مستقیم‌عمل برای پمپ‌های بخار معرفی کرد، ویلیام میسون شیرهای کاهنده فشار را برای سیستم‌های گرمایش بخار و ناوگان دریایی طراحی کرد"
    },
    {
      id: 2,
      generation: "اوایل تا اواسط قرن بیستم",
      algorithms: "توسعه شیرهای دو مرحله‌ای پایلوت‌دار و شیرهای فولادی مقاوم",
      features: "شیر پایلوت کوچک فشار خروجی را کنترل می‌کرد، توماس نیلان شیرهای فولادی مقاومی برای خطوط انتقال آب و نفت عرضه کرد"
    },
    {
      id: 3,
      generation: "اواخر قرن بیستم",
      algorithms: "معرفی محرک‌های دیافراگمی چندفنره و موقعیت‌دهنده‌های الکترونیکی",
      features: "امکان اتصال به سیستم‌های SCADA، بهبود متریال بدنه با آلیاژها و پوشش‌های مقاوم، کاهش خوردگی و نشتی"
    },
    {
      id: 4,
      generation: "قرن بیست‌ویکم",
      algorithms: "شیرهای هوشمند با حسگرها، کنترلرهای الکترونیکی و اینترنت اشیا (IoT)",
      features: "کنترل دقیق فشار از راه دور، استفاده از الگوریتم‌های پیشرفته، آلیاژهای بدون سرب و پوشش‌های ضدخوردگی"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white min-h-screen" dir="rtl">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        تاریخچه توسعه شیرهای فشارشکن
      </h1>
      
      <div className="mb-6 text-gray-700 leading-relaxed text-justify bg-gray-50 p-6 rounded-lg">
        <p className="mb-4">
          شیرهای فشارشکن به‌عنوان یکی از اجزای کلیدی سیستم‌های انتقال و توزیع سیالات، 
          نقش مهمی در کنترل فشار، حفاظت از تجهیزات و افزایش کارایی شبکه‌های آب، نفت و بخار ایفا کرده‌اند.
        </p>
        <p>
          با گسترش شبکه‌های آبرسانی و توسعه فناوری‌های صنعتی در قرن نوزدهم، 
          نیاز به ابزارهای خودکار و دقیق برای کنترل فشار سیالات به صورت پیوسته افزایش یافت.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="px-4 py-4 text-center font-medium">دوران زمانی</th>
                <th className="px-4 py-4 text-center font-medium">الگوریتم‌ها و تحولات اصلی</th>
                <th className="px-4 py-4 text-center font-medium">ویژگی‌ها و کاربردها</th>
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
                  <td className="px-4 py-6 text-center">
                    <div className="text-gray-700 text-sm leading-relaxed">
                      {item.algorithms}
                    </div>
                  </td>
                  <td className="px-4 py-6 text-center">
                    <div className="text-gray-700 text-sm leading-relaxed">
                      {item.features}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-6 text-sm text-gray-600 bg-blue-50 p-4 rounded-lg">
        <h3 className="font-semibold mb-2">شخصیت‌های کلیدی:</h3>
        <ul className="space-y-1">
          <li><strong>ویلیام فیشر:</strong> بنیان‌گذار شرکت فیشر و طراح نخستین شیرهای کاهش‌دهنده فشار</li>
          <li><strong>ویلیام بی میسون:</strong> طراح شیرهای کاهنده فشار برای سیستم‌های گرمایش بخار</li>
          <li><strong>توماس نیلان:</strong> عرضه‌کننده شیرهای فولادی مقاومی از شرکت نیلان</li>
        </ul>
      </div>
    </div>
  );
}