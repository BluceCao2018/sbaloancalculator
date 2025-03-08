'use client';

import React from 'react';
import Link from 'next/link';
import FloridaSBA504Calculator from '@/components/calculators/FloridaSBA504Calculator';

export default function FloridaSBA504Page() {
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
            Florida SBA 504 Loan Calculator
          </h1>
          <p className="text-xl text-white mb-8">
            Calculate your SBA 504 loan in Florida with current rates from 4.75%. 
            Special considerations for coastal properties and tourism-related projects.
          </p>
        </section>
      </div>

      <div className="px-4 sm:px-6 lg:px-8">
        {/* Calculator Section */}
        <section className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-6 sm:p-8">
          <FloridaSBA504Calculator />
        </section>

        {/* Florida Market Info */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Florida Market Updates</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-4">Miami-Dade</h3>
              <ul className="space-y-3 text-gray-600">
                <li>Commercial Rate: $450/sqft</li>
                <li>Tourism Growth: +22%</li>
                <li>Vacancy Rate: 5.8%</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-4">Orlando</h3>
              <ul className="space-y-3 text-gray-600">
                <li>Commercial Rate: $380/sqft</li>
                <li>Hospitality Growth: +18%</li>
                <li>Vacancy Rate: 6.2%</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-4">Tampa Bay</h3>
              <ul className="space-y-3 text-gray-600">
                <li>Commercial Rate: $340/sqft</li>
                <li>Business Growth: +15%</li>
                <li>Vacancy Rate: 6.5%</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Florida Specific Info */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Florida SBA 504 Loan Features</h2>
          <div className="prose prose-lg max-w-none">
            <h3>Coastal Property Considerations</h3>
            <p>
              Special requirements for Florida coastal properties:
            </p>
            <ul>
              <li>Hurricane protection requirements</li>
              <li>Flood zone insurance</li>
              <li>Wind mitigation features</li>
              <li>Storm surge protection</li>
            </ul>

            <h3>Tourism Industry Benefits</h3>
            <p>
              Advantages for tourism-related businesses:
            </p>
            <ul>
              <li>Hospitality industry focus</li>
              <li>Seasonal business considerations</li>
              <li>Tourism infrastructure support</li>
              <li>Entertainment venue financing</li>
            </ul>
          </div>
        </section>

        {/* Other State Calculators */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Other State Calculators</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/sba-504-loan-calculator-california"
                  className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-2">California Calculator</h3>
              <p className="text-gray-600">Tech focus and green building incentives</p>
            </Link>
            <Link href="/sba-504-loan-calculator-texas"
                  className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Texas Calculator</h3>
              <p className="text-gray-600">Energy sector and manufacturing focus</p>
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