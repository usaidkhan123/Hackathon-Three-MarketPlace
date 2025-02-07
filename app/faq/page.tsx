'use client'; 

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  { question: 'What is your return policy?', answer: 'We offer a 30-day return policy for all products.' },
  { question: 'How can I track my order?', answer: 'You can track your order through the tracking link in your confirmation email.' },
  { question: 'Do you ship internationally?', answer: 'Yes, we ship to most countries around the world.' },
  { question: 'What payment methods do you accept?', answer: 'We accept credit cards, PayPal, and bank transfers.' },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container max-w-2xl mx-auto my-8 p-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
      {faqData.map((item, index) => (
        <div key={index} className="mb-4 border-b border-gray-300 pb-2">
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full text-left text-lg font-semibold text-gray-800 hover:text-blue-500 focus:outline-none flex justify-between items-center"
          >
            {item.question}
            <span className="text-blue-500">{activeIndex === index ? '-' : '+'}</span>
          </button>
          {activeIndex === index && (
            <p className="mt-2 text-gray-600">{item.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;

