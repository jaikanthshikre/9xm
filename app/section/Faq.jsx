'use client'

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'How do I place a bet?',
    answer:
      'Simply navigate to the game or match you want to wager on, enter your stake amount, and click “Place Bet.” Make sure you have sufficient balance in your wallet before confirming.',
  },
  {
    question: 'What payment methods are supported?',
    answer:
      'We accept multiple options including Visa/Mastercard, e-wallets like Neteller and Skrill, as well as cryptocurrencies such as Bitcoin and Ethereum.',
  },
  {
    question: 'How do I withdraw my winnings?',
    answer:
      'Go to your account Wallet, select “Withdraw,” choose your preferred method, enter the amount, and submit. Typical processing time is within 24 hours.',
  },
  {
    question: 'Is my personal data secure?',
    answer:
      'Absolutely. We use SSL encryption across the site and comply with GDPR standards to protect your information.',
  },
  {
    question: 'Where can I find the responsible gaming policy?',
    answer:
      'Our Responsible Gaming policy is linked under Legal → Responsible Gaming in the footer. We also offer self-exclusion and deposit limit tools for your safety.',
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (idx) => setOpenIndex(openIndex === idx ? null : idx);

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-5">
        <h2 className="text-3xl font-bold text-green-900 mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((item, idx) => (
            <div key={idx} className="border rounded-lg overflow-hidden">
              <button
                onClick={() => toggle(idx)}
                className="w-full flex justify-between items-center bg-gradient-to-r from-green-900 to-green-700 text-white px-6 py-4 focus:outline-none"
              >
                <span className="text-lg font-medium">{item.question}</span>
                {openIndex === idx ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </button>
              {openIndex === idx && (
                <div className="px-6 py-4 bg-green-50 text-green-800">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
