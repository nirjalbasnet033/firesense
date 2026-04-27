import React from 'react';
import Icon from '@/components/ui/AppIcon';

// BENTO GRID AUDIT
// Array has 5 cards: [InstantDownload, DeviceOptimized, ProSettings, SecurePayment, MoneyBack]
// Row 1: [col-1+2: InstantDownload cs-2 rs-1] [col-3: DeviceOptimized cs-1 rs-2]
// Row 2: [col-1: ProSettings cs-1 rs-1] [col-2: SecurePayment cs-1 rs-1] [col-3: FILLED by DeviceOptimized]
// Row 3: [col-1+2+3: MoneyBack cs-3 rs-1]
// Placed 5/5 cards ✓

export default function FeaturesBento() {
  return (
    <section className="py-20 sm:py-28 bg-background relative overflow-hidden">
      {/* BG decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/3 rounded-full blur-[200px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6 border-b border-border pb-10 scroll-reveal">
          <div>
            <span className="font-mono text-xs text-primary uppercase tracking-widest block mb-4">
              // Why Civilian Sensi
            </span>
            <h2 className="font-extrabold tracking-tight leading-tight" style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)' }}>
              Everything you need
              <br />
              <span className="text-primary">to win.</span>
            </h2>
          </div>
          <p className="text-foreground/60 text-sm leading-relaxed max-w-sm">
            Built for competitive players. No fluff — just the exact configs, delivery, and support that gets you to Heroic.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5" style={{ gridAutoRows: '280px' }}>

          {/* Card 1: Instant Download — col-span-2 */}
          {/* BENTO STEP 4 comment: InstantDownload cs-2 rs-1, col-1 */}
          <div className="md:col-span-2 glass-card-dark rounded-3xl p-8 border border-border relative overflow-hidden group hover:border-primary/40 transition-all duration-500 flex flex-col justify-between scroll-reveal stagger-1">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] group-hover:bg-primary/10 transition-all duration-700 pointer-events-none" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <Icon name="BoltIcon" size={24} />
              </div>
              <h3 className="font-bold text-2xl text-foreground mb-3">Instant Download</h3>
              <p className="text-foreground/60 text-sm leading-relaxed max-w-sm">
                Purchase and get your config file within seconds. No waiting, no manual delivery — fully automated delivery straight to your account dashboard.
              </p>
            </div>
            <div className="relative z-10 flex items-center gap-3 mt-4">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-neon-pulse" />
                <span className="font-mono text-xs text-primary uppercase tracking-wider">Avg. 4 seconds delivery</span>
              </div>
            </div>
          </div>

          {/* Card 2: Device Optimized — col-span-1, row-span-2 */}
          {/* BENTO STEP 4 comment: DeviceOptimized cs-1 rs-2, col-3 */}
          <div className="md:row-span-2 bg-card rounded-3xl p-8 border border-border relative overflow-hidden flex flex-col justify-between group hover:border-accent/40 transition-all duration-500 scroll-reveal-right stagger-2" style={{ gridRow: 'span 2' }}>
            {/* Noise texture */}
            <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />
            <div className="absolute top-[-30%] right-[-30%] w-48 h-48 bg-accent/10 rounded-full blur-[80px] pointer-events-none" />

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-6">
                <Icon name="DevicePhoneMobileIcon" size={24} />
              </div>
              <h3 className="font-bold text-2xl text-foreground mb-3">Device Optimized</h3>
              <p className="text-foreground/60 text-sm leading-relaxed mb-8">
                Our engine reads your RAM, CPU cores, and display refresh rate to generate the perfect sensitivity profile for your exact hardware.
              </p>

              {/* Device tiers visual */}
              <div className="space-y-3">
                {[
                  { tier: 'Low-End', ram: '2–3 GB', note: 'Stable, anti-shake config', color: '#6B6B8A' },
                  { tier: 'Mid-Range', ram: '4–6 GB', note: 'Balanced speed + precision', color: '#FF4500' },
                  { tier: 'High-End', ram: '8 GB+', note: 'Max speed, 90fps optimized', color: '#00F5FF' },
                ]?.map((d) => (
                  <div key={d?.tier} className="p-3 rounded-xl border border-border bg-muted/20">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-mono text-xs font-bold" style={{ color: d?.color }}>{d?.tier}</span>
                      <span className="font-mono text-xs text-muted-foreground">{d?.ram}</span>
                    </div>
                    <p className="text-xs text-foreground/50">{d?.note}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10 mt-4">
              <p className="font-mono text-xs text-accent/70 uppercase tracking-widest">
                ✓ Supports Free Fire MAX
              </p>
            </div>
          </div>

          {/* Card 3: Pro Settings — col-span-1 */}
          {/* BENTO STEP 4 comment: ProSettings cs-1 rs-1, col-1 */}
          <div className="glass-card-dark rounded-3xl p-8 border border-border group hover:border-primary/40 transition-all duration-500 flex flex-col justify-between scroll-reveal stagger-3">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                <Icon name="TrophyIcon" size={24} />
              </div>
              <h3 className="font-bold text-xl text-foreground mb-2">Pro Player Configs</h3>
              <p className="text-foreground/60 text-xs leading-relaxed">
                Claw grip, 2-finger, gyroscope — every playstyle covered with tournament-grade settings.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {['2-Finger', 'Claw', 'Gyro']?.map((tag) => (
                <span key={tag} className="px-2.5 py-1 rounded-full bg-muted/30 border border-border text-xs font-mono text-muted-foreground">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Card 4: Secure Payment — col-span-1 */}
          {/* BENTO STEP 4 comment: SecurePayment cs-1 rs-1, col-2 */}
          <div className="glass-card-dark rounded-3xl p-8 border border-border group hover:border-accent/40 transition-all duration-500 flex flex-col justify-between scroll-reveal stagger-4">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-5 group-hover:bg-accent/20 transition-colors duration-300">
                <Icon name="ShieldCheckIcon" size={24} />
              </div>
              <h3 className="font-bold text-xl text-foreground mb-2">Secure Payment</h3>
              <p className="text-foreground/60 text-xs leading-relaxed">
                256-bit encrypted checkout. All major cards, UPI, and digital wallets accepted. Your data stays private.
              </p>
            </div>
            <div className="flex items-center gap-2 mt-4">
              <Icon name="LockClosedIcon" size={14} className="text-accent" />
              <span className="font-mono text-xs text-accent/70">SSL Secured Checkout</span>
            </div>
          </div>

          {/* Card 5: Money Back — col-span-full */}
          {/* BENTO STEP 4 comment: MoneyBack cs-3 rs-1, col-1 */}
          <div className="md:col-span-3 glass-card-dark rounded-3xl p-8 border border-border relative overflow-hidden group hover:border-primary/30 transition-all duration-500 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 scroll-reveal stagger-5">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/3 via-transparent to-accent/3 pointer-events-none" />
            <div className="relative z-10 flex items-start sm:items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                <Icon name="StarIcon" size={28} />
              </div>
              <div>
                <h3 className="font-bold text-xl text-foreground mb-1">7-Day Satisfaction Guarantee</h3>
                <p className="text-foreground/60 text-sm">
                  If your aim doesn't improve in 7 days, we'll refund every rupee. No questions asked. That's how confident we are.
                </p>
              </div>
            </div>
            <div className="relative z-10 shrink-0">
              <span className="font-mono text-xs text-primary uppercase tracking-widest border border-primary/30 px-4 py-2 rounded-full">
                Zero Risk
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}