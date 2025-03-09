import React from 'react';
import { getTranslations } from 'next-intl/server';
import { FAQSection } from '@/components/FAQSection';
import { LoanTypesSection } from '@/components/LoanTypesSection';
import { BenefitsSection } from '@/components/BenefitsSection';
import { HowToUseCalculator } from '@/components/HowToUseCalculator';
import { CalculatorCards } from '@/components/CalculatorCards';
import { LoanMatcher } from '@/components/LoanMatcher';
import Link from 'next/link';

export async function generateMetadata() {
  const w = await getTranslations('website');
  return {
    title: 'Free SBA Loan Calculator 2025: State-Specific Rates & Terms',
    description: 'Free calculator for SBA loans with current rates from 2.25%. Compare 7(a) & 504 loans, estimate monthly payments & total costs. Updated daily. ',
    alternates: {
      canonical: `${w("domain")}`
    },
    openGraph: {
      title: 'Free SBA Loan Calculator 2025: State-Specific Rates & Terms',
      description: 'Free calculator for SBA loans with current rates from 2.25%. Compare 7(a) & 504 loans, estimate monthly payments & total costs. Updated daily.',
      type: 'website',
      images: [{
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      }],
    }
  };
}

export default function HomePage() {
  return (
    <div className="w-full mx-auto space-y-12">
      <div className="banner bg-blue-theme py-16">
        {/* Hero Section */}
        <section className="text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
            Free SBA Loan Calculator: State-Specific Rates & Terms
          </h1>
          <p className="text-xl text-white mb-8">
            Compare SBA loan options with our advanced calculators. Get personalized rates based on your state, 
            industry, and project type. Choose between SBA 504 and 7(a) loans with real-time market rates.
          </p>
        </section>
      </div>

      <div className="px-4 sm:px-6 lg:px-8">
        {/* Loan Type Comparison */}
        <section className="max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Choose SBA Loan Calculator</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-semibold mb-4">SBA 504 Loan Calculator</h3>
              <ul className="space-y-3 mb-6">
                <li>• Fixed rates from <a href="/current-sba-loan-rates">4.75%</a></li>
                <li>• Commercial real estate focus</li>
                <li>• Up to 25-year terms</li>
                <li>• State-specific property benefits</li>
              </ul>
              <Link href="/sba-504-loan-calculator" 
                    className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Calculate 504 Loan
              </Link>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-semibold mb-4">SBA 7(a) Loan Calculator</h3>
              <ul className="space-y-3 mb-6">
                <li>• Variable rates available</li>
                <li>• Working capital options</li>
                <li>• Flexible use of funds</li>
                <li>• Regional market adjustments</li>
              </ul>
              <Link href="/sba-7a-loan-calculator"
                    className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Calculate 7(a) Loan
              </Link>
            </div>
          </div>
        </section>

        {/* State Advantage Section */}
        <section className="max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">State-Specific SBA Loan Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="text-blue-600 mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Local Incentives</h3>
              <p className="text-gray-600">State-specific programs and incentives that can lower your rates</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="text-blue-600 mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Market Rates</h3>
              <p className="text-gray-600">Real-time rates adjusted for your state's market conditions</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="text-blue-600 mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Property Types</h3>
              <p className="text-gray-600">Specialized calculations for local property requirements</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="text-blue-600 mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Industry Focus</h3>
              <p className="text-gray-600">State-specific industry advantages and requirements</p>
            </div>
          </div>
        </section>

        {/* Calculator Features */}
        <section className="max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Why Use Our SBA Loan Calculator?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-3">Accurate Calculations</h3>
              <p className="text-gray-600">Our SBA loan calculator provides precise payment estimates based on current market rates and local factors.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-3">Regional Insights</h3>
              <p className="text-gray-600">Get location-specific loan terms and rates with our state-optimized SBA loan calculator.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-3">Easy Comparison</h3>
              <p className="text-gray-600">Compare different SBA loan options and terms to find the best fit for your business needs.</p>
            </div>
          </div>
        </section>

        {/* Latest Updates */}
        <section className="max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Latest SBA Loan Updates</h2>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">•</span>
                <p>Current SBA loan calculator rates updated for Q1 2024 market conditions</p>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">•</span>
                <p>New state-specific benefits added to SBA loan calculations</p>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">•</span>
                <p>Enhanced SBA loan calculator features for specialized industry types</p>
              </li>
            </ul>
          </div>
        </section>

        {/* Call to Action */}
        <section className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Start Your SBA Loan Calculation</h2>
          <p className="text-xl text-gray-600 mb-8">
            Choose your state and loan type to get accurate, personalized SBA loan calculations.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/sba-504-loan-calculator"
                  className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Use SBA 504 Loan Calculator
            </Link>
            <Link href="/sba-7a-loan-calculator"
                  className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Use SBA 7(a) Loan Calculator
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
} 