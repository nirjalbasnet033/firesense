'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const faqs = [
  {
    q: 'Will these settings work on my device?',
    a: 'Yes. Civilian Sensi configs are generated based on your device specs — RAM, CPU, and screen resolution. We support all Android devices from 2 GB RAM up to flagship 12 GB+ devices, as well as iOS. Both Free Fire and Free Fire MAX are supported.',
  },
  {
    q: 'How do I receive the config after purchase?',
    a: 'Instantly. After payment confirmation (usually within 4 seconds), your config file and setup guide are available in your account dashboard. You\'ll also receive a download link via email as backup.',
  },
  {
    q: 'Is there a difference between Battle Royale and Clash Squad configs?',
    a: 'Yes — this is one of our key differentiators. BR mode uses General sensitivity ~195 for long-range precision. Clash Squad uses ~200 for fast close-quarters combat. Pro and Elite tiers include both mode-specific configs.',
  },
  {
    q: 'What grip style do you support?',
    a: 'All tiers support 2-finger layouts. Pro tier adds claw grip (4-finger) optimization, which lets you run, jump, aim, and shoot simultaneously — making you much harder to kill. Elite adds gyroscope and drag-shot configs.',
  },
  {
    q: 'Is this against Free Fire\'s terms of service?',
    a: 'No. We only provide sensitivity and camera settings — these are standard in-game options available to every player. We do not modify game files, use cheat software, or violate any ToS. Your account is 100% safe.',
  },
  {
    q: 'Can I get a refund?',
    a: 'Yes. We offer a 7-day satisfaction guarantee. If you genuinely don\'t see improvement after following the setup guide, contact our support team and we\'ll process a full refund — no questions asked.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="py-20 sm:py-28 bg-secondary relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-accent/4 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left */}
          <div className="lg:col-span-4 scroll-reveal-left">
            <span className="font-mono text-xs text-primary uppercase tracking-widest block mb-4">
              // Support
            </span>
            <h2 className="font-extrabold tracking-tight leading-tight mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)' }}>
              Common
              <br />
              <span className="text-primary">Questions.</span>
            </h2>
            <p className="text-foreground/60 text-sm leading-relaxed mb-8">
              Can't find your answer? Reach our support team on Discord — usually responds in under 2 hours.
            </p>
            <Link
              href="/sign-up"
              className="neon-btn-orange px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider inline-flex items-center gap-2"
            >
              Join Discord
              <Icon name="ArrowRightIcon" size={16} />
            </Link>
          </div>

          {/* Right: FAQ Accordion */}
          <div className="lg:col-span-8 space-y-3 scroll-reveal-right">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  openIndex === i
                    ? 'border-primary/40 bg-primary/5' :'border-border glass-card-dark hover:border-primary/20'
                }`}
              >
                <button
                  className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left cursor-pointer"
                  onClick={() => toggle(i)}
                  aria-expanded={openIndex === i}
                >
                  <h3 className="font-bold text-sm sm:text-base text-foreground leading-snug">
                    {faq.q}
                  </h3>
                  <div
                    className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
                      openIndex === i
                        ? 'border-primary bg-primary text-white' :'border-border text-muted-foreground'
                    }`}
                  >
                    <Icon name={openIndex === i ? 'MinusIcon' : 'PlusIcon'} size={16} />
                  </div>
                </button>

                {openIndex === i && (
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                    <p className="text-sm text-foreground/60 leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}