import React from 'react';
import { getTranslations } from 'next-intl/server';
import { SBA504Calculator } from '@/components/calculators/SBA504Calculator';
import Link from 'next/link';

export async function generateMetadata() {
  const w = await getTranslations('website');
  return {
    title: 'SBA 504 Loan Calculator',
    description: 'Calculate SBA 504 loan payments. Estimate monthly payments for commercial real estate, equipment, and green building projects with CDC and bank portions.',
    alternates: {
      canonical: `${w("domain")}/sba-504-loan-calculator`
    }
  };
}

export default async function SBA504CalculatorPage() {
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
          SBA 504 Loan Calculator
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Calculate monthly payments for your SBA 504 loan, including both CDC and bank portions.
          Perfect for commercial real estate, equipment, and green building projects.
        </p>
      </section>

      {/* Calculator Section */}
      <section className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-6 sm:p-8">
        <SBA504Calculator />
      </section>

      {/* Information Section */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">About SBA 504 Loans</h2>
        <div className="prose prose-lg max-w-none">
          <p>
            The SBA 504 loan program provides long-term, fixed-rate financing for major fixed assets that promote
            business growth and job creation. The loan structure typically includes:
          </p>
          <ul>
            <li>40% from a Certified Development Company (CDC)</li>
            <li>50% from a bank or private lender</li>
            <li>10-15% down payment from the business</li>
          </ul>
          <h3>Key Features of SBA 504 Loans:</h3>
          <ul>
            <li>Below-market fixed interest rates</li>
            <li>Terms up to 25 years</li>
            <li>Lower down payments (as low as 10%)</li>
            <li>No balloon payments</li>
            <li>Project costs can exceed $5 million</li>
          </ul>
          <h3>Eligible Project Types:</h3>
          <ul>
            <li>Commercial real estate purchase</li>
            <li>Ground-up construction</li>
            <li>Building improvements</li>
            <li>Major equipment purchases</li>
            <li>Green building initiatives</li>
          </ul>
          <p>
            Use our calculator above to estimate your monthly payments for both the CDC and bank portions of your SBA 504 loan.
            Remember that actual terms and rates may vary based on your project type, location, and qualifications.
          </p>
        </div>
      </section>

      {/* Policy Interpretation Section */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">SBA 504 Loan Policy Guidelines</h2>
        <div className="prose prose-lg max-w-none">
          <h3>Eligibility Requirements</h3>
          <p>
            To qualify for an SBA 504 loan, businesses must meet specific criteria established by the Small Business Administration:
          </p>
          <ul>
            <li>For-profit companies with net worth under $15 million</li>
            <li>Average net income less than $5 million after taxes for the previous two years</li>
            <li>Owner-occupied real estate (51% for existing buildings, 60% for new construction)</li>
            <li>Creation or retention of one job per $75,000 of CDC funding</li>
          </ul>

          <h3>Interest Rate Structure</h3>
          <p>
            SBA 504 loans feature a unique dual interest rate structure:
          </p>
          <ul>
            <li>CDC portion: Fixed rate based on current market rates for 10-year Treasury bonds</li>
            <li>Bank portion: Either fixed or variable rates negotiated with the lender</li>
            <li>Green energy projects may qualify for preferential rates and terms</li>
          </ul>

          <h3>2025 Program Updates</h3>
          <p>
            Recent policy changes have enhanced the SBA 504 program's accessibility:
          </p>
          <ul>
            <li>Expanded eligible project types including renewable energy initiatives</li>
            <li>Streamlined application process for loans under $500,000</li>
            <li>Modified job creation requirements for certain rural areas</li>
          </ul>
        </div>
      </section>

      {/* Calculator Usage Guide Section */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">How to Use the SBA 504 Loan Calculator</h2>
        <div className="prose prose-lg max-w-none">
          <p>
            Our SBA 504 Loan Calculator helps you estimate monthly payments for both portions of your loan. 
            Follow these steps to get accurate calculations:
          </p>
          <ol>
            <li>
              <strong>Enter Project Cost</strong>: Input your total project cost into the SBA 504 Loan Calculator. 
              This should include all expenses like property purchase, improvements, and equipment.
            </li>
            <li>
              <strong>Adjust Down Payment</strong>: Select your down payment percentage (typically 10-15%). 
              The calculator will automatically adjust the CDC and bank portions.
            </li>
            <li>
              <strong>Input Interest Rates</strong>: Enter the current CDC rate and bank rate. The SBA 504 Loan Calculator 
              will compute payments for both portions separately.
            </li>
            <li>
              <strong>Select Loan Terms</strong>: Choose the appropriate term length for each portion. The calculator 
              supports terms up to 25 years for real estate.
            </li>
          </ol>
          <p>
            The SBA 504 Loan Calculator provides instant results showing:
          </p>
          <ul>
            <li>Monthly payment for the CDC portion</li>
            <li>Monthly payment for the bank portion</li>
            <li>Combined monthly payment</li>
            <li>Total project cost breakdown</li>
          </ul>
        </div>
      </section>

      {/* Calculator FAQ Section */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">SBA 504 Loan Calculator FAQ</h2>
        <div className="prose prose-lg max-w-none">
          <h3>How accurate is the SBA 504 Loan Calculator?</h3>
          <p>
            The SBA 504 Loan Calculator provides reliable estimates based on current market rates and standard loan structures. 
            However, final terms may vary based on lender requirements and specific project details.
          </p>

          <h3>Why does the SBA 504 Loan Calculator show two separate payments?</h3>
          <p>
            The calculator displays separate payments because SBA 504 loans consist of two distinct portions: 
            the CDC portion (40%) and the bank portion (50%). Each has its own terms and rates.
          </p>

          <h3>Can the SBA 504 Loan Calculator handle different down payment scenarios?</h3>
          <p>
            Yes, our calculator allows you to adjust down payment percentages from 10% to 15% or higher, 
            helping you understand how different down payments affect your monthly obligations.
          </p>

          <h3>Does the SBA 504 Loan Calculator include fees?</h3>
          <p>
            The basic calculation focuses on principal and interest payments. For a complete cost analysis, 
            consult with a lender about additional fees such as CDC fees, SBA guarantee fees, and closing costs.
          </p>

          <h3>Can I save my SBA 504 Loan Calculator results?</h3>
          <p>
            While the calculator doesn't currently save results, we recommend taking screenshots or notes of 
            different scenarios for comparison. This helps when discussing options with lenders.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">FAQ</h2>
        <div className="prose prose-lg max-w-none">
          <h3>What is the typical timeline for SBA 504 loan approval?</h3>
          <p>
            The approval process typically takes 30-60 days for initial approval, followed by 30-45 days for closing.
            Complex projects or construction loans may require additional time.
          </p>

          <h3>Can I use an SBA 504 loan for working capital?</h3>
          <p>
            No, SBA 504 loans are specifically designed for fixed assets. Working capital needs should be addressed
            through other programs like SBA 7(a) loans or traditional business financing.
          </p>

          <h3>What happens if I want to sell the property before the loan term ends?</h3>
          <p>
            Early sale of property financed through an SBA 504 loan is possible, but may require:
          </p>
          <ul>
            <li>Lender approval</li>
            <li>Prepayment penalties (especially in the first few years)</li>
            <li>Full loan payoff at time of sale</li>
          </ul>

          <h3>Are there any restrictions on property types?</h3>
          <p>
            Yes, the property must be owner-occupied and used for business purposes. Investment properties,
            residential rentals, and certain special-purpose facilities may have additional requirements or
            restrictions.
          </p>

          <h3>How does the CDC portion's fixed rate benefit borrowers?</h3>
          <p>
            The CDC portion's fixed rate provides long-term stability in your financing costs, protecting against
            future interest rate increases. This predictability helps with long-term business planning and cash
            flow management.
          </p>
        </div>
      </section>
    </div>
  );
} 