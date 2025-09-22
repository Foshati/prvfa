import React from 'react';
import Image from 'next/image';

const ExperimentalDesignPage = () => {
  return (
    <div className="w-full max-w-6xl mx-auto p-6 bg-gray-50 min-h-screen">
      
      {/* Section 1: طراحی و روش آزمایش شیر فشارشکن */}
      <section className="mb-12 font-sans">
        <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
          <h1 className="text-3xl font-bold text-slate-800 mb-8 text-center border-b-4 border-blue-500 pb-4">
            محل ازمایش شیر های ازمایشی و شیر های فشار شکن
          </h1>
          
          {/* First 2 Images - Large with less zoom */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {[
              'Screenshot 2025-09-15 at 22.27.33.png',
              'Screenshot 2025-09-15 at 22.28.15.png'
            ].map((filename, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                <Image
                  src={`/img/methodology/${encodeURIComponent('طراحی و روش آزمایش شیر فشارشکن')}/${filename}`}
                  alt={`تصویر طراحی ${index + 1}`}
                  width={600}
                  height={400}
                  className="w-full h-auto object-contain rounded-lg bg-gray-50"
                />
                <p className="text-sm text-gray-600 mt-2 text-center">{index === 0 ? 'محل قرار گرفتن شیر های فشارشکن و عوامل ایجاد فشار' : 'شماتیک طراحی محل آزمایش'}</p>
              </div>
            ))}
          </div>
          
          {/* Remaining 3 Images - Larger */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              'Screenshot 2025-09-15 at 22.28.26.png',
              'Screenshot 2025-09-15 at 22.28.36.png',
              'Screenshot 2025-09-15 at 22.28.49.png'
            ].map((filename, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                <Image
                  src={`/img/methodology/${encodeURIComponent('طراحی و روش آزمایش شیر فشارشکن')}/${filename}`}
                  alt={`تصویر طراحی ${index + 3}`}
                  width={400}
                  height={300}
                  className="w-full h-48 object-contain rounded-lg bg-gray-50"
                />
                <p className="text-sm text-gray-600 mt-2 text-center">{index === 0 ? 'محل آزمایش پلی اتیلن' : index === 1 ? 'محل آزمایش پلی اتیلن با شیر' : 'مراحل اتصال پلی اتیلن'}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Section 2: مدلهای آزمایشی */}
      <section className="mb-12">
        <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center border-b-4 border-green-500 pb-4">
            مدل های آزمایشی
          </h2>
          
          {/* Experimental Models */}
          {[
            { name: 'اول', folder: 'مدل ازمایش اول', images: ['Screenshot 2025-09-15 at 22.30.00.png', 'Screenshot 2025-09-15 at 22.30.09.png'], zoomLess: [false, true] },
            { name: 'دوم', folder: 'مدل ازمایش دوم', images: ['test2.png', 'Screenshot 2025-09-15 at 22.30.38.png'], zoomLess: [false, true] },
            { name: 'سوم', folder: 'مدل ازمایشی سوم', images: ['Screenshot 2025-09-15 at 22.31.08.png', 'روپیچ-توپیچ-گالوانیزه-2.jpg'], zoomLess: [true, true] },
            { name: 'چهارم', folder: 'مدل ازمایشی چهارم', images: ['Screenshot 2025-09-15 at 22.31.31.png', 'Screenshot 2025-09-15 at 22.31.39.png'], zoomLess: [false, true] },
            { name: 'پنجم', folder: 'مدل ازمایشی پنجم', images: ['Screenshot 2025-09-15 at 22.33.07.png', 'photo20963356551.jpg'], zoomLess: [false, false] }
          ].map((model, modelIndex) => (
            <div key={modelIndex} className="mb-8 last:mb-0">
              <h3 className="text-xl font-semibold text-slate-700 mb-6 bg-green-50 p-3 rounded-lg border-r-4 border-green-500">
                مدل آزمایشی {model.name}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {model.images.map((filename, imgIndex) => (
                  <div key={imgIndex} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                    <Image
                      src={model.name === 'سوم' && imgIndex === 1 ? "/img/methodology/fix/galvanize.png" : model.name === 'دوم' && imgIndex === 0 ? "/img/methodology/fix/test2.png" : `/img/methodology/${encodeURIComponent(model.folder)}/${filename}`}
                      alt={`مدل آزمایشی ${model.name} - تصویر ${imgIndex + 1}`}
                      width={400}
                      height={300}
                      className="w-full h-48 object-contain rounded-lg bg-gray-50"
                    />
                    <p className="text-sm text-gray-600 mt-2 text-center">
                      {model.name === 'اول' && imgIndex === 0 ? 'مدل آزمایشی اول ساخته شده' : 
                       model.name === 'اول' && imgIndex === 1 ? 'چسب های منتخب در مدل آزمایشی اول' :
                       model.name === 'دوم' && imgIndex === 0 ? 'مدل آزمایشی دوم ساخته شده' :
                       model.name === 'دوم' && imgIndex === 1 ? 'مدل های تست شده مواد الاستومری در مدل آزمایشی دوم' :
                       model.name === 'سوم' && imgIndex === 0 ? 'مدل ساخته شده آزمایشی سوم' :
                       model.name === 'سوم' && imgIndex === 1 ? 'در مدل آزمایشی سوم، استفاده از روپیچ-توپیچ گالوانیزه در اتصالات ورودی و خروجی شیر فشارشکن موجب عملکرد نامطلوب سیستم شد' :
                       model.name === 'چهارم' && imgIndex === 0 ? 'مدل ساخته شده آزمایشی چهارم' :
                       model.name === 'چهارم' && imgIndex === 1 ? 'انتخاب درپوش پایه بلند پلاستیکی به عنوان مسدود کننده در مدل آزمایشی چهارم' :
                       model.name === 'پنجم' && imgIndex === 0 ? 'مدل ساخته شده آزمایشی پنجم' :
                       model.name === 'پنجم' && imgIndex === 1 ? 'ساخت آب بندی تیوب با استفاده از بست گازی' :
                       `مدل آزمایشی ${model.name} - تصویر ${imgIndex + 1}`}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: طراحی، ساخت و آزمایش شیر فشارشکن پلیمری ساده */}
      <section className="mb-12">
        <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center border-b-4 border-purple-500 pb-4">
            طراحی، ساخت و آزمایش شیر فشارشکن پلیمری ساده
          </h2>
          
          {/* Simple Polymer PRV Models */}
          <div className="space-y-8 font-sans">
            {/* PRV-SM1 */}
            <div className="border-2 border-purple-200 rounded-lg p-6 bg-purple-50">
              <h3 className="text-xl font-semibold text-slate-800 mb-6 flex items-center">
                <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm mr-3">1</span>
                شیر فشارشکن ساده مدل 1 <span className="text-purple-600 font-bold">(PRV-SM1)</span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {['Screenshot 2025-09-15 at 22.33.54.png', 'Screenshot 2025-09-15 at 22.36.02.png'].map((filename, imgIndex) => (
                  <div key={imgIndex} className="bg-white border border-purple-200 rounded-lg p-4 shadow-sm">
                    <Image
                      src={`/img/methodology/${encodeURIComponent('شیر فشارشکن ساده مدل 1')}/${filename}`}
                      alt={`PRV-SM1 - تصویر ${imgIndex + 1}`}
                      width={400}
                      height={300}
                      className="w-full h-auto object-contain rounded-lg bg-gray-50"
                    />
                    <p className="text-sm text-purple-700 font-medium mt-2 text-center">
                      {imgIndex === 0 ? 'شماتیک طراحی شیر فشار شکن ساده مدل اول' : 'مدل ساخته شده شیر فشار شکن ساده مدل اول'}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* PRV-SM2 */}
            <div className="border-2 border-purple-200 rounded-lg p-6 bg-purple-50">
              <h3 className="text-xl font-semibold text-slate-800 mb-6 flex items-center">
                <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm mr-3">2</span>
                شیر فشارشکن ساده مدل 2 <span className="text-purple-600 font-bold">(PRV-SM2)</span>
              </h3>
              
              <div className="space-y-6">
                {/* Horizontal Images */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { file: 'Screenshot 2025-09-15 at 22.34.29.png', index: 1 },
                    { file: 'Screenshot 2025-09-15 at 22.36.14.png', index: 2 },
                    { file: 'Screenshot 2025-09-15 at 22.34.48.png', index: 3 },
                    { file: 'Screenshot 2025-09-15 at 22.34.57.png', index: 4 }
                  ].map((item) => (
                    <div key={item.index} className="bg-white border border-purple-200 rounded-lg p-4 shadow-sm">
                      <Image
                        src={`/img/methodology/${encodeURIComponent('شیر فشارشکن ساده مدل 2')}/${item.file}`}
                        alt={`PRV-SM2 - تصویر ${item.index}`}
                        width={400}
                        height={300}
                        className="w-full h-auto object-contain rounded-lg bg-gray-50"
                      />
                      <p className="text-sm text-purple-700 font-medium mt-2 text-center whitespace-pre-line">
                        {item.index === 1 ? 'شماتیک طراحی شیر فشار شکن ساده مدل دوم' : item.index === 2 ? 'مدل ساخته شده شیر فشار شکن ساده مدل دوم' : item.index === 3 ? 'محل آزمایش شیر فشارشکن ساده مدل دوم' : 'گیج های ورودی و خروجی شیر فشار شکن ساده مدل دوم\n(فشار ورودی 59psi, فشار خروجی 39psi, میزان افت فشار 20psi, نسبت کاهش فشار 33.90%)'}
                      </p>
                    </div>
                  ))}
                </div>
                
                {/* Vertical Image - Special Layout */}
                <div className="flex justify-center">
                  <div className="bg-white border border-purple-200 rounded-lg p-4 shadow-sm max-w-md">
                    <Image
                      src={`/img/methodology/${encodeURIComponent('شیر فشارشکن ساده مدل 2')}/Screenshot 2025-09-15 at 22.34.39.png`}
                      alt="PRV-SM2 - تصویر 5"
                      width={300}
                      height={500}
                      className="w-full h-auto object-contain rounded-lg bg-gray-50"
                    />
                    <p className="text-sm text-purple-700 font-medium mt-2 text-center">
                      مکانیزم ساده مستقیم فنر دار
                    </p>
                  </div>
                </div>
                
                {/* Videos Section */}
                <div className="space-y-6">
                  <h4 className="text-lg font-semibold text-purple-700 text-center">فیلم های آزمایش</h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white border border-purple-200 rounded-lg p-4 shadow-sm">
                      <video
                        controls
                        className="w-full h-48 object-contain rounded-lg bg-gray-50"
                        preload="metadata"
                      >
                        <source src="/video/ازمایش/first-test-prv-sm2.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      <p className="text-sm text-purple-700 font-medium mt-2 text-center">
                        فیلم ازمایش اولیه گیج های فشار بدون فشارشکن
                      </p>
                    </div>
                    
                    <div className="bg-white border border-purple-200 rounded-lg p-4 shadow-sm">
                      <video
                        controls
                        className="w-full h-48 object-contain rounded-lg bg-gray-50"
                        preload="metadata"
                      >
                        <source src="/video/ازمایش/test-prv-sm2.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      <p className="text-sm text-purple-700 font-medium mt-2 text-center">
                        فیلم ازمایش شیر فشارشکن ساده مدل دوم
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* PRV-SM3 */}
            <div className="border-2 border-purple-200 rounded-lg p-6 bg-purple-50">
              <h3 className="text-xl font-semibold text-slate-800 mb-6 flex items-center">
                <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm mr-3">3</span>
                شیر فشارشکن ساده مدل 3 <span className="text-purple-600 font-bold">(PRV-SM3)</span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { file: 'Screenshot 2025-09-15 at 22.35.40.png', needsContain: true },
                  { file: 'Screenshot 2025-09-15 at 22.35.52.png', needsContain: true },
                  { file: 'photo20963356353.jpg', needsContain: true },
                  { file: 'photo20963356895.jpg', needsContain: true }
                ].map((item, imgIndex) => (
                  <div key={imgIndex} className="bg-white border border-purple-200 rounded-lg p-4 shadow-sm">
                    <Image
                      src={`/img/methodology/${encodeURIComponent('شیر فشارشکن ساده مدل 3')}/${item.file}`}
                      alt={`PRV-SM3 - تصویر ${imgIndex + 1}`}
                      width={400}
                      height={300}
                      className="w-full h-48 object-contain rounded-lg bg-gray-50"
                    />
                    {imgIndex < 2 && (
                      <p className="text-sm text-purple-700 font-medium mt-2 text-center">
                        {imgIndex === 0 ? 'شماتیک طراحی شیر فشار شکن ساده مدل سوم' : 'مدل ساخته شده شیر فشار شکن ساده مدل سوم'}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: طراحی، ساخت و آزمایش شیر فشارشکن پلیمری پیشرفته */}
      <section className="mb-12 font-sans">
        <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center border-b-4 border-orange-500 pb-4">
            طراحی، ساخت و آزمایش شیر فشارشکن پلیمری پیشرفته
          </h2>
          
          {/* Advanced Polymer PRV Models */}
          <div className="space-y-8">
            {/* PRV-AM1 */}
            <div className="border-2 border-orange-200 rounded-lg p-6 bg-orange-50">
              <h3 className="text-xl font-semibold text-slate-800 mb-6 flex items-center">
                <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm mr-3">1</span>
                شیر فشارشکن پیشرفته مدل 1 <span className="text-orange-600 font-bold">(PRV-AM1)</span>
              </h3>
              
              <div className="space-y-6">
                {/* Paired Images */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { file: 'Screenshot 2025-09-15 at 22.36.42.png', index: 1 },
                    { file: 'Screenshot 2025-09-15 at 22.39.03.png', index: 6 }
                  ].map((item) => (
                    <div key={item.index} className="bg-white border border-orange-200 rounded-lg p-4 shadow-sm">
                      <Image
                        src={`/img/methodology/${encodeURIComponent('شیر فشارشکن پیشرفته مدل 1')}/${item.file}`}
                        alt={`PRV-AM1 - تصویر ${item.index}`}
                        width={400}
                        height={300}
                        className="w-full h-48 object-contain rounded-lg bg-gray-50"
                      />
                      <p className="text-sm text-orange-700 font-medium mt-2 text-center">
                        {item.index === 1 ? 'شماتیک طراحی شیر فشار شکن پیشرفته مدل اول' : 'مدل ساخته شده شیر فشار شکن پیشرفته مدل اول'}
                      </p>
                    </div>
                  ))}
                </div>
                
                {/* Mechanism Images */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { file: 'photo20963356226.jpg', caption: 'مکانیزم درپوشی در مرحله اولیه ساخت' },
                    { file: 'photo20963356874.jpg', caption: 'مرحله ساخت مکانیزم درپوشی و وصل شدن به بدنه upvc' },
                    { file: 'Screenshot 2025-09-15 at 22.36.55.png', caption: 'مکانیزم درپوشی با روکش تیوب' }
                  ].map((item, imgIndex) => (
                    <div key={imgIndex} className="bg-white border border-orange-200 rounded-lg p-4 shadow-sm">
                      <Image
                        src={`/img/methodology/${encodeURIComponent('شیر فشارشکن پیشرفته مدل 1')}/${item.file}`}
                        alt={`PRV-AM1 - تصویر ${imgIndex + 2}`}
                        width={400}
                        height={300}
                        className="w-full h-48 object-contain rounded-lg bg-gray-50"
                      />
                      <p className="text-sm text-orange-700 font-medium mt-2 text-center">
                        {item.caption}
                      </p>
                    </div>
                  ))}
                </div>
                
                {/* Polymer Components Images */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white border border-orange-200 rounded-lg p-4 shadow-sm">
                    <Image
                      src={`/img/methodology/${encodeURIComponent('شیر فشارشکن پیشرفته مدل 1')}/Screenshot 2025-09-15 at 22.37.35.png`}
                      alt="PRV-AM1 - تصویر 5"
                      width={400}
                      height={300}
                      className="w-full h-48 object-contain rounded-lg bg-gray-50"
                    />
                    <p className="text-sm text-orange-700 font-medium mt-2 text-center">
                      نمونه ساخته شده پیستون پلیمری
                    </p>
                  </div>
                  <div className="bg-white border border-orange-200 rounded-lg p-4 shadow-sm">
                    <Image
                      src={`/img/methodology/${encodeURIComponent('شیر فشارشکن پیشرفته مدل 1')}/photo20963355774.jpg`}
                      alt="PRV-AM1 - تصویر 6"
                      width={400}
                      height={300}
                      className="w-full h-48 object-contain rounded-lg bg-gray-50"
                    />
                    <p className="text-sm text-orange-700 font-medium mt-2 text-center">
                      نشیمنگاه با مسدود کننده پلیمری
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 gap-6">
                  <div className="bg-white border border-orange-200 rounded-lg p-4 shadow-sm">
                    <Image
                      src={`/img/methodology/${encodeURIComponent('شیر فشارشکن پیشرفته مدل 1')}/Screenshot 2025-09-15 at 22.37.14.png`}
                      alt="PRV-AM1 - تصویر 4"
                      width={400}
                      height={300}
                      className="w-full h-48 object-contain rounded-lg bg-gray-50"
                    />
                    <p className="text-sm text-orange-700 font-medium mt-2 text-center">
                      گیج فشار ورودی و خروجی شیر فشارشکن پیشرفته مدل اول (فشار ورودی 50psi, فشار خروجی 17psi, افت فشار 33psi, نسبت کاهش فشار 66%)
                    </p>
                  </div>
                </div>
                
                {/* Vertical Image - Special Layout */}
                <div className="flex justify-center">
                  <div className="bg-white border border-orange-200 rounded-lg p-4 shadow-sm max-w-md">
                    <Image
                      src={`/img/methodology/${encodeURIComponent('شیر فشارشکن پیشرفته مدل 1')}/Screenshot 2025-09-15 at 22.37.05.png`}
                      alt="PRV-AM1 - تصویر 3"
                      width={300}
                      height={500}
                      className="w-full h-auto object-contain rounded-lg bg-gray-50"
                    />
                    <p className="text-sm text-orange-700 font-medium mt-2 text-center">
                      آزمایش شیر فشار شکن پیشرفته مدل اول
                    </p>
                  </div>
                </div>
                
                {/* Videos Section */}
                <div className="space-y-6">
                  <h4 className="text-lg font-semibold text-orange-700 text-center">فیلم‌های آزمایش</h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white border border-orange-200 rounded-lg p-4 shadow-sm">
                      <video
                        controls
                        className="w-full h-48 object-contain rounded-lg bg-gray-50"
                        preload="metadata"
                      >
                        <source src="/img/methodology/شیر فشارشکن پیشرفته مدل 1/test-mekanism.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      <p className="text-sm text-orange-700 font-medium mt-2 text-center">
                        ازمایش مکانیزم درپوشی با پیچ تنظیم
                      </p>
                    </div>
                    
                    <div className="bg-white border border-orange-200 rounded-lg p-4 shadow-sm">
                      <video
                        controls
                        className="w-full h-48 object-contain rounded-lg bg-gray-50"
                        preload="metadata"
                      >
                        <source src="/video/ازمایش/first-test-prv-am1.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      <p className="text-sm text-orange-700 font-medium mt-2 text-center">
                        فیلم ازمایش اولیه گیج های فشار بدون فشارشکن
                      </p>
                    </div>
                    
                    <div className="bg-white border border-orange-200 rounded-lg p-4 shadow-sm">
                      <video
                        controls
                        className="w-full h-48 object-contain rounded-lg bg-gray-50"
                        preload="metadata"
                      >
                        <source src="/video/ازمایش/test-prv-am1.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      <p className="text-sm text-orange-700 font-medium mt-2 text-center">
                        فیلم ازمایش شیر های فشارشکن پیشرفته مدل اول
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* PRV-AM2 */}
            <div className="border-2 border-orange-200 rounded-lg p-6 bg-orange-50">
              <h3 className="text-xl font-semibold text-slate-800 mb-6 flex items-center">
                <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm mr-3">2</span>
                شیر فشارشکن پیشرفته مدل 2 <span className="text-orange-600 font-bold">(PRV-AM2)</span>
              </h3>
              
              <div className="space-y-6">
                {/* Paired Images */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { file: 'Screenshot 2025-09-15 at 22.38.07.png', index: 1 },
                    { file: 'Screenshot 2025-09-15 at 22.38.54.png', index: 4 }
                  ].map((item) => (
                    <div key={item.index} className="bg-white border border-orange-200 rounded-lg p-4 shadow-sm">
                      <Image
                        src={`/img/methodology/${encodeURIComponent('شیر فشارشکن پیشرفته مدل 2')}/${item.file}`}
                        alt={`PRV-AM2 - تصویر ${item.index}`}
                        width={400}
                        height={300}
                        className="w-full h-48 object-contain rounded-lg bg-gray-50"
                      />
                      <p className="text-sm text-orange-700 font-medium mt-2 text-center">
                        {item.index === 1 ? 'شماتیک طراحی شیر فشار شکن پیشرفته مدل دوم' : 'مدل ساخته شده شیر فشارشکن پیشرفته مدل دوم'}
                      </p>
                    </div>
                  ))}
                </div>
                
                {/* Other Images */}
                <div className="grid grid-cols-1 gap-6">
                  <div className="bg-white border border-orange-200 rounded-lg p-4 shadow-sm">
                    <Image
                      src={`/img/methodology/${encodeURIComponent('شیر فشارشکن پیشرفته مدل 2')}/Screenshot 2025-09-15 at 22.38.38.png`}
                      alt="PRV-AM2 - تصویر 3"
                      width={400}
                      height={300}
                      className="w-full h-64 object-contain rounded-lg bg-gray-50"
                    />
                    <p className="text-sm text-orange-700 font-medium mt-2 text-center">
                      گیج های فشار ورودی و خروجی شیر فشار شکن پیشرفته مدل دوم (فشار ورودی 41psi, فشار خروجی 15psi, افت فشار 26psi, نسبت کاهش فشار 63.41%)
                    </p>
                  </div>
                </div>
                
                {/* Large Images - Similar to Paired Images */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { file: 'Screenshot 2025-09-21 at 09.02.14.png', index: 5 },
                    { file: 'Screenshot 2025-09-21 at 09.14.54.png', index: 6 }
                  ].map((item) => (
                    <div key={item.index} className="bg-white border border-orange-200 rounded-lg p-4 shadow-sm">
                      <Image
                        src={`/img/methodology/${encodeURIComponent('شیر فشارشکن پیشرفته مدل 2')}/${item.file}`}
                        alt={`PRV-AM2 - تصویر ${item.index}`}
                        width={400}
                        height={300}
                        className="w-full h-48 object-contain rounded-lg bg-gray-50"
                      />
                      <p className="text-sm text-orange-700 font-medium mt-2 text-center">
                        {item.index === 5 ? 'مسیر دینامیکی جریان آب' : 'شماتیک برش و هاشور خورده طرح شیر فشارشکن پیشرفته مدل دوم'}
                      </p>
                    </div>
                  ))}
                </div>
                
                {/* Vertical Image - Special Layout */}
                <div className="flex justify-center">
                  <div className="bg-white border border-orange-200 rounded-lg p-4 shadow-sm max-w-md">
                    <Image
                      src={`/img/methodology/${encodeURIComponent('شیر فشارشکن پیشرفته مدل 2')}/Screenshot 2025-09-15 at 22.38.30.png`}
                      alt="PRV-AM2 - تصویر 2"
                      width={300}
                      height={500}
                      className="w-full h-auto object-contain rounded-lg bg-gray-50"
                    />
                    <p className="text-sm text-orange-700 font-medium mt-2 text-center">
                      محل آزمایش شیر فشارشکن پیشرفته مدل دوم
                    </p>
                  </div>
                </div>
                
                {/* Videos Section */}
                <div className="space-y-6">
                  <h4 className="text-lg font-semibold text-orange-700 text-center">فیلم های آزمایش</h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white border border-orange-200 rounded-lg p-4 shadow-sm">
                      <video
                        controls
                        className="w-full h-48 object-contain rounded-lg bg-gray-50"
                        preload="metadata"
                      >
                        <source src="/video/ازمایش/first-test-prv-am2.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      <p className="text-sm text-orange-700 font-medium mt-2 text-center">
                        شیر فشارشکن پیشرفته مدل فیلم ازمایش اولیه گیج های فشار بدون فشارشکن
                      </p>
                    </div>
                    
                    <div className="bg-white border border-orange-200 rounded-lg p-4 shadow-sm">
                      <video
                        controls
                        className="w-full h-48 object-contain rounded-lg bg-gray-50"
                        preload="metadata"
                      >
                        <source src="/video/ازمایش/test-prv-am2.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      <p className="text-sm text-orange-700 font-medium mt-2 text-center">
                        فیلم ازمایش شیر های فشارشکن پیشرفته مدل دوم
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Footer */}
      <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 text-center">
        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
          <span className="bg-blue-100 px-3 py-1 rounded-full">طراحی و روش آزمایش</span>
          <span className="bg-green-100 px-3 py-1 rounded-full">مدلهای آزمایشی (5 مدل)</span>
          <span className="bg-purple-100 px-3 py-1 rounded-full">شیرهای پلیمری ساده (3 مدل)</span>
          <span className="bg-orange-100 px-3 py-1 rounded-full">شیرهای پلیمری پیشرفته (2 مدل)</span>
        </div>
      </div>
    </div>
  );
};

export default ExperimentalDesignPage;