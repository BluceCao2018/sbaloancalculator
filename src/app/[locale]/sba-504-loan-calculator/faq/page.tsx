import React from 'react';

export async function generateMetadata() {
  return {
    title: 'SBA 504 Loan FAQ: Common Questions & Expert Answers',
    description: 'Find answers to frequently asked questions about SBA 504 loans. Learn about eligibility, rates, terms, and application process from expert sources.',
  };
}

export default function SBA504FAQ() {
  return (
    <div className="w-full mx-auto py-8 space-y-12 max-w-4xl">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
          SBA 504 Loan Frequently Asked Questions
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Expert answers to common questions about SBA 504 loans
        </p>
      </section>

      {/* Basic Questions */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-6">General SBA 504 Loan Questions</h2>
        <div className="space-y-6">
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-3">What is an SBA 504 loan?</h3>
            <p className="text-gray-700">
              An SBA 504 loan is a commercial real estate and equipment financing program that combines a 
              conventional bank loan with a CDC loan, backed by the Small Business Administration. It's 
              designed to help small businesses purchase fixed assets with long-term, fixed-rate financing.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-3">What can I use an SBA 504 loan for?</h3>
            <p className="text-gray-700">
              SBA 504 loans can be used for:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mt-2">
              <li>Purchasing commercial real estate</li>
              <li>Constructing new facilities</li>
              <li>Renovating existing buildings</li>
              <li>Buying long-term machinery and equipment</li>
              <li>Refinancing certain existing business debts</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-3">How much can I borrow with an SBA 504 loan?</h3>
            <p className="text-gray-700">
              The SBA portion of a 504 loan can go up to $5.5 million, and there's no limit on the total 
              project size. The typical structure is:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mt-2">
              <li>50% from a conventional lender</li>
              <li>40% from the CDC (backed by SBA)</li>
              <li>10% down payment from the borrower</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Eligibility Questions */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-6">Eligibility and Requirements</h2>
        <div className="space-y-6">
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-3">Who qualifies for an SBA 504 loan?</h3>
            <p className="text-gray-700">
              Basic eligibility requirements include:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mt-2">
              <li>For-profit business operation</li>
              <li>Net worth under $15 million</li>
              <li>Average net income under $5 million after taxes</li>
              <li>Ability to repay the loan from cash flow</li>
              <li>Good character and credit history</li>
              <li>Management expertise and commitment</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-3">What credit score do I need?</h3>
            <p className="text-gray-700">
              While there's no strict minimum credit score requirement, most lenders prefer:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mt-2">
              <li>Personal credit score of 650 or higher</li>
              <li>Business credit score showing good payment history</li>
              <li>No recent bankruptcies or foreclosures</li>
              <li>No current delinquencies on federal debt</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Process Questions */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-6">Application and Process</h2>
        <div className="space-y-6">
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-3">How long does the approval process take?</h3>
            <p className="text-gray-700">
              The typical timeline from application to funding is 3-6 months:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mt-2">
              <li>Initial application review: 2-3 weeks</li>
              <li>Underwriting process: 4-6 weeks</li>
              <li>SBA approval: 5-8 weeks</li>
              <li>Closing process: 2-3 weeks</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-3">What documents are required?</h3>
            <p className="text-gray-700">
              Key required documents include:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mt-2">
              <li>Business and personal tax returns (3 years)</li>
              <li>Financial statements and projections</li>
              <li>Business plan and history</li>
              <li>Personal financial statement</li>
              <li>Real estate documentation (if applicable)</li>
              <li>Environmental studies (if required)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Have More Questions About SBA 504 Loans?</h2>
        <p className="text-lg mb-6">
          Use our calculator to estimate payments and explore your financing options.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
          Calculate SBA 504 Loan Payments
        </button>
      </section>
    </div>
  );
} 