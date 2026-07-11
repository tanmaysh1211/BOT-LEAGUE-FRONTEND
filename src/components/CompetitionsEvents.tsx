import { upcomingEvents, pastResults } from "../data/content";
const BOX_H = 32;
const GAP = 20; 
const STEP = BOX_H + GAP;

const R1_X = 0;
const R1_W = 72;
const R2_X = 130;
const R2_W = 68;
const R3_X = 236;
const R3_W = 64;

const TOTAL_W = R3_X + R3_W;
const MID_1 = (R1_X + R1_W + R2_X) / 2; 
const MID_2 = (R2_X + R2_W + R3_X) / 2; 

const round1 = [
  { name: "Ironclad", top: 0 * STEP },
  { name: "Vector-9", top: 1 * STEP },
  { name: "Voltbenders", top: 2 * STEP },
  { name: "Ferrofluid", top: 3 * STEP },
];
const HEIGHT = 3 * STEP + BOX_H;

const center = (top: number) => top + BOX_H / 2;

const r2c0 = (center(round1[0].top) + center(round1[1].top)) / 2;
const r2c1 = (center(round1[2].top) + center(round1[3].top)) / 2;
const finalC = (r2c0 + r2c1) / 2;

const round2 = [
  { name: "Ironclad", top: r2c0 - BOX_H / 2, active: false },
  { name: "Voltbenders", top: r2c1 - BOX_H / 2, active: false },
];
const finalTop = finalC - BOX_H / 2;

function BracketBox({
  name,
  top,
  left,
  width,
  variant = "default",
}: {
  name: string;
  top: number;
  left: number;
  width: number;
  variant?: "default" | "active" | "final";
}) {
  const styles = {
    default: "border border-line bg-panel-2 text-steel-light",
    active: "border border-crimson/50 bg-crimson/10 text-white",
    final: "border border-gold/60 bg-gold/10 text-gold font-bold",
  }[variant];

  return (
    <div
      className={`absolute flex items-center px-2 font-tech text-[10px] font-semibold leading-tight ${styles}`}
      style={{ top, left, width, height: BOX_H }}
    >
      {name}
    </div>
  );
}

function LiveBracket() {
  const r1c0 = center(round1[0].top);
  const r1c1 = center(round1[1].top);
  const r1c2 = center(round1[2].top);
  const r1c3 = center(round1[3].top);

  return (
    <div className="py-2">
      <div className="relative mx-auto" style={{ width: TOTAL_W, height: HEIGHT, maxWidth: "100%" }}>
        <svg
          className="absolute inset-0"
          width={TOTAL_W}
          height={HEIGHT}
          viewBox={`0 0 ${TOTAL_W} ${HEIGHT}`}
          fill="none"
        >
          {/* Round 1 -> Round 2 (top pair) */}
          <path
            d={`M${R1_X + R1_W},${r1c0} H${MID_1} V${r1c1} H${R1_X + R1_W} M${MID_1},${r2c0} H${R2_X}`}
            style={{ stroke: "var(--color-crimson)" }}
            strokeWidth={2}
            strokeLinejoin="round"
          />
          {/* Round 1 -> Round 2 (bottom pair) */}
          <path
            d={`M${R1_X + R1_W},${r1c2} H${MID_1} V${r1c3} H${R1_X + R1_W} M${MID_1},${r2c1} H${R2_X}`}
            style={{ stroke: "var(--color-crimson)" }}
            strokeWidth={2}
            strokeLinejoin="round"
          />
          {/* Round 2 -> Final */}
          <path
            d={`M${R2_X + R2_W},${r2c0} H${MID_2} V${r2c1} H${R2_X + R2_W} M${MID_2},${finalC} H${R3_X}`}
            style={{ stroke: "var(--color-crimson)" }}
            strokeWidth={2}
            strokeLinejoin="round"
          />
        </svg>

        {round1.map((r) => (
          <BracketBox key={r.name} name={r.name} top={r.top} left={R1_X} width={R1_W} />
        ))}

        {round2.map((r) => (
          <BracketBox
            key={r.name}
            name={r.name}
            top={r.top}
            left={R2_X}
            width={R2_W}
            variant={r.active ? "active" : "default"}
          />
        ))}

        <BracketBox name="Final: TBD" top={finalTop} left={R3_X} width={R3_W} variant="final" />
      </div>
    </div>
  );
}

export default function CompetitionsEvents() {
  return (
    <section id="events" className="border-y border-line bg-panel py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <h2 className="font-display text-3xl tracking-wide text-white sm:text-4xl">
          COMPETITIONS &amp; EVENTS
        </h2>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {/* Live now */}
          <div className="flex h-full flex-col border border-line bg-panel-2 p-6">
            <div className="mb-5 flex items-center gap-2">
              <span className="font-tech text-sm font-bold uppercase tracking-widest text-crimson-glow">Live Now</span>
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-pulse-live rounded-full bg-crimson" />
              </span>
            </div>
            <div className="mb-4 flex items-center justify-between">
              <p className="font-tech text-base font-semibold text-white">Bengaluru Regionals</p>
              <span className="bg-crimson/15 px-2 py-1 font-tech text-[10px] font-bold uppercase tracking-wider text-crimson-glow">
                Streaming
              </span>
            </div>
            <div className="flex flex-1 items-center justify-center">
              <LiveBracket />
            </div>
          </div>

          {/* Upcoming */}
          <div className="border border-line bg-panel-2 p-6">
            <p className="mb-5 font-tech text-sm font-bold uppercase tracking-widest text-steel">Upcoming</p>
            <div className="flex flex-col gap-4">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="border border-line/70 p-4">
                  <p className="font-tech text-base font-semibold text-white">Event in {event.city.split(" ")[0]}</p>
                  <dl className="mt-2 grid grid-cols-2 gap-y-1 font-tech text-xs text-steel">
                    <dt className="text-steel/70">Date</dt>
                    <dd className="text-right text-steel-light">{event.date}</dd>
                    <dt className="text-steel/70">Location</dt>
                    <dd className="text-right text-steel-light">{event.location}</dd>
                    <dt className="text-steel/70">Category</dt>
                    <dd className="text-right text-steel-light">{event.category}</dd>
                  </dl>
                  <button className="mt-3 w-full bg-crimson py-2 font-tech text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-crimson-glow">
                    Register
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Past results */}
          <div className="border border-line bg-panel-2 p-6">
            <p className="mb-5 font-tech text-sm font-bold uppercase tracking-widest text-steel">Past Results</p>
            <ul className="flex flex-col divide-y divide-line">
              {pastResults.map((result) => (
                <li key={result.id} className="py-4 first:pt-0">
                  <p className="font-tech text-base font-semibold text-white">{result.name}</p>
                  <p className="mt-1 text-sm text-steel">{result.summary}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
