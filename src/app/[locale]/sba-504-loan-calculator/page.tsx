import React from 'react';
import { getTranslations } from 'next-intl/server';
import { SBA504Calculator } from '@/components/calculators/SBA504Calculator';
import Link from 'next/link';

export async function generateMetadata() {
  const t = await getTranslations('sba');
  const w = await getTranslations('website');
  return {
    title: 'SBA 504 Loan Calculator',
    description: 'Calculate SBA 504 loan payments. Estimate monthly payments for commercial real estate, equipment, and green building projects with CDC and bank portions.',
    alternates: {
      canonical: `${w("domain")}/sba-504-loan-calculator`
    }
  };
}

export default async function SBA504CalculatorPage() {
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
          SBA 504 Loan Calculator
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Calculate monthly payments for your SBA 504 loan, including both CDC and bank portions.
          Perfect for commercial real estate, equipment, and green building projects.
        </p>
      </section>

      {/* Calculator Section */}
      <section className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-6 sm:p-8">
        <SBA504Calculator />
      </section>

      {/* Information Section */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">About SBA 504 Loans</h2>
        <div className="prose prose-lg max-w-none">
          <p>
            The SBA 504 loan program provides long-term, fixed-rate financing for major fixed assets that promote
            business growth and job creation. The loan structure typically includes:
          </p>
          <ul>
            <li>40% from a Certified Development Company (CDC)</li>
            <li>50% from a bank or private lender</li>
            <li>10-15% down payment from the business</li>
          </ul>
          <h3>Key Features of SBA 504 Loans:</h3>
          <ul>
            <li>Below-market fixed interest rates</li>
            <li>Terms up to 25 years</li>
            <li>Lower down payments (as low as 10%)</li>
            <li>No balloon payments</li>
            <li>Project costs can exceed $5 million</li>
          </ul>
          <h3>Eligible Project Types:</h3>
          <ul>
            <li>Commercial real estate purchase</li>
            <li>Ground-up construction</li>
            <li>Building improvements</li>
            <li>Major equipment purchases</li>
            <li>Green building initiatives</li>
          </ul>
          <p>
            Use our calculator above to estimate your monthly payments for both the CDC and bank portions of your SBA 504 loan.
            Remember that actual terms and rates may vary based on your project type, location, and qualifications.
          </p>
        </div>
      </section>
    </div>
  );
} 