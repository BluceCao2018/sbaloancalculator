'use client';

import React, { useState } from 'react';
import BaseSBA504Calculator from './BaseSBA504Calculator';

export default function TexasSBA504Calculator() {
  const [isEnergyProject, setIsEnergyProject] = useState(false);
  const [manufacturingType, setManufacturingType] = useState<'standard' | 'advanced'>('standard');
  const [isExportBusiness, setIsExportBusiness] = useState(false);

  // 德州特定的默认值
  const defaultValues = {
    projectCost: 1000000,
    downPayment: 10,
    cdcRate: 4.75,
    bankRate: 6.25,
    term: 25
  };

  // 根据项目类型和制造业类型调整利率
  const getAdjustedRates = () => {
    let cdcRate = defaultValues.cdcRate;
    let bankRate = defaultValues.bankRate;

    // 能源项目折扣
    if (isEnergyProject) {
      cdcRate -= 0.375;
      bankRate -= 0.25;
    }

    // 制造业调整
    if (manufacturingType === 'advanced') {
      cdcRate -= 0.25;
      bankRate -= 0.125;
    }

    // 出口业务优惠
    if (isExportBusiness) {
      bankRate -= 0.2;
    }

    return { cdcRate, bankRate };
  };

  const adjustedRates = getAdjustedRates();

  return (
    <div className="space-y-8">
      {/* 德州特定选项 */}
      <div className="grid gap-6 md:grid-cols-2">
        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Energy Project
          </label>
          <select
            value={isEnergyProject ? 'yes' : 'no'}
            onChange={(e) => setIsEnergyProject(e.target.value === 'yes')}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>

        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Manufacturing Type
          </label>
          <select
            value={manufacturingType}
            onChange={(e) => setManufacturingType(e.target.value as 'standard' | 'advanced')}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="standard">Standard Manufacturing</option>
            <option value="advanced">Advanced Manufacturing</option>
          </select>
        </div>

        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Export Business
          </label>
          <select
            value={isExportBusiness ? 'yes' : 'no'}
            onChange={(e) => setIsExportBusiness(e.target.value === 'yes')}
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