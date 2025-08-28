import Link from 'next/link'
import { FaFacebookF, FaTwitter, FaInstagram, FaDiscord } from 'react-icons/fa'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-10">
      <div className="container mx-auto px-5 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Quick Links Column */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {['Home', 'About', 'Blog', 'Contact'].map((item) => (
              <li key={item}>
                <Link
                  href="https://wa.link/hwb"
                  className="block hover:text-green-300 transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Games Column */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Games</h4>
          <ul className="space-y-2">
            {['Lucky7', 'Casino', 'Cricket', 'Teenpatti'].map((game) => (
              <li key={game}>
                <Link
                  href="https://wa.link/hwb"
                  className="block hover:text-green-300 transition-colors"
                >
                  {game}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal Column */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Legal</h4>
          <ul className="space-y-2">
            {['Terms of Service', 'Privacy Policy', 'Responsible Gaming'].map((label) => (
              <li key={label}>
                <Link
                  href="https://wa.link/hwb"
                  className="block hover:text-green-300 transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Support Column */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Support</h4>
          <ul className="space-y-2">
            {['FAQ', 'Live Chat', 'Support Tickets'].map((label) => (
              <li key={label}>
                <Link
                  href="#"
                  className="block hover:text-green-300 transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-green-800 mt-8 pt-6">
        <div className="container mx-auto px-5 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} YourSiteName. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="https://wa.link/hwb" className="hover:text-green-300 transition-colors text-xl">
              <FaFacebookF />
            </Link>
            <Link href="https://wa.link/hwb" className="hover:text-green-300 transition-colors text-xl">
              <FaTwitter />
            </Link>
            <Link href="https://wa.link/hwb" className="hover:text-green-300 transition-colors text-xl">
              <FaInstagram />
            </Link>
            <Link href="https://wa.link/hwb" className="hover:text-green-300 transition-colors text-xl">
              <FaDiscord />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
