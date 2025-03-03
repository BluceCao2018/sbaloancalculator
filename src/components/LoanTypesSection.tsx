import React from 'react';
import { useTranslations } from 'next-intl';

export function LoanTypesSection() {
  const t = useTranslations('sba.loan_types');

  return (
    <section className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">{t('title')}</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* 7(a) Loan */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold">{t('7a.title')}</h3>
          </div>
          
          <div className="space-y-4">
            <p className="text-gray-600">
              {t('7a.description')}
            </p>
            
            <div>
              <h4 className="font-medium mb-2">{t('7a.features_title')}</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Loan amounts up to $5 million</li>
                <li>Can be used for working capital, equipment, or real estate</li>
                <li>Terms up to 10 years for working capital, 25 years for real estate</li>
                <li>Variable interest rates based on prime rate</li>
                <li>Down payment typically 10-20%</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">{t('7a.best_for_title')}</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Starting a new business</li>
                <li>Expanding an existing business</li>
                <li>Working capital needs</li>
                <li>Purchasing equipment or inventory</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 504 Loan */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold">{t('504.title')}</h3>
          </div>
          
          <div className="space-y-4">
            <p className="text-gray-600">
              {t('504.description')}
            </p>
            
            <div>
              <h4 className="font-medium mb-2">{t('504.features_title')}</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Loan amounts up to $5.5 million</li>
                <li>Fixed interest rates</li>
                <li>Terms up to 20-25 years</li>
                <li>Lower down payments (typically 10%)</li>
                <li>Project costs must be at least $125,000</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">{t('504.best_for_title')}</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Purchasing commercial real estate</li>
                <li>Building new facilities</li>
                <li>Renovating existing facilities</li>
                <li>Buying heavy machinery/equipment</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 