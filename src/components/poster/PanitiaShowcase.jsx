import React from 'react';
import { usePoster } from '../../context/PosterContext';
import { Users, Award, Shield } from 'lucide-react';

export default function PanitiaShowcase() {
  const { formData, updateFormField } = usePoster();

  const cards = [
    { no: 1, title: 'KETUA', field: 'inputKetuaPanitia', name: formData.inputKetuaPanitia, isCore: true },
    { no: 2, title: 'SEKRETARIS', field: 'inputSekretaris', name: formData.inputSekretaris, isCore: true },
    { no: 3, title: 'BENDAHARA', field: 'inputBendahara', name: formData.inputBendahara, isCore: true },
    { no: 4, title: 'SEKSI PENDAFTARAN PEMILIH', field: 'inputSeksiDaftar', name: formData.inputSeksiDaftar, isCore: false },
    { no: 5, title: 'SEKSI PENJARINGAN', field: 'inputSeksiJaring', name: formData.inputSeksiJaring, isCore: false },
    { no: 6, title: 'SEKSI PENYARINGAN & UJI KOMPETENSI', field: 'inputSeksiSaring', name: formData.inputSeksiSaring, isCore: false },
    { no: 7, title: 'SEKSI PEMUNGUTAN & PENGHITUNGAN SUARA', field: 'inputSeksiHitung', name: formData.inputSeksiHitung, isCore: false },
    { no: 8, title: 'SEKSI KEAMANAN', field: 'inputSeksiAman', name: formData.inputSeksiAman, isCore: false },
    { no: 9, title: 'SEKSI PERLENGKAPAN & DOKUMENTASI', field: 'inputSeksiLengkap', name: formData.inputSeksiLengkap, isCore: false },
  ];

  return (
    <section className="panitia-box bg-gradient-to-b from-slate-50/80 via-white to-slate-50/80 border border-slate-300 rounded-lg p-1.5 shadow-2xs select-none">
      {/* Modern Executive Header */}
      <div className="flex flex-col items-center justify-center mb-1">
        {/* Navy & Gold Premium Badge - Perfectly Centered */}
        <div className="h-6 sm:h-6.5 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#0f172a] via-[#1e3a8a] to-[#0f172a] text-white px-4 py-0 rounded-full shadow-xs border border-amber-400/50 leading-none">
          <Award className="w-3 h-3 text-amber-300 shrink-0 inline-block align-middle" />
          <span
            contentEditable
            suppressContentEditableWarning
            className="text-[9px] sm:text-[9.5px] font-black uppercase tracking-wider font-sans text-white leading-none inline-block align-middle"
          >
            SUSUNAN PANITIA PEMILIHAN KEPALA DESA
          </span>
          <span className="text-amber-400 text-[8px] font-black leading-none inline-block align-middle">&#9670;</span>
          <span
            contentEditable
            suppressContentEditableWarning
            className="text-[8.5px] font-extrabold uppercase tracking-wide text-amber-300 font-sans leading-none inline-block align-middle"
          >
            DESA {formData.inputNamaDesa} {formData.inputTahun}
          </span>
        </div>

        {/* Pelindung & Penanggung Jawab Executive Pills - Perfectly Centered */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-1">
          <div className="h-5 sm:h-5.5 bg-white/95 text-slate-700 px-3 py-0 rounded-full border border-slate-300 shadow-2xs inline-flex items-center justify-center gap-1.5 font-medium leading-none">
            <Shield className="w-2.5 h-2.5 text-blue-800 shrink-0 inline-block align-middle" />
            <span className="leading-none inline-block align-middle text-[7.5px] sm:text-[8px]">
              <strong>Pelindung:</strong> <span contentEditable suppressContentEditableWarning onBlur={e => updateFormField('inputPelindung', e.currentTarget.textContent.trim())}>{formData.inputPelindung}</span>
            </span>
          </div>
          <div className="h-5 sm:h-5.5 bg-white/95 text-slate-700 px-3 py-0 rounded-full border border-slate-300 shadow-2xs inline-flex items-center justify-center gap-1.5 font-medium leading-none">
            <Users className="w-2.5 h-2.5 text-emerald-800 shrink-0 inline-block align-middle" />
            <span className="leading-none inline-block align-middle text-[7.5px] sm:text-[8px]">
              <strong>Penanggung Jawab:</strong> <span contentEditable suppressContentEditableWarning onBlur={e => updateFormField('inputPenanggungJawab', e.currentTarget.textContent.trim())}>{formData.inputPenanggungJawab}</span>
            </span>
          </div>
        </div>
      </div>

      {/* 9 Modern Executive Cards (All Unified to Ketua's Prestigious Design) */}
      <div className="grid grid-cols-9 gap-1 sm:gap-1.5 w-full">
        {cards.map(c => (
          <div
            key={c.no}
            className="w-full flex flex-col rounded-md overflow-hidden text-center transition-all border border-blue-900/60 bg-gradient-to-b from-blue-50/30 to-white shadow-2xs ring-1 ring-amber-400/30"
          >
            {/* Card Header: Royal Navy with Amber Gold Hairline (Always 100% Width) */}
            <div className="panitia-card-header w-full relative flex items-center justify-center min-h-[36px] px-1 py-1.5 bg-gradient-to-r from-[#172554] via-[#1e3a8a] to-[#172554] text-white border-b-2 border-amber-400 shrink-0">
              {/* Gold Metallic Badge */}
              <span className="panitia-badge absolute -top-1 -left-1 w-4 h-4 rounded-full flex items-center justify-center font-black shadow-xs bg-gradient-to-tr from-amber-500 via-amber-400 to-yellow-300 text-slate-950 text-[7.5px] border border-amber-500 z-10">
                {c.no}
              </span>

              {/* Role Title in Golden Amber: full multi-line wrapping, never cut off */}
              <span
                contentEditable
                suppressContentEditableWarning
                className="w-full text-[6.8px] sm:text-[7.5px] font-black uppercase tracking-tight leading-[1.15] text-amber-200 px-0.5 whitespace-normal break-words text-center"
                title={c.title}
              >
                {c.title}
              </span>
            </div>

            {/* Card Body with Official's Name in Navy (Always 100% Width) */}
            <div className="panitia-card-body w-full p-1 flex-1 flex items-center justify-center min-h-[22px] bg-amber-50/20">
              <span
                contentEditable
                suppressContentEditableWarning
                onBlur={e => updateFormField(c.field, e.currentTarget.textContent.trim())}
                className="w-full text-[7.5px] sm:text-[8px] leading-tight font-extrabold tracking-tight text-[#1e3a8a]"
              >
                {c.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
