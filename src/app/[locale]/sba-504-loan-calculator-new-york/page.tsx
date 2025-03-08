'use client';

import React from 'react';
import Link from 'next/link';
import NewYorkSBA504Calculator from '@/components/calculators/NewYorkSBA504Calculator';

export default function NewYorkSBA504Page() {
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
            New York SBA 504 Loan Calculator
          </h1>
          <p className="text-xl text-white mb-8">
            Calculate your SBA 504 loan in New York with current rates from 4.75%. 
            Special considerations for urban development and mixed-use properties.
          </p>
        </section>
      </div>

      <div className="px-4 sm:px-6 lg:px-8">
        {/* Calculator Section */}
        <section className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-6 sm:p-8">
          <NewYorkSBA504Calculator />
        </section>

        {/* New York Market Info */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">New York Market Updates</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-4">Manhattan</h3>
              <ul className="space-y-3 text-gray-600">
                <li>Commercial Rate: $1,200/sqft</li>
                <li>Office Space Growth: +8%</li>
                <li>Vacancy Rate: 12.5%</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-4">Brooklyn</h3>
              <ul className="space-y-3 text-gray-600">
                <li>Commercial Rate: $750/sqft</li>
                <li>Mixed-Use Growth: +15%</li>
                <li>Vacancy Rate: 8.2%</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-4">Long Island</h3>
              <ul className="space-y-3 text-gray-600">
                <li>Commercial Rate: $450/sqft</li>
                <li>Industrial Growth: +10%</li>
                <li>Vacancy Rate: 6.8%</li>
              </ul>
            </div>
          </div>
        </section>

        {/* New York Specific Info */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">New York SBA 504 Loan Features</h2>
          <div className="prose prose-lg max-w-none">
            <h3>Urban Development Benefits</h3>
            <p>
              Special considerations for urban development projects:
            </p>
            <ul>
              <li>Mixed-use property incentives</li>
              <li>Historic building preservation</li>
              <li>Transit-oriented development</li>
              <li>Urban renewal zones</li>
            </ul>

            <h3>Energy Efficiency Requirements</h3>
            <p>
              New York specific energy requirements:
            </p>
            <ul>
              <li>Local Law 97 compliance</li>
              <li>Green building standards</li>
              <li>Energy audit requirements</li>
              <li>Carbon reduction initiatives</li>
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
            <Link href="/sba-504-loan-calculator-florida"
                  className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Florida Calculator</h3>
              <p className="text-gray-600">Tourism and coastal property considerations</p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
} 