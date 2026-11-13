import { cases as englishCases, stages as englishStages } from './content.js';
import { cases as chineseCases, stages as chineseStages } from './content.zh.js';

const projectOrder = ['ai-ecosystem', 'skill-ecosystem', 'ai-commercialization', 'international-product', 'energy-research', 'hardware-research', 'product-business'];
const projectDetails = {
  'ai-ecosystem': { highlight: { zh: '29 套卡片模板 · 38 个视觉变体', en: '29 card templates · 38 visual variants' }, relatedProjects: ['skill-ecosystem', 'ai-commercialization'], company: 'DROI', image: 'sketch-ai-v2.webp', skills: ['ai', 'planning', 'delivery'], featured: true, summary: { zh: '智能通知、任务反馈与用户介入，让 AI 任务的状态和操作清楚可见。', en: 'Notifications, task feedback and user input make AI task states and actions visible.' } },
  'skill-ecosystem': { highlight: { zh: '标签体系：295 → 47 个共享标签', en: 'Taxonomy: 295 labels → 47 shared tags' }, relatedProjects: ['ai-ecosystem', 'international-product'], company: 'DROI', image: 'case-skills.svg', skills: ['ai', 'planning', 'delivery'], featured: true, summary: { zh: '整理技能分类、使用说明与审核发布流程，覆盖发现到首次使用。', en: 'Skill categories, usage guidance and review flows, from discovery to first use.' } },
  'ai-commercialization': { highlight: { zh: '订阅原型覆盖 15 类账户场景', en: 'Subscription prototype covering 15 account scenarios' }, relatedProjects: ['product-business', 'international-product'], company: 'DROI', image: 'case-subscription.svg', skills: ['planning', 'ai', 'delivery'], featured: true, summary: { zh: '梳理账号、设备、订阅与积分的关系，设计权益规则及支付异常流程。', en: 'Account, device, subscription and Credits rules, including payment exceptions.' } },
  'international-product': { highlight: { zh: '内容配置：19 条技能 × 46 个语言配置', en: 'Content configuration: 19 skills × 46 language configurations' }, relatedProjects: ['skill-ecosystem', 'ai-commercialization'], company: 'DROI', image: 'case-localization.svg', skills: ['planning', 'delivery'], summary: { zh: '多语言技能、套餐与奖励说明的内容配置、核验和海外演示适配。', en: 'Multilingual skills, plan and reward content, with configuration checks and overseas demos.' } },
  'energy-research': { relatedProjects: ['hardware-research', 'ai-ecosystem'], company: 'HUAWEI', image: 'sketch-research-v2.webp', skills: ['research', 'planning'], summary: { zh: '以市场与用户研究，支持能源产品规划。', en: 'Market and user research supporting energy product planning.' } },
  'hardware-research': { relatedProjects: ['energy-research', 'product-business'], company: 'NINESTAR', image: 'sketch-hardware-v2.webp', skills: ['research', 'planning'], summary: { zh: '研究真实使用情境，分析软硬件需求。', en: 'Research into real use and the requirements of hardware and companion software.' } },
  'product-business': { relatedProjects: ['ai-commercialization', 'international-product'], company: 'DROI', image: 'sketch-growth-v2.webp', skills: ['planning', 'delivery'], summary: { zh: '分析 6 条消费端产品线，结合经营数据与用户反馈支持广告与版本迭代。', en: 'Analysis across 6 consumer product lines to inform advertising and release decisions.' } },
};

function projectCards(cases, language) {
  return projectOrder.map(id => ({
    id,
    title: cases[id].title,
    company: projectDetails[id].company,
    image: projectDetails[id].image,
    skills: projectDetails[id].skills,
    relatedProjects: projectDetails[id].relatedProjects,
    featured: Boolean(projectDetails[id].featured),
    highlight: projectDetails[id].highlight?.[language],
    role: cases[id].overview[1][1],
    summary: projectDetails[id].summary[language],
  }));
}

function careerCards(stages, language) {
  return [
    { id: 'huawei', company: 'HUAWEI', date: '2021.06 — 2024.04', relatedProjects: ['energy-research'] },
    { id: 'hardware', company: 'NINESTAR', date: '2024.06 — 2025.04', relatedProjects: ['hardware-research'] },
    { id: 'current', company: 'DROI', date: language === 'zh' ? '2025.11 — 至今' : '2025.11 — Present', relatedProjects: ['ai-ecosystem', 'skill-ecosystem', 'ai-commercialization', 'international-product', 'product-business'] },
  ].map(item => ({ ...item, role: stages[item.id].title, summary: stages[item.id].description }));
}

export const portfolio = {
  "zh": {
    "profile": {
      "name": "77",
      "role": "产品经理",
      "title": [
        "从用户研究，",
        "到 AI 产品。"
      ],
      "intro": "心理学本科，工商管理硕士，ENFJ\n关注人机交互与商业化，职业经历涵盖用户研究、产品与 GTM 策略\n现从事 AI 产品经理",
      "summaryCards": [
        {
          "id": "about",
          "title": "职业经历",
          "summary": "三段职业经历，两项学科背景。",
          "href": "/experience/"
        },
        {
          "id": "projects",
          "title": "项目实践",
          "summary": "AI 任务、技能生态、订阅权益与用户研究。",
          "href": "/projects/"
        },
        {
          "id": "strengths",
          "title": "能力与方法",
          "summary": "用户研究、产品规划、AI 产品设计与交付协作。",
          "href": "/capabilities/"
        }
      ],
      "education": [
        {
          "degree": "本科",
          "field": "心理学",
          "school": "WNU",
          "date": "2016 — 2020"
        },
        {
          "degree": "硕士",
          "field": "工商管理",
          "school": "YBU",
          "date": "2023 — 2025"
        }
      ],
      "contactText": "产品、研究或合作事宜，可通过邮件联系。"
    },
    "career": careerCards(chineseStages, 'zh'),
    "projects": projectCards(chineseCases, 'zh'),
    "skills": {
      "research": {
        "title": "用户研究",
        "summary": "识别角色差异，理解真实需求。",
        "intro": "覆盖消费者与行业用户研究，结合访谈、问卷、实地调研、跟岗观察与数据分析，梳理使用情境、用户目标与需求差异。研究结论用于产品规划与体验评估。",
        "methods": [
          {
            "title": "角色与目标",
            "text": "区分购买、管理、使用及不同部门的角色，梳理各自目标与需求差异。"
          },
          {
            "title": "情境与旅程",
            "text": "通过访谈、实地调研与跟岗观察，还原实际使用过程及前后环节。"
          },
          {
            "title": "发现与需求",
            "text": "形成用户画像、关键旅程、需求与体验问题，为产品规划和改进提供依据。"
          }
        ],
        "projects": [
          "energy-research",
          "hardware-research"
        ],
        "boundary": "实践主要来自 HUAWEI 与 NINESTAR 的用户、市场和体验研究工作。研究支持规划与开发，相关决策及交付由团队共同完成。"
      },
      "planning": {
        "title": "产品规划",
        "summary": "从用户问题，形成可评审的产品规则。",
        "intro": "结合用户研究、产品数据与反馈梳理问题，将使用目标、技术条件与商业约束转为流程、规则及产品方案。实践包括研究支持下的产品规划、AI 订阅权益及消费端产品分析。",
        "methods": [
          {
            "title": "问题与范围",
            "text": "结合行业信息、用户研究与经营数据，明确问题涉及的人群、场景和产品范围。"
          },
          {
            "title": "业务规则建模",
            "text": "区分账号、设备、套餐权限与积分余额，整理赠送、领取、订阅、升级、到期和异常处理之间的关系。"
          },
          {
            "title": "方案与规格",
            "text": "将规则落实到流程和原型，并与 PRD、用户说明及验收规格对照，补齐状态、限制和退出路径。"
          }
        ],
        "projects": [
          "energy-research",
          "hardware-research",
          "ai-commercialization",
          "product-business"
        ],
        "boundary": "研究、业务与技术条件共同影响产品方案；优先级和产品取舍由业务、产品及研发团队协作确定。"
      },
      "ai": {
        "title": "AI 产品设计",
        "summary": "把任务状态、用户介入与结果反馈讲清楚。",
        "intro": "围绕移动终端 AI 助手，设计主动服务、智能通知、任务执行与技能发现流程。重点处理用户何时需要知道、何时需要介入，以及任务中断后怎样继续和找回结果。",
        "methods": [
          {
            "title": "任务状态与反馈",
            "text": "梳理任务摘要、发起来源和关键结果，串联对话页、灵动岛与桌面反馈，区分进行中、待确认和已完成等状态。"
          },
          {
            "title": "用户介入与控制",
            "text": "设计凭据输入、单选与多选补充、授权确认和异常处理；区分停止展示、停止执行与删除记录，补充退出后的结果找回路径。"
          },
          {
            "title": "技能发现与首次使用",
            "text": "从用途、输入、输出及操作边界组织技能说明，结合分类、搜索、Find-Skill 与首次安装流程，支持技能发现和使用。"
          }
        ],
        "projects": [
          "ai-ecosystem",
          "skill-ecosystem",
          "ai-commercialization"
        ],
        "boundary": "实践侧重产品流程、交互规则、技能运营及交付协调。模型、算法、工程实现、视觉设计与测试由相关团队协作完成。"
      },
      "delivery": {
        "title": "产品交付",
        "summary": "从规则评审，到具体验收与发布核验。",
        "intro": "围绕需求文档、产品原型与流程规格，协同算法、研发、设计、测试和运营推进交付。实践覆盖 AI 任务体验、技能审核发布、订阅支付及多语言配置。",
        "methods": [
          {
            "title": "规则与文档对照",
            "text": "将业务规则同步到原型、PRD、用户说明及验收规格，逐项核对字段、状态、权限和异常路径。"
          },
          {
            "title": "验收与发布",
            "text": "围绕支付失败、零余额、赠送期切换、通知流转等具体路径核对流程和限制，跟进产品验收、问题处理与正式服发布。"
          },
          {
            "title": "批量交付核验",
            "text": "按技能标识、版本与语言配置检查内容和元数据，区分测试与正式环境；批量更新后回读或抽查，保留核验记录。"
          }
        ],
        "projects": [
          "ai-ecosystem",
          "skill-ecosystem",
          "ai-commercialization",
          "international-product"
        ],
        "boundary": "不同功能分别记录设计、验收与上线进展。产品、研发、测试与运营各有分工；方案覆盖数量与实际发布范围分别说明。"
      }
    }
  },
  "en": {
    "profile": {
      "name": "77",
      "role": "Product Manager",
      "title": [
        "From user research.",
        "To AI products."
      ],
      "intro": "A bachelor’s in psychology and a master’s in business administration, ENFJ\nInterested in human–computer interaction and commercialization. Experience across user research, product and go-to-market (GTM) strategy\nCurrently an AI Product Manager",
      "summaryCards": [
        {
          "id": "about",
          "title": "Career & background",
          "summary": "Three roles. A foundation in psychology and business.",
          "href": "/experience/"
        },
        {
          "id": "projects",
          "title": "Selected projects",
          "summary": "AI tasks, skill discovery, subscription rules and user research.",
          "href": "/projects/"
        },
        {
          "id": "strengths",
          "title": "Capabilities",
          "summary": "User research, product planning, AI product design and delivery.",
          "href": "/capabilities/"
        }
      ],
      "education": [
        {
          "degree": "Bachelor’s",
          "field": "Psychology",
          "school": "WNU",
          "date": "2016 — 2020"
        },
        {
          "degree": "Master’s",
          "field": "Business Administration",
          "school": "YBU",
          "date": "2023 — 2025"
        }
      ],
      "contactText": "For product, research or collaboration enquiries, please email."
    },
    "career": careerCards(englishStages, 'en'),
    "projects": projectCards(englishCases, 'en'),
    "skills": {
      "research": {
        "title": "User research",
        "summary": "Understand roles and needs.",
        "intro": "Consumer and industry research using interviews, surveys, fieldwork, shadowing and data analysis. The work identifies contexts, user goals and differences in needs to inform planning and experience evaluation.",
        "methods": [
          {
            "title": "Roles and goals",
            "text": "Distinguish buyers, managers, users and departments, and identify their goals and differing needs."
          },
          {
            "title": "Context and journeys",
            "text": "Use interviews, fieldwork and shadowing to document actual use and the steps around it."
          },
          {
            "title": "Findings and requirements",
            "text": "Develop profiles, key journeys, requirements and experience findings as input to product planning and improvements."
          }
        ],
        "projects": [
          "energy-research",
          "hardware-research"
        ],
        "boundary": "Based on user, market and experience research at HUAWEI and NINESTAR. Research supports planning and development; decisions and delivery involve the wider team."
      },
      "planning": {
        "title": "Product planning",
        "summary": "Turn user problems into rules ready for review.",
        "intro": "Combine user research, product data and feedback to define problems, then translate goals, technical conditions and business constraints into flows, rules and plans. Examples include research-informed planning, AI subscription entitlements and consumer product analysis.",
        "methods": [
          {
            "title": "Problem and scope",
            "text": "Combine industry context, user research and operating data to identify the people, scenarios and product scope affected."
          },
          {
            "title": "Business rules",
            "text": "Separate accounts, devices, plan permissions and Credits balances. Map the relationships between gifts, claims, subscriptions, upgrades, expiry and exceptions."
          },
          {
            "title": "Plans and specifications",
            "text": "Translate rules into flows and prototypes, then check them against requirements, user explanations and acceptance specifications, including states, limits and exit paths."
          }
        ],
        "projects": [
          "energy-research",
          "hardware-research",
          "ai-commercialization",
          "product-business"
        ],
        "boundary": "Research, business and technical conditions inform the plans. Business, product and engineering teams determine priorities and trade-offs together."
      },
      "ai": {
        "title": "AI product design",
        "summary": "Make task states, user input and results clear.",
        "intro": "Design proactive services, smart notifications, task execution and skill discovery for a mobile AI assistant. The work addresses when users need an update, when they need to act, and how to continue or retrieve results after leaving a task.",
        "methods": [
          {
            "title": "Task states and feedback",
            "text": "Organize task summaries, request sources and key results across chat, Dynamic Island and desktop feedback, distinguishing work in progress, pending confirmation and completion."
          },
          {
            "title": "User input and control",
            "text": "Design credential entry, single- and multiple-choice input, authorization and exception handling. Separate hiding a result, stopping execution and deleting a record, and provide a way to retrieve results after leaving."
          },
          {
            "title": "Skill discovery and first use",
            "text": "Organize skill guidance around purpose, inputs, outputs and operating limits. Connect categories, search, Find-Skill and initial installation flows to discovery and use."
          }
        ],
        "projects": [
          "ai-ecosystem",
          "skill-ecosystem",
          "ai-commercialization"
        ],
        "boundary": "The work focuses on product flows, interaction rules, skill operations and delivery coordination. Models, algorithms, implementation, visual design and testing involve the respective teams."
      },
      "delivery": {
        "title": "Product delivery",
        "summary": "From rule reviews to acceptance and release checks.",
        "intro": "Use requirements, prototypes and flow specifications to coordinate algorithm, engineering, design, QA and operations teams. Examples cover AI task experience, skill review and publishing, subscription payments and multilingual configuration.",
        "methods": [
          {
            "title": "Rules and documentation",
            "text": "Align business rules across prototypes, requirements, user explanations and acceptance specifications. Check fields, states, permissions and exception paths."
          },
          {
            "title": "Acceptance and releases",
            "text": "Check flows and restrictions for specific paths such as failed payments, zero balances, gift-period transitions and notification routing. Follow acceptance, issue resolution and production releases."
          },
          {
            "title": "Batch delivery checks",
            "text": "Check content and metadata by skill identifier, version and language configuration, keeping test and production environments separate. Read back or sample batch updates and retain verification records."
          }
        ],
        "projects": [
          "ai-ecosystem",
          "skill-ecosystem",
          "ai-commercialization",
          "international-product"
        ],
        "boundary": "Design, acceptance and release progress are recorded separately for each feature. Product, engineering, QA and operations have their respective roles; planned coverage and released scope are reported separately."
      }
    }
  }
};
