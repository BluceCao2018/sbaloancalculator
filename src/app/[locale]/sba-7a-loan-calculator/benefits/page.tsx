import React from 'react';

export async function generateMetadata() {
  return {
    title: 'SBA 7(a) Loan Benefits: Advantages & Key Features',
    description: 'Discover key SBA 7(a) loan benefits including flexible use of funds, competitive rates, and longer repayment terms. Learn why SBA 7(a) loans are ideal for small businesses.',
  };
}

export default function SBA7aBenefitsPage() {
  return (
    <div className="w-full mx-auto py-8 space-y-12 max-w-4xl">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
          SBA 7(a) Loan Benefits
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Discover why SBA 7(a) loans are the most popular SBA loan program for small businesses
        </p>
      </section>

      {/* Key Benefits Overview */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-6">Core Benefits of SBA 7(a) Loans</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-3">Flexible Use of Funds</h3>
            <p className="text-gray-700">
              SBA 7(a) loans offer unmatched flexibility in how you can use the funds. From working 
              capital to equipment purchase, real estate, or business acquisition, these loans 
              adapt to your needs.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-3">Lower Down Payments</h3>
            <p className="text-gray-700">
              With SBA 7(a) loans, you can secure financing with as little as 10% down payment, 
              compared to 20-30% typically required for conventional loans.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Benefits */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-6">Key Advantages</h2>
        <div className="prose prose-lg max-w-none">
          <h3>Competitive Interest Rates</h3>
          <p>
            SBA 7(a) loans feature competitive interest rates that are regulated by the SBA:
          </p>
          <ul>
            <li>Rates based on prime rate, LIBOR, or SBA peg rate</li>
            <li>Maximum spread limits protect borrowers</li>
            <li>Both fixed and variable rate options available</li>
            <li>Generally lower than conventional commercial loans</li>
          </ul>

          <h3>Longer Repayment Terms</h3>
          <p>
            Benefit from extended repayment periods that improve cash flow:
          </p>
          <ul>
            <li>Up to 25 years for real estate</li>
            <li>Up to 10 years for equipment</li>
            <li>Up to 10 years for working capital</li>
            <li>Lower monthly payments due to longer terms</li>
          </ul>
        </div>
      </section>

      {/* Additional Benefits */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-6">Additional SBA 7(a) Loan Benefits</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-3">No Balloon Payments</h3>
            <p className="text-gray-700">
              SBA 7(a) loans feature fully amortizing terms, eliminating the stress of balloon 
              payments at the end of the loan term.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-3">No Prepayment Penalties</h3>
            <p className="text-gray-700">
              Pay off your SBA 7(a) loan early without incurring prepayment penalties on loans 
              with terms under 15 years.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-3">Ongoing Support</h3>
            <p className="text-gray-700">
              Access to SBA resources and counseling throughout the life of your loan to help 
              ensure business success.
            </p>
          </div>
        </div>
      </section>

      {/* Business Impact */}
      <section className="bg-gray-50 rounded-lg p-8">
        <h2 className="text-3xl font-bold mb-6">Impact on Your Business</h2>
        <div className="prose prose-lg max-w-none">
          <ul>
            <li>Improved cash flow through longer terms and lower payments</li>
            <li>Greater financial flexibility with multiple use options</li>
            <li>Ability to preserve working capital with lower down payments</li>
            <li>Protection from market fluctuations with regulated rates</li>
            <li>Support for both short-term and long-term growth plans</li>
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Explore SBA 7(a) Loan Options?</h2>
        <p className="text-lg mb-6">
          Use our calculator to estimate payments and see how these benefits can work for your business.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
          Calculate SBA 7(a) Loan Payments
        </button>
      </section>
    </div>
  );
} 