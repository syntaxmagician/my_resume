"use client";

import { motion } from "framer-motion";

const PIPELINE_STAGES = [
  {
    step: "01",
    label: "Source Databases",
    detail: "6 production databases across logistics, fulfillment, LMS, and corporate systems",
    color: "text-blue-400",
    border: "border-blue-500/20",
    bg: "bg-blue-500/5",
  },
  {
    step: "02",
    label: "Apache Airflow",
    detail: "DAG-based orchestration scheduling automated extraction jobs per source",
    color: "text-purple-400",
    border: "border-purple-500/20",
    bg: "bg-purple-500/5",
  },
  {
    step: "03",
    label: "Google Cloud Storage",
    detail: "Raw data staged with schema validation and partitioned by extraction date",
    color: "text-cyan-400",
    border: "border-cyan-500/20",
    bg: "bg-cyan-500/5",
  },
  {
    step: "04",
    label: "BigQuery",
    detail: "Transformation and modeling layer — cleaning, joining, and aggregating cross-system datasets",
    color: "text-emerald-400",
    border: "border-emerald-500/20",
    bg: "bg-emerald-500/5",
  },
  {
    step: "05",
    label: "Looker Studio",
    detail: "Final reporting dashboards consumed by operations, finance, and leadership teams",
    color: "text-amber-400",
    border: "border-amber-500/20",
    bg: "bg-amber-500/5",
  },
];

const HIGHLIGHTS = [
  "Fully automated — zero manual extraction or file transfers",
  "Cross-system integration connecting MySQL and MongoDB sources",
  "Fault-tolerant DAGs with retry logic and failure alerting",
  "Stakeholder-facing dashboards updated on schedule without engineering intervention",
];

export function DataPipelineSection() {
  return (
    <section id="data-pipeline" className="relative overflow-hidden py-24 sm:py-32">
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
            Data Engineering
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Data Pipeline &amp; Analytics Architecture
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
            Designed and implemented an end-to-end data pipeline connecting 6
            production databases into a unified BigQuery reporting layer —
            orchestrated with Apache Airflow.
          </p>
        </motion.div>

        {/* Pipeline flow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl sm:p-10"
        >
          <p className="mb-8 text-[10px] font-semibold uppercase tracking-[0.25em] text-dim">
            Pipeline Architecture — End to End
          </p>

          <div className="space-y-4">
            {PIPELINE_STAGES.map((stage, i) => (
              <motion.div
                key={stage.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="flex items-start gap-5"
              >
                {/* Step indicator + connector line */}
                <div className="flex flex-col items-center">
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border ${stage.border} ${stage.bg} font-mono text-xs font-bold ${stage.color}`}
                  >
                    {stage.step}
                  </div>
                  {i < PIPELINE_STAGES.length - 1 && (
                    <div className="my-1 h-4 w-px bg-white/10" />
                  )}
                </div>

                {/* Content */}
                <div className="pt-1.5">
                  <p className={`text-sm font-semibold ${stage.color}`}>
                    {stage.label}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-dim">
                    {stage.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Engineering highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-8 grid gap-4 sm:grid-cols-2"
        >
          {HIGHLIGHTS.map((h, i) => (
            <div
              key={i}
              className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-5"
            >
              <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded bg-emerald-500/10">
                <svg
                  className="h-3 w-3 text-emerald-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <p className="text-sm leading-relaxed text-muted">{h}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
