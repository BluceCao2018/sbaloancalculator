'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

interface MatcherStep {
  title: string;
  options: {
    value: string;
    label: string;
    icon?: React.ReactNode;
  }[];
}

export function LoanMatcher() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [selections, setSelections] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);

  const steps: MatcherStep[] = [
    {
      title: "What do you need funding for?",
      options: [
        {
          value: "working-capital",
          label: "Working Capital",
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )
        },
        {
          value: "real-estate",
          label: "Real Estate/Equipment",
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          )
        }
      ]
    },
    {
      title: "How long has your business been operating?",
      options: [
        {
          value: "<2",
          label: "Less than 2 years",
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          )
        },
        {
          value: "2+",
          label: "2+ years",
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )
        }
      ]
    },
    {
      title: "Preferred loan term?",
      options: [
        {
          value: "short",
          label: "1-7 years",
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )
        },
        {
          value: "long",
          label: "10-25 years",
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          )
        }
      ]
    }
  ];

  const handleSelection = (value: string) => {
    const newSelections = [...selections.slice(0, currentStep), value];
    setSelections(newSelections);
    
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResult(true);
    }
  };

  const getRecommendation = () => {
    const [purpose, age, term] = selections;
    
    // Working capital + Less than 2 years + Short term = 7(a) loan
    if (purpose === 'working-capital' && age === '<2' && term === 'short') {
      return {
        type: '7a',
        title: 'Recommended: SBA 7(a) Loan',
        description: 'Perfect for your working capital needs, up to $5 million available',
        features: [
          'Flexible use of funds',
          'Quick approval process',
          'No collateral required',
          'Multiple business purposes'
        ],
        action: {
          text: 'Calculate 7(a) Loan',
          href: '/sba-7a-loan-calculator',
          params: {
            purpose: 'working-capital',
            term: 7,
            amount: 500000
          }
        }
      };
    }
    
    // Real estate + 2+ years + Long term = 504 loan
    if (purpose === 'real-estate' && age === '2+' && term === 'long') {
      return {
        type: '504',
        title: 'Recommended: SBA 504 Loan',
        description: 'Ideal for your fixed asset investment needs',
        features: [
          'Low down payment (as low as 10%)',
          'Fixed interest rate',
          'Terms up to 25 years',
          'Perfect for owner-occupied real estate'
        ],
        action: {
          text: 'Calculate 504 Loan',
          href: '/sba-504-loan-calculator',
          params: {
            propertyType: 'commercial-real-estate',
            term: 25,
            projectCost: 1000000
          }
        }
      };
    }

    // Other combinations = Compare recommendation
    return {
      type: 'compare',
      title: 'Custom Comparison Needed',
      description: 'Based on your needs, we recommend comparing these loan options:',
      features: [
        '7(a) Loan: More flexible use of funds',
        '504 Loan: Lower fixed rates',
        'Can apply for both programs',
        'Our experts can help you choose'
      ],
      action: {
        text: 'Get Custom Recommendation',
        href: '#',
        params: {}
      }
    };
  };

  const handleActionClick = (recommendation: any) => {
    if (recommendation.type === 'compare') {
      // Show email subscription form
      // TODO: Implement email subscription functionality
    } else {
      // Navigate to calculator page with prefilled parameters
      const params = new URLSearchParams(recommendation.action.params);
      router.push(`${recommendation.action.href}?${params.toString()}`);
    }
  };

  const handleBack = () => {
    if (showResult) {
      setShowResult(false);
    } else if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const recommendation = getRecommendation();

  return (
    <div className="mx-auto bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-semibold text-gray-900">Intelligence SBA Loan Calculator</h3>
          {(currentStep > 0 || showResult) && (
            <button
              onClick={handleBack}
              className="text-blue-600 hover:text-blue-700 flex items-center text-sm font-medium"
            >
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back
            </button>
          )}
        </div>

        {!showResult ? (
          <>
            {/* Progress Bar */}
            <div className="relative mb-8">
              <div className="flex mb-2 justify-between">
                {steps.map((_, index) => (
                  <div
                    key={index}
                    className={`step-indicator w-8 h-8 flex items-center justify-center rounded-full border-2 
                      ${index <= currentStep ? 'border-blue-600 text-blue-600' : 'border-gray-300 text-gray-400'}`}
                  >
                    {index + 1}
                  </div>
                ))}
              </div>
              <div className="absolute top-4 left-0 right-0 h-0.5 bg-gray-200 -z-10">
                <div
                  className="absolute top-0 left-0 h-full bg-blue-600 transition-all duration-300"
                  style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
                />
              </div>
            </div>

            {/* Current Step */}
            <div className="space-y-6">
              <h4 className="text-xl font-medium text-gray-900 text-center">
                {steps[currentStep].title}
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {steps[currentStep].options.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleSelection(option.value)}
                    className="flex flex-col items-center p-6 border-2 border-gray-200 rounded-xl hover:border-blue-500 
                             hover:bg-blue-50 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-3 
                                  group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      {option.icon}
                    </div>
                    <span className="text-lg font-medium text-gray-900 group-hover:text-blue-600">
                      {option.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </>
        ) : (
          // Result Section
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                {recommendation.title}
              </h3>
              <p className="text-gray-600">
                {recommendation.description}
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <ul className="space-y-3">
                {recommendation.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => handleActionClick(recommendation)}
              className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 
                         transition-colors flex items-center justify-center"
            >
              {recommendation.action.text}
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
} 