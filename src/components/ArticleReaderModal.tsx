'use client';

import React, { useState, useEffect } from 'react';
import {
  X,
  Clock,
  Calendar,
  ExternalLink,
  Copy,
  Check,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Terminal,
  ShieldAlert,
} from 'lucide-react';
import { BlogPost } from '@/data/blog';

interface ArticleReaderModalProps {
  post: BlogPost | null;
  allPosts: BlogPost[];
  lang: 'ro' | 'en';
  onClose: () => void;
  onSelectPost: (post: BlogPost) => void;
}

export default function ArticleReaderModal({
  post,
  allPosts,
  lang,
  onClose,
  onSelectPost,
}: ArticleReaderModalProps) {
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  useEffect(() => {
    if (!post) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [post, onClose]);

  if (!post) return null;

  const currentIndex = allPosts.findIndex((p) => p.slug === post.slug);
  const prevPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const nextPost =
    currentIndex >= 0 && currentIndex < allPosts.length - 1
      ? allPosts[currentIndex + 1]
      : null;

  const handleCopyCode = (code: string, idx: number) => {
    navigator.clipboard.writeText(code);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 2000);
  };

  const title = lang === 'ro' ? post.titleRo : post.titleEn;
  const subtitle = lang === 'ro' ? post.subtitleRo : post.subtitleEn;
  const excerpt = lang === 'ro' ? post.excerptRo : post.excerptEn;
  const date = lang === 'ro' ? post.dateRo : post.dateEn;
  const categoryLabel =
    lang === 'ro' ? post.categoryLabelRo : post.categoryLabelEn;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-2 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <article
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-xl border border-[var(--border-strong)] bg-[var(--bg-elevated)] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Sticky Reader Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between border-b border-[var(--border)] bg-[var(--bg-elevated)]/95 backdrop-blur-md px-5 py-3.5">
          <div className="flex items-center gap-2.5 text-xs font-mono text-[var(--ink-muted)]">
            <BookOpen className="w-3.5 h-3.5 text-[var(--ink-secondary)]" />
            <span className="uppercase tracking-wider text-[var(--ink)] font-semibold">
              {post.id}
            </span>
            <span>·</span>
            <span>{categoryLabel}</span>
            <span>·</span>
            <span className="hidden sm:inline">{post.readTime}</span>
          </div>

          <div className="flex items-center gap-2">
            {post.repoUrl && (
              <a
                href={post.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md border border-[var(--border)] bg-[var(--surface)] px-2.5 py-1 text-xs font-mono text-[var(--ink-secondary)] hover:text-[var(--ink)] hover:border-[var(--border-strong)] transition"
              >
                <span>GitHub Repo</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
            {post.liveUrl && (
              <a
                href={post.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 rounded-md border border-[var(--border)] bg-[var(--surface)] px-2.5 py-1 text-xs font-mono text-[var(--ink-secondary)] hover:text-[var(--ink)] hover:border-[var(--border-strong)] transition"
              >
                <span>Live Portal</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
            <button
              onClick={onClose}
              className="inline-flex items-center justify-center rounded-md border border-[var(--border)] bg-[var(--surface)] p-1.5 text-[var(--ink-secondary)] hover:text-[var(--ink)] hover:border-[var(--border-strong)] transition"
              aria-label="Close article"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Editorial Header */}
        <div className="px-6 sm:px-12 pt-8 pb-6 border-b border-[var(--border)]">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[var(--ink-muted)] mb-4">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border-strong)] bg-[var(--surface)] px-3 py-0.5 text-[var(--ink)]">
              {categoryLabel}
            </span>
            <span className="inline-flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {date}
            </span>
            <span className="inline-flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
            <span>·</span>
            <span>Moană Ștefănuț-Cornel (@stefanutc1)</span>
          </div>

          <h1 className="font-serif text-2xl sm:text-4xl font-normal tracking-tight text-[var(--ink)] leading-tight mb-3">
            {title}
          </h1>
          <p className="text-base sm:text-lg text-[var(--ink-secondary)] leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Article Body Sections */}
        <div className="px-6 sm:px-12 py-8 space-y-8">
          {/* Executive Lead */}
          <div className="rounded-lg border-l-2 border-[var(--ink)] bg-[var(--surface)] px-5 py-4 text-sm sm:text-base text-[var(--ink-secondary)] leading-relaxed">
            {excerpt}
          </div>

          {post.sections.map((section, idx) => {
            const heading =
              lang === 'ro' ? section.headingRo : section.headingEn;
            const paragraphs =
              lang === 'ro' ? section.paragraphsRo : section.paragraphsEn;
            const callout =
              lang === 'ro' ? section.calloutRo : section.calloutEn;

            return (
              <section key={idx} className="space-y-4">
                <div className="flex items-center gap-2.5">
                  <span className="text-xs font-mono text-[var(--ink-muted)]">
                    0{idx + 1}.
                  </span>
                  <h2 className="font-serif text-xl sm:text-2xl font-normal text-[var(--ink)]">
                    {heading}
                  </h2>
                </div>

                <div className="space-y-3.5 text-sm sm:text-base text-[var(--ink-secondary)] leading-relaxed">
                  {paragraphs.map((para, pIdx) => (
                    <p key={pIdx}>{para}</p>
                  ))}
                </div>

                {callout && (
                  <div className="flex items-start gap-3 rounded-lg border border-[var(--border-strong)] bg-[var(--surface)] p-4 text-xs sm:text-sm text-[var(--ink)]">
                    <ShieldAlert className="w-4 h-4 shrink-0 mt-0.5 text-[var(--ink-secondary)]" />
                    <div className="leading-relaxed">{callout}</div>
                  </div>
                )}

                {section.codeBlock && (
                  <div className="rounded-lg border border-[var(--border-strong)] bg-[#050507] overflow-hidden">
                    <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 bg-white/[0.03]">
                      <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                        <Terminal className="w-3.5 h-3.5 text-zinc-500" />
                        <span>{section.codeBlock.caption}</span>
                      </div>
                      <button
                        onClick={() =>
                          handleCopyCode(section.codeBlock!.code, idx)
                        }
                        className="inline-flex items-center gap-1 text-xs font-mono text-zinc-400 hover:text-white transition"
                      >
                        {copiedIdx === idx ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span className="text-emerald-400">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>
                    <pre className="p-4 text-xs sm:text-[13px] font-mono text-zinc-200 overflow-x-auto leading-relaxed">
                      <code>{section.codeBlock.code}</code>
                    </pre>
                  </div>
                )}
              </section>
            );
          })}

          {/* Tags */}
          <div className="pt-6 border-t border-[var(--border)] flex flex-wrap items-center gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-[var(--border)] bg-[var(--surface)] px-2.5 py-1 text-xs font-mono text-[var(--ink-muted)]"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Prev / Next Navigation */}
          <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {prevPost ? (
              <button
                onClick={() => onSelectPost(prevPost)}
                className="flex flex-col items-start rounded-lg border border-[var(--border)] bg-[var(--surface)] p-4 text-left hover:border-[var(--border-strong)] transition group"
              >
                <span className="inline-flex items-center gap-1 text-xs font-mono text-[var(--ink-muted)] mb-1">
                  <ChevronLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
                  {lang === 'ro' ? 'Articolul Anterior' : 'Previous Article'}
                </span>
                <span className="text-sm font-medium text-[var(--ink)] line-clamp-1">
                  {lang === 'ro' ? prevPost.titleRo : prevPost.titleEn}
                </span>
              </button>
            ) : (
              <div />
            )}

            {nextPost && (
              <button
                onClick={() => onSelectPost(nextPost)}
                className="flex flex-col items-end rounded-lg border border-[var(--border)] bg-[var(--surface)] p-4 text-right hover:border-[var(--border-strong)] transition group"
              >
                <span className="inline-flex items-center gap-1 text-xs font-mono text-[var(--ink-muted)] mb-1">
                  {lang === 'ro' ? 'Articolul Următor' : 'Next Article'}
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </span>
                <span className="text-sm font-medium text-[var(--ink)] line-clamp-1">
                  {lang === 'ro' ? nextPost.titleRo : nextPost.titleEn}
                </span>
              </button>
            )}
          </div>
        </div>
      </article>
    </div>
  );
}
