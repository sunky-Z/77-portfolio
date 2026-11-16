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
        "title": "Separate desktop dismissal from task execution",
        "text": "Dismissing a desktop card removes only its display; the task continues in the background and the completed result remains in the corresponding conversation, preserving its context. I verified both paths through manual checks, and the flow is live."
      },
      {
        "title": "Make additional information optional",
        "text": "For travel planning, prompts and conversation context guide the model to identify missing information: ask about travel mode and preferences when details are insufficient and generate when enough is available. Users can skip these questions, generate a plan from available information and refine it later in the same conversation."
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
      "Proactive service framework: Group current information, task results, decisions awaiting the user, and risks and opportunities into four service types. Define sources, display timing, navigation and exit conditions, delivering 29 card templates and 38 visual variants. Completed interface and functional acceptance of the four card types, covering deduplication, manual removal and automatic-dismissal rules, and followed up display and interaction issues.",
      "Smart notification upgrade: Lead the product upgrade from AI summaries to smart notifications, refining categories, priorities, summary timing and retry rules. Design flows across AI calls, SMS summaries, scheduled tasks and to-dos synced to notes. Completed smart-notification product acceptance and advanced AI-call integration and end-to-end to-do acceptance.",
      "User intervention during tasks: Design credential input, single- and multiple-choice prompts, permission confirmation and exception handling. Connect feedback across surfaces and address keyboard, camera-clearance and device-format constraints.",
      "Travel planning: Use semi-modal single- and multiple-choice inputs in the conversation. Manually selected different travel modes and preferences, checked whether plans reflected them, and verified skipping questions and adding or changing details later. The flow is live.",
      "Photo cleanup flow: Address result retrieval after leaving, default selections and inconsistent components. Delivered a complete interaction prototype covering scan confirmation, progress updates, completion-result retrieval, preview and reselection, and deletion confirmation.",
      "Service integration and discovery: Prepared weather and parcel-service integration plans covering interface and field checks, phone-number authorization, asynchronous binding and result feedback. Add contextual entry and exit guidance for 7 core features, from home-screen recommendations to the feature itself."
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
    "boundary": "My scope covers requirements, scenario and interaction plans, cross-team reviews and product acceptance. The prompt approach was discussed and advanced jointly with algorithm colleagues. Algorithms, engineering, visual implementation and testing involve the respective teams."
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
      "Content and first use: Review summary length, save 130 rewritten skill-detail entries in batches and refine first-use guidance.",
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
    "boundary": "Tag reviews, content updates and published skills are recorded at their respective stages. Evaluation combines selected scripted checks with manual review."
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
        "text": "For scenarios such as an existing account signing in on a new device, define rules for gift and paid entitlements coexisting and recovery after expiry."
      },
      {
        "title": "Tie reward conditions to observable behavior",
        "text": "Distinguish exposure, clicks, successful downloads, actual invocation and execution results. Map task completion to observable events, align mobile and server checks, and design separate feedback for completion and active claiming."
      }
    ],
    "actions": [
      "Entitlement rules: Organize device gifts, first activation, installment claiming, upgrades, validity and expiry. Compare prototypes, PRDs and user explanations to resolve conflicting rules.",
      "Complete subscription prototype: Deliver a consolidated stage prototype and specification covering 15 account scenarios and 8 request or loading results, including interface states, entry points and exception-return paths.",
      "User explanations and acceptance: Maintain gift, upgrade and Credit FAQs, aligning Credit sources, distribution, validity and expiry. Completed acceptance of specific paths including Alipay payment-failure fallback, restrictions on selected AI capabilities at zero Credits, gift-period switching and entry-plan capability limits.",
      "Reward and incentive plan: Design a stage plan of 82 tasks and 1,000 Credits in total rewards. Remove duplicate and low-value tasks, address disproportionate rewards and claiming feedback, and complete reward-allocation logic and domestic reward-center product acceptance.",
      "Delivery and measurement definitions: Contribute to testing and production releases of subscription-center, top-up and Credit-management server functions, and advance gift-entitlement switching rules and order-system integration with Alipay to release. Youlianghui rewarded video is integrated into production. Add usage-event and deduplication rules as a basis for later usage and conversion analysis."
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
    "boundary": "My role centers on rules, interaction plans and delivery coordination with product, engineering, QA and operations. The 15 account scenarios describe prototype coverage."
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
        "text": "Check Chinese and English product points against actual feature states, particularly statements about proactive services."
      }
    ],
    "actions": [
      "Skill localization: Select overseas skills and prepare names, summaries and details. Complete production writes and spot checks for 19 skills across 46 locale configurations: 874 content sets, each containing a name, summary and description.",
      "Existing-content preparation: Prepare multilingual materials for 105 existing skills, organized by locale, keeping content preparation and server writes as separate delivery stages.",
      "Shared fields and rules: Advance localized fields for personality settings, quick inputs, AI personas and plans. Deliver reward rules in 45 languages, checking entitlements, Credit amounts and brand wording.",
      "Monetization experience adaptation: Draw on overseas ad-request and display flows, reward Credits, model costs and AI payment plans to align content, entitlement explanations and payment experiences.",
      "English demonstrations and checks: Completed English demonstration configurations for a batch of skills and AI personas, with English device screenshots and checks of unadapted modules. Prepared product points and demonstration-asset lists."
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
    "boundary": "My role covers adaptation and delivery of multilingual content, shared fields, reward rules and product demonstrations. The 46 locale configurations include Traditional Chinese."
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
    "boundary": "I contributed to market, user, requirements and experience research, supporting team planning and development."
  },
  "energy-product-planning": {
    "overview": [
      [
        "Company",
        "HW"
      ],
      [
        "Role",
        "Market insights, user research, requirements design & feature planning"
      ],
      [
        "Area",
        "Charging networks & consumer residential solar"
      ]
    ],
    "label": "HW · CHARGING NETWORKS & RESIDENTIAL SOLAR",
    "title": "Charging networks & residential solar product research and planning",
    "intro": "Research and planning covered charging networks and consumer residential solar. The charging work focused on pre-project market, user and requirements research for an operations platform; the residential-solar work focused on user-facing intelligent features and integrated solar, storage and charging.",
    "tags": [
      "Charging networks",
      "Residential solar",
      "User research",
      "Requirements & feature planning"
    ],
    "problem": "Translate market and user insights into requirements and feature plans.",
    "problemText": "Research for the charging operations platform examined platform types, target users and ecosystem relationships to inform pre-project requirements. The consumer residential-solar work examined the coordination of generation, consumption and charging to plan intelligent user-facing features.",
    "decisions": [
      {
        "title": "Establish segments before focusing on priority users",
        "text": "Use sensitivity to time, money and work responsibilities as three dimensions for analysis. Identify segments through questionnaire clustering, then conduct in-depth interviews with priority groups to connect differences between users with specific needs."
      },
      {
        "title": "Connect prioritization with requirements decomposition",
        "text": "Use Kano to distinguish must-be, performance and attractive requirements. After prioritization, decompose original needs into system-level and development requirements within the integrated product development (IPD) process."
      },
      {
        "title": "Plan intelligent features around energy-use conditions",
        "text": "Consider generation, charging behavior, peak and off-peak tariffs, and combined solar, storage and charging in residential scenarios. Define forecasting, calculation, adjustment and scheduling features in relation to these conditions."
      }
    ],
    "actions": [
      "Market insights: Conduct pre-project research into charging operations platform types, target users and ecosystem relationships. Identify segment opportunities to inform product positioning and research priorities.",
      "Three-axis user research: Segment users by sensitivity to time, money and work responsibilities. Identify 3 main groups through questionnaire clustering, conduct in-depth interviews with priority groups and produce 24 competitive product attributes.",
      "Kano and requirements decomposition: Prioritize must-be, performance and attractive requirements. Decompose the Top 10 original needs into 10 system-level requirements and 100+ development requirements within the IPD process.",
      "High-fidelity usability evaluation: Assess the charging operations platform’s high-fidelity interfaces against Nielsen’s usability heuristics. Identify 50 usability improvement opportunities to inform interface and interaction changes.",
      "Residential solar and integrated energy feature planning: Plan user-facing FusionSolar features for consumer residential solar, including generation forecasting, solar-exposure calculation, automatic charging-power adjustment and intelligent solar-storage scheduling. Consider generation, charging behavior, peak and off-peak tariffs, and combined solar, storage and charging."
    ],
    "outputs": [
      [
        "Charging-platform market and user research",
        "Market and ecosystem analysis, three-axis user segments, priority-group interviews and 24 competitive product attributes"
      ],
      [
        "Charging-platform requirements and experience plans",
        "Kano priorities, layered requirements specifications and 50 high-fidelity usability improvement opportunities"
      ],
      [
        "Residential-solar intelligent-feature plans",
        "FusionSolar generation forecasting, solar-exposure calculation, charging-power adjustment and intelligent solar-storage scheduling"
      ]
    ],
    "boundary": "My work covered market and user research, requirements design and user-facing feature planning. The charging-platform research ran from June 2023 to January 2024, and all quantities in this topic refer to that branch. The residential-solar and integrated solar-storage-charging work covered product and intelligent-feature planning."
  },
  "hardware-research": {
    "overview": [
      [
        "Company",
        "NINESTAR"
      ],
      [
        "Role",
        "Questionnaire design, research execution & quantitative and qualitative analysis"
      ],
      [
        "Context",
        "Bank service counters and office work"
      ]
    ],
    "label": "06 / NINESTAR · USER RESEARCH",
    "title": "Financial-Sector Printing Experience Research",
    "intro": "The study examined printing experience at a bank’s municipal-level branch, comparing usage and requirement priorities across user groups in counter-service and office contexts.",
    "problem": "Requirement differences between counter service and everyday office work",
    "problemText": "Printing equipment in the same bank served different working contexts. The study included regular employees, managers, IT staff and users handling confidential material, with experience analyzed in relation to their actual tasks.",
    "tags": [
      "Financial services",
      "Contextual research",
      "Questionnaires and data analysis",
      "Role differences"
    ],
    "decisionLabel": "Key finding",
    "decisionEyebrow": "Finding",
    "decisions": [
      {
        "title": "Counter service emphasizes clarity, speed and smooth operation",
        "text": "Customer-facing employees mainly handled business tasks and required clear, quick and smooth operation. Requirements were analyzed in the context of those specific business processes."
      },
      {
        "title": "Office work emphasizes convenient printing services",
        "text": "Staff in the office building mainly printed office content and placed greater emphasis on convenient local-network access, shared printing and cloud-printing services. These priorities differed from those of counter-service work."
      }
    ],
    "actions": [
      "Questionnaire design and research execution: Designed the questionnaire around financial-sector printing experience and conducted research at a municipal-level bank branch, covering counter-service and office contexts and different user roles.",
      "Quantitative analysis: Analyzed study data by user group and working context to identify differences in the printing requirements of counter-service and everyday office work.",
      "Qualitative material: Organized research material by user role and working context, summarizing the specific needs of different user groups."
    ],
    "outputs": [
      [
        "Questionnaire and research analysis material",
        "Questionnaire design, research records, quantitative analysis and organized qualitative material."
      ],
      [
        "Context and requirement findings",
        "Usage differences between counter-service and office contexts, with requirement priorities for different user roles."
      ]
    ],
    "boundary": "The research was conducted as a team. My main responsibilities were questionnaire design, research execution, quantitative analysis and organization of qualitative material."
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
      "Requirements and releases: Own requirements, prototypes and reviews, coordinating staged rollouts and post-release evaluation.",
      "Multi-project coordination and phased delivery: Track development across product lines and advance staged acceptance of quarterly goals. Maintain a dedicated requirements backlog, align requirements with marketing and operations, and follow first-phase assignment, development progress and second-phase scope alignment.",
      "Release risks and issue tracking: Track crashes, ANRs and device-adaptation issues alongside rollout and channel data. Follow interface integration and testing of fixes, check version intake and freeze milestones, and advance phased handovers."
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
        "Project coordination & release evaluation",
        "Requirements backlog, development tracking, staged acceptance, rollout analysis and release evaluation"
      ]
    ],
    "actionIds": ["business-analysis", "version-analysis", "advertising-flow", "requirements-release", "project-coordination", "release-risk"],
    "boundary": "The 6 product lines describe the analysis and requirements scope. Engineering, design, QA and operations share release delivery."
  },
  "station-control-research": {
    "overview": [
      [
        "Company",
        "HW"
      ],
      [
        "Role",
        "Field research, questionnaire design, analysis & reporting"
      ],
      [
        "Area",
        "SaaS management for ground-mounted solar plants"
      ]
    ],
    "label": "HW",
    "title": "Solar Plant Management System User Research and Functional Improvement",
    "intro": "The SaaS management system served ground-mounted solar plants alongside photovoltaic inverters, with customers including energy companies and smaller plant owners. The research examined users’ work, profiles and use problems to inform functional improvements and early exploration of AI maintenance.",
    "problem": "Difficulty and safety risks in mountain-site inspections",
    "problemText": "Maintenance staff at one plant in mountainous terrain needed to carry out weekly inspections. Site conditions increased the difficulty of the task and involved safety risks. The research connected system requirements to specific roles, working conditions and tasks.",
    "tags": [
      "Plant management",
      "User profiles",
      "Functional improvement",
      "Maintenance research"
    ],
    "decisionLabel": "Key finding",
    "decisionEyebrow": "Finding",
    "decisions": [
      {
        "title": "Identify use needs through field conditions",
        "text": "Identify the support the management system needs to provide in relation to mountain-site conditions and inspection tasks."
      },
      {
        "title": "Propose assisted inspection and individual-panel alerts",
        "text": "I considered drone- or camera-assisted inspection and separate alerts for faults in individual solar panels."
      }
    ],
    "actions": [
      "Research design and execution: Organized the research around actual system-use problems, designed questionnaires and conducted field research to understand users’ roles, working contexts and task requirements.",
      "Data analysis and user profiles: Analyzed questionnaire data and qualitative material to identify user characteristics, use problems and functional needs, informing profiles and improvements to existing modules.",
      "Functional directions and reporting: Organized use problems into requirements for existing modules and maintenance proposals. Documented assisted inspection and individual-panel fault alerts in the research report as input for subsequent product discussion, alongside early exploration of AI maintenance and inspection."
    ],
    "outputs": [
      [
        "User research report",
        "Documented use contexts, user profiles, use problems and proposals for functional improvements."
      ],
      [
        "Maintenance directions",
        "Proposals for inspection and fault alerts, with preliminary analysis of AI maintenance and inspection."
      ]
    ],
    "boundary": "I was responsible for field research, questionnaire design, data analysis, qualitative analysis and research reporting."
  },
  "hardware-human-factors": {
    "overview": [
      [
        "Company",
        "NINESTAR"
      ],
      [
        "Role",
        "Human factors research, option evaluation & product form design"
      ],
      [
        "Area",
        "Physical interaction with printing equipment"
      ]
    ],
    "label": "NINESTAR",
    "title": "Printer Human Factors Evaluation and Product Form Design",
    "intro": "The study evaluated the human factors of the printer’s output tray and control panel, comparing layouts in actual use to inform product form design.",
    "problem": "Layout effects on posture, visibility and task completion",
    "problemText": "The output tray and the position and layout of the control panel required assessment in real tasks. The analysis considered task completion, standing and seated operating postures, attention to the panel and output area, and obstruction of the output area.",
    "tags": [
      "Human factors",
      "A/B testing",
      "Physical interaction",
      "Product form"
    ],
    "decisions": [
      {
        "title": "Include standing and seated use in scenario comparison",
        "text": "Analyze panel and paper-handling layout requirements for standing and seated use."
      },
      {
        "title": "Address panel attention and output-area visibility together",
        "text": "Developed layout concepts for attention during interaction, comparing how each option could support attention to both the control panel and paper output while keeping the output area visible and unobstructed."
      }
    ],
    "actions": [
      "Study design and task analysis: Set up A/B comparisons around left/right layouts, the output tray and control-panel position, breaking down panel operation, paper loading and paper retrieval into real tasks.",
      "Operation records and participant feedback: Recorded task completion, errors and operating effort, and observed posture. Asked participants about visibility, comfort and fatigue, ease of use and option preferences, and recorded their responses.",
      "Human factors assessment: Used 3D models to evaluate the design requirements of parts and buttons in actual operating scenarios and assess the suitability of each layout.",
      "Option comparison and form design: Combined human factors data, operation observations and participant feedback to compare the options and integrate their strengths into a product form. The product entered production."
    ],
    "outputs": [
      [
        "Human factors assessment material",
        "A/B operation records, posture observations, participant feedback and human factors assessment using 3D models."
      ],
      [
        "Operating scenarios and layout analysis",
        "Analysis of standing and seated use, attention allocation and visibility of the panel and paper output."
      ],
      [
        "Product-form proposal",
        "A product form integrating the strengths of the options based on the comparison findings."
      ]
    ],
    "boundary": "I carried out all research, analysis, standing and seated scenario concepts, attention concepts, option comparison and product form design in this case."
  }
};

export const stages = {
  "huawei": {
    "label": "01 / HW",
    "title": "User research & product strategy",
    "description": "Conducted market, user-group and requirements research for solar and charging products, informing product planning alongside field research and improvement proposals for a solar plant management system.",
    "actions": [
      "Conducted pre-project market, audience and requirements research for charging networks, using segmentation, Kano prioritization and requirements decomposition, and contributed to intelligent-feature planning for residential solar products.",
      "For the solar plant management study, took responsibility for field research, questionnaire design, data analysis, qualitative analysis and research reporting.",
      "Analyzed use problems in relation to roles, tasks and field conditions, and researched improvements to existing modules.",
      "Documented assisted-inspection and individual-panel alerting ideas for mountain-site inspections in a report, and explored early AI maintenance and inspection directions."
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
    "description": "Contributed to financial-sector printing experience research and took responsibility for human factors research and product form design for a printer that entered production.",
    "actions": [
      "Responsible for questionnaire design, research execution, quantitative analysis and qualitative material organization within a team study of financial-sector users.",
      "Analyzed usage differences between bank counter-service and office contexts, identifying experience requirements and printing-service needs.",
      "Took responsibility for printer A/B trials, use observation and human factors assessment using 3D models.",
      "Combined task data, standing and seated scenarios, attention concepts and option comparison into a product form design. The product entered production."
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
