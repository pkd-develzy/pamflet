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
  FileDown,
  Layers,
  Sparkles,
  Image as ImageIcon,
  ChevronDown
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

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPdf = async () => {
    const elementId = activeTemplate === 'pamflet' ? 'posterContent'
      : activeTemplate === 'alur' ? 'posterAlurContent'
      : 'storySlide1';
    setLoading({ active: true, message: 'Menyiapkan file PDF HD Siap Cetak...' });

    await exportToPdf({
      elementId,
      paperSize,
      fileName: `Poster_Pilkades_${
        activeTemplate === 'pamflet' ? 'Lengkap'
        : activeTemplate === 'story' ? 'Story_WA_Slide1'
        : 'Alur'
      }_${paperSize.toUpperCase()}.pdf`,
      onComplete: () => {
        setLoading({ active: false, message: '' });
        showToast(activeTemplate === 'story' ? 'PDF Slide 1 berhasil diunduh!' : 'PDF siap cetak berhasil diunduh!', 'success');
      },
      onError: (err) => {
        setLoading({ active: false, message: '' });
        showToast('Gagal mengunduh PDF: ' + err.message, 'error');
      }
    });
  };

  const handleDownloadImage = async () => {
    if (activeTemplate === 'story') {
      setLoading({ active: true, message: 'Mengunduh 5 Slide Story WA...' });
      const slides = ['storySlide1', 'storySlide2', 'storySlide3', 'storySlide4', 'storySlide5'];
      const labels = ['Cover', 'Panitia', 'Pencalonan', 'Pemilih_Kampanye', 'Ringkasan'];
      let success = 0;
      for (let i = 0; i < slides.length; i++) {
        try {
          await exportToImage({
            elementId: slides[i],
            paperSize: 'a4',
            fileName: `Story_WA_Slide${i + 1}_${labels[i]}_Pilkades.png`,
            onStart: () => {
              setLoading({ active: true, message: `Mengunduh Slide ${i + 1}/5: ${labels[i]}...` });
            },
            onError: (err) => console.error('Slide export error:', err)
          });
          success++;
          await new Promise(r => setTimeout(r, 500));
        } catch (e) {
          console.error('Slide export failed:', e);
        }
      }
      setLoading({ active: false, message: '' });
      showToast(`${success}/5 Slide Story WA berhasil diunduh!`, 'success');
      return;
    }

    const elementId = activeTemplate === 'pamflet' ? 'posterContent' : 'posterAlurContent';
    setLoading({ active: true, message: 'Menyiapkan Gambar PNG HD...' });

    await exportToImage({
      elementId,
      paperSize,
      fileName: `Poster_Pilkades_${activeTemplate === 'pamflet' ? 'Lengkap' : 'Alur'}_${paperSize.toUpperCase()}.png`,
      onComplete: () => {
        setLoading({ active: false, message: '' });
        showToast('Gambar PNG HD berhasil diunduh!', 'success');
      },
      onError: (err) => {
        setLoading({ active: false, message: '' });
        showToast('Gagal mengunduh gambar: ' + err.message, 'error');
      }
    });
  };

  return (
    <header className="no-print h-14 bg-slate-900 border-b border-slate-800 px-4 flex items-center justify-between shadow-sm sticky top-0 z-40 select-none">
      {/* Left: Brand & View Selectors */}
      <div className="flex items-center gap-3">
        {/* Toggle Sidebar Button */}
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className={`p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition ${
            isSidebarOpen ? 'bg-slate-800 text-amber-400' : ''
          }`}
          title={isSidebarOpen ? 'Sembunyikan Panel Edit' : 'Buka Panel Edit'}
        >
          <Menu className="w-4 h-4" />
        </button>

        {/* Logo & Clean Title */}
        <div className="flex items-center gap-2.5 mr-2">
          <img
            src="/images/logo_kabupaten_tegal.png"
            alt="Logo"
            className="w-7 h-7 object-contain"
          />
          <div className="hidden sm:flex flex-col">
            <span className="font-bold text-xs tracking-wide text-white">
              PILKADES STUDIO
            </span>
            <span className="text-[10px] text-slate-400">
              Desa Kalisalak
            </span>
          </div>
        </div>

        <div className="h-4 w-px bg-slate-800 hidden md:block"></div>

        {/* Segmented Template Selector */}
        <div className="flex items-center bg-slate-950/80 p-0.5 rounded-lg border border-slate-800 text-xs">
          <button
            onClick={() => setActiveTemplate('pamflet')}
            className={`px-3 py-1 rounded-md font-medium transition ${
              activeTemplate === 'pamflet'
                ? 'bg-slate-800 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Poster Utama
          </button>
          <button
            onClick={() => setActiveTemplate('alur')}
            className={`px-3 py-1 rounded-md font-medium transition ${
              activeTemplate === 'alur'
                ? 'bg-slate-800 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Alur Pemilih
          </button>
          <button
            onClick={() => setActiveTemplate('story')}
            className={`px-3 py-1 rounded-md font-medium transition ${
              activeTemplate === 'story'
                ? 'bg-amber-500/20 text-amber-300 font-semibold shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Story WA (5 Slide)
          </button>
        </div>

        {/* Paper Size Selector (Only for print posters) */}
        {activeTemplate !== 'story' && (
          <div className="hidden lg:flex items-center bg-slate-950/80 p-0.5 rounded-lg border border-slate-800 text-xs">
            {['a3plus', 'a3', 'a4'].map(size => (
              <button
                key={size}
                onClick={() => {
                  setPaperSize(size);
                  setIsFitMode(true);
                }}
                className={`px-2.5 py-1 rounded-md font-semibold transition uppercase text-[11px] ${
                  paperSize === size
                    ? 'bg-slate-800 text-amber-400 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {size === 'a3plus' ? 'A3+' : size.toUpperCase()}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Center: Minimalist Zoom Pill */}
      <div className="hidden md:flex items-center gap-1 bg-slate-950/80 px-2 py-1 rounded-lg border border-slate-800 text-xs">
        <button
          onClick={handleZoomOut}
          className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition"
          title="Perkecil (-)"
        >
          <ZoomOut className="w-3.5 h-3.5" />
        </button>

        <button
          onClick={handleZoomFit}
          className="px-2 py-0.5 rounded font-mono text-[11px] text-slate-300 hover:text-white transition"
          title="Klik untuk Fit Layar"
        >
          {isFitMode ? 'Fit' : `${Math.round(zoomLevel * 100)}%`}
        </button>

        <button
          onClick={handleZoomIn}
          className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition"
          title="Perbesar (+)"
        >
          <ZoomIn className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Right: Clean Action Controls */}
      <div className="flex items-center gap-2">
        {/* Reset Button */}
        <button
          onClick={resetAllToDefault}
          className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
          title="Reset ke data awal"
        >
          <RotateCcw className="w-4 h-4" />
        </button>

        {/* Print Button */}
        <button
          onClick={handlePrint}
          className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
          title="Cetak langsung (Ctrl+P)"
        >
          <Printer className="w-4 h-4" />
        </button>

        <div className="h-4 w-px bg-slate-800 mx-1"></div>

        {/* Download PNG Button */}
        <button
          onClick={handleDownloadImage}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition"
          title={activeTemplate === 'story' ? 'Unduh 5 slide Story WA sebagai PNG HD' : 'Unduh Gambar PNG HD'}
        >
          <ImageIcon className="w-3.5 h-3.5 text-slate-300" />
          <span>{activeTemplate === 'story' ? 'Unduh 5 PNG' : 'PNG'}</span>
        </button>

        {/* Download PDF Button */}
        <button
          onClick={handleDownloadPdf}
          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 transition shadow-sm"
          title="Unduh Dokumen PDF Siap Cetak"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Unduh PDF</span>
        </button>
      </div>
    </header>
  );
}
