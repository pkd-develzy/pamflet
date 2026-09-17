import React from 'react';
import { usePoster } from '../../context/PosterContext';
import { Calendar, Megaphone } from 'lucide-react';

export default function BannerHariH() {
  const { formData, updateFormField } = usePoster();

  return (
    <section className="grid grid-cols-12 gap-2 select-none">
      {/* Left Box: White with refined crimson & gold accents */}
      <div className="banner-hari-h col-span-7 bg-white rounded-lg p-2 border-2 border-red-700 shadow-2xs flex items-center gap-2.5 relative overflow-hidden">
        {/* Subtle accent ribbon */}
        <div className="w-1.5 self-stretch bg-gradient-to-b from-red-600 via-amber-500 to-red-700 rounded-full shrink-0"></div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span
              contentEditable
              suppressContentEditableWarning
              className="banner-hari-h-sub text-[8.5px] sm:text-[9.5px] font-black uppercase tracking-wider text-red-700 font-sans"
            >
              HARI &amp; BULAN PEMUNGUTAN SUARA (PUNCAK PILKADES)
            </span>
          </div>

          <div
            contentEditable
            suppressContentEditableWarning
            onBlur={e => updateFormField('inputHariTanggal', e.currentTarget.textContent.trim())}
            className="banner-hari-h-title text-xl sm:text-2xl font-black tracking-wide font-sans text-red-900 my-0.5 leading-none"
          >
            {formData.inputHariTanggal}
          </div>

          <div className="text-[8px] sm:text-[9px] text-slate-800 font-medium leading-tight mt-0.5">
            Waktu: <strong
              contentEditable
              suppressContentEditableWarning
              onBlur={e => updateFormField('inputWaktuTPS', e.currentTarget.textContent.trim())}
              className="font-bold text-slate-950"
            >
              {formData.inputWaktuTPS}
            </strong> | Tempat: <strong
              contentEditable
              suppressContentEditableWarning
              onBlur={e => updateFormField('inputTempatTPS', e.currentTarget.textContent.trim())}
              className="font-bold text-slate-950"
            >
              {formData.inputTempatTPS}
            </strong>
          </div>
        </div>
      </div>

      {/* Right Box: Sovereign Election Red with Call to Action & White Announcement Bullhorn */}
      <div className="banner-hari-h col-span-5 bg-gradient-to-br from-[#c81e1e] via-[#b91c1c] to-[#991b1b] text-white rounded-lg p-2 shadow-sm border border-red-800 flex items-center gap-2 relative overflow-hidden">
        {/* Subtle golden/light reflection glow */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full blur-xl pointer-events-none"></div>

        {/* Authentic White Announcement Bullhorn / Terompet with Sound Waves */}
        <div className="shrink-0 flex items-center justify-center pl-0.5">
          <svg
            viewBox="0 0 64 64"
            className="w-11 h-11 sm:w-12 sm:h-12 filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.35)] select-none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Sound blast rays */}
            <path d="M47 13L55 8" stroke="#FFFFFF" strokeWidth="2.8" strokeLinecap="round" />
            <path d="M51 24L61 24" stroke="#FFFFFF" strokeWidth="2.8" strokeLinecap="round" />
            <path d="M48 35L56 40" stroke="#FFFFFF" strokeWidth="2.8" strokeLinecap="round" />

            {/* Megaphone Cone Opening (Bell) */}
            <ellipse cx="41" cy="24" rx="4.5" ry="12.5" fill="#FFFFFF" />
            <ellipse cx="41" cy="24" rx="2.6" ry="8.8" fill="#b91c1c" />
            <ellipse cx="41.5" cy="24" rx="1.5" ry="5.8" fill="#FFFFFF" />

            {/* Megaphone Main Cone Body */}
            <path d="M41 11.5L19 18.5V29.5L41 36.5V11.5Z" fill="#FFFFFF" />

            {/* Distinctive Crimson Accent Band on Cone */}
            <path d="M31 14.8L28 15.8V32.2L31 33.2V14.8Z" fill="#b91c1c" />

            {/* Rear Housing / Driver Cylinder */}
            <rect x="12" y="19" width="8" height="10" rx="2.5" fill="#FFFFFF" />
            <path d="M12 21H10C8.9 21 8 21.9 8 23V25C8 26.1 8.9 27 10 27H12" fill="#FFFFFF" />

            {/* Handle */}
            <path d="M21 29.5L17.5 45C17.2 46.3 15.9 47.2 14.6 46.9L13.2 46.6C11.9 46.3 11.1 45 11.4 43.7L14.5 29.5H21Z" fill="#FFFFFF" />
            {/* Trigger Accent */}
            <path d="M18 33.5L21 35.5" stroke="#b91c1c" strokeWidth="2.2" strokeLinecap="round" />
          </svg>
        </div>

        <div className="flex-1 text-left min-w-0">
          <div
            contentEditable
            suppressContentEditableWarning
            className="banner-hari-h-cta text-sm sm:text-base font-black tracking-widest uppercase font-sans leading-tight text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]"
          >
            GUNAKAN HAK PILIH!
          </div>
          <div
            contentEditable
            suppressContentEditableWarning
            className="text-[8px] sm:text-[9px] text-white/95 mt-0.5 leading-tight font-medium"
          >
            Satu Suara Anda Menentukan Masa Depan Desa {formData.inputNamaDesa}
          </div>
        </div>
      </div>
    </section>
  );
}
