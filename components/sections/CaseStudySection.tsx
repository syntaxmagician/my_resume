"use client";

import { motion } from "framer-motion";

function Badge({
  variant,
  children,
}: {
  variant: "red" | "green" | "neutral";
  children: React.ReactNode;
}) {
  const colors = {
    red: "border-red-500/30 bg-red-500/10 text-red-400",
    green: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
    neutral: "border-white/20 bg-white/5 text-muted",
  }[variant];
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${colors}`}
    >
      {children}
    </span>
  );
}

function Arrow() {
  return (
    <svg
      className="h-4 w-4 shrink-0 text-dim"
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
  );
}

export function CaseStudySection() {
  return (
    <section id="case-study" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[1px] w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-accent">
            Featured Case Study
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Production MySQL Connection Exhaustion
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
            Logistics system — Node.js, Sequelize, PM2 cluster mode, MySQL
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl"
        >
          {/* Architecture diagram */}
          <div className="border-b border-white/5 p-8 sm:p-10">
            <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.25em] text-dim">
              Connection Architecture — Before vs After
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-xl border border-red-500/10 bg-[#0a101e] p-5">
                <Badge variant="red">Before — Uncontrolled</Badge>
                <div className="mt-4 flex flex-wrap items-center gap-2 text-sm">
                  <span className="rounded-md border border-red-500/20 bg-red-500/5 px-2.5 py-1.5 font-mono text-red-400">
                    16 workers
                  </span>
                  <Arrow />
                  <span className="rounded-md border border-red-500/20 bg-red-500/5 px-2.5 py-1.5 font-mono text-red-400">
                    ×20 pool
                  </span>
                  <Arrow />
                  <span className="rounded-md border border-red-500/20 bg-red-500/5 px-2.5 py-1.5 font-mono font-bold text-red-400">
                    = 320 connections
                  </span>
                </div>
              </div>
              <div className="rounded-xl border border-emerald-500/10 bg-[#0a101e] p-5">
                <Badge variant="green">After — Optimized</Badge>
                <div className="mt-4 flex flex-wrap items-center gap-2 text-sm">
                  <span className="rounded-md border border-emerald-500/20 bg-emerald-500/5 px-2.5 py-1.5 font-mono text-emerald-400">
                    8 workers
                  </span>
                  <Arrow />
                  <span className="rounded-md border border-emerald-500/20 bg-emerald-500/5 px-2.5 py-1.5 font-mono text-emerald-400">
                    ×2 pool
                  </span>
                  <Arrow />
                  <span className="rounded-md border border-emerald-500/20 bg-emerald-500/5 px-2.5 py-1.5 font-mono font-bold text-emerald-400">
                    = 16 connections
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Problem / Root Cause / Solution / Impact grid */}
          <div className="grid gap-px bg-white/5 sm:grid-cols-2">
            {/* Problem */}
            <div className="bg-[#0f172a] p-8 sm:p-10">
              <Badge variant="red">Problem</Badge>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                Production logistics system intermittently refused new
                connections. MySQL returned{" "}
                <code className="rounded bg-white/5 px-1.5 py-0.5 font-mono text-xs text-red-400">
                  Too Many Connections
                </code>{" "}
                under normal traffic load. System required manual PM2 restart to
                recover.
              </p>
            </div>

            {/* Root Cause */}
            <div className="bg-[#0f172a] p-8 sm:p-10">
              <Badge variant="red">Root Cause</Badge>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400/60" />
                  Each PM2 worker instantiated a separate Sequelize instance — no
                  shared connection singleton
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400/60" />
                  Default pool size of 20 applied per worker — 16 × 20 = 320
                  connections
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400/60" />
                  No graceful shutdown — connections leaked on process restart
                </li>
              </ul>
            </div>

            {/* Solution */}
            <div className="bg-[#0f172a] p-8 sm:p-10">
              <Badge variant="green">Architecture Changes</Badge>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400/60" />
                  Singleton Sequelize instance across all workers
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400/60" />
                  Pool size reduced from 20 → 2 based on throughput profiling
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400/60" />
                  PM2 clusters right-sized from 16 → 8 per CPU load analysis
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400/60" />
                  SIGINT/SIGTERM handlers with{" "}
                  <code className="rounded bg-white/5 px-1 font-mono text-xs text-emerald-400">
                    kill_timeout
                  </code>{" "}
                  for clean shutdown
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400/60" />
                  Connection monitoring guard for early anomaly detection
                </li>
              </ul>
            </div>

            {/* Impact */}
            <div className="bg-[#0f172a] p-8 sm:p-10">
              <Badge variant="green">Outcome</Badge>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400/60" />
                  Active connections: <strong className="text-foreground">320 → 16</strong> (95% reduction)
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400/60" />
                  <code className="rounded bg-white/5 px-1 font-mono text-xs text-foreground">
                    Too Many Connections
                  </code>{" "}
                  error eliminated
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400/60" />
                  <strong className="text-foreground">7+ consecutive days</strong> zero incidents post-deploy
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400/60" />
                  Predictable resource usage — simplified capacity planning
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
