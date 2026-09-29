import React from 'react';

interface FooterProps {
  onNavigate: (screen: string, payload?: any) => void;
  brandColor?: string;
  accentColor?: string;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  brandColor = '#075B4F',
  accentColor = '#E96B72'
}) => {
  return (
    <footer className="text-white pt-16 pb-8" style={{ backgroundColor: brandColor }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top 5-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12">
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <button
              onClick={() => onNavigate('home')}
              className="inline-flex items-center gap-2 group text-left cursor-pointer focus:outline-none"
            >
              <div className="w-8 h-8 flex-shrink-0">
                <svg className="w-full h-full" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 3L3 17V36C3 37.1046 3.89543 38 5 38H35C36.1046 38 37 37.1046 37 36V17L20 3Z" fill="#FFFFFF" />
                  <path d="M20 9L7 19.5V34H33V19.5L20 9Z" fill="#FFFFFF" stroke={brandColor} strokeWidth="2" />
                  <path d="M20 15C18.3431 15 17 16.3431 17 18C17 20.5 20 24 20 24C20 24 23 20.5 23 18C23 16.3431 21.6569 15 20 15Z" fill={accentColor} />
                  <path d="M14 38V27H26V38" fill="#FFFFFF" stroke={brandColor} strokeWidth="2" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-xl text-white tracking-tight leading-none">
                  HomeAndHome<span style={{ color: accentColor }}>Only</span>
                </span>
                <span className="text-[8.5px] font-semibold text-emerald-200 tracking-[0.14em] mt-1 leading-none uppercase">
                  SMART HOMES. HAPPIER LIVES.
                </span>
              </div>
            </button>
            <p className="text-sm text-emerald-100 max-w-sm leading-relaxed">
              Practical home tips and buying guides for modern Indian homes.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-emerald-200/80">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>WordPress Theme Edition &bull; Tested on WP 6.7</span>
            </div>
          </div>

          {/* Column 2: Explore */}
          <div>
            <h4 className="font-heading font-bold text-sm tracking-wider uppercase text-emerald-300 mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-emerald-100">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition text-left cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('category', { slug: 'kitchen-appliances' })}
                  className="hover:text-white transition text-left cursor-pointer"
                >
                  Home Appliances
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('category', { slug: 'home-decor' })}
                  className="hover:text-white transition text-left cursor-pointer"
                >
                  Home Decor
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('category', { slug: 'home-furnishing' })}
                  className="hover:text-white transition text-left cursor-pointer"
                >
                  Home Furnishing
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('category', { slug: 'buying-guides' })}
                  className="hover:text-white transition text-left cursor-pointer"
                >
                  Buying Guides
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('article', { id: 'art-1' })}
                  className="hover:text-white transition text-left cursor-pointer"
                >
                  Blog
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="font-heading font-bold text-sm tracking-wider uppercase text-emerald-300 mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-emerald-100">
              <li>
                <button
                  onClick={() => onNavigate('article', { id: 'art-1' })}
                  className="hover:text-white transition text-left cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('problem-faq')}
                  className="hover:text-white transition text-left cursor-pointer"
                >
                  Contact & Q&A
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('theme-code')}
                  className="hover:text-white transition text-left cursor-pointer text-emerald-300 font-semibold"
                >
                  Theme PHP Files & Export
                </button>
              </li>
              <li>
                <span className="hover:text-white transition cursor-default">Terms &amp; Conditions</span>
              </li>
              <li>
                <span className="hover:text-white transition cursor-default">Affiliate Disclosure</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Stay in touch */}
          <div>
            <h4 className="font-heading font-bold text-sm tracking-wider uppercase text-emerald-300 mb-4">
              Stay in touch
            </h4>
            <div className="flex items-center gap-3">
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-emerald-800/80 hover:bg-[#E96B72] text-white flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full bg-emerald-800/80 hover:bg-[#E96B72] text-white flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              {/* Pinterest */}
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pinterest"
                className="w-9 h-9 rounded-full bg-emerald-800/80 hover:bg-[#E96B72] text-white flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0a12 12 0 0 0-4.37 23.17c-.07-.94-.13-2.39.03-3.42.14-.94.94-6.38.94-6.38s-.24-.48-.24-1.2c0-1.12.65-1.96 1.46-1.96.69 0 1.02.52 1.02 1.14 0 .7-.44 1.73-.67 2.7-.19.81.4 1.48 1.2 1.48 1.44 0 2.55-1.52 2.55-3.71 0-1.94-1.39-3.3-3.39-3.3-2.31 0-3.66 1.73-3.66 3.52 0 .7.27 1.44.61 1.85.07.08.08.15.06.24l-.23.94c-.04.14-.13.18-.28.1-.96-.45-1.56-1.84-1.56-2.96 0-2.4 1.75-4.61 5.04-4.61 2.65 0 4.7 1.89 4.7 4.41 0 2.63-1.66 4.75-3.96 4.75-.77 0-1.5-.4-1.75-.87l-.48 1.82c-.17.67-.64 1.51-.96 2.02A11.98 11.98 0 0 0 12 24c6.63 0 12-5.37 12-12S18.63 0 12 0z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Sub-footer */}
        <div className="pt-8 border-t border-[#0A6D5F] flex flex-col sm:flex-row items-center justify-between text-xs text-emerald-200 gap-3">
          <p>&copy; 2025 HomeAndHomeOnly. All rights reserved.</p>
          <p className="flex items-center gap-1.5 text-emerald-300">
            <span>WordPress 6.7 Architecture Ready</span>
            <span>&bull;</span>
            <button
              onClick={() => onNavigate('theme-code')}
              className="underline hover:text-white cursor-pointer"
            >
              Export Theme Files
            </button>
          </p>
        </div>
      </div>
    </footer>
  );
};
