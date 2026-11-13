import { useEffect, useState } from 'react';

const chinese = {
  'DIGITAL SELF': '数字自我', 'WORK & CREATION': '工作与创作',
  'About': '关于', 'Work': '作品', 'Approach': '方法', 'LET’S TALK': '聊一聊',
  '77 / PRODUCT MANAGER · AI BUILDER': '77 / 产品经理 · AI 构建者',
  'PRODUCT MIND.': '产品思维。', 'AI BUILDER.': 'AI 构建者。',
  'Product Mind. AI Builder.': '产品思维，AI 构建者。',
  'From human insight to product and AI.': '从人的洞察，走向产品与 AI。',
  'Explore the work': '浏览作品', '04 PROJECTS': '04 个项目',
  'HUMAN · PRODUCT · AI': '人 · 产品 · AI', 'SCROLL TO EXPLORE': '向下探索',
  'PLAY': '播放', 'PAUSE': '暂停',
  'ABOUT & EXPERIENCE': '关于与经历', 'ABOUT': '关于', 'THE BUILDER.': '构建者。',
  'MEET THE BUILDER': '认识构建者', '77 / CN': '77 / 中国',
  'Product Manager': '产品经理', 'AI Builder': 'AI 构建者',
  'Product Manager / AI Builder': '产品经理 / AI 构建者',
  'HUMAN × PRODUCT × AI': '人 × 产品 × AI', 'I’m 77.': '我是 77。',
  '01 / HUMAN': '01 / 人', '02 / PRODUCT': '02 / 产品', '03 / AI': '03 / AI',
  'Research': '研究', 'Psychology': '心理学', 'Strategy': '策略',
  'Business': '商业', 'Build': '构建', 'Product & AI': '产品与 AI',
  'Career start': '职业起点', 'Selected projects': '精选项目', 'Fields of study': '学习领域',
  'UX / Research / Strategy': '体验 / 研究 / 策略',
  'Industry / Smart Hardware': '行业 / 智能硬件',
  'Product Manager / AI & Growth': '产品经理 / AI 与增长',
  '2025.11 — PRESENT': '2025.11 — 至今',
  'SELECTED PROJECTS': '精选项目', 'SELECTED': '精选', 'WORK.': '作品。',
  'AI experiences, research and product growth. A closer look at my role and the work behind each project.': 'AI 体验、研究与产品增长。了解我在各个项目中的职责与具体工作。',
  'DROI / AI ASSISTANT & ECOSYSTEM': 'DROI / AI 助手与生态',
  'RESEARCH / STRATEGY': '研究 / 策略', 'INDUSTRY / HARDWARE': '行业 / 硬件',
  'DROI / PRODUCT GROWTH': 'DROI / 产品增长',
  'Designing agent experiences, skill discovery and platform flows.': '设计 Agent 体验、技能发现与平台流程。',
  'Turning market and user research into product priorities.': '将市场与用户研究转化为产品优先级。',
  'Field research across hardware, software and industry roles.': '围绕硬件、软件与行业角色开展实地研究。',
  'Product analysis and monetization flows across six product lines.': '覆盖六条产品线的产品分析与商业化流程设计。',
  'AI Agents': 'AI Agent', 'Skill Ecosystem': '技能生态', 'Product Design': '产品设计',
  'Requirements': '需求', 'Industry': '行业', 'Hardware': '硬件', 'Validation': '验证',
  'Analytics': '数据分析', 'Monetization': '商业化', 'Delivery': '交付',
  'CONCEPT VISUAL': '概念视觉', 'MY STRENGTHS': '我的优势', 'HOW I': '我的',
  'HUMAN INSIGHT': '人的洞察', 'Understand people': '理解人',
  'Interviews & observation': '访谈与观察', 'Mixed methods': '混合研究方法', 'Personas & journeys': '用户画像与旅程',
  'STRATEGIC THINKING': '策略思考', 'Spot opportunities': '发现机会',
  'Markets & competitors': '市场与竞争', 'Prioritization': '优先级判断', 'Positioning & business': '定位与商业',
  'PRODUCT EXECUTION': '产品执行', 'Ship the product': '推动交付',
  'Flows & requirements': '流程与需求', 'Delivery coordination': '协同交付', 'Validation & feedback': '验证与反馈',
  'AI CONSTRUCTION': 'AI 构建', 'Build with AI': '用 AI 构建',
  'Skills & agents': '技能与 Agent', 'Model access': '模型接入', 'Failures & limits': '异常与限制',
  'EDUCATION / FOUNDATION': '教育 / 基础',
  'Bachelor’s · Psychology': '本科 · 心理学', 'Master’s · Business Administration': '硕士 · 工商管理',
  "04 / LET'S MAKE SOMETHING REAL": '04 / 让想法落地',
  "LET'S BUILD.": '一起构建。', "WHAT'S NEXT?": '下一步是什么？',
  'A product or AI idea? Let’s talk.': '有产品或 AI 的想法？聊一聊。',
  'Write to me': '写信给我', 'Always learning. Always building.': '持续学习，持续构建。',
  'PRODUCT MANAGER / AI BUILDER': '产品经理 / AI 构建者', 'Back to top': '回到顶部',
  'PROJECT NOTES': '项目记录', 'Copy link': '复制链接',
  '01 / CONTEXT': '01 / 背景', '02 / MY CONTRIBUTION': '02 / 我的贡献',
  'What I worked on': '我参与的工作', '03 / DELIVERABLES': '03 / 交付物',
  '04 / REFLECTION': '04 / 思考', 'Contribution & collaboration': '贡献与协作',
  'Next project': '下一个项目', 'PROJECTS': '个项目',
  'Email copied': '邮箱已复制', 'Select the address to copy': '请选择邮箱地址后复制',
  'Project link copied': '项目链接已复制', 'Copy the link from your address bar': '请从地址栏复制链接',
  'Hello 77 | Product & AI': '你好 77 | 产品与 AI',
  'Skip to content': '跳到正文', 'Digital77 home': 'Digital77 首页', 'Main navigation': '主导航',
  'Close navigation': '关闭导航', 'Open navigation': '打开导航',
  'Pause background video': '暂停背景视频', 'Play background video': '播放背景视频',
  'Pause motion': '暂停动态效果', 'Play motion': '播放动态效果',
  '77 typographic portrait': '77 文字头像', 'Background and focus': '背景与方向',
  'Career stages': '职业经历', 'Focus': '工作方向', 'Work scope': '工作范围',
  'View project:': '查看项目：', 'Copy email address': '复制邮箱地址',
  'Copy project link': '复制项目链接', 'Close project': '关闭项目',
  'Interwoven silver and cobalt glass ribbons, an original AI ecosystem concept': '银色与钴蓝玻璃带交织的原创 AI 生态概念图',
  'Layered optical glass arcs with a cobalt light beam, an original research concept': '层叠光学玻璃与钴蓝光束组成的原创研究概念图',
  'Exploded silver hardware module with a cobalt core, an original hardware concept': '带钴蓝核心的银色硬件模块分解概念图',
  'Ascending silver and glass platforms with a blue path, an original product growth concept': '蓝色路径连接银色玻璃平台的原创产品增长概念图',
};

export const translate = (language, text) => language === 'zh' ? (chinese[text] ?? text) : text;

function initialLanguage() {
  try {
    const saved = localStorage.getItem('77-language');
    if (saved === 'zh' || saved === 'en') return saved;
  } catch { /* The toggle also works when storage is unavailable. */ }
  return navigator.language?.toLowerCase().startsWith('zh') ? 'zh' : 'en';
}

export function useLanguage() {
  const [language, setLanguage] = useState(initialLanguage);
  useEffect(() => {
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
    try { localStorage.setItem('77-language', language); } catch { /* Optional preference. */ }
  }, [language]);
  return [language, () => setLanguage(current => current === 'en' ? 'zh' : 'en')];
}
