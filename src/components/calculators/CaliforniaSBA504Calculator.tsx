'use client';

import React, { useState } from 'react';
import BaseSBA504Calculator from './BaseSBA504Calculator';

export default function CaliforniaSBA504Calculator() {
  const [isGreenBuilding, setIsGreenBuilding] = useState(false);
  const [earthquakeZone, setEarthquakeZone] = useState<'low' | 'medium' | 'high'>('low');

  // 加州特定的默认值
  const defaultValues = {
    projectCost: 1000000,
    downPayment: 10,
    cdcRate: 4.75,
    bankRate: 6.5,
    term: 25
  };

  // 根据绿色建筑认证和地震区域调整利率
  const getAdjustedRates = () => {
    let cdcRate = defaultValues.cdcRate;
    let bankRate = defaultValues.bankRate;

    // 绿色建筑折扣
    if (isGreenBuilding) {
      cdcRate -= 0.25;
      bankRate -= 0.15;
    }

    // 地震区域附加费
    switch (earthquakeZone) {
      case 'high':
        bankRate += 0.5;
        break;
      case 'medium':
        bankRate += 0.25;
        break;
      // low zone 无需调整
    }

    return { cdcRate, bankRate };
  };

  const adjustedRates = getAdjustedRates();

  return (
    <div className="space-y-8">
      {/* 加州特定选项 */}
      <div className="grid gap-6 md:grid-cols-2">
        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Green Building Certification
          </label>
          <select
            value={isGreenBuilding ? 'yes' : 'no'}
            onChange={(e) => setIsGreenBuilding(e.target.value === 'yes')}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>

        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Earthquake Zone
          </label>
          <select
            value={earthquakeZone}
            onChange={(e) => setEarthquakeZone(e.target.value as 'low' | 'medium' | 'high')}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="low">Low Risk Zone</option>
            <option value="medium">Medium Risk Zone</option>
            <option value="high">High Risk Zone</option>
          </select>
        </div>
      </div>

      {/* 当前利率显示 */}
      <div className="bg-blue-50 p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Current Adjusted Rates</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-600">CDC Rate</p>
            <p className="text-xl font-medium">{adjustedRates.cdcRate}%</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Bank Rate</p>
            <p className="text-xl font-medium">{adjustedRates.bankRate}%</p>
          </div>
        </div>
      </div>

      {/* 基础计算器 */}
      <BaseSBA504Calculator 
        defaultValues={{
          ...defaultValues,
          cdcRate: adjustedRates.cdcRate,
          bankRate: adjustedRates.bankRate
        }}
      />
    </div>
  );
} 