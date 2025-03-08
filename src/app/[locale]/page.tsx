import React from 'react';
import { getTranslations } from 'next-intl/server';
import { FAQSection } from '@/components/FAQSection';
import { LoanTypesSection } from '@/components/LoanTypesSection';
import { BenefitsSection } from '@/components/BenefitsSection';
import { HowToUseCalculator } from '@/components/HowToUseCalculator';
import { CalculatorCards } from '@/components/CalculatorCards';
import { LoanMatcher } from '@/components/LoanMatcher';

export async function generateMetadata() {
  const w = await getTranslations('website');
  return {
    title: 'SBA Loan Calculator: Estimate Payments, Rates & Eligibility',
    description: 'Use SBA loan calculator to estimate monthly payments, interest rates, and eligibility for SBA 7(a) and 504 loans. ',
    alternates: {
      canonical: `${w("domain")}`
    }
  };
}

export default async function SBACalculatorPage() {
  const t = await getTranslations('home');

  return (
    <div className="w-full mx-auto py-0 space-y-12">
      <div className="banner bg-blue-theme py-16">
      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
          {t("h1")}
        </h1>
        <p className="text-xl text-white mb-8">
          {t("description")}
        </p>
      </section>
      </div>

      {/* Calculator Cards Section */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-center">Choose Your SBA Loan Calculator</h2>
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-1 rounded-2xl shadow-lg">
            <div className="bg-white rounded-xl">
              <LoanMatcher />
            </div>
          </div>
          <div className="text-center text-gray-600">Or select a SBA Loan Calculator directly:</div>
          <CalculatorCards />
        </div>
      </section>

      {/* How to Use Calculator Section */}
      <HowToUseCalculator />

      {/* What is an SBA Loan Section */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Understanding SBA Loan Calculator</h2>
        <div className="prose prose-lg max-w-none">
          <p>
            SBA loan calculator are designed to help small business owners make informed financing decisions. 
            Whether you're considering an SBA 7(a) loan or an SBA 504 loan, SBA loan calculator provide accurate 
            payment estimates based on current market rates and terms.
          </p>
          <p>
            Key features of SBA loan calculator include:
          </p>
          <ul>
            <li>Real-time payment calculations based on current SBA loan rates</li>
            <li>Flexible term length options for different loan purposes</li>
            <li>Detailed amortization schedules showing payment breakdowns</li>
            <li>Easy comparison between different loan programs</li>
          </ul>
        </div>
      </section>

      {/* Loan Types Section */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Types of SBA Loans</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-3">SBA 7(a) Loans</h3>
            <p className="text-gray-700 mb-4">
              The most flexible SBA loan program, perfect for general business purposes including:
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Working capital needs</li>
              <li>Equipment purchases</li>
              <li>Business expansion</li>
              <li>Debt refinancing</li>
            </ul>
            <div className="mt-4">
              <strong>Loan Amount:</strong> Up to $5 million<br />
              <strong>Terms:</strong> Up to 25 years for real estate, 10 years for other purposes
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-3">SBA 504 Loans</h3>
            <p className="text-gray-700 mb-4">
              Specifically designed for major fixed asset purchases including:
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Commercial real estate</li>
              <li>Heavy equipment</li>
              <li>Building improvements</li>
              <li>Land and buildings</li>
            </ul>
            <div className="mt-4">
              <strong>Loan Amount:</strong> Up to $5.5 million<br />
              <strong>Terms:</strong> 10, 20, or 25 years
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Benefits of SBA Loans</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Lower Down Payments</h3>
            <p className="text-gray-700">
              SBA loans typically require lower down payments compared to conventional loans, 
              making it easier to preserve working capital for your business operations.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Competitive Interest Rates</h3>
            <p className="text-gray-700">
              SBA loans offer competitive interest rates that are often lower than traditional 
              business loans, helping to reduce your monthly payments and overall cost.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Longer Repayment Terms</h3>
            <p className="text-gray-700">
              With terms up to 25 years for real estate and 10 years for equipment, SBA loans 
              provide extended repayment periods that help keep monthly payments manageable.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Flexible Use of Funds</h3>
            <p className="text-gray-700">
              SBA loans can be used for various business purposes, from working capital and 
              inventory to real estate purchases and business expansion projects.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">FAQ Of The SBA Loan Calculator</h2>
        <div className="space-y-6">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-3">How do I choose between SBA 7(a) and 504 loans?</h3>
            <p className="text-gray-700">
              Choose SBA 7(a) loans for general business purposes including working capital, inventory, 
              or business acquisition. Opt for SBA 504 loans when purchasing fixed assets like real estate 
              or heavy equipment. Use our SBA loan calculator matcher tool above to find the best option for your needs.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-3">What information do I need to use the SBA loan calculator?</h3>
            <p className="text-gray-700">
              Have these details ready:
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Desired loan amount</li>
              <li>Preferred loan term</li>
              <li>Current SBA loan rates</li>
              <li>Down payment amount (for 504 loans)</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Are the SBA loan calculator results guaranteed?</h3>
            <p className="text-gray-700">
            SBA loan calculator results are estimates based on current rates and standard terms. Actual loan terms 
              may vary based on lender requirements, your business qualifications, and market conditions. 
              Always consult with SBA-approved lenders for official quotes.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-3">What affects my SBA loan eligibility?</h3>
            <p className="text-gray-700">
              Key factors include:
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Business size and type</li>
              <li>Credit history and score</li>
              <li>Business revenue and cash flow</li>
              <li>Available collateral</li>
              <li>Industry experience</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center max-w-4xl mx-auto bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
        <h2 className="text-2xl font-bold mb-4">Ready to Calculate Your SBA Loan?</h2>
        <p className="text-lg mb-6">
          Use our SBA loan calculator above to estimate payments and find the right financing option for your business. 
          Compare different scenarios and make an informed decision for your business growth.
        </p>
        <div className="text-gray-600">
          Remember: The SBA loan calculator can help you plan your business financing with confidence.
        </div>
      </section>
    </div>
  );
} 