const entries = [
  {
    id: "LOG-001",
    title: "[Your Flutter project #1]",
    category: "dev project",
    summary:
      "Replace with a real Flutter app you've built — what it does, the problem it solves, and the stack (e.g. Flutter + Firebase). Link to the repo or an app store listing if it's published.",
    tags: ["flutter", "dart", "placeholder"],
  },
  {
    id: "LOG-002",
    title: "[Your Flutter project #2]",
    category: "dev project",
    summary:
      "A second app or tool. If you can frame it through a security lens — e.g. how you handled auth, stored secrets, or secured API calls — that's a strong bridge between your dev and security work.",
    tags: ["flutter", "security-minded dev", "placeholder"],
  },
  {
    id: "LOG-003",
    title: "picoCTF — General Skills",
    category: "CTF write-up",
    summary:
      "Working through the introductory picoCTF track: command line basics, file inspection, and simple encoding challenges. Replace this with your first solved challenge and what it taught you.",
    tags: ["picoCTF", "linux", "beginner"],
  },
  {
    id: "LOG-004",
    title: "picoCTF — Cryptography",
    category: "CTF write-up",
    summary:
      "Notes on early crypto challenges — Caesar ciphers, base encodings, and basic key exchange concepts. Swap in your actual write-up once you've solved one: what the challenge asked, your approach, and what you'd do differently.",
    tags: ["cryptography", "picoCTF"],
  },
];

export default function Log() {
  return (
    <section id="log" className="border-b border-border px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6 flex items-baseline justify-between">
          <p className="font-mono text-xs text-teal">./log --all</p>
          <p className="font-mono text-xs text-muted">{entries.length} entries</p>
        </div>
        <div className="space-y-4">
          {entries.map((e) => (
            <article
              key={e.id}
              className="rounded-lg border border-border bg-panel p-6 transition-colors hover:border-amber/50"
            >
              <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-muted">{e.id}</span>
                  <span className="rounded border border-border px-2 py-0.5 font-mono text-xs text-muted">
                    {e.category}
                  </span>
                </div>
              </div>
              <h3 className="mb-2 font-mono text-lg text-ink">{e.title}</h3>
              <p className="mb-4 text-sm text-ink/80">{e.summary}</p>
              <div className="flex flex-wrap gap-2">
                {e.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border px-2.5 py-0.5 font-mono text-xs text-teal"
                  >
                    #{t}
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
