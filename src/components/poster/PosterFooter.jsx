import React from 'react';
import { usePoster } from '../../context/PosterContext';
import InteractiveStamp from './InteractiveStamp';
import { MapPin, Home, UserCheck, PhoneCall } from 'lucide-react';

export default function PosterFooter() {
  const { formData, updateFormField } = usePoster();

  return (
    <footer className="poster-footer-box mt-1 grid grid-cols-12 gap-3 pt-1 bg-white select-none">
      {/* Left Box: Posko Sekretariat & Informasi */}
      <div className="posko-box col-span-7 bg-white border border-slate-300 rounded overflow-hidden shadow-xs flex flex-col justify-between">
        {/* Blue Ribbon Header with Gold Hairline */}
        <div className="bg-gradient-to-r from-[#1e3a8a] to-[#0f2744] text-white px-2.5 py-1.5 flex items-center justify-between shadow-2xs border-b border-amber-400 leading-none">
          <div className="flex items-center gap-1.5 leading-none">
            <MapPin className="w-3.5 h-3.5 text-amber-300 shrink-0 self-center" />
            <span
              contentEditable
              suppressContentEditableWarning
              className="posko-header-title text-[9.5px] sm:text-[10px] font-black uppercase tracking-wider font-sans text-white leading-none inline-block align-middle pt-[1px]"
            >
              POSKO SEKRETARIAT &amp; PENGADUAN PILKADES
            </span>
          </div>
          <div className="text-[7.5px] text-amber-300/80 font-bold uppercase tracking-wider font-sans leading-none self-center">
            RESMI
          </div>
        </div>

        {/* Info Rows (Supports pressing Enter for line breaks & custom spacing) */}
        <div
          className="p-2 text-[8.5px] sm:text-[9px] text-slate-800 leading-snug flex flex-col justify-center"
          style={{ gap: `${formData.poskoSpacing !== undefined ? formData.poskoSpacing : 8}px` }}
        >
          {/* Row 1: Alamat */}
          <div className="flex items-start gap-2">
            <span className="w-4 h-4 rounded-full bg-[#1e3a8a] text-amber-300 inline-flex items-center justify-center shrink-0 mt-0.5 shadow-2xs leading-none">
              <Home className="w-2.5 h-2.5" />
            </span>
            <div
              contentEditable
              suppressContentEditableWarning
              onBlur={e => updateFormField('poskoAlamat', e.currentTarget.innerText)}
              className="posko-row flex-1 whitespace-pre-wrap outline-none focus:bg-amber-50/50 rounded px-1 min-h-[1.2em]"
            >
              {formData.poskoAlamat || `Alamat Sekretariat: Balai Desa ${formData.inputNamaDesa}, Kec. ${formData.inputKecamatan}, Kab. ${formData.inputKabupaten}.`}
            </div>
          </div>

          {/* Row 2: Syarat */}
          <div className="flex items-start gap-2">
            <span className="w-4 h-4 rounded-full bg-[#1e3a8a] text-amber-300 inline-flex items-center justify-center shrink-0 mt-0.5 shadow-2xs leading-none">
              <UserCheck className="w-2.5 h-2.5" />
            </span>
            <div
              contentEditable
              suppressContentEditableWarning
              onBlur={e => updateFormField('poskoSyarat', e.currentTarget.innerText)}
              className="posko-row flex-1 whitespace-pre-wrap outline-none focus:bg-amber-50/50 rounded px-1 min-h-[1.2em]"
            >
              {formData.poskoSyarat || 'Syarat Mencoblos: Membawa Surat Undangan (C6) & e-KTP / KK Asli.'}
            </div>
          </div>

          {/* Row 3: Kontak Person */}
          <div className="flex items-start gap-2">
            <span className="w-4 h-4 rounded-full bg-[#1e3a8a] text-amber-300 inline-flex items-center justify-center shrink-0 mt-0.5 shadow-2xs leading-none">
              <PhoneCall className="w-2.5 h-2.5" />
            </span>
            <div
              contentEditable
              suppressContentEditableWarning
              onBlur={e => updateFormField('poskoKontak', e.currentTarget.innerText)}
              className="posko-row flex-1 whitespace-pre-wrap outline-none focus:bg-amber-50/50 rounded px-1 min-h-[1.2em]"
            >
              {formData.poskoKontak || "KONTAK PERSON:\n0878-3018-8452\n0857-8635-5600"}
            </div>
          </div>
        </div>
      </div>

      {/* Right Area: Pengesahan & Tanda Tangan */}
      <div className="col-span-5 flex flex-col items-center justify-between text-center relative pt-0.5">
        <div className="text-[8.5px] sm:text-[9px] text-slate-700 leading-tight">
          Ditetapkan di: Desa {formData.inputNamaDesa}, Kabupaten {formData.inputKabupaten}<br />
          Pada Bulan: <span
            contentEditable
            suppressContentEditableWarning
            onBlur={e => updateFormField('inputTglPenetapan', e.currentTarget.textContent.trim())}
            className="font-semibold text-slate-900"
          >
            {formData.inputTglPenetapan}
          </span>
        </div>

        <div
          contentEditable
          suppressContentEditableWarning
          className="signature-title text-[9.5px] sm:text-[10px] font-black text-slate-900 tracking-wider uppercase font-sans mt-1 leading-tight"
        >
          PANITIA PEMILIHAN KEPALA DESA
        </div>

        {/* Space for Signature & Stamp */}
        <div className="h-16 w-full relative flex items-center justify-center my-0.5">
          <InteractiveStamp />
        </div>

        <div className="text-[10px] sm:text-[10.5px] font-bold text-slate-900 pt-0.5 relative z-10 leading-tight">
          (&nbsp;<span
            contentEditable
            suppressContentEditableWarning
            onBlur={e => updateFormField('inputKetuaPanitia', e.currentTarget.textContent.trim())}
            className="signature-name underline font-black"
          >
            {formData.inputKetuaPanitia}
          </span>&nbsp;)
        </div>
      </div>
    </footer>
  );
}
