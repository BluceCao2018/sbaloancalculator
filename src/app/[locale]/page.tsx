import React from 'react';
import { getTranslations } from 'next-intl/server';
import { FAQSection } from '@/components/FAQSection';
import { LoanTypesSection } from '@/components/LoanTypesSection';
import { BenefitsSection } from '@/components/BenefitsSection';
import { HowToUseCalculator } from '@/components/HowToUseCalculator';
import { CalculatorCards } from '@/components/CalculatorCards';
import { LoanMatcher } from '@/components/LoanMatcher';

export async function generateMetadata() {
  const t = await getTranslations('sba');
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
          <LoanMatcher />
          <div className="text-center text-gray-600">Or select a SBA Loan Calculator directly:</div>
          <CalculatorCards />
        </div>
      </section>

      {/* How to Use Calculator Section */}
      <HowToUseCalculator />

      {/* What is an SBA Loan Section */}
      {/* <section className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Understanding the SBA Loan Calculator</h2>
        <p className="text-lg text-gray-700 mb-4">
          Our SBA loan calculator is designed to help small business owners estimate their loan payments and terms. 
          Whether you're considering an SBA 7(a) loan or an SBA 504 loan, this calculator provides accurate 
          payment estimates based on current SBA loan rates and terms.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          The SBA loan calculator takes into account factors such as loan amount, interest rate, and term length 
          to give you a clear picture of your potential monthly payments and total loan cost.
        </p>
      </section> */}

      {/* Loan Types Section */}
      {/* <LoanTypesSection /> */}

      {/* Benefits Section */}
      {/* <BenefitsSection /> */}

      {/* FAQ Section */}
      {/* <FAQSection /> */}

      {/* CTA Section */}
      {/* <section className="text-center max-w-4xl mx-auto bg-blue-50 rounded-2xl p-8">
        <h2 className="text-2xl font-bold mb-4">Ready to Calculate Your SBA Loan?</h2>
        <p className="text-lg mb-6">Use our SBA loan calculator above to estimate your payments and find the right financing option for your business.</p>
      </section> */}
    </div>
  );
} 