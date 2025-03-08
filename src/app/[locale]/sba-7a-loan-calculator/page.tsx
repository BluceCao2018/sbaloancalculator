import React from 'react';
import { getTranslations } from 'next-intl/server';
import { SBA7aCalculator } from '@/components/calculators/SBA7aCalculator';
import Link from 'next/link';

export async function generateMetadata() {
  const w = await getTranslations('website');
  return {
    title: 'Free SBA 7(a) Loan Calculator 2025: Rates from Prime + 2.25%',
    description: 'Calculate SBA 7(a) loan payments with current rates from Prime + 2.25%. Free working capital & business loan calculator. Updated daily.',
    alternates: {
      canonical: `${w("domain")}/sba-7a-loan-calculator`
    }
  };
}

export default async function SBA7aCalculatorPage() {
  return (
    <div className="w-full mx-auto py-8 space-y-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto">
        <div className="mb-6">
          <Link 
            href="/"
            className="text-blue-600 hover:text-blue-700 inline-flex items-center"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Calculator Selection
          </Link>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
          SBA 7(a) Loan Calculator
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Calculate monthly payments and total costs for your SBA 7(a) loan. Perfect for planning working capital,
          equipment purchases, and real estate investments.
        </p>
      </section>

      {/* Calculator Section */}
      <section className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-6 sm:p-8">
        <SBA7aCalculator />
      </section>

      {/* Information Section */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">About SBA 7(a) Loans</h2>
        <div className="prose prose-lg max-w-none">
          <p>
            The SBA 7(a) loan program is the SBA's primary program for providing financial assistance to small businesses.
            These loans can be used for:
          </p>
          <ul>
            <li>Working capital</li>
            <li>Equipment purchases</li>
            <li>Real estate acquisition</li>
            <li>Business expansion</li>
            <li>Debt refinancing</li>
          </ul>
          <h3>Key Features of SBA 7(a) Loans:</h3>
          <ul>
            <li>Loan amounts up to $5 million</li>
            <li>Terms up to 25 years for real estate</li>
            <li>Terms up to 10 years for equipment and working capital</li>
            <li>Competitive interest rates</li>
            <li>Lower down payments than conventional loans</li>
          </ul>
          <p>
            Use our calculator above to estimate your monthly payments and understand the total cost of your SBA 7(a) loan.
            Remember that actual terms and rates may vary based on your business qualifications and lender requirements.
          </p>
        </div>
      </section>

      {/* Policy Interpretation Section */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">SBA 7(a) Loan Policy Guidelines</h2>
        <div className="prose prose-lg max-w-none">
          <h3>Eligibility Requirements</h3>
          <p>
            The SBA 7(a) loan program has specific eligibility criteria that businesses must meet:
          </p>
          <ul>
            <li>Must operate for profit in the United States</li>
            <li>Meet SBA size standards for small business</li>
            <li>Have reasonable owner equity to invest</li>
            <li>Demonstrate good character and credit history</li>
            <li>Show ability to repay the loan from business cash flow</li>
          </ul>

          <h3>Interest Rate Structure</h3>
          <p>
            SBA 7(a) loans feature regulated interest rates that may be fixed or variable:
          </p>
          <ul>
            <li>Base rate: Prime rate, LIBOR, or SBA peg rate</li>
            <li>Maximum spread: 2.25% to 2.75% over base rate for most loans</li>
            <li>Rates may vary based on loan size and term length</li>
            <li>Negotiable with lender within SBA guidelines</li>
          </ul>

          <h3>2025 Program Updates</h3>
          <p>
            Recent changes to the SBA 7(a) program include:
          </p>
          <ul>
            <li>Increased maximum loan amounts for specific industries</li>
            <li>Enhanced terms for working capital loans</li>
            <li>Simplified application process for loans under $350,000</li>
            <li>Special provisions for veteran-owned businesses</li>
          </ul>
        </div>
      </section>

      {/* Calculator Usage Guide Section */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">How to Use the SBA 7(a) Loan Calculator</h2>
        <div className="prose prose-lg max-w-none">
          <p>
            Our SBA 7(a) Loan Calculator helps you estimate monthly payments and total costs. 
            Follow these steps for accurate calculations:
          </p>
          <ol>
            <li>
              <strong>Enter Loan Amount</strong>: Input your desired loan amount into the calculator. 
              Remember that SBA 7(a) loans can go up to $5 million.
            </li>
            <li>
              <strong>Select Loan Term</strong>: Choose your loan term based on use:
              <ul>
                <li>Up to 25 years for real estate</li>
                <li>Up to 10 years for equipment</li>
                <li>Up to 10 years for working capital</li>
              </ul>
            </li>
            <li>
              <strong>Input Interest Rate</strong>: Enter your expected interest rate. The calculator 
              will show how different rates affect your payments.
            </li>
            <li>
              <strong>Review Results</strong>: The calculator instantly displays:
              <ul>
                <li>Monthly payment amount</li>
                <li>Total interest over loan term</li>
                <li>Total cost of the loan</li>
                <li>Amortization schedule</li>
              </ul>
            </li>
          </ol>
        </div>
      </section>

      {/* Calculator FAQ Section */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">SBA 7(a) Loan Calculator FAQ</h2>
        <div className="prose prose-lg max-w-none">
          <h3>How accurate is the SBA 7(a) Loan Calculator?</h3>
          <p>
            The calculator provides reliable estimates based on current market conditions. However, 
            actual loan terms may vary based on lender requirements, credit history, and business qualifications.
          </p>

          <h3>Can I calculate different scenarios with the SBA 7(a) Loan Calculator?</h3>
          <p>
            Yes, you can easily adjust loan amounts, terms, and interest rates to compare different scenarios. 
            This helps you understand how changes in these variables affect your monthly payments.
          </p>

          <h3>Does the calculator include SBA guarantee fees?</h3>
          <p>
            The basic calculation focuses on principal and interest payments. For complete cost analysis, 
            consult with a lender about additional fees such as the SBA guarantee fee and packaging fees.
          </p>

          <h3>Can I calculate prepayment scenarios?</h3>
          <p>
            While the standard calculator doesn't include prepayment calculations, you can estimate savings 
            by comparing different term lengths. There are no prepayment penalties on SBA 7(a) loans.
          </p>

          <h3>How often should I use the calculator during my loan search?</h3>
          <p>
            We recommend using the calculator whenever you receive new rate quotes or consider different 
            loan amounts. This helps you compare offers and understand your potential financial commitment.
          </p>
        </div>
      </section>

      {/* General FAQ Section */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">SBA 7(a) Loan FAQ</h2>
        <div className="prose prose-lg max-w-none">
          <h3>What can SBA 7(a) loan funds be used for?</h3>
          <p>
            SBA 7(a) loans offer flexible use of funds for:
          </p>
          <ul>
            <li>Working capital and inventory</li>
            <li>Equipment and machinery purchases</li>
            <li>Real estate acquisition or improvement</li>
            <li>Business acquisition or expansion</li>
            <li>Debt refinancing under certain conditions</li>
          </ul>

          <h3>What is the typical approval timeline?</h3>
          <p>
            The approval process typically takes:
          </p>
          <ul>
            <li>2-3 weeks for initial review</li>
            <li>30-60 days for full approval</li>
            <li>2-4 weeks for closing after approval</li>
          </ul>

          <h3>What documentation is required?</h3>
          <p>
            Common requirements include:
          </p>
          <ul>
            <li>Business and personal tax returns</li>
            <li>Financial statements</li>
            <li>Business plan and projections</li>
            <li>Collateral documentation</li>
            <li>Personal financial statement</li>
          </ul>
        </div>
      </section>

      {/* Navigation Links Section */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Learn More About SBA 7(a) Loans</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Link href="/sba-7a-loan-calculator/benefits" 
                className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-2">SBA 7(a) Loan Benefits</h3>
            <p className="text-gray-600">
              Explore the advantages of SBA 7(a) loans including flexible use of funds, competitive rates, and longer terms.
            </p>
          </Link>

          <Link href="/sba-7a-loan-calculator/application-process"
                className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-2">Application Process</h3>
            <p className="text-gray-600">
              Complete guide to applying for an SBA 7(a) loan, with required documentation and timeline.
            </p>
          </Link>

          <Link href="/sba-7a-loan-calculator/faq"
                className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-2">Frequently Asked Questions</h3>
            <p className="text-gray-600">
              Get answers to common questions about SBA 7(a) loans, eligibility, and requirements.
            </p>
          </Link>

          <Link href="/sba-7a-loan-calculator/rates-and-fees"
                className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-2">Rates & Fees</h3>
            <p className="text-gray-600">
              Current SBA 7(a) loan rates, fee structures, and total cost considerations.
            </p>
          </Link>

          <Link href="/sba-7a-loan-calculator/case-studies"
                className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-2">Success Stories</h3>
            <p className="text-gray-600">
              Real business success stories using SBA 7(a) loans for growth and expansion.
            </p>
          </Link>

          <Link href="/sba-7a-loan-calculator/comparison"
                className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-2">Loan Comparison</h3>
            <p className="text-gray-600">
              Compare SBA 7(a) loans with other financing options to find your ideal solution.
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
} 