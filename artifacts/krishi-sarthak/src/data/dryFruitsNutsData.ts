import { COMPANY_INFO, type ProductSpecification } from './tradeData';

export function getWhatsAppDryFruitsProductUrl(productName: string): string {
  const targetName = productName.toLowerCase().includes('walnut')
    ? 'Walnuts'
    : productName.includes('Pistachio')
    ? 'Pistachio'
    : productName;
  const message = `Hello, I am interested in ${targetName}. Please share product specifications, availability, pricing, and trade details.`;
  return `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const DRY_FRUITS_AND_NUTS_PRODUCTS: ProductSpecification[] = [
  {
    name: 'Dates',
    slug: 'dates',
    category: 'dry-fruits',
    description: 'India is a large importer of fresh and dry dates with active re-export trade.',
    hsCode: '080410',
    varieties: 'Medjool, Ajwa, Sukkary, Deglet Noor, Barhi',
    productType: 'Fresh & Dry Dates',
    majorSuppliers: 'The Gulf Cooperation Council (GCC Countries: UAE, Saudi Arabia, Oman, Qatar, Kuwait, Bahrain), Saudi Arabia, Oman, Iran',
    reExportMarkets: 'Nepal, Bangladesh, Sri Lanka',
    markets: 'Nepal, Bangladesh, Sri Lanka (Re-export); GCC Countries (UAE, Saudi Arabia, Oman, Qatar, Kuwait, Bahrain), Iran (Origin Suppliers)',
    image: '/products/krishi-dates.jpg',
    imageAlt: 'Import-Export Grade Fresh and Dry Dates | KRISHI SARTHAK VENTURES LLP',
    hasDetailPage: false,
  },
  {
    name: 'Walnut',
    slug: 'walnut',
    category: 'dry-fruits',
    description: 'India exports premium walnut kernels while also importing for domestic demand.',
    hsCode: '08023200',
    tradeType: 'Imported & Exported',
    productionRegion: 'Jammu & Kashmir',
    importSources: 'USA, Chile',
    markets: 'The Gulf Cooperation Council (GCC Countries: UAE, Saudi Arabia, Oman, Qatar, Kuwait, Bahrain), EU Countries',
    image: '/products/krishi-walnut.jpg',
    imageAlt: 'Export-Grade Walnut Kernels and In-Shell Walnuts | KRISHI SARTHAK VENTURES LLP',
    hasDetailPage: false,
  },
  {
    name: 'Pistachio (Pista)',
    slug: 'pistachio-pista',
    category: 'dry-fruits',
    description: 'India imports pistachios mainly for domestic consumption and repacking trade.',
    hsCode: '08025100',
    tradeType: 'Mostly Imported',
    majorSuppliers: 'Iran, USA',
    exportType: 'Re-export After Repacking',
    productForm: 'Roasted / Salted / Raw',
    markets: 'Re-export After Repacking to International & Regional Buyers; Iran, USA (Suppliers)',
    image: '/products/krishi-pistachio.jpg',
    imageAlt: 'Import and Repack Grade Pistachio Nuts (Pista) | KRISHI SARTHAK VENTURES LLP',
    hasDetailPage: false,
  },
  {
    name: 'Mamra Almonds',
    slug: 'mamra-almonds',
    category: 'dry-fruits',
    description: 'Premium grade almonds fully imported and supplied to high-end markets.',
    hsCode: '08021200',
    tradeType: 'Fully Imported',
    majorSuppliers: 'Iran, Afghanistan',
    productionRegion: 'Limited (Kashmir Region)',
    exportType: 'Repacked Re-export',
    markets: 'High-end domestic trade and repacked re-export destinations; Iran, Afghanistan (Suppliers)',
    image: '/products/krishi-mamra-almonds.jpg',
    imageAlt: 'Premium Grade Mamra Almonds Kernels | KRISHI SARTHAK VENTURES LLP',
    hasDetailPage: false,
  },
  {
    name: 'Cashew',
    slug: 'cashew',
    category: 'dry-fruits',
    description: 'India is one of the largest cashew processors and exporters globally.',
    hsCode: '08013290',
    tradeType: 'Major Export Product',
    productType: 'Processed Cashew Kernels',
    markets: 'USA, The Gulf Cooperation Council (GCC Countries: UAE, Saudi Arabia, Oman, Qatar, Kuwait, Bahrain), Netherlands, Japan',
    image: '/products/krishi-cashew.jpg',
    imageAlt: 'Export-Grade Processed Cashew Kernels | KRISHI SARTHAK VENTURES LLP',
    hasDetailPage: false,
  },
  {
    name: 'Raisins',
    slug: 'raisins',
    category: 'dry-fruits',
    description: 'India is a strong global exporter of high-quality raisins.',
    hsCode: '08062010',
    tradeType: 'Strong Export Product',
    productionRegion: 'Maharashtra, Karnataka',
    markets: 'The Gulf Cooperation Council (GCC Countries: UAE, Saudi Arabia, Oman, Qatar, Kuwait, Bahrain), Russia, Netherlands, Sri Lanka',
    image: '/products/krishi-raisins.jpg',
    imageAlt: 'Export-Grade Indian Raisins (Kishmish) | KRISHI SARTHAK VENTURES LLP',
    hasDetailPage: false,
  },
];
