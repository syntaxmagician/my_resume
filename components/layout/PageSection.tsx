import type { ReactNode } from "react";

type PageSectionProps = {
  id?: string;
  title?: string;
  eyebrow?: string;
  children: ReactNode;
  className?: string;
};

export function PageSection({
  id,
  title,
  eyebrow,
  children,
  className = "",
}: PageSectionProps) {
  return (
    <section id={id} className="border-t border-subtle">
      <div className={`mx-auto max-w-5xl px-6 py-20 md:py-28 ${className}`}>
        {(eyebrow || title) && (
          <header className="mb-12">
            {eyebrow && (
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-dim">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                {title}
              </h2>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
