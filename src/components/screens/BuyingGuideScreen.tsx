import React, { useState } from 'react';
import { Check, X, Star, ShieldCheck, ChevronRight, Share2, Bookmark, ArrowRight, ExternalLink } from 'lucide-react';
import { BUYING_GUIDES, BuyingGuide } from '../../data/themeData';

interface BuyingGuideScreenProps {
  guideId?: string;
  onNavigate: (screen: string, payload?: any) => void;
  brandColor?: string;
  accentColor?: string;
}

export const BuyingGuideScreen: React.FC<BuyingGuideScreenProps> = ({
  guideId = 'guide-1',
  onNavigate,
  brandColor = '#075B4F',
  accentColor = '#E96B72'
}) => {
  const currentGuide = BUYING_GUIDES.find((g) => g.id === guideId) || BUYING_GUIDES[0];
  const [bookmarked, setBookmarked] = useState(false);
  const [selectedProductIdx, setSelectedProductIdx] = useState(0);

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Breadcrumb Bar */}
      <div className="bg-gray-50 border-b border-gray-200/80 py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center gap-1.5 flex-wrap">
            <button onClick={() => onNavigate('home')} className="hover:text-[#075B4F] cursor-pointer">
              Home
            </button>
            <ChevronRight className="w-3 h-3 text-gray-400" />
            <button
              onClick={() => onNavigate('category', { slug: currentGuide.categorySlug })}
              className="hover:text-[#075B4F] cursor-pointer"
            >
              {currentGuide.category}
            </button>
            <ChevronRight className="w-3 h-3 text-gray-400" />
            <span className="text-gray-900 font-medium truncate max-w-xs">{currentGuide.title}</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setBookmarked(!bookmarked)}
              className="inline-flex items-center gap-1 text-gray-600 hover:text-[#075B4F] transition cursor-pointer"
            >
              <Bookmark className={`w-3.5 h-3.5 ${bookmarked ? 'fill-[#075B4F] text-[#075B4F]' : ''}`} />
              <span className="hidden sm:inline">{bookmarked ? 'Saved' : 'Save Guide'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Guide Header */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-8">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span
              className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-md"
              style={{ backgroundColor: `${currentGuide.categoryColor}15`, color: currentGuide.categoryColor }}
            >
              {currentGuide.category}
            </span>
            <span className="text-xs text-gray-400">&bull;</span>
            <div className="flex items-center gap-1 text-xs text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Tested &amp; Verified for Indian Kitchens</span>
            </div>
          </div>

          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
            {currentGuide.title}
          </h1>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl">
            {currentGuide.shortDesc} We tested {currentGuide.testedCount} models under real Indian conditions—from thick dosa batter to hard water descaling.
          </p>

          <div className="flex items-center gap-4 pt-2 text-xs text-gray-500 border-b border-gray-100 pb-6">
            <span>By Appliance Lab Team</span>
            <span>&bull;</span>
            <span>Published {currentGuide.date}</span>
            <span>&bull;</span>
            <span>{currentGuide.readTime}</span>
          </div>
        </div>

        {/* Guide Switcher Bar (Quickly test other screens!) */}
        <div className="mt-6 p-3 bg-gray-50 rounded-xl border border-gray-200/80 flex items-center justify-between gap-3 text-xs">
          <span className="font-semibold text-gray-700">Explore other buying guides:</span>
          <div className="flex items-center gap-2 flex-wrap">
            {BUYING_GUIDES.map((g) => (
              <button
                key={g.id}
                onClick={() => onNavigate('buying-guide', { guideId: g.id })}
                className={`px-3 py-1.5 rounded-lg font-medium transition cursor-pointer ${
                  g.id === currentGuide.id
                    ? 'bg-[#075B4F] text-white'
                    : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-100'
                }`}
              >
                {g.title.split(':')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Quick Verdict Banner */}
        <div className="mt-8 bg-[#EEF7F5] border border-[#cfe6e1] rounded-2xl p-6 sm:p-7 relative overflow-hidden">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-[#075B4F] text-white flex items-center justify-center flex-shrink-0 font-bold text-sm">
              ★
            </div>
            <div className="space-y-2">
              <div className="font-heading font-extrabold text-lg text-[#075B4F]">
                Our Quick Recommendation
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                {currentGuide.verdict}
              </p>
              <div className="pt-2 flex items-center gap-2 text-xs font-bold text-[#075B4F]">
                <span>Top Pick:</span>
                <span className="underline decoration-[#075B4F]/40">{currentGuide.topPick}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Featured Image */}
        <div className="mt-8 rounded-2xl overflow-hidden border border-gray-200 shadow-md aspect-[16/9] relative">
          <img src={currentGuide.image} alt={currentGuide.title} className="w-full h-full object-cover" />
          <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md text-white px-4 py-2 rounded-xl text-xs">
            Lab tested in Indian home conditions over 30 days
          </div>
        </div>

        {/* Comparison Table Section */}
        <div className="mt-14 space-y-6">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight">
                Comparison Matrix at a Glance
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                Direct specs and real-world ratings across tested models.
              </p>
            </div>
          </div>

          <div className="overflow-x-auto border border-gray-200 rounded-2xl shadow-xs">
            <table className="w-full text-left text-sm text-gray-700 border-collapse">
              <thead className="bg-gray-50 border-b border-gray-200 text-xs font-bold text-gray-600 uppercase tracking-wider">
                <tr>
                  <th className="py-3.5 px-4">Model &amp; Award</th>
                  <th className="py-3.5 px-4">Capacity / Specs</th>
                  <th className="py-3.5 px-4">Rating</th>
                  <th className="py-3.5 px-4">Warranty</th>
                  <th className="py-3.5 px-4">Price</th>
                  <th className="py-3.5 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-xs sm:text-sm">
                {currentGuide.products.map((p, idx) => (
                  <tr
                    key={p.name}
                    className={`hover:bg-[#EEF7F5]/40 transition ${
                      idx === selectedProductIdx ? 'bg-[#EEF7F5]/20 font-medium' : ''
                    }`}
                  >
                    <td className="py-4 px-4 font-semibold text-gray-900">
                      <div className="text-xs text-[#075B4F] font-bold uppercase tracking-wide">
                        {p.award}
                      </div>
                      <div className="text-sm mt-0.5">{p.name}</div>
                    </td>
                    <td className="py-4 px-4 text-gray-600">
                      {p.capacity || p.wattage || 'Standard Indian size'}
                    </td>
                    <td className="py-4 px-4">
                      <div className="inline-flex items-center gap-1 font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-md">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span>{p.rating} / 5</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-gray-600">{p.warranty}</td>
                    <td className="py-4 px-4 font-bold text-gray-900">{p.price}</td>
                    <td className="py-4 px-4 text-right">
                      <a
                        href="#products-detail"
                        onClick={() => setSelectedProductIdx(idx)}
                        className="inline-flex items-center gap-1 text-xs font-bold text-[#075B4F] hover:underline"
                      >
                        Read Review &rarr;
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Detailed Individual Product Deep Dives */}
        <div id="products-detail" className="mt-16 space-y-12">
          <div className="border-b border-gray-200 pb-3">
            <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight">
              In-Depth Product Reviews
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Field tested for daily wear, motor strain, cleaning ease, and durability.
            </p>
          </div>

          <div className="space-y-10">
            {currentGuide.products.map((product, pIdx) => (
              <div
                key={product.name}
                className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8 space-y-6 hover:shadow-md transition"
              >
                {/* Product Title Bar */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-5">
                  <div>
                    <span className="text-xs font-bold text-[#075B4F] uppercase tracking-wider">
                      Rank #{pIdx + 1} &bull; {product.award}
                    </span>
                    <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-gray-900 mt-1">
                      {product.name}
                    </h3>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <div className="text-xl font-extrabold text-gray-900">{product.price}</div>
                      <div className="text-[11px] text-gray-400">Approx MRP / Best Price</div>
                    </div>
                  </div>
                </div>

                {/* Grid Image + Specs */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                  <div className="md:col-span-5 rounded-xl overflow-hidden border border-gray-100 aspect-[4/3]">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="md:col-span-7 space-y-4">
                    <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 text-xs space-y-2">
                      <div className="font-bold text-gray-800 uppercase tracking-wider text-[10px]">
                        Quick Specs
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-gray-600">
                        {product.wattage && <div><strong>Power:</strong> {product.wattage}</div>}
                        {product.capacity && <div><strong>Capacity:</strong> {product.capacity}</div>}
                        <div><strong>Warranty:</strong> {product.warranty}</div>
                        <div><strong>Score:</strong> {product.rating} / 5.0</div>
                      </div>
                    </div>

                    <p className="text-sm text-gray-700 leading-relaxed">{product.verdict}</p>

                    <div className="text-xs text-gray-600">
                      <strong className="text-gray-900">Who is this best for?</strong> {product.bestFor}
                    </div>
                  </div>
                </div>

                {/* Pros & Cons (Anti-slop zero-pill clean unboxed lists) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-gray-100">
                  {/* Pros */}
                  <div className="space-y-3">
                    <div className="text-xs font-bold text-emerald-800 uppercase tracking-wider flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                      What We Liked
                    </div>
                    <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
                      {product.pros.map((pro, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Cons */}
                  <div className="space-y-3">
                    <div className="text-xs font-bold text-rose-800 uppercase tracking-wider flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                      What to Keep in Mind
                    </div>
                    <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
                      {product.cons.map((con, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Indian Home Buyer's Checklist */}
        <div className="mt-16 bg-[#F7F0E5] rounded-2xl p-6 sm:p-8 space-y-6 border border-[#ecdcc7]">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
              Indian Kitchen Checklist
            </span>
            <h3 className="font-heading text-2xl font-extrabold text-gray-900 mt-1">
              What to Check Before You Buy
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {currentGuide.buyingChecklist.map((item, i) => (
              <div key={i} className="bg-white p-5 rounded-xl border border-[#e5d4be] space-y-2 shadow-xs">
                <div className="font-bold text-sm text-gray-900 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#075B4F] text-white text-xs flex items-center justify-center font-bold">
                    {i + 1}
                  </span>
                  <span>{item.title}</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed pl-7">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Related Navigation */}
        <div className="mt-14 pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={() => onNavigate('home')}
            className="text-sm font-semibold text-[#075B4F] hover:underline cursor-pointer"
          >
            &larr; Back to All Home Guides
          </button>
          <button
            onClick={() => onNavigate('problem-faq')}
            className="inline-flex items-center gap-2 bg-[#075B4F] text-white px-5 py-2.5 rounded-xl text-xs font-semibold hover:bg-[#05443a] transition cursor-pointer"
          >
            Have a Question About This? Check Q&amp;A &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};
