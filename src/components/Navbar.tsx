import { useEffect, useState } from "react";

const NAV_LINKS = ["Events", "Programs", "Community", "Ranks"] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-void/90 backdrop-blur-md border-b border-line" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-2.5 sm:px-8">
        <a href="#top" className="flex items-center gap-1.5 font-display text-base tracking-wide text-white">
          <span className="inline-block h-2 w-2 rotate-45 bg-crimson" />
          BOT<span className="text-crimson">LEAGUE</span>
        </a>

        <ul className="hidden items-center gap-7 font-tech text-xs font-semibold uppercase tracking-wider text-steel-light md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} className="group relative pb-2">
                {link}
              <span className=" absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0  bg-crimson transition-transform duration-300 group-hover:scale-x-100 "/>
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 md:flex">
          <button className="font-tech text-xs font-semibold uppercase tracking-wider text-steel-light transition-colors hover:text-white">
            Login
          </button>
          <a
            href="#join"
            className="bg-crimson px-4 py-2 font-tech text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-crimson-glow clip-speed"
          >
            Register Now
          </a>
        </div>

        <button
          className="grid h-8 w-8 place-items-center border border-line text-white md:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className="relative block h-3 w-4">
            <span
              className={`absolute inset-x-0 top-0 h-0.5 bg-white transition-transform ${menuOpen ? "translate-y-1.5 rotate-45" : ""}`}
            />
            <span className={`absolute inset-x-0 top-1.5 h-0.5 bg-white transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
            <span
              className={`absolute inset-x-0 top-3 h-0.5 bg-white transition-transform ${menuOpen ? "-translate-y-1.5 -rotate-45" : ""}`}
            />
          </span>
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-line bg-void px-5 pb-6 pt-2 md:hidden">
          <ul className="flex flex-col gap-4 font-tech text-base font-semibold uppercase tracking-wider text-steel-light">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex gap-3">
            <button className="flex-1 border border-line py-2.5 font-tech text-sm font-semibold uppercase tracking-wider text-white">
              Login
            </button>
            <a
              href="#join"
              onClick={() => setMenuOpen(false)}
              className="flex-1 bg-crimson py-2.5 text-center font-tech text-sm font-bold uppercase tracking-wider text-white"
            >
              Register
            </a>
          </div>
        </div>
      )}
    </header>
  );
}