export interface ProductSpecification {
  name: string;
  slug: string;
  category: 'fruit' | 'vegetable' | 'frozen';
  description: string;
  hsCode: string;
  productType?: string;
  storage?: string;
  shelfLife: string;
  varieties?: string;
  packaging?: string;
  markets: string;
  image: string;
  imageAlt?: string;
  marketNote?: string;
  hasDetailPage?: boolean;
}

export const COMPANY_INFO = {
  name: 'KRISHI SARTHAK VENTURES LLP',
  tagline: 'Empowering Global Trade Through Quality, Reliability, and Innovation.',
  phonePlaceholder: '[Add Company Phone Number]',
  phoneTel: 'tel:[Add Company Phone Number]',
  emailPlaceholder: '[Add Company Email]',
  emailMailto: 'mailto:[Add Company Email]',
  addressPlaceholder: '[Add Registered Office Address]',
  // Configurable official WhatsApp business number placeholder
  whatsappNumber: '919876543210',
  displayWhatsapp: '+91 98765 43210',
};

export const GCC_COUNTRIES_EXPLANATION =
  'GCC countries in this trade specification refers to United Arab Emirates, Saudi Arabia, Oman, Qatar, Kuwait, and Bahrain.';

export function getWhatsAppProductUrl(productName: string): string {
  const message = `Hello, I am interested in ${productName}. Please share product specifications, pricing, packaging, and export availability.`;
  return `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function getWhatsAppFrozenProductUrl(productName: string): string {
  const cleanName = productName.includes('(Frozen)')
    ? `Frozen ${productName.replace(' (Frozen)', '')}`
    : productName;
  const message = `Hello, I am interested in ${cleanName}. Please share the available grades, packaging options, pricing, minimum order quantity, and export availability.`;
  return `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function getContactProductUrl(productName: string): string {
  return `/contact?product=${encodeURIComponent(productName)}`;
}

export const FRUIT_PRODUCTS: ProductSpecification[] = [
  {
    name: 'Apple',
    slug: 'apple',
    category: 'fruit',
    description: 'Delicious, nutritious, sweet, and globally demanded fresh fruit.',
    hsCode: '08081000',
    productType: 'Perishable – Reefer',
    shelfLife: '30–45 days',
    varieties: 'Red Delicious (Sib-e-Labani), Golden Delicious, Granny Smith, Gala, Fuji',
    packaging: '10kg / 18kg / 20kg telescopic corrugated export cartons with tray liners',
    markets: 'India, Germany, United Kingdom, Vietnam, Indonesia, Russia, and GCC countries.',
    image: '/products/krishi-apple.jpg',
    hasDetailPage: false,
  },
  {
    name: 'Dragon Fruit',
    slug: 'dragon-fruit',
    category: 'fruit',
    description: 'Exotic and high-demand superfruit known for its vibrant color.',
    hsCode: '08109090',
    productType: 'Fresh Fruit (Pitaya/Dragon Fruit)',
    shelfLife: '20–25 days',
    varieties: 'White Flesh, Red Flesh, Pink Flesh',
    packaging: '4kg / 5kg ventilated corrugated export cartons with protective netting',
    markets: 'Vietnam, Thailand, China, and Ecuador',
    marketNote:
      'Reference market information from global trade reference; presented for international market context, not as a verified company claim.',
    image: '/products/krishi-dragon-fruit.jpg',
    hasDetailPage: false,
  },
  {
    name: 'Banana',
    slug: 'banana',
    category: 'fruit',
    description: 'High-quality export-grade fresh bananas sourced directly from Indian farms.',
    hsCode: '08039010',
    productType: 'Reefer Shipment',
    shelfLife: '20–30 days',
    varieties: 'Cavendish, Robusta',
    packaging: '13kg / 18.14kg vacuum-packed telescopic cartons with poly-liner bags',
    markets: 'GCC countries.',
    image: '/products/krishi-banana.jpg',
    hasDetailPage: false,
  },
  {
    name: 'Coconut',
    slug: 'coconut',
    category: 'fruit',
    description: 'Premium-quality fresh coconuts sourced directly from Indian farms.',
    hsCode: '08011910',
    productType: 'Fresh / Semi Husked',
    shelfLife: '45–60 days',
    varieties: 'West Coast Tall, East Coast Tall',
    packaging: '25 nuts (~13kg) or 50 nuts per high-tensile ventilated PP mesh bag',
    markets: 'GCC countries and Malaysia.',
    image: '/products/krishi-coconut.jpg',
    hasDetailPage: false,
  },
  {
    name: 'Grapes',
    slug: 'grapes',
    category: 'fruit',
    description: 'Premium export-grade seedless grapes.',
    hsCode: '08061000',
    productType: 'Fresh Table Grapes',
    shelfLife: '30–40 days',
    varieties: 'Thompson Seedless, Sonaka, Sharad Seedless, Flame Seedless, Tas-A-Ganesh',
    packaging: '5kg carry-bag cartons / 500g punnets in 4.5kg master cartons with SO2 pads',
    markets: 'Netherlands and GCC countries.',
    image: '/products/krishi-grapes.jpg',
    hasDetailPage: false,
  },
  {
    name: 'Pomegranate',
    slug: 'pomegranate',
    category: 'fruit',
    description: 'High-antioxidant, premium-quality export fruit.',
    hsCode: '08109010',
    productType: 'Fresh Whole Fruit',
    shelfLife: '45–60 days',
    varieties: 'Bhagwa, Ganesh',
    packaging: '3.5kg (9/10/12 counts) / 5kg export corrugated cartons with foam netting',
    markets: 'GCC countries, Netherlands, Europe.',
    image: '/products/krishi-pomegranate.jpg',
    hasDetailPage: false,
  },
  {
    name: 'Orange',
    slug: 'orange',
    category: 'fruit',
    description: 'Vitamin-C-rich export-quality citrus fruit.',
    hsCode: '08051000',
    productType: 'Fresh Citrus',
    shelfLife: '30–45 days',
    varieties: 'Nagpur Mandarin (Santra), Kinnow Mandarin',
    packaging: '10kg / 20kg telescopic corrugated cartons, individually wrapped or bulk packed',
    markets: 'GCC countries, Nepal, Bangladesh.',
    image: '/products/krishi-orange.jpg',
    hasDetailPage: false,
  },
  {
    name: 'Mango',
    slug: 'mango',
    category: 'fruit',
    description: 'Premium Indian mangoes for global export.',
    hsCode: '08045020',
    productType: 'Fresh Whole Fruit',
    shelfLife: '15–25 days',
    varieties: 'Alphonso, Kesar, Totapuri, Langra',
    packaging: '3kg / 5kg export cartons with individual cushioned foam sleeves and VHT treatment',
    markets: 'GCC countries, USA, Europe, New Zealand.',
    image: '/products/krishi-mango.jpg',
    hasDetailPage: false,
  },
  {
    name: 'Pineapple',
    slug: 'pineapple',
    category: 'fruit',
    description: 'Tropical premium export-quality fruit.',
    hsCode: '08043000',
    productType: 'Fresh Whole Fruit',
    shelfLife: '20–30 days',
    varieties: 'Queen, Kew',
    packaging: '10kg / 12kg cartons (6, 8, 10 count per carton) with crown protection',
    markets: 'GCC countries, Nepal, Bangladesh.',
    image: '/products/krishi-pineapple.jpg',
    hasDetailPage: false,
  },
];

export const VEGETABLE_PRODUCTS: ProductSpecification[] = [
  {
    name: 'Indian Onion',
    slug: 'indian-onion',
    category: 'vegetable',
    description:
      'Premium-quality export-grade Indian onions known for strong flavor, long shelf life, and storage performance.',
    hsCode: '07031010',
    productType: 'Fresh Allium',
    shelfLife: '30–45 days under properly ventilated storage',
    varieties: 'Nashik Red, Pusa Red, Agrifound Light Red',
    packaging: '5kg / 10kg / 25kg mesh bags',
    markets: 'GCC countries, Malaysia, Sri Lanka, Bangladesh, UK.',
    image: '/products/krishi-onion.jpg',
    hasDetailPage: false,
  },
  {
    name: 'Bitter Gourd',
    slug: 'bitter-gourd',
    category: 'vegetable',
    description: 'Nutrient-rich vegetable with a distinctive bitter flavor.',
    hsCode: '07099330',
    productType: 'Fresh Cucurbit',
    shelfLife: '10–14 days',
    varieties: 'Phule Green Gold, Phule Ujwala, Phule Priyanka',
    packaging: '5kg / 10kg cartons',
    markets: 'GCC countries, UK, Malaysia.',
    image: '/products/krishi-bitter-gourd.jpg',
    hasDetailPage: false,
  },
  {
    name: 'Bottle Gourd',
    slug: 'bottle-gourd',
    category: 'vegetable',
    description: 'Hydrating and versatile vegetable suitable for soups and curries.',
    hsCode: '07099340',
    productType: 'Fresh Cucurbit',
    shelfLife: '10–15 days',
    varieties: 'Pusa Naveen, Pusa Meghdoot, Arka Bahar, Summer Prolific Long, PMK1',
    packaging: '10kg export carton',
    markets: 'GCC countries, UK, USA, Canada, Australia.',
    image: '/products/krishi-bottle-gourd.jpg',
    hasDetailPage: false,
  },
  {
    name: 'Brinjal',
    slug: 'brinjal',
    category: 'vegetable',
    description: 'Vegetable suitable for grilling and curries.',
    hsCode: '07099990',
    productType: 'Fresh Solanaceous',
    shelfLife: '7–12 days',
    varieties: 'Long Purple',
    packaging: '5kg / 10kg cartons',
    markets: 'GCC countries, UK, Bangladesh, Singapore.',
    image: '/products/krishi-brinjal.jpg',
    hasDetailPage: false,
  },
  {
    name: 'Capsicum',
    slug: 'capsicum',
    category: 'vegetable',
    description: 'Colorful and crunchy vegetable rich in Vitamin C.',
    hsCode: '070960',
    productType: 'Fresh Bell Pepper',
    shelfLife: '10–15 days',
    varieties: 'Green, Red, Yellow Capsicum',
    packaging: '5kg cartons',
    markets: 'GCC countries, China, Thailand, Sri Lanka, Bangladesh, Malaysia.',
    image: '/products/krishi-capsicum.jpg',
    hasDetailPage: false,
  },
  {
    name: 'Green Chili',
    slug: 'green-chili',
    category: 'vegetable',
    description: 'Spicy and flavorful chilies suitable for curries and sauces.',
    hsCode: '07096010',
    productType: 'Fresh Chili Pepper',
    shelfLife: '8–12 days',
    varieties: 'G4 (Guntur), Jwala, Bird\'s Eye (Kanthari)',
    packaging: '3kg / 5kg export cartons',
    markets: 'GCC countries.',
    image: '/products/krishi-green-chili.jpg',
    hasDetailPage: false,
  },
  {
    name: 'Tomato',
    slug: 'tomato',
    category: 'vegetable',
    description: 'Juicy and flavorful vegetable for global markets.',
    hsCode: '07020000',
    productType: 'Fresh Solanaceous',
    shelfLife: '7–14 days',
    varieties: 'Roma, Hybrid Tomato',
    packaging: '5kg / 10kg cartons',
    markets: 'GCC countries, Bangladesh, Nepal, Bhutan, Maldives.',
    image: '/products/krishi-tomato.jpg',
    hasDetailPage: false,
  },
  {
    name: 'Cucumber',
    slug: 'cucumber',
    category: 'vegetable',
    description: 'Refreshing vegetable suitable for salads and fresh markets.',
    hsCode: '07070000',
    productType: 'Fresh Cucurbit',
    shelfLife: '10–14 days',
    varieties: 'English Cucumber, Hybrid Cucumber',
    packaging: '5kg / 10kg cartons',
    markets: 'GCC countries, Europe, USA, Australia.',
    image: '/products/krishi-cucumber.jpg',
    hasDetailPage: false,
  },
  {
    name: 'Drumstick',
    slug: 'drumstick',
    category: 'vegetable',
    description: 'Nutrient-rich moringa pods used in soups and curries.',
    hsCode: '07099990',
    productType: 'Fresh Moringa Pods',
    shelfLife: '7–10 days',
    varieties: 'PKM-1, Local Hybrid',
    packaging: '5kg cartons',
    markets: 'GCC countries, UK, Malaysia, Singapore.',
    image: '/products/krishi-drumstick.jpg',
    hasDetailPage: false,
  },
  {
    name: 'Lemon',
    slug: 'lemon',
    category: 'vegetable',
    description: 'Tangy, vitamin-rich citrus fruit used in beverages and cooking.',
    hsCode: '08055000',
    productType: 'Fresh Citrus',
    shelfLife: '30–45 days',
    varieties: 'Kagzi Lemon, Seedless Lemon',
    packaging: '10kg / 15kg cartons',
    markets: 'GCC countries, Bangladesh, Malaysia, Bhutan, Singapore.',
    image: '/products/krishi-lemon.jpg',
    hasDetailPage: false,
  },
  {
    name: 'Pumpkin',
    slug: 'pumpkin',
    category: 'vegetable',
    description: 'Nutritious, fiber-rich vegetable suitable for soups and international markets.',
    hsCode: '07099310',
    productType: 'Fresh Cucurbit',
    shelfLife: '30–60 days',
    varieties: 'Yellow Pumpkin, Butternut',
    packaging: 'Loose / 10kg cartons',
    markets: 'GCC countries, Southeast Asia, Europe.',
    image: '/products/krishi-pumpkin.jpg',
    hasDetailPage: false,
  },
];

export const ALL_FRESH_PRODUCE = [...FRUIT_PRODUCTS, ...VEGETABLE_PRODUCTS];

export { FROZEN_VEGETABLE_PRODUCTS } from './frozenVegetablesData';

export const COMPLIANCE_ITEMS = [
  {
    code: 'IEC',
    title: 'Import Export Code (IEC)',
    desc: 'Primary DGFT mandatory registration for international trade operations from India.',
  },
  {
    code: 'APEDA',
    title: 'APEDA Scheduled Products',
    desc: 'Agricultural and Processed Food Products Export Development Authority quality compliance.',
  },
  {
    code: 'FSSAI',
    title: 'FSSAI Food Safety License',
    desc: 'Food Safety and Standards Authority of India hygiene, packing, and quality standards.',
  },
  {
    code: 'GSTIN',
    title: 'GSTIN Registration',
    desc: 'Verified commercial tax and international trade invoice clearance identification.',
  },
  {
    code: 'MSME',
    title: 'MSME (Udyam) Registration',
    desc: 'Indian Ministry of Micro, Small and Medium Enterprises enterprise recognition.',
  },
  {
    code: 'FIEO',
    title: 'FIEO Export Promotion',
    desc: 'Federation of Indian Export Organisations premier trade facilitation network.',
  },
  {
    code: 'UAM',
    title: 'Udyog Aadhaar Registration',
    desc: 'National enterprise identification standard for recognized Indian export entities.',
  },
  {
    code: 'CDB',
    title: 'Coconut Development Board',
    desc: 'Registration and phytosanitary adherence for export-grade fresh coconuts and copra.',
  },
  {
    code: 'SPICES',
    title: 'Spices Board of India',
    desc: 'Mandatory laboratory testing, mandatory aflatoxin checks, and origin certification.',
  },
  {
    code: 'HALAL',
    title: 'Halal Certification Standard',
    desc: 'Destination market dietary compliance across UAE, GCC, and Southeast Asian nations.',
  },
  {
    code: 'KOSHER',
    title: 'Kosher Verification Standard',
    desc: 'International dietary standard certification for specific target markets and retail buyers.',
  },
  {
    code: 'ISO',
    title: 'ISO Quality Management',
    desc: 'Standardized management protocols for cold-chain, traceability, and batch grading.',
  },
];

