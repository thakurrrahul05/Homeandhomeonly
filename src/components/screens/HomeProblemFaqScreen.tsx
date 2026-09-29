import React, { useState } from 'react';
import { ChevronRight, ChevronDown, Lightbulb, Bed, Zap, Clock, Search, HelpCircle, CheckCircle2, AlertTriangle, ArrowRight } from 'lucide-react';
import { HOME_PROBLEMS, HomeProblem } from '../../data/themeData';

interface HomeProblemFaqScreenProps {
  problemId?: string;
  onNavigate: (screen: string, payload?: any) => void;
  brandColor?: string;
  accentColor?: string;
}

export const HomeProblemFaqScreen: React.FC<HomeProblemFaqScreenProps> = ({
  problemId,
  onNavigate,
  brandColor = '#075B4F',
  accentColor = '#E96B72'
}) => {
  const [openProblemId, setOpenProblemId] = useState<string>(problemId || 'prob-1');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Kitchen Appliances', 'Home Furnishing'];

  const filteredProblems = HOME_PROBLEMS.filter((p) => {
    const matchesCat = activeCategory === 'All' || p.category === activeCategory;
    const matchesSearch =
      !searchQuery ||
      p.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.quickAnswer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const getProblemIcon = (type: string) => {
    switch (type) {
      case 'bulb':
        return <Lightbulb className="w-5 h-5 text-amber-600" />;
      case 'bed':
        return <Bed className="w-5 h-5 text-sky-600" />;
      case 'zap':
        return <Zap className="w-5 h-5 text-orange-600" />;
      case 'clock':
        return <Clock className="w-5 h-5 text-[#075B4F]" />;
      default:
        return <HelpCircle className="w-5 h-5 text-emerald-600" />;
    }
  };

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Header Banner */}
      <div className="bg-[#F7F0E5] border-b border-[#ecdcc7] py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-3">
            <button onClick={() => onNavigate('home')} className="hover:text-[#075B4F] cursor-pointer">
              Home
            </button>
            <ChevronRight className="w-3 h-3 text-gray-400" />
            <span className="text-gray-900 font-semibold">Home Problems Q&amp;A</span>
          </div>

          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100/70 px-3 py-1 rounded-full inline-block">
              Practical Real Solutions
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
              Got a Home Problem? Start Here.
            </h1>
            <p className="text-base text-gray-600 max-w-2xl leading-relaxed">
              Quick, no-nonsense troubleshooting for everyday Indian appliance glitches, mattress aches, and household questions.
            </p>
          </div>

          {/* Search Box */}
          <div className="mt-8 relative max-w-xl">
            <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search a problem (e.g. mixer smell, kettle scaling, 1000W vs 750W)..."
              className="w-full pl-11 pr-4 py-3 bg-white border border-[#e2d0ba] rounded-2xl text-sm focus:outline-none focus:border-[#075B4F] shadow-sm"
            />
          </div>
        </div>
      </div>

      {/* Main Accordion List */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-10">
        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 mb-8 overflow-x-auto hide-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap cursor-pointer transition ${
                activeCategory === cat
                  ? 'bg-[#075B4F] text-white shadow-xs'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {filteredProblems.map((problem) => {
            const isOpen = openProblemId === problem.id;
            return (
              <div
                key={problem.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-[#075B4F] shadow-md bg-white'
                    : 'border-gray-200 hover:border-gray-300 bg-white'
                }`}
              >
                {/* Header Row */}
                <button
                  onClick={() => setOpenProblemId(isOpen ? '' : problem.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      {getProblemIcon(problem.iconType)}
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                        {problem.category}
                      </span>
                      <h3 className="font-heading font-bold text-base sm:text-lg text-gray-900 mt-0.5">
                        {problem.question}
                      </h3>
                      {!isOpen && (
                        <p className="text-xs text-gray-500 mt-1 line-clamp-1">
                          {problem.quickAnswer}
                        </p>
                      )}
                    </div>
                  </div>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform ${
                      isOpen ? 'bg-[#075B4F] text-white rotate-180' : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Expanded Content Panel */}
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-gray-100 space-y-6">
                    {/* Quick Answer Banner */}
                    <div className="bg-[#EEF7F5] border border-[#d2ebe5] rounded-xl p-4 text-xs sm:text-sm text-gray-800 leading-relaxed font-medium">
                      <strong className="text-[#075B4F]">Quick Verdict:</strong> {problem.quickAnswer}
                    </div>

                    {/* Root Cause */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
                        <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />
                        Why This Happens
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        {problem.fullCause}
                      </p>
                    </div>

                    {/* Step-by-Step Fix */}
                    <div className="space-y-3">
                      <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        Step-by-Step Practical Fix
                      </h4>
                      <div className="space-y-2">
                        {problem.stepByStepFix.map((step, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700 bg-gray-50 p-3 rounded-xl border border-gray-100"
                          >
                            <span className="w-5 h-5 rounded-full bg-[#075B4F] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                              {idx + 1}
                            </span>
                            <span>{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Preventive Pro Tip */}
                    <div className="bg-[#FAF0ED] p-3.5 rounded-xl border border-[#f5dcd8] text-xs text-gray-700 flex items-start gap-2">
                      <span className="text-[#E96B72] font-bold">Pro Tip:</span>
                      <span>{problem.preventiveTip}</span>
                    </div>

                    {/* Action footer */}
                    <div className="pt-2 flex items-center justify-between text-xs text-gray-500">
                      <span>Was this helpful? 👍 124 found this useful</span>
                      <button
                        onClick={() => onNavigate('buying-guide')}
                        className="text-[#075B4F] font-semibold hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        Read Related Buying Guide <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
