import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo + Brand */}
          <Link href="/product-page" className="flex items-center gap-2 group">
            <AppLogo size={28} />
            <span className="font-sans font-800 text-base tracking-tight text-foreground group-hover:text-primary transition-colors">
              Civilians<span className="text-primary"> Store</span>
            </span>
          </Link>

          {/* Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
            {[
              { label: 'Home Page', href: '/product-page' },
              { label: 'Packages', href: '#pricing' },
              { label: 'Privacy', href: '#' },
              { label: 'Terms', href: '#' },
            ]?.map((link) => (
              <Link
                key={link?.label}
                href={link?.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link?.label}
              </Link>
            ))}
          </nav>

          {/* Social + Copyright */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              aria-label="Twitter"
              className="w-9 h-9 flex items-center justify-center rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
            >
              <Icon name="GlobeAltIcon" size={16} />
            </a>
            <a
              href="#"
              aria-label="Discord"
              className="w-9 h-9 flex items-center justify-center rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
            >
              <Icon name="ChatBubbleLeftRightIcon" size={16} />
            </a>
            <span className="text-xs text-muted-foreground">© 2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
}