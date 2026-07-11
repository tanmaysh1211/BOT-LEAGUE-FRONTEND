import { advantages, leaderboard } from "../data/content";
import { MedalIcon, GavelIcon, BriefcaseIcon, BoltIcon } from "./icons";

const ICONS = { medal: MedalIcon, gavel: GavelIcon, briefcase: BriefcaseIcon, bolt: BoltIcon };

function LeaderboardPanel() {
  return (
    <div className="border border-line bg-panel-2 p-6">
      <div className="mb-5 flex items-center justify-between">
        <p className="font-tech text-sm font-bold uppercase tracking-widest text-gold">Leaderboard</p>
        <span className="font-display text-lg text-white">S08754</span>
      </div>
      <ul className="flex flex-col gap-2">
        {leaderboard.map((entry) => (
          <li
            key={entry.rank}
            className="flex items-center justify-between border border-line/70 bg-void/50 px-4 py-2.5"
          >
            <div className="flex items-center gap-3">
              <span
                className={`grid h-6 w-6 place-items-center font-tech text-xs font-bold ${
                  entry.rank === 1 ? "bg-gold text-void" : "bg-line text-steel-light"
                }`}
              >
                {entry.rank}
              </span>
              <span className="font-tech text-sm font-semibold text-white">{entry.name}</span>
            </div>
            <span className="font-tech text-sm text-steel-light">{entry.points.toLocaleString("en-IN")}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function WhyRegister() {
  return (
    <section id="ranks" className="bg-void py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <p className="font-tech text-sm font-bold uppercase tracking-[0.25em] text-crimson-glow">Why Register?</p>
            <h2 className="mt-2 font-display text-3xl tracking-wide text-white sm:text-4xl">
              THE LEAGUE ADVANTAGE
            </h2>

            <div className="mt-9 flex flex-col gap-6">
              {advantages.map((a) => {
                const Icon = ICONS[a.icon];
                return (
                  <div key={a.title} className="flex gap-4">
                    <div className="grid h-11 w-11 shrink-0 place-items-center bg-crimson/15 text-crimson-glow">
                      <Icon width={20} height={20} />
                    </div>
                    <div>
                      <h3 className="font-tech text-base font-bold uppercase tracking-wide text-white">{a.title}</h3>
                      <p className="mt-1 text-sm text-steel">{a.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <LeaderboardPanel />
        </div>
      </div>
    </section>
  );
}
