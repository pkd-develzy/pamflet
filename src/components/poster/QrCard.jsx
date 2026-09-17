import React, { useState } from 'react';
import { usePoster } from '../../context/PosterContext';
import { ShieldCheck, Globe, ChevronDown, ArrowUp, ArrowDown, LayoutGrid, Lock } from 'lucide-react';

export default function QrCard({ className = '', style = {} }) {
  const {
    formData,
    tableScales,
    moveTableBlock,
    moveBlockOrder
  } = usePoster();

  const [showMoveMenu, setShowMoveMenu] = useState(false);
  const blockId = 'blockQR';
  const currentScale = tableScales[blockId] || 1.0;

  return (
    <div
      id={blockId}
      style={{ fontSize: `${currentScale * 100}%`, ...style }}
      className={`qr-card-container table-block-wrapper flex-1 flex flex-col justify-between border-2 border-[#1e3a8a] rounded-lg overflow-hidden bg-gradient-to-b from-blue-50/20 to-white shadow-2xs p-3 relative ${className}`}
    >
      {/* Top Header Bar with Gold Hairline */}
      <div className="flex items-center justify-between border-b border-amber-400/60 pb-2 mb-2 select-none min-h-[26px]" style={{ alignItems: 'center' }}>
        <div className="flex gap-1.5 text-[#1e3a8a]" style={{ alignItems: 'center' }}>
          <ShieldCheck className="w-4 h-4 text-amber-500 fill-amber-500/20 shrink-0" />
          <span className="font-extrabold text-[9.5px] sm:text-[10px] tracking-wider uppercase font-sans" style={{ lineHeight: 1 }}>
            PORTAL RESMI DIGITAL
          </span>
          <span className="text-[7.5px] bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded font-bold border border-emerald-300 inline-flex items-center ml-1" style={{ lineHeight: 1 }}>
            TERVERIFIKASI
          </span>
        </div>

        <div className="text-[7.5px] text-slate-500 font-bold uppercase tracking-widest font-sans" style={{ lineHeight: 1 }}>
          DESA {formData.inputNamaDesa}
        </div>
      </div>

      {/* Large Centered QR Code */}
      <div className="flex flex-col items-center justify-center flex-1 my-auto text-center">
        <div className="qr-card-image w-36 h-36 sm:w-44 sm:h-44 bg-white p-1 rounded-lg border-2 border-slate-200 shadow-xs mb-2 flex items-center justify-center relative">
          <img
            src={formData.qrCodeUrl}
            alt="Scan QR Code Website Resmi Panitia Pilkades"
            className="w-full h-full object-contain"
          />
        </div>

        <div
          contentEditable
          suppressContentEditableWarning
          className="text-[#1e3a8a] text-[8.5px] sm:text-[9.5px] font-black uppercase tracking-wider font-sans"
        >
          PORTAL DIGITAL RESMI DESA {formData.inputNamaDesa}
        </div>

        <h4
          contentEditable
          suppressContentEditableWarning
          className="qr-card-title text-xs sm:text-sm font-black text-slate-900 uppercase font-sans mt-0.5 leading-tight"
        >
          WEBSITE RESMI PANITIA PILKADES
        </h4>

        <p
          contentEditable
          suppressContentEditableWarning
          className="qr-card-desc text-[8px] sm:text-[8.5px] text-slate-600 mt-1 max-w-[320px] leading-snug font-sans"
        >
          Pindai QR Code untuk cek Pengumuman DPT Online, Berkas Persyaratan Balon Kades, Jadwal Tahapan, dan Layanan Informasi secara transparan &amp; akuntabel.
        </p>

        {/* Bottom Pill Button - Perfectly Centered */}
        <div className="mt-3 flex items-center justify-center">
          <div className="bg-gradient-to-r from-[#1e3a8a] to-[#0f2744] text-white px-5 py-1.5 sm:py-2 rounded-full inline-flex items-center justify-center gap-2 shadow-sm text-[8.5px] sm:text-[9.5px] font-bold tracking-wide border border-amber-400/50">
            <Globe className="w-3.5 h-3.5 text-amber-300 shrink-0" />
            <span className="leading-tight">Verifikasi Status DPT &amp; Berkas Online</span>
          </div>
        </div>
      </div>
    </div>
  );
}
