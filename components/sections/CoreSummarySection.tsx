import { PageSection } from "../layout/PageSection";

export function CoreSummarySection() {
  return (
    <PageSection id="summary" title="What I Focus On">
      <div className="grid gap-5 md:grid-cols-2">
        <p className="text-sm leading-relaxed text-muted">
          Making backend systems predictable: stable performance, clear failure
          modes, and consistent behaviour under growing load.
        </p>
        <p className="text-sm leading-relaxed text-muted">
          Combining pragmatic architecture with careful database design and
          hands-on infrastructure experience.
        </p>
      </div>
    </PageSection>
  );
}
