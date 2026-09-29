import React, { useState } from 'react';
import { ChevronRight, ArrowRight, Filter, Search, BookOpen, FileText } from 'lucide-react';
import { CATEGORIES, BUYING_GUIDES, LATEST_ARTICLES } from '../../data/themeData';

interface CategoryArchiveScreenProps {
  categorySlug?: string;
  onNavigate: (screen: string, payload?: any) => void;
  brandColor?: string;
  accentColor?: string;
}

export const CategoryArchiveScreen: React.FC<CategoryArchiveScreenProps> = ({
  categorySlug = 'kitchen-appliances',
  onNavigate,
  brandColor = '#075B4F',
  accentColor = '#E96B72'
}) => {
  const [activeCategorySlug, setActiveCategorySlug] = useState(categorySlug);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'newest'>('featured');

  const currentCategory =
    CATEGORIES.find((c) => c.slug === activeCategorySlug) || CATEGORIES[0];

  // Filter guides and articles belonging to this category
  const relatedGuides = BUYING_GUIDES.filter((g) => {
    if (activeCategorySlug === 'buying-guides') return true;
    return g.categorySlug === activeCategorySlug;
  });

  const relatedArticles = LATEST_ARTICLES.filter((a) => {
    if (activeCategorySlug === 'buying-guides') return false;
    return a.categorySlug === activeCategorySlug;
  });

  // Combine items
  const allItems = [
    ...relatedGuides.map((g) => ({ ...g, itemType: 'guide' })),
    ...relatedArticles.map((a) => ({ ...a, itemType: 'article' }))
  ].filter((item) => {
    if (!searchQuery) return true;
    return item.title.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Category Header Hero */}
      <div className="bg-[#EEF7F5] border-b border-[#d4ebe5] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-3">
            <button onClick={() => onNavigate('home')} className="hover:text-[#075B4F] cursor-pointer">
              Home
            </button>
            <ChevronRight className="w-3 h-3 text-gray-400" />
            <span className="text-gray-900 font-medium">Categories</span>
            <ChevronRight className="w-3 h-3 text-gray-400" />
            <span className="text-gray-900 font-semibold">{currentCategory.name}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8 space-y-4">
              <span
                className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full text-white inline-block shadow-xs"
                style={{ backgroundColor: currentCategory.accentColor }}
              >
                Category Archive &bull; {currentCategory.articleCount} Guides &amp; Tips
              </span>
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
                {currentCategory.name}
              </h1>
              <p className="text-base text-gray-600 max-w-2xl leading-relaxed">
                {currentCategory.desc}. Clear, research-backed advice tested for Indian homes, power standards, and recipes.
              </p>
            </div>
            <div className="md:col-span-4 hidden md:block">
              <div className="h-44 rounded-2xl overflow-hidden shadow-lg border-2 border-white">
                <img
                  src={currentCategory.image}
                  alt={currentCategory.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Category Tabs Switcher */}
          <div className="mt-8 pt-6 border-t border-[#d8ece7] flex items-center gap-2 overflow-x-auto hide-scrollbar">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategorySlug(cat.slug);
                  setSelectedSubcategory('All');
                }}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition cursor-pointer ${
                  cat.slug === activeCategorySlug
                    ? 'bg-[#075B4F] text-white shadow-sm'
                    : 'bg-white text-gray-600 hover:text-gray-900 border border-gray-200'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Filter and Content Controls */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-100">
          {/* Subcategory Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto hide-scrollbar">
            <button
              onClick={() => setSelectedSubcategory('All')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer ${
                selectedSubcategory === 'All'
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              All Topics
            </button>
            {currentCategory.subcategories.map((sub) => (
              <button
                key={sub}
                onClick={() => setSelectedSubcategory(sub)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap cursor-pointer ${
                  selectedSubcategory === sub
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {sub}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter in this category..."
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#075B4F]"
            />
          </div>
        </div>

        {/* Results Grid */}
        <div className="pt-8">
          {allItems.length === 0 ? (
            <div className="text-center py-16 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
              <p className="text-sm text-gray-500">No guides matching your filter.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedSubcategory('All');
                }}
                className="mt-3 text-xs font-semibold text-[#075B4F] underline cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allItems.map((item: any) => (
                <article
                  key={item.id}
                  onClick={() => {
                    if (item.itemType === 'guide') {
                      onNavigate('buying-guide', { guideId: item.id });
                    } else {
                      onNavigate('article', { id: item.id });
                    }
                  }}
                  className="bg-white rounded-2xl border border-gray-200/80 shadow-sm overflow-hidden flex flex-col group hover:shadow-md transition cursor-pointer"
                >
                  <div className="h-48 overflow-hidden relative">
                    <img
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      src={item.image}
                    />
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span
                        className="bg-white/95 backdrop-blur-sm text-[11px] font-bold px-3 py-1 rounded-full shadow-sm"
                        style={{ color: item.categoryColor }}
                      >
                        {item.category}
                      </span>
                      <span className="bg-black/60 backdrop-blur-sm text-white text-[10px] font-semibold px-2 py-0.5 rounded-md">
                        {item.itemType === 'guide' ? 'Buying Guide' : 'Home Tip'}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col justify-between flex-grow">
                    <div>
                      <h3 className="font-heading font-bold text-lg text-gray-900 group-hover:text-[#075B4F] transition-colors leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs text-gray-500 mt-2 line-clamp-2 leading-relaxed">
                        {item.shortDesc || item.excerpt}
                      </p>
                    </div>
                    <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                      <span className="text-xs text-gray-400">{item.date} &bull; {item.readTime}</span>
                      <span className="w-8 h-8 rounded-full bg-gray-100 text-gray-600 group-hover:bg-[#075B4F] group-hover:text-white transition flex items-center justify-center text-xs">
                        →
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
