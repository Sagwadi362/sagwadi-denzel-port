import { CalendarDays, GraduationCap } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Experience</p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Building experience through practice
          </h2>
        </div>

        <div className="mt-14 rounded-2xl border border-border bg-card p-6 sm:p-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="font-heading text-xl font-semibold text-foreground sm:text-2xl">
                Participant — CAPACITI AI Acceleration Programme
              </h3>
              <p className="mt-2 inline-flex items-center gap-2 text-sm text-primary">
                <GraduationCap className="h-4 w-4" />
                Training & Project-Based Learning
              </p>
            </div>
            <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              <CalendarDays className="h-3.5 w-3.5" />
              2026 → Now
            </span>
          </div>

          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Hands-on training in data analysis, research, and AI-assisted development, delivered
            through practical project work rather than theory alone. No formal employment yet. I
            build my experience through self-directed analysis, research, and development projects
            listed above.
          </p>
        </div>
      </div>
    </section>
  );
}
