'use client';

import React, { useState, useEffect } from 'react';
import { Search, BookOpen, FolderGit2, ArrowUpRight } from 'lucide-react';
import { BlogPost } from '@/data/blog';
import { ProjectItem } from '@/data/portfolio';

interface CommandPaletteProps {
  isOpen: boolean;
  lang: 'ro' | 'en';
  posts: BlogPost[];
  portfolio: ProjectItem[];
  onClose: () => void;
  onSelectPost: (post: BlogPost) => void;
  onSelectPortfolio: (item: ProjectItem) => void;
}

export default function CommandPalette({
  isOpen,
  lang,
  posts,
  portfolio,
  onClose,
  onSelectPost,
  onSelectPortfolio,
}: CommandPaletteProps) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (!isOpen) {
      setQuery('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const q = query.trim().toLowerCase();

  const filteredPosts = posts.filter((p) => {
    const title = lang === 'ro' ? p.titleRo : p.titleEn;
    const excerpt = lang === 'ro' ? p.excerptRo : p.excerptEn;
    return (
      !q ||
      title.toLowerCase().includes(q) ||
      excerpt.toLowerCase().includes(q) ||
      p.tags.some((t) => t.toLowerCase().includes(q)) ||
      p.id.toLowerCase().includes(q)
    );
  });

  const filteredPortfolio = portfolio.filter((item) => {
    const title = lang === 'ro' ? item.titleRo : item.titleEn;
    const desc = lang === 'ro' ? item.descRo : item.descEn;
    return (
      !q ||
      title.toLowerCase().includes(q) ||
      desc.toLowerCase().includes(q) ||
      item.tags.some((t) => t.toLowerCase().includes(q)) ||
      item.code.toLowerCase().includes(q)
    );
  });

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/80 backdrop-blur-md pt-16 px-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl border border-[#52212e] bg-[#140b0f] shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input */}
        <div className="flex items-center gap-3 border-b border-[#24181e] bg-[#17090d] px-4 py-3.5">
          <Search className="w-4 h-4 text-[#827470] shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={
              lang === 'ro'
                ? 'Caută în articole de blog, investigații DFIR, proiecte sau tehnologii...'
                : 'Search blog articles, DFIR investigations, projects, or stack...'
            }
            className="w-full bg-transparent text-sm text-[#efebe5] placeholder:text-[#827470] focus:outline-none"
          />
          <button
            onClick={onClose}
            className="rounded-tl-[8px] rounded-br-[8px] border border-[#52212e] bg-[#401823] px-2 py-0.5 text-[10px] font-mono text-[#efebe5]"
          >
            ESC
          </button>
        </div>

        {/* Results */}
        <div className="max-h-[65vh] overflow-y-auto p-3 space-y-5">
          {/* Blog Posts */}
          <div>
            <div className="px-2 pb-1.5 text-[11px] font-mono uppercase tracking-wider text-[#827470] flex items-center justify-between">
              <span>
                {lang === 'ro'
                  ? 'Jurnal & Articole Blog'
                  : 'Engineering Blog Posts'}
              </span>
              <span>{filteredPosts.length}</span>
            </div>
            <div className="space-y-1">
              {filteredPosts.map((post) => (
                <button
                  key={post.slug}
                  onClick={() => {
                    onSelectPost(post);
                    onClose();
                  }}
                  className="w-full flex items-start justify-between gap-3 px-3 py-2.5 text-left hover:bg-[#401823]/50 border border-transparent hover:border-[#52212e] transition group"
                >
                  <div className="flex items-start gap-2.5 min-w-0">
                    <BookOpen className="w-4 h-4 text-[#827470] shrink-0 mt-0.5" />
                    <div className="min-w-0">
                      <div className="font-display text-sm font-medium text-[#efebe5] truncate">
                        {lang === 'ro' ? post.titleRo : post.titleEn}
                      </div>
                      <div className="text-xs font-mono text-[#827470] truncate">
                        {post.id} ·{' '}
                        {lang === 'ro'
                          ? post.categoryLabelRo
                          : post.categoryLabelEn}{' '}
                        · {post.readTime}
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#d9d1ca] opacity-0 group-hover:opacity-100 transition shrink-0" />
                </button>
              ))}
            </div>
          </div>

          {/* Portfolio Items */}
          <div>
            <div className="px-2 pb-1.5 text-[11px] font-mono uppercase tracking-wider text-[#827470] flex items-center justify-between">
              <span>
                {lang === 'ro'
                  ? 'Sisteme & Proiecte Universitare'
                  : 'Systems & Academic Projects'}
              </span>
              <span>{filteredPortfolio.length}</span>
            </div>
            <div className="space-y-1">
              {filteredPortfolio.slice(0, 10).map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onSelectPortfolio(item);
                    onClose();
                  }}
                  className="w-full flex items-start justify-between gap-3 px-3 py-2.5 text-left hover:bg-[#401823]/50 border border-transparent hover:border-[#52212e] transition group"
                >
                  <div className="flex items-start gap-2.5 min-w-0">
                    <FolderGit2 className="w-4 h-4 text-[#827470] shrink-0 mt-0.5" />
                    <div className="min-w-0">
                      <div className="font-display text-sm font-medium text-[#efebe5] truncate">
                        {lang === 'ro' ? item.titleRo : item.titleEn}
                      </div>
                      <div className="text-xs font-mono text-[#827470] truncate">
                        {item.code} · {item.badge} ·{' '}
                        {item.tags.slice(0, 3).join(', ')}
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#d9d1ca] opacity-0 group-hover:opacity-100 transition shrink-0" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
