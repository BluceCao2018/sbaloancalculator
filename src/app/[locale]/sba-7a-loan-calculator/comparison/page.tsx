import React from 'react';

export async function generateMetadata() {
  return {
    title: 'SBA 7(a) Loan vs Other Financing: Complete Comparison Guide',
    description: 'Compare SBA 7(a) loans with traditional commercial loans, SBA 504 loans, and other financing options. Find the best choice for your business.',
  };
}

export default function SBA7aComparison() {
  return (
    <div className="w-full mx-auto py-8 space-y-12 max-w-4xl">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
          SBA 7(a) Loan vs Other Financing Options
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Compare SBA 7(a) loans with other business financing solutions to find your best option
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
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">SBA 7(a) Loan</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Traditional Bank Loan</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">SBA 504 Loan</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4">Maximum Amount</td>
                <td className="px-6 py-4">$5 million</td>
                <td className="px-6 py-4">Varies</td>
                <td className="px-6 py-4">$5.5 million</td>
              </tr>
              <tr>
                <td className="px-6 py-4">Down Payment</td>
                <td className="px-6 py-4">10-20%</td>
                <td className="px-6 py-4">20-30%</td>
                <td className="px-6 py-4">10%</td>
              </tr>
              <tr>
                <td className="px-6 py-4">Terms</td>
                <td className="px-6 py-4">Up to 25 years</td>
                <td className="px-6 py-4">3-10 years</td>
                <td className="px-6 py-4">10-25 years</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Detailed Comparisons */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-6">Detailed Comparisons</h2>
        
        {/* SBA 7(a) vs Traditional */}
        <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
          <h3 className="text-xl font-semibold mb-4">SBA 7(a) vs Traditional Bank Loans</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">SBA 7(a) Advantages</h4>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Lower down payment requirements</li>
                <li>Longer repayment terms</li>
                <li>More flexible credit requirements</li>
                <li>Multiple use options</li>
                <li>Government guarantee</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Traditional Loan Advantages</h4>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Faster approval process</li>
                <li>Less paperwork</li>
                <li>No SBA fees</li>
                <li>More flexible terms</li>
                <li>Direct bank relationship</li>
              </ul>
            </div>
          </div>
        </div>

        {/* SBA 7(a) vs SBA 504 */}
        <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
          <h3 className="text-xl font-semibold mb-4">SBA 7(a) vs SBA 504 Loans</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">SBA 7(a) Best For</h4>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Working capital needs</li>
                <li>Multiple use purposes</li>
                <li>Business acquisition</li>
                <li>Inventory purchase</li>
                <li>Debt refinancing</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">SBA 504 Best For</h4>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Real estate purchase</li>
                <li>Major equipment purchase</li>
                <li>Building construction</li>
                <li>Land acquisition</li>
                <li>Building renovation</li>
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
            <h3 className="text-xl font-semibold mb-3">Choose SBA 7(a) When:</h3>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Need working capital</li>
              <li>Want flexible use of funds</li>
              <li>Purchasing a business</li>
              <li>Refinancing debt</li>
              <li>Multiple funding purposes</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-3">Choose Traditional When:</h3>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Strong credit history</li>
              <li>Need quick funding</li>
              <li>Have sufficient collateral</li>
              <li>Want simpler process</li>
              <li>Can make larger down payment</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-3">Choose SBA 504 When:</h3>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Buying commercial property</li>
              <li>Major equipment purchase</li>
              <li>Want lowest down payment</li>
              <li>Need longest terms</li>
              <li>Fixed-rate preference</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Compare Your Options</h2>
        <p className="text-lg mb-6">
          Use our calculator to see how an SBA 7(a) loan compares to other financing options for your specific needs.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
          Try Our SBA 7(a) Loan Calculator
        </button>
      </section>
    </div>
  );
} 