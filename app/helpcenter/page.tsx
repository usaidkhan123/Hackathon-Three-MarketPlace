'use client'; // Ensure client-side rendering for dynamic functionality

import { useState } from 'react';

const HelpCenter = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqData = [
    {
      question: 'How can I reset my password?',
      answer: 'You can reset your password by clicking on the "Forgot Password" link on the login page. Follow the instructions sent to your email.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept credit cards, debit cards, PayPal, and other popular payment methods.',
    },
    {
      question: 'How can I track my order?',
      answer: 'Once your order is shipped, you will receive an email with the tracking number and a link to track your package.',
    },
    {
      question: 'What is your refund policy?',
      answer: 'Refunds are processed within 5-7 business days after we receive the returned item in its original condition.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="help-center-container max-w-4xl mx-auto p-6">
      {/* Header */}
      <h1 className="text-3xl font-bold text-center mb-8">Help Center</h1>

      {/* Introduction */}
      <section className="intro mb-8">
        <p className="text-lg text-gray-700 text-center">
          Welcome to our Help Center! Here, you'll find answers to commonly asked questions and guidance on how to resolve issues.
        </p>
      </section>

      {/* FAQ Section */}
      <section className="faq-section mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Frequently Asked Questions</h2>
        <div className="faq-list space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="faq-item border-b pb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full text-left text-lg font-medium text-gray-800 hover:text-blue-600"
              >
                {item.question}
                <span>{activeIndex === index ? '−' : '+'}</span>
              </button>
              {activeIndex === index && (
                <p className="mt-2 text-gray-600">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="contact-us bg-gray-100 p-6 rounded-md shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Still Have Questions?</h2>
        <p className="text-gray-700 mb-6">
          If you need further assistance, feel free to reach out to us through any of the options below.
        </p>
        <div className="contact-options space-y-4">
          <div>
            <h3 className="text-lg font-medium text-gray-800">Email Us:</h3>
            <p className="text-gray-600">support@example.com</p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-800">Call Us:</h3>
            <p className="text-gray-600">+1-800-555-1234</p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-800">Live Chat:</h3>
            <p className="text-gray-600">
              Use the chat icon in the bottom-right corner to talk to a support agent.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HelpCenter;
