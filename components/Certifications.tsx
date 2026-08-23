const credentials = [
  {
    id: "CRED-01",
    title: "Cyber Defense Exercise Qualifiers — Certificate of Appreciation",
    org: "Headquarters Philippine Army (26th Infantry Battalion, 4ID, PA)",
    status: "completed",
    image: "/certs/cyber-defense-exercise.jpg",
  },
  {
    id: "CRED-02",
    title: "BSIT — Bachelor of Science in Information Technology",
    org: "Southway College of Technology",
    status: "completed",
    image: null,
  },
  {
    id: "CRED-03",
    title: "Lean Six Sigma Yellow Belt",
    org: "Council for Six Sigma Certification",
    status: "completed",
    image: "/certs/lss-yellow-belt.jpg",
  },
  {
    id: "CRED-04",
    title: "Lean Six Sigma White Belt",
    org: "Council for Six Sigma Certification",
    status: "completed",
    image: "/certs/lss-white-belt.jpg",
  },
  {
    id: "CRED-05",
    title: "picoCTF Practice Track",
    org: "picoCTF (CMU)",
    status: "in progress",
    image: null,
  },
  {
    id: "CRED-06",
    title: "Security+ or equivalent foundational cert",
    org: "planned",
    status: "planned",
    image: null,
  },
];

const events = [
  {
    title: "Educational Tour — Software Development",
    org: "Mariosoft Solutions",
    image: "/certs/mariosoft-tour.jpg",
  },
  {
    title: "Disaster Risk Reduction Seminar",
    org: "Bantay Mandaue",
    image: "/certs/bantay-mandaue-seminar.jpg",
  },
  {
    title: "Animation Industry Seminar",
    org: "Emottoons Animation Studio",
    image: "/certs/emottoons-seminar.jpg",
  },
  {
    title: "BPO Site Tour",
    org: "ePerformax",
    image: "/certs/eperformax-tour.jpg",
  },
];

const statusColor: Record<string, string> = {
  completed: "text-teal border-teal/40",
  "in progress": "text-amber border-amber/40",
  planned: "text-muted border-border",
};

export default function Certifications() {
  return (
    <section id="credentials" className="border-b border-border px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <p className="mb-6 font-mono text-xs text-teal">./credentials</p>
        <div className="space-y-3">
          {credentials.map((c) => (
            <div
              key={c.id}
              className="flex flex-col gap-4 rounded-lg border border-border bg-panel p-5 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex items-start gap-4">
                <span className="mt-0.5 font-mono text-xs text-muted">{c.id}</span>
                <div>
                  <p className="text-ink">{c.title}</p>
                  <p className="text-sm text-muted">{c.org}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                {c.image && (
                  <img
                    src={c.image}
                    alt={c.title}
                    className="h-16 w-24 rounded border border-border object-cover"
                  />
                )}
                <span
                  className={`w-fit whitespace-nowrap rounded border px-2 py-1 font-mono text-xs ${statusColor[c.status]}`}
                >
                  {c.status}
                </span>
              </div>
            </div>
          ))}
        </div>

        <p className="mb-6 mt-12 font-mono text-xs text-teal">./events-and-talks</p>
        <div className="grid gap-4 sm:grid-cols-2">
          {events.map((e) => (
            <div
              key={e.title}
              className="overflow-hidden rounded-lg border border-border bg-panel"
            >
              <img
                src={e.image}
                alt={e.title}
                className="h-40 w-full object-cover"
              />
              <div className="p-4">
                <p className="text-sm text-ink">{e.title}</p>
                <p className="text-xs text-muted">{e.org}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
