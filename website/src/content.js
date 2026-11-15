// Public project topics describe role, product rules and delivery state within the relevant employment.
export const cases = {
  "ai-ecosystem": {
    "overview": [
      [
        "Company",
        "DROI"
      ],
      [
        "Role",
        "Scenario planning, interaction design & acceptance"
      ],
      [
        "Project",
        "DroiClaw AI assistant"
      ]
    ],
    "label": "01 / DROI · AI TASK EXPERIENCE",
    "title": "Proactive services & AI task experience",
    "intro": "Within the DroiClaw AI assistant project, I plan proactive services and task experiences and lead the product upgrade from AI summaries to smart notifications. The work connects information delivery, task feedback, user confirmation and result retrieval, alongside reviews and product acceptance.",
    "tags": [
      "Proactive services",
      "Smart notifications",
      "Human–AI interaction",
      "Task feedback"
    ],
    "problem": "Make task progress, results and next actions clear.",
    "problemText": "AI tasks can start from a conversation, notification or home screen, and may require information or permission while running. The design connects initiation, execution, user intervention and result review, while distinguishing what can be dismissed from what continues to run.",
    "decisions": [
      {
        "title": "Manage display and execution separately",
        "text": "Distinguish dismissing a card, deleting a source record and completing a business action. Stopping home-screen display and stopping task execution follow separate rules, so closing an entry point does not mean ending the task."
      },
      {
        "title": "Use a consistent result hierarchy",
        "text": "Organize task summaries, initiation sources and key results into three levels. Connect the conversation, Dynamic Island and home-screen result cards, defining the information and actions each surface provides."
      },
      {
        "title": "Consider information and usage costs together",
        "text": "Separate immediate, scheduled and manual summaries, including rules for messages arriving during summarization. Address irrelevant notifications, duplicates, important timestamps, retries and excessive Token use in the trigger design."
      }
    ],
    "actions": [
      "Proactive service framework: Group current information, task results, decisions awaiting the user, and risks and opportunities into four service types. Define sources, display timing, navigation and exit conditions, delivering 29 card templates and 38 visual variants.",
      "Smart notification upgrade: Refine categories, priorities, summary timing and retry rules. Design flows across AI calls, SMS summaries, scheduled tasks and to-dos synced to notes, and advance acceptance of the relevant features.",
      "User intervention during tasks: Design credential input, single- and multiple-choice prompts, permission confirmation and exception handling. Connect feedback across surfaces and address keyboard, camera-clearance and device-format constraints.",
      "Photo cleanup flow: Address result retrieval after leaving, default selections and inconsistent components. Design scan confirmation, progress updates, completion-result retrieval, preview and reselection, and deletion confirmation in a complete interaction prototype.",
      "Service integration and discovery: Check weather and parcel-service interfaces and fields, and design phone-number authorization, asynchronous binding and results. Add contextual entry and exit guidance for 7 core features, from home-screen recommendations to the feature itself."
    ],
    "outputs": [
      [
        "Proactive service templates & controls",
        "29 card templates, 38 visual variants, and display, exit and settings rules"
      ],
      [
        "Notification & task interaction plans",
        "Notification flows, user intervention, cross-surface feedback and exception handling"
      ],
      [
        "Full-flow prototypes & acceptance criteria",
        "Photo-cleanup prototype, integration plans and product acceptance criteria for relevant features"
      ]
    ],
    "progress": [
      {
        "title": "Notification and to-do acceptance",
        "text": "Completed smart-notification product acceptance and advanced AI-call integration and end-to-end to-do acceptance. These records concern specific features and paths."
      },
      {
        "title": "Proactive service card acceptance",
        "text": "Completed interface and functional acceptance for four card types, following deduplication, user deletion and automatic-dismissal rules and resolving display and interaction issues."
      },
      {
        "title": "Flow design and integration plans",
        "text": "Delivered the full photo-cleanup prototype and prepared weather and parcel integration plans covering interface checks, authorization and result feedback."
      }
    ],
    "lesson": "A complete task experience helps users understand what is happening, when they need to intervene and how to find results after leaving a page.",
    "boundary": "My scope covers scenario and interaction plans, cross-team reviews and product acceptance. Algorithms, engineering, visual implementation and testing involve the respective teams; template and prototype counts describe design deliverables."
  },
  "skill-ecosystem": {
    "overview": [
      [
        "Company",
        "DROI"
      ],
      [
        "Role",
        "Skill design, supply operations & quality management"
      ],
      [
        "Project",
        "DroiClaw AI assistant"
      ]
    ],
    "label": "02 / DROI · SKILL ECOSYSTEM",
    "title": "AI skill discovery & quality management",
    "intro": "Within the DroiClaw AI assistant project, I own skill screening, validation, categories, search, publishing and operating processes. The work addresses how skills are discovered, understood, installed and used through taxonomy and content work, Find-Skill design, and review and publishing flows.",
    "tags": [
      "Skill discovery",
      "Categories & search",
      "Review & publishing",
      "Operations automation"
    ],
    "problem": "Help users understand what a skill does and how to use it.",
    "problemText": "As the skill supply grows, tags, summaries, details and installation states all affect selection. The work addresses understandable content, discovery paths and publishing quality, including installation checks, version compatibility and subsequent updates.",
    "decisions": [
      {
        "title": "Replace fragmented tags with a shared taxonomy",
        "text": "Review tags across 218 published skills and organize 295 tags into 47 shared tags. Combine business categories, exact-tag searches, pagination and detail navigation in the discovery requirements."
      },
      {
        "title": "Explain purpose, inputs and outputs",
        "text": "Rewrite technical descriptions around purpose, required inputs, expected outputs and operating boundaries. Establish concise summary conventions so detail pages explain how to get started."
      },
      {
        "title": "Connect pre-publish checks with result verification",
        "text": "Include skill packages, metadata, package names and version consistency in the publishing flow, distinguishing domestic, overseas, test and production environments. Continue with review-status and publishing-result checks after upload."
      }
    ],
    "actions": [
      "Taxonomy and search: Organize existing tags and deduplicated popular search terms. Complete the first batch of 197 skill-tag updates with readback verification, and add category and exact-search requirements.",
      "Content and first use: Review summary length and organize details around purpose, inputs, outputs and boundaries. Save 130 rewritten detail entries in batches and refine first-use guidance.",
      "Find-Skill design: Complete design, testing handoff and production publishing for Find-Skill. Design initial-activation skill installation for both online and offline conditions.",
      "Review and publishing workflows: Design review and usability-validation agents and run through the AI batch-upload agent flow. Add package-version checks, installation states and publishing verification.",
      "Evaluation and quality tracking: Convert selected product-evaluation dimensions into tested Python scripts. Organize 22 people to evaluate 29 skills using manual and scripted methods and review the scores. Establish a dedicated issue tracker for testing, changes and acceptance.",
      "Compatibility and updates: Contribute to multi-version coexistence acceptance. Address platform and launcher version limits, conflicting version ranges for the same package name and delivery visibility, and refine update and release coordination."
    ],
    "outputs": [
      [
        "Shared tags & discovery rules",
        "295 tags organized into 47 shared tags; the first 197 updates verified by readback"
      ],
      [
        "Skill explanations & Find-Skill",
        "Purpose, inputs, outputs and operating boundaries, alongside Find-Skill and initial-installation flows"
      ],
      [
        "Review, publishing & evaluation flows",
        "Package and version checks, batch-upload agent flow, evaluation scripts and manual score reviews"
      ]
    ],
    "progress": [
      {
        "title": "Existing content updates",
        "text": "The first 197 skill-tag updates have been saved and read back, and 130 detail rewrites have been saved in batches. These are separate tag and detail-content activities."
      },
      {
        "title": "A published skill",
        "text": "Find-Skill completed design, testing handoff and production publishing. Its initial-activation installation flow was also designed for online and offline conditions."
      },
      {
        "title": "Automation and evaluation checks",
        "text": "The batch-upload agent flow has been run through. Python scripts for selected evaluation dimensions were tested and used alongside the 22-person evaluation of 29 skills and score review."
      }
    ],
    "lesson": "Skill supply needs discovery, understandable descriptions and usability together. Tags, explanations, installation states and publishing quality all form part of first use.",
    "boundary": "This topic is part of DroiClaw skill-ecosystem work. Tag reviews, content updates and published skills are recorded at their respective stages. Evaluation combines selected scripted checks with manual review."
  },
  "ai-commercialization": {
    "overview": [
      [
        "Company",
        "DROI"
      ],
      [
        "Role",
        "Subscription rules, interaction plans & delivery"
      ],
      [
        "Project",
        "DroiClaw AI assistant"
      ]
    ],
    "label": "03 / DROI · AI MONETIZATION",
    "title": "AI subscriptions & entitlements",
    "intro": "Within the DroiClaw AI assistant project, I contribute to subscriptions, Credits, paid-model access and incentives. The work translates device gifts, paid subscriptions, upgrades, coexisting entitlements and expiry into product rules, complete flows and acceptance requirements, and advances relevant delivery.",
    "tags": [
      "Subscriptions & entitlements",
      "Credits",
      "Payment flows",
      "Incentives"
    ],
    "problem": "Make entitlements and current access understandable.",
    "problemText": "Users may hold both device gifts and paid entitlements, while access also depends on accounts, device binding, plan permissions and Credit balances. The design turns these conditions into consistent display, execution and exception rules across claiming, subscribing, upgrading and expiry.",
    "decisions": [
      {
        "title": "Model identity, devices, permissions and balances separately",
        "text": "Distinguish account identity, device binding, server entitlements, plan capabilities and Credit balances. Examine signed-out, offline and insufficient-balance states, alongside local and cloud capability boundaries."
      },
      {
        "title": "Cover the full entitlement lifecycle",
        "text": "Connect plan browsing, eligibility, claiming, subscriptions, upgrades, payment feedback and exit-and-return paths. Cover cases such as an existing account signing in on a new device, with rules for gift and paid entitlements coexisting and recovery after expiry."
      },
      {
        "title": "Tie reward conditions to observable behavior",
        "text": "Distinguish exposure, clicks, successful downloads, actual invocation and execution results. Map task completion to observable events, align mobile and server checks, and design separate feedback for completion and active claiming."
      }
    ],
    "actions": [
      "Entitlement rules: Organize device gifts, first activation, installment claiming, upgrades, validity and expiry. Compare prototypes, PRDs and user explanations to resolve conflicting rules.",
      "Complete subscription prototype: Deliver a consolidated stage prototype and specification covering 15 account scenarios and 8 request or loading results, including interface states, entry points and exception-return paths.",
      "User explanations and acceptance: Maintain gift, upgrade and Credit FAQs, aligning Credit sources, distribution, validity and expiry. Design and accept specific paths such as failed-payment fallback and restrictions on selected capabilities at zero balance.",
      "Reward and incentive plan: Design a stage plan of 82 tasks and 1,000 Credits in total rewards. Remove duplicate and low-value tasks, address disproportionate rewards and claiming feedback, and complete reward-allocation logic and domestic reward-center product acceptance.",
      "Delivery and measurement definitions: Contribute to testing and release of subscription-center, top-up and Credit-management server functions. Advance payment integration and rewarded-video integration, and add usage-event and deduplication rules as a basis for later usage and conversion analysis."
    ],
    "outputs": [
      [
        "Entitlement rules & flow specifications",
        "Gift, paid, upgrade, coexistence and expiry rules, with related user explanations"
      ],
      [
        "Consolidated subscription prototype",
        "Stage prototype coverage of 15 account scenarios and 8 request or loading results"
      ],
      [
        "Incentive & measurement plan",
        "82 tasks, 1,000 Credits in stage-plan rewards, and behavior-event definitions"
      ]
    ],
    "progress": [
      {
        "title": "Payment and permission-path acceptance",
        "text": "Completed acceptance of specific paths including Alipay payment-failure fallback, restrictions on selected AI capabilities at zero Credits, gift-period switching and entry-plan capability limits."
      },
      {
        "title": "Subscription and payment releases",
        "text": "Contributed to testing and production releases of subscription-center, top-up and Credit-management server functions, and advanced gift-entitlement switching rules and the order-system integration with Alipay to release."
      },
      {
        "title": "Reward-center delivery",
        "text": "The domestic reward center completed product acceptance, and Youlianghui rewarded video was integrated into production. The 82 tasks and 1,000 Credits describe the stage plan’s task and reward scope."
      }
    ],
    "lesson": "Monetization rules need consistent user explanations, interface states and actual permissions. Exceptions and entitlement changes belong in the design and acceptance process alongside normal purchase flows.",
    "boundary": "My role centers on rules, interaction plans and delivery coordination with product, engineering, QA and operations. The 15 account scenarios describe prototype coverage; acceptance and release states are listed for specific functions."
  },
  "international-product": {
    "overview": [
      [
        "Company",
        "DROI"
      ],
      [
        "Role",
        "Localization, content configuration & delivery checks"
      ],
      [
        "Project",
        "DroiClaw AI assistant"
      ]
    ],
    "label": "04 / DROI · INTERNATIONAL PRODUCTS",
    "title": "International product & localization",
    "intro": "In DroiClaw’s overseas product work, I advance localization of skills, AI personas, plans and reward rules, including content configuration, production writes and spot checks, and support English demonstrations and product communication.",
    "tags": [
      "International products",
      "Multilingual content",
      "Entitlement explanations",
      "Delivery checks"
    ],
    "problem": "Keep content, rules and actual features aligned across languages.",
    "problemText": "Overseas versions need skill names and descriptions, plan entitlements, Credit explanations and demonstration content. The work checks meaning, brands, terminology, quantities and locale settings, distinguishing content preparation, production writes and actual feature states.",
    "decisions": [
      {
        "title": "Keep each skill consistent across languages",
        "text": "Align localized names, summaries and descriptions by skill identifier, checking purpose and meaning, with consistent brand names and specialist terms."
      },
      {
        "title": "Review rules and interfaces together",
        "text": "Check Credit amounts, plan entitlements, brand names and locale settings together. Resolve placeholders, missing translations and inaccurate wording, and review how user explanations connect to payment experiences."
      },
      {
        "title": "Match demonstrations to feature states",
        "text": "Prepare Chinese and English product points, screenshot and recording lists. Use English device screenshots to inspect unadapted modules and check statements about proactive services and other features against their actual state."
      }
    ],
    "actions": [
      "Skill localization: Select overseas skills and prepare names, summaries and details. Complete production writes and spot checks for 19 skills across 46 locale configurations: 874 content sets, each containing a name, summary and description.",
      "Existing-content preparation: Prepare multilingual materials for 105 existing skills, organized by locale, keeping content preparation and server writes as separate delivery stages.",
      "Shared fields and rules: Advance localized fields for personality settings, quick inputs, AI personas and plans. Deliver reward rules in 45 languages, checking entitlements, Credit amounts and brand wording.",
      "Monetization experience adaptation: Draw on overseas ad-request and display flows, reward Credits, model costs and AI payment plans to align content, entitlement explanations and payment experiences.",
      "English demonstrations and checks: Configure demonstration skills and AI personas, capture English device screens, inspect unadapted modules and prepare product points and demonstration-asset lists."
    ],
    "outputs": [
      [
        "Production multilingual content",
        "19 skills × 46 locale configurations: 874 sets of names, summaries and descriptions"
      ],
      [
        "Existing materials & reward rules",
        "Multilingual materials for 105 skills and reward rules in 45 languages"
      ],
      [
        "Shared fields & demonstration assets",
        "Adapted AI-persona and plan content, with English screenshots, recordings and product-communication lists"
      ]
    ],
    "progress": [
      {
        "title": "Production content writes",
        "text": "Completed production writes and spot checks for 874 multilingual content sets across 19 skills. The quantity counts content sets."
      },
      {
        "title": "Materials and rules delivered",
        "text": "Prepared multilingual materials for 105 existing skills and delivered reward rules in 45 languages. Preparation and production writes are recorded separately."
      },
      {
        "title": "Demonstrations and adaptation checks",
        "text": "Completed English demonstration configurations for a batch of skills and AI personas, alongside English device screenshots and checks for unadapted modules."
      }
    ],
    "lesson": "Localization delivery needs language, product rules and actual features to be checked together. Content writes, rule explanations and demonstration checks each have a defined scope and delivery state.",
    "boundary": "My role covers adaptation and delivery of multilingual content, shared fields, reward rules and product demonstrations. Content preparation, production writes and spot checks are recorded separately; the 46 locale configurations include Traditional Chinese."
  },
  "energy-research": {
    "overview": [
      [
        "Company",
        "HW"
      ],
      [
        "Role",
        "Market, user & requirements research"
      ],
      [
        "Area",
        "Energy product planning & evaluation"
      ]
    ],
    "label": "05 / HW · RESEARCH & PLANNING",
    "title": "Research for energy products",
    "intro": "Contributed to market, user and requirements research at HW, informing energy product planning and experience improvements.",
    "tags": [
      "Market research",
      "User research",
      "User journeys",
      "Requirements"
    ],
    "problem": "Product planning starts with user differences.",
    "problemText": "One product serves different roles, goals and contexts. Research combines industry knowledge with user behavior to identify needs, key journeys and opportunities, supporting the team’s planning and prioritization.",
    "actions": [
      "<strong>Market research:</strong> Map the industry, market participants, platform types and ecosystem relationships through desk research, establishing context for user and product research.",
      "<strong>User research:</strong> Contribute to interviews, surveys and data analysis to identify goals, differences between user groups and key journeys.",
      "<strong>Requirements research:</strong> Organize findings into user profiles, product opportunities and requirements priorities to support planning and design.",
      "<strong>Experience evaluation:</strong> Contribute to prototype and usability evaluations. Record issues, recommend improvements and follow up on their resolution."
    ],
    "outputs": [
      [
        "Market & user insights",
        "Industry context, user profiles and product opportunities"
      ],
      [
        "Key user journeys",
        "Goals and use across different roles"
      ],
      [
        "Requirements & evaluation",
        "Priorities, experience issues and recommendations"
      ]
    ],
    "lesson": "Research supports specific decisions: which users to prioritize, which needs to address and how to evaluate the proposal.",
    "boundary": "I contributed to market, user, requirements and experience research, supporting team planning and development. Public notes cover methods and responsibilities; internal business data and unreleased features are excluded."
  },
  "hardware-research": {
    "overview": [
      [
        "Company",
        "NINESTAR"
      ],
      [
        "Role",
        "Industry user and workflow research"
      ],
      [
        "Area",
        "Office printers and companion software"
      ]
    ],
    "label": "06 / NINESTAR · SMART HARDWARE",
    "title": "Office printing, from everyday use to IT support",
    "intro": "At NINESTAR, I studied the work of both the people using office printers and the IT staff maintaining them. Reporting a fault may be the last step for an employee. For IT, it starts the process of diagnosing, resolving or escalating the problem.",
    "problem": "Who takes over between a failed print job and a working printer?",
    "problemText": "Watching someone at the printer reveals only part of the work. Driver installation, device setup, routine checks and service requests also shape the experience. The research brought these tasks into the same timeline.",
    "tags": [
      "Industry users",
      "Role profiles",
      "IT support journey"
    ],
    "actions": [
      "Used fieldwork, shadowing and interviews to examine the priorities of everyday users, device administrators and buyers.",
      "Mapped installation, routine management, fault handling and service. Marked where employees reported an issue, where IT diagnosed it and when a technician took over.",
      "Turned features and claims from comparable devices into interview questions to examine which differences mattered in everyday work."
    ],
    "outputs": [
      [
        "Role profiles",
        "Distinguished the goals of users, administrators and buyers to guide interviews and requirements discussions."
      ],
      [
        "IT support journey",
        "Mapped roles, tools and handoffs across equipment use, software configuration and service support."
      ]
    ],
    "lesson": "A failed print job is unfinished work for an employee and a fault to diagnose for IT. A requirement becomes more specific once it names who discovers the issue, who acts and who verifies recovery.",
    "boundary": "I contributed to industry user research and competitive analysis, including role profiles, the support journey and interview topics. Product and engineering teams evaluated changes to the hardware and software."
  },
  "product-business": {
    "overview": [
      [
        "Company",
        "DROI"
      ],
      [
        "Role",
        "User requirements, business analysis & releases"
      ],
      [
        "Scope",
        "6 consumer product lines"
      ]
    ],
    "label": "07 / DROI · CONSUMER PRODUCTS",
    "title": "Consumer product analysis & monetization",
    "intro": "Own user-needs analysis and business-performance diagnosis across 6 DROI consumer-tool product lines. Combine BI, user feedback and support issues in version reviews, channel analysis and churn investigations, and contribute to advertising flows and release evaluation.",
    "tags": [
      "Product analysis",
      "User feedback",
      "Advertising flows",
      "Version evaluation"
    ],
    "problem": "Connect business performance with specific usage issues.",
    "problemText": "Changes in versions, channels and advertising entry points need to be examined alongside user behavior. The work tracks activity, retention, ARPU, penetration and conversion, combining data with user feedback and support issues to inform version changes and priorities.",
    "actions": [
      "Performance diagnosis: Combine BI, event data, user feedback and support issues to analyze activity, retention, conversion and monetization across 6 consumer product lines.",
      "Versions and channels: Contribute to staged-rollout analysis, channel reviews and churn investigations. Distinguish user groups and version conditions when identifying issues and recommending changes.",
      "Advertising flows: Contribute requirements and flows for lock-screen icons, portrait images and template advertising, assessing changes alongside experience and monetization performance.",
      "Requirements and releases: Own relevant requirements, prototypes and reviews. Work with engineering, design, QA and operations on staged rollouts, acceptance and post-release evaluation."
    ],
    "outputs": [
      [
        "Business & user-issue analysis",
        "Performance, user feedback, channel differences and iteration recommendations"
      ],
      [
        "Advertising requirements & prototypes",
        "Flows and requirements for lock-screen, portrait-image and template advertising"
      ],
      [
        "Version evaluation & release coordination",
        "Staged-rollout analysis, requirements reviews, acceptance and release evaluation"
      ]
    ],
    "lesson": "Read performance indicators alongside the relevant users, channels and versions. Assess product changes against specific usage issues and a defined evaluation scope.",
    "boundary": "The 6 product lines describe the analysis and requirements scope. Engineering, design, QA and operations share release delivery. This topic covers consumer tools; AI subscriptions and entitlements have a separate case."
  },
  "station-control-research": {
    "overview": [
      [
        "Company",
        "HW"
      ],
      [
        "Role",
        "Research with buyers and operators"
      ],
      [
        "Area",
        "Utility-scale solar plant management"
      ]
    ],
    "label": "HW",
    "title": "Solar plant controls, from purchase to field use",
    "intro": "At HW, I contributed to research on control systems for utility-scale solar plants. We looked at how buyers learned about and evaluated a system, and how people in production, maintenance and site operations used it in their daily work.",
    "problem": "Whose work does a feature on a purchasing checklist support?",
    "problemText": "Buyers can explain what matters when they choose a system. Understanding a feature in use also requires knowing who uses it and where it fits into their work. Plant diagnostics offered one concrete case.",
    "tags": [
      "Industry users",
      "Buying decisions",
      "User journeys"
    ],
    "actions": [
      "Mapped the buying process to distinguish how buyers learned about a system from what they weighed when making a decision.",
      "Contributed to user segmentation and profiles, and mapped journeys across production, maintenance and site operations.",
      "Studied diagnostic features with plant users, applying a funnel model to examine usage and reviewing comparable capabilities in competing products."
    ],
    "outputs": [
      [
        "Buyer decision criteria",
        "Organized the information buyers looked for across the purchase process."
      ],
      [
        "User profiles and journeys",
        "Placed each role’s goals in the context of production, maintenance and site operations."
      ]
    ],
    "lesson": "A diagnostic feature can appear both on a purchasing checklist and in a maintenance task. Describing those situations separately helps a team identify whom to consult about a requirement.",
    "boundary": "I contributed to user and requirements research and organized buyer criteria, user profiles and journeys for product discussions."
  },
  "hardware-human-factors": {
    "overview": [
      [
        "Company",
        "NINESTAR"
      ],
      [
        "Role",
        "Human factors research and evaluation"
      ],
      [
        "Area",
        "Physical interaction with office equipment"
      ]
    ],
    "label": "NINESTAR",
    "title": "Human factors testing for everyday printer tasks",
    "intro": "At NINESTAR, I contributed to studies of everyday actions such as using printer controls and handling a paper tray. In a design review, it is easy to assume others will use a device the way you do. I framed the comparison around a common task that participants could perform under similar conditions.",
    "problem": "When people call an action easy, do they mean successful or comfortable?",
    "problemText": "Someone can complete a task on the first try and still describe the movement as awkward. The test made room for both an observation of performance and the participant’s own assessment.",
    "tags": [
      "Human factors",
      "Comparative testing",
      "Physical interaction"
    ],
    "actions": [
      "Defined tasks around the actions under review and chose appropriate measures such as completion, comfort or satisfaction.",
      "Piloted the instructions and recording procedure. In the comparison, participants performed the task before rating the experience.",
      "Brought observed behavior, ratings and qualitative feedback together in a report so the design team could see the evidence behind each judgment."
    ],
    "outputs": [
      [
        "Test plan and tasks",
        "Translated design questions into actions participants could perform and defined how each action would be recorded."
      ],
      [
        "Human factors evaluation",
        "Presented observed movements alongside participants’ assessments to support comparison at design review."
      ]
    ],
    "lesson": "Watching someone use a device before asking what they prefer gives a follow-up question a specific focus. The participant can point to the movement that felt difficult.",
    "boundary": "My work covered study design, test sessions and analysis. Design and engineering teams weighed the findings when reviewing the product."
  }
};

export const stages = {
  "huawei": {
    "label": "01 / HW",
    "title": "User research & product strategy",
    "description": "Contributed to energy user and market research, including solar plant work across production, maintenance and operations, and the buyer’s decision process.",
    "actions": [
      "Mapped industry and market context; contributed to interviews, surveys and data analysis.",
      "Analyzed goals and differences, documenting user profiles and key journeys.",
      "Contributed to requirements research, prototype evaluation and usability evaluation."
    ],
    "tags": [
      "User research",
      "Market research",
      "Product strategy"
    ]
  },
  "hardware": {
    "label": "02 / NINESTAR",
    "title": "Smart hardware user research",
    "description": "Studied how office equipment is used and maintained, bringing field research and human factors testing into product reviews.",
    "actions": [
      "Studied actual use through fieldwork, shadowing and interviews.",
      "Distinguished requirements across buyers, managers and users.",
      "Contributed to product positioning, requirements research and experience evaluation during development.",
      "Mapped the IT support journey and contributed to comparative human factors tests of everyday printer tasks."
    ],
    "tags": [
      "Smart hardware",
      "Industry users",
      "Experience evaluation"
    ]
  },
  "current": {
    "label": "03 / DROI",
    "title": "AI products & monetization",
    "description": "Product Manager responsible for AI-assistant scenarios and the skill ecosystem, with contributions to subscription entitlements, localization and consumer-product analysis.",
    "actions": [
      "Plan proactive services, smart notifications and task feedback, advancing interaction plans, reviews and acceptance of relevant features.",
      "Design skill discovery, review and publishing flows, manage content quality and contribute to AI subscription and entitlement rules.",
      "Advance localization and delivery checks, and use consumer-product data, user feedback and version evaluation to recommend iterations."
    ],
    "tags": [
      "AI task experience",
      "Skill ecosystem",
      "Subscription entitlements",
      "Localization"
    ],
    "metrics": [
      {
        "value": "6",
        "label": "Consumer product lines analyzed"
      },
      {
        "value": "178",
        "label": "Skills validated & published in an earlier stage"
      }
    ]
  }
};
