'use client';

import React, { useState, useEffect, useMemo } from 'react';
import {
  BookOpen,
  Server,
  Code2,
  Search,
  Sun,
  Moon,
  Globe,
  ArrowUpRight,
  Clock,
  Calendar,
  MapPin,
  GraduationCap,
  Check,
  Copy,
  ExternalLink,
  Sparkles,
  User,
  FileText,
  X,
  Mail,
  ChevronRight,
  ShieldCheck,
  Layers,
  Cpu,
  Terminal,
} from 'lucide-react';
import { BLOG_POSTS, BlogPost } from '@/data/blog';
import {
  PERSONAL_BIO,
  TIMELINE_EVENTS,
  PORTFOLIO_ITEMS,
  CLUSTER_NODES,
  TECH_STACK_PILLARS,
  ProjectItem,
} from '@/data/portfolio';
import ArticleReaderModal from '@/components/ArticleReaderModal';
import InteractiveTerminal from '@/components/InteractiveTerminal';
import CommandPalette from '@/components/CommandPalette';

type ActiveTab = 'all' | 'blog' | 'about' | 'projects' | 'infra';
type BlogCategoryFilter = 'all' | 'dfir' | 'fintech' | 'infra' | 'ctf';
type PortfolioCategoryFilter =
  | 'all'
  | 'flagship'
  | 'cyber'
  | 'web'
  | 'systems'
  | 'datanet';

/* Corner Crosshair Ornament matching drivepoint.ro (.framer-6xibl3 / .framer-1tqv82p / .framer-17ehes9 / .framer-ujepnu) */
function SectionCrosshairs() {
  return (
    <>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-[9px] -left-[5px] z-20 font-mono text-xs leading-none text-[#827470] select-none"
      >
        +
      </span>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-[9px] -right-[5px] z-20 font-mono text-xs leading-none text-[#827470] select-none"
      >
        +
      </span>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-[9px] -left-[5px] z-20 font-mono text-xs leading-none text-[#827470] select-none"
      >
        +
      </span>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-[9px] -right-[5px] z-20 font-mono text-xs leading-none text-[#827470] select-none"
      >
        +
      </span>
    </>
  );
}

export default function HomePage() {
  const [lang, setLang] = useState<'ro' | 'en'>('ro');
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [activeTab, setActiveTab] = useState<ActiveTab>('all');

  // Blog filtering state
  const [blogCategory, setBlogCategory] = useState<BlogCategoryFilter>('all');
  const [blogQuery, setBlogQuery] = useState('');
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  // Portfolio filtering state
  const [portfolioFilter, setPortfolioFilter] =
    useState<PortfolioCategoryFilter>('all');
  const [activePortfolioItem, setActivePortfolioItem] =
    useState<ProjectItem | null>(null);

  // Command palette & BibTeX copy
  const [cmdOpen, setCmdOpen] = useState(false);
  const [copiedBibtex, setCopiedBibtex] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setCmdOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const filteredBlogPosts = useMemo(() => {
    const q = blogQuery.trim().toLowerCase();
    return BLOG_POSTS.filter((post) => {
      const matchesCat =
        blogCategory === 'all' || post.category === blogCategory;
      const title = lang === 'ro' ? post.titleRo : post.titleEn;
      const subtitle = lang === 'ro' ? post.subtitleRo : post.subtitleEn;
      const excerpt = lang === 'ro' ? post.excerptRo : post.excerptEn;
      const matchesQuery =
        !q ||
        title.toLowerCase().includes(q) ||
        subtitle.toLowerCase().includes(q) ||
        excerpt.toLowerCase().includes(q) ||
        post.tags.some((t) => t.toLowerCase().includes(q));
      return matchesCat && matchesQuery;
    });
  }, [blogCategory, blogQuery, lang]);

  const filteredPortfolio = useMemo(() => {
    return PORTFOLIO_ITEMS.filter(
      (item) => portfolioFilter === 'all' || item.category === portfolioFilter
    );
  }, [portfolioFilter]);

  const bibtexString = `@mastersthesis{moana2026corebanking,
  author       = {Moană, Ștefănuț-Cornel},
  title        = {Arhitectura și Securitatea Sistemelor Informatice Bancare: Registru ACID, Gateway PCI-DSS v4.0 și Detecție SIEM},
  school       = {Universitatea din Craiova, FEAA, Informatică Economică},
  year         = {2026},
  address      = {Craiova, România},
  url          = {https://stefanutc1.github.io}
}`;

  const copyBibtex = () => {
    navigator.clipboard.writeText(bibtexString);
    setCopiedBibtex(true);
    setTimeout(() => setCopiedBibtex(false), 2000);
  };

  const navItems: {
    id: ActiveTab;
    label: { ro: string; en: string };
    icon: React.ReactNode;
  }[] = [
    {
      id: 'all',
      label: { ro: 'Prezentare', en: 'Overview' },
      icon: <Sparkles className="w-3.5 h-3.5" />,
    },
    {
      id: 'blog',
      label: { ro: 'Jurnal Tehnic (7)', en: 'Tech Journal (7)' },
      icon: <BookOpen className="w-3.5 h-3.5" />,
    },
    {
      id: 'projects',
      label: { ro: 'Portofoliu & Licență', en: 'Portfolio & Thesis' },
      icon: <Code2 className="w-3.5 h-3.5" />,
    },
    {
      id: 'about',
      label: { ro: 'Parcurs (2015–2027)', en: 'Journey (2015–2027)' },
      icon: <User className="w-3.5 h-3.5" />,
    },
    {
      id: 'infra',
      label: { ro: 'Datacenter & Stack', en: 'Datacenter & Stack' },
      icon: <Server className="w-3.5 h-3.5" />,
    },
  ];

  const showAbout = activeTab === 'all' || activeTab === 'about';
  const showBlog = activeTab === 'all' || activeTab === 'blog';
  const showProjects = activeTab === 'all' || activeTab === 'projects';
  const showInfra = activeTab === 'all' || activeTab === 'infra';

  const featuredPost = BLOG_POSTS[0];

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg)] text-[var(--ink)] relative overflow-x-hidden">
      {/* =====================================================================
          STICKY TOP NAVBAR (drivepoint.ro blur(20px) + rgba(12,12,12,0.75))
         ===================================================================== */}
      <header
        className="sticky top-0 z-40 w-full border-b border-[var(--border)] transition-colors"
        style={{
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          backgroundColor:
            theme === 'dark'
              ? 'rgba(12, 12, 12, 0.78)'
              : 'rgba(239, 235, 229, 0.85)',
        }}
      >
        <div className="mx-auto max-w-[1200px] px-4 sm:px-8">
          <div className="flex h-20 items-center justify-between gap-4">
            {/* Brand Identity */}
            <button
              onClick={() => setActiveTab('all')}
              className="flex items-center gap-3.5 text-left group min-w-0"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-tl-[14px] rounded-br-[14px] border border-[#52212e] bg-[#401823] font-display text-sm font-semibold tracking-tight text-[#efebe5] group-hover:bg-[#52212e] transition">
                MȘ
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2.5">
                  <span className="font-display text-base font-medium tracking-tight text-[var(--ink)] truncate">
                    {PERSONAL_BIO.name}
                  </span>
                  <span className="hidden sm:inline-flex items-center gap-1.5 rounded-[30px] bg-[#52212e] px-2.5 py-0.5 text-[11px] font-mono text-[#efebe5]">
                    <span className="h-1.5 w-1.5 rounded-[2px] bg-[#efebe5]" />
                    {PERSONAL_BIO.handle}
                  </span>
                </div>
                <div className="text-[11px] font-mono text-[var(--ink-muted)] truncate">
                  {lang === 'ro'
                    ? 'Inginerie Software din 2015 · FEAA UCV (2024 – 2027)'
                    : 'Software Engineering since 2015 · FEAA UCV (2024 – 2027)'}
                </div>
              </div>
            </button>

            {/* Center Navigation Links (drivepoint.ro clean link bar) */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium transition-all ${
                      isActive
                        ? 'rounded-tl-[12px] rounded-br-[12px] bg-[#52212e] text-[#efebe5] border border-[#52212e]'
                        : 'text-[var(--ink-secondary)] hover:text-[var(--ink)]'
                    }`}
                  >
                    {item.icon}
                    <span>{item.label[lang]}</span>
                  </button>
                );
              })}
            </nav>

            {/* Right Actions & Chamfered CTA */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCmdOpen(true)}
                className="inline-flex items-center gap-2 rounded-tl-[12px] rounded-br-[12px] border border-[var(--border-strong)] bg-[var(--surface)] px-3 py-2 text-xs text-[var(--ink-secondary)] hover:text-[var(--ink)] hover:border-[#efebe5]/40 transition"
                title="Search (⌘K)"
              >
                <Search className="w-3.5 h-3.5" />
                <span className="hidden sm:inline font-mono text-[11px]">⌘K</span>
              </button>

              <button
                onClick={() => setLang((l) => (l === 'ro' ? 'en' : 'ro'))}
                className="inline-flex items-center gap-1 rounded-tl-[12px] rounded-br-[12px] border border-[var(--border-strong)] bg-[var(--surface)] px-2.5 py-2 text-xs font-mono uppercase text-[var(--ink-secondary)] hover:text-[var(--ink)] transition"
                title="RO / EN"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>{lang}</span>
              </button>

              <button
                onClick={() =>
                  setTheme((t) => (t === 'dark' ? 'light' : 'dark'))
                }
                className="inline-flex items-center justify-center rounded-tl-[12px] rounded-br-[12px] border border-[var(--border-strong)] bg-[var(--surface)] p-2 text-[var(--ink-secondary)] hover:text-[var(--ink)] transition"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4" />
                ) : (
                  <Moon className="w-4 h-4" />
                )}
              </button>

              <a
                href={PERSONAL_BIO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 dp-btn-primary px-4 py-2 text-xs font-medium"
              >
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Mobile Navigation Bar */}
          <div className="flex lg:hidden items-center gap-1.5 overflow-x-auto pb-3 pt-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`inline-flex items-center gap-1.5 shrink-0 px-3 py-1.5 text-xs font-medium transition ${
                  activeTab === item.id
                    ? 'rounded-tl-[12px] rounded-br-[12px] bg-[#52212e] text-[#efebe5]'
                    : 'rounded-tl-[12px] rounded-br-[12px] border border-[var(--border)] bg-[var(--surface)] text-[var(--ink-secondary)]'
                }`}
              >
                {item.icon}
                <span>{item.label[lang]}</span>
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* =====================================================================
          ARCHITECTURAL 1200PX STRUCTURAL FRAME (.framer-zu7jls)
         ===================================================================== */}
      <main className="flex-1 mx-auto w-full max-w-[1200px] border-x border-[var(--border)] relative">
        {/* Background 3-Column Structural Guide Lines (matching drivepoint.ro .framer-zu7jls) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 grid grid-cols-1 lg:grid-cols-3 divide-x divide-[var(--border)] opacity-45 z-0"
        >
          <div />
          <div />
          <div />
        </div>

        {/* ===================================================================
            1. HERO & PERSONAL PRESENTATION (drivepoint.ro Hero UX)
           =================================================================== */}
        {showAbout && (
          <section
            className="relative z-10 border-b border-[var(--border)] px-5 sm:px-10 py-12 sm:py-20 overflow-hidden"
            style={{
              background:
                theme === 'dark'
                  ? 'linear-gradient(270deg, rgba(12, 12, 12, 0.58) 0%, rgb(23, 9, 13) 100%)'
                  : undefined,
            }}
          >
            <SectionCrosshairs />
            {/* Ambient Burgundy Glow Orb */}
            <div
              aria-hidden="true"
              className="dp-ambient-orb absolute -top-24 -left-24 z-0"
            />
            <div
              aria-hidden="true"
              className="dp-ambient-orb absolute -bottom-32 right-10 z-0"
            />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Left 7 Columns: drivepoint.ro Editorial Display + Story */}
              <div className="lg:col-span-7 space-y-6">
                {/* drivepoint.ro Status Pill (#52212e fill, 30px radius, #efebe5 square-rounded dot) */}
                <div className="inline-flex flex-wrap items-center gap-2.5 rounded-[30px] bg-[#52212e] px-4 py-1.5 text-xs font-mono text-[#efebe5] shadow-sm">
                  <span className="h-2 w-2 rounded-[2.5px] bg-[#efebe5]" />
                  <span>
                    {lang === 'ro'
                      ? 'EXPERIENȚĂ TEHNICĂ DIN 2015 · FEAA UCV (2024 – 2027)'
                      : 'ENGINEERING EXPERIENCE SINCE 2015 · FEAA UCV (2024 – 2027)'}
                  </span>
                </div>

                {/* Mixed Roman + Light Italic Inter Display Headline (drivepoint.ro signature) */}
                <div className="space-y-2">
                  <h1 className="font-display text-4xl sm:text-5xl lg:text-[56px] font-medium tracking-tight text-[var(--ink)] leading-[1.06]">
                    {PERSONAL_BIO.name}
                    <span className="block font-display font-light italic text-2xl sm:text-3xl lg:text-[34px] text-[var(--ink-secondary)] mt-2 leading-[1.18]">
                      {lang === 'ro'
                        ? 'sisteme distribuite, arhitectură Core-Banking și investigații DFIR.'
                        : 'distributed systems, Core-Banking architecture, and DFIR investigations.'}
                    </span>
                  </h1>
                </div>

                {/* Coordinates Bar */}
                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[var(--ink-muted)] pt-1">
                  <span className="inline-flex items-center gap-1.5 text-[var(--ink-secondary)]">
                    <GraduationCap className="w-4 h-4 text-[#52212e]" />
                    {lang === 'ro'
                      ? 'Universitatea din Craiova · FEAA — Informatică Economică (2024 – 2027)'
                      : 'University of Craiova · FEAA — Business Informatics (2024 – 2027)'}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#52212e]" />
                    {lang === 'ro'
                      ? PERSONAL_BIO.locationRo
                      : PERSONAL_BIO.locationEn}
                  </span>
                  <a
                    href={`mailto:${PERSONAL_BIO.email}`}
                    className="inline-flex items-center gap-1.5 hover:text-[var(--ink)] transition"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#52212e]" />
                    {PERSONAL_BIO.email}
                  </a>
                </div>

                {/* Narrative Paragraphs with drivepoint.ro 4px #52212e left border */}
                <div className="dp-heading-accent space-y-3.5 text-sm sm:text-[15px] text-[var(--ink-secondary)] leading-relaxed">
                  {(lang === 'ro'
                    ? PERSONAL_BIO.storyParagraphsRo
                    : PERSONAL_BIO.storyParagraphsEn
                  ).map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>

                {/* Signature Asymmetric Chamfered CTAs (16px 0 16px 0) */}
                <div className="flex flex-wrap items-center gap-3.5 pt-2">
                  <button
                    onClick={() => setActivePost(BLOG_POSTS[0])}
                    className="dp-btn-primary inline-flex items-center gap-2.5 px-5 py-3 text-xs sm:text-sm font-medium"
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>
                      {lang === 'ro'
                        ? 'Citește Ultimul Articol (Media Galaxy DFIR)'
                        : 'Read Latest Article (Media Galaxy DFIR)'}
                    </span>
                  </button>

                  <button
                    onClick={() => setActivePost(BLOG_POSTS[6])}
                    className="dp-btn-cream inline-flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-medium"
                  >
                    <FileText className="w-4 h-4" />
                    <span>
                      {lang === 'ro'
                        ? 'Retrospectivă Tehnică (2015 – Prezent)'
                        : 'Engineering Retrospective (2015 – Present)'}
                    </span>
                  </button>

                  <a
                    href="#projects"
                    onClick={() => setActiveTab('all')}
                    className="dp-btn-outline inline-flex items-center gap-2 px-4 py-3 text-xs sm:text-sm font-medium"
                  >
                    <span>
                      {lang === 'ro'
                        ? 'Vezi Portofoliul'
                        : 'Explore Portfolio'}
                    </span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Right 5 Columns: Showroom Dossier Card & Interactive Shell */}
              <div className="lg:col-span-5 space-y-5">
                <div className="dp-glass-card p-6 space-y-5">
                  <div className="flex items-center justify-between border-b border-[var(--border)] pb-4">
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-widest text-[var(--ink-muted)]">
                        {lang === 'ro'
                          ? 'DOSAR INGINERESC & TELEMETRIE'
                          : 'ENGINEERING DOSSIER & TELEMETRY'}
                      </div>
                      <div className="font-display text-base font-medium text-[var(--ink)] mt-0.5">
                        Moană Ștefănuț-Cornel ({PERSONAL_BIO.handle})
                      </div>
                    </div>
                    <span className="rounded-[30px] bg-[#52212e] px-3 py-1 text-[11px] font-mono text-[#efebe5]">
                      FEAA 2024 – 2027
                    </span>
                  </div>

                  {/* 4 Key Metrics in drivepoint.ro Spec Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="border border-[var(--border)] bg-[var(--bg)]/60 p-3.5">
                      <div className="font-display text-xl font-medium text-[var(--ink)]">
                        2015 – Prezent
                      </div>
                      <div className="text-[11px] font-mono text-[var(--ink-muted)] mt-0.5">
                        {lang === 'ro'
                          ? 'Experiență Practică în Cod'
                          : 'Hands-On Coding Experience'}
                      </div>
                    </div>
                    <div className="border border-[var(--border)] bg-[var(--bg)]/60 p-3.5">
                      <div className="font-display text-xl font-medium text-[var(--ink)]">
                        7 Articole
                      </div>
                      <div className="text-[11px] font-mono text-[var(--ink-muted)] mt-0.5">
                        {lang === 'ro'
                          ? 'Jurnal Tehnic & Studii DFIR'
                          : 'Long-Form Technical Posts'}
                      </div>
                    </div>
                    <div className="border border-[var(--border)] bg-[var(--bg)]/60 p-3.5">
                      <div className="font-display text-xl font-medium text-[var(--ink)]">
                        4 Noduri + 5 VLAN
                      </div>
                      <div className="text-[11px] font-mono text-[var(--ink-muted)] mt-0.5">
                        {lang === 'ro'
                          ? 'Cluster Proxmox VE 9.2 & k3s'
                          : 'Proxmox VE 9.2 & k3s Cluster'}
                      </div>
                    </div>
                    <div className="border border-[var(--border)] bg-[var(--bg)]/60 p-3.5">
                      <div className="font-display text-xl font-medium text-[var(--ink)]">
                        #178465 DNSC
                      </div>
                      <div className="text-[11px] font-mono text-[var(--ink-muted)] mt-0.5">
                        {lang === 'ro'
                          ? 'Takedown Național Phishing C2'
                          : 'National Phishing C2 Takedown'}
                      </div>
                    </div>
                  </div>

                  {/* Direct Repository Links */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1">
                    <a
                      href="https://github.com/stefanutc1/infrastructure"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="dp-btn-outline inline-flex items-center justify-between px-3 py-2 text-[11px] font-mono"
                    >
                      <span className="truncate">infrastructure</span>
                      <ExternalLink className="w-3 h-3 shrink-0" />
                    </a>
                    <a
                      href="https://github.com/stefanutc1/proiecte"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="dp-btn-outline inline-flex items-center justify-between px-3 py-2 text-[11px] font-mono"
                    >
                      <span className="truncate">proiecte (24–27)</span>
                      <ExternalLink className="w-3 h-3 shrink-0" />
                    </a>
                    <a
                      href="https://github.com/stefanutc1/old"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="dp-btn-outline inline-flex items-center justify-between px-3 py-2 text-[11px] font-mono"
                    >
                      <span className="truncate">old (2015–2023)</span>
                      <ExternalLink className="w-3 h-3 shrink-0" />
                    </a>
                  </div>
                </div>

                {/* Interactive Engineering Terminal */}
                <InteractiveTerminal lang={lang} />
              </div>
            </div>
          </section>
        )}

        {/* ===================================================================
            2. THREE PILLARS OF ENGINEERING (drivepoint.ro "O experiență..." 3-Col Glass Section)
           =================================================================== */}
        {showAbout && (
          <section className="relative z-10 border-b border-[var(--border)] px-5 sm:px-10 py-14 sm:py-16">
            <SectionCrosshairs />
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
              <div className="dp-heading-accent">
                <div className="text-xs font-mono uppercase tracking-widest text-[var(--ink-muted)] mb-1">
                  {lang === 'ro'
                    ? '[01] · DIRECȚII PRINCIPALE DE CERCETARE ȘI INGINERIE'
                    : '[01] · CORE ENGINEERING & RESEARCH PILLARS'}
                </div>
                <h2 className="font-display text-3xl sm:text-4xl font-medium text-[var(--ink)] leading-tight">
                  {lang === 'ro' ? (
                    <>
                      Arhitectură software riguroasă,{' '}
                      <span className="font-light italic text-[var(--ink-secondary)]">
                        verificată în producție.
                      </span>
                    </>
                  ) : (
                    <>
                      Rigorous software architecture,{' '}
                      <span className="font-light italic text-[var(--ink-secondary)]">
                        verified in production.
                      </span>
                    </>
                  )}
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-[var(--ink-secondary)] max-w-md leading-relaxed">
                {lang === 'ro'
                  ? 'Fiecare sistem din portofoliu combină proiectarea aplicațiilor critice (de la primele servere din 2015 până la licența Core-Banking) cu infrastructură bare-metal și analiză criminalistică DFIR.'
                  : 'Every system in my portfolio bridges critical application engineering (from early 2015 servers to my Core-Banking thesis) with bare-metal infrastructure and DFIR analysis.'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                {
                  index: '01',
                  icon: <Code2 className="w-5 h-5 text-[#efebe5]" />,
                  titleRo: 'Inginerie Software (2015 – Prezent)',
                  titleEn: 'Software Engineering (2015 – Present)',
                  descRo:
                    'Peste un deceniu de practică continuă: de la gamemode-uri concurente PAWN/MySQL și platforme web full-stack (stefanutc1/old, 2015–2023) la microservicii Java 17 Spring Boot, registru contabil ACID și aplicații Next.js 15 / Angular 20.',
                  descEn:
                    'Over a decade of continuous practice: from concurrent PAWN/MySQL servers and full-stack web portals (stefanutc1/old, 2015–2023) to Java 17 Spring Boot microservices, ACID ledgers, and Next.js 15 / Angular 20 apps.',
                },
                {
                  index: '02',
                  icon: <ShieldCheck className="w-5 h-5 text-[#efebe5]" />,
                  titleRo: 'Investigații DFIR & Securitate',
                  titleEn: 'DFIR Investigations & Security',
                  descRo:
                    'Decompilare de kituri de phishing multi-step (yiyangsaas.com), detecție Browser-in-the-Middle (Steam OpenID, Revolut OTP Relay), audit SQLi și raportări oficiale finalizate cu takedown național DNSC (#178465).',
                  descEn:
                    'Decompiling multi-step phishing kits (yiyangsaas.com), detecting Browser-in-the-Middle relays (Steam OpenID, Revolut OTP), auditing SQLi exposures, and coordinating national DNSC takedowns (#178465).',
                },
                {
                  index: '03',
                  icon: <Server className="w-5 h-5 text-[#efebe5]" />,
                  titleRo: 'Infrastructură Hibridă & IaC',
                  titleEn: 'Hybrid Infrastructure & IaC',
                  descRo:
                    'Datacenter personal cu 4 noduri fizice (Proxmox VE 9.2, OpenMediaVault NAS, Apple Silicon ARM64, Kubernetes k3s), segmentat în 5 VLAN-uri OPNsense și automatizat prin 57 fișiere Terraform și 18 roluri Ansible.',
                  descEn:
                    'Personal 4-node bare-metal datacenter (Proxmox VE 9.2, OpenMediaVault NAS, Apple Silicon ARM64, Kubernetes k3s), segmented across 5 OPNsense VLANs and automated via 57 Terraform files and 18 Ansible roles.',
                },
              ].map((pillar) => (
                <div
                  key={pillar.index}
                  className="dp-glass-card p-6 sm:p-7 flex flex-col justify-between gap-6"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-tl-[12px] rounded-br-[12px] bg-[#52212e] border border-[#efebe5]/20">
                        {pillar.icon}
                      </div>
                      <span className="font-mono text-xs text-[var(--ink-muted)]">
                        [{pillar.index}]
                      </span>
                    </div>
                    <h3 className="font-display text-xl font-medium text-[var(--ink)]">
                      {lang === 'ro' ? pillar.titleRo : pillar.titleEn}
                    </h3>
                    <p className="text-xs sm:text-sm text-[var(--ink-secondary)] leading-relaxed">
                      {lang === 'ro' ? pillar.descRo : pillar.descEn}
                    </p>
                  </div>
                  <div className="h-[2px] w-12 bg-[#52212e]" />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ===================================================================
            3. ENGINEERING BLOG & TECHNICAL JOURNAL (drivepoint.ro Showroom Grid UX)
           =================================================================== */}
        {showBlog && (
          <section
            id="blog"
            className="relative z-10 border-b border-[var(--border)] px-5 sm:px-10 py-14 sm:py-16 space-y-10 scroll-mt-20"
          >
            <SectionCrosshairs />
            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="dp-heading-accent">
                <div className="text-xs font-mono uppercase tracking-widest text-[var(--ink-muted)] mb-1">
                  {lang === 'ro'
                    ? '[02] · JURNAL DE INGINERIE & BLOG PERSONAL'
                    : '[02] · ENGINEERING JOURNAL & PERSONAL BLOG'}
                </div>
                <h2 className="font-display text-3xl sm:text-4xl font-medium text-[var(--ink)] leading-tight">
                  {lang === 'ro' ? (
                    <>
                      Articole tehnice și investigații{' '}
                      <span className="font-light italic text-[var(--ink-secondary)]">
                        explicate în profunzime.
                      </span>
                    </>
                  ) : (
                    <>
                      Technical articles and investigations{' '}
                      <span className="font-light italic text-[var(--ink-secondary)]">
                        explained in depth.
                      </span>
                    </>
                  )}
                </h2>
              </div>

              <div className="relative min-w-[260px]">
                <Search className="w-3.5 h-3.5 text-[var(--ink-muted)] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={blogQuery}
                  onChange={(e) => setBlogQuery(e.target.value)}
                  placeholder={
                    lang === 'ro'
                      ? 'Caută în cele 7 articole...'
                      : 'Search all 7 articles...'
                  }
                  className="w-full rounded-tl-[14px] rounded-br-[14px] border border-[var(--border-strong)] bg-[var(--surface)] pl-9 pr-3.5 py-2 text-xs text-[var(--ink)] placeholder:text-[var(--ink-muted)] focus:outline-none focus:border-[#efebe5]"
                />
              </div>
            </div>

            {/* Featured Article Callout Banner (drivepoint.ro .framer-1fspcz5 4px left border burgundy banner) */}
            <div
              onClick={() => setActivePost(featuredPost)}
              className="dp-wine-banner cursor-pointer p-6 sm:p-9 transition-all hover:brightness-110 group"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono">
                  <span className="inline-flex items-center gap-2 rounded-[30px] bg-[#52212e] border border-[#efebe5]/30 px-3.5 py-1 text-[#efebe5]">
                    <span className="h-2 w-2 rounded-[2.5px] bg-[#efebe5]" />
                    {lang === 'ro' ? 'ARTICOL PRINCIPAL' : 'FEATURED REPORT'}
                  </span>
                  <span className="rounded-[30px] border border-[#d9d1ca]/25 px-3 py-1 text-[#d9d1ca]">
                    {lang === 'ro'
                      ? featuredPost.categoryLabelRo
                      : featuredPost.categoryLabelEn}
                  </span>
                  <span className="text-[#d9d1ca]/80 inline-flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {lang === 'ro' ? featuredPost.dateRo : featuredPost.dateEn}
                  </span>
                  <span className="text-[#d9d1ca]/80 inline-flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {featuredPost.readTime}
                  </span>
                </div>

                <span className="font-mono text-xs text-[#d9d1ca]">
                  {featuredPost.id}
                </span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-medium text-[#efebe5] leading-snug mb-3">
                {lang === 'ro' ? featuredPost.titleRo : featuredPost.titleEn}
              </h3>

              <p className="text-sm sm:text-base text-[#d9d1ca] leading-relaxed mb-6 max-w-4xl">
                {lang === 'ro'
                  ? featuredPost.excerptRo
                  : featuredPost.excerptEn}
              </p>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#d9d1ca]/15">
                <div className="flex flex-wrap gap-2">
                  {featuredPost.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-[6px] border border-[#d9d1ca]/20 bg-[#0c0c0c]/40 px-2.5 py-1 text-[11px] font-mono text-[#d9d1ca]"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <span className="dp-btn-cream inline-flex items-center gap-2 px-5 py-2.5 text-xs font-medium">
                  <span>
                    {lang === 'ro'
                      ? 'Citește studiul de caz complet'
                      : 'Read full case study'}
                  </span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </div>

            {/* Category Filter Buttons (drivepoint.ro chamfered tabs) */}
            <div className="flex flex-wrap items-center gap-2">
              {[
                {
                  id: 'all',
                  label: { ro: 'Toate Articolele (7)', en: 'All Articles (7)' },
                },
                {
                  id: 'dfir',
                  label: { ro: 'DFIR & Threat Intel', en: 'DFIR & Threat Intel' },
                },
                {
                  id: 'fintech',
                  label: { ro: 'Licență & Core-Banking', en: 'Thesis & Core-Banking' },
                },
                {
                  id: 'infra',
                  label: { ro: 'Homelab & Arhivă 2015+', en: 'Homelab & 2015+ Archive' },
                },
                {
                  id: 'ctf',
                  label: { ro: 'CTF & Exploit Dev', en: 'CTF & Exploit Dev' },
                },
              ].map((cat) => {
                const active = blogCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() =>
                      setBlogCategory(cat.id as BlogCategoryFilter)
                    }
                    className={`px-4 py-2 text-xs font-mono transition ${
                      active
                        ? 'dp-btn-primary font-medium'
                        : 'dp-btn-outline opacity-80 hover:opacity-100'
                    }`}
                  >
                    {cat.label[lang]}
                  </button>
                );
              })}
            </div>

            {/* Blog Articles Grid — Styled after drivepoint.ro Showroom Spec Cards (.framer-1ncbgsb) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredBlogPosts.map((post) => (
                <article
                  key={post.slug}
                  onClick={() => setActivePost(post)}
                  className="dp-showroom-card cursor-pointer flex flex-col justify-between group overflow-hidden"
                >
                  <div>
                    {/* Top Atmospheric Showroom Band with #52212e Status Pill */}
                    <div
                      className="relative px-5 pt-5 pb-4 border-b border-[var(--border)]"
                      style={{
                        background:
                          'linear-gradient(270deg, rgba(12, 12, 12, 0.55) 0%, rgba(64, 24, 35, 0.55) 100%)',
                      }}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="inline-flex items-center gap-2 rounded-[30px] bg-[#52212e] px-3 py-1 text-[11px] font-mono text-[#efebe5]">
                          <span className="h-1.5 w-1.5 rounded-[2px] bg-[#efebe5]" />
                          {lang === 'ro'
                            ? post.categoryLabelRo
                            : post.categoryLabelEn}
                        </span>
                        <span className="font-mono text-xs text-[var(--ink-muted)]">
                          {post.id}
                        </span>
                      </div>
                    </div>

                    {/* Title & Subtitle */}
                    <div className="p-5 space-y-2.5">
                      <h3 className="font-display text-lg sm:text-xl font-medium text-[var(--ink)] group-hover:text-[#efebe5] leading-snug line-clamp-2">
                        {lang === 'ro' ? post.titleRo : post.titleEn}
                      </h3>
                      <p className="text-xs text-[var(--ink-secondary)] leading-relaxed line-clamp-3">
                        {lang === 'ro' ? post.excerptRo : post.excerptEn}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Spec Telemetry Strip + Price/Metric Bar (exact drivepoint.ro card footer pattern) */}
                  <div>
                    {/* 4-Spec Strip */}
                    <div className="grid grid-cols-2 gap-2 px-5 py-3 border-t border-[var(--border)] bg-[var(--bg)]/40 text-[11px] font-mono text-[var(--ink-secondary)]">
                      <div className="inline-flex items-center gap-1.5 truncate">
                        <Calendar className="w-3.5 h-3.5 text-[#827470] shrink-0" />
                        <span className="truncate">
                          {lang === 'ro' ? post.dateRo : post.dateEn}
                        </span>
                      </div>
                      <div className="inline-flex items-center gap-1.5 truncate">
                        <Clock className="w-3.5 h-3.5 text-[#827470] shrink-0" />
                        <span>{post.readTime}</span>
                      </div>
                      <div className="inline-flex items-center gap-1.5 truncate">
                        <Layers className="w-3.5 h-3.5 text-[#827470] shrink-0" />
                        <span className="truncate">{post.tags[0]}</span>
                      </div>
                      <div className="inline-flex items-center gap-1.5 truncate">
                        <Terminal className="w-3.5 h-3.5 text-[#827470] shrink-0" />
                        <span className="truncate">
                          {post.sections.length}{' '}
                          {lang === 'ro' ? 'secțiuni' : 'sections'}
                        </span>
                      </div>
                    </div>

                    {/* Card Footer Bar with Primary Metric + Light Secondary Sub-label + ChevronRight */}
                    <div className="flex items-center justify-between px-5 py-4 border-t border-[var(--border)] bg-[var(--bg-elevated)]/70 group-hover:bg-[#401823]/40 transition">
                      <div className="min-w-0">
                        <div className="font-display text-sm font-semibold text-[var(--ink)] truncate">
                          {lang === 'ro'
                            ? 'Citește Articolul Complet'
                            : 'Read Full Article'}
                        </div>
                        <div className="font-display text-xs font-light text-[var(--ink-secondary)] truncate">
                          {post.tags.slice(0, 3).join(' · ')}
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-[var(--ink-secondary)] group-hover:text-[var(--ink)] group-hover:translate-x-1 transition-transform shrink-0" />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* ===================================================================
            4. FLAGSHIP SYSTEMS & UNIVERSITY PORTFOLIO ARCHIVE (2015 – 2027)
           =================================================================== */}
        {showProjects && (
          <section
            id="projects"
            className="relative z-10 border-b border-[var(--border)] px-5 sm:px-10 py-14 sm:py-16 space-y-10 scroll-mt-20"
          >
            <SectionCrosshairs />
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="dp-heading-accent">
                <div className="text-xs font-mono uppercase tracking-widest text-[var(--ink-muted)] mb-1">
                  {lang === 'ro'
                    ? '[03] · PORTOFOLIU DE SISTEME & LICENȚĂ (2015 – 2027)'
                    : '[03] · SYSTEMS PORTFOLIO & THESIS ARCHIVE (2015 – 2027)'}
                </div>
                <h2 className="font-display text-3xl sm:text-4xl font-medium text-[var(--ink)] leading-tight">
                  {lang === 'ro' ? (
                    <>
                      Sisteme flagship, dosare DFIR{' '}
                      <span className="font-light italic text-[var(--ink-secondary)]">
                        și proiecte universitare.
                      </span>
                    </>
                  ) : (
                    <>
                      Flagship systems, DFIR dossiers,{' '}
                      <span className="font-light italic text-[var(--ink-secondary)]">
                        and university projects.
                      </span>
                    </>
                  )}
                </h2>
              </div>

              {/* Filter Tabs */}
              <div className="flex flex-wrap gap-2">
                {[
                  { id: 'all', label: { ro: 'Toate', en: 'All' } },
                  {
                    id: 'flagship',
                    label: { ro: 'Flagship & Arhivă', en: 'Flagship & Archive' },
                  },
                  { id: 'cyber', label: { ro: 'DFIR & Cyber', en: 'DFIR & Cyber' } },
                  { id: 'web', label: { ro: 'Web & Cloud', en: 'Web & Cloud' } },
                  {
                    id: 'systems',
                    label: { ro: 'C++ / Java / C#', en: 'C++ / Java / C#' },
                  },
                  {
                    id: 'datanet',
                    label: { ro: 'SQL & Rețele Cisco', en: 'SQL & Cisco Net' },
                  },
                ].map((f) => {
                  const active = portfolioFilter === f.id;
                  return (
                    <button
                      key={f.id}
                      onClick={() =>
                        setPortfolioFilter(f.id as PortfolioCategoryFilter)
                      }
                      className={`px-3.5 py-1.5 text-xs font-mono transition ${
                        active
                          ? 'dp-btn-primary font-medium'
                          : 'dp-btn-outline opacity-80 hover:opacity-100'
                      }`}
                    >
                      {f.label[lang]}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3-Column Showroom Portfolio Grid (.dp-showroom-card) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredPortfolio.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setActivePortfolioItem(item)}
                  className="dp-showroom-card cursor-pointer flex flex-col justify-between group overflow-hidden"
                >
                  <div>
                    {/* Top Status Pill Bar */}
                    <div
                      className="flex items-center justify-between gap-2 px-5 pt-4 pb-3.5 border-b border-[var(--border)]"
                      style={{
                        background:
                          'linear-gradient(270deg, rgba(12, 12, 12, 0.5) 0%, rgba(36, 24, 30, 0.65) 100%)',
                      }}
                    >
                      <span className="inline-flex items-center gap-1.5 rounded-[30px] bg-[#52212e] px-3 py-0.5 text-[11px] font-mono text-[#efebe5] truncate">
                        <span className="h-1.5 w-1.5 rounded-[2px] bg-[#efebe5] shrink-0" />
                        <span className="truncate">{item.code}</span>
                      </span>
                      <span className="font-mono text-[11px] text-[var(--ink-muted)] shrink-0">
                        {item.badge}
                      </span>
                    </div>

                    {/* Body */}
                    <div className="p-5 space-y-2">
                      <h3 className="font-display text-lg font-medium text-[var(--ink)] group-hover:text-[#efebe5] leading-snug">
                        {lang === 'ro' ? item.titleRo : item.titleEn}
                      </h3>
                      <p className="text-xs text-[var(--ink-secondary)] leading-relaxed line-clamp-3">
                        {lang === 'ro' ? item.descRo : item.descEn}
                      </p>
                    </div>
                  </div>

                  {/* Spec Strip + Footer */}
                  <div>
                    <div className="px-5 py-3 border-t border-[var(--border)] bg-[var(--bg)]/40 flex flex-wrap gap-1.5">
                      {item.tags.slice(0, 4).map((s) => (
                        <span
                          key={s}
                          className="rounded-[4px] border border-[var(--border)] bg-[var(--bg-elevated)] px-2 py-0.5 text-[10px] font-mono text-[var(--ink-secondary)]"
                        >
                          {s}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between px-5 py-3.5 border-t border-[var(--border)] bg-[var(--bg-elevated)]/70 group-hover:bg-[#401823]/40 transition">
                      <div>
                        <div className="font-display text-xs font-medium text-[var(--ink)]">
                          {lang === 'ro'
                            ? 'Specificații & Arhitectură'
                            : 'Specifications & Architecture'}
                        </div>
                        <div className="font-display text-[11px] font-light text-[var(--ink-secondary)]">
                          {item.badge}
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-[var(--ink-secondary)] group-hover:text-[var(--ink)] group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* drivepoint.ro "Servicii complete" Style Repository Callout Banners (.dp-wine-banner) */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 pt-4">
              {[
                {
                  badge: '2015 – 2023 · ARCHIVE',
                  titleRo: 'Arhiva Istorică (stefanutc1/old)',
                  titleEn: 'Historical Archive (stefanutc1/old)',
                  descRo:
                    'Primele proiecte funcționale construite începând din 2015: serverele SA-MP RedZone și NQGaming RPG (PAWN & MySQL), Crowland Wiki (Vue 3), platforma Kronick (PHP/Nginx) și botul Discord Roadman.',
                  descEn:
                    'Early production projects built starting in 2015: RedZone & NQGaming SA-MP RPG servers (PAWN & MySQL), Crowland Wiki (Vue 3), Kronick Web Portal (PHP/Nginx), and Roadman Discord Bot.',
                  url: 'https://github.com/stefanutc1/old',
                  ctaRo: 'Explorează stefanutc1/old',
                  ctaEn: 'Explore stefanutc1/old',
                },
                {
                  badge: '2024 – 2027 · FEAA UCV',
                  titleRo: 'Licență & 43+ Proiecte (stefanutc1/proiecte)',
                  titleEn: 'Thesis & 43+ Projects (stefanutc1/proiecte)',
                  descRo:
                    'Monorepo-ul academic pentru Informatică Economică (FEAA Craiova, 2024 – 2027): lucrarea de licență Core-Banking FinTech, rapoarte DFIR, algoritmică C++, Java, C# .NET și topologii Cisco.',
                  descEn:
                    'Academic monorepo for Business Informatics (FEAA Craiova, 2024 – 2027): Core-Banking FinTech Bachelor’s Thesis, DFIR dossiers, C++, Java, C# .NET, and Cisco topologies.',
                  url: 'https://github.com/stefanutc1/proiecte',
                  ctaRo: 'Vezi stefanutc1/proiecte',
                  ctaEn: 'View stefanutc1/proiecte',
                },
                {
                  badge: '2025 – PREZENT · DATACENTER',
                  titleRo: 'Infrastructură Homelab (stefanutc1/infrastructure)',
                  titleEn: 'Homelab Infrastructure (stefanutc1/infrastructure)',
                  descRo:
                    'Codul IaC complet pentru clusterul Proxmox VE 9.2 cu 4 noduri: 57 fișiere Terraform, 18 roluri Ansible, firewall OPNsense cu 5 VLAN-uri, Wazuh SIEM/XDR, Kubernetes k3s și firmware ESP32.',
                  descEn:
                    'Complete IaC repository for the 4-node Proxmox VE 9.2 cluster: 57 Terraform files, 18 Ansible roles, 5-VLAN OPNsense firewall, Wazuh SIEM/XDR, Kubernetes k3s, and ESP32 firmware.',
                  url: 'https://github.com/stefanutc1/infrastructure',
                  ctaRo: 'Vezi stefanutc1/infrastructure',
                  ctaEn: 'View stefanutc1/infrastructure',
                },
              ].map((banner) => (
                <div
                  key={banner.url}
                  className="dp-wine-banner p-6 flex flex-col justify-between gap-5"
                >
                  <div className="space-y-2.5">
                    <span className="inline-block font-mono text-[11px] uppercase tracking-wider text-[#d9d1ca]">
                      {banner.badge}
                    </span>
                    <h3 className="font-display text-xl font-medium text-[#efebe5]">
                      {lang === 'ro' ? banner.titleRo : banner.titleEn}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#d9d1ca] leading-relaxed">
                      {lang === 'ro' ? banner.descRo : banner.descEn}
                    </p>
                  </div>
                  <div>
                    <a
                      href={banner.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="dp-btn-cream inline-flex items-center gap-2 px-4 py-2.5 text-xs font-medium"
                    >
                      <span>{lang === 'ro' ? banner.ctaRo : banner.ctaEn}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ===================================================================
            5. PERSONAL TIMELINE (2015 – 2027)
           =================================================================== */}
        {showAbout && (
          <section className="relative z-10 border-b border-[var(--border)] px-5 sm:px-10 py-14 sm:py-16 space-y-10">
            <SectionCrosshairs />
            <div className="dp-heading-accent">
              <div className="text-xs font-mono uppercase tracking-widest text-[var(--ink-muted)] mb-1">
                {lang === 'ro'
                  ? '[04] · EVOLUȚIE TEHNICĂ ȘI ACADEMICĂ (2015 – 2027)'
                  : '[04] · TECHNICAL & ACADEMIC EVOLUTION (2015 – 2027)'}
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-medium text-[var(--ink)] leading-tight">
                {lang === 'ro' ? (
                  <>
                    Parcurs ingineresc și academic{' '}
                    <span className="font-light italic text-[var(--ink-secondary)]">
                      etapă cu etapă.
                    </span>
                  </>
                ) : (
                  <>
                    Engineering and academic journey{' '}
                    <span className="font-light italic text-[var(--ink-secondary)]">
                      stage by stage.
                    </span>
                  </>
                )}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {TIMELINE_EVENTS.map((ev, idx) => (
                <div
                  key={idx}
                  className="dp-glass-card p-6 flex flex-col justify-between gap-4"
                >
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-2 rounded-[30px] bg-[#52212e] px-3 py-1 text-xs font-mono text-[#efebe5]">
                        <span className="h-1.5 w-1.5 rounded-[2px] bg-[#efebe5]" />
                        {lang === 'ro' ? ev.periodRo : ev.periodEn}
                      </span>
                      <span className="font-mono text-[11px] text-[var(--ink-muted)]">
                        {lang === 'ro' ? ev.orgRo : ev.orgEn}
                      </span>
                    </div>

                    <h3 className="font-display text-xl font-medium text-[var(--ink)]">
                      {lang === 'ro' ? ev.roleRo : ev.roleEn}
                    </h3>

                    <p className="text-xs sm:text-sm text-[var(--ink-secondary)] leading-relaxed">
                      {lang === 'ro' ? ev.descRo : ev.descEn}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[var(--border)]">
                    {ev.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-[4px] border border-[var(--border)] bg-[var(--bg)]/60 px-2 py-0.5 text-[10px] font-mono text-[var(--ink-secondary)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ===================================================================
            6. DATACENTER INFRASTRUCTURE & TECH STACK
           =================================================================== */}
        {showInfra && (
          <section
            id="infra"
            className="relative z-10 px-5 sm:px-10 py-14 sm:py-16 space-y-10 scroll-mt-20"
          >
            <SectionCrosshairs />
            <div className="dp-heading-accent">
              <div className="text-xs font-mono uppercase tracking-widest text-[var(--ink-muted)] mb-1">
                {lang === 'ro'
                  ? '[05] · TOPOLOGIE HARDWARE & CLOUD HIBRID'
                  : '[05] · HARDWARE TOPOLOGY & HYBRID CLOUD'}
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-medium text-[var(--ink)] leading-tight">
                {lang === 'ro' ? (
                  <>
                    Clusterul Homelab cu 4 noduri{' '}
                    <span className="font-light italic text-[var(--ink-secondary)]">
                      și matricea tehnologică.
                    </span>
                  </>
                ) : (
                  <>
                    4-node Homelab cluster{' '}
                    <span className="font-light italic text-[var(--ink-secondary)]">
                      and technology matrix.
                    </span>
                  </>
                )}
              </h2>
            </div>

            {/* 4 Nodes Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {CLUSTER_NODES.map((node) => (
                <div key={node.id} className="dp-showroom-card p-6 space-y-3">
                  <div className="flex items-center justify-between border-b border-[var(--border)] pb-3">
                    <span className="inline-flex items-center gap-2 font-mono text-sm font-semibold text-[var(--ink)]">
                      <Cpu className="w-4 h-4 text-[#52212e]" />
                      {node.name}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-[30px] bg-[#52212e] px-3 py-0.5 text-[11px] font-mono text-[#efebe5]">
                      <span className="h-1.5 w-1.5 rounded-[2px] bg-[#efebe5]" />
                      {node.ip}
                    </span>
                  </div>

                  <div className="text-xs font-mono text-[var(--ink-muted)]">
                    {node.specs}
                  </div>

                  <p className="text-xs sm:text-sm text-[var(--ink-secondary)] leading-relaxed">
                    {lang === 'ro' ? node.roleRo : node.roleEn}
                  </p>
                </div>
              ))}
            </div>

            {/* Tech Stack Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {TECH_STACK_PILLARS.map((pillar, idx) => (
                <div key={idx} className="dp-glass-card p-5 space-y-3">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[var(--ink-muted)]">
                    {lang === 'ro' ? pillar.subtitleRo : pillar.subtitleEn}
                  </div>
                  <h3 className="font-display text-lg font-medium text-[var(--ink)]">
                    {lang === 'ro' ? pillar.titleRo : pillar.titleEn}
                  </h3>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {pillar.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-[4px] border border-[var(--border)] bg-[var(--bg)]/60 px-2.5 py-1 text-xs font-mono text-[var(--ink-secondary)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Academic Citation (BibTeX) in drivepoint.ro Burgundy Callout Banner */}
            <div className="dp-wine-banner p-6 sm:p-8 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-[#d9d1ca]">
                    {lang === 'ro'
                      ? 'REFERINȚĂ ACADEMICĂ / CITARE BIBTEX'
                      : 'ACADEMIC REFERENCE / BIBTEX CITATION'}
                  </div>
                  <h3 className="font-display text-xl font-medium text-[#efebe5] mt-0.5">
                    Moană, Ștefănuț-Cornel — Universitatea din Craiova (FEAA 2024 – 2027)
                  </h3>
                </div>
                <button
                  onClick={copyBibtex}
                  className="dp-btn-cream inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-medium"
                >
                  {copiedBibtex ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy BibTeX</span>
                    </>
                  )}
                </button>
              </div>
              <pre className="border border-[#d9d1ca]/20 bg-[#0c0c0c]/85 p-4 text-xs font-mono text-[#efebe5] overflow-x-auto leading-relaxed">
                <code>{bibtexString}</code>
              </pre>
            </div>
          </section>
        )}
      </main>

      {/* =====================================================================
          DRIVEPOINT.RO MULTI-COLUMN STRUCTURED FOOTER
         ===================================================================== */}
      <footer className="border-t border-[var(--border)] bg-[var(--bg-elevated)]">
        <div className="mx-auto max-w-[1200px] border-x border-[var(--border)] px-5 sm:px-10 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-[var(--border)]">
            {/* Col 1: Identity & Academic Coordinates */}
            <div className="space-y-2.5">
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-tl-[10px] rounded-br-[10px] bg-[#52212e] font-display text-xs font-semibold text-[#efebe5]">
                  MȘ
                </div>
                <span className="font-display text-lg font-medium text-[var(--ink)]">
                  {PERSONAL_BIO.name}
                </span>
              </div>
              <div className="space-y-1 text-xs font-mono text-[var(--ink-muted)]">
                <div>{PERSONAL_BIO.handle} · Craiova, RO</div>
                <div>FEAA UCV · 2024 – 2027</div>
                <div>
                  {lang === 'ro'
                    ? 'Experiență Software: 2015 – Prezent'
                    : 'Software Experience: 2015 – Present'}
                </div>
              </div>
            </div>

            {/* Col 2: Navigation */}
            <div className="space-y-2.5">
              <div className="font-mono text-xs uppercase tracking-wider text-[var(--ink)]">
                {lang === 'ro' ? 'Secțiuni' : 'Sections'}
              </div>
              <ul className="space-y-1.5 text-xs text-[var(--ink-secondary)]">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => {
                        setActiveTab(item.id);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="hover:text-[var(--ink)] transition"
                    >
                      {item.label[lang]}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: GitHub Repositories */}
            <div className="space-y-2.5">
              <div className="font-mono text-xs uppercase tracking-wider text-[var(--ink)]">
                {lang === 'ro' ? 'Arhive & Cod Sursă' : 'Repositories & Archives'}
              </div>
              <ul className="space-y-1.5 text-xs font-mono text-[var(--ink-secondary)]">
                <li>
                  <a
                    href="https://github.com/stefanutc1/infrastructure"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[var(--ink)] inline-flex items-center gap-1"
                  >
                    stefanutc1/infrastructure
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/stefanutc1/proiecte"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[var(--ink)] inline-flex items-center gap-1"
                  >
                    stefanutc1/proiecte (2024–2027)
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/stefanutc1/old"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[var(--ink)] inline-flex items-center gap-1"
                  >
                    stefanutc1/old (2015–2023)
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 4: Contact */}
            <div className="space-y-2.5">
              <div className="font-mono text-xs uppercase tracking-wider text-[var(--ink)]">
                Contact
              </div>
              <div className="space-y-1.5 text-xs font-mono text-[var(--ink-secondary)]">
                <div>
                  <a
                    href={`mailto:${PERSONAL_BIO.email}`}
                    className="hover:text-[var(--ink)] transition"
                  >
                    {PERSONAL_BIO.email}
                  </a>
                </div>
                <div>Universitatea din Craiova · FEAA</div>
                <div>Informatică Economică (2024 – 2027)</div>
              </div>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-[var(--ink-muted)]">
            <div>
              © 2026 {PERSONAL_BIO.name}.{' '}
              {lang === 'ro'
                ? 'Toate drepturile rezervate.'
                : 'All rights reserved.'}
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <span>DFIR & Threat Intel</span>
              <span>·</span>
              <span>Core-Banking Architecture</span>
              <span>·</span>
              <span>Proxmox VE Homelab</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Blog Article Reader Modal */}
      <ArticleReaderModal
        post={activePost}
        allPosts={BLOG_POSTS}
        lang={lang}
        onClose={() => setActivePost(null)}
        onSelectPost={(p) => setActivePost(p)}
      />

      {/* Portfolio Item Specification Modal */}
      {activePortfolioItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
          onClick={() => setActivePortfolioItem(null)}
        >
          <div
            className="w-full max-w-2xl border border-[var(--border-strong)] bg-[var(--bg-elevated)] p-6 sm:p-8 shadow-2xl space-y-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[var(--border)] pb-4">
              <div className="flex items-center gap-2 text-xs font-mono text-[var(--ink-muted)]">
                <span className="rounded-[30px] bg-[#52212e] px-3 py-0.5 text-[#efebe5]">
                  {activePortfolioItem.code}
                </span>
                <span>·</span>
                <span>{activePortfolioItem.badge}</span>
              </div>
              <button
                onClick={() => setActivePortfolioItem(null)}
                className="dp-btn-outline p-1.5 text-[var(--ink-secondary)] hover:text-[var(--ink)]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div>
              <h3 className="font-display text-2xl sm:text-3xl font-medium text-[var(--ink)] mb-2">
                {lang === 'ro'
                  ? activePortfolioItem.titleRo
                  : activePortfolioItem.titleEn}
              </h3>
              <p className="text-sm text-[var(--ink-secondary)] leading-relaxed">
                {lang === 'ro'
                  ? activePortfolioItem.descRo
                  : activePortfolioItem.descEn}
              </p>
            </div>

            <div className="space-y-2">
              <div className="text-xs font-mono uppercase tracking-wider text-[var(--ink-muted)]">
                {lang === 'ro'
                  ? 'Arhitectură & Detalii Tehnice'
                  : 'Architecture & Technical Highlights'}
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-[var(--ink-secondary)]">
                {(lang === 'ro'
                  ? activePortfolioItem.highlightsRo
                  : activePortfolioItem.highlightsEn
                ).map((h, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="font-mono text-[#52212e] mt-0.5">→</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-2">
              {activePortfolioItem.tags.map((s) => (
                <span
                  key={s}
                  className="rounded-[4px] border border-[var(--border)] bg-[var(--surface)] px-2.5 py-1 text-xs font-mono text-[var(--ink)]"
                >
                  {s}
                </span>
              ))}
            </div>

            <div className="pt-4 border-t border-[var(--border)] flex items-center justify-between">
              <span className="text-xs font-mono text-[var(--ink-muted)]">
                {activePortfolioItem.badge}
              </span>
              <div className="flex items-center gap-2.5">
                {activePortfolioItem.liveUrl && (
                  <a
                    href={activePortfolioItem.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dp-btn-outline inline-flex items-center gap-1.5 px-4 py-2 text-xs font-mono"
                  >
                    <span>Live Portal</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                <a
                  href={activePortfolioItem.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dp-btn-primary inline-flex items-center gap-1.5 px-4 py-2 text-xs font-mono font-medium"
                >
                  <span>
                    {lang === 'ro'
                      ? 'Vezi Codul Sursă pe GitHub'
                      : 'View Source on GitHub'}
                  </span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Command Palette (⌘K) */}
      <CommandPalette
        isOpen={cmdOpen}
        lang={lang}
        posts={BLOG_POSTS}
        portfolio={PORTFOLIO_ITEMS}
        onClose={() => setCmdOpen(false)}
        onSelectPost={(p) => setActivePost(p)}
        onSelectPortfolio={(item) => setActivePortfolioItem(item)}
      />
    </div>
  );
}
