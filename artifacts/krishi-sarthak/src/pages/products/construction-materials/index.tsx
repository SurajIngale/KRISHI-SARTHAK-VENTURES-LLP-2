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
  HardHat,
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
  Wrench,
  Zap,
} from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ProductCard } from '@/components/ProductCard';
import { GCC_COUNTRIES_EXPLANATION } from '@/data/tradeData';
import { CONSTRUCTION_MATERIALS_PRODUCTS } from '@/data/constructionMaterialsData';

export default function ConstructionMaterialsPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const displayedProducts = CONSTRUCTION_MATERIALS_PRODUCTS.filter((item) => {
    if (!searchQuery.trim()) return true;
    const query = searchQuery.toLowerCase();
    return (
      item.name.toLowerCase().includes(query) ||
      item.hsCode.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) ||
      item.markets.toLowerCase().includes(query) ||
      (item.tradeType && item.tradeType.toLowerCase().includes(query)) ||
      (item.majorSuppliers && item.majorSuppliers.toLowerCase().includes(query)) ||
      (item.usage && item.usage.toLowerCase().includes(query)) ||
      (item.industry && item.industry.toLowerCase().includes(query)) ||
      (item.grade && item.grade.toLowerCase().includes(query)) ||
      (item.productType && item.productType.toLowerCase().includes(query)) ||
      (item.additionalTradeInfo && item.additionalTradeInfo.toLowerCase().includes(query))
    );
  });

  return (
    <>
      <Head>
        <title>Construction &amp; Road Materials | KRISHI SARTHAK VENTURES LLP</title>
        <meta
          name="description"
          content="Explore gypsum, bitumen, and fly ash for construction, infrastructure, cement, concrete, and road development applications with KRISHI SARTHAK VENTURES LLP."
        />
        <meta
          name="keywords"
          content="Construction Materials Export, Gypsum Import India, Bitumen VG 10 VG 30 VG 40, Fly Ash Class F Class C, Road Construction Materials, Bulk Minerals, KRISHI SARTHAK VENTURES LLP"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Quality Construction &amp; Road Materials | KRISHI SARTHAK VENTURES LLP"
        />
        <meta
          property="og:description"
          content="Explore gypsum, bitumen, and fly ash for construction, infrastructure, cement, concrete, and road development applications."
        />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/categories/construction-materials.jpeg`}
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
                    Construction &amp; Road Materials
                  </li>
                </ol>
              </nav>

              <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-center">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#D9A441]/40 bg-[#D9A441]/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-widest text-[#e8c679] backdrop-blur-xs">
                    <HardHat size={12} className="text-[#D9A441]" />
                    <span>Industrial &amp; Infrastructure Supply</span>
                  </div>

                  {/* Required Primary Heading (H1) */}
                  <h1 className="mt-4 font-display text-3xl font-medium tracking-tight text-white sm:text-4xl md:text-5xl lg:leading-tight">
                    Quality Construction &amp; Road Materials
                  </h1>

                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#c3ceb8] sm:text-base">
                    Reliable commercial supply of foundational industrial and infrastructure materials.
                    Coordinating high-volume mineral imports of natural gypsum for cement and plasterboard
                    manufacturing, alongside cross-border trade of viscosity-grade bitumen for highway
                    paving and coal-based thermal fly ash for high-performance pozzolanic concrete.
                  </p>

                  {/* Highlights Banner */}
                  <div className="mt-8 flex flex-wrap gap-4 pt-2">
                    <div className="flex items-center gap-2.5 rounded-lg border border-white/10 bg-white/[.04] px-3.5 py-2">
                      <Truck size={16} className="text-[#D9A441]" />
                      <span className="text-xs font-semibold text-[#f5f1e6]">
                        Bulk Vessel &amp; Rake Freight
                      </span>
                    </div>
                    <div className="flex items-center gap-2.5 rounded-lg border border-white/10 bg-white/[.04] px-3.5 py-2">
                      <ShieldCheck size={16} className="text-[#D9A441]" />
                      <span className="text-xs font-semibold text-[#f5f1e6]">
                        Standardized VG &amp; Class Grades
                      </span>
                    </div>
                    <div className="flex items-center gap-2.5 rounded-lg border border-white/10 bg-white/[.04] px-3.5 py-2">
                      <Globe2 size={16} className="text-[#D9A441]" />
                      <span className="text-xs font-semibold text-[#f5f1e6]">
                        Cross-Border Trade Corridors
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
                        Materials Trade Matrix
                      </span>
                    </div>
                    <span className="rounded bg-[#D9A441] px-2 py-0.5 text-[9px] font-bold text-[#0a1826]">
                      3 Core Commodities
                    </span>
                  </div>

                  <dl className="mt-4 space-y-3 text-xs">
                    <div className="flex justify-between border-b border-white/5 pb-2">
                      <dt className="text-white/60">Import Sourcing</dt>
                      <dd className="font-semibold text-right text-[#f7f4eb]">Gypsum (Oman, Iran, Thailand, GCC)</dd>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-2">
                      <dt className="text-white/60">Two-Way Trade</dt>
                      <dd className="font-semibold text-right text-[#f7f4eb]">Bitumen (VG 10, VG 30, VG 40)</dd>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-2">
                      <dt className="text-white/60">Export Leadership</dt>
                      <dd className="font-semibold text-right text-[#f7f4eb]">Fly Ash (Class F / Class C)</dd>
                    </div>
                    <div className="flex justify-between pt-1">
                      <dt className="text-white/60">Primary Applications</dt>
                      <dd className="font-semibold text-right text-[#D9A441]">Cement, Concrete &amp; Highways</dd>
                    </div>
                  </dl>

                  <div className="mt-5 rounded-lg bg-black/30 p-3 text-[11px] text-white/70 leading-relaxed border border-white/5">
                    <p>
                      <strong>Institutional Logistics:</strong> Consignments are coordinated under bulk vessel
                      chartering, multimodal rail rakes, and containerized transport managed by{' '}
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
                    Commercial Infrastructure Portfolio
                  </span>
                  {/* Required Section Heading (H2) */}
                  <h2 className="mt-1 font-display text-2xl font-semibold text-[#183c2c] md:text-3xl">
                    Construction &amp; Road Materials Import-Export Grade
                  </h2>
                  <p className="mt-1.5 text-xs text-[#5f6f63] max-w-xl">
                    Detailed technical specifications for gypsum, bitumen, and fly ash. Use the live filter
                    to query by commodity name, HS code, grade, trade type, or market.
                  </p>
                </div>

                {/* Search Input Box */}
                <div className="relative w-full max-w-xs shrink-0">
                  <label htmlFor="material-search" className="sr-only">
                    Search construction materials
                  </label>
                  <Search
                    size={16}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#79887b]"
                  />
                  <input
                    id="material-search"
                    type="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search name, HS code, grade..."
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
                    Showing {displayedProducts.length} of {CONSTRUCTION_MATERIALS_PRODUCTS.length} commodities
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
                      priorityImage={index === 0}
                    />
                  ))}
                </div>
              ) : (
                <div className="rounded-xl border border-dashed border-[#ccc5b4] bg-[#f2ecdc] p-12 text-center">
                  <p className="font-display text-lg text-[#1d392d]">No commodities found</p>
                  <p className="mt-1 text-xs text-[#67776b]">
                    No construction or road materials matched your search &ldquo;{searchQuery}&rdquo;. Try another term or clear the filter.
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

              {/* Destination Callout: Trade Corridors Context */}
              <div className="mt-14 rounded-xl border border-[#d6cfbe] bg-[#f2ece0] p-6 text-xs text-[#4c5c50] shadow-xs">
                <div className="flex items-start gap-3">
                  <Globe2 size={18} className="mt-0.5 shrink-0 text-[#8c6d31]" />
                  <div>
                    <h3 className="font-display text-sm font-semibold text-[#183c2c]">
                      Cross-Border Trade Corridors &amp; Supplier Networks
                    </h3>
                    <p className="mt-1 leading-relaxed">
                      {GCC_COUNTRIES_EXPLANATION} In industrial materials trade, sourcing networks connect major mineral
                      deposits in Oman, Iran, and Thailand with high-demand Indian infrastructure zones. Export
                      channels supply fly ash and bitumen to Bangladesh, Nepal, Sri Lanka, Bhutan, UAE, Japan,
                      and broader African and Asian infrastructure initiatives.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Industrial Compliance & Technical Logistics Framework */}
          <section className="border-t border-[#ddd8ca] bg-[#efe9db] py-14">
            <div className="wrap">
              <div className="text-center max-w-2xl mx-auto">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#8c6d31]">
                  Infrastructure Logistics &amp; Compliance
                </span>
                <h2 className="mt-1.5 font-display text-2xl font-semibold text-[#183c2c] md:text-3xl">
                  Engineered for Industrial Scale &amp; Reliability
                </h2>
                <p className="mt-2 text-xs leading-relaxed text-[#5c6e61]">
                  KRISHI SARTHAK VENTURES LLP coordinates bulk cargo, standard laboratory testing, and turnkey
                  freight logistics across domestic ports and international trade gateways.
                </p>
              </div>

              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-xl border border-[#dcd6c7] bg-[#fbf9f2] p-5 shadow-xs">
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-[#214c39] text-[#D9A441]">
                    <ShieldCheck size={20} />
                  </div>
                  <h3 className="mt-4 font-display text-base font-semibold text-[#183c2c]">
                    Laboratory Grade Certification
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#637267]">
                    Standardized viscosity classification (VG 10, VG 30, VG 40), fly ash pozzolanic activity
                    indices, and gypsum purity chemical assays.
                  </p>
                </div>

                <div className="rounded-xl border border-[#dcd6c7] bg-[#fbf9f2] p-5 shadow-xs">
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-[#214c39] text-[#D9A441]">
                    <Truck size={20} />
                  </div>
                  <h3 className="mt-4 font-display text-base font-semibold text-[#183c2c]">
                    Break-Bulk &amp; Vessel Charter
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#637267]">
                    End-to-end management of ocean vessel chartering, pneumatic tankers, dedicated railway
                    rakes, and heavy-tonnage road transport.
                  </p>
                </div>

                <div className="rounded-xl border border-[#dcd6c7] bg-[#fbf9f2] p-5 shadow-xs">
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-[#214c39] text-[#D9A441]">
                    <PackageCheck size={20} />
                  </div>
                  <h3 className="mt-4 font-display text-base font-semibold text-[#183c2c]">
                    Flexible Bulk Packaging
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#637267]">
                    Supplied in bulk loose cargo, steel bitumen drums, polymer bags, jumbo tonner bags (1 MT / 1.5 MT),
                    and specialized ISO tank containers.
                  </p>
                </div>

                <div className="rounded-xl border border-[#dcd6c7] bg-[#fbf9f2] p-5 shadow-xs">
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-[#214c39] text-[#D9A441]">
                    <FileCheck2 size={20} />
                  </div>
                  <h3 className="mt-4 font-display text-base font-semibold text-[#183c2c]">
                    Port Clearance &amp; Documentation
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#637267]">
                    Comprehensive customs processing, Bill of Lading, Certificate of Origin, and port berth
                    operations handled with professional rigor.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Trade Consultation & Tender Procurement CTA */}
          <section className="bg-[#183c2c] py-14 text-white">
            <div className="wrap">
              <div className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-[#D9A441]/40 bg-[#0f291e] p-8 md:flex-row md:p-10 shadow-xl">
                <div className="max-w-xl text-center md:text-left">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#D9A441]">
                    Industrial Commodities Desk
                  </span>
                  <h2 className="mt-2 font-display text-2xl font-semibold text-[#f7f4eb] sm:text-3xl">
                    Procuring for Infrastructure Projects or Cement Plants?
                  </h2>
                  <p className="mt-2 text-xs leading-relaxed text-[#c3ceb8]">
                    Connect with our commodities desk for vessel-load pricing, chemical assay reports,
                    annual supply contracts, and multimodal logistics coordination.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                  <Link
                    href="/contact/?product=Construction%20%26%20Road%20Materials"
                    className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-[#D9A441] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#0a1826] transition-all hover:bg-[#e6b450] hover:shadow-lg"
                  >
                    <Mail size={15} />
                    <span>Send Enquiry</span>
                  </Link>
                  <a
                    href="https://wa.me/919876543210?text=Hello%20KRISHI%20SARTHAK%20VENTURES%20LLP%2C%20I%20am%20interested%20in%20Construction%20%26%20Road%20Materials%20trade%20specifications%20and%20quotations."
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
