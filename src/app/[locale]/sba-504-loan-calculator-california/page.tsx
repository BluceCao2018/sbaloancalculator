'use client';

import React from 'react';
import Link from 'next/link';
import CaliforniaSBA504Calculator from '@/components/calculators/CaliforniaSBA504Calculator';

export default function CaliforniaSBA504Page() {
  return (
    <div className="w-full mx-auto space-y-12">
      <div className="banner bg-blue-theme py-16">
        {/* Hero Section */}
        <section className="text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link 
              href="/sba-504-loan-calculator"
              className="text-white hover:text-gray-200 inline-flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Main Calculator
            </Link>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
            California SBA 504 Loan Calculator
          </h1>
          <p className="text-xl text-white mb-8">
            Calculate your SBA 504 loan in California with current rates from 4.75%. 
            Special considerations for green buildings and earthquake zones.
          </p>
        </section>
      </div>

      <div className="px-4 sm:px-6 lg:px-8">
        {/* Calculator Section */}
        <section className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-6 sm:p-8">
          <CaliforniaSBA504Calculator />
        </section>

        {/* California Market Info */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">California Market Updates</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-4">Silicon Valley</h3>
              <ul className="space-y-3 text-gray-600">
                <li>Commercial Rate: $850/sqft</li>
                <li>Tech Sector Growth: +12%</li>
                <li>Vacancy Rate: 8.5%</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-4">Los Angeles</h3>
              <ul className="space-y-3 text-gray-600">
                <li>Commercial Rate: $550/sqft</li>
                <li>Entertainment Growth: +8%</li>
                <li>Vacancy Rate: 7.2%</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-4">San Francisco</h3>
              <ul className="space-y-3 text-gray-600">
                <li>Commercial Rate: $950/sqft</li>
                <li>Fintech Growth: +15%</li>
                <li>Vacancy Rate: 9.1%</li>
              </ul>
            </div>
          </div>
        </section>

        {/* California Specific Info */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">California SBA 504 Loan Features</h2>
          <div className="prose prose-lg max-w-none">
            <h3>Green Building Incentives</h3>
            <p>
              California offers additional incentives for green building projects through the SBA 504 program:
            </p>
            <ul>
              <li>LEED certification benefits</li>
              <li>Solar energy installation credits</li>
              <li>Energy efficiency upgrades</li>
              <li>Water conservation systems</li>
            </ul>

            <h3>Earthquake Considerations</h3>
            <p>
              Special considerations for California properties in earthquake zones:
            </p>
            <ul>
              <li>Seismic retrofitting requirements</li>
              <li>Insurance requirements by zone</li>
              <li>Building code compliance</li>
              <li>Additional safety measures</li>
            </ul>
          </div>
        </section>

        {/* Other State Calculators */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Other State Calculators</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/sba-504-loan-calculator-texas"
                  className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Texas Calculator</h3>
              <p className="text-gray-600">Energy sector focus and manufacturing support</p>
            </Link>
            <Link href="/sba-504-loan-calculator-florida"
                  className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Florida Calculator</h3>
              <p className="text-gray-600">Tourism and coastal property considerations</p>
            </Link>
            <Link href="/sba-504-loan-calculator-new-york"
                  className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-2">New York Calculator</h3>
              <p className="text-gray-600">Urban development and mixed-use properties</p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
} 