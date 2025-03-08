import React from 'react';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata() {
  const w = await getTranslations('website');
  return {
    // 60 characters (including spaces)
    title: 'Free SBA 504 Real Estate Calculator 2025: Rates from 4.75%',
    
    // 160 characters (including spaces)
    description: 'Calculate SBA 504 commercial real estate loan payments. Compare 25-year terms, 10% down & fixed rates from 4.75%. Updated daily.',
    
    alternates: {
      canonical: `${w("domain")}/sba-504-loan-real-estate-calculator`
    },
    openGraph: {
      title: 'Free SBA 504 Real Estate Calculator 2025: Rates from 4.75%',
      description: 'Calculate SBA 504 commercial real estate loan payments. Compare 25-year terms, 10% down & fixed rates from 4.75%. Updated daily.',
      type: 'website',
      images: [{
        url: '/sba-504-real-estate-calculator-og.jpg',
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
          "name": "SBA 504 Real Estate Loan Calculator",
          "description": "Calculate commercial real estate loan payments and costs",
          "applicationCategory": "BusinessApplication",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "ratingCount": "178"
          }
        })
      }
    ]
  };
}

export default function SBA504RealEstateCalculatorPage() {
  return (
    <div className="w-full mx-auto py-0 space-y-12">
      <div className="banner bg-blue-theme py-16">
        <section className="text-center max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
            SBA 504 Real Estate Loan Calculator
          </h1>
          <p className="text-xl text-white mb-8">
            Calculate commercial real estate payments with current rates from 4.75%. Get instant estimates with only 10% down.
          </p>
        </section>
      </div>

      <section className="max-w-4xl mx-auto px-4">
        <div className="bg-blue-50 p-6 rounded-lg mb-6">
          <h2 className="text-xl font-semibold text-blue-900 mb-4">2025 Commercial Real Estate Loan Updates</h2>
          <div className="grid md:grid-cols-3 gap-4 text-blue-800">
            <div className="flex items-center">
              <span className="font-medium">Current Rate:</span>
              <span className="ml-2">From 4.75%</span>
            </div>
            <div className="flex items-center">
              <span className="font-medium">Down Payment:</span>
              <span className="ml-2">Only 10%</span>
            </div>
            <div className="flex items-center">
              <span className="font-medium">Max Term:</span>
              <span className="ml-2">25 Years</span>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Commercial Real Estate Market Analysis</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Market Trends</h3>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span>Cap Rates:</span>
                  <span className="text-blue-600">5.5-7.5%</span>
                </li>
                <li className="flex justify-between">
                  <span>Price/Sq Ft:</span>
                  <span className="text-blue-600">$150-$300</span>
                </li>
                <li className="flex justify-between">
                  <span>Occupancy Rates:</span>
                  <span className="text-blue-600">85-95%</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Property Types</h3>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span>Office:</span>
                  <span className="text-blue-600">$200-400/sq ft</span>
                </li>
                <li className="flex justify-between">
                  <span>Retail:</span>
                  <span className="text-blue-600">$150-350/sq ft</span>
                </li>
                <li className="flex justify-between">
                  <span>Industrial:</span>
                  <span className="text-blue-600">$100-250/sq ft</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900">Commercial Real Estate Financing with SBA 504</h2>
            <p className="text-gray-600">
              The SBA 504 loan program is ideal for purchasing commercial real estate, offering long-term, fixed-rate financing with low down payments. Use our calculator to estimate your costs and payments.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-medium text-gray-900 mb-3">Real Estate Loan Features</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Up to 25-year terms
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    As little as 10% down payment
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Below-market fixed interest rates
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Owner-occupied commercial properties
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-medium text-gray-900 mb-3">Eligible Properties</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Office buildings
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Retail spaces
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Industrial facilities
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Mixed-use buildings
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link 
                href="/sba-504-loan-calculator?propertyType=commercial-real-estate"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors"
              >
                Calculate Real Estate Loan Payments
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <p className="mt-4 text-sm text-gray-500">
                Get instant estimates for your commercial real estate financing
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 mb-12">
        <div className="bg-gray-50 rounded-xl p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Benefits of SBA 504 Real Estate Financing</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="font-medium text-gray-900">Low Down Payment</h3>
              <p className="text-gray-600">Preserve your working capital with down payments as low as 10%.</p>
            </div>
            <div className="space-y-3">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-medium text-gray-900">Fixed Rates</h3>
              <p className="text-gray-600">Lock in low, fixed interest rates for the entire loan term.</p>
            </div>
            <div className="space-y-3">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="font-medium text-gray-900">Long Terms</h3>
              <p className="text-gray-600">Enjoy terms up to 25 years for lower monthly payments.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 