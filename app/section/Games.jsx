'use client'
import { useState } from 'react'
import Image from 'next/image'
const Games = () => {
      const [hoveredIndex, setHoveredIndex] = useState(null);
const games = [
    { name: "Mega Fortune", type: "Slot", image: "/images/one.png" },
    { name: "Blackjack Pro", type: "Table", image: "/images/two.png" },
    { name: "Roulette Gold", type: "Table", image: "/images/three.png" },
    { name: "Poker Palace", type: "Card", image: "/images/four.png" },
    { name: "Lightning Slots", type: "Slot", image: "/images/five.png" },
    { name: "Baccarat Elite", type: "Table", image: "/images/six.png" },
    { name: "fishing", type: "Slot", image: "/images/seven.png" },
    { name: "gaming", type: "Table", image: "/images/eight.png" }
  ]

  return (
    <>
    <section className="py-15 relative overflow-hidden bg-gradient-to-br from-amber-950 via-yellow-950 to-orange-950">
      {/* Luxurious Golden Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-400/5 via-amber-500/10 to-orange-600/5"></div>
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-gradient-radial from-yellow-400/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/5 w-80 h-80 bg-gradient-radial from-amber-500/15 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-conic from-yellow-400/5 via-transparent to-amber-500/5 animate-spin" style={{animationDuration: '60s'}}></div>
      </div>

      {/* Golden Particles Effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400 rounded-full opacity-70 animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Majestic Header */}
        <div className="text-center mb-24">
          <div className="inline-block relative">
           
            
            <h2 className="text-4xl md:text-7xl font-black bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-300 bg-clip-text text-transparent mb-8 tracking-wider">
        Some Popular Games
            </h2>
            
            {/* Decorative Lines */}
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="h-px w-24 bg-gradient-to-r from-transparent to-yellow-400"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse delay-200"></div>
              <div className="w-4 h-4 bg-gradient-to-r from-yellow-400 to-amber-400 rounded-full animate-pulse delay-100"></div>
              <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse delay-200"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
              <div className="h-px w-24 bg-gradient-to-l from-transparent to-yellow-400"></div>
            </div>
          </div>
          
          <p className="text-2xl text-amber-200 max-w-4xl mx-auto leading-relaxed font-light">
            Enter the realm of <span className="text-yellow-400 font-semibold">legendary fortunes</span> and 
            <span className="text-amber-300 font-semibold"> golden opportunities</span>
          </p>
        </div>

        {/* Premium Games Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {games.map((game, index) => (
            <div 
              key={index} 
              className="group cursor-pointer transform transition-all duration-700 hover:scale-110 hover:-rotate-1"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative bg-gradient-to-br from-amber-900/40 via-yellow-900/30 to-orange-900/40 backdrop-blur-xl border-2 border-yellow-400/40 rounded-3xl overflow-hidden hover:border-yellow-300 transition-all duration-700 hover:shadow-2xl hover:shadow-yellow-400/40 group-hover:bg-gradient-to-br group-hover:from-yellow-900/50 group-hover:via-amber-900/40 group-hover:to-orange-900/50">
                
                {/* Golden Border Animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/30 via-amber-400/30 to-yellow-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl animate-pulse"></div>
                
                {/* Premium Badges */}
                {game.hot && (
                  <div className="absolute top-4 left-4 z-30">
                    <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg animate-pulse">
                      🔥 HOT
                    </div>
                  </div>
                )}
                
                {game.new && (
                  <div className="absolute top-4 left-4 z-30">
                    <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
                      ✨ NEW
                    </div>
                  </div>
                )}

                {/* Game Image Container */}
                <div className="relative h-48 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
                  <img
                    src={game.image}
                    alt={game.name}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-125"
                  />
                  
                  {/* Golden Overlay Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"></div>

                  {/* Jackpot Crown */}
                  <div className="absolute top-4 right-4 z-20">
                    <div className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-amber-400 text-black px-4 py-2 rounded-full text-sm font-black shadow-2xl border-2 border-yellow-200">
                      👑 {game.jackpot}
                    </div>
                  </div>

                 
                </div>

                {/* Luxurious Game Info */}
                <div className="p-6 relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-block text-sm bg-gradient-to-r from-yellow-400 to-amber-400 text-black px-4 py-2 rounded-full font-bold shadow-lg">
                      {game.type}
                    </span>
                    <div className="flex items-center space-x-1 text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold bg-gradient-to-r from-yellow-300 to-amber-300 bg-clip-text text-transparent mb-3 group-hover:from-yellow-200 group-hover:to-amber-200 transition-all duration-300">
                    {game.name}
                  </h3>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-amber-300">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm font-medium">{game.players} playing</span>
                    </div>
                    <div className="flex items-center text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300">
                      <span className="text-sm font-semibold mr-2">PLAY NOW</span>
                      <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Golden Shimmer Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1500"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Royal CTA Section */}
        <div className="text-center">
          <div className="inline-block group mb-8">
            <button className="relative px-16 py-6 bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 text-black rounded-full text-lg md:text-2xl font-black shadow-2xl hover:shadow-yellow-400/50 transition-all duration-500 transform hover:scale-110 overflow-hidden border-4 border-yellow-300 hover:border-yellow-200">
              <span className="relative z-10 flex items-center space-x-3">
                <span>👑</span>
                <span>DISCOVER ALL TREASURES</span>
                <span>💎</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-amber-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </button>
          </div>
          
          {/* Golden Stats */}
          <div className="flex flex-wrap items-center justify-center space-x-12 space-y-4 text-amber-200">
            <div className="flex items-center space-x-3 bg-gradient-to-r from-yellow-900/50 to-amber-900/50 px-6 py-3 rounded-full backdrop-blur-sm border border-yellow-400/30">
              <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-pulse"></div>
              <span className="text-lg font-semibold">🎯 Live Players: 15,347</span>
            </div>
            <div className="flex items-center space-x-3 bg-gradient-to-r from-amber-900/50 to-yellow-900/50 px-6 py-3 rounded-full backdrop-blur-sm border border-yellow-400/30">
              <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-amber-400 rounded-full animate-pulse"></div>
              <span className="text-lg font-semibold">💰 Total Jackpot: $12.8M</span>
            </div>
            <div className="flex items-center space-x-3 bg-gradient-to-r from-yellow-900/50 to-orange-900/50 px-6 py-3 rounded-full backdrop-blur-sm border border-yellow-400/30">
              <div className="w-3 h-3 bg-gradient-to-r from-orange-400 to-red-400 rounded-full animate-pulse"></div>
              <span className="text-lg font-semibold">🔥 Winners Today: 2,459</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Games