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
  Zap,
} from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ProductCard } from '@/components/ProductCard';
import {
  COMPANY_INFO,
  GCC_COUNTRIES_EXPLANATION,
} from '@/data/tradeData';
import {
  SPICES_AND_HERBS_PRODUCTS,
  HERBAL_PRODUCTS,
} from '@/data/spicesHerbsData';

export default function SpicesHerbsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'all' | 'spices' | 'herbal'>('all');

  const filterItem = (item: (typeof SPICES_AND_HERBS_PRODUCTS)[0]) => {
    if (!searchQuery.trim()) return true;
    const query = searchQuery.toLowerCase();
    return (
      item.name.toLowerCase().includes(query) ||
      item.hsCode.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) ||
      item.markets.toLowerCase().includes(query) ||
      (item.productType && item.productType.toLowerCase().includes(query)) ||
      (item.productForm && item.productForm.toLowerCase().includes(query)) ||
      (item.varieties && item.varieties.toLowerCase().includes(query)) ||
      (item.usage && item.usage.toLowerCase().includes(query))
    );
  };

  const filteredSpices = SPICES_AND_HERBS_PRODUCTS.filter(filterItem);
  const filteredHerbal = HERBAL_PRODUCTS.filter(filterItem);
  const totalCount = (activeTab === 'all' || activeTab === 'spices' ? filteredSpices.length : 0) +
    (activeTab === 'all' || activeTab === 'herbal' ? filteredHerbal.length : 0);

  return (
    <>
      <Head>
        <title>Spices, Herbs &amp; Herbal Products | KRISHI SARTHAK VENTURES LLP</title>
        <meta
          name="description"
          content="Explore export-oriented spices, whole seeds, dried herbs, and herbal products, including Black Pepper, Cardamom, Turmeric, Ashwagandha, and Shatavari from KRISHI SARTHAK VENTURES LLP."
        />
        <meta
          name="keywords"
          content="Spices Export India, Whole Spices, Green Cardamom, Black Pepper, Turmeric Curcumin, Cumin Seeds, Carom Seeds, Dried Ginger, Fenugreek Seeds, Mustard Seeds, Tamarind, Red Dry Chilli, Coriander Seeds, Haritaki, Ashwagandha, Shatavari, KRISHI SARTHAK VENTURES LLP"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Spices, Herbs &amp; Herbal Products | KRISHI SARTHAK VENTURES LLP"
        />
        <meta
          property="og:description"
          content="Explore export-oriented spices, whole seeds, dried herbs, and herbal products, including Black Pepper, Cardamom, Turmeric, Ashwagandha, and Shatavari from KRISHI SARTHAK VENTURES LLP."
        />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/categories/spices-herbs.jpeg`}
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
            {/* Ambient Decorative Shapes */}
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
                    Spices &amp; Herbs
                  </li>
                </ol>
              </nav>

              {/* Main Category Title & Subtitle */}
              <div className="grid gap-8 lg:grid-cols-[1.3fr_.7fr] lg:items-end">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#D9A441]/40 bg-[#214c39] px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-[#D9A441]">
                    <Sparkles size={13} />
                    <span>Spices &amp; Herbs Export Grade</span>
                  </div>

                  <h1 className="font-display mt-4 text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#fbf9f2]">
                    Premium Spices, Herbs &amp; Herbal Products
                  </h1>

                  <p className="mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-[#d7ddd8]">
                    Authentic export-grade Indian whole spices, seeds, aromatic culinary herbs, and revered Ayurvedic
                    herbal extracts sourced directly from India&apos;s most prominent cultivation belts. Tested for high essential
                    oil content, active withanolides, curcumin potency, moisture control, and international phytosanitary compliance.
                  </p>

                  <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-[#ebd7b0]">
                    <span className="inline-flex items-center gap-1.5">
                      <Droplets size={14} className="text-[#D9A441]" />
                      High Essential Oil Content
                    </span>
                    <span className="text-white/30">•</span>
                    <span className="inline-flex items-center gap-1.5">
                      <Layers size={14} className="text-[#D9A441]" />
                      Whole &amp; Ground Calibrations
                    </span>
                    <span className="text-white/30">•</span>
                    <span className="inline-flex items-center gap-1.5">
                      <ShieldCheck size={14} className="text-[#D9A441]" />
                      100% Pure &amp; Lab-Tested
                    </span>
                  </div>
                </div>

                {/* Sourcing Overview Card */}
                <div className="rounded-xl border border-white/15 bg-white/[.07] p-6 backdrop-blur-xs">
                  <span className="text-[10px] font-bold uppercase tracking-[.18em] text-[#D9A441]">
                    Global Spice &amp; Botanical Sourcing
                  </span>
                  <p className="font-display mt-2 text-xl font-medium text-[#fbf9f2]">
                    Consolidated &amp; Bulk Container Cargo
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-white/70">
                    Export-grade multi-wall kraft paper bags, vacuum-sealed pouches, and bulk PP packaging engineered for culinary spice blenders, tea blenders, pharmaceutical extractors, and nutraceutical manufacturers worldwide.
                  </p>
                  <div className="mt-4 pt-3 border-t border-white/15 flex items-center justify-between text-xs text-[#ebd7b0]">
                    <span>Shelf Life: 12–24 Months</span>
                    <Link
                      href="/contact?product=Spices%20%26%20Herbs"
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
                    <Flame size={20} />
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-semibold text-[#183c2c]">
                      Verified Active Potency
                    </h3>
                    <p className="mt-1 text-xs text-[#526457]">
                      High curcumin in turmeric, piperine in black pepper, and calibrated withanolides in botanicals.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[#214c39] text-[#D9A441]">
                    <Layers size={20} />
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-semibold text-[#183c2c]">
                      Sortex &amp; Density Cleaned
                    </h3>
                    <p className="mt-1 text-xs text-[#526457]">
                      Precision optical sorting ensures clean seed uniform size, zero foreign matter, and high purity.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[#214c39] text-[#D9A441]">
                    <PackageCheck size={20} />
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-semibold text-[#183c2c]">
                      Moisture-Proof Packaging
                    </h3>
                    <p className="mt-1 text-xs text-[#526457]">
                      Poly-lined multi-wall bags and airtight drums safeguarding aromatic volatile oils in maritime transit.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[#214c39] text-[#D9A441]">
                    <Globe2 size={20} />
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-semibold text-[#183c2c]">
                      Global Export Compliant
                    </h3>
                    <p className="mt-1 text-xs text-[#526457]">
                      Meeting stringent pesticide residue, aflatoxin, and microbial limits across GCC, USA, and Europe.
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
                    Quality Spices, Herbs &amp; Herbal Products
                  </h2>
                  <p className="mt-1 text-xs text-[#6a7b6d]">
                    Showing {totalCount} export-grade products across 2 dedicated categories
                  </p>
                </div>

                {/* Filter Tabs & Search Input */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  {/* Category Switcher Tabs */}
                  <div className="inline-flex rounded-lg border border-[#d6cfbe] bg-[#f4eee1] p-1 text-xs font-semibold">
                    <button
                      type="button"
                      onClick={() => setActiveTab('all')}
                      className={`rounded-md px-3 py-1.5 transition-colors ${
                        activeTab === 'all'
                          ? 'bg-[#214c39] text-[#f7f4eb] shadow-xs'
                          : 'text-[#4e6052] hover:text-[#183c2c]'
                      }`}
                    >
                      All (14)
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab('spices')}
                      className={`rounded-md px-3 py-1.5 transition-colors ${
                        activeTab === 'spices'
                          ? 'bg-[#214c39] text-[#f7f4eb] shadow-xs'
                          : 'text-[#4e6052] hover:text-[#183c2c]'
                      }`}
                    >
                      Spices &amp; Herbs (11)
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab('herbal')}
                      className={`rounded-md px-3 py-1.5 transition-colors ${
                        activeTab === 'herbal'
                          ? 'bg-[#214c39] text-[#f7f4eb] shadow-xs'
                          : 'text-[#4e6052] hover:text-[#183c2c]'
                      }`}
                    >
                      Herbal Products (3)
                    </button>
                  </div>

                  {/* Search Input Box */}
                  <div className="relative w-full sm:w-64">
                    <Search
                      size={15}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#7d887a]"
                    />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search spice, HS code, market..."
                      aria-label="Search spices, herbs and herbal products"
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
              </div>

              {/* SECTION 1: SPICES & HERBS */}
              {(activeTab === 'all' || activeTab === 'spices') && (
                <div className="mb-16">
                  <div className="mb-6 flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[#e5decb] pb-3">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-[.18em] text-[#8b682d]">
                        Category 01
                      </span>
                      <h2 className="font-display mt-0.5 text-2xl font-semibold text-[#183c2c]">
                        Quality Spices &amp; Herbs Export Grade
                      </h2>
                    </div>
                    <p className="mt-1 sm:mt-0 text-xs text-[#6a7b6d]">
                      {filteredSpices.length} items available
                    </p>
                  </div>

                  {filteredSpices.length === 0 ? (
                    <div className="rounded-lg border border-dashed border-[#d8cfb9] p-8 text-center bg-[#f7f3e8]">
                      <p className="text-sm text-[#5d6a5f]">No spices matching &quot;{searchQuery}&quot;</p>
                    </div>
                  ) : (
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                      {filteredSpices.map((product, idx) => (
                        <ProductCard
                          key={product.slug}
                          product={product}
                          priorityImage={idx < 3}
                        />
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* SECTION 2: HERBAL PRODUCTS */}
              {(activeTab === 'all' || activeTab === 'herbal') && (
                <div className="mb-12">
                  <div className="mb-6 flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[#e5decb] pb-3">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-[.18em] text-[#8b682d]">
                        Category 02
                      </span>
                      <h2 className="font-display mt-0.5 text-2xl font-semibold text-[#183c2c]">
                        Herbal Products Export Grade
                      </h2>
                    </div>
                    <p className="mt-1 sm:mt-0 text-xs text-[#6a7b6d]">
                      {filteredHerbal.length} items available
                    </p>
                  </div>

                  {filteredHerbal.length === 0 ? (
                    <div className="rounded-lg border border-dashed border-[#d8cfb9] p-8 text-center bg-[#f7f3e8]">
                      <p className="text-sm text-[#5d6a5f]">No herbal products matching &quot;{searchQuery}&quot;</p>
                    </div>
                  ) : (
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                      {filteredHerbal.map((product, idx) => (
                        <ProductCard
                          key={product.slug}
                          product={product}
                          priorityImage={false}
                        />
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* GCC Definition Reference Callout */}
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

          {/* EXPORT DOCUMENTATION & COMPLIANCE FRAMEWORK SECTION */}
          <section className="bg-[#173a2a] text-[#f7f4eb] py-14 border-t border-white/10">
            <div className="wrap">
              <div className="grid gap-8 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[.2em] text-[#D9A441]">
                    Export Standards &amp; Regulatory Protocols
                  </span>
                  <h2 className="font-display mt-2 text-2xl sm:text-3xl font-medium text-[#fbf9f2]">
                    International Export Documentation Protocols
                  </h2>
                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-white/70 max-w-2xl">
                    Export consignments of spices, culinary herbs, and botanical products from India are governed by structured laboratory testing, statutory phytosanitary clearance, and standardized trade documentation tailored to international destination customs.
                  </p>
                </div>

                <div className="rounded-lg border border-white/15 bg-white/[.06] p-5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#D9A441]">
                    Customs Clearance Assistance
                  </span>
                  <p className="mt-1.5 text-xs text-white/80 leading-relaxed">
                    Custom batch documentation, Certificate of Analysis (CoA), pesticide residue analysis reports, and origin verification arranged per buyer sales contract requirements.
                  </p>
                </div>
              </div>

              {/* Standard Documentation Framework Grid */}
              <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <div className="flex flex-col justify-between rounded-lg border border-white/15 bg-white/[.05] p-4 transition-colors hover:border-[#D9A441]/60 hover:bg-white/[.08]">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="rounded-md border border-[#D9A441]/50 bg-[#D9A441]/15 px-2 py-0.5 font-mono text-xs font-bold text-[#D9A441]">
                        COA
                      </span>
                      <FileCheck2 size={16} className="text-[#D9A441]" />
                    </div>
                    <h3 className="font-display mt-3 text-base font-medium text-[#f7f4eb]">
                      Certificate of Analysis (CoA)
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-white/70">
                      Comprehensive batch test results detailing moisture percentage, volatile oil content, piperine / curcumin levels, and physical parameters.
                    </p>
                  </div>
                  <span className="mt-4 pt-2 text-[9px] uppercase tracking-wider text-white/40 border-t border-white/10">
                    Quality Assurance Protocol
                  </span>
                </div>

                <div className="flex flex-col justify-between rounded-lg border border-white/15 bg-white/[.05] p-4 transition-colors hover:border-[#D9A441]/60 hover:bg-white/[.08]">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="rounded-md border border-[#D9A441]/50 bg-[#D9A441]/15 px-2 py-0.5 font-mono text-xs font-bold text-[#D9A441]">
                        PHYTO
                      </span>
                      <Leaf size={16} className="text-[#D9A441]" />
                    </div>
                    <h3 className="font-display mt-3 text-base font-medium text-[#f7f4eb]">
                      Phytosanitary Certification
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-white/70">
                      Official plant quarantine inspection ensuring consignment is free from injurious pests and conforms to destination country plant health regulations.
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
                        COO
                      </span>
                      <Globe2 size={16} className="text-[#D9A441]" />
                    </div>
                    <h3 className="font-display mt-3 text-base font-medium text-[#f7f4eb]">
                      Certificate of Origin (COO)
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-white/70">
                      Authorized origin documentation enabling international customs clearance and preferential trade agreement tariff verification.
                    </p>
                  </div>
                  <span className="mt-4 pt-2 text-[9px] uppercase tracking-wider text-white/40 border-t border-white/10">
                    Customs Clearance Clearance
                  </span>
                </div>

                <div className="flex flex-col justify-between rounded-lg border border-white/15 bg-white/[.05] p-4 transition-colors hover:border-[#D9A441]/60 hover:bg-white/[.08]">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="rounded-md border border-[#D9A441]/50 bg-[#D9A441]/15 px-2 py-0.5 font-mono text-xs font-bold text-[#D9A441]">
                        LAB
                      </span>
                      <ShieldCheck size={16} className="text-[#D9A441]" />
                    </div>
                    <h3 className="font-display mt-3 text-base font-medium text-[#f7f4eb]">
                      Aflatoxin &amp; Residue Testing
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-white/70">
                      NABL accredited laboratory screening verifying aflatoxin (B1, B2, G1, G2), pesticide residues, and pathogen-free parameters.
                    </p>
                  </div>
                  <span className="mt-4 pt-2 text-[9px] uppercase tracking-wider text-white/40 border-t border-white/10">
                    International Food Safety Standards
                  </span>
                </div>
              </div>

              {/* Clarification Disclaimer */}
              <div className="mt-8 flex items-start gap-3 rounded-lg border border-white/15 bg-white/[.04] p-4 text-xs text-white/65">
                <CircleHelp size={16} className="mt-0.5 shrink-0 text-[#D9A441]" />
                <p>
                  <strong>Export Documentation Guidance:</strong> Reference compliance frameworks shown above represent standard export documentation protocols for agro-commodities and botanical products. Specific documentation (including Certificate of Analysis, Phytosanitary Certificate, Certificate of Origin, and specialized laboratory testing) are arranged according to individual buyer contract terms and destination country regulatory requirements.
                </p>
              </div>
            </div>
          </section>

          {/* SOURCING CONSULTATION CTA SECTION */}
          <section className="bg-[#214c39] text-[#f7f4eb] py-14 border-t border-[#315f4a]">
            <div className="wrap flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-xl">
                <span className="text-[10px] font-bold uppercase tracking-[.18em] text-[#D9A441]">
                  Direct Trade Inquiries
                </span>
                <h2 className="font-display mt-2 text-2xl sm:text-3xl font-medium text-[#fbf9f2]">
                  Source Export-Quality Spices &amp; Herbal Botanicals
                </h2>
                <p className="mt-2.5 text-xs sm:text-sm text-[#d0d8d2] leading-relaxed">
                  Connect directly with our agricultural trade desk for container availability, indicative FOB/CIF quotes, technical specifications, and custom bulk packaging options.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <Link
                  href="/contact?product=Spices%20%26%20Herbs"
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
