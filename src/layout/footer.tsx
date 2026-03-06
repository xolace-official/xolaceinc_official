"use client";

import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandWhatsapp,
} from "@tabler/icons-react";
import Link from "next/link";
import type React from "react";
import { Suspense } from "react";
import {Separator} from "@/components/ui/separator";

const footerColumns = [
  {
    title: "Product",
    links: [
      { label: "How It Works",         href: "#" },
      { label: "Campfires",            href: "#" },
      { label: "For Professionals",    href: "#" },
      { label: "Ambassadors",          href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us",  href: "#" },
      { label: "Blog",      href: "#" },
      { label: "Careers",   href: "#" },
      { label: "Contact",   href: "#" },
    ],
  },
  {
    title: "Get Involved",
    links: [
      { label: "Partner With Us",      href: "#" },
      { label: "Volunteer",            href: "#" },
      { label: "Donate",               href: "#" },
      { label: "Join as Ambassador",   href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy",   href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy",    href: "#" },
    ],
  },
];

const socialPlatforms: { name: string; url: string; icon: React.ReactNode }[] = [
  { name: "WhatsApp",  url: "", icon: <IconBrandWhatsapp  size={18} /> },
  { name: "Instagram", url: "", icon: <IconBrandInstagram size={18} /> },
  { name: "Facebook",  url: "", icon: <IconBrandFacebook  size={18} /> },
  { name: "LinkedIn",  url: "", icon: <IconBrandLinkedin  size={18} /> },
];

export function CurrentYear() {
  return <span>{new Date().getFullYear()}</span>;
}

const Footer = () => {
  return (
    <footer id="footer" className="pt-14 pb-4 px-4 px-14 w-full bg-foreground text-primary-foreground">

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-[1.8fr_1fr_1fr_1fr_1fr] gap-12">

          {/* Brand column */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="font-black text-xl tracking-tight text-background">
              Xolace
            </Link>
            <p className="text-sm font-light leading-relaxed max-w-[220px]" style={{ color: "hsl(var(--background)/0.45)" }}>
              A safe, supportive space where real people share, care, and grow - together.
            </p>
            <div className="flex items-center gap-4">
              {socialPlatforms.map((platform) => (
                <Link
                  key={platform.name}
                  href={platform.url}
                  aria-label={platform.name}
                  className="transition-colors duration-200"
                  style={{ color: "hsl(var(--background)/0.4)" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "hsl(var(--background))")}
                  onMouseLeave={e => (e.currentTarget.style.color = "hsl(var(--background)/0.4)")}
                >
                  {platform.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerColumns.map((col) => (
            <div key={col.title} className="flex flex-col gap-4">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-background">
                {col.title}
              </p>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm font-light transition-colors duration-200"
                      style={{ color: "hsl(var(--background))" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "hsl(var(--background))")}
                      onMouseLeave={e => (e.currentTarget.style.color = "hsl(var(--background))")}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className={"flex flex-col gap-8 pt-8 max-w-7xl mx-auto"}>
        <Separator className="  "/>
        <div className="flex flex-col sm:flex-row items-center justify-between ">
          <p className="text-xs font-light text-muted ">
            &copy;{" "}
            <Suspense fallback={<span>-</span>}>
              <CurrentYear />
            </Suspense>
            {" "}Xolace Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;