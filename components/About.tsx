export default function About() {
  return (
    <section id="about" className="border-b border-border px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <p className="mb-6 font-mono text-xs text-teal">./about</p>
        <div className="grid gap-10 sm:grid-cols-[1.3fr,1fr]">
          <div className="space-y-4 text-ink/90">
            <p>
              I'm a BSIT graduate from Southway College of Technology and a
              Flutter developer, now applying that development background to
              cybersecurity — starting with picoCTF exercises to build
              hands-on skill in web exploitation, cryptography, and reverse
              engineering. In October 2025 I represented my school's
              partnered battalion in the Philippine Army's Cyber Defense
              Exercise Qualifiers, which gave me an early, practical taste of
              defensive security under real conditions.
            </p>
            <p>
              Coming from software development gives me a head start on
              reading code critically and thinking about how things break,
              which I'm now pointing at security specifically: secure coding
              practices, mobile app security, and vulnerability analysis. I
              haven't settled on a specialization within security yet, and
              I'm documenting what I learn along the way rather than waiting
              until I feel "ready" to share it.
            </p>
            <p>
              This site is that record — a running log of challenges solved,
              concepts learned, and small projects built, updated as I go.
            </p>
          </div>
          <div className="rounded-lg border border-border bg-panel p-6 font-mono text-sm">
            <p className="mb-3 text-muted">// quick facts</p>
            <dl className="space-y-2">
              <div className="flex justify-between gap-4">
                <dt className="text-muted">education</dt>
                <dd className="text-right text-ink">BSIT, Southway College of Technology</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-muted">background</dt>
                <dd className="text-right text-ink">Flutter developer</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-muted">exercise</dt>
                <dd className="text-right text-ink">Cyber Defense Exercise Qualifiers, PH Army</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-muted">process</dt>
                <dd className="text-right text-ink">Lean Six Sigma White &amp; Yellow Belt</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-muted">focus</dt>
                <dd className="text-right text-ink">applying dev skills to security</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-muted">currently</dt>
                <dd className="text-right text-ink">picoCTF practice</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-muted">status</dt>
                <dd className="text-right text-teal">actively learning</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
