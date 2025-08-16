'use client'
import { ArrowDownCircle, ArrowUpCircle, Clock, Shield, Zap } from 'lucide-react';

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
      highlight: "Up to ₹500 Free"
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

  const formatNumber = (num) => new Intl.NumberFormat().format(num);

  return (
    <div className="relative bg-gradient-to-br from-black via-gray-950 to-black min-h-screen overflow-hidden text-gray-100">
      {/* Background Pattern */}

      <div>
        <img src="/images/banner.jpg" alt="" />
      </div>



      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-4 px-4 border-t border-gray-700 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-32 h-32 bg-green-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-blue-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">

            {/* Left side - Brand info with enhanced styling */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                </div>

                <div className="text-left">
                  <div className="text-white text-lg font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text ">
                    9xmbet.com
                  </div>
                  <div className="text-gray-400 text-sm flex items-center space-x-2">
                    <Shield className="w-4 h-4" />
                    <span>Secure & Instant Transactions</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Enhanced action buttons */}
            <div className="flex items-center space-x-6">

              {/* Features badges */}
              <div className="hidden md:flex items-center space-x-4 text-xs">
                <div className="flex items-center space-x-1 bg-gray-700/50 rounded-full px-3 py-1 backdrop-blur-sm">
                  <Clock className="w-3 h-3 text-green-400" />
                  <span className="text-gray-300">24/7 Available</span>
                </div>
                <div className="flex items-center space-x-1 bg-gray-700/50 rounded-full px-3 py-1 backdrop-blur-sm">
                  <Zap className="w-3 h-3 text-yellow-400" />
                  <span className="text-gray-300">Instant Processing</span>
                </div>
              </div>

              {/* Action buttons with enhanced design */}
              <div className="flex items-center space-x-3 text-xs md:text-sm">
                <button
                  onClick={() => window.open("https://www.9xmbet.com/", "_blank")}
                  className="group relative bg-gradient-to-r from-green-600 to-green-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-green-500 hover:to-green-400 transition-all duration-300 shadow-lg hover:shadow-green-500/25 hover:scale-105 transform"
                >
                  <div className="flex items-center space-x-2">
                    <ArrowDownCircle className="w-5 h-5 group-hover:animate-bounce" />
                    <span>Auto Deposit</span>
                  </div>
                  <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>

                <button
                  onClick={() => window.open("https://www.9xmbet.com/", "_blank")}
                  className="group relative bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-500 hover:to-blue-400 transition-all duration-300 shadow-lg hover:shadow-green-500/25 hover:scale-105 transform"
                >
                  <div className="flex items-center space-x-2">
                    <ArrowDownCircle className="w-5 h-5 group-hover:animate-bounce" />
                    <span>Auto Deposit</span>
                  </div>
                  <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>
          </div>

          {/* Bottom notification bar */}
          <div className="mt-3 pt-3 border-t border-gray-700/50">
            <div className="flex items-center justify-center lg:justify-between">
              <div className="hidden lg:flex items-center space-x-6 text-xs text-gray-400">
                <span className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>System Online</span>
                </span>
                <span>Last processed: 2 seconds ago</span>
                <span>Next maintenance: 00:00 UTC</span>
              </div>

              <div className="text-center lg:text-right">
                <div className="text-xs text-gray-400 mb-1">Processing Speed</div>
                <div className="flex items-center space-x-2">
                  <div className="w-16 h-1.5 bg-gray-700 rounded-full overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-r from-green-500 to-blue-500 rounded-full animate-pulse"></div>
                  </div>
                  <span className="text-xs font-semibold text-white">Ultra Fast</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>





      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.08'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-12">
        {/* Live Jackpot Banner */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-gradient-to-r from-amber-500 to-yellow-500 text-black px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-2">💰</span>
            <span className="font-extrabold text-lg tracking-wide">
              MEGA JACKPOT: ₹{formatNumber(jackpotAmount)}
            </span>
            <span className="ml-3 text-xs bg-red-600 text-white px-2 py-1 rounded-full animate-pulse">
              LIVE
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Hero Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-amber-400 text-xl">⭐</span>
                  ))}
                </div>
                <span className="text-amber-300 font-semibold">
                  #1 Rated Gaming Platform
                </span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-extrabold text-white leading-tight">
                {heroSlides[currentSlide].title}
                <span className="block text-3xl lg:text-4xl text-amber-400 mt-2">
                  {heroSlides[currentSlide].subtitle}
                </span>
              </h1>

              <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
                {heroSlides[currentSlide].description}
              </p>

              {/* Mobile slide dots */}
              <div className="md:hidden flex justify-center mt-12 space-x-3">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all duration-200 ₹{
                      currentSlide === index
                        ? 'bg-amber-400 w-8'
                        : 'bg-amber-200/50 w-3'
                    }`}
                  />
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={()=> window.open('https:www.9xmbet.com/')} className="bg-gradient-to-r from-amber-500 to-yellow-500 text-black px-8 py-4 rounded-xl font-bold text-lg hover:brightness-110 transform hover:scale-105 transition-all duration-200 shadow-amber-500/30 shadow-lg">
                  {heroSlides[currentSlide].cta}
                </button>
                <button className="border-2 border-amber-400 text-amber-300 px-8 py-4 rounded-xl font-bold text-lg hover:bg-amber-400 hover:text-black transition-all duration-200">
                  Watch Demo
                </button>
              </div>

              <div className="bg-amber-500 text-black px-4 py-2 rounded-lg inline-block">
                <span className="font-extrabold">
                  🎁 {heroSlides[currentSlide].highlight}
                </span>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-amber-400/20">
              <div className="flex items-center space-x-2">
                <span className="text-amber-400">🔒</span>
                <span className="text-sm text-gray-300">256-bit SSL Encryption</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-amber-400">✅</span>
                <span className="text-sm text-gray-300">Licensed & Regulated</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-amber-400">⚡</span>
                <span className="text-sm text-gray-300">Instant Withdrawals</span>
              </div>
              <div className="md:hidden flex items-center space-x-2">
                <span className="text-amber-400">💰</span>
                <span className="text-sm text-gray-300">Bonus Upto 10%</span>
              </div>
            </div>
          </div>

          {/* Right Side - Games & Stats */}
          <div className="space-y-8">
            {/* Popular Games */}
            <div className="bg-white/[0.04] backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-amber-400/20">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                <span className="mr-2">🔥</span>
                Hot Games Right Now
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {quickGames.map((game, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-amber-500 to-yellow-500 text-black p-4 rounded-xl hover:brightness-110 transition-all cursor-pointer transform hover:scale-105"
                  >
                    <div className="text-2xl mb-2">{game.icon}</div>
                    <div className="font-extrabold text-sm">{game.name}</div>
                    <div className="text-black/80 text-xs">{game.players} playing</div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 bg-amber-500 text-black py-3 rounded-xl font-semibold hover:brightness-110 transition-colors">
                View All Games
              </button>
            </div>

            {/* Live Stats */}
            <div className="bg-white/[0.04] backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-amber-400/20">
              <h3 className="text-xl font-bold text-white mb-4">Live Statistics</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Players Online</span>
                  <span className="font-bold text-amber-300 text-lg">12,847</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Games Won Today</span>
                  <span className="font-bold text-amber-300 text-lg">8,392</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Total Payouts</span>
                  <span className="font-bold text-amber-300 text-lg">₹2.4M+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Avg. Win Rate</span>
                  <span className="font-bold text-amber-300 text-lg">94.2%</span>
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
              className={`h-2 rounded-full transition-all duration-200 ₹{
                currentSlide === index ? 'bg-amber-400 w-8' : 'bg-amber-200/50 w-3'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GamingHeroSection;
