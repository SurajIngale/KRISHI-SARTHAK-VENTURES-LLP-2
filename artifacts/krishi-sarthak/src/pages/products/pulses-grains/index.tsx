import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {
  ArrowRight,
  Check,
  ChevronRight,
  CircleHelp,
  Container,
  Droplets,
  FileCheck2,
  FileText,
  Filter,
  Flame,
  Globe2,
  Home,
  Layers,
  Leaf,
  Mail,
  MessageCircle,
  PackageCheck,
  Search,
  ShieldCheck,
  Sparkles,
  Sprout,
  Wheat,
  Zap,
} from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ProductCard } from '@/components/ProductCard';
import { GCC_COUNTRIES_EXPLANATION } from '@/data/tradeData';
import { PULSES_AND_GRAINS_PRODUCTS } from '@/data/pulsesGrainsData';

export default function PulsesGrainsPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const displayedProducts = PULSES_AND_GRAINS_PRODUCTS.filter((item) => {
    if (!searchQuery.trim()) return true;
    const query = searchQuery.toLowerCase();
    return (
      item.name.toLowerCase().includes(query) ||
      item.hsCode.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) ||
      item.markets.toLowerCase().includes(query) ||
      (item.varieties && item.varieties.toLowerCase().includes(query)) ||
      (item.productType && item.productType.toLowerCase().includes(query)) ||
      (item.additionalInfo && item.additionalInfo.toLowerCase().includes(query))
    );
  });

  return (
    <>
      <Head>
        <title>Pulses &amp; Grains | KRISHI SARTHAK VENTURES LLP</title>
        <meta
          name="description"
          content="Explore rice, maize, chickpeas, barley, and soybean meal for commercial and international trade with KRISHI SARTHAK VENTURES LLP."
        />
        <meta
          name="keywords"
          content="Pulses and Grains Export, Indian Basmati Rice, Non-Basmati Rice, Yellow Maize Corn, Chickpeas Kabuli Chana, Barley Grain, Soybean Meal, Agricultural Exports India, KRISHI SARTHAK VENTURES LLP"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Pulses &amp; Grains | KRISHI SARTHAK VENTURES LLP"
        />
        <meta
          property="og:description"
          content="Explore rice, maize, chickpeas, barley, and soybean meal for commercial and international trade with KRISHI SARTHAK VENTURES LLP."
        />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/categories/pulses-grains.jpeg`}
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
          {/* Breadcrumbs & Hero Header Section */}
          <section className="relative overflow-hidden bg-[#183c2c] text-[#f7f4eb] pt-8 pb-14 md:pt-12 md:pb-20 border-b border-[#2d523f]">
            {/* Ambient Background Decorative Elements */}
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
                    Pulses &amp; Grains
                  </li>
                </ol>
              </nav>

              {/* Main Category Title & Subtitle */}
              <div className="grid gap-8 lg:grid-cols-[1.3fr_.7fr] lg:items-end">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#D9A441]/40 bg-[#214c39] px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-[#D9A441]">
                    <Wheat size={13} />
                    <span>Pulses &amp; Grains Export Grade</span>
                  </div>

                  <h1 className="font-display mt-4 text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#fbf9f2]">
                    Wholesome Pulses &amp; Grains
                  </h1>

                  <p className="mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-[#d7ddd8]">
                    Export-grade Indian agricultural staples including world-renowned Basmati and Non-Basmati rice,
                    feed and industrial yellow maize, whole and split chickpeas, surplus-based barley, and high-protein
                    soybean meal. Sourced from prime agricultural zones, mechanically cleaned, Sortex-inspected, and
                    packaged for international containerized and bulk shipment.
                  </p>

                  <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-[#ebd7b0]">
                    <span className="inline-flex items-center gap-1.5">
                      <Sparkles size={14} className="text-[#D9A441]" />
                      Sortex Cleaned Grains
                    </span>
                    <span className="text-white/30">•</span>
                    <span className="inline-flex items-center gap-1.5">
                      <Layers size={14} className="text-[#D9A441]" />
                      Standard &amp; Custom Packaging
                    </span>
                    <span className="text-white/30">•</span>
                    <span className="inline-flex items-center gap-1.5">
                      <ShieldCheck size={14} className="text-[#D9A441]" />
                      Fumigated &amp; Quarantine Compliant
                    </span>
                  </div>
                </div>

                {/* Sourcing Overview Card */}
                <div className="rounded-xl border border-white/15 bg-white/[.07] p-6 backdrop-blur-xs">
                  <span className="text-[10px] font-bold uppercase tracking-[.18em] text-[#D9A441]">
                    Staple Commodities &amp; Feed Exports
                  </span>
                  <p className="font-display mt-2 text-xl font-medium text-[#fbf9f2]">
                    Bulk Vessel &amp; 20ft/40ft Container Cargo
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-white/70">
                    High-tensile PP bags, non-woven fabric bags, multi-wall paper packaging, and containerized bulk liners designed for institutional grain importers, flour millers, feed manufacturers, and food processing conglomerates worldwide.
                  </p>
                  <div className="mt-4 pt-3 border-t border-white/15 flex items-center justify-between text-xs text-[#ebd7b0]">
                    <span>High Volume Global Supply</span>
                    <Link
                      href="/contact?product=Pulses%20%26%20Grains"
                      className="inline-flex items-center gap-1 font-bold text-[#D9A441] hover:underline"
                    >
                      <span>Inquire Now</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* KEY PROCESS HIGHLIGHTS */}
          <section className="border-b border-[#e5decb] bg-[#f4eee1] py-8">
            <div className="wrap">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <div className="flex items-start gap-3.5">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[#214c39] text-[#D9A441]">
                    <Sparkles size={20} />
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-semibold text-[#183c2c]">
                      Optical Sortex Graded
                    </h3>
                    <p className="mt-1 text-xs text-[#526457]">
                      Advanced optical sorting removes foreign matter, discolored kernels, and broken grain.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[#214c39] text-[#D9A441]">
                    <Layers size={20} />
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-semibold text-[#183c2c]">
                      Flexible Packaging
                    </h3>
                    <p className="mt-1 text-xs text-[#526457]">
                      Supplied in 25kg / 50kg PP bags, jumbo tote bags, bulk liners, and buyer private label.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[#214c39] text-[#D9A441]">
                    <PackageCheck size={20} />
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-semibold text-[#183c2c]">
                      Controlled Fumigation
                    </h3>
                    <p className="mt-1 text-xs text-[#526457]">
                      Pre-shipment Methyl Bromide or Phosphine fumigation adhering to international plant health rules.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[#214c39] text-[#D9A441]">
                    <Globe2 size={20} />
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-semibold text-[#183c2c]">
                      Global Port Clearance
                    </h3>
                    <p className="mt-1 text-xs text-[#526457]">
                      Seamless documentation and phytosanitary clearance across GCC, Southeast Asia, and Africa.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* PRODUCT CATALOGUE SECTION */}
          <section id="products-catalog" className="section-pad">
            <div className="wrap">
              {/* Filter & Search Bar */}
              <div className="mb-10 flex flex-col justify-between gap-4 border-b border-[#e2dccf] pb-6 sm:flex-row sm:items-center">
                <div>
                  <span className="eyebrow">Export Specifications</span>
                  <h2 className="font-display mt-1 text-2xl sm:text-3xl font-medium text-[#183c2c]">
                    Grains &amp; Pulses Export Grade
                  </h2>
                  <p className="mt-1 text-xs text-[#6a7b6d]">
                    Showing {displayedProducts.length} export-grade staple commodities with certified specifications
                  </p>
                </div>

                {/* Search Input Box */}
                <div className="relative w-full sm:w-72">
                  <Search
                    size={15}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#7d887a]"
                  />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search grain, HS code, variety, market..."
                    aria-label="Search pulses and grains by name, HS code, or market"
                    className="w-full rounded-md border border-[#d6cfbe] bg-white py-2 pl-9 pr-3 text-xs text-[#203629] placeholder-[#909c8e] outline-none transition-colors focus:border-[#214c39] focus:ring-1 focus:ring-[#214c39]"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery('')}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs font-bold text-[#808d7e] hover:text-black"
                      aria-label="Clear search"
                    >
                      ✕
                    </button>
                  )}
                </div>
              </div>

              {/* PRODUCTS GRID */}
              {displayedProducts.length === 0 ? (
                <div className="rounded-lg border border-dashed border-[#d8cfb9] p-8 text-center bg-[#f7f3e8]">
                  <p className="text-sm text-[#5d6a5f]">No products matching &quot;{searchQuery}&quot;</p>
                </div>
              ) : (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {displayedProducts.map((product, idx) => (
                    <ProductCard
                      key={product.slug}
                      product={product}
                      priorityImage={idx < 3}
                    />
                  ))}
                </div>
              )}

              {/* GCC Definition Callout */}
              <div className="mt-12 rounded-lg border border-[#ded5c2] bg-[#f5efe2] p-5">
                <div className="flex items-start gap-3">
                  <CircleHelp size={17} className="mt-0.5 shrink-0 text-[#8b682d]" />
                  <div>
                    <h4 className="font-display text-xs font-bold uppercase tracking-wider text-[#183c2c]">
                      Trade Geographic Definition Notice
                    </h4>
                    <p className="mt-1 text-xs leading-relaxed text-[#506153]">
                      {GCC_COUNTRIES_EXPLANATION}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* EXPORT COMPLIANCE & PROTOCOLS SECTION */}
          <section className="bg-[#173a2a] text-[#f7f4eb] py-14 border-t border-white/10">
            <div className="wrap">
              <div className="grid gap-8 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[.2em] text-[#D9A441]">
                    Export Standards &amp; Quality Compliance
                  </span>
                  <h2 className="font-display mt-2 text-2xl sm:text-3xl font-medium text-[#fbf9f2]">
                    International Grain Export Documentation Protocols
                  </h2>
                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-white/70 max-w-2xl">
                    Commercial grain and pulse exports from India adhere to statutory quality assessments, international phytosanitary inspection, accredited moisture and purity certification, and mandatory port clearance procedures.
                  </p>
                </div>

                <div className="rounded-lg border border-white/15 bg-white/[.06] p-5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#D9A441]">
                    Customs &amp; Quality Clearance
                  </span>
                  <p className="mt-1.5 text-xs text-white/80 leading-relaxed">
                    Standard international shipment documentation including Phytosanitary Certificate, Certificate of Origin, Fumigation Certificate, and Independent Laboratory Analysis (SGS/Intertek) arranged according to buyer sales contracts.
                  </p>
                </div>
              </div>

              {/* Documentation Protocol Framework Grid */}
              <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <div className="flex flex-col justify-between rounded-lg border border-white/15 bg-white/[.05] p-4 transition-colors hover:border-[#D9A441]/60 hover:bg-white/[.08]">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="rounded-md border border-[#D9A441]/50 bg-[#D9A441]/15 px-2 py-0.5 font-mono text-xs font-bold text-[#D9A441]">
                        PHYTO
                      </span>
                      <Leaf size={16} className="text-[#D9A441]" />
                    </div>
                    <h3 className="font-display mt-3 text-base font-medium text-[#f7f4eb]">
                      Phytosanitary Certificate
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-white/70">
                      Official plant quarantine inspection certifying that grains and pulses are free from regulated pests and conform to importing country quarantine laws.
                    </p>
                  </div>
                  <span className="mt-4 pt-2 text-[9px] uppercase tracking-wider text-white/40 border-t border-white/10">
                    Statutory Quarantine Compliance
                  </span>
                </div>

                <div className="flex flex-col justify-between rounded-lg border border-white/15 bg-white/[.05] p-4 transition-colors hover:border-[#D9A441]/60 hover:bg-white/[.08]">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="rounded-md border border-[#D9A441]/50 bg-[#D9A441]/15 px-2 py-0.5 font-mono text-xs font-bold text-[#D9A441]">
                        FUMI
                      </span>
                      <PackageCheck size={16} className="text-[#D9A441]" />
                    </div>
                    <h3 className="font-display mt-3 text-base font-medium text-[#f7f4eb]">
                      Fumigation Certificate
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-white/70">
                      Accredited pre-shipment cargo treatment documentation verifying effective disinfestation prior to container sealing or vessel hold loading.
                    </p>
                  </div>
                  <span className="mt-4 pt-2 text-[9px] uppercase tracking-wider text-white/40 border-t border-white/10">
                    Cargo Protection Protocol
                  </span>
                </div>

                <div className="flex flex-col justify-between rounded-lg border border-white/15 bg-white/[.05] p-4 transition-colors hover:border-[#D9A441]/60 hover:bg-white/[.08]">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="rounded-md border border-[#D9A441]/50 bg-[#D9A441]/15 px-2 py-0.5 font-mono text-xs font-bold text-[#D9A441]">
                        COO
                      </span>
                      <Globe2 size={16} className="text-[#D9A441]" />
                    </div>
                    <h3 className="font-display mt-3 text-base font-medium text-[#f7f4eb]">
                      Certificate of Origin (COO)
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-white/70">
                      Authorized origin documentation enabling destination customs clearance and preferential trade agreement tariff verification.
                    </p>
                  </div>
                  <span className="mt-4 pt-2 text-[9px] uppercase tracking-wider text-white/40 border-t border-white/10">
                    Customs Clearance Verification
                  </span>
                </div>

                <div className="flex flex-col justify-between rounded-lg border border-white/15 bg-white/[.05] p-4 transition-colors hover:border-[#D9A441]/60 hover:bg-white/[.08]">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="rounded-md border border-[#D9A441]/50 bg-[#D9A441]/15 px-2 py-0.5 font-mono text-xs font-bold text-[#D9A441]">
                        INSP
                      </span>
                      <ShieldCheck size={16} className="text-[#D9A441]" />
                    </div>
                    <h3 className="font-display mt-3 text-base font-medium text-[#f7f4eb]">
                      Quality &amp; Weight Survey
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-white/70">
                      Independent pre-shipment inspection (SGS / Intertek) certifying grain moisture, purity percentage, broken grains limit, and draft survey weight.
                    </p>
                  </div>
                  <span className="mt-4 pt-2 text-[9px] uppercase tracking-wider text-white/40 border-t border-white/10">
                    Third-Party Survey Standard
                  </span>
                </div>
              </div>

              {/* Clarification Disclaimer */}
              <div className="mt-8 flex items-start gap-3 rounded-lg border border-white/15 bg-white/[.04] p-4 text-xs text-white/65">
                <CircleHelp size={16} className="mt-0.5 shrink-0 text-[#D9A441]" />
                <p>
                  <strong>Export Documentation Guidance:</strong> Reference compliance frameworks shown above represent standard export documentation protocols for commercial agricultural grains and pulses. Specific documentation (including Phytosanitary Certificate, Fumigation Certificate, Certificate of Origin, and independent survey reports) are executed according to individual buyer contract terms and destination country regulatory requirements.
                </p>
              </div>
            </div>
          </section>

          {/* DIRECT TRADE INQUIRY CTA SECTION */}
          <section className="bg-[#214c39] text-[#f7f4eb] py-14 border-t border-[#315f4a]">
            <div className="wrap flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-xl">
                <span className="text-[10px] font-bold uppercase tracking-[.18em] text-[#D9A441]">
                  Commercial Grain Procurement
                </span>
                <h2 className="font-display mt-2 text-2xl sm:text-3xl font-medium text-[#fbf9f2]">
                  Source Export-Quality Pulses &amp; Grains
                </h2>
                <p className="mt-2.5 text-xs sm:text-sm text-[#d0d8d2] leading-relaxed">
                  Connect directly with our commodity trading desk for current market pricing, indicative FOB/CIF quotes, vessel/container availability, and custom packaging configurations.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <Link
                  href="/contact?product=Pulses%20%26%20Grains"
                  className="inline-flex items-center gap-2 rounded-md bg-[#D9A441] px-5 py-3 text-xs font-bold text-[#0a1826] transition-transform hover:scale-105 active:scale-95 shadow-md"
                >
                  <Mail size={15} />
                  <span>Send Trade Enquiry</span>
                </Link>
                <Link
                  href="/#products"
                  className="inline-flex items-center gap-2 rounded-md border border-white/30 bg-white/10 px-4 py-3 text-xs font-bold text-[#f7f4eb] transition-colors hover:bg-white/20"
                >
                  <span>Explore Other Products</span>
                  <ArrowRight size={14} />
                </Link>
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
