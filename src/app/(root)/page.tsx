import BottomHero from '@/components/bottom-Hero'
import HeroSection from '@/components/hero'
import TeamSection from '@/components/team'
import React from 'react'
export default async function HomePage() {
  
  return (
    <div>
      <HeroSection/>
      <BottomHero/>
      <TeamSection/>
    </div>
  )
}
