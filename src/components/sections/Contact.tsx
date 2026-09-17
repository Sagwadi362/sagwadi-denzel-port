import { Mail, Github, ArrowUpRight } from "lucide-react";

const links = [
  {
    label: "Email",
    value: "sagwadidenzel@gmail.com",
    href: "mailto:sagwadidenzel@gmail.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "github.com",
    href: "https://github.com",
    icon: Github,
  },
];

export function Contact() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="relative border-t border-border px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">Contact</p>
        <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Let's work together
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          I'm open to internships and entry-level data roles. Reach out and let's talk about how
          I can contribute.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group inline-flex w-full items-center justify-between gap-4 rounded-2xl border border-border bg-card px-6 py-5 text-left transition-all hover:border-primary/30 sm:w-auto sm:min-w-[16rem]"
            >
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-primary/10 p-2.5">
                  <link.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {link.label}
                  </p>
                  <p className="mt-0.5 text-sm font-medium text-foreground">{link.value}</p>
                </div>
              </div>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          ))}
        </div>

        <p className="mt-16 text-xs text-muted-foreground">
          © {currentYear} Sagwadi Denzel Phaweni. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
