import { categories } from "../data/content";
import { GearIcon, BulbIcon, ShieldIcon, BrainIcon, ChevronRight } from "./icons";

const ICONS = { gear: GearIcon, bulb: BulbIcon, shield: ShieldIcon, brain: BrainIcon };

export default function Categories() {
  return (
    <section id="programs" className="bg-void py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <h2 className="font-display text-3xl tracking-wide text-white sm:text-4xl">CATEGORIES</h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => {
            const Icon = ICONS[cat.icon];
            const featured = cat.featured;
            return (
              <div
                key={cat.id}
                className={`group flex flex-col justify-between border p-6 transition-colors ${
                  featured
                    ? "border-gold/60 bg-gold/[0.07] hover:bg-gold/12"
                    : "border-line bg-panel-2 hover:border-crimson/50"
                }`}
              >
                <div>
                  <div
                    className={`grid h-12 w-12 place-items-center ${
                      featured ? "bg-gold/15 text-gold" : "bg-crimson/15 text-crimson-glow"
                    }`}
                  >
                    <Icon />
                  </div>
                  <h3 className="mt-5 font-tech text-lg font-bold uppercase tracking-wide text-white">{cat.name}</h3>
                  <p className="mt-2 text-sm text-steel">{cat.tagline}</p>
                </div>
                <button
                  className={`mt-6 flex items-center gap-1 font-tech text-xs font-bold uppercase tracking-widest ${
                    featured ? "text-gold" : "text-crimson-glow"
                  }`}
                >
                  Learn More
                  <ChevronRight width={14} height={14} className="transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
