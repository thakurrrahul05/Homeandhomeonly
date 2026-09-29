import React, { useRef, useState } from 'react';
import { ChevronRight, ArrowRight, Lightbulb, Bed, Zap, Clock, Heart, ExternalLink, X } from 'lucide-react';
import { CATEGORIES, BUYING_GUIDES, HOME_PROBLEMS, LATEST_ARTICLES, INSTAGRAM_POSTS } from '../../data/themeData';

interface HomeScreenProps {
  onNavigate: (screen: string, payload?: any) => void;
  brandColor?: string;
  accentColor?: string;
  heroTagline?: string;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onNavigate,
  brandColor = '#075B4F',
  accentColor = '#E96B72',
  heroTagline = 'A Happier Home Everyday'
}) => {
  const instagramStripRef = useRef<HTMLDivElement>(null);
  const [selectedInstaPost, setSelectedInstaPost] = useState<any | null>(null);

  const scrollInstagram = (direction: 'left' | 'right') => {
    if (instagramStripRef.current) {
      const scrollAmount = direction === 'left' ? -260 : 260;
      instagramStripRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const getProblemIcon = (type: string) => {
    switch (type) {
      case 'bulb':
        return <Lightbulb className="w-4 h-4 text-amber-600" />;
      case 'bed':
        return <Bed className="w-4 h-4 text-sky-600" />;
      case 'zap':
        return <Zap className="w-4 h-4 text-orange-600" />;
      case 'clock':
        return <Clock className="w-4 h-4 text-[#075B4F]" />;
      default:
        return <Lightbulb className="w-4 h-4 text-amber-600" />;
    }
  };

  const getProblemBg = (type: string) => {
    switch (type) {
      case 'bulb':
        return 'bg-amber-50';
      case 'bed':
        return 'bg-sky-50';
      case 'zap':
        return 'bg-orange-50';
      case 'clock':
        return 'bg-emerald-50';
      default:
        return 'bg-emerald-50';
    }
  };

  return (
    <main>
      {/* BEGIN: HeroSection */}
      <section className="relative bg-gradient-to-b from-[#FFFDF9] to-[#FBF8F2] pt-8 pb-16 lg:py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6">
              {/* Eyebrow Pill */}
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase"
                style={{ backgroundColor: `${brandColor}15`, color: brandColor }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accentColor }}></span>
                SMARTER HOME. BETTER CHOICES.
              </div>

              {/* Headline */}
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-[52px] font-extrabold text-gray-900 leading-[1.12] tracking-tight">
                Helping Indian Homes Make Smarter{' '}
                <span
                  className="underline decoration-wavy underline-offset-8"
                  style={{ color: brandColor, textDecorationColor: `${accentColor}66` }}
                >
                  Buying Decisions
                </span>
              </h1>

              {/* Supporting Paragraph */}
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl">
                From kitchen appliances to everyday home essentials, we simplify confusing choices with practical tips, comparisons and buying guides.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#featured-guides"
                  className="inline-flex items-center justify-center gap-2 text-white px-7 py-3.5 rounded-xl font-semibold text-sm hover:opacity-95 shadow-sm hover:shadow-md transition duration-200 cursor-pointer"
                  style={{ backgroundColor: brandColor }}
                >
                  Explore Buying Guides
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#latest-articles"
                  className="inline-flex items-center justify-center bg-white border border-gray-300 text-gray-700 px-6 py-3.5 rounded-xl font-semibold text-sm hover:bg-gray-50 hover:border-gray-400 transition duration-200 cursor-pointer"
                >
                  Latest Home Tips
                </a>
              </div>

              {/* Trust Micro-Badges */}
              <div className="pt-6 border-t border-gray-200/80 grid grid-cols-3 gap-4">
                <div className="flex items-center gap-2.5">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${brandColor}15`, color: brandColor }}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    </svg>
                  </div>
                  <span className="text-xs font-medium text-gray-700 leading-tight">
                    Practical<br className="hidden sm:inline" /> Advice
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${brandColor}15`, color: brandColor }}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    </svg>
                  </div>
                  <span className="text-xs font-medium text-gray-700 leading-tight">
                    Research-Based<br className="hidden sm:inline" /> Recommendations
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${brandColor}15`, color: brandColor }}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    </svg>
                  </div>
                  <span className="text-xs font-medium text-gray-700 leading-tight">
                    Made for<br className="hidden sm:inline" /> Indian Homes
                  </span>
                </div>
              </div>
            </div>

            {/* Right Lifestyle Visual Column */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] sm:aspect-[16/11]">
                <img
                  alt="Contemporary Indian living room featuring a warm beige sofa, wooden coffee table, lush indoor plants and warm lighting"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzfdmNcgL20uDQASfCHD8WDlJW5cNrUNAe-OCd-1JQKUO9j7xMFx9pyxAFiMejnqy3ddkTswptLrTfTYU9kPXB6Mal-CK64i3X_t3DMUo5SxF45MMEgkssYUaeuO3ZSzqq6EvEN8u97LJW2NjXFFW9fSovVjBj857H5HVh8J0C6Qb18y8R3ROkcCpuoBkXFOJxyBZrPakwCN8tLHG9Y3F9jK0AmJw4yCqnsDnq46EKrsBncWP-jqIeqA"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>

                {/* Top Floating Editorial Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl shadow-md border border-white/60 flex items-center gap-1.5">
                  <span className="font-handwritten text-lg font-bold text-gray-800">
                    {heroTagline}
                  </span>
                  <span className="text-[#E96B72] text-sm">♡</span>
                </div>

                {/* Bottom Tag Overlay */}
                <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-black/60 backdrop-blur-md text-white px-4 py-2 rounded-xl text-xs sm:text-xs font-medium tracking-wide flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Practical Tips · Buying Guides · Real Solutions For Indian Homes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END: HeroSection */}

      {/* BEGIN: CategoryNavigation */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
              What can we help you with?
            </h2>
            <p className="mt-3 text-base text-gray-500">
              Explore our main categories and find exactly what you need.
            </p>
          </div>

          {/* Category 4-Card Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CATEGORIES.map((category) => (
              <div
                key={category.id}
                onClick={() => onNavigate('category', { slug: category.slug })}
                className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden cursor-pointer"
              >
                <div className="h-44 overflow-hidden relative">
                  <img
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={category.image}
                  />
                  <div
                    className="absolute -bottom-4 left-5 w-10 h-10 rounded-full text-white flex items-center justify-center shadow-md transition-transform group-hover:scale-110"
                    style={{ backgroundColor: category.accentColor }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5a3 3 0 01-3 3h0a3 3 0 01-3-3V5L8 4z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    </svg>
                  </div>
                </div>
                <div className="p-6 pt-7 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="font-heading font-bold text-lg text-gray-900 group-hover:text-[#075B4F] transition-colors">
                      {category.name}
                    </h3>
                    <p className="mt-2 text-xs text-gray-500 leading-relaxed">
                      {category.desc}
                    </p>
                  </div>
                  <div className="mt-5 inline-flex items-center text-xs font-bold text-[#075B4F] group-hover:translate-x-1 transition-transform">
                    Explore <span className="ml-1">→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* END: CategoryNavigation */}

      {/* BEGIN: FeaturedBuyingGuides */}
      <section className="py-16 bg-[#EEF7F5] border-y border-[#dbece8]" id="featured-guides">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header with split CTA */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
                Not Sure What to Buy? Start Here.
              </h2>
              <p className="mt-2 text-sm md:text-base text-gray-600">
                Our most helpful buying guides to make your decision easier.
              </p>
            </div>
            <button
              onClick={() => onNavigate('category', { slug: 'buying-guides' })}
              className="inline-flex items-center justify-center self-start md:self-auto px-5 py-2.5 rounded-full text-white text-xs sm:text-sm font-semibold hover:opacity-90 transition-colors shadow-sm cursor-pointer"
              style={{ backgroundColor: brandColor }}
            >
              View All Buying Guides →
            </button>
          </div>

          {/* 3 Feature Guide Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BUYING_GUIDES.map((guide) => (
              <article
                key={guide.id}
                onClick={() => onNavigate('buying-guide', { guideId: guide.id })}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group cursor-pointer"
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    alt={guide.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={guide.image}
                  />
                  <span
                    className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-[11px] font-bold px-3 py-1 rounded-full shadow-sm"
                    style={{ color: guide.categoryColor }}
                  >
                    {guide.category}
                  </span>
                </div>
                <div className="p-6 flex items-end justify-between gap-4 flex-grow">
                  <h3 className="font-heading font-bold text-lg text-gray-900 leading-snug group-hover:text-[#075B4F] transition-colors">
                    {guide.title}
                  </h3>
                  <div
                    className="w-10 h-10 rounded-full text-white flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-sm"
                    style={{ backgroundColor: brandColor }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      {/* END: FeaturedBuyingGuides */}

      {/* BEGIN: HomeProblemQuestions */}
      <section className="py-16 bg-[#F7F0E5]" id="home-problems">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
              Got a Home Problem? Start Here.
            </h2>
            <p className="mt-2 text-sm md:text-base text-gray-600">
              Quick answers to common questions from real homes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {HOME_PROBLEMS.map((problem) => (
              <button
                key={problem.id}
                onClick={() => onNavigate('problem-faq', { problemId: problem.id })}
                className="group p-4 bg-white rounded-xl shadow-sm hover:shadow-md border border-[#ecdcc7] flex items-center justify-between gap-3 transition-all duration-200 hover:-translate-y-0.5 text-left cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-9 h-9 rounded-full ${getProblemBg(
                      problem.iconType
                    )} flex items-center justify-center flex-shrink-0`}
                  >
                    {getProblemIcon(problem.iconType)}
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-gray-800 leading-snug group-hover:text-[#075B4F] transition-colors">
                    {problem.question}
                  </span>
                </div>
                <span className="text-gray-400 group-hover:text-[#075B4F] group-hover:translate-x-1 transition-all">
                  →
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>
      {/* END: HomeProblemQuestions */}

      {/* BEGIN: LatestArticles */}
      <section className="py-16 bg-white" id="latest-articles">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header row */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
                Latest from HomeAndHomeOnly
              </h2>
              <p className="mt-2 text-sm text-gray-500">
                Practical tips, home ideas and buying advice.
              </p>
            </div>
            <button
              onClick={() => onNavigate('category', { slug: 'kitchen-appliances' })}
              className="inline-flex items-center text-sm font-bold text-[#075B4F] hover:underline cursor-pointer"
            >
              View All Articles <span className="ml-1">→</span>
            </button>
          </div>

          {/* 3 Article Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {LATEST_ARTICLES.map((article) => (
              <article
                key={article.id}
                onClick={() => onNavigate('article', { id: article.id })}
                className="bg-white rounded-2xl border border-gray-200/80 shadow-sm overflow-hidden flex flex-col group hover:shadow-md transition cursor-pointer"
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={article.image}
                  />
                  <span
                    className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-[11px] font-bold px-3 py-1 rounded-full shadow-sm"
                    style={{ color: article.categoryColor }}
                  >
                    {article.category}
                  </span>
                </div>
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <h3 className="font-heading font-bold text-lg text-gray-900 group-hover:text-[#075B4F] transition-colors leading-snug">
                    {article.title}
                  </h3>
                  <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-xs text-gray-400">{article.date}</span>
                    <span
                      className="w-8 h-8 rounded-full bg-gray-100 text-gray-600 group-hover:text-white transition flex items-center justify-center text-xs"
                      style={{}}
                    >
                      →
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      {/* END: LatestArticles */}

      {/* BEGIN: TrustUSPSection */}
      <section className="py-16 bg-[#EEF7F5]/60 border-y border-[#e2efe9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
              Why HomeAndHomeOnly?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Column 1 */}
            <div className="flex items-start gap-4 p-4 rounded-xl">
              <div className="w-12 h-12 rounded-full bg-[#00A896] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg text-gray-900 mb-1">Practical</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  We simplify confusing home-buying decisions.
                </p>
              </div>
            </div>
            {/* Column 2 */}
            <div className="flex items-start gap-4 p-4 rounded-xl">
              <div className="w-12 h-12 rounded-full bg-[#00A896] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg text-gray-900 mb-1">Research-Based</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  We compare features, use cases and important buying factors.
                </p>
              </div>
            </div>
            {/* Column 3 */}
            <div className="flex items-start gap-4 p-4 rounded-xl">
              <div className="w-12 h-12 rounded-full bg-[#00A896] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg text-gray-900 mb-1">Made for Indian Homes</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Our recommendations consider Indian households, budgets and everyday needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END: TrustUSPSection */}

      {/* BEGIN: InstagramCommunity */}
      <section className="py-14 bg-gradient-to-r from-[#FDF4F2] via-[#FAF0ED] to-[#FFF7F5] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left CTA Column */}
            <div className="lg:col-span-5 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                Home Problems. Real Conversations.
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                Follow us for relatable home stories, practical tips and smart buying ideas.
              </p>
              <div className="pt-2">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm shadow-sm hover:opacity-90 transition-all cursor-pointer"
                  style={{ backgroundColor: accentColor }}
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                  </svg>
                  Follow Us on Instagram →
                </a>
              </div>
            </div>

            {/* Right Image Strip Row with Navigation Overlay */}
            <div className="lg:col-span-7 relative">
              <div
                ref={instagramStripRef}
                className="flex items-center gap-3 overflow-x-auto hide-scrollbar py-2 scroll-smooth"
              >
                {INSTAGRAM_POSTS.map((post) => (
                  <div
                    key={post.id}
                    onClick={() => setSelectedInstaPost(post)}
                    className="w-28 h-28 sm:w-32 sm:h-32 flex-shrink-0 rounded-xl overflow-hidden shadow-sm border-2 border-white hover:scale-105 transition-transform duration-300 cursor-pointer relative group"
                  >
                    <img alt={post.caption} className="w-full h-full object-cover" src={post.img} />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs gap-1 font-semibold">
                      <Heart className="w-3.5 h-3.5 fill-white" />
                      <span>{post.likes}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Carousel Scroll Button */}
              <button
                onClick={() => scrollInstagram('right')}
                aria-label="Next slide"
                className="hidden sm:flex absolute -right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow-md border border-gray-200 items-center justify-center text-gray-700 hover:text-[#075B4F] hover:scale-110 transition cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* END: InstagramCommunity */}

      {/* Instagram Post Lightbox Modal */}
      {selectedInstaPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-md w-full overflow-hidden shadow-2xl relative">
            <button
              onClick={() => setSelectedInstaPost(null)}
              className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition"
            >
              <X className="w-4 h-4" />
            </button>
            <img src={selectedInstaPost.img} alt="" className="w-full h-64 object-cover" />
            <div className="p-5 space-y-3">
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span className="font-semibold text-gray-900">@homeandhomeonly</span>
                <span className="flex items-center gap-1 text-[#E96B72] font-semibold">
                  <Heart className="w-3.5 h-3.5 fill-current" />
                  {selectedInstaPost.likes} likes
                </span>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">{selectedInstaPost.caption}</p>
              <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs text-gray-400">Join 45,000+ Indian homeowners</span>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#075B4F] hover:underline flex items-center gap-1"
                >
                  View on IG <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};
