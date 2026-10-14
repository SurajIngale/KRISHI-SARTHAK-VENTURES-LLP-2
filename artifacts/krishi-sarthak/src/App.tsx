import { useState, type AnchorHTMLAttributes, type FormEvent, type ReactNode } from 'react';
import { ArrowDown, ArrowRight, ArrowUpRight, BadgeCheck, BarChart3, Check, ChevronDown, CircleHelp, ClipboardList, Compass, Facebook, Globe2, Instagram, Linkedin, MapPin, Menu, PackageCheck, Send, Ship, Sprout, Truck, X } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { GlowCard } from './components/ui/spotlight-card';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
export const asset = (path: string) => (path.startsWith('http') ? path : `${basePath}${path.startsWith('/') ? path : `/${path}`}`);

const heroImage = asset('/hero-harvest.png');
const heroImageVertical = asset('/hero-harvest-vertical.png');
const heroVideo = asset('/cargo_ship_video_2.mp4');
const heroVideoVertical = asset('/cargo_ship_video_vertical.mp4');
const produceImage = asset('/produce-market.png');

const rawCategories = [
  {
    name: 'Fresh Fruits & Vegetables',
    subtitle: 'Apples, Cavendish Bananas, Dragon Fruit & Onions',
    text: 'Farm-sourced fresh produce graded for optimal ripeness, uniform sizing, and export longevity. Sourced under strict phytosanitary protocols with pre-cooling and cold-chain reefer transit.',
    image: '/categories/fresh-fruits.jpeg',
    tag: '01',
    badge: 'Farm Fresh',
    highlights: ['Export Grade Sorting', 'Phytosanitary Compliant', 'Reefer Container Ready'],
    varieties: 'Royal Gala & Kashmiri Apples, Robusta & G9 Bananas, Red & White Dragon Fruit, Nashik Red & Garwa Onions, Pollachi Coconuts',
    packaging: 'Corrugated telescopic cartons (10kg / 13.5kg / 18kg), ventilated mesh bags, customized palletization',
  },
  {
    name: 'Frozen Vegetables (IQF)',
    subtitle: 'Green Peas, Sweet Corn, Mixed Veg & Cuts',
    text: 'Individually Quick Frozen (IQF) vegetables flash-frozen within hours of harvest to preserve vital nutrients, natural color, crisp texture, and year-round multi-market availability.',
    image: '/categories/frozen-vegetables.jpeg',
    tag: '02',
    badge: 'IQF Cold-Chain',
    highlights: ['-18°C Cold Chain', 'Zero Preservatives', 'Multi-Season Storage'],
    varieties: 'Tender Green Peas, Golden Sweet Corn Kernels, Diced Carrots, French Beans, Cauliflower & Broccoli Florets',
    packaging: 'Food-grade polybags (400g, 1kg, 2.5kg, 5kg) and bulk corrugated master cartons (10kg–20kg)',
  },
  {
    name: 'Dehydrated Powders',
    subtitle: 'Onion, Garlic, Ginger & Spray-Dried Powders',
    text: 'High-purity dehydrated and spray-dried fruit and vegetable powders with low moisture retention, free-flowing consistency, and rich flavor retention for international food processing.',
    image: '/categories/dehydrated-powders.jpeg',
    tag: '03',
    badge: 'Industrial Grade',
    highlights: ['100% Pure Natural', 'Customized Mesh Sizes', 'Long Shelf Life'],
    varieties: 'White & Red Onion Powder/Flakes, Garlic Powder/Granules, Ginger Powder, Tomato Powder, Fruit Powders',
    packaging: 'Double-layer polyethylene lined aluminium foil pouches, multi-wall paper bags, HDPE drums (20kg–25kg)',
  },
  {
    name: 'Spices & Herbs',
    subtitle: 'High-Curcumin Turmeric, Red Chilli, Cumin & Seeds',
    text: 'Authentic Indian whole and ground spices procured from certified regional growing belts with verified essential oil content, vibrant color value, and rigorous laboratory purity testing.',
    image: '/categories/spices-herbs.jpeg',
    tag: '04',
    badge: 'Aromatic & Pure',
    highlights: ['Spices Board Certified', 'High Curcumin & Oil', 'Low Aflatoxin Test'],
    varieties: 'Salem & Nizamabad Turmeric (3-5% curcumin), Guntur S17 & Teja Chilli, Unjha Cumin Seeds, Coriander, Green Cardamom',
    packaging: 'Multi-wall kraft paper bags, jute bags with inner poly liners, vacuum pouches (25kg–50kg bulk)',
  },
  {
    name: 'Pulses & Grains',
    subtitle: '1121 & Pusa Basmati, Non-Basmati & Lentils',
    text: 'Export-grade agricultural staples including aged long-grain aromatic Basmati rice, premium Non-Basmati varieties, chickpeas, and feed grains double-cleaned and Sortex-inspected.',
    image: '/categories/pulses-grains.jpeg',
    tag: '05',
    badge: 'Export Basmati',
    highlights: ['Sortex Cleaned', 'High Kernel Elongation', 'Fumigated Cargo'],
    varieties: '1121 Steam & Sella Basmati, Pusa Basmati, PR-11 & IR-64 Non-Basmati, Kabuli Chickpeas, Yellow Maize',
    packaging: 'Non-woven fabric bags, BOPP laminated bags, PP bags (5kg, 10kg, 25kg, 50kg) & containerized bulk liners',
  },
  {
    name: 'Dry Fruits & Nuts',
    subtitle: 'Dates, Premium Cashews, Almonds & Raisins',
    text: 'Nutrient-dense, rigorously graded dry fruits and tree nuts curated for institutional confectionery, bakery, retail repackers, and high-demand commercial trade sectors.',
    image: '/categories/dry-fruits.jpeg',
    tag: '06',
    badge: 'Grade-A Selection',
    highlights: ['Vacuum Sealed Packs', 'Strict Size Counts', 'Moisture Regulated'],
    varieties: 'Medjool, Kimia & Sayer Dates, W180 / W240 / W320 Whole Cashew Kernels, California & Mamra Almonds, Raisins',
    packaging: 'Nitrogen-flushed tins, vacuum poly-packs (10kg/20kg), reinforced corrugated master boxes with moisture barrier',
  },
  {
    name: 'Construction & Road Materials',
    subtitle: 'Natural Raw Gypsum & Industrial Minerals',
    text: 'High-purity raw natural gypsum rock, agricultural gypsum, and selected industrial mineral commodities coordinated for commercial cement manufacturing, plasterboard, and infrastructure.',
    image: '/categories/construction-materials.jpeg',
    tag: '07',
    badge: 'Bulk Mineral Supply',
    highlights: ['Purity >85-90% CaSO4', 'Vessel & Rake Logistics', 'Industrial Tested'],
    varieties: 'Raw Natural Gypsum Rock (crushed/lumps), Calcined Gypsum, Mineral Aggregates, Industrial Quartz & Silica',
    packaging: 'Break-bulk vessel shipments, jumbo tonner bags (1 MT / 1.5 MT), and open-top bulk containers',
  },
  {
    name: 'Custom Sourcing & Contract Farming',
    subtitle: 'Bespoke Crop Origins & Private Labeling',
    text: 'Looking for specific regional varieties, dedicated farm cluster contracting, or specialized consumer packaging? Our global trade specialists manage turnkey sourcing and export fulfillment.',
    image: '/produce-market.png',
    tag: '08',
    badge: 'Turnkey Trade',
    highlights: ['Direct Farmer Clusters', 'Private Labeling', 'End-to-End Clearance'],
    varieties: 'Bespoke agricultural crops, customized processing parameters, private labeling, origin-traceable consignments',
    packaging: 'Tailored private label retail packaging, custom cartons, branded pallet wraps, container load optimizations',
  },
];
const categories = rawCategories.map((c) => ({ ...c, image: asset(c.image) }));

const rawProducts = [
  ['Apple','Delicious, nutritious, sweet, and globally demanded fresh fruit.','apple','/products/krishi-apple.jpg'],
  ['Dragon Fruit','An exotic, high-demand fruit known for its vibrant appearance.','dragon','/products/krishi-dragon-fruit.jpg'],
  ['Banana','Fresh bananas sourced for domestic and international markets.','banana','/products/krishi-banana.jpg'],
  ['Coconut','Fresh coconuts for commercial and international trade.','coconut','/products/krishi-coconut.jpg'],
  ['Indian Onion','Indian onions valued for their distinctive flavor and commercial demand.','onion','/products/krishi-onion.jpg'],
  ['Rice','Indian Basmati and Non-Basmati rice for domestic and international markets.','rice','/products/krishi-rice.jpg'],
  ['Dates','Dates for domestic consumption and international trade.','dates','/products/krishi-dates.jpg'],
  ['Gypsum','Gypsum for construction and industrial applications.','gypsum','/products/krishi-gypsum.jpg'],
];
const products = rawProducts.map(([name, text, key, img]) => [name, text, key, asset(img)]);
const services = [
  { name:'Shipment Services', icon:Ship, text:'Support for group and individual shipments, from product sourcing and documentation guidance to container booking, clearance coordination and logistics.' },
  { name:'Global Trade Consultancy', icon:Compass, text:'Practical advisory support to navigate trade requirements, consider market opportunities and shape an international trade strategy.' },
  { name:'Freight Forwarding & Logistics', icon:Truck, text:'Logistics coordination designed to support safe, timely and efficient international handling across sea, land and air.' },
  { name:'Documentation Services', icon:ClipboardList, text:'Guidance on registration and compliance requirements including IEC, DGFT, RCMC, AD Code, ICEGATE, APEDA and other applicable processes.' },
];
const credentials = ['IEC – Import Export Code','APEDA Registration','FSSAI License','GSTIN Registration','MSME (Udyam) Registration','FIEO Membership','Coconut Development Board Registration','Spices Board Registration','Halal Certification','Kosher Certification','ISO Certification'];
const markets = ['United Arab Emirates','Saudi Arabia','Oman','Qatar','Kuwait','Bahrain','Iran','Turkey','Vietnam','Sri Lanka','United Kingdom','Netherlands','Canada'];
const blogs = [
  ['Premium Apples Imported from Iran','An overview of sourcing premium-grade fresh apples, with applicable documentation and import compliance considerations.','A market note'],
  ['Dragon Fruit Sourcing from Vietnam','Explore sourcing considerations for export-quality dragon fruit, including quality and temperature-controlled logistics.','A sourcing note'],
  ['Successful Onion Export Shipment','A sample overview of sorting, packaging, documentation, and logistics considerations for international onion shipments.','A trade guide'],
];
const navItems = [['Home','home'],['About Us','about'],['Our Products','products'],['Our Services','services'],['News & Blogs','news'],['Careers','careers'],['Contact Us','contact']];
const productsNav = ['Fresh Fruits & Vegetables','Frozen Vegetables','Dehydrated Powders','Spices & Herbs','Pulses & Grains','Dry Fruits & Nuts','Construction & Road Materials'];
const servicesNav = services.map(s=>s.name);

function Anchor({to,children,className='',...props}:AnchorHTMLAttributes<HTMLAnchorElement>&{to:string;children:ReactNode}) {
  return <a href={`#${to}`} className={className} {...props}>{children}</a>;
}
function SectionIntro({eyebrow,title,copy,light=false}:{eyebrow:string;title:string;copy?:string;light?:boolean}) {
  return <div className="max-w-2xl"><span className={`eyebrow ${light?'!text-[#D9A441]':''}`}>{eyebrow}</span><h2 className={`section-title mt-5 ${light?'!text-[#f7f4eb]':''}`}>{title}</h2>{copy&&<p className={`body-copy mt-5 max-w-xl ${light?'!text-white/70':''}`}>{copy}</p>}</div>;
}
function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[calc(100svh-76px)] md:min-h-[calc(100svh-112px)] flex-col justify-between overflow-hidden bg-[#071320] text-white"
    >
      {/* Background Video Layer - Vividly visible without heavy filters */}
      <div className="absolute inset-0 -z-30 overflow-hidden">
        {/* Mobile Vertical Video (portrait orientation for screens < md) */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster={heroImageVertical}
          className="h-full w-full object-cover object-center md:hidden"
          aria-hidden="true"
        >
          <source src={heroVideoVertical} type="video/mp4" />
        </video>

        {/* Desktop / Tablet Horizontal Video (landscape orientation for screens >= md) */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster={heroImage}
          className="hidden h-full w-full object-cover object-center md:block"
          aria-hidden="true"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
      </div>

      {/* Refined Translucent Dark Navy Gradient Overlay: allows the cargo ship and ocean to be vividly visible while keeping text crisp */}
      {/* Light navy directional scrim */}
      <div className="pointer-events-none absolute inset-0 -z-20 bg-gradient-to-b from-[#061424]/50 via-[#081a2f]/25 to-[#050f1a]/65" />

      {/* Subtle radial center vignette for natural text depth without darkening the video */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(6,20,36,0.15)_0%,rgba(5,15,26,0.45)_100%)]" />

      {/* Smooth bottom blend into the feature ribbon */}
      <div className="pointer-events-none absolute bottom-0 inset-x-0 h-32 -z-10 bg-gradient-to-t from-[#050e18]/80 to-transparent" />

      {/* Main Hero Content - Vertically centered with generous text size and comfortable height */}
      <div className="wrap relative my-auto flex flex-1 flex-col items-center justify-center px-4 pt-8 pb-6 text-center sm:pt-10 sm:pb-8 md:pt-12 md:pb-9">
        <div className="mx-auto flex max-w-[900px] flex-col items-center reveal">
          {/* Live Global Logistics Badge */}
          <div className="mb-4 inline-flex max-w-[calc(100vw-32px)] items-center gap-2 rounded-full border border-[#D9A441]/40 bg-[#091b2e]/85 px-2.5 py-1 text-[8.5px] font-bold uppercase tracking-[.1em] text-[#D9A441] backdrop-blur-md shadow-md whitespace-nowrap min-[380px]:text-[9.5px] min-[380px]:tracking-[.14em] min-[380px]:px-3.5 sm:gap-2.5 sm:px-4 sm:py-1.5 sm:text-[10.5px] sm:tracking-[.22em] md:text-xs">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#10b981] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#10b981]" />
            </span>
            <span className="whitespace-nowrap">Agricultural Sourcing · International Trade</span>
          </div>

          <p className="mb-3 text-[13px] font-bold tracking-[.26em] text-[#D9A441] drop-shadow-md sm:text-[13.5px]">
            KRISHI SARTHAK VENTURES LLP
          </p>

          <h1 className="font-display max-w-[880px] text-[clamp(2.75rem,5.6vw,5.2rem)] font-medium leading-[1.03] tracking-[-.038em] text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)]">
            Global Trade<br />
            <em className="font-normal text-[#D9A441] italic drop-shadow-[0_2px_14px_rgba(217,164,65,0.4)]">Solutions</em>
          </h1>

          <p className="mt-4 text-base font-semibold tracking-wide text-[#f4dfb5] drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] sm:text-lg md:text-xl">
            Rooted in trust. Connected across international borders.
          </p>

          <p className="mt-3.5 max-w-[700px] text-[15px] leading-relaxed text-white/95 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] sm:text-[16px] md:text-[17px]">
            Connecting businesses with global markets through verified product intelligence, international trade expertise, reliable sourcing, and end-to-end export coordination.
          </p>

          {/* Action Buttons Centered */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-4 sm:mt-8">
            <Anchor
              to="contact"
              className="inline-flex items-center gap-3 bg-[#D9A441] px-7 py-3.5 text-xs font-bold text-[#0a1826] uppercase tracking-wider shadow-[0_4px_20px_rgba(217,164,65,0.4)] transition-all duration-300 hover:bg-[#e6b450] hover:shadow-[0_8px_30px_rgba(217,164,65,0.55)] hover:-translate-y-0.5 active:translate-y-0 sm:text-[13px]"
            >
              Get Trade Consultation <ArrowRight size={15} />
            </Anchor>
            <Anchor
              to="categories"
              className="inline-flex items-center gap-2 border border-white/35 bg-[#091b2d]/65 px-7 py-3.5 text-xs font-semibold text-white uppercase tracking-wider backdrop-blur-md transition-all duration-300 hover:bg-[#091b2d]/90 hover:border-[#D9A441] hover:text-[#D9A441] hover:-translate-y-0.5 shadow-md sm:text-[13px]"
            >
              Explore Our Sourcing <ArrowDown size={14} className="text-[#D9A441]" />
            </Anchor>
          </div>
        </div>
      </div>

      {/* Bottom Feature Ribbon - Fully visible within initial viewport */}
      <div className="relative z-10 w-full overflow-hidden border-t border-[#D9A441]/20 bg-gradient-to-t from-[#050e18]/95 via-[#071524]/85 to-transparent backdrop-blur-md">
        <div className="mx-auto w-full max-w-[1400px] px-3 py-2.5 sm:px-5 sm:py-3 lg:px-6 lg:py-3">
          <div className="flex overflow-x-auto no-scrollbar gap-2.5 pb-1 pt-0.5 scroll-smooth snap-x snap-mandatory -mx-3 px-3 sm:-mx-5 sm:px-5 lg:mx-0 lg:px-0 lg:grid lg:grid-cols-5 lg:gap-3 lg:overflow-visible lg:pb-0 lg:pt-0">
            {[
              { num: '01', title: 'Product Intelligence', desc: 'Market analysis & pricing trends', glow: 'orange' as const },
              { num: '02', title: 'Trade Compliance', desc: 'APEDA, FSSAI & phytosanitary protocols', glow: 'green' as const },
              { num: '03', title: 'Country Opportunities', desc: 'Targeted global market mapping', glow: 'orange' as const },
              { num: '04', title: 'Buyer–Supplier Network', desc: 'Direct farm clusters & vetted sources', glow: 'green' as const },
              { num: '05', title: 'End-to-End Coordination', desc: 'Port clearance & reefer cold transit', glow: 'orange' as const },
            ].map((item) => (
              <GlowCard
                key={item.num}
                customSize
                glowColor={item.glow}
                className="!grid-rows-1 flex w-[215px] shrink-0 snap-start flex-col justify-between rounded-lg border border-white/10 bg-[#091829]/80 p-2.5 text-left shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:border-[#D9A441]/50 sm:w-[235px] min-h-[72px] sm:min-h-[78px] lg:w-auto lg:min-h-[80px]"
              >
                <div>
                  <div className="mb-1 flex items-center gap-1.5">
                    <span className="rounded border border-[#D9A441]/35 bg-[#D9A441]/20 px-1.5 py-0.2 font-mono text-[9px] font-bold tracking-wider text-[#D9A441]">
                      {item.num}
                    </span>
                    <span className="h-px flex-1 bg-white/15" />
                  </div>
                  <h4 className="text-[11.5px] font-bold tracking-wide text-white leading-tight sm:text-xs">
                    {item.title}
                  </h4>
                </div>
                <p className="-translate-y-1 text-[10.5px] leading-tight text-white/70 line-clamp-1 sm:line-clamp-2">
                  {item.desc}
                </p>
              </GlowCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
function CategorySection() {
  const [selectedCategory, setSelectedCategory] = useState<typeof categories[0] | null>(null);
  return <section id="categories" className="section-pad bg-[#f7f4eb]">
    <div className="wrap">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <SectionIntro
          eyebrow="What we source"
          title="A considered range. A world of possibility."
          copy="Explore our core export-grade sourcing categories. Procured with precision, rigorous grading, and end-to-end cold-chain compliance for global destinations."
        />
        <div className="max-w-[280px] pb-1 text-xs leading-6 text-[#718074]">
          <p className="flex items-center gap-2 font-medium text-[#214c39]">
            <BadgeCheck size={16} className="text-[#D9A441] shrink-0" />
            APEDA &amp; Phytosanitary Sourced
          </p>
          <p className="mt-1 text-[11px] text-[#718074]">
            Custom grade sorting, packaging specifications, and container palletization upon request.
          </p>
        </div>
      </div>

      {/* Grid of identical size cards and images */}
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((item) => (
          <article
            key={item.name}
            className="group card-line flex flex-col h-full bg-[#fbf9f2] border border-[#ddd8ca] hover:border-[#D9A441] transition-all duration-300 shadow-xs hover:shadow-xl hover:-translate-y-1.5 overflow-hidden rounded-lg"
          >
            {/* Exactly identical size image container for all cards */}
            <div className="relative h-[210px] w-full overflow-hidden bg-[#e8e2cf] shrink-0">
              <img
                src={item.image}
                alt={`${item.name} sourcing category`}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#102c20]/80 via-[#102c20]/15 to-transparent pointer-events-none" />
              <span className="absolute left-3.5 top-3.5 border border-white/40 bg-[#1d392d]/85 px-2.5 py-1 text-[9px] font-bold tracking-widest text-[#f5ebd2] backdrop-blur-xs">
                CATEGORY {item.tag}
              </span>
              <span className="absolute right-3.5 top-3.5 border border-[#D9A441]/60 bg-[#D9A441] px-2 py-0.5 text-[9px] font-bold tracking-wider text-[#0a1826] backdrop-blur-xs shadow-xs">
                {item.badge}
              </span>
              <button
                type="button"
                onClick={() => setSelectedCategory(item)}
                className="absolute bottom-3 right-3 grid h-8 w-8 place-items-center rounded-full bg-white/90 text-[#1d392d] shadow-md transition-all group-hover:bg-[#D9A441] group-hover:text-[#0a1826] group-hover:scale-110"
                aria-label={`View ${item.name} specifications`}
              >
                <ArrowUpRight size={15} />
              </button>
            </div>

            {/* Exactly identical size card body */}
            <div className="p-5 flex flex-col flex-1 justify-between">
              <div>
                <h3 className="font-display text-lg font-medium leading-snug text-[#1d392d] group-hover:text-[#967235] transition-colors line-clamp-1">
                  {item.name}
                </h3>
                <p className="mt-1 text-[11px] font-semibold text-[#967235] tracking-wide line-clamp-1">
                  {item.subtitle}
                </p>
                <p className="mt-2.5 text-xs leading-5 text-[#6f7b70] line-clamp-3 min-h-[60px]">
                  {item.text}
                </p>

                {/* Specification tags */}
                <div className="mt-3.5 flex flex-wrap gap-1.5 pt-1">
                  {item.highlights.map((h) => (
                    <span
                      key={h}
                      className="rounded-xs border border-[#ddd8ca] bg-[#f4eee1] px-2 py-0.5 text-[9.5px] font-medium text-[#526457]"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer with identical button positions */}
              <div className="mt-5 pt-3.5 border-t border-[#e8e2d4] flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setSelectedCategory(item)}
                  className="btn-outline !py-0 !border-b-0 text-xs font-bold text-[#214c39] hover:text-[#967235] inline-flex items-center gap-1.5"
                >
                  View details <ArrowRight size={13} className="transition-transform group-hover:translate-x-1 text-[#D9A441]" />
                </button>
                <Anchor
                  to="contact"
                  className="text-[10px] font-bold uppercase tracking-wider text-[#967235] hover:underline"
                >
                  Inquire
                </Anchor>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Interactive Category Details Modal */}
      {selectedCategory && (
        <div
          className="fixed inset-0 z-[60] grid place-items-center bg-[#122a1f]/75 p-4 backdrop-blur-xs"
          onClick={() => setSelectedCategory(null)}
          role="presentation"
        >
          <div
            className="relative w-full max-w-lg overflow-hidden bg-[#fbf9f2] shadow-2xl border border-[#ddd8ca] rounded-lg"
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedCategory.name} specifications`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image Header */}
            <div className="relative h-[220px] w-full overflow-hidden bg-[#183c2c]">
              <img
                src={selectedCategory.image}
                alt={selectedCategory.name}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#102c20]/90 via-black/30 to-transparent" />
              <button
                type="button"
                onClick={() => setSelectedCategory(null)}
                className="absolute right-3.5 top-3.5 grid h-8 w-8 place-items-center rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors"
                aria-label="Close modal"
              >
                <X size={16} />
              </button>
              <div className="absolute bottom-4 left-5 right-5 text-white">
                <span className="border border-[#D9A441]/60 bg-[#D9A441] px-2 py-0.5 text-[9px] font-bold tracking-wider text-[#0a1826]">
                  CATEGORY {selectedCategory.tag} · {selectedCategory.badge}
                </span>
                <h3 className="font-display mt-2 text-2xl text-[#f7f4eb] leading-tight">
                  {selectedCategory.name}
                </h3>
                <p className="text-xs text-[#D9A441] font-medium mt-0.5">
                  {selectedCategory.subtitle}
                </p>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-4 max-h-[60vh] overflow-y-auto">
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-wider text-[#967235]">
                  Export Overview
                </h4>
                <p className="mt-1.5 text-xs leading-6 text-[#526457]">
                  {selectedCategory.text}
                </p>
              </div>

              <div className="rounded-lg bg-[#f4eee1] p-3.5 border border-[#e4decb]">
                <h4 className="text-[10px] font-bold uppercase tracking-wider text-[#967235]">
                  Key Varieties &amp; Commercial Grades
                </h4>
                <p className="mt-1 text-xs text-[#314537] font-medium leading-relaxed">
                  {selectedCategory.varieties}
                </p>
              </div>

              <div className="rounded-lg bg-[#f4eee1] p-3.5 border border-[#e4decb]">
                <h4 className="text-[10px] font-bold uppercase tracking-wider text-[#967235]">
                  Packaging &amp; Cold-Chain Sourcing
                </h4>
                <p className="mt-1 text-xs text-[#314537] font-medium leading-relaxed">
                  {selectedCategory.packaging}
                </p>
              </div>

              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-wider text-[#967235]">
                  Export Highlights
                </h4>
                <div className="mt-2 flex flex-wrap gap-2">
                  {selectedCategory.highlights.map((h) => (
                    <span
                      key={h}
                      className="inline-flex items-center gap-1 rounded-sm border border-[#D9A441]/40 bg-[#fbf5e6] px-2.5 py-1 text-[10px] font-semibold text-[#967235]"
                    >
                      <Check size={12} className="text-[#214c39]" />
                      {h}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t border-[#e4dfd3] flex items-center justify-between gap-3">
                <p className="text-[10px] text-[#718074]">
                  Discuss grade, origin, and container specifications.
                </p>
                <Anchor
                  to="contact"
                  onClick={() => setSelectedCategory(null)}
                  className="btn-primary !py-2.5 !px-4 text-xs shrink-0"
                >
                  Request Quote <ArrowRight size={14} />
                </Anchor>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  </section>;
}
function Highlights() {
  const metrics=[['10+','Years in global trade'],['25+','Countries served'],['1,500+','Global buyers & suppliers network'],['3,000+','Successful trade executions']];
  return <section className="bg-[#e9e5d8] py-12">
    <div className="wrap">
      <div className="mb-7 flex items-start gap-3 border-b border-[#d5d0c1] pb-4 text-[11px] leading-5 text-[#6a7569]"><CircleHelp size={16} className="mt-0.5 shrink-0 text-[#987333]"/><span>Illustrative placeholders inherited from a reference brief — these are <strong className="text-[#33493a]">not verified company achievements</strong> and must be confirmed or removed before publishing.</span></div>
      <div className="grid grid-cols-2 gap-y-7 md:grid-cols-4">{metrics.map(([value,label])=><div key={label} className="border-l border-[#d0caba] pl-5 first:border-0 first:pl-0"><p className="font-display text-4xl text-[#214c39]">{value}</p><p className="mt-2 text-[11px] font-semibold text-[#526457]">{label}</p><span className="text-[9px] uppercase tracking-widest text-[#9b865b]">Example only · verify</span></div>)}</div>
    </div>
  </section>;
}
function ProductCollection() {
  const [active,setActive]=useState<string|null>(null);
  return <section id="products" className="section-pad bg-[#fbf9f2]">
    <div className="wrap">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><SectionIntro eyebrow="Product catalogue" title="Our major import-export grade products" copy="A starting point for conversation. Share the origin, grade, volume and destination requirements that matter to your business."/><span className="text-[10px] uppercase tracking-[.13em] text-[#8a806d]">Product availability on request</span></div>
      <div className="mt-12 grid gap-x-5 gap-y-9 sm:grid-cols-2 lg:grid-cols-4">
        {products.map(([name,text,key,image],i)=><article key={name} className="group">
          <div className="image-zoom relative h-[222px] overflow-hidden bg-[#e8e1cf]">
            <img src={image} alt={`${name} product`} className={`h-full w-full object-cover ${key==='rice'?'object-bottom':''}`}/>
            <div className="absolute inset-0 bg-gradient-to-t from-[#172f23]/50 to-transparent"/>
            <span className="absolute bottom-3 left-4 text-[9px] font-semibold uppercase tracking-[.17em] text-white">{i<6?'Agricultural product':'Trade product'}</span>
            <button onClick={()=>setActive(name)} className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-[#f8f4e9] text-[#214c39] transition hover:bg-[#D9A441] hover:text-[#0a1826]" aria-label={`View ${name} details`}><ArrowUpRight size={16}/></button>
          </div>
          <div className="flex items-start justify-between gap-2 pt-4"><div><h3 className="font-display text-[23px]">{name}</h3><p className="mt-2 max-w-[245px] text-xs leading-5 text-[#758074]">{text}</p></div><span className="pt-1 text-[10px] text-[#9a865b]">0{i+1}</span></div>
          <button onClick={()=>setActive(name)} className="btn-outline mt-4">View product <ArrowRight size={13}/></button>
        </article>)}
      </div>
      <div className="mt-12 border-t border-[#e2ddcf] pt-7 text-center"><Anchor to="contact" className="btn-primary">Discuss product requirements <ArrowRight size={15}/></Anchor></div>
      {active&&<div className="fixed inset-0 z-[60] grid place-items-center bg-[#122a1f]/65 p-5" onClick={()=>setActive(null)} role="presentation">
        <div className="relative w-full max-w-md bg-[#fbf9f2] p-7 shadow-2xl" role="dialog" aria-modal="true" aria-label={`${active} product information`} onClick={e=>e.stopPropagation()}>
          <button onClick={()=>setActive(null)} className="absolute right-4 top-4 p-2" aria-label="Close product details"><X size={18}/></button><span className="eyebrow">Product enquiry</span><h3 className="font-display mt-4 text-4xl">{active}</h3><p className="body-copy mt-4 text-sm">Product grades, origin, packaging and availability can be discussed against your specification. Contact us to begin a sourcing conversation.</p><Anchor to="contact" onClick={()=>setActive(null)} className="btn-primary mt-6">Ask about {active} <ArrowRight size={15}/></Anchor>
        </div>
      </div>}
    </div>
  </section>;
}
function About() {
  return <section id="about" className="section-pad bg-[#e9e5d8]">
    <div className="wrap grid items-center gap-12 lg:grid-cols-[.95fr_1.05fr] lg:gap-20">
      <div className="relative image-zoom">
        <div className="absolute -left-3 -top-3 h-24 w-24 border-l border-t border-[#D9A441]"/>
        <img src={heroImage} alt="Agricultural fields reflecting the sourcing and trade focus of Krishi Sarthak Ventures" className="h-[420px] w-full object-cover md:h-[515px]"/>
        <div className="absolute bottom-5 left-5 max-w-[250px] bg-[#f7f4eb] p-5"><span className="eyebrow">Our perspective</span><p className="font-display mt-2 text-xl leading-tight">Trade starts with understanding what matters at both ends.</p></div>
      </div>
      <div><SectionIntro eyebrow="About the company" title="Your partner in global trade"/>
        <div className="mt-6 space-y-4 text-[13px] leading-7 text-[#66756a]">
          <p>KRISHI SARTHAK VENTURES LLP is focused on connecting businesses with international markets through agricultural product sourcing, market intelligence and global trade support.</p>
          <p>Our business approach emphasizes product quality, reliable sourcing, buyer–supplier relationships and efficient coordination throughout the import-export process.</p>
          <p>We aim to help businesses identify market opportunities, understand international trade requirements and establish dependable commercial relationships across borders.</p>
          <p>Our services cover product sourcing, international trade coordination, shipment support and documentation guidance. We strive to deliver professional service and help clients navigate the complexities of international trade.</p>
        </div>
        <Anchor to="approach" className="btn-primary mt-7">Read more about our approach <ArrowRight size={15}/></Anchor>
      </div>
    </div>
  </section>;
}
function Compliance() {
  return <section id="compliance" className="bg-[#214c39] py-14 text-[#f7f4eb]">
    <div className="wrap">
      <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><span className="eyebrow !text-[#D9A441]">Trade readiness</span><h2 className="font-display mt-3 text-3xl md:text-4xl">Certifications & compliance</h2></div><p className="max-w-[430px] text-xs leading-6 text-white/65">Applicable registration and certification categories vary by product, market and business activity. No company registrations are represented as confirmed here.</p></div>
      <div className="mt-8 flex gap-3 overflow-x-auto pb-3">
        {credentials.map((credential,i)=><div key={credential} className="min-w-[210px] border border-white/20 bg-white/[.06] p-4">
          <span className="mb-4 grid h-8 w-8 place-items-center rounded-full border border-[#D9A441]/60 text-[#D9A441]"><BadgeCheck size={15}/></span><p className="text-xs font-semibold">{credential}</p><p className="mt-2 text-[9px] uppercase tracking-[.14em] text-[#c5c9b9]">Applicable category · confirm</p>
        </div>)}
      </div>
      <p className="mt-3 text-[10px] text-white/50">Reference categories only. Actual registrations and certifications are to be confirmed before publication.</p>
    </div>
  </section>;
}
function Services() {
  return (
    <section id="services" className="section-pad bg-[#f7f4eb]">
      <div className="wrap">
        <SectionIntro
          eyebrow="How we help"
          title="Comprehensive global trade services"
          copy="Thoughtful support across sourcing, preparation and movement — shaped around your product and requirements."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:gap-8">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <article
                key={service.name}
                className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-[#ddd8ca] bg-[#fbf9f2] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#D9A441] hover:bg-white hover:shadow-xl md:p-9"
              >
                {/* Elegant top accent indicator that highlights on hover */}
                <div className="absolute inset-x-0 top-0 h-1 bg-transparent transition-colors duration-300 group-hover:bg-[#D9A441]" />

                <div>
                  <div className="flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-lg border border-[#D9A441]/35 bg-[#f4eee1] text-[#967235] shadow-xs transition-all duration-300 group-hover:border-[#D9A441] group-hover:bg-[#214c39] group-hover:text-[#D9A441] group-hover:scale-105">
                      <Icon size={22} />
                    </span>
                    <span className="font-display text-3xl font-light text-[#cfc7b4] transition-colors duration-300 group-hover:text-[#D9A441]">
                      0{i + 1}
                    </span>
                  </div>

                  <h3 className="font-display mt-6 text-2xl font-medium text-[#1d392d] transition-colors duration-300 group-hover:text-[#183c2c]">
                    {service.name}
                  </h3>
                  <p className="mt-3 text-[13.5px] leading-relaxed text-[#5c6e61]">
                    {service.text}
                  </p>
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-[#ede7d8] pt-5">
                  <Anchor
                    to="contact"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#214c39] transition-all duration-200 group-hover:text-[#967235] group-hover:translate-x-1"
                  >
                    <span>Read more</span>
                    <ArrowRight size={13} className="text-[#D9A441] transition-transform duration-200 group-hover:translate-x-1" />
                  </Anchor>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#9a865b]">
                    Trade service
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
function Growth() {
  const years=['2021','2022','2023','2024','2025'];
  return <section className="section-pad bg-[#e9e5d8]">
    <div className="wrap"><div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><SectionIntro eyebrow="Perspective, not forecast" title="Our growth & strategy" copy="Illustrative visual frameworks for how trade and market priorities can be considered. These are not company performance data."/><span className="mb-2 inline-flex items-center gap-2 text-[10px] uppercase tracking-[.13em] text-[#7e715a]"><BarChart3 size={14}/> Sample charts · illustrative data</span></div>
      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        <div className="card-line p-6 md:p-8"><div className="flex items-start justify-between"><div><h3 className="font-display text-2xl">Import–export growth</h3><p className="mt-1 text-[11px] text-[#7b8679]">Example trend only · illustrative data</p></div><span className="border border-[#ddd8ca] p-2 text-[#718b5c]"><BarChart3 size={17}/></span></div>
          <div className="mt-8 flex h-[205px] items-end gap-3 border-b border-l border-[#d8d4c7] px-3">
            {[35,50,43,68,60,83,73,94].map((height,i)=><div key={i} className="group relative flex h-full flex-1 items-end"><span className="w-full bg-[#718b5c] transition-colors group-hover:bg-[#D9A441]" style={{height:`${height}%`}}/><span className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-[9px] text-[#858878]">{years[i%5]}</span></div>)}
          </div><div className="mt-10 flex items-center gap-2 text-[10px] text-[#6e7a6f]"><span className="h-2 w-2 bg-[#718b5c]"/> Illustrative index (not actual trade volume)</div>
        </div>
        <div className="card-line p-6 md:p-8"><div className="flex items-start justify-between"><div><h3 className="font-display text-2xl">Market strategy distribution</h3><p className="mt-1 text-[11px] text-[#7b8679]">Example allocation only · illustrative data</p></div><span className="border border-[#ddd8ca] p-2 text-[#718b5c]"><Globe2 size={17}/></span></div>
          <div className="mt-7 flex flex-col items-center gap-7 sm:flex-row"><div className="relative grid h-44 w-44 shrink-0 place-items-center rounded-full" style={{background:'conic-gradient(#214c39 0 34%, #D9A441 34% 59%, #8b9b71 59% 79%, #bb8160 79% 91%, #aec3b7 91% 100%)'}}><div className="grid h-24 w-24 place-items-center rounded-full bg-[#fbf9f2] text-center"><span className="font-display text-xl">Illustrative</span><span className="text-[8px] uppercase tracking-wider text-[#718074]">allocation</span></div></div>
            <div className="grid grid-cols-2 gap-x-5 gap-y-3 text-[10px] text-[#68766c]">{[['South Asia','#214c39'],['Gulf','#D9A441'],['Europe','#8b9b71'],['East Asia','#bb8160'],['Other','#aec3b7']].map(([label,color])=><span key={label} className="flex items-center gap-2"><i className="h-2 w-2 rounded-full" style={{background:color}}/>{label}</span>)}</div>
          </div><p className="mt-6 text-[10px] text-[#7e8779]">Illustrative categories and proportions; not actual company activity.</p>
        </div>
      </div>
    </div>
  </section>;
}
function Approach() {
  const steps=[
    ['Product & Market Intelligence','We identify potential products and analyze market opportunities to support informed import-export decisions.',Compass],
    ['Trade Standards & Compliance','We provide guidance on relevant regulations, certifications, documentation and compliance requirements.',BadgeCheck],
    ['Global Buyer–Supplier Network','We help businesses identify potential international buyers and suppliers and build dependable relationships.',Globe2],
    ['End-to-End Trade Execution','From sourcing to shipment coordination, we support import-export processes through organized planning.',PackageCheck],
  ] as const;
  return <section id="approach" className="section-pad bg-[#fbf9f2]">
    <div className="wrap"><div className="grid gap-9 lg:grid-cols-[.7fr_1.3fr]"><SectionIntro eyebrow="A clear process" title="From first question to a considered next step." copy="A practical way of working that brings product, market and movement into the same conversation."/>
      <div className="grid gap-0 sm:grid-cols-2">
        {steps.map(([title,text,Icon],i)=><article key={title} className="relative border-b border-[#e2ddcf] py-6 sm:odd:mr-6 sm:even:ml-6">
          <span className="absolute right-0 top-5 font-display text-4xl text-[#ddd7c7]">0{i+1}</span><span className="grid h-11 w-11 place-items-center bg-[#e9e5d8] text-[#5e7953]"><Icon size={20}/></span><h3 className="font-display mt-5 max-w-[240px] text-xl">{title}</h3><p className="mt-2 max-w-[300px] text-xs leading-6 text-[#707c70]">{text}</p>
        </article>)}
      </div>
    </div></div>
  </section>;
}
function News() {
  return <section id="news" className="section-pad bg-[#e9e5d8]">
    <div className="wrap"><div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><SectionIntro eyebrow="Notes from the trade" title="News & blogs" copy="Sample editorial topics for future updates. These examples do not describe completed transactions by the company."/><span className="mb-2 text-[10px] uppercase tracking-[.14em] text-[#8b7959]">Sample entries · editable</span></div>
      <div className="mt-11 grid gap-5 md:grid-cols-3">
        {blogs.map(([title,text,tag],i)=><article key={title} className="group overflow-hidden bg-[#f7f4eb]">
          <div className="image-zoom relative h-[220px] overflow-hidden"><img src={i===1?produceImage:heroImage} alt={`${tag}: ${title}`} className="h-full w-full object-cover"/><div className="absolute inset-0 bg-gradient-to-t from-[#132d21]/60 to-transparent"/><span className="absolute bottom-4 left-5 text-[9px] font-semibold uppercase tracking-[.16em] text-[#f1d18b]">{tag}</span></div>
          <div className="p-6"><p className="text-[9px] font-bold uppercase tracking-[.14em] text-[#9b7535]">Trade perspective · sample</p><h3 className="font-display mt-3 text-[23px] leading-tight">{title}</h3><p className="mt-3 text-xs leading-6 text-[#6f7b70]">{text}</p><Anchor to="contact" className="btn-outline mt-5">Read more <ArrowRight size={13}/></Anchor></div>
        </article>)}
      </div>
    </div>
  </section>;
}
function GlobalPresence() {
  return <section id="presence" className="relative overflow-hidden bg-[#193e2d] py-20 text-[#f7f4eb]">
    <div className="absolute -right-28 -top-48 h-[570px] w-[570px] rounded-full border border-white/[.08]"/><div className="absolute -right-12 -top-32 h-[430px] w-[430px] rounded-full border border-white/[.08]"/>
    <div className="wrap relative grid items-center gap-12 lg:grid-cols-[.82fr_1.18fr]">
      <div><SectionIntro eyebrow="A world of possibilities" title="Our global presence" copy="Expanding businesses across international markets — one informed connection at a time." light/><p className="mt-6 max-w-lg text-xs leading-6 text-white/55">The countries below are example markets for discussion, not confirmed operating destinations or existing trade routes for KRISHI SARTHAK VENTURES LLP.</p><Anchor to="contact" className="mt-7 inline-flex items-center gap-2 border-b border-[#D9A441] pb-2 text-xs font-semibold text-[#D9A441]">Discuss a market <ArrowRight size={14}/></Anchor></div>
      <div className="border border-white/15 bg-white/[.045] p-6 md:p-8">
        <div className="mb-7 flex items-center justify-between"><span className="text-[10px] uppercase tracking-[.16em] text-[#D9A441]">Potential market examples</span><Globe2 size={21} className="text-[#D9A441]"/></div>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">{markets.map((market,i)=><div key={market} className="flex items-center gap-2 border border-white/10 px-3 py-3 text-[11px] text-white/80"><span className="text-[9px] text-[#D9A441] font-mono font-bold">{String(i+1).padStart(2,'0')}</span>{market}</div>)}</div>
        <p className="mt-5 text-[9px] leading-5 text-white/45">Illustrative country list only. Market access and any business activity must be independently confirmed.</p>
      </div>
    </div>
  </section>;
}
function Careers() {
  return <section id="careers" className="bg-[#D9A441] py-14">
    <div className="wrap flex flex-col justify-between gap-7 md:flex-row md:items-center"><div><span className="eyebrow !text-[#0a1826]/80">People make trade move</span><h2 className="font-display mt-3 text-3xl text-[#0a1826] md:text-4xl">Careers at KRISHI SARTHAK VENTURES LLP</h2><p className="mt-3 max-w-2xl text-sm leading-6 text-[#152e22]">We welcome individuals interested in agricultural trade, international business, logistics, sourcing and business development. No active vacancies are being advertised here.</p></div><Anchor to="contact" className="inline-flex shrink-0 items-center gap-3 border border-[#0a1826] px-5 py-4 text-xs font-bold text-[#0a1826] transition hover:bg-[#0a1826] hover:text-[#D9A441]">Explore opportunities <ArrowUpRight size={15}/></Anchor></div>
  </section>;
}
function Contact() {
  const [success,setSuccess]=useState(false);
  const [formError,setFormError]=useState('');
  const submit=(event:FormEvent<HTMLFormElement>)=>{
    event.preventDefault(); const form=event.currentTarget;
    if(!form.reportValidity()){setFormError('Please complete the required fields with a valid email address.');return;}
    setFormError('');setSuccess(true);form.reset();
  };
  return <section id="contact" className="section-pad bg-[#f7f4eb]">
    <div className="wrap">
      <div className="grid gap-12 lg:grid-cols-[.83fr_1.17fr]">
        <div><SectionIntro eyebrow="Let's talk business" title="Let's discuss your global trade requirements" copy="Have questions about agricultural products, international sourcing, shipments, documentation or global trade opportunities? Get in touch to discuss your requirements."/>
          <div className="mt-9 space-y-5">
            <div className="flex gap-4"><span className="grid h-10 w-10 shrink-0 place-items-center border border-[#d8cfb9] text-[#8b6c34]"><Send size={16}/></span><div><p className="text-[9px] font-bold uppercase tracking-[.16em] text-[#8c7958]">Phone</p><a href="tel:[Add Company Phone Number]" className="mt-1 block text-sm font-semibold">[Add Company Phone Number]</a></div></div>
            <div className="flex gap-4"><span className="grid h-10 w-10 shrink-0 place-items-center border border-[#d8cfb9] text-[#8b6c34]"><Send size={16}/></span><div><p className="text-[9px] font-bold uppercase tracking-[.16em] text-[#8c7958]">Email</p><a href="mailto:[Add Company Email]" className="mt-1 block text-sm font-semibold">[Add Company Email]</a></div></div>
            <div className="flex gap-4"><span className="grid h-10 w-10 shrink-0 place-items-center border border-[#d8cfb9] text-[#8b6c34]"><MapPin size={16}/></span><div><p className="text-[9px] font-bold uppercase tracking-[.16em] text-[#8c7958]">Registered office</p><p className="mt-1 text-sm font-semibold">[Add Registered Office Address]</p></div></div>
          </div>
          <div className="mt-8 flex h-[165px] items-center justify-center border border-dashed border-[#bcb7a8] bg-[#eeeadf] p-5 text-center">
            <div><MapPin size={21} className="mx-auto text-[#8b6c34]"/><p className="mt-3 text-[11px] font-semibold">Office location map placeholder</p><p className="mt-1 text-[10px] text-[#7a8376]">Replace with the confirmed registered office location.</p></div>
          </div>
        </div>
        <div className="border border-[#ddd8ca] bg-[#fbf9f2] p-6 md:p-9">
          <div className="mb-7"><p className="font-display text-2xl">Tell us what you need.</p><p className="mt-2 text-xs text-[#7a8579]">Fields marked * are required.</p></div>
          {success&&<div role="status" className="mb-5 flex gap-3 border border-[#a8b69a] bg-[#edf2e8] p-4 text-xs leading-5 text-[#38543d]"><Check size={17} className="mt-0.5 shrink-0"/><p><strong>Preview only.</strong> Your details were not sent. This form is a frontend preview and is not connected to an email service or backend.</p></div>}
          {formError&&<p role="alert" className="mb-4 text-xs text-[#9d483c]">{formError}</p>}
          <form onSubmit={submit} className="grid gap-4 sm:grid-cols-2">
            <label className="block text-[10px] font-bold text-[#56675a]">Full name *<input required name="name" autoComplete="name" className="mt-2 w-full border border-[#d9d4c7] bg-transparent px-3 py-3 text-xs font-normal outline-none focus:border-[#718b5c]" placeholder="Your full name"/></label>
            <label className="block text-[10px] font-bold text-[#56675a]">Company name<input name="company" autoComplete="organization" className="mt-2 w-full border border-[#d9d4c7] bg-transparent px-3 py-3 text-xs font-normal outline-none focus:border-[#718b5c]" placeholder="Company or organization"/></label>
            <label className="block text-[10px] font-bold text-[#56675a]">Email address *<input required type="email" name="email" autoComplete="email" className="mt-2 w-full border border-[#d9d4c7] bg-transparent px-3 py-3 text-xs font-normal outline-none focus:border-[#718b5c]" placeholder="name@company.com"/></label>
            <label className="block text-[10px] font-bold text-[#56675a]">Phone number<input type="tel" name="phone" autoComplete="tel" className="mt-2 w-full border border-[#d9d4c7] bg-transparent px-3 py-3 text-xs font-normal outline-none focus:border-[#718b5c]" placeholder="+ country code"/></label>
            <label className="block text-[10px] font-bold text-[#56675a]">Country<input name="country" autoComplete="country-name" className="mt-2 w-full border border-[#d9d4c7] bg-transparent px-3 py-3 text-xs font-normal outline-none focus:border-[#718b5c]" placeholder="Country"/></label>
            <label className="block text-[10px] font-bold text-[#56675a]">Interested in<select name="interest" defaultValue="" className="mt-2 w-full border border-[#d9d4c7] bg-[#fbf9f2] px-3 py-3 text-xs font-normal outline-none focus:border-[#718b5c]"><option value="" disabled>Select a product or service</option>{[...productsNav,...servicesNav].map(item=><option key={item}>{item}</option>)}</select></label>
            <label className="block text-[10px] font-bold text-[#56675a] sm:col-span-2">Your message *<textarea required name="message" rows={4} className="mt-2 w-full resize-y border border-[#d9d4c7] bg-transparent px-3 py-3 text-xs font-normal outline-none focus:border-[#718b5c]" placeholder="Tell us a little about your requirements"/></label>
            <div className="flex flex-col justify-between gap-4 sm:col-span-2 sm:flex-row sm:items-center"><p className="max-w-xs text-[9px] leading-4 text-[#889084]">Preview form only. No message will be transmitted or stored.</p><button type="submit" className="btn-primary">Send inquiry <ArrowRight size={15}/></button></div>
          </form>
        </div>
      </div>
    </div>
  </section>;
}
function Footer() {
  return <footer className="bg-[#173a2a] text-[#f7f4eb]">
    <div className="wrap grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.3fr_.75fr_.9fr_.85fr]">
      <div><div className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-full border border-[#D9A441]/60 text-[#D9A441]"><Sprout size={21}/></span><span><span className="block text-[11px] font-extrabold tracking-[.1em]">KRISHI SARTHAK</span><span className="mt-1 block text-[8px] tracking-[.19em] text-white/55">VENTURES LLP</span></span></div><p className="mt-5 max-w-sm font-display text-xl leading-snug text-[#f3dfb4]">Empowering Global Trade Through Quality, Reliability, and Innovation.</p><p className="mt-4 max-w-sm text-xs leading-6 text-white/60">Connecting businesses with agricultural products, sourcing opportunities and international trade solutions.</p><div className="mt-5 flex gap-3 text-xs"><a href="#contact" aria-label="LinkedIn (placeholder link)" className="grid h-8 w-8 place-items-center border border-white/25 hover:border-[#D9A441] hover:text-[#D9A441]"><Linkedin size={14}/></a><a href="#contact" aria-label="Facebook (placeholder link)" className="grid h-8 w-8 place-items-center border border-white/25 hover:border-[#D9A441] hover:text-[#D9A441]"><Facebook size={14}/></a><a href="#contact" aria-label="Instagram (placeholder link)" className="grid h-8 w-8 place-items-center border border-white/25 hover:border-[#D9A441] hover:text-[#D9A441]"><Instagram size={14}/></a></div></div>
      <div><p className="text-[10px] font-bold uppercase tracking-[.18em] text-[#D9A441]">Quick links</p><ul className="mt-5 space-y-3">{navItems.map(([label,id])=><li key={id}><Anchor to={id} className="text-xs text-white/70 transition hover:text-white">{label}</Anchor></li>)}</ul></div>
      <div><p className="text-[10px] font-bold uppercase tracking-[.18em] text-[#D9A441]">Product categories</p><ul className="mt-5 space-y-3">{productsNav.map(label=><li key={label}><Anchor to="categories" className="text-xs text-white/70 transition hover:text-white">{label}</Anchor></li>)}</ul></div>
      <div><p className="text-[10px] font-bold uppercase tracking-[.18em] text-[#D9A441]">Trade services</p><ul className="mt-5 space-y-3">{servicesNav.map(label=><li key={label}><Anchor to="services" className="text-xs text-white/70 transition hover:text-white">{label}</Anchor></li>)}</ul><div className="mt-7 space-y-2 text-[10px] leading-5 text-white/65"><p>Phone: [Add Company Phone Number]</p><p>Email: [Add Company Email]</p><p>Address: [Add Registered Office Address]</p></div></div>
    </div>
    <div className="border-t border-white/15"><div className="wrap flex flex-col justify-between gap-2 py-5 text-[9px] text-white/50 sm:flex-row"><p>© 2026 KRISHI SARTHAK VENTURES LLP. All Rights Reserved.</p><p>Company details and contact information are editable placeholders.</p></div></div>
  </footer>;
}
function App() {
  return <div className="grain min-h-[100dvh]">
    <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-white focus:p-3">Skip to content</a>
    <Navbar/><main id="main-content"><Hero/><CategorySection/><Highlights/><ProductCollection/><About/><Compliance/><Services/><Growth/><Approach/><News/><GlobalPresence/><Careers/><Contact/></main><Footer/>
  </div>;
}
export default App;
