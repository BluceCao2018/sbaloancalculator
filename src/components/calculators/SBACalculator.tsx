'use client';

import React, { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';

interface CalculatorInputs {
  loanType: '7a' | '504';
  loanAmount: number;
  interestRate: number;
  loanTerm: number;
  downPayment: number;
}

interface CalculationResults {
  monthlyPayment: number;
  totalPayment: number;
  totalInterest: number;
  effectiveRate: number;
}

export function SBACalculator() {
  const t = useTranslations('sba');
  
  const [inputs, setInputs] = useState<CalculatorInputs>({
    loanType: '7a',
    loanAmount: 0,
    interestRate: 5.5,
    loanTerm: 10,
    downPayment: 10,
  });

  const [results, setResults] = useState<CalculationResults | null>(null);

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

  const handleInputChange = (field: keyof CalculatorInputs, value: string | number) => {
    setInputs(prev => ({
      ...prev,
      [field]: typeof value === 'string' ? parseFloat(value) || 0 : value,
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

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Input Section */}
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            SBA Loan Type
          </label>
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => handleInputChange('loanType', '7a')}
              className={`px-4 py-2 rounded-lg text-sm font-medium ${
                inputs.loanType === '7a'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              SBA 7(a) Loan Calculator
            </button>
            <button
              onClick={() => handleInputChange('loanType', '504')}
              className={`px-4 py-2 rounded-lg text-sm font-medium ${
                inputs.loanType === '504'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              SBA 504 Loan Calculator
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            SBA Loan Amount
          </label>
          <div className="relative">
            <span className="absolute left-3 top-2 text-gray-500">$</span>
            <input
              type="number"
              value={inputs.loanAmount}
              onChange={(e) => handleInputChange('loanAmount', e.target.value)}
              className="block w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              min="0"
              step="1000"
              aria-label="Enter SBA loan amount"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            SBA Loan Interest Rate (%)
          </label>
          <input
            type="number"
            value={inputs.interestRate}
            onChange={(e) => handleInputChange('interestRate', e.target.value)}
            className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            min="0"
            max="30"
            step="0.1"
            aria-label="Enter SBA loan interest rate"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            SBA Loan Term (Years)
          </label>
          <input
            type="number"
            value={inputs.loanTerm}
            onChange={(e) => handleInputChange('loanTerm', e.target.value)}
            className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            min="1"
            max="25"
            aria-label="Enter SBA loan term"
          />
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
            aria-label="Enter SBA loan down payment percentage"
          />
        </div>
      </div>

      {/* Results Section */}
      <div className="bg-gray-50 p-6 rounded-xl space-y-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          SBA Loan Calculator Results
        </h3>
        
        {results && (
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="text-sm text-gray-600">Estimated Monthly Payment</div>
              <div className="text-2xl font-bold text-blue-600">
                {formatCurrency(results.monthlyPayment)}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-sm text-gray-600">Total SBA Loan Principal</div>
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
              <div className="text-sm text-gray-600">Total SBA Loan Payment</div>
              <div className="text-lg font-semibold">
                {formatCurrency(results.totalPayment)}
              </div>
            </div>

            <div className="mt-4 text-sm text-gray-500">
              * These SBA loan calculations are estimates and may vary based on actual loan terms and conditions.
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 