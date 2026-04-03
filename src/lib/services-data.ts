export type ServiceCategory = "core-rcm" | "clinical" | "practice-ops" | "compliance" | "technology";

export interface Service {
  id: number;
  title: string;
  category: ServiceCategory;
  categoryLabel: string;
  iconName: string;
  description: string;
  bullets: string[];
  stats?: string;
}

export const serviceCategories: { value: ServiceCategory; label: string }[] = [
  { value: "core-rcm", label: "Core RCM" },
  { value: "clinical", label: "Clinical Services" },
  { value: "practice-ops", label: "Practice Operations" },
  { value: "compliance", label: "Compliance & Admin" },
  { value: "technology", label: "Technology" },
];

export const services: Service[] = [
  {
    id: 1,
    title: "Revenue Cycle Management",
    category: "core-rcm",
    categoryLabel: "Core RCM",
    iconName: "TrendingUp",
    description: "Full end-to-end RCM from claim submission through remittance, AR management, and comprehensive reporting. We optimize every step of your revenue cycle to maximize collections and minimize delays.",
    bullets: [
      "Complete claim lifecycle management from submission to payment",
      "Real-time dashboards with full revenue visibility",
      "Payer-specific rule engine for claim scrubbing",
    ],
    stats: "94% first-pass | <3% denial rate | 33% faster payments",
  },
  {
    id: 2,
    title: "Medical Billing Services",
    category: "core-rcm",
    categoryLabel: "Core RCM",
    iconName: "FileText",
    description: "Transparent billing with real-time claim tracking and clearinghouse connections including Change Healthcare, TriZetto, and Availity. Access to a 1M+ payer network ensures every claim reaches the right destination.",
    bullets: [
      "Real-time claim tracking and status updates",
      "Clearinghouse integrations: Change Healthcare, TriZetto, Availity",
      "1M+ payer network for comprehensive coverage",
    ],
  },
  {
    id: 3,
    title: "Denial Management",
    category: "core-rcm",
    categoryLabel: "Core RCM",
    iconName: "ShieldCheck",
    description: "Root-cause analysis, automated appeals, and strategic resubmissions. We identify denial patterns and fix them permanently so your practice stops losing revenue to preventable rejections.",
    bullets: [
      "Root-cause analysis on every denied claim",
      "Automated appeal generation and tracking",
      "Pattern identification to prevent future denials",
    ],
    stats: "Average denial reduction: 78%",
  },
  {
    id: 4,
    title: "AR Management",
    category: "core-rcm",
    categoryLabel: "Core RCM",
    iconName: "BarChart3",
    description: "Aging report analysis, payer follow-up, and strategic collections. We handle out-of-network negotiations and patient balance management to recover maximum revenue.",
    bullets: [
      "Aging report analysis and prioritized follow-up",
      "Out-of-network negotiations and appeals",
      "Patient balance management and payment plans",
    ],
  },
  {
    id: 5,
    title: "Medical Coding Services",
    category: "clinical",
    categoryLabel: "Clinical Services",
    iconName: "Code2",
    description: "AAPC and AHIMA certified coders handle CPT, ICD-10, and HCPCS coding for 50+ specialties. We stay current with all coding compliance updates to ensure accurate reimbursement.",
    bullets: [
      "AAPC/AHIMA certified coding professionals",
      "CPT, ICD-10, HCPCS for 50+ specialties",
      "Real-time coding compliance updates",
    ],
  },
  {
    id: 6,
    title: "Medical Transcription",
    category: "clinical",
    categoryLabel: "Clinical Services",
    iconName: "FileEdit",
    description: "Fast, accurate clinical documentation transcription with a HIPAA-compliant workflow. Our team delivers reliable transcription with 24-48 hour turnaround times.",
    bullets: [
      "HIPAA-compliant transcription workflow",
      "24-48 hour turnaround time",
      "Quality assurance review on every document",
    ],
  },
  {
    id: 7,
    title: "Electronic Health Records (EHR)",
    category: "clinical",
    categoryLabel: "Clinical Services",
    iconName: "Monitor",
    description: "Cloud-based EHR accessible on desktop, tablet, and mobile. Features point-of-care documentation, drug interaction alerts, and 100+ customizable templates for efficient charting.",
    bullets: [
      "Cloud-based access on desktop, tablet, and mobile",
      "Drug interaction alerts and clinical decision support",
      "100+ customizable documentation templates",
    ],
  },
  {
    id: 8,
    title: "Remote Patient Monitoring (RPM)",
    category: "clinical",
    categoryLabel: "Clinical Services",
    iconName: "Activity",
    description: "End-to-end RPM program management including device setup, patient outreach, and billing for all RPM CPT codes (99453, 99454, 99457, 99458).",
    bullets: [
      "Complete device setup and patient onboarding",
      "Continuous patient outreach and engagement",
      "Full billing for RPM CPT codes 99453-99458",
    ],
  },
  {
    id: 9,
    title: "Chronic Care Management (CCM)",
    category: "clinical",
    categoryLabel: "Clinical Services",
    iconName: "HeartPulse",
    description: "Monthly care coordination for chronic condition patients. We handle CCM billing and documentation for CPT 99490, 99491, and 99487 so you can focus on patient care.",
    bullets: [
      "Monthly care coordination and patient follow-up",
      "Complete CCM documentation and compliance",
      "Billing for CPT 99490, 99491, 99487",
    ],
  },
  {
    id: 10,
    title: "Practice Management",
    category: "practice-ops",
    categoryLabel: "Practice Operations",
    iconName: "LayoutDashboard",
    description: "Comprehensive appointment scheduling, staff management, and resource planning integrated with billing and EHR. Real-time analytics dashboards give you complete visibility.",
    bullets: [
      "Integrated scheduling and resource planning",
      "Staff management and workflow optimization",
      "Real-time analytics and reporting dashboards",
    ],
  },
  {
    id: 11,
    title: "Patient Experience Management",
    category: "practice-ops",
    categoryLabel: "Practice Operations",
    iconName: "Users",
    description: "Patient portal, secure messaging, digital intake forms, and appointment reminders. Offer flexible payment options including credit card, payment plans, and ACH processing.",
    bullets: [
      "Secure patient portal with messaging",
      "Digital intake forms and appointment reminders",
      "Flexible payments: credit card, plans, ACH",
    ],
  },
  {
    id: 12,
    title: "Telehealth",
    category: "practice-ops",
    categoryLabel: "Practice Operations",
    iconName: "Video",
    description: "HIPAA-compliant video visits with integrated scheduling and seamless telehealth billing included. Expand your reach and provide care from anywhere.",
    bullets: [
      "HIPAA-compliant video conferencing",
      "Integrated scheduling and patient notifications",
      "Seamless telehealth billing included",
    ],
  },
  {
    id: 13,
    title: "FrontDesk Assist",
    category: "practice-ops",
    categoryLabel: "Practice Operations",
    iconName: "Phone",
    description: "Virtual front desk for scheduling, insurance verification, and patient intake. Choose from live and remote staffing options to fit your practice needs.",
    bullets: [
      "Virtual scheduling and patient intake",
      "Real-time insurance verification",
      "Live and remote staffing options",
    ],
  },
  {
    id: 14,
    title: "Staff Augmentation",
    category: "practice-ops",
    categoryLabel: "Practice Operations",
    iconName: "UserPlus",
    description: "Trained billing and administrative staff available on demand. Full-time or part-time options with zero hiring burden — we handle recruiting, training, and management.",
    bullets: [
      "Pre-trained billing and admin professionals",
      "Full-time or part-time flexible arrangements",
      "Zero hiring burden — we manage everything",
    ],
  },
  {
    id: 15,
    title: "Physician Credentialing",
    category: "compliance",
    categoryLabel: "Compliance & Admin",
    iconName: "BadgeCheck",
    description: "Full credentialing with all major payers to prevent payment delays. We specialize in startup practices and ensure every provider is enrolled and ready to bill from day one.",
    bullets: [
      "Full enrollment with all major payers",
      "Prevents payment delays and claim rejections",
      "Startup practice credentialing specialists",
    ],
  },
  {
    id: 16,
    title: "Medical Document Indexing",
    category: "compliance",
    categoryLabel: "Compliance & Admin",
    iconName: "FolderSearch",
    description: "Organize, classify, and index medical records for fast retrieval and compliance-ready storage. Streamline your document management workflow.",
    bullets: [
      "Automated classification and organization",
      "Fast retrieval with intelligent search",
      "Compliance-ready storage and archival",
    ],
  },
  {
    id: 17,
    title: "Revenue Cycle Benchmarking",
    category: "compliance",
    categoryLabel: "Compliance & Admin",
    iconName: "BarChart3",
    description: "Compare your KPIs against 500+ practices in your specialty. Receive actionable recommendations to close performance gaps and maximize revenue.",
    bullets: [
      "Benchmark against 500+ peer practices",
      "Specialty-specific KPI comparisons",
      "Actionable recommendations to close gaps",
    ],
  },
  {
    id: 18,
    title: "Hospital RCM Consulting",
    category: "compliance",
    categoryLabel: "Compliance & Admin",
    iconName: "Building2",
    description: "Strategic RCM assessment for hospitals and health systems. Our consultants provide process redesign, implementation support, and ongoing optimization.",
    bullets: [
      "Comprehensive RCM process assessment",
      "Strategic process redesign and improvement",
      "Implementation support and change management",
    ],
  },
  {
    id: 19,
    title: "Managed IT Services",
    category: "technology",
    categoryLabel: "Technology",
    iconName: "Server",
    description: "Healthcare IT support, network monitoring, and remote workstation management. We build and maintain HIPAA-compliant IT infrastructure for your practice.",
    bullets: [
      "24/7 healthcare IT support and monitoring",
      "HIPAA-compliant infrastructure management",
      "Remote workstation setup and maintenance",
    ],
  },
  {
    id: 20,
    title: "Interoperability / Data Connectivity",
    category: "technology",
    categoryLabel: "Technology",
    iconName: "Network",
    description: "Connect disparate EHRs and healthcare systems for seamless data exchange. Our HL7 FHIR-compliant data pipelines ensure interoperability across your organization.",
    bullets: [
      "Connect disparate EHR and healthcare systems",
      "HL7 FHIR-compliant data pipelines",
      "Seamless bidirectional data exchange",
    ],
  },
  {
    id: 21,
    title: "Robotic Process Automation (RPA)",
    category: "technology",
    categoryLabel: "Technology",
    iconName: "Bot",
    description: "Automate repetitive billing tasks and reduce manual errors with custom bots. We build automation for eligibility checks, claim status inquiries, and payment posting.",
    bullets: [
      "Custom bots for eligibility and claim status",
      "Automated payment posting and reconciliation",
      "Reduce manual errors by up to 90%",
    ],
  },
];
