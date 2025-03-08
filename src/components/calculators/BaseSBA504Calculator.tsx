'use client';

import React, { useState } from 'react';
import { calculateBaseLoan } from '@/utils/stateCalculations';

export interface BaseSBA504CalculatorProps {
  defaultValues: {
    projectCost: number;
    downPayment: number;
    cdcRate: number;
    bankRate: number;
    term: number;
  };
}

export default function BaseSBA504Calculator({ defaultValues }: BaseSBA504CalculatorProps) {
  const [inputs, setInputs] = useState({
    projectCost: defaultValues?.projectCost || 1000000,
    downPayment: defaultValues?.downPayment || 10,
    term: defaultValues?.term || 25,
  });

  const [results, setResults] = useState<any>(null);

  const calculateLoan = () => {
    const baseCalculation = calculateBaseLoan({
      projectCost: inputs.projectCost,
      interestRateCDC: defaultValues.cdcRate,
      interestRateBank: defaultValues.bankRate,
      loanTerm: inputs.term,
      propertyType: 'commercial-real-estate'
    });
    
    setResults(baseCalculation);
  };

  return (
    <div className="calculator-container space-y-8">
      {/* 基础输入表单 */}
      <div className="grid gap-6 md:grid-cols-2">
        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Project Cost ($)
          </label>
          <input
            type="number"
            value={inputs.projectCost}
            onChange={(e) => setInputs({
              ...inputs,
              projectCost: Number(e.target.value)
            })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Down Payment (%)
          </label>
          <input
            type="number"
            value={inputs.downPayment}
            onChange={(e) => setInputs({
              ...inputs,
              downPayment: Number(e.target.value)
            })}
            min="10"
            max="20"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Loan Term (Years)
          </label>
          <select
            value={inputs.term}
            onChange={(e) => setInputs({
              ...inputs,
              term: Number(e.target.value)
            })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="10">10 Years</option>
            <option value="20">20 Years</option>
            <option value="25">25 Years</option>
          </select>
        </div>
      </div>

      {/* 计算按钮 */}
      <button
        onClick={calculateLoan}
        className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors"
      >
        Calculate Loan Payments
      </button>

      {/* 结果显示 */}
      {results && (
        <div className="results-section bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Loan Summary</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <p className="text-sm text-gray-600">Monthly CDC Payment</p>
              <p className="text-xl font-medium">${results.monthlyPaymentCDC.toFixed(2)}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Monthly Bank Payment</p>
              <p className="text-xl font-medium">${results.monthlyPaymentBank.toFixed(2)}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Monthly Payment</p>
              <p className="text-xl font-medium">${results.totalMonthlyPayment.toFixed(2)}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Down Payment Required</p>
              <p className="text-xl font-medium">${results.downPayment.toFixed(2)}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 