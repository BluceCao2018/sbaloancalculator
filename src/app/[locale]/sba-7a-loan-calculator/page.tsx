import React from 'react';
import { getTranslations } from 'next-intl/server';
import { SBA7aCalculator } from '@/components/calculators/SBA7aCalculator';
import Link from 'next/link';

export async function generateMetadata() {
  const w = await getTranslations('website');
  return {
    title: 'SBA 7(a) Loan Calculator: Calculate Monthly Payments & Terms',
    description: 'Calculate SBA 7(a) loan payments with the calculator. Estimate monthly payments, interest costs, and loan terms for working capital, equipment, and real estate.',
    alternates: {
      canonical: `${w("domain")}/sba-7a-loan-calculator`
    }
  };
}

export default async function SBA7aCalculatorPage() {
  return (
    <div className="w-full mx-auto py-8 space-y-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto">
        <div className="mb-6">
          <Link 
            href="/"
            className="text-blue-600 hover:text-blue-700 inline-flex items-center"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Calculator Selection
          </Link>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
          SBA 7(a) Loan Calculator
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Calculate monthly payments and total costs for your SBA 7(a) loan. Perfect for planning working capital,
          equipment purchases, and real estate investments.
        </p>
      </section>

      {/* Calculator Section */}
      <section className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-6 sm:p-8">
        <SBA7aCalculator />
      </section>

      {/* Information Section */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">About SBA 7(a) Loans</h2>
        <div className="prose prose-lg max-w-none">
          <p>
            The SBA 7(a) loan program is the SBA's primary program for providing financial assistance to small businesses.
            These loans can be used for:
          </p>
          <ul>
            <li>Working capital</li>
            <li>Equipment purchases</li>
            <li>Real estate acquisition</li>
            <li>Business expansion</li>
            <li>Debt refinancing</li>
          </ul>
          <h3>Key Features of SBA 7(a) Loans:</h3>
          <ul>
            <li>Loan amounts up to $5 million</li>
            <li>Terms up to 25 years for real estate</li>
            <li>Terms up to 10 years for equipment and working capital</li>
            <li>Competitive interest rates</li>
            <li>Lower down payments than conventional loans</li>
          </ul>
          <p>
            Use our calculator above to estimate your monthly payments and understand the total cost of your SBA 7(a) loan.
            Remember that actual terms and rates may vary based on your business qualifications and lender requirements.
          </p>
        </div>
      </section>
    </div>
  );
} 