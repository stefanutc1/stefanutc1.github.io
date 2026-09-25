/**
 * Personal Engineering & Cybersecurity Portfolio — Moană Ștefănuț-Cornel (@stefanutc1)
 * Bilingual (RO / EN) Interactive State, Project Catalog, DFIR Dossiers & Command Palette
 */

const I18N = {
  ro: {
    navOverview: 'Prezentare',
    navEcosystem: 'Ecosistem',
    navCyber: 'Cyber & DFIR',
    navInfra: 'Datacenter',
    navProjects: 'Proiecte',
    navStack: 'Tehnologii',
    navContact: 'Contact',
    heroBadge: 'SISTEME OPERAȚIONALE · CRAIOVA, RO · PROMOȚIA 2026',
    heroSubtitle: 'Arhitect Infrastructură & DevSecOps · Cercetător Cybersecurity & DFIR · Inginer Sisteme Informatice',
    heroBio:
      'Absolvent Informatică Economică în cadrul Facultății de Economie și Administrarea Afacerilor (FEAA), Universitatea din Craiova. Proiectez și operez infrastructuri fizice și virtualizate zero-trust, arhitecturi bancare reziliente, sisteme SIEM/XDR și investigații de criminalistică digitală (DFIR) cu impact național.',
    ctaInfra: 'Explorează Datacenter Digital Twin',
    ctaBanking: 'Demo Live Core-Banking Kiosk',
    ctaGithub: 'Profil GitHub @stefanutc1',
    kpiNodesLabel: 'Noduri Fizice Cluster',
    kpiNodesSub: 'x86_64 PVE · NAS · ARM64 · k3s Edge',
    kpiWorkloadsLabel: 'VM-uri & Containere Active',
    kpiWorkloadsSub: '5 VLAN-uri 802.1Q · OPNsense · Wazuh',
    kpiDfirLabel: 'Dosare DFIR & Threat Intel',
    kpiDfirSub: 'Takedown-uri DNSC #178465 & #517639',
    kpiProjectsLabel: 'Proiecte Software & Licență',
    kpiProjectsSub: 'Java 17 · Python · Next.js · C++ · SQL',
    secFlagshipTag: 'ARHITECTURI PRINCIPALE',
    secFlagshipTitle: 'Platforme Enterprise & Sisteme Flagship',
    secFlagshipDesc:
      'Două piloni centrali interconectați: infrastructura fizică multi-nod gestionată integral ca Infrastructure-as-Code și platforma bancară de licență cu simulare ofensivă/defensivă MITRE ATT&CK.',
    secCyberTag: 'SECURITATE OFENSIVĂ, DEFENSIVĂ & DFIR',
    secCyberTitle: 'Investigații Criminalistică Digitală & Threat Intelligence',
    secCyberDesc:
      'Analize tehnice end-to-end asupra infrastructurilor de phishing, fraudă e-commerce, vishing bancar și exploatare web, finalizate cu notificări oficiale CSIRT/DNSC și reguli de detecție SIEM/IDS.',
    secInfraTag: 'HARDWARE & VIRTUALIZARE',
    secInfraTitle: 'Topologia Clusterului Homelab & Rețele Izolate',
    secInfraDesc:
      'Arhitectură hibridă x86_64 și ARM64 segmentată în 5 VLAN-uri 802.1Q prin OPNsense 24.7, monitorizată în timp real cu Wazuh SIEM, Suricata DPI, Prometheus, Grafana și Loki.',
    secProjectsTag: 'INGINERIE SOFTWARE & ACADEMIC',
    secProjectsTitle: 'Portofoliu Complet de Proiecte & Aplicații',
    secProjectsDesc:
      'Sisteme dezvoltate pe parcursul anilor de studiu la Informatică Economică (FEAA UCV) și în laboratorul personal — de la aplicații enterprise Spring Boot și Next.js 15 până la C++/MFC, structuri de date și topologii Cisco.',
    secStackTag: 'COMPETENȚE TEHNICE',
    secStackTitle: 'Matricea Tehnologică & DevSecOps',
    secStackDesc:
      'Stiva completă utilizată în producție pentru automatizarea infrastructurii, securizarea perimetrului, dezvoltarea software și observabilitate.',
    secContactTag: 'CONECTARE & COLABORARE',
    secContactTitle: 'Contact & Referințe Academice',
    secContactDesc:
      'Disponibil pentru roluri și proiecte în zonele de Infrastructure Engineering, DevSecOps, Cloud/Virtualization, Cybersecurity Operations (SOC / DFIR) și Backend Engineering.',
    filterAll: 'Toate',
    filterFlagship: 'Flagship & Licență',
    filterWeb: 'Web & Full-Stack',
    filterSystems: 'C++ / C# & Sisteme',
    filterDataNet: 'Baze de Date & Rețele',
    btnDetails: 'Detalii Tehnice',
    btnRepo: 'Cod Sursă',
    btnLive: 'Demo Live',
    modalClose: 'Închide',
    modalArchHighlights: 'Arhitectură & Specificații Cheie',
    modalTechStack: 'Tehnologii Utilizate',
    searchPlaceholder: 'Caută proiecte, investigații DFIR, noduri, tehnologii...',
    terminalHint: 'Tastează o comandă: help, whoami, fleet, dfir, projects, stack, clear'
  },
  en: {
    navOverview: 'Overview',
    navEcosystem: 'Ecosystem',
    navCyber: 'Cyber & DFIR',
    navInfra: 'Datacenter',
    navProjects: 'Projects',
    navStack: 'Tech Stack',
    navContact: 'Contact',
    heroBadge: 'SYSTEMS OPERATIONAL · CRAIOVA, RO · CLASS OF 2026',
    heroSubtitle: 'Infrastructure & DevSecOps Architect · Cybersecurity & DFIR Researcher · Systems Engineer',
    heroBio:
      'Business Informatics graduate at the Faculty of Economics and Business Administration (FEAA), University of Craiova. Designing and operating zero-trust physical & virtualized infrastructures, resilient core-banking architectures, SIEM/XDR telemetry pipelines, and high-impact digital forensics (DFIR) investigations.',
    ctaInfra: 'Explore Datacenter Digital Twin',
    ctaBanking: 'Launch Core-Banking Kiosk Demo',
    ctaGithub: 'GitHub Profile @stefanutc1',
    kpiNodesLabel: 'Physical Cluster Nodes',
    kpiNodesSub: 'x86_64 PVE · NAS · ARM64 · k3s Edge',
    kpiWorkloadsLabel: 'Active VMs & Containers',
    kpiWorkloadsSub: '5 802.1Q VLANs · OPNsense · Wazuh',
    kpiDfirLabel: 'DFIR & Threat Intel Dossiers',
    kpiDfirSub: 'DNSC Takedowns #178465 & #517639',
    kpiProjectsLabel: 'Software & Academic Projects',
    kpiProjectsSub: 'Java 17 · Python · Next.js · C++ · SQL',
    secFlagshipTag: 'CORE ARCHITECTURES',
    secFlagshipTitle: 'Enterprise Platforms & Flagship Systems',
    secFlagshipDesc:
      'Two interconnected pillars: a physical multi-node datacenter managed 100% as Infrastructure-as-Code and a full-stack core-banking thesis platform with automated MITRE ATT&CK offensive/defensive simulation.',
    secCyberTag: 'OFFENSIVE, DEFENSIVE & DFIR SECURITY',
    secCyberTitle: 'Digital Forensics & Threat Intelligence Dossiers',
    secCyberDesc:
      'End-to-end technical investigations into phishing syndicates, e-commerce payment fraud, FinTech vishing, and web exploitation, resulting in official national CSIRT/DNSC takedowns and SIEM/IDS detection rules.',
    secInfraTag: 'HARDWARE & VIRTUALIZATION',
    secInfraTitle: 'Homelab Cluster Topology & Segmented Networks',
    secInfraDesc:
      'Hybrid x86_64 and ARM64 cluster segmented across 5 isolated 802.1Q VLANs via OPNsense 24.7, continuously monitored by Wazuh SIEM, Suricata DPI, Prometheus, Grafana, and Loki.',
    secProjectsTag: 'SOFTWARE & ACADEMIC ENGINEERING',
    secProjectsTitle: 'Complete Software & Academic Portfolio',
    secProjectsDesc:
      'Systems engineered throughout the Business Informatics degree (FEAA UCV) and in the personal lab — spanning Spring Boot 3.2 microservices and Next.js 15 web apps to C++/MFC desktop systems, data structures, and Cisco topologies.',
    secStackTag: 'TECHNICAL CAPABILITIES',
    secStackTitle: 'Technology & DevSecOps Matrix',
    secStackDesc:
      'Production stack used for infrastructure automation, perimeter defense, full-stack software engineering, and real-time telemetry.',
    secContactTag: 'CONNECT & COLLABORATE',
    secContactTitle: 'Contact & Academic Citation',
    secContactDesc:
      'Available for engineering roles and collaborations in Infrastructure Engineering, DevSecOps, Cloud/Virtualization, Cybersecurity Operations (SOC / DFIR), and Backend Engineering.',
    filterAll: 'All',
    filterFlagship: 'Flagship & Thesis',
    filterWeb: 'Web & Full-Stack',
    filterSystems: 'C++ / C# & Systems',
    filterDataNet: 'Databases & Networks',
    btnDetails: 'Technical Specs',
    btnRepo: 'Source Code',
    btnLive: 'Live Demo',
    modalClose: 'Close',
    modalArchHighlights: 'Architecture & Key Specifications',
    modalTechStack: 'Technology Stack',
    searchPlaceholder: 'Search projects, DFIR dossiers, cluster nodes, technologies...',
    terminalHint: 'Type a command: help, whoami, fleet, dfir, projects, stack, clear'
  }
};

const FLAGSHIP_PLATFORMS = [
  {
    id: 'flagship-infra',
    code: 'SYS-01 · INFRASTRUCTURE DIGITAL TWIN',
    titleRo: 'Enterprise Homelab & Datacenter Architecture',
    titleEn: 'Enterprise Homelab & Datacenter Architecture',
    subtitleRo: 'Cluster Hibrid Proxmox VE 9.2 · Multi-Cloud IaC · Securitate Zero-Trust · Portal 3D Angular 20',
    subtitleEn: 'Proxmox VE 9.2 Hybrid Cluster · Multi-Cloud IaC · Zero-Trust Security · Angular 20 3D Portal',
    descRo:
      'Infrastructură fizică și virtualizată compusă din 4 noduri hardware (x86_64 12GB DDR4 cu ZRAM, OpenMediaVault NAS, Apple Silicon ARM64 și Kubernetes k3s), orchestrată prin 57 module Terraform și 18 playbook-uri Ansible. Include firewall OPNsense 24.7 pe 5 VLAN-uri 802.1Q, Wazuh SIEM/XDR, stivă completă LGTM (Loki, Grafana, Telegraf, Prometheus), inferență AI locală pe GPU (Ollama GTX 1050 Ti) și telemetrie hardware ESP32.',
    descEn:
      'Physical and virtualized datacenter spanning 4 hardware nodes (x86_64 12GB DDR4 with ZRAM, OpenMediaVault NAS, Apple Silicon ARM64, and Kubernetes k3s), orchestrated via 57 Terraform modules and 18 Ansible playbooks. Features OPNsense 24.7 across 5 802.1Q VLANs, Wazuh SIEM/XDR, full LGTM observability stack, GPU-accelerated local LLM inference (Ollama GTX 1050 Ti), and bare-metal ESP32 rack telemetry.',
    metrics: [
      { labelRo: 'Module Terraform', labelEn: 'Terraform Files', value: '57' },
      { labelRo: 'Playbook-uri Ansible', labelEn: 'Ansible Playbooks', value: '18' },
      { labelRo: 'Indicatori DNS Blocklist', labelEn: 'DNS Sinkhole IoCs', value: '8,255+' },
      { labelRo: 'Piloni Audit Doctor', labelEn: 'Audit Health Pillars', value: '12 / 12 PASS' }
    ],
    highlightsRo: [
      'Segmentare strictă 802.1Q pe 5 VLAN-uri (Management, Production, CyberLab Air-Gapped, Storage, IoT) prin OPNsense 24.7 + Suricata IPS + CrowdSec.',
      'Laborator Enterprise Active Directory (VM 400–405: Windows Server 2022/2016/2012 R2, Windows 10 Sysmon, Windows 7 SMBv1, RHEL 9 SSSD) și Cyber Range (Parrot OS, Metasploitable 2, Flare-VM, REMnux).',
      'Suita Enterprise 2.0 pe LXC: Keycloak OIDC, NetBox IPAM/DCIM, Immich AI Photos, Jellyfin Media *arr Suite, Uptime Kuma, Scrutiny SMART.',
      'Portal web interactiv în Angular 20 cu topologie 3D izometrică, inspector de noduri și documentație bilingvă RO/EN.'
    ],
    highlightsEn: [
      'Strict 802.1Q micro-segmentation across 5 VLANs (Management, Production, Air-Gapped CyberLab, Storage, IoT) via OPNsense 24.7 + Suricata IPS + CrowdSec.',
      'Enterprise Active Directory Lab (VMs 400–405: Windows Server 2022/2016/2012 R2, Windows 10 Sysmon, Windows 7 SMBv1, RHEL 9 SSSD) & Cyber Range (Parrot OS, Metasploitable 2, Flare-VM, REMnux).',
      'Enterprise 2.0 LXC suite: Keycloak OIDC, NetBox IPAM/DCIM, Immich AI Photos, Jellyfin Media *arr Suite, Uptime Kuma, Scrutiny SMART.',
      'Interactive Angular 20 digital twin web portal featuring an isometric 3D network canvas, node inspector, and bilingual RO/EN documentation.'
    ],
    tags: ['Proxmox VE 9.2', 'Terraform', 'Ansible', 'OPNsense 24.7', 'Wazuh SIEM', 'Kubernetes k3s', 'Prometheus & Grafana', 'Angular 20', 'ESP32 C/C++'],
    liveUrl: 'https://stefanutc1.github.io/infrastructure/',
    repoUrl: 'https://github.com/stefanutc1/infrastructure'
  },
  {
    id: 'flagship-thesis',
    code: 'SYS-02 · BACHELOR THESIS (LUCRARE DE LICENȚĂ)',
    titleRo: 'Arhitectura și Securitatea Sistemelor Informatice Bancare',
    titleEn: 'Architecture & Security of Banking Information Systems',
    subtitleRo: 'Proiectarea, Implementarea și Auditul Rezilienței Cibernetice într-un Mediu Virtualizat (FEAA UCV 2026)',
    subtitleEn: 'Design, Implementation, and Cyber Resilience Auditing in a Virtualized Environment (FEAA UCV 2026)',
    descRo:
      'Lucrare de licență dezvoltată de Moană Ștefănuț-Cornel la Universitatea din Craiova (FEAA — Informatică Economică). Integrează un nucleu bancar complet (Spring Boot 3.2 / Java 17 + Python 3.11 + SQLite WAL / PostgreSQL), un terminal bancar interactiv Web Kiosk, o infrastructură Proxmox dedicată (VM 310–313) și un simulator automatizat de atac și apărare cibernetică bazat pe matricea MITRE ATT&CK.',
    descEn:
      'Bachelor’s thesis engineered by Moană Ștefănuț-Cornel at the University of Craiova (FEAA — Business Informatics). Integrates a full core-banking backend (Spring Boot 3.2 / Java 17 + Python 3.11 + SQLite WAL / PostgreSQL), an interactive Web Banking Kiosk, dedicated Proxmox virtualization (VMs 310–313), and an automated MITRE ATT&CK offensive/defensive cyber simulator.',
    metrics: [
      { labelRo: 'Scenarii MITRE ATT&CK', labelEn: 'MITRE ATT&CK Scenarios', value: '5 Active' },
      { labelRo: 'Criptare & Semnare', labelEn: 'Crypto & Signing', value: 'AES-256 / HMAC' },
      { labelRo: 'Noduri Bancare Proxmox', labelEn: 'Proxmox Banking VMs', value: 'VM 310–313' },
      { labelRo: 'Pipeline CI / LaTeX', labelEn: 'CI / LaTeX Pipeline', value: '100% PASS' }
    ],
    highlightsRo: [
      'Core-Banking Engine cu înregistrare contabilă în partidă dublă (Double-Entry Ledger), validare algoritmică IBAN (ISO 13616 MOD-97) și carduri Luhn (ISO/IEC 7812).',
      'Gateway de plăți PCI-DSS v4.0 cu tokenizare PAN, autentificare 3D Secure 2.2 (TOTP), semnare criptografică HMAC-SHA256 și protecție anti-replay.',
      'Simulator cibernetic cu 5 vectori: Brute-Force/Credential Stuffing (T1110), SQL Injection (T1190), Race Condition Double-Spend (T1499), Fraud Anomaly Detection (T1657) și DDoS Rate-Limiting.',
      'Monitor de integritate a bazei de date cu lanț criptografic SHA-256 (Hash-Chained Audit Ledger) și detecție instantanee a alterării înregistrărilor.'
    ],
    highlightsEn: [
      'Core-Banking Engine enforcing ACID double-entry bookkeeping, algorithmic IBAN validation (ISO 13616 MOD-97), and Luhn card verification (ISO/IEC 7812).',
      'PCI-DSS v4.0 Payment Gateway with PAN tokenization, 3D Secure 2.2 OTP challenges, HMAC-SHA256 cryptographic signing, and anti-replay nonces.',
      'Automated Cyber Simulator testing 5 vectors: Brute-Force/Credential Stuffing (T1110), SQL Injection (T1190), Race Condition Double-Spend (T1499), Fraud Anomaly Detection (T1657), and DDoS Rate-Limiting.',
      'Database Audit Monitor featuring a tamper-evident SHA-256 hash-chained ledger and real-time unauthorized mutation alerts.'
    ],
    tags: ['Java 17', 'Spring Boot 3.2', 'Python 3.11', 'PCI-DSS v4.0', 'MITRE ATT&CK', 'SQLite WAL / PostgreSQL', 'Docker', 'LaTeX'],
    liveUrl: 'https://stefanutc1.github.io/proiecte/',
    repoUrl: 'https://github.com/stefanutc1/proiecte/tree/main/licenta/LL3-LucrareLicenta'
  }
];

const CYBER_DOSSIERS = [
  {
    id: 'SEC-2026-ECOM-005',
    badge: 'CRITICAL · DNSC #178465',
    categoryRo: 'E-Commerce Phishing & Fraudă Plăți',
    categoryEn: 'E-Commerce Phishing & Payment Fraud',
    titleRo: 'Media Galaxy Brand Spoofing & Infrastructură C2 SaaS (yiyangsaas.com)',
    titleEn: 'Media Galaxy Brand Spoofing & Chinese SaaS C2 Infrastructure (yiyangsaas.com)',
    descRo:
      'Investigație criminalistică completă (30 probe) asupra unei campanii de reclame sponsorizate pe TikTok și Facebook care clona platforma Media Galaxy pe un domeniu olandez compromis (mediagalaxy.voetbalshop-nlco.com), conectat la o platformă C2 din Yunnan, China (yiyangsaas.com) și domenii de stalling logistic (stridewisetrading.com, trackparcel.de).',
    descEn:
      'Comprehensive 30-exhibit forensic investigation into sponsored TikTok/Facebook lures spoofing Media Galaxy on a hijacked Dutch domain (mediagalaxy.voetbalshop-nlco.com), backed by a Yunnan, China C2 SaaS platform (yiyangsaas.com) and post-exploitation stalling logistics (stridewisetrading.com, trackparcel.de).',
    highlightsRo: [
      '30 de probe criminalistice documentate: capturi DOM/SSL în sandbox izolat Chrome, decompilare flux de exfiltrare carduri și analiză antete SMTP/DKIM.',
      'Identificarea descriptorilor bancari frauduloși (morvethemi london / dreamwardrobe.online) și a mecanismului de întârziere a disputelor chargeback prin portalul fals trackparcel.de.',
      'Raportare oficială către DNSC (Tichet #178465), Google Safe Browsing și Cloudflare Abuse; blocare națională în PNRISC (blacklist.dnsc.ro).'
    ],
    highlightsEn: [
      '30 forensic exhibits: airtight headless Chrome DOM/SSL captures, card harvesting payload analysis, and SMTP/DKIM header correlation.',
      'Uncovered rogue merchant descriptors (morvethemi london / dreamwardrobe.online) and chargeback stalling tactics via fake tracking portal trackparcel.de.',
      'Formal disclosure to Romanian National CSIRT / DNSC (Ticket #178465), Google Safe Browsing, and Cloudflare Abuse; blacklisted nationally in PNRISC.'
    ],
    tags: ['DFIR', 'DNS Sinkhole', 'Headless Sandbox', 'DNSC PNRISC', 'MITRE T1566.002', 'PCI Fraud Analysis'],
    repoUrl: 'https://github.com/stefanutc1/infrastructure/tree/main/cyber/mediagalaxy-ecommerce-fraud-forensics',
    pdfUrl: 'https://github.com/stefanutc1/infrastructure/blob/main/cyber/mediagalaxy-ecommerce-fraud-forensics/reports/cybersecurity_report_final.pdf'
  },
  {
    id: 'SEC-2026-VISH-002',
    badge: 'HIGH · FINTECH VISHING',
    categoryRo: 'Inginerie Socială & Voice Phishing',
    categoryEn: 'Social Engineering & Voice Phishing',
    titleRo: 'Revolut FinTech Vishing & Releu OTP în Timp Real',
    titleEn: 'Revolut FinTech Vishing & Real-Time OTP Relay Forensics',
    descRo:
      'Analiza tehnică a unei campanii de vishing prin trunk-uri SIP românești și IVR dinamic care pretindea tranzacții neautorizate Revolut pentru a intercepta în timp real codurile 2FA/OTP și a autoriza sesiuni pe dispozitivele atacatorilor.',
    descEn:
      'Technical analysis of a voice phishing operation utilizing Romanian SIP trunks and automated IVR lures claiming unauthorized Revolut transactions to harvest live 2FA/OTP tokens.',
    highlightsRo: [
      'Corelarea jurnalelor de apel telecom, analiza fluxului de escaladare de la IVR automat la operator uman și anatomia releului MFA.',
      'Raportare oficială și partajare pachet de telemetrie cu echipa Revolut Fraud Operations și furnizorii de interconectare telecom.'
    ],
    highlightsEn: [
      'Telecom call graph correlation, automated IVR-to-live-operator handoff analysis, and real-time MFA relay anatomy.',
      'Formal incident escalation and telemetry package submission to Revolut Security Triage & telecom trunk providers.'
    ],
    tags: ['Vishing Forensics', 'SIP / VoIP Analysis', 'MFA Relay', 'Incident Response', 'FinTech Security'],
    repoUrl: 'https://github.com/stefanutc1/infrastructure/tree/main/cyber/revolut-vishing-forensics'
  },
  {
    id: 'SEC-2026-TASK-003',
    badge: 'CRITICAL · API EXPOSURE',
    categoryRo: 'Fraudă Financiară & Analiză Aplicații Web',
    categoryEn: 'Financial Fraud & Web App Recon',
    titleRo: 'Decompilarea Infrastructurii unei Platforme „Task Scam”',
    titleEn: 'Task Scam Platform Infrastructure & Unauthenticated API Analysis',
    descRo:
      'Investigație asupra unei platforme white-label de fraudă financiară (Vue.js frontend + Laravel backend) promovată pe Telegram/WhatsApp. Analiza API-ului a expus endpoint-ul neautentificat /api/v1/site/config care dezactiva programatic retragerile fiat.',
    descEn:
      'Forensic dissection of a white-label task scam platform (Vue.js frontend + Laravel API). Uncovered unauthenticated /api/v1/site/config endpoints exposing hardcoded withdrawal lockouts and SQL injection vectors.',
    highlightsRo: [
      'Extracția configurației interne din endpoint-ul /api/v1/site/config care demonstra matematic blocarea retragerilor după depunerea fondurilor.',
      'Cartografierea suprafeței de injecție SQL (SQLi), analiza manipulării interfeței (UI Spoofing) și amprentarea infrastructurii.'
    ],
    highlightsEn: [
      'Extracted internal platform state via /api/v1/site/config proving programmatic fiat withdrawal lockouts.',
      'Mapped SQL injection (SQLi) surface, client-side balance manipulation mechanics, and server fingerprinting.'
    ],
    tags: ['API Recon', 'SQL Injection', 'Vue / Laravel Analysis', 'Financial Fraud DFIR', 'Threat Intel'],
    repoUrl: 'https://github.com/stefanutc1/infrastructure/tree/main/cyber/task-scam-infrastructure-analysis'
  },
  {
    id: 'SEC-2025-AITM-004',
    badge: 'HIGH · BITM PHISHING',
    categoryRo: 'Browser-in-the-Middle (BitM)',
    categoryEn: 'Browser-in-the-Middle (BitM)',
    titleRo: 'Steam OpenID Browser-in-the-Middle (BitM) & Reverse Proxy C2',
    titleEn: 'Steam OpenID Browser-in-the-Middle (BitM) & Reverse Proxy C2',
    descRo:
      'Analiza DOM și de rețea a unei campanii de furt de sesiuni Steam distribuite pe Discord sub pretextul unor turnee de CS2, folosind ferestre pop-up simulate în HTML5/CSS3 (z-index: 999999) și proxy-uri inverse C2.',
    descEn:
      'DOM and network forensics of a Steam credential and session hijacking campaign using simulated in-page HTML5/CSS3 popup windows (z-index: 999999) and reverse-proxy C2 relays.',
    highlightsRo: [
      'Deconstrucția arhitecturii de fereastră falsă (Simulated Chrome Address Bar & SSL Lock) care elimină indicatorii vizuali de phishing clasic.',
      'Documentarea fluxului de exfiltrare a token-urilor Steam Guard și protocoale de recuperare și blocare la nivel de DNS.'
    ],
    highlightsEn: [
      'Deconstructed simulated browser chrome and fake SSL bar rendered inside the parent DOM to bypass URL bar inspection.',
      'Documented Steam Guard session token exfiltration flows and Unbound DNS sinkhole countermeasures.'
    ],
    tags: ['BitM / AiTM', 'DOM Forensics', 'OpenID Security', 'Reverse Proxy C2', 'Session Hijacking'],
    repoUrl: 'https://github.com/stefanutc1/infrastructure/tree/main/cyber/openid-mitm-phishing-forensics'
  },
  {
    id: 'SEC-2025-MRR-001',
    badge: 'MEDIUM · OSINT & FUNNEL',
    categoryRo: 'Analiză OSINT & Fraude Digitale',
    categoryEn: 'OSINT & Digital Funnel Analysis',
    titleRo: 'Analiza Pâlniilor Algoritmice TikTok MRR (Master Resell Rights)',
    titleEn: 'TikTok Algorithmic MRR (Master Resell Rights) Scam Funnel Analysis',
    descRo:
      'Studiu tehnic și semantic asupra pâlniilor automatizate de vânzare a cursurilor de tip Master Resell Rights pe TikTok și Stan.store, evidențiind tehnicile de manipulare algoritmică și fabricare a dovezilor sociale.',
    descEn:
      'Semantic and technical investigation into automated Master Resell Rights (MRR) marketing funnels on TikTok and Stan.store, detailing synthetic social proof and consumer protection indicators.',
    highlightsRo: [
      'Analiza transcrierilor video, amprentarea conținutului generat sintetic și anatomia piramidală a revânzării licențelor.',
      'Ghid complet de verificare OSINT și protecție a consumatorilor.'
    ],
    highlightsEn: [
      'Video transcript semantic analysis, synthetic media fingerprinting, and multi-tier resell funnel mapping.',
      'Comprehensive OSINT verification and consumer protection advisory.'
    ],
    tags: ['OSINT', 'Funnel Forensics', 'Social Media Threat Intel', 'Consumer Protection'],
    repoUrl: 'https://github.com/stefanutc1/infrastructure/tree/main/cyber/tiktok-mrr-scam-infrastructure'
  },
  {
    id: 'CYBER-CVE-CTF',
    badge: '5 CVEs · 100% CTF',
    categoryRo: 'Cercetare Vulnerabilități & CTF Writeups',
    categoryEn: 'Vulnerability Research & CTF Writeups',
    titleRo: 'Reproduceri CVE în Laborator & Rezolvări Complete InvataCyber CTF',
    titleEn: 'Laboratory CVE Reproductions & InvataCyber CTF 100% Writeups',
    descRo:
      'Colecție de 5 analize și patch-uri CVE în laborator (inclusiv SSRF, RCE, Container Escape și Command Injection) alături de writeup-urile complete (100% rezolvare) pentru provocările InvataCyber.ro CTF (Reflected XSS, Blind SQLi, Jinja2 SSTI).',
    descEn:
      'Suite of 5 laboratory CVE reproductions and remediation patches alongside complete 100% writeups and Python exploit solvers for the InvataCyber.ro CTF (Reflected XSS, Blind SQLi, Jinja2 SSTI).',
    highlightsRo: [
      'Rapoarte CVE și patch-uri: CVE-2023-54391, CVE-2025-57539, CVE-2026-69603, CVE-2026-69730, CVE-2026-69845.',
      'Exploit-uri automatizate în Python pentru exfiltrare SQLite prin Blind SQLi, ocolire filtre XSS și execuție cod prin Server-Side Template Injection (SSTI).'
    ],
    highlightsEn: [
      'CVE reports & patches: CVE-2023-54391, CVE-2025-57539, CVE-2026-69603, CVE-2026-69730, CVE-2026-69845.',
      'Automated Python solvers for Blind SQLi schema extraction, XSS cookie exfiltration, and Jinja2 SSTI remote code execution.'
    ],
    tags: ['CVE Research', 'Blind SQLi', 'Jinja2 SSTI', 'XSS Exploitation', 'Python Solvers', 'Patch Engineering'],
    repoUrl: 'https://github.com/stefanutc1/infrastructure/tree/main/cyber/ctf/19-09-2026'
  }
];

const CLUSTER_NODES = [
  {
    id: 'node-1',
    name: 'Node 1 · pve (x86_64 Primary Hypervisor)',
    ip: '192.168.1.132 · VLAN 10',
    specs: 'Intel Core i3-10100F (4C/8T @ 4.3GHz) · 12 GB DDR4-2133 + 6 GB ZRAM · NVIDIA GTX 1050 Ti · NVMe + SATA SSD',
    roleRo:
      'Hypervisor principal Proxmox VE 9.2: găzduiește OPNsense 24.7 (VM 200), Wazuh SIEM (CT 106), Ollama GPU LLM (CT 102), LGTM Monitoring (CT 104), Active Directory Lab (VM 400–405), Cyber Range (VM 300–304), Core Banking Licență (VM 310–313) și suita Enterprise 2.0 (CT 180–183).',
    roleEn:
      'Primary Proxmox VE 9.2 hypervisor hosting OPNsense 24.7 (VM 200), Wazuh SIEM (CT 106), Ollama GPU LLM (CT 102), LGTM Monitoring (CT 104), Active Directory Lab (VMs 400–405), Cyber Range (VMs 300–304), Thesis Banking Core (VMs 310–313), and Enterprise 2.0 LXC stacks (CT 180–183).'
  },
  {
    id: 'node-2',
    name: 'Node 2 · openmediavault (Dedicated NAS & Storage)',
    ip: '192.168.1.199 · VLAN 40',
    specs: 'Dedicated Storage Appliance · ZFS / EXT4 RAID · NFSv4 & SMB3 Shares · SMART Telemetry',
    roleRo:
      'Nod dedicat de stocare partajată pentru clusterul Proxmox, arhive reci criptate de backup (vzdump / PBS), depozite media și artefacte criminalistice.',
    roleEn:
      'Dedicated network-attached storage appliance providing NFSv4/SMB3 datastores for Proxmox backups (vzdump / PBS), media repositories, and forensic artifacts.'
  },
  {
    id: 'node-3',
    name: 'Node 3 · pve-arm64 (Apple Silicon Virtualization)',
    ip: '192.168.1.140 · VLAN 10',
    specs: 'Apple Silicon ARM64 Architecture · Proxmox VE ARM64 Port · Low-Power High-Efficiency Compute',
    roleRo:
      'Nod secundar ARM64 pentru containere LXC de înaltă eficiență energetică, dezvoltare multi-arhitectură și testare macOS / Linux hibrid.',
    roleEn:
      'Secondary ARM64 virtualization node for energy-efficient LXC workloads, multi-architecture CI builds, and hybrid macOS/Linux testing.'
  },
  {
    id: 'node-4',
    name: 'Node 4 · kubernetes (k3s / k0s Edge Worker)',
    ip: '192.168.1.150 · VLAN 20',
    specs: 'AMD Athlon II X2 250 · Lightweight Kubernetes (k3s / k0s) · Cilium CNI · ArgoCD GitOps',
    roleRo:
      'Nod edge bare-metal pentru orchestrare Kubernetes, politici OPA Rego, teste de reziliență Chaos Engineering și telemetrie hardware ESP32.',
    roleEn:
      'Bare-metal edge compute node running lightweight Kubernetes manifests, OPA Rego admission policies, chaos engineering drills, and ESP32 sensor ingestion.'
  }
];

const ACADEMIC_PROJECTS = [
  {
    id: 'proj-ll3',
    code: 'LL3-LucrareLicenta',
    category: 'flagship',
    year: 'Anul 3 · 2026',
    titleRo: 'Lucrare de Licență: Arhitectura și Securitatea Sistemelor Informatice Bancare',
    titleEn: 'Bachelor Thesis: Architecture & Security of Banking Information Systems',
    descRo:
      'Platformă completă de core-banking și simulare cibernetică: microservice Spring Boot 3.2 (Java 17), motoare Python 3.11 pentru ledger în partidă dublă, gateway PCI-DSS v4.0, monitor SHA-256 și simulator MITRE ATT&CK (5 scenarii), plus terminal web Kiosk și teză completă în LaTeX.',
    descEn:
      'Full-stack core-banking and cyber defense platform: Spring Boot 3.2 (Java 17) API, Python 3.11 double-entry ledger, PCI-DSS v4.0 payment gateway, SHA-256 tamper-evident audit monitor, 5-scenario MITRE ATT&CK simulator, Web Kiosk, and LaTeX thesis.',
    highlightsRo: [
      'Backend Java 17 / Spring Boot 3.2 + motoare Python 3.11 validate prin suite automate JUnit 5 și Pytest în GitHub Actions.',
      '5 scenarii de atac și apărare bancară mapate pe MITRE ATT&CK (T1110, T1190, T1499, T1657, DDoS).',
      'Terminal Web Kiosk interactiv publicat pe GitHub Pages și compilare automată PDF din LaTeX.'
    ],
    highlightsEn: [
      'Java 17 / Spring Boot 3.2 backend + Python 3.11 engines validated via automated JUnit 5 and Pytest CI pipelines.',
      '5 banking attack & defense scenarios mapped to MITRE ATT&CK (T1110, T1190, T1499, T1657, DDoS).',
      'Interactive Web Banking Kiosk deployed on GitHub Pages and automated LaTeX thesis PDF compilation.'
    ],
    tags: ['Java 17', 'Spring Boot 3.2', 'Python 3.11', 'SQLite WAL', 'Docker', 'LaTeX', 'MITRE ATT&CK'],
    repoUrl: 'https://github.com/stefanutc1/proiecte/tree/main/licenta/LL3-LucrareLicenta',
    liveUrl: 'https://stefanutc1.github.io/proiecte/'
  },
  {
    id: 'proj-ps2',
    code: 'PS2-Practica',
    category: 'web',
    year: 'Anul 2 · Practică',
    titleRo: 'Aplicație Web Prognoză Meteo (ucv-ps2-vremea) & Jurnal Practică',
    titleEn: 'Weather Telemetry Web Application (ucv-ps2-vremea) & Practice Logbook',
    descRo:
      'Aplicație web modernă dezvoltată cu Next.js 15 App Router, React 19, TypeScript 5.7 și Tailwind CSS pentru interogarea și vizualizarea telemetriei meteo în timp real, însoțită de 14 jurnale zilnice bilingve (RO/EN).',
    descEn:
      'Modern responsive web application built with Next.js 15 App Router, React 19, TypeScript 5.7, and Tailwind CSS for real-time weather telemetry visualization, accompanied by 14 bilingual daily engineering logs.',
    highlightsRo: [
      'Arhitectură modulară Next.js 15 / React 19 cu tipizare strictă TypeScript și design responsiv Tailwind CSS.',
      '14 înregistrări zilnice de practică documentând întregul ciclu SDLC, de la virtualizare și rețelistică la deploy.'
    ],
    highlightsEn: [
      'Modular Next.js 15 / React 19 component architecture with strict TypeScript types and Tailwind CSS styling.',
      '14 daily engineering journal entries documenting the complete SDLC from virtualization setup to deployment.'
    ],
    tags: ['Next.js 15', 'React 19', 'TypeScript 5.7', 'Tailwind CSS', 'REST APIs'],
    repoUrl: 'https://github.com/stefanutc1/proiecte/tree/main/licenta/PS2-Practica'
  },
  {
    id: 'proj-poo2-proiect',
    code: 'POO2-Proiect',
    category: 'systems',
    year: 'Anul 2 · POO',
    titleRo: 'Sistem Desktop de Gestiune Comercială în C++ / MFC',
    titleEn: 'Commercial Management Desktop System in C++ / MFC',
    descRo:
      'Aplicație nativă Windows dezvoltată în C++ utilizând arhitectura Microsoft Foundation Classes (MFC Document/View) pentru gestiunea stocurilor, vânzărilor, clienților și raportărilor financiare.',
    descEn:
      'Native Windows desktop application engineered in C++ using Microsoft Foundation Classes (MFC Document/View architecture) for inventory, sales, and financial reporting management.',
    highlightsRo: [
      'Implementare completă a principiilor POO (încapsulare, moștenire, polimorfism, serializare binară).',
      'Interfață grafică Win32/MFC cu ferestre de dialog, validări de formular și persistență locală.'
    ],
    highlightsEn: [
      'Full OOP implementation featuring encapsulation, inheritance, polymorphism, and binary serialization.',
      'Win32/MFC GUI with custom dialogs, input validation, and persistent document storage.'
    ],
    tags: ['C++', 'MFC', 'Win32 API', 'OOP', 'Visual Studio'],
    repoUrl: 'https://github.com/stefanutc1/proiecte/tree/main/licenta/POO2-Proiect'
  },
  {
    id: 'proj-bd2',
    code: 'BD2-Proiect',
    category: 'datanet',
    year: 'Anul 2 · Baze de Date',
    titleRo: 'Proiectarea și Implementarea Bazelor de Date Relaționale (MySQL 8.0)',
    titleEn: 'Relational Database Architecture & Implementation (MySQL 8.0)',
    descRo:
      'Modelare conceptuală și fizică E-R (MySQL Workbench), normalizare până la BCNF/3NF, scripturi DDL/DML complexe, constrângeri de integritate referențială, indecși și interogări analitice.',
    descEn:
      'Conceptual and physical E-R modeling (MySQL Workbench), 3NF/BCNF normalization, comprehensive DDL/DML scripts, referential integrity constraints, indexing, and analytical SQL queries.',
    highlightsRo: [
      'Diagrame E-R complete (.mwb), scheme SQL normalizate și seturi de date de test.',
      'Interogări complexe cu JOIN-uri multiple, subinterogări corelate, agregări și vederi (Views).'
    ],
    highlightsEn: [
      'Complete E-R diagrams (.mwb), normalized SQL schemas, and transactional seed datasets.',
      'Complex multi-JOIN analytical queries, correlated subqueries, aggregations, and views.'
    ],
    tags: ['MySQL 8.0', 'SQL DDL/DML', 'E-R Modeling', '3NF Normalization', 'MySQL Workbench'],
    repoUrl: 'https://github.com/stefanutc1/proiecte/tree/main/licenta/BD2-Proiect'
  },
  {
    id: 'proj-rc2',
    code: 'RC2-Proiect',
    category: 'datanet',
    year: 'Anul 2 · Rețele',
    titleRo: 'Topologie Enterprise de Rețele & Rutare VLAN în Cisco Packet Tracer',
    titleEn: 'Enterprise Network Topology & VLAN Routing in Cisco Packet Tracer',
    descRo:
      'Proiectarea și simularea unei rețele enterprise multi-departamentale cu segmentare VLAN 802.1Q, rutare inter-VLAN (Router-on-a-Stick / Layer 3 Switch), DHCP, DNS, NAT și liste de control al accesului (ACL).',
    descEn:
      'Design and simulation of a multi-department enterprise network featuring 802.1Q VLAN segmentation, inter-VLAN routing, DHCP, DNS, NAT, and security Access Control Lists (ACLs).',
    highlightsRo: [
      'Plan de adresare IPv4 cu subnetizare VLSM optimizată pe departamente.',
      'Configurații Cisco IOS pentru switch-uri și routere, politici de filtrare ACL și verificare conectivitate end-to-end.'
    ],
    highlightsEn: [
      'IPv4 addressing plan with optimized VLSM subnetting across organizational departments.',
      'Cisco IOS router and switch configurations, ACL security filtering, and end-to-end packet tracing.'
    ],
    tags: ['Cisco Packet Tracer', 'Cisco IOS', '802.1Q VLANs', 'VLSM Subnetting', 'ACLs & NAT'],
    repoUrl: 'https://github.com/stefanutc1/proiecte/tree/main/licenta/RC2-Proiect'
  },
  {
    id: 'proj-sd2',
    code: 'SD2-Proiect & SD2-Teme',
    category: 'systems',
    year: 'Anul 2 · Structuri de Date',
    titleRo: 'Structuri de Date Avansate și Algoritmi în C++ (Arbori, Liste, Grafuri)',
    titleEn: 'Advanced Data Structures & Algorithms in C++ (Trees, Lists, Graphs)',
    descRo:
      'Implementări de la zero în C++ pentru arbori binari de căutare (BST), liste simplu și dublu înlănțuite, stive, cozi și algoritmi de sortare/căutare cu gestiune explicită a memoriei dinamice.',
    descEn:
      'From-scratch C++ implementations of Binary Search Trees (BST), singly/doubly linked lists, stacks, queues, and sorting/traversal algorithms with manual dynamic memory management.',
    highlightsRo: [
      'Operații complete pe arbori binari (inserare, ștergere, traversări in-order/pre-order/post-order, echilibrare).',
      'Colecție de 7 teme de laborator rezolvate complet în C++ standard.'
    ],
    highlightsEn: [
      'Full BST lifecycle operations (insertion, deletion, in-order/pre-order/post-order traversals).',
      'Suite of 7 algorithmic laboratory assignments implemented in standard C++.'
    ],
    tags: ['C++', 'Binary Search Trees', 'Linked Lists', 'Algorithms', 'Memory Management'],
    repoUrl: 'https://github.com/stefanutc1/proiecte/tree/main/licenta/SD2-Proiect'
  },
  {
    id: 'proj-poo2-plat',
    code: 'POO2-Platforme',
    category: 'systems',
    year: 'Anul 2 · Laboratoare POO',
    titleRo: 'Suita de Platforme de Laborator C++ / MFC (Single & Multiple Document Interface)',
    titleEn: 'C++ / MFC Laboratory Platforms Suite (SDI & MDI Applications)',
    descRo:
      'Seria completă de proiecte de laborator (Lab 2 – Lab 9 MDI) în C++ și Microsoft Foundation Classes, acoperind arhitecturi SDI/MDI, controale grafice GDI, serializare și tratarea mesajelor Windows.',
    descEn:
      'Complete series of C++ and Microsoft Foundation Classes laboratory platforms (Lab 2 – Lab 9 MDI) covering SDI/MDI architectures, GDI rendering, serialization, and Win32 message maps.',
    highlightsRo: [
      'Aplicații Multiple Document Interface (MDI) cu desenare vectorială GDI și gestiune multi-fereastră.',
      'Ierarhii de clase polimorfice și persistență pe disc prin CArchive.'
    ],
    highlightsEn: [
      'Multiple Document Interface (MDI) applications featuring GDI vector drawing and multi-window state.',
      'Polymorphic class hierarchies and disk persistence via CArchive.'
    ],
    tags: ['C++', 'MFC SDI/MDI', 'Win32 GDI', 'CArchive'],
    repoUrl: 'https://github.com/stefanutc1/proiecte/tree/main/licenta/POO2-Platforme'
  },
  {
    id: 'proj-pc1',
    code: 'PC1-Platforme',
    category: 'systems',
    year: 'Anul 1 · Programare',
    titleRo: 'Platforme .NET WinForms în C# și Visual Basic',
    titleEn: '.NET WinForms Desktop Applications in C# & Visual Basic',
    descRo:
      'Colecție de 10 platforme software dezvoltate în anul 1 utilizând .NET Framework, C# și Visual Basic pentru algoritmică, procesare matricială, calcule economice și interfețe grafice.',
    descEn:
      'Collection of 10 desktop software platforms developed in Year 1 using .NET Framework, C#, and Visual Basic covering algorithmic problem-solving, matrix computation, financial formulas, and GUI design.',
    highlightsRo: [
      '10 proiecte Visual Studio complete cu interfețe WinForms și validare a datelor de intrare.',
      'Implementarea algoritmilor fundamentali de calcul economic și statistic.'
    ],
    highlightsEn: [
      '10 complete Visual Studio solutions featuring WinForms GUIs and input validation.',
      'Implementation of core financial, statistical, and matrix algorithms.'
    ],
    tags: ['C#', 'Visual Basic', '.NET WinForms', 'Visual Studio'],
    repoUrl: 'https://github.com/stefanutc1/proiecte/tree/main/licenta/PC1-Platforme'
  },
  {
    id: 'proj-pell3-apsi-gbd-pw',
    code: 'Anul 3 · Platforme & Practică',
    category: 'web',
    year: 'Anul 3 · 2025–2026',
    titleRo: 'Platforme Anul 3: PW3 (Web), APSI3 (Arhitectură UML), GBD3 (Baze de Date) & PELL3',
    titleEn: 'Year 3 Suite: PW3 (Web), APSI3 (UML Architecture), GBD3 (DB Admin) & PELL3',
    descRo:
      'Modulele academice din anul terminal de licență: Programare Web (PW3), Analiza și Proiectarea Sistemelor Informaționale (APSI3), Gestiunea Bazelor de Date (GBD3) și stagiul de Practică Anul 3 (PELL3).',
    descEn:
      'Final-year academic modules: Web Programming (PW3), Information Systems Analysis & UML Design (APSI3), Database Administration (GBD3), and Year 3 Specialty Practice (PELL3).',
    highlightsRo: [
      'Structură organizată în monorepo-ul stefanutc1/proiecte cu verificare automată prin GitHub Actions.',
      'Integrare cu ecosistemul lucrării de licență LL3-LucrareLicenta.'
    ],
    highlightsEn: [
      'Organized within the stefanutc1/proiecte monorepo with automated GitHub Actions verification.',
      'Integrated with the LL3-LucrareLicenta bachelor thesis ecosystem.'
    ],
    tags: ['HTML5 / CSS3 / JS', 'UML Architecture', 'PL/SQL & DB Admin', 'Technical Documentation'],
    repoUrl: 'https://github.com/stefanutc1/proiecte/tree/main/licenta'
  }
];

const TECH_STACK_PILLARS = [
  {
    titleRo: 'Infrastructură, Virtualizare & IaC',
    titleEn: 'Infrastructure, Virtualization & IaC',
    subtitleRo: 'Bare-Metal · Multi-Cluster · GitOps',
    subtitleEn: 'Bare-Metal · Multi-Cluster · GitOps',
    items: [
      'Proxmox VE 9.2 (x86_64 & ARM64)',
      'KVM / QEMU (VirtIO Ballooning & PCIe Passthrough)',
      'LXC Unprivileged & Nested Docker',
      'Terraform (bpg/proxmox, AWS, GCP, Azure)',
      'Ansible (18 Playbooks, 15 Modular Roles)',
      'Kubernetes (k3s / k0s) & Cilium CNI',
      'NixOS Declarative System Configuration',
      'OpenMediaVault NAS (ZFS / NFSv4 / SMB3)'
    ]
  },
  {
    titleRo: 'Cybersecurity, Rețele & DFIR',
    titleEn: 'Cybersecurity, Networking & DFIR',
    subtitleRo: 'Zero-Trust · SIEM/XDR · Threat Intel',
    subtitleEn: 'Zero-Trust · SIEM/XDR · Threat Intel',
    items: [
      'OPNsense 24.7 Firewall & 802.1Q VLANs',
      'Suricata DPI IDS/IPS & CrowdSec Bouncers',
      'Wazuh SIEM / XDR 4.14 & OpenSearch',
      'Unbound DNSSEC Sinkhole (8,255+ IoCs)',
      'Active Directory Lab (Win Server 2012–2022)',
      'WireGuard Kernel Mesh & Tailscale Zero-Trust',
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
      'Python 3.11 (FastAPI, Pytest, Threat Automation)',
      'Java 17 & Spring Boot 3.2 (Core-Banking REST API)',
      'TypeScript 5.7, Angular 20, Next.js 15 & React 19',
      'C++ (STL, Structuri de Date, Win32 / MFC)',
      'C# & Visual Basic (.NET WinForms)',
      'PostgreSQL, MySQL 8.0 & SQLite WAL (ACID Ledgers)',
      'C / C++ Bare-Metal ESP32 Firmware (I2C, Telemetry)',
      'LaTeX (Academic Publishing & Automated CI PDF)'
    ]
  },
  {
    titleRo: 'Observabilitate & DevSecOps CI/CD',
    titleEn: 'Observability & DevSecOps CI/CD',
    subtitleRo: 'Telemetrie · SAST/DAST · Quality Gates',
    subtitleEn: 'Telemetry · SAST/DAST · Quality Gates',
    items: [
      'Prometheus TSDB & Alertmanager Rules',
      'Grafana Enterprise Dashboards & Grafana Loki',
      'Telegraf, Node Exporter & Scrutiny SMART',
      'GitHub Actions Multi-Stage CI/CD Pipelines',
      'Gitleaks v2 & TruffleHog Secret Scanning',
      'Aqua Trivy, Checkov IaC & Bandit SAST',
      'Open Policy Agent (OPA Rego Policies)',
      'Ollama Local GPU Inference (GTX 1050 Ti)'
    ]
  }
];

// Application State
let currentLang = localStorage.getItem('stefanut_lang') || 'ro';
let currentTheme = localStorage.getItem('stefanut_theme') || 'dark';
let currentProjectFilter = 'all';

function applyTheme() {
  const html = document.documentElement;
  if (currentTheme === 'light') {
    html.classList.remove('dark');
    html.classList.add('light');
  } else {
    html.classList.remove('light');
    html.classList.add('dark');
  }
  const iconDark = document.getElementById('theme-icon-dark');
  const iconLight = document.getElementById('theme-icon-light');
  if (iconDark && iconLight) {
    iconDark.classList.toggle('hidden', currentTheme === 'light');
    iconLight.classList.toggle('hidden', currentTheme === 'dark');
  }
}

function toggleTheme() {
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('stefanut_theme', currentTheme);
  applyTheme();
}

function toggleLanguage() {
  currentLang = currentLang === 'ro' ? 'en' : 'ro';
  localStorage.setItem('stefanut_lang', currentLang);
  renderAll();
}

function t(key) {
  return I18N[currentLang][key] || key;
}

function renderStaticTranslations() {
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (I18N[currentLang][key]) {
      el.textContent = I18N[currentLang][key];
    }
  });
  const searchInput = document.getElementById('cmd-search-input');
  if (searchInput) {
    searchInput.placeholder = t('searchPlaceholder');
  }
  const langBtn = document.getElementById('lang-toggle-label');
  if (langBtn) {
    langBtn.textContent = currentLang.toUpperCase();
  }
}

function renderFlagshipSection() {
  const container = document.getElementById('flagship-grid');
  if (!container) return;

  container.innerHTML = FLAGSHIP_PLATFORMS.map((item) => {
    const title = currentLang === 'ro' ? item.titleRo : item.titleEn;
    const subtitle = currentLang === 'ro' ? item.subtitleRo : item.subtitleEn;
    const desc = currentLang === 'ro' ? item.descRo : item.descEn;
    const highlights = currentLang === 'ro' ? item.highlightsRo : item.highlightsEn;

    return `
      <article class="surface-card surface-card-interactive rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
        <div>
          <div class="flex flex-wrap items-center justify-between gap-2 mb-4">
            <span class="font-mono-tech text-[11px] uppercase tracking-wider px-3 py-1 rounded-full pill-badge">
              ${item.code}
            </span>
            <div class="flex items-center gap-2">
              <a href="${item.liveUrl}" target="_blank" rel="noopener noreferrer"
                 class="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-slate-100 text-slate-950 hover:bg-white transition">
                <span>${t('btnLive')}</span>
                <span>↗</span>
              </a>
              <a href="${item.repoUrl}" target="_blank" rel="noopener noreferrer"
                 class="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium pill-badge hover:border-slate-500 transition">
                <span>GitHub</span>
                <span>↗</span>
              </a>
            </div>
          </div>

          <h3 class="font-editorial text-2xl sm:text-3xl font-normal tracking-tight mb-1.5">
            ${title}
          </h3>
          <p class="text-xs sm:text-sm font-medium text-slate-400 mb-4">
            ${subtitle}
          </p>
          <p class="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
            ${desc}
          </p>

          <!-- Metrics Bar -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
            ${item.metrics
              .map(
                (m) => `
              <div class="p-3 rounded-2xl pill-badge">
                <div class="font-mono-tech text-base sm:text-lg font-semibold text-slate-100">${m.value}</div>
                <div class="text-[11px] text-slate-400 mt-0.5">${currentLang === 'ro' ? m.labelRo : m.labelEn}</div>
              </div>
            `
              )
              .join('')}
          </div>

          <!-- Highlights -->
          <ul class="space-y-2 mb-6 text-xs text-slate-300">
            ${highlights
              .map(
                (h) => `
              <li class="flex items-start gap-2.5 leading-relaxed">
                <span class="text-slate-400 mt-0.5">▹</span>
                <span>${h}</span>
              </li>
            `
              )
              .join('')}
          </ul>
        </div>

        <div class="pt-4 border-t border-white/10 flex flex-wrap gap-1.5">
          ${item.tags
            .map(
              (tag) => `
            <span class="font-mono-tech text-[11px] px-2.5 py-1 rounded-lg pill-badge">${tag}</span>
          `
            )
            .join('')}
        </div>
      </article>
    `;
  }).join('');
}

function renderCyberSection() {
  const container = document.getElementById('cyber-grid');
  if (!container) return;

  container.innerHTML = CYBER_DOSSIERS.map((item) => {
    const category = currentLang === 'ro' ? item.categoryRo : item.categoryEn;
    const title = currentLang === 'ro' ? item.titleRo : item.titleEn;
    const desc = currentLang === 'ro' ? item.descRo : item.descEn;

    return `
      <article onclick="openItemModal('cyber', '${item.id}')"
               class="surface-card surface-card-interactive cursor-pointer rounded-2xl p-6 flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between gap-2 mb-3">
            <span class="font-mono-tech text-[11px] font-semibold text-slate-300">${item.id}</span>
            <span class="font-mono-tech text-[10px] px-2.5 py-0.5 rounded-full pill-badge">${item.badge}</span>
          </div>
          <div class="text-[11px] uppercase tracking-wider text-slate-400 mb-1">${category}</div>
          <h3 class="text-base sm:text-lg font-semibold text-slate-100 leading-snug mb-2.5">
            ${title}
          </h3>
          <p class="text-xs text-slate-300 leading-relaxed mb-4">
            ${desc}
          </p>
        </div>

        <div>
          <div class="flex flex-wrap gap-1.5 mb-4">
            ${item.tags
              .slice(0, 4)
              .map(
                (tag) => `
              <span class="font-mono-tech text-[10px] px-2 py-0.5 rounded-md pill-badge">${tag}</span>
            `
              )
              .join('')}
          </div>
          <div class="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
            <span class="font-medium">${t('btnDetails')}</span>
            <span class="font-mono-tech text-[11px] text-slate-400">Dossier ↗</span>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

function renderClusterSection() {
  const container = document.getElementById('cluster-grid');
  if (!container) return;

  container.innerHTML = CLUSTER_NODES.map((node) => {
    const role = currentLang === 'ro' ? node.roleRo : node.roleEn;
    return `
      <div class="surface-card rounded-2xl p-5 sm:p-6 flex flex-col justify-between">
        <div>
          <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
            <div class="flex items-center gap-2.5">
              <span class="relative flex h-2.5 w-2.5">
                <span class="status-dot-pulse relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
              </span>
              <h4 class="font-semibold text-sm sm:text-base text-slate-100">${node.name}</h4>
            </div>
            <span class="font-mono-tech text-[11px] px-2.5 py-0.5 rounded-md pill-badge">${node.ip}</span>
          </div>
          <div class="font-mono-tech text-[11px] text-slate-400 mb-3">${node.specs}</div>
          <p class="text-xs text-slate-300 leading-relaxed">${role}</p>
        </div>
      </div>
    `;
  }).join('');
}

function setProjectFilter(filter) {
  currentProjectFilter = filter;
  renderProjectsSection();
}

function renderProjectsSection() {
  const filterBar = document.getElementById('project-filters');
  if (filterBar) {
    const filters = [
      { id: 'all', label: t('filterAll') },
      { id: 'flagship', label: t('filterFlagship') },
      { id: 'web', label: t('filterWeb') },
      { id: 'systems', label: t('filterSystems') },
      { id: 'datanet', label: t('filterDataNet') }
    ];
    filterBar.innerHTML = filters
      .map(
        (f) => `
      <button onclick="setProjectFilter('${f.id}')"
              class="px-3.5 py-1.5 rounded-xl text-xs font-medium transition ${
                currentProjectFilter === f.id
                  ? 'bg-slate-200 text-slate-950 font-semibold shadow-sm'
                  : 'pill-badge hover:border-slate-500'
              }">
        ${f.label}
      </button>
    `
      )
      .join('');
  }

  const container = document.getElementById('projects-grid');
  if (!container) return;

  const filtered =
    currentProjectFilter === 'all'
      ? ACADEMIC_PROJECTS
      : ACADEMIC_PROJECTS.filter((p) => p.category === currentProjectFilter);

  container.innerHTML = filtered
    .map((proj) => {
      const title = currentLang === 'ro' ? proj.titleRo : proj.titleEn;
      const desc = currentLang === 'ro' ? proj.descRo : proj.descEn;
      return `
        <article onclick="openItemModal('project', '${proj.id}')"
                 class="surface-card surface-card-interactive cursor-pointer rounded-2xl p-6 flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between gap-2 mb-3">
              <span class="font-mono-tech text-xs font-semibold text-slate-200">${proj.code}</span>
              <span class="font-mono-tech text-[10px] px-2.5 py-0.5 rounded-full pill-badge">${proj.year}</span>
            </div>
            <h3 class="text-base font-semibold text-slate-100 leading-snug mb-2">
              ${title}
            </h3>
            <p class="text-xs text-slate-300 leading-relaxed mb-4">
              ${desc}
            </p>
          </div>

          <div>
            <div class="flex flex-wrap gap-1.5 mb-4">
              ${proj.tags
                .map(
                  (tag) => `
                <span class="font-mono-tech text-[10px] px-2 py-0.5 rounded-md pill-badge">${tag}</span>
              `
                )
                .join('')}
            </div>
            <div class="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
              <span>${t('btnDetails')}</span>
              <span class="font-mono-tech text-[11px] text-slate-400">${t('btnRepo')} ↗</span>
            </div>
          </div>
        </article>
      `;
    })
    .join('');
}

function renderStackSection() {
  const container = document.getElementById('stack-grid');
  if (!container) return;

  container.innerHTML = TECH_STACK_PILLARS.map((pillar) => {
    const title = currentLang === 'ro' ? pillar.titleRo : pillar.titleEn;
    const sub = currentLang === 'ro' ? pillar.subtitleRo : pillar.subtitleEn;

    return `
      <div class="surface-card rounded-2xl p-6">
        <div class="font-mono-tech text-[11px] uppercase tracking-wider text-slate-400 mb-1">${sub}</div>
        <h3 class="text-base sm:text-lg font-semibold text-slate-100 mb-4">${title}</h3>
        <ul class="space-y-2 text-xs text-slate-300">
          ${pillar.items
            .map(
              (item) => `
            <li class="flex items-center gap-2.5">
              <span class="h-1.5 w-1.5 rounded-full bg-slate-400 shrink-0"></span>
              <span>${item}</span>
            </li>
          `
            )
            .join('')}
        </ul>
      </div>
    `;
  }).join('');
}

function openItemModal(type, id) {
  const modal = document.getElementById('detail-modal');
  const content = document.getElementById('detail-modal-body');
  if (!modal || !content) return;

  let item = null;
  if (type === 'cyber') {
    item = CYBER_DOSSIERS.find((d) => d.id === id);
  } else {
    item = ACADEMIC_PROJECTS.find((p) => p.id === id);
  }
  if (!item) return;

  const title = currentLang === 'ro' ? item.titleRo : item.titleEn;
  const desc = currentLang === 'ro' ? item.descRo : item.descEn;
  const highlights = currentLang === 'ro' ? item.highlightsRo : item.highlightsEn;
  const codeOrId = item.code || item.id;
  const badgeOrYear = item.badge || item.year;

  content.innerHTML = `
    <div class="flex items-center justify-between gap-2 mb-3">
      <span class="font-mono-tech text-xs px-3 py-1 rounded-full pill-badge">${codeOrId}</span>
      <span class="font-mono-tech text-xs text-slate-400">${badgeOrYear}</span>
    </div>
    <h3 class="font-editorial text-2xl sm:text-3xl font-normal text-slate-100 mb-3">${title}</h3>
    <p class="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">${desc}</p>

    <div class="mb-6">
      <h4 class="font-mono-tech text-xs uppercase tracking-wider text-slate-400 mb-3">${t('modalArchHighlights')}</h4>
      <ul class="space-y-2 text-xs sm:text-sm text-slate-300">
        ${highlights
          .map(
            (h) => `
          <li class="flex items-start gap-2.5 leading-relaxed">
            <span class="text-slate-400 mt-0.5">▹</span>
            <span>${h}</span>
          </li>
        `
          )
          .join('')}
      </ul>
    </div>

    <div class="mb-6">
      <h4 class="font-mono-tech text-xs uppercase tracking-wider text-slate-400 mb-2.5">${t('modalTechStack')}</h4>
      <div class="flex flex-wrap gap-1.5">
        ${item.tags
          .map(
            (tag) => `
          <span class="font-mono-tech text-xs px-2.5 py-1 rounded-lg pill-badge">${tag}</span>
        `
          )
          .join('')}
      </div>
    </div>

    <div class="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
      <div class="flex flex-wrap items-center gap-2.5">
        <a href="${item.repoUrl}" target="_blank" rel="noopener noreferrer"
           class="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-100 text-slate-950 hover:bg-white transition">
          <span>${t('btnRepo')} (GitHub)</span>
          <span>↗</span>
        </a>
        ${
          item.liveUrl
            ? `<a href="${item.liveUrl}" target="_blank" rel="noopener noreferrer"
                  class="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-medium pill-badge hover:border-slate-400 transition">
                <span>${t('btnLive')}</span>
                <span>↗</span>
              </a>`
            : ''
        }
        ${
          item.pdfUrl
            ? `<a href="${item.pdfUrl}" target="_blank" rel="noopener noreferrer"
                  class="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-medium pill-badge hover:border-slate-400 transition">
                <span>PDF Report</span>
                <span>↗</span>
              </a>`
            : ''
        }
      </div>
      <button onclick="closeItemModal()" class="px-4 py-2 rounded-xl text-xs font-medium pill-badge hover:border-slate-400">
        ${t('modalClose')}
      </button>
    </div>
  `;

  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closeItemModal() {
  const modal = document.getElementById('detail-modal');
  if (!modal) return;
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}

// Command Palette (⌘K / Ctrl+K)
function openCommandPalette() {
  const modal = document.getElementById('cmd-modal');
  const input = document.getElementById('cmd-search-input');
  if (!modal) return;
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  renderCommandResults('');
  if (input) {
    input.value = '';
    setTimeout(() => input.focus(), 50);
  }
}

function closeCommandPalette() {
  const modal = document.getElementById('cmd-modal');
  if (!modal) return;
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}

function renderCommandResults(query) {
  const list = document.getElementById('cmd-results');
  if (!list) return;
  const q = (query || '').trim().toLowerCase();

  const entries = [
    ...FLAGSHIP_PLATFORMS.map((f) => ({
      type: 'FLAGSHIP',
      title: currentLang === 'ro' ? f.titleRo : f.titleEn,
      sub: f.code,
      url: f.liveUrl
    })),
    ...CYBER_DOSSIERS.map((d) => ({
      type: 'DFIR',
      title: currentLang === 'ro' ? d.titleRo : d.titleEn,
      sub: `${d.id} · ${d.badge}`,
      action: () => {
        closeCommandPalette();
        openItemModal('cyber', d.id);
      }
    })),
    ...ACADEMIC_PROJECTS.map((p) => ({
      type: 'PROJECT',
      title: currentLang === 'ro' ? p.titleRo : p.titleEn,
      sub: `${p.code} · ${p.tags.join(', ')}`,
      action: () => {
        closeCommandPalette();
        openItemModal('project', p.id);
      }
    }))
  ];

  const matched = q
    ? entries.filter((e) => e.title.toLowerCase().includes(q) || e.sub.toLowerCase().includes(q))
    : entries;

  list.innerHTML = matched
    .map((item, idx) => {
      return `
        <button data-cmd-idx="${idx}"
                class="w-full text-left px-4 py-3 rounded-xl hover:bg-white/5 flex items-center justify-between gap-3 transition">
          <div>
            <div class="text-xs sm:text-sm font-medium text-slate-100">${item.title}</div>
            <div class="font-mono-tech text-[11px] text-slate-400">${item.sub}</div>
          </div>
          <span class="font-mono-tech text-[10px] px-2 py-0.5 rounded pill-badge shrink-0">${item.type}</span>
        </button>
      `;
    })
    .join('');

  list.querySelectorAll('button[data-cmd-idx]').forEach((btn) => {
    const idx = Number(btn.getAttribute('data-cmd-idx'));
    const entry = matched[idx];
    btn.addEventListener('click', () => {
      if (entry.action) {
        entry.action();
      } else if (entry.url) {
        window.open(entry.url, '_blank', 'noopener');
        closeCommandPalette();
      }
    });
  });
}

// Interactive Terminal Console
function executeTerminalCommand(rawCmd) {
  const output = document.getElementById('terminal-output');
  if (!output) return;

  const cmd = rawCmd.trim().toLowerCase();
  if (!cmd) return;

  if (cmd === 'clear') {
    output.innerHTML = '';
    return;
  }

  let responseHtml = '';
  if (cmd === 'help') {
    responseHtml = `
      <div class="text-slate-300 space-y-1">
        <div>Available commands:</div>
        <div>  <span class="text-emerald-400">whoami</span>    — Engineer profile & academic affiliation</div>
        <div>  <span class="text-emerald-400">fleet</span>     — Live Proxmox VE 9.2 cluster nodes & VLANs</div>
        <div>  <span class="text-emerald-400">dfir</span>      — Published cybersecurity & forensic investigations</div>
        <div>  <span class="text-emerald-400">projects</span>  — Bachelor thesis & software portfolio</div>
        <div>  <span class="text-emerald-400">stack</span>     — Technical capabilities summary</div>
        <div>  <span class="text-emerald-400">clear</span>     — Clear terminal buffer</div>
      </div>`;
  } else if (cmd === 'whoami') {
    responseHtml = `
      <div class="text-slate-300">
        <div><strong>Moană Ștefănuț-Cornel</strong> (@stefanutc1)</div>
        <div>Role: Infrastructure & DevSecOps Architect · Cybersecurity & DFIR Researcher</div>
        <div>Institution: Universitatea din Craiova — FEAA (Informatică Economică, 2026)</div>
        <div>Thesis: Arhitectura și Securitatea Sistemelor Informatice Bancare</div>
      </div>`;
  } else if (cmd === 'fleet') {
    responseHtml = `
      <div class="text-slate-300 space-y-1">
        <div>[NODE 1] pve (x86_64)       192.168.1.132  i3-10100F · 12GB DDR4 + 6GB ZRAM · GTX 1050 Ti  [ONLINE]</div>
        <div>[NODE 2] openmediavault     192.168.1.199  Dedicated NAS · NFSv4/SMB3 · SMART Telemetry    [ONLINE]</div>
        <div>[NODE 3] pve-arm64          192.168.1.140  Apple Silicon ARM64 · High-Efficiency LXC       [ONLINE]</div>
        <div>[NODE 4] kubernetes (k3s)   192.168.1.150  Bare-Metal Edge Worker · Cilium · ArgoCD        [ONLINE]</div>
        <div>[GATEWAY] OPNsense 24.7     192.168.1.134  5x 802.1Q VLANs · Suricata IPS · CrowdSec       [ACTIVE]</div>
      </div>`;
  } else if (cmd === 'dfir') {
    responseHtml = `
      <div class="text-slate-300 space-y-1">
        <div>• SEC-2026-ECOM-005: Media Galaxy Phishing & yiyangsaas.com C2 (30 exhibits · DNSC #178465)</div>
        <div>• SEC-2026-VISH-002: Revolut FinTech Vishing & Live OTP Relay Forensics</div>
        <div>• SEC-2026-TASK-003: Task Scam Platform Unauthenticated API & SQLi Analysis</div>
        <div>• SEC-2025-AITM-004: Steam OpenID Browser-in-the-Middle (BitM) Reverse Proxy</div>
        <div>• SEC-2025-MRR-001 : TikTok Algorithmic MRR Marketing Funnel OSINT</div>
      </div>`;
  } else if (cmd === 'projects') {
    responseHtml = `
      <div class="text-slate-300 space-y-1">
        <div>• LL3-LucrareLicenta : Core-Banking (Spring Boot 3.2 + Python 3.11 + MITRE ATT&CK Simulator)</div>
        <div>• PS2-Practica       : Weather Telemetry Web App (Next.js 15 + React 19 + TypeScript)</div>
        <div>• POO2-Proiect/Plat  : C++ / Microsoft Foundation Classes (MFC) Desktop Suite</div>
        <div>• BD2 / RC2 / SD2    : MySQL 8.0 Relational DB · Cisco VLAN Topologies · C++ BST & Algorithms</div>
      </div>`;
  } else if (cmd === 'stack') {
    responseHtml = `
      <div class="text-slate-300">
        <div>IaC & Infra : Proxmox VE 9.2, Terraform (57 files), Ansible (18 playbooks), Docker, k3s, NixOS</div>
        <div>Security    : OPNsense, Wazuh SIEM, Suricata DPI, CrowdSec, WireGuard, Active Directory</div>
        <div>Languages   : Python 3.11, Java 17 (Spring Boot), TypeScript (Angular 20 / Next.js 15), C++, C#, SQL</div>
      </div>`;
  } else {
    responseHtml = `<div class="text-amber-400">Command not recognized: "${cmd}". Type <span class="underline">help</span> for available commands.</div>`;
  }

  const entry = document.createElement('div');
  entry.className = 'space-y-1 pt-2 border-t border-white/5';
  entry.innerHTML = `
    <div class="text-slate-400"><span class="text-emerald-400">stefanut@datacenter:~$</span> ${rawCmd}</div>
    ${responseHtml}
  `;
  output.appendChild(entry);
  output.scrollTop = output.scrollHeight;
}

function renderAll() {
  renderStaticTranslations();
  renderFlagshipSection();
  renderCyberSection();
  renderClusterSection();
  renderProjectsSection();
  renderStackSection();
}

document.addEventListener('DOMContentLoaded', () => {
  applyTheme();
  renderAll();

  const cmdInput = document.getElementById('cmd-search-input');
  if (cmdInput) {
    cmdInput.addEventListener('input', (e) => renderCommandResults(e.target.value));
  }

  const termForm = document.getElementById('terminal-form');
  const termInput = document.getElementById('terminal-input');
  if (termForm && termInput) {
    termForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const val = termInput.value;
      termInput.value = '';
      executeTerminalCommand(val);
    });
  }

  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      openCommandPalette();
    } else if (e.key === 'Escape') {
      closeCommandPalette();
      closeItemModal();
    }
  });
});
