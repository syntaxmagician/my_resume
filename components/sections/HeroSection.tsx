"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" as const },
  }),
};

const FOCUS_AREAS = [
  "Production Stability",
  "System Architecture",
  "Data Infrastructure",
  "Performance Engineering",
];

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="animate-blob absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="animate-blob absolute -bottom-40 -right-40 h-[450px] w-[450px] rounded-full bg-purple-600/20 blur-[120px] [animation-delay:2s]" />
        <div className="animate-blob absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-[100px] [animation-delay:4s]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-20">
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_auto]">
          <div>
            <motion.p
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-accent"
            >
              Backend Engineer
            </motion.p>

            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-3xl font-extrabold leading-[1.15] tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]"
            >
              Production Stability,
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                System Architecture
              </span>
              <br />
              &amp; Data Infrastructure
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
            >
              I own backend systems end-to-end — from diagnosing production
              incidents under pressure to designing data pipelines that connect
              six databases into a single reporting layer.
            </motion.p>

            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-8 flex flex-wrap gap-2"
            >
              {FOCUS_AREAS.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-muted backdrop-blur-sm"
                >
                  {area}
                </span>
              ))}
            </motion.div>

            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                href="#case-study"
                className="group relative inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-blue-500/30"
              >
                <span>View Case Study</span>
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
              <Link
                href="#ai-assistant"
                className="inline-flex items-center gap-2 rounded-xl border border-subtle bg-white/5 px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur-sm transition-all duration-300 hover:scale-[1.03] hover:border-accent/50 hover:bg-white/10"
              >
                <svg
                  className="h-4 w-4 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span>Ask My AI</span>
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
            className="hidden items-center justify-center lg:flex"
          >
            <div className="animate-float relative">
              <div className="absolute -inset-3 rounded-full bg-blue-500/20 blur-2xl" />
              <div className="relative h-64 w-64 rounded-full bg-gradient-to-br from-white/20 to-white/5 p-[2px]">
                <div className="h-full w-full overflow-hidden rounded-full">
                  <Image
                    src="/vico-ramdhani.jpg"
                    alt="Vico Ramdhani"
                    width={256}
                    height={256}
                    priority
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center gap-2 text-dim"
        >
          <span className="text-[10px] uppercase tracking-[0.25em]">
            Scroll
          </span>
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
