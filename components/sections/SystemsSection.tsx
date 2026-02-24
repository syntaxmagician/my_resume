"use client";

import { motion } from "framer-motion";

type System = {
  name: string;
  stack: string;
  focus: string;
  contributions: string[];
};

const SYSTEMS: System[] = [
  {
    name: "Logistics Production System",
    stack: "Node.js · Sequelize · MySQL · PM2",
    focus: "High-availability order processing and fleet coordination",
    contributions: [
      "Resolved critical connection exhaustion — reduced 320 DB connections to 16",
      "Redesigned PM2 cluster topology based on CPU and throughput profiling",
      "Implemented Singleton connection pattern and graceful shutdown lifecycle",
      "Deployed connection monitoring guard for anomaly detection",
    ],
  },
  {
    name: "Fulfillment System",
    stack: "Golang · MySQL · REST API",
    focus: "Order fulfillment pipeline and warehouse integration",
    contributions: [
      "Built core fulfillment service handling order state transitions",
      "Designed idempotent API contracts for reliable warehouse integration",
      "Implemented structured error handling and retry mechanisms",
      "Optimized query patterns for high-throughput order processing",
    ],
  },
  {
    name: "Learning Management System",
    stack: "Express.js · MongoDB · REST API",
    focus: "Course delivery, user progress tracking, content management",
    contributions: [
      "Architected modular service layer separating business logic from transport",
      "Designed document schema for flexible course and assessment structures",
      "Built role-based access control for multi-tenant content delivery",
      "Implemented pagination and query optimization for large dataset retrieval",
    ],
  },
  {
    name: "Corporate Management System",
    stack: "Express.js · MongoDB · REST API",
    focus: "Internal operations, reporting, and workflow automation",
    contributions: [
      "Designed service architecture supporting multiple internal business units",
      "Built configurable workflow engine for operational process automation",
      "Implemented audit logging and activity tracking across modules",
      "Structured API layer for integration with third-party corporate tools",
    ],
  },
  {
    name: "Data Pipeline Architecture",
    stack: "Airflow · GCS · BigQuery · Looker Studio",
    focus: "Cross-system data orchestration and business intelligence",
    contributions: [
      "Designed DAG-based extraction pipeline across 6 production databases",
      "Automated staging to Google Cloud Storage with schema validation",
      "Built transformation layer in BigQuery for unified reporting datasets",
      "Connected final datasets to Looker Studio dashboards for stakeholders",
    ],
  },
];

export function SystemsSection() {
  return (
    <section id="systems" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[1px] w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />

      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-accent">
            System Ownership
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Systems I&apos;ve Engineered
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
            Production systems where I owned backend architecture, performance,
            and operational stability.
          </p>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-2">
          {SYSTEMS.map((sys, i) => (
            <motion.div
              key={sys.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className={`group relative rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition-colors hover:border-white/20 hover:bg-white/[0.08] ${
                i === SYSTEMS.length - 1 && SYSTEMS.length % 2 !== 0
                  ? "lg:col-span-2"
                  : ""
              }`}
            >
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 transition-opacity group-hover:opacity-100" />

              <div className="relative z-10">
                <h3 className="text-base font-bold text-foreground">
                  {sys.name}
                </h3>
                <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
                  <span className="font-mono text-xs text-accent">
                    {sys.stack}
                  </span>
                </div>
                <p className="mt-2 text-sm text-dim">{sys.focus}</p>

                <ul className="mt-4 space-y-1.5">
                  {sys.contributions.map((c, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2 text-sm text-muted"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent/60" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
