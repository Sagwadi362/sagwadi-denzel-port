const timeline = [
  {
    year: "2026",
    title: "AI Acceleration Programme",
    org: "CAPACITI",
    detail: "Data analysis and applied AI",
  },
  {
    year: "Cert",
    title: "Google AI Essentials",
    org: "Google",
    detail: "Completed",
  },
  {
    year: "Cert",
    title: "CAPACITI AI Acceleration",
    org: "CAPACITI",
    detail: "In Progress",
  },
];

export function Education() {
  return (
    <section id="education" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Education & Certifications
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Learning path
          </h2>
        </div>

        <div className="relative mt-14">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-border sm:left-1/2 sm:-ml-px" />

          <div className="space-y-10">
            {timeline.map((item, index) => (
              <div
                key={item.title}
                className={`relative flex items-start gap-6 sm:gap-0 ${
                  index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 z-10 h-3 w-3 -translate-x-1.5 rounded-full bg-primary ring-4 ring-background sm:left-1/2 sm:-translate-x-1.5" />

                {/* Content */}
                <div
                  className={`ml-12 flex-1 sm:ml-0 sm:w-1/2 ${
                    index % 2 === 0 ? "sm:pr-12 sm:text-right" : "sm:pl-12 sm:text-left"
                  }`}
                >
                  <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                    {item.year}
                  </span>
                  <h3 className="mt-3 font-heading text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-muted-foreground">{item.org}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{item.detail}</p>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden flex-1 sm:block sm:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
