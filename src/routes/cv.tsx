import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Printer, Mail, Github, MapPin } from "lucide-react";

export const Route = createFileRoute("/cv")({
  head: () => ({
    meta: [
      { title: "CV — Sagwadi Denzel Phaweni, Aspiring Data Analyst" },
      {
        name: "description",
        content:
          "Printable CV of Sagwadi Denzel Phaweni: data analysis projects, Excel and AI tooling skills, CAPACITI AI Acceleration Programme and Google AI Essentials.",
      },
      { property: "og:title", content: "CV — Sagwadi Denzel Phaweni, Aspiring Data Analyst" },
      {
        property: "og:description",
        content:
          "Printable CV of Sagwadi Denzel Phaweni: data analysis projects, Excel and AI tooling skills, and certifications.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CVPage,
});

const technicalSkills = [
  "Excel",
  "Data Analysis",
  "Data Visualisation",
  "SQL (learning)",
  "Python (learning)",
  "AI Tools",
  "Research",
  "Git & GitHub",
];

const softSkills = [
  "Clear communication",
  "Attention to detail",
  "Problem framing",
  "Teamwork",
  "Time management",
];

const projects = [
  {
    title: "Tech Trend Electronics — Sales Data Analysis",
    tools: "Excel, Pivot Tables, Charts",
    text: "Analysed electronics sales records to find top-selling products, seasonal demand patterns, and revenue trends, then summarised the findings into clear recommendations.",
  },
  {
    title: "Business Organisations & Environment Research",
    tools: "Research, Report Writing, Analysis",
    text: "Research project examining how business structures respond to their external environment, comparing organisational models and drawing evidence-based conclusions.",
  },
  {
    title: "Excel Calculations & Portfolio Website",
    tools: "AI Tools, HTML/CSS, Web Deployment",
    text: "Built a set of automated Excel calculation sheets and a personal portfolio website, using AI-assisted development to design, build, and deploy a responsive site.",
  },
];

const education = [
  {
    period: "2026 — Present",
    title: "AI Acceleration Programme",
    org: "CAPACITI",
    detail: "Data analysis and applied AI, delivered through practical project work.",
  },
  {
    period: "2016",
    title: "Grade 12 (Diploma)",
    org: "Lemamna High School",
    detail: "National Senior Certificate.",
  },
];

const certifications = [
  { name: "Google AI Essentials — Google", status: "Completed" },
  { name: "CAPACITI AI Acceleration Programme", status: "In Progress" },
];

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="cv-heading mb-3 border-b border-border pb-1.5 font-heading text-xs font-bold uppercase tracking-[0.18em] text-primary">
      {children}
    </h2>
  );
}

function CVPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      {/* Toolbar — hidden when printing */}
      <div className="no-print sticky top-0 z-20 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-4 py-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:bg-accent"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to portfolio
          </Link>
          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <Printer className="h-4 w-4" />
            Download / Print CV
          </button>
        </div>
      </div>

      <main className="cv-sheet mx-auto max-w-3xl px-5 py-10 sm:px-10 sm:py-14">
        {/* Header */}
        <header className="border-b border-border pb-6">
          <h1 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Sagwadi Denzel Phaweni
          </h1>
          <p className="mt-1.5 font-heading text-base font-semibold text-primary">
            Aspiring Data Analyst
          </p>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <a
              href="mailto:sagwadidenzel@gmail.com"
              className="inline-flex items-center gap-2 hover:text-primary"
            >
              <Mail className="h-4 w-4 text-primary" />
              sagwadidenzel@gmail.com
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-primary"
            >
              <Github className="h-4 w-4 text-primary" />
              github.com
            </a>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              South Africa · 28 years old
            </span>
          </div>
        </header>

        {/* Profile */}
        <section className="mt-8">
          <SectionTitle>Profile</SectionTitle>
          <p className="text-sm leading-relaxed text-muted-foreground">
            I am an aspiring data analyst training through an AI acceleration programme. So far,
            I've worked on sales data analysis, business research, and spreadsheet automation. I
            use AI tools daily to move faster without losing sight of how things work underneath.
            I am actively looking for an internship or entry-level role where I can keep building
            that foundation.
          </p>
        </section>

        {/* Skills */}
        <section className="mt-8">
          <SectionTitle>Skills</SectionTitle>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold text-foreground">Technical</h3>
              <div className="mt-2.5 flex flex-wrap gap-2">
                {technicalSkills.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-primary/40 px-2.5 py-1 text-xs font-medium text-primary"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground">Soft</h3>
              <div className="mt-2.5 flex flex-wrap gap-2">
                {softSkills.map((s) => (
                  <span
                    key={s}
                    className="rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="mt-8">
          <SectionTitle>Experience</SectionTitle>
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="font-heading text-base font-semibold text-foreground">
              Participant — CAPACITI AI Acceleration Programme
            </h3>
            <span className="text-xs font-semibold text-primary">2026 → Now</span>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Hands-on training in data analysis, research, and AI-assisted development, delivered
            through practical project work rather than theory alone. No formal employment yet. I
            build my experience through self-directed analysis, research, and development
            projects listed below.
          </p>
        </section>

        {/* Projects */}
        <section className="mt-8">
          <SectionTitle>Projects</SectionTitle>
          <div className="space-y-5">
            {projects.map((p) => (
              <div key={p.title} className="cv-block">
                <h3 className="font-heading text-base font-semibold text-foreground">{p.title}</h3>
                <p className="mt-1 text-xs font-medium text-primary">{p.tools}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mt-8">
          <SectionTitle>Education</SectionTitle>
          <div className="space-y-4">
            {education.map((e) => (
              <div key={e.title} className="cv-block">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-heading text-base font-semibold text-foreground">
                    {e.title}
                  </h3>
                  <span className="text-xs font-semibold text-primary">{e.period}</span>
                </div>
                <p className="mt-0.5 text-sm font-medium text-foreground">{e.org}</p>
                <p className="mt-1 text-sm text-muted-foreground">{e.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="mt-8">
          <SectionTitle>Certifications</SectionTitle>
          <ul className="space-y-2">
            {certifications.map((c) => (
              <li
                key={c.name}
                className="flex flex-wrap items-baseline justify-between gap-2 text-sm"
              >
                <span className="font-medium text-foreground">{c.name}</span>
                <span className="text-xs font-semibold text-primary">{c.status}</span>
              </li>
            ))}
          </ul>
        </section>

        <p className="mt-10 border-t border-border pt-4 text-xs text-muted-foreground">
          References available on request.
        </p>
      </main>
    </div>
  );
}
