import React from 'react';

export async function generateMetadata() {
  return {
    title: 'SBA 7(a) Loan Rates & Fees: Current Interest Rates and Cost Guide',
    description: 'Comprehensive guide to SBA 7(a) loan interest rates and associated fees. Learn about current rates, fee structures, and total cost considerations.',
  };
}

export default function SBA7aRatesAndFees() {
  return (
    <div className="w-full mx-auto py-8 space-y-12 max-w-4xl">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
          SBA 7(a) Loan Rates and Fees Guide
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Understanding current interest rates, fee structures, and total costs of SBA 7(a) loans
        </p>
      </section>

      {/* Interest Rates Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-6">Current SBA 7(a) Loan Interest Rates</h2>
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <h3 className="text-xl font-semibold mb-3">Base Rate Options</h3>
          <div className="prose prose-lg max-w-none">
            <p>SBA 7(a) loan interest rates are calculated using one of these base rates:</p>
            <ul>
              <li><strong>Prime Rate:</strong> Most common base rate</li>
              <li><strong>LIBOR Rate:</strong> Alternative for some lenders</li>
              <li><strong>SBA Peg Rate:</strong> Published quarterly</li>
            </ul>
            <p>Maximum rates are determined by:</p>
            <ul>
              <li>Loan amount</li>
              <li>Loan maturity</li>
              <li>Base rate used</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Rate Structure */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-6">Rate Structure</h2>
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <h3 className="text-xl font-semibold mb-3">Maximum Interest Rates</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Loan Amount</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Max Rate (Maturity &lt; 7 years)</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Max Rate (Maturity &ge; 7 years)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4">Up to $25,000</td>
                  <td className="px-6 py-4">Base + 4.25%</td>
                  <td className="px-6 py-4">Base + 4.75%</td>
                </tr>
                <tr>
                  <td className="px-6 py-4">$25,001 - $50,000</td>
                  <td className="px-6 py-4">Base + 3.25%</td>
                  <td className="px-6 py-4">Base + 3.75%</td>
                </tr>
                <tr>
                  <td className="px-6 py-4">Over $50,000</td>
                  <td className="px-6 py-4">Base + 2.25%</td>
                  <td className="px-6 py-4">Base + 2.75%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-6">SBA 7(a) Loan Fees</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-3">Guarantee Fees</h3>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Loans up to $150,000: 2%</li>
              <li>$150,001 to $700,000: 3%</li>
              <li>$700,001 to $5 million: 3.5%</li>
              <li>Additional 0.25% on guaranteed portion over $1 million</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-3">Other Fees</h3>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Packaging fees (if applicable)</li>
              <li>Appraisal and environmental fees</li>
              <li>Credit report fees</li>
              <li>UCC filing fees</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Annual Costs */}
      <section className="bg-gray-50 rounded-lg p-8">
        <h2 className="text-3xl font-bold mb-6">Annual Cost Considerations</h2>
        <div className="prose prose-lg max-w-none">
          <ul>
            <li><strong>Servicing Fees:</strong> May apply annually</li>
            <li><strong>Late Payment Fees:</strong> If payments are missed</li>
            <li><strong>Prepayment Penalties:</strong> None for terms under 15 years</li>
            <li><strong>Insurance Requirements:</strong> Various coverage required</li>
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Calculate Your SBA 7(a) Loan Costs</h2>
        <p className="text-lg mb-6">
          Use our calculator to estimate payments based on current rates and your loan needs.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
          Try Our SBA 7(a) Loan Calculator
        </button>
      </section>
    </div>
  );
} 