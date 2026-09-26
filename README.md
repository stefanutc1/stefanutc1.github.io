# Moană Ștefănuț-Cornel (`@stefanutc1`) — Personal Presentation & Engineering Blog

[![CI/CD — Build & Deploy Next.js 15 to GitHub Pages](https://github.com/stefanutc1/stefanutc1.github.io/actions/workflows/pages.yml/badge.svg)](https://github.com/stefanutc1/stefanutc1.github.io/actions/workflows/pages.yml)

**Live Website:** [https://stefanutc1.github.io/](https://stefanutc1.github.io/)

Acest repository găzduiește site-ul de prezentare personală și jurnalul tehnic al lui **Moană Ștefănuț-Cornel** (`@stefanutc1`), construit cu **Next.js 15 (App Router)**, **React 19**, **TypeScript 5.7** și **Tailwind CSS 3.4**, și publicat automat pe **GitHub Pages** prin pipeline-ul CI/CD din [`.github/workflows/pages.yml`](./.github/workflows/pages.yml).

---

## Secțiuni Principale

1. **Despre Mine & Prezentare Personală (`Codez din 2015` · `FEAA UCV 2024 – 2027`)**:
   - Povestea inginerească începută în **septembrie 2015** (`11+ ani de cod`, arhivată în [`stefanutc1/old`](https://github.com/stefanutc1/old)), parcursul academic la **Universitatea din Craiova — FEAA, Informatică Economică (2024 – 2027)** și terminalul interactiv `stefanut@datacenter:~$` (cu suport pentru comenzile `whoami`, `old`, `blog`, `fleet`, `dfir`, `projects`, `stack`).
2. **Jurnal Tehnic & Blog de Inginerie (7 Articole Lung-Format RO / EN)**:
   - `POST-01`: Anatomia campaniei de phishing Media Galaxy (`yiyangsaas.com` / `23.224.199.13`) și blocarea națională prin DNSC (`#178465`).
   - `POST-02`: Arhitectura și securitatea platformei Core-Banking (Registru ACID, PCI-DSS v4.0, 5 scenarii MITRE ATT&CK).
   - `POST-03`: Construirea și operarea datacenter-ului homelab cu 4 noduri (Proxmox VE 9.2, OPNsense 24.7, 5 VLAN-uri, 57 module Terraform).
   - `POST-04`: Analiza tehnică a atacurilor Browser-in-the-Middle (Steam OpenID) și Vishing bancar în timp real (Revolut OTP Relay).
   - `POST-05`: Decompilarea unei platforme de Task Scam (`/api/v1/site/config` withdrawal lock & SQL Injection).
   - `POST-06`: Writeup complet (100%) pentru provocările CTF InvataCyber.ro (Reflected XSS, Blind SQLi, Jinja2 SSTI).
   - `POST-07`: *De la Scripturi PAWN și Servere SA-MP în 2015 la Infrastructură Enterprise și Securitate Cibernetică: 11+ Ani de Cod prin Arhiva `stefanutc1/old`* (`RedZone`, `NQGaming`, `Crowland Wiki`, `Kronick`, `Roadman Bot`).
3. **Arhiva de Proiecte (2015 – 2027)**:
   - Catalog filtrabil pentru infrastructura homelab ([`stefanutc1/infrastructure`](https://github.com/stefanutc1/infrastructure)), proiectele universitare și lucrarea de licență ([`stefanutc1/proiecte`](https://github.com/stefanutc1/proiecte)) și arhiva istorică 2015–2023 ([`stefanutc1/old`](https://github.com/stefanutc1/old)).

---

## CI/CD & Dezvoltare Locală

La fiecare `push` pe ramura `main`, pipeline-ul GitHub Actions ([`.github/workflows/pages.yml`](./.github/workflows/pages.yml)) execută:
1. **CI (`ci-build`)**: `npm ci` $\rightarrow$ verificare strictă TypeScript (`npx tsc --noEmit`) $\rightarrow$ export static Next.js 15 (`npm run build` în `./out`) $\rightarrow$ validare integritate artefacte.
2. **CD (`cd-deploy`)**: publicare automată pe GitHub Pages (`actions/deploy-pages@v4`).

```bash
npm install
npm run dev     # Server local la http://localhost:3000
npm run build   # Export static Next.js 15 în ./out
```