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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-2 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <article
        className="relative w-full max-w-[780px] max-h-[92vh] overflow-y-auto rounded-[8px] border border-[#665c54] bg-[#282828] text-[#d5c4a1] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Sticky Reader Bar (BRM minimal nav style) */}
        <div className="sticky top-0 z-20 flex items-center justify-between border-b border-[#665c54]/60 bg-[#282828]/95 backdrop-blur-md px-6 py-3.5">
          <div className="flex items-center gap-3 text-sm text-[#bdae93]">
            <button
              onClick={onClose}
              className="font-bold text-[#ebdbb2] hover:underline"
            >
              MȘC
            </button>
            <span>/</span>
            <button
              onClick={onClose}
              className="text-[#bdae93] hover:text-[#ebdbb2] transition"
            >
              Posts
            </button>
            <span>/</span>
            <span className="font-mono text-xs text-[#bdae93] truncate max-w-[200px] sm:max-w-[320px]">
              {post.id}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {post.repoUrl && (
              <a
                href={post.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-[8px] border border-[#665c54] bg-[#3c3836] px-3 py-1 text-xs text-[#ebdbb2] hover:bg-[#504945] transition"
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
                className="hidden sm:inline-flex items-center gap-1.5 rounded-[8px] border border-[#665c54] bg-[#3c3836] px-3 py-1 text-xs text-[#ebdbb2] hover:bg-[#504945] transition"
              >
                <span>Live</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
            <button
              onClick={onClose}
              className="inline-flex items-center justify-center rounded-[8px] border border-[#665c54] bg-[#3c3836] p-1.5 text-[#ebdbb2] hover:bg-[#504945] transition"
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
            <h1 className="text-[28px] sm:text-[36px] font-bold leading-[1.25] text-[#ebdbb2]">
              {title}
            </h1>
            <p className="text-[15px] text-[#bdae93] leading-relaxed">
              {subtitle}
            </p>
            <div className="text-[14px] text-[#bdae93] pt-1">
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

          {/* Collapsible Table of Contents (.toc) */}
          <div className="rounded-[8px] border border-[#665c54] bg-[#3c3836] px-4 py-2.5 text-sm">
            <details open>
              <summary className="cursor-pointer font-semibold text-[#ebdbb2] select-none py-1">
                {lang === 'ro' ? 'Cuprins (Table of Contents)' : 'Table of Contents'}
              </summary>
              <ul className="mt-2 mb-1 space-y-1.5 pl-5 list-disc text-[#bdae93]">
                {post.sections.map((sec, idx) => (
                  <li key={idx}>
                    <a
                      href={`#sec-${idx}`}
                      className="hover:text-[#ebdbb2] hover:underline transition"
                    >
                      {lang === 'ro' ? sec.headingRo : sec.headingEn}
                    </a>
                  </li>
                ))}
              </ul>
            </details>
          </div>

          {/* Executive Summary Blockquote */}
          <blockquote className="border-l-[3px] border-[#ebdbb2] pl-4 py-1 text-[15px] sm:text-[16px] text-[#bdae93] italic leading-relaxed">
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
                  <h2 className="group text-[22px] sm:text-[24px] font-bold leading-[1.3] text-[#ebdbb2] flex items-center gap-2">
                    <span>{heading}</span>
                    <span className="opacity-0 group-hover:opacity-100 text-[#bdae93] font-normal text-base transition-opacity">
                      #
                    </span>
                  </h2>

                  <div className="space-y-4 text-[15px] sm:text-[16px] text-[#d5c4a1] leading-[1.68]">
                    {paragraphs.map((para, pIdx) => (
                      <p key={pIdx}>{para}</p>
                    ))}
                  </div>

                  {callout && (
                    <blockquote className="border-l-[3px] border-[#fabd2f] bg-[#3c3836]/70 rounded-r-[8px] px-4 py-3 text-sm text-[#ebdbb2] leading-relaxed">
                      {callout}
                    </blockquote>
                  )}

                  {section.codeBlock && (
                    <div className="rounded-[8px] border border-[#665c54] bg-[#3c3836] overflow-hidden my-3">
                      <div className="flex items-center justify-between border-b border-[#665c54]/60 bg-[#32302f] px-4 py-2 text-xs font-mono text-[#bdae93]">
                        <span>{section.codeBlock.caption}</span>
                        <button
                          onClick={() =>
                            handleCopyCode(section.codeBlock!.code, idx)
                          }
                          className="inline-flex items-center gap-1 rounded-[6px] bg-[#504945] px-2.5 py-1 text-xs text-[#ebdbb2] hover:bg-[#665c54] transition"
                        >
                          {copiedIdx === idx ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-[#b8bb26]" />
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
                      <pre className="p-4 text-xs sm:text-[13px] font-mono text-[#ebdbb2] overflow-x-auto leading-relaxed">
                        <code>{section.codeBlock.code}</code>
                      </pre>
                    </div>
                  )}
                </section>
              );
            })}
          </div>

          {/* Post Tags (.post-tags) */}
          <div className="pt-6 border-t border-[#665c54]/60 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-[8px] border border-[#665c54] bg-[#504945] px-3.5 py-1.5 text-[13px] text-[#bdae93] hover:bg-[#665c54] hover:text-[#ebdbb2] transition"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Prev / Next Navigation (.paginav) */}
          <nav className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {prevPost ? (
              <button
                onClick={() => onSelectPost(prevPost)}
                className="rounded-[8px] border border-[#665c54] bg-[#504945] hover:bg-[#665c54] p-4 text-left transition"
              >
                <span className="inline-flex items-center gap-1 text-xs uppercase tracking-wider text-[#bdae93]">
                  <ChevronLeft className="w-3.5 h-3.5" />
                  {lang === 'ro' ? 'Anterior' : 'Prev'}
                </span>
                <div className="font-bold text-sm text-[#ebdbb2] line-clamp-1 mt-1">
                  {lang === 'ro' ? prevPost.titleRo : prevPost.titleEn}
                </div>
              </button>
            ) : (
              <div />
            )}

            {nextPost && (
              <button
                onClick={() => onSelectPost(nextPost)}
                className="rounded-[8px] border border-[#665c54] bg-[#504945] hover:bg-[#665c54] p-4 text-right transition"
              >
                <span className="inline-flex items-center justify-end gap-1 text-xs uppercase tracking-wider text-[#bdae93]">
                  {lang === 'ro' ? 'Următor' : 'Next'}
                  <ChevronRight className="w-3.5 h-3.5" />
                </span>
                <div className="font-bold text-sm text-[#ebdbb2] line-clamp-1 mt-1">
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
