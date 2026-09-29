import React, { useState } from 'react';
import { ChevronRight, FileCode, Copy, Check, Download, Folder, Code, Terminal, CheckCircle2 } from 'lucide-react';
import { WORDPRESS_THEME_FILES, WordPressFile } from '../../data/wordpressTemplates';

interface ThemeCodeExporterScreenProps {
  onNavigate: (screen: string) => void;
  brandColor?: string;
}

export const ThemeCodeExporterScreen: React.FC<ThemeCodeExporterScreenProps> = ({
  onNavigate,
  brandColor = '#075B4F'
}) => {
  const [selectedFilename, setSelectedFilename] = useState<string>('style.css');
  const [copied, setCopied] = useState<boolean>(false);
  const [downloadSuccess, setDownloadSuccess] = useState<boolean>(false);

  const selectedFile =
    WORDPRESS_THEME_FILES.find((f) => f.filename === selectedFilename) ||
    WORDPRESS_THEME_FILES[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(selectedFile.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadFile = () => {
    const blob = new Blob([selectedFile.code], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = selectedFile.filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Header */}
      <div className="bg-[#1d2327] text-white py-12 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-3">
            <button onClick={() => onNavigate('home')} className="hover:text-white cursor-pointer">
              Home
            </button>
            <ChevronRight className="w-3 h-3 text-gray-500" />
            <span className="text-white font-semibold">WordPress Theme Template Files</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2271b1]/30 text-[#72aee6] text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#72aee6]"></span>
                Production WordPress 6.7 Architecture
              </div>
              <h1 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight">
                HomeAndHomeOnly Theme Source Code
              </h1>
              <p className="text-sm text-gray-300 max-w-2xl leading-relaxed">
                Complete, clean PHP templates, theme declarations, and custom post type configurations ready to be dropped into <code className="bg-black/40 px-1.5 py-0.5 rounded text-emerald-300 text-xs">/wp-content/themes/homeandhomeonly/</code>.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handleDownloadFile}
                className="inline-flex items-center gap-2 bg-[#2271b1] hover:bg-[#135e96] text-white px-5 py-3 rounded-xl font-semibold text-xs transition cursor-pointer shadow-lg"
              >
                <Download className="w-4 h-4" />
                <span>Download {selectedFile.filename}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Code Workspace */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left: Theme File Hierarchy Explorer */}
          <div className="lg:col-span-4 bg-gray-50 rounded-2xl border border-gray-200 p-4 space-y-4">
            <div className="flex items-center justify-between px-2">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-400 flex items-center gap-1.5">
                <Folder className="w-4 h-4 text-[#075B4F]" />
                Theme Hierarchy
              </span>
              <span className="text-[11px] bg-white border border-gray-200 text-gray-500 px-2 py-0.5 rounded-full font-mono">
                {WORDPRESS_THEME_FILES.length} files
              </span>
            </div>

            <div className="space-y-1">
              {WORDPRESS_THEME_FILES.map((file) => {
                const isSelected = selectedFilename === file.filename;
                return (
                  <button
                    key={file.filename}
                    onClick={() => setSelectedFilename(file.filename)}
                    className={`w-full text-left p-3 rounded-xl text-xs font-medium transition flex items-center justify-between group cursor-pointer ${
                      isSelected
                        ? 'bg-[#075B4F] text-white shadow-sm'
                        : 'hover:bg-white text-gray-700 hover:text-gray-900 border border-transparent hover:border-gray-200'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 truncate">
                      <FileCode className={`w-4 h-4 shrink-0 ${isSelected ? 'text-white' : 'text-gray-400'}`} />
                      <span className="font-mono font-semibold truncate">{file.filename}</span>
                    </div>
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded uppercase font-semibold ${
                        isSelected ? 'bg-white/20 text-white' : 'bg-gray-200/80 text-gray-600'
                      }`}
                    >
                      {file.category}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Quick Install Guide */}
            <div className="pt-4 border-t border-gray-200 space-y-2 text-xs text-gray-600 px-2">
              <div className="font-bold text-gray-900 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-[#075B4F]" />
                How to install in WordPress
              </div>
              <ol className="list-decimal list-inside space-y-1 text-[11px] text-gray-500 leading-relaxed">
                <li>Create directory <code className="bg-gray-200 px-1 rounded">wp-content/themes/homeandhomeonly</code></li>
                <li>Copy these PHP &amp; CSS templates into that folder</li>
                <li>Navigate to WP Admin &rarr; Appearance &rarr; Themes &rarr; Activate</li>
              </ol>
            </div>
          </div>

          {/* Right: Code Preview Editor */}
          <div className="lg:col-span-8 bg-[#1e1e1e] rounded-2xl shadow-xl border border-gray-800 overflow-hidden flex flex-col">
            {/* Editor Toolbar */}
            <div className="bg-[#252526] px-5 py-3 border-b border-[#333333] flex items-center justify-between text-xs text-gray-300">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                <span className="font-mono font-bold text-white ml-2">{selectedFile.filename}</span>
                <span className="text-[11px] text-gray-400 hidden sm:inline">&bull; {selectedFile.description}</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 bg-[#333333] hover:bg-[#444444] text-white px-3 py-1.5 rounded-lg text-xs font-medium transition cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Code</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Code Body */}
            <div className="p-5 font-mono text-xs sm:text-sm text-gray-200 overflow-x-auto max-h-[600px] leading-relaxed select-text">
              <pre>
                <code>{selectedFile.code}</code>
              </pre>
            </div>

            {/* Footer status */}
            <div className="bg-[#252526] px-5 py-2 border-t border-[#333333] flex items-center justify-between text-[11px] text-gray-400 font-mono">
              <span>UTF-8 &bull; PHP / CSS</span>
              <span>HomeAndHomeOnly Theme Engine</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
