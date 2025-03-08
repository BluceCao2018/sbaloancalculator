import React from 'react';

export async function generateMetadata() {
  return {
    title: 'SBA 504 Loan Success Stories: Real Business Case Studies',
    description: 'Explore real-world SBA 504 loan success stories and case studies. Learn how businesses used SBA 504 loans for growth and expansion.',
  };
}

export default function SBA504CaseStudies() {
  return (
    <div className="w-full mx-auto py-8 space-y-12 max-w-4xl">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
          SBA 504 Loan Success Stories
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Real-world examples of how businesses achieved growth with SBA 504 loans
        </p>
      </section>

      {/* Manufacturing Case Study */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-6">Manufacturing Company Expansion</h2>
        <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
          <div className="prose prose-lg max-w-none">
            <h3 className="text-xl font-semibold mb-3">Project Overview</h3>
            <ul className="mb-6">
              <li><strong>Industry:</strong> Manufacturing</li>
              <li><strong>Location:</strong> Midwest</li>
              <li><strong>Project Cost:</strong> $2.5 million</li>
              <li><strong>SBA 504 Loan Amount:</strong> $2 million</li>
              <li><strong>Purpose:</strong> Facility purchase and equipment</li>
            </ul>

            <h4 className="font-semibold">Challenge</h4>
            <p>
              A growing manufacturing company needed to expand operations but faced challenges with 
              traditional financing due to the large project size and specialized equipment needs.
            </p>

            <h4 className="font-semibold">Solution</h4>
            <p>
              The SBA 504 loan provided:
            </p>
            <ul>
              <li>50% conventional bank financing: $1.25 million</li>
              <li>40% CDC/SBA portion: $1 million</li>
              <li>10% down payment: $250,000</li>
            </ul>

            <h4 className="font-semibold">Results</h4>
            <ul>
              <li>Created 25 new jobs</li>
              <li>Increased production capacity by 200%</li>
              <li>Reduced operating costs by 30%</li>
              <li>Expanded market reach to new regions</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Healthcare Case Study */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-6">Medical Practice Acquisition</h2>
        <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
          <div className="prose prose-lg max-w-none">
            <h3 className="text-xl font-semibold mb-3">Project Overview</h3>
            <ul className="mb-6">
              <li><strong>Industry:</strong> Healthcare</li>
              <li><strong>Location:</strong> West Coast</li>
              <li><strong>Project Cost:</strong> $1.8 million</li>
              <li><strong>SBA 504 Loan Amount:</strong> $1.62 million</li>
              <li><strong>Purpose:</strong> Medical office purchase</li>
            </ul>

            <h4 className="font-semibold">Challenge</h4>
            <p>
              A successful medical practice wanted to purchase their leased facility but needed 
              to preserve working capital for equipment upgrades.
            </p>

            <h4 className="font-semibold">Solution</h4>
            <p>
              The SBA 504 loan structure included:
            </p>
            <ul>
              <li>50% bank financing: $900,000</li>
              <li>40% CDC/SBA portion: $720,000</li>
              <li>10% down payment: $180,000</li>
            </ul>

            <h4 className="font-semibold">Results</h4>
            <ul>
              <li>Reduced monthly payments compared to lease</li>
              <li>Built equity in real estate</li>
              <li>Expanded services with saved capital</li>
              <li>Added 10 new healthcare positions</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Hospitality Case Study */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-6">Hotel Construction Project</h2>
        <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
          <div className="prose prose-lg max-w-none">
            <h3 className="text-xl font-semibold mb-3">Project Overview</h3>
            <ul className="mb-6">
              <li><strong>Industry:</strong> Hospitality</li>
              <li><strong>Location:</strong> Southeast</li>
              <li><strong>Project Cost:</strong> $4.5 million</li>
              <li><strong>SBA 504 Loan Amount:</strong> $4.05 million</li>
              <li><strong>Purpose:</strong> New hotel construction</li>
            </ul>

            <h4 className="font-semibold">Challenge</h4>
            <p>
              A hotel developer needed financing for new construction but traditional lenders 
              required higher down payments due to industry risks.
            </p>

            <h4 className="font-semibold">Solution</h4>
            <p>
              The SBA 504 loan provided favorable terms:
            </p>
            <ul>
              <li>50% bank financing: $2.25 million</li>
              <li>40% CDC/SBA portion: $1.8 million</li>
              <li>10% down payment: $450,000</li>
            </ul>

            <h4 className="font-semibold">Results</h4>
            <ul>
              <li>Successfully completed construction</li>
              <li>Created 35 permanent jobs</li>
              <li>Achieved 75% occupancy in first year</li>
              <li>Generated positive cash flow within 18 months</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Write Your Success Story?</h2>
        <p className="text-lg mb-6">
          Use our SBA 504 loan calculator to see how you can finance your business growth.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
          Calculate Your SBA 504 Loan
        </button>
      </section>
    </div>
  );
} 