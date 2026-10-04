'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, CornerDownLeft } from 'lucide-react';

interface TerminalLine {
  type: 'input' | 'output';
  text: string;
}

interface InteractiveTerminalProps {
  lang: 'ro' | 'en';
}

const COMMAND_HELP = [
  'whoami   — Profil executiv Moană Ștefănuț-Cornel (Experiență 2015–Prezent · FEAA UCV 2024–2027)',
  'ctf      — Evaluare Red Team 19.09.2026 (3/3 Solved · 100% · 11 Solvere Automate)',
  'old      — Arhiva istorică a sistemelor 2015–2023 (stefanutc1/old)',
  'blog     — Publicații tehnice și dosare criminalistice DFIR (7)',
  'fleet    — Topologia clusterului hibrid Proxmox VE (4 Noduri & 5 VLAN-uri)',
  'dfir     — Rapoarte criminalistice corporative & Takedown Național DNSC #178465',
  'projects — Portofoliu universitar & Licență Core-Banking FinTech (43+ Proiecte)',
  'stack    — Matricea tehnologică enterprise (2015 – Prezent)',
  'clear    — Resetează consola interactivă',
];

export default function InteractiveTerminal({ lang }: InteractiveTerminalProps) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<TerminalLine[]>([
    {
      type: 'output',
      text:
        lang === 'ro'
          ? 'Moană Ștefănuț-Cornel — Enterprise Operations Shell v2026.9 (tastează "help" sau selectează o comandă)'
          : 'Moană Ștefănuț-Cornel — Enterprise Operations Shell v2026.9 (type "help" or select a command pill)',
    },
    {
      type: 'input',
      text: 'whoami',
    },
    {
      type: 'output',
      text: 'Moană Ștefănuț-Cornel (@stefanutc1) | Enterprise Systems Architect & DFIR Lead | FEAA UCV (2024–2027)',
    },
  ]);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [history]);

  const executeCommand = (rawCmd: string) => {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    if (cmd === 'clear') {
      setHistory([]);
      setInput('');
      return;
    }

    let response = '';
    switch (cmd) {
      case 'help':
        response = COMMAND_HELP.join('\n');
        break;
      case 'whoami':
        response =
          lang === 'ro'
            ? [
                'Nume:       Moană Ștefănuț-Cornel (@stefanutc1)',
                'Experiență: Peste un deceniu de practică inginerească în sisteme software (2015 – Prezent · stefanutc1/old)',
                'Studii:     Universitatea din Craiova — FEAA, Informatică Economică (2024 – 2027)',
                'Licență:    Arhitectură Core-Banking Enterprise, Registru Contabil ACID în Partidă Dublă, PCI-DSS v4.0 & 5 Scenarii MITRE ATT&CK',
                'Rol:        Arhitect Sisteme Enterprise, Cloud Hibrid & Coordonator Threat Intelligence',
              ].join('\n')
            : [
                'Name:       Moană Ștefănuț-Cornel (@stefanutc1)',
                'Experience: Over a decade of enterprise software & systems engineering (2015 – Present · stefanutc1/old)',
                'Education:  University of Craiova — FEAA, B.Sc. Business Informatics (2024 – 2027)',
                'Thesis:     Enterprise Core-Banking Engine, ACID Double-Entry Ledger, PCI-DSS v4.0 & 5 MITRE ATT&CK Scenarios',
                'Role:       Enterprise Systems Architect, Hybrid Cloud Engineer & Threat Intelligence Lead',
              ].join('\n');
        break;
      case 'ctf':
        response = [
          'Evaluare Securitate Ofensivă (Red Team) — 19.09.2026 (cyber/ctf/19-09-2026 · 3/3 Vectori Rezolvați · 100%):',
          '• [01] The Blog (CWE-79 Stored XSS)      | payload.js, solver.py                 -> InvataCyber{st0r3d_xss_c0nt4ct_f0rm_pwn}',
          '• [02] Portal Lockdown (CWE-89 SQLi)     | dump_users.py (5652B boolean oracle)  -> InvataCyber{bl1nd_sql1_c00k13_tr4ck1ng_m4st3r}',
          '• [03] Redacția CMS (CWE-1336 SSTI->RCE) | blog_flag.py (/edit/5 Jinja2 popen)   -> InvataCyber{ssti_j1nj42_rc3_fl4g_txt_3xtr4ct3d}',
          'Repo: https://github.com/stefanutc1/infrastructure/tree/main/cyber/ctf/19-09-2026',
        ].join('\n');
        break;
      case 'old':
        response = [
          'Arhiva Istorică de Sisteme stefanutc1/old (2015 – 2023):',
          '• [2015–2016] redzone/       — RedZone SA:MP Roleplay Gamemode (PAWN, MySQL, Anti-Cheat server-side)',
          '• [2016–2018] nqgaming/      — NQGaming SA-MP 0.3.7 RPG (10 facțiuni, 8 joburi, anti_cbug.pwn)',
          '• [2019–2020] wiki-crowland/ — Portal Documentație Crowland (Vue 3 Composition API, Vite)',
          '• [2021–2023] kronick/       — Platformă Web Comunitară (PHP, MySQL, Nginx SSL, Bash Backup)',
          '• [2022–2023] 2022/          — Roadman Discord Moderation Bot (Python 3, discord.py v2.0, Docker)',
        ].join('\n');
        break;
      case 'blog':
        response = [
          '[POST-01] Analiză DFIR Media Galaxy: Kit Phishing yiyangsaas.com & Takedown DNSC #178465',
          '[POST-02] Arhitectura unei Platforme Core-Banking Moderne: ACID Ledger & PCI-DSS v4.0',
          '[POST-03] Datacenter Homelab Enterprise cu 4 Noduri: Proxmox 9.2, OPNsense & 5 VLAN-uri',
          '[POST-04] Anatomia Bypass-ului 2FA: Steam OpenID BitM vs. Revolut Real-Time OTP Relay',
          '[POST-05] Decompilarea unei Platforme de Task Scam: Manipularea /api/v1/site/config & SQLi',
          '[POST-06] Evaluare Red Team 19.09.2026 (3/3 · 100%): Stored XSS, Blind SQLi & Jinja2 SSTI',
          '[POST-07] De la Scripturi PAWN în 2015 la Infrastructură Enterprise: 11+ Ani de Cod (stefanutc1/old)',
        ].join('\n');
        break;
      case 'fleet':
        response = [
          'NODE-1 (pve)        | 192.168.1.132 | Tier-3 Primary Hypervisor (Proxmox VE 9.2 x86_64, 12GB DDR4 + ZRAM, GTX 1050 Ti)',
          'NODE-2 (omv-nas)    | 192.168.1.199 | Enterprise Storage Appliance (OpenMediaVault 7, ZFS Vault, NFSv4 / SMB3)',
          'NODE-3 (pve-arm64)  | 192.168.1.140 | Apple Silicon High-Density Compute (ARM64 LXC, Multi-Arch CI/CD)',
          'NODE-4 (kubernetes) | 192.168.1.150 | Bare-Metal Edge Worker (k3s / k0s, Cilium CNI, OPA Rego, ESP32 Telemetry)',
          'VLANs: VLAN 10 (MGMT) | VLAN 20 (PROD) | VLAN 30 (CYBERLAB AIR-GAPPED) | VLAN 40 (STORAGE) | VLAN 50 (IOT)',
        ].join('\n');
        break;
      case 'dfir':
        response = [
          '1. E-Commerce Brand Spoofing (Media Galaxy) — 30 probe criminalistice, nod C2 yiyangsaas.com -> DNSC PNRISC #178465 Takedown',
          '2. Steam OpenID Browser-in-the-Middle — Vector de atac pe ferestre DOM autentificate și deturnare token-uri sesiune',
          '3. Revolut Real-Time OTP Vishing Relay — Panou de operare live pentru recoltare credențiale și bypass 2FA/KYC',
          '4. Illicit Financial Task Scam API — Decompilare endpoint /api/v1/site/config și blocare neautorizată retrageri fonduri',
          '5. Red Team Evaluation (19.09.2026 · 100%) — 3/3 Vectori Remediați (Stored XSS CWE-79, Blind Boolean SQLi CWE-89, Jinja2 SSTI CWE-1336 to RCE)',
        ].join('\n');
        break;
      case 'projects':
        response = [
          '• stefanutc1/old (2015–2023):          RedZone SA-MP, NQGaming RPG, Crowland Wiki, Kronick, Roadman Bot',
          '• stefanutc1/university (2024–2027):     43+ Proiecte Universitare + Licență Core-Banking (Java/Python/C++/C#)',
          '• stefanutc1/infrastructure (2025+):   Cluster Hibrid Enterprise + Evaluare Red Team 19.09.2026 + Dosare DFIR',
        ].join('\n');
        break;
      case 'stack':
        response = [
          '2015–2023:  PAWN Concurrency, MySQL Relational, Hardened PHP/Nginx, Vue 3, Vite, Python (discord.py), Docker',
          '2024–2027:  Java 17 (Spring Boot 3.2), TypeScript (Next.js 15 / Angular 20), Modern C++, C# .NET, SQL ACID',
          'Infra/Sec:  Proxmox VE 9.2, OPNsense 24.7 ZTNA, Terraform (57 files), Ansible (18 roles), Wazuh SIEM, Suricata DPI',
        ].join('\n');
        break;
      default:
        response = `zsh: command not found: ${cmd}. Type "help" for available commands.`;
    }

    setHistory((prev) => [
      ...prev,
      { type: 'input', text: rawCmd },
      { type: 'output', text: response },
    ]);
    setInput('');
  };

  const quickCommands = ['whoami', 'ctf', 'old', 'blog', 'fleet', 'dfir', 'projects', 'stack', 'clear'];

  return (
    <div className="border border-[#52212e] bg-[#0c0c0c] text-[#efebe5] shadow-xl overflow-hidden">
      {/* Terminal Titlebar */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#24181e] bg-[#17090d] px-4 py-2.5">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-[2px] bg-[#52212e]" />
          <span className="h-2.5 w-2.5 rounded-[2px] bg-[#401823]" />
          <span className="h-2.5 w-2.5 rounded-[2px] bg-[#24181e]" />
          <span className="ml-1.5 text-xs font-mono text-[#d9d1ca] flex items-center gap-1.5">
            <TerminalIcon className="w-3.5 h-3.5 text-[#827470]" />
            stefanutc1@enterprise-core: ~ (zsh)
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-1">
          {quickCommands.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => executeCommand(c)}
              className="rounded-tl-[6px] rounded-br-[6px] border border-[#52212e] bg-[#401823]/60 px-2 py-0.5 text-[11px] font-mono text-[#d9d1ca] hover:bg-[#52212e] hover:text-[#efebe5] transition"
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Terminal Output */}
      <div
        ref={containerRef}
        className="h-52 overflow-y-auto p-4 font-mono text-xs leading-relaxed space-y-2"
      >
        {history.map((item, idx) =>
          item.type === 'input' ? (
            <div key={idx} className="flex items-center gap-2 text-[#efebe5]">
              <span className="text-[#d9d1ca] font-semibold">
                stefanutc1@enterprise-core:~$
              </span>
              <span>{item.text}</span>
            </div>
          ) : (
            <pre
              key={idx}
              className="whitespace-pre-wrap text-[#d9d1ca] pl-2.5 border-l-2 border-[#52212e]"
            >
              {item.text}
            </pre>
          )
        )}
      </div>

      {/* Prompt Input */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          executeCommand(input);
        }}
        className="flex items-center gap-2 border-t border-[#24181e] bg-[#17090d]/70 px-4 py-2.5 font-mono text-xs"
      >
        <span className="text-[#d9d1ca] shrink-0">stefanutc1@enterprise-core:~$</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={
            lang === 'ro'
              ? 'Comandă executivă (whoami, ctf, old, blog, fleet, dfir, projects, stack)...'
              : 'Executive command (whoami, ctf, old, blog, fleet, dfir, projects, stack)...'
          }
          className="w-full bg-transparent text-[#efebe5] placeholder:text-[#827470] focus:outline-none"
        />
        <button
          type="submit"
          className="inline-flex items-center gap-1 text-[#827470] hover:text-[#efebe5] transition"
          aria-label="Run command"
        >
          <CornerDownLeft className="w-3.5 h-3.5" />
        </button>
      </form>
    </div>
  );
}
