export const planningCapabilities = {
  zh: {
    title: '产品规划与交付',
    summary: '从需求与业务规则，到验收与发布。',
    intro: '结合心理学与工商管理背景，从用户任务、行为表现和商业条件梳理产品问题。将研究发现与经营数据落实为需求、规则、原型和验收规格，协同研发、设计及测试推进具体功能的评审、验收与发布核验。',
    methods: [
      {
        title: '场景与需求定义',
        text: '结合角色职责、作业环境与实际任务识别需求，明确问题涉及的人群、场景及功能范围。将现场使用困难整理为功能改进方向，形成产品讨论与方案评审的依据。',
        projectId: 'station-control-research',
        evidence: '山地巡检与单板故障独立报警建议已纳入站控研究报告',
      },
      {
        title: '任务与业务规则建模',
        text: '依用户所处状态拆解操作步骤、所需信息与系统反馈，区分账号、设备、套餐权限和积分余额。梳理赠送、领取、订阅、升级、共存及到期规则，将权益变化落实为一致的操作流程。',
        projectId: 'ai-commercialization',
        evidence: '交付赠送、付费、升级、权益共存与到期处理的规则及流程规格',
      },
      {
        title: '数据分析与产品判断',
        text: '结合经营数据、用户反馈与客服问题分析产品表现，区分用户群体、渠道和版本条件。将指标变化与具体使用问题联系起来，整理迭代建议并支持广告链路及发布评估。',
        projectId: 'product-business',
        evidence: '承担 6 条消费端产品线的需求分析与经营诊断，参与版本、渠道及流失问题分析',
      },
      {
        title: '原型与验收规格',
        text: '将需求和业务规则落实到完整流程、原型及验收规格，明确界面状态、操作限制和异常回流。对照 PRD、用户说明与实际权限核对方案，让研发、设计和测试对功能范围及完成标准形成共同理解。',
        projectId: 'ai-commercialization',
        evidence: '订阅原型覆盖 15 类账户场景、8 类请求及载入结果，并统一赠送、升级与 Credits 说明',
      },
      {
        title: '异常路径与产品验收',
        text: '将支付失败、断网、余额不足、权益变化及退出回流纳入产品检查，核对系统反馈与后续操作。结合具体用户状态确认流程和权限，协同研发及测试跟进问题修改与验收。',
        projectId: 'ai-commercialization',
        evidence: '完成支付失败回退、零余额能力限制及赠送期切换等具体路径验收',
      },
      {
        title: '发布核验与内容一致性',
        text: '按技能标识和语言配置组织批量内容，区分资料准备、测试与正式环境。写入后回读或抽查，核对语义、品牌、数量和权益说明，确认内容、规则与实际功能状态保持一致。',
        projectId: 'international-product',
        evidence: '19 条技能、46 个语言配置，共 874 组内容完成正式服写入与抽查',
      },
    ],
    projects: ['station-control-research', 'ai-commercialization', 'product-business', 'international-product'],
    boundary: '本人承担需求分析、产品方案、规则评审、产品验收及发布核验工作，算法、工程、视觉实现与测试由相应团队协作完成。研究建议、设计交付、验收通过与正式上线按具体项目和功能分别说明。',
  },
  en: {
    title: 'Product planning & delivery',
    summary: 'From requirements and business rules to acceptance and release.',
    intro: 'Bring a background in psychology and business administration to understanding user tasks, observed behavior and business conditions. Translate research findings and operating data into requirements, rules, prototypes and acceptance specifications, coordinating engineering, design and QA on reviews, acceptance and release checks for specific features.',
    methods: [
      {
        title: 'Context and requirement definition',
        text: 'Identify needs through users’ responsibilities, working environments and actual tasks, defining the people, contexts and functions involved. Translate field-use difficulties into improvement proposals that inform product discussions and plan reviews.',
        projectId: 'station-control-research',
        evidence: 'Mountain-site inspection and individual-panel fault-alert proposals documented in the research report',
      },
      {
        title: 'Task and business-rule modeling',
        text: 'Break down actions, required information and system feedback in relation to the user’s current state, separating accounts, devices, plan permissions and Credits balances. Map gifts, claims, subscriptions, upgrades, coexistence and expiry into consistent flows for changes in entitlements.',
        projectId: 'ai-commercialization',
        evidence: 'Delivered rules and flow specifications for gifts, paid plans, upgrades, coexisting entitlements and expiry',
      },
      {
        title: 'Data analysis and product decisions',
        text: 'Analyze product performance using business data, user feedback and support issues, distinguishing user groups, channels and release conditions. Connect metric changes to specific use problems, developing iteration proposals and informing advertising-flow and release evaluations.',
        projectId: 'product-business',
        evidence: 'Requirements and business analysis across 6 consumer product lines, including release, channel and churn investigation',
      },
      {
        title: 'Prototypes and acceptance specifications',
        text: 'Translate requirements and business rules into complete flows, prototypes and acceptance specifications, including interface states, operating limits and exception recovery. Check plans against requirements, user guidance and actual permissions, establishing a shared understanding of scope and completion criteria with engineering, design and QA.',
        projectId: 'ai-commercialization',
        evidence: 'Subscription prototype covering 15 account scenarios, 8 request and loading outcomes, with aligned gift, upgrade and Credits guidance',
      },
      {
        title: 'Exception paths and product acceptance',
        text: 'Include payment failures, offline conditions, insufficient balances, entitlement changes and return paths in product checks, covering system feedback and next actions. Confirm flows and permissions for specific user states, following fixes and acceptance with engineering and QA.',
        projectId: 'ai-commercialization',
        evidence: 'Accepted specific paths for payment-failure recovery, zero-balance restrictions and gift-period transitions',
      },
      {
        title: 'Release checks and content consistency',
        text: 'Organize batch content by skill identifier and language configuration, separating preparation, test and production stages. Read back or sample written content, checking meaning, brands, quantities and entitlement guidance against the actual rules and feature states.',
        projectId: 'international-product',
        evidence: 'Completed production writes and spot checks for 874 content groups across 19 skills and 46 language configurations',
      },
    ],
    projects: ['station-control-research', 'ai-commercialization', 'product-business', 'international-product'],
    boundary: 'My work covers requirements analysis, product plans, rule reviews, product acceptance and release verification. Algorithm, engineering, visual implementation and testing involve the respective teams. Research proposals, design delivery, acceptance and production release are stated separately for specific projects and features.',
  },
};
