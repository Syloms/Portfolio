"use client";

import { useEffect, useState } from "react";

const LINES = [
  { prompt: "whoami", output: "Your Name — aspiring cybersecurity analyst" },
  { prompt: "cat status.log", output: "BSIT graduate · Southway College of Technology" },
  { prompt: "ls ./currently-doing", output: "picoCTF exercises, foundational security labs" },
];

export default function Hero() {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [showOutput, setShowOutput] = useState<boolean[]>([]);

  useEffect(() => {
    if (lineIndex >= LINES.length) return;
    const current = LINES[lineIndex].prompt;

    if (charIndex < current.length) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), 35);
      return () => clearTimeout(t);
    }

    const t = setTimeout(() => {
      setShowOutput((prev) => {
        const next = [...prev];
        next[lineIndex] = true;
        return next;
      });
      setLineIndex((i) => i + 1);
      setCharIndex(0);
    }, 250);
    return () => clearTimeout(t);
  }, [charIndex, lineIndex]);

  return (
    <section
      id="top"
      className="grid-fade relative overflow-hidden border-b border-border px-6 pb-20 pt-16 sm:pt-24"
    >
      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="scan rounded-lg border border-border bg-panel p-6 shadow-2xl shadow-black/40 sm:p-8">
          <div className="mb-4 flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-alert/70" />
            <span className="h-3 w-3 rounded-full bg-amber/70" />
            <span className="h-3 w-3 rounded-full bg-teal/70" />
            <span className="ml-3 font-mono text-xs text-muted">
              session: portfolio.sh
            </span>
          </div>

          <div className="space-y-3 font-mono text-sm sm:text-base">
            {LINES.map((line, i) => {
              if (i > lineIndex) return null;
              const isCurrent = i === lineIndex;
              const typed = isCurrent ? line.prompt.slice(0, charIndex) : line.prompt;
              return (
                <div key={line.prompt}>
                  <p>
                    <span className="text-teal">visitor@portfolio</span>
                    <span className="text-muted">:~$ </span>
                    <span className="text-ink">{typed}</span>
                    {isCurrent && charIndex < line.prompt.length && (
                      <span className="ml-0.5 inline-block h-4 w-2 animate-blink bg-amber align-middle" />
                    )}
                  </p>
                  {(showOutput[i] || i < lineIndex) && (
                    <p className="pl-4 text-muted">{line.output}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex items-center gap-5">
            <img
              src="/profile.jpg"
              alt="Your Name"
              className="h-20 w-20 shrink-0 rounded-lg border border-border object-cover shadow-lg shadow-black/30 sm:h-24 sm:w-24"
            />
            <div>
              <h1 className="font-mono text-3xl font-semibold text-ink sm:text-4xl">
                Your Name
              </h1>
              <p className="mt-2 max-w-xl text-muted">
                Early-career, methodical, and building a public record of what I
                learn — CTF challenges, small projects, and the fundamentals,
                logged as I go.
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <a
              href="#log"
              className="rounded border border-amber px-4 py-2 font-mono text-sm text-amber transition-colors hover:bg-amber hover:text-bg"
            >
              view log →
            </a>
            <a
              href="#contact"
              className="rounded border border-border px-4 py-2 font-mono text-sm text-muted transition-colors hover:border-teal hover:text-teal"
            >
              contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
