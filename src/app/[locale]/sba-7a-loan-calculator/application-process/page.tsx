import React from 'react';

export async function generateMetadata() {
  return {
    title: 'How to Apply for SBA 7(a) Loan: Step-by-Step Application Guide',
    description: 'Complete guide on SBA 7(a) loan application process. Learn the steps, required documents, and timeline for applying for an SBA 7(a) loan.',
  };
}

export default function SBA7aApplicationProcess() {
  return (
    <div className="w-full mx-auto py-8 space-y-12 max-w-4xl">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
          How to Apply for an SBA 7(a) Loan
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          A comprehensive guide to the SBA 7(a) loan application process and requirements
        </p>
      </section>

      {/* Application Steps */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-6">SBA 7(a) Loan Application Steps</h2>
        <div className="space-y-6">
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-3">Step 1: Prepare Documentation</h3>
            <p className="text-gray-700 mb-4">
              Before starting your SBA 7(a) loan application, gather these essential documents:
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Business and personal tax returns (last 3 years)</li>
              <li>Financial statements and projections</li>
              <li>Business plan and history</li>
              <li>Personal financial statement (SBA Form 413)</li>
              <li>Business debt schedule</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-3">Step 2: Find an SBA Lender</h3>
            <p className="text-gray-700 mb-4">
              Locate an approved SBA 7(a) lender:
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Research SBA preferred lenders</li>
              <li>Compare multiple lenders</li>
              <li>Consider local banks and credit unions</li>
              <li>Check lender reviews and success rates</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-3">Step 3: Complete Application Forms</h3>
            <p className="text-gray-700 mb-4">
              Required SBA forms include:
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>SBA Form 1919 (Borrower Information)</li>
              <li>SBA Form 912 (Statement of Personal History)</li>
              <li>Business financial statements</li>
              <li>Business certificate/licenses</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-gray-50 rounded-lg p-8">
        <h2 className="text-3xl font-bold mb-6">Application Timeline</h2>
        <div className="prose prose-lg max-w-none">
          <p>Typical SBA 7(a) loan processing times:</p>
          <ul>
            <li><strong>Document Preparation:</strong> 2-3 weeks</li>
            <li><strong>Initial Review:</strong> 1-2 weeks</li>
            <li><strong>Underwriting:</strong> 2-3 weeks</li>
            <li><strong>SBA Approval:</strong> 5-10 business days</li>
            <li><strong>Closing:</strong> 1-2 weeks</li>
          </ul>
          <p>Total timeline: Usually 30-90 days from application to funding</p>
        </div>
      </section>

      {/* Tips for Success */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-6">Tips for a Successful Application</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-3">Do's</h3>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Maintain organized financial records</li>
              <li>Prepare a detailed business plan</li>
              <li>Check your credit score beforehand</li>
              <li>Respond promptly to lender requests</li>
              <li>Be transparent about your business</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-3">Don'ts</h3>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Submit incomplete applications</li>
              <li>Underestimate time requirements</li>
              <li>Hide potential issues</li>
              <li>Rush through documentation</li>
              <li>Miss follow-up deadlines</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Start Your Application?</h2>
        <p className="text-lg mb-6">
          Use our calculator to estimate your SBA 7(a) loan payments before applying.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
          Calculate SBA 7(a) Loan Payments
        </button>
      </section>
    </div>
  );
} 