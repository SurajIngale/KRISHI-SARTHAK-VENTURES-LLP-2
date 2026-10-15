import { useEffect, useState, type AnchorHTMLAttributes, type FormEvent, type ReactNode } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  Anchor as AnchorIcon,
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BarChart3,
  Check,
  CheckCircle2,
  ChevronRight,
  CircleHelp,
  ClipboardList,
  Clock,
  Compass,
  Container,
  FileCheck,
  FileText,
  Filter,
  Globe2,
  HelpCircle,
  Layers,
  Leaf,
  Mail,
  MapPin,
  MessageCircle,
  Package,
  PackageCheck,
  Phone,
  Send,
  ShieldCheck,
  Ship,
  Sparkles,
  Sprout,
  ThermometerSnowflake,
  Truck,
  Warehouse,
  Wheat,
  X,
  Zap,
} from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { GlowCard } from './components/ui/spotlight-card';
import { COMPANY_INFO, getWhatsAppProductUrl } from './data/tradeData';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
export const asset = (path: string) =>
  path.startsWith('http') ? path : `${basePath}${path.startsWith('/') ? path : `/${path}`}`;

const heroImage = asset('/hero-harvest.png');
const heroImageVertical = asset('/hero-harvest-vertical.png');
const heroVideo = asset('/cargo_ship_video_2.mp4');
const heroVideoVertical = asset('/cargo_ship_video_vertical.mp4');
const produceImage = asset('/produce-market.png');

interface CategoryItem {
  name: string;
  subtitle: string;
  text: string;
  image: string;
  tag: string;
  badge: string;
  highlights: string[];
  varieties: string;
  packaging: string;
  url?: string;
}

const rawCategories: CategoryItem[] = [
  {
    name: 'Fresh Fruits & Vegetables',
    subtitle: 'Apples, Cavendish Bananas, Dragon Fruit & Onions',
    text: 'Farm-sourced fresh produce graded for optimal ripeness, uniform sizing, and export longevity. Sourced under strict phytosanitary protocols with pre-cooling and cold-chain reefer transit.',
    image: '/categories/fresh-fruits.jpeg',
    tag: '01',
    badge: 'Farm Fresh',
    highlights: ['Export Grade Sorting', 'Phytosanitary Compliant', 'Reefer Container Ready'],
    varieties:
      'Royal Gala & Kashmiri Apples, Robusta & G9 Bananas, Red & White Dragon Fruit, Nashik Red & Garwa Onions, Pollachi Coconuts',
    packaging:
      'Corrugated telescopic cartons (10kg / 13.5kg / 18kg), ventilated mesh bags, customized palletization',
    url: '/products/fresh-fruits-vegetables/',
  },
  {
    name: 'Frozen Vegetables (IQF)',
    subtitle: 'Green Peas, Sweet Corn, Mixed Veg & Cuts',
    text: 'Individually Quick Frozen (IQF) vegetables flash-frozen within hours of harvest to preserve vital nutrients, natural color, crisp texture, and year-round multi-market availability.',
    image: '/categories/frozen-vegetables.jpeg',
    tag: '02',
    badge: 'IQF Cold-Chain',
    highlights: ['-18°C Cold Chain', 'Zero Preservatives', 'Multi-Season Storage'],
    varieties:
      'Tender Green Peas, Golden Sweet Corn Kernels, Diced Carrots, French Beans, Cauliflower & Broccoli Florets',
    packaging:
      'Food-grade polybags (400g, 1kg, 2.5kg, 5kg) and bulk corrugated master cartons (10kg–20kg)',
    url: '/products/frozen-vegetables/',
  },
  {
    name: 'Dehydrated Powders',
    subtitle: 'Onion, Garlic, Ginger & Spray-Dried Powders',
    text: 'High-purity dehydrated and spray-dried fruit and vegetable powders with low moisture retention, free-flowing consistency, and rich flavor retention for international food processing.',
    image: '/categories/dehydrated-powders.jpeg',
    tag: '03',
    badge: 'Industrial Grade',
    highlights: ['100% Pure Natural', 'Customized Mesh Sizes', 'Long Shelf Life'],
    varieties:
      'White & Red Onion Powder/Flakes, Garlic Powder/Granules, Ginger Powder, Tomato Powder, Fruit Powders',
    packaging:
      'Double-layer polyethylene lined aluminium foil pouches, multi-wall paper bags, HDPE drums (20kg–25kg)',
    url: '/products/dehydrated-powders/',
  },
  {
    name: 'Spices & Herbs',
    subtitle: 'High-Curcumin Turmeric, Red Chilli, Cumin & Seeds',
    text: 'Authentic Indian whole and ground spices procured from certified regional growing belts with verified essential oil content, vibrant color value, and rigorous laboratory purity testing.',
    image: '/categories/spices-herbs.jpeg',
    tag: '04',
    badge: 'Aromatic & Pure',
    highlights: ['Spices Board Certified', 'High Curcumin & Oil', 'Low Aflatoxin Test'],
    varieties:
      'Salem & Nizamabad Turmeric (3-5% curcumin), Guntur S17 & Teja Chilli, Unjha Cumin Seeds, Coriander, Green Cardamom',
    packaging:
      'Multi-wall kraft paper bags, jute bags with inner poly liners, vacuum pouches (25kg–50kg bulk)',
    url: '/products/spices-herbs/',
  },
  {
    name: 'Pulses & Grains',
    subtitle: '1121 & Pusa Basmati, Non-Basmati & Lentils',
    text: 'Export-grade agricultural staples including aged long-grain aromatic Basmati rice, premium Non-Basmati varieties, chickpeas, and feed grains double-cleaned and Sortex-inspected.',
    image: '/categories/pulses-grains.jpeg',
    tag: '05',
    badge: 'Export Basmati',
    highlights: ['Sortex Cleaned', 'High Kernel Elongation', 'Fumigated Cargo'],
    varieties:
      '1121 Steam & Sella Basmati, Pusa Basmati, PR-11 & IR-64 Non-Basmati, Kabuli Chickpeas, Yellow Maize',
    packaging:
      'Non-woven fabric bags, BOPP laminated bags, PP bags (5kg, 10kg, 25kg, 50kg) & containerized bulk liners',
    url: '/products/pulses-grains/',
  },
  {
    name: 'Dry Fruits & Nuts',
    subtitle: 'Dates, Premium Cashews, Almonds & Raisins',
    text: 'Nutrient-dense, rigorously graded dry fruits and tree nuts curated for institutional confectionery, bakery, retail repackers, and high-demand commercial trade sectors.',
    image: '/categories/dry-fruits.jpeg',
    tag: '06',
    badge: 'Grade-A Selection',
    highlights: ['Vacuum Sealed Packs', 'Strict Size Counts', 'Moisture Regulated'],
    varieties:
      'Medjool, Kimia & Sayer Dates, W180 / W240 / W320 Whole Cashew Kernels, California & Mamra Almonds, Raisins',
    packaging:
      'Nitrogen-flushed tins, vacuum poly-packs (10kg/20kg), reinforced corrugated master boxes with moisture barrier',
    url: '/products/dry-fruits-nuts/',
  },
  {
    name: 'Construction & Road Materials',
    subtitle: 'Natural Raw Gypsum & Industrial Minerals',
    text: 'High-purity raw natural gypsum rock, agricultural gypsum, and selected industrial mineral commodities coordinated for commercial cement manufacturing, plasterboard, and infrastructure.',
    image: '/categories/construction-materials.jpeg',
    tag: '07',
    badge: 'Bulk Mineral Supply',
    highlights: ['Purity >85-90% CaSO4', 'Vessel & Rake Logistics', 'Industrial Tested'],
    varieties:
      'Raw Natural Gypsum Rock (crushed/lumps), Calcined Gypsum, Mineral Aggregates, Industrial Quartz & Silica',
    packaging:
      'Break-bulk vessel shipments, jumbo tonner bags (1 MT / 1.5 MT), and open-top bulk containers',
    url: '/products/construction-materials/',
  },
  {
    name: 'Custom Sourcing & Contract Farming',
    subtitle: 'Bespoke Crop Origins & Private Labeling',
    text: 'Looking for specific regional varieties, dedicated farm cluster contracting, or specialized consumer packaging? Our global trade specialists manage turnkey sourcing and export fulfillment.',
    image: '/produce-market.png',
    tag: '08',
    badge: 'Turnkey Trade',
    highlights: ['Direct Farmer Clusters', 'Private Labeling', 'End-to-End Clearance'],
    varieties:
      'Bespoke agricultural crops, customized processing parameters, private labeling, origin-traceable consignments',
    packaging:
      'Tailored private label retail packaging, custom cartons, branded pallet wraps, container load optimizations',
  },
];

const categories = rawCategories.map((c) => ({ ...c, image: asset(c.image) }));

export interface DetailedProductItem {
  name: string;
  category: 'Fresh Produce' | 'Staples & Grains' | 'Industrial Minerals';
  hsCode: string;
  text: string;
  varieties: string;
  shelfLife: string;
  packaging: string;
  markets: string;
  image: string;
  key: string;
  hasDetailPage?: boolean;
  detailUrl?: string;
}

const detailedProducts: DetailedProductItem[] = [
  {
    name: 'Fresh Apple',
    category: 'Fresh Produce',
    hsCode: '08081000',
    text: 'Export-grade apples sorted for uniform caliper sizing, crispness, and prolonged shelf life.',
    varieties: 'Royal Gala, Red Delicious, Golden Delicious, Granny Smith, Fuji',
    shelfLife: '30–45 days (controlled atmosphere / reefer)',
    packaging: '10kg / 18kg / 20kg telescopic corrugated export cartons with molded pulp trays',
    markets: 'GCC countries, United Kingdom, Germany, Vietnam, Indonesia',
    image: asset('/products/krishi-apple.jpg'),
    key: 'apple',
    hasDetailPage: true,
    detailUrl: '/products/fresh-fruits-vegetables/#product-apple',
  },
  {
    name: 'Dragon Fruit (Pitaya)',
    category: 'Fresh Produce',
    hsCode: '08109090',
    text: 'High-antioxidant exotic superfruit harvested with intact bracts and vibrant coloration.',
    varieties: 'White Flesh, Red Flesh, Pink Flesh',
    shelfLife: '20–25 days (cold-chain at 7–10°C)',
    packaging: '4kg / 5kg ventilated export master cartons with individual protective foam sleeves',
    markets: 'GCC countries, Southeast Asia, European distribution hubs',
    image: asset('/products/krishi-dragon-fruit.jpg'),
    key: 'dragon-fruit',
    hasDetailPage: true,
    detailUrl: '/products/fresh-fruits-vegetables/#product-dragon-fruit',
  },
  {
    name: 'Cavendish Banana',
    category: 'Fresh Produce',
    hsCode: '08039010',
    text: 'Uniformly graded Cavendish G9 bananas harvested at mature green stage for international voyages.',
    varieties: 'Grand Naine (G9), Robusta',
    shelfLife: '20–30 days (13–14°C controlled reefer)',
    packaging: '13kg / 18.14kg vacuum-sealed telescopic cartons with poly-liners and foam separator sheets',
    markets: 'UAE, Saudi Arabia, Oman, Qatar, Kuwait, Bahrain',
    image: asset('/products/krishi-banana.jpg'),
    key: 'banana',
    hasDetailPage: true,
    detailUrl: '/products/fresh-fruits-vegetables/#product-banana',
  },
  {
    name: 'Semi-Husked Coconut',
    category: 'Fresh Produce',
    hsCode: '08011910',
    text: 'Mature Pollachi coconuts selected for high copra weight, thick shell, and sweetness.',
    varieties: 'West Coast Tall, East Coast Tall',
    shelfLife: '45–60 days in dry ventilated cargo hold',
    packaging: '25 nuts (~13kg) or 50 nuts per high-tensile ventilated PP woven mesh bag',
    markets: 'GCC countries, Malaysia, United Kingdom',
    image: asset('/products/krishi-coconut.jpg'),
    key: 'coconut',
    hasDetailPage: true,
    detailUrl: '/products/fresh-fruits-vegetables/#product-coconut',
  },
  {
    name: 'Indian Red Onion',
    category: 'Fresh Produce',
    hsCode: '07031010',
    text: 'Pungent, firm-skinned Indian red onions grown in Maharashtra with high dry-matter content.',
    varieties: 'Nashik Red, Garwa Late Season, Agrifound Light Red',
    shelfLife: '30–45 days in ventilated containerized transit',
    packaging: '5kg / 10kg / 25kg / 50kg leno mesh bags; container stuffing in 40ft ventilated reefers',
    markets: 'GCC countries, Malaysia, Sri Lanka, Bangladesh, Singapore',
    image: asset('/products/krishi-onion.jpg'),
    key: 'indian-onion',
    hasDetailPage: true,
    detailUrl: '/products/fresh-fruits-vegetables/#product-indian-onion',
  },
  {
    name: 'Basmati & Non-Basmati Rice',
    category: 'Staples & Grains',
    hsCode: '10063020',
    text: 'Double-polished, Sortex-cleaned premium long grain aged Basmati and Non-Basmati rice.',
    varieties: '1121 Steam / Sella Basmati, Pusa Basmati, PR-11, IR-64 Non-Basmati',
    shelfLife: '24 months in dry, fumigated storage',
    packaging: 'Non-woven fabric, BOPP laminated, PP bags (5kg, 10kg, 20kg, 25kg, 50kg) & container liners',
    markets: 'Saudi Arabia, UAE, Iran, Turkey, United Kingdom, USA, Europe',
    image: asset('/products/krishi-rice.jpg'),
    key: 'rice',
  },
  {
    name: 'Commercial & Dietary Dates',
    category: 'Staples & Grains',
    hsCode: '08041020',
    text: 'Naturally dried and semi-soft high-grade dates sourced for retail repackers and industrial food use.',
    varieties: 'Medjool, Kimia, Sayer, Zahidi, Aseel',
    shelfLife: '12–18 months in cool dry environment (0–4°C)',
    packaging: '500g retail trays, 5kg / 10kg food-grade corrugated master cartons',
    markets: 'India, GCC countries, Southeast Asia, Global distribution',
    image: asset('/products/krishi-dates.jpg'),
    key: 'dates',
  },
  {
    name: 'Raw Natural Gypsum Rock',
    category: 'Industrial Minerals',
    hsCode: '25201010',
    text: 'High-purity raw natural calcium sulphate mineral rock sourced for cement clinker and drywall plants.',
    varieties: 'Gypsum Lumps (0–50mm / 50–150mm), CaSO4 Content >85–92%',
    shelfLife: 'Indefinite non-perishable industrial mineral',
    packaging: 'Bulk break-bulk vessel shipments, 1.0 MT / 1.5 MT Jumbo Tonner Bags, Open-top containers',
    markets: 'Commercial cement manufacturing hubs, India, GCC & Indian Ocean Rim ports',
    image: asset('/products/krishi-gypsum.jpg'),
    key: 'gypsum',
  },
];

const services = [
  {
    name: 'Shipment Services',
    icon: Ship,
    deliverables: [
      'Reefer & Dry Container Bookings',
      'Port Handling & Stevedoring',
      'Customs Drayage & Clearance',
    ],
    text: 'Turnkey coordination for full container loads (FCL) and consolidated shipments, from packhouse pre-cooling and container booking to shipping line manifests and destination customs clearance.',
  },
  {
    name: 'Global Trade Consultancy',
    icon: Compass,
    deliverables: [
      'Target Market Entry Feasibility',
      'Tariff & HS Code Optimization',
      'Overseas Buyer & Counterparty Due Diligence',
    ],
    text: 'Strategic commercial advisory designed to help exporters and importers navigate global market dynamics, identify competitive advantages, and establish dependable international distribution channels.',
  },
  {
    name: 'Freight Forwarding & Logistics',
    icon: Truck,
    deliverables: [
      'Multi-Modal Sea, Land & Air Freight',
      'Real-Time Reefer Temperature Telemetry',
      'Demurrage & Detention Safeguards',
    ],
    text: 'Precision freight orchestration across premier maritime corridors. We safeguard perishable cargo through active cold-chain monitoring, optimized transit windows, and seamless port handling.',
  },
  {
    name: 'Documentation & Compliance',
    icon: ClipboardList,
    deliverables: [
      'Phytosanitary & Fumigation Certificates',
      'APEDA, ICEGATE & AD Code Coordination',
      'Preferential Certificates of Origin (COO)',
    ],
    text: 'Rigorous trade documentation advisory ensuring every consignment complies with DGFT, customs, and importing nation border agencies, preventing transit delays and regulatory penalties.',
  },
];

const complianceCategories = [
  {
    title: 'Statutory Export Authorities',
    icon: ShieldCheck,
    items: [
      { code: 'IEC', name: 'Import Export Code (DGFT)', desc: 'Authorized commercial export license for international trade operations.' },
      { code: 'APEDA', name: 'APEDA Registration', desc: 'Mandatory quality compliance for scheduled agricultural and fresh food products.' },
      { code: 'FIEO', name: 'FIEO Premier Membership', desc: 'Recognized apex export promotion council facilitation network.' },
      { code: 'BOARDS', name: 'Spices & Coconut Development Boards', desc: 'Product-specific origin registration, lab testing, and quality standards.' },
    ],
  },
  {
    title: 'Food Safety & Quality Standards',
    icon: BadgeCheck,
    items: [
      { code: 'FSSAI', name: 'FSSAI Central Export License', desc: 'National food safety hygiene, grading, packaging, and handling protocols.' },
      { code: 'HALAL', name: 'Halal Certification Standard', desc: 'Destination dietary compliance across UAE, GCC, and Southeast Asian trade lanes.' },
      { code: 'KOSHER', name: 'Kosher Verification Standard', desc: 'International food processing compliance for designated overseas buyers.' },
      { code: 'ISO', name: 'ISO Quality Management', desc: 'Standardized operational procedures for batch traceability and quality control.' },
    ],
  },
  {
    title: 'Commercial & Tax Verification',
    icon: FileCheck,
    items: [
      { code: 'GSTIN', name: 'GSTIN Commercial Registration', desc: 'Verified tax entity compliance for international invoice & shipping bill processing.' },
      { code: 'MSME', name: 'MSME (Udyam) Enterprise', desc: 'Ministry of Micro, Small and Medium Enterprises national recognition.' },
      { code: 'PHYTO', name: 'Phytosanitary Clearance', desc: 'Consignment-by-consignment quarantine inspection before container sealing.' },
      { code: 'COO', name: 'Certificate of Origin', desc: 'Official origin attestation facilitating preferential customs duties under trade agreements.' },
    ],
  },
];

const shippingCorridors = [
  {
    origin: 'JNPT / Nhava Sheva (Mumbai)',
    destination: 'Jebel Ali & Dubai (UAE)',
    transit: '4–5 Days',
    type: 'Reefer & Dry FCL',
    cargo: 'Fresh Fruits, Onions, Basmati Rice',
  },
  {
    origin: 'Mundra Port (Gujarat)',
    destination: 'Dammam & Jeddah (Saudi Arabia)',
    transit: '5–7 Days',
    type: 'Reefer Cold-Chain',
    cargo: 'Bananas, Frozen Veg, Pomegranates',
  },
  {
    origin: 'JNPT / Mundra',
    destination: 'Sohar & Muscat (Oman)',
    transit: '3–4 Days',
    type: 'Fast-Track Reefer',
    cargo: 'Fresh Perishables & Vegetables',
  },
  {
    origin: 'Chennai / JNPT Port',
    destination: 'Haiphong & Ho Chi Minh (Vietnam)',
    transit: '10–12 Days',
    type: 'Containerized Cargo',
    cargo: 'Dragon Fruit, Spices, Powders',
  },
  {
    origin: 'JNPT / Mundra Port',
    destination: 'Rotterdam & Felixstowe (Europe & UK)',
    transit: '18–22 Days',
    type: 'Reefer / Dry Master',
    cargo: 'Table Grapes, Basmati Rice, Minerals',
  },
];

const targetRegions = [
  {
    region: 'GCC & Middle East Hubs',
    flag: 'Gulf Region',
    ports: 'Jebel Ali, Dammam, Sohar, Hamad, Shwaikh',
    countries: ['United Arab Emirates', 'Saudi Arabia', 'Oman', 'Qatar', 'Kuwait', 'Bahrain'],
  },
  {
    region: 'Asia-Pacific & Near East',
    flag: 'Asia-Pacific',
    ports: 'Haiphong, Colombo, Bandar Abbas, Istanbul',
    countries: ['Vietnam', 'Sri Lanka', 'Iran', 'Turkey'],
  },
  {
    region: 'Europe & North America',
    flag: 'Western Hubs',
    ports: 'Rotterdam, Felixstowe, Montreal',
    countries: ['United Kingdom', 'Netherlands', 'Canada'],
  },
];

const blogs = [
  {
    title: 'Cold-Chain Reefer Logistics: Preserving Perishables from Farm to GCC Ports',
    tag: 'Cold-Chain Logistics',
    date: 'October 2026',
    readTime: '4 min read',
    text: 'A practical review of temperature-data logging, controlled pre-cooling, and humidity thresholds critical for safeguarding fresh grapes, bananas, and onions across Arabian Sea corridors.',
    image: produceImage,
  },
  {
    title: 'APEDA Phytosanitary Standards & Documentation: Essential Importer Guide',
    tag: 'Trade Compliance',
    date: 'October 2026',
    readTime: '5 min read',
    text: 'Navigating mandatory plant quarantine clearances, pesticide residue testing, and Certificate of Origin protocols for agricultural cargo exiting Indian ports.',
    image: heroImage,
  },
  {
    title: 'Sortex Optical Grading Innovations in Indian Basmati & Red Onion Exports',
    tag: 'Sourcing Intelligence',
    date: 'October 2026',
    readTime: '4 min read',
    text: 'How modern optical sorting, size calibration, and telescopic corrugated packaging eliminate transit waste and meet discerning institutional buyer tolerances overseas.',
    image: produceImage,
  },
];

function Anchor({
  to,
  children,
  className = '',
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { to: string; children: ReactNode }) {
  return (
    <a href={`#${to}`} className={className} {...props}>
      {children}
    </a>
  );
}

function SectionIntro({
  eyebrow,
  title,
  copy,
  light = false,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-2xl">
      <span className={`eyebrow ${light ? '!text-[#D9A441] before:!bg-[#D9A441]' : ''}`}>
        {eyebrow}
      </span>
      <h2
        className={`section-title mt-4 sm:mt-5 ${
          light ? '!text-[#f7f4eb]' : 'text-[#183c2c]'
        }`}
      >
        {title}
      </h2>
      {copy && (
        <p
          className={`body-copy mt-3.5 sm:mt-4 text-xs sm:text-sm md:text-base leading-relaxed ${
            light ? '!text-white/75' : 'text-[#5a6b5e]'
          }`}
        >
          {copy}
        </p>
      )}
    </div>
  );
}

const featureRibbonItems = [
  { num: '01', title: 'Product Intelligence', desc: 'Market analysis & pricing trends', glow: 'orange' as const },
  { num: '02', title: 'Trade Compliance', desc: 'APEDA, FSSAI & phytosanitary protocols', glow: 'green' as const },
  { num: '03', title: 'Country Opportunities', desc: 'Targeted global market mapping', glow: 'orange' as const },
  { num: '04', title: 'Buyer–Supplier Network', desc: 'Direct farm clusters & vetted sources', glow: 'green' as const },
  { num: '05', title: 'End-to-End Coordination', desc: 'Port clearance & reefer cold transit', glow: 'orange' as const },
];

const ribbonHalfItems = [...featureRibbonItems, ...featureRibbonItems];

function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[calc(100svh-76px)] md:min-h-[calc(100svh-112px)] flex-col justify-between overflow-hidden bg-[#071320] text-white"
    >
      {/* Background Video Layer */}
      <div className="absolute inset-0 -z-30 overflow-hidden">
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

      {/* Navy gradient overlays */}
      <div className="pointer-events-none absolute inset-0 -z-20 bg-gradient-to-b from-[#061424]/55 via-[#081a2f]/30 to-[#050f1a]/70" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(6,20,36,0.15)_0%,rgba(5,15,26,0.5)_100%)]" />
      <div className="pointer-events-none absolute bottom-0 inset-x-0 h-24 -z-10 bg-gradient-to-t from-[#050e18]/40 to-transparent" />

      {/* Main Hero Content */}
      <div className="wrap relative my-auto flex flex-1 flex-col items-center justify-center px-4 pt-10 pb-8 text-center sm:pt-14 sm:pb-10 md:pt-16 md:pb-12">
        <div className="mx-auto flex max-w-[920px] flex-col items-center reveal">
          {/* Live Global Logistics Badge */}
          <div className="mb-4 inline-flex max-w-[calc(100vw-32px)] items-center gap-2 rounded-full border border-[#D9A441]/40 bg-[#091b2e]/85 px-3 py-1 text-[9px] font-bold uppercase tracking-[.15em] text-[#D9A441] backdrop-blur-md shadow-md sm:gap-2.5 sm:px-4 sm:py-1.5 sm:text-[11px] sm:tracking-[.22em]">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#10b981] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#10b981]" />
            </span>
            <span className="whitespace-nowrap">Agricultural Sourcing · International Trade</span>
          </div>

          <p className="mb-3 text-[13px] font-bold tracking-[.26em] text-[#D9A441] drop-shadow-md sm:text-[14px]">
            KRISHI SARTHAK VENTURES LLP
          </p>

          <h1 className="font-display max-w-[880px] text-[clamp(2.75rem,5.6vw,5.2rem)] font-medium leading-[1.03] tracking-[-.038em] text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)]">
            Global Trade
            <br />
            <em className="font-normal text-[#D9A441] italic drop-shadow-[0_2px_14px_rgba(217,164,65,0.4)]">
              Solutions
            </em>
          </h1>

          <p className="mt-4 text-base font-semibold tracking-wide text-[#f4dfb5] drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] sm:text-lg md:text-xl">
            Rooted in trust. Connected across international borders.
          </p>

          <p className="mt-3.5 max-w-[700px] text-[15px] leading-relaxed text-white/95 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] sm:text-[16px] md:text-[17px]">
            Connecting businesses with global markets through verified product intelligence,
            international trade expertise, reliable sourcing, and end-to-end export coordination.
          </p>

          {/* Action Buttons Centered */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
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

      {/* Bottom Feature Ribbon */}
      <div className="relative z-10 w-full overflow-hidden border-t border-white/10 bg-transparent py-2.5 sm:py-3 select-none">
        <div className="w-full overflow-hidden no-scrollbar [mask-image:linear-gradient(to_right,transparent,black_28px,black_calc(100%-28px),transparent)] sm:[mask-image:linear-gradient(to_right,transparent,black_60px,black_calc(100%-60px),transparent)]">
          <div className="animate-ribbon-scroll flex items-center">
            <div className="flex shrink-0 items-center gap-2.5 sm:gap-3.5 pr-2.5 sm:pr-3.5">
              {ribbonHalfItems.map((item, idx) => (
                <GlowCard
                  key={`ribbon-h1-${item.num}-${idx}`}
                  customSize
                  glowColor={item.glow}
                  className="!grid-rows-1 flex w-[215px] sm:w-[240px] md:w-[265px] shrink-0 flex-col justify-between rounded-lg border border-white/15 bg-[#071524]/40 backdrop-blur-md p-2.5 sm:p-3 text-left shadow-lg transition-all duration-300 hover:border-[#D9A441]/60 hover:bg-[#071524]/60 min-h-[74px] sm:min-h-[78px] md:min-h-[82px]"
                >
                  <div>
                    <div className="mb-1 flex items-center gap-1.5">
                      <span className="rounded border border-[#D9A441]/40 bg-[#D9A441]/20 px-1.5 py-0.2 font-mono text-[9px] font-bold tracking-wider text-[#D9A441]">
                        {item.num}
                      </span>
                      <span className="h-px flex-1 bg-white/20" />
                    </div>
                    <h4 className="text-[11.5px] font-bold tracking-wide text-white leading-tight sm:text-xs drop-shadow-sm">
                      {item.title}
                    </h4>
                  </div>
                  <p className="-translate-y-0.5 text-[10.5px] leading-tight text-white/75 line-clamp-1 sm:line-clamp-2 drop-shadow-xs">
                    {item.desc}
                  </p>
                </GlowCard>
              ))}
            </div>

            <div
              className="flex shrink-0 items-center gap-2.5 sm:gap-3.5 pr-2.5 sm:pr-3.5"
              aria-hidden="true"
            >
              {ribbonHalfItems.map((item, idx) => (
                <GlowCard
                  key={`ribbon-h2-${item.num}-${idx}`}
                  customSize
                  glowColor={item.glow}
                  className="!grid-rows-1 flex w-[215px] sm:w-[240px] md:w-[265px] shrink-0 flex-col justify-between rounded-lg border border-white/15 bg-[#071524]/40 backdrop-blur-md p-2.5 sm:p-3 text-left shadow-lg transition-all duration-300 hover:border-[#D9A441]/60 hover:bg-[#071524]/60 min-h-[74px] sm:min-h-[78px] md:min-h-[82px]"
                >
                  <div>
                    <div className="mb-1 flex items-center gap-1.5">
                      <span className="rounded border border-[#D9A441]/40 bg-[#D9A441]/20 px-1.5 py-0.2 font-mono text-[9px] font-bold tracking-wider text-[#D9A441]">
                        {item.num}
                      </span>
                      <span className="h-px flex-1 bg-white/20" />
                    </div>
                    <h4 className="text-[11.5px] font-bold tracking-wide text-white leading-tight sm:text-xs drop-shadow-sm">
                      {item.title}
                    </h4>
                  </div>
                  <p className="-translate-y-0.5 text-[10.5px] leading-tight text-white/75 line-clamp-1 sm:line-clamp-2 drop-shadow-xs">
                    {item.desc}
                  </p>
                </GlowCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CategorySection() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryItem | null>(null);

  return (
    <section id="categories" className="section-pad bg-[#f7f4eb]">
      <div className="wrap">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionIntro
            eyebrow="What we source"
            title="A considered range. A world of possibility."
            copy="Explore our core export-grade sourcing categories. Procured with precision, rigorous grading, and end-to-end cold-chain compliance for global destinations."
          />
          <div className="max-w-[320px] rounded-lg border border-[#ded8cb] bg-[#fbf9f2] p-4 text-xs leading-5 text-[#5e6d62] shadow-xs">
            <p className="flex items-center gap-2 font-bold text-[#183c2c]">
              <BadgeCheck size={18} className="text-[#D9A441] shrink-0" />
              APEDA &amp; Phytosanitary Sourced
            </p>
            <p className="mt-1.5 text-[11px] text-[#718074]">
              Direct farm cluster procurement, custom sizing calibration, private labeling, and
              reefer container stuffing upon request.
            </p>
          </div>
        </div>

        {/* 8 Categories Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((item) => {
            const categoryUrl = item.url || null;

            return (
              <article
                key={item.name}
                className="group card-line flex flex-col h-full bg-[#fbf9f2] border border-[#ddd8ca] hover:border-[#D9A441] transition-all duration-300 shadow-xs hover:shadow-xl hover:-translate-y-1.5 overflow-hidden rounded-lg"
              >
                <div className="relative h-[210px] w-full overflow-hidden bg-[#e8e2cf] shrink-0">
                  {categoryUrl ? (
                    <Link href={categoryUrl} className="block h-full w-full">
                      <img
                        src={item.image}
                        alt={`${item.name} sourcing category`}
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                      />
                    </Link>
                  ) : (
                    <img
                      src={item.image}
                      alt={`${item.name} sourcing category`}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#102c20]/80 via-[#102c20]/15 to-transparent pointer-events-none" />
                  <span className="absolute left-3.5 top-3.5 border border-white/40 bg-[#1d392d]/90 px-2.5 py-1 text-[9px] font-bold tracking-widest text-[#f5ebd2] backdrop-blur-xs">
                    CATEGORY {item.tag}
                  </span>
                  <span className="absolute right-3.5 top-3.5 border border-[#D9A441]/60 bg-[#D9A441] px-2 py-0.5 text-[9px] font-bold tracking-wider text-[#0a1826] backdrop-blur-xs shadow-xs">
                    {item.badge}
                  </span>
                  {categoryUrl ? (
                    <Link
                      href={categoryUrl}
                      className="absolute bottom-3 right-3 grid h-8 w-8 place-items-center rounded-full bg-white/90 text-[#1d392d] shadow-md transition-all group-hover:bg-[#D9A441] group-hover:text-[#0a1826] group-hover:scale-110"
                      aria-label={`View ${item.name} category page`}
                    >
                      <ArrowUpRight size={15} />
                    </Link>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setSelectedCategory(item)}
                      className="absolute bottom-3 right-3 grid h-8 w-8 place-items-center rounded-full bg-white/90 text-[#1d392d] shadow-md transition-all group-hover:bg-[#D9A441] group-hover:text-[#0a1826] group-hover:scale-110"
                      aria-label={`View ${item.name} specifications`}
                    >
                      <ArrowUpRight size={15} />
                    </button>
                  )}
                </div>

                <div className="p-5 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="font-display text-lg font-medium leading-snug text-[#1d392d] group-hover:text-[#967235] transition-colors line-clamp-1">
                      {categoryUrl ? (
                        <Link href={categoryUrl} className="hover:underline">
                          {item.name}
                        </Link>
                      ) : (
                        item.name
                      )}
                    </h3>
                    <p className="mt-1 text-[11px] font-semibold text-[#967235] tracking-wide line-clamp-1">
                      {item.subtitle}
                    </p>
                    <p className="mt-2.5 text-xs leading-5 text-[#6f7b70] line-clamp-3 min-h-[60px]">
                      {item.text}
                    </p>

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

                  <div className="mt-5 pt-3.5 border-t border-[#e8e2d4] flex items-center justify-between">
                    {categoryUrl ? (
                      <Link
                        href={categoryUrl}
                        className="btn-outline !py-0 !border-b-0 text-xs font-bold text-[#214c39] hover:text-[#967235] inline-flex items-center gap-1.5"
                      >
                        Explore category{' '}
                        <ArrowRight
                          size={13}
                          className="transition-transform group-hover:translate-x-1 text-[#D9A441]"
                        />
                      </Link>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setSelectedCategory(item)}
                        className="btn-outline !py-0 !border-b-0 text-xs font-bold text-[#214c39] hover:text-[#967235] inline-flex items-center gap-1.5"
                      >
                        View specifications{' '}
                        <ArrowRight
                          size={13}
                          className="transition-transform group-hover:translate-x-1 text-[#D9A441]"
                        />
                      </button>
                    )}
                    <Anchor
                      to="contact"
                      className="text-[10px] font-bold uppercase tracking-wider text-[#967235] hover:underline"
                    >
                      Inquire
                    </Anchor>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Modal for non-dedicated category specs */}
        {selectedCategory && (
          <div
            className="fixed inset-0 z-[60] grid place-items-center bg-[#122a1f]/80 p-4 backdrop-blur-xs"
            onClick={() => setSelectedCategory(null)}
            role="presentation"
          >
            <div
              className="relative w-full max-w-lg overflow-hidden bg-[#fbf9f2] shadow-2xl border border-[#ddd8ca] rounded-xl"
              role="dialog"
              aria-modal="true"
              aria-label={`${selectedCategory.name} specifications`}
              onClick={(e) => e.stopPropagation()}
            >
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
                    Key Commercial Grades &amp; Varieties
                  </h4>
                  <p className="mt-1 text-xs text-[#314537] font-medium leading-relaxed">
                    {selectedCategory.varieties}
                  </p>
                </div>

                <div className="rounded-lg bg-[#f4eee1] p-3.5 border border-[#e4decb]">
                  <h4 className="text-[10px] font-bold uppercase tracking-wider text-[#967235]">
                    Export Packaging &amp; Palletization
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

                <div className="pt-3 border-t border-[#e4dfd3] flex items-center justify-between gap-3">
                  <a
                    href={getWhatsAppProductUrl(selectedCategory.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md bg-[#25D366] px-3.5 py-2 text-xs font-bold text-[#0a1826] transition-colors hover:bg-[#20ba59]"
                  >
                    <MessageCircle size={14} />
                    WhatsApp
                  </a>
                  <Anchor
                    to="contact"
                    onClick={() => setSelectedCategory(null)}
                    className="btn-primary !py-2 !px-4 text-xs shrink-0"
                  >
                    Request Quote <ArrowRight size={14} />
                  </Anchor>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

/*
function Highlights() {
  const metrics = [
    {
      value: '10+',
      label: 'Years in Global Trade',
      desc: 'Extensive agricultural sourcing heritage and international trade coordination.',
      icon: Clock,
    },
    {
      value: '25+',
      label: 'Target Destination Ports',
      desc: 'Direct maritime trade corridors across GCC, Southeast Asia, Europe & Americas.',
      icon: Globe2,
    },
    {
      value: '1,500+',
      label: 'Producer & Trade Network',
      desc: 'Direct farm cluster partnerships, certified packhouses, and commercial buyers.',
      icon: Sprout,
    },
    {
      value: '3,000+',
      label: 'Consignments Handled',
      desc: 'Containerized reefer exports, bulk agricultural shipments, and dry cargo freight.',
      icon: Ship,
    },
  ];

  return (
    <section className="bg-[#e9e4d6] py-14 border-y border-[#d8d2c0]">
      <div className="wrap">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m) => {
            const Icon = m.icon;
            return (
              <div
                key={m.label}
                className="group relative rounded-xl border border-[#d5cebc] bg-[#fbf9f2] p-6 transition-all duration-300 hover:border-[#D9A441] hover:shadow-lg hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-10 w-10 place-items-center rounded-lg border border-[#D9A441]/30 bg-[#f4eee1] text-[#967235]">
                    <Icon size={19} />
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#9b865b]">
                    Export Pillar
                  </span>
                </div>
                <p className="font-display mt-5 text-4xl font-medium text-[#183c2c] group-hover:text-[#967235] transition-colors">
                  {m.value}
                </p>
                <p className="mt-1.5 text-xs font-bold uppercase tracking-wider text-[#214c39]">
                  {m.label}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-[#68776b]">{m.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-[#d8d2c0] pt-4 text-center sm:flex-row sm:text-left text-[11px] text-[#718074]">
          <span className="flex items-center gap-2 font-medium text-[#214c39]">
            <BadgeCheck size={15} className="text-[#D9A441] shrink-0" />
            Verified Indian Agricultural Sourcing &amp; International Port Logistics
          </span>
          <span className="text-[#887e6b]">
            Custom grade sorting, packhouse cold-chain, and phytosanitary certificates provided.
          </span>
        </div>
      </div>
    </section>
  );
}
*/

function ProductCollection() {
  const [selectedProduct, setSelectedProduct] = useState<DetailedProductItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<
    'all' | 'Fresh Produce' | 'Staples & Grains' | 'Industrial Minerals'
  >('all');

  const filteredProducts = detailedProducts.filter((p) =>
    activeFilter === 'all' ? true : p.category === activeFilter
  );

  return (
    <section id="products" className="section-pad bg-[#fbf9f2]">
      <div className="wrap">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionIntro
            eyebrow="Product catalogue"
            title="Our major import-export grade products"
            copy="Every consignment is selected for optimal quality, uniform caliper sizing, robust shelf life, and international compliance. Share your destination port and required tonnage."
          />

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5 rounded-lg border border-[#ded7c7] bg-[#f4eee1] p-1.5 text-xs">
            {(
              [
                ['all', 'All Products (8)'],
                ['Fresh Produce', 'Fresh Produce (5)'],
                ['Staples & Grains', 'Grains & Staples (2)'],
                ['Industrial Minerals', 'Minerals (1)'],
              ] as const
            ).map(([key, label]) => (
              <button
                key={key}
                type="button"
                onClick={() => setActiveFilter(key)}
                className={`rounded-md px-3 py-1.5 text-xs font-bold transition-all ${
                  activeFilter === key
                    ? 'bg-[#183c2c] text-[#f7f4eb] shadow-xs'
                    : 'text-[#506154] hover:text-[#183c2c]'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredProducts.map((p, i) => (
            <article
              key={p.name}
              className="group flex flex-col h-full rounded-xl border border-[#ded8cb] bg-[#f7f4eb] transition-all duration-300 hover:border-[#D9A441] hover:bg-white hover:shadow-xl hover:-translate-y-1.5 overflow-hidden"
            >
              {/* Image Box */}
              <div className="relative h-[220px] w-full overflow-hidden bg-[#e8e1cf] shrink-0">
                <img
                  src={p.image}
                  alt={`${p.name} export grade`}
                  className={`h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-106 ${
                    p.key === 'rice' ? 'object-bottom' : ''
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#102c20]/80 via-transparent to-black/20 pointer-events-none" />

                {/* Top Badges */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                  <span className="rounded-sm border border-white/30 bg-[#1d392d]/90 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[#f5ebd2] backdrop-blur-xs">
                    {p.category}
                  </span>
                  <span className="rounded-sm border border-[#D9A441]/70 bg-[#D9A441] px-2 py-0.5 text-[9px] font-bold text-[#0a1826]">
                    HS: {p.hsCode}
                  </span>
                </div>

                {/* Index & Detail button */}
                <span className="absolute bottom-3 left-3 text-[10px] font-mono font-bold tracking-wider text-white/90">
                  REF 0{i + 1}
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedProduct(p)}
                  className="absolute right-3 bottom-3 grid h-8 w-8 place-items-center rounded-full bg-white/90 text-[#183c2c] shadow-md transition-all group-hover:bg-[#D9A441] group-hover:text-[#0a1826] group-hover:scale-110"
                  aria-label={`View ${p.name} full specifications`}
                >
                  <ArrowUpRight size={15} />
                </button>
              </div>

              {/* Card Body */}
              <div className="flex flex-col flex-1 p-5 justify-between">
                <div>
                  <h3 className="font-display text-xl font-medium text-[#183c2c] group-hover:text-[#967235] transition-colors">
                    {p.name}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#5c6e61] line-clamp-2 min-h-[36px]">
                    {p.text}
                  </p>

                  <div className="mt-3.5 rounded-md border border-[#e4decb] bg-[#f4eee1] p-2 text-[10.5px] leading-tight text-[#455649]">
                    <span className="font-bold text-[#214c39]">Key Grades: </span>
                    <span className="line-clamp-1">{p.varieties}</span>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="mt-4 pt-3.5 border-t border-[#e8e2d4] flex items-center justify-between">
                  {p.hasDetailPage && p.detailUrl ? (
                    <Link
                      href={p.detailUrl}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#214c39] hover:text-[#967235] transition-colors"
                    >
                      Specifications{' '}
                      <ArrowRight
                        size={12}
                        className="text-[#D9A441] transition-transform group-hover:translate-x-1"
                      />
                    </Link>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setSelectedProduct(p)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#214c39] hover:text-[#967235] transition-colors"
                    >
                      Specifications{' '}
                      <ArrowRight
                        size={12}
                        className="text-[#D9A441] transition-transform group-hover:translate-x-1"
                      />
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={() => setSelectedProduct(p)}
                    className="text-[10.5px] font-bold uppercase tracking-wider text-[#967235] hover:underline"
                  >
                    Quick Specs
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-12 rounded-xl border border-[#ded8cb] bg-[#f4eee1] p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <span className="eyebrow">Custom Trade Enquiries</span>
            <h3 className="font-display mt-2 text-2xl text-[#183c2c]">
              Need a bespoke agricultural origin or custom packaging?
            </h3>
            <p className="mt-1.5 text-xs text-[#5f7063] max-w-xl">
              We source specialized varieties, container palletization, private labeling, and bulk
              liner packaging to exact overseas buyer specifications.
            </p>
          </div>
          <Anchor to="contact" className="btn-primary shrink-0">
            Discuss Sourcing Requirements <ArrowRight size={15} />
          </Anchor>
        </div>

        {/* Interactive Full Specification Modal */}
        {selectedProduct && (
          <div
            className="fixed inset-0 z-[60] grid place-items-center bg-[#122a1f]/80 p-4 backdrop-blur-xs"
            onClick={() => setSelectedProduct(null)}
            role="presentation"
          >
            <div
              className="relative w-full max-w-lg overflow-hidden bg-[#fbf9f2] shadow-2xl border border-[#ddd8ca] rounded-xl"
              role="dialog"
              aria-modal="true"
              aria-label={`${selectedProduct.name} specifications`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-[220px] w-full overflow-hidden bg-[#183c2c]">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#102c20]/90 via-black/30 to-transparent" />
                <button
                  type="button"
                  onClick={() => setSelectedProduct(null)}
                  className="absolute right-3.5 top-3.5 grid h-8 w-8 place-items-center rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors"
                  aria-label="Close product modal"
                >
                  <X size={16} />
                </button>
                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <div className="flex items-center gap-2">
                    <span className="border border-[#D9A441]/60 bg-[#D9A441] px-2 py-0.5 text-[9px] font-bold tracking-wider text-[#0a1826]">
                      HS: {selectedProduct.hsCode}
                    </span>
                    <span className="border border-white/30 bg-black/40 px-2 py-0.5 text-[9px] font-bold tracking-wider text-[#f5ebd2]">
                      {selectedProduct.category}
                    </span>
                  </div>
                  <h3 className="font-display mt-2 text-2xl text-[#f7f4eb] leading-tight">
                    {selectedProduct.name}
                  </h3>
                  <p className="text-xs text-white/80 mt-0.5">
                    Shelf Life: {selectedProduct.shelfLife}
                  </p>
                </div>
              </div>

              <div className="p-6 space-y-4 max-h-[60vh] overflow-y-auto">
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-wider text-[#967235]">
                    Product Overview
                  </h4>
                  <p className="mt-1 text-xs leading-relaxed text-[#526457]">
                    {selectedProduct.text}
                  </p>
                </div>

                <div className="rounded-lg bg-[#f4eee1] p-3.5 border border-[#e4decb]">
                  <h4 className="text-[10px] font-bold uppercase tracking-wider text-[#967235]">
                    Available Varieties &amp; Commercial Grades
                  </h4>
                  <p className="mt-1 text-xs text-[#314537] font-medium leading-relaxed">
                    {selectedProduct.varieties}
                  </p>
                </div>

                <div className="rounded-lg bg-[#f4eee1] p-3.5 border border-[#e4decb]">
                  <h4 className="text-[10px] font-bold uppercase tracking-wider text-[#967235]">
                    Export Packaging &amp; Container Stuffing
                  </h4>
                  <p className="mt-1 text-xs text-[#314537] font-medium leading-relaxed">
                    {selectedProduct.packaging}
                  </p>
                </div>

                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-wider text-[#967235]">
                    Primary Target Markets &amp; Trade Corridors
                  </h4>
                  <p className="mt-1 text-xs text-[#526457] leading-relaxed">
                    {selectedProduct.markets}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#e4dfd3] flex items-center justify-between gap-3">
                  <a
                    href={getWhatsAppProductUrl(selectedProduct.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md bg-[#25D366] px-4 py-2 text-xs font-bold text-[#0a1826] transition-colors hover:bg-[#20ba59]"
                  >
                    <MessageCircle size={15} />
                    WhatsApp Sourcing
                  </a>
                  <Anchor
                    to="contact"
                    onClick={() => setSelectedProduct(null)}
                    className="btn-primary !py-2 !px-4 text-xs shrink-0"
                  >
                    Request Spec Sheet <ArrowRight size={14} />
                  </Anchor>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function About() {
  const pillars = [
    {
      title: 'Farm-to-Port Quality Control',
      desc: 'Sorting, uniform caliper sizing, and post-harvest pre-cooling at regional collection centers.',
      icon: ShieldCheck,
    },
    {
      title: 'Phytosanitary & Trade Compliance',
      desc: 'Adherence to APEDA, FSSAI, pest-free certification, and target country quarantine protocols.',
      icon: BadgeCheck,
    },
    {
      title: 'Monitored Reefer Cold Chain',
      desc: 'Cold-chain integrity from packhouse to vessel holds via data-logged temperature telemetry.',
      icon: ThermometerSnowflake,
    },
    {
      title: 'Direct Agricultural Grower Belts',
      desc: 'Ethical sourcing from verified farmer collectives in Nashik, Kashmir, Punjab & Tamil Nadu.',
      icon: Sprout,
    },
  ];

  return (
    <section id="about" className="section-pad bg-[#e9e4d6] border-y border-[#d8d2c0]">
      <div className="wrap grid items-center gap-12 lg:grid-cols-[.95fr_1.05fr] lg:gap-16">
        {/* Left Side: Visual Showcase */}
        <div className="relative image-zoom">
          <div className="absolute -left-3 -top-3 h-24 w-24 border-l-2 border-t-2 border-[#D9A441]" />
          <div className="overflow-hidden rounded-xl border border-[#d5cebc] shadow-xl">
            <img
              src={heroImage}
              alt="Agricultural harvest and sourcing operations of Krishi Sarthak Ventures"
              className="h-[440px] w-full object-cover md:h-[530px]"
            />
          </div>

          {/* Floating Badge Over Image */}
          <div className="absolute bottom-5 left-5 right-5 sm:right-auto sm:max-w-[320px] rounded-lg border border-white/30 bg-[#fbf9f2]/95 p-5 shadow-2xl backdrop-blur-md">
            <span className="eyebrow">Our Mission</span>
            <p className="font-display mt-2 text-lg leading-snug text-[#183c2c]">
              Connecting Indian Agricultural Abundance with Discerning Global Buyers
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5 text-[9.5px] font-bold uppercase tracking-wider text-[#967235]">
              <span className="rounded bg-[#f4eee1] px-2 py-0.5 border border-[#e2dccb]">
                APEDA Aligned
              </span>
              <span className="rounded bg-[#f4eee1] px-2 py-0.5 border border-[#e2dccb]">
                FSSAI Certified
              </span>
              <span className="rounded bg-[#f4eee1] px-2 py-0.5 border border-[#e2dccb]">
                Reefer Ready
              </span>
            </div>
          </div>
        </div>

        {/* Right Side: Narrative & Pillars */}
        <div>
          <SectionIntro
            eyebrow="About the company"
            title="Your trusted partner in international agricultural trade"
          />

          <p className="mt-5 text-sm sm:text-base leading-relaxed text-[#4f6053]">
            KRISHI SARTHAK VENTURES LLP is an export-oriented enterprise committed to delivering
            premium-grade agricultural commodities, fresh fruits, vegetables, frozen produce, and
            industrial minerals to international markets.
          </p>

          <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#5c6e61]">
            We bridge domestic farm clusters with global importers through transparent sourcing,
            rigorous quality grading, cold-chain integrity, and end-to-end trade coordination.
          </p>

          {/* 4 Pillars 2x2 Grid */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {pillars.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-lg border border-[#d5cebc] bg-[#fbf9f2] p-4 shadow-xs"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="grid h-8 w-8 place-items-center rounded-md border border-[#D9A441]/40 bg-[#f4eee1] text-[#967235]">
                      <Icon size={16} />
                    </span>
                    <h4 className="text-xs font-bold text-[#183c2c] leading-tight">
                      {item.title}
                    </h4>
                  </div>
                  <p className="mt-2 text-[11px] leading-relaxed text-[#68776b]">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Anchor to="approach" className="btn-primary">
              Our Trade Workflow <ArrowRight size={15} />
            </Anchor>
            <Anchor
              to="contact"
              className="inline-flex items-center gap-2 border border-[#214c39] bg-transparent px-5 py-3 text-xs font-bold text-[#214c39] transition-colors hover:bg-[#214c39] hover:text-white"
            >
              Discuss Partnership
            </Anchor>
          </div>
        </div>
      </div>
    </section>
  );
}

function Compliance() {
  return (
    <section id="compliance" className="relative overflow-hidden bg-[#183c2c] py-16 text-[#f7f4eb]">
      {/* Background radial glow */}
      <div className="absolute -right-28 -top-36 h-96 w-96 rounded-full border border-white/[.07] pointer-events-none" />
      <div className="absolute -left-20 -bottom-28 h-80 w-80 rounded-full border border-white/[.05] pointer-events-none" />

      <div className="wrap relative">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <SectionIntro
            eyebrow="Trade readiness"
            title="Certifications, Licensure & Compliance"
            copy="International agricultural trade demands uncompromising adherence to global food safety, phytosanitary standards, and cross-border customs protocols."
            light
          />
          <div className="max-w-[320px] rounded-lg border border-white/20 bg-white/[.06] p-4 text-xs text-white/75 backdrop-blur-xs">
            <p className="flex items-center gap-2 font-bold text-[#D9A441]">
              <ShieldCheck size={16} /> Strict Verification Process
            </p>
            <p className="mt-1 text-[11px] text-white/65">
              Consignments are inspected and certified prior to stuffing and customs clearance.
            </p>
          </div>
        </div>

        {/* 3 Categories Showcase */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {complianceCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.title}
                className="rounded-xl border border-white/15 bg-white/[.05] p-6 backdrop-blur-xs transition-all hover:border-[#D9A441]/50 hover:bg-white/[.08]"
              >
                <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                  <span className="grid h-10 w-10 place-items-center rounded-lg border border-[#D9A441]/60 bg-[#D9A441]/20 text-[#D9A441]">
                    <Icon size={20} />
                  </span>
                  <h3 className="font-display text-lg text-white font-medium">
                    {cat.title}
                  </h3>
                </div>

                <div className="mt-5 space-y-4">
                  {cat.items.map((item) => (
                    <div key={item.code} className="flex items-start gap-3">
                      <span className="mt-0.5 rounded border border-[#D9A441]/40 bg-[#D9A441]/20 px-1.5 py-0.5 font-mono text-[9px] font-bold text-[#D9A441] shrink-0">
                        {item.code}
                      </span>
                      <div>
                        <p className="text-xs font-bold text-white/95">{item.name}</p>
                        <p className="mt-0.5 text-[11px] leading-relaxed text-white/60">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-8 text-center text-[11px] text-white/50">
          Statutory registrations, export certificates of origin, and phytosanitary clearance
          documents are issued per consignment in compliance with DGFT and destination port
          regulations.
        </p>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="section-pad bg-[#f7f4eb]">
      <div className="wrap">
        <SectionIntro
          eyebrow="How we help"
          title="Comprehensive global trade services"
          copy="End-to-end export-import management shaped around your commodity specifications, volume commitments, and destination port requirements."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:gap-8">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <article
                key={service.name}
                className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-[#ddd8ca] bg-[#fbf9f2] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#D9A441] hover:bg-white hover:shadow-xl md:p-8"
              >
                <div className="absolute inset-x-0 top-0 h-1.5 bg-transparent transition-colors duration-300 group-hover:bg-[#D9A441]" />

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
                  <p className="mt-3 text-xs sm:text-[13.5px] leading-relaxed text-[#5c6e61]">
                    {service.text}
                  </p>

                  {/* Service deliverables pills */}
                  <div className="mt-5 space-y-1.5">
                    {service.deliverables.map((d) => (
                      <div
                        key={d}
                        className="flex items-center gap-2 text-xs font-medium text-[#384c3f]"
                      >
                        <Check size={13} className="text-[#D9A441] shrink-0" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-[#ede7d8] pt-5">
                  <Anchor
                    to="contact"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#214c39] transition-all duration-200 group-hover:text-[#967235] group-hover:translate-x-1"
                  >
                    <span>Consult on this service</span>
                    <ArrowRight
                      size={13}
                      className="text-[#D9A441] transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </Anchor>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#9a865b]">
                    Export Service
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
  return (
    <section className="section-pad bg-[#e9e4d6] border-y border-[#d8d2c0]">
      <div className="wrap">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <SectionIntro
            eyebrow="Global supply chain corridors"
            title="Strategic Shipping Lanes & Trade Corridors"
            copy="Operating across India's premier export gateways with active temperature monitoring, pre-booking allocations, and fast-track phytosanitary clearance."
          />
          <span className="mb-2 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#7e715a]">
            <Ship size={16} className="text-[#D9A441]" /> Active Maritime Corridors
          </span>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {/* Card 1: Maritime Transit Lanes */}
          <div className="rounded-xl border border-[#d5cebc] bg-[#fbf9f2] p-6 md:p-8 shadow-xs">
            <div className="flex items-start justify-between border-b border-[#e5decb] pb-4">
              <div>
                <h3 className="font-display text-2xl text-[#183c2c]">
                  Primary Maritime Export Lanes
                </h3>
                <p className="mt-1 text-xs text-[#718074]">
                  Key sailing corridors from JNPT &amp; Mundra Ports to overseas destinations
                </p>
              </div>
              <span className="grid h-10 w-10 place-items-center rounded-lg border border-[#D9A441]/40 bg-[#f4eee1] text-[#967235]">
                <Container size={20} />
              </span>
            </div>

            <div className="mt-6 space-y-3.5">
              {shippingCorridors.map((c) => (
                <div
                  key={c.destination}
                  className="rounded-lg border border-[#e8e2d4] bg-[#f7f4eb] p-3.5 transition-colors hover:border-[#D9A441]"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#183c2c]">{c.destination}</span>
                    <span className="rounded bg-[#214c39] px-2 py-0.5 text-[10px] font-bold text-[#f7f4eb]">
                      {c.transit}
                    </span>
                  </div>
                  <div className="mt-1.5 flex flex-wrap items-center justify-between text-[11px] text-[#6b7a6d]">
                    <span>Origin: {c.origin}</span>
                    <span className="text-[#967235] font-medium">{c.type}</span>
                  </div>
                  <p className="mt-1 text-[10.5px] text-[#869588]">
                    Primary Cargo: {c.cargo}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: Sourcing Portfolio Distribution */}
          <div className="rounded-xl border border-[#d5cebc] bg-[#fbf9f2] p-6 md:p-8 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between border-b border-[#e5decb] pb-4">
                <div>
                  <h3 className="font-display text-2xl text-[#183c2c]">
                    Sourcing Distribution &amp; Port Strategy
                  </h3>
                  <p className="mt-1 text-xs text-[#718074]">
                    Strategic agricultural commodity portfolio focus
                  </p>
                </div>
                <span className="grid h-10 w-10 place-items-center rounded-lg border border-[#D9A441]/40 bg-[#f4eee1] text-[#967235]">
                  <Globe2 size={20} />
                </span>
              </div>

              {/* Allocation bars */}
              <div className="mt-6 space-y-4">
                {[
                  { label: 'Fresh Perishables (Fruits & Veg)', pct: 35, color: '#214c39' },
                  { label: 'Frozen Vegetables (IQF Cold Chain)', pct: 25, color: '#10b981' },
                  { label: 'Spices, Herbs & Dehydrated Powders', pct: 20, color: '#D9A441' },
                  { label: 'Grains, Pulses & Industrial Minerals', pct: 20, color: '#bb8160' },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-[#214c39]">{item.label}</span>
                      <span className="font-mono font-bold text-[#967235]">{item.pct}%</span>
                    </div>
                    <div className="mt-1.5 h-2.5 w-full overflow-hidden rounded-full bg-[#e8e2d4]">
                      <div
                        className="h-full rounded-full transition-all duration-1000"
                        style={{ width: `${item.pct}%`, backgroundColor: item.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Regional Belts */}
              <div className="mt-8 rounded-lg border border-[#e4decb] bg-[#f4eee1] p-4">
                <h4 className="text-xs font-bold text-[#183c2c]">
                  Primary Indian Farm Clusters &amp; Hubs
                </h4>
                <div className="mt-3 flex flex-wrap gap-2 text-[11px] text-[#425446]">
                  <span className="rounded bg-white px-2.5 py-1 border border-[#ded8cb]">
                    Nashik, Maharashtra (Onions &amp; Grapes)
                  </span>
                  <span className="rounded bg-white px-2.5 py-1 border border-[#ded8cb]">
                    Kashmir (Export Apples)
                  </span>
                  <span className="rounded bg-white px-2.5 py-1 border border-[#ded8cb]">
                    Pollachi, Tamil Nadu (Coconuts)
                  </span>
                  <span className="rounded bg-white px-2.5 py-1 border border-[#ded8cb]">
                    Punjab &amp; Haryana (Basmati Rice)
                  </span>
                  <span className="rounded bg-white px-2.5 py-1 border border-[#ded8cb]">
                    Gujarat &amp; Rajasthan (Spices &amp; Gypsum)
                  </span>
                </div>
              </div>
            </div>

            <p className="mt-6 text-[10px] text-[#7e8779] border-t border-[#e8e2d4] pt-3">
              Corridor transit durations reflect typical shipping line schedules and are subject to
              weather, port congestion, and seasonal scheduling.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Approach() {
  const steps = [
    {
      step: '01',
      title: 'Requirement & Market Intelligence',
      text: 'Analyzing buyer specifications, sizing tolerances, seasonal harvest calendars, target market price parity, and importing country phytosanitary guidelines.',
      icon: Compass,
    },
    {
      step: '02',
      title: 'Grading & Cold-Chain Preparation',
      text: 'Procurement from verified farmer clusters, Sortex optical grading, caliper sorting, pre-cooling to target pulp temperature, and export palletization.',
      icon: ShieldCheck,
    },
    {
      step: '03',
      title: 'Regulatory Clearances & Sealing',
      text: 'Phytosanitary inspection, Certificate of Origin issuance, APEDA compliance, export customs documentation, and supervised container stuffing.',
      icon: PackageCheck,
    },
    {
      step: '04',
      title: 'Reefer Transit & Port Delivery',
      text: 'Coordination with premier maritime lines, continuous reefer telemetry monitoring, bill of lading documentation, and destination clearance support.',
      icon: Ship,
    },
  ];

  return (
    <section id="approach" className="section-pad bg-[#fbf9f2]">
      <div className="wrap">
        <SectionIntro
          eyebrow="A clear process"
          title="From First Inquiry to Port Delivery"
          copy="A systematic four-stage trade execution workflow designed to minimize transit risk, preserve cargo freshness, and ensure flawless documentation."
        />

        {/* 4 Connected Stages Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={s.step}
                className="group relative flex flex-col justify-between rounded-xl border border-[#ddd8ca] bg-[#f7f4eb] p-6 transition-all duration-300 hover:border-[#D9A441] hover:bg-white hover:shadow-xl hover:-translate-y-1.5"
              >
                {/* Step Indicator Header */}
                <div>
                  <div className="flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-lg border border-[#D9A441]/40 bg-[#f4eee1] text-[#967235] group-hover:bg-[#214c39] group-hover:text-[#D9A441] transition-colors">
                      <Icon size={22} />
                    </span>
                    <span className="font-display text-3xl font-light text-[#cfc7b4] group-hover:text-[#D9A441] transition-colors">
                      {s.step}
                    </span>
                  </div>

                  <h3 className="font-display mt-5 text-xl font-medium text-[#183c2c] group-hover:text-[#967235] transition-colors">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-xs leading-relaxed text-[#5c6e61]">{s.text}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#e8e2d4] text-[10px] font-bold uppercase tracking-wider text-[#9b865b]">
                  Phase {idx + 1} of 4
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function News() {
  const [activeArticle, setActiveArticle] = useState<(typeof blogs)[0] | null>(null);

  return (
    <section id="news" className="section-pad bg-[#e9e4d6] border-y border-[#d8d2c0]">
      <div className="wrap">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <SectionIntro
            eyebrow="Notes from the trade"
            title="Trade Insights &amp; Market Intelligence"
            copy="Sourcing perspectives, cold-chain logistics protocols, and regulatory updates from KRISHI SARTHAK VENTURES LLP's export desk."
          />
          <span className="mb-2 text-xs font-bold uppercase tracking-wider text-[#8b7959]">
            Trade Insights Desk
          </span>
        </div>

        <div className="mt-11 grid gap-6 md:grid-cols-3">
          {blogs.map((b) => (
            <article
              key={b.title}
              className="group flex flex-col justify-between overflow-hidden rounded-xl border border-[#d5cebc] bg-[#fbf9f2] shadow-xs transition-all duration-300 hover:border-[#D9A441] hover:shadow-xl hover:-translate-y-1.5"
            >
              <div>
                <div className="image-zoom relative h-[210px] overflow-hidden bg-[#e8e1cf]">
                  <img
                    src={b.image}
                    alt={b.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#132d21]/70 via-transparent to-black/20" />
                  <span className="absolute bottom-3 left-3 rounded-sm border border-white/30 bg-[#1d392d]/90 px-2.5 py-1 text-[9.5px] font-bold uppercase tracking-wider text-[#f5ebd2]">
                    {b.tag}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between text-[11px] text-[#9b7535] font-semibold">
                    <span>{b.date}</span>
                    <span>{b.readTime}</span>
                  </div>

                  <h3 className="font-display mt-3 text-xl font-medium leading-snug text-[#183c2c] group-hover:text-[#967235] transition-colors">
                    {b.title}
                  </h3>
                  <p className="mt-2.5 text-xs leading-relaxed text-[#6f7b70] line-clamp-3">
                    {b.text}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  type="button"
                  onClick={() => setActiveArticle(b)}
                  className="btn-outline !py-0 !border-b-0 text-xs font-bold text-[#214c39] hover:text-[#967235] inline-flex items-center gap-1.5"
                >
                  Read trade note{' '}
                  <ArrowRight
                    size={13}
                    className="transition-transform group-hover:translate-x-1 text-[#D9A441]"
                  />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Article Reader Modal */}
        {activeArticle && (
          <div
            className="fixed inset-0 z-[60] grid place-items-center bg-[#122a1f]/80 p-4 backdrop-blur-xs"
            onClick={() => setActiveArticle(null)}
            role="presentation"
          >
            <div
              className="relative w-full max-w-lg overflow-hidden bg-[#fbf9f2] shadow-2xl border border-[#ddd8ca] rounded-xl"
              role="dialog"
              aria-modal="true"
              aria-label={activeArticle.title}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-[220px] w-full overflow-hidden bg-[#183c2c]">
                <img
                  src={activeArticle.image}
                  alt={activeArticle.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#102c20]/90 via-black/40 to-transparent" />
                <button
                  type="button"
                  onClick={() => setActiveArticle(null)}
                  className="absolute right-3.5 top-3.5 grid h-8 w-8 place-items-center rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors"
                  aria-label="Close article modal"
                >
                  <X size={16} />
                </button>
                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <span className="border border-[#D9A441]/60 bg-[#D9A441] px-2 py-0.5 text-[9px] font-bold tracking-wider text-[#0a1826]">
                    {activeArticle.tag} · {activeArticle.readTime}
                  </span>
                  <h3 className="font-display mt-2 text-xl sm:text-2xl text-[#f7f4eb] leading-tight">
                    {activeArticle.title}
                  </h3>
                </div>
              </div>

              <div className="p-6 space-y-4 max-h-[60vh] overflow-y-auto">
                <p className="text-xs sm:text-sm leading-relaxed text-[#3c4e41]">
                  {activeArticle.text}
                </p>
                <p className="text-xs sm:text-sm leading-relaxed text-[#526457]">
                  KRISHI SARTHAK VENTURES LLP continuously refines post-harvest protocols,
                  packaging material selections, and carrier schedules to maintain cargo integrity
                  throughout the maritime transit window.
                </p>
                <div className="rounded-lg bg-[#f4eee1] p-4 border border-[#e4decb]">
                  <h4 className="text-[10px] font-bold uppercase tracking-wider text-[#967235]">
                    Inquire on this topic
                  </h4>
                  <p className="mt-1 text-xs text-[#314537]">
                    Interested in specific packaging, reefer temperature graphs, or phytosanitary
                    protocols for this product category?
                  </p>
                </div>
                <div className="pt-2 border-t border-[#e4dfd3] flex items-center justify-between">
                  <Anchor
                    to="contact"
                    onClick={() => setActiveArticle(null)}
                    className="btn-primary !py-2.5 !px-5 text-xs"
                  >
                    Discuss Trade Requirements <ArrowRight size={14} />
                  </Anchor>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function GlobalPresence() {
  return (
    <section id="presence" className="relative overflow-hidden bg-[#183c2c] py-20 text-[#f7f4eb]">
      <div className="absolute -right-28 -top-48 h-[570px] w-[570px] rounded-full border border-white/[.08] pointer-events-none" />
      <div className="absolute -right-12 -top-32 h-[430px] w-[430px] rounded-full border border-white/[.08] pointer-events-none" />

      <div className="wrap relative grid items-center gap-12 lg:grid-cols-[.85fr_1.15fr]">
        <div>
          <SectionIntro
            eyebrow="A world of possibilities"
            title="Our International Trade Reach"
            copy="Expanding agricultural commerce across key global consumption centers — bridging Indian agricultural supply with international buyers."
            light
          />
          <p className="mt-6 max-w-lg text-xs leading-relaxed text-white/65">
            We actively coordinate export consignments to designated ports across the Gulf,
            Southeast Asia, the United Kingdom, and the European Union, with tailored customs
            clearance guidance.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Anchor
              to="contact"
              className="inline-flex items-center gap-2 border-b-2 border-[#D9A441] pb-1.5 text-xs font-bold text-[#D9A441] hover:text-[#f4dfb5] transition-colors"
            >
              Inquire for Destination Port <ArrowRight size={14} />
            </Anchor>
          </div>
        </div>

        {/* Regional Blocs Grid */}
        <div className="space-y-4">
          {targetRegions.map((r) => (
            <div
              key={r.region}
              className="rounded-xl border border-white/15 bg-white/[.05] p-5 backdrop-blur-xs transition-colors hover:border-[#D9A441]/50"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#D9A441]">
                  {r.region}
                </span>
                <span className="text-[10px] text-white/60">Key Ports: {r.ports}</span>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {r.countries.map((c) => (
                  <span
                    key={c}
                    className="rounded-md border border-white/15 bg-white/[.07] px-3 py-1 text-xs text-white/90"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Careers() {
  return (
    <section id="careers" className="bg-[#122e21] py-16 text-[#f7f4eb] border-y border-white/10">
      <div className="wrap flex flex-col justify-between gap-8 md:flex-row md:items-center">
        <div className="max-w-2xl">
          <span className="eyebrow !text-[#D9A441] before:!bg-[#D9A441]">
            Global Trade Partnership &amp; Careers
          </span>
          <h2 className="font-display mt-3 text-3xl md:text-4xl text-white">
            Partner With KRISHI SARTHAK VENTURES LLP
          </h2>
          <p className="mt-3 text-xs sm:text-sm leading-relaxed text-white/75">
            We welcome collaboration with regional farmer producer organizations (FPOs), packhouse
            operators, international trade consultants, and overseas distribution partners looking
            to establish reliable export trade lanes.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 shrink-0">
          <Anchor
            to="contact"
            className="inline-flex items-center gap-2 bg-[#D9A441] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#0a1826] transition-all hover:bg-[#e6b450] shadow-md hover:-translate-y-0.5"
          >
            Submit Trade Proposal <ArrowUpRight size={15} />
          </Anchor>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const router = useRouter();
  const [success, setSuccess] = useState(false);
  const [formError, setFormError] = useState('');
  const [productParam, setProductParam] = useState('');

  useEffect(() => {
    if (router?.query?.product) {
      setProductParam(router.query.product as string);
    }
  }, [router?.query?.product]);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) {
      setFormError('Please complete all required fields with valid details.');
      return;
    }
    setFormError('');
    setSuccess(true);
    form.reset();
  };

  const productOptions = [
    'Fresh Fruits & Vegetables',
    'Frozen Vegetables (IQF)',
    'Dehydrated Powders',
    'Spices & Herbs',
    'Pulses & Grains (Basmati Rice)',
    'Dry Fruits & Nuts',
    'Construction & Road Materials (Gypsum)',
    'Shipment & Freight Services',
    'Global Trade Consultancy',
  ];

  return (
    <section id="contact" className="section-pad bg-[#f7f4eb]">
      <div className="wrap">
        <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr]">
          {/* Left Info Column */}
          <div>
            <SectionIntro
              eyebrow="Let's talk business"
              title="Let's discuss your global trade requirements"
              copy="Have inquiries regarding export grade specifications, container availability, origin certifications, or maritime shipping rates? Our export desk is here to assist."
            />

            {/* SLA Commitment */}
            <div className="mt-6 rounded-lg border border-[#ded8cb] bg-[#fbf9f2] p-4 text-xs leading-relaxed text-[#5a6b5e]">
              <p className="flex items-center gap-2 font-bold text-[#183c2c]">
                <Clock size={16} className="text-[#D9A441] shrink-0" /> Fast Response SLA
              </p>
              <p className="mt-1 text-[11px] text-[#718074]">
                All commercial and technical inquiries are reviewed by our trade specialists within
                24 business hours. Formal quotations and spec sheets provided promptly.
              </p>
            </div>

            {/* Contact Channels */}
            <div className="mt-8 space-y-4">
              <a
                href={COMPANY_INFO.phoneTel}
                className="group flex items-center gap-4 rounded-lg border border-[#ded8cb] bg-[#fbf9f2] p-4 transition-all hover:border-[#D9A441] hover:shadow-md"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-[#D9A441]/40 bg-[#f4eee1] text-[#967235] group-hover:bg-[#214c39] group-hover:text-[#D9A441] transition-colors">
                  <Phone size={18} />
                </span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#9b865b]">
                    Export Phone Desk
                  </p>
                  <p className="mt-0.5 text-xs sm:text-sm font-semibold text-[#183c2c]">
                    {COMPANY_INFO.phonePlaceholder}
                  </p>
                </div>
              </a>

              <a
                href={COMPANY_INFO.emailMailto}
                className="group flex items-center gap-4 rounded-lg border border-[#ded8cb] bg-[#fbf9f2] p-4 transition-all hover:border-[#D9A441] hover:shadow-md"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-[#D9A441]/40 bg-[#f4eee1] text-[#967235] group-hover:bg-[#214c39] group-hover:text-[#D9A441] transition-colors">
                  <Mail size={18} />
                </span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#9b865b]">
                    Official Trade Email
                  </p>
                  <p className="mt-0.5 text-xs sm:text-sm font-semibold text-[#183c2c]">
                    {COMPANY_INFO.emailPlaceholder}
                  </p>
                </div>
              </a>

              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
                  'Hello, I am interested in sourcing agricultural products from KRISHI SARTHAK VENTURES LLP.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-lg border border-[#25D366]/40 bg-[#f2fdf6] p-4 transition-all hover:border-[#25D366] hover:shadow-md"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-[#25D366] text-white">
                  <MessageCircle size={18} />
                </span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#1e964b]">
                    WhatsApp Trade Desk (Direct)
                  </p>
                  <p className="mt-0.5 text-xs sm:text-sm font-semibold text-[#0a1826]">
                    Instant Spec Sheets &amp; Quotations
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4 rounded-lg border border-[#ded8cb] bg-[#fbf9f2] p-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-[#D9A441]/40 bg-[#f4eee1] text-[#967235]">
                  <MapPin size={18} />
                </span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#9b865b]">
                    Registered Office
                  </p>
                  <p className="mt-0.5 text-xs sm:text-sm font-medium text-[#214c39] leading-relaxed">
                    {COMPANY_INFO.addressPlaceholder}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="rounded-xl border border-[#ded8cb] bg-[#fbf9f2] p-6 md:p-9 shadow-sm">
            <div className="mb-6 border-b border-[#e8e2d4] pb-4">
              <h3 className="font-display text-2xl text-[#183c2c]">
                Submit Your Trade Inquiry
              </h3>
              <p className="mt-1 text-xs text-[#7a8579]">
                Provide your requirements below. Fields marked * are mandatory.
              </p>
            </div>

            {success && (
              <div
                role="status"
                className="mb-5 flex gap-3 rounded-lg border border-[#a8b69a] bg-[#edf2e8] p-4 text-xs leading-5 text-[#38543d]"
              >
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[#214c39]" />
                <div>
                  <strong>Inquiry Received (Preview Mode).</strong> Thank you for your interest.
                  Our trade desk will review your specifications and contact you shortly.
                </div>
              </div>
            )}

            {formError && (
              <p
                role="alert"
                className="mb-4 rounded-md border border-red-200 bg-red-50 p-3 text-xs text-red-800"
              >
                {formError}
              </p>
            )}

            <form onSubmit={submit} className="grid gap-4 sm:grid-cols-2">
              <label className="block text-xs font-bold text-[#34483b]">
                Full Name *
                <input
                  required
                  name="name"
                  autoComplete="name"
                  className="mt-1.5 w-full rounded-md border border-[#d9d4c7] bg-white px-3.5 py-2.5 text-xs font-normal outline-none focus:border-[#214c39] focus:ring-1 focus:ring-[#214c39]"
                  placeholder="Your full name"
                />
              </label>

              <label className="block text-xs font-bold text-[#34483b]">
                Company / Organization
                <input
                  name="company"
                  autoComplete="organization"
                  className="mt-1.5 w-full rounded-md border border-[#d9d4c7] bg-white px-3.5 py-2.5 text-xs font-normal outline-none focus:border-[#214c39] focus:ring-1 focus:ring-[#214c39]"
                  placeholder="Company name"
                />
              </label>

              <label className="block text-xs font-bold text-[#34483b]">
                Email Address *
                <input
                  required
                  type="email"
                  name="email"
                  autoComplete="email"
                  className="mt-1.5 w-full rounded-md border border-[#d9d4c7] bg-white px-3.5 py-2.5 text-xs font-normal outline-none focus:border-[#214c39] focus:ring-1 focus:ring-[#214c39]"
                  placeholder="buyer@company.com"
                />
              </label>

              <label className="block text-xs font-bold text-[#34483b]">
                Phone / WhatsApp *
                <input
                  required
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  className="mt-1.5 w-full rounded-md border border-[#d9d4c7] bg-white px-3.5 py-2.5 text-xs font-normal outline-none focus:border-[#214c39] focus:ring-1 focus:ring-[#214c39]"
                  placeholder="+Country Code & Number"
                />
              </label>

              <label className="block text-xs font-bold text-[#34483b]">
                Destination Country / Port
                <input
                  name="country"
                  autoComplete="country-name"
                  className="mt-1.5 w-full rounded-md border border-[#d9d4c7] bg-white px-3.5 py-2.5 text-xs font-normal outline-none focus:border-[#214c39] focus:ring-1 focus:ring-[#214c39]"
                  placeholder="e.g. Jebel Ali, UAE / Dammam, KSA"
                />
              </label>

              <label className="block text-xs font-bold text-[#34483b]">
                Product or Service of Interest
                <select
                  name="interest"
                  defaultValue={
                    productParam
                      ? productOptions.find((o) =>
                          o.toLowerCase().includes(productParam.toLowerCase())
                        ) || productOptions[0]
                      : ''
                  }
                  key={productParam}
                  className="mt-1.5 w-full rounded-md border border-[#d9d4c7] bg-white px-3 py-2.5 text-xs font-normal outline-none focus:border-[#214c39] focus:ring-1 focus:ring-[#214c39]"
                >
                  <option value="" disabled>
                    Select product or trade service
                  </option>
                  {productOptions.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block text-xs font-bold text-[#34483b] sm:col-span-2">
                Requirements &amp; Tonnage *
                <textarea
                  required
                  name="message"
                  rows={4}
                  defaultValue={
                    productParam
                      ? `Hello, I am interested in sourcing ${productParam}. Please provide commercial grades, container load pricing, and shipping schedule.`
                      : ''
                  }
                  key={productParam + '-msg'}
                  className="mt-1.5 w-full resize-y rounded-md border border-[#d9d4c7] bg-white px-3.5 py-2.5 text-xs font-normal outline-none focus:border-[#214c39] focus:ring-1 focus:ring-[#214c39]"
                  placeholder="Specify variety, caliber, required packaging (cartons/mesh bags), estimated volume (e.g. 1x40ft FCL), and target port."
                />
              </label>

              <div className="flex flex-col justify-between gap-4 sm:col-span-2 sm:flex-row sm:items-center pt-2">
                <p className="max-w-xs text-[10px] leading-4 text-[#889084]">
                  Inquiries are handled confidentially by our export trade desk.
                </p>
                <button type="submit" className="btn-primary !py-3 !px-6 text-xs">
                  Submit Trade Inquiry <ArrowRight size={15} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <div className="grain min-h-[100dvh]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-white focus:p-3"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <CategorySection />
        {/* <Highlights /> */}
        <ProductCollection />
        <About />
        <Compliance />
        <Services />
        <Growth />
        <Approach />
        <News />
        <GlobalPresence />
        <Careers />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
