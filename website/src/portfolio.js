import { cases as englishCases, stages as englishStages } from './content.js';
import { cases as chineseCases, stages as chineseStages } from './content.zh.js';
import { aiCapabilities } from './ai-capability.js';
import { researchCapabilities } from './research-capability.js';
import { planningCapabilities } from './planning-capability.js';
import { projectManagementCapabilities } from './project-management-capability.js';

const projectOrder = ['ai-ecosystem', 'skill-ecosystem', 'ai-commercialization', 'international-product', 'energy-research', 'energy-product-planning', 'station-control-research', 'hardware-research', 'hardware-human-factors', 'product-business'];
const featuredProjectIds = ['ai-ecosystem', 'hardware-human-factors', 'station-control-research'];
const projectCardTitles = {
  'energy-product-planning': { zh: '充电网络与户用光伏研究', en: 'Charging networks & residential solar research' },
  'hardware-human-factors': { zh: '人因评估与产品形态设计', en: 'Human factors & product-form design' },
  'station-control-research': { zh: '光伏电站管理系统研究', en: 'Solar plant management research' },
  'hardware-research': { zh: '金融行业打印体验研究', en: 'Financial-sector printing research' },
};
const projectDetails = {
  'ai-ecosystem': { highlight: { zh: '29 套卡片模板 · 38 个视觉变体', en: '29 card templates · 38 visual variants' }, relatedProjects: ['skill-ecosystem', 'ai-commercialization'], company: 'DROI', image: 'project-ai-tasks-v3.webp', skills: ['ai', 'planning'], featured: true, summary: { zh: '设计卡片关闭后的任务与结果规则：后台继续执行，结果保留在原对话。', en: 'Designed dismissal rules that keep tasks running and their results in the original conversation.' } },
  'skill-ecosystem': { highlight: { zh: '标签体系：295 → 47 个共享标签', en: 'Taxonomy: 295 labels → 47 shared tags' }, relatedProjects: ['ai-ecosystem', 'international-product'], company: 'DROI', image: 'case-skills.svg', skills: ['ai', 'planning'], featured: true, summary: { zh: '合并技能标签，编写使用说明，设计审核发布与首次使用流程。', en: 'Consolidated skill tags, wrote usage guidance and designed review, publishing and first-use flows.' } },
  'ai-commercialization': { highlight: { zh: '订阅原型覆盖 15 类账户场景', en: 'Subscription prototype covering 15 account scenarios' }, relatedProjects: ['product-business', 'international-product'], company: 'DROI', image: 'case-subscription.svg', skills: ['planning', 'ai'], featured: true, summary: { zh: '梳理账号、设备、订阅与积分规则，设计权益变化和支付异常流程。', en: 'Defined account, device, subscription and Credits rules, including entitlement changes and payment exceptions.' } },
  'international-product': { highlight: { zh: '内容配置：19 条技能 × 46 个语言配置', en: 'Content configuration: 19 skills × 46 language configurations' }, relatedProjects: ['skill-ecosystem', 'ai-commercialization'], company: 'DROI', image: 'case-localization.svg', skills: ['planning'], summary: { zh: '配置并核验多语言技能、套餐与奖励说明，适配海外演示资料。', en: 'Configured and checked multilingual skill, plan and reward content, and adapted overseas demo materials.' } },
  'energy-research': { relatedProjects: ['energy-product-planning', 'station-control-research'], company: 'HW', image: 'sketch-research-v2.webp', skills: ['research', 'planning'], summary: { zh: '研究能源市场与使用者，整理用户旅程、需求及体验改进建议。', en: 'Studied energy markets and users, documenting journeys, requirements and experience recommendations.' } },
  'energy-product-planning': { highlight: { zh: '充电平台研究：3 类主要人群 · Kano 需求排序', en: 'Charging-platform study: 3 main user groups · Kano prioritization' }, relatedProjects: ['station-control-research', 'energy-research'], company: 'HW', image: 'project-charging-solar-v3.webp', skills: ['research', 'planning'], summary: { zh: '按时间、金钱和工作责任的敏感度划分充电人群，用 Kano 排序需求；为户用光伏规划发电预测、充电调节功能。', en: 'Segmented charging users by sensitivity to time, money and work responsibilities, prioritized needs with Kano, and planned solar forecasting and charging-adjustment features.' } },
  'station-control-research': { highlight: { zh: '巡检与报警功能方向已纳入研究报告', en: 'Inspection and alert proposals documented in the research report' }, relatedProjects: ['energy-research', 'hardware-research'], company: 'HW', image: 'project-solar-inspection-v3.webp', skills: ['research', 'planning'], summary: { zh: '调研山地电站每周巡检的困难与风险，在报告中提出辅助巡检和单板故障独立报警建议。', en: 'Studied the difficulties and risks of weekly mountain-site inspections and proposed assisted inspection and individual-panel fault alerts in the report.' } },
  'hardware-research': { relatedProjects: ['hardware-human-factors', 'station-control-research'], company: 'NINESTAR', image: 'sketch-hardware-v2.webp', skills: ['research', 'planning'], summary: { zh: '承担银行打印设备问卷、现场调研及定量定性分析，比较前厅业务与楼内办公需求。', en: 'Designed questionnaires, conducted fieldwork and analyzed bank printing needs, comparing counter services with office work.' } },
  'hardware-human-factors': { highlight: { zh: '完成产品形态设计，相关产品最终投产', en: 'Completed product-form design; the product entered production' }, relatedProjects: ['hardware-research', 'ai-ecosystem'], company: 'NINESTAR', image: 'project-printer-human-factors-v3.webp', skills: ['research'], summary: { zh: '比较站姿与坐姿下的面板操作和取纸布局，以面板关注与出纸口可见性为条件完成产品形态设计。', en: 'Compared standing and seated panel use and paper retrieval, then completed the product-form design using panel attention and output visibility as criteria.' } },
  'product-business': { relatedProjects: ['ai-commercialization', 'international-product'], company: 'DROI', image: 'sketch-growth-v2.webp', skills: ['planning', 'project-management'], summary: { zh: '分析 6 条消费端产品线的经营数据与用户反馈，整理专项需求，跟进迭代和版本交付。', en: 'Analyzed operating data and user feedback across 6 consumer product lines, prepared initiative requirements and followed iteration and releases.' } },
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
    { id: 'current', company: 'DROI', date: language === 'zh' ? '2025.11 — 至今' : '2025.11 — Present', relatedProjects: ['ai-ecosystem', 'skill-ecosystem', 'ai-commercialization', 'international-product', 'product-business'] },
    { id: 'hardware', company: 'NINESTAR', date: '2024.06 — 2025.04', relatedProjects: ['hardware-research', 'hardware-human-factors'] },
    { id: 'huawei', company: 'HW', date: '2021.06 — 2024.04', relatedProjects: ['energy-product-planning', 'station-control-research', 'energy-research'] },
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
      "intro": "心理学本科，工商管理硕士，ENFJ\n做过用户研究、产品与 GTM 策略，现任 AI 产品经理\n关注人机交互与商业化",
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
      "intro": "Bachelor’s in psychology, MBA, ENFJ\nExperience in user research, product and go-to-market (GTM) strategy; now an AI Product Manager\nInterested in human–computer interaction and monetization",
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
