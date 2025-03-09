import React from 'react';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata() {
  const t = await getTranslations('website');
  
  return {
    title: 'Current SBA Loan Rates 2025: Live 504 & 7(a) Interest Rates',
    description: 'Track current SBA loan rates. Live updates for 504 fixed rates from 4.75% and 7(a) variable rates. Compare terms, fees, and monthly payments.',
    alternates: {
      canonical: `${t('domain')}/current-sba-loan-rates`
    },
    openGraph: {
      title: 'Current SBA Loan Rates 2025: Live 504 & 7(a) Interest Rates',
      description: 'Track current SBA loan rates. Live updates for 504 fixed rates from 4.75% and 7(a) variable rates. Compare terms, fees, and monthly payments.',
      type: 'website',
    }
  };
}

export default function CurrentSBALoanRatesPage() {
  return (
    <div className="w-full mx-auto space-y-12">
      <div className="banner bg-blue-theme py-16">
        <section className="text-center max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
            Current SBA Loan Rates for 2025
          </h1>
          <p className="text-xl text-white mb-8">
            Track current SBA loan rates with daily updates. Compare today's SBA 504 fixed rates from 4.75% 
            and SBA 7(a) variable rates for your business loan.
          </p>
        </section>
      </div>

      <div className="px-4 sm:px-6 lg:px-8">
        {/* Current Rates Overview */}
        <section className="max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-8">Today's SBA Loan Rates Overview</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-semibold mb-4">Current SBA 504 Loan Rates</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b pb-2">
                  <span>25-Year Fixed Rate:</span>
                  <span className="font-semibold">4.75%</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span>20-Year Fixed Rate:</span>
                  <span className="font-semibold">4.65%</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span>10-Year Fixed Rate:</span>
                  <span className="font-semibold">4.55%</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-semibold mb-4">Current SBA 7(a) Loan Rates</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b pb-2">
                  <span>Variable Rate:</span>
                  <span className="font-semibold">9.00%</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span>Fixed Rate:</span>
                  <span className="font-semibold">8.75%</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Rate Factors */}
        <section className="max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-8">Understanding Current SBA Loan Rates</h2>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <p className="mb-4">
              Current SBA loan rates vary based on several key factors. The SBA 504 program offers fixed rates 
              starting at 4.75%, while SBA 7(a) loan rates typically follow the prime rate plus a spread.
            </p>
            <p className="mb-4">
              Today's SBA loan rates reflect market conditions and program requirements. For 504 loans, 
              rates remain fixed throughout the term, providing stable monthly payments. The 7(a) program's 
              current rates may adjust with market changes.
            </p>
            <p className="mb-4">
              Regional factors can affect your SBA loan rates. Green energy projects and certain manufacturing 
              facilities often qualify for lower current SBA loan rates and special terms.
            </p>
            <p className="mt-6">
              <Link href="/sba-loan-rates-history" 
                    className="text-blue-600 hover:text-blue-800 inline-flex items-center">
                View historical rate trends and analysis 
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </p>
          </div>
        </section>

        {/* State Benefits */}
        <section className="max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-8">State Rate Benefits</h2>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <ul className="space-y-3">
              <li>• California: Green building projects receive reduced rates</li>
              <li>• Texas: Energy project rate benefits available</li>
              <li>• Florida: Special rates for tourism developments</li>
              <li>• New York: Urban development zone rate reductions</li>
            </ul>
          </div>
        </section>

        {/* Calculator CTA */}
        <section className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Calculate Your SBA Loan Rate</h2>
          <p className="text-xl text-gray-600 mb-8">
            Use our calculators to estimate payments with current SBA loan rates
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/sba-504-loan-calculator"
                  className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              504 Loan Calculator
            </Link>
            <Link href="/sba-7a-loan-calculator"
                  className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              7(a) Loan Calculator
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
} 