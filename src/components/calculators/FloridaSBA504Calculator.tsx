'use client';

import React, { useState } from 'react';
import BaseSBA504Calculator from './BaseSBA504Calculator';

export default function FloridaSBA504Calculator() {
  const [floodZone, setFloodZone] = useState<'X' | 'A' | 'V'>('X');
  const [hurricaneProtection, setHurricaneProtection] = useState(false);
  const [isTourismBusiness, setIsTourismBusiness] = useState(false);
  const [isCoastalProperty, setIsCoastalProperty] = useState(false);

  // 佛罗里达特定的默认值
  const defaultValues = {
    projectCost: 1000000,
    downPayment: 10,
    cdcRate: 4.75,
    bankRate: 6.75,
    term: 25
  };

  // 根据地理位置和业务类型调整利率
  const getAdjustedRates = () => {
    let cdcRate = defaultValues.cdcRate;
    let bankRate = defaultValues.bankRate;

    // 洪水区域调整
    switch (floodZone) {
      case 'V':
        bankRate += 0.75;
        break;
      case 'A':
        bankRate += 0.5;
        break;
      // Zone X 无需调整
    }

    // 飓风防护措施折扣
    if (hurricaneProtection) {
      bankRate -= 0.25;
    }

    // 旅游业优惠
    if (isTourismBusiness) {
      cdcRate -= 0.125;
      bankRate -= 0.125;
    }

    // 沿海地产附加费
    if (isCoastalProperty) {
      bankRate += 0.375;
    }

    return { cdcRate, bankRate };
  };

  const adjustedRates = getAdjustedRates();

  return (
    <div className="space-y-8">
      {/* 佛罗里达特定选项 */}
      <div className="grid gap-6 md:grid-cols-2">
        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Flood Zone
          </label>
          <select
            value={floodZone}
            onChange={(e) => setFloodZone(e.target.value as 'X' | 'A' | 'V')}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="X">Zone X (Minimal Risk)</option>
            <option value="A">Zone A (High Risk)</option>
            <option value="V">Zone V (Coastal High Risk)</option>
          </select>
        </div>

        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Hurricane Protection
          </label>
          <select
            value={hurricaneProtection ? 'yes' : 'no'}
            onChange={(e) => setHurricaneProtection(e.target.value === 'yes')}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="no">Standard Protection</option>
            <option value="yes">Enhanced Protection</option>
          </select>
        </div>

        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Tourism Business
          </label>
          <select
            value={isTourismBusiness ? 'yes' : 'no'}
            onChange={(e) => setIsTourismBusiness(e.target.value === 'yes')}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>

        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Coastal Property
          </label>
          <select
            value={isCoastalProperty ? 'yes' : 'no'}
            onChange={(e) => setIsCoastalProperty(e.target.value === 'yes')}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="no">No</option>
            <option value="yes">Yes</option>
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