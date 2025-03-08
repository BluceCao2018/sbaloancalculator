import React from 'react';

export async function generateMetadata() {
  return {
    title: 'SBA 504 Loan vs Other Financing: Complete Comparison Guide',
    description: 'Compare SBA 504 loans with traditional commercial loans, SBA 7(a) loans, and other financing options. Find the best choice for your business.',
  };
}

export default function SBA504Comparison() {
  return (
    <div className="w-full mx-auto py-8 space-y-12 max-w-4xl">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
          SBA 504 Loan vs Other Financing Options
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Compare SBA 504 loans with other business financing solutions to find your best option
        </p>
      </section>

      {/* Quick Comparison Table */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-6">Quick Comparison Overview</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg shadow-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Features</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">SBA 504 Loan</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Traditional Commercial</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">SBA 7(a) Loan</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 text-sm text-gray-900">Down Payment</td>
                <td className="px-6 py-4 text-sm text-gray-600">10-15%</td>
                <td className="px-6 py-4 text-sm text-gray-600">20-30%</td>
                <td className="px-6 py-4 text-sm text-gray-600">10-20%</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm text-gray-900">Interest Rates</td>
                <td className="px-6 py-4 text-sm text-gray-600">Fixed, Below Market</td>
                <td className="px-6 py-4 text-sm text-gray-600">Variable, Market Rate</td>
                <td className="px-6 py-4 text-sm text-gray-600">Variable or Fixed</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm text-gray-900">Term Length</td>
                <td className="px-6 py-4 text-sm text-gray-600">10-25 years</td>
                <td className="px-6 py-4 text-sm text-gray-600">5-15 years</td>
                <td className="px-6 py-4 text-sm text-gray-600">Up to 25 years</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Detailed Comparisons */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-6">Detailed Comparisons</h2>
        
        {/* SBA 504 vs Traditional Commercial */}
        <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
          <h3 className="text-xl font-semibold mb-4">SBA 504 Loan vs Traditional Commercial Loan</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">SBA 504 Advantages</h4>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Lower down payment (10%)</li>
                <li>Fixed interest rates</li>
                <li>Longer repayment terms</li>
                <li>Below-market interest rates</li>
                <li>Multiple projects eligible</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Traditional Loan Advantages</h4>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Faster approval process</li>
                <li>Less paperwork</li>
                <li>No government restrictions</li>
                <li>More flexible terms</li>
                <li>No job creation requirement</li>
              </ul>
            </div>
          </div>
        </div>

        {/* SBA 504 vs SBA 7(a) */}
        <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
          <h3 className="text-xl font-semibold mb-4">SBA 504 Loan vs SBA 7(a) Loan</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">SBA 504 Best For</h4>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Real estate purchase</li>
                <li>Major equipment acquisition</li>
                <li>Long-term fixed assets</li>
                <li>Construction projects</li>
                <li>Building improvements</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">SBA 7(a) Best For</h4>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Working capital</li>
                <li>Inventory purchase</li>
                <li>Business acquisition</li>
                <li>Debt refinancing</li>
                <li>General business purposes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-6">When to Choose Each Option</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-3">Choose SBA 504 When:</h3>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Purchasing commercial real estate</li>
              <li>Buying heavy equipment</li>
              <li>Need long-term fixed rates</li>
              <li>Want lowest down payment</li>
              <li>Can wait for approval</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-3">Choose Traditional When:</h3>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Need quick funding</li>
              <li>Want flexible terms</li>
              <li>Have strong financials</li>
              <li>Can make larger down payment</li>
              <li>Need simpler process</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-3">Choose SBA 7(a) When:</h3>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Need working capital</li>
              <li>Want to buy a business</li>
              <li>Need inventory funding</li>
              <li>Want to refinance debt</li>
              <li>Need flexible use of funds</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Cost Comparison Example */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-6">Cost Comparison Example</h2>
        <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
          <h3 className="text-xl font-semibold mb-4">$1 Million Project Comparison</h3>
          <div className="prose prose-lg max-w-none">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th>Cost Factor</th>
                  <th>SBA 504</th>
                  <th>Traditional</th>
                  <th>SBA 7(a)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Down Payment</td>
                  <td>$100,000</td>
                  <td>$250,000</td>
                  <td>$150,000</td>
                </tr>
                <tr>
                  <td>Monthly Payment*</td>
                  <td>$5,200</td>
                  <td>$7,100</td>
                  <td>$6,300</td>
                </tr>
                <tr>
                  <td>Term Length</td>
                  <td>25 years</td>
                  <td>15 years</td>
                  <td>25 years</td>
                </tr>
              </tbody>
            </table>
            <p className="text-sm text-gray-600 mt-2">
              *Estimated payments based on current market rates. Actual rates and payments may vary.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Compare Your Options</h2>
        <p className="text-lg mb-6">
          Use our calculator to see how an SBA 504 loan compares to other financing options for your specific needs.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
          Try Our SBA 504 Loan Calculator
        </button>
      </section>
    </div>
  );
} 