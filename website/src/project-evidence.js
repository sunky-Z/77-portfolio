export const taskEvidence = {
  zh: {
    title: '规则与验收说明',
    intro: '依据已上线流程与手工核对情况整理的规则说明。',
    columns: ['场景', '产品规则', '手工核对'],
    rows: [
      [
        '执行中关闭桌面卡片',
        '关闭仅移除卡片展示，后台任务继续运行。',
        '任务运行时关闭卡片，继续核对任务能否完成。',
      ],
      [
        '任务完成后找回结果',
        '完成结果保留在对应对话中，延续任务上下文。',
        '关闭卡片并等待任务完成后，回到对应对话查找结果。',
      ],
      [
        '出行规划需要补充信息',
        '通过 Prompt 引导模型依据对话上下文判断信息是否充分；不足时，通过对话页半模态单选、多选补充出行方式与个人偏好。',
        '手动选择不同出行方式与偏好，核对生成计划是否体现所选条件。',
      ],
      [
        '跳过追问或后续调整',
        '允许跳过补充，先按已有信息生成计划；用户可在原对话中继续补充条件、调整计划。',
        '跳过追问并查看计划，再在原对话中补充或修改条件，核对调整路径与计划内容。',
      ],
    ],
    status: '上述流程已上线，并完成所述路径的手工核对。本人负责产品规则、交互流程与验收；Prompt 方案与算法同事共同讨论推进。',
  },
  en: {
    title: 'Product rules and acceptance checks',
    intro: 'A rule summary synthesized from live flows and the manual checks described.',
    columns: ['Scenario', 'Product rule', 'Manual check'],
    rows: [
      [
        'Close a desktop card during execution',
        'Closing the card removes its display while the task continues in the background.',
        'Close the card while the task is running, then check that the task can complete.',
      ],
      [
        'Find the result after completion',
        'The completed result remains in the corresponding conversation to preserve task context.',
        'After closing the card and waiting for completion, return to the corresponding conversation and find the result.',
      ],
      [
        'Add information for travel planning',
        'Prompts guide the model to assess whether the conversation provides enough information. When more is needed, a semi-modal single- or multi-choice interface asks for travel mode and preferences.',
        'Manually select different travel modes and preferences, then check that the plan reflects the selected conditions.',
      ],
      [
        'Skip questions or refine later',
        'Users can skip the questions and generate a plan from existing information, then add or change conditions in the same conversation.',
        'Skip the questions and view the plan, then add or change conditions in the same conversation and check the refinement flow and plan.',
      ],
    ],
    status: 'These flows are live, and the described paths were checked manually. I owned the product rules, interaction flow and acceptance checks; prompt design was discussed and developed with algorithm colleagues.',
  },
};
