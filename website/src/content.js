// Public project descriptions preserve responsibilities and delivery states.
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
    "intro": "I plan proactive services and AI task interactions for DroiClaw. I led the upgrade from AI summaries to smart notifications and follow the work through review and product acceptance, including delivery, task status, user confirmation and result retrieval.",
    "tags": [
      "Proactive services",
      "Smart notifications",
      "Human–AI interaction",
      "Task feedback"
    ],
    "problem": "What happens to a task when its card is dismissed?",
    "problemText": "Tasks can start in a conversation, notification or home screen and may need more information or permission while running. Each entry point must explain the current state, what the user needs to do and where to find the result after leaving. Dismissing a card must also be distinct from stopping the task.",
    "decisions": [
      {
        "title": "Dismiss the card, keep the task running",
        "text": "Dismissing the home-screen card removes the display only. The task continues in the background and its result stays in the original conversation. I manually checked both dismissal and result retrieval; the flow is live."
      },
      {
        "title": "Let users skip questions and refine the plan later",
        "text": "Prompts guide the model to check whether the conversation contains enough information. It asks about travel mode and preferences when details are missing, or generates a plan when they are sufficient. Users can skip the questions, get a plan from the available information and revise it in the same conversation."
      },
      {
        "title": "Keep the result hierarchy consistent across entry points",
        "text": "Task summaries, initiation sources and key results have three distinct levels. The conversation, Dynamic Island and home-screen card each show the information and actions appropriate to that surface."
      },
      {
        "title": "Define summary timing and incoming-message rules",
        "text": "Set separate rules for immediate, scheduled and manual summaries, including messages that arrive during summarization. The design also addresses irrelevant notifications, duplicate content, missing timestamps and Token use."
      }
    ],
    "actions": [
      "Proactive services: Define four service types for current information, task results, decisions awaiting the user, and risks and opportunities. Specify sources, display timing, navigation and exit conditions, delivering 29 card templates and 38 visual variants. Complete interface and functional acceptance for all four types and follow up duplicate cards, manual removal, automatic dismissal and interaction issues.",
      "Smart notifications: Lead the upgrade from AI summaries, defining categories, priorities, summary timing and retries. Design flows for AI calls, SMS summaries, scheduled tasks and to-dos synced to notes. Complete product acceptance for smart notifications and follow AI-call integration and end-to-end to-do acceptance.",
      "User intervention: Design credential entry, single- and multiple-choice prompts, permission confirmation and exception handling. Keep task feedback consistent across pages and address keyboard obstruction, camera clearance and device-format constraints.",
      "Travel planning: Add semi-modal single- and multiple-choice inputs to the conversation. Manually choose travel modes and preferences, check whether the plan uses them, and verify skipping questions and adding or changing details later. This flow is live.",
      "Photo cleanup: Design scan confirmation, progress updates, completion-result retrieval, preview and reselection, and deletion confirmation. Deliver a complete interaction prototype addressing lost results after leaving, default selections and inconsistent components.",
      "Service integration and guidance: Check weather and parcel-service APIs and fields, and design phone authorization, asynchronous binding and result display. Add home-screen recommendation, entry and exit guidance for 7 core features."
    ],
    "outputs": [
      [
        "Proactive-service card plans",
        "29 templates, 38 visual variants, and display, exit and settings rules"
      ],
      [
        "Notification and task interactions",
        "Notification flows, user input and permissions, cross-page feedback and exception handling"
      ],
      [
        "Flow prototypes and acceptance criteria",
        "Complete photo-cleanup prototype, service-integration plans and relevant feature checks"
      ]
    ],
    "boundary": "I own requirements, scenario and interaction plans, cross-team reviews and product acceptance. I define the travel-planning clarification rules and discuss the prompt approach with algorithm colleagues. The respective teams handle algorithms, engineering, visual implementation and testing."
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
    "intro": "I handle skill screening, validation, categories, search and publishing for DroiClaw. This includes tag and content updates, Find-Skill design, and changes to review, installation and update flows.",
    "tags": [
      "Skill discovery",
      "Categories & search",
      "Review & publishing",
      "Operations automation"
    ],
    "problem": "Before choosing a skill, users need to know what it does and how to start.",
    "problemText": "As the catalogue grows, scattered tags, long summaries and unclear installation states make selection harder. I work on categories and search, usage instructions and publishing checks, alongside version compatibility and updates.",
    "decisions": [
      {
        "title": "Replace scattered tags with shared categories",
        "text": "Review 218 published skills and organize 295 tags into 47 shared tags. Add requirements for business categories, exact-tag search, pagination and navigation to skill details."
      },
      {
        "title": "Explain purpose before inputs and outputs",
        "text": "Write skill instructions in terms of purpose, required inputs, expected outputs and limits. Keep summaries short and use the detail page to explain what users need before starting."
      },
      {
        "title": "Verify the result after uploading",
        "text": "Before publishing, check the package, metadata, package name and version, keeping domestic, overseas, test and production environments separate. After upload, check review status and the published result."
      }
    ],
    "actions": [
      "Tags and search: Organize existing tags and deduplicated popular search terms. Save the first batch of 197 skill-tag updates, read them back to verify the changes, and add category and exact-search requirements.",
      "Content and first use: Check summary lengths, save 130 rewritten skill-detail entries in batches and revise first-use guidance.",
      "Find-Skill: Complete design, testing handoff and production publishing. Design first-activation installation for both online and offline conditions.",
      "Review and publishing: Design skill-review and usability-validation agents and run the AI batch-upload agent flow. Add package-version checks, installation states and checks of published results.",
      "Evaluation and issue tracking: Turn selected evaluation dimensions into tested Python scripts. Organize 22 people to evaluate 29 skills using scripts and manual checks, then review the scores. Record skill-specific issues and follow testing, fixes and acceptance.",
      "Compatibility and updates: Contribute to multi-version coexistence acceptance. Address platform and launcher version limits, conflicting version ranges for the same package name and delivery visibility, and update the release process."
    ],
    "outputs": [
      [
        "Tags and search rules",
        "295 tags organized into 47 shared tags; the first 197 updates saved and verified by readback"
      ],
      [
        "Skill instructions and Find-Skill",
        "Purpose, inputs, outputs and limits, plus Find-Skill design and first-installation flows"
      ],
      [
        "Review, publishing and evaluation material",
        "Package and version checks, batch-upload agent flow, evaluation scripts and manual score reviews"
      ]
    ],
    "boundary": "Tag reviews, content updates and skill releases have separate delivery records. Scripts check selected evaluation dimensions only; other checks and score reviews are manual."
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
    "intro": "I contribute to DroiClaw subscriptions, Credits, paid-model access and rewards. I define rules for device gifts, paid plans, upgrades, coexisting benefits and expiry, deliver prototypes and acceptance criteria, and follow feature releases.",
    "tags": [
      "Subscriptions & entitlements",
      "Credits",
      "Payment flows",
      "Incentives"
    ],
    "problem": "When device gifts and paid plans coexist, what can the user access?",
    "problemText": "Access depends on sign-in, device binding, plans and Credit balances, as well as gifted and paid benefits. Each condition needs clear interface feedback, an expected outcome and exception handling. Claiming, upgrading and expiry rules must agree.",
    "decisions": [
      {
        "title": "Define account, device, access and balance separately",
        "text": "Distinguish account identity, device binding, server entitlements, plan capabilities and Credit balances. Check which local and cloud features remain available when signed out, offline or short of Credits."
      },
      {
        "title": "Explain coexistence and what happens after expiry",
        "text": "Define how gifted and paid benefits coexist, and which benefits resume after expiry, including an existing account signing in on a new device."
      },
      {
        "title": "Award Credits for actual behavior",
        "text": "Distinguish exposure, clicks, successful downloads, actual invocation and execution results. Define task completion, keep mobile and server checks consistent, and give separate feedback for completing a task and claiming its reward."
      }
    ],
    "actions": [
      "Entitlement rules: Document device gifts, first activation, installment claiming, upgrades, validity and expiry. Compare prototypes, PRDs and user instructions to correct conflicting rules.",
      "Subscription prototype: Deliver a consolidated stage prototype and specification covering 15 account scenarios and 8 request or loading results. Specify interface states, entry points and return paths after exceptions.",
      "Instructions and acceptance: Maintain gift, upgrade and Credit FAQs, including sources, distribution, validity and expiry. Design and verify Alipay payment-failure fallback, limits on selected AI features at zero Credits, gift-period switching and entry-plan feature limits.",
      "Rewards: Design a stage plan with 82 tasks and 1,000 Credits in total rewards. Remove duplicate and low-value tasks, correct disproportionate rewards and claiming feedback, and complete reward-allocation logic and domestic reward-center product acceptance.",
      "Release and measurement: Contribute to testing and production releases of subscription-center, top-up and Credit-management server functions. Follow gift switching and order-system integration with Alipay through release. Youlianghui rewarded video is in production. Add usage-event and deduplication rules for later usage and conversion analysis."
    ],
    "outputs": [
      [
        "Entitlement rules and flow specifications",
        "Gift, paid, upgrade, coexistence and expiry rules, with user instructions"
      ],
      [
        "Consolidated subscription prototype",
        "Stage prototype covering 15 account scenarios and 8 request or loading results"
      ],
      [
        "Reward and measurement plans",
        "82 tasks, 1,000 Credits in stage-plan rewards, and behavior-event definitions"
      ]
    ],
    "boundary": "I mainly handle rules, interaction plans and delivery coordination. Engineering, QA and operations share the delivery work. The 15 account scenarios refer to prototype coverage."
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
    "intro": "I handle parts of DroiClaw localization, including skill, AI-persona, plan and reward-rule content, production configuration and spot checks. I also prepare English demonstrations and product materials.",
    "tags": [
      "International products",
      "Multilingual content",
      "Entitlement explanations",
      "Delivery checks"
    ],
    "problem": "Translated content still needs to match the rules and working features.",
    "problemText": "I check skill names and descriptions, plan benefits, Credit explanations and demonstration materials for meaning, brand names, terminology, quantities and locale settings. Content preparation, production writes and feature delivery are recorded separately.",
    "decisions": [
      {
        "title": "Match localized content by skill identifier",
        "text": "Use the skill identifier to compare names, summaries and details across languages. Check purpose and meaning, and keep brand names and specialist terms consistent."
      },
      {
        "title": "Check numbers, rules and interfaces together",
        "text": "Check Credit amounts, plan benefits, brand names and configured languages. Correct placeholders, missing translations and inaccurate wording, and compare user instructions with payment flows."
      },
      {
        "title": "Demonstrate what the product actually supports",
        "text": "Check Chinese and English product claims against working features, especially wording about proactive services."
      }
    ],
    "actions": [
      "Skill localization: Select overseas skills and prepare names, summaries and details. Write and spot-check 19 skills across 46 locale configurations in production: 874 content sets, each with a name, summary and description.",
      "Existing materials: Prepare multilingual content for 105 existing skills in locale-based tables. Record preparation and server-write progress separately.",
      "Shared fields and rules: Follow localized fields for personality settings, quick input, AI personas and plans. Deliver reward rules in 45 languages and check benefits, Credit amounts and brand wording.",
      "Payment experience: Compare content, benefit explanations and payment flows against overseas ad requests and display, reward Credits, model costs and AI payment plans.",
      "English demonstrations: Configure a batch of skills and AI personas for English demonstrations. Capture device screenshots, check unadapted modules and prepare product points and an asset list."
    ],
    "outputs": [
      [
        "Multilingual content in production",
        "19 skills × 46 locale configurations: 874 sets of names, summaries and descriptions"
      ],
      [
        "Existing-skill materials and reward rules",
        "Multilingual materials for 105 skills and reward rules in 45 languages"
      ],
      [
        "Shared fields and English demonstration assets",
        "AI-persona and plan content, plus English screenshots, recordings and product-material lists"
      ]
    ],
    "boundary": "I handle adaptation and delivery of multilingual content, shared fields, reward rules and product demonstrations. The 46 locale configurations include Traditional Chinese."
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
    "intro": "I contributed to market, user and requirements research for HW energy products, providing findings and recommendations for product planning and experience changes.",
    "tags": [
      "Market research",
      "User research",
      "User journeys",
      "Requirements"
    ],
    "problem": "Different roles use the same energy product for different reasons.",
    "problemText": "The research compares users’ goals and tasks using industry material and user behavior. The findings describe key journeys, product opportunities and requirements priorities.",
    "actions": [
      "<strong>Market research:</strong> Use desk research to map the industry, market participants, platform types and ecosystem relationships.",
      "<strong>User research:</strong> Contribute to interviews, questionnaires and data analysis, comparing goals, user groups and key journeys.",
      "<strong>Requirements research:</strong> Prepare user profiles, product opportunities and priorities for the team’s planning and design work.",
      "<strong>Experience evaluation:</strong> Contribute to prototype and usability evaluations, record issues, recommend changes and follow their resolution."
    ],
    "outputs": [
      [
        "Market and user research material",
        "Industry context, user profiles and product opportunities"
      ],
      [
        "Key user journeys",
        "Goals and use across different roles"
      ],
      [
        "Requirements and evaluation recommendations",
        "Priorities, experience issues and proposed changes"
      ]
    ],
    "boundary": "I contributed to market, user, requirements and experience research. The team continued with product planning and development."
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
    "intro": "My work covered charging networks and consumer residential solar. For the charging operations platform, I conducted market, user and requirements research before project approval. For residential solar, I worked on user-facing software and intelligent solar, storage and charging features.",
    "tags": [
      "Charging networks",
      "Residential solar",
      "User research",
      "Requirements & feature planning"
    ],
    "problem": "Understand charging-user differences before defining platform requirements.",
    "problemText": "The charging-platform study examined market formats, target users and ecosystem relationships before project approval. The residential-solar work planned features around generation, consumption and charging conditions. The research subjects and deliverables are described separately.",
    "decisions": [
      {
        "title": "Segment by questionnaire, then interview priority groups",
        "text": "Analyze sensitivity to time, money and work responsibilities. Identify segments through questionnaire clustering, then interview priority groups in depth to understand the needs behind their differences."
      },
      {
        "title": "Take priorities through to development requirements",
        "text": "Use Kano to distinguish must-be, performance and attractive requirements. After ranking them, break original needs into system and development requirements within the integrated product development (IPD) process."
      },
      {
        "title": "Define intelligent features against actual energy use",
        "text": "Plan forecasts, calculations, charging-power adjustment and scheduling around generation, charging behavior, peak and off-peak tariffs, and combined solar, storage and charging."
      }
    ],
    "actions": [
      "Market research: Study charging-platform formats, target users and ecosystem relationships before project approval. Identify segment opportunities for product positioning and further research.",
      "User research: Segment users by sensitivity to time, money and work responsibilities. Identify 3 main groups through questionnaire clustering, interview priority groups in depth and produce 24 competitive product attributes.",
      "Prioritization and requirements: Rank must-be, performance and attractive needs with Kano. Break the Top 10 original needs into 10 system requirements and 100+ development requirements in the IPD process.",
      "High-fidelity evaluation: Review the charging operations platform against Nielsen’s usability heuristics and identify 50 usability improvement points for interface and interaction changes.",
      "Residential-solar planning: Plan user-facing FusionSolar generation forecasting, solar-exposure calculation, automatic charging-power adjustment and intelligent solar-storage scheduling. Account for generation, charging behavior, peak and off-peak tariffs, and combined solar, storage and charging."
    ],
    "outputs": [
      [
        "Charging-platform market and user research",
        "Market and ecosystem analysis, three-axis user segments, priority-group interviews and 24 competitive product attributes"
      ],
      [
        "Charging-platform requirements and experience plans",
        "Kano priorities, layered requirements specifications and 50 high-fidelity usability improvement points"
      ],
      [
        "Residential-solar intelligent-feature plans",
        "FusionSolar generation forecasting, solar-exposure calculation, charging-power adjustment and intelligent solar-storage scheduling"
      ]
    ],
    "boundary": "I handled market and user research, requirements design and user-facing feature planning. Charging-platform research ran from June 2023 to January 2024; all quantities in this case refer to that work. The residential-solar and combined solar-storage-charging work covered product and intelligent-feature planning."
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
    "intro": "I took part in printing-equipment research at a municipal-level bank branch, comparing counter-service and office use and analyzing the needs of different roles.",
    "problem": "Counter service and office work place different demands on printing.",
    "problemText": "Participants included regular employees, managers, IT staff and users handling confidential material. I analyzed findings against their responsibilities and tasks, separating counter-service issues from office use.",
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
        "title": "Counter staff need clear, quick and smooth operation",
        "text": "Counter staff mainly operate equipment as part of specific business tasks. The requirements analysis follows those processes, focusing on clear steps, speed and smooth operation."
      },
      {
        "title": "Office staff need convenient printing services",
        "text": "Office users place more emphasis on convenient local-network printing, sharing and cloud printing than on counter-service operations."
      }
    ],
    "actions": [
      "Questionnaire and fieldwork: Design the financial-sector printing-experience questionnaire and conduct research at a municipal-level branch, covering counter service, office work and different user roles.",
      "Quantitative analysis: Analyze findings by user group and working context, comparing printing-experience requirements in counter service and everyday office work.",
      "Qualitative analysis: Organize research material by role and working context and summarize each group’s specific needs."
    ],
    "outputs": [
      [
        "Questionnaire and research material",
        "Questionnaire, fieldwork records, quantitative analysis and organized qualitative material"
      ],
      [
        "Context and requirement comparison",
        "Differences between counter-service and office use, with requirements for each user group"
      ]
    ],
    "boundary": "The research was a team study. My main responsibilities were questionnaire design, fieldwork, quantitative analysis and organizing qualitative material."
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
    "intro": "I analyze user needs and business performance across 6 DROI consumer-tool product lines. I combine BI, user feedback and support issues in version reviews, channel analysis and churn investigations, and contribute to advertising flows and release evaluation.",
    "tags": [
      "Product analysis",
      "User feedback",
      "Advertising flows",
      "Version evaluation"
    ],
    "problem": "Which usage problems sit behind a change in the numbers?",
    "problemText": "Version, channel and advertising-entry changes need to be examined alongside user behavior. I track activity, retention, ARPU, penetration and conversion, compare them with user feedback and support issues, and recommend version changes and priorities.",
    "actions": [
      "Business analysis: Use BI, event data, user feedback and support issues to analyze activity, retention, conversion and monetization across 6 consumer product lines.",
      "Versions and channels: Contribute to staged-rollout analysis, channel reviews and churn investigations. Separate user groups and version conditions when identifying issues and recommending changes.",
      "Advertising flows: Contribute requirements and flows for lock-screen icons, portrait-image and template advertising. Assess changes against user experience and monetization performance.",
      "Requirements and releases: Own requirements, prototypes and reviews, and coordinate staged rollouts and post-release evaluation.",
      "Project coordination: Track development and quarterly-goal acceptance across product lines. Maintain the initiative backlog, check requirements with marketing and operations, follow first-phase assignment and development, and prepare second-phase scope.",
      "Release risks: Track crashes, ANRs and device-adaptation issues using rollout and channel data. Follow API integration and fixes sent to testing, check version intake and freeze status, and complete phased handovers."
    ],
    "outputs": [
      [
        "Business and user-issue analysis",
        "Product performance, user feedback, channel differences and recommended changes"
      ],
      [
        "Advertising requirements and prototypes",
        "Flows and requirements for lock-screen, portrait-image and template advertising"
      ],
      [
        "Project progress and release evaluation",
        "Backlog, development progress, staged acceptance, rollout analysis and release evaluation"
      ]
    ],
    "actionIds": [
      "business-analysis",
      "version-analysis",
      "advertising-flow",
      "requirements-release",
      "project-coordination",
      "release-risk"
    ],
    "boundary": "The 6 product lines describe my analysis and requirements scope. Engineering, design, QA and operations share release delivery."
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
    "intro": "This SaaS system manages ground-mounted solar plants alongside photovoltaic inverters. Customers include energy companies and smaller plant owners. I carried out fieldwork, questionnaires and analysis, documented use problems and improvement proposals, and explored early AI maintenance ideas.",
    "problem": "Weekly mountain-site inspections are difficult and carry safety risks.",
    "problemText": "Maintenance staff at one mountain-site plant had to inspect it every week. The terrain made the work difficult and introduced safety risks. I examined roles, site conditions and tasks together to identify where the management system could help.",
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
        "title": "Assess inspections in their field conditions",
        "text": "At this plant, weekly inspections were difficult and involved safety risks because of the terrain. I used this finding to study how the management system could support field inspections."
      },
      {
        "title": "Record assisted inspections and panel alerts as proposals",
        "text": "The report proposed using drones or cameras for inspections and issuing separate alerts for faults in individual solar panels. These recommendations were inputs to later product discussions."
      }
    ],
    "actions": [
      "Research design and fieldwork: Design the questionnaire and visit users to understand roles, working contexts, tasks and problems with the management system.",
      "Data analysis and profiles: Analyze questionnaires and qualitative material to describe users, use problems and functional needs for user profiles and changes to existing modules.",
      "Report and feature proposals: Turn use problems into requirements for existing modules. Include assisted inspection and individual-panel fault alerts in the report for later discussion, alongside preliminary exploration of AI maintenance and inspection."
    ],
    "outputs": [
      [
        "User research report",
        "Use contexts, user profiles, problems and proposed feature improvements"
      ],
      [
        "Maintenance proposals",
        "Inspection and fault-alert recommendations, plus preliminary analysis of AI maintenance and inspection"
      ]
    ],
    "boundary": "I handled fieldwork, questionnaire design, quantitative and qualitative analysis, and reporting. Assisted inspections and individual-panel fault alerts were delivered as report proposals for later product discussion."
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
    "intro": "I evaluated printer output-tray and control-panel layouts, compared their use in real tasks and completed the product-form design. The product entered production.",
    "problem": "Where should the panel and output tray sit for operation, visibility and paper retrieval?",
    "problemText": "I assessed layouts through real tasks, looking beyond completion to standing and seated posture, attention to the panel and output area, and whether operation blocked the paper output.",
    "tags": [
      "Human factors",
      "A/B testing",
      "Physical interaction",
      "Product form"
    ],
    "decisions": [
      {
        "title": "Compare standing and seated use separately",
        "text": "Analyze layout requirements for panel operation, paper loading and retrieval in both standing and seated positions."
      },
      {
        "title": "Keep the output visible while users operate the panel",
        "text": "Develop attention and layout concepts, then compare how each option supports panel operation and output visibility without obstructing the output area."
      }
    ],
    "actions": [
      "Study design: Set up A/B comparisons of left/right printer layouts, output trays and control-panel positions. Break panel operation, paper loading and retrieval into specific tasks.",
      "Operation records and feedback: Record task completion, errors, misoperation and operating effort, and observe posture. Ask participants about visibility, comfort, fatigue, ease of use and layout preferences.",
      "3D human factors assessment: Use 3D models to check part and button requirements against operating scenarios and assess each layout.",
      "Comparison and form design: Compare layouts using human factors data, observations and participant feedback. Combine their strengths into the product-form design. The product entered production."
    ],
    "outputs": [
      [
        "Human factors material",
        "A/B operation records, posture observations, participant feedback and 3D-model assessment"
      ],
      [
        "Task and layout analysis",
        "Standing and seated use, attention allocation, and panel and output visibility"
      ],
      [
        "Product-form design",
        "A design combining the strengths identified in the layout comparison"
      ]
    ],
    "boundary": "I carried out all research, analysis, standing and seated scenario concepts, attention concepts, layout comparison and product-form design in this case."
  }
};

export const stages = {
  "huawei": {
    "label": "01 / HW",
    "title": "User research & product strategy",
    "description": "Conducted market, user and requirements research for solar and charging products and contributed to product planning. Also handled fieldwork and improvement proposals for a solar plant management system.",
    "actions": [
      "Conducted pre-project market, user and requirements research for charging networks, using segmentation, Kano prioritization and requirements decomposition, and contributed to residential-solar intelligent-feature planning.",
      "Handled fieldwork, questionnaire design, quantitative and qualitative analysis, and reporting for the plant management study.",
      "Examined use problems against roles, tasks and site conditions, then proposed changes to existing modules.",
      "Recorded assisted-inspection and individual-panel alerting proposals for mountain sites and explored early AI maintenance and inspection ideas."
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
    "description": "Contributed to banking printing-equipment research and handled printer human factors research and product-form design. The product entered production.",
    "actions": [
      "Designed questionnaires, conducted fieldwork and analyzed quantitative and qualitative material within a financial-sector research team.",
      "Compared bank counter-service and office use, identifying operation requirements and printing-service needs.",
      "Handled printer A/B trials, operation observations and 3D-model human factors assessment.",
      "Combined task data, standing and seated scenarios, attention concepts and layout comparisons into the product-form design. The product entered production."
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
    "description": "Product Manager responsible for AI-assistant scenarios and skill-related work, with contributions to subscriptions, localization and consumer-product analysis.",
    "actions": [
      "Plan proactive services, smart notifications and task feedback, deliver interaction plans, and follow reviews and relevant feature acceptance.",
      "Design skill discovery, review and publishing flows, revise skill content and contribute to AI subscription and entitlement rules.",
      "Follow localization and delivery checks, and recommend changes using consumer-product data, user feedback and version reviews."
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
