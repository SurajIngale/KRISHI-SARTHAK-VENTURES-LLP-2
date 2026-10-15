import {
  Ship,
  Compass,
  Truck,
  ClipboardList,
  LucideIcon,
  ShieldCheck,
  CheckCircle2,
  FileCheck2,
  Globe2,
  PackageCheck,
  Building2,
  Layers,
  ArrowRight,
  Anchor,
  FileText,
  Boxes,
} from 'lucide-react';

export interface ServiceDetail {
  id: string;
  slug: string;
  route: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heading: string;
  subtitle: string;
  badge: string;
  icon: LucideIcon;
  cardDescription: string;
  overview: string[];
  scopeNote?: string;
  keyServiceAreasTitle: string;
  keyServiceAreas: {
    title: string;
    description: string;
    icon?: LucideIcon;
    badge?: string;
    subItems?: string[];
  }[];
  keyPointsTitle: string;
  keyPointsSubtitle?: string;
  keyPoints: string[];
  safeguardNote?: string;
  processTitle: string;
  processSubtitle: string;
  processSteps: {
    step: string;
    title: string;
    description: string;
  }[];
  enquiry: {
    heading: string;
    description: string;
    primaryBtn: string;
    secondaryBtn: string;
  };
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const SERVICES_LIST: ServiceDetail[] = [
  {
    id: 'shipments',
    slug: 'shipments',
    route: '/services/shipments',
    title: 'Shipment Services',
    metaTitle: 'Shipment Services | KRISHI SARTHAK VENTURES LLP',
    metaDescription:
      'Shipment coordination for group and individual consignments, including product sourcing guidance, documentation, freight booking, and international logistics coordination.',
    heading: 'Group & Individual Shipments',
    subtitle: 'Shipment Coordination and International Trade Support',
    badge: 'Consignments',
    icon: Ship,
    cardDescription:
      'Shipment coordination for group and individual consignments, including product sourcing guidance, documentation, freight booking, and international logistics coordination.',
    overview: [
      'KRISHI SARTHAK VENTURES LLP provides shipment coordination services designed to support businesses involved in international trade.',
      'Shipment coordination can include product procurement guidance, export documentation, container booking, customs clearance coordination, freight booking, and international logistics management.',
      'The exact services depend on the shipment, product, destination, and agreed scope of work.',
    ],
    scopeNote:
      'All coordination activities are structured according to agreed transaction parameters, carrier availability, and destination country import protocols.',
    keyServiceAreasTitle: 'Key Service Areas',
    keyServiceAreas: [
      {
        title: 'Group Shipments',
        badge: 'Consolidation',
        description:
          'Group shipment arrangements may help businesses coordinate smaller consignments with other compatible shipments where practical. Services cover planning, documentation, freight arrangement, and shipment consolidation as applicable. (Note: Consolidation schedules and specific cost savings depend on compatible cargo availability and cannot be universally guaranteed).',
      },
      {
        title: 'Individual Shipments',
        badge: 'Dedicated FCL',
        description:
          'Shipment coordination for individual consignments tailored specifically to the customer’s product characteristics, required volume, destination port, and transport timelines. Covers planning, documentation guidance, freight coordination, and execution support.',
      },
      {
        title: 'Product Procurement Guidance',
        badge: 'Origin Sourcing',
        description:
          'Assistance with identifying suitable export-grade products and coordinating sourcing requirements for international trade, verifying quality parameters, and aligning with destination buyer expectations.',
      },
      {
        title: 'Export Documentation Guidance',
        badge: 'Regulatory',
        description:
          'Preparation and coordination of relevant commercial, shipping, and regulatory documents necessary for legitimate export transit, customs filing, and buyer clearance.',
      },
      {
        title: 'Customs Clearance Coordination',
        badge: 'Port Facilitation',
        description:
          'Coordination with relevant customs and logistics stakeholders to support shipment clearance. (KRISHI SARTHAK VENTURES LLP liaises with authorized customs brokers and clearance intermediaries and does not claim to act as an independent customs broker).',
      },
      {
        title: 'Freight Booking',
        badge: 'Shipping Lines',
        description:
          'Coordination of suitable freight options and shipping-line arrangements according to cargo specifications, container availability, and agreed transit windows.',
      },
      {
        title: 'International Logistics Management',
        badge: 'End-to-End',
        description:
          'Comprehensive coordination of shipment movement, reefer and dry container planning, milestone documentation, and proactive communication throughout the shipping cycle.',
      },
    ],
    keyPointsTitle: 'Key Points of Shipment Services',
    keyPointsSubtitle:
      'Core capabilities and coordination scope designed to streamline cross-border cargo transit.',
    keyPoints: [
      'Group and individual shipment coordination',
      'Product sourcing guidance',
      'Export documentation support',
      'Customs clearance coordination',
      'Freight booking coordination',
      'Container and shipment planning',
      'International logistics coordination',
    ],
    safeguardNote:
      'KRISHI SARTHAK VENTURES LLP does not stipulate arbitrary minimum investment figures, guaranteed shipping rates, guaranteed delivery schedules, or guaranteed cost savings.',
    processTitle: 'How the Service Works',
    processSubtitle:
      'A structured four-step coordination workflow from initial requirement review to shipment execution.',
    processSteps: [
      {
        step: '01',
        title: 'Share Shipment Requirements',
        description:
          'The customer provides product details, quantity, destination, and expected shipment requirements.',
      },
      {
        step: '02',
        title: 'Review and Planning',
        description:
          'The shipment requirements are reviewed to identify suitable sourcing, documentation, and logistics arrangements.',
      },
      {
        step: '03',
        title: 'Documentation and Coordination',
        description:
          'Relevant documentation, freight arrangements, and clearance coordination are organized as applicable.',
      },
      {
        step: '04',
        title: 'Shipment Coordination',
        description:
          'The shipment is coordinated according to the agreed arrangements and applicable requirements.',
      },
    ],
    enquiry: {
      heading: 'Need Support with Your Shipment?',
      description:
        'Contact KRISHI SARTHAK VENTURES LLP to discuss your product, shipment quantity, destination, and international logistics requirements.',
      primaryBtn: 'Request Shipment Enquiry',
      secondaryBtn: 'Contact Us',
    },
    faqs: [
      {
        question: 'Do you support group and individual shipments?',
        answer:
          'Yes. Shipment coordination can be discussed for group or individual consignments depending on product compatibility, volume requirements, origin cluster, and shipping-line schedules.',
      },
      {
        question: 'Can you assist with export documentation?',
        answer:
          'Yes. Guidance and coordination may be available for relevant commercial, regulatory, and shipping documents, depending on the shipment specifications and agreed scope of services.',
      },
      {
        question: 'Can you coordinate customs clearance?',
        answer:
          'Yes. Customs clearance coordination can be included where applicable, subject to shipment requirements and coordination with licensed customs clearance partners.',
      },
      {
        question: 'What information is required for a shipment enquiry?',
        answer:
          'To evaluate your shipment, please provide: product description, total quantity or volume, origin location, destination country and port, preferred transport mode (sea/air), packaging requirements, and target timeline.',
      },
    ],
  },
  {
    id: 'global-trade-consultancy',
    slug: 'global-trade-consultancy',
    route: '/services/global-trade-consultancy',
    title: 'Global Trade Consultancy',
    metaTitle: 'Global Trade Consultancy | KRISHI SARTHAK VENTURES LLP',
    metaDescription:
      'Trade advisory, market intelligence, product and market evaluation, buyer-supplier opportunity research, and trade planning.',
    heading: 'Global Trade Consultancy',
    subtitle: 'International Trade Advisory and Market Development Support',
    badge: 'Advisory',
    icon: Compass,
    cardDescription:
      'Trade advisory, market intelligence, product and market evaluation, buyer-supplier opportunity research, and trade planning.',
    overview: [
      'KRISHI SARTHAK VENTURES LLP aims to support businesses in navigating international trade through market intelligence, trade advisory, documentation guidance, buyer-supplier network development, and trade execution planning.',
      'Our approach focuses on helping businesses understand international markets, evaluate trade opportunities, and coordinate the activities required to pursue import-export opportunities.',
    ],
    scopeNote:
      'Consultancy advisory is structured around empirical market data, verified regulatory frameworks, and realistic commercial feasibility.',
    keyServiceAreasTitle: 'Key Consultancy Services',
    keyServiceAreas: [
      {
        title: 'International Trade Advisory',
        badge: 'Strategic Direction',
        description:
          'Guidance on international trade requirements, import-export operational processes, market entry considerations, and structured trade planning.',
      },
      {
        title: 'Market Research and Intelligence',
        badge: 'Data & Insights',
        description:
          'Research into potential overseas destination markets, product demand trends, prevailing price benchmarks, and relevant commercial considerations.',
      },
      {
        title: 'Product and Market Selection',
        badge: 'Opportunity Fit',
        description:
          'Assessing potential products and destination markets according to import demand, sourcing availability, competition, tariffs, and regulatory requirements.',
      },
      {
        title: 'Buyer-Supplier Network Development',
        badge: 'Commercial Linkages',
        description:
          'Assistance with identifying potential buyers and suppliers and exploring suitable commercial relationships. (Note: Specific commercial relationships or purchase contracts are subject to independent mutual agreement and are not claimed as pre-existing guarantees).',
      },
      {
        title: 'Trade Compliance Guidance',
        badge: 'Standards & Rules',
        description:
          'Understanding relevant trade rules, documentation requirements, sanitary/phytosanitary guidelines, and product-specific import regulations.',
      },
      {
        title: 'Export-Import Business Planning',
        badge: 'Operations',
        description:
          'Support with planning operational workflows, cash-flow milestones, risk mitigation steps, and resources required to pursue import-export opportunities.',
      },
      {
        title: 'Trade Execution Coordination',
        badge: 'Integration',
        description:
          'Reviewing how sourcing, documentation, freight planning, and logistics coordination work together cohesively when planning an international transaction.',
      },
    ],
    keyPointsTitle: 'Key Benefits of Trade Advisory',
    keyPointsSubtitle:
      'Structured insights to reduce uncertainty and build clarity in international commerce.',
    keyPoints: [
      'Better understanding of international markets',
      'Structured product and market evaluation',
      'Improved awareness of trade documentation',
      'More informed sourcing decisions',
      'Buyer-supplier opportunity assessment',
      'Better coordination of trade activities',
    ],
    safeguardNote:
      'Advisory services provide strategic support and commercial analysis. We do not guarantee export orders, business profits, buyer contracts, or guaranteed market entry.',
    processTitle: 'Our Consultancy Approach',
    processSubtitle:
      'A systematic four-phase methodology to transition from exploration to actionable trade planning.',
    processSteps: [
      {
        step: '01',
        title: 'Understand Business Requirements',
        description:
          "Review the customer's products, objectives, capacity, and target markets.",
      },
      {
        step: '02',
        title: 'Analyze Market Opportunities',
        description:
          'Assess relevant market information, demand drivers, and potential trade opportunities.',
      },
      {
        step: '03',
        title: 'Identify Trade Requirements',
        description:
          'Review applicable documentation, product standards, tariff schedules, and operational considerations.',
      },
      {
        step: '04',
        title: 'Develop an Action Plan',
        description:
          'Outline potential next steps for sourcing, buyer-supplier coordination, and trade execution.',
      },
    ],
    enquiry: {
      heading: 'Planning to Expand into International Markets?',
      description:
        'Discuss your product, target country, and business objectives with KRISHI SARTHAK VENTURES LLP.',
      primaryBtn: 'Request Consultation',
      secondaryBtn: 'Contact Us',
    },
    faqs: [
      {
        question: 'What is global trade consultancy?',
        answer:
          'Global trade consultancy involves advisory and planning support for businesses seeking to explore, initiate, or strengthen their import-export operations in foreign markets.',
      },
      {
        question: 'Can you help identify potential international markets?',
        answer:
          'Yes. Market research and opportunity assessment can be evaluated based on your specific product portfolio, production scale, and target regional interests.',
      },
      {
        question: 'Can you help with buyer and supplier identification?',
        answer:
          'Yes. Buyer-supplier research and network development support may be available depending on the product category, market destination, and project scope.',
      },
      {
        question: 'Can you provide guidance on trade documentation?',
        answer:
          'Yes. Relevant documentation requirements, regulatory compliance, and product standards can be reviewed as part of the agreed consultancy scope.',
      },
    ],
  },
  {
    id: 'freight-forwarding-logistics',
    slug: 'freight-forwarding-logistics',
    route: '/services/freight-forwarding-logistics',
    title: 'Freight Forwarding & Logistics',
    metaTitle: 'Freight Forwarding & Logistics | KRISHI SARTHAK VENTURES LLP',
    metaDescription:
      'Sea freight, air freight, customs coordination, inland transportation, and related international shipping arrangements.',
    heading: 'Freight Forwarding & Logistics Services',
    subtitle: 'Coordinated Shipping Solutions for International Trade',
    badge: 'Multi-Modal',
    icon: Truck,
    cardDescription:
      'Sea freight, air freight, customs coordination, inland transportation, and related international shipping arrangements.',
    overview: [
      'Freight forwarding and logistics involve coordinating the movement of goods between origins and destinations through appropriate transport and handling arrangements.',
      'Logistics planning may include sea freight, air freight, customs coordination, inland transportation, cargo handling, documentation, and other services relevant to a shipment.',
      'The appropriate solution depends on cargo type, dimensions, weight, destination, delivery requirements, and available transport options.',
    ],
    scopeNote:
      'Multi-modal transport solutions are designed to preserve cargo integrity, particularly for perishable agricultural goods and sensitive commodities.',
    keyServiceAreasTitle: 'Key Logistics Services',
    keyServiceAreas: [
      {
        title: 'Sea Freight Services',
        badge: 'Maritime Transport',
        description:
          'Ocean freight coordination covering Full Container Load (FCL), Less than Container Load (LCL), bulk cargo handling where applicable, and port-to-port coordination aligned with shipping line schedules.',
      },
      {
        title: 'Air Freight Services',
        badge: 'Expedited Transit',
        description:
          'Air cargo coordination for shipments where transit time, cargo shelf life, and cost requirements make air transport the most suitable solution.',
      },
      {
        title: 'Customs Clearance Coordination',
        badge: 'Regulatory Clearance',
        description:
          'Assistance coordinating export and import documentation and clearance activities with relevant licensed customs service providers and terminal operators.',
      },
      {
        title: 'Inland Transportation',
        badge: 'First & Last Mile',
        description:
          'Coordination of cargo movement between origin packhouses, agricultural collection centers, processing warehouses, inland container depots (ICD), and maritime ports or air cargo complexes.',
      },
      {
        title: 'Warehousing and Cargo Handling',
        badge: 'Storage & Handling',
        description:
          'Warehousing and cargo-handling coordination where these services are available and appropriate for the shipment. (Note: Warehousing and fleet operations are coordinated through third-party infrastructure and not directly owned).',
      },
      {
        title: 'Door-to-Door Logistics Coordination',
        badge: 'End-to-End Delivery',
        description:
          'Coordinating pickup, origin handling, ocean/air transport, and destination delivery where applicable and feasible within the agreed route and service scope.',
      },
      {
        title: 'Shipping Documentation Coordination',
        badge: 'Accurate Records',
        description:
          'Coordination of accurate shipment information and commercial documents, including Bills of Lading, Air Waybills, packing lists, and regulatory clearance paperwork.',
      },
    ],
    keyPointsTitle: 'Why Consider Our Logistics Coordination?',
    keyPointsSubtitle:
      'Comprehensive logistics alignment tailored to perishable commodities and international trade cargo.',
    keyPoints: [
      'Multiple transport options',
      'Shipment planning',
      'Cargo-handling coordination',
      'Documentation accuracy',
      'Customs coordination',
      'Inland transportation planning',
      'Communication across shipment stages',
    ],
    safeguardNote:
      'Logistics arrangements are subject to carrier space availability, prevailing seasonal freight markets, port handling conditions, and customs authority approvals. We do not promise fixed freight rates or guaranteed delivery dates.',
    processTitle: 'How Logistics Coordination Works',
    processSubtitle:
      'From cargo specifications to destination delivery, each phase is systematically planned and executed.',
    processSteps: [
      {
        step: '01',
        title: 'Cargo Details',
        description:
          'Collect product type, weight, dimensions, quantity, origin, and destination.',
      },
      {
        step: '02',
        title: 'Transport Planning',
        description:
          'Review available transport options according to the cargo characteristics, shelf life, and timeline.',
      },
      {
        step: '03',
        title: 'Documentation and Booking',
        description:
          'Coordinate relevant shipping documents, carrier bookings, and customs pre-filing requirements.',
      },
      {
        step: '04',
        title: 'Shipment Movement',
        description:
          'Coordinate the agreed transport, terminal handling, and transit updates through to delivery.',
      },
    ],
    enquiry: {
      heading: 'Looking for Freight and Logistics Support?',
      description:
        'Share your cargo details, origin, destination, and preferred shipping requirements to discuss a suitable logistics arrangement.',
      primaryBtn: 'Request Freight Enquiry',
      secondaryBtn: 'Contact Us',
    },
    faqs: [
      {
        question: 'What is freight forwarding?',
        answer:
          'Freight forwarding coordinates the movement of goods between international origins and destinations through transport carriers, shipping lines, and associated logistics service providers.',
      },
      {
        question: 'Do you support sea and air freight?',
        answer:
          'Yes. Sea and air freight options can be evaluated and discussed based on cargo perishability, volume, delivery timeline requirements, and carrier availability.',
      },
      {
        question: 'Can you coordinate customs clearance?',
        answer:
          'Yes. Relevant customs documentation and clearance coordination may be included in the agreed service scope, working with licensed customs clearance partners.',
      },
      {
        question: 'Is door-to-door delivery available?',
        answer:
          'Door-to-door arrangements depend on the destination country, customs regulations, available domestic delivery infrastructure, and the agreed scope of services.',
      },
      {
        question: 'What information is required for a freight enquiry?',
        answer:
          'Please provide: cargo description, total quantity, packaging dimensions, gross weight, origin address/port, destination port or city, and preferred shipping timeline.',
      },
    ],
  },
  {
    id: 'documentation-services',
    slug: 'documentation-services',
    route: '/services/documentation-services',
    title: 'Documentation Services',
    metaTitle: 'Export-Import Documentation Services | KRISHI SARTHAK VENTURES LLP',
    metaDescription:
      'Guidance and coordination concerning IEC, DGFT, RCMC, AD Code, ICEGATE, and applicable business and product-specific documentation.',
    heading: 'Export-Import Registration & Documentation Services',
    subtitle: 'Registration and Documentation Support for International Trade',
    badge: 'Compliance',
    icon: ClipboardList,
    cardDescription:
      'Guidance and coordination concerning IEC, DGFT, RCMC, AD Code, ICEGATE, and applicable business and product-specific documentation.',
    overview: [
      'Export-import documentation involves preparing, coordinating, and reviewing the documents and registrations that may be required for business formation, international trade, customs processing, and product-specific compliance.',
      'KRISHI SARTHAK VENTURES LLP can present documentation-related support and guidance in accordance with the services it is able to provide and the requirements of each business.',
    ],
    scopeNote:
      'Note: KRISHI SARTHAK VENTURES LLP provides procedural advisory and coordination support. The company does not itself issue statutory registrations, government licenses, or regulatory certificates.',
    keyServiceAreasTitle: 'Key Documentation and Registration Categories',
    keyServiceAreas: [
      {
        title: 'Business Formation and Registration Guidance',
        badge: 'Entity Setup',
        description:
          'Guidance on foundational business structures and statutory registrations, including Proprietorship registration support, Company formation guidance, GST registration, Shop Act registration, Udyam / MSME registration, and baseline Import Export registration. Applicability depends on business constitution and regulatory mandates.',
      },
      {
        title: 'Import Export Code (IEC)',
        badge: 'DGFT Primary Code',
        description:
          'Detailed guidance on the role of the 10-digit Import Export Code issued by the Directorate General of Foreign Trade (DGFT), documentation preparation, correct application details, and supporting paperwork.',
      },
      {
        title: 'DGFT-Related Documentation',
        badge: 'Foreign Trade Policy',
        description:
          'Guidance concerning relevant DGFT procedures, export authorizations, online portal updates, and trade requirements where applicable.',
      },
      {
        title: 'RCMC Registration',
        badge: 'Export Promotion Councils',
        description:
          'Guidance on Registration-Cum-Membership Certificate (RCMC) procedures depending on the relevant export promotion council, commodity board, and nature of business activity.',
      },
      {
        title: 'AD Code Registration',
        badge: 'Banking & Customs',
        description:
          'Documentation coordination associated with Authorized Dealer (AD) Code registration with bank branches and port customs for export transactions and foreign remittances.',
      },
      {
        title: 'ICEGATE Registration',
        badge: 'Customs Digital Portal',
        description:
          'Registration-related guidance and credential coordination for the Indian Customs Electronic Gateway (ICEGATE) to enable electronic filing and trade processing.',
      },
      {
        title: 'Port Registration & Shipping Documentation',
        badge: 'Trade Paperwork',
        description:
          'Applicable documentation coordination for Port registration, Shipping Bill filing, Bill of Lading coordination, Bill of Entry documentation (where applicable), Certificate of Origin, and Phytosanitary documentation.',
      },
      {
        title: 'Product-Specific Registration & Certification Guidance',
        badge: 'Statutory Boards',
        description:
          'Guidance regarding statutory board registrations including APEDA registration, Spices Board registration, Coconut Development Board registration, FIEO membership, EEPC registration, Phytosanitary Certificate, and Certificate of Origin. FSSAI, ISO, and related certifications are referenced only where applicable to the specific business or commodity.',
      },
    ],
    keyPointsTitle: 'Key Benefits of Documentation Support',
    keyPointsSubtitle:
      'Ensuring regulatory diligence and systematic preparation for international procedures.',
    keyPoints: [
      'Better understanding of documentation requirements',
      'Structured application preparation',
      'Awareness of relevant registrations',
      'Documentation coordination',
      'Improved readiness for applicable trade procedures',
      'Guidance on product-specific requirements',
    ],
    safeguardNote:
      'These represent documentation and registration categories. KRISHI SARTHAK VENTURES LLP does not display unverified third-party certificates or logos. Final approval and issuance depend entirely upon the relevant statutory authority.',
    processTitle: 'Documentation Process',
    processSubtitle:
      'A methodical four-step coordination framework to prepare, review, and file trade documentation.',
    processSteps: [
      {
        step: '01',
        title: 'Understand the Business',
        description:
          'Collect the business structure, products, intended activities, and applicable requirements.',
      },
      {
        step: '02',
        title: 'Identify Relevant Requirements',
        description:
          'Determine which registrations and documents may be required under current foreign trade policy and destination standards.',
      },
      {
        step: '03',
        title: 'Prepare Documentation',
        description:
          'Coordinate application information and supporting documents according to the agreed service scope.',
      },
      {
        step: '04',
        title: 'Submission and Follow-up',
        description:
          'Where included in the service scope, coordinate submission and follow-up with the relevant authorities or service providers. Final approval depends on the relevant authority and the applicant meeting statutory requirements.',
      },
    ],
    enquiry: {
      heading: 'Need Help with Export-Import Documentation?',
      description:
        'Discuss your business structure, product category, and intended import-export activities to understand which registrations and documents may be relevant.',
      primaryBtn: 'Request Documentation Enquiry',
      secondaryBtn: 'Contact Us',
    },
    faqs: [
      {
        question: 'What export-import documentation services are covered?',
        answer:
          'Coordination and guidance can cover IEC, DGFT procedures, RCMC with promotion councils, AD Code port registration, ICEGATE credentials, shipping documentation (Shipping Bills, Bills of Lading), Certificate of Origin, and relevant product-specific certifications.',
      },
      {
        question: 'Can you assist with IEC registration?',
        answer:
          'Yes. We provide guidance on DGFT application requirements, documentation checklists, and filing procedures for obtaining an Import Export Code.',
      },
      {
        question: 'Do all businesses require the same registrations?',
        answer:
          'No. Registration requirements vary according to business constitution (Proprietorship, LLP, Pvt Ltd), products handled (fresh produce vs. manufactured goods), and destination country requirements.',
      },
      {
        question: 'Can you assist with product-specific certifications?',
        answer:
          'Yes. Guidance is available for registrations under commodity boards such as APEDA, Spices Board, Coconut Development Board, and for Phytosanitary and Origin certificates as appropriate.',
      },
      {
        question: 'Are registrations and approvals guaranteed?',
        answer:
          'No. All official registrations, licenses, and statutory certificates are evaluated and approved solely by the respective government authorities and cannot be guaranteed.',
      },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return SERVICES_LIST.find((s) => s.slug === slug);
}

export function getOtherServices(currentSlug: string): ServiceDetail[] {
  return SERVICES_LIST.filter((s) => s.slug !== currentSlug);
}
