import Image from 'next/image'

export default function page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
      <div className="max-w-6xl mx-auto px-6">
   
    
        {/* Content Sections */}
        <div className="space-y-8">
          {/* مقدمه */}
          <section className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-blue-500 pb-2 text-center">
             مقدمه
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed text-justify">
              <p className="mb-4">
                با افزایش جمعیت، توسعه شهرنشینی و گسترش فعالیت های کشاورزی و صنعتی، نیاز به خطوط انتقال و توزیع پایدار و کارآمد بیش از گذشته احساس می شود. یکی از مهم ترین چالش ها  در سیستم های انتقال و توزیع آب، مدیریت صحیح فشار در خطوط لوله است که فشار نامتعادل در خطوط لوله میتواند پیامدهایی مانند ترکیدگی لوله ها، نشت آب، افزایش تلفات انرژی در شبکه و کاهش عمر مفید زیرساخت ها را به همراه داشته باشد.
              </p>
              <div className="flex justify-center mb-6">
                <video 
                  controls 
                  className="w-full max-w-3xs rounded-lg shadow-lg"
                  src="/video/video-prvintro.mp4"
                >
                  مرورگر شما از پخش ویدیو پشتیبانی نمی‌کند.
                </video>
              </div>
              <p className="mb-4">
                در چنین شرایطی، استفاده از تجهیزاتی که  کنترلی در نقاط بحرانی   ضرورت می یابد. در میان تجهیزات کنترلی، شیرهای کاهش فشار (Pressure Reducing Valves) نقشی اساسی در کنترل و کاهش فشار خروجی دارند، و یکی از راهکارهای اصلی مدیریت فشار در شبکه های توزیع آب محسوب میشوند.
              </p>
           
              <p>
               اگرچه شیرهای فشارشکن با جنس فلزی در حال حاضر به طور گسترده در شبکه های توزیع آب مورد استفاده قرار می گیرند، اما این شیرها با چالش هایی نظیر وزن بالا، خوردگی، رسوب گذاری، هزینه های بالا و تعمیر و نگهداری پیچیده و قیمت بالا مواجه هستند. به همین دلیل، طراحی و ساخت شیر فشارشکن از جنس پلیمری می‌تواند راهکاری مؤثر برای حل  این مشکلات و چالش ها باشد.
              </p>
      
            </div>
          </section>


    {/* Images Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="relative h-64">
              <Image
                src="/img/introduction/Screenshot 2025-09-16 at 03.15.47.png"
                alt="شیر فشارشکن پلیمری"
                fill
                className="object-contain"
              />
            </div>
            <div className="p-4 text-center">
              <p className="text-sm font-medium text-gray-700">شیر اطمینان </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="relative h-64">
              <Image
                src="/img/introduction/Screenshot 2025-09-16 at 03.16.01.png"
                alt="آزمایشهای عملکردی"
                fill
                className="object-contain"
              />
            </div>
            <div className="p-4 text-center">
              <p className="text-sm font-medium text-gray-700">شیر فشارشکن </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="relative h-64">
              <Image
                src="/img/introduction/Screenshot 2025-09-16 at 03.22.27.png"
                alt="نتایج و تحلیل"
                fill
                className="object-contain"
              />
            </div>
            <div className="p-4 text-center">
              <p className="text-sm font-medium text-gray-700"> شیر ضربه گیر</p>
            </div>
          </div>
        </div>




    
        </div>
      </div>
    </div>
  )
}