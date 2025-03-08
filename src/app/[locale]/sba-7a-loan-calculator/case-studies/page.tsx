import React from 'react';

export async function generateMetadata() {
  return {
    title: 'SBA 7(a) Loan Success Stories: Real Business Case Studies',
    description: 'Explore real-world SBA 7(a) loan success stories and case studies. Learn how businesses used SBA 7(a) loans for growth and expansion.',
  };
}

export default function SBA7aCaseStudies() {
  return (
    <div className="w-full mx-auto py-8 space-y-12 max-w-4xl">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
          SBA 7(a) Loan Success Stories
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Real-world examples of how businesses achieved growth with SBA 7(a) loans
        </p>
      </section>

      {/* Retail Business Case Study */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-6">Retail Expansion Success</h2>
        <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
          <div className="prose prose-lg max-w-none">
            <h3 className="text-xl font-semibold mb-3">Project Overview</h3>
            <ul className="mb-6">
              <li><strong>Industry:</strong> Retail</li>
              <li><strong>Location:</strong> Northeast</li>
              <li><strong>Loan Amount:</strong> $750,000</li>
              <li><strong>Purpose:</strong> Inventory and working capital</li>
            </ul>

            <h4 className="font-semibold">Challenge</h4>
            <p>
              A growing retail chain needed additional working capital to expand inventory 
              and open new locations but faced challenges with traditional financing due to 
              limited operating history.
            </p>

            <h4 className="font-semibold">Solution</h4>
            <p>
              The SBA 7(a) loan provided:
            </p>
            <ul>
              <li>$500,000 for inventory expansion</li>
              <li>$250,000 for working capital</li>
              <li>10-year repayment term</li>
              <li>Competitive interest rate</li>
            </ul>

            <h4 className="font-semibold">Results</h4>
            <ul>
              <li>Opened two new locations</li>
              <li>Increased revenue by 150%</li>
              <li>Created 15 new jobs</li>
              <li>Improved cash flow management</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Restaurant Case Study */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-6">Restaurant Modernization</h2>
        <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
          <div className="prose prose-lg max-w-none">
            <h3 className="text-xl font-semibold mb-3">Project Overview</h3>
            <ul className="mb-6">
              <li><strong>Industry:</strong> Restaurant</li>
              <li><strong>Location:</strong> Midwest</li>
              <li><strong>Loan Amount:</strong> $350,000</li>
              <li><strong>Purpose:</strong> Equipment and renovation</li>
            </ul>

            <h4 className="font-semibold">Challenge</h4>
            <p>
              An established restaurant needed to modernize its kitchen equipment and 
              renovate its dining area but lacked sufficient collateral for traditional financing.
            </p>

            <h4 className="font-semibold">Solution</h4>
            <ul>
              <li>$200,000 for kitchen equipment</li>
              <li>$150,000 for renovation</li>
              <li>7-year repayment term</li>
              <li>Fixed interest rate</li>
            </ul>

            <h4 className="font-semibold">Results</h4>
            <ul>
              <li>Reduced energy costs by 30%</li>
              <li>Increased seating capacity by 40%</li>
              <li>Improved customer satisfaction</li>
              <li>Added 8 new positions</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Service Business Case Study */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-6">Professional Services Growth</h2>
        <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
          <div className="prose prose-lg max-w-none">
            <h3 className="text-xl font-semibold mb-3">Project Overview</h3>
            <ul className="mb-6">
              <li><strong>Industry:</strong> Professional Services</li>
              <li><strong>Location:</strong> West Coast</li>
              <li><strong>Loan Amount:</strong> $1.2 million</li>
              <li><strong>Purpose:</strong> Business acquisition</li>
            </ul>

            <h4 className="font-semibold">Challenge</h4>
            <p>
              A successful professional wanted to acquire an existing practice but needed 
              financing with a manageable down payment and longer terms.
            </p>

            <h4 className="font-semibold">Solution</h4>
            <ul>
              <li>$1.2 million total financing</li>
              <li>10% down payment</li>
              <li>10-year repayment term</li>
              <li>Includes working capital</li>
            </ul>

            <h4 className="font-semibold">Results</h4>
            <ul>
              <li>Successful business transition</li>
              <li>Retained all existing staff</li>
              <li>Expanded service offerings</li>
              <li>20% revenue growth in first year</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Write Your Success Story?</h2>
        <p className="text-lg mb-6">
          Use our SBA 7(a) loan calculator to see how you can finance your business growth.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
          Calculate Your SBA 7(a) Loan
        </button>
      </section>
    </div>
  );
} 