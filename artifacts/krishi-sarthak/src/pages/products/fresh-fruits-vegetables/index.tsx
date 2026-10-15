import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {
  Apple,
  ArrowRight,
  BadgeCheck,
  Check,
  ChevronRight,
  CircleHelp,
  FileText,
  Filter,
  Globe2,
  Home,
  Layers,
  Leaf,
  MessageCircle,
  PackageCheck,
  Phone,
  Send,
  ShieldCheck,
  Ship,
  Sparkles,
  ThermometerSnowflake,
  Truck,
} from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ProductCard } from '@/components/ProductCard';
import {
  COMPANY_INFO,
  FRUIT_PRODUCTS,
  VEGETABLE_PRODUCTS,
  ALL_FRESH_PRODUCE,
  COMPLIANCE_ITEMS,
  GCC_COUNTRIES_EXPLANATION,
  getWhatsAppProductUrl,
} from '@/data/tradeData';

export default function FreshFruitsVegetablesPage() {
  const [filter, setFilter] = useState<'all' | 'fruit' | 'vegetable'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const displayedFruits = FRUIT_PRODUCTS.filter((p) =>
    searchQuery
      ? p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.hsCode.includes(searchQuery) ||
        (p.varieties && p.varieties.toLowerCase().includes(searchQuery.toLowerCase()))
      : true
  );

  const displayedVegetables = VEGETABLE_PRODUCTS.filter((p) =>
    searchQuery
      ? p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.hsCode.includes(searchQuery) ||
        (p.varieties && p.varieties.toLowerCase().includes(searchQuery.toLowerCase()))
      : true
  );

  return (
    <>
      <Head>
        <title>Fresh Fruits &amp; Vegetables | KRISHI SARTHAK VENTURES LLP</title>
        <meta
          name="description"
          content="Explore fresh fruits and vegetables for domestic and international trade, including apples, mangoes, grapes, onions, chilies, and other agricultural products from KRISHI SARTHAK VENTURES LLP."
        />
        <meta
          name="keywords"
          content="Fresh Fruits Export, Fresh Vegetables Export India, Apple Export, Cavendish Banana, Indian Onion Export, Dragon Fruit, Pomegranate Bhagwa, Grapes Export, Krishi Sarthak Ventures LLP, APEDA Compliant Produce"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Fresh Fruits & Vegetables | KRISHI SARTHAK VENTURES LLP"
        />
        <meta
          property="og:description"
          content="Explore fresh fruits and vegetables for domestic and international trade, including apples, mangoes, grapes, onions, chilies, and other agricultural products from KRISHI SARTHAK VENTURES LLP."
        />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/categories/fresh-fruits.jpeg`}
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className="grain min-h-[100dvh] flex flex-col bg-[#fbf9f2]">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-white focus:p-3 focus:text-black"
        >
          Skip to content
        </a>

        {/* Global Reusable Header */}
        <Navbar />

        <main id="main-content" className="flex-1">
          {/* Breadcrumbs & Page Header Hero */}
          <section className="relative overflow-hidden bg-[#183c2c] text-[#f7f4eb] pt-8 pb-14 md:pt-12 md:pb-20 border-b border-[#2d523f]">
            {/* Ambient Background Circles */}
            <div className="absolute -right-24 -top-36 h-96 w-96 rounded-full border border-white/[.07] pointer-events-none" />
            <div className="absolute -left-20 -bottom-28 h-80 w-80 rounded-full border border-white/[.05] pointer-events-none" />

            <div className="wrap relative">
              {/* Functional Breadcrumb Navigation */}
              <nav aria-label="Breadcrumb" className="mb-6">
                <ol className="flex flex-wrap items-center gap-1.5 text-xs text-[#d8d3c5]">
                  <li className="inline-flex items-center gap-1">
                    <Link
                      href="/#home"
                      className="inline-flex items-center gap-1.5 transition-colors hover:text-[#D9A441]"
                    >
                      <Home size={13} className="text-[#D9A441]" />
                      <span>Home</span>
                    </Link>
                  </li>
                  <li aria-hidden="true" className="text-white/40">
                    <ChevronRight size={13} />
                  </li>
                  <li className="inline-flex items-center gap-1">
                    <Link
                      href="/#products"
                      className="transition-colors hover:text-[#D9A441]"
                    >
                      Our Products
                    </Link>
                  </li>
                  <li aria-hidden="true" className="text-white/40">
                    <ChevronRight size={13} />
                  </li>
                  <li
                    aria-current="page"
                    className="font-semibold text-[#f3dfb4]"
                  >
                    Fresh Fruits &amp; Vegetables
                  </li>
                </ol>
              </nav>

              {/* Main Category Title & Subtitle */}
              <div className="grid gap-8 lg:grid-cols-[1.3fr_.7fr] lg:items-end">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#D9A441]/40 bg-[#214c39] px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-[#D9A441]">
                    <Sparkles size={13} />
                    <span>Agricultural Sourcing Portfolio</span>
                  </div>

                  <h1 className="font-display mt-4 text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#fbf9f2]">
                    Premium Fresh Fruits &amp; Vegetables
                  </h1>

                  <p className="mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-[#d7ddd8]">
                    Explore fresh fruits and vegetables for domestic and international trade,
                    including apples, mangoes, grapes, onions, chilies, and other agricultural
                    products from KRISHI SARTHAK VENTURES LLP.
                  </p>

                  {/* Highlights Badges */}
                  <div className="mt-6 flex flex-wrap gap-2.5 pt-2">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-white/15 bg-white/[.07] px-3 py-1.5 text-xs text-white/90">
                      <ThermometerSnowflake size={14} className="text-[#D9A441]" />
                      Reefer Cold-Chain Logistics
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-white/15 bg-white/[.07] px-3 py-1.5 text-xs text-white/90">
                      <ShieldCheck size={14} className="text-[#D9A441]" />
                      Phytosanitary &amp; Sortex Graded
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-white/15 bg-white/[.07] px-3 py-1.5 text-xs text-white/90">
                      <Ship size={14} className="text-[#D9A441]" />
                      Port &amp; Customs Cleared
                    </span>
                  </div>
                </div>

                {/* Quick Consultation Callout Box */}
                <div className="rounded-xl border border-white/20 bg-white/[.06] p-5 backdrop-blur-xs">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#D9A441]">
                    Export Sourcing Desk
                  </p>
                  <p className="font-display mt-2 text-xl font-normal text-white">
                    Need customized grading or container load quotes?
                  </p>
                  <p className="mt-2 text-xs text-white/70 leading-relaxed">
                    Our agricultural trade specialists assist with origin traceability,
                    pre-cooling, reefer bookings, and destination customs documents.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2.5">
                    <a
                      href={getWhatsAppProductUrl('Fresh Fruits and Vegetables')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-md bg-[#25D366] px-4 py-2 text-xs font-bold text-[#0a1826] transition-colors hover:bg-[#20ba59]"
                    >
                      <MessageCircle size={15} />
                      <span>WhatsApp Sourcing</span>
                    </a>
                    <Link
                      href="/#contact"
                      className="inline-flex items-center gap-1.5 rounded-md border border-white/30 bg-transparent px-3.5 py-2 text-xs font-bold text-white transition-colors hover:bg-white/15"
                    >
                      <span>Inquire Now</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Sticky Interactive Filter & Search Bar */}
          <section className="sticky top-0 z-30 border-b border-[#ded7c7] bg-[#f4eee1]/95 py-3.5 backdrop-blur-md shadow-xs">
            <div className="wrap flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              {/* Category Filter Tabs */}
              <div className="flex items-center gap-1 rounded-lg border border-[#d8cfbe] bg-[#ebe4d4] p-1">
                <button
                  type="button"
                  onClick={() => setFilter('all')}
                  className={`rounded-md px-3 py-1.5 text-xs font-bold transition-all ${
                    filter === 'all'
                      ? 'bg-[#214c39] text-[#f7f4eb] shadow-xs'
                      : 'text-[#506154] hover:text-[#183c2c]'
                  }`}
                >
                  All Produce ({ALL_FRESH_PRODUCE.length})
                </button>
                <button
                  type="button"
                  onClick={() => setFilter('fruit')}
                  className={`rounded-md px-3 py-1.5 text-xs font-bold transition-all ${
                    filter === 'fruit'
                      ? 'bg-[#214c39] text-[#f7f4eb] shadow-xs'
                      : 'text-[#506154] hover:text-[#183c2c]'
                  }`}
                >
                  Fresh Fruits ({FRUIT_PRODUCTS.length})
                </button>
                <button
                  type="button"
                  onClick={() => setFilter('vegetable')}
                  className={`rounded-md px-3 py-1.5 text-xs font-bold transition-all ${
                    filter === 'vegetable'
                      ? 'bg-[#214c39] text-[#f7f4eb] shadow-xs'
                      : 'text-[#506154] hover:text-[#183c2c]'
                  }`}
                >
                  Fresh Vegetables ({VEGETABLE_PRODUCTS.length})
                </button>
              </div>

              {/* Search input */}
              <div className="relative w-full sm:w-64">
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search variety, HS Code..."
                  className="w-full rounded-md border border-[#d8cfbe] bg-[#fbf9f2] px-3 py-1.5 text-xs text-[#214c39] placeholder-[#8b806d] outline-none focus:border-[#214c39] focus:ring-1 focus:ring-[#214c39]"
                />
              </div>
            </div>
          </section>

          {/* FRUITS SECTION */}
          {(filter === 'all' || filter === 'fruit') && (
            <section id="fruits" className="section-pad">
              <div className="wrap">
                {/* Fruit Section Heading */}
                <div className="flex flex-col justify-between gap-4 border-b border-[#ded7c7] pb-6 md:flex-row md:items-end">
                  <div>
                    <span className="eyebrow">Category 01 · Perishable &amp; Reefer Cargo</span>
                    <h2 className="section-title mt-2 text-[#183c2c]">
                      Fresh Fruits Import-Export Grade
                    </h2>
                    <p className="body-copy mt-2 max-w-2xl text-xs sm:text-sm">
                      Sourced directly from verified growers and regional orchard clusters. Each
                      fruit consignment undergoes stringent pre-cooling, uniform caliper sorting,
                      phytosanitary inspection, and refrigerated cold-chain transit.
                    </p>
                  </div>
                  <div className="shrink-0 text-xs text-[#7e735d]">
                    Showing <strong className="text-[#183c2c]">{displayedFruits.length}</strong> fruit products
                  </div>
                </div>

                {/* Fruit Product Cards Grid */}
                {displayedFruits.length > 0 ? (
                  <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {displayedFruits.map((product, idx) => (
                      <ProductCard
                        key={product.name}
                        product={product}
                        priorityImage={idx < 3}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="mt-8 rounded-lg border border-dashed border-[#d8cfbe] p-8 text-center text-xs text-[#718074]">
                    No fruit products match your search query &quot;{searchQuery}&quot;.
                  </div>
                )}
              </div>
            </section>
          )}

          {/* VEGETABLES SECTION */}
          {(filter === 'all' || filter === 'vegetable') && (
            <section
              id="vegetables"
              className={`section-pad ${filter === 'all' ? 'bg-[#f4efe3] border-t border-[#e2dccf]' : ''}`}
            >
              <div className="wrap">
                {/* Vegetable Section Heading */}
                <div className="flex flex-col justify-between gap-4 border-b border-[#ded7c7] pb-6 md:flex-row md:items-end">
                  <div>
                    <span className="eyebrow">Category 02 · Farm Fresh Export Staples</span>
                    <h2 className="section-title mt-2 text-[#183c2c]">
                      Fresh Vegetables Export Grade
                    </h2>
                    <p className="body-copy mt-2 max-w-2xl text-xs sm:text-sm">
                      Procured from certified farming belts across India with strict sorting for size,
                      color, maturity, and storage endurance. Packed in ventilated mesh bags or
                      export-grade cartons to ensure extended fresh arrival quality.
                    </p>
                  </div>
                  <div className="shrink-0 text-xs text-[#7e735d]">
                    Showing <strong className="text-[#183c2c]">{displayedVegetables.length}</strong> vegetable products
                  </div>
                </div>

                {/* Vegetable Product Cards Grid */}
                {displayedVegetables.length > 0 ? (
                  <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {displayedVegetables.map((product) => (
                      <ProductCard key={product.name} product={product} />
                    ))}
                  </div>
                ) : (
                  <div className="mt-8 rounded-lg border border-dashed border-[#d8cfbe] p-8 text-center text-xs text-[#718074]">
                    No vegetable products match your search query &quot;{searchQuery}&quot;.
                  </div>
                )}
              </div>
            </section>
          )}

          {/* GCC Trade Destinations Reference Note */}
          <section className="bg-[#ede7d8] py-8 border-y border-[#ddd5c2]">
            <div className="wrap flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs text-[#526457]">
              <div className="flex items-start gap-3">
                <Globe2 size={20} className="mt-0.5 shrink-0 text-[#967235]" />
                <div>
                  <h3 className="font-bold text-[#1d392d]">
                    International Target Markets &amp; Regional Trade
                  </h3>
                  <p className="mt-1 leading-relaxed max-w-3xl">
                    {GCC_COUNTRIES_EXPLANATION} In addition, trade corridors cover key destinations
                    in Europe, Southeast Asia, South Asia, and North America based on product
                    seasonality and import requirements.
                  </p>
                </div>
              </div>
              <span className="shrink-0 text-[10px] uppercase tracking-wider font-semibold text-[#8b682d] border border-[#d8cfbe] bg-[#fbf9f2] px-3 py-1.5 rounded-md">
                Phytosanitary Protocols Adhered
              </span>
            </div>
          </section>

          {/* EXPORT DOCUMENTATION & COMPLIANCE SECTION */}
          <section id="compliance" className="section-pad bg-[#214c39] text-[#f7f4eb]">
            <div className="wrap">
              <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end border-b border-white/15 pb-8">
                <div>
                  <span className="eyebrow !text-[#D9A441]">Trade Readiness &amp; Certification</span>
                  <h2 className="font-display mt-2 text-3xl md:text-4xl text-[#f7f4eb]">
                    Export Documentation &amp; Compliance
                  </h2>
                  <p className="mt-3 max-w-2xl text-xs sm:text-sm text-white/75 leading-relaxed">
                    Applicable certification, laboratory testing, and registration requirements
                    depend on the specific agricultural product, destination country regulations,
                    and buyer quality specifications. KRISHI SARTHAK VENTURES LLP adheres to
                    applicable domestic and destination market standards.
                  </p>
                </div>
                <div className="flex items-center gap-2 rounded-lg border border-white/20 bg-white/[.07] px-4 py-2.5 text-xs text-white/90">
                  <ShieldCheck size={18} className="text-[#D9A441]" />
                  <span>Destination-Specific Compliance</span>
                </div>
              </div>

              {/* Compliance Badges Grid */}
              <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {COMPLIANCE_ITEMS.map((item) => (
                  <div
                    key={item.code}
                    className="flex flex-col justify-between rounded-lg border border-white/15 bg-white/[.05] p-4 transition-colors hover:border-[#D9A441]/60 hover:bg-white/[.08]"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="rounded-md border border-[#D9A441]/50 bg-[#D9A441]/15 px-2 py-0.5 font-mono text-xs font-bold text-[#D9A441]">
                          {item.code}
                        </span>
                        <BadgeCheck size={16} className="text-[#D9A441]" />
                      </div>
                      <h3 className="font-display mt-3 text-base font-medium text-[#f7f4eb]">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-xs leading-relaxed text-white/70">
                        {item.desc}
                      </p>
                    </div>
                    <span className="mt-4 pt-2 text-[9px] uppercase tracking-wider text-white/40 border-t border-white/10">
                      Standard Regulatory Framework
                    </span>
                  </div>
                ))}
              </div>

              {/* Clarification Disclaimer */}
              <div className="mt-8 flex items-start gap-3 rounded-lg border border-white/15 bg-white/[.04] p-4 text-xs text-white/65">
                <CircleHelp size={16} className="mt-0.5 shrink-0 text-[#D9A441]" />
                <p>
                  <strong>Export Documentation Guidance:</strong> Reference compliance frameworks
                  shown above illustrate standard trade regulatory prerequisites. Mandatory
                  certificates (e.g. Phytosanitary Certificate, Certificate of Origin, Form 1
                  Laboratory Analysis, Reefer Temperature Logs) are verified and arranged according
                  to the contract specifications of each individual consignment.
                </p>
              </div>
            </div>
          </section>

          {/* SOURCING CONSULTATION CTA SECTION */}
          <section className="section-pad bg-[#fbf9f2]">
            <div className="wrap">
              <div className="rounded-2xl border border-[#ded7c7] bg-gradient-to-br from-[#f8f4ea] to-[#efe7d5] p-8 md:p-12 shadow-sm">
                <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
                  <div>
                    <span className="eyebrow">Direct Sourcing Coordination</span>
                    <h2 className="font-display mt-3 text-3xl md:text-4xl text-[#183c2c]">
                      Ready to Discuss Your Fresh Produce Consignment?
                    </h2>
                    <p className="body-copy mt-4 text-xs sm:text-sm leading-relaxed">
                      Whether you require customized packaging, specialized grading, trial mixed
                      containers, or seasonal supply planning across GCC and global markets, our trade
                      team is ready to provide transparent pricing and logistics coordination.
                    </p>

                    <div className="mt-6 space-y-2 text-xs text-[#4c5e50]">
                      <div className="flex items-center gap-2">
                        <Check size={15} className="text-[#214c39]" />
                        <span>Direct farm cluster sourcing with pre-cooling protocols</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check size={15} className="text-[#214c39]" />
                        <span>Reefer container booking and temperature data logger tracking</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check size={15} className="text-[#214c39]" />
                        <span>Transparent export documentation and phytosanitary clearance</span>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl border border-[#ddd5c2] bg-white p-6 shadow-md">
                    <p className="font-display text-xl text-[#1d392d]">
                      Connect with Our Export Desk
                    </p>
                    <p className="mt-1 text-xs text-[#6e7d70]">
                      Send your inquiry or chat directly with our trade team.
                    </p>

                    <div className="mt-6 space-y-3">
                      <a
                        href={getWhatsAppProductUrl('Fresh Fruits & Vegetables Portfolio')}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex w-full items-center justify-center gap-2.5 rounded-lg bg-[#25D366] px-5 py-3 text-xs font-bold text-[#0a1826] transition-all hover:bg-[#20ba59] shadow-xs"
                      >
                        <MessageCircle size={17} />
                        <span>Chat on WhatsApp ({COMPANY_INFO.displayWhatsapp})</span>
                      </a>

                      <Link
                        href="/#contact"
                        className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#214c39] px-5 py-3 text-xs font-bold text-[#f7f4eb] transition-all hover:bg-[#183c2c] shadow-xs"
                      >
                        <Send size={15} className="text-[#D9A441]" />
                        <span>Send Formal Trade Inquiry</span>
                      </Link>
                    </div>

                    <div className="mt-5 border-t border-[#ede7d8] pt-4 text-[11px] text-[#788577] text-center">
                      <p>
                        Email:{' '}
                        <a href={COMPANY_INFO.emailMailto} className="underline text-[#214c39]">
                          {COMPANY_INFO.emailPlaceholder}
                        </a>
                      </p>
                      <p className="mt-1">
                        Phone:{' '}
                        <a href={COMPANY_INFO.phoneTel} className="underline text-[#214c39]">
                          {COMPANY_INFO.phonePlaceholder}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Global Reusable Footer */}
        <Footer />
      </div>
    </>
  );
}
