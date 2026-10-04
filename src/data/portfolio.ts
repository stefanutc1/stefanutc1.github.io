export interface TimelineEvent {
  periodRo: string;
  periodEn: string;
  roleRo: string;
  roleEn: string;
  orgRo: string;
  orgEn: string;
  descRo: string;
  descEn: string;
  tags: string[];
}

export interface ProjectItem {
  id: string;
  code: string;
  category: 'flagship' | 'cyber' | 'web' | 'systems' | 'datanet';
  badge: string;
  titleRo: string;
  titleEn: string;
  descRo: string;
  descEn: string;
  highlightsRo: string[];
  highlightsEn: string[];
  tags: string[];
  repoUrl: string;
  liveUrl?: string;
}

export interface ClusterNode {
  id: string;
  name: string;
  ip: string;
  specs: string;
  roleRo: string;
  roleEn: string;
}

export interface StackPillar {
  titleRo: string;
  titleEn: string;
  subtitleRo: string;
  subtitleEn: string;
  items: string[];
}

export const PERSONAL_BIO = {
  name: 'Moană Ștefănuț-Cornel',
  handle: '@stefanutc1',
  codingSince: '2015',
  universityYears: '2024 – 2027',
  locationRo: 'Craiova, România',
  locationEn: 'Craiova, Romania',
  email: 'moana.stefanut.f8p@student.ucv.ro',
  github: 'https://github.com/stefanutc1',
  infraLive: 'https://stefanutc1.github.io/infrastructure/',
  oldRepo: 'https://github.com/stefanutc1/old',
  headlineRo:
    'Arhitect Sisteme Enterprise, Inginer Cloud Hibrid & Specialist Guvernanță și Securitate Cibernetică (DFIR)',
  headlineEn:
    'Enterprise Systems Architect, Hybrid Cloud Infrastructure Engineer & Cyber Threat Intelligence Lead',
  storyParagraphsRo: [
    'Sunt Moană Ștefănuț-Cornel (@stefanutc1), specialist în arhitectura sistemelor informatice enterprise și student la programul de studii Informatică Economică (2024 – 2027) din cadrul Facultății de Economie și Administrarea Afacerilor (FEAA), Universitatea din Craiova. Cu o traiectorie practică neîntreruptă inițiată în 2015, mi-am consolidat expertiza inginerească proiectând arhitecturi concurente de servere de înaltă performanță în PAWN și MySQL (RedZone în 2015, NQGaming RPG în 2016–2018), mecanisme server-side de integritate și protecție anti-tamper, portaluri web în Vue 3 (Crowland Wiki), platforme comunitare de producție PHP/MySQL/Nginx (Kronick) și sisteme de automatizare Python & Docker (Roadman) — conservate integral în arhiva stefanutc1/old.',
    'În planul operațiunilor de infrastructură, am proiectat și administrat un datacenter hibrid multi-nod de înaltă densitate (Proxmox VE 9.2 Type-1 Hypervisor x86_64, OpenMediaVault 7 Enterprise Storage, cluster compute Apple Silicon ARM64 și orchestrare Kubernetes k3s bare-metal) guvernat 100% prin Infrastructure-as-Code (57 module declarative Terraform și 18 roluri Ansible), securizat printr-un perimetru Zero-Trust OPNsense 24.7 cu inspecție profundă a pachetelor (Suricata DPI) și corelare SIEM/XDR Wazuh pe 5 VLAN-uri 802.1Q izolate.',
    'În domeniul securității defensive și criminalisticii digitale, conduc investigații corporative de Threat Intelligence și Digital Forensics & Incident Response (DFIR) asupra schemelor de fraudă financiară, vishing cu releu OTP în timp real și atacuri de tip Brand Spoofing — finalizate cu notificări oficiale de securitate și acțiuni coordonate de blocare națională prin Directoratul Național de Securitate Cibernetică (DNSC #178465) — proiectând în paralel platforme financiare critice în Java 17 (Spring Boot 3.2), Python, TypeScript (Next.js 15 / Angular 20) și C++.'
  ],
  storyParagraphsEn: [
    'I am Moană Ștefănuț-Cornel (@stefanutc1), an enterprise systems architect and B.Sc. candidate in Business Informatics (2024 – 2027) at the Faculty of Economics and Business Administration (FEAA), University of Craiova. Backed by over a decade of continuous systems engineering experience dating back to 2015, I established my technical foundation designing high-concurrency multiplayer server architectures in PAWN and MySQL (RedZone in 2015, NQGaming RPG in 2016–2018), server-side anti-tamper mechanisms, Vue 3 web portals (Crowland Wiki), production PHP/MySQL/Nginx platforms (Kronick), and Python/Docker automation (Roadman)—preserved in the stefanutc1/old archive.',
    'Across infrastructure operations, I engineered an enterprise-grade multi-node hybrid datacenter fabric from bare metal (Proxmox VE 9.2 Type-1 Hypervisor x86_64, OpenMediaVault 7 Enterprise Storage, Apple Silicon ARM64 compute, and bare-metal Kubernetes k3s orchestration), governed entirely via Infrastructure-as-Code (57 declarative Terraform modules and 18 modular Ansible roles) and fortified by an OPNsense 24.7 Zero-Trust perimeter with Suricata Deep Packet Inspection and Wazuh SIEM/XDR across 5 micro-segmented 802.1Q VLANs.',
    'In cybersecurity and defensive operations, I lead corporate Digital Forensics & Incident Response (DFIR) and Threat Intelligence investigations into payment skimming syndicates, live OTP vishing relays, and e-commerce brand spoofing campaigns—culminating in verified national takedowns with the Romanian National CSIRT (DNSC #178465)—while engineering mission-critical financial software in Java 17 (Spring Boot 3.2), Python, TypeScript (Next.js 15 / Angular 20), and C++.'
  ]
};

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    periodRo: '2025 – Prezent',
    periodEn: '2025 – Present',
    roleRo: 'Arhitect Sisteme Enterprise, Cloud Hibrid & Coordonator Threat Intelligence',
    roleEn: 'Enterprise Systems Architect, Hybrid Cloud & Threat Intelligence Lead',
    orgRo: 'stefanutc1/infrastructure · Enterprise Datacenter & CyberLab',
    orgEn: 'stefanutc1/infrastructure · Enterprise Datacenter & CyberLab',
    descRo:
      'Gestiunea unui cluster bare-metal hibrid multi-nod cu peste 30 de VM-uri și containere LXC de producție. Coordonarea a 5 dosare majore de criminalistică digitală și cooperare directă cu DNSC pentru neutralizarea infrastructurilor malițioase de comandă și control (DNSC PNRISC #178465).',
    descEn:
      'Operating a 4-node physical enterprise cluster hosting 30+ mission-critical VMs and LXC workloads. Directed 5 major forensic disclosures and coordinated official national infrastructure takedowns with DNSC (#178465).',
    tags: ['Proxmox VE 9.2 (Tier-3)', 'Terraform IaC', 'Ansible Automation', 'Zero-Trust OPNsense', 'Wazuh SIEM/XDR', 'Corporate DFIR']
  },
  {
    periodRo: '2024 – 2027',
    periodEn: '2024 – 2027',
    roleRo: 'Studii Universitare: Arhitectura Sistemelor Informatice & FinTech (B.Sc.)',
    roleEn: 'Undergraduate Degree: Enterprise Information Systems & FinTech (B.Sc.)',
    orgRo: 'Facultatea de Economie și Administrarea Afacerilor (FEAA) · Universitatea din Craiova',
    orgEn: 'Faculty of Economics and Business Administration (FEAA) · University of Craiova',
    descRo:
      'Program academic riguros (Informatică Economică, 2024 – 2027) centrat pe proiectarea sistemelor distribuite, baze de date tranzacționale (PostgreSQL / MySQL), algoritmică avansată (C++/Java/C#), rețele enterprise Cisco și platforma de licență Core-Banking (Spring Boot 3.2 + registru ACID dublă partidă + PCI-DSS v4.0 + 5 vectori MITRE ATT&CK).',
    descEn:
      'Rigorous academic curriculum (Business Informatics, 2024 – 2027) focused on distributed systems engineering, transactional databases (PostgreSQL / MySQL), advanced algorithms (C++/Java/C#), Cisco enterprise networking, and the Core-Banking thesis platform (Spring Boot 3.2 + double-entry ACID ledger + PCI-DSS v4.0 + 5 MITRE ATT&CK vectors).',
    tags: ['Informatică Economică (2024–2027)', 'Java 17 & Spring Boot 3.2', 'PostgreSQL ACID Ledger', 'PCI-DSS v4.0', 'Enterprise Cisco Networking']
  },
  {
    periodRo: '2021 – 2023',
    periodEn: '2021 – 2023',
    roleRo: 'Inginerie Software, Arhitecturi Web Enterprise & Sisteme de Automatizare',
    roleEn: 'Software Engineering, Enterprise Web Platforms & Automation Systems',
    orgRo: 'stefanutc1/old · kronick/ & 2022/',
    orgEn: 'stefanutc1/old · kronick/ & 2022/',
    descRo:
      'Arhitectura și administrarea platformei web Kronick (PHP, MySQL cu optimizări de indexare la nivel de motor, proxy Nginx SSL cu securitate HSTS/CSP și orchestrare de backup) și proiectarea botului modular Roadman în Python 3 și Docker.',
    descEn:
      'Architected and operated the Kronick web platform (PHP, MySQL performance indexing patches, hardened Nginx SSL proxy with HSTS/CSP, automated backup pipelines) and engineered the Dockerized Roadman service in Python 3.',
    tags: ['PHP Engine', 'MySQL Optimization', 'Hardened Nginx SSL', 'Python 3', 'Docker Orchestration']
  },
  {
    periodRo: '2019 – 2020',
    periodEn: '2019 – 2020',
    roleRo: 'Inginerie Frontend & Portaluri de Documentație Tehnică (Crowland Wiki)',
    roleEn: 'Frontend Engineering & Technical Knowledge Systems (Crowland Wiki)',
    orgRo: 'stefanutc1/old · wiki-crowland/ (phoenix.crowland.ro & rage.crowland.ro)',
    orgEn: 'stefanutc1/old · wiki-crowland/ (phoenix.crowland.ro & rage.crowland.ro)',
    descRo:
      'Dezvoltarea portalului de documentație tehnică și knowledge base pentru ecosistemele comunitare utilizând Vue 3 (Composition API), Vite și un sistem de design personalizat de înaltă performanță.',
    descEn:
      'Engineered the interactive technical documentation portal and knowledge platform for community ecosystems utilizing Vue 3 (Composition API), Vite, and a high-performance custom design system.',
    tags: ['Vue 3 (Composition API)', 'Vite Bundler', 'Component Architecture', 'Custom Design System']
  },
  {
    periodRo: '2015 – 2018',
    periodEn: '2015 – 2018',
    roleRo: 'Arhitectură Motoare Distribuite de Înaltă Concurență & Mecanisme Anti-Tamper',
    roleEn: 'High-Concurrency Distributed Engines Architecture & Server Anti-Tamper Systems',
    orgRo: 'stefanutc1/old · redzone/ (2015) & nqgaming/ (2016–2018)',
    orgEn: 'stefanutc1/old · redzone/ (2015) & nqgaming/ (2016–2018)',
    descRo:
      'Fundația în dezvoltare software (2015): proiectarea de la zero a motoarelor de joc concurente în PAWN și MySQL, implementarea a 10 facțiuni, economii virtuale tranzacționale și mecanisme server-side de detecție a manipulării memoriei și pachetelor de rețea.',
    descEn:
      'Foundational software engineering (2015): engineering high-concurrency game engines from scratch in PAWN and MySQL, implementing 10 factions, transactional virtual economies, and server-side packet/memory tamper detection systems.',
    tags: ['PAWN Concurrency', 'MySQL Schema Design', 'Network Anti-Tamper', 'Distributed State Management']
  }
];

export const PORTFOLIO_ITEMS: ProjectItem[] = [
  {
    id: 'sys-infrastructure',
    code: 'stefanutc1/infrastructure',
    category: 'flagship',
    badge: 'ENTERPRISE CLUSTER · 4 HYPERVISOR NODES · ZERO-TRUST',
    titleRo: 'Enterprise Infrastructure, Hybrid Cloud Datacenter & Digital Twin',
    titleEn: 'Enterprise Infrastructure, Hybrid Cloud Datacenter & Digital Twin',
    descRo:
      'Infrastructură hibridă de clasă enterprise pe 4 noduri fizice (Proxmox VE 9.2 Type-1 Hypervisor x86_64 cu ZRAM, OpenMediaVault 7 Enterprise Storage Appliance, cluster Apple Silicon ARM64 și orchestrare Kubernetes k3s bare-metal), guvernată prin 57 module declarative Terraform și 18 roluri Ansible, securizată printr-un perimetru Zero-Trust OPNsense 24.7 cu Suricata DPI și Wazuh SIEM/XDR, însoțită de un portal 3D Digital Twin în Angular 20.',
    descEn:
      'Enterprise-grade 4-node hybrid datacenter fabric (Proxmox VE 9.2 Type-1 Hypervisor x86_64 with ZRAM, OpenMediaVault 7 Enterprise Storage Appliance, Apple Silicon ARM64 compute cluster, and bare-metal Kubernetes k3s), governed via 57 declarative Terraform modules and 18 Ansible roles, fortified by an OPNsense 24.7 Zero-Trust perimeter with Suricata DPI and Wazuh SIEM/XDR, accompanied by an interactive Angular 20 3D Digital Twin.',
    highlightsRo: [
      'Segmentare micro-perimetrică 802.1Q pe 5 rețele VLAN izolate (Management, Production, CyberLab Air-Gapped, Storage, IoT) + inspecție profundă Suricata DPI + 8.255 indicatori de compromitere (IoC) DNS sinkhole.',
      'Domeniu de testare corporativ Active Directory (VM 400–405: Windows Server 2022/2016/2012, Win 10, Win 7, RHEL 9) și poligon ofensiv izolat (Parrot Security, Metasploitable 2, Flare-VM, REMnux).',
      'Stivă de servicii Enterprise 2.0 (Keycloak OIDC Identity Provider, NetBox IPAM SSoT, Immich AI, stivă Jellyfin *arr, monitorizare LGTM, accelerare GPU Ollama LLM) și firmware bare-metal ESP32 C/C++.'
    ],
    highlightsEn: [
      'Micro-segmented 802.1Q fabric across 5 isolated VLANs + Suricata Deep Packet Inspection + 8,255 DNS sinkhole Indicators of Compromise (IoCs).',
      'Corporate Active Directory test forest (VMs 400–405: Windows Server 2022/2016/2012, Win 10, Win 7, RHEL 9) and air-gapped cyber range (Parrot Security, Metasploitable 2, Flare-VM, REMnux).',
      'Enterprise 2.0 services suite (Keycloak OIDC IdP, NetBox IPAM SSoT, Immich AI, Jellyfin *arr, LGTM telemetry stack, Ollama GPU LLM acceleration) and bare-metal ESP32 C/C++ firmware.'
    ],
    tags: ['Proxmox VE 9.2', 'Terraform IaC', 'Ansible Automation', 'OPNsense 24.7', 'Wazuh SIEM', 'Angular 20', 'Bare-Metal ESP32'],
    repoUrl: 'https://github.com/stefanutc1/infrastructure',
    liveUrl: 'https://stefanutc1.github.io/infrastructure/'
  },
  {
    id: 'sys-licenta',
    code: 'LucrareLicenta',
    category: 'flagship',
    badge: 'CORE-BANKING FINTECH · MISSION-CRITICAL · FEAA UCV',
    titleRo: 'Arhitectura și Securitatea Sistemelor Informatice Bancare Enterprise',
    titleEn: 'Architecture & Security of Enterprise Core-Banking Systems',
    descRo:
      'Platformă de licență (Informatică Economică, FEAA UCV): nucleu distribuit Core-Banking în Java 17 (Spring Boot 3.2) și Python 3.11 bazat pe registru contabil în partidă dublă (ACID), gateway de procesare tranzacții aliniat PCI-DSS v4.0, audit criptografic SHA-256 hash-chained, modul de simulare pentru 5 vectori MITRE ATT&CK și consolă de gestiune Web Kiosk.',
    descEn:
      'Undergraduate thesis platform (Business Informatics, FEAA UCV): distributed Core-Banking engine in Java 17 (Spring Boot 3.2) and Python 3.11 featuring an ACID double-entry accounting ledger, PCI-DSS v4.0 payment transaction gateway, SHA-256 hash-chained tamper-evident audit monitor, 5-vector MITRE ATT&CK attack & defense simulation engine, and Web Kiosk executive terminal.',
    highlightsRo: [
      'Registru tranzacțional în partidă dublă cu consistență ACID strictă, validare matematică IBAN conform ISO 13616 (MOD-97) și verificare carduri Luhn conform ISO/IEC 7812.',
      '5 scenarii de atac cibernetic și contramăsuri defensive validate automat în CI: Brute-Force, injecție SQL (SQLi), Race Condition Double-Spend, Fraud Anomaly Detection și DDoS.',
      'Infrastructură de virtualizare Proxmox VE dedicată (VM 310–313), containerizare Docker și conductă CI/CD de compilare automată a tezei academice în format LaTeX PDF.'
    ],
    highlightsEn: [
      'Strict ACID double-entry transactional accounting ledger, ISO 13616 MOD-97 mathematical IBAN verification, and ISO/IEC 7812 Luhn card integrity auditing.',
      '5 enterprise attack & defense scenarios automatically validated in CI: Brute-Force mitigation, SQL Injection defense, Double-Spend race condition lockouts, AI Fraud Anomaly Detection, and DDoS resilience.',
      'Dedicated Proxmox VE virtualization cluster (VMs 310–313), Docker containerization, and automated LaTeX academic thesis compilation pipeline.'
    ],
    tags: ['Java 17', 'Spring Boot 3.2', 'Python 3.11', 'PCI-DSS v4.0', 'MITRE ATT&CK', 'Docker', 'LaTeX Publishing'],
    repoUrl: 'https://github.com/stefanutc1/university/tree/main/LucrareLicenta'
  },
  {
    id: 'sys-old-archive',
    code: 'stefanutc1/old',
    category: 'flagship',
    badge: 'HISTORICAL REPOSITORIES · 2015 – 2023 · 5 CODEBASES',
    titleRo: 'Arhiva Istorică de Arhitecturi Software & Sisteme Distribuite (2015 – 2023)',
    titleEn: 'Historical Software Architecture & Distributed Systems Archive (2015 – 2023)',
    descRo:
      'Monorepo corporativ ce conservă integritatea istoricului de versiuni al aplicațiilor dezvoltate între 2015 și 2023: motoare de server concurente în PAWN/MySQL cu filtre anti-tamper (RedZone 2015, NQGaming 2016–2018), portalul tehnic de documentație Crowland Wiki în Vue 3 (2019–2020), platforma web de producție Kronick în PHP/MySQL/Nginx (2021–2023) și serviciul de automatizare Roadman în Python 3 și Docker (2022).',
    descEn:
      'Enterprise monorepo preserving 100% version control fidelity for systems engineered between 2015 and 2023: high-concurrency multiplayer server engines in PAWN/MySQL with anti-tamper filters (RedZone 2015, NQGaming 2016–2018), the Crowland Wiki technical knowledge portal in Vue 3 (2019–2020), the Kronick PHP/MySQL/Nginx web platform (2021–2023), and the Roadman Python 3/Docker automation service (2022).',
    highlightsRo: [
      'redzone/ (2015–2016) & nqgaming/ (2016–2018): Motoare concurente de joc în PAWN & MySQL/DINI, arhitectură pe 10 facțiuni, 8 subsisteme economice și mecanisme server-side de protecție împotriva modificării memoriei și atacurilor de rețea.',
      'wiki-crowland/ (2019–2020): Portal interactiv de documentație tehnică arhitecturat cu Vue 3 (Composition API) și Vite pentru ecosistemele phoenix.crowland.ro și rage.crowland.ro.',
      'kronick/ (2021–2023) & 2022/ (Roadman Bot): Stivă web corporativă (PHP, optimizări de indexare MySQL, reverse-proxy Nginx SSL cu HSTS/CSP) și serviciu de automatizare și moderare containerizat în Python 3 și Docker.'
    ],
    highlightsEn: [
      'redzone/ (2015–2016) & nqgaming/ (2016–2018): Full-featured concurrent game engines in PAWN & MySQL/DINI, 10 factions, 8 transactional economies, and deterministic server-side anti-tamper filters.',
      'wiki-crowland/ (2019–2020): Interactive technical knowledge portal architected with Vue 3 (Composition API) and Vite for phoenix.crowland.ro and rage.crowland.ro.',
      'kronick/ (2021–2023) & 2022/ (Roadman Bot): Hardened web stack (PHP, MySQL indexing optimizations, Nginx SSL with HSTS/CSP, Bash backup workflows) and a containerized Python 3/Docker automation service.'
    ],
    tags: ['PAWN Concurrency', 'Vue 3 & Vite', 'PHP & Hardened Nginx', 'MySQL Relational', 'Python 3 & Docker'],
    repoUrl: 'https://github.com/stefanutc1/old'
  },
  {
    id: 'dfir-mediagalaxy',
    code: 'SEC-2026-ECOM-005',
    category: 'cyber',
    badge: 'CORPORATE DFIR · 30 FORENSIC EXHIBITS · DNSC #178465',
    titleRo: 'Investigație Criminalistică E-Commerce & Neutralizarea C2 yiyangsaas.com',
    titleEn: 'Corporate DFIR E-Commerce Investigation & yiyangsaas.com C2 Takedown',
    descRo:
      'Dosar complet de criminalistică digitală și investigare a incidentelor (30 probe auditate) vizând o campanie avansată de spoofing de brand comercial și recoltare neautorizată de date de card, finalizată prin raportare oficială și neutralizare coordonată la nivel național prin Directoratul Național de Securitate Cibernetică (DNSC PNRISC #178465).',
    descEn:
      'Comprehensive Digital Forensics and Incident Response dossier (30 audited exhibits) dismantling an advanced brand spoofing and payment card skimming campaign, culminating in official disclosure and coordinated national takedown via the Romanian National Cyber Security Directorate (DNSC PNRISC #178465).',
    highlightsRo: [
      'Capturi forenzice DOM/TLS în mediu izolat Headless Chrome și atribuirea criminalistică a nodurilor C2 din Yunnan, China (yiyangsaas.com).',
      'Identificarea tehnicilor de temporizare post-exploatare prin infrastructura fictivă trackparcel.de și rețeaua rotativă de domenii SMTP (worvixglobal.com, stridewisetrading.com).'
    ],
    highlightsEn: [
      'Deterministic DOM/TLS forensic captures in an isolated headless Chrome environment and attribution to Yunnan, China C2 infrastructure (yiyangsaas.com).',
      'Investigation into post-exploitation chargeback mitigation mechanisms via trackparcel.de and rotating SMTP relay domains.'
    ],
    tags: ['DFIR Forensic Protocol', 'DNSC #178465', 'DNS Sinkhole IoC', 'Payment Fraud Defense', 'Threat Intel'],
    repoUrl: 'https://github.com/stefanutc1/infrastructure/tree/main/cyber/mediagalaxy-ecommerce-fraud-forensics'
  },
  {
    id: 'ctf-19-09-2026',
    code: 'cyber/ctf/19-09-2026',
    category: 'cyber',
    badge: 'OFFENSIVE SECURITY · RED TEAM EVALUATION · 100% SOLVED',
    titleRo: 'Evaluare Tehnică Red Team & Suită de Solvere Automate de Exploatare',
    titleEn: 'Red Team Offensive Security Evaluation & Automated Exploit Solvers',
    descRo:
      'Arhiva completă a exercițiului de securitate ofensivă din 19.09.2026 (rata de succes 100%, 3/3 vectori rezolvați): The Blog (Stored XSS CWE-79 & exfiltrare sesiune administrativă), Portal InvataCyber.ro (Blind Boolean SQLite Injection CWE-89 pe cookie TrackingId cu oracol analitic de 5652 bytes) și Redacția CMS (Broken Access Control CWE-306 și Server-Side Template Injection Jinja2 CWE-1336 cu escaladare la Remote Code Execution).',
    descEn:
      'Comprehensive technical archive of the 19.09.2026 offensive security assessment (100% success rate, 3/3 challenge vectors mitigated): The Blog (Stored XSS CWE-79 & administrative session exfiltration), Portal InvataCyber.ro (Blind Boolean SQLite Injection CWE-89 on TrackingId cookie with a 5652-byte deterministic oracle), and CMS Newsroom (Broken Access Control CWE-306 and Jinja2 SSTI CWE-1336 escalating to Remote Code Execution).',
    highlightsRo: [
      'Vector 01 (The Blog — writeup_01_the_blog_xss.md): payload.js + solver.py pentru interceptarea asincronă a sesiunii administrative din browserul headless -> InvataCyber{st0r3d_xss_c0nt4ct_f0rm_pwn}.',
      'Vector 02 (Portal Lockdown — writeup_02_portal_lockdown_sqli.md): Suită de 8 scripturi Python cu oracol binar pe 5652 bytes -> credențiale admin : s3cur3_l0ckd0wn_p4ssw0rd! -> InvataCyber{bl1nd_sql1_c00k13_tr4ck1ng_m4st3r}.',
      'Vector 03 (Redacția CMS — writeup_03_cms_editor_ssti.md): blog_flag.py cu traversarea ierarhiei de obiecte Python în render_template_string (config.__class__.__init__.__globals__.os.popen) -> InvataCyber{ssti_j1nj42_rc3_fl4g_txt_3xtr4ct3d}.'
    ],
    highlightsEn: [
      'Vector 01 (The Blog — writeup_01_the_blog_xss.md): payload.js + solver.py asynchronously intercepting the administrative session from the headless runner -> InvataCyber{st0r3d_xss_c0nt4ct_f0rm_pwn}.',
      'Vector 02 (Portal Lockdown — writeup_02_portal_lockdown_sqli.md): 8 Python automation solvers utilizing a 5652-byte binary oracle -> credentials admin : s3cur3_l0ckd0wn_p4ssw0rd! -> InvataCyber{bl1nd_sql1_c00k13_tr4ck1ng_m4st3r}.',
      'Vector 03 (CMS Newsroom — writeup_03_cms_editor_ssti.md): blog_flag.py executing Python object traversal in render_template_string (config.__class__.__init__.__globals__.os.popen) -> InvataCyber{ssti_j1nj42_rc3_fl4g_txt_3xtr4ct3d}.'
    ],
    tags: [
      'Offensive Security Evaluation',
      'Stored XSS (CWE-79)',
      'Blind SQLi (CWE-89)',
      'Jinja2 SSTI (CWE-1336)',
      'Exploitation Solvers'
    ],
    repoUrl: 'https://github.com/stefanutc1/infrastructure/tree/main/cyber/ctf/19-09-2026'
  },
  {
    id: 'dfir-revolut-steam-task',
    code: 'SEC-2026-VISH / TASK / AITM',
    category: 'cyber',
    badge: 'THREAT INTELLIGENCE · 4 DOSSIERS & 5 CVE LAB REPRODUCTIONS',
    titleRo: 'Suită Criminalistică Vishing, Inginerie Inversă API & Laborator de Cercetare CVE',
    titleEn: 'Corporate Threat Intelligence: Vishing, API Reverse Engineering & CVE Research Lab',
    descRo:
      'Colecție exhaustivă de investigații criminalistice corporative asupra operațiunilor de vishing cu releu OTP în timp real, inginerie inversă pe API-uri financiare malițioase (/api/v1/site/config), vectori de atac Browser-in-the-Middle pe mecanismele Steam OpenID și reproducerea în laborator controlat a 5 vulnerabilități CVE critice cu politici de remediere.',
    descEn:
      'Exhaustive corporate forensic investigation suite analyzing real-time OTP vishing relays, reverse-engineering illicit financial APIs (/api/v1/site/config), assessing Browser-in-the-Middle vectors against Steam OpenID authentication, and validating 5 critical CVE laboratory reproductions paired with hardening remediation controls.',
    highlightsRo: [
      '5 reproduceri controlate ale vulnerabilităților CVE (CVE-2023-54391, CVE-2025-57539, CVE-2026-69603, CVE-2026-69730, CVE-2026-69845) însoțite de patch-uri de remediere.',
      'Analize aprofundate asupra arhitecturilor de atac vishing cu releu de credențiale în timp real și deturnării token-urilor de sesiune OAuth/OpenID.'
    ],
    highlightsEn: [
      '5 controlled laboratory reproductions of published CVEs with validated remediation patches.',
      'In-depth architectural analysis of real-time OTP relay vishing operations and OAuth/OpenID token session hijacking.'
    ],
    tags: ['Vishing Relay Analysis', 'Browser-in-the-Middle', 'API Reverse Engineering', 'CVE Research Lab', 'Threat Intel'],
    repoUrl: 'https://github.com/stefanutc1/infrastructure/tree/main/cyber'
  },
  {
    id: 'proj-ps2',
    code: 'PracticaSpecialitate & PracticaElaborareLucrareLicenta',
    category: 'web',
    badge: 'ENTERPRISE WEB APPS · NEXT.JS 15 & REACT 19',
    titleRo: 'Platformă Web de Telemetrie Enterprise & Stagii de Practică Tehnologică',
    titleEn: 'Enterprise Telemetry Web Platform & Applied Engineering Internships',
    descRo:
      'Aplicație web corporativă de telemetrie în timp real dezvoltată pe stiva Next.js 15 App Router, React 19, TypeScript 5.7 și Tailwind CSS în cadrul stagiului de PracticaSpecialitate, documentată exhaustiv în PracticaElaborareLucrareLicenta cu garanții de calitate statică în CI.',
    descEn:
      'Enterprise real-time telemetry web platform architected with Next.js 15 App Router, React 19, TypeScript 5.7, and Tailwind CSS during the PracticaSpecialitate internship, thoroughly documented in PracticaElaborareLucrareLicenta with continuous static quality guarantees.',
    highlightsRo: [
      'Arhitectură reactivă de componente React 19 cu mecanisme asincrone de procesare a telemetriei și interfață adaptivă de înaltă performanță.',
      'Validare statică automată a tipurilor și porți de control al calității integrate în fluxul de CI/CD GitHub Actions.'
    ],
    highlightsEn: [
      'Reactive React 19 component architecture with asynchronous telemetry pipelines and high-performance adaptive UI.',
      'Automated static type-checking and quality gates integrated into GitHub Actions CI/CD workflows.'
    ],
    tags: ['Next.js 15', 'React 19', 'TypeScript 5.7', 'Tailwind CSS', 'Static Verification'],
    repoUrl: 'https://github.com/stefanutc1/university/tree/main/PracticaSpecialitate'
  },
  {
    id: 'proj-poo2',
    code: 'ProgramareOrientataObiect/{Proiect,Platforme}',
    category: 'systems',
    badge: 'SYSTEMS ENGINEERING · C++ / WIN32 MFC',
    titleRo: 'Sisteme Desktop de Gestiune Comercială & Arhitecturi Industriale SDI/MDI',
    titleEn: 'Enterprise Commercial Management Systems & Win32 C++ Architecture',
    descRo:
      'Sistem software de gestiune comercială și gestiune a resurselor enterprise (ProgramareOrientataObiect/Proiect) alături de o suită de 8 platforme industriale de laborator (ProgramareOrientataObiect/Platforme) proiectate în C++ modern și Microsoft Foundation Classes (MFC).',
    descEn:
      'Enterprise commercial resource planning and management desktop suite (ProgramareOrientataObiect/Proiect) alongside 8 industrial laboratory platforms (ProgramareOrientataObiect/Platforme) engineered in modern C++ and Microsoft Foundation Classes (MFC).',
    highlightsRo: [
      'Arhitectură Document/View, serializare binară de date CArchive, subsistem de randare grafică vectorială GDI și fluxuri de dialog modale/nemodale.',
      'Ierarhii polimorfice de clase, respectarea strictă a principiilor OOP și alocare deterministă a resurselor.'
    ],
    highlightsEn: [
      'Document/View design patterns, binary CArchive state serialization, Win32 GDI graphics pipelines, and modal/modeless dialog workflows.',
      'Polymorphic class hierarchies, strict OOP compliance, and deterministic memory resource allocation.'
    ],
    tags: ['Modern C++', 'Microsoft Foundation Classes', 'Win32 API', 'OOP Principles', 'Visual Studio Enterprise'],
    repoUrl: 'https://github.com/stefanutc1/university/tree/main/ProgramareOrientataObiect'
  },
  {
    id: 'proj-sd2-pc1',
    code: 'StructuriDeDate & ProgramareaCalculatoarelor',
    category: 'systems',
    badge: 'ALGORITHMIC SYSTEMS · C++ & .NET ENTERPRISE',
    titleRo: 'Structuri Algoritmice de Date & Suită de Aplicații Industriale .NET',
    titleEn: 'Algorithmic Data Structures & Enterprise .NET Application Suite',
    descRo:
      'Implementări algoritmice deterministe de la zero în C++ pentru arbori binari de căutare echilibrați și structuri dinamice de memorie (StructuriDeDate), completate de o suită de 10 aplicații desktop .NET WinForms în C# și Visual Basic pentru calcul financiar și matricial (ProgramareaCalculatoarelor).',
    descEn:
      'Deterministic from-scratch C++ implementations of balanced binary search trees and dynamic memory structures (StructuriDeDate), paired with an enterprise suite of 10 .NET WinForms desktop solutions in C# and Visual Basic for financial and matrix analysis (ProgramareaCalculatoarelor).',
    highlightsRo: [
      'Gestiunea completă a ciclului de viață al arborilor binari de căutare (inserare, ștergere, rotații și traversări) alături de 7 seturi algoritmice avansate.',
      '10 soluții Visual Studio dezvoltate pentru operațiuni de calcul matricial, analiză statistică și modelare financiară în ProgramareaCalculatoarelor.'
    ],
    highlightsEn: [
      'Complete lifecycle management for binary search trees (insert, delete, tree rotations, recursive traversals) and 7 algorithmic problem sets.',
      '10 Visual Studio enterprise solutions engineered for matrix mathematics, statistical analysis, and financial modeling.'
    ],
    tags: ['C++ Data Structures', 'Binary Search Trees', 'C# .NET', 'Visual Basic', '.NET WinForms'],
    repoUrl: 'https://github.com/stefanutc1/university/tree/main/StructuriDeDate'
  },
  {
    id: 'proj-bd2-rc2-anul3',
    code: 'BazeDeDate · ReteleCalculatoare · ProgramareWeb · APSI · GBD',
    category: 'datanet',
    badge: 'DATA ARCHITECTURE · CISCO INFRASTRUCTURE · UML',
    titleRo: 'Arhitecturi de Date Relaționale, Rețele Enterprise Cisco & Proiectare Sistemică UML',
    titleEn: 'Relational Data Architectures, Cisco Enterprise Networking & UML Engineering',
    descRo:
      'Modele relaționale de date normalizate (3NF/BCNF) cu constrângeri de integritate referențială (BazeDeDate & GestiuneaBazelorDeDate), topologii enterprise multi-VLAN pe echipamente Cisco IOS (ReteleCalculatoare) și metodologii de analiză și proiectare structurală UML (APSI & ProgramareWeb).',
    descEn:
      'Enterprise relational database models (3NF/BCNF) with referential integrity guarantees (BazeDeDate & GestiuneaBazelorDeDate), multi-VLAN Cisco IOS enterprise network topologies (ReteleCalculatoare), and structured UML systems engineering methodologies (APSI & ProgramareWeb).',
    highlightsRo: [
      'Scheme relaționale normalizate 3NF/BCNF, proceduri stocate și interogări analitice complexe în MySQL 8.0.',
      'Arhitecturi de rețea Cisco IOS cu adresare VLSM, rutare inter-VLAN și liste de control al accesului (ACL) pentru securizarea perimetrului de rețea.'
    ],
    highlightsEn: [
      'Normalized 3NF/BCNF relational database schemas, stored procedures, and complex analytical SQL queries in MySQL 8.0.',
      'Cisco IOS network architectures featuring VLSM subnetting, inter-VLAN routing, and security ACLs for perimeter isolation.'
    ],
    tags: ['MySQL 8.0 Enterprise', 'Relational Schema Design', 'Cisco IOS Networking', '802.1Q VLANs', 'UML Systems Engineering'],
    repoUrl: 'https://github.com/stefanutc1/university'
  }
];

export const CLUSTER_NODES: ClusterNode[] = [
  {
    id: 'node-1',
    name: 'Node 1 · pve (Tier-3 Primary Hypervisor)',
    ip: '192.168.1.132 · VLAN 10',
    specs: 'Intel Core i3-10100F · 12 GB DDR4-2133 + 6 GB ZRAM · NVIDIA GTX 1050 Ti · NVMe + SSD',
    roleRo:
      'Hypervisor principal enterprise (Proxmox VE 9.2): guvernează perimetrul de securitate OPNsense 24.7 (VM 200), Wazuh SIEM/XDR (CT 106), Ollama LLM GPU inference (CT 102), stiva de monitorizare LGTM (CT 104), Active Directory Lab (VM 400–405), Cyber Range (VM 300–304), nucleul bancar de licență (VM 310–313) și suita Enterprise 2.0 (CT 180–183).',
    roleEn:
      'Tier-3 primary enterprise hypervisor (Proxmox VE 9.2): orchestrating OPNsense 24.7 perimeter gateway (VM 200), Wazuh SIEM/XDR (CT 106), Ollama GPU LLM acceleration (CT 102), LGTM observability stack (CT 104), Active Directory Lab (VMs 400–405), Cyber Range (VMs 300–304), Core-Banking thesis engine (VMs 310–313), and Enterprise 2.0 microservices (CT 180–183).'
  },
  {
    id: 'node-2',
    name: 'Node 2 · openmediavault (Enterprise Storage & ZFS Vault)',
    ip: '192.168.1.199 · VLAN 40',
    specs: 'Dedicated Storage Appliance · ZFS / EXT4 · NFSv4 & SMB3 · SMART Monitoring',
    roleRo:
      'Dispozitiv enterprise dedicat pentru stocare resilientă și arhivare criptată: furnizează volume partajate NFSv4 și SMB3 pentru backup-urile Proxmox VE (PBS / vzdump), depozite analitice și artefacte criminalistice DFIR.',
    roleEn:
      'Dedicated enterprise storage appliance for resilient data vaults: provisions high-throughput NFSv4 and SMB3 datastores for encrypted Proxmox VE backups (PBS / vzdump), analytical datasets, and forensic DFIR archives.'
  },
  {
    id: 'node-3',
    name: 'Node 3 · pve-arm64 (Apple Silicon High-Density Compute)',
    ip: '192.168.1.140 · VLAN 10',
    specs: 'Apple Silicon ARM64 Architecture · Proxmox VE ARM64 · High-Efficiency Compute',
    roleRo:
      'Nod enterprise de calcul de înaltă eficiență energetică pe arhitectură ARM64: dedicat containerelor LXC critice, conductelor de compilare multi-arhitectură și testării de compatibilitate macOS/Linux.',
    roleEn:
      'High-efficiency ARM64 enterprise compute node: dedicated to mission-critical LXC microservices, multi-architecture continuous integration pipelines, and cross-platform macOS/Linux validation.'
  },
  {
    id: 'node-4',
    name: 'Node 4 · kubernetes (Bare-Metal Edge Worker & K3s)',
    ip: '192.168.1.150 · VLAN 20',
    specs: 'AMD Athlon II X2 250 · Lightweight Kubernetes (k3s / k0s) · Cilium CNI · ArgoCD',
    roleRo:
      'Nod edge bare-metal pentru orchestrarea containerelor Kubernetes (k3s/k0s), aplicarea politicilor de securitate OPA Rego, teste de reziliență (Chaos Engineering) și ingestia telemetriei hardware de la nodurile senzoriale ESP32.',
    roleEn:
      'Bare-metal edge worker node executing Kubernetes orchestration (k3s/k0s), enforcing OPA Rego governance policies, running chaos engineering resilience drills, and ingesting bare-metal ESP32 hardware telemetry.'
  }
];

export const TECH_STACK_PILLARS: StackPillar[] = [
  {
    titleRo: 'Infrastructură, Virtualizare & IaC',
    titleEn: 'Infrastructure, Virtualization & IaC',
    subtitleRo: 'Bare-Metal · Multi-Cluster · GitOps Governance',
    subtitleEn: 'Bare-Metal · Multi-Cluster · GitOps Governance',
    items: [
      'Proxmox VE 9.2 (x86_64 & ARM64)',
      'KVM / QEMU (VirtIO Ballooning & PCIe Passthrough)',
      'LXC Containers & Docker Compose Stacks',
      'Terraform (57 files · bpg/proxmox, AWS, GCP, Azure)',
      'Ansible (18 Playbooks & 15 Modular Roles)',
      'Kubernetes (k3s / k0s) & Cilium CNI',
      'NixOS Declarative Configuration',
      'OpenMediaVault NAS (NFSv4 / SMB3 / ZFS)'
    ]
  },
  {
    titleRo: 'Cybersecurity, Rețele & DFIR',
    titleEn: 'Cybersecurity, Networking & DFIR',
    subtitleRo: 'Zero-Trust ZTNA · SIEM/XDR · Threat Intel',
    subtitleEn: 'Zero-Trust ZTNA · SIEM/XDR · Threat Intel',
    items: [
      'OPNsense 24.7 Firewall & 802.1Q VLANs',
      'Suricata DPI IDS/IPS & CrowdSec',
      'Wazuh SIEM / XDR 4.14 & OpenSearch',
      'Unbound DNSSEC Sinkhole (8,255+ IoCs)',
      'Active Directory Lab (Win Server 2012–2022)',
      'WireGuard Kernel Mesh & Tailscale',
      'DFIR Sandbox & Malware Analysis (REMnux / Flare-VM)',
      'Keycloak OIDC & HashiCorp Vault PKI / mTLS'
    ]
  },
  {
    titleRo: 'Inginerie Software & Baze de Date',
    titleEn: 'Software Engineering & Databases',
    subtitleRo: 'Microservicii · Tranzacții ACID · Arhitecturi Sisteme',
    subtitleEn: 'Microservices · ACID Transactions · Systems Architecture',
    items: [
      'Python 3.11 (Core-Banking, Pytest, DFIR Tooling)',
      'Java 17 & Spring Boot 3.2 (REST Microservices)',
      'TypeScript 5.7, Next.js 15, React 19 & Angular 20',
      'C++ (STL, Structuri de Date, Win32 / MFC)',
      'C# & Visual Basic (.NET WinForms)',
      'PostgreSQL, MySQL 8.0 & SQLite WAL (ACID)',
      'C / C++ Bare-Metal ESP32 Firmware (I2C, Sensors)',
      'LaTeX (Academic Publishing & CI PDF)'
    ]
  },
  {
    titleRo: 'Observabilitate & DevSecOps CI/CD',
    titleEn: 'Observability & DevSecOps CI/CD',
    subtitleRo: 'Observabilitate · SAST/DAST · Continuous Verification',
    subtitleEn: 'Observability · SAST/DAST · Continuous Verification',
    items: [
      'Prometheus TSDB & Alertmanager',
      'Grafana Enterprise & Grafana Loki',
      'Telegraf, Node Exporter & Scrutiny SMART',
      'GitHub Actions Multi-Stage Pipelines',
      'Gitleaks v2 & TruffleHog Secret Scanning',
      'Aqua Trivy, Checkov IaC & Bandit SAST',
      'Open Policy Agent (OPA Rego)',
      'Ollama Local GPU Inference (GTX 1050 Ti)'
    ]
  }
];
