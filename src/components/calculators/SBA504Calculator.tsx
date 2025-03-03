'use client';

import React, { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { useSearchParams } from 'next/navigation';

interface CalculatorInputs {
  projectCost: number;
  interestRateCDC: number;
  interestRateBank: number;
  loanTerm: number;
  propertyType: 'commercial-real-estate' | 'equipment' | 'green-building';
}

interface CalculationResults {
  monthlyPaymentCDC: number;
  monthlyPaymentBank: number;
  totalMonthlyPayment: number;
  downPayment: number;
  cdcLoanAmount: number;
  bankLoanAmount: number;
  totalInterest: number;
}

export function SBA504Calculator() {
  const t = useTranslations('sba');
  const searchParams = useSearchParams();
  
  const [inputs, setInputs] = useState<CalculatorInputs>({
    projectCost: 1000000,
    interestRateCDC: 3.5,
    interestRateBank: 6.0,
    loanTerm: 25,
    propertyType: 'commercial-real-estate'
  });

  const [results, setResults] = useState<CalculationResults | null>(null);

  // Handle URL parameters
  useEffect(() => {
    const projectCost = searchParams.get('projectCost');
    const term = searchParams.get('term');
    const propertyType = searchParams.get('propertyType') as 'commercial-real-estate' | 'equipment' | 'green-building';

    const newInputs = { ...inputs };
    if (projectCost) newInputs.projectCost = parseInt(projectCost);
    if (term) newInputs.loanTerm = parseInt(term);
    if (propertyType) newInputs.propertyType = propertyType;

    setInputs(newInputs);
  }, [searchParams]);

  const calculateLoan = () => {
    // Calculate loan portions
    const downPaymentPercent = inputs.propertyType === 'green-building' ? 0.10 : 0.15;
    const downPayment = inputs.projectCost * downPaymentPercent;
    const cdcPortion = inputs.projectCost * 0.40;
    const bankPortion = inputs.projectCost * (1 - downPaymentPercent - 0.40);

    // Calculate CDC loan payment
    const monthlyRateCDC = (inputs.interestRateCDC / 100) / 12;
    const numberOfPaymentsCDC = inputs.loanTerm * 12;
    const monthlyPaymentCDC = (cdcPortion * monthlyRateCDC * Math.pow(1 + monthlyRateCDC, numberOfPaymentsCDC)) / 
                             (Math.pow(1 + monthlyRateCDC, numberOfPaymentsCDC) - 1);

    // Calculate bank loan payment
    const monthlyRateBank = (inputs.interestRateBank / 100) / 12;
    const numberOfPaymentsBank = inputs.loanTerm * 12;
    const monthlyPaymentBank = (bankPortion * monthlyRateBank * Math.pow(1 + monthlyRateBank, numberOfPaymentsBank)) / 
                              (Math.pow(1 + monthlyRateBank, numberOfPaymentsBank) - 1);

    // Calculate total interest
    const totalPaymentsCDC = monthlyPaymentCDC * numberOfPaymentsCDC;
    const totalPaymentsBank = monthlyPaymentBank * numberOfPaymentsBank;
    const totalInterest = (totalPaymentsCDC + totalPaymentsBank) - (cdcPortion + bankPortion);

    setResults({
      monthlyPaymentCDC,
      monthlyPaymentBank,
      totalMonthlyPayment: monthlyPaymentCDC + monthlyPaymentBank,
      downPayment,
      cdcLoanAmount: cdcPortion,
      bankLoanAmount: bankPortion,
      totalInterest
    });
  };

  useEffect(() => {
    calculateLoan();
  }, [inputs]);

  const handleInputChange = (field: keyof CalculatorInputs, value: string | number | 'commercial-real-estate' | 'equipment' | 'green-building') => {
    setInputs(prev => ({
      ...prev,
      [field]: typeof value === 'string' ? 
        (field === 'propertyType' ? value : parseFloat(value) || 0) : 
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

  // Get max term based on property type
  const getMaxTerm = () => {
    switch (inputs.propertyType) {
      case 'commercial-real-estate':
      case 'green-building':
        return 25;
      case 'equipment':
        return 10;
      default:
        return 25;
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Input Section */}
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Project Type
          </label>
          <div className="grid grid-cols-3 gap-4">
            {[
              { value: 'commercial-real-estate', label: 'Commercial Real Estate' },
              { value: 'equipment', label: 'Equipment' },
              { value: 'green-building', label: 'Green Building' },
            ].map((type) => (
              <button
                key={type.value}
                onClick={() => handleInputChange('propertyType', type.value)}
                className={`px-4 py-2 rounded-lg text-sm font-medium ${
                  inputs.propertyType === type.value
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {type.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Total Project Cost
          </label>
          <div className="relative">
            <span className="absolute left-3 top-2 text-gray-500">$</span>
            <input
              type="number"
              value={inputs.projectCost}
              onChange={(e) => handleInputChange('projectCost', e.target.value)}
              className="block w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              min="0"
              step="1000"
              aria-label="Enter project cost"
            />
          </div>
          <p className="mt-1 text-sm text-gray-500">Total cost of your project including all expenses</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            CDC Portion Interest Rate (%)
          </label>
          <input
            type="number"
            value={inputs.interestRateCDC}
            onChange={(e) => handleInputChange('interestRateCDC', e.target.value)}
            className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            min="0"
            max="30"
            step="0.1"
            aria-label="Enter CDC portion interest rate"
          />
          <p className="mt-1 text-sm text-gray-500">Current CDC rates typically range from 3% to 5%</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Bank Portion Interest Rate (%)
          </label>
          <input
            type="number"
            value={inputs.interestRateBank}
            onChange={(e) => handleInputChange('interestRateBank', e.target.value)}
            className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            min="0"
            max="30"
            step="0.1"
            aria-label="Enter bank portion interest rate"
          />
          <p className="mt-1 text-sm text-gray-500">Current bank rates typically range from 5% to 8%</p>
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
            Maximum term: {getMaxTerm()} years for {inputs.propertyType.replace('-', ' ')}
          </p>
        </div>
      </div>

      {/* Results Section */}
      <div className="bg-gray-50 p-6 rounded-xl space-y-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          SBA 504 Loan Payment Summary
        </h3>
        
        {results && (
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="text-sm text-gray-600">Total Monthly Payment</div>
              <div className="text-2xl font-bold text-blue-600">
                {formatCurrency(results.totalMonthlyPayment)}
              </div>
              <div className="mt-2 text-sm text-gray-500">
                CDC: {formatCurrency(results.monthlyPaymentCDC)} + Bank: {formatCurrency(results.monthlyPaymentBank)}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-sm text-gray-600">CDC Loan Amount (40%)</div>
                <div className="text-lg font-semibold">
                  {formatCurrency(results.cdcLoanAmount)}
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-sm text-gray-600">Bank Loan Amount (45-50%)</div>
                <div className="text-lg font-semibold">
                  {formatCurrency(results.bankLoanAmount)}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-sm text-gray-600">Down Payment</div>
                <div className="text-lg font-semibold">
                  {formatCurrency(results.downPayment)}
                </div>
                <div className="text-sm text-gray-500">
                  ({(results.downPayment / inputs.projectCost * 100).toFixed(1)}%)
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-sm text-gray-600">Total Interest</div>
                <div className="text-lg font-semibold">
                  {formatCurrency(results.totalInterest)}
                </div>
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