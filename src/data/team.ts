export type TeamMember = {
  fullName: string;
  role: string;
  photoUrl: string;
  biography: string;
  linkedinUrl: string;
  displayOrder: number;
  published: boolean;
};

/** Role cards only. Replace with approved names, portraits and biographies. */
export const TEAM: TeamMember[] = [
  { fullName: "Name to be announced", role: "Chief Investment Officer", photoUrl: "/images/team-avatar.svg", biography: "Sets the model allocation and chairs the quarterly rebalancing review.", linkedinUrl: "", displayOrder: 1, published: true },
  { fullName: "Name to be announced", role: "Head of Digital Assets", photoUrl: "/images/team-avatar.svg", biography: "Leads Bitcoin and altcoin selection, custody and position sizing.", linkedinUrl: "", displayOrder: 2, published: true },
  { fullName: "Name to be announced", role: "Head of Indonesian Equities", photoUrl: "/images/team-avatar.svg", biography: "Covers IDX large caps and domestic macro, banking and consumer themes.", linkedinUrl: "", displayOrder: 3, published: true },
  { fullName: "Name to be announced", role: "Head of Risk & Operations", photoUrl: "/images/team-avatar.svg", biography: "Monitors drift bands, liquidity and partner reporting across all sleeves.", linkedinUrl: "", displayOrder: 4, published: true },
];

export const TEAM_EMPTY =
  "Public biographies will appear here once they are approved for disclosure.";
