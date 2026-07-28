export const siteConfig = {
  name: "David Rodríguez Donoso",
  title: "Cloud & DevOps Consultant",
  company: "Microsoft",
  companyUrl: "https://www.microsoft.com",
  description:
    "Portfolio of David Rodríguez Donoso — Cloud & DevOps Consultant at Microsoft, based in Barcelona.",
  accentColor: "#D97706",
  // Darker shade for small text (company, school, project number) so it clears
  // WCAG AA 4.5:1 on white. The vivid accentColor above is only used for large
  // text and decorative elements, where 3:1 is enough.
  accentTextColor: "#B45309",
  // Dark mode inverts the relationship: on a near-black surface the light-mode
  // text shade only reaches 3.75:1, so both tokens move lighter.
  dark: {
    accentColor: "#F59E0B", // 8.77:1 on #0B1120
    accentTextColor: "#FBBF24", // 11.28:1 on #0B1120
  },
  photo: "/profile.webp",
  photoFallback: "/profile.jpg",
  social: {
    email: "hello@drdonoso.com",
    linkedin: "https://www.linkedin.com/in/drdonoso",
    github: "https://github.com/DrDonoso",
    twitter: "https://x.com/Dr_Donoso",
    credly: "https://www.credly.com/users/drdonoso",
    telegram: "https://t.me/drdonoso",
    kofi: "https://ko-fi.com/drdonoso",
    untappd: "https://untappd.com/user/DrDonoso",
  },
  contact: {
    heading: "Let's talk",
    text: "Got an interesting problem, a project in mind, or just want to say hi? My inbox is open.",
    location: "Barcelona, Spain",
  },
  aboutMe:
    "Cloud & DevOps Consultant at Microsoft, based in Barcelona. I've spent the last decade building and shipping backend systems — retail apps serving millions of customers, credit insurance platforms, data pipelines — mostly on .NET and Azure, with Kubernetes and CI/CD underneath. These days I help enterprise customers get the most out of Azure and GitHub: designing cloud architectures, automating delivery pipelines and building platforms that teams actually enjoy working with. Lately I've been deep into AI: RAG pipelines, LLM-powered tooling and agentic workflows, both at work and in my own side projects. Off the clock I run a homelab built on Proxmox, automate the house with Home Assistant, and generally spend far too much time self-hosting things I could have paid for — I'm a firm believer in open source and try to give back to the FOSS ecosystem where I can.",
  skills: [
    "C#",
    ".NET",
    "Python",
    "TypeScript",
    "PowerShell",
    "Azure",
    "Kubernetes",
    "Docker",
    "Helm",
    "GitHub Actions",
    "CI/CD",
    "AI",
    "LLMs",
    "RAG",
    "Microservices",
    "Cosmos DB",
    "Linux",
    "Proxmox",
    "Home Assistant",
  ],
  projects: [
    {
      name: "PowershellTerminal",
      description:
        "My PowerShell terminal setup, installable with a single bootstrap one-liner: winget tools, PowerShell modules, Chocolatey packages and dotfiles, no cloning required.",
      link: "https://github.com/DrDonoso/PowershellTerminal",
      skills: ["PowerShell", "Automation", "Dotfiles"],
    },
    {
      name: "WC2026Over9000Bot",
      description:
        "Telegram bot running a 2026 FIFA World Cup betting pool: live scoring against real fixtures, leaderboards and bump charts, deduplicated goal notifications from dual sources and a daily AI-generated narrative.",
      link: "https://github.com/DrDonoso/WC2026Over9000Bot",
      skills: ["Python", "AI", "Telegram"],
    },
    {
      name: "RedditSoccerGoals",
      description:
        "Scans r/soccer for goal posts involving your teams, downloads the clips and delivers them to a Telegram channel. Ships as a single Docker container with SQLite for state and retries.",
      link: "https://github.com/DrDonoso/RedditSoccerGoals",
      skills: ["Python", "Docker", "SQLite"],
    },
    {
      name: "BoardGameHelperBot",
      description:
        "Telegram bot that answers board game rules questions using Retrieval-Augmented Generation over a vector database, with an LLM generating contextually grounded answers.",
      link: "https://github.com/DrDonoso/BoardGameHelperBot",
      skills: ["Python", "LLM", "RAG"],
    },
  ],
  experience: [
    {
      company: "Microsoft",
      title: "Cloud & DevOps Consultant",
      dateRange: "Nov 2021 - Present",
      location: "Barcelona, Spain",
      bullets: [
        "Consulting for enterprise customers on Azure cloud architecture and DevOps practices.",
        "Working on AI adoption: RAG pipelines, LLM-powered tooling and agentic workflows.",
        "Certified in GitHub Advanced Security, Azure DevOps Engineer Expert and Azure Developer Associate.",
      ],
    },
    {
      company: "Plain Concepts",
      title: "Software Development Engineer",
      dateRange: "May 2020 - Oct 2021",
      location: "Barcelona, Spain",
      bullets: [
        "Built the backend of a credit insurance platform for Axesor.",
        "Designed microservices on .NET Core with asynchronous messaging via RabbitMQ and MassTransit.",
        "Deployed and operated the platform on Kubernetes and Azure.",
      ],
    },
    {
      company: "Plain Concepts",
      title: "Software Development Engineer",
      dateRange: "Jun 2019 - May 2020",
      location: "Frankfurt, Germany",
      bullets: [
        "Built an Airflow platform on Kubernetes for Axesor's data pipelines, packaged with Helm.",
        "Set up observability with Grafana and Prometheus.",
        "Developed an application hub for Haworth on .NET Core, with integration and performance testing.",
      ],
    },
    {
      company: "Plain Concepts",
      title: "Software Development Engineer",
      dateRange: "Dec 2016 - Jun 2019",
      location: "Barcelona, Spain",
      bullets: [
        "Developed the backend of a retail loyalty app serving millions of customers across Europe.",
        "Built microservices on .NET Core and Azure using CQRS, Dapper and message brokers.",
        "Set up CI/CD pipelines, containerisation with Docker and Kubernetes, and monitoring with Application Insights.",
      ],
    },
    {
      company: "CADTECH (CT Solutions Group)",
      title: "Consultant",
      dateRange: "Nov 2015 - Oct 2016",
      location: "Barcelona, Spain",
      bullets: [
        "Technical consulting and software development for engineering clients.",
      ],
    },
  ],
  languages: [
    { name: "Catalan", level: "Native" },
    { name: "Spanish", level: "Native" },
    { name: "English", level: "Professional working proficiency" },
  ],
  certificationsUrl: "https://www.credly.com/users/drdonoso",
  certifications: [
    {
      name: "Microsoft Certified: Azure AI Fundamentals",
      issuer: "Microsoft",
      code: "AI-900",
      date: "Sep 2024",
    },
    {
      name: "Microsoft Certified: Azure Fundamentals",
      issuer: "Microsoft",
      code: "AZ-900",
      date: "Sep 2024",
    },
    {
      name: "GitHub Advanced Security",
      issuer: "GitHub",
      code: "",
      date: "May 2024",
    },
    {
      name: "Microsoft Certified: DevOps Engineer Expert",
      issuer: "Microsoft",
      code: "AZ-400",
      date: "Apr 2023",
    },
    {
      name: "Microsoft Certified: Azure Developer Associate",
      issuer: "Microsoft",
      code: "AZ-204",
      date: "Apr 2022",
    },
  ],
  education: [
    {
      school: "Salesians Sarrià",
      degree: "Higher Technician in Web Application Development (DAW)",
      dateRange: "2016 - 2017",
      achievements: [],
    },
    {
      school: "Salesians Sarrià",
      degree:
        "Higher Technician in Multiplatform Application Development (DAM)",
      dateRange: "2014 - 2016",
      achievements: [],
    },
  ],
};
