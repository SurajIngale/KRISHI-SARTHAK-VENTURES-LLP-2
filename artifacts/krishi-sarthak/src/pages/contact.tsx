import React, { useEffect, useState, FormEvent } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ArrowRight, Check, ChevronRight, Home, MapPin, Send } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { COMPANY_INFO } from '@/data/tradeData';

const productsNav = [
  'Fresh Fruits & Vegetables',
  'Frozen Vegetables',
  'Dehydrated Powders',
  'Spices & Herbs',
  'Pulses & Grains',
  'Dry Fruits & Nuts',
  'Construction & Road Materials',
];

const servicesNav = [
  'Shipment Services',
  'Global Trade Consultancy',
  'Freight Forwarding & Logistics',
  'Documentation Services',
];

export default function ContactPage() {
  const router = useRouter();
  const [success, setSuccess] = useState(false);
  const [formError, setFormError] = useState('');
  const queryProduct = (router?.query?.product as string) || '';
  const [productParam, setProductParam] = useState(queryProduct);

  useEffect(() => {
    if (router?.isReady && router.query.product) {
      setProductParam(router.query.product as string);
    }
  }, [router?.isReady, router?.query?.product]);

  const activeProduct = productParam || queryProduct;

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) {
      setFormError('Please complete the required fields with a valid email address.');
      return;
    }
    setFormError('');
    setSuccess(true);
    form.reset();
  };

  return (
    <>
      <Head>
        <title>Contact Us | KRISHI SARTHAK VENTURES LLP</title>
        <meta
          name="description"
          content="Get in touch with KRISHI SARTHAK VENTURES LLP for agricultural export enquiries, reefer container bookings, and global trade solutions."
        />
      </Head>

      <div className="grain min-h-[100dvh] flex flex-col bg-[#fbf9f2]">
        <Navbar />

        <main className="flex-1">
          {/* Breadcrumb banner */}
          <section className="bg-[#183c2c] text-[#f7f4eb] py-8 border-b border-[#2d523f]">
            <div className="wrap">
              <nav aria-label="Breadcrumb" className="mb-4">
                <ol className="flex items-center gap-1.5 text-xs text-[#d8d3c5]">
                  <li>
                    <Link href="/#home" className="inline-flex items-center gap-1 hover:text-[#D9A441]">
                      <Home size={13} className="text-[#D9A441]" />
                      <span>Home</span>
                    </Link>
                  </li>
                  <li aria-hidden="true" className="text-white/40">
                    <ChevronRight size={13} />
                  </li>
                  <li aria-current="page" className="font-semibold text-[#f3dfb4]">
                    Contact Us
                  </li>
                </ol>
              </nav>
              <h1 className="font-display text-3xl sm:text-4xl font-medium text-[#fbf9f2]">
                Contact KRISHI SARTHAK VENTURES LLP
              </h1>
              <p className="mt-2 text-xs sm:text-sm text-[#d7ddd8] max-w-xl">
                Have questions about agricultural products, international sourcing, shipments, or global trade solutions? Get in touch with our trade team.
              </p>
            </div>
          </section>

          {/* Contact form section */}
          <section id="contact" className="section-pad bg-[#f7f4eb]">
            <div className="wrap">
              <div className="grid gap-12 lg:grid-cols-[.83fr_1.17fr]">
                <div>
                  <span className="eyebrow">Let&apos;s talk business</span>
                  <h2 className="section-title mt-3">Discuss your global trade requirements</h2>
                  <p className="body-copy mt-4 text-xs sm:text-sm">
                    Our team provides timely responses on commodity pricing, packaging specifications, phytosanitary requirements, and container logistics.
                  </p>

                  <div className="mt-9 space-y-5">
                    <div className="flex gap-4">
                      <span className="grid h-10 w-10 shrink-0 place-items-center border border-[#d8cfb9] text-[#8b6c34]">
                        <Send size={16} />
                      </span>
                      <div>
                        <p className="text-[9px] font-bold uppercase tracking-[.16em] text-[#8c7958]">Phone</p>
                        <a href={COMPANY_INFO.phoneTel} className="mt-1 block text-sm font-semibold">
                          {COMPANY_INFO.phonePlaceholder}
                        </a>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <span className="grid h-10 w-10 shrink-0 place-items-center border border-[#d8cfb9] text-[#8b6c34]">
                        <Send size={16} />
                      </span>
                      <div>
                        <p className="text-[9px] font-bold uppercase tracking-[.16em] text-[#8c7958]">Email</p>
                        <a href={COMPANY_INFO.emailMailto} className="mt-1 block text-sm font-semibold">
                          {COMPANY_INFO.emailPlaceholder}
                        </a>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <span className="grid h-10 w-10 shrink-0 place-items-center border border-[#d8cfb9] text-[#8b6c34]">
                        <MapPin size={16} />
                      </span>
                      <div>
                        <p className="text-[9px] font-bold uppercase tracking-[.16em] text-[#8c7958]">Registered office</p>
                        <p className="mt-1 text-sm font-semibold">{COMPANY_INFO.addressPlaceholder}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 flex h-[165px] items-center justify-center border border-dashed border-[#bcb7a8] bg-[#eeeadf] p-5 text-center">
                    <div>
                      <MapPin size={21} className="mx-auto text-[#8b6c34]" />
                      <p className="mt-3 text-[11px] font-semibold">Office location map placeholder</p>
                      <p className="mt-1 text-[10px] text-[#7a8376]">Replace with the confirmed registered office location.</p>
                    </div>
                  </div>
                </div>

                <div className="border border-[#ddd8ca] bg-[#fbf9f2] p-6 md:p-9 rounded-lg shadow-xs">
                  <div className="mb-7">
                    <p className="font-display text-2xl">Tell us what you need.</p>
                    <p className="mt-2 text-xs text-[#7a8579]">Fields marked * are required.</p>
                  </div>
                  {success && (
                    <div role="status" className="mb-5 flex gap-3 border border-[#a8b69a] bg-[#edf2e8] p-4 text-xs leading-5 text-[#38543d]">
                      <Check size={17} className="mt-0.5 shrink-0" />
                      <p>
                        <strong>Preview only.</strong> Your details were not sent. This form is a frontend preview and is not connected to an email service or backend.
                      </p>
                    </div>
                  )}
                  {formError && <p role="alert" className="mb-4 text-xs text-[#9d483c]">{formError}</p>}
                  <form onSubmit={submit} className="grid gap-4 sm:grid-cols-2">
                    <label className="block text-[10px] font-bold text-[#56675a]">
                      Full name *
                      <input required name="name" autoComplete="name" className="mt-2 w-full border border-[#d9d4c7] bg-transparent px-3 py-3 text-xs font-normal outline-none focus:border-[#718b5c]" placeholder="Your full name" />
                    </label>
                    <label className="block text-[10px] font-bold text-[#56675a]">
                      Company name
                      <input name="company" autoComplete="organization" className="mt-2 w-full border border-[#d9d4c7] bg-transparent px-3 py-3 text-xs font-normal outline-none focus:border-[#718b5c]" placeholder="Company or organization" />
                    </label>
                    <label className="block text-[10px] font-bold text-[#56675a]">
                      Email address *
                      <input required type="email" name="email" autoComplete="email" className="mt-2 w-full border border-[#d9d4c7] bg-transparent px-3 py-3 text-xs font-normal outline-none focus:border-[#718b5c]" placeholder="name@company.com" />
                    </label>
                    <label className="block text-[10px] font-bold text-[#56675a]">
                      Phone number
                      <input type="tel" name="phone" autoComplete="tel" className="mt-2 w-full border border-[#d9d4c7] bg-transparent px-3 py-3 text-xs font-normal outline-none focus:border-[#718b5c]" placeholder="+ country code" />
                    </label>
                    <label className="block text-[10px] font-bold text-[#56675a]">
                      Country
                      <input name="country" autoComplete="country-name" className="mt-2 w-full border border-[#d9d4c7] bg-transparent px-3 py-3 text-xs font-normal outline-none focus:border-[#718b5c]" placeholder="Country" />
                    </label>
                    <label className="block text-[10px] font-bold text-[#56675a]">
                      Interested in
                      <select
                        name="interest"
                        defaultValue={
                          activeProduct
                            ? activeProduct.toLowerCase().includes('frozen') ||
                              ['peas', 'beans', 'corn', 'broccoli', 'mushroom'].some((v) =>
                                activeProduct.toLowerCase().includes(v)
                              )
                              ? 'Frozen Vegetables'
                              : 'Fresh Fruits & Vegetables'
                            : ''
                        }
                        key={activeProduct}
                        className="mt-2 w-full border border-[#d9d4c7] bg-[#fbf9f2] px-3 py-3 text-xs font-normal outline-none focus:border-[#718b5c]"
                      >
                        <option value="" disabled>Select a product or service</option>
                        {[...productsNav, ...servicesNav].map((item) => (
                          <option key={item}>{item}</option>
                        ))}
                      </select>
                    </label>
                    <label className="block text-[10px] font-bold text-[#56675a] sm:col-span-2">
                      Your message *
                      <textarea
                        required
                        name="message"
                        rows={4}
                        defaultValue={
                          activeProduct
                            ? `Hello, I am interested in sourcing ${activeProduct}. Please share product specifications, pricing, packaging, and export availability.`
                            : ''
                        }
                        key={activeProduct + '-msg'}
                        className="mt-2 w-full resize-y border border-[#d9d4c7] bg-transparent px-3 py-3 text-xs font-normal outline-none focus:border-[#718b5c]"
                        placeholder="Tell us a little about your requirements"
                      />
                    </label>
                    <div className="flex flex-col justify-between gap-4 sm:col-span-2 sm:flex-row sm:items-center">
                      <p className="max-w-xs text-[9px] leading-4 text-[#889084]">Preview form only. No message will be transmitted or stored.</p>
                      <button type="submit" className="btn-primary">
                        Send inquiry <ArrowRight size={15} />
                      </button>
                    </div>
                  </form>
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
