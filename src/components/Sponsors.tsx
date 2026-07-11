import { sponsors } from "../data/content";

export default function Sponsors() {
  return (
    <section className="bg-void py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">

        <p className="font-tech text-sm font-bold uppercase tracking-[0.25em] text-steel">
          Sponsors
        </p>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {sponsors.map((s) => (
            <div
              key={s.name}
              className="flex flex-col items-center rounded-md border border-line/40 bg-panel/20 p-6 transition-all duration-300 hover:border-crimson/40 hover:bg-panel/40"
            >
              <div className="flex h-24 w-52 items-center justify-center">
                <img
                  src={s.logo}
                  alt={s.name}
                  className="max-h-8 max-w-full object-contain grayscale transition duration-300 hover:grayscale-0"
                />
              </div>

              <p className="mt-2 font-tech text-sm font-semibold uppercase tracking-wide text-steel-light">
                {s.name}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}