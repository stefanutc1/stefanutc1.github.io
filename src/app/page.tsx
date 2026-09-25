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
      label: { ro: 'Prezentare & Jurnal', en: 'Overview & Journal' },
      icon: <Sparkles className="w-3.5 h-3.5" />,
    },
    {
      id: 'blog',
      label: { ro: 'Blog Tehnic (6)', en: 'Tech Blog (6)' },
      icon: <BookOpen className="w-3.5 h-3.5" />,
    },
    {
      id: 'about',
      label: { ro: 'Despre Mine', en: 'About Me' },
      icon: <User className="w-3.5 h-3.5" />,
    },
    {
      id: 'projects',
      label: { ro: 'Proiecte & Licență', en: 'Projects & Thesis' },
      icon: <Code2 className="w-3.5 h-3.5" />,
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
    <div className="min-h-screen flex flex-col">
      {/* Sticky Top Editorial Header */}
      <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--bg)]/85 backdrop-blur-xl">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex h-16 items-center justify-between gap-3">
            {/* Brand / Identity */}
            <div className="flex items-center gap-3 min-w-0">
              <button
                onClick={() => setActiveTab('all')}
                className="flex items-center gap-3 text-left group"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[var(--border-strong)] bg-[var(--surface)] font-serif text-base font-medium text-[var(--ink)] group-hover:border-[var(--ink)] transition">
                  MȘ
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-sm text-[var(--ink)] truncate">
                      {PERSONAL_BIO.name}
                    </span>
                    <span className="hidden md:inline-flex items-center gap-1 rounded-full border border-[var(--border)] bg-[var(--surface)] px-2 py-0.5 text-[10px] font-mono text-[var(--ink-muted)]">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      {PERSONAL_BIO.handle}
                    </span>
                  </div>
                  <div className="text-[11px] font-mono text-[var(--ink-muted)] truncate">
                    {lang === 'ro'
                      ? 'Prezentare Personală & Jurnal de Inginerie'
                      : 'Personal Presentation & Engineering Blog'}
                  </div>
                </div>
              </button>
            </div>

            {/* Desktop View Tabs */}
            <nav className="hidden lg:flex items-center gap-1 rounded-lg border border-[var(--border)] bg-[var(--surface)] p-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition ${
                    activeTab === item.id
                      ? 'bg-[var(--ink)] text-[var(--bg)] shadow-sm'
                      : 'text-[var(--ink-secondary)] hover:text-[var(--ink)]'
                  }`}
                >
                  {item.icon}
                  <span>{item.label[lang]}</span>
                </button>
              ))}
            </nav>

            {/* Right Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCmdOpen(true)}
                className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--surface)] px-2.5 py-1.5 text-xs text-[var(--ink-secondary)] hover:text-[var(--ink)] hover:border-[var(--border-strong)] transition"
                title="Search (⌘K)"
              >
                <Search className="w-3.5 h-3.5" />
                <span className="hidden sm:inline font-mono text-[11px]">⌘K</span>
              </button>

              <button
                onClick={() => setLang((l) => (l === 'ro' ? 'en' : 'ro'))}
                className="inline-flex items-center gap-1 rounded-lg border border-[var(--border)] bg-[var(--surface)] px-2.5 py-1.5 text-xs font-mono uppercase text-[var(--ink-secondary)] hover:text-[var(--ink)] hover:border-[var(--border-strong)] transition"
                title="Switch Language (RO / EN)"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>{lang}</span>
              </button>

              <button
                onClick={() =>
                  setTheme((t) => (t === 'dark' ? 'light' : 'dark'))
                }
                className="inline-flex items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface)] p-1.5 text-[var(--ink-secondary)] hover:text-[var(--ink)] hover:border-[var(--border-strong)] transition"
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
                className="hidden sm:inline-flex items-center gap-1 rounded-lg border border-[var(--border-strong)] bg-[var(--surface)] px-3 py-1.5 text-xs font-mono text-[var(--ink)] hover:bg-[var(--surface-hover)] transition"
              >
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Mobile Navigation Bar */}
          <div className="flex lg:hidden items-center gap-1.5 overflow-x-auto pb-2.5 pt-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`inline-flex items-center gap-1.5 shrink-0 rounded-md px-2.5 py-1 text-xs font-medium transition ${
                  activeTab === item.id
                    ? 'bg-[var(--ink)] text-[var(--bg)]'
                    : 'border border-[var(--border)] bg-[var(--surface)] text-[var(--ink-secondary)]'
                }`}
              >
                {item.icon}
                <span>{item.label[lang]}</span>
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="flex-1 mx-auto w-full max-w-6xl px-4 sm:px-6 py-10 sm:py-14 space-y-20">
        {/* =========================================================
            1. PERSONAL PRESENTATION HERO & ABOUT ME
           ========================================================= */}
        {showAbout && (
          <section className="space-y-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left 7 Cols: Editorial Introduction & Personal Story */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-[var(--border-strong)] bg-[var(--surface)] px-3.5 py-1 text-xs font-mono text-[var(--ink-secondary)]">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  <span>
                    {lang === 'ro'
                      ? 'PREZENTARE PERSONALĂ & BLOG DE INGINERIE'
                      : 'PERSONAL PRESENTATION & ENGINEERING BLOG'}
                  </span>
                </div>

                <div className="space-y-3">
                  <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[var(--ink)] leading-[1.08]">
                    {PERSONAL_BIO.name}
                  </h1>
                  <p className="font-serif italic text-xl sm:text-2xl text-[var(--ink-secondary)] leading-relaxed">
                    {lang === 'ro'
                      ? PERSONAL_BIO.headlineRo
                      : PERSONAL_BIO.headlineEn}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[var(--ink-muted)] pt-1">
                  <span className="inline-flex items-center gap-1.5">
                    <GraduationCap className="w-4 h-4 text-[var(--ink-secondary)]" />
                    {lang === 'ro'
                      ? 'Universitatea din Craiova · FEAA (Informatică Economică)'
                      : 'University of Craiova · FEAA (Business Informatics)'}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[var(--ink-secondary)]" />
                    {lang === 'ro'
                      ? PERSONAL_BIO.locationRo
                      : PERSONAL_BIO.locationEn}
                  </span>
                  <a
                    href={`mailto:${PERSONAL_BIO.email}`}
                    className="inline-flex items-center gap-1.5 hover:text-[var(--ink)] transition"
                  >
                    <Mail className="w-3.5 h-3.5 text-[var(--ink-secondary)]" />
                    {PERSONAL_BIO.email}
                  </a>
                </div>

                {/* Personal Bio Narrative */}
                <div className="space-y-4 text-sm sm:text-base text-[var(--ink-secondary)] leading-relaxed border-l-2 border-[var(--border-strong)] pl-5">
                  {(lang === 'ro'
                    ? PERSONAL_BIO.storyParagraphsRo
                    : PERSONAL_BIO.storyParagraphsEn
                  ).map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>

                {/* Quick Action CTAs */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    onClick={() => setActivePost(BLOG_POSTS[0])}
                    className="inline-flex items-center gap-2 rounded-lg bg-[var(--ink)] px-4 py-2.5 text-xs sm:text-sm font-medium text-[var(--bg)] hover:opacity-90 transition"
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>
                      {lang === 'ro'
                        ? 'Citește Ultimul Articol (Media Galaxy DFIR)'
                        : 'Read Latest Post (Media Galaxy DFIR)'}
                    </span>
                  </button>

                  <button
                    onClick={() => setActivePost(BLOG_POSTS[1])}
                    className="inline-flex items-center gap-2 rounded-lg border border-[var(--border-strong)] bg-[var(--surface)] px-4 py-2.5 text-xs sm:text-sm font-medium text-[var(--ink)] hover:bg-[var(--surface-hover)] transition"
                  >
                    <FileText className="w-4 h-4" />
                    <span>
                      {lang === 'ro'
                        ? 'Lucrarea de Licență Core-Banking'
                        : 'Core-Banking Bachelor Thesis'}
                    </span>
                  </button>
                </div>
              </div>

              {/* Right 5 Cols: Personal Dossier Card & Interactive Shell */}
              <div className="lg:col-span-5 space-y-4">
                <div className="rounded-xl border border-[var(--border-strong)] bg-[var(--surface)] p-5 space-y-4">
                  <div className="flex items-center justify-between border-b border-[var(--border)] pb-3">
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-widest text-[var(--ink-muted)]">
                        {lang === 'ro'
                          ? 'CARTE DE VIZITĂ & INDICATORI TEHNICI'
                          : 'PERSONAL DOSSIER & ENGINEERING METRICS'}
                      </div>
                      <div className="text-sm font-mono font-semibold text-[var(--ink)] mt-0.5">
                        Moană Ștefănuț-Cornel ({PERSONAL_BIO.handle})
                      </div>
                    </div>
                    <span className="rounded-md border border-[var(--border)] bg-[var(--bg-elevated)] px-2.5 py-1 text-[11px] font-mono text-[var(--ink-secondary)]">
                      Promoția 2026
                    </span>
                  </div>

                  {/* 4 Key Metrics */}
                  <div className="grid grid-cols-2 gap-2.5">
                    <div className="rounded-lg border border-[var(--border)] bg-[var(--bg-elevated)] p-3">
                      <div className="text-xl font-serif text-[var(--ink)]">
                        6 Articole
                      </div>
                      <div className="text-[11px] font-mono text-[var(--ink-muted)]">
                        {lang === 'ro'
                          ? 'Jurnal Tehnic & Analize DFIR'
                          : 'Long-Form Engineering Posts'}
                      </div>
                    </div>
                    <div className="rounded-lg border border-[var(--border)] bg-[var(--bg-elevated)] p-3">
                      <div className="text-xl font-serif text-[var(--ink)]">
                        43+ Proiecte
                      </div>
                      <div className="text-[11px] font-mono text-[var(--ink-muted)]">
                        {lang === 'ro'
                          ? 'Arhivă Universitară & Licență'
                          : 'University Archive & Thesis'}
                      </div>
                    </div>
                    <div className="rounded-lg border border-[var(--border)] bg-[var(--bg-elevated)] p-3">
                      <div className="text-xl font-serif text-[var(--ink)]">
                        4 Noduri + 5 VLAN
                      </div>
                      <div className="text-[11px] font-mono text-[var(--ink-muted)]">
                        {lang === 'ro'
                          ? 'Cluster Proxmox VE 9.2 & k3s'
                          : 'Proxmox VE 9.2 & k3s Cluster'}
                      </div>
                    </div>
                    <div className="rounded-lg border border-[var(--border)] bg-[var(--bg-elevated)] p-3">
                      <div className="text-xl font-serif text-[var(--ink)]">
                        #178465 DNSC
                      </div>
                      <div className="text-[11px] font-mono text-[var(--ink-muted)]">
                        {lang === 'ro'
                          ? 'Takedown Național Phishing C2'
                          : 'National Phishing C2 Takedown'}
                      </div>
                    </div>
                  </div>

                  {/* Direct Repository Links */}
                  <div className="pt-1 flex flex-wrap gap-2">
                    <a
                      href="https://github.com/stefanutc1/infrastructure"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-between rounded-lg border border-[var(--border)] bg-[var(--bg-elevated)] px-3 py-2 text-xs font-mono text-[var(--ink-secondary)] hover:text-[var(--ink)] hover:border-[var(--border-strong)] transition"
                    >
                      <span>stefanutc1/infrastructure</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href="https://github.com/stefanutc1/proiecte"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-between rounded-lg border border-[var(--border)] bg-[var(--bg-elevated)] px-3 py-2 text-xs font-mono text-[var(--ink-secondary)] hover:text-[var(--ink)] hover:border-[var(--border-strong)] transition"
                    >
                      <span>stefanutc1/proiecte</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Interactive Shell */}
                <InteractiveTerminal lang={lang} />
              </div>
            </div>
          </section>
        )}

        {/* =========================================================
            2. ENGINEERING BLOG & TECHNICAL JOURNAL
           ========================================================= */}
        {showBlog && (
          <section id="blog" className="space-y-8 scroll-mt-20">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[var(--border)] pb-5">
              <div>
                <div className="text-xs font-mono uppercase tracking-widest text-[var(--ink-muted)] mb-1">
                  {lang === 'ro'
                    ? 'BLOG PERSONAL & JURNAL DE INGINERIE'
                    : 'PERSONAL BLOG & ENGINEERING JOURNAL'}
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl text-[var(--ink)]">
                  {lang === 'ro'
                    ? 'Articole Tehnice, Investigații DFIR & Studii de Arhitectură'
                    : 'Technical Articles, DFIR Investigations & Architecture Studies'}
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-[var(--ink-secondary)] max-w-md">
                {lang === 'ro'
                  ? 'Jurnalul meu tehnic în care documentez investigații de criminalistică digitală (DFIR), arhitectura lucrării de licență Core-Banking și administrarea datacenter-ului homelab.'
                  : 'My technical blog documenting real-world DFIR investigations, my Core-Banking Bachelor’s Thesis architecture, and homelab datacenter engineering.'}
              </p>
            </div>

            {/* Featured Hero Blog Post (POST-01) */}
            <div
              onClick={() => setActivePost(featuredPost)}
              className="cursor-pointer rounded-2xl border border-[var(--border-strong)] bg-[var(--surface)] p-6 sm:p-8 hover:bg-[var(--surface-hover)] transition group"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono">
                  <span className="rounded-full bg-[var(--ink)] text-[var(--bg)] px-3 py-0.5 font-semibold">
                    {lang === 'ro' ? 'ARTICOL RECOMANDAT' : 'FEATURED ARTICLE'}
                  </span>
                  <span className="rounded-full border border-[var(--border-strong)] px-3 py-0.5 text-[var(--ink)]">
                    {lang === 'ro'
                      ? featuredPost.categoryLabelRo
                      : featuredPost.categoryLabelEn}
                  </span>
                  <span className="text-[var(--ink-muted)] inline-flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {lang === 'ro' ? featuredPost.dateRo : featuredPost.dateEn}
                  </span>
                  <span className="text-[var(--ink-muted)] inline-flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {featuredPost.readTime}
                  </span>
                </div>
                <span className="text-xs font-mono text-[var(--ink-secondary)] group-hover:text-[var(--ink)] inline-flex items-center gap-1">
                  {lang === 'ro'
                    ? 'Citește articolul complet'
                    : 'Read full article'}
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl text-[var(--ink)] leading-snug mb-2">
                {lang === 'ro' ? featuredPost.titleRo : featuredPost.titleEn}
              </h3>
              <p className="text-sm sm:text-base text-[var(--ink-secondary)] leading-relaxed mb-5">
                {lang === 'ro'
                  ? featuredPost.excerptRo
                  : featuredPost.excerptEn}
              </p>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-[var(--border)]">
                <div className="flex flex-wrap gap-1.5">
                  {featuredPost.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-[var(--border)] bg-[var(--bg-elevated)] px-2.5 py-1 text-[11px] font-mono text-[var(--ink-secondary)]"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                <span className="text-xs font-mono text-[var(--ink-muted)]">
                  {featuredPost.id}
                </span>
              </div>
            </div>

            {/* Blog Filter & Search Bar */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-1.5">
                {[
                  {
                    id: 'all',
                    label: { ro: 'Toate Articolele (6)', en: 'All Posts (6)' },
                  },
                  {
                    id: 'dfir',
                    label: { ro: 'DFIR & Threat Intel', en: 'DFIR & Threat Intel' },
                  },
                  {
                    id: 'fintech',
                    label: { ro: 'Licență & FinTech', en: 'Thesis & FinTech' },
                  },
                  {
                    id: 'infra',
                    label: { ro: 'Homelab & GitOps', en: 'Homelab & GitOps' },
                  },
                  {
                    id: 'ctf',
                    label: { ro: 'CTF & Exploit Dev', en: 'CTF & Exploit Dev' },
                  },
                ].map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() =>
                      setBlogCategory(cat.id as BlogCategoryFilter)
                    }
                    className={`rounded-lg px-3 py-1.5 text-xs font-mono transition ${
                      blogCategory === cat.id
                        ? 'bg-[var(--ink)] text-[var(--bg)] font-medium'
                        : 'border border-[var(--border)] bg-[var(--surface)] text-[var(--ink-secondary)] hover:text-[var(--ink)]'
                    }`}
                  >
                    {cat.label[lang]}
                  </button>
                ))}
              </div>

              <div className="relative min-w-[240px]">
                <Search className="w-3.5 h-3.5 text-[var(--ink-muted)] absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={blogQuery}
                  onChange={(e) => setBlogQuery(e.target.value)}
                  placeholder={
                    lang === 'ro'
                      ? 'Caută în articolele de blog...'
                      : 'Search blog articles...'
                  }
                  className="w-full rounded-lg border border-[var(--border)] bg-[var(--surface)] pl-8 pr-3 py-1.5 text-xs text-[var(--ink)] placeholder:text-[var(--ink-muted)] focus:outline-none focus:border-[var(--border-strong)]"
                />
              </div>
            </div>

            {/* Blog Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {filteredBlogPosts.map((post) => (
                <article
                  key={post.slug}
                  onClick={() => setActivePost(post)}
                  className="cursor-pointer flex flex-col justify-between rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 hover:border-[var(--border-strong)] hover:bg-[var(--surface-hover)] transition group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 text-xs font-mono text-[var(--ink-muted)] mb-3">
                      <span className="rounded-md border border-[var(--border-strong)] bg-[var(--bg-elevated)] px-2.5 py-0.5 text-[var(--ink)]">
                        {lang === 'ro'
                          ? post.categoryLabelRo
                          : post.categoryLabelEn}
                      </span>
                      <div className="flex items-center gap-2">
                        <span>
                          {lang === 'ro' ? post.dateRo : post.dateEn}
                        </span>
                        <span>·</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl text-[var(--ink)] group-hover:underline decoration-1 underline-offset-4 leading-snug mb-2">
                      {lang === 'ro' ? post.titleRo : post.titleEn}
                    </h3>

                    <p className="text-xs sm:text-sm text-[var(--ink-secondary)] leading-relaxed mb-4 line-clamp-3">
                      {lang === 'ro' ? post.excerptRo : post.excerptEn}
                    </p>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-[var(--border)]">
                    <div className="flex items-center justify-between pt-1">
                      <div className="flex flex-wrap gap-1.5">
                        {post.tags.slice(0, 4).map((t) => (
                          <span
                            key={t}
                            className="rounded border border-[var(--border)] bg-[var(--bg-elevated)] px-2 py-0.5 text-[10px] font-mono text-[var(--ink-muted)]"
                          >
                            #{t}
                          </span>
                        ))}
                      </div>
                      <span className="inline-flex items-center gap-1 text-xs font-mono text-[var(--ink)] font-medium shrink-0">
                        {lang === 'ro' ? 'Citește' : 'Read'}
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* =========================================================
            3. PERSONAL TIMELINE (PARCURS ACADEMIC & INGINERESC)
           ========================================================= */}
        {showAbout && (
          <section className="space-y-8">
            <div className="border-b border-[var(--border)] pb-4">
              <div className="text-xs font-mono uppercase tracking-widest text-[var(--ink-muted)] mb-1">
                {lang === 'ro'
                  ? 'DESPRE MINE · CRONOLOGIE & EXPERIENȚĂ'
                  : 'ABOUT ME · CHRONOLOGY & EXPERIENCE'}
              </div>
              <h2 className="font-serif text-3xl text-[var(--ink)]">
                {lang === 'ro'
                  ? 'Parcurs Academic și Ingineresc (2023 – 2026)'
                  : 'Academic & Engineering Journey (2023 – 2026)'}
              </h2>
            </div>

            <div className="relative border-l border-[var(--border-strong)] ml-3 sm:ml-6 pl-6 sm:pl-8 space-y-6">
              {TIMELINE_EVENTS.map((ev, idx) => (
                <div key={idx} className="relative group">
                  <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 h-3 w-3 rounded-full border-2 border-[var(--ink)] bg-[var(--bg)]" />
                  <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 hover:border-[var(--border-strong)] transition">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                      <span className="text-xs font-mono font-semibold text-[var(--ink)]">
                        {lang === 'ro' ? ev.periodRo : ev.periodEn}
                      </span>
                      <span className="rounded-md border border-[var(--border)] bg-[var(--bg-elevated)] px-2.5 py-0.5 text-[11px] font-mono text-[var(--ink-muted)]">
                        {lang === 'ro' ? ev.orgRo : ev.orgEn}
                      </span>
                    </div>
                    <h3 className="font-serif text-xl text-[var(--ink)] mb-2">
                      {lang === 'ro' ? ev.roleRo : ev.roleEn}
                    </h3>
                    <p className="text-xs sm:text-sm text-[var(--ink-secondary)] leading-relaxed mb-3">
                      {lang === 'ro' ? ev.descRo : ev.descEn}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {ev.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded border border-[var(--border)] bg-[var(--bg-elevated)] px-2 py-0.5 text-[10px] font-mono text-[var(--ink-muted)]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* =========================================================
            4. FLAGSHIP SYSTEMS & UNIVERSITY PORTFOLIO ARCHIVE
           ========================================================= */}
        {showProjects && (
          <section id="projects" className="space-y-8 scroll-mt-20">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[var(--border)] pb-5">
              <div>
                <div className="text-xs font-mono uppercase tracking-widest text-[var(--ink-muted)] mb-1">
                  {lang === 'ro'
                    ? 'ARHIVA DE PROIECTE & LICENȚĂ'
                    : 'PROJECTS ARCHIVE & BACHELOR THESIS'}
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl text-[var(--ink)]">
                  {lang === 'ro'
                    ? 'Sisteme Flagship, Dosare DFIR & Proiecte Universitare'
                    : 'Flagship Systems, DFIR Dossiers & University Projects'}
                </h2>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {[
                  { id: 'all', label: { ro: 'Toate', en: 'All' } },
                  {
                    id: 'flagship',
                    label: { ro: 'Flagship & Licență', en: 'Flagship & Thesis' },
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
                ].map((f) => (
                  <button
                    key={f.id}
                    onClick={() =>
                      setPortfolioFilter(f.id as PortfolioCategoryFilter)
                    }
                    className={`rounded-lg px-3 py-1.5 text-xs font-mono transition ${
                      portfolioFilter === f.id
                        ? 'bg-[var(--ink)] text-[var(--bg)] font-medium'
                        : 'border border-[var(--border)] bg-[var(--surface)] text-[var(--ink-secondary)] hover:text-[var(--ink)]'
                    }`}
                  >
                    {f.label[lang]}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredPortfolio.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setActivePortfolioItem(item)}
                  className="cursor-pointer flex flex-col justify-between rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 hover:border-[var(--border-strong)] hover:bg-[var(--surface-hover)] transition group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 text-[11px] font-mono text-[var(--ink-muted)] mb-2.5">
                      <span className="rounded border border-[var(--border)] bg-[var(--bg-elevated)] px-2 py-0.5 text-[var(--ink)] truncate">
                        {item.code}
                      </span>
                      <span className="shrink-0 text-[10px]">{item.badge}</span>
                    </div>

                    <h3 className="font-serif text-lg sm:text-xl text-[var(--ink)] group-hover:underline decoration-1 underline-offset-4 mb-2">
                      {lang === 'ro' ? item.titleRo : item.titleEn}
                    </h3>

                    <p className="text-xs sm:text-sm text-[var(--ink-secondary)] leading-relaxed mb-4 line-clamp-3">
                      {lang === 'ro' ? item.descRo : item.descEn}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[var(--border)] flex flex-wrap gap-1">
                    {item.tags.slice(0, 4).map((s) => (
                      <span
                        key={s}
                        className="rounded border border-[var(--border)] bg-[var(--bg-elevated)] px-2 py-0.5 text-[10px] font-mono text-[var(--ink-secondary)]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* =========================================================
            5. DATACENTER INFRASTRUCTURE & TECH STACK
           ========================================================= */}
        {showInfra && (
          <section id="infra" className="space-y-10 scroll-mt-20">
            <div className="border-b border-[var(--border)] pb-4">
              <div className="text-xs font-mono uppercase tracking-widest text-[var(--ink-muted)] mb-1">
                {lang === 'ro'
                  ? 'TOPOLOGIE HARDWARE & CLOUD HIBRID'
                  : 'HARDWARE TOPOLOGY & HYBRID CLOUD'}
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[var(--ink)]">
                {lang === 'ro'
                  ? 'Clusterul Homelab cu 4 Noduri & Matricea Tehnologică'
                  : '4-Node Homelab Cluster & Technology Stack Matrix'}
              </h2>
            </div>

            {/* 4 Nodes Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {CLUSTER_NODES.map((node) => (
                <div
                  key={node.id}
                  className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm font-semibold text-[var(--ink)]">
                      {node.name}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
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
                <div
                  key={idx}
                  className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5"
                >
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[var(--ink-muted)] mb-1">
                    {lang === 'ro' ? pillar.subtitleRo : pillar.subtitleEn}
                  </div>
                  <h3 className="font-serif text-lg text-[var(--ink)] mb-3">
                    {lang === 'ro' ? pillar.titleRo : pillar.titleEn}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {pillar.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-md border border-[var(--border)] bg-[var(--bg-elevated)] px-2.5 py-1 text-xs font-mono text-[var(--ink-secondary)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Academic Citation (BibTeX) */}
            <div className="rounded-xl border border-[var(--border-strong)] bg-[var(--surface)] p-6 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-[var(--ink-muted)]">
                    {lang === 'ro'
                      ? 'REFERINȚĂ ACADEMICĂ / CITARE BIBTEX'
                      : 'ACADEMIC REFERENCE / BIBTEX CITATION'}
                  </div>
                  <h3 className="font-serif text-xl text-[var(--ink)]">
                    Moană, Ștefănuț-Cornel (2026) — Universitatea din Craiova
                  </h3>
                </div>
                <button
                  onClick={copyBibtex}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border-strong)] bg-[var(--bg-elevated)] px-3 py-1.5 text-xs font-mono text-[var(--ink)] hover:bg-[var(--surface-hover)] transition"
                >
                  {copiedBibtex ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
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
              <pre className="rounded-lg border border-[var(--border)] bg-[#060608] p-4 text-xs font-mono text-zinc-300 overflow-x-auto leading-relaxed">
                <code>{bibtexString}</code>
              </pre>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-[var(--border)] bg-[var(--bg-elevated)] py-10 mt-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="font-serif text-lg text-[var(--ink)]">
              {PERSONAL_BIO.name} ({PERSONAL_BIO.handle})
            </div>
            <div className="text-xs font-mono text-[var(--ink-muted)]">
              {lang === 'ro'
                ? 'Universitatea din Craiova · FEAA · Informatică Economică'
                : 'University of Craiova · FEAA · Business Informatics'}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[var(--ink-secondary)]">
            <a
              href={PERSONAL_BIO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--ink)] transition inline-flex items-center gap-1"
            >
              GitHub (@stefanutc1)
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://github.com/stefanutc1/infrastructure"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--ink)] transition inline-flex items-center gap-1"
            >
              Infrastructure Repo
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://github.com/stefanutc1/proiecte"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--ink)] transition inline-flex items-center gap-1"
            >
              Proiecte & Licență
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
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
            className="w-full max-w-2xl rounded-xl border border-[var(--border-strong)] bg-[var(--bg-elevated)] p-6 sm:p-8 shadow-2xl space-y-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[var(--border)] pb-4">
              <div className="flex items-center gap-2 text-xs font-mono text-[var(--ink-muted)]">
                <span className="rounded border border-[var(--border-strong)] px-2 py-0.5 text-[var(--ink)]">
                  {activePortfolioItem.code}
                </span>
                <span>·</span>
                <span>{activePortfolioItem.badge}</span>
              </div>
              <button
                onClick={() => setActivePortfolioItem(null)}
                className="rounded-md border border-[var(--border)] p-1.5 text-[var(--ink-secondary)] hover:text-[var(--ink)]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[var(--ink)] mb-2">
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
                    <span className="font-mono text-[var(--ink)] mt-0.5">→</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-2">
              {activePortfolioItem.tags.map((s) => (
                <span
                  key={s}
                  className="rounded-md border border-[var(--border)] bg-[var(--surface)] px-2.5 py-1 text-xs font-mono text-[var(--ink)]"
                >
                  {s}
                </span>
              ))}
            </div>

            <div className="pt-4 border-t border-[var(--border)] flex items-center justify-between">
              <span className="text-xs font-mono text-[var(--ink-muted)]">
                {activePortfolioItem.badge}
              </span>
              <div className="flex items-center gap-2">
                {activePortfolioItem.liveUrl && (
                  <a
                    href={activePortfolioItem.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border-strong)] bg-[var(--surface)] px-3.5 py-2 text-xs font-mono text-[var(--ink)] hover:bg-[var(--surface-hover)] transition"
                  >
                    <span>Live Portal</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                <a
                  href={activePortfolioItem.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-[var(--ink)] px-4 py-2 text-xs font-mono font-medium text-[var(--bg)] hover:opacity-90 transition"
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
