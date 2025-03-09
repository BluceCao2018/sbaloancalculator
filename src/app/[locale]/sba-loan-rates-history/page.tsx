import React from 'react';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata() {
  const t = await getTranslations('website');
  
  return {
    title: 'SBA Loan Rate History: 504 & 7(a) Rate History Chart (2019-2025)',
    description: 'Track SBA loan rate history from 2019-2025. View historical 504 and 7(a) interest rates, analyze trends, and compare quarterly changes.',
    alternates: {
      canonical: `${t('domain')}/historical-sba-loan-rates`
    },
    openGraph: {
      title: 'SBA Loan Rate History: 504 & 7(a) Rate History Chart (2019-2025)',
      description: 'Track SBA loan rate history from 2019-2025. View historical 504 and 7(a) interest rates, analyze trends, and compare quarterly changes.',
      type: 'website',
    }
  };
}

export default function HistoricalSBALoanRatesPage() {
  return (
    <div className="w-full mx-auto space-y-12">
      <div className="banner bg-blue-theme py-16">
        <section className="text-center max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
             SBA Loan Rate History (2019-2025)
          </h1>
          <p className="text-xl text-white mb-8">
            Track SBA loan rate trends over time. Compare historical rates and analyze market changes 
            for both 504 and 7(a) programs.
          </p>
        </section>
      </div>

      <div className="px-4 sm:px-6 lg:px-8">
        {/* Rate History Overview */}
        <section className="max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-8">SBA Loan Rate History Overview</h2>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="mb-8">
              {/* 这里可以放置一个图表组件 */}
              <div className="h-80 bg-gray-50 rounded-lg mb-4">
                [SBA Loan Rate History Chart 2019-2025]
              </div>
              <p className="text-sm text-gray-600 text-center">
                 SBA loan rate history from 2019 to present
              </p>
            </div>
          </div>
        </section>

        {/* Quarterly Rate History */}
        <section className="max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-8">Quarterly SBA Loan Rate History</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-semibold mb-4">504 Loan Rate History</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b pb-2">
                  <span>Q1 2025:</span>
                  <span className="font-semibold">4.75%</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span>Q4 2023:</span>
                  <span className="font-semibold">4.88%</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span>Q3 2023:</span>
                  <span className="font-semibold">5.02%</span>
                </div>
                {/* Additional quarters... */}
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-semibold mb-4">7(a) Loan Rate History</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b pb-2">
                  <span>Q1 2025:</span>
                  <span className="font-semibold">9.00%</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span>Q4 2023:</span>
                  <span className="font-semibold">9.25%</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span>Q3 2023:</span>
                  <span className="font-semibold">9.50%</span>
                </div>
                {/* Additional quarters... */}
              </div>
            </div>
          </div>
        </section>

        {/* Market Analysis */}
        <section className="max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-8">Historical Rate Analysis</h2>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <p className="mb-4">
              SBA loan rates have shown significant fluctuation over the past five years. The 504 program 
              has maintained relatively stable rates, while 7(a) rates have followed broader market trends.
            </p>
            <p className="mb-4">
              Key historical trends include:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Post-pandemic rate adjustments in 2021</li>
              <li>Gradual rate increases throughout 2022</li>
              <li>Rate stabilization in late 2023</li>
              <li>Recent downward trend in early 2024</li>
            </ul>
            <p className="mt-6">
              <Link href="/current-sba-loan-rates" 
                    className="text-blue-600 hover:text-blue-800 inline-flex items-center">
                Check today's current SBA loan rates 
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Compare Current Rates</h2>
          <p className="text-xl text-gray-600 mb-8">
            See how today's rates compare to historical trends
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/current-sba-loan-rates"
                  className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              View Current Rates
            </Link>
            <Link href="/sba-504-loan-calculator"
                  className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Calculate Payments
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
} 