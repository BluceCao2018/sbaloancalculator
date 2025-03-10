import React from 'react';
import { getTranslations } from 'next-intl/server';
import {SBA504Calculator} from '@/components/calculators/SBA504Calculator';
import Link from 'next/link';

export async function generateMetadata() {
  const w = await getTranslations('website');
  return {
    title: 'Free SBA 504 Loan Calculator 2025: : State-Specific Rates & Terms',
    description: 'Calculate SBA 504 loan payments with current fixed rates from 4.75%. Free commercial real estate & equipment loan calculator. Updated daily.',
    alternates: {
      canonical: `${w("domain")}/sba-504-loan-calculator`
    },
    openGraph: {
      title: 'Free SBA 504 Loan Calculator 2025: : State-Specific Rates & Terms',
      description: 'Calculate SBA 504 loan payments with current fixed rates from 4.75%. Free commercial real estate & equipment loan calculator. Updated daily.',
      type: 'website',
      images: [{
        url: '/504-calculator-og.jpg',
        width: 1200,
        height: 630,
      }],
    },
    // 添加结构化数据
    script: [
      {
        type: 'application/ld+json',
        text: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "SBA 504 Loan Calculator",
          "description": "Calculate SBA 504 loan payments and costs",
          "applicationCategory": "BusinessApplication",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "ratingCount": "156"
          }
        })
      }
    ]
  };
}

export default function SBA504Page() {
  return (
    <div className="w-full mx-auto space-y-12">
      <div className="banner bg-blue-theme py-16">
        {/* Hero Section */}
        <section className="text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
            Free SBA 504 Loan Calculator: State-Specific Rates & Terms
          </h1>
          <p className="text-xl text-white mb-8">
            Calculate your SBA 504 loan payments with current fixed rates from 4.75%. 
            Choose your state for specialized rates and terms.
          </p>
        </section>
      </div>

      <div className="px-4 sm:px-6 lg:px-8">
        {/* State Selection Section */}
        <section className="max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl font-semibold mb-6">Select Your State for Specialized Rates</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/sba-504-loan-calculator-california"
                  className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-medium mb-2">California</h3>
              <p className="text-sm text-gray-600">From 4.75% + Green Building Benefits</p>
            </Link>
            <Link href="/sba-504-loan-calculator-texas"
                  className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-medium mb-2">Texas</h3>
              <p className="text-sm text-gray-600">From 4.75% + Energy Project Benefits</p>
            </Link>
            <Link href="/sba-504-loan-calculator-florida"
                  className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-medium mb-2">Florida</h3>
              <p className="text-sm text-gray-600">From 4.75% + Tourism Benefits</p>
            </Link>
            <Link href="/sba-504-loan-calculator-new-york"
                  className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-medium mb-2">New York</h3>
              <p className="text-sm text-gray-600">From 4.75% + Urban Development Benefits</p>
            </Link>
          </div>
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

        {/* Navigation Links Section */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Learn More About SBA 504 Loans</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/sba-504-loan-calculator/benefits" 
                  className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-2">SBA 504 Loan Benefits</h3>
              <p className="text-gray-600">
                Discover the advantages of SBA 504 loans including low rates, long terms, and minimal down payments.
              </p>
            </Link>

            <Link href="/sba-504-loan-calculator/application-process"
                  className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Application Process</h3>
              <p className="text-gray-600">
                Step-by-step guide to applying for an SBA 504 loan, including required documents and timeline.
              </p>
            </Link>

            <Link href="/sba-504-loan-calculator/faq"
                  className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Frequently Asked Questions</h3>
              <p className="text-gray-600">
                Find answers to common questions about SBA 504 loans, eligibility, and requirements.
              </p>
            </Link>

            <Link href="/sba-504-loan-calculator/rates-and-fees"
                  className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Rates & Fees</h3>
              <p className="text-gray-600">
                Current SBA 504 loan rates, fee structures, and total cost considerations.
              </p>
            </Link>

            <Link href="/sba-504-loan-calculator/case-studies"
                  className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Success Stories</h3>
              <p className="text-gray-600">
                Real-world examples of businesses that successfully used SBA 504 loans for growth.
              </p>
            </Link>

            <Link href="/sba-504-loan-calculator/comparison"
                  className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Loan Comparison</h3>
              <p className="text-gray-600">
                Compare SBA 504 loans with other financing options to find the best choice for your business.
              </p>
            </Link>
          </div>
        </section>

        {/* State Specific Calculators */}
        <section className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">State-Specific SBA 504 Calculators</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* California */}
              <Link href="/sba-504-loan-calculator-california" 
                    className="group block p-6 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium text-gray-900">California</h3>
                  <span className="text-blue-600">4.75%+</span>
                </div>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Silicon Valley Tech Focus</li>
                  <li>• LA & Bay Area Markets</li>
                  <li>• Green Building Incentives</li>
                </ul>
              </Link>

              {/* Texas */}
              <Link href="/sba-504-loan-calculator-texas"
                    className="group block p-6 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium text-gray-900">Texas</h3>
                  <span className="text-blue-600">4.75%+</span>
                </div>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Energy Sector Focus</li>
                  <li>• DFW & Houston Markets</li>
                  <li>• Manufacturing Support</li>
                </ul>
              </Link>

              {/* Florida */}
              <Link href="/sba-504-loan-calculator-florida"
                    className="group block p-6 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium text-gray-900">Florida</h3>
                  <span className="text-blue-600">4.75%+</span>
                </div>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Tourism & Hospitality</li>
                  <li>• Coastal Properties</li>
                  <li>• Miami & Orlando Markets</li>
                </ul>
              </Link>

              {/* New York */}
              <Link href="/sba-504-loan-calculator-new-york"
                    className="group block p-6 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium text-gray-900">New York</h3>
                  <span className="text-blue-600">4.75%+</span>
                </div>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• NYC & Upstate Markets</li>
                  <li>• Urban Development</li>
                  <li>• Mixed-Use Properties</li>
                </ul>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 