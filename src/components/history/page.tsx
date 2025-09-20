"use client";

import Image from 'next/image';

export default function HistoryPage() {
  const historyData = [
    {
      id: 1,
      generation: "اواخر قرن نوزدهم-۱۸۸۰ ",
      featuresAndAlgorithms: "ویلیام فیشر شیر های مستقیم عمل کننده را برای پمپ های بخار معرفی کرد و شرکت فیشر کنترل را در همان سال ها تاسیس کرد. هم زمان ویلیام میسون شیر های کاهنده فشار برای سیستم‌های گرمایش بخار و ناوگان دریایی طراحی کرد."
    },
    {
      id: 2,
      generation: "اوایل تا اواسط قرن بیستم",
      featuresAndAlgorithms:"توسعه‌ی شیرهای دو‌مرحله‌ای پایلوت‌دار با جنس فولادی، یکی از نوآوری‌های مهم در زمینه‌ی کنترل فشار محسوب می‌شود. شرکت فیشر کنترل از پیشگامان معرفی این نوع شیرها بوده است. همچنین توماس نیلان شیرهای فشارشکن برای کاربر خطوط انتقال اب و نفت عرضه کرد که نقش قابل‌توجهی در گسترش کاربرد این تجهیزات ایفا کرد."
    },
    {
      id: 3,
      generation: "اواخر قرن بیستم",
      featuresAndAlgorithms:"بهبود جنس بدنه و پوشش‌های ضد زنگ و امکان اتصال به سیستم‌های scada در شیر های فشار شکن"
    },
    {
      id: 4,
      generation: "قرن بیست‌ویکم",
      featuresAndAlgorithms: "شیرهای فشارشکن با قابلیت هوشمند و وصل شدن به کنترلر های الکترونیکی و اینترنت اشیا"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white min-h-screen" dir="rtl">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        تاریخچه توسعه شیرهای فشارشکن
      </h1>
               
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="px-4 py-4 text-center font-medium">دوران زمانی</th>
                <th className="px-4 py-4 text-center font-medium">ویژگی‌ها و تحولات اصلی</th>
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
                      {item.featuresAndAlgorithms}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Images Section */}
      <div className="grid md:grid-cols-2 gap-6 mt-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="relative h-64">
            <Image
              src="/img/history/image2.png"
              alt="تاریخچه شیرهای فشارشکن"
              fill
              className="object-contain"
            />
          </div>
          <div className="p-4 text-center">
            <p className="text-sm font-medium text-gray-700">شیر فشار شکن مدل PRV-Cla-Val 390-02 & 3690-02</p>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="relative h-64">
            <Image
              src="/img/history/image1.png"
              alt="تکامل شیرهای کنترل فشار"
              fill
              className="object-contain"
            />
          </div>
          <div className="p-4 text-center">
            <p className="text-sm font-medium text-gray-700">کنترلر الکترونیکی شیر فشارشکن Regulo PRV Electronic Controller</p>
          </div>
        </div>
      </div>
    </div>
  );
}