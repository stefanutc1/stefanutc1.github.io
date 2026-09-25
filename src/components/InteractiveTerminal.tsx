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
  'whoami   — Despre Moană Ștefănuț-Cornel & profil ingineresc',
  'blog     — Listează cele 6 articole tehnice din jurnal',
  'fleet    — Topologia clusterului Proxmox VE (Nodes 1-4 & 5 VLANs)',
  'dfir     — Rapoarte DFIR & DNSC Takedown #178465',
  'projects — Arhiva universitară (43+ proiecte + Licență Core-Banking)',
  'stack    — Tehnologiile principale utilizate în producție',
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
      text: 'Moană Ștefănuț-Cornel (@stefanutc1) | B.Sc. Informatică @ Univ. din Craiova | Systems, FinTech & DFIR Engineer',
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
                'Nume:      Moană Ștefănuț-Cornel (@stefanutc1)',
                'Studii:    Universitatea din Craiova — Facultatea de Științe, Specializarea Informatică (2023–2026)',
                'Licență:   Arhitectură Core-Banking, Registru Dublă Partidă ACID, PCI-DSS v4.0 & 5 Scenarii MITRE ATT&CK',
                'Rol:       Inginer Sisteme Distribuite, DevSecOps, Infrastructură Hibridă & Analist DFIR',
              ].join('\n')
            : [
                'Name:      Moană Ștefănuț-Cornel (@stefanutc1)',
                'Education: University of Craiova — Faculty of Sciences, B.Sc. Computer Science (2023–2026)',
                'Thesis:    Core-Banking Architecture, ACID Double-Entry Ledger, PCI-DSS v4.0 & 5 MITRE ATT&CK Scenarios',
                'Role:      Distributed Systems, DevSecOps, Hybrid Infrastructure & DFIR Analyst',
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
        ].join('\n');
        break;
      case 'fleet':
        response = [
          'NODE-1 (thinkcentre-m920q)  | i5-8500T 6C | 32GB RAM | 1.25TB NVMe+SSD | OPNsense + 10 LXC + HA',
          'NODE-2 (apple-macbook-m1)   | Apple M1 8C | 8GB RAM  | macOS Sequoia   | Dev & AI Edge Workstation',
          'NODE-3 (gaming-workstation) | i5-9400F 6C | 32GB RAM | GTX 1650 4GB    | CUDA / Ollama LLM / Security Lab',
          'NODE-4 (oracle-cloud-vps)   | Ampere 4C   | 24GB RAM | Frankfurt OCI   | WireGuard Ingress & Pangolin',
          'VLANs: VLAN 10 (MGMT) | VLAN 20 (DMZ) | VLAN 30 (INTERNAL) | VLAN 40 (GUEST) | VLAN 99 (QUARANTINE)',
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
          '• Licență Core-Banking (2026): Next.js 16 + FastAPI + PostgreSQL 16 + Wazuh SIEM + 225 pagini documentație',
          '• Homelab Datacenter (57 .tf): Proxmox VE 9.2, OPNsense 24.7, Ansible, Prometheus, Grafana, Authentik',
          '• 43+ Proiecte Universitare:   Assembly x86, C/C++ OOP, Java, Python AI/ML, C# .NET 9, Flutter, OpenGL, Prolog',
        ].join('\n');
        break;
      case 'stack':
        response = [
          'Languages:  TypeScript, Python, C/C++, C# (.NET 9), Java, SQL, x86 Assembly, Bash',
          'Web & API:  Next.js 15/16, React 19, Angular, FastAPI, ASP.NET Core, Tailwind CSS',
          'Infra/Sec:  Proxmox VE 9.2, OPNsense, Terraform (57 files), Ansible, Docker, Wazuh SIEM, Suricata',
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

  const quickCommands = ['whoami', 'blog', 'fleet', 'dfir', 'projects', 'stack', 'clear'];

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
              ? 'Tastează o comandă (whoami, blog, fleet, dfir, projects, stack)...'
              : 'Type a command (whoami, blog, fleet, dfir, projects, stack)...'
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
