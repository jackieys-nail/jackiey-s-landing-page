import { BookingProvider } from '@/components/booking-provider'
import { StickyNav } from '@/components/sticky-nav'
import { Hero } from '@/components/hero'
import { ServiceMenu } from '@/components/service-menu'
import { MeetArtist } from '@/components/meet-artist'
import { Portfolio } from '@/components/portfolio'
import { Faq } from '@/components/faq'
import { SiteFooter } from '@/components/site-footer'
import { FloatingCta } from '@/components/floating-cta'

export default function Page() {
  return (
    <BookingProvider>
      <StickyNav />
      <main>
        <Hero />
        <ServiceMenu />
        <MeetArtist />
        <Portfolio />
        <Faq />
        <SiteFooter />
      </main>
      <FloatingCta />
    </BookingProvider>
  )
}
