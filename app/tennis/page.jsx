'use client';
import React from 'react';

export default function TennisBettingPage() {
  const whyPoints = [
    "It’s strategic: player form, stamina, and mindset directly impact outcomes.",
    "You can analyze H2H records, surfaces, and live momentum before betting.",
    "Grand Slams and ATP/WTA events provide constant, high-quality markets.",
  ];

  const tournaments = ["Wimbledon", "US Open", "French Open", "Australian Open", "ATP Masters"];

  const markets = [
    { title: "Match Winner", desc: "Predict which player wins the match." },
    { title: "Set Betting", desc: "Bet on the exact set scoreline (e.g., 2-1, 3-0)." },
    { title: "Over/Under Games", desc: "Total number of games in the match." },
    { title: "Handicap Betting", desc: "Spread-style wagering to balance favorites and underdogs." },
    { title: "Live / In-Play", desc: "Bet while the match is underway to exploit momentum shifts." },
  ];

  const features = [
    { title: "Best Odds in the Market", desc: "Maximize value on every tennis bet." },
    { title: "Seamless Betting ID", desc: "Fast onboarding to start instantly." },
    { title: "Live Updates", desc: "Real-time scores and markets as points unfold." },
    { title: "Fast Payments", desc: "Instant deposits/withdrawals via UPI, Paytm, PhonePe, etc." },
    { title: "24/7 Support", desc: "Real humans, real help, any time." },
    { title: "Secure & Trusted", desc: "Strong systems protect your data and funds." },
  ];

  const tips = [
    "Analyze player form and injury news before wagering.",
    "Surface matters: clay, grass, and hard courts reward different styles.",
    "Check head-to-head records and matchup dynamics.",
    "Bankroll management: set a budget and stick to it.",
    "Use live betting to react to momentum swings, not to chase losses.",
  ];

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-yellow-300">
      {/* Hero */}
      <section className="relative border-b border-yellow-500/10">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-yellow-500/10 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-yellow-600/10 blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-6 py-16 relative">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-widest text-yellow-200/70">9xmbet Book</p>
            <h1 className="mt-2 text-4xl md:text-5xl font-extrabold leading-tight">
              Tennis Betting on 9xmbet Book
              <span className="block text-yellow-400">Your Winning Guide</span>
            </h1>
            <p className="mt-4 text-yellow-100/85">
              Tennis is fast, tactical, and ideal for sharp bettors. With 9xmbet Book, tennis betting
              is convenient, secure, and rewarding for both newcomers and seasoned punters.
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
                href="#why-tennis"
                className="rounded-lg border border-yellow-500/50 px-6 py-3 font-semibold text-yellow-300 hover:bg-yellow-500/10 transition-colors"
              >
                Why Tennis?
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Body grid: main + right CTA */}
      <section className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 px-6 py-12">
        {/* Main */}
        <main className="space-y-14">
          {/* Why Tennis */}
          <section id="why-tennis" className="rounded-xl border border-yellow-500/20 bg-neutral-950 p-6">
            <h2 className="text-2xl md:text-3xl font-bold text-yellow-400">Why Choose Tennis Betting?</h2>
            <p className="mt-3 text-yellow-100/85">
              Tennis is an individual sport where skill, stamina, and mentality directly influence
              outcomes. That makes it highly strategic for bettors who study form, surfaces, and matchups.
              Popular events for Indian users include:
            </p>
            <div className="mt-4 flex flex-wrap gap-2 text-sm">
              {tournaments.map((t) => (
                <span key={t} className="rounded-full border border-yellow-500/30 px-3 py-1 text-yellow-200/85">
                  {t}
                </span>
              ))}
            </div>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {whyPoints.map((p, i) => (
                <li key={i} className="flex items-start gap-3 rounded-lg bg-yellow-500/5 p-3 ring-1 ring-yellow-500/10">
                  <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-yellow-400" />
                  <span className="text-yellow-100/90">{p}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Markets */}
          <section id="markets" className="rounded-xl border border-yellow-500/20 bg-neutral-950 p-6">
            <header className="mb-4 flex items-center justify-between">
              <h2 className="text-2xl md:text-3xl font-bold text-yellow-400">Tennis Betting Markets at 9xmbet Book</h2>
              <span className="hidden md:block text-xs rounded-full border border-yellow-500/30 px-3 py-1 text-yellow-200/80">
                Pre-match • Live
              </span>
            </header>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {markets.map((m) => (
                <div key={m.title} className="rounded-xl border border-yellow-500/20 bg-black/50 p-5">
                  <h3 className="font-semibold text-yellow-300">{m.title}</h3>
                  <p className="mt-2 text-yellow-100/80">{m.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Why 9xmbet */}
          <section id="why-9xmbet" className="rounded-xl border border-yellow-500/20 bg-neutral-950 p-6">
            <h2 className="text-2xl md:text-3xl font-bold text-yellow-400">Why 9xmbet Book is Best for Tennis</h2>
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

          {/* Tips */}
          <section id="tips" className="rounded-xl border border-yellow-500/20 bg-neutral-950 p-6">
            <h2 className="text-2xl md:text-3xl font-bold text-yellow-400">Betting Tips for Tennis Fans</h2>
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
              Bet responsibly. Set limits. Don’t chase losses.
            </p>
          </section>

          {/* Responsible betting blurb */}
          <section id="responsible" className="rounded-xl border border-yellow-500/20 bg-neutral-950 p-6">
            <h2 className="text-2xl md:text-3xl font-bold text-yellow-400">Responsible Betting with 9xmbet</h2>
            <p className="mt-3 text-yellow-100/85">
              Betting should be entertaining, not stressful. Use limit tools, track your spend, and keep control of your game.
            </p>
          </section>

          {/* Final */}
          <section id="final" className="rounded-xl border border-yellow-500/20 bg-neutral-950 p-6">
            <h2 className="text-2xl md:text-3xl font-bold text-yellow-400">Start Your Tennis Betting Journey Today</h2>
            <p className="mt-3 text-yellow-100/85">
              Whether it’s a Grand Slam final or a live ATP match, tennis betting on 9xmbet Book delivers top-tier
              entertainment with great odds, secure transactions, and a smooth interface.
            </p>
          </section>
        </main>

        {/* Sticky CTA */}
        <aside className="hidden lg:block sticky top-20 self-start">
          <div className="rounded-2xl border border-yellow-500/30 bg-[linear-gradient(135deg,rgba(234,179,8,0.08),rgba(0,0,0,0.6))] p-6 shadow-[0_0_50px_rgba(234,179,8,0.08)]">
            <p className="text-xs uppercase tracking-widest text-yellow-300/80">Ready to play</p>
            <h3 className="mt-1 text-2xl font-extrabold">Create Your Betting ID</h3>
            <p className="mt-2 text-yellow-100/80">
              Instant onboarding. Live markets. Fast UPI payouts. Make every point count.
            </p>
            <a
              href="https://wa.link/hwb"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex w-full items-center justify-center rounded-lg bg-yellow-500 px-5 py-3 text-black font-semibold hover:bg-yellow-400 transition-colors"
            >
              Join on WhatsApp
            </a>
            <p className="mt-3 text-xs text-yellow-200/70">Please bet responsibly.</p>
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
