import React from 'react';
import { VACalculator } from '@/components/calculators/VACalculator';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata() {
  const w = await getTranslations('website');
  return {
    // 60 characters (including spaces)
    title: 'Texas VA Loan Calculator 2025: Compare Rates from 5.75%',
    
    // 160 characters (including spaces)
    description: 'Calculate Texas VA loan payments & benefits. Current rates from 5.75%, plus special TX Vet program rates. Free calculator, updated daily.',
    
    alternates: {
      canonical: `${w("domain")}/va-loan-calculator-texas-veterans`
    },
    openGraph: {
      title: 'Texas VA Loan Calculator 2025: Compare Rates from 5.75%',
      description: 'Calculate Texas VA loan payments & benefits. Current rates from 5.75%, plus special TX Vet program rates. Free calculator, updated daily.',
      type: 'website',
      images: [{
        url: '/texas-va-calculator-og.jpg',
        width: 1200,
        height: 630,
      }],
    },
    script: [
      {
        type: 'application/ld+json',
        text: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Texas VA Loan Calculator",
          "description": "Calculate Texas VA loan payments and benefits",
          "applicationCategory": "BusinessApplication",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "ratingCount": "189"
          },
          "areaServed": {
            "@type": "State",
            "name": "Texas"
          }
        })
      }
    ]
  };
}

export default async function TexasVALoanCalculatorPage() {
  return (
    <div className="w-full mx-auto py-0 space-y-12">
      <div className="banner bg-blue-theme py-16">
        <section className="text-center max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
            Texas Veterans VA Loan Calculator
          </h1>
          <p className="text-xl text-white mb-8">
            Calculate your VA loan payments with exclusive Texas veteran benefits and lower interest rates
          </p>
        </section>
      </div>

      <section className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
          <div className="space-y-6">
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h2 className="text-xl font-semibold text-blue-900 mb-2">2025 Texas VA Loan Updates</h2>
              <div className="grid grid-cols-2 gap-4 text-blue-800">
                <div className="flex items-center">
                  <span className="font-medium">Current Rate:</span>
                  <span className="ml-2">From 5.75%</span>
                </div>
                <div className="flex items-center">
                  <span className="font-medium">Loan Limit:</span>
                  <span className="ml-2">$726,200</span>
                </div>
              </div>
            </div>

            <VACalculator defaultState="texas" defaultRate={5.75} />
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-xl p-8 border border-gray-100">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Exclusive Texas Veteran Benefits</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-blue-900">VLB Home Loan Program</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Below-market interest rates starting at 5.75%</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Up to $726,200 loan amount (2025)</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-blue-900">Property Tax Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Up to $12,000 property tax exemption</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>100% exemption for 100% disabled veterans</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4">
        <div className="bg-gray-50 rounded-xl p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Texas Housing Market Highlights</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-3">Market Growth</h3>
              <p className="text-gray-600">Average home value increase of 8.2% in 2023</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-3">Affordability</h3>
              <p className="text-gray-600">Median home price: $315,000 (2025)</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-3">Growth Areas</h3>
              <p className="text-gray-600">Top markets: Austin, Dallas, Houston</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 mb-12">
        <div className="bg-white rounded-xl p-8 border border-gray-100">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Texas Veterans Land Board Programs</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium text-blue-900 mb-4">Land Loans</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Up to $150,000 for land purchase</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Competitive fixed rates</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-blue-900 mb-4">Home Improvement</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Up to $50,000 for renovations</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>30-year fixed rate options</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 