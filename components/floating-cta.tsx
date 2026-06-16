'use client'

import { useBooking } from './booking-provider'
import { CalendarIcon } from './icons'

export function FloatingCta() {
  const { openBooking } = useBooking()

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 px-4 pb-4 md:hidden">
      {/* Dark outer container creating the wide elegant border effect */}
      <div
        className="rounded-2xl bg-espresso p-2 shadow-[0_-8px_30px_-12px_rgba(0,0,0,0.4)]"
        style={{ borderRadius: 16 }}
      >
        <button
          type="button"
          onClick={openBooking}
          className="flex w-full items-center justify-center gap-2.5 bg-gold py-3.5 font-sans text-sm font-semibold tracking-wide text-espresso transition-colors duration-300 active:bg-gold-soft"
          style={{ borderRadius: 12 }}
        >
          <CalendarIcon className="h-[18px] w-[18px]" />
          Book Now
        </button>
      </div>
    </div>
  )
}
