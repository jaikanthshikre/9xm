'use client'
import React, { useState } from 'react';

const TopGames = () => {
  const [hoveredGame, setHoveredGame] = useState(null);

  const games = [
    {
      id: 1,
      name: "Aviator",
      image: "/images/aviator.png",
      category: "Crash Game",
      players: "2.4k",
      hot: true,
      multiplier: "x1.5"
    },
    {
      id: 2,
      name: "Casino Royale",
      image: "/images/casino.png",
      category: "Live Casino",
      players: "1.8k",
      hot: false,
      multiplier: "x2.1"
    },
    {
      id: 3,
      name: "Mega Lottery",
      image: "/images/lottery.png",
      category: "Lottery",
      players: "956",
      hot: true,
      multiplier: "x10.5"
    },
    {
      id: 4,
      name: "Lucky 7",
      image: "/images/lucky7.png",
      category: "Slots",
      players: "3.2k",
      hot: true,
      multiplier: "x3.7"
    },
    {
      id: 5,
      name: "Cricket Betting",
      image: "/images/cricket.png",
      category: "Sports",
      players: "1.2k",
      hot: false,
      multiplier: "x1.9"
    },
    {
      id: 6,
      name: "Royal Roulette",
      image: "/images/roulete.png",
      category: "Table Game",
      players: "867",
      hot: false,
      multiplier: "x2.8"
    },
    {
      id: 7,
      name: "Teen Patti Gold",
      image: "/images/teenpatti.png",
      category: "Card Game",
      players: "2.1k",
      hot: true,
      multiplier: "x4.2"
    },
    {
      id: 8,
      name: "Rummy Master",
      image: "/images/rummy.png",
      category: "Card Game",
      players: "1.5k",
      hot: false,
      multiplier: "x2.3"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-green-50 to-green-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <span className="mr-2">🔥</span>
            TRENDING NOW
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
            Top Gaming Collection
          </h1>
          <p className="text-green-600 text-lg max-w-2xl mx-auto">
            Discover the most popular games with millions of players worldwide. 
            Join the excitement and start winning today!
          </p>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {games.map((game) => (
            <div
              key={game.id}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden border border-green-200"
              onMouseEnter={() => setHoveredGame(game.id)}
              onMouseLeave={() => setHoveredGame(null)}
            >
              {/* Hot Badge */}
              {game.hot && (
                <div className="absolute top-3 left-3 z-10 bg-gradient-to-r from-red-500 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center animate-pulse">
                  <span className="mr-1">🔥</span>
                  HOT
                </div>
              )}

              {/* Multiplier Badge */}
              <div className="absolute top-3 right-3 z-10 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                {game.multiplier}
              </div>

              {/* Game Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={game.image} 
                  alt={game.name}
                  className="w-full h-32 md:h-42 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                
                {/* Overlay on Hover */}
                <div className={`absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity duration-300 ${
                  hoveredGame === game.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <button className="bg-green-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-600 transition-colors transform translate-y-2 group-hover:translate-y-0">
                    Play Now
                  </button>
                </div>
              </div>

              {/* Game Info */}
              <div className="p-4">
                <h3 className="font-bold text-green-800 text-lg mb-1 truncate">
                  {game.name}
                </h3>
                <p className="text-green-600 text-sm mb-3">
                  {game.category}
                </p>
                
                {/* Stats */}
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center text-green-700">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                    <span className="font-medium">{game.players} playing</span>
                  </div>
                  <div className="flex items-center text-yellow-600">
                    <span className="mr-1">⭐</span>
                    <span className="font-semibold">4.8</span>
                  </div>
                </div>
              </div>

              {/* Bottom Gradient */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 via-green-500 to-green-600"></div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-green-600 hover:to-green-700 transition-all duration-200 shadow-lg transform hover:scale-105">
            View All Games
            <span className="ml-2">→</span>
          </button>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-green-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-green-800">500+</div>
              <div className="text-green-600 text-sm">Total Games</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-green-800">2.4M+</div>
              <div className="text-green-600 text-sm">Active Players</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-green-800">₹50L+</div>
              <div className="text-green-600 text-sm">Daily Winnings</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-green-800">99.2%</div>
              <div className="text-green-600 text-sm">Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopGames;