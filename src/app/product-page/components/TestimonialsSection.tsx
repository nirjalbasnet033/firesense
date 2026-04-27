import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const reviews = [
{
  name: 'Arjun Mehta',
  handle: '@arjun_ff_pro',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1dec94b7b-1764742661316.png",
  rating: 5,
  tier: 'Elite',
  text: 'My headshot rate jumped from 31% to 68% in one week. The claw grip config is insane. Worth every rupee.',
  stat: '+37% headshots'
},
{
  name: 'Riya Sharma',
  handle: '@riya_clutch',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_19c628fd8-1772488354552.png",
  rating: 5,
  tier: 'Pro',
  text: 'Finally a config that works on my Redmi Note. The low-end device optimization is real — no lag, stable aim.',
  stat: '2.4 → 4.1 K/D'
},
{
  name: 'Vikram Singh',
  handle: '@vikram_sniper',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_179e6bc6f-1775881665766.png",
  rating: 5,
  tier: 'Elite',
  text: 'Sniper sensitivity at 35 is perfect. Long-range shots that I was missing before are now consistent. Reached Heroic this season.',
  stat: 'Reached Heroic'
},
{
  name: 'Priya Nair',
  handle: '@priya_booyah',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1e3ff55c9-1768462533538.png",
  rating: 5,
  tier: 'Pro',
  text: 'Instant download worked in literally 3 seconds. Applied the config, jumped into ranked, got 8 kills first match. No cap.',
  stat: '8 kills first match'
},
{
  name: 'Kabir Patel',
  handle: '@kabir_elite_ff',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1580232a4-1766337558354.png",
  rating: 5,
  tier: 'Basic',
  text: 'Started with Basic since I\'m new. The 2-finger beginner config made me feel like a different player. Upgrading to Pro next.',
  stat: 'Rank up in 2 weeks'
},
{
  name: 'Ananya Reddy',
  handle: '@ananya_ff',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1fdb21419-1770505423682.png",
  rating: 4,
  tier: 'Pro',
  text: 'Really solid configs. The Clash Squad settings are different from BR which is smart. Support team was also quick to respond.',
  stat: 'Top 10 consistently'
}];


function StarRating({ rating }: {rating: number;}) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) =>
      <Icon
        key={i}
        name="StarIcon"
        variant={i < rating ? 'solid' : 'outline'}
        size={14}
        className={i < rating ? 'star-filled' : 'star-empty'} />

      )}
    </div>);

}

const tierColors: Record<string, string> = {
  Basic: '#6B6B8A',
  Pro: '#FF4500',
  Elite: '#00F5FF'
};

export default function TestimonialsSection() {
  return (
    <section id="reviews" className="py-20 sm:py-28 bg-secondary relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[600px] h-[400px] bg-primary/4 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="mb-14 text-center scroll-reveal">
          <span className="font-mono text-xs text-primary uppercase tracking-widest block mb-4">
            // Player Reviews
          </span>
          <h2 className="font-extrabold tracking-tight leading-tight mb-4" style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)' }}>
            52,000+ Players
            <span className="text-primary"> Can't Be Wrong.</span>
          </h2>
          <p className="text-foreground/60 text-sm max-w-md mx-auto">
            Real players. Real results. See what the Civilian Sensi community is saying.
          </p>
          {/* Overall rating */}
          <div className="inline-flex items-center gap-3 mt-6 px-6 py-3 rounded-full glass-dark border border-primary/20">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) =>
              <Icon key={i} name="StarIcon" variant="solid" size={16} className="star-filled" />
              )}
            </div>
            <span className="font-mono font-bold text-foreground">4.9</span>
            <span className="text-xs text-muted-foreground">from 3,200+ reviews</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((review, i) =>
          <div
            key={review.name}
            className="glass-card-dark rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-500 group flex flex-col justify-between scroll-reveal"
            style={{ animationDelay: `${i * 80}ms`, transitionDelay: `${i * 80}ms` }}>

              {/* Top row */}
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-border group-hover:border-primary/40 transition-colors">
                      <AppImage
                      src={review.avatar}
                      alt={`${review.name} profile photo`}
                      width={40}
                      height={40}
                      className="object-cover" />

                    </div>
                    <div>
                      <p className="font-bold text-sm text-foreground leading-tight">{review.name}</p>
                      <p className="font-mono text-xs text-muted-foreground">{review.handle}</p>
                    </div>
                  </div>
                  <span
                  className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider border"
                  style={{ color: tierColors[review.tier], borderColor: `${tierColors[review.tier]}40`, background: `${tierColors[review.tier]}10` }}>

                    {review.tier}
                  </span>
                </div>

                <StarRating rating={review.rating} />

                <p className="text-sm text-foreground/70 leading-relaxed mt-3">
                  {review.text}
                </p>
              </div>

              {/* Stat badge */}
              <div className="mt-4 pt-4 border-t border-border flex items-center gap-2">
                <Icon name="ArrowTrendingUpIcon" size={14} className="text-primary" />
                <span className="font-mono text-xs font-bold text-primary">{review.stat}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}