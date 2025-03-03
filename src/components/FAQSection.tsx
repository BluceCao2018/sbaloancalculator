'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';

export function FAQSection() {
  const t = useTranslations('sba.faq');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How does the SBA Loan Calculator work?",
      answer: "Our SBA loan calculator uses standard amortization formulas to calculate your estimated monthly payments. Simply input your desired SBA loan amount, interest rate, term length, and down payment, and the SBA loan calculator will instantly show you your estimated monthly payments and total loan cost."
    },
    {
      question: "What information do I need to use the SBA Loan Calculator?",
      answer: "To use our SBA loan calculator, you'll need to know your desired loan amount, estimated interest rate, loan term (in years), and down payment percentage. The SBA loan calculator will then provide you with detailed payment information for both SBA 7(a) and 504 loans."
    },
    {
      question: "How accurate is the SBA Loan Calculator?",
      answer: "Our SBA loan calculator provides accurate estimates based on the information you input. However, actual loan terms, rates, and payments may vary depending on factors such as your business creditworthiness, market conditions, and specific lender requirements. Always consult with an SBA-approved lender for exact terms."
    },
    {
      question: "What's the difference between SBA 7(a) and 504 loans in the calculator?",
      answer: "The SBA loan calculator can estimate payments for both loan types. SBA 7(a) loans are more flexible and can be used for various business purposes, while SBA 504 loans are specifically for major fixed assets. The calculator helps you compare payment scenarios for both options."
    },
    {
      question: "Can the SBA Loan Calculator help determine what I can afford?",
      answer: "Yes, our SBA loan calculator is an excellent tool for understanding potential loan payments. By adjusting the loan amount, term, and down payment in the calculator, you can find an SBA loan payment structure that fits your business budget."
    }
  ];

  return (
    <section className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">SBA Loan Calculator FAQ</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-lg">
            <button
              className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="font-medium text-gray-900">{faq.question}</span>
              <span className="ml-6">
                <svg
                  className={`w-6 h-6 transform ${
                    openIndex === index ? 'rotate-180' : ''
                  } transition-transform`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4">
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
} 