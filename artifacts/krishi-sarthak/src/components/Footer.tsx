import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Sprout } from 'lucide-react';
import { COMPANY_INFO } from '@/data/tradeData';

const navItems = [
  { label: 'Home', href: '/#home' },
  { label: 'About Us', href: '/about' },
  { label: 'Our Products', href: '/#products' },
  { label: 'Our Services', href: '/services' },
  { label: 'News & Blogs', href: '/#news' },
  { label: 'Careers', href: '/#careers' },
  { label: 'Contact Us', href: '/contact' },
];

const productCategories = [
  { label: 'Fresh Fruits & Vegetables', href: '/products/fresh-fruits-vegetables/' },
  { label: 'Frozen Vegetables', href: '/products/frozen-vegetables/' },
  { label: 'Dehydrated Powders', href: '/products/dehydrated-powders/' },
  { label: 'Spices & Herbs', href: '/products/spices-herbs/' },
  { label: 'Pulses & Grains', href: '/products/pulses-grains/' },
  { label: 'Dry Fruits & Nuts', href: '/products/dry-fruits-nuts/' },
  { label: 'Construction & Road Materials', href: '/products/construction-materials/' },
];

const tradeServices = [
  { label: 'Shipment Services', href: '/services/shipments' },
  { label: 'Global Trade Consultancy', href: '/services/global-trade-consultancy' },
  { label: 'Freight Forwarding & Logistics', href: '/services/freight-forwarding-logistics' },
  { label: 'Documentation Services', href: '/services/documentation-services' },
];

export function Footer() {
  return (
    <footer className="bg-[#173a2a] text-[#f7f4eb] border-t border-white/10">
      <div className="wrap grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.3fr_.75fr_.9fr_.85fr]">
        {/* Brand identity column */}
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full border border-[#D9A441]/60 text-[#D9A441]">
              <Sprout size={21} />
            </span>
            <span>
              <span className="block text-[11px] font-extrabold tracking-[.1em]">
                KRISHI SARTHAK
              </span>
              <span className="mt-1 block text-[8px] tracking-[.19em] text-white/55">
                VENTURES LLP
              </span>
            </span>
          </div>

          <p className="mt-5 max-w-sm font-display text-xl leading-snug text-[#f3dfb4]">
            {COMPANY_INFO.tagline}
          </p>
          <p className="mt-4 max-w-sm text-xs leading-6 text-white/60">
            Connecting businesses with agricultural products, sourcing opportunities and
            international trade solutions.
          </p>

          <div className="mt-5 flex gap-3 text-xs">
            <a
              href="/#contact"
              aria-label="LinkedIn (placeholder link)"
              className="grid h-8 w-8 place-items-center border border-white/25 hover:border-[#D9A441] hover:text-[#D9A441] transition-colors"
            >
              <Linkedin size={14} />
            </a>
            <a
              href="/#contact"
              aria-label="Facebook (placeholder link)"
              className="grid h-8 w-8 place-items-center border border-white/25 hover:border-[#D9A441] hover:text-[#D9A441] transition-colors"
            >
              <Facebook size={14} />
            </a>
            <a
              href="/#contact"
              aria-label="Instagram (placeholder link)"
              className="grid h-8 w-8 place-items-center border border-white/25 hover:border-[#D9A441] hover:text-[#D9A441] transition-colors"
            >
              <Instagram size={14} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[.18em] text-[#D9A441]">
            Quick links
          </p>
          <ul className="mt-5 space-y-3">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-xs text-white/70 transition hover:text-[#D9A441]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Product Categories */}
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[.18em] text-[#D9A441]">
            Product categories
          </p>
          <ul className="mt-5 space-y-3">
            {productCategories.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={`text-xs transition ${
                    item.label === 'Fresh Fruits & Vegetables'
                      ? 'text-[#f3dfb4] font-medium hover:text-white'
                      : 'text-white/70 hover:text-[#D9A441]'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Trade Services & Contact Placeholders */}
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[.18em] text-[#D9A441]">
            Trade services
          </p>
          <ul className="mt-5 space-y-3">
            {tradeServices.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-xs text-white/70 transition hover:text-[#D9A441]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-7 space-y-2 text-[10px] leading-5 text-white/65 border-t border-white/10 pt-4">
            <p>
              <span className="text-[#D9A441] font-semibold">Phone:</span>{' '}
              <a href={COMPANY_INFO.phoneTel} className="hover:underline">
                {COMPANY_INFO.phonePlaceholder}
              </a>
            </p>
            <p>
              <span className="text-[#D9A441] font-semibold">Email:</span>{' '}
              <a href={COMPANY_INFO.emailMailto} className="hover:underline">
                {COMPANY_INFO.emailPlaceholder}
              </a>
            </p>
            <p>
              <span className="text-[#D9A441] font-semibold">Address:</span>{' '}
              {COMPANY_INFO.addressPlaceholder}
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="wrap flex flex-col justify-between gap-2 py-5 text-[9px] text-white/50 sm:flex-row">
          <p>© 2026 KRISHI SARTHAK VENTURES LLP. All Rights Reserved.</p>
          <p>Company details and contact information are editable placeholders.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
