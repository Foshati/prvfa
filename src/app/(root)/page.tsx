import BottomHero from '@/components/bottom-Hero'
import HeroSection from '@/components/hero'
import TeamSection from '@/components/team'
import React from 'react'
import { getTranslations } from 'next-intl/server'

export default async function HomePage() {
  const t = await getTranslations('HomePage')
  
  return (
    <div>
      <HeroSection/>
      <BottomHero/>
      <TeamSection/>
    </div>
  )
}
