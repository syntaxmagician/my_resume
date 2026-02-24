"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const NAV_LINKS = [
  { href: "#case-study", label: "Case Study" },
  { href: "#systems", label: "Systems" },
  { href: "#data-pipeline", label: "Data Pipeline" },
  { href: "#ai-assistant", label: "Assistant AI" },
];

export function SiteHeader() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#0f172a]/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="#hero" className="text-sm font-semibold tracking-tight text-foreground">
          Vico Ramdhani
        </Link>
        <nav className="hidden items-center gap-8 sm:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-medium uppercase tracking-[0.15em] text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
