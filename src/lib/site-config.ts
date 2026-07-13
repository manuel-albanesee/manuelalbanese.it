export const siteConfig = {
  name: "Manuel Albanese",
  url: "https://manuelalbanese.it",
  tagline: "AI di cui ti puoi fidare. Software che consegna risultati.",
  github: "https://github.com/manuel-albanesee",
  linkedin: "https://www.linkedin.com/in/manuel-albanese",
  // Handle Cal.com (es. "manuelalbanese/30min"). Finché non è impostato,
  // la pagina /contatti mostra LinkedIn come canale primario di booking
  // invece di un embed rotto.
  calComHandle: "",
};

export type NavItem = {
  label: string;
  href: string;
};

export const mainNav: NavItem[] = [
  { label: "Soluzioni AI", href: "/soluzioni-ai" },
  { label: "Sviluppo Web", href: "/sviluppo-web" },
  { label: "Progetti", href: "/progetti" },
  { label: "Prodotti", href: "/prodotti" },
  { label: "Chi sono", href: "/chi-sono" },
];

export const footerNav: NavItem[] = [
  ...mainNav,
  { label: "Come lavoro", href: "/come-lavoro" },
  { label: "Contatti", href: "/contatti" },
];
