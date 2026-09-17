import React from 'react';
import { usePoster } from '../../context/PosterContext';
import { ArrowDown, Check, ArrowRight } from 'lucide-react';

export default function AlurSheet() {
  const { paperSize, formData } = usePoster();

  return (
    <article
      id="posterAlurContent"
      className={`poster-sheet page-${paperSize} flex flex-col justify-between`}
      spellCheck={false}
    >
      <div className="border-[3px] border-blue-900 rounded-xl p-3 bg-gradient-to-b from-blue-50/50 via-white to-amber-50/40 flex flex-col flex-1 shadow-inner relative">
        
        {/* Header Alur Poster */}
        <header className="bg-gradient-to-r from-blue-950 via-blue-900 to-indigo-950 text-white rounded-lg p-3 shadow-md border-b-2 border-amber-400 mb-2 flex items-center justify-between">
          <div className="w-14 h-14 shrink-0 bg-white/10 rounded-full p-1 border border-amber-300/40 flex items-center justify-center">
            <img
              src={formData.logoPilkadesUrl}
              alt="Logo Pilkades"
              className="max-h-full max-w-full object-contain"
            />
          </div>

          <div className="text-center flex-1">
            <h1
              contentEditable
              suppressContentEditableWarning
              className="text-sm sm:text-lg font-black uppercase tracking-wider font-sans leading-tight text-amber-200"
            >
              ALUR PENDUDUK MENGGUNAKAN HAK PILIH<br />
              PADA PILKADES {formData.inputTahun}
            </h1>
            <div
              contentEditable
              suppressContentEditableWarning
              className="inline-block mt-1 bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-950 font-black text-xs px-3 py-0.5 rounded-full uppercase tracking-widest font-sans shadow"
            >
              DESA {formData.inputNamaDesa}
            </div>
          </div>

          <div className="w-14 h-14 shrink-0 bg-white/10 rounded-full p-1 border border-amber-300/40 flex items-center justify-center">
            <img
              src={formData.logoPemdaUrl}
              alt="Logo Pemda"
              className="max-h-full max-w-full object-contain"
            />
          </div>
        </header>

        {/* 13 Steps Container */}
        <div className="flex-1 flex flex-col justify-between py-1 px-2 space-y-1 text-xs">
          
          {/* Step 1 */}
          <div className="flex items-center gap-2 bg-white border border-slate-300 rounded-lg p-1.5 shadow-xs">
            <div className="w-6 h-6 rounded-full bg-blue-900 text-amber-300 flex items-center justify-center font-black text-xs shrink-0">1</div>
            <div className="font-bold text-slate-900" contentEditable suppressContentEditableWarning>
              PENDUDUK DESA {formData.inputNamaDesa}
            </div>
          </div>

          <div className="flex justify-center text-blue-900"><ArrowDown className="w-3.5 h-3.5" /></div>

          {/* Step 2 */}
          <div className="flex items-start gap-2 bg-white border border-slate-300 rounded-lg p-1.5 shadow-xs">
            <div className="w-6 h-6 rounded-full bg-blue-900 text-amber-300 flex items-center justify-center font-black text-xs shrink-0 mt-0.5">2</div>
            <div className="flex-1" contentEditable suppressContentEditableWarning>
              <div className="font-bold text-slate-900">MEMENUHI SYARAT PEMILIH</div>
              <ul className="list-disc pl-4 text-[9.5px] text-slate-600 mt-0.5 space-y-0.5">
                <li>Berusia 17 tahun atau sudah/pernah menikah</li>
                <li>Berdomisili di desa sekurang-kurangnya 6 bulan sebelum pengesahan DPS</li>
                <li>Tidak sedang dicabut hak pilihnya berdasarkan putusan pengadilan berkekuatan hukum tetap</li>
              </ul>
            </div>
          </div>

          <div className="flex justify-center text-blue-900"><ArrowDown className="w-3.5 h-3.5" /></div>

          {/* Step 3 */}
          <div className="flex items-center gap-2 bg-white border border-slate-300 rounded-lg p-1.5 shadow-xs">
            <div className="w-6 h-6 rounded-full bg-blue-900 text-amber-300 flex items-center justify-center font-black text-xs shrink-0">3</div>
            <div className="flex-1" contentEditable suppressContentEditableWarning>
              <span className="font-bold text-slate-900">TERDAFTAR SEBAGAI PEMILIH: </span>
              <span className="text-[10px] text-blue-900 font-semibold">DPS &rarr; Pemutakhiran/Validasi &rarr; <strong className="text-red-700 font-bold">DPT</strong></span>
            </div>
          </div>

          <div className="flex justify-center text-blue-900"><ArrowDown className="w-3.5 h-3.5" /></div>

          {/* Step 4: Decision Rhombus & Branching */}
          <div className="grid grid-cols-12 gap-2 bg-amber-50/70 border border-amber-300 rounded-lg p-2">
            <div className="col-span-6 flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-amber-600 text-white flex items-center justify-center font-black text-xs shrink-0">4</div>
              <div className="bg-amber-500 text-slate-950 font-black text-[10px] px-2 py-1 rounded tracking-wide uppercase font-sans shadow-xs" contentEditable suppressContentEditableWarning>
                TERDAFTAR DALAM DPT?
              </div>
            </div>

            <div className="col-span-6 flex items-center justify-between text-[9px] gap-2">
              <div className="flex-1 bg-red-100 border border-red-300 text-red-900 p-1 rounded leading-tight" contentEditable suppressContentEditableWarning>
                <strong className="block text-red-700">BELUM &rarr;</strong>
                Lapor Panitia Pilkades / Layanan DPTb Khusus
              </div>
              <div className="flex items-center gap-1 bg-emerald-100 border border-emerald-300 text-emerald-900 px-2 py-1.5 rounded font-bold">
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>SUDAH</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center text-blue-900"><ArrowDown className="w-3.5 h-3.5" /></div>

          {/* Steps 5 - 12 Mini Cards Grid */}
          <div className="grid grid-cols-2 gap-1.5">
            <div className="flex items-center gap-2 bg-white border border-slate-300 rounded p-1 shadow-xs">
              <span className="w-5 h-5 rounded-full bg-slate-800 text-white flex items-center justify-center text-[10px] font-bold">5</span>
              <span className="text-[9.5px] font-semibold text-slate-800" contentEditable suppressContentEditableWarning>
                Datang ke TPS (07.00 - 13.00 WIB)
              </span>
            </div>

            <div className="flex items-center gap-2 bg-white border border-slate-300 rounded p-1 shadow-xs">
              <span className="w-5 h-5 rounded-full bg-slate-800 text-white flex items-center justify-center text-[10px] font-bold">6</span>
              <span className="text-[9.5px] font-semibold text-slate-800" contentEditable suppressContentEditableWarning>
                Tunjukkan Surat Undangan (C6) &amp; e-KTP
              </span>
            </div>

            <div className="flex items-center gap-2 bg-white border border-slate-300 rounded p-1 shadow-xs">
              <span className="w-5 h-5 rounded-full bg-slate-800 text-white flex items-center justify-center text-[10px] font-bold">7</span>
              <span className="text-[9.5px] font-semibold text-slate-800" contentEditable suppressContentEditableWarning>
                Menerima Surat Suara dari Ketua KPPS
              </span>
            </div>

            <div className="flex items-center gap-2 bg-white border border-slate-300 rounded p-1 shadow-xs">
              <span className="w-5 h-5 rounded-full bg-slate-800 text-white flex items-center justify-center text-[10px] font-bold">8</span>
              <span className="text-[9.5px] font-semibold text-slate-800" contentEditable suppressContentEditableWarning>
                Masuk ke Bilik Suara Steril
              </span>
            </div>

            <div className="flex items-center gap-2 bg-white border border-slate-300 rounded p-1 shadow-xs">
              <span className="w-5 h-5 rounded-full bg-slate-800 text-white flex items-center justify-center text-[10px] font-bold">9</span>
              <span className="text-[9.5px] font-bold text-red-700" contentEditable suppressContentEditableWarning>
                Coblos 1 (Satu) Calon Kepala Desa
              </span>
            </div>

            <div className="flex items-center gap-2 bg-white border border-slate-300 rounded p-1 shadow-xs">
              <span className="w-5 h-5 rounded-full bg-slate-800 text-white flex items-center justify-center text-[10px] font-bold">10</span>
              <span className="text-[9.5px] font-semibold text-slate-800" contentEditable suppressContentEditableWarning>
                Lipat Kembali Surat Suara Rapi
              </span>
            </div>

            <div className="flex items-center gap-2 bg-white border border-slate-300 rounded p-1 shadow-xs">
              <span className="w-5 h-5 rounded-full bg-slate-800 text-white flex items-center justify-center text-[10px] font-bold">11</span>
              <span className="text-[9.5px] font-semibold text-slate-800" contentEditable suppressContentEditableWarning>
                Masukkan ke Kotak Suara
              </span>
            </div>

            <div className="flex items-center gap-2 bg-white border border-slate-300 rounded p-1 shadow-xs">
              <span className="w-5 h-5 rounded-full bg-slate-800 text-white flex items-center justify-center text-[10px] font-bold">12</span>
              <span className="text-[9.5px] font-semibold text-slate-800" contentEditable suppressContentEditableWarning>
                Celupkan Jari pada Botol Tinta
              </span>
            </div>
          </div>

          <div className="flex justify-center text-blue-900"><ArrowDown className="w-3.5 h-3.5" /></div>

          {/* Step 13 Final Celebration */}
          <div className="bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 border-2 border-amber-600 text-slate-950 rounded-xl p-2.5 text-center shadow-md flex items-center justify-center gap-3">
            <div className="w-8 h-8 rounded-full bg-slate-950 text-amber-300 flex items-center justify-center font-black text-sm shrink-0">13</div>
            <div
              contentEditable
              suppressContentEditableWarning
              className="text-xs sm:text-sm font-black uppercase tracking-wider font-sans"
            >
              SELESAI &mdash; HAK PILIH ANDA TELAH DIGUNAKAN UNTUK DESA {formData.inputNamaDesa}
            </div>
          </div>

        </div>

        {/* Alur Footer Note */}
        <footer className="mt-2 text-center text-[8.5px] text-slate-500 border-t border-slate-200 pt-1.5" contentEditable suppressContentEditableWarning>
          Ketentuan teknis pemungutan suara berpedoman pada Peraturan Bupati Tegal dan Tata Tertib Panitia Pilkades {formData.inputNamaDesa} Tahun {formData.inputTahun}.
        </footer>

      </div>
    </article>
  );
}
