"use client";
import { CircleDollarSign, TrendingUp, Weight, Wrench } from 'lucide-react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { TextEffect } from '@/components/ui/textEffect'
import { useRef } from 'react'
import { useInView, motion } from 'framer-motion'

const features = [
    { key: 'highEfficiency', icon: TrendingUp },
    { key: 'lightWeight', icon: Weight },
    { key: 'affordable', icon: CircleDollarSign },
    { key: 'easyInstall', icon: Wrench },
]

export default function BottomHero() {
    const t = useTranslations('Features');
    const ref = useRef(null);
    const inView = useInView(ref, {
        once: true,
        margin: '-100px'
    });

    return (
        <section className="py-16 md:py-32 font-sans">
            <div className="mx-auto max-w-5xl space-y-12 px-6">
                <div ref={ref} className="text-center space-y-4">
                    <TextEffect
                        per='line'
                        as='h2'
                        className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-gray-900 dark:text-white leading-tight tracking-tight whitespace-nowrap overflow-hidden text-ellipsis px-4"
                        segmentWrapperClassName='overflow-hidden block'
                        preset={inView ? 'fade' : undefined}
                        trigger={inView}
                        variants={{
                            container: {
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: { 
                                        staggerChildren: 0.2,
                                        delayChildren: 0
                                    },
                                },
                            },
                            item: {
                                hidden: {
                                    opacity: 0,
                                    y: 40,
                                },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 0.5,
                                    },
                                },
                            },
                        }}
                    >
                        {t('title')}
                    </TextEffect>
                    <TextEffect
                        per='line'
                        as='p'
                        className="text-base md:text-lg text-gray-600 dark:text-gray-300 font-medium leading-relaxed italic"
                        segmentWrapperClassName='overflow-hidden block'
                        preset={inView ? 'fade' : undefined}
                        trigger={inView}
                        variants={{
                            container: {
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: { 
                                        staggerChildren: 0.2,
                                        delayChildren: 0.8
                                    },
                                },
                            },
                            item: {
                                hidden: {
                                    opacity: 0,
                                    y: 30,
                                },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 0.4,
                                    },
                                },
                            },
                        }}
                    >
                        {t('subtitle')}
                    </TextEffect>
                </div>
                <motion.div 
                    className="px-3 pt-3 md:-mx-8"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                    transition={{
                        duration: 0.8,
                        delay: 1.5, // بعد از title و subtitle نمایش داده می‌شود
                        ease: "easeOut"
                    }}
                >
                    <div className="aspect-88/45 mask-b-from-75% mask-b-to-95% relative">
                        <Image
                            src="/img/img-hero.png"
                            className="w-full h-full object-cover"
                            alt="Lyra ecosystem illustration"
                            width={2797}
                            height={1137}
                        />
                    </div>
                </motion.div>
                <motion.div 
                    className="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{
                        duration: 0.6,
                        delay: 2.0, // بعد از image نمایش داده می‌شود
                        ease: "easeOut"
                    }}
                >
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div 
                                key={feature.key} 
                                className="space-y-2"
                                initial={{ opacity: 0, y: 20 }}
                                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{
                                    duration: 0.4,
                                    delay: 2.2 + (index * 0.1), // هر feature با تاخیر کمی نمایش داده می‌شود
                                    ease: "easeOut"
                                }}
                            >
                                <div className="flex items-center gap-2">
                                    <Icon className="size-4" />
                                    <h3 className="text-sm font-medium">{t(`${feature.key}.title`)}</h3>
                                </div>
                                <p className="text-muted-foreground text-sm">{t(`${feature.key}.description`)}</p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    )
}