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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-2 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <article
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto border border-[var(--border-strong)] bg-[var(--bg-elevated)] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Sticky Reader Bar */}
        <div
          className="sticky top-0 z-20 flex items-center justify-between border-b border-[var(--border)] px-5 py-3.5"
          style={{
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            backgroundColor: 'rgba(20, 11, 15, 0.92)',
          }}
        >
          <div className="flex items-center gap-2.5 text-xs font-mono text-[#d9d1ca]">
            <BookOpen className="w-3.5 h-3.5 text-[#52212e]" />
            <span className="uppercase tracking-wider text-[#efebe5] font-semibold">
              {post.id}
            </span>
            <span>·</span>
            <span>{categoryLabel}</span>
            <span>·</span>
            <span className="hidden sm:inline text-[#827470]">
              {post.readTime}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {post.repoUrl && (
              <a
                href={post.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="dp-btn-outline inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono"
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
                className="hidden sm:inline-flex items-center gap-1.5 dp-btn-outline px-3 py-1 text-xs font-mono"
              >
                <span>Live Portal</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
            <button
              onClick={onClose}
              className="dp-btn-primary inline-flex items-center justify-center p-1.5"
              aria-label="Close article"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Editorial Header */}
        <div
          className="px-6 sm:px-12 pt-8 pb-7 border-b border-[var(--border)]"
          style={{
            background:
              'linear-gradient(270deg, rgba(12, 12, 12, 0.6) 0%, rgb(23, 9, 13) 100%)',
          }}
        >
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[var(--ink-muted)] mb-4">
            <span className="inline-flex items-center gap-2 rounded-[30px] bg-[#52212e] px-3.5 py-1 text-[#efebe5]">
              <span className="h-1.5 w-1.5 rounded-[2px] bg-[#efebe5]" />
              {categoryLabel}
            </span>
            <span className="inline-flex items-center gap-1 text-[var(--ink-secondary)]">
              <Calendar className="w-3.5 h-3.5 text-[#827470]" />
              {date}
            </span>
            <span className="inline-flex items-center gap-1 text-[var(--ink-secondary)]">
              <Clock className="w-3.5 h-3.5 text-[#827470]" />
              {post.readTime}
            </span>
            <span>·</span>
            <span className="text-[var(--ink-secondary)]">
              Moană Ștefănuț-Cornel (@stefanutc1)
            </span>
          </div>

          <h1 className="font-display text-2xl sm:text-4xl font-medium tracking-tight text-[var(--ink)] leading-tight mb-3">
            {title}
          </h1>
          <p className="font-display font-light italic text-base sm:text-xl text-[var(--ink-secondary)] leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Article Body Sections */}
        <div className="px-6 sm:px-12 py-8 space-y-8">
          {/* Executive Lead in drivepoint.ro Burgundy Callout Banner */}
          <div className="dp-wine-banner px-5 py-4 text-sm sm:text-base text-[#efebe5] leading-relaxed">
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
                <div className="dp-heading-accent flex items-center gap-2.5">
                  <span className="text-xs font-mono text-[#827470]">
                    [0{idx + 1}]
                  </span>
                  <h2 className="font-display text-xl sm:text-2xl font-medium text-[var(--ink)]">
                    {heading}
                  </h2>
                </div>

                <div className="space-y-3.5 text-sm sm:text-base text-[var(--ink-secondary)] leading-relaxed">
                  {paragraphs.map((para, pIdx) => (
                    <p key={pIdx}>{para}</p>
                  ))}
                </div>

                {callout && (
                  <div className="dp-wine-banner flex items-start gap-3 p-4 text-xs sm:text-sm text-[#efebe5]">
                    <ShieldAlert className="w-4 h-4 shrink-0 mt-0.5 text-[#d9d1ca]" />
                    <div className="leading-relaxed">{callout}</div>
                  </div>
                )}

                {section.codeBlock && (
                  <div className="border border-[var(--border-strong)] bg-[#0c0c0c] overflow-hidden">
                    <div className="flex items-center justify-between border-b border-[#24181e] px-4 py-2.5 bg-[#17090d]">
                      <div className="flex items-center gap-2 text-xs font-mono text-[#d9d1ca]">
                        <Terminal className="w-3.5 h-3.5 text-[#52212e]" />
                        <span>{section.codeBlock.caption}</span>
                      </div>
                      <button
                        onClick={() =>
                          handleCopyCode(section.codeBlock!.code, idx)
                        }
                        className="inline-flex items-center gap-1 text-xs font-mono text-[#d9d1ca] hover:text-[#efebe5] transition"
                      >
                        {copiedIdx === idx ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-[#efebe5]" />
                            <span>Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>
                    <pre className="p-4 text-xs sm:text-[13px] font-mono text-[#efebe5] overflow-x-auto leading-relaxed">
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
                className="rounded-[4px] border border-[var(--border)] bg-[var(--surface)] px-2.5 py-1 text-xs font-mono text-[var(--ink-secondary)]"
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
                className="dp-showroom-card flex flex-col items-start p-4 text-left group"
              >
                <span className="inline-flex items-center gap-1 text-xs font-mono text-[var(--ink-muted)] mb-1">
                  <ChevronLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
                  {lang === 'ro' ? 'Articolul Anterior' : 'Previous Article'}
                </span>
                <span className="font-display text-sm font-medium text-[var(--ink)] line-clamp-1">
                  {lang === 'ro' ? prevPost.titleRo : prevPost.titleEn}
                </span>
              </button>
            ) : (
              <div />
            )}

            {nextPost && (
              <button
                onClick={() => onSelectPost(nextPost)}
                className="dp-showroom-card flex flex-col items-end p-4 text-right group"
              >
                <span className="inline-flex items-center gap-1 text-xs font-mono text-[var(--ink-muted)] mb-1">
                  {lang === 'ro' ? 'Articolul Următor' : 'Next Article'}
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </span>
                <span className="font-display text-sm font-medium text-[var(--ink)] line-clamp-1">
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
