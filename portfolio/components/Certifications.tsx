const credentials = [
  {
    id: "CRED-01",
    title: "BSIT — Bachelor of Science in Information Technology",
    org: "Southway College of Technology",
    status: "completed",
  },
  {
    id: "CRED-02",
    title: "Scrum White Belt",
    org: "SCRUMstudy",
    status: "completed",
  },
  {
    id: "CRED-03",
    title: "Scrum Yellow Belt",
    org: "SCRUMstudy",
    status: "completed",
  },
  {
    id: "CRED-04",
    title: "picoCTF Practice Track",
    org: "picoCTF (CMU)",
    status: "in progress",
  },
  {
    id: "CRED-05",
    title: "Security+ or equivalent foundational cert",
    org: "planned",
    status: "planned",
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
              className="flex flex-col gap-3 rounded-lg border border-border bg-panel p-5 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex items-start gap-4">
                <span className="mt-0.5 font-mono text-xs text-muted">{c.id}</span>
                <div>
                  <p className="text-ink">{c.title}</p>
                  <p className="text-sm text-muted">{c.org}</p>
                </div>
              </div>
              <span
                className={`w-fit rounded border px-2 py-1 font-mono text-xs ${statusColor[c.status]}`}
              >
                {c.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
