// Bandhan Bank — IT organisation (roles only, no names).
// Under the Chief Information Officer (CIO): the Head-IT functions and the
// Lead-IT teams under each, explained in plain English.

export const itRoot = {
  name: "Chief Information Officer (CIO)",
  what: "Head of all technology in the bank. Every IT team below reports up to the CIO.",
};

export const itFunctions = [
  {
    id: "it-assets-obdx",
    name: "IT Solutions – Assets & OBDX",
    color: "#3B82F6",
    what: "Builds and runs the software for the bank's loan businesses, plus the digital banking platform.",
    items: [
      { name: "Assets – Housing Finance & Retail Assets", what: "Tech for home loans and everyday retail loans." },
      { name: "Assets – EEB", what: "Tech for the microfinance / Emerging Entrepreneurs Business loans." },
      { name: "OBDX", what: "Runs Oracle's digital banking platform — net and mobile banking." },
    ],
  },
  {
    id: "it-payments-govt",
    name: "Payments & Govt. Banking Technology",
    color: "#10B981",
    what: "Runs all the payment systems and the technology for handling government money.",
    items: [
      { name: "Development (Java Tech)", what: "In-house Java software development." },
      { name: "Digital Payment", what: "UPI, IMPS, and other digital payment tech." },
      { name: "Payment System", what: "Core payment switches and rails (NEFT, RTGS)." },
      { name: "Clearing & Settlement, Currency Chest", what: "Cheque clearing, settlement, and currency-chest systems." },
      { name: "Govt. Banking", what: "Tech for tax collection, pensions, and government accounts." },
    ],
  },
  {
    id: "it-corporate",
    name: "Corporate IT",
    color: "#F59E0B",
    what: "Technology for corporate and business banking, and joining systems together.",
    items: [
      { name: "CMC & Integration", what: "Corporate/cash-management systems and connecting apps (APIs, host-to-host)." },
    ],
  },
  {
    id: "it-grc-pmo",
    name: "GRC & IT PMO",
    color: "#A855F7",
    what: "Keeps IT well-governed and runs IT projects.",
    items: [
      { name: "Governance, Risk & Compliance", what: "Makes sure IT follows rules and manages tech risk." },
      { name: "IT PMO", what: "Plans, tracks, and delivers IT projects. (This is where IT PMO sits.)" },
    ],
  },
  {
    id: "it-cbs",
    name: "CBS & Application Support",
    color: "#06B6D4",
    what: "Looks after the Core Banking System and keeps applications running.",
    items: [
      { name: "CBS Application Support", what: "Day-to-day support of the core banking software." },
      { name: "CBS Tuning & Improvement", what: "Makes the core banking system faster and better." },
    ],
  },
  {
    id: "it-liabilities-enterprise",
    name: "Liabilities, Enterprise Solutions & End-point Mgmt.",
    color: "#EF4444",
    what: "Tech for deposits/accounts, staff devices, ATMs, and bank-wide systems.",
    items: [
      { name: "FRM", what: "Fraud Risk Management systems — catches and stops fraud." },
      { name: "End-point, Monitoring & ATM Operations", what: "Supports staff computers, system monitoring, and ATM systems." },
      { name: "In-house Mobile Development", what: "Builds the bank's own mobile apps." },
      { name: "F&A Initiatives", what: "Tech projects for the Finance & Accounts team." },
      { name: "FCMD Initiatives", what: "Tech projects for the FCMD function." },
      { name: "Liabilities Operations", what: "Systems that run deposit and account operations." },
      { name: "Liabilities Product", what: "Tech for deposit products — savings, FD, and more." },
    ],
  },
  {
    id: "it-infra",
    name: "Infrastructure, Incident & Release Mgmt.",
    color: "#6B7280",
    what: "Runs the servers and networks, handles outages, and rolls out software.",
    items: [
      { name: "Incident, Helpdesk & App Support (Non-CBS)", what: "Fixes IT problems and supports non-core apps." },
      { name: "Infrastructure", what: "Servers and data centres." },
      { name: "Database", what: "Manages all the databases." },
      { name: "Storage & Release Management", what: "Data storage and rolling out software changes." },
      { name: "Windows", what: "Windows servers and systems." },
      { name: "Network", what: "The bank's networks and connectivity." },
    ],
  },
  {
    id: "it-cards-los",
    name: "Cards, Collections & LOS",
    color: "#EC4899",
    what: "Technology for cards, loan recovery, and loan origination.",
    items: [
      { name: "Credit Cards", what: "Credit card systems." },
      { name: "Collections", what: "Systems to recover overdue loans." },
      { name: "LOS & SFDC", what: "Loan Origination System and the Salesforce (SFDC) CRM." },
    ],
  },
  {
    id: "it-strategy-procurement",
    name: "Strategy & Procurement",
    color: "#6366F1",
    what: "Plans IT strategy and buys technology.",
    items: [
      { name: "Vendor Management", what: "Manages IT vendors and their service levels (SLAs)." },
      { name: "Procurement", what: "Buys hardware, software, and services." },
      { name: "Strategy", what: "Sets the long-term IT direction." },
    ],
  },
  {
    id: "it-digital-rpa",
    name: "Digital Engineering, Transformation & RPA",
    color: "#14B8A6",
    what: "Modernises the bank with new technology and automation.",
    items: [
      { name: "RPA & Internal Transformation", what: "Robotic automation of repetitive tasks and improving internal processes." },
    ],
  },
];
