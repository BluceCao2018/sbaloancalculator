import React from 'react';
import { VACalculator } from '@/components/calculators/VACalculator';
import { getTranslations } from 'next-intl/server';

export const metadata = {
  title: 'VA Loan Calculator | Calculate VA Mortgage Payments & Benefits',
  description: 'Free VA loan calculator to estimate your monthly VA mortgage payments. Calculate VA funding fees, interest rates, and loan terms for veteran home loans.',
  alternates: {
    canonical: '/va-loan-calculator'
  }
};

export default async function VALoanCalculatorPage() {
  
  return (
    <div className="w-full mx-auto py-0 space-y-12">
      <div className="banner bg-blue-theme py-16">
        <section className="text-center max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
            VA Loan Calculator
          </h1>
          <p className="text-xl text-white mb-8">
            Calculate your VA loan payments and understand your benefits as a veteran
          </p>
        </section>
      </div>

      <section className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900">Calculate Your VA Loan</h2>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-medium text-gray-900 mb-3">VA Loan Benefits</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    No down payment required
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    No private mortgage insurance
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Competitive interest rates
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Limited closing costs
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-medium text-gray-900 mb-3">What You Can Calculate</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    Monthly payments
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    VA funding fee
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    Total loan costs
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    Interest over time
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8">
              <VACalculator defaultRate={5.5} />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 mb-12">
        <div className="bg-gray-50 rounded-xl p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Understanding VA Loans</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-medium text-gray-900">No Down Payment</h3>
              <p className="text-gray-600">VA loans allow eligible veterans to purchase homes with no down payment.</p>
            </div>
            <div className="space-y-3">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-medium text-gray-900">Funding Fee</h3>
              <p className="text-gray-600">One-time fee that helps sustain the VA loan program for future veterans.</p>
            </div>
            <div className="space-y-3">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-medium text-gray-900">VA Guarantee</h3>
              <p className="text-gray-600">Government backing helps secure better rates and terms for veterans.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 mb-12">
        <div className="bg-white rounded-xl p-8 border border-gray-100">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">VA Loan Eligibility Requirements</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Service Requirements</h3>
                <p className="mt-1 text-gray-600">
                  Minimum service requirements vary based on service period and type. Generally, you must have served:
                </p>
                <ul className="mt-2 list-disc list-inside text-gray-600 ml-4">
                  <li>90 consecutive days of active service during wartime</li>
                  <li>181 days of active service during peacetime</li>
                  <li>6 years in the National Guard or Reserves</li>
                  <li>Or be the spouse of a service member who died in the line of duty</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Credit and Income</h3>
                <p className="mt-1 text-gray-600">
                  While VA loans are more flexible than conventional loans, you'll still need to meet basic requirements:
                </p>
                <ul className="mt-2 list-disc list-inside text-gray-600 ml-4">
                  <li>Stable, sufficient income to make monthly payments</li>
                  <li>Reasonable credit score (typically 620 or higher)</li>
                  <li>Certificate of Eligibility (COE)</li>
                  <li>Debt-to-income ratio within acceptable limits</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 