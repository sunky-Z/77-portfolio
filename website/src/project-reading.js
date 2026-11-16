export const projectGroups = [
  {
    id: 'ai',
    projects: ['ai-ecosystem', 'skill-ecosystem', 'ai-commercialization', 'international-product', 'product-business'],
    title: { zh: 'AI 产品与商业化', en: 'AI products & monetization' },
    description: {
      zh: 'DroiClaw AI 助手的产品专题，以及消费端工具产品的分析与交付实践。',
      en: 'Product topics within the DroiClaw AI assistant, alongside analysis and delivery across consumer tools.',
    },
  },
  {
    id: 'research',
    projects: ['hardware-human-factors', 'station-control-research', 'hardware-research'],
    title: { zh: '用户研究与产品设计', en: 'User research & product design' },
    description: {
      zh: '结合真实作业与操作场景，呈现研究分析、需求判断与产品形态设计。',
      en: 'Research, requirements and product-form design grounded in actual working contexts and interactions.',
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
      zh: '面向移动终端的 AI 助手。以下四个专题分别呈现任务体验、技能生态、订阅权益与海外适配，属于同一产品的不同工作方向。',
      en: 'An AI assistant for mobile devices. The four topics below cover task experience, the skill ecosystem, subscription entitlements and localization within the same product.',
    },
    projects: ['ai-ecosystem', 'skill-ecosystem', 'ai-commercialization', 'international-product'],
  },
];

export const projectProductFor = projectId => projectProducts.find(product => product.projects.includes(projectId));

export const projectBriefs = {
  'ai-ecosystem': {
    context: {
      zh: 'DroiClaw AI 助手在移动终端中提供主动服务、智能通知与任务执行体验。',
      en: 'DroiClaw is an AI assistant for mobile devices, with proactive services, smart notifications and task execution.',
    },
    status: {
      zh: '卡片关闭与对话结果回看、出行规划信息补充流程已上线；照片清理已交付完整流程原型。',
      en: 'Card dismissal with result retrieval in the conversation, and the travel-planning clarification flow, are live; a complete photo-cleanup flow prototype has been delivered.',
    },
  },
  'skill-ecosystem': {
    context: {
      zh: 'DroiClaw AI 助手的技能使用涉及发现、理解、安装与后续更新。',
      en: 'Skills in the DroiClaw AI assistant need to be discovered, understood, installed and kept up to date.',
    },
    status: {
      zh: 'Find-Skill 已正式服上架，首批技能标签更新已完成保存与回读核验。',
      en: 'Find-Skill has been released to production, and the first batch of skill-tag updates has been saved and verified by readback.',
    },
  },
  'ai-commercialization': {
    context: {
      zh: 'DroiClaw AI 助手的订阅场景涉及设备赠送、付费套餐、Credits 与权益变化。',
      en: 'DroiClaw subscriptions involve device-bundled benefits, paid plans, Credits and changes in entitlements.',
    },
    status: {
      zh: '订阅相关服务端内容已上线，部分支付与权限路径及国内福利中心已完成验收。',
      en: 'Subscription-related server features are live; specific payment and access paths, along with the domestic rewards center, have completed acceptance checks.',
    },
  },
  'international-product': {
    context: {
      zh: 'DroiClaw AI 助手的海外版本需要适配技能、套餐、奖励规则与产品演示内容。',
      en: 'The overseas version of DroiClaw requires adapted skill content, plans, reward rules and product demonstrations.',
    },
    status: {
      zh: '多语言技能内容已完成正式服写入与抽查，奖励规则及演示资料已交付。',
      en: 'Multilingual skill content has been written to production and spot-checked; reward rules and demonstration materials have been delivered.',
    },
  },
  'energy-research': {
    context: {
      zh: '能源产品的规划与体验评估涉及行业背景、用户角色及具体使用情境。',
      en: 'Energy product planning and experience evaluation involve industry context, user roles and specific situations of use.',
    },
    status: {
      zh: '已形成市场与用户洞察、关键用户旅程及需求与体验评估建议。',
      en: 'Outputs include market and user insights, key user journeys, requirements and experience-evaluation recommendations.',
    },
  },
  'station-control-research': {
    context: {
      zh: '地面光伏电站 SaaS 管理系统配合逆变器提供服务，面向能源企业及小型电站业主。',
      en: 'A SaaS management system for ground-mounted solar plants works alongside inverters, serving energy companies and smaller plant owners.',
    },
    status: {
      zh: '已完成用户研究报告，辅助巡检与单板故障独立报警作为功能建议纳入报告。',
      en: 'The user research report is complete, with assisted inspection and individual-panel fault alerts documented as feature proposals.',
    },
  },
  'hardware-research': {
    context: {
      zh: '银行市级分行的打印设备同时服务于前厅业务与楼内办公，使用角色和任务各有差异。',
      en: 'Printing equipment at a municipal-level bank branch serves both counter services and office work, with different users and tasks.',
    },
    status: {
      zh: '已完成调研与数据分析，形成前厅业务与楼内办公的需求差异结论。',
      en: 'Research and data analysis are complete, with findings on the differing needs of counter services and office work.',
    },
  },
  'hardware-human-factors': {
    context: {
      zh: '打印设备的面板操作、放纸与取纸涉及站姿、坐姿及不同部件布局。',
      en: 'Printer-panel operation, paper loading and retrieval involve standing and seated use across different component layouts.',
    },
    status: {
      zh: '已完成研究评估与产品形态设计，相关产品最终投产。',
      en: 'The research, evaluation and product-form design are complete, and the product entered production.',
    },
  },
  'product-business': {
    context: {
      zh: '6 条消费端工具产品线的迭代涉及用户需求、经营表现、广告链路与版本发布。',
      en: 'Iteration across six consumer-tool product lines involves user needs, business performance, advertising flows and releases.',
    },
    status: {
      zh: '已形成经营与用户问题分析、广告链路需求及原型、版本评估资料。',
      en: 'Outputs include business and user-issue analysis, advertising requirements and prototypes, and release-evaluation material.',
    },
  },
};
