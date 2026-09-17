import React from 'react';
import { usePoster } from '../../context/PosterContext';

export default function PosterHeader() {
  const { formData, updateFormField } = usePoster();

  return (
    <header className="poster-header-box bg-gradient-to-r from-[#06111f] via-[#0b192c] to-[#06111f] text-white rounded-lg p-2.5 shadow-md border border-amber-500/40 select-none relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent pointer-events-none"></div>

      <div className="flex items-center justify-between gap-3 relative z-10">
        {/* Emblem Left: Kabupaten Tegal */}
        <div className="poster-header-logo w-15 h-15 sm:w-16 sm:h-16 shrink-0 flex items-center justify-center p-0.5 filter drop-shadow">
          <img
            src={formData.logoPemdaUrl}
            alt="Logo Kabupaten Tegal"
            className="max-h-full max-w-full object-contain"
          />
        </div>

        {/* Center Kop Information */}
        <div className="text-center flex-1 min-w-0">
          <h3
            contentEditable
            suppressContentEditableWarning
            className="poster-header-sub text-[9.5px] sm:text-[10.5px] font-bold tracking-widest text-amber-300 uppercase font-sans leading-tight"
          >
            PEMERINTAH KABUPATEN {formData.inputKabupaten} &bull; KECAMATAN {formData.inputKecamatan} &bull; PANITIA PILKADES DESA {formData.inputNamaDesa}
          </h3>

          <h1
            contentEditable
            suppressContentEditableWarning
            className="poster-header-title text-base sm:text-xl md:text-2xl font-black text-white tracking-wider uppercase font-sans my-0.5 leading-snug drop-shadow-sm"
          >
            PENGUMUMAN TAHAPAN &amp; JADWAL PILKADES
          </h1>

          <p
            contentEditable
            suppressContentEditableWarning
            className="poster-header-desc text-[8px] sm:text-[9px] text-sky-300 font-medium italic mx-auto leading-none mt-1 whitespace-nowrap overflow-hidden text-ellipsis max-w-none"
          >
            Mewujudkan Pemilihan Kepala Desa yang Demokratis, Transparan, Netral, dan Berintegritas Menuju Desa {formData.inputNamaDesa} Maju dan Modern
          </p>
        </div>

        {/* Emblem Right: Logo Pilkades Kalisalak */}
        <div className="poster-header-logo w-15 h-15 sm:w-16 sm:h-16 shrink-0 flex items-center justify-center p-0.5 filter drop-shadow">
          <img
            src={formData.logoPilkadesUrl}
            alt="Logo Pilkades Kalisalak"
            className="max-h-full max-w-full object-contain"
          />
        </div>
      </div>

      {/* Official Government Double Rule (Teal & Gold) */}
      <div className="mt-2 flex flex-col gap-0.5">
        <div className="h-[2px] bg-gradient-to-r from-amber-500/20 via-amber-400 to-amber-500/20"></div>
        <div className="h-[0.5px] bg-sky-400/40"></div>
      </div>
    </header>
  );
}
