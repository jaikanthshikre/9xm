'use client';
import React from 'react';

export default function CasinoBettingPage() {
  const highlights = [
    "Wide game selection: Slots, Live Casino, Roulette, Blackjack, Teen Patti, Andar Bahar, Baccarat, Crash/Aviator, and more.",
    "Competitive odds & RTP where applicable, with clear limits and transparent rules.",
    "Live in-play tables and dynamic side bets for extra excitement.",
  ];

  const features = [
    { title: "Secure & Trusted", desc: "Robust systems protect your data and funds." },
    { title: "Instant Betting ID", desc: "Start playing within minutes." },
    { title: "Fast Payments", desc: "Quick deposits and withdrawals via UPI, Paytm, PhonePe, etc." },
    { title: "Live Dealers & Tables", desc: "Real-time action with professional croupiers." },
    { title: "Transparent Limits", desc: "Clear table limits, payouts, and rules." },
    { title: "24/7 Support", desc: "Help whenever you need it." },
  ];

  const games = [
    { title: "Slots", desc: "Classic, video, megaways; check RTP and volatility." },
    { title: "Roulette", desc: "European, French, American; inside/outside bets, neighbors." },
    { title: "Blackjack", desc: "Standard, multi-hand, infinite; basic-strategy friendly." },
    { title: "Baccarat", desc: "Player/Banker/Tie; side bets vary by table." },
    { title: "Teen Patti", desc: "Popular 3-card poker variant with side bets." },
    { title: "Andar Bahar", desc: "Fast-paced Indian favorite; simple odds, quick rounds." },
    { title: "Crash / Aviator", desc: "Cash out before the multiplier crashes." },
    { title: "Live Game Shows", desc: "Wheel and multiplier-based live formats." },
  ];

  const tips = [
    "Set a budget: decide your session bankroll and stick to it.",
    "Know the rules: each table has specific payouts and side-bet odds.",
    "Mind RTP & volatility on slots; pick what fits your risk tolerance.",
    "Use bonuses wisely: read wagering requirements before opting in.",
    "Avoid chasing losses: take breaks and pace your sessions.",
  ];

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-yellow-300">
      {/* Hero (no images, pure CSS accents) */}
      <section className="relative border-b border-yellow-500/10">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-yellow-500/10 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-yellow-600/10 blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-6 py-16 relative">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-widest text-yellow-200/70">9xmbet Book</p>
            <h1 className="mt-2 text-4xl md:text-5xl font-extrabold leading-tight">
              Casino Betting on 9xmbet
              <span className="block text-yellow-400">Your All-In Guide</span>
            </h1>
            <p className="mt-4 text-yellow-100/85">
              Experience fast, secure, and transparent casino play tailored for India.
              Explore live tables, slots, and game shows with instant onboarding and quick payouts.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://wa.link/hwb"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-yellow-500 px-6 py-3 text-black font-semibold hover:bg-yellow-400 transition-colors"
              >
                Create Betting ID
              </a>
              <a
                href="#why-casino"
                className="rounded-lg border border-yellow-500/50 px-6 py-3 font-semibold text-yellow-300 hover:bg-yellow-500/10 transition-colors"
              >
                Why 9xmbet?
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Body grid: main + right CTA */}
      <section className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 px-6 py-12">
        {/* Main */}
        <main className="space-y-14">
          {/* Highlights */}
          <section id="intro" className="rounded-xl border border-yellow-500/20 bg-neutral-950 p-6">
            <h2 className="text-2xl md:text-3xl font-bold text-yellow-400">Why Choose Casino Betting?</h2>
            <p className="mt-3 text-yellow-100/85">
              Casino play blends strategy, pace, and pure probability. Whether you prefer calculated
              table tactics or the quick-hit rhythm of slots, there’s a format for every style.
            </p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {highlights.map((p, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 rounded-lg bg-yellow-500/5 p-3 ring-1 ring-yellow-500/10"
                >
                  <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-yellow-400" />
                  <span className="text-yellow-100/90">{p}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Why 9xmbet */}
          <section id="why-casino" className="rounded-xl border border-yellow-500/20 bg-neutral-950 p-6">
            <h2 className="text-2xl md:text-3xl font-bold text-yellow-400">Why 9xmbet Stands Out</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="group rounded-xl border border-yellow-500/20 bg-gradient-to-br from-neutral-950 to-black p-5 transition-all hover:shadow-[0_0_30px_rgba(234,179,8,0.08)]"
                >
                  <h3 className="font-semibold text-yellow-300">{f.title}</h3>
                  <p className="mt-1 text-yellow-100/80">{f.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Games gallery (cards) */}
          <section id="games" className="rounded-xl border border-yellow-500/20 bg-neutral-950 p-6">
            <header className="mb-4 flex items-center justify-between">
              <h2 className="text-2xl md:text-3xl font-bold text-yellow-400">Popular Casino Games on 9xmbet</h2>
              <span className="hidden md:block text-xs rounded-full border border-yellow-500/30 px-3 py-1 text-yellow-200/80">
                Live • RNG • Game Shows
              </span>
            </header>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {games.map((g) => (
                <div key={g.title} className="rounded-xl border border-yellow-500/20 bg-black/50 p-5">
                  <h3 className="font-semibold text-yellow-300">{g.title}</h3>
                  <p className="mt-2 text-yellow-100/80">{g.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Tips */}
          <section id="tips" className="rounded-xl border border-yellow-500/20 bg-neutral-950 p-6">
            <h2 className="text-2xl md:text-3xl font-bold text-yellow-400">Smart Casino Tips</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {tips.map((t, i) => (
                <div key={i} className="flex items-start gap-3 rounded-lg bg-black/50 p-4 ring-1 ring-yellow-500/10">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="mt-1 h-5 w-5 text-yellow-400">
                    <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                  <span className="text-yellow-100/90">{t}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-yellow-200/70">
              Play responsibly. Take breaks. Don’t treat the table like an ATM.
            </p>
          </section>

          {/* Final */}
          <section id="final" className="rounded-xl border border-yellow-500/20 bg-neutral-950 p-6">
            <h2 className="text-2xl md:text-3xl font-bold text-yellow-400">Ready to Enter the Casino?</h2>
            <p className="mt-3 text-yellow-100/85">
              Join live tables, explore top slots, and try new formats with instant onboarding,
              fast payouts, and clear rules. Simple, secure, and built for Indian players.
            </p>
          </section>
        </main>

        {/* Sticky CTA */}
        <aside className="hidden lg:block sticky top-20 self-start">
          <div className="rounded-2xl border border-yellow-500/30 bg-[linear-gradient(135deg,rgba(234,179,8,0.08),rgba(0,0,0,0.6))] p-6 shadow-[0_0_50px_rgba(234,179,8,0.08)]">
            <p className="text-xs uppercase tracking-widest text-yellow-300/80">Start playing</p>
            <h3 className="mt-1 text-2xl font-extrabold">Create Your Betting ID</h3>
            <p className="mt-2 text-yellow-100/80">
              Instant onboarding. Live dealers. Fast UPI payouts. Choose your table.
            </p>
            <a
              href="https://wa.link/hwb"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex w-full items-center justify-center rounded-lg bg-yellow-500 px-5 py-3 text-black font-semibold hover:bg-yellow-400 transition-colors"
            >
              Join on WhatsApp
            </a>
            <p className="mt-3 text-xs text-yellow-200/70">
              Gambling involves risk. Set limits and play responsibly.
            </p>
          </div>
        </aside>
      </section>

      {/* Footer */}
      <footer className="border-t border-yellow-500/10">
        <div className="mx-auto max-w-7xl px-6 py-8 text-sm text-yellow-200/70">
          © {new Date().getFullYear()} 9xmbet Book. SSL secured • Licensed • Instant payouts
        </div>
      </footer>
    </div>
  );
}
