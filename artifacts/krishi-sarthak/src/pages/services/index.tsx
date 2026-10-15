import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Home,
  Mail,
  Send,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { SERVICES_LIST } from '@/data/servicesData';
import { COMPANY_INFO } from '@/data/tradeData';

export default function ServicesIndexPage() {
  return (
    <>
      <Head>
        <title>Our Services | KRISHI SARTHAK VENTURES LLP</title>
        <meta
          name="description"
          content="Explore comprehensive international trade services by KRISHI SARTHAK VENTURES LLP: Shipment Services, Global Trade Consultancy, Freight Forwarding & Logistics, and Documentation Services."
        />
      </Head>

      <div className="grain min-h-[100dvh] flex flex-col bg-[#fbf9f2]">
        <Navbar />

        <main className="flex-1">
          {/* Header */}
          <section className="bg-gradient-to-b from-[#183c2c] via-[#1d4432] to-[#163829] text-[#f7f4eb] py-12 md:py-16 border-b border-[#2d523f]">
            <div className="wrap">
              <nav aria-label="Breadcrumb" className="mb-6">
                <ol className="flex items-center gap-1.5 text-xs text-[#d8d3c5]">
                  <li>
                    <Link
                      href="/"
                      className="inline-flex items-center gap-1 hover:text-[#D9A441]"
                    >
                      <Home size={13} className="text-[#D9A441]" />
                      <span>Home</span>
                    </Link>
                  </li>
                  <li aria-hidden="true" className="text-white/40">
                    <ChevronRight size={13} />
                  </li>
                  <li aria-current="page" className="font-semibold text-[#f3dfb4]">
                    Our Services
                  </li>
                </ol>
              </nav>

              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#D9A441]/40 bg-[#D9A441]/15 px-3.5 py-1 text-[11px] font-bold uppercase tracking-widest text-[#e8c679]">
                  <Sparkles size={12} className="text-[#D9A441]" />
                  <span>Comprehensive Trade Support</span>
                </div>
                <h1 className="mt-4 font-display text-3xl font-medium tracking-tight text-white sm:text-4xl md:text-5xl">
                  International Trade & Logistics Services
                </h1>
                <p className="mt-4 text-xs sm:text-sm leading-relaxed text-[#c3ceb8]">
                  From group and individual shipment coordination to strategic market advisory, freight forwarding, and statutory documentation, KRISHI SARTHAK VENTURES LLP provides structured commercial execution for cross-border commerce.
                </p>
              </div>
            </div>
          </section>

          {/* Service Cards Grid */}
          <section className="py-14 md:py-20 bg-[#fbf9f2]">
            <div className="wrap">
              <div className="grid gap-8 md:grid-cols-2">
                {SERVICES_LIST.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <article
                      key={service.id}
                      className="group flex flex-col justify-between rounded-2xl border border-[#ddd8ca] bg-white p-7 sm:p-8 shadow-xs hover:border-[#D9A441] hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-5">
                          <span className="grid h-12 w-12 place-items-center rounded-xl border border-[#D9A441]/40 bg-[#fbf7ee] text-[#8b682d] group-hover:bg-[#214c39] group-hover:text-[#D9A441] transition-colors">
                            <Icon size={24} />
                          </span>
                          <span className="font-display text-2xl font-light text-[#cfc7b4] group-hover:text-[#D9A441] transition-colors">
                            0{index + 1}
                          </span>
                        </div>

                        <div className="inline-block rounded-md bg-[#f3efe4] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#6d5b3d] mb-2">
                          {service.badge}
                        </div>

                        <h2 className="font-display text-2xl font-medium text-[#1d392d] group-hover:text-[#214c39] transition-colors">
                          {service.title}
                        </h2>

                        <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#5c6e61]">
                          {service.cardDescription}
                        </p>

                        <div className="mt-5 space-y-2 border-t border-[#f0ebe0] pt-4">
                          {service.keyPoints.slice(0, 3).map((pt) => (
                            <div
                              key={pt}
                              className="flex items-center gap-2 text-xs text-[#384c3f]"
                            >
                              <CheckCircle2 size={13} className="text-[#D9A441] shrink-0" />
                              <span>{pt}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-8 pt-5 border-t border-[#ede7d8] flex items-center justify-between">
                        <Link
                          href={service.route}
                          className="inline-flex items-center gap-2 text-xs font-bold text-[#214c39] group-hover:text-[#8a682f] transition-colors"
                        >
                          <span>Read More</span>
                          <ArrowRight
                            size={14}
                            className="text-[#D9A441] transition-transform group-hover:translate-x-1"
                          />
                        </Link>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#9a865b]">
                          Verified Service
                        </span>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Quick CTA */}
          <section className="py-12 bg-[#183c2c] text-white border-t border-[#2d523f]">
            <div className="wrap flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
              <div>
                <h3 className="font-display text-xl sm:text-2xl font-medium">
                  Need a Customized Trade or Shipment Arrangement?
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-[#c3ceb8]">
                  Speak directly with our trade team to align your commodity specs and delivery timelines.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="btn-gold !py-3 !px-6 !text-xs whitespace-nowrap"
                >
                  Contact Us <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
