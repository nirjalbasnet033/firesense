import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const stats = [
{ value: '52K+', label: 'Active Players' },
{ value: '98.4%', label: 'Accuracy Boost' },
{ value: '4.9★', label: 'Avg Rating' }];


export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
      {/* Full-bleed background */}
      <div className="absolute inset-0 z-0">
        <AppImage
          src="/assets/images/free_fire_hero_bg.png"
          alt="Free Fire battle royale scene with lone survivor on burning battlefield, dramatic orange flames and dark atmospheric sky"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw" />

        {/* Dark overlay scrim — strong enough for white text */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background/90" />
        {/* Grid overlay */}
        <div className="absolute inset-0 grid-bg opacity-40" />
        {/* Neon atmospheric glow */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-accent/8 rounded-full blur-[100px] pointer-events-none" />
      </div>

      {/* Scan line effect */}
      <div className="absolute inset-0 z-1 pointer-events-none scan-line" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-28 pb-16 sm:pb-24 w-full">
        <div className="flex flex-col lg:flex-row items-end gap-12 lg:gap-20">
          {/* Left: Main Copy */}
          <div className="flex-1 max-w-2xl">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark border border-primary/30 mb-8 animate-fade-in-up">
              <span className="w-2 h-2 rounded-full bg-primary animate-neon-pulse" />
              <span className="font-mono text-xs text-primary uppercase tracking-widest">
                Free Fire Sensitivity Engine v4.0
              </span>
            </div>

            <h1
              className="font-sans font-extrabold leading-[0.95] tracking-tight mb-6"
              style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)' }}>

              <span className="text-foreground block">DOMINATE</span>
              <span className="shimmer-text block">EVERY MATCH</span>
              <span className="text-foreground block">WITH PRECISION</span>
            </h1>

            <p className="text-base sm:text-lg text-foreground/70 font-medium mb-10 max-w-xl leading-relaxed">
              Device-specific sensitivity configs engineered for 2-finger and claw grip players.
              Instant download. Works on all Free Fire versions including MAX.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/sign-up"
                className="neon-btn-orange px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider inline-flex items-center gap-2">

                Get Your Config
                <Icon name="ArrowRightIcon" size={16} />
              </Link>
              <a
                href="#pricing"
                className="neon-btn-outline px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider inline-flex items-center gap-2">

                View Pricing
                <Icon name="ChevronDownIcon" size={16} />
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6 mt-10">
              {[
              { icon: 'BoltIcon', text: 'Instant Download' },
              { icon: 'ShieldCheckIcon', text: 'Safe & Secure' },
              { icon: 'DevicePhoneMobileIcon', text: 'All Devices' }].
              map((badge) =>
              <div key={badge.text} className="flex items-center gap-2">
                  <Icon name={badge.icon as any} size={16} className="text-primary" />
                  <span className="text-xs font-semibold text-foreground/60 uppercase tracking-wider">
                    {badge.text}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Right: Stats card */}
          <div className="glass-dark rounded-3xl p-6 sm:p-8 border border-primary/20 w-full max-w-xs animate-float">
            <p className="font-mono text-xs text-primary uppercase tracking-widest mb-6">
              Live Performance Stats
            </p>
            <div className="space-y-5">
              {stats.map((stat) =>
              <div key={stat.label} className="flex items-center justify-between">
                  <span className="text-sm text-foreground/60 font-medium">{stat.label}</span>
                  <span className="font-mono font-bold text-xl text-foreground neon-text-orange">
                    {stat.value}
                  </span>
                </div>
              )}
            </div>
            <div className="mt-6 pt-6 border-t border-border">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[
                  'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop',
                  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop',
                  'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=40&h=40&fit=crop'].
                  map((src, i) =>
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-background overflow-hidden">
                      <AppImage src={src} alt="Player avatar" width={32} height={32} className="object-cover" />
                    </div>
                  )}
                </div>
                <p className="text-xs text-foreground/60 font-medium">
                  <span className="text-primary font-bold">52,000+</span> players online
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex flex-col items-center gap-2 mt-12">
          <div className="w-5 h-8 rounded-full border border-primary/40 flex items-start justify-center pt-1.5">
            <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
          </div>
          <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">Scroll</span>
        </div>
      </div>
    </section>);

}