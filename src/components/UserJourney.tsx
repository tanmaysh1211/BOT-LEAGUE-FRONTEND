import { journeySteps } from "../data/content";
import { Wrench,ChartColumn,Trophy,Users} from "lucide-react";

const ICONS = { team: Wrench , compete: ChartColumn , rank: Trophy , join: Users };

export default function UserJourney() {
  return (
    <section className="bg-void py-10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
      <div className="mx-auto mb-14 max-w-3xl text-center">
      <p className="font-tech text-sm font-bold uppercase tracking-[0.25em] text-crimson-glow">
        User Journey
      </p>
      <h2 className="mt-2 font-display text-3xl tracking-wide text-white sm:text-4xl">
        YOUR PATH TO THE LEAGUE
      </h2>
      <p className="mx-auto mt-3 max-w-2xl text-steel">
        Four stages take you from a first-time builder to a nationally ranked competitor.
      </p>
    </div>

        <div className="relative mt-14 grid grid-cols-2 gap-y-12 sm:grid-cols-4 sm:gap-y-0">
          <div className="absolute left-[12.5%] right-[12.5%] top-9 hidden h-px bg-blue-800 sm:block" />
          {journeySteps.map((step) => {
            const Icon = ICONS[step.icon];
            return (
              <div key={step.step} className="relative flex flex-col items-center px-3 text-center">
                <div className="relative z-10 grid h-18 w-18 place-items-center rounded-full border-2 border-[#1A1099] bg-panel text-crimson-glow shadow-[0_0_10px_rgba(180,180,180,0.35),0_0_22px_rgba(120,120,120,0.22),0_0_40px_rgba(80,80,80,0.12)]">
                  <Icon width={28} height={28} />
                </div>
                <div className="my-0.5 h-5 w-px bg-gray-700" />
                <span className="mt-1.5 font-tech text-xs font-bold uppercase tracking-widest text-crimson-glow">
                  Step {step.step}
                </span>
                <p className="mt-1 font-tech text-base font-bold uppercase tracking-wide text-white">{step.title}</p>
                <p className="mt-2 max-w-60 text-sm text-steel">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
