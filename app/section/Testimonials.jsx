"use client";
import React from "react";

const testimonials = [
  {
    name: "Aarav K.",
    location: "Mumbai, IN",
    review:
      "Clean UI and quick withdrawals on small wins. Live odds refresh fast so placing a bet feels smooth.",
    rating: 5,
  },
  {
    name: "Sara M.",
    location: "Delhi, IN",
    review:
      "In-play stats are helpful. I keep stakes small and use time-outs when I need a break—nice to have built-in tools.",
    rating: 4,
  },
  {
    name: "Vikram S.",
    location: "Bengaluru, IN",
    review:
      "Multiples are fun and the bet slip is easy. KYC was fast and support was responsive.",
    rating: 4,
  },
];

function Stars({ rating }) {
  const safe = Math.max(0, Math.min(5, Number(rating) || 0));
  return (
    <div className="flex items-center gap-1" aria-label={`${safe} out of 5`}>
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          className={`text-base ${i < safe ? "text-amber-400" : "text-amber-700/40"}`}
        >
          ★
        </span>
      ))}
      <span className="sr-only">{safe} out of 5 stars</span>
    </div>
  );
}

function Row({ t, index }) {
  return (
    <li className="py-8 border-b border-white/10">
      <blockquote className="text-xl md:text-2xl leading-relaxed text-white/90">
        “{t.review}”
      </blockquote>
      <div className="mt-4 flex items-center gap-4">
        <div className="h-10 w-10 rounded-full bg-white/10 grid place-items-center text-sm font-bold text-white/90">
          {t.name.charAt(0)}
        </div>
        <div className="flex flex-col">
          <span className="font-semibold text-white">{t.name}</span>
          <span className="text-sm text-white/60">{t.location}</span>
        </div>
        <div className="ml-auto"><Stars rating={t.rating} /></div>
      </div>
    </li>
  );
}

export default function TestimonialsSplit() {
  return (
    <section
      aria-label="Player testimonials"
      className="min-h-screen bg-slate-950 text-white"
    >
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Sticky left intro */}
          <aside className="md:col-span-4">
            <div className="md:sticky md:top-20">
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                What players say
              </h2>
              <p className="mt-4 text-white/70">
                Real, concise quotes from verified players. No cards, no chrome—just the words that matter.
              </p>

              {/* Featured pull-quote */}
              <figure className="mt-10 border-l-2 border-amber-400 pl-6">
                <blockquote className="text-2xl md:text-3xl leading-snug text-white">
                  “{testimonials[0].review}”
                </blockquote>
                <figcaption className="mt-3 flex items-center gap-3 text-sm text-white/70">
                  <span className="font-semibold text-white">{testimonials[0].name}</span>
                  <span>•</span>
                  <span>{testimonials[0].location}</span>
                </figcaption>
              </figure>
            </div>
          </aside>

          {/* Right column stream of quotes */}
          <div className="md:col-span-8">
            <ul className="divide-y divide-white/10">
              {testimonials.slice(1).map((t, i) => (
                <Row key={t.name} t={t} index={i} />
              ))}
            </ul>

            {/* Responsible play strip (subtle, full width) */}
            <div className="mt-14 rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-amber-400 grid place-items-center text-black text-xl">⚠️</div>
                <div className="flex-1">
                  <h3 className="font-semibold">Play responsibly</h3>
                  <p className="text-white/70 text-sm mt-1">
                    <strong>18+ only.</strong> Set limits and never bet more than you can afford to lose. If you need support, reach out to responsible gaming resources.
                  </p>
                </div>
                <a href="#responsible-play" className="inline-flex items-center justify-center rounded-full border border-white/20 px-4 py-2 text-sm hover:bg-white/10">
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
