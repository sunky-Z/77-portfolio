export const aiCapabilities = {
  zh: {
    title: 'AI 产品设计',
    summary: '从场景定义，到 Agent 应用与产品交付。',
    intro: '围绕 AI 助手与 Agent 应用，负责场景规划、任务交互、技能治理与应用评估。将用户需求、能力边界和商业规则转化为流程、原型及验收规格，协同算法、研发、设计与测试推进模块交付。',
    methods: [
      {
        title: '场景规划与产品定义',
        text: '从用户任务出发组织主动服务，明确服务来源、展示时机、操作入口与退出条件。主导 AI 纪要向智能通知的产品升级，将场景要求落实到卡片、流程和验收规则。',
        projectId: 'ai-ecosystem',
        evidence: '四类主动服务，交付 29 套卡片模板与 38 个视觉变体',
      },
      {
        title: 'Agent 任务交互与人机协作',
        text: '设计任务发起、执行反馈、信息补充、授权确认与结果查看，明确用户介入和异常处理方式。区分停止展示、停止执行与删除记录，补齐任务退出后的结果找回路径。',
        projectId: 'ai-ecosystem',
        evidence: '完成主动服务卡片及智能通知相关验收，交付照片清理完整流程原型',
      },
      {
        title: '技能供给与检索设计',
        text: '以共享分类、精确检索和结构化说明组织技能供给，贯通发现、理解、安装与首次使用。按用途、输入、输出及操作边界规范内容，并衔接版本、兼容与发布状态。',
        projectId: 'skill-ecosystem',
        evidence: '295 个标签整理为 47 个共享标签，首批 197 条更新完成回读核验',
      },
      {
        title: 'Agent 运营工作流',
        text: '将技能审核、可用性验证和批量上传组织为 Agent 工作流，明确包文件、元数据及版本校验要求。衔接安装状态、审核发布与发布后核验，推进重复运营任务的流程化处理。',
        projectId: 'skill-ecosystem',
        evidence: '完成技能审核与可用性验证 Agent 设计，跑通批量上传技能 Agent 流程',
      },
      {
        title: '应用评估与质量治理',
        text: '结合人工评价、脚本检查与问题跟踪组织技能质量评估，将部分产品评价维度转为 Python 脚本。复核评分与异常情况，建立专项问题库，跟进测试、修改及验收。',
        projectId: 'skill-ecosystem',
        evidence: '组织 22 人评价 29 个 Skill，结合部分脚本检查与人工复核',
      },
      {
        title: '业务规则与协同交付',
        text: '梳理账号、设备、订阅、Credits 与模型付费的关系，将权益变化转为完整流程、原型及验收规格。协同研发、测试与运营推进规则评审、支付联调及相关功能交付。',
        projectId: 'ai-commercialization',
        evidence: '订阅原型覆盖 15 类账户场景，部分支付与权限路径已完成验收',
      },
    ],
    projects: ['ai-ecosystem', 'skill-ecosystem', 'ai-commercialization'],
    boundary: '工作重点为 AI 应用层的产品定义、流程与规则设计、评估组织及交付推进。模型、算法、工程与视觉实现由对应团队协作完成。',
  },
  en: {
    title: 'AI product design',
    summary: 'From scenario definition to Agent applications and delivery.',
    intro: 'Define scenarios, task interactions, skill governance and application evaluation for AI assistants and Agent applications. Translate user needs, capability limits and business rules into flows, prototypes and acceptance specifications, coordinating algorithm, engineering, design and QA teams on module delivery.',
    methods: [
      {
        title: 'Scenario planning and product definition',
        text: 'Organize proactive services around user tasks, defining sources, display timing, entry points and exit conditions. Lead the product upgrade from AI summaries to smart notifications, translating scenarios into cards, flows and acceptance rules.',
        projectId: 'ai-ecosystem',
        evidence: 'Four proactive-service types; 29 card templates and 38 visual variants delivered',
      },
      {
        title: 'Agent task interaction and human collaboration',
        text: 'Design task initiation, execution feedback, additional input, authorization and result review, including user intervention and exceptions. Separate hiding a display, stopping execution and deleting a record, with result retrieval after leaving a task.',
        projectId: 'ai-ecosystem',
        evidence: 'Relevant card and smart-notification acceptance completed; a complete photo-cleanup flow prototype delivered',
      },
      {
        title: 'Skill supply and discovery design',
        text: 'Organize skills through shared categories, exact search and structured guidance, connecting discovery, understanding, installation and first use. Standardize purpose, inputs, outputs and operating limits alongside version, compatibility and release states.',
        projectId: 'skill-ecosystem',
        evidence: '295 labels consolidated into 47 shared tags; the first 197 updates verified by readback',
      },
      {
        title: 'Agent operations workflows',
        text: 'Structure skill review, usability validation and batch uploads as Agent workflows, defining package, metadata and version checks. Connect installation states, review, publishing and post-release verification to make recurring operations repeatable.',
        projectId: 'skill-ecosystem',
        evidence: 'Skill-review and usability-validation Agents designed; the batch skill-upload Agent flow run successfully',
      },
      {
        title: 'Application evaluation and quality management',
        text: 'Organize skill evaluation through human assessment, scripted checks and issue tracking, converting selected product criteria into Python scripts. Review scores and exceptions, maintain a dedicated issue log and follow testing, fixes and acceptance.',
        projectId: 'skill-ecosystem',
        evidence: 'Coordinated 22 people evaluating 29 Skills, combining selected scripted checks with human review',
      },
      {
        title: 'Business rules and collaborative delivery',
        text: 'Map accounts, devices, subscriptions, Credits and paid-model access into complete flows, prototypes and acceptance specifications. Coordinate engineering, QA and operations on rule reviews, payment integration and delivery of the relevant features.',
        projectId: 'ai-commercialization',
        evidence: 'Subscription prototype covering 15 account scenarios; specific payment and access paths accepted',
      },
    ],
    projects: ['ai-ecosystem', 'skill-ecosystem', 'ai-commercialization'],
    boundary: 'The work focuses on application-layer product definition, flow and rule design, evaluation coordination and delivery. Models, algorithms, engineering and visual implementation involve the respective teams.',
  },
};
