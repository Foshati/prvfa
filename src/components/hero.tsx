'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectCoverflow } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

export default function HeroSection() {
    const t = useTranslations('Hero');

    return (
        <>
            <main className="overflow-hidden">
                <section className="relative">
                    <div className="relative py-24 lg:py-28">
                        <div className="mx-auto max-w-7xl px-6 md:px-12">
                            <div className="text-center sm:mx-auto sm:w-10/12 lg:mr-auto lg:mt-0 lg:w-4/5">
                                <div className="mb-8">
                                    <div className="mx-auto mb-6 w-32 h-32 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 p-1 shadow-lg">
                                        <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center">
                                            <Image 
                                                src="/img/uni.png"
                                                className="w-24 h-24 object-contain"
                                                alt="Shiraz University of Technology Logo"
                                                width={80}
                                                height={80}
                                            />
                                        </div>
                                    </div>
                                    
                                    <div className="space-y-3">
                                        <h1 className="text-2xl font-bold text-gray-900 dark:text-white tracking-wide">
                                            {t('university')}
                                        </h1>
                                        <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                                            {t('faculty')}
                                        </h2>
                                        <div className="max-w-4xl mx-auto mt-6">
                                            <p className="text-base leading-relaxed text-gray-600 dark:text-gray-400 font-medium">
                                                {t('thesisTitle')}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="x-auto relative mx-auto mt-8 max-w-lg sm:mt-12">
                                <div className="absolute inset-0 -top-8 left-1/2 -z-20 h-56 w-full -translate-x-1/2 [background-image:linear-gradient(to_bottom,transparent_98%,theme(colors.gray.200/75%)_98%),linear-gradient(to_right,transparent_94%,_theme(colors.gray.200/75%)_94%)] [background-size:16px_35px] [mask:radial-gradient(black,transparent_95%)] dark:opacity-10"></div>
                                <div className="absolute inset-x-0 top-12 -z-[1] mx-auto h-1/3 w-2/3 rounded-full bg-blue-300 blur-3xl dark:bg-white/20"></div>

                                <Swiper
                                    slidesPerView={1}
                                    pagination={{ clickable: true }}
                                    loop
                                    autoplay={{ delay: 5000 }}
                                    modules={[Autoplay, EffectCoverflow]}>
                                    <SwiperSlide className="px-2">
                                        <div className="bg-background rounded-(--radius) h-44 max-w-lg border p-5">
                                            <div className="mx-auto h-fit w-full">
                                                <p className="text-center text-sm text-gray-600 dark:text-gray-400 font-sans">PRV-AM2</p>
                                                <Image
                                                    src="/img/PRV-AM2.png"
                                                    alt="PRV-AM2"
                                                    width={500}
                                                    height={500}
                                                    className="mx-auto h-38 w-auto object-contain"
                                                />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="px-2">
                                        <div className="bg-background rounded-(--radius) h-44 max-w-lg border p-5">
                                            <p className="text-center text-sm text-gray-600 dark:text-gray-400 font-sans">PRV-SM2</p>

                                            <div className="mx-auto h-fit w-full">
                                                <Image
                                                    src="/img/PRV-SM2.png"
                                                    alt="PRV-SM2"
                                                    width={500}
                                                    height={500}
                                                    className="mx-auto h-45 w-auto object-contain"
                                                />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

