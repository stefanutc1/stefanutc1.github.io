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
  'whoami   — Despre Moană Ștefănuț-Cornel (Codez din 2015 · FEAA UCV 2024–2027)',
  'old      — Arhiva proiectelor istorice 2015–2023 (stefanutc1/old)',
  'blog     — Listează cele 7 articole tehnice din jurnal',
  'fleet    — Topologia clusterului Proxmox VE (Nodes 1-4 & 5 VLANs)',
  'dfir     — Rapoarte DFIR & DNSC Takedown #178465',
  'projects — Arhiva universitară (43+ proiecte + Licență Core-Banking)',
  'stack    — Tehnologiile principale utilizate (2015 – Prezent)',
  'clear    — Curăță consola interactivă',
];

export default function InteractiveTerminal({ lang }: InteractiveTerminalProps) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<TerminalLine[]>([
    {
      type: 'output',
      text:
        lang === 'ro'
          ? 'Moană Ștefănuț-Cornel — Personal Engineering Shell v2026.9 (tastează "help" sau apasă pe o comandă)'
          : 'Moană Ștefănuț-Cornel — Personal Engineering Shell v2026.9 (type "help" or click a command pill)',
    },
    {
      type: 'input',
      text: 'whoami',
    },
    {
      type: 'output',
      text: 'Moană Ștefănuț-Cornel (@stefanutc1) | Codez din 2015 (11+ ani) | Informatică Economică @ FEAA UCV (2024–2027)',
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
                'Experiență: Codez din septembrie 2015 (11+ ani de programare continuă — stefanutc1/old)',
                'Studii:     Universitatea din Craiova — FEAA, Informatică Economică (2024 – 2027)',
                'Licență:    Arhitectură Core-Banking, Registru Dublă Partidă ACID, PCI-DSS v4.0 & 5 Scenarii MITRE ATT&CK',
                'Rol:        Inginer Sisteme Informatice, Infrastructură Hibridă & Cercetător DFIR',
              ].join('\n')
            : [
                'Name:       Moană Ștefănuț-Cornel (@stefanutc1)',
                'Experience: Coding since September 2015 (11+ years hands-on — stefanutc1/old)',
                'Education:  University of Craiova — FEAA, B.Sc. Business Informatics (2024 – 2027)',
                'Thesis:     Core-Banking Architecture, ACID Double-Entry Ledger, PCI-DSS v4.0 & 5 MITRE ATT&CK Scenarios',
                'Role:       Information Systems Engineer, Hybrid Infrastructure Architect & DFIR Researcher',
              ].join('\n');
        break;
      case 'old':
        response = [
          'Arhiva stefanutc1/old (2015 – 2023):',
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
          '[POST-03] Construirea unui Datacenter Homelab cu 4 Noduri: Proxmox 9.2, OPNsense & 5 VLAN-uri',
          '[POST-04] Anatomia Bypass-ului 2FA: Steam OpenID BitM vs. Revolut Real-Time OTP Relay',
          '[POST-05] Decompilarea unei Platforme de Task Scam: Manipularea /api/v1/site/config & SQLi',
          '[POST-06] InvataCyber.ro 100% CTF Writeup: Reflected XSS, Blind SQLi & Jinja2 SSTI',
          '[POST-07] De la Scripturi PAWN în 2015 la Infrastructură Enterprise: 11+ Ani de Cod (stefanutc1/old)',
        ].join('\n');
        break;
      case 'fleet':
        response = [
          'NODE-1 (pve)        | 192.168.1.240 | Proxmox VE 9.2 x86_64 · 12GB DDR4 + ZRAM · 20+ VM/LXC',
          'NODE-2 (omv-nas)    | 192.168.1.181 | OpenMediaVault 7 NAS · NFSv4 / SMB3 / ZFS Backup',
          'NODE-3 (pve2)       | 192.168.1.196 | Apple Silicon ARM64 · Proxmox VE / Asahi · Multi-Arch CI',
          'NODE-4 (kubernetes) | 192.168.1.150 | Bare-Metal k3s / k0s Edge Worker · Cilium CNI · ESP32',
          'VLANs: VLAN 10 (MGMT) | VLAN 20 (PROD) | VLAN 30 (CYBERLAB) | VLAN 40 (STORAGE) | VLAN 50 (IOT)',
        ].join('\n');
        break;
      case 'dfir':
        response = [
          '1. Media Galaxy Fake Promo — 8-Step Credential Harvester (yiyangsaas.com / 23.224.199.13) -> DNSC #178465',
          '2. Steam OpenID BitM       — Fake L4D2 Tournament DOM Browser-in-the-Middle window',
          '3. Revolut Vishing Relay   — Live operator OTP & Selfie KYC harvesting panel',
          '4. Task Scam Platform      — /api/v1/site/config withdrawal lock + SQL Injection exposure',
          '5. InvataCyber CTF         — 100% completion across Web Exploitation, Cryptography & Linux Forensics',
        ].join('\n');
        break;
      case 'projects':
        response = [
          '• stefanutc1/old (2015–2023):          RedZone SA-MP, NQGaming RPG, Crowland Wiki, Kronick, Roadman Bot',
          '• stefanutc1/proiecte (2024–2027):     43+ Proiecte Universitare + Licență Core-Banking (Java/Python/C++/C#)',
          '• stefanutc1/infrastructure (2025+):   4-Node Homelab Datacenter (57 Terraform, 18 Ansible, Wazuh SIEM)',
        ].join('\n');
        break;
      case 'stack':
        response = [
          '2015–2023:  PAWN (SA-MP), MySQL, PHP, Nginx, Vue 3, Vite, Python (discord.py), Bash, Docker',
          '2024–2027:  Java 17 (Spring Boot 3.2), TypeScript (Next.js 15 / Angular 20), C/C++, C#, SQL',
          'Infra/Sec:  Proxmox VE 9.2, OPNsense 24.7, Terraform (57 files), Ansible, Wazuh SIEM, Suricata',
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

  const quickCommands = ['whoami', 'old', 'blog', 'fleet', 'dfir', 'projects', 'stack', 'clear'];

  return (
    <div className="rounded-xl border border-[var(--border-strong)] bg-[#07070a] text-zinc-200 shadow-xl overflow-hidden">
      {/* Terminal Titlebar */}
      <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.03] px-4 py-2.5">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-800" />
          <span className="ml-2 text-xs font-mono text-zinc-400 flex items-center gap-1.5">
            <TerminalIcon className="w-3.5 h-3.5 text-zinc-500" />
            stefanut@datacenter: ~ (zsh)
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-1">
          {quickCommands.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => executeCommand(c)}
              className="rounded border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[11px] font-mono text-zinc-400 hover:text-white hover:border-white/25 transition"
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Terminal Output */}
      <div
        ref={containerRef}
        className="h-56 overflow-y-auto p-4 font-mono text-xs leading-relaxed space-y-2"
      >
        {history.map((item, idx) =>
          item.type === 'input' ? (
            <div key={idx} className="flex items-center gap-2 text-zinc-100">
              <span className="text-emerald-400">stefanut@datacenter:~$</span>
              <span>{item.text}</span>
            </div>
          ) : (
            <pre
              key={idx}
              className="whitespace-pre-wrap text-zinc-400 pl-2 border-l border-white/10"
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
        className="flex items-center gap-2 border-t border-white/10 bg-white/[0.02] px-4 py-2.5 font-mono text-xs"
      >
        <span className="text-emerald-400 shrink-0">stefanut@datacenter:~$</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={
            lang === 'ro'
              ? 'Tastează o comandă (whoami, old, blog, fleet, dfir, projects, stack)...'
              : 'Type a command (whoami, old, blog, fleet, dfir, projects, stack)...'
          }
          className="w-full bg-transparent text-zinc-100 placeholder:text-zinc-600 focus:outline-none"
        />
        <button
          type="submit"
          className="inline-flex items-center gap-1 text-zinc-500 hover:text-zinc-200 transition"
          aria-label="Run command"
        >
          <CornerDownLeft className="w-3.5 h-3.5" />
        </button>
      </form>
    </div>
  );
}
