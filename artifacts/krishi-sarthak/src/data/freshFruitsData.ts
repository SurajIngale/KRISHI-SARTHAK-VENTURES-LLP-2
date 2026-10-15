import { COMPANY_INFO } from './tradeData';

export interface FreshFruitVariety {
  name: string;
  scientificOrAlias?: string;
  description: string;
  characteristics: string[];
}

export interface FreshFruitDetail {
  id: string;
  anchorId: string;
  legacyAnchorId: string;
  name: string;
  heading: string;
  cardTitle: string;
  shortDescription: string;
  fullDescription: string;
  hsCode: string;
  importOrExportCategory: string;
  tradeType: 'Import Cargo' | 'Export Cargo';
  originOrMarketsLabel: string;
  originOrMarkets: string;
  varietiesSummary: string;
  varieties: FreshFruitVariety[];
  packaging: string;
  packagingDetails: string[];
  shelfLife: string;
  shelfLifeDetails: string;
  handlingRequirements: string;
  temperatureRange?: string;
  temperatureNote?: string;
  certifications: string;
  certificationDetails: string[];
  keyFeatures: string[];
  logisticsSteps: {
    title: string;
    description: string;
  }[];
  complianceRequirements: {
    title: string;
    description: string;
    details?: string;
  }[];
  complianceDisclaimer: string;
  image: string;
  imageAlt: string;
  whatsappMessage: string;
  whatsappUrl: string;
  enquiryUrl: string;
}

export const FRESH_FRUITS_HEADER = {
  title: 'Fresh Fruits & Vegetables',
  subtitle: 'Premium Fresh Produce for Domestic and International Markets',
  introduction:
    'Explore our range of fresh fruits sourced through international and farm-level supply networks. Our product portfolio includes fresh apples, dragon fruit, bananas, and coconuts, with product options designed for wholesale buyers, distributors, and international trade enquiries.\n\nExplore product varieties, origin information, packaging options, storage requirements, and available supply arrangements.',
  availabilityDisclaimer:
    'Product availability, seasonal crop windows, and supply arrangements are subject to confirmation during the commercial enquiry process. KRISHI SARTHAK VENTURES LLP coordinates with verified grower clusters and overseas suppliers to establish bespoke consignment arrangements.',
};

export function getFreshFruitWhatsAppUrl(productName: string): string {
  let message = `Hello, I would like to enquire about ${productName} from KRISHI SARTHAK VENTURES LLP. Please share the available varieties, packaging options, minimum order quantity, pricing, and delivery details.`;

  if (productName.toLowerCase().includes('apple')) {
    message = `Hello, I would like to enquire about Fresh Apples from KRISHI SARTHAK VENTURES LLP. Please share the available varieties, packaging options, minimum order quantity, pricing, and delivery details.`;
  } else if (productName.toLowerCase().includes('dragon')) {
    message = `Hello, I would like to enquire about Fresh Dragon Fruit (Pitaya) from KRISHI SARTHAK VENTURES LLP. Please share the available varieties, packaging options, minimum order quantity, pricing, and delivery details.`;
  } else if (productName.toLowerCase().includes('banana')) {
    message = `Hello, I would like to enquire about Fresh Export-Grade Bananas from KRISHI SARTHAK VENTURES LLP. Please share the available varieties, packaging options, minimum order quantity, pricing, and delivery details.`;
  } else if (productName.toLowerCase().includes('coconut')) {
    message = `Hello, I would like to enquire about Fresh Indian Coconut from KRISHI SARTHAK VENTURES LLP. Please share the available varieties, packaging options, minimum order quantity, pricing, and delivery details.`;
  }

  return `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const FRESH_FRUITS_PRODUCTS: FreshFruitDetail[] = [
  // 1. FRESH APPLES
  {
    id: 'fresh-apples',
    anchorId: 'product-fresh-apples',
    legacyAnchorId: 'product-apple',
    name: 'Fresh Apples',
    heading: 'Premium Fresh Apples',
    cardTitle: 'Fresh Apples',
    shortDescription:
      'Explore fresh apple varieties, including Red Delicious, Golden Delicious, Granny Smith, Gala, and Fuji, with packaging and cold-chain requirements suited to perishable produce.',
    fullDescription:
      'Fresh apples are sourced from established international producing markets, including Iran, Turkey, and New Zealand. Import operations may involve international sourcing, customs clearance, regulatory coordination, temperature-controlled handling, and domestic distribution.',
    hsCode: '08081000',
    importOrExportCategory: 'Fresh Fruit (Perishable)',
    tradeType: 'Import Cargo',
    originOrMarketsLabel: 'Countries of Origin',
    originOrMarkets: 'Iran, Turkey, and New Zealand',
    varietiesSummary:
      'Red Delicious (also known as Sib-e-Labani), Golden Delicious, Granny Smith, Gala, and Fuji',
    varieties: [
      {
        name: 'Red Delicious',
        scientificOrAlias: 'Sib-e-Labani',
        description:
          'Deep crimson color with signature five-pointed calyx, mild sweetness, and crisp texture favored across Middle Eastern and Indian markets.',
        characteristics: ['Deep crimson peel', 'Crisp, sweet flesh', 'High market demand'],
      },
      {
        name: 'Golden Delicious',
        description:
          'Bright golden-yellow skin with tender, juicy flesh and balanced mellow sweetness, highly sought after for both fresh table consumption and culinary uses.',
        characteristics: ['Bright golden skin', 'Juicy, mellow sweetness', 'Smooth texture'],
      },
      {
        name: 'Granny Smith',
        description:
          'Firm, vibrant green skin with a pleasantly tart flavor profile and exceptional crispness, boasting superior storage endurance under controlled atmosphere.',
        characteristics: ['Vibrant green color', 'Tart & tangy profile', 'Extended shelf life'],
      },
      {
        name: 'Gala',
        description:
          'Attractive red-orange striping over a golden base with sweet aromatic flesh, fine-grained texture, and early-season availability.',
        characteristics: ['Red-orange blush', 'Sweet aromatic flavor', 'Dense crisp bite'],
      },
      {
        name: 'Fuji',
        description:
          'Large, round fruit with dense, intensely sweet, and juicy flesh, known for retaining firmness and sweetness through extended cold-storage periods.',
        characteristics: ['Substantial fruit size', 'Intensely sweet & juicy', 'Long cold storage'],
      },
    ],
    packaging: 'Corrugated cartons and cold-chain packaging',
    packagingDetails: [
      '10 kg / 18 kg / 20 kg telescopic corrugated export cartons',
      'Protective molded paper pulp trays preventing fruit-to-fruit abrasion',
      'Ventilated carton design optimized for uniform airflow in reefer containers',
      'Corner-board strapping and pallet wrapping for transoceanic voyages',
    ],
    shelfLife: '30–90 days under cold-storage conditions',
    shelfLifeDetails:
      'Maintains freshness for 30 to 90 days when held within controlled-atmosphere (CA) or refrigerated cold-storage facilities at optimal humidity levels (90–95% RH).',
    handlingRequirements:
      'Controlled-atmosphere cold storage, careful forklift pallet handling, and temperature-controlled reefer cargo.',
    temperatureRange: '0°C to 4°C',
    temperatureNote:
      'Strict cold-chain maintenance from packhouse pre-cooling through reefer ocean voyage and domestic cold stores.',
    certifications: 'Phytosanitary Certificate and Certificate of Origin',
    certificationDetails: [
      'Phytosanitary Certificate issued by National Plant Protection Organizations of origin countries (Iran, Turkey, New Zealand)',
      'Certificate of Origin verifying country of harvest and export',
      'Import documentation coordination for Plant Quarantine clearance in India',
      'FSSAI food safety and standards compliance documentation',
    ],
    keyFeatures: [
      'Multiple apple varieties (Red Delicious, Golden Delicious, Granny Smith, Gala, Fuji)',
      'International sourcing options from Iran, Turkey, and New Zealand',
      'Perishable-goods handling requirements and strict cold-chain management',
      'Cold-storage and temperature-controlled logistics throughout transit',
      'Packaging options suitable for fresh fruit transportation',
    ],
    logisticsSteps: [
      {
        title: 'International Sourcing',
        description:
          'Coordination with established commercial orchards and packhouses across Iran, Turkey, and New Zealand.',
      },
      {
        title: 'Cold-Storage & Reefer Transit',
        description:
          'Cold-storage handling and continuous temperature-controlled marine reefer logistics from port of loading.',
      },
      {
        title: 'Customs & Duty Management',
        description:
          'Customs documentation, tariff classification, and import duty management at Indian maritime ports.',
      },
      {
        title: 'Port Clearance & Inland Transport',
        description:
          'Prompt port clearance coordination and refrigerated inland trucking to terminal wholesale distribution hubs.',
      },
      {
        title: 'Regulatory Coordination',
        description:
          'Coordination for applicable Indian import regulations, including FSSAI clearance and Plant Quarantine inspections.',
      },
    ],
    complianceRequirements: [
      {
        title: 'FSSAI Import Clearance',
        description:
          'Sampling, laboratory verification, and food safety clearance under the Food Safety and Standards Authority of India (FSSAI) import regulations.',
      },
      {
        title: 'Plant Quarantine Inspection',
        description:
          'Mandatory plant health inspection at designated Indian ports of entry to ensure cargo is free from quarantine pests.',
      },
      {
        title: 'Phytosanitary Certificate Verification',
        description:
          'Official phytosanitary certificate validation issued by the competent plant protection authority in the exporting nation.',
      },
      {
        title: 'Customs & Duty Compliance',
        description:
          'Proper classification under HSN 08081000, valuation declaration, and applicable customs duty compliance for perishable produce.',
      },
    ],
    complianceDisclaimer:
      'Compliance and certification procedures listed represent standard statutory requirements for fresh fruit imports into India. KRISHI SARTHAK VENTURES LLP coordinates with certified overseas producers and accredited custom brokers to ensure all consignment-specific statutory clearances are met.',
    image: '/products/krishi-apple.jpg',
    imageAlt: 'Fresh International Apples - Red Delicious, Golden Delicious, Granny Smith, Gala, Fuji',
    whatsappMessage:
      'Hello, I would like to enquire about Fresh Apples from KRISHI SARTHAK VENTURES LLP. Please share the available varieties, packaging options, minimum order quantity, pricing, and delivery details.',
    whatsappUrl: getFreshFruitWhatsAppUrl('Fresh Apples'),
    enquiryUrl: '/contact?product=Fresh%20Apples',
  },

  // 2. FRESH DRAGON FRUIT (PITAYA)
  {
    id: 'fresh-dragon-fruit',
    anchorId: 'product-fresh-dragon-fruit',
    legacyAnchorId: 'product-dragon-fruit',
    name: 'Fresh Dragon Fruit (Pitaya)',
    heading: 'Premium Dragon Fruit',
    cardTitle: 'Fresh Dragon Fruit',
    shortDescription:
      'Discover fresh dragon fruit in red-flesh, white-flesh, and pink-flesh varieties, with packaging and storage options for perishable produce.',
    fullDescription:
      'Fresh dragon fruit, also known as pitaya, is available in red-flesh, white-flesh, and pink-flesh varieties. The referenced product information describes sourcing from Vietnam and highlights the importance of temperature-controlled handling, customs documentation, plant quarantine inspection, and applicable food-safety compliance.',
    hsCode: '08109090',
    importOrExportCategory: 'Fresh Fruit (Perishable)',
    tradeType: 'Import Cargo',
    originOrMarketsLabel: 'Country of Origin',
    originOrMarkets: 'Vietnam',
    varietiesSummary: 'White Flesh, Red Flesh, and Pink Flesh',
    varieties: [
      {
        name: 'White Flesh Dragon Fruit',
        scientificOrAlias: 'Hylocereus undatus',
        description:
          'Bright magenta-pink exterior with curved green bracts, crisp and mildly sweet white pulp dotted with edible black seeds.',
        characteristics: ['Mild, refreshing sweetness', 'Crisp white pulp', 'Firm vibrant skin'],
      },
      {
        name: 'Red Flesh Dragon Fruit',
        scientificOrAlias: 'Hylocereus polyrhizus',
        description:
          'Intensely vibrant deep-red or purple flesh packed with natural betalains and antioxidants, offering a sweeter, richer taste profile.',
        characteristics: ['Deep purple-red flesh', 'Higher Brix sweetness', 'Rich in antioxidants'],
      },
      {
        name: 'Pink Flesh Dragon Fruit',
        scientificOrAlias: 'Hylocereus costaricensis',
        description:
          'Delicate pink-magenta flesh offering an exquisite balance of subtle sweetness, pleasant fragrance, and striking presentation.',
        characteristics: ['Delicate pink interior', 'Fragrant, balanced flavor', 'Appealing appearance'],
      },
    ],
    packaging: 'Export-grade corrugated cartons, 4 kg / 5 kg',
    packagingDetails: [
      '4 kg and 5 kg heavy-duty corrugated export cartons',
      'Individual expanded foam netting sleeves protecting fruit scales and bracts',
      'Ventilated carton sidewalls providing continuous airflow during reefer transit',
      'Palletized and shrink-wrapped with moisture-resistant corner reinforcements',
    ],
    shelfLife: '20–25 days under cold-storage conditions',
    shelfLifeDetails:
      'Maintains commercial grade and crisp texture for 20 to 25 days under cold-storage conditions when stored at 5–8°C with 85–90% relative humidity.',
    handlingRequirements:
      'Cold-storage handling, gentle packing to prevent damage to delicate leafy bracts, and prompt reefer logistics.',
    temperatureRange: '5–8°C (Source-Provided Handling Range)',
    temperatureNote:
      'The source page specifies a 5–8°C handling range. This temperature range is provided as reference handling information; optimal transit settings may vary based on transit duration, harvest maturity, and buyer requirements.',
    certifications: 'Phytosanitary Certificate and Certificate of Origin',
    certificationDetails: [
      'Phytosanitary Certificate issued by Vietnam Plant Protection Department (MARD)',
      'Certificate of Origin (Form AI or standard trade COO)',
      'Indian Plant Quarantine import permit verification',
      'FSSAI import food safety clearance and sampling protocols',
    ],
    keyFeatures: [
      'Red-flesh dragon fruit with rich antioxidant pigmentation',
      'White-flesh dragon fruit with refreshing, crisp texture',
      'Pink-flesh dragon fruit offering delicate sweetness',
      'Export-grade carton packaging options (4 kg / 5 kg)',
      'Cold-storage handling and temperature-controlled logistics',
      'Temperature-controlled transportation requirements throughout transit',
    ],
    logisticsSteps: [
      {
        title: 'Supplier Coordination',
        description:
          'Coordination with verified dragon fruit growers and packing facilities in key producing regions of Vietnam (such as Binh Thuan and Long An).',
      },
      {
        title: 'Cold Storage & Temperature Control',
        description:
          'Cold storage and temperature control adhering to the source-specified 5–8°C handling range throughout pre-cooling and ocean containerization.',
      },
      {
        title: 'Customs Documentation',
        description:
          'Preparation and filing of bill of lading, commercial invoices, packing lists, and origin documentation for port entry.',
      },
      {
        title: 'Port Clearance & Domestic Distribution',
        description:
          'Coordinated customs and plant health inspection at Indian ports followed by rapid domestic distribution to wholesale markets.',
      },
      {
        title: 'Applicable Plant Quarantine & Food Safety',
        description:
          'Timely fulfillment of applicable plant quarantine inspections and statutory food-safety clearance procedures.',
      },
    ],
    complianceRequirements: [
      {
        title: 'FSSAI Import Clearance',
        description:
          'Statutory food safety clearance by FSSAI authorized officers, including visual inspection and permissible chemical residue verification.',
      },
      {
        title: 'Plant Quarantine Inspection',
        description:
          'Official inspection by Plant Quarantine officials at destination sea or air ports to verify freedom from exotic pests.',
      },
      {
        title: 'Phytosanitary Certificate Verification',
        description:
          'Verification of the original phytosanitary certificate issued by the competent national authority of Vietnam.',
      },
      {
        title: 'Customs & Duty Compliance',
        description:
          'Declaration under HS Code 08109090, duty assessment, and fulfillment of all applicable customs formalities.',
      },
    ],
    complianceDisclaimer:
      'Certification and import documentation details reflect standard statutory compliance requirements for fresh dragon fruit imported into India. KRISHI SARTHAK VENTURES LLP coordinates with verified Vietnamese trade partners and licensed customs clearing agents to ensure full compliance with applicable regulations.',
    image: '/products/krishi-dragon-fruit.jpg',
    imageAlt: 'Fresh Dragon Fruit (Pitaya) - White Flesh, Red Flesh, Pink Flesh',
    whatsappMessage:
      'Hello, I would like to enquire about Fresh Dragon Fruit (Pitaya) from KRISHI SARTHAK VENTURES LLP. Please share the available varieties, packaging options, minimum order quantity, pricing, and delivery details.',
    whatsappUrl: getFreshFruitWhatsAppUrl('Fresh Dragon Fruit (Pitaya)'),
    enquiryUrl: '/contact?product=Fresh%20Dragon%20Fruit%20(Pitaya)',
  },

  // 3. FRESH EXPORT-GRADE BANANAS
  {
    id: 'fresh-bananas',
    anchorId: 'product-fresh-bananas',
    legacyAnchorId: 'product-banana',
    name: 'Fresh Export-Grade Bananas',
    heading: 'Premium Indian Bananas',
    cardTitle: 'Fresh Export-Grade Bananas',
    shortDescription:
      'Explore export-grade Indian bananas in Cavendish and Robusta varieties, with sorting, packaging, and temperature-controlled shipment options.',
    fullDescription:
      'Fresh Indian bananas are sourced from agricultural supply networks. The referenced product information highlights Cavendish and Robusta varieties, export-grade sorting and packaging, pre-cooling, and temperature-controlled reefer shipments designed to support freshness during international transportation.',
    hsCode: '08039010',
    importOrExportCategory: 'Reefer Shipment (Temperature Controlled)',
    tradeType: 'Export Cargo',
    originOrMarketsLabel: 'Target Export Markets',
    originOrMarkets:
      'GCC countries, including the UAE, Saudi Arabia, Oman, Qatar, Kuwait, and Bahrain',
    varietiesSummary: 'Cavendish and Robusta',
    varieties: [
      {
        name: 'Cavendish Bananas',
        scientificOrAlias: 'Grand Naine (G9)',
        description:
          'The premier international export variety, harvested at mature green stage with uniform length (18–22 cm), minimum 39–46 caliper caliber, clean blemish-free skin, and exceptional shelf life upon ripening.',
        characteristics: [
          'Uniform fingers (18–22 cm)',
          'Calibrated 39–46 caliper',
          'Excellent transit endurance',
        ],
      },
      {
        name: 'Robusta Bananas',
        scientificOrAlias: 'Semi-Tall Cavendish Mutant',
        description:
          'Stout, slightly curved fingers with a deep rich sweet flavor, firm pulp, and high resilience to temperature fluctuations during reefer ocean voyages.',
        characteristics: [
          'Rich, creamy sweetness',
          'Slightly curved fingers',
          'High wholesale yield',
        ],
      },
    ],
    packaging: 'Export cartons, 13 kg / 18 kg, with reefer container loading',
    packagingDetails: [
      '13 kg and 18 kg (18.14 kg / 40 lb) telescopic export-grade cartons',
      'Vacuum-sealed poly-liner bags (polyethylene / modified atmosphere) retaining green freshness',
      'Foam separator pads between hands to eliminate transit scuffing and friction marks',
      'Reefer container loading with 40ft High Cube containers carrying ~1,540 to 1,600 cartons',
    ],
    shelfLife: '20–30 days under reefer conditions',
    shelfLifeDetails:
      'Maintains green maturity for 20 to 30 days when transported in temperature-controlled reefer containers at 13–14°C, permitting standard ocean transit to Middle East and Gulf ports with optimal shelf life for post-arrival ripening.',
    handlingRequirements:
      'Pre-cooling within 12 hours of harvest, strict green-stage harvesting, and continuous temperature control.',
    temperatureRange: '13–14°C (Source-Specified Shipment Range)',
    temperatureNote:
      'The source page specifies a shipment temperature range of 13–14°C with 90–95% relative humidity to avoid chilling injury while suspending ripening until arrival.',
    certifications: 'APEDA, Phytosanitary Certificate, and Certificate of Origin',
    certificationDetails: [
      'Phytosanitary Certificate issued by Indian Plant Quarantine Directorate',
      'Certificate of Origin issued by authorized Indian trade chambers / export bodies',
      'APEDA-aligned export standards, grading specifications, and packhouse registration protocols',
      'Pre-shipment reefer temperature loggers and container inspection documentation',
    ],
    keyFeatures: [
      'Cavendish bananas harvested at calibrated mature green stage',
      'Robusta bananas with high yield and resilient peel structure',
      'Export-grade sorting and automated cleaning/grading protocols',
      'Packaging options for wholesale supply (13 kg / 18 kg cartons)',
      'Pre-cooling and ripening-stage control to preserve green state',
      'Reefer container transportation designed for long-distance maritime trade',
    ],
    logisticsSteps: [
      {
        title: 'Farm-Level Sourcing & Quality Inspection',
        description:
          'Sourced from established banana belts in Maharashtra, Gujarat, and Andhra Pradesh, with on-field selection of defect-free bunches.',
      },
      {
        title: 'Pre-Cooling & Ripening-Stage Control',
        description:
          'Immediate washing, de-handing, anti-fungal treatment, and rapid forced-air pre-cooling to arrest the ripening process.',
      },
      {
        title: 'Reefer Container Shipment',
        description:
          'Loading into pre-tripped 40ft High Cube reefer containers maintained strictly at the source-specified 13–14°C range.',
      },
      {
        title: 'Bulk Supply Arrangements',
        description:
          'Structured bulk and scheduled weekly container supply programs tailored for overseas wholesalers, distributors, and supermarket chains.',
      },
      {
        title: 'International Shipping & Customs Documentation',
        description:
          'Seamless coordination with major shipping lines (Jawaharlal Nehru Port / Mundra to Jebel Ali, Dammam, Doha, Sohar) and statutory customs clearance.',
      },
    ],
    complianceRequirements: [
      {
        title: 'APEDA-Related Requirements',
        description:
          'Adherence to Agricultural and Processed Food Products Export Development Authority (APEDA) standards for banana grading, packing, and reefer transit protocols.',
      },
      {
        title: 'Phytosanitary Documentation',
        description:
          'Issuance and verification of export Phytosanitary Certificate confirming freedom from regulated agricultural pests and diseases.',
      },
      {
        title: 'Certificate of Origin',
        description:
          'Formal government/chamber Certificate of Origin providing legal documentation of Indian agricultural provenance.',
      },
      {
        title: 'Export Documentation & Customs Clearance',
        description:
          'Complete shipping documentation including shipping bills, bills of lading, health declarations, and customs clearance filings.',
      },
    ],
    complianceDisclaimer:
      'APEDA and statutory compliance references represent standard shipment-related procedures and industry standards for Indian fresh banana exports. KRISHI SARTHAK VENTURES LLP coordinates with APEDA-compliant packhouses and accredited export logistics partners.',
    image: '/products/krishi-banana.jpg',
    imageAlt: 'Fresh Export-Grade Indian Bananas - Cavendish G9 and Robusta',
    whatsappMessage:
      'Hello, I would like to enquire about Fresh Export-Grade Bananas from KRISHI SARTHAK VENTURES LLP. Please share the available varieties, packaging options, minimum order quantity, pricing, and delivery details.',
    whatsappUrl: getFreshFruitWhatsAppUrl('Fresh Export-Grade Bananas'),
    enquiryUrl: '/contact?product=Fresh%20Export-Grade%20Bananas',
  },

  // 4. FRESH INDIAN COCONUT
  {
    id: 'fresh-coconut',
    anchorId: 'product-fresh-coconut',
    legacyAnchorId: 'product-coconut',
    name: 'Fresh Indian Coconut',
    heading: 'Premium Coconuts',
    cardTitle: 'Fresh Indian Coconut',
    shortDescription:
      'Explore fresh and semi-husked coconut options, including West Coast Tall and East Coast Tall varieties, with packaging options for wholesale and international trade enquiries.',
    fullDescription:
      'Fresh Indian coconuts can be sourced in fresh and semi-husked forms, along with copra as a related coconut product. The referenced product information identifies West Coast Tall and East Coast Tall varieties and describes packaging and international shipping options.',
    hsCode: '08011910',
    importOrExportCategory: 'Fresh / Semi Husked / Copra',
    tradeType: 'Export Cargo',
    originOrMarketsLabel: 'Target Markets',
    originOrMarkets:
      'GCC countries, including the UAE, Saudi Arabia, Oman, Qatar, Kuwait, and Bahrain, as well as Malaysia',
    varietiesSummary:
      'West Coast Tall, East Coast Tall, Semi-Husked Coconut, and Copra',
    varieties: [
      {
        name: 'West Coast Tall (WCT)',
        scientificOrAlias: 'Traditional Indian Tall Variety',
        description:
          'Grown extensively along the fertile western coastal tract, yielding medium-to-large nuts renowned for thick meat layer, high copra content, and sweet coconut water.',
        characteristics: [
          'High oil & copra content',
          'Heavy meat thickness',
          'Sweet, abundant water',
        ],
      },
      {
        name: 'East Coast Tall (ECT)',
        scientificOrAlias: 'Resilient Coastal Cultivar',
        description:
          'Sturdy nuts with robust fibrous husks and thick shells, ideal for long ocean voyages, wholesale distribution, and extended shelf stability.',
        characteristics: [
          'Thick, resilient shell',
          'Uniform nut weight (550–650g)',
          'Extended transit endurance',
        ],
      },
      {
        name: 'Semi-Husked Coconut & Copra',
        scientificOrAlias: 'Export-Grade Prepared Format',
        description:
          'De-husked leaving a protective tuft of fiber over the coconut eyes to preserve internal water freshness while reducing shipping cube and weight. Also available as dried sun-cured/milling copra for industrial oil processing.',
        characteristics: [
          'Reduced freight weight',
          'Eye-tuft protection',
          'Versatile culinary & copra use',
        ],
      },
    ],
    packaging: 'Mesh bags, corrugated export cartons, and bulk containers',
    packagingDetails: [
      'High-tensile PP ventilated leno mesh bags holding 25 nuts (~13 kg) or 50 nuts (~26 kg)',
      'Corrugated master cartons for premium supermarket and retail distribution',
      'Containerized bulk stowage with dry, ventilated 20ft (holding ~900–1,000 bags) and 40ft containers',
      'Fumigated wooden pallets with plastic strapping and ventilation spacers',
    ],
    shelfLife: '45–60 days, as specified in the source information',
    shelfLifeDetails:
      'Maintains quality for 45 to 60 days under proper dry, ventilated storage conditions, preventing moisture stagnation and premature germination.',
    handlingRequirements:
      'Dry, well-ventilated container transit (10–14°C or ventilated dry container), protected from direct rain, condensation, and excessive moisture.',
    certifications:
      'Phytosanitary Certificate, Certificate of Origin, and APEDA-related information',
    certificationDetails: [
      'Phytosanitary Certificate ensuring freedom from coconut mite, red palm weevil, and seed-borne pathogens',
      'Certificate of Origin confirming Indian cultivation and harvest provenance',
      'APEDA / Coconut Development Board aligned quality grading and export inspection procedures',
      'Methyl bromide or phosphine fumigation certificates as required by destination countries',
    ],
    keyFeatures: [
      'Fresh Indian coconuts sourced directly from mature coastal plantations',
      'Semi-husked coconut options designed for efficient container freight',
      'Copra as a related high-value coconut commodity',
      'Multiple packaging formats (ventilated PP mesh bags, export cartons, bulk)',
      'Wholesale and bulk supply enquiry options for international buyers',
      'International shipping coordination to Gulf and Southeast Asian ports',
    ],
    logisticsSteps: [
      {
        title: 'Farm-Level Sourcing',
        description:
          'Direct sourcing from certified coconut groves across Tamil Nadu (Pollachi belt), Kerala, and Karnataka.',
      },
      {
        title: 'Quality Grading',
        description:
          'Manual grading for full maturity (12–13 months), weight calibration (500g–650g semi-husked), and audible water-sloshing verification.',
      },
      {
        title: 'Export Packaging',
        description:
          'De-husking, crown trimming, grading, and packing in color-coded ventilated mesh bags or reinforced cartons.',
      },
      {
        title: 'Container Loading & Port Coordination',
        description:
          'Careful container stuffing with adequate air passage channels, coordinated through Cochin, Tuticorin, or Chennai ports.',
      },
      {
        title: 'Bulk & Wholesale Supply Arrangements',
        description:
          'Flexible single-container and recurring multi-container supply contracts for wholesalers, distributors, and hypermarkets.',
      },
      {
        title: 'Customs & International Shipping Coordination',
        description:
          'End-to-end export documentation, phytosanitary clearance, bill of lading issuance, and vessel booking.',
      },
    ],
    complianceRequirements: [
      {
        title: 'Phytosanitary Certification',
        description:
          'Mandatory plant health certificate issued by Indian government plant quarantine officers prior to maritime export.',
      },
      {
        title: 'Certificate of Origin',
        description:
          'Official documentation authenticating Indian agricultural provenance for duty and preferential tariff verification.',
      },
      {
        title: 'Customs & Export Documentation',
        description:
          'Commercial invoices, packing lists, shipping bills, and legal regulatory filings under HS Code 08011910.',
      },
      {
        title: 'APEDA-Related Information',
        description:
          'Guidance aligning with APEDA and Coconut Development Board statutory quality benchmarks and export protocols.',
      },
    ],
    complianceDisclaimer:
      'Phytosanitary and regulatory references represent mandatory trade requirements and source-provided export specifications. KRISHI SARTHAK VENTURES LLP coordinates with verified agricultural suppliers and certified port clearing agents for shipment-level compliance.',
    image: '/products/krishi-coconut.jpg',
    imageAlt: 'Fresh Indian Coconuts - Semi-Husked Pollachi Coconuts, Copra, West Coast Tall',
    whatsappMessage:
      'Hello, I would like to enquire about Fresh Indian Coconut from KRISHI SARTHAK VENTURES LLP. Please share the available varieties, packaging options, minimum order quantity, pricing, and delivery details.',
    whatsappUrl: getFreshFruitWhatsAppUrl('Fresh Indian Coconut'),
    enquiryUrl: '/contact?product=Fresh%20Indian%20Coconut',
  },
];
