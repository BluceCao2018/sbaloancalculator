interface BaseCalculation {
  monthlyPaymentCDC: number;
  monthlyPaymentBank: number;
  totalMonthlyPayment: number;
  downPayment: number;
  cdcLoanAmount: number;
  bankLoanAmount: number;
  totalInterest: number;
}

interface StateSpecificFactors {
  // 加州特定
  isGreenBuilding?: boolean;
  earthquakeZone?: 'high' | 'medium' | 'low';
  
  // 佛州特定
  floodZone?: 'X' | 'A' | 'V';
  hurricaneZone?: boolean;
  
  // 德州特定
  energyProject?: boolean;
  manufacturingType?: 'standard' | 'advanced';
  
  // 纽约特定
  historicBuilding?: boolean;
  urbanDevelopmentZone?: boolean;
  energyEfficiencyTier?: 1 | 2 | 3;
}

// 加州特定计算
export function applyCARules(baseCalc: BaseCalculation, factors: StateSpecificFactors): BaseCalculation {
  let result = { ...baseCalc };
  
  // 环保建筑折扣
  if (factors.isGreenBuilding) {
    result.cdcLoanAmount *= 0.975; // 2.5% 折扣
    result.monthlyPaymentCDC *= 0.975;
  }
  
  // 地震保险成本
  const earthquakeInsuranceCost = {
    high: 0.005,    // 0.5% 年度保险费
    medium: 0.003,  // 0.3% 年度保险费
    low: 0.001     // 0.1% 年度保险费
  }[factors.earthquakeZone || 'low'];
  
  // 添加地震保险到月供
  const monthlyInsurance = (baseCalc.cdcLoanAmount + baseCalc.bankLoanAmount) * 
                          earthquakeInsuranceCost / 12;
  
  result.totalMonthlyPayment += monthlyInsurance;
  
  return result;
}

// 佛州特定计算
export function applyFLRules(baseCalc: BaseCalculation, factors: StateSpecificFactors): BaseCalculation {
  let result = { ...baseCalc };
  
  // 洪水保险费率
  const floodInsuranceRate = {
    'X': 0.001, // 0.1% 年度保险费
    'A': 0.005, // 0.5% 年度保险费
    'V': 0.01   // 1.0% 年度保险费
  }[factors.floodZone || 'X'];
  
  // 飓风保险（如果在飓风区）
  const hurricaneInsurance = factors.hurricaneZone ? 0.006 : 0; // 0.6% 年度保险费
  
  // 添加保险成本到月供
  const monthlyInsurance = (baseCalc.cdcLoanAmount + baseCalc.bankLoanAmount) * 
                          (floodInsuranceRate + hurricaneInsurance) / 12;
  
  result.totalMonthlyPayment += monthlyInsurance;
  
  return result;
}

// 德州特定计算
export function applyTXRules(baseCalc: BaseCalculation, factors: StateSpecificFactors): BaseCalculation {
  let result = { ...baseCalc };
  
  // 能源项目折扣
  if (factors.energyProject) {
    result.cdcLoanAmount *= 0.97; // 3% 折扣
    result.monthlyPaymentCDC *= 0.97;
  }
  
  // 制造业优惠
  if (factors.manufacturingType === 'advanced') {
    result.bankLoanAmount *= 0.985; // 1.5% 折扣
    result.monthlyPaymentBank *= 0.985;
  }
  
  // 无州所得税影响已经体现在基础计算中
  
  return result;
}

// 纽约特定计算
export function applyNYRules(baseCalc: BaseCalculation, factors: StateSpecificFactors): BaseCalculation {
  let result = { ...baseCalc };
  
  // 历史建筑额外成本
  if (factors.historicBuilding) {
    const historicPreservationCost = baseCalc.cdcLoanAmount * 0.02; // 2% 额外成本
    result.totalMonthlyPayment += historicPreservationCost / (25 * 12); // 分摊到25年
  }
  
  // 城市开发区优惠
  if (factors.urbanDevelopmentZone) {
    result.cdcLoanAmount *= 0.98; // 2% 折扣
    result.monthlyPaymentCDC *= 0.98;
  }
  
  // 能效要求成本
  const energyEfficiencyCost = {
    1: 0.01, // 1% 额外成本
    2: 0.02, // 2% 额外成本
    3: 0.03  // 3% 额外成本
  }[factors.energyEfficiencyTier || 1];
  
  const monthlyEnergyCost = baseCalc.cdcLoanAmount * energyEfficiencyCost / (25 * 12);
  result.totalMonthlyPayment += monthlyEnergyCost;
  
  return result;
}

// 基础计算函数
export function calculateBaseLoan(inputs: {
  projectCost: number;
  interestRateCDC: number;
  interestRateBank: number;
  loanTerm: number;
  propertyType: string;
}): BaseCalculation {
  // CDC贷款金额 (40%)
  const cdcLoanAmount = inputs.projectCost * 0.4;
  
  // 银行贷款金额 (50%)
  const bankLoanAmount = inputs.projectCost * 0.5;
  
  // 首付 (10%)
  const downPayment = inputs.projectCost * 0.1;
  
  // 计算月供
  const monthlyPaymentCDC = calculateMonthlyPayment(cdcLoanAmount, inputs.interestRateCDC, inputs.loanTerm);
  const monthlyPaymentBank = calculateMonthlyPayment(bankLoanAmount, inputs.interestRateBank, inputs.loanTerm);
  const totalMonthlyPayment = monthlyPaymentCDC + monthlyPaymentBank;
  
  // 计算总利息
  const totalInterest = (monthlyPaymentCDC + monthlyPaymentBank) * inputs.loanTerm * 12 - 
                       (cdcLoanAmount + bankLoanAmount);
  
  return {
    monthlyPaymentCDC,
    monthlyPaymentBank,
    totalMonthlyPayment,
    downPayment,
    cdcLoanAmount,
    bankLoanAmount,
    totalInterest
  };
}

function calculateMonthlyPayment(principal: number, annualRate: number, years: number): number {
  const monthlyRate = annualRate / 100 / 12;
  const numberOfPayments = years * 12;
  return principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments) / 
         (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
} 