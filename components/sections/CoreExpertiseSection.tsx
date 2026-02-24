import { PageSection } from "../layout/PageSection";

const EXPERTISE = [
  {
    title: "Database Performance Optimization",
    description:
      "Query profiling, index tuning, and access pattern optimization for production-grade throughput.",
  },
  {
    title: "Scalable API Architecture",
    description:
      "Service boundaries and API contracts that scale horizontally with predictable failure behavior.",
  },
  {
    title: "Production Incident Resolution",
    description:
      "Root cause analysis in live systems using logs, metrics, and runtime inspection.",
  },
  {
    title: "Connection Pool Management",
    description:
      "Right-sizing pools across clustered processes to prevent connection storms and resource exhaustion.",
  },
  {
    title: "Service Layer & Clean Architecture",
    description:
      "Business logic isolation from transport and persistence for testable, maintainable code.",
  },
  {
    title: "Infrastructure Awareness",
    description:
      "Understanding PM2, Docker, Linux, and Nginx interactions for end-to-end resource optimization.",
  },
];

export function CoreExpertiseSection() {
  return (
    <PageSection id="expertise" title="Core Expertise">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {EXPERTISE.map((item) => (
          <article
            key={item.title}
            className="rounded-lg border border-subtle bg-surface p-6"
          >
            <h3 className="text-sm font-semibold text-foreground">
              {item.title}
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-dim">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </PageSection>
  );
}
