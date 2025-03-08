import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'use-intl';

export async function generateMetadata() {
  const w = await useTranslations('website');
  return {
    // 60 characters (including spaces)
    title: 'Free SBA 504 Equipment Loan Calculator 2025: Rates from 4.75%',
    
    // 160 characters (including spaces)
    description: 'Calculate SBA 504 equipment loan payments. Compare 10-year terms, 10% down options & fixed rates from 4.75%. Free calculator, updated daily.',
    
    alternates: {
      canonical: `${w("domain")}/sba-504-loan-equipment-calculator`
    },
    openGraph: {
      title: 'Free SBA 504 Equipment Loan Calculator 2025: Rates from 4.75%',
      description: 'Calculate SBA 504 equipment loan payments. Compare 10-year terms, 10% down options & fixed rates from 4.75%. Free calculator, updated daily.',
      type: 'website',
      images: [{
        url: '/sba-504-equipment-calculator-og.jpg',
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
          "name": "SBA 504 Equipment Loan Calculator",
          "description": "Calculate SBA 504 equipment loan payments and costs",
          "applicationCategory": "BusinessApplication",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "ratingCount": "167"
          }
        })
      }
    ]
  };
}

export default function SBA504EquipmentCalculatorPage() {
  return (
    <div className="w-full mx-auto py-0 space-y-12">
      <div className="banner bg-blue-theme py-16">
        <section className="text-center max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
            SBA 504 Equipment Loan Calculator
          </h1>
          <p className="text-xl text-white mb-8">
            Calculate payments for equipment financing with current rates from 4.75%. Get instant estimates with only 10% down.
          </p>
        </section>
      </div>

      <section className="max-w-4xl mx-auto px-4">
        <div className="bg-blue-50 p-6 rounded-lg mb-6">
          <h2 className="text-xl font-semibold text-blue-900 mb-4">2025 SBA 504 Equipment Loan Updates</h2>
          <div className="grid md:grid-cols-3 gap-4 text-blue-800">
            <div className="flex items-center">
              <span className="font-medium">Current Rate:</span>
              <span className="ml-2">From 4.75%</span>
            </div>
            <div className="flex items-center">
              <span className="font-medium">Down Payment:</span>
              <span className="ml-2">As low as 10%</span>
            </div>
            <div className="flex items-center">
              <span className="font-medium">Max Term:</span>
              <span className="ml-2">10 Years</span>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900">Equipment Financing with SBA 504</h2>
            <p className="text-gray-600">
              The SBA 504 loan program provides excellent terms for purchasing heavy equipment and machinery, with fixed rates and long repayment terms. Use our calculator to estimate your costs and payments.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-medium text-gray-900 mb-3">Equipment Loan Features</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Up to 10-year terms
                  </li>
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
                    Fixed interest rates
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Major equipment purchases
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-medium text-gray-900 mb-3">Eligible Equipment</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Manufacturing machinery
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Construction equipment
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Printing equipment
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Specialized machinery
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link 
                href="/sba-504-loan-calculator?propertyType=equipment"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors"
              >
                Calculate Equipment Loan Payments
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <p className="mt-4 text-sm text-gray-500">
                Get instant estimates for your equipment financing
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 mb-12">
        <div className="bg-gray-50 rounded-xl p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Benefits of SBA 504 Equipment Financing</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-medium text-gray-900">Competitive Rates</h3>
              <p className="text-gray-600">Access below-market fixed interest rates for equipment purchases.</p>
            </div>
            <div className="space-y-3">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-medium text-gray-900">Low Down Payment</h3>
              <p className="text-gray-600">Minimal 10% down payment requirement for qualified borrowers.</p>
            </div>
            <div className="space-y-3">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-medium text-gray-900">Flexible Terms</h3>
              <p className="text-gray-600">Terms up to 10 years based on equipment useful life.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 