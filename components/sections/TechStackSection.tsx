import { PageSection } from "../layout/PageSection";

const TECH_GROUPS = [
  { label: "Backend", items: ["Node.js", "Golang"] },
  { label: "Database", items: ["MySQL", "Sequelize", "Redis"] },
  { label: "DevOps", items: ["Docker", "PM2", "Linux", "Nginx"] },
  { label: "Monitoring", items: ["PM2 logs", "Runtime metrics", "Alerts"] },
];

export function TechStackSection() {
  return (
    <PageSection id="tech" title="Tech Stack">
      <div className="grid gap-4 sm:grid-cols-2">
        {TECH_GROUPS.map((group) => (
          <div
            key={group.label}
            className="rounded-lg border border-subtle bg-surface p-6"
          >
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-dim">
              {group.label}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-subtle bg-background px-3 py-1 text-xs font-medium text-muted"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </PageSection>
  );
}
