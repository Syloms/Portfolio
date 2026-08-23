const links = [
  { href: "#about", label: "about" },
  { href: "#skills", label: "skills" },
  { href: "#credentials", label: "credentials" },
  { href: "#log", label: "log" },
  { href: "#contact", label: "contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-bg/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-mono text-sm text-ink">
          <span className="text-teal">$</span> whoami
        </a>
        <ul className="flex gap-6 font-mono text-xs text-muted">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-amber">
                ./{l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
