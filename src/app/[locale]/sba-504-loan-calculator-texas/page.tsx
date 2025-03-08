'use client';

import React from 'react';
import Link from 'next/link';
import TexasSBA504Calculator from '@/components/calculators/TexasSBA504Calculator';

export default function TexasSBA504Page() {
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
            Texas SBA 504 Loan Calculator
          </h1>
          <p className="text-xl text-white mb-8">
            Calculate your SBA 504 loan in Texas with current rates from 4.75%. 
            Special considerations for energy projects and manufacturing facilities.
          </p>
        </section>
      </div>

      <div className="px-4 sm:px-6 lg:px-8">
        {/* Calculator Section */}
        <section className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-6 sm:p-8">
          <TexasSBA504Calculator />
        </section>

        {/* Texas Market Info */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Texas Market Updates</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-4">Dallas/Fort Worth</h3>
              <ul className="space-y-3 text-gray-600">
                <li>Commercial Rate: $350/sqft</li>
                <li>Industrial Growth: +15%</li>
                <li>Vacancy Rate: 6.8%</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-4">Houston</h3>
              <ul className="space-y-3 text-gray-600">
                <li>Commercial Rate: $320/sqft</li>
                <li>Energy Sector Growth: +18%</li>
                <li>Vacancy Rate: 7.5%</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-4">Austin</h3>
              <ul className="space-y-3 text-gray-600">
                <li>Commercial Rate: $380/sqft</li>
                <li>Tech Growth: +20%</li>
                <li>Vacancy Rate: 5.9%</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Texas Specific Info */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Texas SBA 504 Loan Features</h2>
          <div className="prose prose-lg max-w-none">
            <h3>Energy Sector Benefits</h3>
            <p>
              Texas offers unique advantages for energy-related projects through the SBA 504 program:
            </p>
            <ul>
              <li>Oil & gas equipment financing</li>
              <li>Renewable energy incentives</li>
              <li>Energy infrastructure support</li>
              <li>Manufacturing facility benefits</li>
            </ul>

            <h3>Manufacturing Advantages</h3>
            <p>
              Special considerations for Texas manufacturing projects:
            </p>
            <ul>
              <li>Advanced manufacturing incentives</li>
              <li>Export-focused benefits</li>
              <li>Workforce development support</li>
              <li>No state income tax advantages</li>
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