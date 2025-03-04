'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

interface CalculatorProps {
  defaultState?: string;
  defaultRate?: number;
}

interface CalculatorInputs {
  loanAmount: number;
  interestRate: number;
  loanTerm: number;
  firstTimeUse: boolean;
  militaryType: 'regular' | 'reserves' | 'disabled';
  downPayment: number;
}

interface CalculationResults {
  monthlyPayment: number;
  fundingFee: number;
  totalLoanAmount: number;
  totalInterest: number;
  totalCost: number;
}

export function VACalculator({ defaultState, defaultRate }: CalculatorProps) {
  const searchParams = useSearchParams();
  const isTexasVeteran = defaultState === 'texas' || searchParams.get('state') === 'texas';

  const [inputs, setInputs] = useState<CalculatorInputs>({
    loanAmount: 300000,
    interestRate: defaultRate || 5.5,
    loanTerm: 30,
    firstTimeUse: true,
    militaryType: 'regular',
    downPayment: 0
  });

  const [results, setResults] = useState<CalculationResults | null>(null);

  const calculateFundingFee = (loanAmount: number, downPayment: number, firstTimeUse: boolean, militaryType: string) => {
    let feePercentage = 0;
    
    if (militaryType === 'disabled') {
      return 0; // Disabled veterans are exempt from funding fee
    }

    if (firstTimeUse) {
      if (downPayment < 5) {
        feePercentage = militaryType === 'regular' ? 2.3 : 2.3;
      } else if (downPayment < 10) {
        feePercentage = militaryType === 'regular' ? 1.65 : 1.65;
      } else {
        feePercentage = militaryType === 'regular' ? 1.4 : 1.4;
      }
    } else {
      if (downPayment < 5) {
        feePercentage = militaryType === 'regular' ? 3.6 : 3.6;
      } else if (downPayment < 10) {
        feePercentage = militaryType === 'regular' ? 1.65 : 1.65;
      } else {
        feePercentage = militaryType === 'regular' ? 1.4 : 1.4;
      }
    }

    return (loanAmount * feePercentage) / 100;
  };

  const calculateLoan = () => {
    const principal = inputs.loanAmount * (1 - inputs.downPayment / 100);
    const monthlyRate = (inputs.interestRate / 100) / 12;
    const numberOfPayments = inputs.loanTerm * 12;
    const fundingFee = calculateFundingFee(
      principal,
      inputs.downPayment,
      inputs.firstTimeUse,
      inputs.militaryType
    );

    const totalLoanAmount = principal + fundingFee;
    
    // Monthly payment calculation using amortization formula
    const monthlyPayment = (totalLoanAmount * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
                          (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    const totalCost = monthlyPayment * numberOfPayments;
    const totalInterest = totalCost - totalLoanAmount;

    setResults({
      monthlyPayment,
      fundingFee,
      totalLoanAmount,
      totalInterest,
      totalCost
    });
  };

  useEffect(() => {
    calculateLoan();
  }, [inputs]);

  const handleInputChange = (field: keyof CalculatorInputs, value: string | number | boolean) => {
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
    <div className="grid md:grid-cols-2 gap-8">
      {/* Input Section */}
      <div className="space-y-6">
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
              max="2000000"
              step="1000"
            />
          </div>
          <p className="mt-1 text-sm text-gray-500">Maximum amount varies by county</p>
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
            max="15"
            step="0.125"
          />
          <p className="mt-1 text-sm text-gray-500">Current VA rates typically range from 3.5% to 6.5%</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Loan Term (Years)
          </label>
          <select
            value={inputs.loanTerm}
            onChange={(e) => handleInputChange('loanTerm', e.target.value)}
            className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          >
            <option value={15}>15 years</option>
            <option value={20}>20 years</option>
            <option value={30}>30 years</option>
          </select>
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
            step="0.1"
          />
          <p className="mt-1 text-sm text-gray-500">VA loans typically require no down payment</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Military Service Type
          </label>
          <select
            value={inputs.militaryType}
            onChange={(e) => handleInputChange('militaryType', e.target.value)}
            className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="regular">Regular Military</option>
            <option value="reserves">Reserves/National Guard</option>
            <option value="disabled">Disabled Veteran</option>
          </select>
        </div>

        <div>
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={inputs.firstTimeUse}
              onChange={(e) => handleInputChange('firstTimeUse', e.target.checked)}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <span className="text-sm font-medium text-gray-700">First time using VA loan benefit</span>
          </label>
        </div>
      </div>

      {/* Results Section */}
      <div className="space-y-6">
        {results && (
          <>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="text-sm text-gray-600">Monthly Payment</div>
              <div className="text-3xl font-bold text-blue-600">
                {formatCurrency(results.monthlyPayment)}
              </div>
              <div className="mt-1 text-sm text-gray-500">Principal + Interest</div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <div className="text-sm text-gray-600">VA Funding Fee</div>
                <div className="text-xl font-semibold">
                  {formatCurrency(results.fundingFee)}
                </div>
                {inputs.militaryType === 'disabled' && (
                  <div className="mt-1 text-sm text-green-600">Fee Exempt</div>
                )}
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <div className="text-sm text-gray-600">Total Loan Amount</div>
                <div className="text-xl font-semibold">
                  {formatCurrency(results.totalLoanAmount)}
                </div>
                <div className="mt-1 text-sm text-gray-500">Including funding fee</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <div className="text-sm text-gray-600">Total Interest</div>
                <div className="text-xl font-semibold">
                  {formatCurrency(results.totalInterest)}
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <div className="text-sm text-gray-600">Total Cost</div>
                <div className="text-xl font-semibold">
                  {formatCurrency(results.totalCost)}
                </div>
                <div className="mt-1 text-sm text-gray-500">Over {inputs.loanTerm} years</div>
              </div>
            </div>

            <div className="mt-4 text-sm text-gray-500">
              * These calculations are estimates and may vary based on actual loan terms and conditions.
              {isTexasVeteran && (
                <div className="mt-2 text-blue-600">
                  * Special rates and terms applied for Texas Veterans
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
} 