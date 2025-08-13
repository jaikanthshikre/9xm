"use client";
import React from "react";

const cards = [
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
          className={`text-lg transition-all duration-200 ${
            i < safe
              ? "text-yellow-400 drop-shadow-sm animate-pulse"
              : "text-yellow-700/40"
          }`}
        >
          ★
        </span>
      ))}
      <span className="sr-only">{safe} out of 5 stars</span>
    </div>
  );
}

export default function Testimonial() {
  return (
    <section
      aria-label="Player testimonials"
      className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black py-16 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-yellow-300/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-200 bg-clip-text text-transparent mb-4">
            What Players Say
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-200 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Real experiences from our community of responsible players
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {cards.map((c, i) => (
            <div
              key={`${c.name}-${i}`}
              className="group relative transform transition-all duration-500 hover:scale-105 hover:-translate-y-2"
            >
              {/* Card glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-200 rounded-2xl blur opacity-25 group-hover:opacity-60 transition duration-500"></div>
              
              {/* Main card */}
              <div className="relative bg-gray-900 p-8 rounded-2xl shadow-xl border border-yellow-700/30 backdrop-blur-sm">
                {/* Top section with name and rating */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    {/* Avatar placeholder */}
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-300 rounded-full flex items-center justify-center text-black font-bold text-lg mb-3 shadow-lg">
                      {c.name.charAt(0)}
                    </div>
                    <h3 className="font-bold text-lg text-yellow-100 mb-1">
                      {c.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                      <p className="text-sm text-yellow-300/80 font-medium">
                        {c.location}
                      </p>
                    </div>
                  </div>
                  <div className="bg-yellow-900/20 p-3 rounded-xl">
                    <Stars rating={c.rating} />
                  </div>
                </div>

                {/* Review text */}
                <div className="relative">
                  <div className="absolute -top-2 -left-2 text-4xl text-yellow-800 font-serif">"</div>
                  <p className="text-yellow-100 leading-relaxed pl-6 pr-2 italic">
                    {c.review}
                  </p>
                  <div className="absolute -bottom-4 -right-2 text-4xl text-yellow-800 font-serif rotate-180">"</div>
                </div>

                {/* Bottom accent */}
                <div className="mt-6 pt-4 border-t border-yellow-700/40">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-yellow-400 font-semibold uppercase tracking-wide">
                      Verified Player
                    </span>
                    <div className="flex gap-1">
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse"
                          style={{ animationDelay: `${i * 0.2}s` }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Responsible play notice */}
        <div className="mt-16 relative">
          <div className="bg-gradient-to-r from-yellow-900/30 via-yellow-800/30 to-yellow-900/30 rounded-2xl p-8 border-2 border-yellow-700 shadow-lg backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-300 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                <span className="text-black text-2xl">⚠️</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-yellow-200 mb-2">
                  Play Responsibly
                </h3>
                <p className="text-yellow-300 leading-relaxed">
                  <strong>18+ only.</strong> Please play responsibly. Set limits and never bet more than you can afford to lose. 
                  If you need support, reach out to responsible gaming resources.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
