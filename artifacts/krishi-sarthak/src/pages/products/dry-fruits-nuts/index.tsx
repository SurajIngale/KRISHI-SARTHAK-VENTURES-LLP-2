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
  Truck,
  Zap,
} from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ProductCard } from '@/components/ProductCard';
import { GCC_COUNTRIES_EXPLANATION } from '@/data/tradeData';
import { DRY_FRUITS_AND_NUTS_PRODUCTS } from '@/data/dryFruitsNutsData';

export default function DryFruitsNutsPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const displayedProducts = DRY_FRUITS_AND_NUTS_PRODUCTS.filter((item) => {
    if (!searchQuery.trim()) return true;
    const query = searchQuery.toLowerCase();
    return (
      item.name.toLowerCase().includes(query) ||
      item.hsCode.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) ||
      item.markets.toLowerCase().includes(query) ||
      (item.varieties && item.varieties.toLowerCase().includes(query)) ||
      (item.tradeType && item.tradeType.toLowerCase().includes(query)) ||
      (item.majorSuppliers && item.majorSuppliers.toLowerCase().includes(query)) ||
      (item.productionRegion && item.productionRegion.toLowerCase().includes(query)) ||
      (item.productType && item.productType.toLowerCase().includes(query)) ||
      (item.productForm && item.productForm.toLowerCase().includes(query))
    );
  });

  return (
    <>
      <Head>
        <title>Premium Dry Fruits &amp; Nuts | KRISHI SARTHAK VENTURES LLP</title>
        <meta
          name="description"
          content="Explore dates, walnuts, pistachios, Mamra almonds, cashews, and raisins for commercial sourcing and international trade enquiries with KRISHI SARTHAK VENTURES LLP."
        />
        <meta
          name="keywords"
          content="Dry Fruits and Nuts Export, Indian Cashews, Mamra Almonds, Dates Medjool Ajwa, Pistachio Pista, Walnuts Kashmir, Indian Raisins Kishmish, Commercial Sourcing, KRISHI SARTHAK VENTURES LLP"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Premium Dry Fruits &amp; Nuts | KRISHI SARTHAK VENTURES LLP"
        />
        <meta
          property="og:description"
          content="Explore dates, walnuts, pistachios, Mamra almonds, cashews, and raisins for commercial sourcing and international trade enquiries."
        />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/categories/dry-fruits.jpeg`}
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
                  <li>
                    <ChevronRight size={13} className="text-[#7d9284]" />
                  </li>
                  <li>
                    <Link
                      href="/#products"
                      className="transition-colors hover:text-[#D9A441]"
                    >
                      Our Products
                    </Link>
                  </li>
                  <li>
                    <ChevronRight size={13} className="text-[#7d9284]" />
                  </li>
                  <li className="font-semibold text-[#D9A441]" aria-current="page">
                    Dry Fruits &amp; Nuts
                  </li>
                </ol>
              </nav>

              <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-center">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#D9A441]/40 bg-[#D9A441]/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-widest text-[#e8c679] backdrop-blur-xs">
                    <Sparkles size={12} className="text-[#D9A441]" />
                    <span>Import-Export Grade Commodities</span>
                  </div>

                  {/* Required Primary Heading (H1) */}
                  <h1 className="mt-4 font-display text-3xl font-medium tracking-tight text-white sm:text-4xl md:text-5xl lg:leading-tight">
                    Premium Dry Fruits &amp; Nuts
                  </h1>

                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#c3ceb8] sm:text-base">
                    Comprehensive commercial sourcing across high-demand dry fruits and tree nuts.
                    From premium Kashmir walnuts and Indian processed cashew kernels to world-class
                    imported dates, Iranian pistachios, and Mamra almonds for institutional repackers,
                    food manufacturers, and global trade partners.
                  </p>

                  {/* Highlights Banner */}
                  <div className="mt-8 flex flex-wrap gap-4 pt-2">
                    <div className="flex items-center gap-2.5 rounded-lg border border-white/10 bg-white/[.04] px-3.5 py-2">
                      <ShieldCheck size={16} className="text-[#D9A441]" />
                      <span className="text-xs font-semibold text-[#f5f1e6]">
                        Strict Grading &amp; Size Counts
                      </span>
                    </div>
                    <div className="flex items-center gap-2.5 rounded-lg border border-white/10 bg-white/[.04] px-3.5 py-2">
                      <Globe2 size={16} className="text-[#D9A441]" />
                      <span className="text-xs font-semibold text-[#f5f1e6]">
                        Global Re-Export &amp; Origin Sourcing
                      </span>
                    </div>
                    <div className="flex items-center gap-2.5 rounded-lg border border-white/10 bg-white/[.04] px-3.5 py-2">
                      <PackageCheck size={16} className="text-[#D9A441]" />
                      <span className="text-xs font-semibold text-[#f5f1e6]">
                        Vacuum &amp; Nitrogen Packaging
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Decorative Trade Overview Card */}
                <div className="rounded-2xl border border-[#D9A441]/30 bg-[#0f291e]/80 p-6 shadow-2xl backdrop-blur-md">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div className="flex items-center gap-2">
                      <Container size={18} className="text-[#D9A441]" />
                      <span className="text-xs font-bold uppercase tracking-wider text-[#e6d8b9]">
                        Trade Specifications Summary
                      </span>
                    </div>
                    <span className="rounded bg-[#D9A441] px-2 py-0.5 text-[9px] font-bold text-[#0a1826]">
                      6 Core Products
                    </span>
                  </div>

                  <dl className="mt-4 space-y-3 text-xs">
                    <div className="flex justify-between border-b border-white/5 pb-2">
                      <dt className="text-white/60">Export Highlights</dt>
                      <dd className="font-semibold text-right text-[#f7f4eb]">Cashews, Raisins, Walnut Kernels</dd>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-2">
                      <dt className="text-white/60">Import &amp; Re-Export</dt>
                      <dd className="font-semibold text-right text-[#f7f4eb]">Dates, Pistachios, Mamra Almonds</dd>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-2">
                      <dt className="text-white/60">Source Corridors</dt>
                      <dd className="font-semibold text-right text-[#f7f4eb]">GCC, Iran, USA, Afghanistan, Chile</dd>
                    </div>
                    <div className="flex justify-between pt-1">
                      <dt className="text-white/60">Packaging Protocols</dt>
                      <dd className="font-semibold text-right text-[#D9A441]">Vacuum &amp; Bulk Master Cartons</dd>
                    </div>
                  </dl>

                  <div className="mt-5 rounded-lg bg-black/30 p-3 text-[11px] text-white/70 leading-relaxed border border-white/5">
                    <p>
                      <strong>Trade Notice:</strong> Specifications, HS classifications, and destination
                      protocols reflect institutional commercial guidelines managed by{' '}
                      <span className="text-[#f7f4eb] font-semibold">KRISHI SARTHAK VENTURES LLP</span>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section Heading & Interactive Search Bar */}
          <section className="border-b border-[#ddd8ca] bg-[#f5f0e4] py-8">
            <div className="wrap">
              <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#8c6d31]">
                    Agricultural Commodities Portfolio
                  </span>
                  {/* Required Section Heading (H2) */}
                  <h2 className="mt-1 font-display text-2xl font-semibold text-[#183c2c] md:text-3xl">
                    Dry Fruits and Nuts Import-Export Grade
                  </h2>
                  <p className="mt-1.5 text-xs text-[#5f6f63] max-w-xl">
                    Browse all six commercial grade commodities. Use the live filter below to query by
                    product name, HS code, variety, trade type, or destination market.
                  </p>
                </div>

                {/* Search Input Box */}
                <div className="relative w-full max-w-xs shrink-0">
                  <label htmlFor="product-search" className="sr-only">
                    Search dry fruits and nuts
                  </label>
                  <Search
                    size={16}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#79887b]"
                  />
                  <input
                    id="product-search"
                    type="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search name, HS code, market..."
                    className="w-full rounded-lg border border-[#cfc8b7] bg-white py-2.5 pl-10 pr-4 text-xs text-[#183c2c] placeholder:text-[#88978a] focus:border-[#214c39] focus:outline-none focus:ring-1 focus:ring-[#214c39] shadow-2xs"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-[#88978a] hover:text-[#183c2c]"
                      aria-label="Clear search query"
                    >
                      Clear
                    </button>
                  )}
                </div>
              </div>

              {/* Active Filter Counter */}
              {searchQuery && (
                <div className="mt-4 flex items-center gap-2 text-xs text-[#637267]">
                  <Filter size={13} className="text-[#8c6d31]" />
                  <span>
                    Showing {displayedProducts.length} of {DRY_FRUITS_AND_NUTS_PRODUCTS.length} products
                    matching &ldquo;<strong>{searchQuery}</strong>&rdquo;
                  </span>
                </div>
              )}
            </div>
          </section>

          {/* Product Cards Grid Section */}
          <section className="py-12 md:py-16">
            <div className="wrap">
              {displayedProducts.length > 0 ? (
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {displayedProducts.map((product, index) => (
                    <ProductCard
                      key={product.slug}
                      product={product}
                      priorityImage={index < 3}
                    />
                  ))}
                </div>
              ) : (
                <div className="rounded-xl border border-dashed border-[#ccc5b4] bg-[#f2ecdc] p-12 text-center">
                  <p className="font-display text-lg text-[#1d392d]">No products found</p>
                  <p className="mt-1 text-xs text-[#67776b]">
                    No dry fruits or nuts matched your search &ldquo;{searchQuery}&rdquo;. Try another term or clear the filter.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="mt-4 rounded-md bg-[#214c39] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#183c2c]"
                  >
                    Reset Search Filter
                  </button>
                </div>
              )}

              {/* Destination Callout: GCC Countries Context */}
              <div className="mt-14 rounded-xl border border-[#d6cfbe] bg-[#f2ece0] p-6 text-xs text-[#4c5c50] shadow-xs">
                <div className="flex items-start gap-3">
                  <Globe2 size={18} className="mt-0.5 shrink-0 text-[#8c6d31]" />
                  <div>
                    <h3 className="font-display text-sm font-semibold text-[#183c2c]">
                      GCC &amp; International Trade Corridor Reference
                    </h3>
                    <p className="mt-1 leading-relaxed">
                      {GCC_COUNTRIES_EXPLANATION} In addition, trade corridors encompass active re-export
                      channels to Nepal, Bangladesh, Sri Lanka, and bilateral sourcing routes connecting Iran,
                      the USA, Chile, Afghanistan, the European Union, and Japan.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Commercial Quality & Packaging Assurance Framework */}
          <section className="border-t border-[#ddd8ca] bg-[#efe9db] py-14">
            <div className="wrap">
              <div className="text-center max-w-2xl mx-auto">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#8c6d31]">
                  Quality &amp; Processing Standards
                </span>
                <h2 className="mt-1.5 font-display text-2xl font-semibold text-[#183c2c] md:text-3xl">
                  Commercial Integrity Across Every Consignment
                </h2>
                <p className="mt-2 text-xs leading-relaxed text-[#5c6e61]">
                  KRISHI SARTHAK VENTURES LLP adheres to disciplined quality sorting, count uniformity,
                  moisture-tight barrier packaging, and international export documentation protocols.
                </p>
              </div>

              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-xl border border-[#dcd6c7] bg-[#fbf9f2] p-5 shadow-xs">
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-[#214c39] text-[#D9A441]">
                    <ShieldCheck size={20} />
                  </div>
                  <h3 className="mt-4 font-display text-base font-semibold text-[#183c2c]">
                    Strict Size &amp; Count Grading
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#637267]">
                    Standardized whole kernel count grading (such as Cashew W180/W240/W320), Mamra almond
                    purity inspection, and Sortex defect elimination.
                  </p>
                </div>

                <div className="rounded-xl border border-[#dcd6c7] bg-[#fbf9f2] p-5 shadow-xs">
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-[#214c39] text-[#D9A441]">
                    <Droplets size={20} />
                  </div>
                  <h3 className="mt-4 font-display text-base font-semibold text-[#183c2c]">
                    Moisture &amp; Freshness Control
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#637267]">
                    Controlled dehydration standards for raisins and walnuts, preventing rancidity and
                    protecting natural crunch, texture, and aroma.
                  </p>
                </div>

                <div className="rounded-xl border border-[#dcd6c7] bg-[#fbf9f2] p-5 shadow-xs">
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-[#214c39] text-[#D9A441]">
                    <PackageCheck size={20} />
                  </div>
                  <h3 className="mt-4 font-display text-base font-semibold text-[#183c2c]">
                    Vacuum &amp; Nitrogen-Flushing
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#637267]">
                    Multi-layer vacuum barrier pouches, nitrogen-flushed tins, and export-grade heavy-duty
                    corrugated master cartons engineered for multi-week ocean freight.
                  </p>
                </div>

                <div className="rounded-xl border border-[#dcd6c7] bg-[#fbf9f2] p-5 shadow-xs">
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-[#214c39] text-[#D9A441]">
                    <FileCheck2 size={20} />
                  </div>
                  <h3 className="mt-4 font-display text-base font-semibold text-[#183c2c]">
                    Comprehensive Export Papers
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#637267]">
                    End-to-end documentation coordination including Phytosanitary Certificates, Certificate of
                    Origin, Bill of Lading, and international laboratory analysis.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Trade Consultation & Enquiry Callout CTA */}
          <section className="bg-[#183c2c] py-14 text-white">
            <div className="wrap">
              <div className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-[#D9A441]/40 bg-[#0f291e] p-8 md:flex-row md:p-10 shadow-xl">
                <div className="max-w-xl text-center md:text-left">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#D9A441]">
                    Export &amp; Import Trade Desk
                  </span>
                  <h2 className="mt-2 font-display text-2xl font-semibold text-[#f7f4eb] sm:text-3xl">
                    Need Custom Sourcing or Bulk Quotation?
                  </h2>
                  <p className="mt-2 text-xs leading-relaxed text-[#c3ceb8]">
                    Connect with our export desk for current FOB / CIF pricing, vessel scheduling,
                    bulk container load configurations, and private label packaging options.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                  <Link
                    href="/contact/?product=Dry%20Fruits%20%26%20Nuts"
                    className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-[#D9A441] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#0a1826] transition-all hover:bg-[#e6b450] hover:shadow-lg"
                  >
                    <Mail size={15} />
                    <span>Send Enquiry</span>
                  </Link>
                  <a
                    href="https://wa.me/919876543210?text=Hello%20KRISHI%20SARTHAK%20VENTURES%20LLP%2C%20I%20am%20interested%20in%20Dry%20Fruits%20%26%20Nuts%20trade%20specifications%20and%20quotations."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg border border-white/30 bg-[#091b2d]/80 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-[#091b2d] hover:border-[#D9A441] hover:text-[#D9A441]"
                  >
                    <MessageCircle size={15} className="text-[#25D366]" />
                    <span>WhatsApp Desk</span>
                  </a>
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
