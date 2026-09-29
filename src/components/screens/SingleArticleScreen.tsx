import React, { useState } from 'react';
import { ChevronRight, Bookmark, Share2, Heart, MessageSquare, Send, Check } from 'lucide-react';
import { LATEST_ARTICLES, Article } from '../../data/themeData';

interface SingleArticleScreenProps {
  articleId?: string;
  onNavigate: (screen: string, payload?: any) => void;
  brandColor?: string;
  accentColor?: string;
}

export const SingleArticleScreen: React.FC<SingleArticleScreenProps> = ({
  articleId = 'art-1',
  onNavigate,
  brandColor = '#075B4F',
  accentColor = '#E96B72'
}) => {
  const currentArticle =
    LATEST_ARTICLES.find((a) => a.id === articleId) || LATEST_ARTICLES[0];

  const [comments, setComments] = useState([
    {
      id: 1,
      author: 'Sunita Mehra',
      date: '2 days ago',
      text: 'Swapping our bright white 6500K LED tubes for 2700K floor lamps made our Bengaluru apartment feel instantly cozy in the evenings! Such a simple but game-changing tip.'
    },
    {
      id: 2,
      author: 'Karthik Ramanathan',
      date: 'Yesterday',
      text: 'Can you recommend specific brass sconces or terracotta pots that don’t crack in monsoon humidity?'
    }
  ]);

  const [newCommentName, setNewCommentName] = useState('');
  const [newCommentText, setNewCommentText] = useState('');
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(142);
  const [commentSuccess, setCommentSuccess] = useState(false);

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCommentText.trim() || !newCommentName.trim()) return;

    setComments([
      ...comments,
      {
        id: Date.now(),
        author: newCommentName.trim(),
        date: 'Just now',
        text: newCommentText.trim()
      }
    ]);
    setNewCommentName('');
    setNewCommentText('');
    setCommentSuccess(true);
    setTimeout(() => setCommentSuccess(false), 3000);
  };

  const toggleLike = () => {
    if (isLiked) {
      setLikeCount(likeCount - 1);
      setIsLiked(false);
    } else {
      setLikeCount(likeCount + 1);
      setIsLiked(true);
    }
  };

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Breadcrumb Navigation */}
      <div className="bg-gray-50 border-b border-gray-200/80 py-3.5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center gap-1.5 flex-wrap">
            <button onClick={() => onNavigate('home')} className="hover:text-[#075B4F] cursor-pointer">
              Home
            </button>
            <ChevronRight className="w-3 h-3 text-gray-400" />
            <button
              onClick={() => onNavigate('category', { slug: currentArticle.categorySlug })}
              className="hover:text-[#075B4F] cursor-pointer"
            >
              {currentArticle.category}
            </button>
            <ChevronRight className="w-3 h-3 text-gray-400" />
            <span className="text-gray-900 font-medium truncate max-w-xs">{currentArticle.title}</span>
          </div>
          <button
            onClick={toggleLike}
            className="flex items-center gap-1.5 text-xs text-gray-600 hover:text-[#E96B72] transition cursor-pointer"
          >
            <Heart className={`w-3.5 h-3.5 ${isLiked ? 'fill-[#E96B72] text-[#E96B72]' : ''}`} />
            <span>{likeCount}</span>
          </button>
        </div>
      </div>

      {/* Article Content Container */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 pt-10">
        {/* Article Header */}
        <header className="space-y-4">
          <span
            className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-md inline-block"
            style={{ backgroundColor: `${currentArticle.categoryColor}15`, color: currentArticle.categoryColor }}
          >
            {currentArticle.category}
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
            {currentArticle.title}
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">{currentArticle.excerpt}</p>

          {/* Author Byline */}
          <div className="flex items-center gap-3 pt-3 border-y border-gray-100 py-3.5">
            <img
              src={currentArticle.author.avatar}
              alt={currentArticle.author.name}
              className="w-10 h-10 rounded-full object-cover border border-gray-200"
            />
            <div>
              <div className="text-xs font-bold text-gray-900">{currentArticle.author.name}</div>
              <div className="text-[11px] text-gray-400">
                {currentArticle.author.role} &bull; {currentArticle.date} &bull; {currentArticle.readTime}
              </div>
            </div>
          </div>
        </header>

        {/* Featured Hero Media */}
        <div className="mt-8 rounded-2xl overflow-hidden border border-gray-200 shadow-md aspect-[16/10]">
          <img src={currentArticle.image} alt={currentArticle.title} className="w-full h-full object-cover" />
        </div>

        {/* Key Takeaways Box */}
        <div className="mt-10 bg-[#FAF0ED] border border-[#f5d9d4] rounded-2xl p-6 sm:p-7 space-y-3">
          <h3 className="font-heading font-extrabold text-base text-[#E96B72] flex items-center gap-2">
            <span>✨</span> Key Takeaways for Indian Spaces
          </h3>
          <ul className="space-y-2 text-sm text-gray-700">
            {currentArticle.keyTakeaways.map((point, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-[#E96B72] font-bold">&bull;</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Article Body Copy */}
        <div className="mt-8 space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed font-body">
          {currentArticle.contentParagraphs.map((para, i) => (
            <p key={i}>{para}</p>
          ))}

          {/* Pull Quote */}
          <blockquote className="border-l-4 border-[#075B4F] pl-5 my-8 italic text-lg sm:text-xl font-medium text-gray-900 bg-gray-50 py-4 rounded-r-xl">
            "A home doesn’t need to look like an untouchable luxury showroom; it needs to feel like a warm, breathable sanctuary after an exhausting commute."
          </blockquote>

          <p>
            When choosing decor pieces, prioritize materials that patina gracefully in Indian climates. Brass, seasoned teak, unglazed terracotta, and hand-loomed khadi withstand humidity far better than particle board laminate that bubbles at the first sign of moisture.
          </p>
        </div>

        {/* Other Articles in this Category */}
        <div className="mt-14 pt-8 border-t border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-heading font-bold text-xl text-gray-900">More Helpful Articles</h3>
            <button
              onClick={() => onNavigate('category', { slug: currentArticle.categorySlug })}
              className="text-xs font-semibold text-[#075B4F] hover:underline cursor-pointer"
            >
              View All &rarr;
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {LATEST_ARTICLES.filter((a) => a.id !== currentArticle.id).map((other) => (
              <div
                key={other.id}
                onClick={() => onNavigate('article', { id: other.id })}
                className="flex items-center gap-3 p-3 rounded-xl border border-gray-200 hover:border-[#075B4F]/40 hover:bg-[#EEF7F5]/20 transition cursor-pointer"
              >
                <img src={other.image} alt="" className="w-16 h-16 rounded-lg object-cover shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-gray-900 line-clamp-2 leading-snug">
                    {other.title}
                  </h4>
                  <span className="text-[11px] text-gray-400 mt-1 inline-block">{other.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Comments Section */}
        <section className="mt-16 pt-8 border-t border-gray-200 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-heading font-bold text-2xl text-gray-900 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-[#075B4F]" />
              Reader Discussion ({comments.length})
            </h3>
          </div>

          {/* Comment submission form */}
          <form onSubmit={handleAddComment} className="bg-gray-50 rounded-2xl p-5 border border-gray-200 space-y-3">
            <div className="font-semibold text-xs text-gray-700">Leave a question or tip</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                type="text"
                value={newCommentName}
                onChange={(e) => setNewCommentName(e.target.value)}
                placeholder="Your Name"
                required
                className="px-3 py-2 text-xs bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-[#075B4F]"
              />
            </div>
            <textarea
              value={newCommentText}
              onChange={(e) => setNewCommentText(e.target.value)}
              placeholder="What questions or tips do you have for this space?"
              rows={3}
              required
              className="w-full px-3 py-2 text-xs bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-[#075B4F]"
            ></textarea>
            <div className="flex items-center justify-between">
              {commentSuccess && (
                <span className="text-xs text-emerald-600 flex items-center gap-1 font-medium">
                  <Check className="w-4 h-4" /> Comment posted successfully!
                </span>
              )}
              <button
                type="submit"
                className="ml-auto inline-flex items-center gap-1.5 bg-[#075B4F] text-white px-4 py-2 rounded-lg text-xs font-semibold hover:bg-[#05443a] transition cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" /> Post Comment
              </button>
            </div>
          </form>

          {/* Comment list */}
          <div className="space-y-3">
            {comments.map((comment) => (
              <div key={comment.id} className="p-4 rounded-xl border border-gray-100 bg-white space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-gray-900">{comment.author}</span>
                  <span className="text-gray-400">{comment.date}</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">{comment.text}</p>
              </div>
            ))}
          </div>
        </section>
      </article>
    </div>
  );
};
