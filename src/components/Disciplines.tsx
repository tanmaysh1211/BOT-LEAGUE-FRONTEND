import { disciplines } from "../data/content";

export default function Disciplines() {
  return (
    <section className="border-y border-line bg-panel py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">

        {/* Heading */}
        <p className="font-tech text-sm font-bold uppercase tracking-[0.25em] text-crimson-glow">
          Sports
        </p>

        <h2 className="mt-2 font-display text-3xl tracking-wide text-white sm:text-4xl">
          COMPETITION DISCIPLINES
        </h2>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-2 gap-5 lg:grid-cols-4">

          {disciplines.map((d) => (
            <div
              key={d.id}
              className="group overflow-hidden rounded-md border border-line bg-[#101015]"
            >

              {/* Image */}
              <div className="relative aspect-video overflow-hidden">

                <img
                  src={d.image}
                  alt={d.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />

              </div>

              {/* Name */}
              <div className="border-t border-line bg-[#111118] py-3 text-center">
                <p className="font-tech text-sm font-bold uppercase tracking-wide text-white">
                  {d.name}
                </p>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}