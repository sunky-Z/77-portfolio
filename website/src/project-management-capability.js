export const projectManagementCapabilities = {
  zh: {
    title: '项目管理',
    summary: '组织专项需求，推进多产品线迭代与版本交付。',
    intro: '围绕消费端多产品线与商业化专项，承担需求梳理、阶段推进、跨团队对齐、版本跟踪和工作交接。将产品需求、研发依赖、测试反馈与经营数据联系起来，持续核对任务进度、交付条件和后续问题。',
    methods: [
      {
        title: '专项需求与阶段组织',
        text: '将商业化专项整理为需求池、阶段功能和产品侧文档，衔接需求派发与开发跟进。在跟进一期开发的同时对齐二期需求，保持不同阶段任务与方案的衔接。',
        projectId: 'product-business',
        evidence: '开展商业化专项需求池管理、一期需求派发及二期需求对齐',
      },
      {
        title: '跨团队与依赖协调',
        text: '围绕产品目标与具体方案组织市场、运营及研发沟通，对齐内容、接口和服务端需求。跟进接口联调及关联问题，衔接不同团队的实现条件与产品使用流程。',
        projectId: 'product-business',
        evidence: '开展市场与运营专项对齐，衔接接口沟通、服务端需求和联调',
      },
      {
        title: '多产品线进度跟踪',
        text: '并行跟踪不同产品线的开发、SDK 更新和适配任务，核对在办事项与当前阶段。结合季度目标推进分项验收，并持续跟进发测、入库及后续处理节点。',
        projectId: 'product-business',
        evidence: '跟踪多产品线开发和 SDK 更新进度，推进季度目标逐步验收',
      },
      {
        title: '灰度与发布节点管理',
        text: '衔接灰度放量、修复发测、功能验收与版本发布，跟踪各阶段的实际状态。结合版本数据和测试反馈核对后续工作，区分需求完成、发测与正式上线。',
        projectId: 'product-business',
        evidence: '跟进灰度放量、修复版本发测，并记录灰度与全量版本的发布进展',
      },
      {
        title: '交付风险与问题跟进',
        text: '围绕崩溃、ANR、机型适配及兼容问题跟进排查和处理，关注其对版本交付的影响。持续核对修复、测试、入库与封板状态，衔接问题处理和阶段交付要求。',
        projectId: 'product-business',
        evidence: '跟踪性能与适配问题，推进机型版本入库及兼容方案封板',
      },
      {
        title: '阶段复盘与工作交接',
        text: '结合灰度、渠道与经营数据分析版本问题，核对日活等指标的统计口径，为后续迭代提供依据。推进产品事项与数据分析工作的阶段交接，衔接在办任务和后续跟进。',
        projectId: 'product-business',
        evidence: '开展渠道与版本问题分析、日活口径对齐，以及产品和数据分析事项交接',
      },
    ],
    projects: ['product-business'],
    boundary: '职责侧重产品侧的需求组织、跨团队推进、版本节点跟踪与工作交接。研发、设计、测试和运营按各自职责协作完成实现与发布，具体任务的进展和完成范围分别记录。',
  },
  en: {
    title: 'Project management',
    summary: 'Organize requirements and advance iterations across consumer product lines.',
    intro: 'Organize requirements, phased delivery, cross-team alignment, release tracking and handovers across consumer products and monetization initiatives. Connect product requirements, engineering dependencies, test feedback and operating data to track task progress, delivery conditions and follow-up issues.',
    methods: [
      {
        title: 'Requirements and phased delivery',
        text: 'Organize monetization initiatives into a requirements backlog, phased features and product documentation, connecting task allocation with development follow-up. Align second-phase requirements with the first phase in progress so subsequent plans remain connected to current work.',
        projectId: 'product-business',
        evidence: 'Managed initiative requirements, allocated first-phase product tasks and aligned second-phase requirements',
      },
      {
        title: 'Cross-team and dependency coordination',
        text: 'Coordinate marketing, operations and engineering around product goals and specific plans, aligning content, interfaces and server requirements. Follow integration and related issues to connect implementation conditions across teams with the product flow.',
        projectId: 'product-business',
        evidence: 'Coordinated marketing and operations reviews, interface discussions, server requirements and integration',
      },
      {
        title: 'Progress across product lines',
        text: 'Track development, SDK updates and device adaptation across product lines, checking open tasks and their current stages. Advance acceptance against quarterly goals and follow testing, version intake and subsequent handling.',
        projectId: 'product-business',
        evidence: 'Tracked development and SDK updates across product lines and advanced acceptance against quarterly goals',
      },
      {
        title: 'Staged rollout and release milestones',
        text: 'Connect staged rollout, testing of fixes, feature acceptance and release, tracking the actual status at each stage. Check follow-up work against version data and test feedback, distinguishing completed requirements, test submissions and production releases.',
        projectId: 'product-business',
        evidence: 'Followed rollout expansion and testing of fixes, with progress recorded for staged and full releases',
      },
      {
        title: 'Delivery risks and issue follow-up',
        text: 'Follow crashes, ANRs, device adaptation and compatibility issues in relation to their impact on delivery. Check fixes, testing, version intake and freeze status, connecting issue handling with phased delivery requirements.',
        projectId: 'product-business',
        evidence: 'Tracked performance and adaptation issues and advanced version intake and compatibility freeze milestones',
      },
      {
        title: 'Phase reviews and handovers',
        text: 'Analyze version issues using rollout, channel and operating data, aligning definitions for measures such as daily active users to inform further iteration. Advance handovers of product and data-analysis responsibilities, connecting open tasks with subsequent follow-up.',
        projectId: 'product-business',
        evidence: 'Analyzed channel and version issues, aligned active-user definitions and advanced product and data-analysis handovers',
      },
    ],
    projects: ['product-business'],
    boundary: 'My scope centers on product requirements, cross-team coordination, release milestones and handovers. Engineering, design, QA and operations contribute implementation and releases in their respective roles. Progress and completed scope are recorded for individual tasks.',
  },
};
