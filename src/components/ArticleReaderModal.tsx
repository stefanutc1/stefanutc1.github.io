'use client';

import React, { useState, useEffect } from 'react';
import {
  X,
  ExternalLink,
  Copy,
  Check,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { BlogPost } from '@/data/blog';
import BlogPostCover from '@/components/BlogPostCover';

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

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-2 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <article
        className="relative w-full max-w-[780px] max-h-[92vh] overflow-y-auto rounded-[8px] border border-[var(--border-strong)] bg-[var(--bg-elevated)] text-[var(--ink-secondary)] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Sticky Reader Bar (BRM minimal nav style with site palette) */}
        <div
          className="sticky top-0 z-20 flex items-center justify-between border-b border-[var(--border)] px-6 py-3.5"
          style={{
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            backgroundColor: 'rgba(20, 11, 15, 0.92)',
          }}
        >
          <div className="flex items-center gap-3 text-sm text-[var(--ink-muted)]">
            <button
              onClick={onClose}
              className="font-display font-bold text-[#efebe5] hover:underline"
            >
              MȘC
            </button>
            <span>/</span>
            <button
              onClick={onClose}
              className="text-[#d9d1ca] hover:text-[#efebe5] transition"
            >
              Posts
            </button>
            <span>/</span>
            <span className="font-mono text-xs text-[#827470] truncate max-w-[200px] sm:max-w-[320px]">
              {post.id}
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
                <span>GitHub</span>
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
                <span>Live</span>
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

        {/* Main Single-Column Post Container (matching brunorochamoura.com --main-width: 720px) */}
        <div className="px-6 sm:px-10 py-8 space-y-6">
          {/* Post Header (.post-header) */}
          <header className="space-y-2.5">
            <h1 className="font-display text-[28px] sm:text-[36px] font-bold leading-[1.22] text-[var(--ink)]">
              {title}
            </h1>
            <p className="text-[15px] text-[var(--ink-secondary)] leading-relaxed">
              {subtitle}
            </p>
            <div className="text-[14px] font-mono text-[var(--ink-muted)] pt-1">
              <span>{date}</span>
              <span>&nbsp;·&nbsp;</span>
              <span>{post.readTime}</span>
              <span>&nbsp;·&nbsp;</span>
              <span>Moană Ștefănuț-Cornel</span>
            </div>
          </header>

          {/* Entry Cover (.entry-cover) */}
          <figure className="my-5">
            <BlogPostCover post={post} lang={lang} />
          </figure>

          {/* Collapsible Table of Contents (.toc) in Site Palette */}
          <div className="rounded-[8px] border border-[var(--border)] bg-[var(--surface)] px-4 py-2.5 text-sm">
            <details open>
              <summary className="cursor-pointer font-display font-semibold text-[var(--ink)] select-none py-1">
                {lang === 'ro'
                  ? 'Cuprins (Table of Contents)'
                  : 'Table of Contents'}
              </summary>
              <ul className="mt-2 mb-1 space-y-1.5 pl-5 list-disc text-[var(--ink-secondary)]">
                {post.sections.map((sec, idx) => (
                  <li key={idx}>
                    <a
                      href={`#sec-${idx}`}
                      className="hover:text-[var(--ink)] hover:underline transition"
                    >
                      {lang === 'ro' ? sec.headingRo : sec.headingEn}
                    </a>
                  </li>
                ))}
              </ul>
            </details>
          </div>

          {/* Executive Summary Blockquote */}
          <blockquote className="dp-wine-banner px-5 py-3.5 text-[15px] sm:text-[16px] text-[#efebe5] leading-relaxed">
            {excerpt}
          </blockquote>

          {/* Post Content Sections (.post-content) */}
          <div className="space-y-8 pt-2">
            {post.sections.map((section, idx) => {
              const heading =
                lang === 'ro' ? section.headingRo : section.headingEn;
              const paragraphs =
                lang === 'ro' ? section.paragraphsRo : section.paragraphsEn;
              const callout =
                lang === 'ro' ? section.calloutRo : section.calloutEn;

              return (
                <section key={idx} id={`sec-${idx}`} className="space-y-4">
                  <h2 className="group font-display text-[22px] sm:text-[24px] font-bold leading-[1.3] text-[var(--ink)] flex items-center gap-2">
                    <span>{heading}</span>
                    <span className="opacity-0 group-hover:opacity-100 text-[#827470] font-normal text-base transition-opacity">
                      #
                    </span>
                  </h2>

                  <div className="space-y-4 text-[15px] sm:text-[16px] text-[var(--ink-secondary)] leading-[1.68]">
                    {paragraphs.map((para, pIdx) => (
                      <p key={pIdx}>{para}</p>
                    ))}
                  </div>

                  {callout && (
                    <blockquote className="dp-wine-banner rounded-r-[8px] px-4 py-3 text-sm text-[#efebe5] leading-relaxed">
                      {callout}
                    </blockquote>
                  )}

                  {section.codeBlock && (
                    <div className="rounded-[8px] border border-[#401823] bg-[#0c0c0c] overflow-hidden my-3">
                      <div className="flex items-center justify-between border-b border-[#24181e] bg-[#17090d] px-4 py-2 text-xs font-mono text-[#d9d1ca]">
                        <span>{section.codeBlock.caption}</span>
                        <button
                          onClick={() =>
                            handleCopyCode(section.codeBlock!.code, idx)
                          }
                          className="inline-flex items-center gap-1 rounded-[6px] border border-[#52212e] bg-[#401823] px-2.5 py-1 text-xs text-[#efebe5] hover:bg-[#52212e] transition"
                        >
                          {copiedIdx === idx ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-[#efebe5]" />
                              <span>copied!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              <span>copy</span>
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
          </div>

          {/* Post Tags (.post-tags) in Site Palette */}
          <div className="pt-6 border-t border-[var(--border)] flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-[8px] border border-[var(--border)] bg-[var(--surface)] px-3.5 py-1.5 text-[13px] font-mono text-[var(--ink-secondary)] hover:border-[#52212e] hover:text-[var(--ink)] transition"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Prev / Next Navigation (.paginav) in Site Palette */}
          <nav className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {prevPost ? (
              <button
                onClick={() => onSelectPost(prevPost)}
                className="dp-showroom-card rounded-[8px] p-4 text-left transition"
              >
                <span className="inline-flex items-center gap-1 text-xs font-mono uppercase tracking-wider text-[var(--ink-muted)]">
                  <ChevronLeft className="w-3.5 h-3.5" />
                  {lang === 'ro' ? 'Anterior' : 'Prev'}
                </span>
                <div className="font-display font-bold text-sm text-[var(--ink)] line-clamp-1 mt-1">
                  {lang === 'ro' ? prevPost.titleRo : prevPost.titleEn}
                </div>
              </button>
            ) : (
              <div />
            )}

            {nextPost && (
              <button
                onClick={() => onSelectPost(nextPost)}
                className="dp-showroom-card rounded-[8px] p-4 text-right transition"
              >
                <span className="inline-flex items-center justify-end gap-1 text-xs font-mono uppercase tracking-wider text-[var(--ink-muted)]">
                  {lang === 'ro' ? 'Următor' : 'Next'}
                  <ChevronRight className="w-3.5 h-3.5" />
                </span>
                <div className="font-display font-bold text-sm text-[var(--ink)] line-clamp-1 mt-1">
                  {lang === 'ro' ? nextPost.titleRo : nextPost.titleEn}
                </div>
              </button>
            )}
          </nav>
        </div>
      </article>
    </div>
  );
}
