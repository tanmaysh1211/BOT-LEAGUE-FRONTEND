import heroImage from "../assets/hero.png";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-void pt-28 pb-20 sm:pt-36 sm:pb-28">
      {/* Background photo */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="BotLeague robotics arena action shot"
          className="h-full w-full scale-125 object-cover object-[center_68%]"
        />
        {/* Left-to-right fade so the copy panel stays legible over the photo,
            but tightened so the action on the right stays vivid */}
        <div className="absolute inset-0 bg-linear-to-r from-void from-0% via-void/55 via-45% to-transparent to-70%" />
        {/* Light top/bottom vignette, kept subtle so it doesn't wash the photo out */}
        <div className="absolute inset-0 bg-linear-to-t from-void/35 via-transparent to-void/25" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-6 flex justify-end">
        <div className="inline-flex items-center gap-2 border border-crimson/40 bg-crimson/10 px-3 py-1.5 font-tech text-xs font-bold uppercase tracking-widest text-crimson-glow">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-pulse-live rounded-full bg-crimson" />
          </span>
          Live · Episode 14: Bengaluru Regionals
        </div>
      </div>

        <h1 className="font-display text-[13vw] leading-[0.92] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
          INDIA&apos;S ULTIMATE
          <br />
          <span className="text-crimson">ROBOTICS ARENA</span>
        </h1>

        <p className="mt-6 max-w-xl font-tech text-lg text-steel-light">
          Build your bot. Compete regionally. Earn a national rank. BotLeague is the
          structured ecosystem turning garage builds into career-grade robotics athletes.
        </p>

        <div className="mt-9 flex flex-wrap gap-4">
          <a
            href="#join"
            className="bg-crimson px-7 py-3.5 font-tech text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-crimson-glow clip-speed"
          >
            Create Account
          </a>
          <a
            href="#events"
            className="border border-steel/40 px-7 py-3.5 font-tech text-sm font-bold uppercase tracking-widest text-white transition-colors hover:border-white"
          >
            Explore Events
          </a>
        </div>
      </div>
    </section>
  );
}