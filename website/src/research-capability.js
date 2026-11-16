export const researchCapabilities = {
  zh: {
    title: '用户研究',
    summary: '从真实使用情境，形成产品判断依据。',
    intro: '结合心理学教育背景与行业研究实践，围绕人的行为、任务目标和使用环境定义研究问题。通过问卷、现场调研、定量与定性分析及人因评估，识别需求差异，形成产品改进和形态设计的依据。',
    methods: [
      {
        title: '研究问题与使用情境',
        text: '将业务问题拆解为使用者、任务、环境与操作困难，结合实际工作过程确定研究重点。围绕山地巡检，将现场风险与管理系统的功能需求联系起来，明确需求分析的具体情境。',
        projectId: 'station-control-research',
        evidence: '实地了解山地电站每周巡检的执行困难与安全风险',
      },
      {
        title: '问卷设计与现场调研',
        text: '围绕不同岗位与使用场景设计问卷，结合现场调研了解实际操作与主观体验。区分前厅业务、楼内办公及不同使用角色，将调研资料对应到具体人群与工作任务。',
        projectId: 'hardware-research',
        evidence: '在银行市级分行承担问卷设计与调研执行，覆盖多类使用角色',
      },
      {
        title: '定量分析与定性归纳',
        text: '结合问卷数据分析与定性资料整理，比较不同人群和场景的使用差异。分别归纳业务操作对清晰、速度与顺畅的要求，以及办公场景对打印服务便利性的需求，形成具体结论。',
        projectId: 'hardware-research',
        evidence: '形成前厅业务体验与局域网、共享、云打印服务的需求差异结论',
      },
      {
        title: '人因与操作体验评估',
        text: '围绕部件布局、面板操作及取放纸任务开展 A/B 对比、操作观察与 3D 人因规则评估。结合站姿、坐姿与用户评价比较方案，构想兼顾面板关注和出纸口可见性的布局条件。',
        projectId: 'hardware-human-factors',
        evidence: '本人完成研究、分析与产品形态设计，相关产品最终投产',
      },
      {
        title: '研究结论与功能建议',
        text: '将使用问题、用户画像与场景差异整理为功能改进方向，说明问题对应的作业条件及产品支持需求。针对山地巡检提出无人机或监控辅助巡检、单板故障独立报警建议，形成研究输入。',
        projectId: 'station-control-research',
        evidence: '辅助巡检与独立报警作为功能建议纳入用户研究报告',
      },
    ],
    projects: ['energy-research', 'station-control-research', 'hardware-research', 'hardware-human-factors'],
    boundary: '站控研究中负责实地调研、问卷、数据分析及报告产出；金融行业调研由团队共同开展，本人承担问卷、执行与分析工作。人因案例的研究、分析、场景构想、方案比较及产品形态设计均由本人完成。',
  },
  en: {
    title: 'User research',
    summary: 'Ground product decisions in actual use.',
    intro: 'Combine an educational background in psychology with industry research to define questions around behavior, task goals and working environments. Use questionnaires, fieldwork, quantitative and qualitative analysis, and human factors evaluation to identify differing needs and inform product improvements and form design.',
    methods: [
      {
        title: 'Research questions and context of use',
        text: 'Break business questions down into users, tasks, environments and operating difficulties, grounding the research in actual work. Connect the risks of mountain-site inspections with management-system requirements to define the context for needs analysis.',
        projectId: 'station-control-research',
        evidence: 'Field research into the difficulty and safety risks of weekly inspections at a mountain solar plant',
      },
      {
        title: 'Questionnaire design and fieldwork',
        text: 'Design questionnaires around different roles and use contexts, combining fieldwork with accounts of actual operation and subjective experience. Distinguish counter services, office work and user roles so research material relates to specific people and tasks.',
        projectId: 'hardware-research',
        evidence: 'Questionnaire design and fieldwork at a municipal-level bank branch, covering multiple user roles',
      },
      {
        title: 'Quantitative analysis and qualitative synthesis',
        text: 'Combine questionnaire analysis with qualitative material to compare use across groups and contexts. Identify requirements for clarity, speed and smooth counter-service operation, alongside the convenience of office-printing services, and develop specific findings.',
        projectId: 'hardware-research',
        evidence: 'Findings distinguishing counter-service experience from local-network, shared and cloud-printing needs',
      },
      {
        title: 'Human factors and operating experience',
        text: 'Use A/B comparisons, task observation and 3D human factors assessment to examine component layouts, panel operation and paper handling. Compare standing and seated scenarios with participant feedback, developing layout concepts for panel attention and output-area visibility.',
        projectId: 'hardware-human-factors',
        evidence: 'I completed the research, analysis and product-form design; the product entered production',
      },
      {
        title: 'Research findings and feature proposals',
        text: 'Translate use problems, user profiles and contextual differences into improvement directions, identifying the working conditions and support needs behind each issue. Propose drone- or camera-assisted inspections and individual-panel fault alerts as research input for mountain-site maintenance.',
        projectId: 'station-control-research',
        evidence: 'Assisted inspection and separate fault-alert proposals documented in the user research report',
      },
    ],
    projects: ['energy-research', 'station-control-research', 'hardware-research', 'hardware-human-factors'],
    boundary: 'For the solar plant study, I handled fieldwork, questionnaires, data analysis and reporting. The financial-sector study was a team effort, with my work covering questionnaires, fieldwork and analysis. I completed all research, analysis, scenario concepts, option comparison and product-form design in the human factors case.',
  },
};
