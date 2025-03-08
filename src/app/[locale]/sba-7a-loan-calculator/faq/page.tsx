import React from 'react';

export async function generateMetadata() {
  return {
    title: 'SBA 7(a) Loan FAQ: Common Questions & Expert Answers',
    description: 'Find answers to frequently asked questions about SBA 7(a) loans. Learn about eligibility, rates, terms, and application process from expert sources.',
  };
}

export default function SBA7aFAQ() {
  return (
    <div className="w-full mx-auto py-8 space-y-12 max-w-4xl">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
          SBA 7(a) Loan Frequently Asked Questions
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Expert answers to common questions about SBA 7(a) loans
        </p>
      </section>

      {/* Basic Questions */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-6">General SBA 7(a) Loan Questions</h2>
        <div className="space-y-6">
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-3">What is an SBA 7(a) loan?</h3>
            <p className="text-gray-700">
              An SBA 7(a) loan is the SBA's primary program for providing financial assistance to 
              small businesses. These loans can be used for most business purposes, including working 
              capital, equipment, real estate, and business acquisition.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-3">How much can I borrow with an SBA 7(a) loan?</h3>
            <p className="text-gray-700">
              SBA 7(a) loans can go up to $5 million. The actual amount you can borrow depends on:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mt-2">
              <li>Business needs</li>
              <li>Ability to repay</li>
              <li>Business type</li>
              <li>Available collateral</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Eligibility Questions */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-6">Eligibility Requirements</h2>
        <div className="space-y-6">
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-3">Who qualifies for an SBA 7(a) loan?</h3>
            <p className="text-gray-700">
              Basic eligibility requirements include:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mt-2">
              <li>Operating for-profit business</li>
              <li>Located in the United States</li>
              <li>Owner invested equity</li>
              <li>Used alternative financial resources first</li>
              <li>Demonstrated ability to repay</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-3">What credit score is needed?</h3>
            <p className="text-gray-700">
              While the SBA doesn't set a minimum credit score, most lenders prefer:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mt-2">
              <li>Personal credit score of 680+</li>
              <li>Clean credit history</li>
              <li>No recent bankruptcies</li>
              <li>No defaults on government loans</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Terms and Rates */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-6">Terms and Rates</h2>
        <div className="space-y-6">
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-3">What are typical SBA 7(a) loan terms?</h3>
            <p className="text-gray-700">
              Loan terms vary by use:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mt-2">
              <li>Working capital: Up to 10 years</li>
              <li>Equipment: Up to 10 years</li>
              <li>Real estate: Up to 25 years</li>
              <li>Business acquisition: Up to 10 years</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-3">What are current interest rates?</h3>
            <p className="text-gray-700">
              SBA 7(a) loan rates are based on:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mt-2">
              <li>Base rate (Prime, LIBOR, or SBA peg rate)</li>
              <li>Loan amount</li>
              <li>Loan term</li>
              <li>Maximum spread set by SBA</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-6">Application Process</h2>
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <h3 className="text-xl font-semibold mb-3">How long does approval take?</h3>
          <p className="text-gray-700">
            Typical timeline from application to funding:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mt-2">
            <li>Express loans: 36 hours for SBA review</li>
            <li>Standard loans: 5-10 business days for SBA review</li>
            <li>Total process: 30-90 days average</li>
            <li>Varies by lender and application completeness</li>
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Have More Questions About SBA 7(a) Loans?</h2>
        <p className="text-lg mb-6">
          Use our calculator to estimate payments and explore your options.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
          Calculate SBA 7(a) Loan Payments
        </button>
      </section>
    </div>
  );
} 