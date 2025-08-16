import React from 'react';
import Marquee from 'react-fast-marquee';

const GamingTopbar = () => {
  const promotions = [
    "🎰 Welcome Bonus: Get upto 10% Bonus on first deposit!",
    "🏆 Weekend Special: Double XP points on all slot games",
    "💎 VIP Program: Exclusive rewards and cashback for premium members",
    "🎯 Daily Tournament: Win up to ₹10,000 in our daily poker championship",
  ];

  return (
    <div className="w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-b border-gray-700 shadow-md">
      {/* Main Topbar */}
      <div className="bg-gray-950 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <div>
              <img src="/images/logo.jpeg" alt="Logo" className="h-14 w-auto" />
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="hover:text-amber-400 transition-colors font-medium">Sports</a>
            <a href="#" className="hover:text-amber-400 transition-colors font-medium">Casino</a>
            <a href="#" className="hover:text-amber-400 transition-colors font-medium">Live Games</a>
            <a href="#" className="hover:text-amber-400 transition-colors font-medium">Poker</a>
            <a href="#" className="hover:text-amber-400 transition-colors font-medium">Esports</a>
          </nav>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-2 bg-gray-800 px-3 py-1 rounded-full">
              <span className="text-sm text-gray-300">Bonus: upto</span>
              <span className="font-bold text-amber-400">₹1,0000.00</span>
            </div>
          <a href='https://wa.link/hwb' target='blank'> <button  className="bg-amber-500 text-black px-4 py-2 rounded-lg font-semibold hover:bg-amber-400 transition-colors">
              Login
            </button>
            <a href='https://wa.link/hwb' target='blank'></a>   <button className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-500 transition-colors">
              Register
            </button></a>
          </div>
        </div>
      </div>

      {/* Promotions Marquee */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-700 py-2">
        <Marquee
          gradient={false}
          speed={30}
          pauseOnHover={true}
          className="text-amber-400"
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
      <div className="bg-gray-900 py-3 px-4 border-t border-gray-700">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-center md:justify-between text-sm text-gray-300 space-y-2 md:space-y-0">
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse "></span>
                <span>12,847 Players Online</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-amber-400">🏆</span>
                <span>₹2.4M+ Won Today</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-red-500">🔴</span>
                <span>23 Live Games</span>
              </div>
            </div>

            <div className="flex items-center text-center md:text-left space-x-4 text-xs">
              <span className="bg-gray-800 px-3 py-1 rounded-full">🔒 SSL Secured</span>
              <span className="bg-gray-800 px-3 py-1 rounded-full">✓ Licensed</span>
              <span className="bg-gray-800 px-3 py-1 rounded-full">⚡ Instant Payouts</span>
            </div>
          </div>
        </div>
      </div>

      {/* Auto Deposit and Withdraw Section */}
    
    </div>
  );
};

export default GamingTopbar;
