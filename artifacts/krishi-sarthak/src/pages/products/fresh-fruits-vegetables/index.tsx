import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {
  Apple,
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Award,
  BadgeCheck,
  Box,
  Check,
  CheckCircle2,
  ChevronRight,
  CircleAlert,
  Clock,
  Compass,
  Container,
  FileCheck2,
  FileText,
  Filter,
  Globe2,
  HelpCircle,
  Home,
  Info,
  Layers,
  Leaf,
  Mail,
  MapPin,
  MessageCircle,
  Package,
  PackageCheck,
  Phone,
  Scale,
  Send,
  ShieldCheck,
  Ship,
  Sparkles,
  ThermometerSnowflake,
  Truck,
  Warehouse,
} from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { COMPANY_INFO } from '@/data/tradeData';
import {
  FRESH_FRUITS_HEADER,
  FRESH_FRUITS_PRODUCTS,
  FreshFruitDetail,
  getFreshFruitWhatsAppUrl,
} from '@/data/freshFruitsData';

export default function FreshFruitsVegetablesPage() {
  const [selectedProduct, setSelectedProduct] = useState<string>('all');
  const [enquiryForm, setEnquiryForm] = useState({
    name: '',
    companyName: '',
    email: '',
    phone: '',
    product: 'Fresh Apples',
    quantity: '',
    destinationCountry: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState<{
    submitted: boolean;
    error: string | null;
    successMessage: string | null;
  }>({
    submitted: false,
    error: null,
    successMessage: null,
  });

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setEnquiryForm({
      ...enquiryForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Client-side validation
    if (!enquiryForm.name.trim() || !enquiryForm.email.trim() || !enquiryForm.message.trim()) {
      setFormStatus({
        submitted: false,
        error: 'Please complete all required fields: Name, Business Email, and Message.',
        successMessage: null,
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(enquiryForm.email)) {
      setFormStatus({
        submitted: false,
        error: 'Please enter a valid business email address.',
        successMessage: null,
      });
      return;
    }

    // Construct formatted email content
    const subject = encodeURIComponent(
      `Trade Enquiry: ${enquiryForm.product} - ${enquiryForm.companyName || enquiryForm.name}`
    );
    const bodyText = encodeURIComponent(
      `Trade Enquiry Details:\n` +
        `Product of Interest: ${enquiryForm.product}\n` +
        `Contact Name: ${enquiryForm.name}\n` +
        `Company: ${enquiryForm.companyName || 'Not specified'}\n` +
        `Email: ${enquiryForm.email}\n` +
        `Phone: ${enquiryForm.phone || 'Not specified'}\n` +
        `Required Quantity: ${enquiryForm.quantity || 'Not specified'}\n` +
        `Destination Country: ${enquiryForm.destinationCountry || 'Not specified'}\n\n` +
        `Enquiry Message:\n${enquiryForm.message}\n`
    );

    // Launch email client
    const mailtoUrl = `mailto:${COMPANY_INFO.emailPlaceholder}?subject=${subject}&body=${bodyText}`;

    setFormStatus({
      submitted: true,
      error: null,
      successMessage:
        'Your trade enquiry has been prepared! Your email client has been launched with your enquiry prefilled. You can also send this enquiry directly to our WhatsApp trade desk below.',
    });

    if (typeof window !== 'undefined') {
      window.location.href = mailtoUrl;
    }
  };

  return (
    <>
      <Head>
        <title>Fresh Fruits &amp; Vegetables | KRISHI SARTHAK VENTURES LLP</title>
        <meta
          name="description"
          content="Explore fresh apples, dragon fruit, bananas, and coconuts from KRISHI SARTHAK VENTURES LLP. View product varieties, specifications, packaging information, and submit trade enquiries."
        />
        <meta
          name="keywords"
          content="Fresh Apples Iran Turkey New Zealand, Fresh Dragon Fruit Vietnam, Export Grade Bananas Cavendish Robusta, Fresh Indian Coconut Pollachi Semi Husked, Krishi Sarthak Ventures LLP, APEDA Produce Export, Perishable Reefer Fruits"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Fresh Fruits & Vegetables | KRISHI SARTHAK VENTURES LLP"
        />
        <meta
          property="og:description"
          content="Explore fresh apples, dragon fruit, bananas, and coconuts from KRISHI SARTHAK VENTURES LLP. View product varieties, specifications, packaging information, and submit trade enquiries."
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
                    Fresh Fruits &amp; Vegetables
                  </li>
                </ol>
              </nav>

              {/* Main Category Header and Introduction */}
              <div className="grid gap-8 lg:grid-cols-[1.3fr_.7fr] lg:items-end">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#D9A441]/40 bg-[#214c39] px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-[#D9A441]">
                    <Sparkles size={13} />
                    <span>Global Agricultural Trade Portfolio</span>
                  </div>

                  <h1 className="font-display mt-4 text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#fbf9f2]">
                    {FRESH_FRUITS_HEADER.title}
                  </h1>

                  <p className="font-display mt-2 text-lg sm:text-xl font-normal text-[#e8c87a]">
                    {FRESH_FRUITS_HEADER.subtitle}
                  </p>

                  <div className="mt-4 max-w-2xl text-xs sm:text-sm leading-relaxed text-[#d7ddd8] space-y-3">
                    <p>
                      Explore our range of fresh fruits sourced through international and farm-level
                      supply networks. Our product portfolio includes fresh apples, dragon fruit,
                      bananas, and coconuts, with product options designed for wholesale buyers,
                      distributors, and international trade enquiries.
                    </p>
                    <p>
                      Explore product varieties, origin information, packaging options, storage
                      requirements, and available supply arrangements.
                    </p>
                  </div>

                  {/* Highlights Badges */}
                  <div className="mt-6 flex flex-wrap gap-2.5 pt-2">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-white/15 bg-white/[.07] px-3 py-1.5 text-xs text-white/90">
                      <ThermometerSnowflake size={14} className="text-[#D9A441]" />
                      Reefer Cold-Chain Logistics
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-white/15 bg-white/[.07] px-3 py-1.5 text-xs text-white/90">
                      <ShieldCheck size={14} className="text-[#D9A441]" />
                      Phytosanitary &amp; Origin Documentation
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-white/15 bg-white/[.07] px-3 py-1.5 text-xs text-white/90">
                      <Ship size={14} className="text-[#D9A441]" />
                      Port Clearance &amp; Wholesale Supply
                    </span>
                  </div>
                </div>

                {/* Sourcing Desk & Availability Notice Box */}
                <div className="rounded-xl border border-white/20 bg-white/[.06] p-5 backdrop-blur-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#D9A441]">
                      Commercial Enquiry Notice
                    </span>
                    <Info size={14} className="text-[#D9A441]" />
                  </div>

                  <p className="font-display mt-2 text-lg font-normal text-white">
                    Seasonal Sourcing &amp; Supply Coordination
                  </p>

                  <p className="mt-2 text-xs text-white/70 leading-relaxed">
                    Product availability, seasonal crop windows, and supply arrangements are
                    confirmed through the commercial enquiry process. KRISHI SARTHAK VENTURES LLP
                    coordinates with verified grower clusters and overseas suppliers to establish
                    tailored consignment logistics.
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2.5">
                    <a
                      href="#featured-products"
                      className="inline-flex items-center gap-2 rounded-md bg-[#D9A441] px-4 py-2 text-xs font-bold text-[#0a1826] transition-all hover:bg-[#e6b350]"
                    >
                      <span>Explore 4 Featured Fruits</span>
                      <ArrowDown size={13} />
                    </a>
                    <a
                      href="#enquiry-section"
                      className="inline-flex items-center gap-1.5 rounded-md border border-white/30 bg-transparent px-3.5 py-2 text-xs font-bold text-white transition-colors hover:bg-white/15"
                    >
                      <Mail size={13} />
                      <span>Request Enquiry</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Quick Table of Contents / Navigation Anchor Strip */}
          <section className="sticky top-0 z-30 border-b border-[#ded7c7] bg-[#f4eee1]/95 py-3 backdrop-blur-md shadow-xs">
            <div className="wrap flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div className="flex items-center gap-1 overflow-x-auto no-scrollbar py-0.5">
                <span className="text-[11px] font-bold text-[#183c2c] uppercase tracking-wider mr-2 hidden md:inline-block">
                  Quick Jump:
                </span>
                {FRESH_FRUITS_PRODUCTS.map((fruit) => (
                  <a
                    key={fruit.id}
                    href={`#${fruit.anchorId}`}
                    className="inline-flex items-center gap-1.5 rounded-md border border-[#d8cfbe] bg-[#ebe4d4] px-3 py-1.5 text-xs font-semibold text-[#214c39] transition-all hover:border-[#D9A441] hover:bg-[#fbf9f2] whitespace-nowrap shadow-2xs"
                  >
                    <span>{fruit.cardTitle}</span>
                  </a>
                ))}
                <a
                  href="#enquiry-section"
                  className="inline-flex items-center gap-1.5 rounded-md border border-[#214c39] bg-[#214c39] px-3 py-1.5 text-xs font-semibold text-[#f7f4eb] transition-all hover:bg-[#183c2c] whitespace-nowrap"
                >
                  <Mail size={12} className="text-[#D9A441]" />
                  <span>Enquiry Form</span>
                </a>
              </div>

              <div className="hidden lg:flex items-center gap-2 text-xs text-[#5f7063]">
                <Globe2 size={14} className="text-[#967235]" />
                <span>Domestic &amp; International Trade Portals</span>
              </div>
            </div>
          </section>

          {/* SECTION 7: FOUR PRODUCT CARDS GRID */}
          <section id="featured-products" className="py-12 md:py-16">
            <div className="wrap">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 border-b border-[#ded7c7] pb-6">
                <div>
                  <span className="eyebrow">Export &amp; Import Cargo</span>
                  <h2 className="font-display mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold text-[#183c2c]">
                    Featured Fresh Fruit Offerings
                  </h2>
                  <p className="mt-2 max-w-2xl text-xs sm:text-sm text-[#5f7063] leading-relaxed">
                    Organized for wholesale buyers, importers, and international trade enquiries.
                    Each card provides product details, packaging specifications, and direct
                    enquiry actions.
                  </p>
                </div>
                <div className="shrink-0 text-xs text-[#7e735d]">
                  Showing <strong className="text-[#183c2c]">4 Featured Fresh Fruits</strong>
                </div>
              </div>

              {/* Responsive Cards Grid: Desktop 4 or 3 col, Tablet 2 col, Mobile 1 col */}
              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {FRESH_FRUITS_PRODUCTS.map((product) => {
                  return (
                    <article
                      key={product.id}
                      className="group flex flex-col h-full rounded-xl border border-[#ddd8ca] bg-[#fbf9f2] transition-all duration-300 hover:border-[#D9A441] hover:shadow-xl hover:-translate-y-1 overflow-hidden"
                    >
                      {/* Product Image */}
                      <div className="relative aspect-square w-full overflow-hidden bg-[#e8e2cf] shrink-0">
                        <img
                          src={product.image}
                          alt={product.imageAlt}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#102c20]/80 via-transparent to-black/20 pointer-events-none" />

                        {/* Trade & HS Badges */}
                        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                          <span className="rounded-sm border border-white/30 bg-[#1d392d]/90 px-2.5 py-1 text-[9.5px] font-bold uppercase tracking-wider text-[#f5ebd2] backdrop-blur-xs">
                            {product.tradeType}
                          </span>
                          <span className="rounded-sm border border-[#D9A441]/70 bg-[#D9A441] px-2.5 py-1 text-[9.5px] font-bold text-[#0a1826] shadow-xs">
                            HS: {product.hsCode}
                          </span>
                        </div>

                        {/* Shelf Life Pill */}
                        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-[11px] font-medium">
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-black/60 px-2.5 py-1 backdrop-blur-xs">
                            <Clock size={12} className="text-[#D9A441]" />
                            <span className="truncate max-w-[190px]">{product.shelfLife}</span>
                          </span>
                        </div>
                      </div>

                      {/* Card Content */}
                      <div className="flex flex-col flex-1 p-5 justify-between">
                        <div>
                          {/* Title & Short Description */}
                          <div className="border-b border-[#e5dfd2] pb-3.5">
                            <h3 className="font-display text-xl font-semibold text-[#183c2c] group-hover:text-[#967235] transition-colors">
                              {product.cardTitle}
                            </h3>
                            <p className="mt-2 text-xs leading-relaxed text-[#5a6b5e]">
                              {product.shortDescription}
                            </p>
                          </div>

                          {/* Important Varieties / Product Characteristics */}
                          <div className="mt-3.5 rounded-md border border-[#e4decb] bg-[#f4eee1] p-2.5 text-[11px] leading-snug text-[#455649]">
                            <p className="font-bold text-[#214c39]">Key Varieties &amp; Origins:</p>
                            <p className="mt-0.5 text-[#526457]">{product.varietiesSummary}</p>
                            <p className="mt-1 text-[10px] text-[#7a8c7e]">
                              <span className="font-semibold">{product.originOrMarketsLabel}:</span>{' '}
                              {product.originOrMarkets}
                            </p>
                          </div>

                          {/* Highlights */}
                          <div className="mt-3 space-y-1 text-[10.5px] text-[#3e5244]">
                            <div className="flex items-center gap-1.5">
                              <CheckCircle2 size={13} className="text-[#1f7a42] shrink-0" />
                              <span className="truncate">{product.packaging}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <CheckCircle2 size={13} className="text-[#1f7a42] shrink-0" />
                              <span className="truncate">{product.certifications}</span>
                            </div>
                          </div>
                        </div>

                        {/* Action Buttons: View Details, Request Enquiry, WhatsApp Enquiry */}
                        <div className="mt-5 pt-3.5 border-t border-[#e2dccf] space-y-2">
                          {/* View Details button */}
                          <a
                            href={`#${product.anchorId}`}
                            className="flex w-full items-center justify-center gap-1.5 rounded-md border border-[#214c39] bg-[#fbf9f2] px-3 py-2 text-xs font-bold text-[#214c39] transition-all hover:bg-[#214c39] hover:text-[#f7f4eb]"
                          >
                            <span>View Full Details &amp; Specs</span>
                            <ArrowRight size={13} />
                          </a>

                          <div className="grid grid-cols-2 gap-1.5">
                            {/* WhatsApp Enquiry button */}
                            <a
                              href={product.whatsappUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`Enquire about ${product.name} on WhatsApp`}
                              className="inline-flex items-center justify-center gap-1.5 rounded-md bg-[#1f7a42] px-2.5 py-2 text-[11px] font-bold text-white transition-all hover:bg-[#186335]"
                            >
                              <MessageCircle size={13} className="shrink-0" />
                              <span>WhatsApp</span>
                            </a>

                            {/* Request Enquiry button */}
                            <Link
                              href={product.enquiryUrl}
                              aria-label={`Request formal enquiry for ${product.name}`}
                              className="inline-flex items-center justify-center gap-1.5 rounded-md bg-[#214c39] px-2.5 py-2 text-[11px] font-bold text-[#f7f4eb] transition-all hover:bg-[#173a2a]"
                            >
                              <Mail size={13} className="shrink-0 text-[#D9A441]" />
                              <span>Enquire</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>

          {/* SECTION 8: COMPREHENSIVE PRODUCT DETAIL SECTIONS */}
          <section className="border-t border-[#ded7c7] bg-[#f4eee1] py-14 md:py-20">
            <div className="wrap">
              <div className="text-center max-w-3xl mx-auto mb-14">
                <span className="eyebrow !text-[#967235]">Detailed Trade Specifications</span>
                <h2 className="font-display mt-2 text-3xl sm:text-4xl font-semibold text-[#183c2c]">
                  In-Depth Product Catalog &amp; Logistics
                </h2>
                <p className="mt-3 text-xs sm:text-sm text-[#5f7063] leading-relaxed">
                  Explore complete varieties, technical specifications, cold-chain parameters,
                  customs procedures, and shipment documentation for each fresh fruit consignment.
                </p>
              </div>

              {/* Four Comprehensive Product Detail Sections */}
              <div className="space-y-16 md:space-y-24">
                {FRESH_FRUITS_PRODUCTS.map((product, pIdx) => {
                  return (
                    <div
                      key={product.id}
                      id={product.anchorId}
                      className="scroll-mt-24 rounded-2xl border border-[#ded7c7] bg-[#fbf9f2] p-6 sm:p-8 md:p-10 shadow-sm"
                    >
                      {/* Secondary anchor point for legacy route compatibility */}
                      <span id={product.legacyAnchorId} className="sr-only" />

                      {/* SECTION A: PRODUCT OVERVIEW */}
                      <div className="grid gap-8 lg:grid-cols-[1.1fr_.9fr] lg:items-start border-b border-[#e2dccf] pb-8">
                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="rounded-md border border-[#D9A441]/60 bg-[#faedd2] px-2.5 py-0.5 text-xs font-bold text-[#8d6829]">
                              Product 0{pIdx + 1}
                            </span>
                            <span className="rounded-md border border-[#214c39]/30 bg-[#214c39]/10 px-2.5 py-0.5 text-xs font-bold text-[#214c39]">
                              HSN / HS Code: {product.hsCode}
                            </span>
                            <span className="rounded-md bg-[#183c2c] px-2.5 py-0.5 text-xs font-semibold text-[#f7f4eb]">
                              {product.importOrExportCategory}
                            </span>
                          </div>

                          <h3 className="font-display mt-3 text-2xl sm:text-3xl md:text-4xl font-semibold text-[#183c2c]">
                            {product.heading}
                          </h3>

                          <p className="font-display mt-1 text-base text-[#967235]">
                            {product.name}
                          </p>

                          <p className="mt-4 text-xs sm:text-sm leading-relaxed text-[#495b4e]">
                            {product.fullDescription}
                          </p>

                          {/* Key Characteristics Badges */}
                          <div className="mt-5 space-y-2">
                            <p className="text-xs font-bold text-[#183c2c] uppercase tracking-wider">
                              Key Product Highlights:
                            </p>
                            <ul className="grid gap-2 sm:grid-cols-2 text-xs text-[#394d3f]">
                              {product.keyFeatures.map((feat, fIdx) => (
                                <li key={fIdx} className="flex items-start gap-2">
                                  <Check
                                    size={14}
                                    className="mt-0.5 shrink-0 text-[#1f7a42]"
                                  />
                                  <span>{feat}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Quick Overview Actions */}
                          <div className="mt-6 flex flex-wrap gap-3">
                            <Link
                              href={product.enquiryUrl}
                              className="inline-flex items-center gap-2 rounded-md bg-[#214c39] px-4 py-2.5 text-xs font-bold text-[#f7f4eb] transition-all hover:bg-[#183c2c] shadow-xs"
                            >
                              <Mail size={14} className="text-[#D9A441]" />
                              <span>Request Product Enquiry</span>
                            </Link>

                            <a
                              href={product.whatsappUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 rounded-md bg-[#25D366] px-4 py-2.5 text-xs font-bold text-[#0a1826] transition-all hover:bg-[#20ba59] shadow-xs"
                            >
                              <MessageCircle size={15} />
                              <span>WhatsApp Enquiry</span>
                            </a>
                          </div>
                        </div>

                        {/* Product Hero Image & Snapshot Box */}
                        <div>
                          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-[#d8cfbe] bg-[#eadecb] shadow-inner">
                            <img
                              src={product.image}
                              alt={product.imageAlt}
                              className="h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                            <div className="absolute bottom-3 left-3 right-3 text-white">
                              <p className="text-xs font-bold">{product.name}</p>
                              <p className="text-[11px] text-white/80">
                                {product.originOrMarketsLabel}: {product.originOrMarkets}
                              </p>
                            </div>
                          </div>

                          {/* Quick Summary Pill Box */}
                          <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                            <div className="rounded-lg border border-[#e2dccf] bg-[#f5f0e4] p-3">
                              <span className="block text-[10px] uppercase font-bold text-[#7a6a4f]">
                                Shelf Life
                              </span>
                              <span className="mt-0.5 block font-semibold text-[#183c2c]">
                                {product.shelfLife}
                              </span>
                            </div>
                            <div className="rounded-lg border border-[#e2dccf] bg-[#f5f0e4] p-3">
                              <span className="block text-[10px] uppercase font-bold text-[#7a6a4f]">
                                Handling Mode
                              </span>
                              <span className="mt-0.5 block font-semibold text-[#183c2c]">
                                {product.tradeType === 'Import Cargo'
                                  ? 'Cold Storage / Reefer'
                                  : 'Reefer Container (13–14°C)'}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* SECTION B: PRODUCT VARIETIES */}
                      <div className="py-8 border-b border-[#e2dccf]">
                        <div className="flex items-center gap-2 mb-4">
                          <Leaf size={16} className="text-[#1f7a42]" />
                          <h4 className="font-display text-xl font-semibold text-[#183c2c]">
                            Product Varieties &amp; Cultivars
                          </h4>
                        </div>
                        <p className="text-xs text-[#5f7063] mb-6">
                          Sourced and graded according to commercial caliber, skin color uniformity,
                          and blemish tolerance.
                        </p>

                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                          {product.varieties.map((variety, vIdx) => (
                            <div
                              key={vIdx}
                              className="flex flex-col justify-between rounded-xl border border-[#ded7c7] bg-[#f5f0e4]/80 p-4 transition-all hover:border-[#D9A441] hover:bg-white"
                            >
                              <div>
                                <div className="flex items-center justify-between">
                                  <h5 className="font-display text-base font-semibold text-[#183c2c]">
                                    {variety.name}
                                  </h5>
                                  <span className="text-[10px] font-bold text-[#8d6829] uppercase">
                                    0{vIdx + 1}
                                  </span>
                                </div>
                                {variety.scientificOrAlias && (
                                  <p className="text-[10.5px] italic text-[#6e7e72] mt-0.5">
                                    {variety.scientificOrAlias}
                                  </p>
                                )}
                                <p className="mt-2.5 text-xs text-[#4b5c50] leading-relaxed">
                                  {variety.description}
                                </p>
                              </div>

                              <div className="mt-4 pt-3 border-t border-[#e2dccf] flex flex-wrap gap-1">
                                {variety.characteristics.map((char, cIdx) => (
                                  <span
                                    key={cIdx}
                                    className="rounded-md bg-[#ebe4d4] px-2 py-0.5 text-[10px] font-medium text-[#214c39]"
                                  >
                                    {char}
                                  </span>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* SECTION C: PRODUCT SPECIFICATIONS TABLE */}
                      <div className="py-8 border-b border-[#e2dccf]">
                        <div className="flex items-center gap-2 mb-4">
                          <FileText size={16} className="text-[#967235]" />
                          <h4 className="font-display text-xl font-semibold text-[#183c2c]">
                            Commercial Product Specifications
                          </h4>
                        </div>

                        <div className="overflow-hidden rounded-xl border border-[#ded7c7] bg-[#f5f0e4]">
                          <table className="w-full text-left text-xs border-collapse">
                            <thead>
                              <tr className="border-b border-[#ded7c7] bg-[#eadecb] text-[#183c2c]">
                                <th
                                  scope="col"
                                  className="w-[30%] sm:w-[25%] py-2.5 px-4 font-bold text-[10px] uppercase tracking-wider"
                                >
                                  Specification Parameter
                                </th>
                                <th
                                  scope="col"
                                  className="py-2.5 px-4 font-bold text-[10px] uppercase tracking-wider"
                                >
                                  Commercial Value &amp; Standard
                                </th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-[#e2dccf]">
                              <tr>
                                <th
                                  scope="row"
                                  className="bg-[#efe8da] py-2.5 px-4 font-semibold text-[#253d2f] whitespace-nowrap"
                                >
                                  Product Name
                                </th>
                                <td className="py-2.5 px-4 text-[#183c2c] font-bold">
                                  {product.name}
                                </td>
                              </tr>
                              <tr>
                                <th
                                  scope="row"
                                  className="bg-[#efe8da] py-2.5 px-4 font-semibold text-[#253d2f] whitespace-nowrap"
                                >
                                  HSN / HS Code
                                </th>
                                <td className="py-2.5 px-4 text-[#183c2c] font-mono font-bold">
                                  {product.hsCode}
                                </td>
                              </tr>
                              <tr>
                                <th
                                  scope="row"
                                  className="bg-[#efe8da] py-2.5 px-4 font-semibold text-[#253d2f] whitespace-nowrap"
                                >
                                  Import Category / Product Type
                                </th>
                                <td className="py-2.5 px-4 text-[#3e5244]">
                                  {product.importOrExportCategory}
                                </td>
                              </tr>
                              <tr>
                                <th
                                  scope="row"
                                  className="bg-[#efe8da] py-2.5 px-4 font-semibold text-[#253d2f] whitespace-nowrap align-top"
                                >
                                  Varieties Available
                                </th>
                                <td className="py-2.5 px-4 text-[#3e5244]">
                                  {product.varietiesSummary}
                                </td>
                              </tr>
                              <tr>
                                <th
                                  scope="row"
                                  className="bg-[#efe8da] py-2.5 px-4 font-semibold text-[#253d2f] whitespace-nowrap"
                                >
                                  {product.originOrMarketsLabel}
                                </th>
                                <td className="py-2.5 px-4 text-[#183c2c] font-semibold">
                                  {product.originOrMarkets}
                                </td>
                              </tr>
                              <tr>
                                <th
                                  scope="row"
                                  className="bg-[#efe8da] py-2.5 px-4 font-semibold text-[#253d2f] whitespace-nowrap align-top"
                                >
                                  Packaging Formats
                                </th>
                                <td className="py-2.5 px-4 text-[#3e5244]">
                                  <p className="font-semibold text-[#183c2c] mb-1">
                                    {product.packaging}
                                  </p>
                                  <ul className="list-disc list-inside space-y-0.5 text-[11px] text-[#5a6c5f]">
                                    {product.packagingDetails.map((pkg, idx) => (
                                      <li key={idx}>{pkg}</li>
                                    ))}
                                  </ul>
                                </td>
                              </tr>
                              <tr>
                                <th
                                  scope="row"
                                  className="bg-[#efe8da] py-2.5 px-4 font-semibold text-[#253d2f] whitespace-nowrap align-top"
                                >
                                  Shelf Life
                                </th>
                                <td className="py-2.5 px-4 text-[#3e5244]">
                                  <span className="font-bold text-[#183c2c]">
                                    {product.shelfLife}
                                  </span>
                                  <p className="mt-0.5 text-[11px] text-[#5a6c5f]">
                                    {product.shelfLifeDetails}
                                  </p>
                                </td>
                              </tr>
                              <tr>
                                <th
                                  scope="row"
                                  className="bg-[#efe8da] py-2.5 px-4 font-semibold text-[#253d2f] whitespace-nowrap align-top"
                                >
                                  Certification Information
                                </th>
                                <td className="py-2.5 px-4 text-[#3e5244]">
                                  <span className="font-semibold text-[#183c2c]">
                                    {product.certifications}
                                  </span>
                                  <ul className="mt-1 list-disc list-inside space-y-0.5 text-[11px] text-[#5a6c5f]">
                                    {product.certificationDetails.map((cert, idx) => (
                                      <li key={idx}>{cert}</li>
                                    ))}
                                  </ul>
                                </td>
                              </tr>
                              <tr>
                                <th
                                  scope="row"
                                  className="bg-[#efe8da] py-2.5 px-4 font-semibold text-[#253d2f] whitespace-nowrap align-top"
                                >
                                  Applicable Handling Requirements
                                </th>
                                <td className="py-2.5 px-4 text-[#3e5244]">
                                  <p>{product.handlingRequirements}</p>
                                  {product.temperatureRange && (
                                    <div className="mt-1.5 rounded-md bg-[#faedd2] border border-[#e5d2a8] p-2 text-[11px] text-[#7d5b1d]">
                                      <p className="font-bold">
                                        Handling Range: {product.temperatureRange}
                                      </p>
                                      {product.temperatureNote && (
                                        <p className="mt-0.5">{product.temperatureNote}</p>
                                      )}
                                    </div>
                                  )}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      {/* SECTION D: SOURCING AND LOGISTICS */}
                      <div className="py-8 border-b border-[#e2dccf]">
                        <div className="flex items-center gap-2 mb-4">
                          <Truck size={16} className="text-[#214c39]" />
                          <h4 className="font-display text-xl font-semibold text-[#183c2c]">
                            Sourcing, Reefer Transit &amp; Logistics
                          </h4>
                        </div>
                        <p className="text-xs text-[#5f7063] mb-6">
                          End-to-end management from orchard packhouses to destination ports and
                          wholesale distribution centers.
                        </p>

                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                          {product.logisticsSteps.map((step, sIdx) => (
                            <div
                              key={sIdx}
                              className="rounded-xl border border-[#ded7c7] bg-[#f5f0e4] p-4 text-xs"
                            >
                              <div className="flex items-center gap-2 text-[#967235] font-bold">
                                <span className="grid h-5 w-5 place-items-center rounded-full bg-[#faedd2] text-[10px]">
                                  {sIdx + 1}
                                </span>
                                <span>{step.title}</span>
                              </div>
                              <p className="mt-2 text-[#506254] leading-relaxed">
                                {step.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* SECTION E: COMPLIANCE & REGULATORY FRAMEWORK */}
                      <div className="py-8 border-b border-[#e2dccf]">
                        <div className="flex items-center gap-2 mb-4">
                          <ShieldCheck size={16} className="text-[#1f7a42]" />
                          <h4 className="font-display text-xl font-semibold text-[#183c2c]">
                            Shipment Compliance &amp; Import/Export Verification
                          </h4>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                          {product.complianceRequirements.map((comp, cIdx) => (
                            <div
                              key={cIdx}
                              className="rounded-xl border border-[#e2dccf] bg-white p-4 shadow-2xs"
                            >
                              <div className="flex items-center gap-2">
                                <BadgeCheck size={15} className="text-[#1f7a42] shrink-0" />
                                <span className="font-bold text-[#183c2c] text-xs">
                                  {comp.title}
                                </span>
                              </div>
                              <p className="mt-2 text-[11px] leading-relaxed text-[#596b5d]">
                                {comp.description || comp.details}
                              </p>
                            </div>
                          ))}
                        </div>

                        {/* Statutory Disclaimer */}
                        <div className="mt-5 flex items-start gap-2.5 rounded-lg border border-[#e2dccf] bg-[#ede7d8] p-3 text-[11px] text-[#63553e]">
                          <Info size={15} className="mt-0.5 shrink-0 text-[#967235]" />
                          <p>{product.complianceDisclaimer}</p>
                        </div>
                      </div>

                      {/* SECTION F: ENQUIRY CALL TO ACTION BAR */}
                      <div className="pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div>
                          <p className="font-display text-lg font-semibold text-[#183c2c]">
                            Ready to Procure {product.name}?
                          </p>
                          <p className="text-xs text-[#5f7063]">
                            Connect directly with our agricultural trade desk for pricing, minimum
                            order quantities, and shipment scheduling.
                          </p>
                        </div>

                        <div className="flex flex-wrap gap-2.5 shrink-0">
                          <a
                            href={product.whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-4 py-2.5 text-xs font-bold text-[#0a1826] transition-all hover:bg-[#20ba59] shadow-xs"
                          >
                            <MessageCircle size={15} />
                            <span>WhatsApp Enquiry</span>
                          </a>

                          <Link
                            href={product.enquiryUrl}
                            className="inline-flex items-center gap-2 rounded-lg bg-[#214c39] px-4 py-2.5 text-xs font-bold text-[#f7f4eb] transition-all hover:bg-[#183c2c] shadow-xs"
                          >
                            <Mail size={14} className="text-[#D9A441]" />
                            <span>Request Product Enquiry</span>
                          </Link>

                          <Link
                            href="/contact"
                            className="inline-flex items-center gap-1.5 rounded-lg border border-[#214c39] bg-transparent px-3.5 py-2.5 text-xs font-bold text-[#214c39] transition-colors hover:bg-[#214c39]/10"
                          >
                            <span>Contact Us</span>
                            <ArrowRight size={13} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* SECTION 10: INTERACTIVE TRADE ENQUIRY FORM */}
          <section id="enquiry-section" className="section-pad bg-[#fbf9f2]">
            <div className="wrap">
              <div className="rounded-2xl border border-[#ded7c7] bg-gradient-to-br from-[#f8f4ea] to-[#efe7d5] p-6 sm:p-10 md:p-12 shadow-sm">
                <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
                  <div>
                    <span className="eyebrow">Direct Commercial Desk</span>
                    <h2 className="font-display mt-3 text-3xl md:text-4xl text-[#183c2c]">
                      Submit Your Fresh Produce Trade Enquiry
                    </h2>
                    <p className="body-copy mt-4 text-xs sm:text-sm leading-relaxed">
                      Whether you require containerized reefer quotes, customized packhouse grading,
                      trial shipments, or seasonal supply agreements across GCC or global markets,
                      our trade team is ready to coordinate your requirements.
                    </p>

                    <div className="mt-6 space-y-2.5 text-xs text-[#4c5e50]">
                      <div className="flex items-center gap-2">
                        <Check size={15} className="text-[#214c39]" />
                        <span>Commercial grade sorting, caliper calibration &amp; packaging</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check size={15} className="text-[#214c39]" />
                        <span>Reefer container booking with continuous data logger monitoring</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check size={15} className="text-[#214c39]" />
                        <span>
                          Phytosanitary inspection, Certificate of Origin &amp; customs documentation
                        </span>
                      </div>
                    </div>

                    <div className="mt-8 rounded-xl border border-[#d8cfbe] bg-white p-5 text-xs text-[#5a6c5e]">
                      <p className="font-bold text-[#183c2c]">Direct Contact Details:</p>
                      <p className="mt-2">
                        <span className="font-semibold text-[#183c2c]">WhatsApp Trade Desk:</span>{' '}
                        <a
                          href={`https://wa.me/${COMPANY_INFO.whatsappNumber}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-bold text-[#1f7a42] hover:underline"
                        >
                          {COMPANY_INFO.displayWhatsapp}
                        </a>
                      </p>
                      <p className="mt-1">
                        <span className="font-semibold text-[#183c2c]">Official Email:</span>{' '}
                        <a href={COMPANY_INFO.emailMailto} className="underline text-[#214c39]">
                          {COMPANY_INFO.emailPlaceholder}
                        </a>
                      </p>
                      <p className="mt-1 text-[11px] text-[#7d8e80]">
                        Registered Entity: KRISHI SARTHAK VENTURES LLP
                      </p>
                    </div>
                  </div>

                  {/* Complete Form */}
                  <div className="rounded-xl border border-[#ddd5c2] bg-white p-6 sm:p-8 shadow-md">
                    <p className="font-display text-xl text-[#1d392d]">
                      Commercial Sourcing Form
                    </p>
                    <p className="mt-1 text-xs text-[#6e7d70]">
                      Fill out the parameters below to initiate your trade quotation.
                    </p>

                    {formStatus.error && (
                      <div className="mt-4 flex items-start gap-2 rounded-md bg-[#fdf2f2] border border-[#f5c6cb] p-3 text-xs text-[#721c24]">
                        <CircleAlert size={15} className="shrink-0 mt-0.5 text-[#d9534f]" />
                        <span>{formStatus.error}</span>
                      </div>
                    )}

                    {formStatus.successMessage && (
                      <div className="mt-4 flex items-start gap-2 rounded-md bg-[#d4edda] border border-[#c3e6cb] p-3 text-xs text-[#155724]">
                        <CheckCircle2 size={15} className="shrink-0 mt-0.5 text-[#28a745]" />
                        <span>{formStatus.successMessage}</span>
                      </div>
                    )}

                    <form onSubmit={handleFormSubmit} className="mt-6 space-y-4">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label
                            htmlFor="form-name"
                            className="block text-xs font-semibold text-[#214c39]"
                          >
                            Full Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="form-name"
                            type="text"
                            name="name"
                            required
                            value={enquiryForm.name}
                            onChange={handleFormChange}
                            placeholder="Your full name"
                            className="mt-1 w-full rounded-md border border-[#cfc8b7] bg-[#fbf9f2] px-3 py-2 text-xs text-[#183c2c] placeholder:text-[#9ea89f] focus:border-[#214c39] focus:outline-none focus:ring-1 focus:ring-[#214c39]"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="form-company"
                            className="block text-xs font-semibold text-[#214c39]"
                          >
                            Company Name
                          </label>
                          <input
                            id="form-company"
                            type="text"
                            name="companyName"
                            value={enquiryForm.companyName}
                            onChange={handleFormChange}
                            placeholder="Business or trading entity"
                            className="mt-1 w-full rounded-md border border-[#cfc8b7] bg-[#fbf9f2] px-3 py-2 text-xs text-[#183c2c] placeholder:text-[#9ea89f] focus:border-[#214c39] focus:outline-none focus:ring-1 focus:ring-[#214c39]"
                          />
                        </div>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label
                            htmlFor="form-email"
                            className="block text-xs font-semibold text-[#214c39]"
                          >
                            Business Email <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="form-email"
                            type="email"
                            name="email"
                            required
                            value={enquiryForm.email}
                            onChange={handleFormChange}
                            placeholder="name@company.com"
                            className="mt-1 w-full rounded-md border border-[#cfc8b7] bg-[#fbf9f2] px-3 py-2 text-xs text-[#183c2c] placeholder:text-[#9ea89f] focus:border-[#214c39] focus:outline-none focus:ring-1 focus:ring-[#214c39]"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="form-phone"
                            className="block text-xs font-semibold text-[#214c39]"
                          >
                            Phone Number
                          </label>
                          <input
                            id="form-phone"
                            type="tel"
                            name="phone"
                            value={enquiryForm.phone}
                            onChange={handleFormChange}
                            placeholder="+971 / +91 / Country code"
                            className="mt-1 w-full rounded-md border border-[#cfc8b7] bg-[#fbf9f2] px-3 py-2 text-xs text-[#183c2c] placeholder:text-[#9ea89f] focus:border-[#214c39] focus:outline-none focus:ring-1 focus:ring-[#214c39]"
                          />
                        </div>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label
                            htmlFor="form-product"
                            className="block text-xs font-semibold text-[#214c39]"
                          >
                            Product of Interest <span className="text-red-500">*</span>
                          </label>
                          <select
                            id="form-product"
                            name="product"
                            value={enquiryForm.product}
                            onChange={handleFormChange}
                            className="mt-1 w-full rounded-md border border-[#cfc8b7] bg-[#fbf9f2] px-3 py-2 text-xs text-[#183c2c] focus:border-[#214c39] focus:outline-none focus:ring-1 focus:ring-[#214c39]"
                          >
                            <option value="Fresh Apples">Fresh Apples (HS 08081000)</option>
                            <option value="Fresh Dragon Fruit (Pitaya)">
                              Fresh Dragon Fruit (HS 08109090)
                            </option>
                            <option value="Fresh Export-Grade Bananas">
                              Fresh Export-Grade Bananas (HS 08039010)
                            </option>
                            <option value="Fresh Indian Coconut">
                              Fresh Indian Coconut (HS 08011910)
                            </option>
                            <option value="Multiple Fresh Fruit Consignments">
                              Multiple Fresh Fruit Consignments
                            </option>
                          </select>
                        </div>

                        <div>
                          <label
                            htmlFor="form-quantity"
                            className="block text-xs font-semibold text-[#214c39]"
                          >
                            Required Quantity
                          </label>
                          <input
                            id="form-quantity"
                            type="text"
                            name="quantity"
                            value={enquiryForm.quantity}
                            onChange={handleFormChange}
                            placeholder="e.g. 1 x 40ft Reefer / 20 MT"
                            className="mt-1 w-full rounded-md border border-[#cfc8b7] bg-[#fbf9f2] px-3 py-2 text-xs text-[#183c2c] placeholder:text-[#9ea89f] focus:border-[#214c39] focus:outline-none focus:ring-1 focus:ring-[#214c39]"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="form-country"
                          className="block text-xs font-semibold text-[#214c39]"
                        >
                          Destination Country / Port of Discharge
                        </label>
                        <input
                          id="form-country"
                          type="text"
                          name="destinationCountry"
                          value={enquiryForm.destinationCountry}
                          onChange={handleFormChange}
                          placeholder="e.g. UAE (Jebel Ali), Saudi Arabia (Dammam), Oman, etc."
                          className="mt-1 w-full rounded-md border border-[#cfc8b7] bg-[#fbf9f2] px-3 py-2 text-xs text-[#183c2c] placeholder:text-[#9ea89f] focus:border-[#214c39] focus:outline-none focus:ring-1 focus:ring-[#214c39]"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="form-message"
                          className="block text-xs font-semibold text-[#214c39]"
                        >
                          Enquiry Message &amp; Specifications <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          id="form-message"
                          name="message"
                          rows={4}
                          required
                          value={enquiryForm.message}
                          onChange={handleFormChange}
                          placeholder="Please provide details about preferred varieties, target packaging, delivery timeline, or required certification documents..."
                          className="mt-1 w-full rounded-md border border-[#cfc8b7] bg-[#fbf9f2] px-3 py-2 text-xs text-[#183c2c] placeholder:text-[#9ea89f] focus:border-[#214c39] focus:outline-none focus:ring-1 focus:ring-[#214c39]"
                        />
                      </div>

                      <div className="pt-2">
                        <button
                          type="submit"
                          className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#214c39] px-5 py-3 text-xs font-bold text-[#f7f4eb] transition-all hover:bg-[#183c2c] active:bg-[#102b1f] shadow-xs cursor-pointer"
                        >
                          <Send size={15} className="text-[#D9A441]" />
                          <span>Submit Trade Enquiry</span>
                        </button>
                      </div>
                    </form>

                    <div className="mt-4 text-center">
                      <span className="text-[11px] text-[#718074]">
                        Prefer direct messaging?{' '}
                        <a
                          href={getFreshFruitWhatsAppUrl(enquiryForm.product)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-bold text-[#1f7a42] hover:underline"
                        >
                          Chat on WhatsApp with Pre-filled Product Details
                        </a>
                      </span>
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
