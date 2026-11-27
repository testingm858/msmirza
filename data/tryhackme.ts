export const tryhackme = {
  profileUrl: "https://tryhackme.com/p/methoomirza",
  stats: [
    { label: "Ranking", value: "Top 2%" },
    { label: "Capability score", value: "54" },
    { label: "Best streak", value: "64 days" },
    { label: "Paths completed", value: "4" },
  ],
};

const img = (file: string) => `https://assets.tryhackme.com/img/badges/${file}`;

/** Badges shown on the public TryHackMe profile (methoomirza), 31 in total. */
export const tryhackmeBadges: { name: string; image: string }[] = [
  { name: "Phish Hunter", image: img("phishing.png") },
  { name: "Defensive Toolsmith", image: img("defensive-toolsmith.png") },
  { name: "First scenario completed", image: img("soc-sim-first-scenario-completed.png") },
  { name: "First alert closed", image: img("soc-sim-first-alert-closed.png") },
  { name: "SOC Apprentice", image: img("soc-apprentice.png") },
  { name: "First Step into SOC", image: img("first-step-into-soc.png") },
  { name: "Packet Master", image: img("networksecurityandtrafficanalysisv2.png") },
  { name: "30 Day Streak", image: img("streak30.png") },
  { name: "Friday Fixer", image: img("cyberthreatintellegenceblue.png") },
  { name: "Skilled Navigator", image: img("cyberdefenceframework.png") },
  { name: "Cyber Ready", image: img("careerready.png") },
  { name: "Shield Apprentice", image: img("shieldapprentice.png") },
  { name: "Sword Apprentice", image: img("swordapprentice.png") },
  { name: "Pentester Tools", image: img("pentestingtools_badge.png") },
  { name: "3 Day Streak", image: img("streak3.png") },
  { name: "Security Awareness", image: img("securityawareness.png") },
  { name: "cat linux.txt", image: img("linux.png") },
  { name: "First Four", image: img("firstfour.png") },
  { name: "Webbed", image: img("webbed.png") },
  { name: "7 Day Streak", image: img("streak7.png") },
  { name: "Pentesting Principles", image: img("introtooffensivesecurity.png") },
  { name: "Intro to Web Hacking", image: img("introtowebsecurity.png") },
  { name: "Networking Nerd", image: img("networkfundamentals.png") },
  { name: "World Wide Web", image: img("howthewebworks.png") },
  { name: "Burp'ed", image: img("burpsuite.png") },
  { name: "Metasploitable", image: img("metasploit.png") },
  { name: "Blue", image: img("blue.png") },
  { name: "OWASP Top 10", image: img("owasptop10.png") },
  { name: "Hash Cracker", image: img("hashcracker.png") },
  { name: "Linux PrivEsc", image: img("linuxprivesc.png") },
  { name: "Wireshark", image: img("wireshark.png") },
];

/** The seven standout badges shown on the site (one row on desktop). */
export const featuredBadgeNames = [
  "SOC Apprentice",
  "30 Day Streak",
  "Packet Master",
  "Hash Cracker",
  "Linux PrivEsc",
  "Metasploitable",
  "OWASP Top 10",
];

export const featuredBadges = featuredBadgeNames
  .map((n) => tryhackmeBadges.find((b) => b.name === n))
  .filter((b): b is { name: string; image: string } => Boolean(b));
