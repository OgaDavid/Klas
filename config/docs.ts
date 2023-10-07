import { NavItem } from "@/types/nav";

interface DocsConfig {
  mainNav: NavItem[];
  footerNav: NavItem[];
}

const mainNavItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Pricing",
    href: "/pricing",
  },
  {
    title: "Company",
    href: "/company",
  },
  {
    title: "Case Studies",
    href: "/case-studies",
  },
];

export const docsConfig: DocsConfig = {
  mainNav: mainNavItems,
  footerNav: [
    ...mainNavItems,
    {
      title: "Products",
      href: "/products",
    },
    {
      title: "Terms of Use",
      href: "https://drive.google.com/file/d/14La2oC1pFe2SUhFx-CIzfI47VAez0-HV/view?usp=drivesdk",
    },
    {
      title: "Privacy Policy",
      href: "https://drive.google.com/file/d/14La2oC1pFe2SUhFx-CIzfI47VAez0-HV/view?usp=drivesdk",
    },
  ],
};
