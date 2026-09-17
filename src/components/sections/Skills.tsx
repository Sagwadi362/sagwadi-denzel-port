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

export function Skills() {
  return (
    <section id="skills" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Skills</p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Tools & strengths I bring
          </h2>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-2">
          {/* Technical skills */}
          <div className="rounded-2xl border border-border bg-card/50 p-6 sm:p-8">
            <h3 className="font-heading text-xl font-semibold text-foreground">Technical Skills</h3>
            <div className="mt-6 flex flex-wrap gap-3">
              {technicalSkills.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex rounded-full border border-primary/40 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/10"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Soft skills */}
          <div className="rounded-2xl border border-border bg-card/50 p-6 sm:p-8">
            <h3 className="font-heading text-xl font-semibold text-foreground">Soft Skills</h3>
            <div className="mt-6 flex flex-wrap gap-3">
              {softSkills.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex rounded-full bg-muted px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted/80"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
