import { BarChart3, FileSearch, Globe } from "lucide-react";

const projects = [
  {
    icon: BarChart3,
    title: "Tech Trend Electronics — Sales Data Analysis",
    category: "Data Analysis",
    description:
      "Analysed electronics sales records to find top-selling products, seasonal demand patterns, and revenue trends, then summarised the findings into clear recommendations.",
    tools: ["Excel", "Pivot Tables", "Charts"],
  },
  {
    icon: FileSearch,
    title: "Business Organisations & Environment Research",
    category: "Research",
    description:
      "Research project examining how business structures respond to their external environment, comparing organisational models and drawing evidence-based conclusions.",
    tools: ["Research", "Report Writing", "Analysis"],
  },
  {
    icon: Globe,
    title: "Excel Calculations & Portfolio Website",
    category: "Web & Automation",
    description:
      "Built a set of automated Excel calculation sheets and this portfolio website, using AI-assisted development to design, build, and deploy a responsive personal site.",
    tools: ["AI Tools", "HTML/CSS", "Web Deployment"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Portfolio</p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Selected Projects
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Practical work that shows how I approach data, research, and AI-assisted development.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_0_40px_-15px_color-mix(in_oklab,var(--color-primary)_20%,transparent)] sm:p-8"
            >
              <div className="inline-flex w-fit rounded-xl bg-primary/10 p-3">
                <project.icon className="h-6 w-6 text-primary" />
              </div>
              <span className="mt-6 w-fit rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
                {project.category}
              </span>
              <h3 className="mt-4 font-heading text-lg font-semibold leading-snug text-foreground sm:text-xl">
                {project.title}
              </h3>
              <p className="mt-3 flex-grow text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-md border border-border px-2 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
