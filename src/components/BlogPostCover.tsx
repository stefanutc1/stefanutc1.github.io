'use client';

import React from 'react';
import { BlogPost } from '@/data/blog';

interface BlogPostCoverProps {
  post: BlogPost;
  lang: 'ro' | 'en';
}

export default function BlogPostCover({ post, lang }: BlogPostCoverProps) {
  // POST-01: Media Galaxy DFIR (Friction-Timer style Dark Telemetry Widget)
  if (post.slug.includes('mediagalaxy')) {
    return (
      <div className="w-full rounded-[8px] border border-[#32302f] bg-[#1d1c19] text-[#ebdbb2] font-mono select-none overflow-hidden shadow-inner">
        {/* Top bar */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#32302f]">
          <div className="flex items-center gap-2.5 text-sm sm:text-base font-bold tracking-tight">
            <span className="h-2.5 w-2.5 rounded-full bg-[#fabd2f] inline-block" />
            <span>
              <span className="text-[#fabd2f]">DFIR</span>{' '}
              <span className="text-[#ebdbb2]">C2 Monitor</span>
            </span>
          </div>
          <span className="text-xs text-[#928374]">DNSC #178465</span>
        </div>

        {/* Body */}
        <div className="px-5 py-4 space-y-3">
          <div className="flex items-center justify-between text-[11px] uppercase tracking-wider text-[#928374]">
            <span>
              {lang === 'ro'
                ? 'INFRASTRUCTURĂ PHISHING NEUTRALIZATĂ'
                : 'NEUTRALIZED PHISHING INFRASTRUCTURE'}
            </span>
            <span className="text-[#bdae93] font-semibold">3 IOCs</span>
          </div>

          <div className="rounded-[8px] border border-[#3c3836] bg-[#242220] px-4 py-3 flex items-center justify-between gap-4">
            <div className="min-w-0">
              <div className="text-sm font-bold text-[#ebdbb2] truncate">
                mediagalaxy.site → yiyangsaas.com
              </div>
              <div className="text-xs text-[#928374] truncate mt-0.5">
                AS40065 · Cnservers LLC · 155.117.45.102 (SSE /3ds/stream)
              </div>
            </div>
            <div className="text-right text-xs shrink-0 space-y-0.5">
              <div className="text-[#928374]">
                kit <span className="text-[#ebdbb2] font-bold">v4.2-SSE</span>
              </div>
              <div className="text-[#928374]">
                status <span className="text-[#b8bb26] font-bold">TAKEDOWN</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // POST-06: CTF 19.09.2026 InvataCyber.ro (OSWE / OffSec style Concentric Rings & Circuit Banner)
  if (post.slug.includes('invatacyber-ctf')) {
    return (
      <div
        className="relative w-full h-[196px] sm:h-[215px] rounded-[8px] border border-[#32302f] overflow-hidden select-none flex items-center justify-between px-6 sm:px-8"
        style={{
          background:
            'radial-gradient(circle at 78% 62%, rgba(20, 184, 166, 0.28) 0%, rgba(15, 33, 43, 0.92) 48%, #14161b 100%)',
        }}
      >
        {/* Left Brand Emblem (OffSec / InvataCyber style) */}
        <div className="relative z-10 space-y-3 max-w-[60%]">
          <div className="inline-flex items-center gap-2.5">
            <div className="h-7 w-7 rounded-full bg-gradient-to-tr from-[#3b82f6] via-[#06b6d4] to-[#14b8a6] flex items-center justify-center shadow-md">
              <span className="font-mono text-xs font-bold text-white">IC</span>
            </div>
            <span className="font-sans text-lg sm:text-xl font-bold tracking-tight text-white">
              InvataCyber<span className="text-[#2dd4bf] font-normal text-xs align-top ml-0.5">CTF</span>
            </span>
          </div>

          <div className="font-mono text-xs sm:text-sm text-[#ebdbb2] font-semibold">
            19.09.2026 · 3/3 Flags (100%)
          </div>

          <div className="flex flex-wrap gap-1.5 font-mono text-[10px] text-[#99f6e4]">
            <span className="rounded bg-[#0f292e]/90 border border-[#14b8a6]/40 px-2 py-0.5">
              Stored XSS
            </span>
            <span className="rounded bg-[#0f292e]/90 border border-[#14b8a6]/40 px-2 py-0.5">
              Blind SQLi (5652B)
            </span>
            <span className="rounded bg-[#0f292e]/90 border border-[#14b8a6]/40 px-2 py-0.5">
              Jinja2 SSTI → RCE
            </span>
          </div>
        </div>

        {/* Right Concentric Cyan Rings & Circuit Node SVG (matching OSWE cover in screenshot) */}
        <div className="relative z-0 flex items-center justify-center">
          <svg
            viewBox="0 0 260 220"
            className="w-[180px] sm:w-[230px] h-auto overflow-visible"
            fill="none"
          >
            {[118, 108, 98, 88, 78, 68, 58].map((r, idx) => (
              <circle
                key={r}
                cx="145"
                cy="125"
                r={r}
                stroke="#2dd4bf"
                strokeOpacity={0.14 + idx * 0.09}
                strokeWidth="1.5"
              />
            ))}
            <circle
              cx="145"
              cy="125"
              r="50"
              fill="#0d262b"
              stroke="#2dd4bf"
              strokeWidth="2"
            />
            {/* Circuit trace lines */}
            <path
              d="M128 106 L120 118 L120 132 L128 144"
              stroke="#f8fafc"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M162 106 L170 118 L170 132 L162 144"
              stroke="#f8fafc"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M136 100 L136 150 M154 100 L154 150"
              stroke="#2dd4bf"
              strokeWidth="1.75"
              strokeLinecap="round"
            />
            <circle cx="128" cy="106" r="3" fill="#14b8a6" stroke="#f8fafc" strokeWidth="1.5" />
            <circle cx="162" cy="106" r="3" fill="#14b8a6" stroke="#f8fafc" strokeWidth="1.5" />
            <circle cx="128" cy="144" r="3" fill="#14b8a6" stroke="#f8fafc" strokeWidth="1.5" />
            <circle cx="162" cy="144" r="3" fill="#14b8a6" stroke="#f8fafc" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    );
  }

  // POST-02: Core-Banking Thesis (Friction-Timer style Dark Ledger Widget)
  if (post.slug.includes('bancare-licenta')) {
    return (
      <div className="w-full rounded-[8px] border border-[#32302f] bg-[#1d1c19] text-[#ebdbb2] font-mono select-none overflow-hidden">
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#32302f]">
          <div className="flex items-center gap-2.5 text-sm sm:text-base font-bold tracking-tight">
            <span className="h-2.5 w-2.5 rounded-full bg-[#b8bb26] inline-block" />
            <span>
              <span className="text-[#b8bb26]">CoreBanking</span>{' '}
              <span className="text-[#ebdbb2]">ACID Engine</span>
            </span>
          </div>
          <span className="text-xs text-[#928374]">PCI-DSS v4.0</span>
        </div>

        <div className="px-5 py-4 space-y-3">
          <div className="flex items-center justify-between text-[11px] uppercase tracking-wider text-[#928374]">
            <span>DOUBLE-ENTRY SHA-256 LEDGER</span>
            <span className="text-[#bdae93] font-semibold">Δ = 0.00 RON</span>
          </div>

          <div className="rounded-[8px] border border-[#3c3836] bg-[#242220] px-4 py-3 flex items-center justify-between gap-4">
            <div className="min-w-0">
              <div className="text-sm font-bold text-[#ebdbb2] truncate">
                LedgerTransactionService
              </div>
              <div className="text-xs text-[#928374] truncate mt-0.5">
                ro.ucv.feaa.corebanking · PESSIMISTIC_WRITE
              </div>
            </div>
            <div className="text-right text-xs shrink-0 space-y-0.5">
              <div className="text-[#928374]">
                p95 <span className="text-[#ebdbb2] font-bold">18.4ms</span>
              </div>
              <div className="text-[#928374]">
                race <span className="text-[#b8bb26] font-bold">0 / 50 thr</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // POST-03: 4-Node Homelab Datacenter (Friction-Timer style Cluster Widget)
  if (post.slug.includes('datacenter-homelab')) {
    return (
      <div className="w-full rounded-[8px] border border-[#32302f] bg-[#1d1c19] text-[#ebdbb2] font-mono select-none overflow-hidden">
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#32302f]">
          <div className="flex items-center gap-2.5 text-sm sm:text-base font-bold tracking-tight">
            <span className="h-2.5 w-2.5 rounded-full bg-[#83a598] inline-block" />
            <span>
              <span className="text-[#83a598]">Proxmox</span>{' '}
              <span className="text-[#ebdbb2]">Cluster Mesh</span>
            </span>
          </div>
          <span className="text-xs text-[#928374]">PVE V9.2.0</span>
        </div>

        <div className="px-5 py-4 space-y-3">
          <div className="flex items-center justify-between text-[11px] uppercase tracking-wider text-[#928374]">
            <span>BARE-METAL NODES & OPNSENSE VLANS</span>
            <span className="text-[#bdae93] font-semibold">4 NODES · 5 VLANs</span>
          </div>

          <div className="rounded-[8px] border border-[#3c3836] bg-[#242220] px-4 py-3 flex items-center justify-between gap-4">
            <div className="min-w-0">
              <div className="text-sm font-bold text-[#ebdbb2] truncate">
                pve-main · omv-nas · mac-arm64 · rpi4
              </div>
              <div className="text-xs text-[#928374] truncate mt-0.5">
                stefanutc1/infrastructure · 57 Terraform · 18 Ansible
              </div>
            </div>
            <div className="text-right text-xs shrink-0 space-y-0.5">
              <div className="text-[#928374]">
                siem <span className="text-[#ebdbb2] font-bold">Wazuh 4.9</span>
              </div>
              <div className="text-[#928374]">
                mesh <span className="text-[#83a598] font-bold">Tailscale</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // POST-04: Steam BitM & Revolut Vishing (OffSec / Cyber Concentric Rings Banner)
  if (post.slug.includes('steam-openid')) {
    return (
      <div
        className="relative w-full h-[196px] sm:h-[215px] rounded-[8px] border border-[#32302f] overflow-hidden select-none flex items-center justify-between px-6 sm:px-8"
        style={{
          background:
            'radial-gradient(circle at 78% 62%, rgba(251, 73, 52, 0.25) 0%, rgba(38, 20, 26, 0.94) 50%, #161316 100%)',
        }}
      >
        <div className="relative z-10 space-y-3 max-w-[62%]">
          <div className="inline-flex items-center gap-2.5">
            <div className="h-7 w-7 rounded-full bg-gradient-to-tr from-[#fb4934] to-[#fabd2f] flex items-center justify-center shadow-md">
              <span className="font-mono text-xs font-bold text-[#1d1c19]">2FA</span>
            </div>
            <span className="font-sans text-lg sm:text-xl font-bold tracking-tight text-[#ebdbb2]">
              AiTM & BitM<span className="text-[#fe8019] font-normal text-xs align-top ml-1">DFIR</span>
            </span>
          </div>

          <div className="font-mono text-xs sm:text-sm text-[#ebdbb2] font-semibold">
            Steam OpenID Relay & Revolut OTP Vishing
          </div>

          <div className="flex flex-wrap gap-1.5 font-mono text-[10px] text-[#fabd2f]">
            <span className="rounded bg-[#2b191d]/90 border border-[#fb4934]/40 px-2 py-0.5">
              SEC-2025-AITM-004
            </span>
            <span className="rounded bg-[#2b191d]/90 border border-[#fb4934]/40 px-2 py-0.5">
              FIDO2 / WebAuthn Defense
            </span>
          </div>
        </div>

        <div className="relative z-0 flex items-center justify-center">
          <svg
            viewBox="0 0 260 220"
            className="w-[180px] sm:w-[230px] h-auto overflow-visible"
            fill="none"
          >
            {[115, 103, 91, 79, 67, 55].map((r, idx) => (
              <circle
                key={r}
                cx="145"
                cy="125"
                r={r}
                stroke="#fe8019"
                strokeOpacity={0.14 + idx * 0.09}
                strokeWidth="1.5"
              />
            ))}
            <circle
              cx="145"
              cy="125"
              r="44"
              fill="#261619"
              stroke="#fb4934"
              strokeWidth="2"
            />
            <path
              d="M132 125 L158 125 M145 112 L145 138"
              stroke="#fabd2f"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    );
  }

  // POST-05: Task Scam Decompilation (Friction-Timer style Dark Widget)
  if (post.slug.includes('task-scam')) {
    return (
      <div className="w-full rounded-[8px] border border-[#32302f] bg-[#1d1c19] text-[#ebdbb2] font-mono select-none overflow-hidden">
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#32302f]">
          <div className="flex items-center gap-2.5 text-sm sm:text-base font-bold tracking-tight">
            <span className="h-2.5 w-2.5 rounded-full bg-[#fe8019] inline-block" />
            <span>
              <span className="text-[#fe8019]">Decompiler</span>{' '}
              <span className="text-[#ebdbb2]">Task-Scam Audit</span>
            </span>
          </div>
          <span className="text-xs text-[#928374]">SEC-2026-TASK-003</span>
        </div>

        <div className="px-5 py-4 space-y-3">
          <div className="flex items-center justify-between text-[11px] uppercase tracking-wider text-[#928374]">
            <span>UNAUTHENTICATED ENDPOINTS & SQLI</span>
            <span className="text-[#bdae93] font-semibold">CVSS 9.8</span>
          </div>

          <div className="rounded-[8px] border border-[#3c3836] bg-[#242220] px-4 py-3 flex items-center justify-between gap-4">
            <div className="min-w-0">
              <div className="text-sm font-bold text-[#ebdbb2] truncate">
                GET /api/v1/site/config
              </div>
              <div className="text-xs text-[#928374] truncate mt-0.5">
                TRC-20 Wallet Pool + Telegram Bot API Key Exposed
              </div>
            </div>
            <div className="text-right text-xs shrink-0 space-y-0.5">
              <div className="text-[#928374]">
                sqli <span className="text-[#fb4934] font-bold">order_by</span>
              </div>
              <div className="text-[#928374]">
                auth <span className="text-[#fabd2f] font-bold">NONE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // POST-07: Coding Since 2015 Retrospective (Friction-Timer style Dark Widget)
  return (
    <div className="w-full rounded-[8px] border border-[#32302f] bg-[#1d1c19] text-[#ebdbb2] font-mono select-none overflow-hidden">
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#32302f]">
        <div className="flex items-center gap-2.5 text-sm sm:text-base font-bold tracking-tight">
          <span className="h-2.5 w-2.5 rounded-full bg-[#fabd2f] inline-block" />
          <span>
            <span className="text-[#fabd2f]">Archive</span>{' '}
            <span className="text-[#ebdbb2]">2015 – Present</span>
          </span>
        </div>
        <span className="text-xs text-[#928374]">V11.0Y</span>
      </div>

      <div className="px-5 py-4 space-y-3">
        <div className="flex items-center justify-between text-[11px] uppercase tracking-wider text-[#928374]">
          <span>PRESERVED EARLY REPOSITORIES</span>
          <span className="text-[#bdae93] font-semibold">5 SYSTEMS</span>
        </div>

        <div className="rounded-[8px] border border-[#3c3836] bg-[#242220] px-4 py-3 flex items-center justify-between gap-4">
          <div className="min-w-0">
            <div className="text-sm font-bold text-[#ebdbb2] truncate">
              stefanutc1/old → stefanutc1/university
            </div>
            <div className="text-xs text-[#928374] truncate mt-0.5">
              PAWN/MySQL (2015) · Vue 3 · PHP · Spring Boot · Proxmox
            </div>
          </div>
          <div className="text-right text-xs shrink-0 space-y-0.5">
            <div className="text-[#928374]">
              since <span className="text-[#ebdbb2] font-bold">2015</span>
            </div>
            <div className="text-[#928374]">
              feaa <span className="text-[#fabd2f] font-bold">2024–2027</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
