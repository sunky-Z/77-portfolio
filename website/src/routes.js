// Every entry is emitted as its own HTML document during the production build.
export const portfolioPages = [
  { path: '/', type: 'home', key: 'home', title: '个人介绍', description: '77 的个人介绍。心理学本科，工商管理硕士，现从事 AI 产品经理。' },
  { path: '/experience/', type: 'experience', key: 'experience', parent: '/', title: '职业经历', description: '77 在 HW、NINESTAR 与 DROI 的职业经历，以及心理学与工商管理教育背景。' },
  { path: '/projects/', type: 'projects', key: 'projects', parent: '/', title: '项目实践', description: '主动服务与 AI 任务体验、技能发现与质量治理、AI 订阅权益、海外本地化，以及能源和智能硬件研究与消费端产品分析。' },
  { path: '/capabilities/', type: 'capabilities', key: 'capabilities', parent: '/', title: '能力与方法', description: '77 在用户研究、产品规划与交付、AI 产品设计和项目管理中的方法实践。' },
  { path: '/contact/', type: 'contact', key: 'contact', parent: '/', title: '联系我', description: '通过邮件联系 77，交流产品、研究与合作事宜。' },
  { path: '/experience/huawei/', type: 'career', id: 'huawei', key: 'career/huawei', parent: '/experience/', title: 'HW · 用户研究与产品策略', description: '参与能源产品的市场、用户与需求研究，支持产品规划和体验评估。' },
  { path: '/experience/hardware/', type: 'career', id: 'hardware', key: 'career/hardware', parent: '/experience/', title: 'NINESTAR · 智能硬件用户研究', description: '参与金融业打印设备使用体验研究，负责人因评估与产品形态设计，相关产品最终投产。' },
  { path: '/experience/current/', type: 'career', id: 'current', key: 'career/current', parent: '/experience/', title: 'DROI · AI 产品与商业化', description: '现任产品经理，开展 AI 任务体验、技能生态、订阅权益、海外适配与消费端产品分析工作。' },
  { path: '/projects/ai-ecosystem/', type: 'project', id: 'ai-ecosystem', key: 'project/ai-ecosystem', parent: '/projects/', title: '主动服务与 AI 任务体验', description: 'DroiClaw 工作专题：主动服务、智能通知、任务状态、用户介入与退出后的结果找回，涵盖方案、规则及具体验收进展。' },
  { path: '/projects/skill-ecosystem/', type: 'project', id: 'skill-ecosystem', key: 'project/skill-ecosystem', parent: '/projects/', title: 'AI 技能发现与质量治理', description: 'DroiClaw 工作专题：技能分类、使用说明、Find-Skill、审核发布流程与评价脚本化，梳理从技能供给到首次使用的产品工作。' },
  { path: '/projects/ai-commercialization/', type: 'project', id: 'ai-commercialization', key: 'project/ai-commercialization', parent: '/projects/', title: 'AI 订阅与权益体系', description: 'DroiClaw 工作专题：账号、设备、订阅、赠送权益与 Credits 的业务规则，以及支付异常、产品验收和部分功能上线。' },
  { path: '/projects/international-product/', type: 'project', id: 'international-product', key: 'project/international-product', parent: '/projects/', title: '海外产品与本地化', description: 'DroiClaw 工作专题：技能、套餐与奖励说明的多语言配置、内容核验和海外演示适配。' },
  { path: '/projects/energy-research/', type: 'project', id: 'energy-research', key: 'project/energy-research', parent: '/projects/', title: '能源产品研究', description: '参与 HW 能源产品的市场、用户与需求研究，为产品规划和体验改进提供依据。' },
  { path: '/projects/energy-product-planning/', type: 'project', id: 'energy-product-planning', key: 'project/energy-product-planning', parent: '/projects/', title: '充电网络与户用光伏产品研究与规划', description: '结合充电网络市场与人群研究、Kano需求排序及需求拆解，以及C端户用光伏智能功能规划，形成产品与体验设计输入。' },
  { path: '/projects/station-control-research/', type: 'project', id: 'station-control-research', key: 'project/station-control-research', parent: '/projects/', title: '光伏电站管理系统用户研究与功能改进', description: '围绕地面光伏电站 SaaS 管理系统开展实地调研、问卷与数据分析，形成用户画像、功能改进建议及研究报告。' },
  { path: '/projects/hardware-research/', type: 'project', id: 'hardware-research', key: 'project/hardware-research', parent: '/projects/', title: '金融行业打印设备使用体验研究', description: '研究银行前厅与楼内办公的使用差异，承担问卷设计、调研执行、定量数据分析与定性资料整理，形成分场景需求结论。' },
  { path: '/projects/hardware-human-factors/', type: 'project', id: 'hardware-human-factors', key: 'project/hardware-human-factors', parent: '/projects/', title: '打印设备人因评估与产品形态设计', description: '负责打印设备 A/B 试验、使用观察、3D 人因评估、场景与注意力分析及产品形态设计，相关产品最终投产。' },
  { path: '/projects/product-business/', type: 'project', id: 'product-business', key: 'project/product-business', parent: '/projects/', title: '消费端产品分析与商业化', description: '分析 DROI 的 6 条消费端产品线，结合经营数据、用户反馈与渠道表现，参与广告流程设计、版本迭代及发布评估。' },
  { path: '/capabilities/research/', type: 'skill', id: 'research', key: 'skill/research', parent: '/capabilities/', title: '用户研究', description: '结合心理学背景与实地调研、问卷及定量定性分析，研究用户行为、任务与情境差异，并开展人因评估与产品形态设计。' },
  { path: '/capabilities/planning/', type: 'skill', id: 'planning', key: 'skill/planning', parent: '/capabilities/', title: '产品规划与交付', description: '结合用户研究、产品数据与业务条件，形成产品方案、流程与规则，推进评审、验收及发布核验。' },
  { path: '/capabilities/ai/', type: 'skill', id: 'ai', key: 'skill/ai', parent: '/capabilities/', title: 'AI 产品设计', description: 'AI 助手与 Agent 应用的场景规划、任务交互、技能检索、运营工作流、应用评估及协同交付，附具体项目与交付依据。' },
  { path: '/capabilities/project-management/', type: 'skill', id: 'project-management', key: 'skill/project-management', parent: '/capabilities/', title: '项目管理', description: '消费端多产品线及商业化专项的需求组织、阶段推进、跨团队依赖协调、灰度发布跟踪、问题处理和工作交接。' },
];

// Compatibility documents redirect to current pages and are not content branches.
export const legacyPageRedirects = [
  { path: '/capabilities/delivery/', to: '/capabilities/planning/' },
];

function defaultBase() {
  return import.meta.env?.BASE_URL || '/';
}

function normalizedBase(base) {
  const value = base.replace(/^\/+|\/+$/g, '');
  return value ? `/${value}/` : '/';
}

export function routeHref(path, base = defaultBase()) {
  const prefix = normalizedBase(base);
  const suffix = path.replace(/^\/+/, '');
  return `${prefix}${suffix}`;
}

export function parsePortfolioPath(pathname, base = defaultBase()) {
  const prefix = normalizedBase(base);
  let relative;
  if (pathname === prefix.slice(0, -1)) relative = '/';
  else if (pathname.startsWith(prefix)) relative = `/${pathname.slice(prefix.length)}`;
  else return { type: 'notfound', key: 'notfound', parent: '/', invalid: true };

  relative = relative.replace(/\/index\.html$/, '/');
  if (!relative.endsWith('/')) relative += '/';
  const page = portfolioPages.find(page => page.path === relative);
  if (page) return page;
  const redirect = legacyPageRedirects.find(entry => entry.path === relative);
  const destination = redirect && portfolioPages.find(entry => entry.path === redirect.to);
  return destination ? { ...destination, redirectTo: redirect.to }
    : { type: 'notfound', key: 'notfound', parent: '/', invalid: true };
}

// Only the former home document used these hashes as application routes.
export function legacyHashPath(hash) {
  const simple = { '#top': '/', '#about': '/experience/', '#projects': '/projects/', '#strengths': '/capabilities/', '#contact': '/contact/' };
  if (simple[hash]) return simple[hash];
  const match = hash.match(/^#(work|skills|experience)\/([^/]+)$/);
  if (!match) return null;
  const branch = { work: 'projects', skills: 'capabilities', experience: 'experience' }[match[1]];
  const path = `/${branch}/${match[2]}/`;
  const redirect = legacyPageRedirects.find(entry => entry.path === path);
  if (redirect) return redirect.to;
  return portfolioPages.some(page => page.path === path) ? path : null;
}
