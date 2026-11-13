import { cases as englishCases, stages as englishStages } from './content.js';
import { cases as chineseCases, stages as chineseStages } from './content.zh.js';

const projectOrder = ['ai-ecosystem', 'energy-research', 'hardware-research', 'product-business'];
const projectDetails = {
  'ai-ecosystem': { company: 'DROI', image: 'sketch-ai.webp', skills: ['ai', 'planning', 'delivery'] },
  'energy-research': { company: 'HUAWEI', image: 'sketch-research.webp', skills: ['research', 'planning'] },
  'hardware-research': { company: 'NINESTAR', image: 'sketch-hardware.webp', skills: ['research', 'planning'] },
  'product-business': { company: 'DROI', image: 'sketch-growth.webp', skills: ['planning', 'delivery'] },
};

function projectCards(cases, summaries) {
  return projectOrder.map((id, index) => ({
    id,
    title: cases[id].title,
    ...projectDetails[id],
    role: cases[id].overview[1][1],
    summary: summaries[index],
  }));
}

function careerCards(stages, language) {
  return [
    { id: 'huawei', company: 'HUAWEI', date: '2021.06 — 2024.04', relatedProjects: ['energy-research'] },
    { id: 'hardware', company: 'NINESTAR', date: '2024.06 — 2025.04', relatedProjects: ['hardware-research'] },
    { id: 'current', company: 'DROI', date: language === 'zh' ? '2025.11 — 至今' : '2025.11 — Present', relatedProjects: ['ai-ecosystem', 'product-business'] },
  ].map(item => ({ ...item, role: stages[item.id].title, summary: stages[item.id].description }));
}

export const portfolio = {
  zh: {
    profile: {
      name: '77',
      role: '产品经理',
      title: ['我是 77。', '一名产品经理。'],
      intro: '本科读心理学，硕士读工商管理。做过用户研究、产品策略和智能硬件相关工作，现在在 DROI 做产品经理，参与 AI 产品与商业化。',
      summaryCards: [
        { id: 'about', title: '先认识我', summary: '看看我的工作经历、职责和学习背景。', href: '#about' },
        { id: 'projects', title: '看项目经历', summary: '了解项目的背景、我参与的工作和交付物。', href: '#projects' },
        { id: 'strengths', title: '了解做事方式', summary: '结合项目，看我怎样研究、做需求和推进交付。', href: '#strengths' },
      ],
      education: [
        { degree: '本科', field: '心理学', school: 'WNU', date: '2016 — 2020' },
        { degree: '硕士', field: '工商管理', school: 'YBU', date: '2023 — 2025' },
      ],
      contactText: '想进一步了解我的经历，或聊产品、研究与合作，可以给我发邮件。',
    },
    career: careerCards(chineseStages, 'zh'),
    projects: projectCards(chineseCases, [
      '设计通知、定时任务、记忆和技能平台流程，也参与账号、订阅与模型使用相关方案。',
      '通过市场与用户研究，整理用户差异、使用旅程和需求，支持能源产品规划。',
      '进入实际使用情境，研究消费者及行业组织中不同角色的软硬件需求。',
      '分析 6 条产品线的数据与反馈，参与广告、订阅等商业化流程及发布评估。',
    ]),
    skills: {
      research: {
        title: '用户研究',
        summary: '通过访谈、观察和数据，了解不同的人怎样使用产品。',
        intro: '我做过消费者和行业用户研究。研究对象不同，接触用户的方式也不同：既有访谈与问卷，也有实地调研、跟岗观察和数据分析。最后需要把这些材料整理成产品团队能使用的判断依据。',
        methods: [
          { title: '分清不同角色', text: '把购买者、管理者、使用者和不同部门的目标分开看，整理他们的需求差异。' },
          { title: '了解实际使用过程', text: '通过访谈、实地调研和观察，梳理产品在什么情境下被使用，以及前后有哪些环节。' },
          { title: '整理研究发现', text: '将材料整理为用户画像、关键旅程、需求和体验问题，为产品规划及改进提供参考。' },
        ],
        projects: ['energy-research', 'hardware-research'],
        boundary: '这些工作主要来自 HUAWEI 和 NINESTAR 的用户、市场与体验研究经历。研究为规划和开发提供材料，相关决策与交付由团队共同完成。',
      },
      planning: {
        title: '需求判断与产品规划',
        summary: '把用户需要、市场背景和产品条件放在一起，整理要做的事情。',
        intro: '研究、数据和反馈会带来很多问题。我的工作包括把问题整理为需求，结合用户角色、市场信息、技术成本和业务条件，参与产品机会与优先级判断，再把方案写成可以评审的需求和原型。',
        methods: [
          { title: '补齐问题背景', text: '结合行业与市场信息、用户研究和产品数据，说明需求来自哪里、影响哪些人。' },
          { title: '整理需求与优先级', text: '区分不同用户群体和使用目标，结合技术成本及业务条件，整理产品机会和改动建议。' },
          { title: '写清产品方案', text: '把需求转为流程、规则、原型和需求文档，供设计、研发与测试一起评审。' },
        ],
        projects: ['energy-research', 'hardware-research', 'product-business'],
        boundary: '对应经历涵盖研究支持下的产品规划，以及产品分析和商业化需求。优先级和产品取舍需要与业务及研发团队一起确定。',
      },
      ai: {
        title: 'AI 产品设计',
        summary: '把助手功能、技能和模型使用规则写成具体的产品流程。',
        intro: '我在 DROI 参与 AI 助手和技能平台的产品工作。关注的是用户从哪里进入、完成哪些操作，以及账号、模型、额度和异常情况怎样影响使用。',
        methods: [
          { title: '梳理功能场景', text: '围绕通知、定时任务和记忆，定义功能的使用场景及对应流程。' },
          { title: '设计技能平台', text: '设计技能筛选、分类、搜索、审核、验证和发布等流程，并参与技能运营。' },
          { title: '考虑使用限制', text: '参与账号、订阅、Credits 与模型接入方案，补充余额不足、支付失败等情况下的处理。' },
        ],
        projects: ['ai-ecosystem'],
        boundary: '这里展示的是 AI 产品方案、技能运营和交付相关工作，模型、算法和工程实现需要与对应团队协作。',
      },
      delivery: {
        title: '需求与交付',
        summary: '把方案写成需求和原型，和研发、设计、测试一起推进。',
        intro: '产品方案还需要经过讨论、开发、验收和发布。我的工作包括准备需求与原型、组织或参与评审、协调各团队的任务，并跟进上线与后续评估。',
        methods: [
          { title: '准备评审材料', text: '整理需求文档、产品原型和流程规则，让各团队能对照同一份方案讨论。' },
          { title: '协调实现与验收', text: '与算法、研发、设计、测试和运营沟通需求，跟进开发、问题处理及验收。' },
          { title: '跟进发布与评估', text: '参与分阶段上线和发布后的评估，将产品数据、反馈及发现的问题用于后续改动。' },
        ],
        projects: ['ai-ecosystem', 'product-business'],
        boundary: '这些工作来自 DROI 的产品设计与发布经历。需求、实现、测试和运营分别有各自的负责团队，交付是共同完成的。',
      },
    },
  },
  en: {
    profile: {
      name: '77',
      role: 'Product Manager',
      title: ['Hi, I’m 77.', 'A product manager.'],
      intro: 'I studied psychology and business administration, and have worked in user research, product strategy and smart hardware. I’m now a Product Manager at DROI, working on AI products and monetization.',
      summaryCards: [
        { id: 'about', title: 'Get to know me', summary: 'My work history, responsibilities and education.', href: '#about' },
        { id: 'projects', title: 'Explore my projects', summary: 'The context, work I contributed and deliverables.', href: '#projects' },
        { id: 'strengths', title: 'How I work', summary: 'Research, requirements and delivery, explained through projects.', href: '#strengths' },
      ],
      education: [
        { degree: 'Bachelor’s', field: 'Psychology', school: 'WNU', date: '2016 — 2020' },
        { degree: 'Master’s', field: 'Business Administration', school: 'YBU', date: '2023 — 2025' },
      ],
      contactText: 'To ask about my experience or discuss product, research or collaboration, you can email me.',
    },
    career: careerCards(englishStages, 'en'),
    projects: projectCards(englishCases, [
      'Designing notifications, scheduled tasks, memory and skill-platform flows, alongside accounts, subscriptions and model access.',
      'Researching users and markets to describe differences, journeys and requirements for energy product planning.',
      'Studying how consumers and different roles in organizations use smart hardware and companion software.',
      'Analyzing data and feedback across 6 product lines, with work on advertising, subscriptions and release evaluation.',
    ]),
    skills: {
      research: {
        title: 'User research',
        summary: 'Understanding how different people use products through interviews, observation and data.',
        intro: 'I have researched consumers and industry users through interviews, surveys, fieldwork, shadowing and data analysis. The work includes organizing this material into findings that a product team can use.',
        methods: [
          { title: 'Distinguish roles', text: 'Examine the goals of buyers, managers, users and departments separately, and describe the differences in their needs.' },
          { title: 'Understand actual use', text: 'Use interviews, fieldwork and observation to describe the context of use and the steps around the product.' },
          { title: 'Organize the findings', text: 'Develop user profiles, key journeys, requirements and experience issues as input to planning and improvements.' },
        ],
        projects: ['energy-research', 'hardware-research'],
        boundary: 'This work mainly comes from my user, market and experience research roles at HUAWEI and NINESTAR. Research informs planning and development; decisions and delivery involve the wider team.',
      },
      planning: {
        title: 'Requirements & product planning',
        summary: 'Considering user needs, market context and product constraints when deciding what to work on.',
        intro: 'Research, data and feedback bring up many issues. My work includes turning them into requirements, contributing to opportunities and priorities, and documenting plans as flows, requirements and prototypes for review.',
        methods: [
          { title: 'Describe the context', text: 'Combine industry and market information, user research and product data to explain where a need comes from and whom it affects.' },
          { title: 'Organize needs and priorities', text: 'Distinguish user groups and goals, and consider technical costs and business conditions when describing opportunities and proposed changes.' },
          { title: 'Document the plan', text: 'Write flows, rules, prototypes and requirements so design, engineering and QA can review the same proposal.' },
        ],
        projects: ['energy-research', 'hardware-research', 'product-business'],
        boundary: 'The examples cover research-informed planning, product analysis and monetization requirements. Priorities and trade-offs are decided with business and engineering teams.',
      },
      ai: {
        title: 'AI product design',
        summary: 'Defining product flows for assistant features, skills and model-access rules.',
        intro: 'At DROI, I work on the AI assistant and skill platform. This includes how people enter a feature, the actions they take, and how accounts, models, usage limits and exceptions affect the flow.',
        methods: [
          { title: 'Describe feature scenarios', text: 'Define use scenarios and flows for notifications, scheduled tasks and memory.' },
          { title: 'Design the skill platform', text: 'Work on skill screening, categories, search, review, validation and publishing, alongside skill operations.' },
          { title: 'Consider usage limits', text: 'Contribute to accounts, subscriptions, Credits and model access, including insufficient balances and failed payments.' },
        ],
        projects: ['ai-ecosystem'],
        boundary: 'These examples describe AI product plans, skill operations and delivery. Models, algorithms and implementation require collaboration with the respective teams.',
      },
      delivery: {
        title: 'Requirements & delivery',
        summary: 'Writing requirements and prototypes, then working with engineering, design and QA on delivery.',
        intro: 'A product proposal still has to go through discussion, development, acceptance and release. My work includes preparing requirements and prototypes, organizing or taking part in reviews, coordinating teams and following releases and evaluation.',
        methods: [
          { title: 'Prepare for reviews', text: 'Document requirements, prototypes and product rules so the teams can discuss the same proposal.' },
          { title: 'Coordinate implementation and acceptance', text: 'Work with algorithm, engineering, design, QA and operations teams to clarify requirements and follow development, issues and acceptance.' },
          { title: 'Follow releases and evaluation', text: 'Contribute to staged rollouts and post-release evaluation, using data, feedback and issues to inform later changes.' },
        ],
        projects: ['ai-ecosystem', 'product-business'],
        boundary: 'These examples come from product design and release work at DROI. Requirements, implementation, testing and operations have their respective owners, and delivery is a team effort.',
      },
    },
  },
};
