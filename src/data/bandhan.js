// Bandhan Bank — how YOUR bank is actually organised and what it sells.
// Bandhan reports its business in segments (mostly the lending/asset side),
// plus the deposits and services side. Written in plain English.

export const bandhanIntro =
  "Bandhan started as a microfinance lender and became a universal bank. It still earns most of its money from small loans (EEB), but is fast adding regular retail, housing, and business banking.";

export const bandhanSegments = [
  {
    id: "eeb",
    name: "EEB — Emerging Entrepreneurs Business",
    color: "#22C55E",
    share: "~52% of loans",
    what: "Bandhan's heart. Small loans for unbanked and underbanked people to run tiny businesses. This is the old 'Micro Banking' renamed.",
    items: [
      { name: "Micro Banking (Group & Individual Loans)", what: "Small loans to groups or individuals — the original Bandhan business." },
      { name: "Micro Home Loans (MHL)", what: "Small home loans for low-income families." },
      { name: "Micro Bazaar / Enterprise Loans (MBL)", what: "Slightly bigger loans for small shops and enterprises." },
      { name: "Two-Wheeler Loans", what: "Bike loans for existing micro-loan customers." },
    ],
  },
  {
    id: "commercial",
    name: "Commercial Banking",
    color: "#F59E0B",
    share: "Growing fast",
    what: "Loans and accounts for medium and large businesses, SMEs, and other lenders (NBFCs).",
    items: [
      { name: "SME Lending", what: "Loans for small and medium businesses." },
      { name: "NBFC Lending", what: "Lending to other finance companies." },
      { name: "Current Accounts", what: "Business and corporate salary accounts." },
      { name: "Trade & Cash Management", what: "Helps companies move, collect, and pay money." },
    ],
  },
  {
    id: "housing",
    name: "Housing Finance",
    color: "#3B82F6",
    share: "Steady",
    what: "Home loans — this book mostly came from the GRUH Finance merger.",
    items: [
      { name: "Home Loans", what: "Loans to buy or build a house." },
      { name: "Affordable Housing", what: "Smaller home loans for first-time, lower-income buyers." },
      { name: "Loan Against Property", what: "Loan by pledging a house or shop you already own." },
    ],
  },
  {
    id: "retail-assets",
    name: "Retail Assets",
    color: "#6366F1",
    share: "Fastest growing",
    what: "Newer everyday loans for individual customers — the quickest-growing part of the bank.",
    items: [
      { name: "Personal Loan", what: "Unsecured loan for any personal need." },
      { name: "Gold Loan", what: "Loan against gold jewellery." },
      { name: "Auto Loan", what: "Loan to buy a car." },
      { name: "Two-Wheeler Loan", what: "Loan to buy a bike or scooter." },
    ],
  },
  {
    id: "deposits-services",
    name: "Deposits & Other Services",
    color: "#14B8A6",
    share: "Funding side",
    what: "How the bank collects money from customers, and the extra services it offers.",
    items: [
      { name: "Savings & Current (CASA)", what: "Everyday accounts — the bank's cheapest source of funds." },
      { name: "Fixed & Recurring Deposits", what: "Money parked for a fixed period at higher interest." },
      { name: "NRI Banking (NRE / NRO)", what: "Accounts and deposits for Indians living abroad." },
      { name: "Debit & Credit Cards", what: "Cards for spending and withdrawing." },
      { name: "Insurance & Mutual Funds", what: "Sold on behalf of partners (health, general insurance, MFs)." },
      { name: "Digital — mBandhan 2.0", what: "Net banking and the mobile app." },
    ],
  },
];
