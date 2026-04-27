'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import { useCurrency } from '@/context/CurrencyContext';

// Mobile packages (existing)
const mobilePlans = [
  {
    name: 'Basic',
    tagline: 'Start Your Journey',
    priceINR: 199,
    period: 'one-time',
    color: '#6B6B8A',
    borderColor: 'border-border',
    hoverBorder: 'hover:border-muted-foreground/40',
    featured: false,
    features: [
      '2-finger beginner config',
      'Low-end device optimization',
      'Battle Royale settings',
      'General + Red Dot sensitivity',
      'Instant download',
      'Email support',
    ],
    cta: 'Get Basic',
    ctaClass: 'border border-border text-foreground hover:border-muted-foreground/60 hover:bg-muted/20',
  },
  {
    name: 'Pro',
    tagline: 'For Competitive Players',
    priceINR: 499,
    period: 'one-time',
    color: '#FF4500',
    borderColor: 'border-primary/50',
    hoverBorder: 'hover:border-primary',
    featured: true,
    features: [
      'Everything in Basic',
      'Claw grip + 2-finger configs',
      'Mid-range device tuning (4–6 GB RAM)',
      'All 6 scope sensitivity values',
      'BR + Clash Squad mode configs',
      'Gyroscope settings included',
      'Priority support (24h)',
    ],
    cta: 'Get Pro',
    ctaClass: 'neon-btn-orange',
  },
  {
    name: 'Elite',
    tagline: 'Dominate at Heroic+',
    priceINR: 999,
    period: 'one-time',
    color: '#00F5FF',
    borderColor: 'border-accent/30',
    hoverBorder: 'hover:border-accent/60',
    featured: false,
    features: [
      'Everything in Pro',
      'High-end device (8 GB+ / 90fps)',
      'Drag-shot & one-tap headshot config',
      'Pro player replica settings',
      'Tournament-grade claw grip',
      'Gyro + accelerometer tuning',
      'Lifetime config updates',
      'Discord VIP access',
    ],
    cta: 'Get Elite',
    ctaClass: 'neon-btn-outline',
  },
];

// PC & Emulator packages (new)
const pcPlans = [
  {
    name: 'Starter',
    tagline: 'Emulator Beginner Setup',
    priceINR: 249,
    period: 'one-time',
    color: '#6B6B8A',
    borderColor: 'border-border',
    hoverBorder: 'hover:border-muted-foreground/40',
    featured: false,
    features: [
      'BlueStacks & LDPlayer config',
      'Basic mouse sensitivity tuning',
      'Low-spec PC optimization',
      'Battle Royale keybind layout',
      'General + Red Dot sensitivity',
      'Instant download',
      'Email support',
    ],
    cta: 'Get Starter',
    ctaClass: 'border border-border text-foreground hover:border-muted-foreground/60 hover:bg-muted/20',
  },
  {
    name: 'Pro PC',
    tagline: 'Competitive Emulator Edge',
    priceINR: 599,
    period: 'one-time',
    color: '#FF4500',
    borderColor: 'border-primary/50',
    hoverBorder: 'hover:border-primary',
    featured: true,
    features: [
      'Everything in Starter',
      'High-DPI mouse optimization',
      'Mid-range PC tuning (8–16 GB RAM)',
      'All 6 scope sensitivity values',
      'BR + Clash Squad keybind configs',
      'Custom macro-ready layout',
      'Priority support (24h)',
    ],
    cta: 'Get Pro PC',
    ctaClass: 'neon-btn-orange',
  },
  {
    name: 'Elite PC',
    tagline: 'Dominate on Emulator',
    priceINR: 1199,
    period: 'one-time',
    color: '#00F5FF',
    borderColor: 'border-accent/30',
    hoverBorder: 'hover:border-accent/60',
    featured: false,
    features: [
      'Everything in Pro PC',
      'High-end PC (16 GB+ / 144fps)',
      'Drag-shot & one-tap headshot config',
      'Pro player replica emulator settings',
      'Tournament-grade keybind layout',
      'Multi-emulator support (BS5, LD, MSI)',
      'Lifetime config updates',
      'Discord VIP access',
    ],
    cta: 'Get Elite PC',
    ctaClass: 'neon-btn-outline',
  },
];

type Platform = 'mobile' | 'pc';

export default function PricingSection() {
  const { convert, currency } = useCurrency();
  const [platform, setPlatform] = useState<Platform>('mobile');

  const activePlans = platform === 'mobile' ? mobilePlans : pcPlans;

  return (
    <section id="pricing" className="py-20 sm:py-28 bg-background relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[600px] h-[500px] bg-primary/4 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-accent/3 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-10 scroll-reveal">
          <span className="font-mono text-xs text-primary uppercase tracking-widest block mb-4">
            // Choose Your Arsenal
          </span>
          <h2 className="font-extrabold tracking-tight leading-tight mb-4" style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)' }}>
            One-Time Payment.
            <br />
            <span className="text-primary">Lifetime Edge.</span>
          </h2>
          <p className="text-foreground/60 text-sm max-w-md mx-auto">
            No subscriptions. No monthly fees. Pay once, dominate forever.
          </p>
          {/* Currency badge */}
          <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-card/60 border border-border text-xs text-muted-foreground font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Prices shown in {currency}
          </div>
        </div>

        {/* Platform Toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center p-1 rounded-full bg-card/60 border border-border gap-1">
            <button
              onClick={() => setPlatform('mobile')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                platform === 'mobile' ?'bg-primary text-white shadow-[0_0_20px_rgba(255,69,0,0.5)]' :'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Icon name="DevicePhoneMobileIcon" size={16} />
              Mobile
            </button>
            <button
              onClick={() => setPlatform('pc')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                platform === 'pc' ?'bg-accent text-background shadow-[0_0_20px_rgba(0,245,255,0.4)]' :'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Icon name="ComputerDesktopIcon" size={16} />
              PC &amp; Emulator
            </button>
          </div>
        </div>

        {/* Platform label */}
        <div className="text-center mb-8">
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            {platform === 'mobile' ? '// Mobile Device Packages' : '// PC & Emulator Packages'}
          </span>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {activePlans.map((plan) => (
            <div
              key={plan.name}
              className={`glass-card-dark rounded-3xl p-8 border ${plan.borderColor} ${plan.hoverBorder} transition-all duration-500 relative flex flex-col ${
                plan.featured ? 'ring-1 ring-primary/30 shadow-[0_0_40px_rgba(255,69,0,0.15)]' : ''
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-[0_0_16px_rgba(255,69,0,0.6)]">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan header */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-extrabold text-2xl" style={{ color: plan.color }}>
                    {plan.name}
                  </h3>
                  <span
                    className="w-3 h-3 rounded-full"
                    style={{ background: plan.color, boxShadow: `0 0 12px ${plan.color}` }}
                  />
                </div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-6">{plan.tagline}</p>
                <div className="flex items-baseline gap-2">
                  <span
                    className="font-extrabold leading-none"
                    style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: plan.color, textShadow: `0 0 20px ${plan.color}50` }}
                  >
                    {convert(plan.priceINR)}
                  </span>
                  <div>
                    <p className="font-mono text-xs text-muted-foreground uppercase">{plan.period}</p>
                  </div>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Icon name="CheckCircleIcon" variant="solid" size={16} className="mt-0.5 shrink-0" style={{ color: plan.color } as React.CSSProperties} />
                    <span className="text-sm text-foreground/70">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href="/sign-up"
                className={`block text-center py-3.5 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 ${plan.ctaClass}`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* Related products / upsell */}
        <div className="mt-16 p-8 rounded-3xl glass-card-dark border border-border">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0">
                <Icon name="SparklesIcon" size={22} />
              </div>
              <div>
                <p className="font-bold text-lg text-foreground mb-1">
                  Squad Bundle — Save 40%
                </p>
                <p className="text-sm text-foreground/60">
                  Buy Elite configs for your entire squad (4 players). Get coordinated sensitivity setups for team-based play. Perfect for clan tournaments.
                </p>
              </div>
            </div>
            <Link
              href="/sign-up"
              className="shrink-0 neon-btn-outline px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider whitespace-nowrap"
            >
              View Bundle
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}