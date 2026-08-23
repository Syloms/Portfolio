const groups = [
  {
    label: "development",
    items: ["Flutter & Dart", "Mobile app architecture", "REST APIs", "Firebase"],
  },
  {
    label: "security foundations",
    items: ["Networking basics", "Linux CLI", "TCP/IP", "OS fundamentals"],
  },
  {
    label: "security tools",
    items: ["picoCTF", "Wireshark", "Nmap", "Burp Suite (learning)"],
  },
  {
    label: "in progress",
    items: ["Secure coding practices", "Mobile app security (OWASP MASVS)", "Reverse engineering basics"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="border-b border-border px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <p className="mb-6 font-mono text-xs text-teal">./skills</p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((g) => (
            <div
              key={g.label}
              className="rounded-lg border border-border bg-panel p-5"
            >
              <h3 className="mb-3 font-mono text-xs uppercase tracking-wide text-amber">
                {g.label}
              </h3>
              <ul className="space-y-1.5 text-sm text-ink/90">
                {g.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-muted" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
