
import { IndexData, PracticalStep } from './types';

export const INDICES: IndexData[] = [
  {
    id: 'sse',
    code: '000001',
    name: '上证指数',
    definition: '传统主板的旗帜',
    metaphor: '国家队和传统经济的大本营',
    composition: ['银行', '保险', '能源', '基建'],
    significance: '它的走势代表了中国经济基本盘的冷暖和政策的温度',
    color: '#ef4444',
    sectors: [{ name: '金融', weight: 40 }, { name: '工业', weight: 20 }, { name: '能源', weight: 20 }, { name: '其他', weight: 20 }]
  },
  {
    id: 'szse',
    code: '399001',
    name: '深证成指',
    definition: '创新民营的聚集地',
    metaphor: '汇聚科技、消费龙头',
    composition: ['宁德时代', '比亚迪', '美的'],
    significance: '它的波动直接反映了市场对经济增长和产业升级的预期',
    color: '#3b82f6',
    sectors: [{ name: '科技', weight: 35 }, { name: '消费', weight: 30 }, { name: '制造', weight: 25 }, { name: '其他', weight: 10 }]
  },
  {
    id: 'csi300',
    code: '000300',
    name: '沪深300',
    definition: '核心资产的集合',
    metaphor: 'A股的绝对主力',
    composition: ['市值最大', '影响力最强', '300家公司'],
    significance: '看大盘整体牛熊，第一眼就盯着它',
    color: '#f59e0b',
    sectors: [{ name: '蓝筹', weight: 50 }, { name: '白马', weight: 30 }, { name: '其他', weight: 20 }]
  },
  {
    id: 'csi500',
    code: '000905',
    name: '中证500',
    definition: '成长中坚的舞台',
    metaphor: '细分行业的隐形冠军',
    composition: ['301-800名公司', '中型市值'],
    significance: '它涨意味着行情有广度和活力，资金在找未来龙头',
    color: '#10b981',
    sectors: [{ name: '中盘', weight: 60 }, { name: '成长', weight: 30 }, { name: '其他', weight: 10 }]
  },
  {
    id: 'csi1000',
    code: '000852',
    name: '中证1000',
    definition: '小盘情绪的放大器',
    metaphor: '散户与投机的情绪指标',
    composition: ['小市值1000家', '高波动'],
    significance: '它狂飙说明投机高涨，阴跌意味着风险收缩',
    color: '#8b5cf6',
    sectors: [{ name: '小盘', weight: 70 }, { name: '投机', weight: 20 }, { name: '其他', weight: 10 }]
  },
  {
    id: 'sse50',
    code: '000016',
    name: '上证50',
    definition: '价值蓝筹的定盘星',
    metaphor: '核心资产的精华浓缩',
    composition: ['贵州茅台', '大型银行'],
    significance: '它强势意味着风格保守，资金在抱团确定性',
    color: '#dc2626',
    sectors: [{ name: '极度核心', weight: 80 }, { name: '其他', weight: 20 }]
  },
  {
    id: 'chinext',
    code: '399006',
    name: '创业板指',
    definition: '新兴成长的温度计',
    metaphor: '高增长赛道的领跑者',
    composition: ['新能源', '生物医药'],
    significance: '它比沪深300强，说明风险偏好高，资金在追逐高增长',
    color: '#06b6d4',
    sectors: [{ name: '新能源', weight: 45 }, { name: '医药', weight: 35 }, { name: '其他', weight: 20 }]
  },
  {
    id: 'star50',
    code: '000688',
    name: '科创50',
    definition: '硬科技冲锋的号角',
    metaphor: '科技自主的最激进押注',
    composition: ['半导体', '高端制造'],
    significance: '它的活跃度代表了市场对科技突围的信心',
    color: '#ec4899',
    sectors: [{ name: '芯片', weight: 40 }, { name: '先进制造', weight: 40 }, { name: '其他', weight: 20 }]
  }
];

export const PRACTICAL_STEPS: PracticalStep[] = [
  {
    id: 1,
    title: '定基调',
    subtitle: 'Step 1: 观大势',
    description: '每天开盘先看沪深300是红是绿',
    advice: '快速判断市场整体是行情向好还是行情偏弱。'
  },
  {
    id: 2,
    title: '看风格',
    subtitle: 'Step 2: 辨风向',
    description: '对比上证50和创业板指，谁跑得更快',
    advice: '价值优则偏防守，成长优则看赛道型机会。'
  },
  {
    id: 3,
    title: '找工具',
    subtitle: 'Step 3: 选武器',
    description: '选方向而不选个股',
    advice: '购买对应的指数基金（ETF）是最简单直接的方法。'
  }
];
