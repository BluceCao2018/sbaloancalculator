import React from 'react';

export async function generateMetadata() {
  return {
    title: 'SBA 504 Loan Rates & Fees: Current Interest Rates and Cost Guide',
    description: 'Comprehensive guide to SBA 504 loan interest rates and associated fees. Learn about current rates, fee structures, and total cost considerations.',
  };
}

export default function SBA504RatesAndFees() {
  return (
    <div className="w-full mx-auto py-8 space-y-12 max-w-4xl">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
          SBA 504 Loan Rates and Fees Guide
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Understanding current interest rates, fee structures, and total costs of SBA 504 loans
        </p>
      </section>

      {/* Current Rates Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-6">Current SBA 504 Loan Interest Rates</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-3">CDC/SBA Portion (40%)</h3>
            <p className="text-gray-700 mb-4">
              The CDC portion features fixed rates based on:
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Current market rate for 5 and 10-year U.S. Treasury issues</li>
              <li>Fixed for the entire loan term</li>
              <li>Typically lower than conventional commercial rates</li>
              <li>Rate set at time of debenture sale</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-3">Bank Portion (50%)</h3>
            <p className="text-gray-700 mb-4">
              The bank portion rates are:
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Negotiated with the lender</li>
              <li>Can be fixed or variable</li>
              <li>Based on Prime rate or LIBOR</li>
              <li>Market competitive rates</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Fee Structure Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-6">SBA 504 Loan Fee Structure</h2>
        <div className="space-y-6">
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-3">One-Time Fees</h3>
            <div className="prose prose-lg max-w-none">
              <ul>
                <li><strong>CDC Processing Fee:</strong> Typically 1.5% of CDC portion</li>
                <li><strong>SBA Guarantee Fee:</strong> 0.5% of debenture</li>
                <li><strong>Funding Fee:</strong> 0.25% of debenture</li>
                <li><strong>Attorney Fees:</strong> Varies by location and complexity</li>
                <li><strong>Title Insurance:</strong> Required for real estate</li>
                <li><strong>Appraisal Fees:</strong> Required for real estate</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-3">Ongoing Fees</h3>
            <div className="prose prose-lg max-w-none">
              <ul>
                <li><strong>CDC Servicing Fee:</strong> 0.625% to 2% annually</li>
                <li><strong>Central Servicing Fee:</strong> 0.1% annually</li>
                <li><strong>SBA Guarantee Fee:</strong> 0.125% annually</li>
                <li><strong>Bank Servicing Fees:</strong> Varies by lender</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Examples Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-6">Sample Cost Breakdown</h2>
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <h3 className="text-xl font-semibold mb-3">Example for $1 Million Project</h3>
          <div className="prose prose-lg max-w-none">
            <ul>
              <li><strong>Bank Portion (50%):</strong> $500,000</li>
              <li><strong>CDC Portion (40%):</strong> $400,000</li>
              <li><strong>Down Payment (10%):</strong> $100,000</li>
              <li><strong>Estimated One-Time Fees:</strong> $15,000 - $20,000</li>
              <li><strong>Annual Ongoing Fees:</strong> $4,000 - $6,000</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Factors Affecting Rates */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-6">Factors Affecting SBA 504 Loan Rates</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-3">Business Factors</h3>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Credit score and history</li>
              <li>Time in business</li>
              <li>Industry type</li>
              <li>Collateral quality</li>
              <li>Cash flow strength</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-3">Market Factors</h3>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Current Treasury rates</li>
              <li>Federal Reserve policy</li>
              <li>Market conditions</li>
              <li>Local economic factors</li>
              <li>Competition among lenders</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Calculate Your SBA 504 Loan Payments</h2>
        <p className="text-lg mb-6">
          Use our calculator to estimate payments based on current rates and your project needs.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
          Try Our SBA 504 Loan Calculator
        </button>
      </section>
    </div>
  );
} 