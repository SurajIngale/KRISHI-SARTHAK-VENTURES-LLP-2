import { COMPANY_INFO, type ProductSpecification } from './tradeData';

export function getWhatsAppConstructionProductUrl(productName: string): string {
  const message = `Hello, I am interested in ${productName}. Please share product specifications, availability, pricing, and trade details.`;
  return `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const CONSTRUCTION_MATERIALS_PRODUCTS: ProductSpecification[] = [
  {
    name: 'Gypsum',
    slug: 'gypsum',
    category: 'construction',
    description: 'India is a major importer of gypsum due to high cement and construction demand.',
    hsCode: '2520 10 10',
    tradeType: 'Mostly Imported',
    majorSuppliers: 'Oman, Iran, Thailand, The Gulf Cooperation Council (GCC Countries: UAE, Saudi Arabia, Oman, Qatar, Kuwait, Bahrain)',
    usage: 'Cement, Plaster, Drywall',
    industry: 'Construction & Infrastructure',
    markets: 'Domestic Indian cement & construction industries sourced from Oman, Iran, Thailand, and GCC Countries',
    image: '/products/krishi-gypsum.jpg',
    imageAlt: 'Import-Grade High Purity Raw Natural Gypsum Mineral | KRISHI SARTHAK VENTURES LLP',
    hasDetailPage: false,
  },
  {
    name: 'Bitumen',
    slug: 'bitumen',
    category: 'construction',
    description: 'Petroleum-based product traded based on refinery output and crude prices.',
    hsCode: '27132000',
    tradeType: 'Imported & Exported',
    grade: 'VG 10, VG 30, VG 40',
    usage: 'Road Construction, Infrastructure',
    markets: 'Africa and Asia',
    image: '/products/krishi-bitumen.jpg',
    imageAlt: 'Industrial Paving Grade Bitumen VG 10, VG 30, VG 40 | KRISHI SARTHAK VENTURES LLP',
    hasDetailPage: false,
  },
  {
    name: 'Fly Ash',
    slug: 'fly-ash',
    category: 'construction',
    description: 'India is one of the largest producers and exporters of fly ash from coal-based plants.',
    hsCode: '26219000',
    tradeType: 'Major Export Product From India',
    productType: 'Class F / Class C',
    usage: 'Cement, Concrete, Road Construction',
    additionalTradeInfo: 'Bhutan, United Arab Emirates (UAE) and Japan.',
    markets: 'Bangladesh, Nepal, Sri Lanka',
    image: '/products/krishi-fly-ash.jpg',
    imageAlt: 'Export-Grade Class F and Class C Pulverized Coal Fly Ash | KRISHI SARTHAK VENTURES LLP',
    hasDetailPage: false,
  },
];
