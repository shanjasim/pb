import React, { useEffect, useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import logo from "@/assets/images/logo.png";

const Header: React.FC = () => {
  const whatsappHref = "https://wa.me/919072616100?text=Hi!%20I'm%20interested%20in%2021%20days%20personal%20branding%20program.%20Can%20you%20help%20me%20choose%20the%20right%20plan%3F";

  const navRef = useRef<HTMLDivElement | null>(null);
  const linkRefs = {
    how: useRef<HTMLButtonElement | null>(null),
    who: useRef<HTMLButtonElement | null>(null),
    pricing: useRef<HTMLButtonElement | null>(null),
  };

  const [underline, setUnderline] = useState<{ left: number; width: number }>({ left: 0, width: 0 });
  const [mobileOpen, setMobileOpen] = useState(false);

  const moveUnderlineTo = (el: HTMLButtonElement | null) => {
    if (!el || !navRef.current) return;
    const navLeft = navRef.current.getBoundingClientRect().left;
    const rect = el.getBoundingClientRect();
    const left = rect.left - navLeft;
    const width = rect.width;
    setUnderline({ left, width });
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileOpen(false);
  };

  const scrollToPricing = () => {
    scrollToSection('pricing-section');
    moveUnderlineTo(linkRefs.pricing.current);
  };

  useEffect(() => {
    // Place the underline initially under Pricing
    moveUnderlineTo(linkRefs.pricing.current);

    // Update underline on window resize
    const onResize = () => moveUnderlineTo(linkRefs.pricing.current!);
    window.addEventListener('resize', onResize);

    // IntersectionObserver to update active link on scroll
    const sections = [
      { id: 'how-it-works', ref: linkRefs.how },
      { id: 'who-is-this-for', ref: linkRefs.who },
      { id: 'pricing-section', ref: linkRefs.pricing },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        // pick the entry with greatest intersection ratio
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        const match = sections.find((s) => s.id === visible.target.id);
        if (match) moveUnderlineTo(match.ref.current);
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('resize', onResize);
      observer.disconnect();
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between gap-6">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 py-1">
            <img src={logo} alt="edapt logo" className="h-9 md:h-10 w-auto object-contain" />
          </a>

          {/* Nav - tailored to page sections */}
          <nav ref={navRef} className="relative hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">
            <button
              ref={linkRefs.how}
              onClick={() => { scrollToSection('how-it-works'); moveUnderlineTo(linkRefs.how.current); }}
              className="hover:text-slate-900 transition-colors cursor-pointer"
            >
              How it works
            </button>
            <button
              ref={linkRefs.who}
              onClick={() => { scrollToSection('who-is-this-for'); moveUnderlineTo(linkRefs.who.current); }}
              className="hover:text-slate-900 transition-colors cursor-pointer"
            >
              Who it's for
            </button>
            <button
              ref={linkRefs.pricing}
              onClick={() => { scrollToSection('pricing-section'); moveUnderlineTo(linkRefs.pricing.current); }}
              className="cursor-pointer"
            >
              Pricing
            </button>
            {/* Animated underline */}
            <span
              className="absolute -bottom-2 h-0.5 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full transition-all duration-300"
              style={{ left: underline.left, width: underline.width }}
            />
          </nav>

          {/* Actions: WhatsApp + Join */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-purple-200 px-4 py-2 text-sm font-medium text-purple-700 bg-white hover:bg-purple-50 transition-colors"
            >
              <span>💬</span> WhatsApp
            </a>
            <Button onClick={scrollToPricing} className="rounded-xl bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white shadow-lg">
              Join Now
            </Button>
          </div>

          {/* Mobile actions */}
          <div className="md:hidden flex items-center gap-2">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-lg border border-purple-200 px-2.5 py-1.5 text-xs font-medium text-purple-700 bg-white hover:bg-purple-50 transition-colors"
            >
              💬 WhatsApp
            </a>
            <button
              aria-label="Open menu"
              onClick={() => setMobileOpen((v) => !v)}
              className="rounded-lg border border-slate-200 px-2.5 py-1.5 text-sm"
            >
              Menu
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white/95 backdrop-blur">
          <div className="max-w-7xl mx-auto px-6 py-3 grid grid-cols-1 gap-2 text-sm">
            <button onClick={() => scrollToSection('how-it-works')} className="text-left py-2">How it works</button>
            <button onClick={() => scrollToSection('who-is-this-for')} className="text-left py-2">Who it's for</button>
            <button onClick={() => scrollToSection('pricing-section')} className="text-left py-2">Pricing</button>
            <Button onClick={() => { scrollToSection('pricing-section'); }} className="mt-2 w-full rounded-xl bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white">
              Join Now
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
