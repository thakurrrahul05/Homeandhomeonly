import React, { useState, useEffect, useRef } from 'react';
import { Search, X, BookOpen, HelpCircle, FileText, ArrowRight } from 'lucide-react';
import { BUYING_GUIDES, LATEST_ARTICLES, HOME_PROBLEMS, CATEGORIES } from '../data/themeData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (screen: string, payload?: any) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onNavigate }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const trimmed = query.trim().toLowerCase();

  const matchingGuides = trimmed
    ? BUYING_GUIDES.filter(
        (g) =>
          g.title.toLowerCase().includes(trimmed) ||
          g.category.toLowerCase().includes(trimmed) ||
          g.shortDesc.toLowerCase().includes(trimmed)
      )
    : BUYING_GUIDES.slice(0, 3);

  const matchingArticles = trimmed
    ? LATEST_ARTICLES.filter(
        (a) =>
          a.title.toLowerCase().includes(trimmed) ||
          a.category.toLowerCase().includes(trimmed) ||
          a.excerpt.toLowerCase().includes(trimmed)
      )
    : LATEST_ARTICLES.slice(0, 2);

  const matchingProblems = trimmed
    ? HOME_PROBLEMS.filter(
        (p) =>
          p.question.toLowerCase().includes(trimmed) ||
          p.quickAnswer.toLowerCase().includes(trimmed)
      )
    : HOME_PROBLEMS.slice(0, 2);

  const handleSelect = (screen: string, payload?: any) => {
    onClose();
    onNavigate(screen, payload);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col max-h-[80vh]">
        {/* Search Input Bar */}
        <div className="relative flex items-center border-b border-gray-100 px-5 py-4">
          <Search className="w-5 h-5 text-gray-400 mr-3 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search buying guides, questions, appliances, decor..."
            className="w-full text-base sm:text-lg text-gray-800 placeholder-gray-400 focus:outline-none bg-transparent"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-gray-400 hover:text-gray-600 p-1 mr-2"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs font-semibold px-2 py-1 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-md transition"
          >
            ESC
          </button>
        </div>

        {/* Results Body */}
        <div className="flex-1 overflow-y-auto p-5 space-y-6">
          {/* Quick Categories Bar */}
          {!trimmed && (
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-2">
                Browse Popular Categories
              </div>
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => handleSelect('category', { slug: cat.slug })}
                    className="px-3 py-1.5 rounded-full text-xs font-medium bg-gray-50 hover:bg-[#EEF7F5] hover:text-[#075B4F] border border-gray-200 transition cursor-pointer"
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Buying Guides */}
          {matchingGuides.length > 0 && (
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-2.5 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-[#075B4F]" />
                <span>Buying Guides ({matchingGuides.length})</span>
              </div>
              <div className="space-y-2">
                {matchingGuides.map((guide) => (
                  <button
                    key={guide.id}
                    onClick={() => handleSelect('buying-guide', { guideId: guide.id })}
                    className="w-full text-left p-3 rounded-xl hover:bg-[#EEF7F5] border border-transparent hover:border-[#075B4F]/20 transition flex items-center justify-between group cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={guide.image}
                        alt=""
                        className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
                      />
                      <div>
                        <div className="text-xs font-bold text-gray-900 group-hover:text-[#075B4F]">
                          {guide.title}
                        </div>
                        <div className="text-[11px] text-gray-500 mt-0.5 line-clamp-1">
                          {guide.shortDesc}
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-[#075B4F] group-hover:translate-x-1 transition-all shrink-0 ml-3" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Home Problems / FAQs */}
          {matchingProblems.length > 0 && (
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-2.5 flex items-center gap-1.5">
                <HelpCircle className="w-3.5 h-3.5 text-[#E96B72]" />
                <span>Home Problems &amp; Fixes ({matchingProblems.length})</span>
              </div>
              <div className="space-y-2">
                {matchingProblems.map((problem) => (
                  <button
                    key={problem.id}
                    onClick={() => handleSelect('problem-faq', { problemId: problem.id })}
                    className="w-full text-left p-3 rounded-xl hover:bg-[#FAF0ED] border border-transparent hover:border-[#E96B72]/20 transition flex items-center justify-between group cursor-pointer"
                  >
                    <div>
                      <div className="text-xs font-bold text-gray-900 group-hover:text-[#075B4F]">
                        {problem.question}
                      </div>
                      <div className="text-[11px] text-gray-500 mt-0.5 line-clamp-1">
                        {problem.quickAnswer}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-[#E96B72] group-hover:translate-x-1 transition-all shrink-0 ml-3" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Articles */}
          {matchingArticles.length > 0 && (
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-2.5 flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-sky-600" />
                <span>Latest Articles ({matchingArticles.length})</span>
              </div>
              <div className="space-y-2">
                {matchingArticles.map((art) => (
                  <button
                    key={art.id}
                    onClick={() => handleSelect('article', { id: art.id })}
                    className="w-full text-left p-3 rounded-xl hover:bg-sky-50 border border-transparent hover:border-sky-200 transition flex items-center justify-between group cursor-pointer"
                  >
                    <div>
                      <div className="text-xs font-bold text-gray-900 group-hover:text-[#075B4F]">
                        {art.title}
                      </div>
                      <div className="text-[11px] text-gray-500 mt-0.5 line-clamp-1">
                        {art.excerpt}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-sky-600 group-hover:translate-x-1 transition-all shrink-0 ml-3" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
