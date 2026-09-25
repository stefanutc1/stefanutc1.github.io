# Moană Ștefănuț-Cornel (`@stefanutc1`) — Personal Presentation & Engineering Blog

**Live Website:** [https://stefanutc1.github.io/](https://stefanutc1.github.io/)

Acest repository găzduiește site-ul de prezentare personală și blogul tehnic al lui **Moană Ștefănuț-Cornel** (`@stefanutc1`), construit cu **Next.js 15 (App Router)**, **React 19**, **TypeScript 5.7** și **Tailwind CSS 3.4**.

## Secțiuni Principale

1. **Despre Mine & Prezentare Personală**:
   - Povestea inginerească, parcursul academic la Universitatea din Craiova (FEAA — Informatică Economică, Promoția 2026) și terminalul interactiv `stefanut@datacenter:~$`.
2. **Jurnal Tehnic & Blog de Inginerie (6 Articole Lung-Format RO/EN)**:
   - `POST-01`: Anatomia campaniei de phishing Media Galaxy (`yiyangsaas.com` / `23.224.199.13`) și blocarea națională prin DNSC (`#178465`).
   - `POST-02`: Arhitectura și securitatea platformei Core-Banking (Lucrare de Licență — Registru ACID, PCI-DSS v4.0, 5 scenarii MITRE ATT&CK).
   - `POST-03`: Construirea și operarea datacenter-ului homelab cu 4 noduri (Proxmox VE 9.2, OPNsense 24.7, 5 VLAN-uri, 57 module Terraform).
   - `POST-04`: Analiza tehnică a atacurilor Browser-in-the-Middle (Steam OpenID) și Vishing bancar în timp real (Revolut OTP Relay).
   - `POST-05`: Decompilarea unei platforme de Task Scam (`/api/v1/site/config` withdrawal lock & SQL Injection).
   - `POST-06`: Writeup complet (100%) pentru provocările CTF InvataCyber.ro (Reflected XSS, Blind SQLi, Jinja2 SSTI).
3. **Arhiva de Proiecte & Sisteme Flagship**:
   - Catalog filtrabil pentru sistemele de producție ([`stefanutc1/infrastructure`](https://github.com/stefanutc1/infrastructure)), lucrarea de licență și cele 43+ proiecte universitare ([`stefanutc1/proiecte`](https://github.com/stefanutc1/proiecte)).

## Dezvoltare Locală & Build

```bash
npm install
npm run dev     # Server local la http://localhost:3000
npm run build   # Export static Next.js 15 în ./out
```