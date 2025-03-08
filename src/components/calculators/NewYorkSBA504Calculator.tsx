'use client';

import React, { useState } from 'react';
import BaseSBA504Calculator from './BaseSBA504Calculator';

export default function NewYorkSBA504Calculator() {
  const [isMixedUse, setIsMixedUse] = useState(false);
  const [isHistoricBuilding, setIsHistoricBuilding] = useState(false);
  const [urbanDevelopmentZone, setUrbanDevelopmentZone] = useState(false);
  const [energyEfficiencyTier, setEnergyEfficiencyTier] = useState<1 | 2 | 3>(1);

  // 纽约特定的默认值
  const defaultValues = {
    projectCost: 1000000,
    downPayment: 10,
    cdcRate: 5.0,
    bankRate: 6.75,
    term: 25
  };

  // 根据项目类型和位置调整利率
  const getAdjustedRates = () => {
    let cdcRate = defaultValues.cdcRate;
    let bankRate = defaultValues.bankRate;

    // 混合用途物业优惠
    if (isMixedUse) {
      bankRate -= 0.125;
    }

    // 历史建筑优惠
    if (isHistoricBuilding) {
      cdcRate -= 0.25;
      bankRate -= 0.125;
    }

    // 城市发展区优惠
    if (urbanDevelopmentZone) {
      cdcRate -= 0.375;
      bankRate -= 0.25;
    }

    // 能源效率等级优惠
    switch (energyEfficiencyTier) {
      case 3:
        cdcRate -= 0.5;
        bankRate -= 0.375;
        break;
      case 2:
        cdcRate -= 0.25;
        bankRate -= 0.25;
        break;
      // Tier 1 无优惠
    }

    return { cdcRate, bankRate };
  };

  const adjustedRates = getAdjustedRates();

  return (
    <div className="space-y-8">
      {/* 纽约特定选项 */}
      <div className="grid gap-6 md:grid-cols-2">
        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Mixed-Use Property
          </label>
          <select
            value={isMixedUse ? 'yes' : 'no'}
            onChange={(e) => setIsMixedUse(e.target.value === 'yes')}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="no">Single Use</option>
            <option value="yes">Mixed Use</option>
          </select>
        </div>

        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Historic Building
          </label>
          <select
            value={isHistoricBuilding ? 'yes' : 'no'}
            onChange={(e) => setIsHistoricBuilding(e.target.value === 'yes')}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>

        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Urban Development Zone
          </label>
          <select
            value={urbanDevelopmentZone ? 'yes' : 'no'}
            onChange={(e) => setUrbanDevelopmentZone(e.target.value === 'yes')}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>

        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Energy Efficiency Tier
          </label>
          <select
            value={energyEfficiencyTier}
            onChange={(e) => setEnergyEfficiencyTier(Number(e.target.value) as 1 | 2 | 3)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          >
            <option value={1}>Tier 1 (Standard)</option>
            <option value={2}>Tier 2 (Enhanced)</option>
            <option value={3}>Tier 3 (Superior)</option>
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