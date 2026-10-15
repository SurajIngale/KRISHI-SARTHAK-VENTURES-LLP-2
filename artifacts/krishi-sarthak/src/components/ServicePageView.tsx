import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Compass,
  FileCheck2,
  Globe2,
  HelpCircle,
  Home,
  Info,
  Layers,
  Mail,
  MessageCircle,
  Phone,
  Send,
  ShieldAlert,
  ShieldCheck,
  Ship,
  Sparkles,
  Truck,
  ClipboardList,
  Building2,
} from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ServiceDetail, getOtherServices, SERVICES_LIST } from '@/data/servicesData';
import { COMPANY_INFO } from '@/data/tradeData';

interface ServicePageViewProps {
  service: ServiceDetail;
}

export function ServicePageView({ service }: ServicePageViewProps) {
  const otherServices = getOtherServices(service.slug);

  // FAQ Accordion State (first open by default)
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  // Enquiry form state
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    service: service.title,
    country: '',
    requirements: '',
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.fullName.trim()) errors.fullName = 'Full Name is required.';
    if (!formData.companyName.trim()) errors.companyName = 'Company Name is required.';
    if (!formData.email.trim()) {
      errors.email = 'Email Address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please provide a valid email address.';
    }
    if (!formData.phone.trim()) errors.phone = 'Phone / WhatsApp Number is required.';
    if (!formData.country.trim()) errors.country = 'Destination or Origin Country is required.';
    if (!formData.requirements.trim()) {
      errors.requirements = 'Please specify your requirements or cargo details.';
    }
    return errors;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    setFormErrors({});
    setSubmitted(true);
  };

  const scrollToEnquiry = () => {
    const el = document.getElementById('enquiry-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // WhatsApp quick text for this service
  const whatsappEnquiryUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
    `Hello KRISHI SARTHAK VENTURES LLP, I would like to enquire about your ${service.title}. My company is based in ${formData.country || '[Country]'}.`
  )}`;

  const MainIcon = service.icon;

  return (
    <>
      <Head>
        <title>{service.metaTitle}</title>
        <meta name="description" content={service.metaDescription} />
        <meta
          name="keywords"
          content={`${service.title}, KRISHI SARTHAK VENTURES LLP, International Trade, Import Export Services India, Logistics Coordination, Export Documentation`}
        />
        <meta property="og:title" content={service.metaTitle} />
        <meta property="og:description" content={service.metaDescription} />
        <meta property="og:type" content="website" />
      </Head>

      <div className="grain min-h-[100dvh] flex flex-col bg-[#fbf9f2]">
        <Navbar />

        <main className="flex-1">
          {/* ── 1. PAGE HERO / BANNER ── */}
          <section className="relative overflow-hidden bg-gradient-to-b from-[#183c2c] via-[#1d4432] to-[#163829] text-[#f7f4eb] py-12 md:py-16 border-b border-[#2d523f]">
            {/* Subtle background ornamentation */}
            <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[radial-gradient(#D9A441_1px,transparent_1px)] [background-size:24px_24px]" />
            <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[#D9A441]/10 blur-3xl pointer-events-none" />

            <div className="wrap relative">
              {/* ── 2. BREADCRUMB NAVIGATION ── */}
              <nav aria-label="Breadcrumb" className="mb-6">
                <ol className="flex flex-wrap items-center gap-1.5 text-xs text-[#d8d3c5]">
                  <li>
                    <Link
                      href="/"
                      className="inline-flex items-center gap-1 hover:text-[#D9A441] transition-colors"
                    >
                      <Home size={13} className="text-[#D9A441]" />
                      <span>Home</span>
                    </Link>
                  </li>
                  <li aria-hidden="true" className="text-white/40">
                    <ChevronRight size={13} />
                  </li>
                  <li>
                    <Link
                      href="/services"
                      className="hover:text-[#D9A441] transition-colors"
                    >
                      Our Services
                    </Link>
                  </li>
                  <li aria-hidden="true" className="text-white/40">
                    <ChevronRight size={13} />
                  </li>
                  <li
                    aria-current="page"
                    className="font-semibold text-[#f3dfb4] tracking-wide"
                  >
                    {service.title}
                  </li>
                </ol>
              </nav>

              <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#D9A441]/40 bg-[#D9A441]/15 px-3.5 py-1 text-[11px] font-bold uppercase tracking-widest text-[#e8c679] backdrop-blur-xs">
                    <Sparkles size={12} className="text-[#D9A441]" />
                    <span>{service.badge} · Professional Trade Service</span>
                  </div>

                  <h1 className="mt-4 font-display text-3xl font-medium tracking-tight text-white sm:text-4xl md:text-5xl lg:leading-tight">
                    {service.heading}
                  </h1>

                  <p className="mt-2 text-base sm:text-lg font-medium text-[#e8c679]">
                    {service.subtitle}
                  </p>

                  <p className="mt-4 max-w-2xl text-xs sm:text-sm leading-relaxed text-[#c3ceb8]">
                    {service.cardDescription}
                  </p>

                  {/* Action buttons */}
                  <div className="mt-8 flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={scrollToEnquiry}
                      className="inline-flex items-center gap-2 rounded-lg bg-[#D9A441] px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#0a1826] transition-all hover:bg-[#e6b450] hover:shadow-lg cursor-pointer"
                    >
                      <Send size={14} />
                      {service.enquiry.primaryBtn}
                    </button>
                    <Link
                      href={`/contact?service=${encodeURIComponent(service.title)}`}
                      className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-white/10 hover:border-[#D9A441]"
                    >
                      <Mail size={14} />
                      Contact Us
                    </Link>
                  </div>
                </div>

                {/* Right: Feature illustration card */}
                <div className="relative">
                  <div className="rounded-2xl border border-white/15 bg-white/[.06] p-6 backdrop-blur-md shadow-2xl">
                    <div className="flex items-center justify-between border-b border-white/10 pb-4">
                      <div className="flex items-center gap-3">
                        <div className="grid h-12 w-12 place-items-center rounded-xl border border-[#D9A441]/40 bg-[#D9A441]/20 text-[#D9A441]">
                          <MainIcon size={24} />
                        </div>
                        <div>
                          <div className="text-xs font-bold uppercase tracking-wider text-[#D9A441]">
                            KRISHI SARTHAK VENTURES LLP
                          </div>
                          <div className="font-display text-base font-semibold text-white">
                            {service.title}
                          </div>
                        </div>
                      </div>
                      <span className="rounded-md border border-[#D9A441]/30 bg-[#D9A441]/10 px-2.5 py-1 text-[10px] font-semibold text-[#f3dfb4]">
                        Verified Scope
                      </span>
                    </div>

                    <div className="mt-5 space-y-3">
                      {service.keyPoints.slice(0, 4).map((pt) => (
                        <div
                          key={pt}
                          className="flex items-start gap-2.5 rounded-lg border border-white/[.08] bg-white/[.04] p-3 text-xs text-[#e4ece6]"
                        >
                          <CheckCircle2
                            size={16}
                            className="text-[#D9A441] shrink-0 mt-0.5"
                          />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-[#a4b8ab]">
                      <span className="flex items-center gap-1.5">
                        <ShieldCheck size={14} className="text-[#D9A441]" />
                        Professional Coordination
                      </span>
                      <span className="text-[#e8c679] font-medium">Export Grade</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── 3. SERVICE OVERVIEW ── */}
          <section className="py-14 md:py-18 bg-[#fbf9f2]">
            <div className="wrap">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8">
                  <p className="text-[11px] font-bold uppercase tracking-[.18em] text-[#8a682f]">
                    Service Overview
                  </p>
                  <h2 className="mt-2 font-display text-2xl font-medium text-[#1d392d] sm:text-3xl md:text-4xl">
                    About {service.title}
                  </h2>
                  <div className="mx-auto mt-2.5 h-1 w-14 bg-[#D9A441] rounded-full" />
                </div>

                <div className="rounded-2xl border border-[#e4dfd3] bg-white p-7 md:p-10 shadow-xs space-y-4 text-sm sm:text-base leading-relaxed text-[#526457]">
                  {service.overview.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}

                  {service.scopeNote && (
                    <div className="mt-6 flex items-start gap-3 rounded-xl border border-[#d8cfb9] bg-[#fbf7ee] p-4 text-xs text-[#715c30]">
                      <Info size={18} className="text-[#D9A441] shrink-0 mt-0.5" />
                      <p className="leading-relaxed">{service.scopeNote}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* ── 4 & 5. DETAILED SERVICE DESCRIPTION & KEY SERVICES / FEATURES ── */}
          <section className="py-14 md:py-18 bg-[#f7f4eb] border-y border-[#ddd8ca]">
            <div className="wrap">
              <div className="text-center mb-12">
                <p className="text-[11px] font-bold uppercase tracking-[.18em] text-[#8a682f]">
                  Core Capabilities
                </p>
                <h2 className="mt-2 font-display text-2xl font-medium text-[#1d392d] sm:text-3xl md:text-4xl">
                  {service.keyServiceAreasTitle}
                </h2>
                <div className="mx-auto mt-2.5 h-1 w-14 bg-[#D9A441] rounded-full" />
                <p className="mt-3 max-w-xl mx-auto text-xs sm:text-sm text-[#66756a]">
                  Explore the specific coordination areas and technical advisory workflows included under this service.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {service.keyServiceAreas.map((area, index) => (
                  <div
                    key={area.title}
                    className="flex flex-col justify-between rounded-xl border border-[#ddd8ca] bg-white p-6 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-200"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="grid h-10 w-10 place-items-center rounded-lg border border-[#D9A441]/40 bg-[#fbf7ee] text-[#8b682d] font-bold text-xs">
                          0{index + 1}
                        </span>
                        {area.badge && (
                          <span className="rounded-full bg-[#f3efe4] border border-[#e4dfd3] px-2.5 py-0.5 text-[10px] font-semibold text-[#6d5b3d]">
                            {area.badge}
                          </span>
                        )}
                      </div>

                      <h3 className="font-display text-lg font-medium text-[#1d392d] mb-2">
                        {area.title}
                      </h3>
                      <p className="text-xs sm:text-[13px] leading-relaxed text-[#5c6e61]">
                        {area.description}
                      </p>
                    </div>

                    <div className="mt-5 pt-4 border-t border-[#f0ebe0] flex items-center justify-between text-[11px] font-semibold text-[#8b682d]">
                      <span>Scope Element</span>
                      <CheckCircle2 size={14} className="text-[#D9A441]" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── 6. BENEFITS & IMPORTANT CONSIDERATIONS ── */}
          <section className="py-14 md:py-18 bg-[#fbf9f2]">
            <div className="wrap">
              <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                {/* Left: Key Points List */}
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[.18em] text-[#8a682f]">
                    Strategic Advantage
                  </p>
                  <h2 className="mt-2 font-display text-2xl font-medium text-[#1d392d] sm:text-3xl md:text-4xl leading-snug">
                    {service.keyPointsTitle}
                  </h2>
                  <div className="mt-2 h-1 w-14 bg-[#D9A441] rounded-full" />
                  {service.keyPointsSubtitle && (
                    <p className="mt-3 text-xs sm:text-sm text-[#66756a]">
                      {service.keyPointsSubtitle}
                    </p>
                  )}

                  <div className="mt-6 space-y-3">
                    {service.keyPoints.map((point) => (
                      <div
                        key={point}
                        className="flex items-start gap-3 rounded-xl border border-[#e4dfd3] bg-white p-3.5 shadow-2xs hover:border-[#D9A441] transition-colors"
                      >
                        <div className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#214c39] text-[#D9A441] mt-0.5">
                          <Check size={13} />
                        </div>
                        <span className="text-xs sm:text-sm font-medium text-[#1d392d]">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>

                  {service.safeguardNote && (
                    <div className="mt-6 rounded-xl border border-[#e8d5a3] bg-[#fdfaf2] p-4 text-xs text-[#715c30]">
                      <div className="flex items-center gap-2 font-bold mb-1 text-[#8b682d]">
                        <Info size={14} />
                        <span>Important Consideration & Regulatory Notice</span>
                      </div>
                      <p className="leading-relaxed">{service.safeguardNote}</p>
                    </div>
                  )}
                </div>

                {/* Right: Supporting Illustration Card */}
                <div className="relative">
                  <div className="rounded-2xl border border-[#ddd8ca] bg-gradient-to-br from-[#f7f3e8] to-[#eee8d7] p-8 shadow-sm">
                    <div className="mb-6 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#8b682d]">
                        <Globe2 size={16} />
                        <span>International Trade Framework</span>
                      </div>
                      <span className="rounded-md border border-[#c9beaa] bg-white/70 px-2 py-0.5 text-[10px] font-semibold text-[#526457]">
                        Quality Assured
                      </span>
                    </div>

                    <div className="space-y-4">
                      <div className="rounded-xl border border-[#d8cfb9] bg-white p-5 shadow-xs">
                        <div className="flex items-center gap-3">
                          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[#214c39] text-[#D9A441]">
                            <ShieldCheck size={20} />
                          </div>
                          <div>
                            <h4 className="font-bold text-sm text-[#1d392d]">
                              Compliance-Centric Approach
                            </h4>
                            <p className="text-xs text-[#66756a] mt-0.5">
                              Every advisory and logistics stage is aligned with statutory norms, DGFT guidelines, and destination import requirements.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-xl border border-[#d8cfb9] bg-white p-5 shadow-xs">
                        <div className="flex items-center gap-3">
                          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[#8b682d] text-white">
                            <Layers size={20} />
                          </div>
                          <div>
                            <h4 className="font-bold text-sm text-[#1d392d]">
                              Structured Milestone Coordination
                            </h4>
                            <p className="text-xs text-[#66756a] mt-0.5">
                              From initial requirement definition to documentation review and freight management, each phase has transparent coordination.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-xl border border-[#d8cfb9] bg-white p-5 shadow-xs">
                        <div className="flex items-center gap-3">
                          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[#183c2c] text-[#D9A441]">
                            <Mail size={20} />
                          </div>
                          <div>
                            <h4 className="font-bold text-sm text-[#1d392d]">
                              Dedicated Point of Contact
                            </h4>
                            <p className="text-xs text-[#66756a] mt-0.5">
                              Responsive trade specialists assist with product classification, shipping lines, and procedural clarification.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── 7. HOW THE SERVICE WORKS (4-STEP WORKFLOW) ── */}
          <section className="py-14 md:py-20 bg-[#173a2a] text-[#f7f4eb]">
            <div className="wrap">
              <div className="text-center mb-12">
                <p className="text-[11px] font-bold uppercase tracking-[.18em] text-[#D9A441]">
                  Coordination Workflow
                </p>
                <h2 className="mt-2 font-display text-2xl font-medium text-white sm:text-3xl md:text-4xl">
                  {service.processTitle}
                </h2>
                <div className="mx-auto mt-2.5 h-1 w-14 bg-[#D9A441] rounded-full" />
                <p className="mt-3 max-w-xl mx-auto text-xs sm:text-sm text-[#c0cfc5]">
                  {service.processSubtitle}
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {service.processSteps.map((step) => (
                  <div
                    key={step.step}
                    className="relative flex flex-col justify-between rounded-xl border border-white/10 bg-white/[.04] p-6 backdrop-blur-xs hover:border-[#D9A441]/50 hover:bg-white/[.07] transition-all duration-200"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-display text-3xl font-extrabold text-[#D9A441]">
                          {step.step}
                        </span>
                        <span className="text-[10px] uppercase font-bold tracking-wider text-[#a0b8a7]">
                          Phase {step.step}
                        </span>
                      </div>
                      <h3 className="font-display text-lg font-medium text-white mb-2 leading-snug">
                        {step.title}
                      </h3>
                      <p className="text-xs leading-relaxed text-[#c0cfc5]">
                        {step.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-1.5 text-[11px] text-[#e8c679]">
                      <ArrowRight size={13} />
                      <span>Standard Procedure</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── 9. FREQUENTLY ASKED QUESTIONS ── */}
          <section className="py-14 md:py-18 bg-[#fbf9f2]">
            <div className="wrap max-w-4xl">
              <div className="text-center mb-10">
                <p className="text-[11px] font-bold uppercase tracking-[.18em] text-[#8a682f]">
                  Got Questions?
                </p>
                <h2 className="mt-2 font-display text-2xl font-medium text-[#1d392d] sm:text-3xl md:text-4xl">
                  Frequently Asked Questions
                </h2>
                <div className="mx-auto mt-2.5 h-1 w-14 bg-[#D9A441] rounded-full" />
                <p className="mt-3 text-xs sm:text-sm text-[#66756a]">
                  Answers to key questions regarding scope, documentation, and coordination requirements.
                </p>
              </div>

              <div className="space-y-3">
                {service.faqs.map((faq, index) => {
                  const isOpen = openFaqIndex === index;
                  return (
                    <div
                      key={faq.question}
                      className="rounded-xl border border-[#e4dfd3] bg-white overflow-hidden transition-all duration-200"
                    >
                      <button
                        type="button"
                        onClick={() => toggleFaq(index)}
                        className="w-full flex items-center justify-between p-5 text-left font-display text-base font-semibold text-[#1d392d] hover:bg-[#fbf7ee] transition-colors cursor-pointer"
                        aria-expanded={isOpen}
                        aria-controls={`faq-answer-${index}`}
                      >
                        <span className="flex items-center gap-3">
                          <HelpCircle size={18} className="text-[#8a682f] shrink-0" />
                          <span>{faq.question}</span>
                        </span>
                        <ChevronDown
                          size={18}
                          className={`text-[#8a682f] transition-transform duration-200 shrink-0 ${
                            isOpen ? 'rotate-180 text-[#214c39]' : ''
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <div
                          id={`faq-answer-${index}`}
                          className="px-5 pb-5 pt-1 text-xs sm:text-sm leading-relaxed text-[#526457] border-t border-[#f0ebe0] bg-[#faf8f2]"
                        >
                          <p>{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* ── 10. ENQUIRY CALL TO ACTION & FORM ── */}
          <section id="enquiry-section" className="py-14 md:py-20 bg-[#f3efe4] border-t border-[#ddd8ca]">
            <div className="wrap">
              <div className="grid gap-12 lg:grid-cols-[1.1fr_1.3fr] lg:items-start">
                {/* Left: Call to action copy & contact info */}
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[.18em] text-[#8a682f]">
                    Get Started
                  </p>
                  <h2 className="mt-2 font-display text-2xl font-medium text-[#1d392d] sm:text-3xl md:text-4xl leading-tight">
                    {service.enquiry.heading}
                  </h2>
                  <div className="mt-2 h-1 w-14 bg-[#D9A441] rounded-full" />

                  <p className="mt-4 text-xs sm:text-sm leading-relaxed text-[#526457]">
                    {service.enquiry.description}
                  </p>

                  <div className="mt-8 space-y-4">
                    <div className="flex items-start gap-3.5 rounded-xl border border-[#e4dfd3] bg-white p-4 shadow-2xs">
                      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[#214c39] text-[#D9A441]">
                        <Building2 size={20} />
                      </div>
                      <div>
                        <div className="text-[11px] font-bold uppercase tracking-wider text-[#8a682f]">
                          Company Entity
                        </div>
                        <div className="text-sm font-bold text-[#1d392d]">
                          {COMPANY_INFO.name}
                        </div>
                        <p className="text-xs text-[#66756a] mt-0.5">
                          Registered Limited Liability Partnership
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5 rounded-xl border border-[#e4dfd3] bg-white p-4 shadow-2xs">
                      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[#214c39] text-[#D9A441]">
                        <MessageCircle size={20} />
                      </div>
                      <div>
                        <div className="text-[11px] font-bold uppercase tracking-wider text-[#8a682f]">
                          Direct WhatsApp Consultation
                        </div>
                        <a
                          href={whatsappEnquiryUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#214c39] hover:text-[#8a682f] mt-0.5"
                        >
                          Chat on WhatsApp <ArrowUpRight size={13} />
                        </a>
                        <p className="text-[11px] text-[#66756a]">
                          Instant response for urgent cargo & documentation queries
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5 rounded-xl border border-[#e4dfd3] bg-white p-4 shadow-2xs">
                      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[#214c39] text-[#D9A441]">
                        <Mail size={20} />
                      </div>
                      <div>
                        <div className="text-[11px] font-bold uppercase tracking-wider text-[#8a682f]">
                          Dedicated Contact Page
                        </div>
                        <Link
                          href={`/contact?service=${encodeURIComponent(service.title)}`}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#214c39] hover:text-[#8a682f] mt-0.5"
                        >
                          Open Main Contact Form <ArrowRight size={13} />
                        </Link>
                        <p className="text-[11px] text-[#66756a]">
                          Comprehensive inquiry with country & service preselected
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Interactive Enquiry Form */}
                <div className="rounded-2xl border border-[#ddd8ca] bg-white p-6 sm:p-8 shadow-sm">
                  <div className="border-b border-[#eee8d7] pb-4 mb-6">
                    <h3 className="font-display text-xl font-medium text-[#1d392d]">
                      Service Enquiry Form
                    </h3>
                    <p className="text-xs text-[#66756a] mt-1">
                      Preselected for <strong>{service.title}</strong>. Please provide your details below.
                    </p>
                  </div>

                  {submitted ? (
                    <div className="rounded-xl border border-[#b8dabf] bg-[#eaf5ec] p-6 text-center space-y-3">
                      <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-[#214c39] text-[#D9A441]">
                        <CheckCircle2 size={24} />
                      </div>
                      <h4 className="font-display text-lg font-bold text-[#1d392d]">
                        Enquiry Prepared Successfully
                      </h4>
                      <p className="text-xs sm:text-sm text-[#465a4c] max-w-md mx-auto">
                        Thank you, <strong>{formData.fullName}</strong>. Your enquiry for{' '}
                        <strong>{formData.service}</strong> has been logged in this preview form.
                      </p>
                      <p className="text-[11px] text-[#6a8270] italic">
                        Note: Live back-end server integration is pending deployment. You can send this enquiry immediately via official WhatsApp or email below.
                      </p>
                      <div className="pt-2 flex flex-wrap justify-center gap-2">
                        <a
                          href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
                            `Enquiry from ${formData.fullName} (${formData.companyName}, ${formData.country}) for ${formData.service}:\n${formData.requirements}`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-gold !py-2.5 !px-4 !text-xs"
                        >
                          Send via WhatsApp <MessageCircle size={14} />
                        </a>
                        <button
                          type="button"
                          onClick={() => setSubmitted(false)}
                          className="btn-outline !py-2 !px-3 !text-xs cursor-pointer"
                        >
                          Reset Form
                        </button>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleFormSubmit} noValidate className="space-y-4">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label
                            htmlFor="fullName"
                            className="block text-[11px] font-bold text-[#455449] uppercase tracking-wider mb-1"
                          >
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            placeholder="e.g. John Doe"
                            className={`w-full rounded-lg border px-3.5 py-2.5 text-xs text-[#1d392d] outline-none transition-colors ${
                              formErrors.fullName
                                ? 'border-red-500 bg-red-50/30'
                                : 'border-[#d9d4c7] bg-[#fbf9f2] focus:border-[#214c39]'
                            }`}
                          />
                          {formErrors.fullName && (
                            <p className="mt-1 text-[10px] text-red-600 font-medium">
                              {formErrors.fullName}
                            </p>
                          )}
                        </div>

                        <div>
                          <label
                            htmlFor="companyName"
                            className="block text-[11px] font-bold text-[#455449] uppercase tracking-wider mb-1"
                          >
                            Company Name *
                          </label>
                          <input
                            type="text"
                            id="companyName"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleInputChange}
                            placeholder="e.g. Global Trade Ltd."
                            className={`w-full rounded-lg border px-3.5 py-2.5 text-xs text-[#1d392d] outline-none transition-colors ${
                              formErrors.companyName
                                ? 'border-red-500 bg-red-50/30'
                                : 'border-[#d9d4c7] bg-[#fbf9f2] focus:border-[#214c39]'
                            }`}
                          />
                          {formErrors.companyName && (
                            <p className="mt-1 text-[10px] text-red-600 font-medium">
                              {formErrors.companyName}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-[11px] font-bold text-[#455449] uppercase tracking-wider mb-1"
                          >
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="trade@company.com"
                            className={`w-full rounded-lg border px-3.5 py-2.5 text-xs text-[#1d392d] outline-none transition-colors ${
                              formErrors.email
                                ? 'border-red-500 bg-red-50/30'
                                : 'border-[#d9d4c7] bg-[#fbf9f2] focus:border-[#214c39]'
                            }`}
                          />
                          {formErrors.email && (
                            <p className="mt-1 text-[10px] text-red-600 font-medium">
                              {formErrors.email}
                            </p>
                          )}
                        </div>

                        <div>
                          <label
                            htmlFor="phone"
                            className="block text-[11px] font-bold text-[#455449] uppercase tracking-wider mb-1"
                          >
                            Phone / WhatsApp *
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="+91 / International code"
                            className={`w-full rounded-lg border px-3.5 py-2.5 text-xs text-[#1d392d] outline-none transition-colors ${
                              formErrors.phone
                                ? 'border-red-500 bg-red-50/30'
                                : 'border-[#d9d4c7] bg-[#fbf9f2] focus:border-[#214c39]'
                            }`}
                          />
                          {formErrors.phone && (
                            <p className="mt-1 text-[10px] text-red-600 font-medium">
                              {formErrors.phone}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label
                            htmlFor="service"
                            className="block text-[11px] font-bold text-[#455449] uppercase tracking-wider mb-1"
                          >
                            Service of Interest
                          </label>
                          <select
                            id="service"
                            name="service"
                            value={formData.service}
                            onChange={handleInputChange}
                            className="w-full rounded-lg border border-[#d9d4c7] bg-[#fbf9f2] px-3.5 py-2.5 text-xs text-[#1d392d] outline-none focus:border-[#214c39]"
                          >
                            {SERVICES_LIST.map((s) => (
                              <option key={s.id} value={s.title}>
                                {s.title}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label
                            htmlFor="country"
                            className="block text-[11px] font-bold text-[#455449] uppercase tracking-wider mb-1"
                          >
                            Country (Origin / Destination) *
                          </label>
                          <input
                            type="text"
                            id="country"
                            name="country"
                            value={formData.country}
                            onChange={handleInputChange}
                            placeholder="e.g. UAE, Germany, India"
                            className={`w-full rounded-lg border px-3.5 py-2.5 text-xs text-[#1d392d] outline-none transition-colors ${
                              formErrors.country
                                ? 'border-red-500 bg-red-50/30'
                                : 'border-[#d9d4c7] bg-[#fbf9f2] focus:border-[#214c39]'
                            }`}
                          />
                          {formErrors.country && (
                            <p className="mt-1 text-[10px] text-red-600 font-medium">
                              {formErrors.country}
                            </p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="requirements"
                          className="block text-[11px] font-bold text-[#455449] uppercase tracking-wider mb-1"
                        >
                          Requirements / Cargo Details *
                        </label>
                        <textarea
                          id="requirements"
                          name="requirements"
                          rows={4}
                          value={formData.requirements}
                          onChange={handleInputChange}
                          placeholder={`Specify product, shipment size, destination, or advisory scope for ${service.title}...`}
                          className={`w-full rounded-lg border px-3.5 py-2.5 text-xs text-[#1d392d] outline-none transition-colors ${
                            formErrors.requirements
                              ? 'border-red-500 bg-red-50/30'
                              : 'border-[#d9d4c7] bg-[#fbf9f2] focus:border-[#214c39]'
                          }`}
                        />
                        {formErrors.requirements && (
                          <p className="mt-1 text-[10px] text-red-600 font-medium">
                            {formErrors.requirements}
                          </p>
                        )}
                      </div>

                      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                        <p className="text-[10px] text-[#889084] leading-relaxed max-w-xs">
                          Validated enquiry form. Commercial terms are customized to your transaction requirements.
                        </p>
                        <button
                          type="submit"
                          className="btn-primary w-full sm:w-auto cursor-pointer"
                        >
                          <span>Submit Enquiry</span>
                          <ArrowRight size={14} />
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* ── 11. LINKS TO THE OTHER THREE SERVICES ── */}
          <section className="py-14 md:py-18 bg-[#fbf9f2] border-t border-[#ddd8ca]">
            <div className="wrap">
              <div className="text-center mb-10">
                <p className="text-[11px] font-bold uppercase tracking-[.18em] text-[#8a682f]">
                  Related Solutions
                </p>
                <h2 className="mt-2 font-display text-2xl font-medium text-[#1d392d] sm:text-3xl">
                  Explore Other Trade Services
                </h2>
                <div className="mx-auto mt-2 h-1 w-12 bg-[#D9A441] rounded-full" />
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                {otherServices.map((other) => {
                  const OtherIcon = other.icon;
                  return (
                    <article
                      key={other.id}
                      className="group flex flex-col justify-between rounded-xl border border-[#ddd8ca] bg-white p-6 shadow-xs hover:border-[#D9A441] hover:shadow-md hover:-translate-y-1 transition-all duration-200"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="grid h-10 w-10 place-items-center rounded-lg border border-[#D9A441]/40 bg-[#fbf7ee] text-[#8b682d] group-hover:bg-[#214c39] group-hover:text-[#D9A441] transition-colors">
                            <OtherIcon size={20} />
                          </span>
                          <span className="rounded-full bg-[#f3efe4] border border-[#e4dfd3] px-2 py-0.5 text-[9px] font-semibold text-[#6d5b3d]">
                            {other.badge}
                          </span>
                        </div>

                        <h3 className="font-display text-lg font-medium text-[#1d392d] group-hover:text-[#214c39] transition-colors">
                          {other.title}
                        </h3>
                        <p className="mt-2 text-xs leading-relaxed text-[#5c6e61]">
                          {other.cardDescription}
                        </p>
                      </div>

                      <div className="mt-6 pt-4 border-t border-[#f0ebe0]">
                        <Link
                          href={other.route}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#214c39] group-hover:text-[#8a682f] transition-colors"
                        >
                          <span>Read More</span>
                          <ArrowRight
                            size={13}
                            className="text-[#D9A441] transition-transform group-hover:translate-x-1"
                          />
                        </Link>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>
        </main>

        {/* ── 12. EXISTING WEBSITE FOOTER ── */}
        <Footer />
      </div>
    </>
  );
}
