import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {
  ArrowRight,
  Award,
  CheckCircle2,
  ChevronRight,
  ClipboardList,
  Compass,
  Globe2,
  HandshakeIcon,
  Heart,
  Home,
  Leaf,
  Lightbulb,
  Mail,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Sprout,
  Star,
  Target,
  TrendingUp,
  Truck,
  Users,
  Wheat,
  Zap,
} from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

// ─── Data ───────────────────────────────────────────────────────────────────

const CORE_VALUES = [
  {
    icon: ShieldCheck,
    title: 'Integrity & Transparency',
    description:
      'We build every partnership on a foundation of honesty — from fair pricing to accurate quality declarations, our word is our bond.',
    color: 'text-[#214c39]',
    bg: 'bg-[#eaf2ec]',
    border: 'border-[#c3d9c8]',
  },
  {
    icon: Leaf,
    title: 'Quality First',
    description:
      'Every consignment passes through rigorous grading, testing, and compliance verification before it leaves our warehouse.',
    color: 'text-[#8a682f]',
    bg: 'bg-[#fdf4e1]',
    border: 'border-[#e8d5a3]',
  },
  {
    icon: Globe2,
    title: 'Global Vision',
    description:
      'We think beyond borders — understanding international market dynamics, regulations, and buyer expectations to deliver seamless cross-border trade.',
    color: 'text-[#2a5f7a]',
    bg: 'bg-[#e6f3f8]',
    border: 'border-[#b8d9e8]',
  },
  {
    icon: HandshakeIcon,
    title: 'Farmer-Centric Sourcing',
    description:
      'We source directly from verified agricultural clusters and cooperatives, ensuring fair remuneration for farmers and fresher produce for buyers.',
    color: 'text-[#6b3d8a]',
    bg: 'bg-[#f3eef8]',
    border: 'border-[#d4c1e8]',
  },
  {
    icon: Zap,
    title: 'Speed & Reliability',
    description:
      'Time-sensitive trade demands responsive partners. We maintain pre-qualified supplier networks to fulfil orders faster with consistent lead times.',
    color: 'text-[#c05c1a]',
    bg: 'bg-[#fdf0e8]',
    border: 'border-[#f0c8a0]',
  },
  {
    icon: Heart,
    title: 'Sustainability',
    description:
      'We encourage sustainable harvesting, minimal-waste packaging, and eco-conscious logistics choices to protect the planet for future generations.',
    color: 'text-[#1b6b4a]',
    bg: 'bg-[#e8f5ee]',
    border: 'border-[#b0d9bf]',
  },
];

const KEY_STRENGTHS = [
  {
    stat: '7+',
    label: 'Product Categories',
    sub: 'Agri & Industrial',
    icon: Wheat,
  },
  {
    stat: '15+',
    label: 'Export Destinations',
    sub: 'Gulf, Europe & Asia',
    icon: Globe2,
  },
  {
    stat: '100%',
    label: 'Compliance Ready',
    sub: 'IEC, APEDA, FSSAI, GSTIN',
    icon: ShieldCheck,
  },
  {
    stat: '4-Stage',
    label: 'Quality Process',
    sub: 'From Farm to Port',
    icon: CheckCircle2,
  },
];

const MILESTONES = [
  {
    label: 'Founded',
    detail: 'Registered as an LLP under the Ministry of Corporate Affairs, India with a mandate to connect Indian agricultural surplus with global demand.',
    icon: Sprout,
  },
  {
    label: 'Compliance Stack',
    detail: 'Secured IEC code, APEDA registration, FSSAI licence, and GSTIN — building a fully compliant export infrastructure.',
    icon: ShieldCheck,
  },
  {
    label: 'Product Portfolio',
    detail: 'Expanded from fresh produce to a diverse portfolio spanning 7 categories — agri commodities, spices, pulses, dehydrated powders, dry fruits, and industrial materials.',
    icon: Wheat,
  },
  {
    label: 'Global Reach',
    detail: 'Established sourcing and trade partnerships covering the UAE, Saudi Arabia, Gulf Cooperation Council nations, Europe, and Southeast Asian markets.',
    icon: Globe2,
  },
];

const APPROACH_STEPS = [
  {
    number: '01',
    title: 'Market Intelligence',
    description: 'We analyse real-time demand signals, seasonal cycles, and international buyer requirements before committing to any sourcing plan.',
    icon: Target,
  },
  {
    number: '02',
    title: 'Verified Sourcing',
    description: 'Our on-ground teams identify and audit agricultural clusters, cooperatives, and processing units to ensure origin-authenticity and crop quality.',
    icon: Compass,
  },
  {
    number: '03',
    title: 'Compliance & Documentation',
    description: 'From phytosanitary certificates to APEDA export permits and packing lists — we handle the full documentation stack so buyers never face delays.',
    icon: ClipboardList,
  },
  {
    number: '04',
    title: 'Logistics & Delivery',
    description: 'We coordinate container booking, freight forwarding, and customs clearance for timely, damage-free delivery to the port of destination.',
    icon: Truck,
  },
];

const CERTIFICATIONS = [
  { name: 'IEC', full: 'Import Export Code', issuer: 'DGFT, Govt. of India' },
  { name: 'APEDA', full: 'Agri & Processed Food Export', issuer: 'Ministry of Commerce' },
  { name: 'FSSAI', full: 'Food Safety Standards', issuer: 'Govt. of India' },
  { name: 'GSTIN', full: 'GST Registration', issuer: 'Dept. of Revenue, India' },
  { name: 'MSME', full: 'Udyam Registration', issuer: 'Ministry of MSME' },
  { name: 'RCMC', full: 'Registration-Cum-Membership Certificate', issuer: 'Export Promotion Council' },
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function AboutUsPage() {
  return (
    <>
      <Head>
        <title>About Us | KRISHI SARTHAK VENTURES LLP</title>
        <meta
          name="description"
          content="Learn about KRISHI SARTHAK VENTURES LLP — India's trusted agricultural exporter. Discover our company overview, mission, vision, core values, and key strengths in global trade."
        />
        <meta
          name="keywords"
          content="Krishi Sarthak Ventures LLP About, Indian Agricultural Exporter, Export Company India, About Us Agricultural Trade, Mission Vision LLP, APEDA Registered Exporter"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="About Us | KRISHI SARTHAK VENTURES LLP" />
        <meta
          property="og:description"
          content="Discover how KRISHI SARTHAK VENTURES LLP bridges Indian agricultural producers with verified international buyers through rigorous quality and compliance."
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className="grain min-h-[100dvh] flex flex-col bg-[#fbf9f2]">
        {/* Skip to content */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-white focus:p-3 focus:text-black"
        >
          Skip to content
        </a>

        <Navbar />

        <main id="main-content" className="flex-1">

          {/* ── HERO SECTION ──────────────────────────────────────────── */}
          <section className="relative overflow-hidden bg-[#183c2c] text-[#f7f4eb] pt-8 pb-14 md:pt-12 md:pb-20 border-b border-[#2d523f]">
            {/* Ambient decorative rings */}
            <div className="absolute -right-24 -top-36 h-96 w-96 rounded-full border border-white/[.07] pointer-events-none" />
            <div className="absolute -left-20 -bottom-28 h-80 w-80 rounded-full border border-white/[.05] pointer-events-none" />
            <div className="absolute right-1/3 top-1/2 h-64 w-64 rounded-full border border-[#D9A441]/[.06] pointer-events-none" />

            <div className="wrap relative">
              {/* Breadcrumb */}
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
                  <li className="font-semibold text-[#D9A441]" aria-current="page">
                    About Us
                  </li>
                </ol>
              </nav>

              <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
                <div>
                  {/* Label */}
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#D9A441]/40 bg-[#D9A441]/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-widest text-[#e8c679] backdrop-blur-xs">
                    <Sparkles size={12} className="text-[#D9A441]" />
                    <span>Rooted in India · Growing Globally</span>
                  </div>

                  <h1 className="mt-4 font-display text-3xl font-medium tracking-tight text-white sm:text-4xl md:text-5xl lg:leading-tight">
                    KRISHI SARTHAK<br />
                    <span className="text-[#D9A441]">VENTURES LLP</span>
                  </h1>

                  <p className="mt-5 max-w-2xl text-sm leading-relaxed text-[#c3ceb8] sm:text-base">
                    A professionally registered Limited Liability Partnership bridging India's rich agricultural
                    surplus with discerning international buyers across the Gulf, Europe, and Southeast Asia.
                    We combine farm-level sourcing expertise with end-to-end trade execution to deliver
                    export-grade commodities with consistency and compliance.
                  </p>

                  {/* Highlight pills */}
                  <div className="mt-8 flex flex-wrap gap-3">
                    {[
                      { icon: ShieldCheck, text: 'IEC & APEDA Registered' },
                      { icon: Globe2, text: '15+ Export Destinations' },
                      { icon: Leaf, text: '7 Product Categories' },
                    ].map(({ icon: Icon, text }) => (
                      <div
                        key={text}
                        className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[.04] px-3.5 py-2"
                      >
                        <Icon size={15} className="text-[#D9A441]" />
                        <span className="text-xs font-semibold text-[#f5f1e6]">{text}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link
                      href="/#contact"
                      className="inline-flex items-center gap-2 rounded-lg bg-[#D9A441] px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#0a1826] transition-all hover:bg-[#e6b450] hover:shadow-lg"
                    >
                      <Mail size={14} />
                      Get in Touch
                    </Link>
                    <Link
                      href="/#products"
                      className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-white/10 hover:border-[#D9A441]"
                    >
                      <Wheat size={14} />
                      Our Products
                    </Link>
                  </div>
                </div>

                {/* Right: Stats card */}
                <div className="hidden lg:block">
                  <div className="rounded-2xl border border-white/10 bg-white/[.04] p-6 backdrop-blur-xs space-y-4">
                    {KEY_STRENGTHS.map(({ stat, label, sub, icon: Icon }) => (
                      <div
                        key={label}
                        className="flex items-center gap-4 rounded-xl border border-white/[.08] bg-white/[.03] p-4"
                      >
                        <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[#D9A441]/40 bg-[#D9A441]/10 text-[#D9A441]">
                          <Icon size={20} />
                        </div>
                        <div>
                          <div className="text-2xl font-extrabold text-white leading-none">{stat}</div>
                          <div className="text-xs font-semibold text-[#e8c679]">{label}</div>
                          <div className="text-[11px] text-[#8fa898]">{sub}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile stats row */}
              <div className="mt-8 grid grid-cols-2 gap-3 lg:hidden">
                {KEY_STRENGTHS.map(({ stat, label, icon: Icon }) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[.04] p-3.5"
                  >
                    <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[#D9A441]/40 bg-[#D9A441]/10 text-[#D9A441]">
                      <Icon size={17} />
                    </div>
                    <div>
                      <div className="text-lg font-extrabold text-white leading-none">{stat}</div>
                      <div className="text-[11px] font-semibold text-[#e8c679]">{label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── COMPANY OVERVIEW ──────────────────────────────────────── */}
          <section className="py-14 md:py-20">
            <div className="wrap">
              <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                {/* Left text */}
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[.18em] text-[#8a682f]">Company Overview</p>
                  <h2 className="mt-2 font-display text-2xl font-medium text-[#1d392d] sm:text-3xl md:text-4xl leading-snug">
                    Who We Are
                  </h2>
                  <div className="mt-1 h-1 w-14 bg-[#D9A441] rounded-full" />

                  <div className="mt-6 space-y-4 text-sm leading-relaxed text-[#526457]">
                    <p>
                      <strong className="text-[#1d392d]">KRISHI SARTHAK VENTURES LLP</strong> is a registered
                      Indian export-import trade firm with deep roots in agricultural sourcing and a forward-looking
                      approach to global commerce. Incorporated under the Limited Liability Partnership Act, we
                      operate with the agility of a boutique trade house and the compliance rigour of a large
                      export enterprise.
                    </p>
                    <p>
                      Our name encapsulates our purpose — <em>"Krishi"</em> meaning agriculture and{' '}
                      <em>"Sarthak"</em> meaning purposeful or meaningful. Together, we stand for purposeful
                      agriculture commerce — trade that benefits farmers, buyers, and the global food supply chain.
                    </p>
                    <p>
                      We specialise in sourcing, processing, grading, and exporting a diverse portfolio of
                      agricultural commodities including fresh produce, frozen vegetables, dehydrated powders,
                      spices and herbs, pulses and grains, dry fruits and nuts, and select industrial materials
                      such as gypsum, bitumen, and fly ash.
                    </p>
                    <p>
                      Beyond commodities, we offer comprehensive trade support services: freight forwarding,
                      global trade consultancy, documentation and licensing assistance — making us a true
                      one-stop partner for international buyers seeking reliable Indian agricultural exports.
                    </p>
                  </div>
                </div>

                {/* Right: Quick-fact cards */}
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    {
                      icon: Users,
                      title: 'Experienced Team',
                      desc: 'Backed by professionals with deep expertise in agri-trade, logistics, and regulatory compliance.',
                    },
                    {
                      icon: Award,
                      title: 'Compliance-First',
                      desc: 'Registered under IEC, APEDA, FSSAI, GSTIN, and MSME Udyam — fully compliant for international trade.',
                    },
                    {
                      icon: TrendingUp,
                      title: 'Growth Oriented',
                      desc: 'Continuously expanding our product portfolio and geographic reach to serve a broader global market.',
                    },
                    {
                      icon: Lightbulb,
                      title: 'Innovation-Driven',
                      desc: 'We leverage market intelligence and data-driven sourcing to stay ahead of commodity trends.',
                    },
                  ].map(({ icon: Icon, title, desc }) => (
                    <div
                      key={title}
                      className="rounded-xl border border-[#e4dfd3] bg-white p-5 shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                    >
                      <div className="mb-3 grid h-10 w-10 place-items-center rounded-lg border border-[#d8cfb9] bg-[#fdf8ee] text-[#8b682d]">
                        <Icon size={20} />
                      </div>
                      <h3 className="font-bold text-sm text-[#1d392d]">{title}</h3>
                      <p className="mt-1 text-xs leading-relaxed text-[#66756a]">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ── MISSION & VISION ──────────────────────────────────────── */}
          <section className="py-14 md:py-20 bg-[#f3efe4] border-y border-[#ddd8ca]">
            <div className="wrap">
              <div className="mb-10 text-center">
                <p className="text-[11px] font-bold uppercase tracking-[.18em] text-[#8a682f]">Purpose & Direction</p>
                <h2 className="mt-2 font-display text-2xl font-medium text-[#1d392d] sm:text-3xl md:text-4xl">
                  Mission & Vision
                </h2>
                <div className="mx-auto mt-2 h-1 w-14 bg-[#D9A441] rounded-full" />
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {/* Mission */}
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#214c39] to-[#132e22] p-8 text-white shadow-lg">
                  <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full border border-white/[.07]" />
                  <div className="absolute -left-8 -bottom-8 h-32 w-32 rounded-full border border-[#D9A441]/[.1]" />

                  <div className="relative">
                    <div className="mb-4 inline-grid h-12 w-12 place-items-center rounded-full border border-[#D9A441]/50 bg-[#D9A441]/15 text-[#D9A441]">
                      <Target size={24} />
                    </div>
                    <span className="block text-[10px] font-bold uppercase tracking-[.2em] text-[#D9A441]">
                      Our Mission
                    </span>
                    <h3 className="mt-2 font-display text-xl font-medium leading-snug text-white">
                      Purposeful Trade. Measurable Impact.
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-white/75">
                      To be India's most reliable agricultural export partner — delivering consistent quality,
                      full compliance, and transparent trade execution across global markets. We aim to empower
                      Indian farmers and agri-processors by connecting them to premium international buyers,
                      creating sustainable livelihoods and robust supply chains.
                    </p>
                    <ul className="mt-5 space-y-2">
                      {[
                        'Direct sourcing from verified farm clusters',
                        'Zero-compromise on quality & grading standards',
                        'Seamless end-to-end trade facilitation',
                      ].map((point) => (
                        <li key={point} className="flex items-start gap-2 text-xs text-white/80">
                          <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-[#D9A441]" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Vision */}
                <div className="relative overflow-hidden rounded-2xl border border-[#d9c98a] bg-gradient-to-br from-[#fdf3db] to-[#f7e9bc] p-8 shadow-xs">
                  <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full border border-[#D9A441]/[.15]" />
                  <div className="absolute -left-8 -bottom-8 h-32 w-32 rounded-full border border-[#214c39]/[.08]" />

                  <div className="relative">
                    <div className="mb-4 inline-grid h-12 w-12 place-items-center rounded-full border border-[#8a682f]/40 bg-[#8a682f]/10 text-[#8a682f]">
                      <Lightbulb size={24} />
                    </div>
                    <span className="block text-[10px] font-bold uppercase tracking-[.2em] text-[#8a682f]">
                      Our Vision
                    </span>
                    <h3 className="mt-2 font-display text-xl font-medium leading-snug text-[#1d392d]">
                      India's Trusted Bridge to Global Markets.
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-[#526457]">
                      To become a globally recognised name in agricultural trade by 2030 — known for integrity,
                      innovation, and impact. We envision a future where every Indian agri-export is backed by
                      verifiable quality, fair trade practices, and a partner who cares about both the farmer
                      and the final consumer.
                    </p>
                    <ul className="mt-5 space-y-2">
                      {[
                        'Expand to 30+ export markets by 2030',
                        'Develop proprietary agri-supply chain technology',
                        'Champion sustainable & ethical sourcing practices',
                      ].map((point) => (
                        <li key={point} className="flex items-start gap-2 text-xs text-[#526457]">
                          <Star size={14} className="mt-0.5 shrink-0 text-[#8a682f]" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── CORE VALUES ───────────────────────────────────────────── */}
          <section className="py-14 md:py-20">
            <div className="wrap">
              <div className="mb-10 text-center">
                <p className="text-[11px] font-bold uppercase tracking-[.18em] text-[#8a682f]">What We Stand For</p>
                <h2 className="mt-2 font-display text-2xl font-medium text-[#1d392d] sm:text-3xl md:text-4xl">
                  Core Values
                </h2>
                <div className="mx-auto mt-2 h-1 w-14 bg-[#D9A441] rounded-full" />
                <p className="mt-4 max-w-2xl mx-auto text-sm text-[#526457]">
                  These principles are not aspirational posters on a wall — they are the daily operating standards
                  by which we make every sourcing, logistics, and trade decision.
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {CORE_VALUES.map(({ icon: Icon, title, description, color, bg, border }) => (
                  <div
                    key={title}
                    className={`rounded-xl border ${border} ${bg} p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200`}
                  >
                    <div className={`mb-4 inline-grid h-11 w-11 place-items-center rounded-lg border ${border} bg-white ${color}`}>
                      <Icon size={22} />
                    </div>
                    <h3 className="font-bold text-sm text-[#1d392d]">{title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-[#66756a]">{description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── OUR APPROACH ──────────────────────────────────────────── */}
          <section className="py-14 md:py-20 bg-[#f3efe4] border-y border-[#ddd8ca]">
            <div className="wrap">
              <div className="mb-12 text-center">
                <p className="text-[11px] font-bold uppercase tracking-[.18em] text-[#8a682f]">How We Work</p>
                <h2 className="mt-2 font-display text-2xl font-medium text-[#1d392d] sm:text-3xl md:text-4xl">
                  Our Trade Approach
                </h2>
                <div className="mx-auto mt-2 h-1 w-14 bg-[#D9A441] rounded-full" />
                <p className="mt-4 max-w-xl mx-auto text-sm text-[#526457]">
                  A disciplined 4-stage process that transforms agricultural surplus into verified, export-ready shipments.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {APPROACH_STEPS.map(({ number, title, description, icon: Icon }, i) => (
                  <div key={title} className="relative">
                    {/* Connector line (desktop) */}
                    {i < APPROACH_STEPS.length - 1 && (
                      <div className="absolute left-full top-8 hidden w-6 border-t-2 border-dashed border-[#D9A441]/40 lg:block" />
                    )}
                    <div className="h-full rounded-xl border border-[#e4dfd3] bg-white p-6 shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                      <div className="mb-4 flex items-center gap-3">
                        <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[#D9A441]/50 bg-[#214c39] text-[#D9A441]">
                          <Icon size={20} />
                        </div>
                        <span className="text-2xl font-extrabold text-[#D9A441]/60">{number}</span>
                      </div>
                      <h3 className="font-bold text-sm text-[#1d392d]">{title}</h3>
                      <p className="mt-2 text-xs leading-relaxed text-[#66756a]">{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── CERTIFICATIONS ────────────────────────────────────────── */}
          <section className="py-14 md:py-20">
            <div className="wrap">
              <div className="mb-10 text-center">
                <p className="text-[11px] font-bold uppercase tracking-[.18em] text-[#8a682f]">Trade Readiness</p>
                <h2 className="mt-2 font-display text-2xl font-medium text-[#1d392d] sm:text-3xl md:text-4xl">
                  Certifications & Compliance
                </h2>
                <div className="mx-auto mt-2 h-1 w-14 bg-[#D9A441] rounded-full" />
                <p className="mt-4 max-w-xl mx-auto text-sm text-[#526457]">
                  Our compliance stack ensures every export meets regulatory requirements across Indian and
                  international standards — so buyers can trade with complete confidence.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {CERTIFICATIONS.map(({ name, full, issuer }) => (
                  <div
                    key={name}
                    className="flex items-start gap-4 rounded-xl border border-[#e4dfd3] bg-white p-5 shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-lg border border-[#D9A441]/40 bg-[#214c39]/5 text-[#214c39]">
                      <ShieldCheck size={22} />
                    </div>
                    <div>
                      <div className="text-base font-extrabold text-[#214c39]">{name}</div>
                      <div className="text-xs font-semibold text-[#1d392d]">{full}</div>
                      <div className="mt-0.5 text-[11px] text-[#8a9d8e]">{issuer}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── JOURNEY / MILESTONES ──────────────────────────────────── */}
          <section className="py-14 md:py-20 bg-[#183c2c] text-white">
            <div className="wrap">
              <div className="mb-12 text-center">
                <p className="text-[11px] font-bold uppercase tracking-[.18em] text-[#D9A441]">Our Story</p>
                <h2 className="mt-2 font-display text-2xl font-medium sm:text-3xl md:text-4xl text-white">
                  Our Journey
                </h2>
                <div className="mx-auto mt-2 h-1 w-14 bg-[#D9A441] rounded-full" />
              </div>

              <div className="relative mx-auto max-w-3xl">
                {/* vertical line */}
                <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-[#D9A441]/60 via-[#D9A441]/20 to-transparent md:left-1/2" />

                <div className="space-y-10">
                  {MILESTONES.map(({ label, detail, icon: Icon }, i) => (
                    <div
                      key={label}
                      className={`relative flex items-start gap-6 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                    >
                      {/* dot */}
                      <div className="absolute left-5 top-4 z-10 grid h-5 w-5 -translate-x-1/2 place-items-center rounded-full border-2 border-[#D9A441] bg-[#183c2c] md:left-1/2 md:top-4">
                        <div className="h-2 w-2 rounded-full bg-[#D9A441]" />
                      </div>

                      {/* card */}
                      <div className={`ml-12 flex-1 md:ml-0 ${i % 2 === 0 ? 'md:pr-10 md:text-right' : 'md:pl-10'}`}>
                        <div className="inline-block rounded-xl border border-white/10 bg-white/[.05] p-5 text-left backdrop-blur-xs hover:bg-white/[.08] transition-colors">
                          <div className="mb-2 flex items-center gap-2">
                            <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-[#D9A441]/40 bg-[#D9A441]/10 text-[#D9A441]">
                              <Icon size={16} />
                            </div>
                            <span className="font-bold text-sm text-[#D9A441]">{label}</span>
                          </div>
                          <p className="text-xs leading-relaxed text-white/70">{detail}</p>
                        </div>
                      </div>

                      {/* spacer for alternating layout on desktop */}
                      <div className="hidden flex-1 md:block" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ── CTA ───────────────────────────────────────────────────── */}
          <section className="py-14 md:py-20 border-t border-[#ddd8ca]">
            <div className="wrap">
              <div className="mx-auto max-w-3xl rounded-2xl bg-gradient-to-br from-[#214c39] to-[#153526] p-10 text-center text-white shadow-xl relative overflow-hidden">
                <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full border border-white/[.06] pointer-events-none" />
                <div className="absolute -left-10 -bottom-10 h-36 w-36 rounded-full border border-[#D9A441]/[.08] pointer-events-none" />
                <div className="relative">
                  <div className="mx-auto mb-4 inline-grid h-14 w-14 place-items-center rounded-full border border-[#D9A441]/50 bg-[#D9A441]/15 text-[#D9A441]">
                    <Sprout size={28} />
                  </div>
                  <h2 className="font-display text-2xl font-medium text-white sm:text-3xl">
                    Ready to Trade with Us?
                  </h2>
                  <p className="mt-3 text-sm text-white/70 max-w-lg mx-auto">
                    Whether you are a global buyer looking for reliable Indian agricultural exports or a domestic
                    producer seeking international market access — we are your trade partner.
                  </p>
                  <div className="mt-7 flex flex-wrap justify-center gap-4">
                    <Link
                      href="/#contact"
                      className="inline-flex items-center gap-2 rounded-lg bg-[#D9A441] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#0a1826] transition-all hover:bg-[#e6b450] hover:shadow-lg"
                    >
                      <Mail size={15} />
                      Send an Enquiry
                    </Link>
                    <a
                      href="https://wa.me/919876543210?text=Hello%20KRISHI%20SARTHAK%20VENTURES%20LLP%2C%20I%20would%20like%20to%20know%20more%20about%20your%20export%20services."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-white/10 hover:border-[#D9A441]"
                    >
                      <MessageCircle size={15} className="text-[#25D366]" />
                      WhatsApp Us
                    </a>
                    <Link
                      href="/#products"
                      className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-white/10 hover:border-white/50"
                    >
                      <ArrowRight size={15} />
                      Browse Products
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </main>

        <Footer />
      </div>
    </>
  );
}
