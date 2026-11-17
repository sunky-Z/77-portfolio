export const projectGroups = [
  {
    id: 'ai',
    projects: ['ai-ecosystem', 'skill-ecosystem', 'ai-commercialization', 'international-product', 'product-business'],
    title: { zh: 'AI 产品与商业化', en: 'AI products & monetization' },
    navigationSummary: { zh: 'AI 助手与消费端工具', en: 'AI assistant and consumer tools' },
    description: {
      zh: 'DroiClaw 的任务、技能、订阅与海外适配，以及消费端工具的分析和版本交付。',
      en: 'DroiClaw tasks, skills, subscriptions and overseas adaptation, plus analysis and releases for consumer tools.',
    },
  },
  {
    id: 'research',
    projects: ['energy-product-planning', 'station-control-research', 'hardware-human-factors', 'hardware-research'],
    title: { zh: '用户研究与产品设计', en: 'User research & product design' },
    navigationSummary: { zh: '能源行业与打印设备研究', en: 'Energy and printer research' },
    description: {
      zh: '能源市场、充电人群、电站运维与打印操作研究，以及需求排序、功能规划和产品形态设计。',
      en: 'Energy-market, charging-user, plant-operations and printer research, with requirement priorities, feature planning and product-form design.',
    },
  },
];

export const projectProducts = [
  {
    id: 'droiclaw',
    areaId: 'ai',
    company: 'DROI',
    title: { zh: 'DroiClaw AI 助手', en: 'DroiClaw AI assistant' },
    description: {
      zh: '面向移动终端的 AI 助手；任务体验、技能治理、订阅和海外适配是同一产品的四个专题。',
      en: 'One mobile AI assistant, covered through four topics: task experience, skill management, subscriptions and overseas adaptation.',
    },
    projects: ['ai-ecosystem', 'skill-ecosystem', 'ai-commercialization', 'international-product'],
  },
];

export const projectProductFor = projectId => projectProducts.find(product => product.projects.includes(projectId));

export const projectBriefs = {
  'ai-ecosystem': {
    context: {
      zh: 'DroiClaw 在移动终端上提供主动服务、智能通知和任务执行功能。',
      en: 'DroiClaw provides proactive services, smart notifications and task execution on mobile devices.',
    },
    status: {
      zh: '卡片关闭后继续执行、对话结果回看和出行规划信息补充已上线；照片清理已交付完整流程原型。',
      en: 'Continued execution after card dismissal, result retrieval in the conversation and travel-planning clarification are live. A complete photo-cleanup flow prototype has been delivered.',
    },
  },
  'skill-ecosystem': {
    context: {
      zh: 'DroiClaw 技能的使用流程包括查找、阅读说明、安装及后续更新。',
      en: 'Using DroiClaw skills involves finding them, reading guidance, installing them and managing updates.',
    },
    status: {
      zh: 'Find-Skill 已在正式服上架；首批技能标签更新已保存并回读核验。',
      en: 'Find-Skill is in production. The first batch of skill-tag updates has been saved and verified by readback.',
    },
  },
  'ai-commercialization': {
    context: {
      zh: 'DroiClaw 订阅需要处理设备赠送、付费套餐、Credits 余额及权益变化。',
      en: 'DroiClaw subscriptions need rules for device-bundled benefits, paid plans, Credits balances and entitlement changes.',
    },
    status: {
      zh: '订阅相关服务端内容已上线；部分支付与权限路径、国内福利中心已完成验收。',
      en: 'Subscription-related server features are live. Acceptance checks are complete for specific payment and access paths and the domestic rewards center.',
    },
  },
  'international-product': {
    context: {
      zh: 'DroiClaw 海外版本需要多语言技能说明，以及对应的套餐、奖励规则和演示资料。',
      en: 'Overseas DroiClaw needs multilingual skill guidance and the corresponding plans, reward rules and demo materials.',
    },
    status: {
      zh: '多语言技能内容已写入正式服并抽查；奖励规则和演示资料已交付。',
      en: 'Multilingual skill content has been saved to production and spot-checked. Reward rules and demo materials have been delivered.',
    },
  },
  'energy-research': {
    context: {
      zh: '能源产品研究需要结合行业情况、使用者职责和现场作业条件。',
      en: 'Energy product research needs industry context, user responsibilities and on-site working conditions.',
    },
    status: {
      zh: '已整理市场与用户研究结论、关键用户旅程，以及需求和体验评估建议。',
      en: 'Outputs include market and user research findings, key user journeys, requirements and experience-evaluation recommendations.',
    },
  },
  'energy-product-planning': {
    context: {
      zh: '研究充电网络的市场与人群差异，并为 C 端户用光伏软件规划能源使用功能。',
      en: 'Research into charging-network markets and user differences, alongside energy-use feature planning for residential solar software.',
    },
    status: {
      zh: '已形成充电人群分层、需求排序和体验建议，并开展户用光伏智能功能规划。',
      en: 'Outputs include charging-user segmentation, requirement priorities and experience recommendations, alongside residential solar smart-feature planning.',
    },
  },
  'station-control-research': {
    context: {
      zh: '地面光伏电站 SaaS 管理系统与逆变器配合使用，客户包括能源企业和小型电站业主。',
      en: 'A SaaS management system used with inverters at ground-mounted solar plants, serving energy companies and smaller plant owners.',
    },
    status: {
      zh: '已完成用户研究报告，包含辅助巡检和单板故障独立报警的功能建议。',
      en: 'The completed user research report includes proposals for assisted inspection and individual-panel fault alerts.',
    },
  },
  'hardware-research': {
    context: {
      zh: '银行市级分行的打印设备用于前厅业务和楼内办公，两类岗位的任务和需求不同。',
      en: 'Printers at a municipal-level bank branch serve counter staff and office workers, whose tasks and needs differ.',
    },
    status: {
      zh: '已完成调研和数据分析，整理出前厅业务与楼内办公的需求差异。',
      en: 'Fieldwork and data analysis are complete, with findings on the differences between counter-service and office needs.',
    },
  },
  'hardware-human-factors': {
    context: {
      zh: '比较不同部件布局下，站姿与坐姿用户操作面板、放纸和取纸的表现。',
      en: 'A comparison of panel operation, paper loading and retrieval across component layouts and standing and seated use.',
    },
    status: {
      zh: '已完成研究、评估和产品形态设计，相关产品最终投产。',
      en: 'Research, evaluation and product-form design are complete. The product entered production.',
    },
  },
  'product-business': {
    context: {
      zh: '6 条消费端工具产品线需要结合用户需求、经营数据和广告链路安排迭代与发布。',
      en: 'Iteration and releases across six consumer-tool product lines draw on user needs, operating data and advertising flows.',
    },
    status: {
      zh: '已形成经营与用户问题分析、广告链路需求和原型，以及版本评估资料。',
      en: 'Outputs include business and user-issue analysis, advertising requirements and prototypes, and release-evaluation material.',
    },
  },
};
