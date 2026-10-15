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
  Zap,
} from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ProductCard } from '@/components/ProductCard';
import {
  COMPANY_INFO,
  GCC_COUNTRIES_EXPLANATION,
  getWhatsAppPowderProductUrl,
} from '@/data/tradeData';
import { DEHYDRATED_POWDER_PRODUCTS } from '@/data/dehydratedPowdersData';

export default function DehydratedPowdersPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const displayedProducts = DEHYDRATED_POWDER_PRODUCTS.filter((p) => {
    if (!searchQuery.trim()) return true;
    const query = searchQuery.toLowerCase();
    return (
      p.name.toLowerCase().includes(query) ||
      p.hsCode.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query) ||
      p.markets.toLowerCase().includes(query) ||
      (p.applications && p.applications.toLowerCase().includes(query))
    );
  });

  return (
    <>
      <Head>
        <title>Dehydrated Powders | KRISHI SARTHAK VENTURES LLP</title>
        <meta
          name="description"
          content="Explore dehydrated Moringa, Onion, Garlic, Tomato, Banana, and Beetroot Powders from KRISHI SARTHAK VENTURES LLP for international trade enquiries."
        />
        <meta
          name="keywords"
          content="Dehydrated Powders Export, Moringa Powder, Onion Powder, Garlic Powder, Tomato Powder, Banana Powder, Beetroot Powder, Agro Export India, Food Ingredients"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Dehydrated Powders | KRISHI SARTHAK VENTURES LLP"
        />
        <meta
          property="og:description"
          content="Explore dehydrated Moringa, Onion, Garlic, Tomato, Banana, and Beetroot Powders from KRISHI SARTHAK VENTURES LLP for international trade enquiries."
        />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/categories/dehydrated-powders.jpeg`}
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
                    Dehydrated Powders
                  </li>
                </ol>
              </nav>

              {/* Main Category Title & Subtitle */}
              <div className="grid gap-8 lg:grid-cols-[1.3fr_.7fr] lg:items-end">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#D9A441]/40 bg-[#214c39] px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-[#D9A441]">
                    <Sparkles size={13} />
                    <span>Dehydrated Powders Export Grade</span>
                  </div>

                  <h1 className="font-display mt-4 text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#fbf9f2]">
                    Premium Dehydrated Powders
                  </h1>

                  <p className="mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-[#d7ddd8]">
                    High-purity dehydrated and spray-dried fruit, vegetable, and herbal powders processed
                    under strict hygienic conditions. Engineered for low moisture retention, natural flavor
                    preservation, uniform mesh calibration, and long shelf life for global food processing,
                    seasoning blends, bakery, and nutraceutical industries.
                  </p>

                  <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-[#ebd7b0]">
                    <span className="inline-flex items-center gap-1.5">
                      <Droplets size={14} className="text-[#D9A441]" />
                      Low Moisture Retention
                    </span>
                    <span className="text-white/30">•</span>
                    <span className="inline-flex items-center gap-1.5">
                      <Layers size={14} className="text-[#D9A441]" />
                      Customized Mesh Sizes
                    </span>
                    <span className="text-white/30">•</span>
                    <span className="inline-flex items-center gap-1.5">
                      <ShieldCheck size={14} className="text-[#D9A441]" />
                      100% Pure &amp; Natural
                    </span>
                  </div>
                </div>

                {/* Sourcing Overview Card */}
                <div className="rounded-xl border border-white/15 bg-white/[.07] p-6 backdrop-blur-xs">
                  <span className="text-[10px] font-bold uppercase tracking-[.18em] text-[#D9A441]">
                    Industrial Supply &amp; Global Logistics
                  </span>
                  <p className="font-display mt-2 text-xl font-medium text-[#fbf9f2]">
                    Full Container &amp; Consolidated Cargo
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-white/70">
                    High-barrier moisture-proof export packaging tailored for seasoning manufacturers,
                    nutraceutical capsules, soup and sauce processors, and beverage blenders worldwide.
                  </p>
                  <div className="mt-4 pt-3 border-t border-white/15 flex items-center justify-between text-xs text-[#ebd7b0]">
                    <span>Shelf Life: 12–18 Months</span>
                    <Link
                      href="/contact?product=Dehydrated%20Powders"
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
                      Controlled Dehydration
                    </h3>
                    <p className="mt-1 text-xs text-[#526457]">
                      Precision thermal drying ensures vital nutrients, enzymes, and aroma remain intact.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[#214c39] text-[#D9A441]">
                    <Layers size={20} />
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-semibold text-[#183c2c]">
                      Uniform Mesh Grinding
                    </h3>
                    <p className="mt-1 text-xs text-[#526457]">
                      Calibrated mesh sizing from fine powders to granules matching client formulations.
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
                      Multi-wall foil-lined bags and poly-lined drums safeguarding against ambient humidity.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[#214c39] text-[#D9A441]">
                    <Globe2 size={20} />
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-semibold text-[#183c2c]">
                      Worldwide Export Ready
                    </h3>
                    <p className="mt-1 text-xs text-[#526457]">
                      Compliant with import labeling and food quality norms across USA, Europe, UK, and GCC.
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
                    Dehydrated Powders Export Grade
                  </h2>
                  <p className="mt-1 text-xs text-[#6a7b6d]">
                    Showing {displayedProducts.length} export-grade products with verified trade specifications
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
                    placeholder="Search powder, HS code, application..."
                    aria-label="Search dehydrated powders by name, HS code, or application"
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

              {/* Product Cards Grid */}
              {displayedProducts.length > 0 ? (
                <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
                  {displayedProducts.map((product, index) => (
                    <ProductCard
                      key={product.slug}
                      product={product}
                      priorityImage={index < 3}
                    />
                  ))}
                </div>
              ) : (
                <div className="rounded-xl border border-dashed border-[#bcb7a8] bg-[#f5f0e4] p-12 text-center">
                  <Droplets size={32} className="mx-auto text-[#8b6c34]" />
                  <h3 className="font-display mt-3 text-lg font-semibold text-[#183c2c]">
                    No powders match your search
                  </h3>
                  <p className="mt-1 text-xs text-[#6a7b6d]">
                    Try clearing your search term or searching by product name (e.g. Moringa, Onion, Garlic).
                  </p>
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="btn-outline mt-4"
                  >
                    Reset Search Filter
                  </button>
                </div>
              )}

              {/* Regional Context Notice for GCC Countries */}
              <div className="mt-12 rounded-lg border border-[#e2dccf] bg-[#f5efe2] p-4 text-xs text-[#5d685b] flex items-start gap-3">
                <Globe2 size={18} className="shrink-0 text-[#967235] mt-0.5" />
                <div>
                  <strong className="text-[#183c2c]">GCC Export Specification Note:</strong>{' '}
                  {GCC_COUNTRIES_EXPLANATION} All consignments are inspected for hermetic sealing, moisture content compliance, batch analysis, and bilingual export labeling requirements.
                </div>
              </div>
            </div>
          </section>

          {/* EXPORT DOCUMENTATION & REGULATORY COMPLIANCE OVERVIEW */}
          <section id="compliance" className="section-pad bg-[#214c39] text-[#f7f4eb]">
            <div className="wrap">
              <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end border-b border-white/15 pb-8">
                <div>
                  <span className="eyebrow !text-[#D9A441]">Trade Compliance &amp; Standards</span>
                  <h2 className="font-display mt-2 text-3xl md:text-4xl text-[#f7f4eb]">
                    Export Documentation &amp; Quality Compliance
                  </h2>
                  <p className="mt-3 max-w-2xl text-xs sm:text-sm text-white/75 leading-relaxed">
                    International agro-processing consignments are governed by standard destination country food safety laws, moisture limits, and contractual specifications. Consignment documentation is coordinated in accordance with applicable statutory trade requirements.
                  </p>
                </div>
                <div className="flex items-center gap-2 rounded-lg border border-white/20 bg-white/[.07] px-4 py-2.5 text-xs text-white/90">
                  <ShieldCheck size={18} className="text-[#D9A441]" />
                  <span>Standard Export Procedures</span>
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
                      Comprehensive batch test results detailing moisture percentage, total ash, particle mesh size, and physical parameters.
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
                      Official plant quarantine inspection ensuring consignment is free from injurious pests and conforms to destination import rules.
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
                      Certificate of Origin
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-white/70">
                      Authorized origin documentation enabling international customs clearance and preferential trade agreement verification.
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
                        MICRO
                      </span>
                      <ShieldCheck size={16} className="text-[#D9A441]" />
                    </div>
                    <h3 className="font-display mt-3 text-base font-medium text-[#f7f4eb]">
                      Microbiological Testing
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-white/70">
                      Accredited laboratory screening verifying acceptable standard plate counts, yeast, mold, and pathogen-free parameters.
                    </p>
                  </div>
                  <span className="mt-4 pt-2 text-[9px] uppercase tracking-wider text-white/40 border-t border-white/10">
                    Food Grade Safety Standards
                  </span>
                </div>
              </div>

              {/* Clarification Disclaimer */}
              <div className="mt-8 flex items-start gap-3 rounded-lg border border-white/15 bg-white/[.04] p-4 text-xs text-white/65">
                <CircleHelp size={16} className="mt-0.5 shrink-0 text-[#D9A441]" />
                <p>
                  <strong>Export Documentation Guidance:</strong> Reference compliance frameworks shown above represent standard export documentation protocols for processed agro-products. Specific documentation (including Certificate of Analysis, Phytosanitary Certificate, Certificate of Origin, and specialized microbiological lab reports) are arranged according to individual buyer contract terms and importing country regulations.
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
                    <h2 className="font-display mt-2 text-2xl sm:text-3xl md:text-4xl text-[#183c2c]">
                      Discuss Your Dehydrated Powder Requirements
                    </h2>
                    <p className="mt-3 text-xs sm:text-sm text-[#526457] leading-relaxed">
                      Whether you require customized packaging (multi-wall paper bags, HDPE drums, or retail foil pouches), private labeling, specific mesh granulometry, or annual contracted supply, our international trade team is ready to assist.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-4">
                      <Link
                        href="/contact?product=Dehydrated%20Powders"
                        className="btn-primary inline-flex items-center gap-2"
                      >
                        <Mail size={15} />
                        <span>Submit Sourcing Enquiry</span>
                      </Link>
                      <a
                        href={getWhatsAppPowderProductUrl('Dehydrated Powders')}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-md bg-[#1f7a42] px-5 py-2.5 text-xs font-bold text-white transition-all hover:bg-[#186335] shadow-xs"
                      >
                        <MessageCircle size={15} />
                        <span>Chat on WhatsApp</span>
                      </a>
                    </div>
                  </div>

                  <div className="rounded-xl border border-[#d8cfbc] bg-white p-6 shadow-xs space-y-4">
                    <h3 className="font-display text-lg font-medium text-[#183c2c]">
                      Our Export Assurance
                    </h3>
                    <ul className="space-y-3 text-xs text-[#4a5c4e]">
                      <li className="flex items-start gap-2.5">
                        <Check size={16} className="mt-0.5 shrink-0 text-[#217a41]" />
                        <span><strong>Uniform Granulometry:</strong> Standardized mesh sizing ensuring smooth solubility and dispersion.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <Check size={16} className="mt-0.5 shrink-0 text-[#217a41]" />
                        <span><strong>Moisture Control:</strong> Strictly managed dehydration processes keeping moisture levels within trade limits.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <Check size={16} className="mt-0.5 shrink-0 text-[#217a41]" />
                        <span><strong>Hermetic Packaging:</strong> Heavy-duty aluminium barrier pouches and HDPE drums preventing moisture ingress.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <Check size={16} className="mt-0.5 shrink-0 text-[#217a41]" />
                        <span><strong>Full Documentation:</strong> Batch Certificate of Analysis, Phytosanitary, and Certificate of Origin.</span>
                      </li>
                    </ul>
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
