import React from 'react';
import { usePoster } from '../../context/PosterContext';
import { Users, Award, Shield } from 'lucide-react';

export default function PanitiaShowcase() {
  const { formData, updateFormField } = usePoster();

  const cards = [
    { title: 'KETUA', field: 'inputKetuaPanitia', name: formData.inputKetuaPanitia, isCore: true },
    { title: 'SEKRETARIS', field: 'inputSekretaris', name: formData.inputSekretaris, isCore: true },
    { title: 'BENDAHARA', field: 'inputBendahara', name: formData.inputBendahara, isCore: true },
    { title: 'SEKSI PENDAFTARAN PEMILIH', field: 'inputSeksiDaftar', name: formData.inputSeksiDaftar, isCore: false },
    { title: 'SEKSI PENJARINGAN', field: 'inputSeksiJaring', name: formData.inputSeksiJaring, isCore: false },
    { title: 'SEKSI PENYARINGAN & UJI KOMPETENSI', field: 'inputSeksiSaring', name: formData.inputSeksiSaring, isCore: false },
    { title: 'SEKSI PEMUNGUTAN & PENGHITUNGAN SUARA', field: 'inputSeksiHitung', name: formData.inputSeksiHitung, isCore: false },
    { title: 'SEKSI KEAMANAN', field: 'inputSeksiAman', name: formData.inputSeksiAman, isCore: false },
    { title: 'SEKSI PERLENGKAPAN & DOKUMENTASI', field: 'inputSeksiLengkap', name: formData.inputSeksiLengkap, isCore: false },
  ];

  return (
    <section className="panitia-box bg-gradient-to-b from-slate-50/80 via-white to-slate-50/80 border border-slate-300 rounded-lg p-1.5 shadow-2xs select-none">
      {/* Modern Executive Header */}
      <div className="flex flex-col items-center justify-center mb-1">
        {/* Navy & Gold Premium Badge - Perfectly Centered */}
      <div className="panitia-header-badge inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#0f172a] via-[#1e3a8a] to-[#0f172a] text-white px-4 py-1.5 sm:py-2 rounded-full shadow-xs border border-amber-400/50" style={{ alignItems: 'center' }}>
          <Award className="w-3.5 h-3.5 text-amber-300 shrink-0" />
          <span
            contentEditable
            suppressContentEditableWarning
            className="text-[9px] sm:text-[9.5px] font-black uppercase tracking-wider font-sans text-white"
            style={{ lineHeight: 1 }}
          >
            SUSUNAN PANITIA PEMILIHAN KEPALA DESA
          </span>
          <span className="text-amber-400 text-[8px] font-black" style={{ lineHeight: 1 }}>&#9670;</span>
          <span
            contentEditable
            suppressContentEditableWarning
            className="text-[8.5px] font-extrabold uppercase tracking-wide text-amber-300 font-sans"
            style={{ lineHeight: 1 }}
          >
            DESA {formData.inputNamaDesa} {formData.inputTahun}
          </span>
        </div>

        {/* Pelindung & Penanggung Jawab Executive Pills - Perfectly Centered */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-1">
          <div className="panitia-pill bg-white/95 text-slate-700 px-3.5 py-1 sm:py-1.5 rounded-full border border-slate-300 shadow-2xs inline-flex items-center justify-center gap-1.5 font-medium" style={{ alignItems: 'center' }}>
            <Shield className="w-2.5 h-2.5 text-blue-800 shrink-0" />
            <span className="text-[7.5px] sm:text-[8px]" style={{ lineHeight: 1 }}>
              <strong>Pelindung:</strong> <span contentEditable suppressContentEditableWarning onBlur={e => updateFormField('inputPelindung', e.currentTarget.textContent.trim())}>{formData.inputPelindung}</span>
            </span>
          </div>
          <div className="panitia-pill bg-white/95 text-slate-700 px-3.5 py-1 sm:py-1.5 rounded-full border border-slate-300 shadow-2xs inline-flex items-center justify-center gap-1.5 font-medium" style={{ alignItems: 'center' }}>
            <Users className="w-2.5 h-2.5 text-emerald-800 shrink-0" />
            <span className="text-[7.5px] sm:text-[8px]" style={{ lineHeight: 1 }}>
              <strong>Penanggung Jawab:</strong> <span contentEditable suppressContentEditableWarning onBlur={e => updateFormField('inputPenanggungJawab', e.currentTarget.textContent.trim())}>{formData.inputPenanggungJawab}</span>
            </span>
          </div>
        </div>
      </div>

      {/* 9 Modern Executive Cards (Ultra-Premium Royal Navy & Gold, Zero Numbers, Clean & Unobstructed) */}
      <div className="grid grid-cols-9 gap-1 sm:gap-1.5 w-full">
        {cards.map(c => (
          <div
            key={c.field}
            className="w-full flex flex-col rounded-md overflow-hidden text-center transition-all border border-blue-950/70 bg-white shadow-xs ring-1 ring-amber-400/40"
          >
            {/* Card Header: Royal Navy with Amber Gold Hairline (100% Dedicated to Role Title, Zero Numbers) */}
            <div className="panitia-card-header w-full flex-1 flex items-center justify-center min-h-[38px] px-1 py-1.5 bg-gradient-to-r from-[#172554] via-[#1e3a8a] to-[#172554] text-white border-b-2 border-amber-400 shadow-[inset_0_1px_2px_rgba(255,255,255,0.15)]">
              <span
                contentEditable
                suppressContentEditableWarning
                className="w-full text-[6.8px] sm:text-[7.5px] font-black uppercase tracking-tight leading-[1.22] text-amber-200 px-0.5 whitespace-normal break-words text-center flex items-center justify-center"
                title={c.title}
              >
                {c.title}
              </span>
            </div>

            {/* Card Body: Official Nameplate (Clean Luxury Ivory/White with Navy Bold Text) */}
            <div className="panitia-card-body w-full p-1.5 flex items-center justify-center min-h-[26px] bg-gradient-to-b from-slate-50/40 to-white">
              <span
                contentEditable
                suppressContentEditableWarning
                onBlur={e => updateFormField(c.field, e.currentTarget.textContent.trim())}
                className="w-full text-[7.5px] sm:text-[8px] leading-tight font-extrabold tracking-tight text-[#1e3a8a] text-center"
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
