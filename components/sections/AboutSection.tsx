import { PageSection } from "../layout/PageSection";

export function AboutSection() {
  return (
    <PageSection id="about" title="About">
      <div className="space-y-4 text-sm leading-relaxed text-muted">
        <p>
          I focus on designing backend architectures that stay predictable under
          load. That means clear service boundaries, stable database access
          patterns, and infrastructure-aware decisions that keep systems
          operable in production.
        </p>
      </div>
    </PageSection>
  );
}
