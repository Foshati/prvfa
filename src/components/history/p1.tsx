import React from 'react';
import { Settings, Gauge, Cog } from 'lucide-react';
import Image from 'next/image';

const PressureValveTypes = () => {
  const valveTypes = [
    {
      id: 1,
      mainType: "شیر فشارشکن مستقیم",
      subtitle: "Direct Acting Pressure Reducing Valve",
      icon: <Settings className="w-8 h-8 text-blue-600" />,
      description: "این نوع شیرها برای عملکرد خود به سامانه‌های کنترلی جداگانه نیاز ندارند و به صورت مکانیکی بر اساس نیروی فنر و فشار ورودی عمل می‌کنند.",
      subTypes: [
        {
          name: "شیرهای فشارشکن مستقیم نوع پیستونی",
          englishName: "Direct Acting Piston Type",
          description: "دارای پیستون متحرک که با فشار ورودی و نیروی فنر تعادل برقرار می‌کند",
          features: ["کنترل دقیق فشار", "مقاومت بالا", "مناسب فشارهای متوسط تا بالا"],
          imageCount: 2
        },
        {
          name: "شیرهای فشارشکن مستقیم نوع دیافراگمی",
          englishName: "Direct Acting Diaphragm Type",
          description: "با استفاده از دیافراگم انعطاف‌پذیر جریان را کنترل می‌کند",
          features: ["طراحی ساده", "هزینه کمتر", "نگهداری آسان", "مناسب آبیاری"],
          imageCount: 2
        }
      ]
    },
    {
      id: 2,
      mainType: "شیر فشارشکن پایلوت‌دار",
      subtitle: "Pilot Operated Pressure Reducing Valve",
      icon: <Cog className="w-8 h-8 text-green-600" />,
      description: "این شیرها به کمک یک سامانه کنترلی جانبی (پایلوت) عمل می‌کنند که نقش فرمان‌دهنده را داشته و جریان کمی از سیال را کنترل می‌کند.",
      subTypes: [
        {
          name: "شیرهای فشارشکن با پایلوت داخلی",
          englishName: "Internal Pilot Operated",
          description: "پایلوت در داخل بدنه اصلی شیر قرار دارد و از فشار داخلی برای کنترل استفاده می‌کند",
          features: ["کامپکت و یکپارچه", "پاسخ سریع", "کنترل دقیق", "مناسب فشار بالا"],
          imageCount: 2
        },
        {
          name: "شیرهای فشارشکن با پایلوت خارجی",
          englishName: "External Pilot Operated",
          description: "پایلوت جداگانه و خارج از بدنه اصلی قرار دارد و امکان تنظیم از راه دور فراهم می‌کند",
          features: ["قابلیت کنترل از راه دور", "تنظیمات پیشرفته", "مناسب سیستم‌های پیچیده"],
          imageCount: 2
        }
      ]
    }
  ];

  const getImagePath = (subType: string, index: number) => {
    const folderMap: Record<string, string> = {
      'Direct Acting Piston Type': 'شیرهای فشارشکن مستقیم نوع پیستونی',
      'Direct Acting Diaphragm Type': 'شیرهای فشارشکن مستقیم نوع دیافراگمی',
      'Internal Pilot Operated': 'شیرهای فشارشکن با پایلوت داخلی',
      'External Pilot Operated': 'شیرهای فشارشکن با پایلوت خارجی'
    };
    
    const imageMap: Record<string, string[]> = {
      'شیرهای فشارشکن مستقیم نوع پیستونی': [
        'Screenshot 2025-09-15 at 23.04.15.png',
        'Screenshot 2025-09-15 at 23.04.23.png'
      ],
      'شیرهای فشارشکن مستقیم نوع دیافراگمی': [
        'Screenshot 2025-09-15 at 23.02.58.png',
        'Screenshot 2025-09-15 at 23.03.29.png'
      ],
      'شیرهای فشارشکن با پایلوت داخلی': [
        'Screenshot 2025-09-15 at 23.04.57.png',
        'Screenshot 2025-09-15 at 23.05.07.png'
      ],
      'شیرهای فشارشکن با پایلوت خارجی': [
        'Screenshot 2025-09-15 at 23.05.15.png',
        'Screenshot 2025-09-15 at 23.05.22.png'
      ]
    };
    
    const folder = folderMap[subType];
    const filename = imageMap[folder]?.[index - 1];
    
    return filename ? `/img/literature-review/${encodeURIComponent(folder)}/${filename}` : null;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            انواع شیرهای فشارشکن
          </h1>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            شیرهای فشارشکن را می‌توان بر اساس سازوکار عملکرد به دو گروه اصلی 
            <span className="font-semibold text-blue-700"> شیر فشارشکن مستقیم </span>
            و 
            <span className="font-semibold text-green-700"> شیر فشارشکن پایلوت‌دار </span>
            تقسیم کرد. هر یک از این دو گروه خود زیرمجموعه‌های خاصی دارند و مناسب کاربردهای متفاوتی هستند.
          </p>
        </div>

        {/* Main Types */}
        {valveTypes.map((mainType) => (
          <div key={mainType.id} className="mb-16">
            {/* Main Type Header */}
            <div className={`p-6 rounded-t-xl ${
              mainType.id === 1 ? 'bg-gradient-to-r from-blue-600 to-blue-700' : 'bg-gradient-to-r from-green-600 to-green-700'
            } text-white shadow-lg`}>
              <div className="flex items-center gap-4 mb-4">
                {mainType.icon}
                <div>
                  <h2 className="text-3xl font-bold">{mainType.mainType}</h2>
                  <p className="text-xl opacity-90">{mainType.subtitle}</p>
                </div>
              </div>
              <p className="text-lg leading-relaxed opacity-95">
                {mainType.description}
              </p>
            </div>

            {/* Sub Types */}
            <div className="bg-white rounded-b-xl shadow-lg p-6">
              <div className="grid md:grid-cols-2 gap-8">
                {mainType.subTypes.map((subType, subIndex) => (
                  <div key={subIndex} className="border-2 border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                    {/* Sub Type Header */}
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {subType.name}
                      </h3>
                      <p className="text-sm text-gray-500 font-medium mb-3">
                        {subType.englishName}
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        {subType.description}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-3">ویژگی‌های کلیدی:</h4>
                      <ul className="space-y-2">
                        {subType.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-700">
                            <div className={`w-2 h-2 rounded-full ${
                              mainType.id === 1 ? 'bg-blue-500' : 'bg-green-500'
                            }`}></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Images */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-gray-800">تصاویر:</h4>
                      <div className="grid grid-cols-1 gap-6">
                        {[...Array(subType.imageCount)].map((_, imgIndex) => {
                          const imagePath = getImagePath(subType.englishName, imgIndex + 1);
                          return imagePath ? (
                            <div key={imgIndex} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                              <Image
                                src={imagePath}
                                alt={`${subType.name} - تصویر ${imgIndex + 1}`}
                                width={600}
                                height={400}
                                className="w-full h-64 object-contain rounded-lg bg-gray-50"
                              />
                              <p className="text-sm text-gray-600 mt-2 text-center font-medium">
                                {subType.name} - تصویر {imgIndex + 1}
                              </p>
                            </div>
                          ) : (
                            <div key={imgIndex} className="w-full h-64 bg-gray-200 border-2 border-dashed border-gray-400 rounded-lg flex flex-col items-center justify-center text-gray-500">
                              <Gauge className="w-12 h-12 mb-2 opacity-50" />
                              <span className="text-sm font-medium">تصویر {imgIndex + 1}</span>
                              <span className="text-xs">{subType.englishName}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Summary Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mt-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            خلاصه انواع شیرهای فشارشکن
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-blue-50 rounded-lg border-r-4 border-blue-500">
              <h4 className="text-lg font-bold text-blue-800 mb-3">
                <Settings className="w-5 h-5 inline ml-2" />
                شیرهای مستقیم
              </h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• عملکرد مکانیکی ساده</li>
                <li>• بدون نیاز به سیستم کنترل جداگانه</li>
                <li>• هزینه کمتر و نگهداری آسان</li>
                <li>• مناسب کاربردهای عمومی</li>
              </ul>
            </div>
            <div className="p-6 bg-green-50 rounded-lg border-r-4 border-green-500">
              <h4 className="text-lg font-bold text-green-800 mb-3">
                <Cog className="w-5 h-5 inline ml-2" />
                شیرهای پایلوت‌دار
              </h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• کنترل دقیق‌تر و حساس‌تر</li>
                <li>• قابلیت کار با فشارهای بالا</li>
                <li>• امکان تنظیمات پیشرفته</li>
                <li>• مناسب سیستم‌های صنعتی</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PressureValveTypes;