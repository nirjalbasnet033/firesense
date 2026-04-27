'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';
import { useCurrency, Currency } from '@/context/CurrencyContext';

const CURRENCIES: { value: Currency; label: string; flag: string }[] = [
  { value: 'INR', label: 'INR', flag: '🇮🇳' },
  { value: 'USD', label: 'USD', flag: '🇺🇸' },
  { value: 'NPR', label: 'NPR', flag: '🇳🇵' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currencyOpen, setCurrencyOpen] = useState(false);
  const { currency, setCurrency } = useCurrency();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  // Close currency dropdown on outside click
  useEffect(() => {
    if (!currencyOpen) return;
    const handler = () => setCurrencyOpen(false);
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, [currencyOpen]);

  const navLinks = [
    { label: 'Home Page', href: '/product-page' },
    { label: 'Features', href: '#features' },
    { label: 'Packages', href: '#pricing' },
    { label: 'Reviews', href: '#reviews' },
  ];

  const selectedCurrency = CURRENCIES.find((c) => c.value === currency)!;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-background/90 backdrop-blur-xl border-b border-border' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/product-page" className="flex items-center gap-2 group">
            <AppLogo size={36} />
            <span className="font-sans font-800 text-lg sm:text-xl tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
              Civilians<span className="text-primary"> Store</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 bg-card/60 backdrop-blur-md rounded-full px-2 py-1.5 border border-border">
            {navLinks?.map((link) => (
              <Link
                key={link?.label}
                href={link?.href}
                className="px-4 py-1.5 rounded-full text-xs font-semibold text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-200 uppercase tracking-wider"
              >
                {link?.label}
              </Link>
            ))}
          </nav>

          {/* CTA Group */}
          <div className="hidden md:flex items-center gap-3">
            {/* Currency Selector */}
            <div className="relative" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setCurrencyOpen(!currencyOpen)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-card/60 border border-border text-xs font-semibold text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all duration-200 uppercase tracking-wider"
              >
                <span>{selectedCurrency.flag}</span>
                <span>{selectedCurrency.label}</span>
                <Icon name="ChevronDownIcon" size={12} className={`transition-transform duration-200 ${currencyOpen ? 'rotate-180' : ''}`} />
              </button>
              {currencyOpen && (
                <div className="absolute right-0 top-full mt-2 w-32 bg-card border border-border rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.4)] z-50">
                  {CURRENCIES.map((c) => (
                    <button
                      key={c.value}
                      onClick={() => { setCurrency(c.value); setCurrencyOpen(false); }}
                      className={`w-full flex items-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider transition-colors duration-150 ${
                        currency === c.value
                          ? 'text-primary bg-primary/10' :'text-muted-foreground hover:text-foreground hover:bg-muted/30'
                      }`}
                    >
                      <span>{c.flag}</span>
                      <span>{c.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/login"
              className="text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider"
            >
              Login
            </Link>
            <Link
              href="/sign-up"
              className="neon-btn-orange px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden w-11 h-11 flex items-center justify-center text-foreground"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <Icon name={menuOpen ? 'XMarkIcon' : 'Bars3Icon'} size={24} />
          </button>
        </div>
      </header>
      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex flex-col pt-20"
          onClick={() => setMenuOpen(false)}
        >
          <nav className="flex flex-col items-center gap-6 pt-12" onClick={(e) => e?.stopPropagation()}>
            {navLinks?.map((link) => (
              <Link
                key={link?.label}
                href={link?.href}
                onClick={() => setMenuOpen(false)}
                className="text-xl font-bold text-foreground hover:text-primary transition-colors uppercase tracking-widest"
              >
                {link?.label}
              </Link>
            ))}

            {/* Mobile Currency Selector */}
            <div className="flex items-center gap-2 mt-2">
              {CURRENCIES.map((c) => (
                <button
                  key={c.value}
                  onClick={() => setCurrency(c.value)}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-full border text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                    currency === c.value
                      ? 'border-primary text-primary bg-primary/10' :'border-border text-muted-foreground hover:border-muted-foreground/40'
                  }`}
                >
                  <span>{c.flag}</span>
                  <span>{c.label}</span>
                </button>
              ))}
            </div>

            <div className="flex flex-col items-center gap-4 mt-8 w-full px-8">
              <Link
                href="/login"
                onClick={() => setMenuOpen(false)}
                className="w-full text-center neon-btn-outline py-3 rounded-full text-sm font-bold uppercase tracking-wider"
              >
                Login
              </Link>
              <Link
                href="/sign-up"
                onClick={() => setMenuOpen(false)}
                className="w-full text-center neon-btn-orange py-3 rounded-full text-sm font-bold uppercase tracking-wider"
              >
                Get Started
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}