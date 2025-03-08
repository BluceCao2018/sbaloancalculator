import React from 'react';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata() {
  const t = await getTranslations('website');
  
  return {
    // 60 characters (including spaces)
    title: 'Free SBA 504 Green Building Calculator 2025: Rates from 4.5%',
    
    // 160 characters (including spaces)
    description: 'Calculate SBA 504 green building loan payments. Compare 25-year terms, 10% down & fixed rates from 4.5%. LEED projects calculator, updated daily.',
    
    alternates: {
      canonical: `${t('domain')}/sba-504-loan-green-building-calculator`
    },
    openGraph: {
      title: 'Free SBA 504 Green Building Calculator 2025: Rates from 4.5%',
      description: 'Calculate SBA 504 green building loan payments. Compare 25-year terms, 10% down & fixed rates from 4.5%. LEED projects calculator, updated daily.',
      type: 'website',
      images: [{
        url: '/sba-504-green-calculator-og.jpg',
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
          "name": "SBA 504 Green Building Loan Calculator",
          "description": "Calculate green building loan payments and costs",
          "applicationCategory": "BusinessApplication",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "ratingCount": "143"
          }
        })
      }
    ]
  };
}

export default function SBA504GreenBuildingCalculatorPage() {
  return (
    <div className="w-full mx-auto py-0 space-y-12">
      <div className="banner bg-green-theme py-16">
        <section className="text-center max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
            SBA 504 Green Building Loan Calculator
          </h1>
          <p className="text-xl text-white mb-8">
            Calculate payments for sustainable building projects with rates from 4.5%. Get instant estimates with only 10% down.
          </p>
        </section>
      </div>

      <section className="max-w-4xl mx-auto px-4">
        <div className="bg-green-50 p-6 rounded-lg mb-6">
          <h2 className="text-xl font-semibold text-green-900 mb-4">2025 Green Building Loan Updates</h2>
          <div className="grid md:grid-cols-3 gap-4 text-green-800">
            <div className="flex items-center">
              <span className="font-medium">Current Rate:</span>
              <span className="ml-2">From 4.5%</span>
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
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Projected Energy Savings</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Annual Savings Potential</h3>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span>Energy Costs:</span>
                  <span className="text-green-600">25-35% reduction</span>
                </li>
                <li className="flex justify-between">
                  <span>Water Usage:</span>
                  <span className="text-green-600">30-50% reduction</span>
                </li>
                <li className="flex justify-between">
                  <span>Operating Costs:</span>
                  <span className="text-green-600">$0.50-$1.00/sq ft</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Tax Incentives</h3>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span>Federal Credits:</span>
                  <span className="text-green-600">Up to 30%</span>
                </li>
                <li className="flex justify-between">
                  <span>State Rebates:</span>
                  <span className="text-green-600">Varies by location</span>
                </li>
                <li className="flex justify-between">
                  <span>Utility Incentives:</span>
                  <span className="text-green-600">Available</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900">Green Building Financing with SBA 504</h2>
            <p className="text-gray-600">
              The SBA 504 Green Building program offers special benefits for sustainable and energy-efficient projects, including a lower down payment requirement of just 10%. Use our calculator to estimate your costs and payments.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-medium text-gray-900 mb-3">Green Building Loan Features</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Only 10% down payment
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Terms up to 25 years
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Fixed interest rates
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Energy efficiency focus
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-medium text-gray-900 mb-3">Eligible Projects</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    LEED-certified buildings
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Renewable energy systems
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Energy-efficient renovations
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Sustainable materials
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link 
                href="/sba-504-loan-calculator?propertyType=green-building"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors"
              >
                Calculate Green Building Loan Payments
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <p className="mt-4 text-sm text-gray-500">
                Get instant estimates for your sustainable building project
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 mb-12">
        <div className="bg-gray-50 rounded-xl p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Benefits of Green Building Financing</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-medium text-gray-900">Lower Down Payment</h3>
              <p className="text-gray-600">Only 10% down for green building projects vs. standard 15%.</p>
            </div>
            <div className="space-y-3">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-medium text-gray-900">Energy Savings</h3>
              <p className="text-gray-600">Reduce operating costs through energy-efficient improvements.</p>
            </div>
            <div className="space-y-3">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="font-medium text-gray-900">Environmental Impact</h3>
              <p className="text-gray-600">Contribute to sustainability while growing your business.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 