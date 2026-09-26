export interface BlogSection {
  headingRo: string;
  headingEn: string;
  paragraphsRo: string[];
  paragraphsEn: string[];
  codeBlock?: {
    language: string;
    caption: string;
    code: string;
  };
  calloutRo?: string;
  calloutEn?: string;
}

export interface BlogPost {
  slug: string;
  id: string;
  featured?: boolean;
  dateRo: string;
  dateEn: string;
  readTime: string;
  category: 'dfir' | 'fintech' | 'infra' | 'ctf';
  categoryLabelRo: string;
  categoryLabelEn: string;
  titleRo: string;
  titleEn: string;
  subtitleRo: string;
  subtitleEn: string;
  excerptRo: string;
  excerptEn: string;
  tags: string[];
  repoUrl: string;
  liveUrl?: string;
  sections: BlogSection[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'mediagalaxy-phishing-dfir-yiyangsaas-dnsc-takedown',
    id: 'POST-01 · SEC-2026-ECOM-005',
    featured: true,
    dateRo: '24 Septembrie 2026',
    dateEn: 'September 24, 2026',
    readTime: '12 min read',
    category: 'dfir',
    categoryLabelRo: 'DFIR & Threat Intelligence',
    categoryLabelEn: 'DFIR & Threat Intelligence',
    titleRo:
      'Anatomia unei campanii de fraudă e-commerce (Media Galaxy Spoofing): De la reclama sponsorizată pe TikTok la infrastructura C2 yiyangsaas.com și blocarea națională DNSC',
    titleEn:
      'Anatomy of an E-Commerce Fraud Campaign (Media Galaxy Spoofing): From Sponsored TikTok Ads to yiyangsaas.com C2 and National DNSC Blacklisting',
    subtitleRo:
      'Investigație criminalistică end-to-end pe 30 de probe digitale: subdomenii olandeze compromise, recoltare de carduri, descriptori bancari fantomă și tactici psihologice de amânare a disputelor chargeback.',
    subtitleEn:
      'End-to-end forensic investigation across 30 digital exhibits: hijacked Dutch subdomains, payment card skimming, rogue merchant descriptors, and chargeback stalling tactics.',
    excerptRo:
      'Cum pornește o fraudă financiară de la o reclamă pe TikTok și Facebook care promite un espressor Philips la 51 RON și ajunge într-o platformă SaaS de phishing din Yunnan, China. În acest articol parcurg toți pașii investigației SEC-2026-ECOM-005, de la izolarea în sandbox Chrome până la notificarea oficială DNSC (#178465).',
    excerptEn:
      'How a financial fraud campaign starts from a sponsored TikTok/Facebook ad promising a 51 RON coffee machine and routes victims into a phishing-as-a-service C2 in Yunnan, China. A full walkthrough of investigation SEC-2026-ECOM-005, from headless sandbox probing to national DNSC blacklisting (#178465).',
    tags: ['DFIR', 'Phishing C2', 'DNSC #178465', 'yiyangsaas.com', 'Headless Sandbox', 'Payment Fraud'],
    repoUrl: 'https://github.com/stefanutc1/infrastructure/tree/main/cyber/mediagalaxy-ecommerce-fraud-forensics',
    sections: [
      {
        headingRo: '1. Vectorul de Infiltrare: Reclame Sponsorizate și WebView Hijacking',
        headingEn: '1. Ingress Vector: Sponsored Social Lures & In-App WebView Hijacking',
        paragraphsRo: [
          'Campania a debutat pe TikTok și ulterior s-a extins pe Meta (Facebook / Instagram Feed) prin reclame video sponsorizate care imitau identitatea vizuală Media Galaxy România. Cârligul psihologic a fost calibrat precis: un espressor automat Philips la prețul promoțional de 51 RON, condiționat de completarea unui scurt chestionar aniversar.',
          'Când utilizatorul apăsa pe butonul „Aflați mai multe”, pagina nu se deschidea în browserul nativ al telefonului (unde extensiile de securitate sau bara de adresă completă ar fi trădat domeniul), ci în browserul încorporat (In-App WebView) al aplicației sociale, direcționând traficul către subdomeniul compromis mediagalaxy.voetbalshop-nlco.com.'
        ],
        paragraphsEn: [
          'The campaign originated on TikTok and syndicated across Meta (Facebook / Instagram Feeds) using sponsored video ads impersonating Media Galaxy Romania. The psychological hook offered a Philips espresso machine for 51 RON upon completing a short promotional quiz.',
          'Clicking the Call-to-Action launched the landing page inside the social app’s embedded In-App WebView rather than the system browser, hiding the full FQDN bar and routing victims to the hijacked Dutch subdomain mediagalaxy.voetbalshop-nlco.com.'
        ],
        calloutRo:
          'Observație DFIR: Atacatorii au abuzat de reputația unui domeniu comercial olandez legitim (voetbalshop-nlco.com) plasat în spatele proxy-ului Cloudflare (104.16.145.247), creând subdomenii dedicate pentru fiecare brand țintit (mediagalaxy, dm, gonser).',
        calloutEn:
          'DFIR Finding: Threat actors leveraged a compromised Dutch domain (voetbalshop-nlco.com) behind Cloudflare reverse proxies (104.16.145.247), spinning up brand-specific subdomains (mediagalaxy, dm, gonser).'
      },
      {
        headingRo: '2. Probing în Sandbox Izolat și Infrastructura Backend C2 (yiyangsaas.com)',
        headingEn: '2. Airtight Sandbox Probing & Backend C2 Infrastructure (yiyangsaas.com)',
        paragraphsRo: [
          'Pentru a analiza aplicația fără a expune amprenta sistemului local, am rulat sesiuni izolate de Google Chrome în mod headless (--headless=new --incognito) și am inspectat arborele DOM, certificatele TLS și apelurile asincrone XHR/Fetch.',
          'În spatele interfeței clonate Media Galaxy, scripturile de checkout comunicau cu o platformă Phishing-as-a-Service (PaaS) înregistrată în Yunnan, China (yiyangsaas.com, prin registrarul eName Technology Co. Ltd.). Formularul de plată nu procesa o achiziție de 51 RON, ci exfiltra datele complete ale cardului (PAN, dată expirare, CVV) și iniția tranzacții neautorizate către comercianți paravan precum „morvethemi london” și „dreamwardrobe.online”.'
        ],
        paragraphsEn: [
          'To safely inspect the live phishing kit without leaking client telemetry, I executed isolated headless Chrome sessions (--headless=new --incognito) capturing DOM snapshots, TLS certificates, and XHR network traces.',
          'Beneath the cloned Media Galaxy storefront, the checkout scripts communicated with a Chinese Phishing-as-a-Service backend (yiyangsaas.com, registered via eName Technology Co. Ltd. in Yunnan). Rather than charging 51 RON, the skimmer exfiltrated full card data (PAN, expiry, CVV) and routed unauthorized charges through shell merchant descriptors such as "morvethemi london" and "dreamwardrobe.online".'
        ],
        codeBlock: {
          language: 'bash',
          caption: 'Izolarea și interogarea criminalistică a infrastructurii în sandbox + sinkhole DNS',
          code: `# 1. Captură DOM și analiză TLS în profil Chrome efemer
google-chrome --headless=new --incognito \\
  --user-data-dir=/tmp/dfir_sandbox \\
  --dump-dom "https://mediagalaxy.voetbalshop-nlco.com" > dom_capture.html

# 2. Blocare la nivel de rețea în OPNsense Unbound DNS (cyber/mediagalaxy-ecommerce-fraud-forensics/ioc/domains.txt)
mediagalaxy.voetbalshop-nlco.com
*.voetbalshop-nlco.com
yiyangsaas.com
*.worvixglobal.com
*.stridewisetrading.com
trackparcel.de`
        }
      },
      {
        headingRo: '3. Tactica de „Post-Exploitation Stalling”: E-mailuri False de Livrare și TrackParcel.de',
        headingEn: '3. Post-Exploitation Stalling: Fake Delivery Notices & TrackParcel.de',
        paragraphsRo: [
          'Unul dintre cele mai interesante aspecte documentate în probele 28–30 este mecanismul prin care gruparea încearcă să împiedice victima să sune imediat la bancă pentru blocarea cardului și inițierea procedurii de chargeback.',
          'La scurt timp după tranzacție, victima primește confirmări automate de comandă ([229942-177457]) de pe domenii rotative (noreply@email.worvixglobal.com, apoi noreply@email.stridewisetrading.com). Ulterior, primește un „Order Delivery Notice” cu un număr de AWB fictiv (EURO20260918100004917) verificabil pe portalul fals https://www.trackparcel.de/, care afișează un timp estimat de livrare de 10–20 zile lucrătoare și avertizează asupra „întârzierilor vamale”.',
          'Această fereastră artificială de 20 de zile lucrătoare oferă atacatorilor timpul necesar pentru a lichida fondurile din conturile colectoare înainte ca banca emitentă să primească sesizarea de fraudă.'
        ],
        paragraphsEn: [
          'A critical finding documented in Exhibits 28–30 is the psychological stalling mechanism designed to prevent victims from immediately contacting their bank to freeze the card and file a chargeback.',
          'Following the skimmer submission, victims receive automated confirmation emails ([229942-177457]) from rotating SMTP domains (noreply@email.worvixglobal.com and noreply@email.stridewisetrading.com), followed by an "Order Delivery Notice" containing a fabricated tracking code (EURO20260918100004917) linked to https://www.trackparcel.de/.',
          'By claiming a 10–20 business day delivery window and potential customs delays, the syndicate buys critical time to launder stolen funds before the issuing bank processes a fraud dispute.'
        ]
      },
      {
        headingRo: '4. Raportare Oficială CSIRT / DNSC și Neutralizare Națională',
        headingEn: '4. Official CSIRT / DNSC Disclosure & National Takedown',
        paragraphsRo: [
          'Toate probele, capturile de pachete, descriptorii bancari și lista completă de IoC-uri au fost centralizate într-un raport tehnic formal și transmise către Directoratul Național de Securitate Cibernetică (DNSC — Tichet #178465), Google Safe Browsing și Cloudflare Abuse.',
          'În urma raportării, domeniile și subdomeniile asociate au fost introduse în lista neagră națională PNRISC (blacklist.dnsc.ro) și sincronizate automat în propriul firewall OPNsense 24.7 prin scriptul de sinkhole DNS.'
        ],
        paragraphsEn: [
          'All 30 forensic exhibits, network indicators, and merchant descriptors were compiled into a formal Incident Response report and submitted to the Romanian National Cyber Security Directorate (DNSC — Ticket #178465), Google Safe Browsing, and Cloudflare Abuse.',
          'Following the escalation, the malicious FQDNs were added to the national PNRISC blocklist (blacklist.dnsc.ro) and automatically synchronized into my OPNsense 24.7 Unbound DNS sinkhole.'
        ]
      }
    ]
  },
  {
    slug: 'arhitectura-si-securitatea-sistemelor-informatice-bancare-licenta',
    id: 'POST-02 · BACHELOR THESIS',
    featured: true,
    dateRo: '22 Septembrie 2026',
    dateEn: 'September 22, 2026',
    readTime: '15 min read',
    category: 'fintech',
    categoryLabelRo: 'Lucrare de Licență & FinTech Security',
    categoryLabelEn: 'Bachelor Thesis & FinTech Security',
    titleRo:
      'Arhitectura și Securitatea Sistemelor Informatice Bancare: Proiectarea unui Core-Banking Rezilient și Simularea a 5 Vectori MITRE ATT&CK',
    titleEn:
      'Architecture & Security of Banking Information Systems: Engineering a Resilient Core-Banking Platform and Simulating 5 MITRE ATT&CK Vectors',
    subtitleRo:
      'Cum am construit lucrarea de licență la FEAA Craiova: de la motorul contabil în partidă dublă (ACID) și gateway-ul PCI-DSS v4.0 până la lanțul criptografic SHA-256 și poligonul virtualizat Proxmox.',
    subtitleEn:
      'How I engineered my Bachelor’s Thesis at FEAA Craiova: from an ACID double-entry ledger and PCI-DSS v4.0 payment gateway to a SHA-256 hash-chained audit monitor and Proxmox cyber range.',
    excerptRo:
      'O privire detaliată în interiorul lucrării mele de licență (Informatică Economică, 2026): de ce sistemele bancare moderne au nevoie de apărare în profunzime, cum funcționează validarea matematică IBAN MOD-97 și Luhn, și cum am testat reziliența tranzacțională împotriva atacurilor de tip Race Condition Double-Spend și SQL Injection.',
    excerptEn:
      'An inside look at my Bachelor’s Thesis (Business Informatics, 2026): why modern banking platforms require defense-in-depth, how mathematical IBAN MOD-97 and Luhn validations work at the core layer, and how I tested transactional resilience against Race Condition Double-Spend and SQL Injection attacks.',
    tags: ['Java 17', 'Spring Boot 3.2', 'Python 3.11', 'PCI-DSS v4.0', 'MITRE ATT&CK', 'Double-Entry ACID', 'LaTeX'],
    repoUrl: 'https://github.com/stefanutc1/proiecte/tree/main/licenta/LL3-LucrareLicenta',
    liveUrl: 'https://stefanutc1.github.io/proiecte/',
    sections: [
      {
        headingRo: '1. Motivația Arhitecturală: De ce Simpla Validare la Nivel de UI Nu Este Suficientă în Banking',
        headingEn: '1. Architectural Motivation: Why UI-Level Validation Is Never Enough in Banking',
        paragraphsRo: [
          'În proiectarea lucrării de licență la Facultatea de Economie și Administrarea Afacerilor (FEAA — Universitatea din Craiova), mi-am propus să depășesc nivelul unei aplicații CRUD clasice și să construiesc o arhitectură bancară completă, capabilă să garanteze integritatea financiară chiar și în condițiile unui perimetru compromis.',
          'Sistemul este împărțit în patru componente izolate (reflectate atât în codul sursă, cât și în mașinile virtuale Proxmox VM 310–313): (1) Core-Banking Service cu registru contabil în partidă dublă, (2) Payment Gateway conform PCI-DSS v4.0, (3) Database Audit Monitor cu lanț criptografic SHA-256 și (4) Simulatorul automatizat de atac și apărare cibernetică.'
        ],
        paragraphsEn: [
          'When designing my Bachelor’s Thesis at the Faculty of Economics and Business Administration (FEAA — University of Craiova), my goal was to go far beyond a standard CRUD web app and engineer a defense-in-depth banking architecture capable of guaranteeing financial integrity under active adversarial pressure.',
          'The platform is structured into four decoupled subsystems (mirrored across Proxmox VMs 310–313): (1) Double-Entry Core-Banking Service, (2) PCI-DSS v4.0 Payment Gateway, (3) SHA-256 Hash-Chained Database Audit Monitor, and (4) Automated MITRE ATT&CK Cyber Simulator.'
        ]
      },
      {
        headingRo: '2. Motorul Core-Banking: Partidă Dublă (Double-Entry), IBAN ISO 13616 și Tranzacții Atomice',
        headingEn: '2. Core-Banking Engine: Double-Entry Bookkeeping, ISO 13616 IBAN & Atomic Locking',
        paragraphsRo: [
          'Orice transfer bancar în sistemul dezvoltat generează simultan două înregistrări contabile în partidă dublă (DEBIT pe contul plătitorului și CREDIT pe contul beneficiarului) în interiorul unei tranzacții SQLite WAL cu blocare exclusivă (BEGIN IMMEDIATE). Astfel, suma algebrică a tuturor mișcărilor din registru este invariant zero.',
          'Înainte de execuție, conturile IBAN sunt validate matematic prin algoritmul ISO 13616 (rearanjarea primelor 4 caractere, conversia literelor în numere A=10..Z=35 și verificarea restului împărțirii la 97 egal cu 1), iar numerele de card sunt verificate prin algoritmul Luhn (ISO/IEC 7812).'
        ],
        paragraphsEn: [
          'Every transfer in the engine generates two balanced double-entry ledger records (DEBIT on the sender and CREDIT on the receiver) inside an atomic SQLite WAL transaction using exclusive write locking (BEGIN IMMEDIATE). The algebraic sum of all ledger movements remains strictly invariant.',
          'Prior to execution, IBANs are mathematically verified via ISO 13616 MOD-97 arithmetic, while payment card PANs are validated via the ISO/IEC 7812 Luhn checksum algorithm.'
        ],
        codeBlock: {
          language: 'python',
          caption: 'Lanț criptografic SHA-256 pentru detecția alterării neautorizate a registrului bancar',
          code: `def compute_entry_hash(prev_hash: str, tx_id: str, account_id: str, amount: float, timestamp: str) -> str:
    """Calculează amprenta SHA-256 înlănțuită cu înregistrarea anterioară (Tamper-Evident Ledger)."""
    payload = f"{prev_hash}|{tx_id}|{account_id}|{amount:.2f}|{timestamp}"
    return hashlib.sha256(payload.encode("utf-8")).hexdigest()`
        }
      },
      {
        headingRo: '3. Cele 5 Scenarii de Atac și Apărare Cibernetică (MITRE ATT&CK)',
        headingEn: '3. The 5 Automated Cyber Attack & Defense Scenarios (MITRE ATT&CK)',
        paragraphsRo: [
          'Pentru a demonstra reziliența arhitecturii, am scris un simulator automatizat (banking_attack_simulator.py) care execută 5 scenarii reale de atac asupra sistemului și verifică matematic mecanismele de apărare:',
          '• Scenariul 1 — Brute-Force & Credential Stuffing (T1110): Dovedește blocarea automată a contului după încercări eșuate și hashing-ul PBKDF2-HMAC-SHA256 cu salt unic.',
          '• Scenariul 2 — SQL Injection pe Autentificare și Căutare (T1190): Testează payload-uri clasice (\' OR \'1\'=\'1\'; DROP TABLE--) blocate de interogări parametrizate și filtre WAF.',
          '• Scenariul 3 — Race Condition / Double-Spend (T1499): Lansează fire de execuție concurente care încearcă să retragă simultan întregul sold; serializarea tranzacțională BEGIN IMMEDIATE permite exact o singură retragere și respinge restul cu fonduri insuficiente.',
          '• Scenariul 4 — Fraud Anomaly Detection (T1657): Motorul euristice de risc blochează tranzacțiile cu valoare atipică sau velocitate ridicată.',
          '• Scenariul 5 — DDoS & API Rate-Limiting: Token-bucket rate limiter care protejează disponibilitatea gateway-ului de plăți.'
        ],
        paragraphsEn: [
          'To empirically validate platform resilience, I built banking_attack_simulator.py, which executes 5 live adversarial scenarios and asserts defensive controls in CI:',
          '• Scenario 1 — Brute-Force & Credential Stuffing (T1110): Verifies automatic account lockout and salted PBKDF2-HMAC-SHA256 password derivation.',
          '• Scenario 2 — SQL Injection (T1190): Fires malicious SQLi payloads blocked by parameterized prepared statements and input sanitization.',
          '• Scenario 3 — Race Condition / Double-Spend (T1499): Spawns concurrent threads attempting to drain a balance simultaneously; BEGIN IMMEDIATE atomic serialization ensures strictly one transaction succeeds.',
          '• Scenario 4 — Heuristic Fraud Detection (T1657): Flags and quarantines high-velocity or anomalous-amount transfers.',
          '• Scenario 5 — DDoS & Token-Bucket Rate Limiting: Protects gateway availability under flood conditions.'
        ],
        calloutRo:
          'Demo Live & Verificare CI: La fiecare git push, GitHub Actions rulează întreaga suită Pytest și JUnit 5, compilează aplicația Spring Boot 3.2, generează PDF-ul tezei din LaTeX și publică terminalul Web Kiosk pe GitHub Pages.',
        calloutEn:
          'Live Demo & CI Gate: On every push, GitHub Actions runs the full Pytest and JUnit 5 suites, builds the Spring Boot 3.2 backend, compiles the LaTeX thesis PDF, and deploys the interactive Web Kiosk.'
      }
    ]
  },
  {
    slug: 'construirea-unui-datacenter-homelab-hibrid-proxmox-opnsense-wazuh',
    id: 'POST-03 · INFRASTRUCTURE & GITOPS',
    featured: true,
    dateRo: '14 Septembrie 2026',
    dateEn: 'September 14, 2026',
    readTime: '10 min read',
    category: 'infra',
    categoryLabelRo: 'Infrastructură, Virtualizare & GitOps',
    categoryLabelEn: 'Infrastructure, Virtualization & GitOps',
    titleRo:
      'Construirea unui Datacenter Homelab Hibrid pe 5 VLAN-uri 802.1Q: Proxmox VE 9.2, OPNsense 24.7, Wazuh SIEM și 57 Module Terraform',
    titleEn:
      'Engineering a Hybrid Homelab Datacenter Across 5 802.1Q VLANs: Proxmox VE 9.2, OPNsense 24.7, Wazuh SIEM, and 57 Terraform Modules',
    subtitleRo:
      'Cum am optimizat 12 GB DDR4 + 6 GB ZRAM și VirtIO Ballooning pe x86_64 alături de noduri ARM64 și Kubernetes k3s pentru a rula peste 30 de mașini virtuale și containere enterprise.',
    subtitleEn:
      'How I optimized 12 GB DDR4 + 6 GB ZRAM and VirtIO Ballooning on x86_64 alongside ARM64 and Kubernetes k3s nodes to run 30+ enterprise VMs and containers.',
    excerptRo:
      'Arhitectura completă a laboratorului meu fizic: de la segmentarea L2/L3 în OPNsense 24.7 și inspecția Suricata DPI până la rularea unui domeniu complet Active Directory (Windows Server 2022/2016/2012), inferență AI locală pe GPU (Ollama GTX 1050 Ti) și validarea automată prin scriptul de audit în 12 piloni.',
    excerptEn:
      'The complete architecture of my physical homelab: from L2/L3 micro-segmentation in OPNsense 24.7 and Suricata DPI inspection to running a multi-forest Active Directory lab, local GPU LLM inference (Ollama GTX 1050 Ti), and 12-pillar automated health auditing.',
    tags: ['Proxmox VE 9.2', 'OPNsense 24.7', 'Terraform', 'Ansible', 'Wazuh SIEM', '802.1Q VLANs', 'ZRAM & Ballooning'],
    repoUrl: 'https://github.com/stefanutc1/infrastructure',
    liveUrl: 'https://stefanutc1.github.io/infrastructure/',
    sections: [
      {
        headingRo: '1. Ingineria Resurselor: Cum Rulezi un Datacenter Enterprise pe Hardware Compact',
        headingEn: '1. Resource Engineering: Running an Enterprise Datacenter on Compact Hardware',
        paragraphsRo: [
          'Una dintre cele mai frumoase provocări inginerești în construirea propriului datacenter a fost maximizarea densității de servicii fără a compromite stabilitatea. Pe nodul principal x86_64 (Intel Core i3-10100F, 12 GB DDR4-2133 MHz), am implementat compresie în memorie ZRAM (6 GB cu algoritm lz4) la nivel de kernel Proxmox VE 9.2 și VirtIO Dynamic Memory Ballooning pe toate mașinile virtuale KVM.',
          'În paralel, containerele de infrastructură (Home Assistant, Scrutiny, Ollama GPU, Uptime Kuma, LGTM Monitoring, OWASP, Wazuh, Media *arr, Immich, NetBox, Keycloak) rulează în containere LXC cu overhead aproape zero, partajând kernelul gazdei.'
        ],
        paragraphsEn: [
          'One of the most rewarding engineering challenges in building my homelab was maximizing workload density without sacrificing stability. On the primary x86_64 hypervisor (Intel Core i3-10100F, 12 GB DDR4-2133 MHz), I configured 6 GB of kernel-level lz4 ZRAM swap and VirtIO Dynamic Memory Ballooning across all KVM virtual machines.',
          'Concurrently, core services (Home Assistant, Scrutiny, Ollama GPU, Uptime Kuma, LGTM Monitoring, OWASP, Wazuh, Media *arr, Immich, NetBox, Keycloak) run inside lightweight LXC containers with near-zero memory overhead.'
        ]
      },
      {
        headingRo: '2. Micro-Segmentare Zero-Trust pe 5 VLAN-uri 802.1Q și Izolare Air-Gapped (vmbr1)',
        headingEn: '2. Zero-Trust Micro-Segmentation Across 5 802.1Q VLANs & Air-Gapped Bridge (vmbr1)',
        paragraphsRo: [
          'Toate fluxurile de rețea sunt guvernate de firewall-ul OPNsense 24.7 (VM 200, 192.168.1.134), care segmentează infrastructura în 5 zone distincte: VLAN 10 (Management), VLAN 20 (Production Services), VLAN 30 (CyberLab & Offensive Range), VLAN 40 (NAS Storage) și VLAN 50 (IoT & ESP32 Telemetry).',
          'Mașinile vulnerabile din poligonul de licență și laboratorul Active Directory (VM 300–304 și VM 400–405) sunt atașate la bridge-ul intern izolat vmbr1 fără uplink fizic direct, iar telemetria lor Sysmon și Auditd este colectată de Wazuh SIEM (CT 106).'
        ],
        paragraphsEn: [
          'All network traffic is governed by OPNsense 24.7 (VM 200, 192.168.1.134), segmenting the cluster into 5 isolated zones: VLAN 10 (Management), VLAN 20 (Production Services), VLAN 30 (CyberLab & Offensive Range), VLAN 40 (NAS Storage), and VLAN 50 (IoT & ESP32 Telemetry).',
          'Vulnerable cyber-range targets and Active Directory lab machines (VMs 300–304 and VMs 400–405) are bound to the isolated internal bridge vmbr1 with zero physical uplinks, while shipping encrypted Sysmon and Auditd telemetry to Wazuh SIEM (CT 106).'
        ],
        codeBlock: {
          language: 'hcl',
          caption: 'Declararea infrastructurii Proxmox VE 9.2 prin providerul modern bpg/proxmox în Terraform',
          code: `resource "proxmox_virtual_environment_container" "enterprise_service" {
  node_name   = "pve"
  vm_id       = 182
  description = "NetBox IPAM & DCIM — Source of Truth"
  unprivileged = false
  features {
    nesting = true
    keyctl  = true
  }
  network_interface {
    name   = "eth0"
    bridge = "vmbr0"
  }
}`
        }
      },
      {
        headingRo: '3. Auditul Automatizat în 12 Piloni (scripts/audit_infrastructure.py)',
        headingEn: '3. The 12-Pillar Automated Health Audit Engine (scripts/audit_infrastructure.py)',
        paragraphsRo: [
          'Pentru a mă asigura că documentația, codul Terraform/Ansible, regulile Suricata și politicile de securitate nu deviază niciodată de la starea reală, am dezvoltat motorul de audit audit_infrastructure.py.',
          'La fiecare commit, acesta verifică 12 piloni critici: IaC (57 fișiere Terraform), Configuration (18 playbook-uri Ansible), Security (Suricata DPI + 8.255 IoC-uri + Wazuh), Secrets (0 chei private necriptate), Networking (conformitate RFC 791 pe 69 IP-uri), Kubernetes, Observability, Backup, Disaster Recovery, Documentation (10 documente + 8 ADR-uri), AI Security și Supply Chain.'
        ],
        paragraphsEn: [
          'To ensure Terraform/Ansible code, Suricata rules, and documentation never drift from production state, I engineered the master audit engine (scripts/audit_infrastructure.py).',
          'On every commit, it validates 12 pillars: IaC (57 Terraform files), Configuration (18 Ansible playbooks), Security (Suricata DPI + 8,255 IoCs + Wazuh), Secrets (zero unencrypted keys), Networking (69 RFC 791 IPs across VLAN boundaries), Kubernetes, Observability, Backup, DR, Documentation (10 core docs + 8 ADRs), AI Security, and Supply Chain.'
        ]
      }
    ]
  },
  {
    slug: 'anatomia-atacurilor-bitm-steam-openid-si-revolut-vishing',
    id: 'POST-04 · SEC-2025-AITM-004 & VISH-002',
    dateRo: '2 Septembrie 2026',
    dateEn: 'September 2, 2026',
    readTime: '9 min read',
    category: 'dfir',
    categoryLabelRo: 'Securitate Ofensivă & Analiză Phishing',
    categoryLabelEn: 'Offensive Security & Phishing Analysis',
    titleRo:
      'Ocolirea Autentificării Multi-Factor: De la Browser-in-the-Middle (BitM) pe Steam OpenID la Vishing-ul cu Releu OTP pe FinTech-uri',
    titleEn:
      'Bypassing Multi-Factor Authentication: From Steam OpenID Browser-in-the-Middle (BitM) to FinTech Real-Time OTP Vishing Relays',
    subtitleRo:
      'Analiza comparativă a două tehnici moderne prin care atacatorii neutralizează protecția 2FA fără a compromite criptografia subiacentă.',
    subtitleEn:
      'Comparative forensic analysis of two modern adversary-in-the-middle techniques that neutralize 2FA protections without breaking underlying cryptography.',
    excerptRo:
      'Autentificarea în doi pași bazată pe coduri TOTP sau SMS este adesea considerată infailibilă de utilizatori. În acest articol compar două investigații reale din portofoliul meu DFIR: ferestrele pop-up simulate în DOM (BitM) și releele vocale IVR/SIP care interceptează codurile OTP în timp real.',
    excerptEn:
      'TOTP and SMS-based two-factor authentication are often perceived as foolproof by end users. This article compares two real-world investigations from my DFIR portfolio: simulated in-DOM Browser-in-the-Middle (BitM) popups and real-time IVR/SIP voice phishing relays.',
    tags: ['BitM / AiTM', 'Vishing Relay', 'Steam OpenID', 'Revolut DFIR', 'WebAuthn / FIDO2'],
    repoUrl: 'https://github.com/stefanutc1/infrastructure/tree/main/cyber/openid-mitm-phishing-forensics',
    sections: [
      {
        headingRo: '1. Tehnica Browser-in-the-Middle (BitM): Fereastra Falsă din Interiorul Paginii',
        headingEn: '1. Browser-in-the-Middle (BitM): The Simulated Window Inside the DOM',
        paragraphsRo: [
          'În investigația SEC-2025-AITM-004, utilizatorii erau invitați pe Discord să voteze o echipă într-un turneu de Counter-Strike 2. La apăsarea butonului „Sign in through Steam”, site-ul nu redirecționa browserul către un domeniu typosquatted (unde utilizatorul ar fi observat o adresă greșită), ci randa un container <div> cu z-index: 999999 care imita la nivel de pixel fereastra pop-up a browserului Chrome, inclusiv lacătul HTTPS și URL-ul oficial steamcommunity.com/openid/login.',
          'Deoarece bara de adresă a ferestrei pop-up era doar un element HTML static în interiorul paginii atacatorului, credențialele și codul Steam Guard introduse erau trimise direct către un server reverse-proxy C2 care autentifica sesiunea în timp real.'
        ],
        paragraphsEn: [
          'In investigation SEC-2025-AITM-004, targets on Discord were invited to vote in a Counter-Strike 2 tournament. Clicking "Sign in through Steam" did not redirect the browser to a typosquatted domain; instead, it rendered a layered <div> with z-index: 999999 that pixel-perfectly simulated a native Chrome popup window—complete with a fake padlock icon and the official steamcommunity.com/openid/login URL.',
          'Because the address bar was merely static HTML inside the parent DOM, entered credentials and Steam Guard codes were relayed directly to a reverse-proxy C2 server.'
        ]
      },
      {
        headingRo: '2. Vishing cu Releu OTP în Timp Real (SEC-2026-VISH-002)',
        headingEn: '2. Real-Time OTP Vishing Relay (SEC-2026-VISH-002)',
        paragraphsRo: [
          'Similar din punct de vedere arhitectural, dar executat pe canal telefonic, atacul analizat în SEC-2026-VISH-002 folosea apeluri automate (IVR) de pe numere românești care avertizau asupra unei plăți suspecte pe Revolut. Dacă ținta apăsa tasta 1, apelul era preluat de un operator care iniția simultan autentificarea pe contul victimei și îi cerea „codul de anulare a tranzacției” primit prin SMS/push.',
          'Concluzia tehnică fundamentală din ambele cazuri: codurile OTP partajabile (TOTP / SMS) nu sunt legate criptografic de originea TLS (Channel Binding). Singura apărare matematică împotriva atacurilor de tip releu / AiTM este autentificarea FIDO2 / WebAuthn (Passkeys), unde semnătura criptografică include domeniul exact al originii.'
        ],
        paragraphsEn: [
          'Architecturally identical but executed over voice channels, the attack in SEC-2026-VISH-002 used automated IVR calls over Romanian SIP trunks warning of an unauthorized Revolut transfer. Pressing 1 connected the target to a live operator who triggered an account login in real time and socially engineered the victim into reading back the "cancellation code".',
          'Key takeaway from both investigations: human-readable OTP codes lack cryptographic origin binding. The definitive countermeasure against AiTM and vishing relays is FIDO2 / WebAuthn, which cryptographically binds authentication assertions to the TLS origin.'
        ]
      }
    ]
  },
  {
    slug: 'decompilarea-unei-platforme-task-scam-api-config-sqli',
    id: 'POST-05 · SEC-2026-TASK-003',
    dateRo: '25 August 2026',
    dateEn: 'August 25, 2026',
    readTime: '8 min read',
    category: 'dfir',
    categoryLabelRo: 'Analiză Aplicații Web & Fraudă',
    categoryLabelEn: 'Web App Recon & Fraud Analysis',
    titleRo:
      'Decompilarea unei Platforme „Task Scam”: Cum Endpoint-ul Neautentificat /api/v1/site/config Demonstrează Blocarea Programatică a Retragerilor',
    titleEn:
      'Decompiling a Task Scam Platform: How the Unauthenticated /api/v1/site/config Endpoint Proves Programmatic Withdrawal Lockouts',
    subtitleRo:
      'Investigație tehnică asupra kiturilor white-label Vue.js + Laravel folosite în fraudele de tip „optimizare produse / rating comercianți”.',
    subtitleEn:
      'Technical investigation into white-label Vue.js + Laravel kits powering "merchant rating / task optimization" deposit traps.',
    excerptRo:
      'Cum funcționează în spate platformele care promit comisioane zilnice pentru „evaluarea produselor”, dar blochează contul victimei într-o serie infinită de „comenzi combo” care necesită depuneri din ce în ce mai mari.',
    excerptEn:
      'How platforms promising daily commissions for "rating e-commerce products" work under the hood, and how inspecting their REST API reveals hardcoded withdrawal lockouts.',
    tags: ['API Forensics', 'Vue.js / Laravel', 'SQL Injection', 'Task Scam DFIR'],
    repoUrl: 'https://github.com/stefanutc1/infrastructure/tree/main/cyber/task-scam-infrastructure-analysis',
    sections: [
      {
        headingRo: '1. Arhitectura Capcanei de Depozit (Deposit Trap)',
        headingEn: '1. Architecture of the Deposit Trap',
        paragraphsRo: [
          'În cadrul investigației SEC-2026-TASK-003, am analizat o platformă de tip „Task Scam” construită pe un stack SPA Vue.js și backend Laravel. După o primă retragere mică permisă pentru câștigarea încrederii (10–20 EUR), algoritmul alocă manual contului o „comandă premium” care depășește soldul curent, forțând victima să depună bani proprii (prin USDT TRC-20 sau transfer bancar) pentru a debloca presupusul comision.',
          'Interogând rutele API din bundle-ul JavaScript decompilat, am descoperit endpoint-ul neautentificat GET /api/v1/site/config care returna în clar parametrii interni ai platformei — inclusiv flag-ul withdraw_enabled: false pentru toate nivelurile VIP superioare.'
        ],
        paragraphsEn: [
          'In investigation SEC-2026-TASK-003, I analyzed a task-scam platform built on Vue.js and Laravel. After allowing a small initial payout (10–20 EUR) to build trust, the backend assigns a "combination task" exceeding the user’s balance, requiring escalating crypto (USDT TRC-20) or fiat deposits to unlock withdrawals.',
          'Decompiling the production JavaScript bundle exposed an unauthenticated GET /api/v1/site/config endpoint returning internal operational flags—including hardcoded withdraw_enabled: false rules for higher VIP tiers.'
        ]
      }
    ]
  },
  {
    slug: 'writeup-complet-invatacyber-ctf-xss-blind-sqli-jinja2-ssti',
    id: 'POST-06 · CTF WRITEUP (100%)',
    dateRo: '19 Septembrie 2026',
    dateEn: 'September 19, 2026',
    readTime: '11 min read',
    category: 'ctf',
    categoryLabelRo: 'CTF Writeup & Exploit Development',
    categoryLabelEn: 'CTF Writeup & Exploit Development',
    titleRo:
      'Writeup Complet InvataCyber.ro CTF (100%): Exploatare Reflected XSS, Inferență Baze de Date prin Blind SQLi și Execuție de Cod prin Jinja2 SSTI',
    titleEn:
      'Complete InvataCyber.ro CTF Writeup (100%): Reflected XSS, Database Inference via Blind SQLi, and RCE via Jinja2 SSTI',
    subtitleRo:
      'Parcurgerea tehnică și scripturile Python de exploatare pentru toate cele trei provocări de securitate web: The Blog, Portal Lockdown și CMS Editor.',
    subtitleEn:
      'Technical walkthrough and automated Python exploit solvers for all three web security challenges: The Blog, Portal Lockdown, and CMS Editor.',
    excerptRo:
      'Cum am rezolvat 100% din provocările InvataCyber.ro CTF: exfiltrarea sesiunii adminului prin XSS pe „The Blog”, extragerea automatizată a schemei SQLite prin Blind SQL Injection pe „Portal Lockdown” și obținerea execuției de cod la distanță (RCE) prin Server-Side Template Injection (SSTI) pe „CMS Editor”.',
    excerptEn:
      'How I solved 100% of the InvataCyber.ro CTF challenges: admin cookie exfiltration via XSS on "The Blog", automated SQLite schema extraction via Blind SQLi on "Portal Lockdown", and Remote Code Execution via Jinja2 SSTI on "CMS Editor".',
    tags: ['CTF Writeup', 'Reflected XSS', 'Blind SQLi', 'Jinja2 SSTI', 'Python Exploit Dev'],
    repoUrl: 'https://github.com/stefanutc1/infrastructure/tree/main/cyber/ctf/19-09-2026',
    sections: [
      {
        headingRo: '1. Provocarea 01 (The Blog): Exfiltrare Sesiune prin Cross-Site Scripting (XSS)',
        headingEn: '1. Challenge 01 (The Blog): Session Exfiltration via Cross-Site Scripting (XSS)',
        paragraphsRo: [
          'Prima provocare a vizat identificarea unui câmp nesanitizat în secțiunea de comentarii/previzualizare a blogului, unde un bot headless cu privilegii de administrator vizita periodic postările trimise.',
          'Am construit un payload JavaScript care citea document.cookie și contextul paginii interne de administrare și le transmitea asincron prin fetch() către un colector controlat, recuperând primul flag.'
        ],
        paragraphsEn: [
          'The first challenge targeted an unsanitized input vector in the blog preview/comment pipeline regularly visited by a headless admin bot.',
          'Crafting a JavaScript payload that read document.cookie and internal admin DOM state and exfiltrated it via fetch() yielded the first flag.'
        ]
      },
      {
        headingRo: '2. Provocarea 02 (Portal Lockdown): Extragerea Schemei SQLite prin Blind SQL Injection',
        headingEn: '2. Challenge 02 (Portal Lockdown): SQLite Schema Extraction via Blind SQLi',
        paragraphsRo: [
          'În „Portal Lockdown”, formularul de autentificare era vulnerabil la SQL Injection, însă nu returna erori de bază de date sau rezultate directe în pagină. Am scris un solver automat în Python (dump_all_schema.py) care a extras caracter cu caracter structura tabelelor din sqlite_master și apoi coloana secretă cu flag-ul.'
        ],
        paragraphsEn: [
          'In "Portal Lockdown", the authentication endpoint was vulnerable to SQL injection without returning verbose errors. I wrote an automated Python solver (dump_all_schema.py) to extract sqlite_master table definitions and dump the flag column.'
        ],
        codeBlock: {
          language: 'python',
          caption: 'Secvență din solver-ul Python pentru interogarea sqlite_master și extragerea flag-ului',
          code: `# Extragerea tabelelor din sqlite_master și interogarea coloanelor țintă
payload = "' UNION SELECT 1, sql, 3 FROM sqlite_master WHERE type='table' --"
resp = session.post(TARGET_URL, data={"username": payload, "password": "x"})`
        }
      },
      {
        headingRo: '3. Provocarea 03 (CMS Editor): Execuție de Cod pe Server prin Jinja2 SSTI',
        headingEn: '3. Challenge 03 (CMS Editor): Remote Code Execution via Jinja2 SSTI',
        paragraphsRo: [
          'În „CMS Editor”, șabloanele introduse de utilizator erau trecute direct în render_template_string() din Flask/Jinja2. Pornind de la confirmarea matematică {{7*7}} -> 49, am traversat ierarhia de obiecte Python (cycler.__init__.__globals__.os.popen) pentru a executa comenzi pe server și a citi fișierul flag.'
        ],
        paragraphsEn: [
          'In "CMS Editor", user-supplied templates were passed directly into Flask/Jinja2 render_template_string(). After confirming {{7*7}} -> 49, I traversed the Python object hierarchy (cycler.__init__.__globals__.os.popen) to achieve RCE and read the flag.'
        ]
      }
    ]
  },
  {
    slug: 'coding-since-2015-retrospective-pawn-samp-web-python-old-repo',
    id: 'POST-07 · ARCHIVE-2015-2023',
    dateRo: '25 Septembrie 2026',
    dateEn: 'September 25, 2026',
    readTime: '11 min read',
    category: 'infra',
    categoryLabelRo: 'Retrospectivă Inginerească (2015 – Prezent)',
    categoryLabelEn: 'Engineering Retrospective (2015 – Present)',
    titleRo:
      'De la Scripturi PAWN și Servere SA-MP în 2015 la Infrastructură Enterprise și Securitate Cibernetică: 11+ Ani de Cod prin Arhiva stefanutc1/old',
    titleEn:
      'From PAWN Scripts & SA-MP Servers in 2015 to Enterprise Infrastructure & Cybersecurity: 11+ Years of Code Through the stefanutc1/old Archive',
    subtitleRo:
      'Cum mi-am început parcursul în programare în septembrie 2015 construind gamemode-uri multiplayer (RedZone, NQGaming), portaluri comunitare (Crowland Wiki, Kronick) și boți Python/Docker (Roadman).',
    subtitleEn:
      'How my programming journey began in September 2015 building multiplayer game servers (RedZone, NQGaming), community web portals (Crowland Wiki, Kronick), and Python/Docker bots (Roadman).',
    excerptRo:
      'O retrospectivă tehnică asupra primilor mei ani de cod păstrați în monorepo-ul arhivă stefanutc1/old: de la primele commit-uri din septembrie 2015 pe serverele SA-MP RedZone și NQGaming (PAWN, MySQL, detecție anti-cheat server-side), la portalul Vue 3 Crowland Wiki, arhitectura PHP/Nginx/MySQL Kronick și botul modular Roadman în Python 3 & Docker.',
    excerptEn:
      'A technical retrospective of my early coding years preserved in the stefanutc1/old archive monorepo: from my first September 2015 commits on the RedZone and NQGaming SA-MP servers (PAWN, MySQL, server-side anti-cheat detection), to the Vue 3 Crowland Wiki, the Kronick PHP/Nginx/MySQL web stack, and the modular Python 3 & Docker Roadman bot.',
    tags: ['2015 – 2023 Archive', 'PAWN / SA-MP', 'MySQL', 'Vue 3 & Vite', 'PHP & Nginx', 'Python & Docker'],
    repoUrl: 'https://github.com/stefanutc1/old',
    sections: [
      {
        headingRo: '1. Septembrie 2015 – 2018: Începuturile în PAWN, MySQL și Anti-Cheat Server-Side (RedZone & NQGaming)',
        headingEn: '1. September 2015 – 2018: Starting Out with PAWN, MySQL & Server-Side Anti-Cheat (RedZone & NQGaming)',
        paragraphsRo: [
          'Pasiunea mea pentru programare a început în anul 2015 (primul commit arhivat datând din 5 septembrie 2015 pe proiectul RedZone SA:MP Roleplay), când am început să dezvolt și să optimizez de la zero gamemode-uri multiplayer în limbajul PAWN conectate la baze de date MySQL și sisteme flat-file DINI.',
          'În proiectele RedZone (2015–2016) și NQGaming RPG (2016–2018), am implementat economii virtuale complete (case dinamice, afaceri cu stocuri, dealership auto, 10 facțiuni, 8 joburi cu niveluri de skill 1–5, arene GunGame și Paintball), dar mai ales primele mele mecanisme de securitate: filtre anti-cheat server-side împotriva C-Bug (anti_cbug.pwn), teleport-hack, airbreak, speedhack și dialog spoofing.'
        ],
        paragraphsEn: [
          'My programming journey started in 2015 (with the earliest archived commit dated September 5, 2015 on the RedZone SA:MP Roleplay codebase), building multiplayer server gamemodes from scratch in PAWN backed by MySQL schemas and DINI flat-file persistence.',
          'Across RedZone (2015–2016) and NQGaming RPG (2016–2018), I engineered full virtual economies (dynamic houses, stock-driven businesses, vehicle dealerships, 10 factions, 8 skill-tiered jobs, GunGame and Paintball arenas) alongside my very first security systems: server-side anti-cheat filterscripts against C-Bug macros (anti_cbug.pwn), teleportation, airbreak, speedhacks, and dialog ID spoofing.'
        ],
        codeBlock: {
          language: 'c',
          caption: 'Istoric din arhiva stefanutc1/old (redzone & nqgaming — 2015–2018)',
          code: `// [2015-09-05] feat(core): initialize RedZone SA:MP Roleplay server codebase and MySQL schemas
// [2015-09-16] feat(anticheat): implement server-side weapon, speed, and teleportation detection
// [2017-04-17] Adaugat protectie anti-dialog spoofing & verificare distanta anti-teleport
// [2017-06-11] Integrat filterscript anti_cbug.pwn impotriva macro-urilor si verificare pLogged`
        },
        calloutRo:
          'Dezvoltarea serverelor multiplayer în 2015–2018 a fost școala practică în care am înțeles că orice input venit de la client este potențial malițios — același principiu pe care îl aplic astăzi în arhitecturi Core-Banking și DFIR.',
        calloutEn:
          'Building multiplayer game servers between 2015 and 2018 was the hands-on proving ground where I learned that all client input is untrusted—the exact principle I apply today in Core-Banking and DFIR.'
      },
      {
        headingRo: '2. 2019 – 2023: Tranziția către Web Modern, Administrare Linux/Nginx și Python (Crowland Wiki, Kronick & Roadman)',
        headingEn: '2. 2019 – 2023: Transitioning to Modern Web, Linux/Nginx Administration & Python (Crowland Wiki, Kronick & Roadman)',
        paragraphsRo: [
          'Pe măsură ce comunitățile online au crescut, am extins stiva tehnică către dezvoltare web full-stack și administrare de servere Linux. Pentru comunitatea Crowland (phoenix.crowland.ro / rage.crowland.ro), am construit portalul wiki-crowland folosind Vue 3 (Composition API) și Vite, documentând peste 60 de comenzi, sisteme economice și ghiduri interactive.',
          'În paralel, proiectul Kronick (2021–2023) a presupus operarea unei platforme web comunitare complete (PHP, MySQL cu patch-uri de indexare și optimizare a interogărilor, configurații Nginx cu HSTS/CSP și scripturi Bash automatizate pentru backup.sh, restore.sh și cache_clear.sh). În 2022, am dezvoltat Roadman Bot în Python 3 (discord.py v2.0) containerizat cu Docker, oferind comenzi hibride Slash (/) și moderare automată.'
        ],
        paragraphsEn: [
          'As online communities scaled, I expanded into full-stack web development and Linux server administration. For the Crowland community (phoenix.crowland.ro / rage.crowland.ro), I built the wiki-crowland knowledge base portal using Vue 3 (Composition API) and Vite.',
          'Simultaneously, the Kronick project (2021–2023) involved running a full community web stack (PHP, MySQL with indexing optimization patches, Nginx SSL with HSTS/CSP headers, and automated Bash backup/restore scripts). In 2022, I built the Roadman Discord Bot in Python 3 (discord.py v2.0) containerized with Docker, featuring modular cogs and native Slash Commands.'
        ]
      }
    ]
  }
];

