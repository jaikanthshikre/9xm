'use client'
import React, { useState, useEffect } from 'react';

const GamingHeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [jackpotAmount, setJackpotAmount] = useState(2847392);

  // Simulate live jackpot updates
  useEffect(() => {
    const interval = setInterval(() => {
      setJackpotAmount(prev => prev + Math.floor(Math.random() * 100) + 50);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Auto-slide for hero carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const heroSlides = [
    {
      title: "Win Big with GameBet Pro",
      subtitle: "Experience the thrill of premium gaming",
      description: "Join thousands of players winning millions every day. Get started with our exclusive welcome bonus!",
      cta: "Claim 100% Bonus",
      highlight: "Up to $500 Free"
    },
    {
      title: "Live Casino Action",
      subtitle: "Real dealers, real excitement",
      description: "Play with professional dealers in our HD live casino. Blackjack, Roulette, Baccarat and more!",
      cta: "Play Live Now",
      highlight: "24/7 Live Games"
    },
    {
      title: "Sports Betting Champions",
      subtitle: "Bet on your favorite teams",
      description: "Best odds, instant payouts, and live betting on thousands of sports events worldwide.",
      cta: "Place Your Bet",
      highlight: "Live Betting"
    }
  ];

  const quickGames = [
    { name: "Mega Slots", players: "1,247", icon: "🎰" },
    { name: "Blackjack Pro", players: "892", icon: "🃏" },
    { name: "Roulette Royal", players: "634", icon: "🎯" },
    { name: "Poker Championship", players: "445", icon: "♠️" }
  ];

  const formatNumber = (num) => {
    return new Intl.NumberFormat().format(num);
  };

  return (
    <div className="relative bg-gradient-to-br from-green-50 via-green-100 to-green-200 min-h-screen overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      
      <div className="relative max-w-7xl mx-auto px-4 py-12">
        {/* Live Jackpot Banner */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-yellow-500 text-yellow-900 px-6 py-3 rounded-full shadow-lg ">
            <span className="text-2xl mr-2">💰</span>
            <span className="font-bold text-lg">MEGA JACKPOT: ${formatNumber(jackpotAmount)}</span>
            <span className="ml-2 text-sm bg-yellow-600 text-yellow-100 px-2 py-1 rounded-full animate-pulse">LIVE</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Hero Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">⭐</span>
                  ))}
                </div>
                <span className="text-green-700 font-semibold">#1 Rated Gaming Platform</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-green-800 leading-tight">
                {heroSlides[currentSlide].title}
                <span className="block text-3xl lg:text-4xl text-green-600 mt-2">
                  {heroSlides[currentSlide].subtitle}
                </span>
              </h1>

              <p className="text-xl text-green-700 leading-relaxed max-w-lg">
                {heroSlides[currentSlide].description}
              </p>
               


<div className="md:hidden flex justify-center mt-12 space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                currentSlide === index ? 'bg-green-500 w-8' : 'bg-green-300'
              }`}
            />
          ))}
        </div>


              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-green-600 hover:to-green-700 transform hover:scale-105 transition-all duration-200 shadow-lg">
                  {heroSlides[currentSlide].cta}
                </button>
                <button className="border-2 border-green-500 text-green-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-500 hover:text-white transition-all duration-200">
                  Watch Demo
                </button>
              </div>

              <div className="bg-green-500 text-white px-4 py-2 rounded-lg inline-block">
                <span className="font-bold">🎁 {heroSlides[currentSlide].highlight}</span>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-2 pt-6 border-t border-green-300">
              <div className="flex items-center space-x-2">
                <span className="text-green-600">🔒</span>
                <span className="text-sm text-green-700">256-bit SSL Encryption</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-600">✅</span>
                <span className="text-sm text-green-700">Licensed & Regulated</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-600">⚡</span>
                <span className="text-sm text-green-700">Instant Withdrawals</span>
              </div>
              <div className="md:hidden flex items-center space-x-2">
                <span className="text-green-600">💰</span>
                <span className="text-sm text-green-700">Bonus Upto 10%</span>
              </div>
            </div>
          </div>

          {/* Right Side - Games & Stats */}
          <div className="space-y-8">
            {/* Popular Games */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-green-200">
              <h3 className="text-2xl font-bold text-green-800 mb-4 flex items-center">
                <span className="mr-2">🔥</span>
                Hot Games Right Now
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {quickGames.map((game, index) => (
                  <div key={index} className="bg-gradient-to-br from-green-400 to-green-500 text-white p-4 rounded-xl hover:from-green-500 hover:to-green-600 transition-all cursor-pointer transform hover:scale-105">
                    <div className="text-2xl mb-2">{game.icon}</div>
                    <div className="font-bold text-sm">{game.name}</div>
                    <div className="text-green-100 text-xs">{game.players} playing</div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors">
                View All Games
              </button>
            </div>

            {/* Live Stats */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-green-200">
              <h3 className="text-xl font-bold text-green-800 mb-4">Live Statistics</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-green-700">Players Online</span>
                  <span className="font-bold text-green-800 text-lg">12,847</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-green-700">Games Won Today</span>
                  <span className="font-bold text-green-800 text-lg">8,392</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-green-700">Total Payouts</span>
                  <span className="font-bold text-green-800 text-lg">$2.4M+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-green-700">Avg. Win Rate</span>
                  <span className="font-bold text-green-800 text-lg">94.2%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="hidden md:flex justify-center mt-12 space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                currentSlide === index ? 'bg-green-500 w-8' : 'bg-green-300'
              }`}
            />
          ))}
        </div>
      </div>

      
    </div>
  );
};

export default GamingHeroSection;