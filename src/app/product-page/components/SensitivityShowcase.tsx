import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const sensSettings = [
  { label: 'General', value: '195', desc: 'Smooth long-range movement', color: '#FF4500' },
  { label: 'Red Dot', value: '90', desc: 'Fast close-range headshots', color: '#FF4500' },
  { label: '2× Scope', value: '82', desc: 'Mid-range precision control', color: '#00F5FF' },
  { label: '4× Scope', value: '68', desc: 'Balanced zoom accuracy', color: '#00F5FF' },
  { label: 'Sniper', value: '35', desc: 'Pinpoint long-distance shots', color: '#FF4500' },
  { label: 'Free Look', value: '78', desc: 'Fluid camera awareness', color: '#00F5FF' },
];

const transformStats = [
  { before: '34%', after: '71%', metric: 'Headshot Rate' },
  { before: '2.1', after: '4.8', metric: 'K/D Ratio' },
  { before: '180ms', after: '95ms', metric: 'Reaction Time' },
];

export default function SensitivityShowcase() {
  return (
    <section id="features" className="py-20 sm:py-28 bg-secondary relative overflow-hidden">
      {/* Atmospheric glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-16 scroll-reveal">
          <span className="font-mono text-xs text-primary uppercase tracking-widest block mb-4">
            // Sensitivity Engine
          </span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="font-extrabold tracking-tight leading-tight" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
              Real Numbers,
              <br />
              <span className="text-primary">Real Results.</span>
            </h2>
            <p className="text-foreground/60 text-sm leading-relaxed max-w-sm">
              Every value is calibrated for your device's RAM, CPU, and screen resolution.
              No generic settings — only what works for <em>your</em> hardware.
            </p>
          </div>
        </div>

        {/* Main grid: sensitivity values + before/after */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Sensitivity Values Panel */}
          <div className="glass-card-dark rounded-3xl p-6 sm:p-8 border border-border scroll-reveal-left">
            <div className="flex items-center justify-between mb-6">
              <p className="font-mono text-xs text-accent uppercase tracking-widest">
                Pro Config — Mid-Range Device
              </p>
              <span className="px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono text-primary">
                LIVE
              </span>
            </div>

            <div className="space-y-3">
              {sensSettings?.map((setting, i) => (
                <div
                  key={setting?.label}
                  className="flex items-center gap-4 p-3 rounded-xl bg-muted/20 border border-border hover:border-primary/30 transition-all duration-300 group"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <div className="w-24 shrink-0">
                    <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                      {setting?.label}
                    </span>
                  </div>
                  {/* Progress bar */}
                  <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-700 group-hover:brightness-125"
                      style={{
                        width: `${(parseInt(setting?.value) / 200) * 100}%`,
                        background: `linear-gradient(90deg, ${setting?.color}80, ${setting?.color})`,
                      }}
                    />
                  </div>
                  <span
                    className="font-mono font-bold text-lg w-12 text-right"
                    style={{ color: setting?.color, textShadow: `0 0 12px ${setting?.color}60` }}
                  >
                    {setting?.value}
                  </span>
                  <span className="hidden sm:block text-xs text-muted-foreground w-40 shrink-0">
                    {setting?.desc}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-xl bg-accent/5 border border-accent/20">
              <p className="font-mono text-xs text-accent/80 leading-relaxed">
                <span className="text-accent font-bold">→</span> Battle Royale: General 195 for long-range precision
                <br />
                <span className="text-accent font-bold">→</span> Clash Squad: General 200 for close-quarters speed
              </p>
            </div>
          </div>

          {/* Before / After Transformation */}
          <div className="flex flex-col gap-6 scroll-reveal-right">
            <div className="glass-card-dark rounded-3xl p-6 sm:p-8 border border-border flex-1">
              <p className="font-mono text-xs text-primary uppercase tracking-widest mb-6">
                Player Transformation
              </p>
              <div className="space-y-6">
                {transformStats?.map((stat) => (
                  <div key={stat?.metric}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold text-foreground/60 uppercase tracking-wider">
                        {stat?.metric}
                      </span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex-1 text-center p-3 rounded-xl bg-muted/30 border border-border">
                        <p className="font-mono text-xs text-muted-foreground mb-1">Before</p>
                        <p className="font-mono font-bold text-xl text-foreground/40">{stat?.before}</p>
                      </div>
                      <Icon name="ArrowRightIcon" size={20} className="text-primary shrink-0" />
                      <div className="flex-1 text-center p-3 rounded-xl bg-primary/10 border border-primary/30">
                        <p className="font-mono text-xs text-primary/70 mb-1">After</p>
                        <p className="font-mono font-bold text-xl text-primary">{stat?.after}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA card */}
            <div className="glass-card-dark rounded-3xl p-6 border border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
              <p className="font-extrabold text-xl text-foreground mb-2">
                Ready to <span className="text-primary">level up?</span>
              </p>
              <p className="text-sm text-foreground/60 mb-5">
                Get your device-specific config in under 60 seconds.
              </p>
              <Link
                href="/sign-up"
                className="neon-btn-orange px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider inline-flex items-center gap-2"
              >
                Get Instant Access
                <Icon name="BoltIcon" size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}