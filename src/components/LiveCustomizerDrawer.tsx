import React from 'react';
import { X, RefreshCw, Palette, Type, Layout, Sparkles, Check } from 'lucide-react';

export interface ThemeSettings {
  brandColor: string;
  accentColor: string;
  badgeText: string;
  heroTagline: string;
  fontScale: 'standard' | 'large';
  containerWidth: 'standard' | 'wide';
  stickyHeader: boolean;
}

interface LiveCustomizerDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  settings: ThemeSettings;
  onUpdateSettings: (newSettings: Partial<ThemeSettings>) => void;
  onReset: () => void;
}

export const LiveCustomizerDrawer: React.FC<LiveCustomizerDrawerProps> = ({
  isOpen,
  onClose,
  settings,
  onUpdateSettings,
  onReset
}) => {
  if (!isOpen) return null;

  const brandColorPresets = [
    { label: 'Signature Pine', value: '#075B4F', secondary: '#E96B72' },
    { label: 'Deep Forest', value: '#064E3B', secondary: '#F59E0B' },
    { label: 'Ocean Teal', value: '#0E7490', secondary: '#FB7185' },
    { label: 'Warm Slate', value: '#1E293B', secondary: '#E11D48' }
  ];

  const accentColorPresets = [
    { label: 'Coral Blossom', value: '#E96B72' },
    { label: 'Sunset Tangerine', value: '#F97316' },
    { label: 'Amber Gold', value: '#D97706' },
    { label: 'Rose Pink', value: '#E11D48' }
  ];

  return (
    <div className="fixed inset-y-0 right-0 z-50 w-full sm:w-96 bg-white shadow-2xl border-l border-gray-200 flex flex-col animate-in slide-in-from-right duration-200">
      {/* Header */}
      <div className="p-4 bg-[#1d2327] text-white flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-[#2271b1] flex items-center justify-center font-bold text-xs">
            W
          </div>
          <div>
            <h3 className="font-heading font-bold text-sm">Theme Customizer</h3>
            <p className="text-[11px] text-gray-400">HomeAndHomeOnly Theme Options</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="p-1 rounded text-gray-400 hover:text-white hover:bg-gray-800 transition cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Body Options */}
      <div className="flex-1 overflow-y-auto p-5 space-y-6 text-sm text-gray-700">
        {/* Colors Section */}
        <div>
          <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
            <Palette className="w-4 h-4 text-[#075B4F]" />
            Brand Color Presets
          </label>
          <div className="grid grid-cols-2 gap-2">
            {brandColorPresets.map((preset) => (
              <button
                key={preset.value}
                onClick={() =>
                  onUpdateSettings({
                    brandColor: preset.value,
                    accentColor: preset.secondary
                  })
                }
                className={`p-2.5 rounded-xl border text-left flex items-center gap-2.5 transition cursor-pointer ${
                  settings.brandColor === preset.value
                    ? 'border-[#075B4F] bg-[#EEF7F5] font-semibold'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div
                  className="w-5 h-5 rounded-full flex-shrink-0 shadow-xs flex items-center justify-center text-white text-[10px]"
                  style={{ backgroundColor: preset.value }}
                >
                  {settings.brandColor === preset.value && <Check className="w-3 h-3 stroke-[3]" />}
                </div>
                <span className="text-xs truncate">{preset.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Accent Color Section */}
        <div>
          <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
            <Sparkles className="w-4 h-4 text-[#E96B72]" />
            Highlight Accent Color
          </label>
          <div className="flex items-center gap-3">
            {accentColorPresets.map((item) => (
              <button
                key={item.value}
                onClick={() => onUpdateSettings({ accentColor: item.value })}
                title={item.label}
                className={`w-9 h-9 rounded-full flex items-center justify-center transition transform cursor-pointer ${
                  settings.accentColor === item.value ? 'ring-2 ring-offset-2 ring-gray-700 scale-110' : 'hover:scale-105'
                }`}
                style={{ backgroundColor: item.value }}
              >
                {settings.accentColor === item.value && <Check className="w-4 h-4 text-white stroke-[3]" />}
              </button>
            ))}
          </div>
        </div>

        {/* Hero Tagline Customizer */}
        <div>
          <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
            <Type className="w-4 h-4 text-[#075B4F]" />
            Hero Floating Badge Text
          </label>
          <input
            type="text"
            value={settings.heroTagline}
            onChange={(e) => onUpdateSettings({ heroTagline: e.target.value })}
            className="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl focus:border-[#075B4F] focus:outline-none"
            placeholder="e.g. A Happier Home Everyday"
          />
          <p className="text-[11px] text-gray-400 mt-1">Appears on the handwritten card on the hero image.</p>
        </div>

        {/* Header Options */}
        <div>
          <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
            <Layout className="w-4 h-4 text-[#075B4F]" />
            Layout & Sticky Navigation
          </label>
          <div className="space-y-2">
            <label className="flex items-center justify-between p-3 rounded-xl border border-gray-200 hover:bg-gray-50 cursor-pointer">
              <span className="text-xs font-medium">Sticky Navigation Bar</span>
              <input
                type="checkbox"
                checked={settings.stickyHeader}
                onChange={(e) => onUpdateSettings({ stickyHeader: e.target.checked })}
                className="w-4 h-4 text-[#075B4F] rounded focus:ring-0 cursor-pointer"
              />
            </label>
          </div>
        </div>

        {/* Theme Information Banner */}
        <div className="bg-[#EEF7F5] border border-[#d2ebe5] rounded-xl p-3.5 space-y-1.5">
          <div className="text-xs font-bold text-[#075B4F]">WordPress 6.7 Block Theme Ready</div>
          <p className="text-[11px] text-gray-600 leading-relaxed">
            All colors, layout widths, and custom post types are synchronized with the downloadable WordPress theme templates.
          </p>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="p-4 border-t border-gray-200 bg-gray-50 flex items-center justify-between gap-3">
        <button
          onClick={onReset}
          className="flex items-center gap-1.5 text-xs text-gray-600 hover:text-gray-900 px-3 py-2 rounded-lg border border-gray-200 hover:bg-white transition cursor-pointer"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Reset Defaults</span>
        </button>
        <button
          onClick={onClose}
          className="bg-[#075B4F] text-white text-xs font-semibold px-4 py-2 rounded-lg hover:bg-[#05443a] transition cursor-pointer"
        >
          Save &amp; Close
        </button>
      </div>
    </div>
  );
};
