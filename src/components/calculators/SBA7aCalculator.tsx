'use client';

import React, { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { useSearchParams } from 'next/navigation';

interface CalculatorInputs {
  loanAmount: number;
  interestRate: number;
  loanTerm: number;
  downPayment: number;
  loanPurpose: 'real-estate' | 'equipment' | 'working-capital';
}

interface CalculationResults {
  monthlyPayment: number;
  totalPayment: number;
  totalInterest: number;
  effectiveRate: number;
}

export function SBA7aCalculator() {
  const t = useTranslations('sba');
  const searchParams = useSearchParams();
  
  const [inputs, setInputs] = useState<CalculatorInputs>({
    loanAmount: 500000,
    interestRate: 5.5,
    loanTerm: 10,
    downPayment: 10,
    loanPurpose: 'working-capital'
  });

  const [results, setResults] = useState<CalculationResults | null>(null);

  // Handle URL parameters
  useEffect(() => {
    const amount = searchParams.get('amount');
    const term = searchParams.get('term');
    const purpose = searchParams.get('purpose') as 'real-estate' | 'equipment' | 'working-capital';

    const newInputs = { ...inputs };
    if (amount) newInputs.loanAmount = parseInt(amount);
    if (term) newInputs.loanTerm = parseInt(term);
    if (purpose) newInputs.loanPurpose = purpose;

    setInputs(newInputs);
  }, [searchParams]);

  const calculateLoan = () => {
    const principal = inputs.loanAmount * (1 - inputs.downPayment / 100);
    const monthlyRate = (inputs.interestRate / 100) / 12;
    const numberOfPayments = inputs.loanTerm * 12;

    // Monthly payment calculation using amortization formula
    const monthlyPayment = (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
                          (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    const totalPayment = monthlyPayment * numberOfPayments;
    const totalInterest = totalPayment - principal;
    const effectiveRate = (totalInterest / principal) * 100 / inputs.loanTerm;

    setResults({
      monthlyPayment,
      totalPayment,
      totalInterest,
      effectiveRate,
    });
  };

  useEffect(() => {
    calculateLoan();
  }, [inputs]);

  const handleInputChange = (field: keyof CalculatorInputs, value: string | number | 'real-estate' | 'equipment' | 'working-capital') => {
    setInputs(prev => ({
      ...prev,
      [field]: typeof value === 'string' ? 
        (field === 'loanPurpose' ? value : parseFloat(value) || 0) : 
        value,
    }));
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  // Adjust max term based on loan purpose
  const getMaxTerm = () => {
    switch (inputs.loanPurpose) {
      case 'real-estate':
        return 25;
      case 'equipment':
        return 10;
      case 'working-capital':
        return 10;
      default:
        return 10;
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Input Section */}
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Loan Purpose
          </label>
          <div className="grid grid-cols-3 gap-4">
            {[
              { value: 'real-estate', label: 'Real Estate' },
              { value: 'equipment', label: 'Equipment' },
              { value: 'working-capital', label: 'Working Capital' },
            ].map((purpose) => (
              <button
                key={purpose.value}
                onClick={() => handleInputChange('loanPurpose', purpose.value)}
                className={`px-4 py-2 rounded-lg text-sm font-medium ${
                  inputs.loanPurpose === purpose.value
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {purpose.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Loan Amount
          </label>
          <div className="relative">
            <span className="absolute left-3 top-2 text-gray-500">$</span>
            <input
              type="number"
              value={inputs.loanAmount}
              onChange={(e) => handleInputChange('loanAmount', e.target.value)}
              className="block w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              min="0"
              max="5000000"
              step="1000"
              aria-label="Enter loan amount"
            />
          </div>
          <p className="mt-1 text-sm text-gray-500">Maximum amount: $5,000,000</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Interest Rate (%)
          </label>
          <input
            type="number"
            value={inputs.interestRate}
            onChange={(e) => handleInputChange('interestRate', e.target.value)}
            className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            min="0"
            max="30"
            step="0.1"
            aria-label="Enter interest rate"
          />
          <p className="mt-1 text-sm text-gray-500">Current rates typically range from 4.75% to 9.75%</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Loan Term (Years)
          </label>
          <input
            type="number"
            value={inputs.loanTerm}
            onChange={(e) => handleInputChange('loanTerm', e.target.value)}
            className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            min="1"
            max={getMaxTerm()}
            aria-label="Enter loan term"
          />
          <p className="mt-1 text-sm text-gray-500">
            Maximum term: {getMaxTerm()} years for {inputs.loanPurpose.replace('-', ' ')}
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Down Payment (%)
          </label>
          <input
            type="number"
            value={inputs.downPayment}
            onChange={(e) => handleInputChange('downPayment', e.target.value)}
            className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            min="0"
            max="100"
            step="1"
            aria-label="Enter down payment percentage"
          />
          <p className="mt-1 text-sm text-gray-500">Typically 10% to 20% required</p>
        </div>
      </div>

      {/* Results Section */}
      <div className="bg-gray-50 p-6 rounded-xl space-y-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          SBA 7(a) Loan Payment Summary
        </h3>
        
        {results && (
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="text-sm text-gray-600">Monthly Payment</div>
              <div className="text-2xl font-bold text-blue-600">
                {formatCurrency(results.monthlyPayment)}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-sm text-gray-600">Loan Principal</div>
                <div className="text-lg font-semibold">
                  {formatCurrency(inputs.loanAmount * (1 - inputs.downPayment / 100))}
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-sm text-gray-600">Total Interest</div>
                <div className="text-lg font-semibold">
                  {formatCurrency(results.totalInterest)}
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="text-sm text-gray-600">Total Loan Cost</div>
              <div className="text-lg font-semibold">
                {formatCurrency(results.totalPayment)}
              </div>
            </div>

            <div className="mt-4 text-sm text-gray-500">
              * These calculations are estimates and may vary based on actual loan terms and conditions.
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 