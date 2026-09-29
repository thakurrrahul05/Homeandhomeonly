import React from 'react';
import { Sliders, Monitor, Tablet, Smartphone, FileCode, CheckCircle2, ChevronRight, Eye } from 'lucide-react';

interface WordPressAdminBarProps {
  currentScreen: string;
  onNavigate: (screen: string, payload?: any) => void;
  onToggleCustomizer: () => void;
  deviceMode: 'desktop' | 'tablet' | 'mobile';
  onChangeDeviceMode: (mode: 'desktop' | 'tablet' | 'mobile') => void;
  isVisible: boolean;
  onToggleVisible: () => void;
}

export const WordPressAdminBar: React.FC<WordPressAdminBarProps> = ({
  currentScreen,
  onNavigate,
  onToggleCustomizer,
  deviceMode,
  onChangeDeviceMode,
  isVisible,
  onToggleVisible
}) => {
  if (!isVisible) {
    return (
      <button
        onClick={onToggleVisible}
        title="Show WordPress Admin Bar"
        className="fixed bottom-4 right-4 z-50 bg-[#1d2327] hover:bg-[#2c3338] text-white px-3 py-2 rounded-full shadow-2xl flex items-center gap-2 text-xs font-medium border border-gray-700 transition-all hover:scale-105"
      >
        <div className="w-5 h-5 rounded-full bg-[#2271b1] flex items-center justify-center font-bold text-[10px]">
          W
        </div>
        <span>WP Theme Controls</span>
      </button>
    );
  }

  const screens = [
    { id: 'home', label: 'Front Page', icon: '🏠', file: 'front-page.php' },
    { id: 'buying-guide', label: 'Buying Guide', icon: '📋', file: 'single-guide.php' },
    { id: 'category', label: 'Archive / Category', icon: '📁', file: 'archive.php' },
    { id: 'article', label: 'Single Blog Post', icon: '📝', file: 'single.php' },
    { id: 'problem-faq', label: 'Home Problems Q&A', icon: '💡', file: 'archive-faq.php' },
    { id: 'theme-code', label: 'Theme PHP Files', icon: '⚡', file: 'style.css & code' }
  ];

  return (
    <div className="sticky top-0 z-50 bg-[#1d2327] text-[#c3c4c7] text-xs font-sans border-b border-[#2c3338] shadow-md select-none">
      <div className="max-w-7xl mx-auto px-3 h-9 flex items-center justify-between gap-3 overflow-x-auto hide-scrollbar">
        {/* Left: WP Branding & Site Switcher */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="flex items-center gap-1.5 text-white font-semibold">
            <div className="w-4 h-4 rounded-full bg-[#2271b1] text-white flex items-center justify-center font-bold text-[9px]">
              W
            </div>
            <span className="hidden sm:inline">WordPress 6.7</span>
          </div>

          <span className="text-gray-600 hidden sm:inline">|</span>

          {/* Theme Screen Selector */}
          <div className="flex items-center gap-1">
            <span className="text-gray-400 hidden md:inline text-[11px]">Template:</span>
            <div className="flex items-center gap-1 bg-[#101517] p-0.5 rounded border border-[#2c3338]">
              {screens.map((screen) => {
                const isActive = currentScreen === screen.id;
                return (
                  <button
                    key={screen.id}
                    onClick={() => onNavigate(screen.id)}
                    className={`px-2 py-1 rounded text-[11px] font-medium transition-all flex items-center gap-1 cursor-pointer ${
                      isActive
                        ? 'bg-[#2271b1] text-white shadow-xs'
                        : 'text-[#c3c4c7] hover:text-white hover:bg-[#2c3338]'
                    }`}
                  >
                    <span>{screen.icon}</span>
                    <span className="hidden lg:inline">{screen.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right: Customizer & Responsive Device Controls */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Customizer Button */}
          <button
            onClick={onToggleCustomizer}
            className="flex items-center gap-1 px-2.5 py-1 bg-[#2271b1] hover:bg-[#135e96] text-white rounded font-medium text-[11px] transition-colors cursor-pointer"
          >
            <Sliders className="w-3 h-3" />
            <span className="hidden sm:inline">Theme Customizer</span>
          </button>

          {/* Device viewport switcher */}
          <div className="hidden sm:flex items-center bg-[#101517] rounded border border-[#2c3338] p-0.5">
            <button
              onClick={() => onChangeDeviceMode('desktop')}
              title="Desktop view (100%)"
              className={`p-1 rounded cursor-pointer ${deviceMode === 'desktop' ? 'bg-[#2c3338] text-white' : 'text-gray-400 hover:text-white'}`}
            >
              <Monitor className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => onChangeDeviceMode('tablet')}
              title="Tablet view (768px)"
              className={`p-1 rounded cursor-pointer ${deviceMode === 'tablet' ? 'bg-[#2c3338] text-white' : 'text-gray-400 hover:text-white'}`}
            >
              <Tablet className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => onChangeDeviceMode('mobile')}
              title="Mobile view (375px)"
              className={`p-1 rounded cursor-pointer ${deviceMode === 'mobile' ? 'bg-[#2c3338] text-white' : 'text-gray-400 hover:text-white'}`}
            >
              <Smartphone className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Dismiss bar */}
          <button
            onClick={onToggleVisible}
            title="Minimize Admin Bar"
            className="text-gray-400 hover:text-white p-1 rounded hover:bg-[#2c3338] cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
