"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Metric = {
  display: string;
  animateTo: number;
  prefix?: string;
  suffix?: string;
  label: string;
  context: string;
};

const METRICS: Metric[] = [
  {
    display: "320 → 16",
    animateTo: 16,
    prefix: "320 → ",
    label: "Database Connections Reduced",
    context: "Architecture-level pool optimization across clustered processes",
  },
  {
    display: "16 → 8",
    animateTo: 8,
    prefix: "16 → ",
    label: "PM2 Clusters Optimized",
    context: "Right-sized based on real CPU load and throughput analysis",
  },
  {
    display: "7+",
    animateTo: 7,
    suffix: "+",
    label: "Days Zero Production Incidents",
    context: "Consecutive days of stability after architectural fix",
  },
  {
    display: "6",
    animateTo: 6,
    label: "Production Databases Pipelined",
    context: "Orchestrated into a unified BigQuery reporting layer",
  },
];

function useCountUp(end: number, inView: boolean, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const startTime = performance.now();

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(end * eased));
      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }, [end, inView, duration]);

  return count;
}

function MetricCard({ metric, index }: { metric: Metric; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const count = useCountUp(metric.animateTo, inView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.12, duration: 0.6 }}
      whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
      className="group relative rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition-colors hover:border-white/20 hover:bg-white/[0.08]"
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="relative z-10">
        <p className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
          {metric.prefix}
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            {count}
          </span>
          {metric.suffix}
        </p>
        <p className="mt-3 text-xs font-semibold uppercase tracking-[0.15em] text-accent">
          {metric.label}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-dim">{metric.context}</p>
      </div>
    </motion.div>
  );
}

export function ImpactMetricsSection() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-accent">
            Measured Outcomes
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Production Impact
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {METRICS.map((m, i) => (
            <MetricCard key={m.label} metric={m} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
