# Moană Ștefănuț-Cornel (`@stefanutc1`) — Personal Engineering & Cybersecurity Portal

<div align="center">

[![Live Website](https://img.shields.io/badge/Live%20Website-stefanutc1.github.io-brightgreen?style=flat&logo=github)](https://stefanutc1.github.io/)
[![Datacenter Twin](https://img.shields.io/badge/Datacenter%20Digital%20Twin-Angular%2020-dd0031?style=flat&logo=angular)](https://stefanutc1.github.io/infrastructure/)
[![Banking Kiosk](https://img.shields.io/badge/Core--Banking%20Demo-Live%20Kiosk-blue?style=flat&logo=springboot)](https://stefanutc1.github.io/proiecte/)
[![University](https://img.shields.io/badge/University-Universitatea%20din%20Craiova%20%7C%20FEAA-informational?style=flat)](https://feaa.ucv.ro/)

</div>

---

## 1. Prezentare Generală / Overview

Acest repository găzduiește site-ul personal de prezentare și portofoliul centralizat pentru **Moană Ștefănuț-Cornel** (`@stefanutc1`), publicat la adresa **[https://stefanutc1.github.io/](https://stefanutc1.github.io/)**.

Portalul reunește într-o interfață **Obsidian Editorial** bilingvă (**RO / EN**) toate proiectele de infrastructură, securitate cibernetică (DFIR / Threat Intelligence) și inginerie software:

1. **[Enterprise Homelab & Datacenter Digital Twin (`stefanutc1/infrastructure`)](https://github.com/stefanutc1/infrastructure)**
   - Cluster hibrid pe 4 noduri fizice (Proxmox VE 9.2 x86_64 12 GB DDR4 + ZRAM, OpenMediaVault NAS, Apple Silicon ARM64, Kubernetes k3s Worker).
   - 57 module Terraform, 18 playbook-uri Ansible, firewall OPNsense 24.7 pe 5 VLAN-uri 802.1Q, Wazuh SIEM/XDR, stivă LGTM (Loki, Grafana, Telegraf, Prometheus) și inferență AI locală (Ollama GTX 1050 Ti).
   - Portal 3D interactiv: **[https://stefanutc1.github.io/infrastructure/](https://stefanutc1.github.io/infrastructure/)**
2. **[Lucrare de Licență & Portofoliu Software (`stefanutc1/proiecte`)](https://github.com/stefanutc1/proiecte)**
   - Teza de licență *„Arhitectura și Securitatea Sistemelor Informatice Bancare: Proiectarea, Implementarea și Auditul Rezilienței Cibernetice într-un Mediu Virtualizat”* (FEAA, Universitatea din Craiova — Informatică Economică, 2026).
   - Core-Banking API (Java 17 / Spring Boot 3.2), motoare Python 3.11 (Double-Entry Ledger, PCI-DSS v4.0 Payment Gateway, SHA-256 Audit Monitor, Simulator MITRE ATT&CK cu 5 scenarii) și 13 proiecte academice și software (Next.js 15, React 19, C++/MFC, C#, MySQL 8.0, Cisco Packet Tracer).
   - Demo Live Terminal Bancar: **[https://stefanutc1.github.io/proiecte/](https://stefanutc1.github.io/proiecte/)**
3. **Investigații Criminalistică Digitală (DFIR) & Threat Intelligence**
   - `SEC-2026-ECOM-005` — Media Galaxy Brand Spoofing & Chinese SaaS C2 (`yiyangsaas.com`), 30 probe criminalistice, takedown național DNSC `#178465` / PNRISC.
   - `SEC-2026-VISH-002` — Revolut FinTech Vishing & Live OTP Relay Forensics.
   - `SEC-2026-TASK-003` — Task Scam Platform Unauthenticated API & SQLi Analysis.
   - `SEC-2025-AITM-004` — Steam OpenID Browser-in-the-Middle (BitM) Phishing.
   - `SEC-2025-MRR-001` — TikTok Algorithmic MRR Marketing Funnel OSINT.
   - Reproduceri CVE în laborator & writeup-uri 100% InvataCyber CTF.

---

## 2. Funcționalități Portal (`index.html`)

- **Comutare Instantanee Limbă (RO / EN)** și **Temă (Obsidian Dark / Crisp Light)** cu persistență în `localStorage`.
- **Command Palette (`⌘K` / `Ctrl+K`)** pentru căutare rapidă în toate proiectele, dosarele DFIR și nodurile hardware.
- **Terminal Interactiv (`stefanut@datacenter:~$`)** integrat în secțiunea Hero (`help`, `whoami`, `fleet`, `dfir`, `projects`, `stack`, `clear`).
- **Inspector Modal** cu detalii arhitecturale, specificații tehnice și linkuri directe către codul sursă și demonstrațiile live.

---

## 3. Contact

- **Autor:** Moană Ștefănuț-Cornel (`@stefanutc1`)
- **Instituție:** Universitatea din Craiova — Facultatea de Economie și Administrarea Afacerilor (FEAA), Informatică Economică
- **Email:** `moana.stefanut.f8p@student.ucv.ro`
- **Website:** [https://stefanutc1.github.io/](https://stefanutc1.github.io/)