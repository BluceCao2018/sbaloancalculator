import React from 'react';

export async function generateMetadata() {
  return {
    title: 'How to Apply for SBA 504 Loan: Step-by-Step Application Guide',
    description: 'Complete guide on SBA 504 loan application process. Learn the steps, required documents, and timeline for applying for an SBA 504 loan.',
  };
}

export default function SBA504ApplicationProcess() {
  return (
    <div className="w-full mx-auto py-8 space-y-12 max-w-4xl">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
          How to Apply for an SBA 504 Loan
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          A comprehensive guide to the SBA 504 loan application process and requirements
        </p>
      </section>

      {/* Application Steps */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-6">SBA 504 Loan Application Steps</h2>
        <div className="space-y-6">
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-3">Step 1: Initial Preparation</h3>
            <p className="text-gray-700 mb-4">
              Before starting your SBA 504 loan application, gather these essential documents:
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Business and personal tax returns (last 3 years)</li>
              <li>Financial statements and projections</li>
              <li>Business plan and history</li>
              <li>Personal financial statement</li>
              <li>Real estate information (if applicable)</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-3">Step 2: Find a CDC and Lender</h3>
            <p className="text-gray-700 mb-4">
              The SBA 504 loan application requires working with:
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Certified Development Company (CDC)</li>
              <li>Participating bank or credit union</li>
              <li>SBA district office (optional consultation)</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-3">Step 3: Submit Application Package</h3>
            <p className="text-gray-700 mb-4">
              Work with your CDC to prepare and submit:
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>SBA Form 1244 (Application)</li>
              <li>Business organization documents</li>
              <li>Collateral documentation</li>
              <li>Environmental studies (if required)</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-3">Step 4: Approval Process</h3>
            <p className="text-gray-700 mb-4">
              The approval process typically involves:
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>CDC underwriting review</li>
              <li>Bank underwriting review</li>
              <li>SBA approval</li>
              <li>Commitment letters issuance</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-6">SBA 504 Loan Application Timeline</h2>
        <div className="prose prose-lg max-w-none">
          <ul>
            <li><strong>Initial Application Preparation:</strong> 2-3 weeks</li>
            <li><strong>CDC Review:</strong> 2-4 weeks</li>
            <li><strong>Bank Review:</strong> 3-4 weeks</li>
            <li><strong>SBA Approval:</strong> 5-8 weeks</li>
            <li><strong>Closing Process:</strong> 2-3 weeks</li>
          </ul>
          <p>
            Total timeline: Typically 3-6 months from application to funding
          </p>
        </div>
      </section>

      {/* Required Documents */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-6">Required Documentation</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-3">Business Documents</h3>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Business tax returns (3 years)</li>
              <li>Financial statements</li>
              <li>Business licenses</li>
              <li>Articles of incorporation</li>
              <li>Lease agreements</li>
              <li>Business plan</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-3">Personal Documents</h3>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Personal tax returns (3 years)</li>
              <li>Personal financial statement</li>
              <li>Resume or CV</li>
              <li>Personal identification</li>
              <li>Credit report authorization</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="bg-blue-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Tips for a Successful Application</h2>
        <div className="prose prose-lg max-w-none">
          <ul>
            <li>Start gathering documents early in the process</li>
            <li>Maintain open communication with your CDC and bank</li>
            <li>Be prepared to provide additional documentation if requested</li>
            <li>Consider using professional assistance for complex applications</li>
            <li>Keep copies of all submitted documents</li>
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Start Your SBA 504 Loan Application?</h2>
        <p className="text-lg mb-6">
          Use our calculator to estimate your loan payments before beginning the application process.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
          Calculate SBA 504 Loan Payments
        </button>
      </section>
    </div>
  );
} 