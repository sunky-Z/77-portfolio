

export const cases = {
  "ai-ecosystem": {
    label: "01 / DROI · AI ASSISTANT", title: "Everyday AI",
    intro: "At DROI, I plan AI assistant experiences and skill workflows, from notifications and tasks to reliable everyday use.",
    tags: ["Agent experience", "Skill ecosystem", "Product design", "Platform flows"],
    problem: "AI capability needs a clear path to use.", problemText: "An assistant must help people process information, complete tasks and discover the right skill. It also needs clear model access, usage limits and recovery paths.",
    actions: ["<strong>Plan agent experiences:</strong> Define notifications, scheduled tasks and memory scenarios. Lead the product design for the shift from AI summaries to smart notifications.", "<strong>Build the skill ecosystem:</strong> Design screening, classification, search and publication flows, including review and usability-validation agents.", "<strong>Connect usage and value:</strong> Contribute to accounts, subscriptions, Credits and model-access flows, including insufficient balance and payment failures.", "<strong>Drive delivery:</strong> Turn requirements into PRDs and prototypes; coordinate algorithm, engineering, design, QA and operations through reviews, acceptance and releases."],
    outputs: [["Agent experiences", "Notifications, tasks & memory"], ["Skill operations", "Discovery, review & validation"], ["Platform flows", "Accounts, Credits & model access"]],
    lesson: "Useful AI combines clear experiences, trusted skills and sustainable operations.",
    boundary: "My role covers product design, skill operations and delivery coordination. I collaborate with algorithm, engineering, design and QA teams."
  },
  "energy-research": {
    label: "02 / STRATEGY · USER RESEARCH", title: "User differences, product opportunities",
    intro: "At HUAWEI, I worked on energy products, contributing to market and user research for product planning.",
    tags: ["Market insights", "User research", "User journeys", "Requirements"],
    problem: "One platform. Different roles, contexts and goals.", problemText: "Product planning needs industry context, user motivations and real usage insights. Research informs product opportunities and requirements trade-offs.",
    actions: ["<strong>Understand markets:</strong> Conduct desk research on industries, market participants, platform types and ecosystem relationships.", "<strong>Understand users:</strong> Contribute to interviews, surveys and data analysis, mapping user differences, goals and key journeys.", "<strong>Define requirements:</strong> Turn insights into profiles, opportunities and priorities, connecting product planning with requirements design.", "<strong>Evaluate experience:</strong> Contribute to prototype and usability evaluations; follow up on issues and improvement recommendations."],
    outputs: [["Market & user insights", "Reports, profiles and opportunities"], ["Key user journeys", "Roles, goals and usage"], ["Requirements & validation", "Priorities, needs and recommendations"]],
    lesson: "Research should inform who to prioritize, what to develop and how to test those decisions.",
    boundary: "I contributed to market, user and requirements research. Internal variables, business data and unreleased features are excluded; development outcomes reflect teamwork."
  },
  "hardware-research": {
    label: "03 / INDUSTRY · SMART HARDWARE", title: "Understand needs in context",
    intro: "At NINESTAR, I researched users and markets for smart hardware and companion software, covering consumers and users within industry organizations.",
    tags: ["Industry users", "Field research", "Shadowing & interviews", "IPD process"],
    problem: "Hardware value emerges within a wider workflow.", problemText: "People buy, manage and use products differently. Requirements need real contexts, organizational roles and hardware and software constraints.",
    actions: ["<strong>Observe contexts:</strong> Study real industry workflows through fieldwork, shadowing and in-depth interviews.", "<strong>Distinguish roles:</strong> Analyze goals and needs across departments, buyers and users, identifying differences between roles.", "<strong>Assess feasibility:</strong> Support positioning and opportunity analysis using desk research, industry information and technical costs.", "<strong>Support development:</strong> Deliver research, requirements and experience evaluations at development milestones; track issues and improvements."],
    outputs: [["Contexts & roles", "Real workflows and differing needs"], ["Market & requirements", "Positioning, opportunities and priorities"], ["Experience evaluation", "Validation and feedback at milestones"]],
    lesson: "Real use shows how software, hardware, organizations and human needs shape one another.",
    boundary: "My role focused on user, market and experience research within product development. Hardware engineering, supply-chain decisions and full product development are not presented as individual achievements."
  },
  "product-business": {
    label: "04 / DROI · PRODUCT GROWTH", title: "From usage to value",
    intro: "At DROI, I analyze six consumer product lines and design monetization flows.",
    tags: ["Product analytics", "Monetization", "Global products", "Release delivery"],
    problem: "Better experiences need a viable business model.", problemText: "Ad exposure, retention, payment and model costs affect the same experience. Product decisions need to balance them across user groups and markets.",
    actions: ["<strong>Diagnose product health:</strong> Use BI, user feedback and event data to examine activity, retention, conversion and monetization across six product lines.", "<strong>Design monetization:</strong> Define ad-placement and reward flows; contribute to subscriptions, Credits, paid-model access and overseas monetization.", "<strong>Turn data into decisions:</strong> Combine user segmentation, channel performance and model costs to prioritize product changes.", "<strong>Close the delivery loop:</strong> Own requirements, prototypes and reviews; coordinate staged rollouts, acceptance and release evaluation."],
    outputs: [["Product diagnosis", "BI insights & iteration priorities"], ["Monetization flows", "Ads, subscriptions & Credits"], ["Release decisions", "Reviews, rollouts & evaluation"]],
    lesson: "Use data to make experience and monetization decisions testable.",
    boundary: "My contributions cover product analysis, monetization flows and release coordination. Results reflect work with engineering, design, testing and operations."
  }
};

export const stages = {
  huawei: {label:"01 / UX & STRATEGY",title:"Research & strategy",description:"UX, user research and product strategy at HUAWEI.",actions:["Study behavior, human factors and market context.","Combine user research and data to map key journeys.","Support product validation."],tags:["Human factors","Mixed methods","Strategy"]},
  hardware: {label:"02 / INDUSTRY & HARDWARE",title:"Real-world workflows",description:"Smart hardware and software research across user roles at NINESTAR.",actions:["Observe real use through fieldwork and interviews.","Assess markets and technical costs.","Support requirements research and validation."],tags:["Smart hardware","Industry users","Validation"]},
  current: {label:"03 / DROI",title:"AI Product & Growth",description:"Agent experiences, skill ecosystems and monetization at DROI.",actions:["Plan notifications, tasks and personalized AI.","Design skill discovery and validation workflows.","Connect product insights, monetization and delivery."],tags:["Agent Experience","Skill Ecosystem","Product Growth"],metrics:[{value:"6",label:"Product lines"},{value:"178",label:"Skills validated & published"}]}
};
