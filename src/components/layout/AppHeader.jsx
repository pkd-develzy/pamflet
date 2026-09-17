import React from 'react';
import { usePoster } from '../../context/PosterContext';
import { exportToPdf, exportToImage } from '../../utils/exportPdf';
import {
  Menu,
  ZoomIn,
  ZoomOut,
  Maximize2,
  RotateCcw,
  Printer,
  Download,
  FileText,
  Layers,
  Sparkles,
  Image as ImageIcon
} from 'lucide-react';

export default function AppHeader() {
  const {
    isSidebarOpen,
    setIsSidebarOpen,
    paperSize,
    setPaperSize,
    activeTemplate,
    setActiveTemplate,
    zoomLevel,
    setZoomLevel,
    isFitMode,
    setIsFitMode,
    resetAllToDefault,
    showToast,
    setLoading
  } = usePoster();

  const handleZoomIn = () => {
    setIsFitMode(false);
    setZoomLevel(prev => Math.min(prev + 0.1, 1.8));
  };

  const handleZoomOut = () => {
    setIsFitMode(false);
    setZoomLevel(prev => Math.max(prev - 0.1, 0.3));
  };

  const handleZoomFit = () => {
    setIsFitMode(true);
    showToast('Zoom disesuaikan dengan layar');
  };

  const handleZoom100 = () => {
    setIsFitMode(false);
    setZoomLevel(1.0);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPdf = async () => {
    const elementId = activeTemplate === 'pamflet' ? 'posterContent' : 'posterAlurContent';
    setLoading({ active: true, message: 'Menyiapkan file PDF HD+ Super Tajam (300-450 DPI Cetak Stiker & Poster)...' });

    await exportToPdf({
      elementId,
      paperSize,
      fileName: `Poster_Pilkades_${activeTemplate === 'pamflet' ? 'Lengkap' : 'Alur'}_${paperSize.toUpperCase()}_HDPlus_Cetak_Stiker.pdf`,
      onComplete: () => {
        setLoading({ active: false, message: '' });
        showToast('PDF HD+ berhasil diunduh! Resolusi terbaik siap cetak stiker.', 'success');
      },
      onError: (err) => {
        setLoading({ active: false, message: '' });
        showToast('Gagal mengunduh PDF: ' + err.message, 'error');
      }
    });
  };

  const handleDownloadImage = async () => {
    const elementId = activeTemplate === 'pamflet' ? 'posterContent' : 'posterAlurContent';
    setLoading({ active: true, message: 'Menyiapkan Gambar HD+ Lossless PNG (300+ DPI Cetak Stiker / Vinyl)...' });

    await exportToImage({
      elementId,
      paperSize,
      fileName: `Poster_Pilkades_${activeTemplate === 'pamflet' ? 'Lengkap' : 'Alur'}_${paperSize.toUpperCase()}_HDPlus_Lossless.png`,
      onComplete: () => {
        setLoading({ active: false, message: '' });
        showToast('Gambar HD+ PNG siap cetak stiker berhasil diunduh!', 'success');
      },
      onError: (err) => {
        setLoading({ active: false, message: '' });
        showToast('Gagal mengunduh gambar: ' + err.message, 'error');
      }
    });
  };

  return (
    <header className="no-print h-16 bg-slate-900/95 border-b border-slate-800 px-4 flex items-center justify-between shadow-lg sticky top-0 z-40 backdrop-blur select-none">
      {/* Brand & Left Controls */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2.5 mr-2">
          <img
            src="/images/logo_kabupaten_tegal.png"
            alt="Logo Kabupaten Tegal"
            className="w-9 h-9 object-contain filter drop-shadow"
          />
          <div className="hidden sm:flex flex-col">
            <span className="font-extrabold text-sm tracking-wider text-amber-400 font-sans leading-tight">
              PILKADES KALISALAK
            </span>
            <span className="text-[10px] text-slate-400 font-semibold tracking-wider flex items-center gap-1">
              <span>REACT + CLOUDFLARE</span>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            </span>
          </div>
        </div>

        <div className="h-6 w-px bg-slate-700 mx-1 hidden sm:block"></div>

        {/* Toggle Form Panel */}
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all border ${
            isSidebarOpen
              ? 'bg-amber-500/20 text-amber-300 border-amber-500/50 shadow-sm'
              : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
          }`}
          title="Buka / Tutup Panel Form Edit"
        >
          <Menu className="w-4 h-4" />
          <span className="hidden md:inline">Panel Form</span>
        </button>

        {/* Template Selector */}
        <div className="flex items-center gap-1.5 bg-slate-800/80 px-2 py-1 rounded-lg border border-slate-700">
          <Layers className="w-3.5 h-3.5 text-amber-400" />
          <select
            value={activeTemplate}
            onChange={e => setActiveTemplate(e.target.value)}
            className="bg-transparent text-xs font-medium text-slate-200 focus:outline-none cursor-pointer pr-1"
          >
            <option value="pamflet" className="bg-slate-900 text-white">Pamflet Lengkap (Jadwal & Panitia)</option>
            <option value="alur" className="bg-slate-900 text-white">Poster Alur 13 Langkah Pemilih</option>
          </select>
        </div>

        {/* Paper Size Selector */}
        <div className="flex items-center gap-1.5 bg-slate-800/80 px-2 py-1 rounded-lg border border-slate-700">
          <FileText className="w-3.5 h-3.5 text-amber-400" />
          <select
            value={paperSize}
            onChange={e => {
              const newSize = e.target.value;
              setPaperSize(newSize);
              setIsFitMode(true);
              const labelMap = {
                a3plus: 'A3+ (Acuan Utama - 32.9 × 48.3 cm)',
                a3: 'A3 (Standar - 29.7 × 42 cm)',
                a4: 'A4 (Ringkas - 21 × 29.7 cm)'
              };
              showToast(`Format aktif: ${labelMap[newSize] || newSize.toUpperCase()}`, 'info');
            }}
            className="bg-transparent text-xs font-semibold text-slate-200 focus:outline-none cursor-pointer pr-1 uppercase"
          >
            <option value="a3plus" className="bg-slate-900 text-amber-300 font-bold">A3+ (32.9 &times; 48.3 cm - Acuan Utama)</option>
            <option value="a3" className="bg-slate-900 text-white">A3 (29.7 &times; 42 cm - Standar)</option>
            <option value="a4" className="bg-slate-900 text-white">A4 (21 &times; 29.7 cm - Ringkas)</option>
          </select>
        </div>
      </div>

      {/* Center: Zoom Controls */}
      <div className="hidden lg:flex items-center gap-1 bg-slate-800/90 px-2 py-1 rounded-lg border border-slate-700/80 text-xs">
        <button
          onClick={handleZoomOut}
          className="p-1 rounded text-slate-300 hover:text-white hover:bg-slate-700 transition"
          title="Perkecil (-)"
        >
          <ZoomOut className="w-3.5 h-3.5" />
        </button>
        <span className="px-2 font-mono text-amber-400 font-bold min-w-[48px] text-center">
          {isFitMode ? 'Fit' : `${Math.round(zoomLevel * 100)}%`}
        </span>
        <button
          onClick={handleZoomIn}
          className="p-1 rounded text-slate-300 hover:text-white hover:bg-slate-700 transition"
          title="Perbesar (+)"
        >
          <ZoomIn className="w-3.5 h-3.5" />
        </button>
        <div className="h-4 w-px bg-slate-700 mx-1"></div>
        <button
          onClick={handleZoomFit}
          className="px-2 py-0.5 rounded text-[11px] font-medium text-slate-300 hover:text-white hover:bg-slate-700 transition"
        >
          Fit Layar
        </button>
        <button
          onClick={handleZoom100}
          className="px-2 py-0.5 rounded text-[11px] font-medium text-slate-300 hover:text-white hover:bg-slate-700 transition"
        >
          100%
        </button>
      </div>

      {/* Right Action Buttons */}
      <div className="flex items-center gap-2">
        <button
          onClick={resetAllToDefault}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition shadow-sm"
          title="Kembalikan semua ke data bawaan resmi"
        >
          <RotateCcw className="w-3.5 h-3.5 text-slate-400" />
          <span className="hidden md:inline">Reset</span>
        </button>

        <button
          onClick={handlePrint}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-600 transition shadow-sm"
          title="Cetak langsung ke printer (Ctrl+P)"
        >
          <Printer className="w-3.5 h-3.5 text-sky-400" />
          <span>Cetak</span>
        </button>

        <button
          onClick={handleDownloadImage}
          className="hidden xl:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-amber-300 bg-slate-800 hover:bg-slate-700 border border-amber-500/40 transition shadow-sm"
          title="Download Gambar HD+ Lossless PNG (300+ DPI Cetak Stiker / Vinyl)"
        >
          <ImageIcon className="w-3.5 h-3.5 text-amber-400" />
          <span>Gambar HD+ (PNG)</span>
        </button>

        <button
          onClick={handleDownloadPdf}
          className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500 hover:brightness-110 active:scale-95 transition shadow-lg shadow-amber-500/20"
          title="Download PDF HD+ Resolusi Terbaik Siap Cetak Stiker & Poster (300-450 DPI)"
        >
          <Download className="w-4 h-4" />
          <span>Download PDF HD+ (Stiker)</span>
        </button>
      </div>
    </header>
  );
}
