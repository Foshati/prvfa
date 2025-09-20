'use client'
import Link from 'next/link'
import { Logo } from '@/components/logo'
import { Menu, Sparkles, X } from 'lucide-react'
import React from 'react'
import { cn } from '@/lib/utils'
import { ModeToggle } from './darkmode/modeToggle'
import { useTranslations } from 'next-intl'
import { LanguageSwitcher } from '@/i18n/language-switcher'
import { usePathname } from 'next/navigation'

export const Header = () => {
    const t = useTranslations('Header')
    const pathname = usePathname()
    const [menuState, setMenuState] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    return (
        <header>
            <nav
                data-state={menuState && 'active'}
                className="fixed z-20 w-full px-2">
                <div className={cn('mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12', isScrolled && 'bg-background/50 max-w-4xl rounded-2xl border backdrop-blur-lg lg:px-5')}>
                    <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                        <div className="flex w-full justify-between lg:w-auto">
                            <Link
                                href="/"
                                aria-label="home"
                                className="flex items-center space-x-2">
                                <Logo />
                            </Link>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                                <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                            </button>
                        </div>

                        <div className="absolute inset-0 m-auto hidden size-fit lg:block">
                            <ul className="flex gap-2 text-sm">
                                <li>
                                    <Link href="/introduction" className={cn("block duration-150 px-3 py-2 rounded-lg", pathname === '/introduction' ? 'text-foreground bg-background/50 backdrop-blur-sm border border-border/50' : 'text-muted-foreground hover:text-accent-foreground hover:bg-accent/10')}>
                                        <span>{t('introduction')}</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/literature-review" className={cn("block duration-150 px-3 py-2 rounded-lg", pathname === '/literature-review' ? 'text-foreground bg-background/50 backdrop-blur-sm border border-border/50' : 'text-muted-foreground hover:text-accent-foreground hover:bg-accent/10')}>
                                        <span>{t('literature')}</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/methodology" className={cn("block duration-150 px-3 py-2 rounded-lg", pathname === '/methodology' ? 'text-foreground bg-background/50 backdrop-blur-sm border border-border/50' : 'text-muted-foreground hover:text-accent-foreground hover:bg-accent/10')}>
                                        <span>{t('methodology')}</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/results" className={cn("block duration-150 px-3 py-2 rounded-lg", pathname === '/results' ? 'text-foreground bg-background/50 backdrop-blur-sm border border-border/50' : 'text-muted-foreground hover:text-accent-foreground hover:bg-accent/10')}>
                                        <span>{t('results')}</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/recommendations" className={cn("block duration-150 px-3 py-2 rounded-lg", pathname === '/recommendations' ? 'text-foreground bg-background/50 backdrop-blur-sm border border-border/50' : 'text-muted-foreground hover:text-accent-foreground hover:bg-accent/10')}>
                                        <span>{t('conclusion')}</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                            <div className="lg:hidden">
                                <ul className="space-y-3 text-base">
                                    <li>
                                        <Link href="/introduction" className={cn("block duration-150 px-4 py-3 rounded-lg", pathname === '/introduction' ? 'text-foreground bg-background/50 backdrop-blur-sm border border-border/50' : 'text-muted-foreground hover:text-accent-foreground hover:bg-accent/10')}>
                                            <span>{t('introduction')}</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/literature-review" className={cn("block duration-150 px-4 py-3 rounded-lg", pathname === '/literature-review' ? 'text-foreground bg-background/50 backdrop-blur-sm border border-border/50' : 'text-muted-foreground hover:text-accent-foreground hover:bg-accent/10')}>
                                            <span>{t('literature')}</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/methodology" className={cn("block duration-150 px-4 py-3 rounded-lg", pathname === '/methodology' ? 'text-foreground bg-background/50 backdrop-blur-sm border border-border/50' : 'text-muted-foreground hover:text-accent-foreground hover:bg-accent/10')}>
                                            <span>{t('methodology')}</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/results" className={cn("block duration-150 px-4 py-3 rounded-lg", pathname === '/results' ? 'text-foreground bg-background/50 backdrop-blur-sm border border-border/50' : 'text-muted-foreground hover:text-accent-foreground hover:bg-accent/10')}>
                                            <span>{t('results')}</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/recommendations" className={cn("block duration-150 px-4 py-3 rounded-lg", pathname === '/recommendations' ? 'text-foreground bg-background/50 backdrop-blur-sm border border-border/50' : 'text-muted-foreground hover:text-accent-foreground hover:bg-accent/10')}>
                                            <span>{t('conclusion')}</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                                <Link href="/fa" className="inline-flex h-9 w-9 items-center justify-center rounded-md  border-input bg-background hover:bg-accent hover:text-accent-foreground">
                                    <Sparkles className="h-4 w-4"/>
                                </Link>
                                <LanguageSwitcher />
                                <ModeToggle/>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}