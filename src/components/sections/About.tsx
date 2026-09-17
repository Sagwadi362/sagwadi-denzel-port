import { User, Target, Lightbulb } from "lucide-react";

const highlights = [
  {
    icon: Target,
    title: "Business-first",
    text: "I focus on what the data means for decisions, not just the numbers themselves.",
  },
  {
    icon: Lightbulb,
    title: "AI-assisted",
    text: "I use AI tools to move faster while staying grounded in how the analysis works.",
  },
  {
    icon: User,
    title: "Clear communicator",
    text: "I translate complex findings into simple, useful explanations for any audience.",
  },
];

export function About() {
  return (
    <section id="about" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">About Me</p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Turning raw data into clear answers.
            </h2>
            <p className="mt-6 text-balance text-base leading-relaxed text-muted-foreground sm:text-lg">
              I am an aspiring data analyst training through an AI acceleration programme. So
              far, I've worked on sales data analysis, business research, and spreadsheet
              automation. I use AI tools daily to move faster without losing sight of how things
              work underneath. I am actively looking for an internship or entry-level role where I
              can keep building that foundation.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/30"
              >
                <div className="inline-flex rounded-xl bg-primary/10 p-3">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
