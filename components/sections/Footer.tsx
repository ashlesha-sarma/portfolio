export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-grid mt-12 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <div className="flex items-center gap-4">
          
          <span className="h-4 w-px bg-grid" />
          <span className="label-mono text-[10px]">
            Full Stack · AI/ML · Builder
          </span>
        </div>

        {/* Nav links */}
        <nav className="flex items-center gap-6">
          {["About", "Skills", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xs text-ink/45 hover:text-ink/80 transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Copyright */}
        <p className="text-xs text-ink/35">
          © {year} Ashlesha Sarma. 
        </p>
      </div>

      {/* Bottom strip */}
      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-grid/60 flex items-center justify-center">
        <div className="flex items-center gap-2 text-[10px] text-ink/25 label-mono">
          <span>Designed with care</span>
          <span className="star-sticker scale-50 opacity-60">★</span>
          <span>Engineered for craft</span>
        </div>
      </div>
    </footer>
  );
}
