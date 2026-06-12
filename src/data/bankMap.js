// A simple map of how a bank is organised.
// Departments (big teams) and the verticals (smaller teams) under each.
// Written in plain English so it's easy to understand and remember.

export const orgRoot = {
  name: "Board of Directors → MD & CEO",
  what: "The top bosses who run the whole bank. Every department below reports up to them.",
};

export const departments = [
  {
    id: "retail",
    name: "Retail Banking",
    color: "#3B82F6",
    what: "Looks after normal customers like you and me.",
    verticals: [
      { name: "Branch Banking", what: "The bank branches you walk into." },
      { name: "Deposits (CASA & FD)", what: "Savings, current, and fixed deposit accounts." },
      { name: "Retail Loans", what: "Home, car, personal, and gold loans for individuals." },
      { name: "Cards", what: "Debit and credit cards." },
      { name: "NRI Banking", what: "Banking for Indians living abroad." },
      { name: "Wealth & Investments", what: "Helps customers invest in mutual funds and insurance." },
    ],
  },
  {
    id: "corporate",
    name: "Corporate & SME Banking",
    color: "#F59E0B",
    what: "Looks after companies and businesses, big and small.",
    verticals: [
      { name: "Large Corporate", what: "Banking for big companies." },
      { name: "SME / Business Banking", what: "Accounts and loans for small businesses." },
      { name: "Trade Finance", what: "Helps businesses import and export goods." },
      { name: "Cash Management", what: "Helps companies collect and pay money easily." },
      { name: "Working Capital", what: "Short-term money for a business's daily needs." },
    ],
  },
  {
    id: "treasury",
    name: "Treasury & Markets",
    color: "#06B6D4",
    what: "Manages the bank's own money — bonds, currencies, and cash flow.",
    verticals: [
      { name: "ALM (Asset Liability)", what: "Keeps the bank's deposits and loans balanced." },
      { name: "Forex Desk", what: "Buys and sells foreign currencies." },
      { name: "Fixed Income (G-Sec)", what: "Trades government bonds." },
      { name: "Derivatives", what: "Tools to protect against rate and currency swings." },
    ],
  },
  {
    id: "risk",
    name: "Risk Management",
    color: "#EF4444",
    what: "Stops the bank from losing money on bad decisions.",
    verticals: [
      { name: "Credit Risk", what: "Checks whether borrowers will actually repay." },
      { name: "Market Risk", what: "Watches for losses from price and rate moves." },
      { name: "Operational Risk", what: "Manages risk from mistakes, systems, and people." },
      { name: "Fraud Risk (FRM)", what: "Catches and stops fraud." },
    ],
  },
  {
    id: "compliance",
    name: "Compliance",
    color: "#84CC16",
    what: "Makes sure the bank follows every RBI rule and law.",
    verticals: [
      { name: "AML / KYC", what: "Verifies customers and stops money laundering." },
      { name: "Regulatory Compliance", what: "Follows RBI and government rules." },
      { name: "Grievance / Ombudsman", what: "Handles customer complaints fairly." },
    ],
  },
  {
    id: "operations",
    name: "Operations",
    color: "#6B7280",
    what: "The back-office engine that quietly processes everything.",
    verticals: [
      { name: "Clearing & Settlement", what: "Settles cheques and payments between banks." },
      { name: "Account Operations", what: "Opens accounts, handles deceased claims and freezes." },
      { name: "Currency Management", what: "Handles cash, notes, and currency chests." },
      { name: "ATM & Cash", what: "Runs ATMs and keeps them filled." },
    ],
  },
  {
    id: "technology",
    name: "Technology / IT",
    color: "#8B5CF6",
    what: "Runs all the bank's systems and apps.",
    verticals: [
      { name: "Core Banking (CBS)", what: "The main system that holds every account." },
      { name: "Digital Channels", what: "Net banking, mobile app, and UPI." },
      { name: "Cyber Security", what: "Protects the bank from hackers." },
      { name: "Data & Analytics", what: "Stores and makes sense of the bank's data." },
    ],
  },
  {
    id: "credit",
    name: "Credit / Underwriting",
    color: "#6366F1",
    what: "Decides who gets a loan, and how much.",
    verticals: [
      { name: "Retail Underwriting", what: "Approves personal, home, and car loans." },
      { name: "Corporate Credit", what: "Approves big company loans." },
      { name: "Credit Policy", what: "Sets the rules for who can borrow." },
    ],
  },
  {
    id: "legal-recovery",
    name: "Legal & Recovery",
    color: "#EC4899",
    what: "Handles legal matters and gets back bad loans.",
    verticals: [
      { name: "Legal", what: "Court cases, agreements, and documentation." },
      { name: "NPA Recovery", what: "Recovers money from defaulters (SARFAESI, OTS)." },
    ],
  },
  {
    id: "priority-rural",
    name: "Priority Sector & Rural",
    color: "#22C55E",
    what: "Lends to farmers, small businesses, and weaker sections (an RBI rule).",
    verticals: [
      { name: "Agriculture Finance", what: "Loans for farmers, like the Kisan Credit Card." },
      { name: "Financial Inclusion", what: "Jan Dhan accounts and rural banking." },
      { name: "Microfinance / MSME", what: "Small loans for tiny businesses." },
    ],
  },
  {
    id: "finance",
    name: "Finance & Accounts",
    color: "#14B8A6",
    what: "Keeps the bank's own books and reports its profit.",
    verticals: [
      { name: "Financial Reporting", what: "Prepares the bank's accounts and results." },
      { name: "Regulatory Reporting", what: "Sends required reports to RBI." },
      { name: "Taxation", what: "Handles the bank's own taxes." },
    ],
  },
  {
    id: "audit",
    name: "Internal Audit",
    color: "#F97316",
    what: "Independently checks that everything is done correctly.",
    verticals: [
      { name: "Concurrent Audit", what: "Monthly checking of branches." },
      { name: "IS Audit", what: "Checks IT systems and security." },
      { name: "Revenue Audit", what: "Checks the bank charged all its fees correctly." },
    ],
  },
  {
    id: "pmo",
    name: "PMO / Strategy / Transformation",
    color: "#A855F7",
    what: "Plans and runs the bank's big projects. (This is where PMO sits.)",
    verticals: [
      { name: "Project Management Office", what: "Tracks and delivers projects on time." },
      { name: "Change Management", what: "Approves changes to live systems (CAB)." },
      { name: "Digital Transformation", what: "Modernises the bank with new technology." },
      { name: "Vendor Management", what: "Manages the companies the bank buys from." },
    ],
  },
  {
    id: "support",
    name: "Support Functions",
    color: "#78716C",
    what: "Teams that keep the whole bank running day to day.",
    verticals: [
      { name: "Human Resources (HR)", what: "Hiring, training, and paying staff." },
      { name: "Marketing & Product", what: "Designs products and promotes the bank." },
      { name: "Customer Service", what: "Helps customers over phone, email, and chat." },
      { name: "Administration", what: "Offices, security, and facilities." },
    ],
  },
];
