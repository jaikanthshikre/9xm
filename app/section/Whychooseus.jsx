'use client'
import React, { useState, useEffect } from 'react';
import { Zap, Shield, Trophy, Crown, Star, Sparkles, TrendingUp, Gift, Users, CheckCircle } from 'lucide-react';

const WhyChooseUs = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 4,
      duration: 3 + Math.random() * 2,
    }));
    setParticles(newParticles);
  }, []);

  const features = [
    {
      icon: Zap,
      title: "Instant Payouts",
      subtitle: "Lightning Speed",
      description: "Withdraw your winnings in under 60 seconds. No delays, no excuses - just instant access to your cash.",
      badge: "< 1 Min",
      color: "from-amber-400 to-yellow-500",
      stats: "99.9% Success Rate"
    },
    {
      icon: Shield,
      title: "Fort Knox Security",
      subtitle: "Military Grade",
      description: "Bank-level encryption with biometric authentication. Your funds are safer than government gold reserves.",
      badge: "SSL 256-bit",
      color: "from-amber-400 to-orange-500",
      stats: "Zero Breaches"
    },
    {
      icon: Trophy,
      title: "Premium Odds",
      subtitle: "Industry Leading",
      description: "Get the best odds in the market with our advanced algorithms. Higher payouts mean bigger wins for you.",
      badge: "Best Odds",
      color: "from-yellow-500 to-amber-600",
      stats: "15% Higher Payouts"
    },
    {
      icon: Crown,
      title: "VIP Treatment",
      subtitle: "Royal Experience",
      description: "Exclusive bonuses, personal account managers, and priority support. Experience gambling like royalty.",
      badge: "Elite Status",
      color: "from-amber-500 to-yellow-600",
      stats: "24/7 VIP Support"
    },
    {
      icon: Star,
      title: "5-Star Games",
      subtitle: "Premium Collection",
      description: "Over 2000+ games from top providers. Slots, poker, blackjack, roulette - we've got your winning game.",
      badge: "2000+ Games",
      color: "from-yellow-400 to-orange-500",
      stats: "New Games Weekly"
    },
    {
      icon: TrendingUp,
      title: "Winning Edge",
      subtitle: "Smart Analytics",
      description: "AI-powered insights and statistics to help you make smarter bets. Knowledge is your secret weapon.",
      badge: "AI Powered",
      color: "from-amber-400 to-yellow-500",
      stats: "85% Win Rate Boost"
    }
  ];

  return (
    <section className="relative min-h-screen py-10 overflow-hidden bg-gradient-to-br from-black via-gray-950 to-black text-gray-100">
      {/* Ambient glow blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-amber-300/10 to-yellow-300/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-gradient-to-br from-amber-300/10 to-orange-300/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-gradient-to-br from-yellow-300/10 to-amber-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Floating Particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute w-2 h-2 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full opacity-60"
          style={{
            left: `₹{p.x}%`,
            top: `₹{p.y}%`,
            animation: `float ₹{p.duration}s ease-in-out infinite`,
            animationDelay: `₹{p.delay}s`,
          }}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 bg-white/[0.06] border border-amber-400/20 px-8 py-3 rounded-full mb-8 shadow-lg">
            <Sparkles className="w-6 h-6 text-amber-400" />
            <span className="text-amber-300 font-semibold tracking-wide">Why People Choose Us</span>
            <Sparkles className="w-6 h-6 text-amber-400" />
          </div>

          <h1 className="text-5xl lg:text-7xl font-black mb-6 bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-500 bg-clip-text text-transparent leading-tight">
            The Golden Standard
          </h1>
          <h2 className="text-2xl lg:text-4xl font-bold text-amber-200 mb-8">
            Where Legends Are Born
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-amber-300">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span className="font-semibold">2M+ Active Players</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-amber-400 rounded-full"></div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span className="font-semibold">Licensed & Regulated</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-amber-400 rounded-full"></div>
            <div className="flex items-center gap-2">
              <Gift className="w-5 h-5" />
              <span className="font-semibold">₹50M+ Paid Out</span>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className={`group relative rounded-3xl p-8 transition-all duration-500 cursor-pointer transform hover:-translate-y-2
                  bg-white/[0.04] border border-amber-400/20 hover:border-amber-400/40 hover:shadow-amber-500/10 hover:shadow-xl
                  ₹{activeCard === index ? 'ring-1 ring-amber-400/30 scale-105' : ''}`}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
              >
                {/* Gradient Border Overlay */}
                <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-0.5 bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-500">
                  <div className="w-full h-full rounded-3xl bg-black/80" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ₹{feature.color} rounded-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-black drop-shadow" />
                  </div>

                  {/* Badge */}
                  <div className="inline-block bg-white/[0.06] border border-amber-400/20 text-amber-300 px-4 py-1 rounded-full text-sm font-bold mb-4">
                    {feature.badge}
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-2xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-amber-200 font-semibold mb-4">{feature.subtitle}</p>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed mb-6">{feature.description}</p>

                  {/* Stats */}
                  <div className="flex items-center justify-between pt-4 border-t border-amber-400/20">
                    <span className="text-sm text-amber-300 font-semibold">{feature.stats}</span>
                    <div className="w-8 h-8 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                      <CheckCircle className="w-4 h-4 text-black" />
                    </div>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-br from-white/5 to-amber-400/5" />
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;
