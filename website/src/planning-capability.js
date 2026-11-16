export const planningCapabilities = {
  zh: {
    title: '产品规划与交付',
    summary: '将需求转为规则、方案与验收标准。',
    intro: '依据用户研究、经营数据与业务条件，明确功能范围和方案取舍。将需求落实为操作流程、业务规则、原型及验收规格，说明不同用户状态下的产品行为，使研发、设计与测试有据可依。',
    methods: [
      {
        title: '需求范围与功能定义',
        text: '依据研究发现明确需求人群、任务与作业条件，将现场困难转为功能建议。',
        projectId: 'station-control-research',
        evidence: '山地巡检与单板故障独立报警建议已纳入站控研究报告',
      },
      {
        title: '流程与业务规则',
        text: '按用户状态拆解操作步骤、所需信息与系统反馈，明确账号、设备、套餐权限和积分余额的关系。梳理赠送、领取、订阅、升级、共存及到期规则，保证不同入口与状态下的权益处理一致。',
        projectId: 'ai-commercialization',
        evidence: '交付赠送、付费、升级、权益共存与到期处理的规则及流程规格',
      },
      {
        title: '数据分析与方案取舍',
        text: '结合经营数据、用户反馈与客服问题分析产品表现，区分用户群体、渠道和版本条件。将指标变化对应到使用问题与广告链路，整理需求及迭代建议，为方案取舍提供依据。',
        projectId: 'product-business',
        evidence: '承担 6 条消费端产品线的需求分析与经营诊断，参与版本、渠道及流失问题分析',
      },
      {
        title: '原型与需求规格',
        text: '将业务规则落实到完整流程与原型，说明界面状态、操作限制和异常回流。对照 PRD、用户说明与实际权限核对方案，使流程、界面与文字说明对应同一套规则。',
        projectId: 'ai-commercialization',
        evidence: '订阅原型覆盖 15 类账户场景、8 类请求及载入结果，并统一赠送、升级与 Credits 说明',
      },
      {
        title: '验收条件与功能核对',
        text: '明确正常与异常路径的预期结果，将支付失败、断网、余额不足、权益变化及退出回流纳入验收。按具体用户状态核对系统反馈、权限限制与后续操作，以规格为依据确认功能完成情况。',
        projectId: 'ai-commercialization',
        evidence: '完成支付失败回退、零余额能力限制及赠送期切换等具体路径验收',
      },
      {
        title: '内容与规则一致性',
        text: '按技能标识和语言配置组织批量内容，核对语义、品牌、数量和权益说明。通过写入后的回读与抽查，确认不同语言内容与产品规则、实际功能状态保持一致。',
        projectId: 'international-product',
        evidence: '19 条技能、46 个语言配置，共 874 组内容完成正式服写入与抽查',
      },
    ],
    projects: ['energy-product-planning', 'station-control-research', 'ai-commercialization', 'product-business', 'international-product'],
    boundary: '本人承担需求分析、产品方案、业务规则、原型规格及产品验收工作，算法、工程、视觉实现与测试由相应团队协作完成。',
  },
  en: {
    title: 'Product planning & delivery',
    summary: 'Turn requirements into rules, designs and acceptance criteria.',
    intro: 'Use research findings, operating data and business conditions to define feature scope and compare options. Translate requirements into flows, business rules, prototypes and acceptance specifications, making product behavior across user states explicit for engineering, design and QA.',
    methods: [
      {
        title: 'Requirement scope and feature definition',
        text: 'Use research findings to define the people, tasks and working conditions behind a need, translating practical difficulties into feature proposals.',
        projectId: 'station-control-research',
        evidence: 'Mountain-site inspection and individual-panel fault-alert proposals documented in the research report',
      },
      {
        title: 'Flows and business rules',
        text: 'Break down actions, required information and system feedback by user state, defining the relationships among accounts, devices, plan permissions and Credits balances. Specify gifts, claims, subscriptions, upgrades, coexistence and expiry so entitlements behave consistently across entry points and states.',
        projectId: 'ai-commercialization',
        evidence: 'Delivered rules and flow specifications for gifts, paid plans, upgrades, coexisting entitlements and expiry',
      },
      {
        title: 'Data analysis and design trade-offs',
        text: 'Analyze product performance using operating data, user feedback and support issues, distinguishing user groups, channels and release conditions. Relate metric changes to use problems and advertising flows, developing requirements and iteration proposals to inform design trade-offs.',
        projectId: 'product-business',
        evidence: 'Requirements and business analysis across 6 consumer product lines, including release, channel and churn investigation',
      },
      {
        title: 'Prototypes and requirement specifications',
        text: 'Translate business rules into complete flows and prototypes, specifying interface states, operating limits and exception recovery. Check plans against requirements, user guidance and actual permissions so flows, interfaces and written guidance follow the same rules.',
        projectId: 'ai-commercialization',
        evidence: 'Subscription prototype covering 15 account scenarios, 8 request and loading outcomes, with aligned gift, upgrade and Credits guidance',
      },
      {
        title: 'Acceptance criteria and feature checks',
        text: 'Define expected outcomes for standard and exception paths, including payment failures, offline conditions, insufficient balances, entitlement changes and return paths. Check system feedback, access limits and next actions for specific user states, confirming completion against the specifications.',
        projectId: 'ai-commercialization',
        evidence: 'Accepted specific paths for payment-failure recovery, zero-balance restrictions and gift-period transitions',
      },
      {
        title: 'Content and rule consistency',
        text: 'Organize batch content by skill identifier and language configuration, checking meaning, brands, quantities and entitlement guidance. Use readback and spot checks after writing to verify that localized content matches product rules and actual feature states.',
        projectId: 'international-product',
        evidence: 'Completed production writes and spot checks for 874 content groups across 19 skills and 46 language configurations',
      },
    ],
    projects: ['energy-product-planning', 'station-control-research', 'ai-commercialization', 'product-business', 'international-product'],
    boundary: 'My work covers requirements analysis, product plans, business rules, prototype specifications and product acceptance. Algorithm, engineering, visual implementation and testing involve the respective teams.',
  },
};
