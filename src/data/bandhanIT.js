// Bandhan Bank — IT organisation (roles only, no names — people change, positions stay).
// Under the Chief Information Officer (CIO): the Head-IT functions and the
// Lead-IT teams under each, explained in plain English with a bit of depth.

export const itRoot = {
  name: "Chief Information Officer (CIO)",
  what: "The single head of all technology in the bank. Every IT team below — core banking, payments, ATMs, mobile apps, infrastructure — reports up to the CIO. Sets the technology direction and is answerable for IT running smoothly, safely, and within RBI rules.",
};

export const itFunctions = [
  {
    id: "it-assets-obdx",
    name: "IT Solutions – Assets & OBDX",
    color: "#3B82F6",
    what: "Builds and maintains the software behind every loan the bank gives, plus the digital banking platform customers log into. If a loan product or the net/mobile banking app needs a new feature or a fix, this team delivers it.",
    items: [
      { name: "Assets – Housing Finance & Retail Assets", what: "Looks after the technology for home loans and everyday retail loans (personal, gold, auto) — the systems that process these loans from application to closure." },
      { name: "Assets – EEB", what: "Runs the tech for the microfinance business (group and individual micro-loans) — the high-volume, small-ticket lending that is Bandhan's roots." },
      { name: "OBDX", what: "Manages Oracle's digital banking platform that powers net banking and the mobile app, sitting on top of the core banking system." },
    ],
  },
  {
    id: "it-payments-govt",
    name: "Payments & Govt. Banking Technology",
    color: "#10B981",
    what: "Owns every way money moves in and out of the bank, plus the systems for handling government money. When you send a UPI payment or the bank collects a tax, this team's systems make it happen.",
    items: [
      { name: "Development (Java Tech)", what: "The in-house team that writes custom software in Java for the bank's own needs, instead of always buying ready-made products." },
      { name: "Digital Payment", what: "Runs UPI, IMPS, and other instant digital payment rails that customers use every day." },
      { name: "Payment System", what: "Looks after the core payment switches and bank-to-bank rails like NEFT and RTGS." },
      { name: "Clearing & Settlement, Currency Chest", what: "Handles cheque clearing, settling money between banks, and the systems that track physical cash held in currency chests." },
      { name: "Govt. Banking", what: "Runs the technology for collecting taxes, paying pensions, and managing the government accounts the bank handles as RBI's agent." },
    ],
  },
  {
    id: "it-corporate",
    name: "Corporate IT",
    color: "#F59E0B",
    what: "Technology for corporate and business banking, and the plumbing that connects the bank's many systems together.",
    items: [
      { name: "CMC & Integration", what: "Builds corporate/cash-management systems and the integrations (APIs, host-to-host links) that let a company's ERP talk directly to the bank." },
    ],
  },
  {
    id: "it-grc-pmo",
    name: "GRC & IT PMO",
    color: "#A855F7",
    what: "Two jobs in one — keep IT properly governed and risk-free, and run IT projects on time. This is the control and delivery backbone of the whole IT department.",
    items: [
      { name: "Governance, Risk & Compliance", what: "Makes sure IT follows RBI rules and internal policies, and keeps technology risks (security, outages, audit findings) under control." },
      { name: "IT PMO", what: "Plans, tracks, and delivers IT projects — budgets, timelines, vendors, and go-lives. (This is exactly the kind of work a PMO does.)" },
    ],
  },
  {
    id: "it-cbs",
    name: "CBS & Application Support",
    color: "#06B6D4",
    what: "Looks after the Core Banking System — the heart of the bank that holds every account — and keeps the applications running without breaks.",
    items: [
      { name: "CBS Application Support", what: "Day-to-day support of the core banking software — fixing issues so accounts, transactions, and interest keep working correctly." },
      { name: "CBS Tuning & Improvement", what: "Continuously makes the core banking system faster, more stable, and better at handling heavy load." },
    ],
  },
  {
    id: "it-liabilities-enterprise",
    name: "Liabilities, Enterprise Solutions & End-point Mgmt.",
    color: "#EF4444",
    what: "A broad team covering deposit/account technology, staff computers, ATMs, fraud systems, and several bank-wide platforms.",
    items: [
      { name: "FRM", what: "Runs the Fraud Risk Management systems that watch transactions in real time and catch fraud before money is lost." },
      { name: "End-point, Monitoring & ATM Operations", what: "Supports staff computers (end-points), monitors systems for problems, and keeps ATMs up and running." },
      { name: "In-house Mobile Development", what: "The team that builds the bank's own mobile apps internally rather than outsourcing them." },
      { name: "F&A Initiatives", what: "Delivers technology projects for the Finance & Accounts department." },
      { name: "FCMD Initiatives", what: "Delivers technology projects for the FCMD function." },
      { name: "Liabilities Operations", what: "Runs the systems behind deposit and account operations — opening, servicing, and closing accounts." },
      { name: "Liabilities Product", what: "Builds the technology for deposit products like savings accounts, fixed deposits, and recurring deposits." },
    ],
  },
  {
    id: "it-infra",
    name: "Infrastructure, Incident & Release Mgmt.",
    color: "#6B7280",
    what: "The team that keeps the lights on — servers, networks, databases — handles outages quickly, and safely rolls out new software to live systems.",
    items: [
      { name: "Incident, Helpdesk & App Support (Non-CBS)", what: "First responders for IT problems and support for all the apps outside core banking." },
      { name: "Infrastructure", what: "Manages the servers and data centres the whole bank runs on." },
      { name: "Database", what: "Looks after all the databases where the bank's data is stored and kept safe." },
      { name: "Storage & Release Management", what: "Manages data storage and controls how software changes are released to live systems." },
      { name: "Windows", what: "Runs and secures the bank's Windows servers and systems." },
      { name: "Network", what: "Keeps the bank's networks and connectivity up across branches, ATMs, and offices." },
    ],
  },
  {
    id: "it-cards-los",
    name: "Cards, Collections & LOS",
    color: "#EC4899",
    what: "Technology for cards, for recovering overdue loans, and for the system that originates new loans.",
    items: [
      { name: "Credit Cards", what: "Runs the credit card systems — issuing cards, processing transactions, and generating statements." },
      { name: "Collections", what: "Systems that help the bank follow up on and recover overdue loans." },
      { name: "LOS & SFDC", what: "The Loan Origination System (where loan applications are processed) and the Salesforce (SFDC) CRM used by sales teams." },
    ],
  },
  {
    id: "it-strategy-procurement",
    name: "Strategy & Procurement",
    color: "#6366F1",
    what: "Plans where IT is heading and buys the technology and services to get there.",
    items: [
      { name: "Vendor Management", what: "Manages IT vendors, their contracts, and whether they meet the agreed service levels (SLAs)." },
      { name: "Procurement", what: "Buys the hardware, software, and services the IT department needs." },
      { name: "Strategy", what: "Sets the long-term direction and roadmap for the bank's technology." },
    ],
  },
  {
    id: "it-digital-rpa",
    name: "Digital Engineering, Transformation & RPA",
    color: "#14B8A6",
    what: "Drives modernisation — new ways of building software and automating repetitive work to make the bank faster and leaner.",
    items: [
      { name: "RPA & Internal Transformation", what: "Uses software robots (RPA) to automate repetitive manual tasks, and improves how internal processes run." },
    ],
  },
];
