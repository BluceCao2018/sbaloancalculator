import React from 'react';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata() {
  return {
    title: 'SBA 504 Loan Benefits: Low Rates, Long Terms & Real Estate Advantages',
    description: 'Discover key SBA 504 loan benefits including low down payments, fixed rates, and longer repayment terms. Learn why SBA 504 loans are ideal for commercial real estate.',
  };
}

export default async function SBA504BenefitsPage() {
  return (
    <div className="w-full mx-auto py-8 space-y-12 max-w-4xl">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
          SBA 504 Loan Benefits
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Discover why SBA 504 loans are the preferred choice for small business real estate and equipment financing
        </p>
      </section>

      {/* Key Benefits Overview */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-6">Core Benefits of SBA 504 Loans</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-3">Low Down Payment</h3>
            <p className="text-gray-700">
              SBA 504 loans typically require only 10% down payment, compared to 20-30% with conventional commercial loans. 
              This lower requirement helps preserve your working capital for business operations.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-3">Fixed Interest Rates</h3>
            <p className="text-gray-700">
              The CDC portion of SBA 504 loans offers fixed rates for the entire term, providing 
              predictable payments and protection against future rate increases.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-3">Long Repayment Terms</h3>
            <p className="text-gray-700">
              With terms up to 25 years for real estate and 10 years for equipment, SBA 504 loans 
              offer longer repayment periods than most conventional financing options.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-3">Below-Market Rates</h3>
            <p className="text-gray-700">
              SBA 504 loans typically offer interest rates below market rates, making them an 
              attractive option for long-term fixed asset financing.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Benefits */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-6">Additional SBA 504 Loan Advantages</h2>
        
        <div className="prose prose-lg max-w-none">
          <h3>Real Estate Ownership Benefits</h3>
          <p>
            SBA 504 loans are particularly advantageous for real estate purchases:
          </p>
          <ul>
            <li>Build equity in your commercial property instead of paying rent</li>
            <li>Lock in occupancy costs for the long term</li>
            <li>Potential tax benefits from property ownership</li>
            <li>Option to lease excess space for additional income</li>
          </ul>

          <h3>Equipment Financing Advantages</h3>
          <p>
            For major equipment purchases, SBA 504 loans offer:
          </p>
          <ul>
            <li>Up to 90% financing for new equipment</li>
            <li>Fixed rates for the entire term</li>
            <li>Longer terms than typical equipment loans</li>
            <li>Ability to finance installation and soft costs</li>
          </ul>
        </div>
      </section>

      {/* Special Benefits */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-6">Special Program Benefits</h2>
        <div className="prose prose-lg max-w-none">
          <h3>Green Energy Benefits</h3>
          <p>
            Projects that include energy efficiency improvements may qualify for:
          </p>
          <ul>
            <li>Higher loan amounts</li>
            <li>Reduced fees</li>
            <li>Special interest rates</li>
            <li>Additional CDC support</li>
          </ul>

          <h3>Job Creation Benefits</h3>
          <p>
            Businesses that create or retain jobs may receive:
          </p>
          <ul>
            <li>Priority processing</li>
            <li>Reduced equity requirements</li>
            <li>Additional support services</li>
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Explore SBA 504 Loan Options?</h2>
        <p className="text-lg mb-6">
          Use our SBA 504 loan calculator to estimate payments and see how these benefits 
          can work for your business.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
          Calculate SBA 504 Loan Payments
        </button>
      </section>
    </div>
  );
} 