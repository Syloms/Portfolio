export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-6">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 font-mono text-xs text-muted sm:flex-row">
        <p>© {new Date().getFullYear()} EthanJames Estino — built with Next.js, deployed on Vercel</p>
        <p>status: exit 0</p>
      </div>
    </footer>
  );
}
