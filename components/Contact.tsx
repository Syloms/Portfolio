const links = [
  { label: "email", value: "ethanjamesestino@gmail.com", href: "mailto: ethanjamesestino@gmail.com" },
  { label: "github", value: "github.com/Sylom", href: "https://github.com/Sylom" },
  { label: "linkedin", value: "linkedin.com/in/yourname", href: "https://linkedin.com/in/yourname" },
  { label: "tryhackme", value: "tryhackme.com/p/yourname", href: "https://tryhackme.com/p/yourname" },
];

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <p className="mb-6 font-mono text-xs text-teal">./contact</p>
        <div className="rounded-lg border border-border bg-panel p-6 sm:p-8">
          <p className="mb-6 max-w-md text-ink/90">
            Open to internships, entry-level roles, and conversations with
            anyone further along this path than I am. Reach out any of these
            ways.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="flex items-center justify-between rounded border border-border px-4 py-3 font-mono text-sm text-ink transition-colors hover:border-amber hover:text-amber"
              >
                <span className="text-muted">{l.label}</span>
                <span>{l.value}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
