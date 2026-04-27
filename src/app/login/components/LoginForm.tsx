'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';

export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.email.includes('@')) newErrors.email = 'Valid email required';
    if (formData.password.length < 1) newErrors.password = 'Password is required';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setLoading(true);
    // Mock submit
    setTimeout(() => setLoading(false), 2000);
  };

  const inputClass = (field: string) =>
    `w-full bg-input border rounded-xl px-4 py-3.5 text-sm text-foreground placeholder-muted-foreground transition-all duration-300 input-neon ${
      errors[field] ? 'border-red-500/60' : 'border-border'
    }`;

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-24 relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      {/* Atmospheric glows */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/8 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-accent/6 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-md">
        {/* Card */}
        <div className="glass-card-dark rounded-3xl p-8 sm:p-10 border border-border animate-border-glow">
          {/* Logo + Title */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <AppLogo size={40} />
              <span className="font-sans font-extrabold text-2xl tracking-tight">
                Fire<span className="text-primary">Sense</span>
              </span>
            </div>
            <h1 className="font-extrabold text-2xl text-foreground mb-2">Welcome Back</h1>
            <p className="text-sm text-muted-foreground">
              Log in to access your sensitivity configs.
            </p>
          </div>

          {/* Social Login */}
          <button className="w-full flex items-center justify-center gap-3 py-3 rounded-xl border border-border text-sm font-semibold text-foreground/70 hover:border-primary/40 hover:text-foreground hover:bg-muted/20 transition-all duration-300 mb-6">
            <Icon name="GlobeAltIcon" size={18} className="text-primary" />
            Continue with Google
          </button>

          <div className="flex items-center gap-3 mb-6">
            <div className="flex-1 h-px bg-border" />
            <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">or</span>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            {/* Email */}
            <div>
              <label className="block font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2">
                Email
              </label>
              <div className="relative">
                <Icon name="EnvelopeIcon" size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
                <input
                  type="email"
                  placeholder="player@gmail.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`${inputClass('email')} pl-10`}
                />
              </div>
              {errors.email && (
                <p className="mt-1.5 text-xs text-red-400 font-mono">{errors.email}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block font-mono text-xs text-muted-foreground uppercase tracking-wider">
                  Password
                </label>
                <Link href="#" className="font-mono text-xs text-primary hover:underline">
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <Icon name="LockClosedIcon" size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Your password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className={`${inputClass('password')} pl-10 pr-10`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  <Icon name={showPassword ? 'EyeSlashIcon' : 'EyeIcon'} size={16} />
                </button>
              </div>
              {errors.password && (
                <p className="mt-1.5 text-xs text-red-400 font-mono">{errors.password}</p>
              )}
            </div>

            {/* Remember me */}
            <label className="flex items-center gap-3 cursor-pointer group">
              <div className="relative shrink-0">
                <input
                  type="checkbox"
                  checked={formData.remember}
                  onChange={(e) => setFormData({ ...formData, remember: e.target.checked })}
                  className="sr-only"
                />
                <div
                  className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-200 ${
                    formData.remember
                      ? 'border-primary bg-primary' :'border-border group-hover:border-primary/50'
                  }`}
                >
                  {formData.remember && <Icon name="CheckIcon" size={12} className="text-white" />}
                </div>
              </div>
              <span className="text-sm text-muted-foreground">Remember me for 30 days</span>
            </label>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full neon-btn-orange py-4 rounded-xl text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed mt-2"
            >
              {loading ? (
                <>
                  <Icon name="ArrowPathIcon" size={16} className="animate-spin" />
                  Logging In...
                </>
              ) : (
                <>
                  Log In
                  <Icon name="ArrowRightIcon" size={16} />
                </>
              )}
            </button>
          </form>

          {/* Sign up link */}
          <p className="text-center text-sm text-muted-foreground mt-6">
            Don&apos;t have an account?{' '}
            <Link href="/sign-up" className="text-primary font-semibold hover:underline">
              Sign up free
            </Link>
          </p>
        </div>

        {/* Trust row */}
        <div className="flex items-center justify-center gap-6 mt-6">
          {[
            { icon: 'ShieldCheckIcon', text: 'SSL Secure' },
            { icon: 'LockClosedIcon', text: 'Encrypted' },
            { icon: 'UserCircleIcon', text: '52K+ Players' },
          ].map((b) => (
            <div key={b.text} className="flex items-center gap-1.5">
              <Icon name={b.icon as any} size={13} className="text-primary" />
              <span className="text-xs text-muted-foreground font-medium">{b.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}