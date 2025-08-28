'use client'
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';


const Marquee = dynamic(() => import('react-fast-marquee'), { ssr: false });

const GamingTopbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

 
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setIsMenuOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const promotions = [
    "🎰 Welcome Bonus: Get upto 10% Bonus on first deposit!",
    "🏆 Weekend Special: Double XP points on all slot games",
    "💎 VIP Program: Exclusive rewards and cashback for premium members",
    "🎯 Daily Tournament: Win up to ₹10,000 in our daily poker championship",
  ];

  const toggleMenu = () => setIsMenuOpen((v) => !v);

  return (
    <div className="w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-b border-gray-700 shadow-md">
  
      <div className="bg-gray-950 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo and Mobile Menu Button */}
          <div className="flex items-center space-x-3">
            <button
              className="md:hidden text-gray-300 hover:text-amber-400 focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle menu"
              aria-controls="mobile-nav"
              aria-expanded={isMenuOpen}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
            <div>
              <Link href="/"><img src="/images/logo.jpeg" alt="Logo" className="h-14 w-auto" /></Link>
            </div>
          </div>

          {/* Navigation Links - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="cricket" className="hover:text-amber-400 transition-colors font-medium">Cricket</Link>
            <Link href="football" className="hover:text-amber-400 transition-colors font-medium">FootBall</Link>
            <Link href="tennis" className="hover:text-amber-400 transition-colors font-medium">Tennis</Link>
            <Link href="casino" className="hover:text-amber-400 transition-colors font-medium">Casino Betting</Link>
          </nav>

          {/* User Actions (anchors styled like buttons; no nesting) */}
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-2 bg-gray-800 px-3 py-1 rounded-full">
              <span className="text-sm text-gray-300">Bonus: upto</span>
              <span className="font-bold text-amber-400">₹1,0000.00</span>
            </div>

            <Link
              href="https://wa.link/hwb"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-500 text-black px-4 py-2 rounded-lg font-semibold hover:bg-amber-400 transition-colors inline-flex items-center justify-center"
            >
              Login
            </Link>

            <Link
              href="https://wa.link/hwb"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-500 transition-colors inline-flex items-center justify-center"
            >
              Register
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        id="mobile-nav"
        className={`md:hidden bg-gray-900 transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-64 py-3' : 'max-h-0 py-0'}`}
      >
        <nav className="flex flex-col space-y-4 px-4 text-white" role="menu">
          <Link href="cricket" onClick={() => setIsMenuOpen(false)} className="hover:text-amber-400 transition-colors font-medium py-2" role="menuitem">Cricket</Link>
          <Link href="football" onClick={() => setIsMenuOpen(false)} className="hover:text-amber-400 transition-colors font-medium py-2" role="menuitem">FootBall</Link>
          <Link href="tennis" onClick={() => setIsMenuOpen(false)} className="hover:text-amber-400 transition-colors font-medium py-2" role="menuitem">Tennis</Link>
          <Link href="casino" onClick={() => setIsMenuOpen(false)} className="hover:text-amber-400 transition-colors font-medium py-2" role="menuitem">Casino Betting</Link>
        </nav>
      </div>

      {/* Promotions Marquee (client-only) */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-700 py-2">
        <Marquee gradient={false} speed={30} pauseOnHover className="text-amber-400">
          {promotions.map((promo, index) => (
            <span key={index} className="mx-8 font-medium text-sm flex items-center">
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
    </div>
  );
};

export default GamingTopbar;
