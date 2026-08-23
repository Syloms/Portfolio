"use client";

import { useState } from "react";

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

type LightboxItem = {
  image: string;
  title: string;
  org: string;
};

export default function Certifications() {
  const [active, setActive] = useState<LightboxItem | null>(null);

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
                  <button
                    type="button"
                    onClick={() =>
                      setActive({ image: c.image as string, title: c.title, org: c.org })
                    }
                    className="group relative shrink-0"
                    aria-label={`View ${c.title} certificate`}
                  >
                    <img
                      src={c.image}
                      alt={c.title}
                      className="h-16 w-24 rounded border border-border object-cover transition-opacity group-hover:opacity-70"
                    />
                    <span className="pointer-events-none absolute inset-0 flex items-center justify-center rounded bg-bg/0 font-mono text-[10px] text-ink opacity-0 transition-opacity group-hover:bg-bg/50 group-hover:opacity-100">
                      view
                    </span>
                  </button>
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
            <button
              key={e.title}
              type="button"
              onClick={() => setActive({ image: e.image, title: e.title, org: e.org })}
              className="group overflow-hidden rounded-lg border border-border bg-panel text-left"
              aria-label={`View ${e.title} certificate`}
            >
              <div className="relative">
                <img
                  src={e.image}
                  alt={e.title}
                  className="h-40 w-full object-cover transition-opacity group-hover:opacity-70"
                />
                <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-bg/0 font-mono text-xs text-ink opacity-0 transition-opacity group-hover:bg-bg/50 group-hover:opacity-100">
                  view
                </span>
              </div>
              <div className="p-4">
                <p className="text-sm text-ink">{e.title}</p>
                <p className="text-xs text-muted">{e.org}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-bg/90 p-6"
          onClick={() => setActive(null)}
        >
          <div
            className="max-h-[85vh] w-full max-w-2xl overflow-hidden rounded-lg border border-border bg-panel"
            onClick={(ev) => ev.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-border px-4 py-3">
              <div>
                <p className="font-mono text-sm text-ink">{active.title}</p>
                <p className="font-mono text-xs text-muted">{active.org}</p>
              </div>
              <button
                type="button"
                onClick={() => setActive(null)}
                className="rounded border border-border px-2 py-1 font-mono text-xs text-muted transition-colors hover:border-amber hover:text-amber"
                aria-label="Close"
              >
                close ✕
              </button>
            </div>
            <div className="max-h-[70vh] overflow-auto bg-bg p-4">
              <img
                src={active.image}
                alt={active.title}
                className="mx-auto max-h-[65vh] w-auto rounded"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
