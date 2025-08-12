import React from 'react';
import Marquee from 'react-fast-marquee';

const GamingTopbar = () => {
  const promotions = [
    "🎰 Welcome Bonus: Get 100% match up to $500 on your first deposit!",
    "🏆 Weekend Special: Double XP points on all slot games",
    "💎 VIP Program: Exclusive rewards and cashback for premium members",
    "🎯 Daily Tournament: Win up to $10,000 in our daily poker championship",
    "🔥 Hot Streak Bonus: Get 50 free spins on selected games",
    "⚡ Flash Sale: 25% bonus on deposits made in the next 2 hours"
  ];

  return (
    <div className="w-full bg-gradient-to-r from-green-100 via-green-50 to-green-100 border-b border-green-200 shadow-sm">
      {/* Main Topbar */}
      <div className="bg-green-500 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <div className="bg-white text-green-600 rounded-lg p-2 font-bold text-xl">
              🎮
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight">9xmBet</h1>
              <p className="text-green-100 text-xs">Premium Gaming Experience</p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="hover:text-green-200 transition-colors font-medium">Sports</a>
            <a href="#" className="hover:text-green-200 transition-colors font-medium">Casino</a>
            <a href="#" className="hover:text-green-200 transition-colors font-medium">Live Games</a>
            <a href="#" className="hover:text-green-200 transition-colors font-medium">Poker</a>
            <a href="#" className="hover:text-green-200 transition-colors font-medium">Esports</a>
          </nav>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-2 bg-green-600 px-3 py-1 rounded-full">
              <span className="text-sm">Balance:</span>
              <span className="font-bold">$1,247.50</span>
            </div>
            <button className="bg-white text-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-green-50 transition-colors">
              Login
            </button>
            <button className="bg-green-400 text-green-900 px-4 py-2 rounded-lg font-semibold hover:bg-green-300 transition-colors">
             Register
            </button>
          </div>
        </div>
      </div>

      {/* Promotions Marquee */}
      <div className="bg-gradient-to-r from-green-200 to-green-100 py-2">
        <Marquee
          gradient={false}
          speed={30}
          pauseOnHover={true}
          className="text-green-800"
        >
          {promotions.map((promo, index) => (
            <span
              key={index}
              className="mx-8 font-medium text-sm flex items-center"
            >
              {promo}
            </span>
          ))}
        </Marquee>
      </div>

      {/* Quick Stats Bar */}
      <div className="bg-green-50 py-3 px-4 border-t border-green-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-center md:justify-between text-sm text-green-700 space-y-2 md:space-y-0">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span>12,847 Players Online</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-yellow-500">🏆</span>
                <span>$2.4M+ Won Today</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-red-500">🔴</span>
                <span>23 Live Games</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 text-xs">
              <span className="bg-green-200 px-3 py-1 rounded-full">🔒 SSL Secured</span>
              <span className="bg-green-200 px-3 py-1 rounded-full">✓ Licensed</span>
              <span className="bg-green-200 px-3 py-1 rounded-full">⚡ Instant Payouts</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamingTopbar;