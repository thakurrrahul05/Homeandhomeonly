import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { WordPressAdminBar } from './components/WordPressAdminBar';
import { LiveCustomizerDrawer, ThemeSettings } from './components/LiveCustomizerDrawer';
import { SearchModal } from './components/SearchModal';
import { HomeScreen } from './components/screens/HomeScreen';
import { BuyingGuideScreen } from './components/screens/BuyingGuideScreen';
import { CategoryArchiveScreen } from './components/screens/CategoryArchiveScreen';
import { SingleArticleScreen } from './components/screens/SingleArticleScreen';
import { HomeProblemFaqScreen } from './components/screens/HomeProblemFaqScreen';
import { ThemeCodeExporterScreen } from './components/screens/ThemeCodeExporterScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<string>('home');
  const [screenPayload, setScreenPayload] = useState<any>({});
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);
  const [isAdminBarVisible, setIsAdminBarVisible] = useState(true);
  const [deviceMode, setDeviceMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  const defaultThemeSettings: ThemeSettings = {
    brandColor: '#075B4F',
    accentColor: '#E96B72',
    badgeText: 'SMARTER HOME. BETTER CHOICES.',
    heroTagline: 'A Happier Home Everyday',
    fontScale: 'standard',
    containerWidth: 'standard',
    stickyHeader: true
  };

  const [themeSettings, setThemeSettings] = useState<ThemeSettings>(defaultThemeSettings);

  const handleNavigate = (screen: string, payload: any = {}) => {
    setCurrentScreen(screen);
    setScreenPayload(payload);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleUpdateSettings = (newSettings: Partial<ThemeSettings>) => {
    setThemeSettings((prev) => ({ ...prev, ...newSettings }));
  };

  const handleResetSettings = () => {
    setThemeSettings(defaultThemeSettings);
  };

  // Keyboard shortcut for search (Cmd+K / Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Render current screen component
  const renderScreen = () => {
    switch (currentScreen) {
      case 'home':
        return (
          <HomeScreen
            onNavigate={handleNavigate}
            brandColor={themeSettings.brandColor}
            accentColor={themeSettings.accentColor}
            heroTagline={themeSettings.heroTagline}
          />
        );
      case 'buying-guide':
        return (
          <BuyingGuideScreen
            guideId={screenPayload?.guideId || 'guide-1'}
            onNavigate={handleNavigate}
            brandColor={themeSettings.brandColor}
            accentColor={themeSettings.accentColor}
          />
        );
      case 'category':
        return (
          <CategoryArchiveScreen
            categorySlug={screenPayload?.slug || 'kitchen-appliances'}
            onNavigate={handleNavigate}
            brandColor={themeSettings.brandColor}
            accentColor={themeSettings.accentColor}
          />
        );
      case 'article':
        return (
          <SingleArticleScreen
            articleId={screenPayload?.id || 'art-1'}
            onNavigate={handleNavigate}
            brandColor={themeSettings.brandColor}
            accentColor={themeSettings.accentColor}
          />
        );
      case 'problem-faq':
        return (
          <HomeProblemFaqScreen
            problemId={screenPayload?.problemId}
            onNavigate={handleNavigate}
            brandColor={themeSettings.brandColor}
            accentColor={themeSettings.accentColor}
          />
        );
      case 'theme-code':
        return (
          <ThemeCodeExporterScreen
            onNavigate={handleNavigate}
            brandColor={themeSettings.brandColor}
          />
        );
      default:
        return (
          <HomeScreen
            onNavigate={handleNavigate}
            brandColor={themeSettings.brandColor}
            accentColor={themeSettings.accentColor}
            heroTagline={themeSettings.heroTagline}
          />
        );
    }
  };

  // Wrapper for responsive device preview if tablet/mobile selected in WP Admin Bar
  const renderDeviceContainer = (children: React.ReactNode) => {
    if (deviceMode === 'desktop') {
      return children;
    }

    const widthClass = deviceMode === 'tablet' ? 'max-w-[768px]' : 'max-w-[390px]';

    return (
      <div className="bg-[#121212] min-h-screen py-8 px-4 flex flex-col items-center">
        <div className="text-gray-400 text-xs font-mono mb-3 flex items-center gap-2">
          <span>WordPress Device Simulation:</span>
          <span className="text-white font-bold uppercase">{deviceMode} ({widthClass.replace('max-w-[', '').replace(']', '')})</span>
        </div>
        <div
          className={`w-full ${widthClass} bg-white shadow-2xl rounded-3xl overflow-hidden border-8 border-gray-800 transition-all duration-300`}
        >
          {children}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800 antialiased selection:bg-[#075B4F]/10 selection:text-[#075B4F]">
      {/* WordPress 6.7 Admin Bar */}
      <WordPressAdminBar
        currentScreen={currentScreen}
        onNavigate={handleNavigate}
        onToggleCustomizer={() => setIsCustomizerOpen(true)}
        deviceMode={deviceMode}
        onChangeDeviceMode={setDeviceMode}
        isVisible={isAdminBarVisible}
        onToggleVisible={() => setIsAdminBarVisible(!isAdminBarVisible)}
      />

      {/* Main Content inside Device Container */}
      {renderDeviceContainer(
        <div className="flex-1 flex flex-col min-h-screen">
          {/* Header */}
          <Header
            currentScreen={currentScreen}
            onNavigate={handleNavigate}
            onOpenSearch={() => setIsSearchOpen(true)}
            brandColor={themeSettings.brandColor}
            accentColor={themeSettings.accentColor}
          />

          {/* Active Screen */}
          <div className="flex-1">
            {renderScreen()}
          </div>

          {/* Footer */}
          <Footer
            onNavigate={handleNavigate}
            brandColor={themeSettings.brandColor}
            accentColor={themeSettings.accentColor}
          />
        </div>
      )}

      {/* WordPress Live Customizer Drawer */}
      <LiveCustomizerDrawer
        isOpen={isCustomizerOpen}
        onClose={() => setIsCustomizerOpen(false)}
        settings={themeSettings}
        onUpdateSettings={handleUpdateSettings}
        onReset={handleResetSettings}
      />

      {/* Global Live Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={handleNavigate}
      />
    </div>
  );
}
