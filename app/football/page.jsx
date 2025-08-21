export default function FootballPage() {
  return (
    <div className="min-h-screen bg-black text-yellow-200">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-yellow-900/30 to-black py-20 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-400 mb-6">
          Football Betting in India with 9xmbet
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-yellow-100/90">
          Football is loved worldwide, and its craze is growing rapidly in India.
          From the EPL and UEFA Champions League to the FIFA World Cup, Indian
          fans now enjoy not just watching but also betting on football.
          With <span className="text-yellow-400 font-semibold">9xmbet</span>,
          you get the most secure and exciting betting experience.
        </p>
      </section>

      {/* Why Choose Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-yellow-400 mb-8 text-center">
          Why Choose Football Betting on 9xmbet?
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            "Wide Coverage of Matches – EPL, La Liga, ISL, World Cup & more.",
            "Competitive Odds – High-value returns on your bets.",
            "Live Betting Options – Bet in real-time during matches.",
            "User-Friendly Interface – Smooth deposits & withdrawals.",
            "Safe & Secure Betting ID – Your data and funds are always safe."
          ].map((point, i) => (
            <div
              key={i}
              className="rounded-xl bg-black/60 border border-yellow-600/30 p-5 hover:bg-yellow-900/20 transition"
            >
              <p className="text-yellow-100">{point}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Types of Bets */}
      <section className="bg-yellow-900/20 py-16 px-6">
        <h2 className="text-3xl font-bold text-yellow-400 mb-10 text-center">
          Types of Football Bets You Can Place
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            "Match Winner – Predict which team will win.",
            "Over/Under Goals – Bet on total goals in the match.",
            "Both Teams to Score (BTTS) – Will both sides score?",
            "Correct Score – Predict the exact final score.",
            "First Goal Scorer – Guess who scores first.",
            "Live Betting – Bet during the game for extra thrill."
          ].map((bet, i) => (
            <div
              key={i}
              className="rounded-xl bg-black/70 border border-yellow-600/40 p-5 hover:scale-105 transition"
            >
              <p className="text-yellow-100">{bet}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Betting Tips */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-yellow-400 mb-8 text-center">
          Football Betting Tips for Indian Players
        </h2>
        <ul className="space-y-4 text-yellow-100 text-lg">
          <li>⚽ Follow Team Form – Check recent performances.</li>
          <li>📊 Study Head-to-Head Stats – History gives insights.</li>
          <li>🔥 Don’t Bet Only on Favorites – Upsets happen often.</li>
          <li>💰 Set a Budget – Bet responsibly, avoid chasing losses.</li>
          <li>🎯 Use Live Betting Wisely – Watch the flow of the match.</li>
        </ul>
      </section>

      {/* Why Indian Users Prefer */}
      <section className="bg-yellow-900/10 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-yellow-400 mb-6">
          Why Indian Users Prefer 9xmbet
        </h2>
        <p className="max-w-3xl mx-auto text-yellow-100/90 leading-relaxed">
          With instant payouts, 24/7 support, and access to football, cricket,
          tennis, and casino betting with just one ID,{" "}
          <span className="text-yellow-400 font-semibold">9xmbet</span> is the
          trusted choice of Indian bettors. Whether you are a beginner or
          experienced, our transparent system ensures a worry-free experience.
        </p>
      </section>

      {/* Final Words */}
      <section className="py-20 text-center px-6">
        <h2 className="text-3xl font-bold text-yellow-400 mb-6">Final Words</h2>
        <p className="max-w-3xl mx-auto text-yellow-100/90 text-lg">
          Football is a game of passion, and{" "}
          <span className="text-yellow-400 font-semibold">9xmbet</span> makes
          betting on it even more exciting. With top leagues, live betting,
          secure payments, and the best odds, we bring Indian users the ultimate
          football betting experience.
        </p>
        <button className="mt-8 px-8 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 transition">
          <a
                href="https://wa.link/hwb"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-yellow-500 px-6 py-3 text-black font-semibold hover:bg-yellow-400 transition-colors"
              >
                Get Betting ID
              </a>
        </button>
      </section>
    </div>
  );
}
