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
                با افزایش جمعیت، توسعه شهرنشینی و گسترش فعالیتهای کشاورزی و صنعتی، نیاز به منابع آبی پایدار و سیستمهای توزیع کارآمد بیش از گذشته احساس میشود. یکی از اجزای کلیدی در سیستمهای انتقال و توزیع آب، مدیریت صحیح فشار در خطوط لوله است؛ زیرا فشار نامتعادل در خطوط لوله میتواند پیامدهایی همچون ترکیدگی لولهها، نشت آب، افزایش تلفات شبکه، فرسایش تجهیزات و در نهایت کاهش عمر مفید زیرساختها را به همراه داشته باشد.
              </p>
              <p className="mb-4">
                در چنین شرایطی، استفاده از تجهیزاتی که قادر به کنترل و کاهش فشار در نقاط بحرانی شبکه باشند، ضرورت مییابد. در میان تجهیزات کنترلی، شیرهای کاهش فشار (Pressure Reducing Valves) نقشی اساسی در پایش و تنظیم فشار ایفا میکنند و یکی از راهکارهای اصلی مدیریت فشار در شبکههای توزیع آب محسوب میشوند.
              </p>
              <p className="mb-4">
                این شیرها با ثابت نگه داشتن فشار در خروجی، از نوسانات ناگهانی و فشار بیش از حد در شبکه جلوگیری کرده و باعث پایداری عملکرد سیستم میشوند. عملکرد ناصحیح پمپها، تغییرات ناگهانی در مصرف آب، یا فشار دینامیکی بالا، همگی از عواملی هستند که میتوانند نوسانات مخرب فشار را ایجاد کنند و بدون وجود یک سیستم کنترلی مؤثر، خسارات قابلتوجهی را به تجهیزات و ساختار شبکه وارد نمایند.
              </p>
              <p>
                اگرچه شیرهای کاهش فشار فلزی در حال حاضر به طور گسترده در شبکههای توزیع آب مورد استفاده قرار میگیرند، اما این شیرها با چالشهایی نظیر وزن بالا، خوردگی، رسوبگذاری، هزینههای بالا و تعمیر و نگهداری پیچیده مواجه هستند. این مشکلات به ویژه در مناطق با شرایط آبی خاص یا نقاطی که نیاز به تجهیزات سبکوزن و مقاوم در برابر عوامل محیطی دارند، بیشتر خود را نشان میدهند.
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


          {/* اهداف تحقیق */}
          <section className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-green-500 pb-2 text-center">
            اهداف تحقیق و اهمیت آن
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed text-justify">
              <p className="mb-6">
                در مهندسی هیدرولیک، یکی از چالشهای اساسی طراحی و بهرهبرداری از سیستمهای انتقال و توزیع آب، تأمین دوام و پایداری عملکرد شبکه در برابر نوسانات فشار است. هرچند شیرهای فشارشکن فلزی موجود تا حدی قادر به کنترل فشار هستند، محدودیتهایی مانند هزینه بالا، وزن زیاد، خوردگی و رسوبگذاری بلندمدت، کارایی آنها را محدود میکند.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-800 mb-3">اهداف اصلی:</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• افزایش دوام و ایمنی زیرساختهای شبکه</li>
                    <li>• بهینهسازی مصرف انرژی و آب</li>
                    <li>• کاهش هزینههای تولید و نگهداری</li>
                    <li>• توزیع یکنواخت فشار در شبکه</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-800 mb-3">مزایای کلیدی:</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• توسعه فناوری بومی</li>
                    <li>• طراحی مکانیزم جدید</li>
                    <li>• استفاده از مواد پلیمری</li>
                    <li>• کاهش وابستگی به واردات</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

 

          {/* نوآوری پژوهش */}
          <section className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-orange-500 pb-2 text-center">
          نوآوری پژوهش
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-3">بدنه پلیمری</h3>
                <p className="text-sm text-gray-700">استفاده از ترکیب اتصالات PVC و UPVC با خواص مهندسیشده</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-3">مسیر چندمرحلهای</h3>
                <p className="text-sm text-gray-700">طراحی سه مرحله افت فشار پلهای با شیب کنترلشده</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg">
                <h3 className="font-semibold text-purple-800 mb-3">مکانیزم درپوشی</h3>
                <p className="text-sm text-gray-700">طراحی مکانیزم مستقیم درپوشی جایگزین سیستمهای پیستونی</p>
              </div>
              <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg">
                <h3 className="font-semibold text-red-800 mb-3">پیچ تنظیم پلیمری</h3>
                <p className="text-sm text-gray-700">فنر فولاد کربنی با پیچ تنظیم پلیمری برای کاهش هزینه</p>
              </div>
              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-lg">
                <h3 className="font-semibold text-yellow-800 mb-3">دیسک پلیمری</h3>
                <p className="text-sm text-gray-700">دیسک پلیمری با اورینگ و نشیمنگاه بهینه</p>
              </div>
              <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-lg">
                <h3 className="font-semibold text-indigo-800 mb-3">اتصالات نوین</h3>
                <p className="text-sm text-gray-700">استفاده از لوله پلیپروپیلن و اتصالات پیچی پلاستیکی</p>
              </div>
            </div>
          </section>

    
        </div>
      </div>
    </div>
  )
}