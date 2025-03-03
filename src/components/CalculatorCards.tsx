import React from 'react';
import Link from 'next/link';

export function CalculatorCards() {
  const calculators = [
    {
      title: "SBA 7(a) Loan Calculator",
      description: "Calculate monthly payments and total costs for SBA 7(a) loans. Perfect for general business purposes, working capital, equipment, and real estate.",
      features: [
        "Loan amounts up to $5 million",
        "Terms up to 25 years for real estate",
        "Flexible use of funds",
        "Variable and fixed rates available"
      ],
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      href: "/sba-7a-loan-calculator"
    },
    {
      title: "SBA 504 Loan Calculator",
      description: "Estimate payments for SBA 504 loans designed for major fixed asset purchases like real estate, buildings, and heavy equipment.",
      features: [
        "Up to $5.5 million SBA portion",
        "Terms up to 25 years",
        "Fixed interest rates",
        "Lower down payments"
      ],
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      href: "/sba-504-loan-calculator"
    }
  ];

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {calculators.map((calculator, index) => (
        <Link 
          href={calculator.href} 
          key={index}
          className="block group"
        >
          <div className="h-full bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-blue-50 rounded-xl p-3 group-hover:bg-blue-100 transition-colors">
                {calculator.icon}
              </div>
              <h3 className="text-2xl font-semibold ml-4 text-gray-900 group-hover:text-blue-600 transition-colors">
                {calculator.title}
              </h3>
            </div>
            
            <p className="text-gray-600 mb-6">
              {calculator.description}
            </p>

            <div className="space-y-2">
              {calculator.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </div>
              ))}
            </div>

            <div className="mt-6 inline-flex items-center text-blue-600 font-medium group-hover:text-blue-700">
              Calculate Now
              <svg className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
} 