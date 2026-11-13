import { cases as englishCases, stages as englishStages } from './content.js';
import { cases as chineseCases, stages as chineseStages } from './content.zh.js';

const projectOrder = ['ai-ecosystem', 'energy-research', 'hardware-research', 'product-business'];
const projectDetails = {
  'ai-ecosystem': { company: 'DROI', image: 'sketch-ai-v2.webp', skills: ['ai', 'planning', 'delivery'] },
  'energy-research': { company: 'HUAWEI', image: 'sketch-research-v2.webp', skills: ['research', 'planning'] },
  'hardware-research': { company: 'NINESTAR', image: 'sketch-hardware-v2.webp', skills: ['research', 'planning'] },
  'product-business': { company: 'DROI', image: 'sketch-growth-v2.webp', skills: ['planning', 'delivery'] },
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
  "zh": {
    "profile": {
      "name": "77",
      "role": "产品经理",
      "title": [
        "从用户研究，",
        "到 AI 产品。"
      ],
      "intro": "心理学本科，工商管理硕士。关注人机交互与产品商业化。\n职业经历涵盖用户研究、产品策略与智能硬件，\n现从事 AI 产品与 GTM 商业化策略。",
      "summaryCards": [
        {
          "id": "about",
          "title": "职业经历",
          "summary": "三段职业经历，两项学科背景。",
          "href": "#about"
        },
        {
          "id": "projects",
          "title": "项目实践",
          "summary": "能源产品、智能硬件、AI 助手与商业化。",
          "href": "#projects"
        },
        {
          "id": "strengths",
          "title": "能力与方法",
          "summary": "用户研究、产品规划、AI 产品设计与交付协作。",
          "href": "#strengths"
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
    "projects": projectCards(chineseCases, ["AI 助手、技能平台与模型使用流程的产品设计。", "以市场与用户研究，支持能源产品规划。", "研究真实使用情境，分析软硬件需求。", "分析 6 条产品线，参与商业化设计与发布评估。"]),
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
        "summary": "从研究结论，形成产品需求。",
        "intro": "基于用户研究、产品数据与反馈，结合市场信息、技术成本和业务条件，参与产品机会及需求优先级判断，并形成可评审的产品方案。",
        "methods": [
          {
            "title": "问题定义",
            "text": "结合行业信息、用户研究与产品数据，明确需求来源及影响人群。"
          },
          {
            "title": "需求取舍",
            "text": "区分用户群体和使用目标，结合技术成本与业务条件，整理产品机会及迭代建议。"
          },
          {
            "title": "方案设计",
            "text": "将需求转为流程、规则、原型与文档，支持设计、研发和测试评审。"
          }
        ],
        "projects": [
          "energy-research",
          "hardware-research",
          "product-business"
        ],
        "boundary": "实践覆盖研究支持下的产品规划、产品分析与商业化需求。优先级与产品取舍由业务、产品及研发团队共同确定。"
      },
      "ai": {
        "title": "AI 产品设计",
        "summary": "围绕使用场景，设计助手与技能平台。",
        "intro": "在 DROI 参与 AI 助手与技能平台设计，涵盖功能入口、任务流程，以及账号、模型接入、使用额度与异常处理等平台规则。",
        "methods": [
          {
            "title": "助手功能",
            "text": "定义通知、定时任务与记忆等功能的使用场景和产品流程。"
          },
          {
            "title": "技能平台",
            "text": "设计技能筛选、分类、搜索、审核、验证与发布流程，并参与技能运营。"
          },
          {
            "title": "使用规则",
            "text": "参与账号、订阅、Credits 与模型接入方案，补充余额不足、支付失败等异常流程。"
          }
        ],
        "projects": [
          "ai-ecosystem"
        ],
        "boundary": "工作侧重产品方案、技能运营与交付协调。模型、算法与工程实现由相关团队协作完成。"
      },
      "delivery": {
        "title": "产品交付",
        "summary": "从需求评审，到验收发布。",
        "intro": "围绕需求文档、产品原型与流程规则，组织或参与评审，协调研发、设计、测试与运营，跟进开发、验收、发布及后续评估。",
        "methods": [
          {
            "title": "评审准备",
            "text": "整理需求文档、产品原型与流程规则，形成各团队共同评审的方案。"
          },
          {
            "title": "开发与验收",
            "text": "与算法、研发、设计、测试及运营沟通需求，跟进开发、问题处理与验收。"
          },
          {
            "title": "发布与评估",
            "text": "参与分阶段上线和发布评估，结合数据、反馈及产品问题，提出后续改进建议。"
          }
        ],
        "projects": [
          "ai-ecosystem",
          "product-business"
        ],
        "boundary": "实践来自 DROI 的产品设计与发布工作。需求、研发、测试与运营各有分工，发布与交付由团队协作完成。"
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
      "intro": "A bachelor’s in psychology and a master’s in business administration. Interested in human–computer interaction and product commercialization.\nExperience across user research, product strategy and smart hardware.\nNow working on AI products and go-to-market (GTM) strategy.",
      "summaryCards": [
        {
          "id": "about",
          "title": "Career & background",
          "summary": "Three roles. A foundation in psychology and business.",
          "href": "#about"
        },
        {
          "id": "projects",
          "title": "Selected projects",
          "summary": "Energy products, smart hardware, AI assistants and monetization.",
          "href": "#projects"
        },
        {
          "id": "strengths",
          "title": "Capabilities",
          "summary": "User research, product planning, AI product design and delivery.",
          "href": "#strengths"
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
    "projects": projectCards(englishCases, ["Product design for assistant features, the skill platform and model access.", "Market and user research supporting energy product planning.", "Research into real use and the requirements of hardware and companion software.", "Analysis across 6 product lines, with monetization design and release evaluation."]),
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
        "summary": "Turn research into requirements.",
        "intro": "User research, product data and feedback inform opportunity and requirements work. Market context, technical costs and business conditions support priorities and plans prepared for review.",
        "methods": [
          {
            "title": "Define the problem",
            "text": "Combine industry information, user research and product data to identify the source of a need and the people affected."
          },
          {
            "title": "Assess priorities",
            "text": "Distinguish user groups and goals, then consider technical costs and business conditions when assessing opportunities and proposed changes."
          },
          {
            "title": "Develop the plan",
            "text": "Translate requirements into flows, rules, prototypes and documents for design, engineering and QA review."
          }
        ],
        "projects": [
          "energy-research",
          "hardware-research",
          "product-business"
        ],
        "boundary": "The examples cover research-informed planning, product analysis and monetization requirements. Business, product and engineering teams determine priorities and trade-offs together."
      },
      "ai": {
        "title": "AI product design",
        "summary": "Design assistant and skill-platform flows.",
        "intro": "AI assistant and skill-platform design at DROI, covering feature entry points, task flows, accounts, model access, usage limits and exception handling.",
        "methods": [
          {
            "title": "Assistant features",
            "text": "Define scenarios and product flows for notifications, scheduled tasks and memory."
          },
          {
            "title": "Skill platform",
            "text": "Design screening, categories, search, review, validation and publishing flows, alongside skill operations."
          },
          {
            "title": "Usage rules",
            "text": "Contribute to accounts, subscriptions, Credits and model access, including insufficient balances and failed payments."
          }
        ],
        "projects": [
          "ai-ecosystem"
        ],
        "boundary": "The work focuses on product plans, skill operations and delivery coordination. Models, algorithms and implementation involve the respective teams."
      },
      "delivery": {
        "title": "Product delivery",
        "summary": "From review to release.",
        "intro": "Requirements, prototypes and product rules support reviews and coordination across engineering, design, QA and operations, followed by development, acceptance, release and evaluation.",
        "methods": [
          {
            "title": "Review preparation",
            "text": "Prepare requirements, prototypes and product rules as a shared basis for team review."
          },
          {
            "title": "Development and acceptance",
            "text": "Work with algorithm, engineering, design, QA and operations teams to clarify requirements and follow development, issues and acceptance."
          },
          {
            "title": "Release and evaluation",
            "text": "Contribute to staged rollouts and release evaluation, using data, feedback and product issues to inform proposed improvements."
          }
        ],
        "projects": [
          "ai-ecosystem",
          "product-business"
        ],
        "boundary": "Based on product design and release work at DROI. Requirements, development, testing and operations have their respective owners; delivery is a team effort."
      }
    }
  }
};
