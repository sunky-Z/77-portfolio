import { cases as englishCases, stages as englishStages } from './content.js';
import { cases as chineseCases, stages as chineseStages } from './content.zh.js';
import { aiCapabilities } from './ai-capability.js';
import { researchCapabilities } from './research-capability.js';
import { planningCapabilities } from './planning-capability.js';
import { projectManagementCapabilities } from './project-management-capability.js';

const projectOrder = ['ai-ecosystem', 'skill-ecosystem', 'ai-commercialization', 'international-product', 'energy-research', 'station-control-research', 'hardware-research', 'hardware-human-factors', 'product-business'];
const featuredProjectIds = ['ai-ecosystem', 'hardware-human-factors', 'station-control-research'];
const projectCardTitles = {
  'hardware-human-factors': { zh: '人因评估与产品形态设计', en: 'Human factors & product-form design' },
  'station-control-research': { zh: '光伏电站管理系统研究', en: 'Solar plant management research' },
  'hardware-research': { zh: '金融行业打印体验研究', en: 'Financial-sector printing research' },
};
const projectDetails = {
  'ai-ecosystem': { highlight: { zh: '29 套卡片模板 · 38 个视觉变体', en: '29 card templates · 38 visual variants' }, relatedProjects: ['skill-ecosystem', 'ai-commercialization'], company: 'DROI', image: 'sketch-ai-v2.webp', skills: ['ai', 'planning'], featured: true, summary: { zh: '智能通知、任务反馈与用户介入，让 AI 任务的状态和操作清楚可见。', en: 'Notifications, task feedback and user input make AI task states and actions visible.' } },
  'skill-ecosystem': { highlight: { zh: '标签体系：295 → 47 个共享标签', en: 'Taxonomy: 295 labels → 47 shared tags' }, relatedProjects: ['ai-ecosystem', 'international-product'], company: 'DROI', image: 'case-skills.svg', skills: ['ai', 'planning'], featured: true, summary: { zh: '整理技能分类、使用说明与审核发布流程，覆盖发现到首次使用。', en: 'Skill categories, usage guidance and review flows, from discovery to first use.' } },
  'ai-commercialization': { highlight: { zh: '订阅原型覆盖 15 类账户场景', en: 'Subscription prototype covering 15 account scenarios' }, relatedProjects: ['product-business', 'international-product'], company: 'DROI', image: 'case-subscription.svg', skills: ['planning', 'ai'], featured: true, summary: { zh: '梳理账号、设备、订阅与积分的关系，设计权益规则及支付异常流程。', en: 'Account, device, subscription and Credits rules, including payment exceptions.' } },
  'international-product': { highlight: { zh: '内容配置：19 条技能 × 46 个语言配置', en: 'Content configuration: 19 skills × 46 language configurations' }, relatedProjects: ['skill-ecosystem', 'ai-commercialization'], company: 'DROI', image: 'case-localization.svg', skills: ['planning'], summary: { zh: '多语言技能、套餐与奖励说明的内容配置、核验和海外演示适配。', en: 'Multilingual skills, plan and reward content, with configuration checks and overseas demos.' } },
  'energy-research': { relatedProjects: ['station-control-research', 'hardware-research'], company: 'HW', image: 'sketch-research-v2.webp', skills: ['research', 'planning'], summary: { zh: '以市场与用户研究，支持能源产品规划。', en: 'Market and user research supporting energy product planning.' } },
  'station-control-research': { highlight: { zh: '巡检与报警功能方向已纳入研究报告', en: 'Inspection and alert proposals documented in the research report' }, relatedProjects: ['energy-research', 'hardware-research'], company: 'HW', image: 'sketch-research-v2.webp', skills: ['research', 'planning'], summary: { zh: '围绕地面光伏电站管理系统开展用户研究，分析山地巡检问题、用户画像与功能改进方向。', en: 'User research for a solar plant management system, covering field inspection needs, user profiles and functional improvements.' } },
  'hardware-research': { relatedProjects: ['hardware-human-factors', 'station-control-research'], company: 'NINESTAR', image: 'sketch-hardware-v2.webp', skills: ['research', 'planning'], summary: { zh: '研究银行前厅业务与楼内办公的使用差异，承担问卷设计、调研执行及定量定性分析。', en: 'Research into printing needs in bank counter services and office work, covering questionnaire design, fieldwork and quantitative and qualitative analysis.' } },
  'hardware-human-factors': { highlight: { zh: '完成产品形态设计，相关产品最终投产', en: 'Completed product-form design; the product entered production' }, relatedProjects: ['hardware-research', 'ai-ecosystem'], company: 'NINESTAR', image: 'sketch-hardware-v2.webp', skills: ['research'], summary: { zh: '结合 A/B 试验、操作观察和 3D 人因评估，分析布局、姿态与注意力分配，形成产品形态方案。', en: 'A/B testing, task observation and 3D human factors evaluation informed layout, posture, attention allocation and product-form design.' } },
  'product-business': { relatedProjects: ['ai-commercialization', 'international-product'], company: 'DROI', image: 'sketch-growth-v2.webp', skills: ['planning', 'project-management'], summary: { zh: '分析 6 条消费端产品线，结合经营数据与用户反馈支持广告与版本迭代。', en: 'Analysis across 6 consumer product lines to inform advertising and release decisions.' } },
};

function projectCards(cases, language) {
  return projectOrder.map(id => ({
    id,
    title: projectCardTitles[id]?.[language] || cases[id].title,
    company: projectDetails[id].company,
    image: projectDetails[id].image,
    skills: projectDetails[id].skills,
    relatedProjects: projectDetails[id].relatedProjects,
    featured: featuredProjectIds.includes(id),
    featuredOrder: featuredProjectIds.indexOf(id),
    highlight: projectDetails[id].highlight?.[language],
    role: cases[id].overview[1][1],
    summary: projectDetails[id].summary[language],
  }));
}

function careerCards(stages, language) {
  return [
    { id: 'huawei', company: 'HW', date: '2021.06 — 2024.04', relatedProjects: ['station-control-research', 'energy-research'] },
    { id: 'hardware', company: 'NINESTAR', date: '2024.06 — 2025.04', relatedProjects: ['hardware-research', 'hardware-human-factors'] },
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
          "summary": "用户研究、产品规划与交付、AI 产品设计及项目管理。",
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
      "research": researchCapabilities.zh,
      "planning": planningCapabilities.zh,
      "ai": aiCapabilities.zh,
      "project-management": projectManagementCapabilities.zh
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
          "summary": "User research, product planning and delivery, AI product design and project management.",
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
      "research": researchCapabilities.en,
      "planning": planningCapabilities.en,
      "ai": aiCapabilities.en,
      "project-management": projectManagementCapabilities.en
    }
  }
};
