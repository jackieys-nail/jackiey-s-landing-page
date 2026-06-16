'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

const faqs = [
  {
    q: 'How long does Gel-X last?',
    a: 'With proper care, Gel-X typically lasts two to three weeks before a fill or removal. I recommend booking your next appointment around the three week mark to keep your nails healthy and looking their best.',
  },
  {
    q: 'How long do lash extensions stay on?',
    a: 'Lash extensions follow your natural lash cycle and generally retain well for two to three weeks. To maintain a full look, most clients come in for a refill every two weeks. Gentle aftercare makes a big difference in retention.',
  },
  {
    q: 'What is the cancellation policy?',
    a: 'Your appointment is reserved just for you. I kindly ask for at least 24 hours notice to cancel or reschedule. Cancellations within 24 hours, or no-shows, may be subject to a fee so I can continue offering dedicated one-on-one time to every client.',
  },
  {
    q: 'How should I prepare for my appointment?',
    a: 'For lashes, please arrive with clean lashes and no eye makeup or mascara. For nails, come with bare nails if possible. If you have inspiration photos, bring them along so we can design something perfect for you.',
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="bg-background px-4 py-24 sm:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-sans text-xs font-medium uppercase tracking-[0.35em] text-gold">
          Good to Know
        </p>
        <h2 className="mt-4 text-balance font-serif text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
          Before you book
        </h2>
        <div className="gold-rule mx-auto mt-6 h-px w-24" />
      </div>

      <div className="mx-auto mt-12 max-w-2xl">
        {faqs.map((item, i) => {
          const isOpen = open === i
          return (
            <div key={item.q} className="border-b border-border/70">
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-6 py-6 text-left"
              >
                <span className="font-serif text-xl font-medium tracking-tight text-foreground sm:text-2xl">
                  {item.q}
                </span>
                <span
                  className={cn(
                    'relative flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gold/60 text-gold transition-transform duration-500',
                    isOpen && 'rotate-[135deg] bg-gold/10',
                  )}
                >
                  <span className="absolute h-[1.5px] w-3.5 bg-gold" />
                  <span
                    className={cn(
                      'absolute h-3.5 w-[1.5px] bg-gold transition-opacity duration-300',
                      isOpen && 'opacity-0',
                    )}
                  />
                </span>
              </button>
              <div
                className={cn(
                  'grid transition-all duration-500 ease-in-out',
                  isOpen
                    ? 'grid-rows-[1fr] opacity-100'
                    : 'grid-rows-[0fr] opacity-0',
                )}
              >
                <div className="overflow-hidden">
                  <p className="pb-6 font-sans text-base font-light leading-relaxed text-muted-foreground">
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
