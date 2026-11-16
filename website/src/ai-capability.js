export const aiCapabilities = {
  zh: {
    title: 'AI 产品设计',
    summary: '设计智能任务的交互与控制，评估应用质量。',
    intro: '围绕 AI 助手与 Agent 应用，设计主动服务、任务反馈与用户控制方式。通过技能发现、运营工作流、应用评估及计费边界设计，明确 AI 如何进入用户任务、如何被使用，以及何时需要用户介入。',
    methods: [
      {
        title: '主动服务与触发设计',
        text: '从用户任务出发区分主动服务类型，明确服务来源、展示时机、操作入口与退出条件。主导 AI 纪要向智能通知的产品升级，通过卡片组织任务信息、执行结果与后续操作。',
        projectId: 'ai-ecosystem',
        evidence: '四类主动服务，交付 29 套卡片模板与 38 个视觉变体',
      },
      {
        title: 'Agent 任务交互与用户控制',
        text: '设计任务发起、执行反馈、信息补充、授权确认与结果查看，明确用户介入和异常处理方式。区分停止展示、停止执行与删除记录，保留任务退出后的结果找回路径，让用户理解任务状态并控制后续执行。',
        projectId: 'ai-ecosystem',
        evidence: '完成主动服务卡片及智能通知相关验收，交付照片清理完整流程原型',
      },
      {
        title: '技能发现与首次使用',
        text: '以共享分类、精确检索和结构化说明组织技能，让用户能够发现、理解并开始使用。按用途、输入、输出及操作边界规范内容，明确安装、版本与兼容状态，减少选择与首次操作中的信息缺口。',
        projectId: 'skill-ecosystem',
        evidence: '295 个标签整理为 47 个共享标签，首批 197 条更新完成回读核验',
      },
      {
        title: 'Agent 运营工作流',
        text: '将技能审核、可用性验证和批量上传组织为 Agent 工作流，明确输入资料、执行步骤与校验要求。围绕包文件、元数据、版本和安装状态组织检查，衔接审核发布与发布后核验，规范重复运营任务的处理方式。',
        projectId: 'skill-ecosystem',
        evidence: '完成技能审核与可用性验证 Agent 设计，跑通批量上传技能 Agent 流程',
      },
      {
        title: '应用评估与质量治理',
        text: '结合人工评价与脚本检查评估技能应用表现，将部分产品评价维度转为 Python 脚本。复核评分与异常情况，建立专项问题库，将评估发现转为后续测试、修改及验收的依据。',
        projectId: 'skill-ecosystem',
        evidence: '组织 22 人评价 29 个 Skill，结合部分脚本检查与人工复核',
      },
      {
        title: 'AI 计费与使用边界',
        text: '梳理账号、设备、订阅、Credits 与模型付费的关系，明确不同权益状态下的可用能力及使用限制。设计余额不足、赠送期切换、升级和到期等情境的说明与操作，帮助用户理解何时可用、为何受限以及如何继续。',
        projectId: 'ai-commercialization',
        evidence: '订阅原型覆盖 15 类账户场景，部分支付与权限路径已完成验收',
      },
    ],
    projects: ['ai-ecosystem', 'skill-ecosystem', 'ai-commercialization'],
    boundary: '工作重点为 AI 应用层的任务交互、用户控制、技能运营、应用评估与使用规则。模型、算法、工程与视觉实现由对应团队协作完成；具体模块的设计、验收与上线状态分别说明。',
  },
  en: {
    title: 'AI product design',
    summary: 'Design task interactions and user controls. Evaluate application quality.',
    intro: 'Design proactive services, task feedback and user controls for AI assistants and Agent applications. Define how AI fits into user tasks, how it is used and when users need to intervene through skill discovery, operations workflows, application evaluation and usage and billing rules.',
    methods: [
      {
        title: 'Proactive services and trigger design',
        text: 'Distinguish proactive-service types around user tasks, defining sources, display timing, entry points and exit conditions. Lead the product upgrade from AI summaries to smart notifications, using cards to organize task information, execution results and next actions.',
        projectId: 'ai-ecosystem',
        evidence: 'Four proactive-service types; 29 card templates and 38 visual variants delivered',
      },
      {
        title: 'Agent task interaction and user control',
        text: 'Design task initiation, execution feedback, additional input, authorization and result review, including user intervention and exceptions. Separate hiding a display, stopping execution and deleting a record, retaining result retrieval after leaving a task so users can understand its status and control subsequent execution.',
        projectId: 'ai-ecosystem',
        evidence: 'Relevant card and smart-notification acceptance completed; a complete photo-cleanup flow prototype delivered',
      },
      {
        title: 'Skill discovery and first use',
        text: 'Organize skills through shared categories, exact search and structured guidance so users can find, understand and start using them. Specify purpose, inputs, outputs and operating limits alongside installation, version and compatibility states, addressing information gaps during selection and first use.',
        projectId: 'skill-ecosystem',
        evidence: '295 labels consolidated into 47 shared tags; the first 197 updates verified by readback',
      },
      {
        title: 'Agent operations workflows',
        text: 'Structure skill review, usability validation and batch uploads as Agent workflows, defining inputs, execution steps and checks. Check packages, metadata, versions and installation states, connecting review, publishing and post-release verification to standardize recurring operations.',
        projectId: 'skill-ecosystem',
        evidence: 'Skill-review and usability-validation Agents designed; the batch skill-upload Agent flow run successfully',
      },
      {
        title: 'Application evaluation and quality management',
        text: 'Evaluate skill applications through human assessment and scripted checks, converting selected product criteria into Python scripts. Review scores and exceptions, maintain a dedicated issue log and use findings to inform subsequent testing, fixes and acceptance.',
        projectId: 'skill-ecosystem',
        evidence: 'Coordinated 22 people evaluating 29 Skills, combining selected scripted checks with human review',
      },
      {
        title: 'AI billing and usage limits',
        text: 'Map accounts, devices, subscriptions, Credits and paid-model access to available capabilities and usage limits under different entitlements. Design guidance and actions for insufficient balances, gift-period transitions, upgrades and expiry so users understand availability, restrictions and how to continue.',
        projectId: 'ai-commercialization',
        evidence: 'Subscription prototype covering 15 account scenarios; specific payment and access paths accepted',
      },
    ],
    projects: ['ai-ecosystem', 'skill-ecosystem', 'ai-commercialization'],
    boundary: 'The work focuses on application-layer task interaction, user controls, skill operations, application evaluation and usage rules. Models, algorithms, engineering and visual implementation involve the respective teams; design, acceptance and release states are stated separately for each module.',
  },
};
