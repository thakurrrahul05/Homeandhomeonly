import React, { useState, useRef, useEffect } from 'react';
import { Search, ChevronDown, Menu, X, ArrowRight } from 'lucide-react';
import { CATEGORIES } from '../data/themeData';

interface HeaderProps {
  currentScreen: string;
  onNavigate: (screen: string, payload?: any) => void;
  onOpenSearch: () => void;
  brandColor?: string;
  accentColor?: string;
}

export const Header: React.FC<HeaderProps> = ({
  currentScreen,
  onNavigate,
  onOpenSearch,
  brandColor = '#075B4F',
  accentColor = '#E96B72'
}) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleCategoryClick = (categorySlug: string) => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    onNavigate('category', { slug: categorySlug });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Brand Logo Lockup */}
        <button
          onClick={() => onNavigate('home')}
          aria-label="HomeAndHomeOnly Home"
          className="flex-shrink-0 flex items-center gap-2.5 group text-left cursor-pointer focus:outline-none"
        >
          <div className="w-10 h-10 flex-shrink-0 transition-transform group-hover:scale-105">
            <svg className="w-full h-full" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 3L3 17V36C3 37.1046 3.89543 38 5 38H35C36.1046 38 37 37.1046 37 36V17L20 3Z" fill={brandColor} />
              <path d="M20 9L7 19.5V34H33V19.5L20 9Z" fill={brandColor} stroke="#FFFFFF" strokeWidth="2" />
              <path d="M20 15C18.3431 15 17 16.3431 17 18C17 20.5 20 24 20 24C20 24 23 20.5 23 18C23 16.3431 21.6569 15 20 15Z" fill={accentColor} />
              <path d="M14 38V27H26V38" fill={brandColor} stroke="#FFFFFF" strokeWidth="2" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-extrabold text-xl tracking-tight leading-none" style={{ color: brandColor }}>
              HomeAndHome<span style={{ color: accentColor }}>Only</span>
            </span>
            <span className="text-[8.5px] font-semibold text-gray-500 tracking-[0.14em] mt-1 leading-none uppercase">
              SMART HOMES. HAPPIER LIVES.
            </span>
          </div>
        </button>

        {/* Desktop Navigation Menu */}
        <nav ref={dropdownRef} className="hidden lg:flex items-center gap-1 xl:gap-2">
          {/* Home */}
          <button
            onClick={() => onNavigate('home')}
            className={`px-3 py-1.5 text-sm font-semibold transition-colors relative cursor-pointer ${
              currentScreen === 'home' ? 'text-[#075B4F]' : 'text-gray-600 hover:text-[#075B4F]'
            }`}
          >
            Home
            {currentScreen === 'home' && (
              <span
                className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full"
                style={{ backgroundColor: brandColor }}
              />
            )}
          </button>

          {/* Home Appliances Dropdown */}
          <div className="relative group">
            <button
              onClick={() => setActiveDropdown(activeDropdown === 'kitchen' ? null : 'kitchen')}
              className={`px-3 py-1.5 text-sm font-medium transition-colors inline-flex items-center gap-1 cursor-pointer ${
                currentScreen === 'category' ? 'text-[#075B4F]' : 'text-gray-600 hover:text-[#075B4F]'
              }`}
            >
              Home Appliances
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'kitchen' ? 'rotate-180' : ''}`} />
            </button>
            {activeDropdown === 'kitchen' && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider px-3 py-1.5">
                  Popular Categories
                </div>
                {['Mixer Grinders', 'Wet Grinders', 'Electric Kettles', 'Air Fryers', 'Pressure Cookers'].map((item) => (
                  <button
                    key={item}
                    onClick={() => handleCategoryClick('kitchen-appliances')}
                    className="w-full text-left px-3 py-2 rounded-xl text-xs font-medium text-gray-700 hover:bg-[#EEF7F5] hover:text-[#075B4F] flex items-center justify-between group transition-colors"
                  >
                    <span>{item}</span>
                    <ArrowRight className="w-3 h-3 text-gray-300 group-hover:text-[#075B4F] group-hover:translate-x-0.5 transition-all" />
                  </button>
                ))}
                <div className="border-t border-gray-100 mt-2 pt-2">
                  <button
                    onClick={() => handleCategoryClick('kitchen-appliances')}
                    className="w-full text-center py-1.5 text-xs font-semibold text-[#075B4F] hover:underline"
                  >
                    View All Kitchen &rarr;
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Home Decor Dropdown */}
          <div className="relative group">
            <button
              onClick={() => setActiveDropdown(activeDropdown === 'decor' ? null : 'decor')}
              className="px-3 py-1.5 text-sm font-medium text-gray-600 hover:text-[#075B4F] transition-colors inline-flex items-center gap-1 cursor-pointer"
            >
              Home Decor
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'decor' ? 'rotate-180' : ''}`} />
            </button>
            {activeDropdown === 'decor' && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider px-3 py-1.5">
                  Living & Styling
                </div>
                {['Living Room Ideas', 'Indoor Plants & Pots', 'Wall Accents', 'Lighting & Lamps'].map((item) => (
                  <button
                    key={item}
                    onClick={() => handleCategoryClick('home-decor')}
                    className="w-full text-left px-3 py-2 rounded-xl text-xs font-medium text-gray-700 hover:bg-[#FAF0ED] hover:text-[#E96B72] flex items-center justify-between group transition-colors"
                  >
                    <span>{item}</span>
                    <ArrowRight className="w-3 h-3 text-gray-300 group-hover:text-[#E96B72] group-hover:translate-x-0.5 transition-all" />
                  </button>
                ))}
                <div className="border-t border-gray-100 mt-2 pt-2">
                  <button
                    onClick={() => handleCategoryClick('home-decor')}
                    className="w-full text-center py-1.5 text-xs font-semibold text-[#E96B72] hover:underline"
                  >
                    View All Decor &rarr;
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Home Furnishing Dropdown */}
          <div className="relative group">
            <button
              onClick={() => setActiveDropdown(activeDropdown === 'furnishing' ? null : 'furnishing')}
              className="px-3 py-1.5 text-sm font-medium text-gray-600 hover:text-[#075B4F] transition-colors inline-flex items-center gap-1 cursor-pointer"
            >
              Home Furnishing
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'furnishing' ? 'rotate-180' : ''}`} />
            </button>
            {activeDropdown === 'furnishing' && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider px-3 py-1.5">
                  Comfort & Sleep
                </div>
                {['Orthopedic Mattresses', 'Sofa Beds & Seating', 'Curtains & Drapes', 'Bed Linen 300TC'].map((item) => (
                  <button
                    key={item}
                    onClick={() => handleCategoryClick('home-furnishing')}
                    className="w-full text-left px-3 py-2 rounded-xl text-xs font-medium text-gray-700 hover:bg-sky-50 hover:text-sky-700 flex items-center justify-between group transition-colors"
                  >
                    <span>{item}</span>
                    <ArrowRight className="w-3 h-3 text-gray-300 group-hover:text-sky-700 group-hover:translate-x-0.5 transition-all" />
                  </button>
                ))}
                <div className="border-t border-gray-100 mt-2 pt-2">
                  <button
                    onClick={() => handleCategoryClick('home-furnishing')}
                    className="w-full text-center py-1.5 text-xs font-semibold text-sky-700 hover:underline"
                  >
                    View All Furnishing &rarr;
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Buying Guides */}
          <button
            onClick={() => onNavigate('category', { slug: 'buying-guides' })}
            className={`px-3 py-1.5 text-sm font-medium transition-colors cursor-pointer ${
              currentScreen === 'buying-guide' ? 'text-[#075B4F] font-semibold' : 'text-gray-600 hover:text-[#075B4F]'
            }`}
          >
            Buying Guides
          </button>

          {/* Blog */}
          <button
            onClick={() => onNavigate('article', { id: 'art-1' })}
            className={`px-3 py-1.5 text-sm font-medium transition-colors cursor-pointer ${
              currentScreen === 'article' ? 'text-[#075B4F] font-semibold' : 'text-gray-600 hover:text-[#075B4F]'
            }`}
          >
            Blog
          </button>

          {/* Home Problems / FAQ */}
          <button
            onClick={() => onNavigate('problem-faq')}
            className={`px-3 py-1.5 text-sm font-medium transition-colors cursor-pointer ${
              currentScreen === 'problem-faq' ? 'text-[#075B4F] font-semibold' : 'text-gray-600 hover:text-[#075B4F]'
            }`}
          >
            Home Problems
          </button>
        </nav>

        {/* Search & Actions */}
        <div className="flex items-center gap-3">
          {/* Search Trigger Input */}
          <div
            onClick={onOpenSearch}
            className="relative hidden sm:flex items-center w-64 md:w-72 bg-gray-50 border border-gray-200 rounded-full px-4 py-2 cursor-pointer hover:border-[#075B4F] hover:bg-white transition-all shadow-inner"
          >
            <span className="text-xs text-gray-400 select-none flex-grow">
              Search articles, products, tips...
            </span>
            <Search className="w-4 h-4 text-gray-400 hover:text-[#075B4F]" />
          </div>

          {/* Mobile Search Button */}
          <button
            onClick={onOpenSearch}
            className="sm:hidden p-2 text-gray-600 hover:text-[#075B4F] rounded-lg"
            aria-label="Search"
          >
            <Search className="w-5 h-5" />
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            className="lg:hidden p-2 text-gray-600 hover:text-[#075B4F] rounded-lg focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white px-4 pt-3 pb-6 space-y-3 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          <div className="space-y-1">
            <button
              onClick={() => {
                onNavigate('home');
                setMobileMenuOpen(false);
              }}
              className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold text-[#075B4F] bg-[#EEF7F5]"
            >
              Home
            </button>
            <button
              onClick={() => handleCategoryClick('kitchen-appliances')}
              className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Home Appliances
            </button>
            <button
              onClick={() => handleCategoryClick('home-decor')}
              className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Home Decor
            </button>
            <button
              onClick={() => handleCategoryClick('home-furnishing')}
              className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Home Furnishing
            </button>
            <button
              onClick={() => handleCategoryClick('buying-guides')}
              className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Buying Guides
            </button>
            <button
              onClick={() => {
                onNavigate('article', { id: 'art-1' });
                setMobileMenuOpen(false);
              }}
              className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Blog
            </button>
            <button
              onClick={() => {
                onNavigate('problem-faq');
                setMobileMenuOpen(false);
              }}
              className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Home Problems Q&A
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
