
'use client';
import React from 'react';

export default function CricketBettingNoImage() {
  const toc = [
    { href: '#intro', label: 'Introduction' },
    { href: '#why-cricket', label: 'Why Cricket Betting' },
    { href: '#why-9xmbet', label: 'Why 9xmbet Book' },
    { href: '#markets', label: 'Bet Types' },
    { href: '#tips', label: 'Betting Tips' },
    { href: '#cta', label: 'Get Betting ID' },
    { href: '#final', label: 'Final Words' },
  ];

  const whyPoints = [
    'It connects directly with their favorite sport.',
    'They can use their cricket knowledge and strategies to win.',
    'The excitement of every over becomes more rewarding.',
  ];

  const features = [
    { title: 'Secure & Trusted Platform', desc: 'Strong security systems protect your data and money.' },
    { title: 'Instant Betting ID', desc: 'Start betting quickly within minutes.' },
    { title: 'Variety of Markets', desc: 'IPL, Tests, ODIs, T20s and domestic leagues.' },
    { title: 'Live Cricket Betting', desc: 'Place bets while the match is live.' },
    { title: 'Easy Deposits & Withdrawals', desc: 'Multiple payment options for smooth transactions.' },
    { title: '24/7 Customer Support', desc: 'Get help anytime you need it.' },
  ];

  const markets = [
    { title: 'Match Winner', desc: 'Predict which team will win.' },
    { title: 'Toss Winner', desc: 'Bet on who wins the toss.' },
    { title: 'Top Batsman/Bowler', desc: 'Choose the highest run-scorer or wicket-taker.' },
    { title: 'Over/Under Runs', desc: 'Predict runs scored in a particular over.' },
    { title: 'Live In-Play Bets', desc: 'Place bets during the match for instant thrills.' },
  ];

  const tips = [
    'Do Research – team form, pitch report, and player stats.',
    'Start Small – learn patterns before scaling up.',
    'Use Your Knowledge – analyze, don’t bet randomly.',
    'Stay Responsible – only bet what you can afford to lose.',
  ];

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-yellow-300">
      {/* Hero (pure CSS, no images) */}
      <section className="relative border-b border-yellow-500/10">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-yellow-500/10 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-yellow-600/10 blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-8 px-6 py-14 relative">
          <div className="flex flex-col justify-center">
            <p className="text-xs uppercase tracking-widest text-yellow-200/70">9xmbet Book</p>
            <h1 className="mt-2 text-4xl md:text-5xl font-extrabold leading-tight">
              Cricket Betting in India
              <span className="block text-yellow-400">with 9xmbet Book</span>
            </h1>
            <p className="mt-4 text-yellow-100/80">
              Cricket is not just a sport in India, it is an emotion. From gully cricket to the IPL and
              World Cup, the excitement never stops. If you want to turn your knowledge into real winnings,
              9xmbet Book is a platform you can trust.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://wa.link/hwb"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-yellow-500 px-6 py-3 text-black font-semibold hover:bg-yellow-400 transition-colors"
              >
                Get Betting ID
              </a>
              <a
                href="#why-9xmbet"
                className="rounded-lg border border-yellow-500/50 px-6 py-3 font-semibold text-yellow-300 hover:bg-yellow-500/10 transition-colors"
              >
                Why 9xmbet
              </a>
            </div>
          </div>

          {/* Visual panel made from borders and stats (no images) */}
          <div className="relative">
            <div className="rounded-2xl border border-yellow-500/20 bg-gradient-to-br from-neutral-900 to-black p-6 shadow-[0_0_40px_rgba(234,179,8,0.08)]">
              <div className="grid gap-4 sm:grid-cols-2">
                <Stat label="Players Online" value="12,847" />
                <Stat label="Won Today" value="₹2.4M+" />
                <Stat label="Live Games" value="23" />
                <Stat label="Markets" value="100+" />
              </div>
              <div className="mt-6 rounded-xl bg-black/40 p-4 ring-1 ring-yellow-500/10">
                <div className="flex items-center gap-3 text-sm text-yellow-200/85">
                  <Dot /> Welcome Bonus: Get up to 10% on first deposit
                  <Dot /> VIP Program: Rewards & cashback
                  <Dot /> Daily Tournament: Win up to ₹10,000
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Body with sidebar TOC and sticky CTA */}
      <section className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-[220px_1fr_300px] gap-8 px-6 py-12">
        {/* Sidebar TOC */}
        <aside className="hidden lg:block sticky top-20 self-start">
          <nav className="space-y-2">
            <p className="text-xs uppercase tracking-widest text-yellow-200/70 mb-3">On this page</p>
            {toc.map(item => (
              <a
                key={item.href}
                href={item.href}
                className="block rounded-md px-3 py-2 text-sm text-yellow-200/80 hover:text-yellow-300 hover:bg-yellow-500/10 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </aside>

        {/* Main content */}
        <main className="space-y-14">
          {/* Intro */}
          <section id="intro" className="rounded-xl border border-yellow-500/20 bg-neutral-950 p-6">
            <h2 className="text-2xl md:text-3xl font-bold text-yellow-400">Introduction</h2>
            <p className="mt-3 text-yellow-100/85">
              Along with India’s passion for cricket, the trend of online betting has grown rapidly.
              Whether it’s predicting winners, top performers, or the number of sixes, cricket betting
              adds an extra layer of fun to every match.
            </p>
          </section>

          {/* Why Cricket Betting */}
          <section id="why-cricket" className="rounded-xl border border-yellow-500/20 bg-neutral-950 p-6">
            <header className="flex items-center justify-between">
              <h2 className="text-2xl md:text-3xl font-bold text-yellow-400">Why Indian Users Choose Cricket Betting</h2>
              <span className="hidden md:inline-block text-xs rounded-full border border-yellow-500/30 px-3 py-1 text-yellow-200/80">
                IPL • Asia Cup • World Cup • Bilateral
              </span>
            </header>
            <p className="mt-3 text-yellow-100/85">
              Cricket is India’s most-watched sport. Betting makes every over more thrilling:
            </p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {whyPoints.map((p, i) => (
                <li key={i} className="flex items-start gap-3 rounded-lg bg-yellow-500/5 p-3 ring-1 ring-yellow-500/10">
                  <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-yellow-400" />
                  <span className="text-yellow-100/90">{p}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Why 9xmbet */}
          <section id="why-9xmbet" className="rounded-xl border border-yellow-500/20 bg-neutral-950 p-6">
            <h2 className="text-2xl md:text-3xl font-bold text-yellow-400">Why Bet on Cricket with 9xmbet Book</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {features.map(f => (
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

          {/* Markets */}
          <section id="markets" className="rounded-xl border border-yellow-500/20 bg-neutral-950 p-6">
            <header className="mb-4 flex items-center justify-between">
              <h2 className="text-2xl md:text-3xl font-bold text-yellow-400">Types of Cricket Bets on 9xmbet Book</h2>
              <span className="hidden md:block text-xs rounded-full border border-yellow-500/30 px-3 py-1 text-yellow-200/80">
                Live • Pre-match
              </span>
            </header>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {markets.map(m => (
                <div key={m.title} className="rounded-xl border border-yellow-500/20 bg-black/50 p-5">
                  <h3 className="font-semibold text-yellow-300">{m.title}</h3>
                  <p className="mt-2 text-yellow-100/80">{m.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Tips */}
          <section id="tips" className="rounded-xl border border-yellow-500/20 bg-neutral-950 p-6">
            <h2 className="text-2xl md:text-3xl font-bold text-yellow-400">Cricket Betting Tips for Indian Users</h2>
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
          </section>

          {/* CTA */}
          <section id="cta" className="rounded-xl border border-yellow-500/20 bg-neutral-950 p-6">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="md:col-span-2">
                <h2 className="text-2xl md:text-3xl font-bold text-yellow-400">Get Your Cricket Betting ID Today!</h2>
                <p className="mt-3 text-yellow-100/85">
                  With trusted service, instant betting ID, and exciting markets, 9xmbet Book gives you the
                  perfect platform to enjoy cricket like never before. Join thousands of Indian users already playing.
                </p>
              </div>
              <div className="md:col-span-1">
                <a
                  href="https://wa.link/hwb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex w-full items-center justify-center rounded-lg bg-yellow-500 px-5 py-3 text-black font-semibold hover:bg-yellow-400 transition-colors"
                >
                  Join on WhatsApp
                </a>
                <p className="mt-3 text-xs text-yellow-200/70">
                  Please bet responsibly. This is a game of skill and risk.
                </p>
              </div>
            </div>
          </section>

          {/* Final Words */}
          <section id="final" className="rounded-xl border border-yellow-500/20 bg-neutral-950 p-6">
            <h2 className="text-2xl md:text-3xl font-bold text-yellow-400">Final Words</h2>
            <p className="mt-3 text-yellow-100/85">
              Cricket betting is more than just luck; it’s about skill, knowledge, and passion for the game.
              At 9xmbet Book, we combine your love for cricket with a secure betting environment.
              So, don’t just watch cricket — make every ball count with 9xmbet Book.
            </p>
          </section>
        </main>

        {/* Sticky CTA (right rail) */}
        <aside className="hidden lg:block sticky top-20 self-start">
          <div className="rounded-2xl border border-yellow-500/30 bg-[linear-gradient(135deg,rgba(234,179,8,0.08),rgba(0,0,0,0.6))] p-6 shadow-[0_0_50px_rgba(234,179,8,0.08)]">
            <p className="text-xs uppercase tracking-widest text-yellow-300/80">Ready to play</p>
            <h3 className="mt-1 text-2xl font-extrabold">Get your Betting ID</h3>
            <p className="mt-2 text-yellow-100/80">
              Instant onboarding. Live markets. Secure payments. Make every ball count.
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
              Please bet responsibly. This isn’t a shortcut to money.
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

/* Small components (no images, promise) */
function Stat({ label, value }) {
  return (
    <div className="rounded-xl bg-black/50 p-4 ring-1 ring-yellow-500/10">
      <div className="text-xs uppercase tracking-wide text-yellow-200/70">{label}</div>
      <div className="mt-1 text-2xl font-extrabold text-yellow-300">{value}</div>
    </div>
  );
}

function Dot() {
  return <span className="inline-block h-1.5 w-1.5 rounded-full bg-yellow-400" />;
}


