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
  bankingLive: 'https://stefanutc1.github.io/proiecte/',
  oldRepo: 'https://github.com/stefanutc1/old',
  headlineRo:
    'Inginer Sisteme Informatice, Arhitect Infrastructură & Cercetător în Securitate Cibernetică (DFIR) · Codez din 2015',
  headlineEn:
    'Information Systems Engineer, Infrastructure Architect & Cybersecurity (DFIR) Researcher · Coding Since 2015',
  storyParagraphsRo: [
    'Sunt Moană Ștefănuț-Cornel (@stefanutc1), student la programul de studii Informatică Economică (2024 – 2027) din cadrul Facultății de Economie și Administrarea Afacerilor (FEAA), Universitatea din Craiova. Scriu cod din anul 2015 (11+ ani de pasiune și practică continuă), începând cu dezvoltarea de gamemode-uri multiplayer în PAWN și MySQL (RedZone SA-MP în 2015, NQGaming RPG în 2016–2018), sisteme anti-cheat server-side, portaluri comunitare în Vue 3 (Crowland Wiki), platforme web PHP/MySQL/Nginx (Kronick) și boți în Python & Docker (Roadman Bot) — arhivate cu tot istoricul de commit-uri în repository-ul stefanutc1/old.',
    'În ultimii ani am construit de la zero un datacenter homelab hibrid multi-nod (Proxmox VE 9.2 x86_64, OpenMediaVault NAS, Apple Silicon ARM64 și Kubernetes k3s) guvernat integral prin Infrastructure-as-Code (57 module Terraform și 18 playbook-uri Ansible) și protejat de OPNsense 24.7, Suricata DPI și Wazuh SIEM pe 5 VLAN-uri 802.1Q.',
    'În paralel, desfășor investigații independente de criminalistică digitală (DFIR) și Threat Intelligence asupra campaniilor reale de phishing, vishing bancar și fraudă e-commerce — investigații care au condus la blocări oficiale la nivel național prin DNSC (PNRISC #178465) — și dezvolt arhitecturi software reziliente în Java 17 (Spring Boot), Python, TypeScript (Next.js / Angular) și C++.'
  ],
  storyParagraphsEn: [
    'I am Moană Ștefănuț-Cornel (@stefanutc1), pursuing my B.Sc. in Business Informatics (2024 – 2027) at the Faculty of Economics and Business Administration (FEAA), University of Craiova. I have been coding since 2015 (11+ years of continuous hands-on building), starting with multiplayer game server engineering in PAWN and MySQL (RedZone SA-MP in 2015, NQGaming RPG in 2016–2018), server-side anti-cheat systems, Vue 3 community portals (Crowland Wiki), PHP/MySQL/Nginx web platforms (Kronick), and Python/Docker bots (Roadman Bot)—all preserved with full commit history in stefanutc1/old.',
    'Over the past years, I engineered a multi-node hybrid homelab datacenter from the ground up (Proxmox VE 9.2 x86_64, OpenMediaVault NAS, Apple Silicon ARM64, and Kubernetes k3s), managed 100% as Infrastructure-as-Code (57 Terraform files and 18 Ansible playbooks) and defended by OPNsense 24.7, Suricata DPI, and Wazuh SIEM across 5 isolated 802.1Q VLANs.',
    'Alongside infrastructure engineering, I conduct independent Digital Forensics & Incident Response (DFIR) investigations into real-world phishing syndicates, FinTech vishing, and payment fraud—leading to official national takedowns via the Romanian National CSIRT (DNSC #178465)—while building full-stack software systems in Java 17 (Spring Boot), Python, TypeScript (Next.js / Angular), and C++.'
  ]
};

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    periodRo: '2025 – Prezent',
    periodEn: '2025 – Present',
    roleRo: 'Arhitect Infrastructură Homelab & Cercetător Independent DFIR / Threat Intel',
    roleEn: 'Homelab Datacenter Architect & Independent DFIR / Threat Intel Researcher',
    orgRo: 'stefanutc1/infrastructure · Proxmox VE 9.2 & CyberLab',
    orgEn: 'stefanutc1/infrastructure · Proxmox VE 9.2 & CyberLab',
    descRo:
      'Operarea unui cluster hibrid de 4 noduri fizice și 30+ VM-uri/containere LXC. Publicarea a 5 dosare majore de criminalistică digitală (Media Galaxy Phishing C2, Revolut Vishing, Task Scam API, Steam OpenID BitM, TikTok MRR) și colaborarea cu DNSC pentru blocarea națională a infrastructurilor malițioase (#178465).',
    descEn:
      'Operating a 4-node physical cluster running 30+ VMs and LXC containers. Published 5 major DFIR dossiers (Media Galaxy Phishing C2, Revolut Vishing, Task Scam API, Steam OpenID BitM, TikTok MRR) and coordinated national takedowns with DNSC (#178465).',
    tags: ['Proxmox VE 9.2', 'Terraform', 'Ansible', 'OPNsense 24.7', 'Wazuh SIEM', 'DFIR']
  },
  {
    periodRo: '2024 – 2027',
    periodEn: '2024 – 2027',
    roleRo: 'Licență în Informatică Economică (B.Sc. in Business Informatics · 2024 – 2027)',
    roleEn: 'Bachelor of Science in Business Informatics (Informatică Economică · 2024 – 2027)',
    orgRo: 'Facultatea de Economie și Administrarea Afacerilor (FEAA) · Universitatea din Craiova',
    orgEn: 'Faculty of Economics and Business Administration (FEAA) · University of Craiova',
    descRo:
      'Studii universitare de licență (2024 – 2027) axate pe arhitectura sistemelor informatice, programare orientată pe obiecte (C++/Java/C#), baze de date relaționale (MySQL 8.0 / PostgreSQL), rețele enterprise Cisco, stagii de practică (PS2 & PELL3) și proiectul de diplomă Core-Banking (Spring Boot 3.2 + Python 3.11 + PCI-DSS v4.0 + 5 scenarii MITRE ATT&CK).',
    descEn:
      'Undergraduate degree (2024 – 2027) focused on information systems architecture, object-oriented programming (C++/Java/C#), relational databases (MySQL 8.0 / PostgreSQL), Cisco enterprise networking, specialty internships (PS2 & PELL3), and the Core-Banking thesis platform (Spring Boot 3.2 + Python 3.11 + PCI-DSS v4.0 + 5 MITRE ATT&CK scenarios).',
    tags: ['Informatică Economică (2024–2027)', 'Java 17 & Spring Boot', 'Python 3.11', 'C++ / C#', 'MySQL 8.0', 'PCI-DSS v4.0']
  },
  {
    periodRo: '2021 – 2023',
    periodEn: '2021 – 2023',
    roleRo: 'Arhitectură Web Comunitară, Portaluri PHP/MySQL/Nginx & Bot Engineering (Kronick & Roadman)',
    roleEn: 'Community Web Architecture, PHP/MySQL/Nginx Portals & Bot Engineering (Kronick & Roadman)',
    orgRo: 'stefanutc1/old · kronick/ & 2022/',
    orgEn: 'stefanutc1/old · kronick/ & 2022/',
    descRo:
      'Proiectarea și administrarea platformei web comunitare Kronick (PHP, MySQL cu patch-uri de indexare a performanței, reverse proxy Nginx SSL cu HSTS/CSP și scripturi Bash automatizate backup.sh / restore.sh) și dezvoltarea botului modular de moderare Roadman în Python 3 (discord.py v2.0, Slash Commands, Docker).',
    descEn:
      'Engineered and administered the Kronick community web platform (PHP, MySQL performance indexing patches, Nginx SSL reverse proxy with HSTS/CSP headers, automated Bash backup/restore scripts) and built the modular Roadman moderation bot in Python 3 (discord.py v2.0, Slash Commands, Docker).',
    tags: ['PHP', 'MySQL', 'Nginx SSL', 'Python 3', 'discord.py v2.0', 'Docker']
  },
  {
    periodRo: '2019 – 2020',
    periodEn: '2019 – 2020',
    roleRo: 'Dezvoltare Frontend & Portal de Documentație Tehnică (Crowland Wiki)',
    roleEn: 'Frontend Engineering & Technical Knowledge Base Portal (Crowland Wiki)',
    orgRo: 'stefanutc1/old · wiki-crowland/ (phoenix.crowland.ro & rage.crowland.ro)',
    orgEn: 'stefanutc1/old · wiki-crowland/ (phoenix.crowland.ro & rage.crowland.ro)',
    descRo:
      'Construirea aplicației web de documentație și knowledge base pentru serverele comunității Crowland (SA:MP & GTA V RAGE:MP) utilizând Vue 3 (Composition API), Vite și un design system dark mode personalizat, documentând peste 60 de comenzi, sisteme economice și mecanici de joc.',
    descEn:
      'Built the interactive documentation and knowledge base web application for the Crowland gaming community (SA:MP & GTA V RAGE:MP) using Vue 3 (Composition API), Vite, and a custom dark-mode design system.',
    tags: ['Vue 3', 'Composition API', 'Vite', 'JavaScript', 'Custom Design System']
  },
  {
    periodRo: '2015 – 2018',
    periodEn: '2015 – 2018',
    roleRo: 'Începuturile în Programare: Game Server Engineering, PAWN, MySQL & Anti-Cheat (RedZone & NQGaming)',
    roleEn: 'Coding Beginnings: Game Server Engineering, PAWN, MySQL & Anti-Cheat (RedZone & NQGaming)',
    orgRo: 'stefanutc1/old · redzone/ (2015) & nqgaming/ (2016–2018)',
    orgEn: 'stefanutc1/old · redzone/ (2015) & nqgaming/ (2016–2018)',
    descRo:
      'Primele linii de cod scrise în septembrie 2015: dezvoltarea de la zero a gamemode-urilor multiplayer Roleplay/RPG în PAWN și MySQL/DINI (RedZone și NQGaming SA-MP 0.3.7). Implementarea a 10 facțiuni, 8 joburi cu skill 1–5, sisteme dinamice de case/afaceri/dealership, HUD-uri TextDraw și filtre anti-cheat server-side (anti_cbug.pwn, anti-teleport, anti-airbreak, anti-dialog spoofing).',
    descEn:
      'Started coding in September 2015 by developing multiplayer Roleplay/RPG server gamemodes from scratch in PAWN and MySQL/DINI (RedZone and NQGaming SA-MP 0.3.7). Engineered 10 factions, 8 skill-based jobs, dynamic house/business/dealership economies, TextDraw HUDs, and server-side anti-cheat systems (anti_cbug.pwn, anti-teleport, anti-airbreak, anti-dialog spoofing).',
    tags: ['Coding Since 2015', 'PAWN', 'SA-MP 0.3.7', 'MySQL', 'Anti-Cheat Engineering', 'Game Server Dev']
  }
];

export const PORTFOLIO_ITEMS: ProjectItem[] = [
  {
    id: 'sys-infrastructure',
    code: 'stefanutc1/infrastructure',
    category: 'flagship',
    badge: 'FLAGSHIP · 4 NODES · 12/12 AUDIT PASS',
    titleRo: 'Enterprise Homelab & Datacenter Digital Twin',
    titleEn: 'Enterprise Homelab & Datacenter Digital Twin',
    descRo:
      'Infrastructură fizică și virtualizată pe 4 noduri (Proxmox VE 9.2 x86_64 12GB DDR4 + ZRAM, OpenMediaVault NAS, Apple Silicon ARM64, Kubernetes k3s), orchestrată cu 57 module Terraform și 18 playbook-uri Ansible, protejată de OPNsense 24.7 și Wazuh SIEM, cu portal 3D interactiv în Angular 20.',
    descEn:
      '4-node hybrid datacenter (Proxmox VE 9.2 x86_64 12GB DDR4 + ZRAM, OpenMediaVault NAS, Apple Silicon ARM64, Kubernetes k3s), orchestrated via 57 Terraform files and 18 Ansible playbooks, defended by OPNsense 24.7 and Wazuh SIEM, with an interactive Angular 20 3D Digital Twin.',
    highlightsRo: [
      'Segmentare 802.1Q pe 5 VLAN-uri (Management, Production, CyberLab Air-Gapped, Storage, IoT) + Suricata DPI + 8.255 IoC-uri DNS.',
      'Laborator Active Directory (VM 400–405: Win Server 2022/2016/2012, Win 10, Win 7, RHEL 9) și poligon ofensiv (Parrot, Metasploitable 2, Flare-VM, REMnux).',
      'Suita Enterprise 2.0 (Keycloak OIDC, NetBox IPAM, Immich AI, Jellyfin *arr, LGTM Monitoring, Ollama GPU GTX 1050 Ti) și firmware C/C++ ESP32.'
    ],
    highlightsEn: [
      '802.1Q micro-segmentation across 5 VLANs + Suricata DPI + 8,255 DNS sinkhole indicators.',
      'Active Directory Lab (VMs 400–405: Win Server 2022/2016/2012, Win 10, Win 7, RHEL 9) and Cyber Range (Parrot, Metasploitable 2, Flare-VM, REMnux).',
      'Enterprise 2.0 stack (Keycloak OIDC, NetBox IPAM, Immich AI, Jellyfin *arr, LGTM Monitoring, Ollama GPU GTX 1050 Ti) and bare-metal ESP32 C/C++ firmware.'
    ],
    tags: ['Proxmox VE 9.2', 'Terraform', 'Ansible', 'OPNsense 24.7', 'Wazuh SIEM', 'Angular 20', 'ESP32'],
    repoUrl: 'https://github.com/stefanutc1/infrastructure',
    liveUrl: 'https://stefanutc1.github.io/infrastructure/'
  },
  {
    id: 'sys-licenta',
    code: 'LL3-LucrareLicenta',
    category: 'flagship',
    badge: 'BACHELOR THESIS · FEAA UCV (2024–2027)',
    titleRo: 'Arhitectura și Securitatea Sistemelor Informatice Bancare',
    titleEn: 'Architecture & Security of Banking Information Systems',
    descRo:
      'Proiectul de licență (Informatică Economică, FEAA UCV): backend Core-Banking în Java 17 (Spring Boot 3.2) și Python 3.11 cu registru contabil în partidă dublă, gateway PCI-DSS v4.0, monitor criptografic SHA-256, simulator cu 5 scenarii MITRE ATT&CK și terminal Web Kiosk.',
    descEn:
      'Bachelor’s thesis platform (Business Informatics, FEAA UCV): Java 17 (Spring Boot 3.2) and Python 3.11 double-entry core-banking engine, PCI-DSS v4.0 payment gateway, SHA-256 hash-chained audit monitor, 5-scenario MITRE ATT&CK simulator, and interactive Web Kiosk.',
    highlightsRo: [
      'Înregistrare contabilă în partidă dublă (ACID), validare matematică IBAN (ISO 13616 MOD-97) și carduri Luhn (ISO/IEC 7812).',
      '5 scenarii de atac și apărare bancară validate automat în CI: Brute-Force, SQLi, Race Condition Double-Spend, Fraud Detection și DDoS.',
      'Infrastructură virtualizată Proxmox (VM 310–313) și compilare automată a tezei PDF din LaTeX.'
    ],
    highlightsEn: [
      'ACID double-entry bookkeeping, mathematical ISO 13616 MOD-97 IBAN validation, and ISO/IEC 7812 Luhn card verification.',
      '5 automated attack & defense scenarios verified in CI: Brute-Force, SQLi, Race Condition Double-Spend, Fraud Detection, and DDoS.',
      'Dedicated Proxmox virtualization (VMs 310–313) and automated LaTeX thesis PDF build pipeline.'
    ],
    tags: ['Java 17', 'Spring Boot 3.2', 'Python 3.11', 'PCI-DSS v4.0', 'MITRE ATT&CK', 'Docker', 'LaTeX'],
    repoUrl: 'https://github.com/stefanutc1/proiecte/tree/main/licenta/LL3-LucrareLicenta',
    liveUrl: 'https://stefanutc1.github.io/proiecte/'
  },
  {
    id: 'sys-old-archive',
    code: 'stefanutc1/old',
    category: 'flagship',
    badge: 'ARCHIVE · 2015 – 2023 · 5 CODEBASES',
    titleRo: 'Arhiva Istorică de Proiecte (2015 – 2023): RedZone, NQGaming, Crowland Wiki, Kronick & Roadman',
    titleEn: 'Historical Projects Archive (2015 – 2023): RedZone, NQGaming, Crowland Wiki, Kronick & Roadman',
    descRo:
      'Monorepo ce conservă 100% din istoricul de commit-uri al primelor mele proiecte dezvoltate începând cu septembrie 2015: serverele SA-MP Roleplay/RPG RedZone (2015) și NQGaming (2016–2018), portalul Vue 3 Crowland Wiki (2019–2020), platforma web PHP/MySQL/Nginx Kronick (2021–2023) și botul Python/Docker Roadman (2022).',
    descEn:
      'Monorepo preserving 100% of the commit history of my early codebases built since September 2015: the RedZone (2015) and NQGaming (2016–2018) SA-MP Roleplay/RPG servers, the Vue 3 Crowland Wiki (2019–2020), the Kronick PHP/MySQL/Nginx web platform (2021–2023), and the Python/Docker Roadman bot (2022).',
    highlightsRo: [
      'redzone/ (2015–2016) & nqgaming/ (2016–2018): Gamemode-uri complete SA-MP în PAWN & MySQL/DINI, 10 facțiuni, 8 joburi, Dealership și filtre Anti-Cheat server-side (anti_cbug.pwn, anti-teleport, anti-dialog spoofing).',
      'wiki-crowland/ (2019–2020): Portal interactiv de documentație construit cu Vue 3 (Composition API) și Vite pentru phoenix.crowland.ro și rage.crowland.ro.',
      'kronick/ (2021–2023) & 2022/ (Roadman Bot): Platformă web comunitară PHP/MySQL/Nginx SSL cu scripturi Bash de backup/restore + bot de moderare Discord în Python 3 (discord.py v2.0) și Docker.'
    ],
    highlightsEn: [
      'redzone/ (2015–2016) & nqgaming/ (2016–2018): Full SA-MP Roleplay/RPG gamemodes in PAWN & MySQL/DINI, 10 factions, 8 jobs, Dealership, and server-side Anti-Cheat filterscripts (anti_cbug.pwn, anti-teleport, anti-dialog spoofing).',
      'wiki-crowland/ (2019–2020): Interactive documentation portal built with Vue 3 (Composition API) and Vite for phoenix.crowland.ro and rage.crowland.ro.',
      'kronick/ (2021–2023) & 2022/ (Roadman Bot): Community web stack (PHP/MySQL/Nginx SSL + Bash backup automation) and a Dockerized Python 3 (discord.py v2.0) moderation bot.'
    ],
    tags: ['Coding Since 2015', 'PAWN & SA-MP', 'Vue 3 & Vite', 'PHP & Nginx', 'MySQL', 'Python 3 & Docker'],
    repoUrl: 'https://github.com/stefanutc1/old'
  },
  {
    id: 'dfir-mediagalaxy',
    code: 'SEC-2026-ECOM-005',
    category: 'cyber',
    badge: 'DFIR · 30 EXHIBITS · DNSC #178465',
    titleRo: 'Media Galaxy Phishing & Infrastructura C2 yiyangsaas.com',
    titleEn: 'Media Galaxy Phishing & yiyangsaas.com C2 Forensics',
    descRo:
      'Dosar criminalistic complet (30 probe) asupra campaniei de spoofing e-commerce și recoltare de carduri, finalizat cu raportare oficială și blocare națională în PNRISC / DNSC.',
    descEn:
      '30-exhibit forensic investigation into e-commerce brand spoofing and payment card skimming, culminating in national DNSC PNRISC blacklisting.',
    highlightsRo: [
      'Capturi DOM/TLS în sandbox Chrome izolat și identificarea platformei C2 din Yunnan, China (yiyangsaas.com).',
      'Analiza tacticii de stalling prin portalul fals trackparcel.de și domenii rotative (worvixglobal.com, stridewisetrading.com).'
    ],
    highlightsEn: [
      'Airtight headless Chrome DOM/TLS captures and attribution to Yunnan, China C2 infrastructure (yiyangsaas.com).',
      'Analysis of post-exploitation chargeback stalling via trackparcel.de and rotating SMTP domains.'
    ],
    tags: ['DFIR', 'DNSC #178465', 'DNS Sinkhole', 'Payment Fraud', 'Threat Intel'],
    repoUrl: 'https://github.com/stefanutc1/infrastructure/tree/main/cyber/mediagalaxy-ecommerce-fraud-forensics'
  },
  {
    id: 'dfir-revolut-steam-task',
    code: 'SEC-2026-VISH / TASK / AITM',
    category: 'cyber',
    badge: 'DFIR SUITE · 4 DOSSIERS & 5 CVEs',
    titleRo: 'Dosarele Revolut Vishing, Task Scam API, Steam BitM & 100% CTF',
    titleEn: 'Revolut Vishing, Task Scam API, Steam BitM & 100% CTF Suite',
    descRo:
      'Colecția de investigații asupra vishing-ului cu releu OTP, decompilării API-urilor de fraudă financiară (/api/v1/site/config), atacurilor Browser-in-the-Middle și rezolvările 100% InvataCyber CTF.',
    descEn:
      'Suite of forensic investigations into live OTP vishing relays, unauthenticated task-scam APIs (/api/v1/site/config), Browser-in-the-Middle popups, and 100% InvataCyber CTF writeups.',
    highlightsRo: [
      '5 reproduceri CVE în laborator (CVE-2023-54391, CVE-2025-57539, CVE-2026-69603, CVE-2026-69730, CVE-2026-69845) cu patch-uri de remediere.',
      'Solvere Python automatizate pentru Blind SQLi, Reflected XSS și Jinja2 SSTI.'
    ],
    highlightsEn: [
      '5 laboratory CVE reproductions with remediation patches.',
      'Automated Python exploit solvers for Blind SQLi, Reflected XSS, and Jinja2 SSTI.'
    ],
    tags: ['Vishing Relay', 'BitM / AiTM', 'API Decompilation', 'CVE Research', 'Python Solvers'],
    repoUrl: 'https://github.com/stefanutc1/infrastructure/tree/main/cyber'
  },
  {
    id: 'proj-ps2',
    code: 'PS2-Practica',
    category: 'web',
    badge: 'NEXT.JS 15 · REACT 19',
    titleRo: 'Aplicație Web Telemetrie Meteo (ucv-ps2-vremea) & Jurnal Bilingv',
    titleEn: 'Weather Telemetry Web App (ucv-ps2-vremea) & Bilingual Logbook',
    descRo:
      'Aplicație web modernă construită cu Next.js 15 App Router, React 19, TypeScript 5.7 și Tailwind CSS, însoțită de 14 jurnale zilnice bilingve de practică.',
    descEn:
      'Modern web application built with Next.js 15 App Router, React 19, TypeScript 5.7, and Tailwind CSS, paired with 14 bilingual daily engineering logs.',
    highlightsRo: [
      'Arhitectură de componente React 19 cu interogare asincronă API și design responsiv.',
      'Validare statică automatizată în pipeline-ul CI GitHub Actions.'
    ],
    highlightsEn: [
      'React 19 component architecture with async telemetry fetching and responsive UI.',
      'Automated static typechecking and build verification in GitHub Actions CI.'
    ],
    tags: ['Next.js 15', 'React 19', 'TypeScript 5.7', 'Tailwind CSS'],
    repoUrl: 'https://github.com/stefanutc1/proiecte/tree/main/licenta/PS2-Practica'
  },
  {
    id: 'proj-poo2',
    code: 'POO2-Proiect & Platforme',
    category: 'systems',
    badge: 'C++ · MFC WIN32',
    titleRo: 'Sisteme Desktop de Gestiune și Platforme SDI/MDI în C++ / MFC',
    titleEn: 'Commercial Management Desktop System & SDI/MDI Platforms in C++ / MFC',
    descRo:
      'Aplicație completă de gestiune comercială și suită de 8 platforme de laborator (Lab 2–9 MDI) dezvoltate în C++ și Microsoft Foundation Classes.',
    descEn:
      'Full commercial management desktop application and 8 laboratory platforms (Lab 2–9 MDI) engineered in C++ and Microsoft Foundation Classes.',
    highlightsRo: [
      'Arhitectură Document/View, serializare binară CArchive, randare vectorială GDI și ferestre de dialog complexe.',
      'Ierarhii polimorfice de clase și gestiune sigură a memoriei.'
    ],
    highlightsEn: [
      'Document/View architecture, binary CArchive serialization, Win32 GDI vector rendering, and custom dialog workflows.',
      'Polymorphic class hierarchies and deterministic resource management.'
    ],
    tags: ['C++', 'MFC', 'Win32 API', 'OOP', 'Visual Studio'],
    repoUrl: 'https://github.com/stefanutc1/proiecte/tree/main/licenta/POO2-Proiect'
  },
  {
    id: 'proj-sd2-pc1',
    code: 'SD2 & PC1-Platforme',
    category: 'systems',
    badge: 'C++ · C# · .NET WINFORMS',
    titleRo: 'Structuri de Date Avansate (C++ BST/Liste) & Platforme .NET (C#/VB)',
    titleEn: 'Advanced Data Structures (C++ BST/Lists) & .NET WinForms Suite (C#/VB)',
    descRo:
      'Implementări de la zero în C++ pentru arbori binari de căutare, liste înlănțuite și algoritmi, alături de 10 aplicații desktop .NET WinForms în C# și Visual Basic.',
    descEn:
      'From-scratch C++ implementations of Binary Search Trees, linked lists, and algorithms, alongside 10 .NET WinForms desktop applications in C# and Visual Basic.',
    highlightsRo: [
      'Operații complete pe arbori binari de căutare (inserare, ștergere, traversări recursiv/iterativ) în SD2-Proiect și SD2-Teme.',
      '10 soluții Visual Studio pentru calcule matriciale, statistice și financiare în PC1-Platforme.'
    ],
    highlightsEn: [
      'Full BST lifecycle operations and 7 algorithmic problem sets in SD2-Proiect & SD2-Teme.',
      '10 Visual Studio WinForms solutions for matrix, statistical, and financial computation in PC1-Platforme.'
    ],
    tags: ['C++', 'Binary Search Trees', 'C#', 'Visual Basic', '.NET WinForms'],
    repoUrl: 'https://github.com/stefanutc1/proiecte/tree/main/licenta/SD2-Proiect'
  },
  {
    id: 'proj-bd2-rc2-anul3',
    code: 'BD2 · RC2 · PW3 · APSI3 · GBD3',
    category: 'datanet',
    badge: 'MYSQL 8 · CISCO IOS · UML',
    titleRo: 'Baze de Date Relaționale (MySQL 8.0), Rețele Cisco VLAN & Platforme Anul 3',
    titleEn: 'Relational Databases (MySQL 8.0), Cisco VLAN Networks & Year 3 Suite',
    descRo:
      'Arhitecturi de baze de date normalizate (E-R MySQL Workbench, DDL/DML, proceduri stocate), topologii enterprise multi-VLAN în Cisco Packet Tracer și modulele de analiză UML și web din anul 3.',
    descEn:
      'Normalized relational database schemas (MySQL Workbench E-R, DDL/DML, stored procedures), multi-VLAN Cisco Packet Tracer enterprise topologies, and Year 3 UML/Web modules.',
    highlightsRo: [
      'Scheme relaționale 3NF/BCNF cu constrângeri de integritate și interogări analitice complexe în BD2-Proiect și GBD3.',
      'Topologii Cisco IOS cu subnetizare VLSM, rutare inter-VLAN și liste de control al accesului (ACL) în RC2-Proiect.'
    ],
    highlightsEn: [
      '3NF/BCNF relational schemas with referential integrity and complex analytical SQL queries in BD2-Proiect & GBD3.',
      'Cisco IOS topologies featuring VLSM subnetting, inter-VLAN routing, and security ACLs in RC2-Proiect.'
    ],
    tags: ['MySQL 8.0', 'SQL DDL/DML', 'Cisco Packet Tracer', '802.1Q VLANs', 'UML Architecture'],
    repoUrl: 'https://github.com/stefanutc1/proiecte/tree/main/licenta'
  }
];

export const CLUSTER_NODES: ClusterNode[] = [
  {
    id: 'node-1',
    name: 'Node 1 · pve (x86_64 Primary Hypervisor)',
    ip: '192.168.1.132 · VLAN 10',
    specs: 'Intel Core i3-10100F · 12 GB DDR4-2133 + 6 GB ZRAM · NVIDIA GTX 1050 Ti · NVMe + SSD',
    roleRo:
      'Hypervisor principal Proxmox VE 9.2: rulează OPNsense 24.7 (VM 200), Wazuh SIEM (CT 106), Ollama GPU LLM (CT 102), LGTM Monitoring (CT 104), Active Directory Lab (VM 400–405), Cyber Range (VM 300–304), Core-Banking Licență (VM 310–313) și suita Enterprise 2.0 (CT 180–183).',
    roleEn:
      'Primary Proxmox VE 9.2 hypervisor running OPNsense 24.7 (VM 200), Wazuh SIEM (CT 106), Ollama GPU LLM (CT 102), LGTM Monitoring (CT 104), Active Directory Lab (VMs 400–405), Cyber Range (VMs 300–304), Thesis Banking Core (VMs 310–313), and Enterprise 2.0 LXC stacks (CT 180–183).'
  },
  {
    id: 'node-2',
    name: 'Node 2 · openmediavault (Dedicated NAS)',
    ip: '192.168.1.199 · VLAN 40',
    specs: 'Dedicated Storage Appliance · ZFS / EXT4 · NFSv4 & SMB3 · SMART Monitoring',
    roleRo:
      'Nod dedicat de stocare partajată pentru backup-uri criptate Proxmox (vzdump / PBS), depozite media și artefacte criminalistice DFIR.',
    roleEn:
      'Dedicated storage appliance providing NFSv4/SMB3 datastores for encrypted Proxmox backups (vzdump / PBS), media libraries, and DFIR forensic artifacts.'
  },
  {
    id: 'node-3',
    name: 'Node 3 · pve-arm64 (Apple Silicon Virtualization)',
    ip: '192.168.1.140 · VLAN 10',
    specs: 'Apple Silicon ARM64 Architecture · Proxmox VE ARM64 · High-Efficiency Compute',
    roleRo:
      'Nod secundar ARM64 pentru containere LXC cu eficiență energetică ridicată, build-uri multi-arhitectură și testare macOS / Linux.',
    roleEn:
      'Secondary ARM64 node for energy-efficient LXC workloads, multi-architecture CI builds, and hybrid macOS/Linux testing.'
  },
  {
    id: 'node-4',
    name: 'Node 4 · kubernetes (k3s / k0s Edge Worker)',
    ip: '192.168.1.150 · VLAN 20',
    specs: 'AMD Athlon II X2 250 · Lightweight Kubernetes (k3s / k0s) · Cilium CNI · ArgoCD',
    roleRo:
      'Nod bare-metal pentru orchestrare Kubernetes, politici OPA Rego, Chaos Engineering și colectarea telemetriei de la senzorii hardware ESP32.',
    roleEn:
      'Bare-metal edge worker running Kubernetes manifests, OPA Rego policies, chaos engineering drills, and ESP32 hardware telemetry ingestion.'
  }
];

export const TECH_STACK_PILLARS: StackPillar[] = [
  {
    titleRo: 'Infrastructură, Virtualizare & IaC',
    titleEn: 'Infrastructure, Virtualization & IaC',
    subtitleRo: 'Bare-Metal · Multi-Cluster · GitOps',
    subtitleEn: 'Bare-Metal · Multi-Cluster · GitOps',
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
    subtitleRo: 'Zero-Trust · SIEM/XDR · Threat Intel',
    subtitleEn: 'Zero-Trust · SIEM/XDR · Threat Intel',
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
    subtitleRo: 'Backend · Full-Stack · Systems',
    subtitleEn: 'Backend · Full-Stack · Systems',
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
    subtitleRo: 'Telemetrie · SAST/DAST · Quality Gates',
    subtitleEn: 'Telemetry · SAST/DAST · Quality Gates',
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
