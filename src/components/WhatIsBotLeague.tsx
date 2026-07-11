import { featurePoints } from "../data/content";
import arenaGraphic from "../assets/arena-graphic.png";


export default function WhatIsBotLeague() {
  return (
    <section className="border-y border-line bg-panel py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <h2 className="font-display text-3xl tracking-wide text-white sm:text-4xl">WHAT IS BOTLEAGUE?</h2>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
            {featurePoints.map((point) => (
              <div key={point.number}>
                <span className="font-display text-2xl text-crimson">{point.number}</span>
                <h3 className="mt-2 font-tech text-lg font-bold uppercase tracking-wide text-white">{point.title}</h3>
                <p className="mt-2 text-sm text-steel">{point.description}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center lg:justify-end">
          <img src={arenaGraphic} alt="BotLeague graphic" className="w-85 h-50 object-contain brightness-150"/>
        </div>
        </div>
      </div>
    </section>
  );
}
