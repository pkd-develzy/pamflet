import React from 'react';
import { usePoster } from '../../context/PosterContext';
import {
  UserCheck,
  FileCheck2,
  ListOrdered,
  Building2,
  IdCard,
  FileText,
  Vote,
  CheckCircle2,
  FoldHorizontal,
  Inbox,
  PenTool,
  PartyPopper,
  ArrowDown
} from 'lucide-react';

export default function AlurSheet() {
  const { formData } = usePoster();

  return (
    <article
      id="posterAlurContent"
      className="poster-sheet page-a4"
      spellCheck={false}
      style={{
        width: '210mm',
        height: '297mm',
        minWidth: '210mm',
        minHeight: '297mm',
        maxWidth: '210mm',
        maxHeight: '297mm',
        padding: '8mm',
        boxSizing: 'border-box',
        background: '#091528',
        color: '#ffffff',
        fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
    >
      {/* Outer Glow Inner Frame */}
      <div
        className="flex flex-col flex-1 justify-between rounded-xl p-3.5 relative overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, #0b1a33 0%, #0f274c 45%, #0a1b35 100%)',
          border: '2.5px solid #ffc700',
          boxShadow: '0 0 25px rgba(255,199,0,0.2), inset 0 0 15px rgba(0,0,0,0.4)',
          boxSizing: 'border-box'
        }}
      >
        {/* Background decorative radial lights */}
        <div
          style={{
            position: 'absolute', top: -80, right: -80, width: 300, height: 300,
            borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.25) 0%, transparent 70%)',
            pointerEvents: 'none'
          }}
        />
        <div
          style={{
            position: 'absolute', bottom: -80, left: -80, width: 300, height: 300,
            borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,199,0,0.15) 0%, transparent 70%)',
            pointerEvents: 'none'
          }}
        />

        {/* ─── 1. HEADER (Compact & Elegant) ─────────────────────────────────── */}
        <header
          className="rounded-xl px-3 py-2.5 flex items-center justify-between relative z-10 shrink-0"
          style={{
            background: 'linear-gradient(135deg, #07152b 0%, #112d59 50%, #0d2244 100%)',
            border: '1.5px solid rgba(255,199,0,0.7)',
            boxShadow: '0 4px 16px rgba(0,0,0,0.35)'
          }}
        >
          {/* Logo Pemda */}
          <div
            className="w-11 h-11 shrink-0 rounded-xl p-1 flex items-center justify-center"
            style={{
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.2)'
            }}
          >
            <img
              src={formData.logoPemdaUrl}
              alt="Logo Pemda"
              className="max-h-full max-w-full object-contain filter drop-shadow"
            />
          </div>

          {/* Title Center */}
          <div className="text-center flex-1 px-2">
            <div
              className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-cyan-300 leading-tight"
              contentEditable suppressContentEditableWarning
            >
              PANDUAN RESMI TATA CARA PEMUNGUTAN SUARA
            </div>
            <h1
              contentEditable
              suppressContentEditableWarning
              className="text-[13px] font-black uppercase tracking-wider leading-tight text-white mt-0.5"
              style={{ textShadow: '0 2px 6px rgba(0,0,0,0.5)' }}
            >
              ALUR PENDUDUK MENGGUNAKAN HAK PILIH
            </h1>
            <div className="flex items-center justify-center gap-1.5 mt-1">
              <span
                contentEditable
                suppressContentEditableWarning
                className="px-2.5 py-0.2 rounded-full font-black text-[10px] uppercase tracking-wider text-slate-950"
                style={{
                  background: 'linear-gradient(135deg, #ffe066 0%, #f59f00 100%)',
                  boxShadow: '0 2px 6px rgba(245,159,0,0.4)'
                }}
              >
                PILKADES DESA {formData.inputNamaDesa}
              </span>
              <span
                contentEditable
                suppressContentEditableWarning
                className="px-2 py-0.2 rounded-full font-black text-[10px] text-cyan-200 border border-cyan-400/40 bg-cyan-950/60"
              >
                TAHUN {formData.inputTahun}
              </span>
            </div>
          </div>

          {/* Logo Pilkades */}
          <div
            className="w-11 h-11 shrink-0 rounded-xl p-1 flex items-center justify-center"
            style={{
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.2)'
            }}
          >
            <img
              src={formData.logoPilkadesUrl}
              alt="Logo Pilkades"
              className="max-h-full max-w-full object-contain filter drop-shadow"
            />
          </div>
        </header>

        {/* ─── 2. FASE 1: SYARAT PEMILIH (2 Kolom 3D Card) ────────────────────── */}
        <div className="grid grid-cols-2 gap-2 mt-1.5 relative z-10 shrink-0">
          {/* Card 1 */}
          <div
            className="rounded-lg p-2 flex items-start gap-2"
            style={{
              background: 'linear-gradient(145deg, #132a4e 0%, #0d1e38 100%)',
              border: '1.2px solid #2563eb',
              boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
            }}
          >
            <div
              className="w-6 h-6 rounded-lg flex items-center justify-center font-black text-[11px] shrink-0 text-white"
              style={{
                background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                boxShadow: '0 2px 6px rgba(59,130,246,0.4)'
              }}
            >
              1
            </div>
            <div className="flex-1" contentEditable suppressContentEditableWarning>
              <div className="flex items-center gap-1">
                <UserCheck className="w-3 h-3 text-cyan-400" />
                <span className="font-extrabold text-[10px] text-white uppercase tracking-wide">
                  PENDUDUK DESA {formData.inputNamaDesa}
                </span>
              </div>
              <p className="text-[8.5px] text-slate-300 mt-0.5 leading-snug">
                WNI yang sah bertempat tinggal & terdaftar di wilayah Desa {formData.inputNamaDesa}.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="rounded-lg p-2 flex items-start gap-2"
            style={{
              background: 'linear-gradient(145deg, #132a4e 0%, #0d1e38 100%)',
              border: '1.2px solid #2563eb',
              boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
            }}
          >
            <div
              className="w-6 h-6 rounded-lg flex items-center justify-center font-black text-[11px] shrink-0 text-white"
              style={{
                background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                boxShadow: '0 2px 6px rgba(59,130,246,0.4)'
              }}
            >
              2
            </div>
            <div className="flex-1" contentEditable suppressContentEditableWarning>
              <div className="flex items-center gap-1">
                <FileCheck2 className="w-3 h-3 text-cyan-400" />
                <span className="font-extrabold text-[10px] text-white uppercase tracking-wide">
                  SYARAT HAK PILIH
                </span>
              </div>
              <ul className="text-[8px] text-slate-300 mt-0.5 space-y-0.2 leading-tight list-disc pl-2.5">
                <li>Usia 17+ atau sudah/pernah kawin.</li>
                <li>Domisili ≥ 6 bulan sebelum DPS.</li>
                <li>Hak pilih tidak sedang dicabut.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* ─── 3. FASE 2: STATUS DPT (Decision 3D Box) ────────────────────────── */}
        <div
          className="rounded-xl p-2 mt-1.5 relative z-10 shrink-0"
          style={{
            background: 'linear-gradient(145deg, #0e294b 0%, #091c33 100%)',
            border: '1.5px solid #06b6d4',
            boxShadow: '0 4px 12px rgba(6,182,212,0.12)'
          }}
        >
          <div className="grid grid-cols-12 gap-2 items-center">
            {/* Step 3 */}
            <div className="col-span-5 flex items-center gap-2">
              <div
                className="w-6 h-6 rounded-md flex items-center justify-center font-black text-[11px] shrink-0 text-slate-950"
                style={{
                  background: 'linear-gradient(135deg, #22d3ee 0%, #06b6d4 100%)',
                  boxShadow: '0 2px 6px rgba(34,211,238,0.4)'
                }}
              >
                3
              </div>
              <div contentEditable suppressContentEditableWarning>
                <div className="font-extrabold text-[9.5px] uppercase text-white flex items-center gap-1">
                  <ListOrdered className="w-3 h-3 text-cyan-400" />
                  Proses Daftar Pemilih
                </div>
                <div className="text-[8px] text-cyan-200 mt-0.2 font-semibold">
                  DPS &rarr; Validasi &rarr; <span className="text-amber-400 font-bold">DPT Sah</span>
                </div>
              </div>
            </div>

            {/* Step 4: Decision Branches */}
            <div className="col-span-7 grid grid-cols-2 gap-1.5">
              <div
                className="rounded-lg p-1.5 flex items-center gap-1.5"
                style={{
                  background: 'linear-gradient(135deg, rgba(5,150,105,0.25) 0%, rgba(6,95,70,0.35) 100%)',
                  border: '1px solid #10b981'
                }}
                contentEditable suppressContentEditableWarning
              >
                <span className="w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center font-black text-[8px] shrink-0">✓</span>
                <div>
                  <span className="font-black text-[8.5px] text-emerald-300 block uppercase leading-tight">TERDAFTAR DPT</span>
                  <span className="text-[7.5px] text-slate-200 block leading-tight">Dapat undangan C6 & siap ke TPS.</span>
                </div>
              </div>

              <div
                className="rounded-lg p-1.5 flex items-center gap-1.5"
                style={{
                  background: 'linear-gradient(135deg, rgba(220,38,38,0.2) 0%, rgba(153,27,27,0.3) 100%)',
                  border: '1px solid #ef4444'
                }}
                contentEditable suppressContentEditableWarning
              >
                <span className="w-4 h-4 rounded-full bg-red-500 text-white flex items-center justify-center font-black text-[8px] shrink-0">!</span>
                <div>
                  <span className="font-black text-[8.5px] text-red-300 block uppercase leading-tight">BELUM MASUK</span>
                  <span className="text-[7.5px] text-slate-200 block leading-tight">Lapor Panitia utk daftar DPTb.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ─── 4. FASE 3: 8 LANGKAH PEMUNGUTAN SUARA (Grid 4x2) ────────────────── */}
        <div className="mt-1.5 relative z-10 flex-1 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-1 shrink-0">
            <div className="flex items-center gap-1.5">
              <span className="px-2 py-0.2 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[8px] font-black uppercase tracking-wider">
                HARI PEMUNGUTAN SUARA
              </span>
              <span className="font-extrabold text-[10.5px] text-white uppercase tracking-wide">
                8 TATA CARA PENCOBLOSAN DI TPS
              </span>
            </div>
            <span className="text-[8.5px] text-amber-300 font-bold">07.00 – 13.00 WIB</span>
          </div>

          <div className="grid grid-cols-4 gap-1.5 flex-1">
            {/* Step 5 */}
            <div
              className="rounded-lg p-2 flex flex-col justify-between"
              style={{
                background: 'linear-gradient(145deg, #132742 0%, #0d1b2e 100%)',
                border: '1px solid rgba(255,255,255,0.15)',
                boxShadow: '0 3px 8px rgba(0,0,0,0.2)'
              }}
            >
              <div className="flex items-center justify-between">
                <span className="w-5 h-5 rounded-md bg-amber-400 text-slate-950 font-black text-[10px] flex items-center justify-center shadow">5</span>
                <Building2 className="w-3.5 h-3.5 text-amber-400" />
              </div>
              <div contentEditable suppressContentEditableWarning className="mt-1">
                <div className="font-extrabold text-[9.5px] text-white leading-tight">Hadir di TPS</div>
                <div className="text-[7.5px] text-slate-300 mt-0.5 leading-snug">Datang ke lokasi TPS sesuai kartu undangan.</div>
              </div>
            </div>

            {/* Step 6 */}
            <div
              className="rounded-lg p-2 flex flex-col justify-between"
              style={{
                background: 'linear-gradient(145deg, #132742 0%, #0d1b2e 100%)',
                border: '1px solid rgba(255,255,255,0.15)',
                boxShadow: '0 3px 8px rgba(0,0,0,0.2)'
              }}
            >
              <div className="flex items-center justify-between">
                <span className="w-5 h-5 rounded-md bg-amber-400 text-slate-950 font-black text-[10px] flex items-center justify-center shadow">6</span>
                <IdCard className="w-3.5 h-3.5 text-amber-400" />
              </div>
              <div contentEditable suppressContentEditableWarning className="mt-1">
                <div className="font-extrabold text-[9.5px] text-white leading-tight">Registrasi Form</div>
                <div className="text-[7.5px] text-slate-300 mt-0.5 leading-snug">Serahkan C6 & tunjukkan e-KTP ke KPPS.</div>
              </div>
            </div>

            {/* Step 7 */}
            <div
              className="rounded-lg p-2 flex flex-col justify-between"
              style={{
                background: 'linear-gradient(145deg, #132742 0%, #0d1b2e 100%)',
                border: '1px solid rgba(255,255,255,0.15)',
                boxShadow: '0 3px 8px rgba(0,0,0,0.2)'
              }}
            >
              <div className="flex items-center justify-between">
                <span className="w-5 h-5 rounded-md bg-amber-400 text-slate-950 font-black text-[10px] flex items-center justify-center shadow">7</span>
                <FileText className="w-3.5 h-3.5 text-amber-400" />
              </div>
              <div contentEditable suppressContentEditableWarning className="mt-1">
                <div className="font-extrabold text-[9.5px] text-white leading-tight">Terima Surat Suara</div>
                <div className="text-[7.5px] text-slate-300 mt-0.5 leading-snug">Pastikan fisik surat suara bersih & berttd.</div>
              </div>
            </div>

            {/* Step 8 */}
            <div
              className="rounded-lg p-2 flex flex-col justify-between"
              style={{
                background: 'linear-gradient(145deg, #132742 0%, #0d1b2e 100%)',
                border: '1px solid rgba(255,255,255,0.15)',
                boxShadow: '0 3px 8px rgba(0,0,0,0.2)'
              }}
            >
              <div className="flex items-center justify-between">
                <span className="w-5 h-5 rounded-md bg-amber-400 text-slate-950 font-black text-[10px] flex items-center justify-center shadow">8</span>
                <Vote className="w-3.5 h-3.5 text-amber-400" />
              </div>
              <div contentEditable suppressContentEditableWarning className="mt-1">
                <div className="font-extrabold text-[9.5px] text-white leading-tight">Masuk Bilik Suara</div>
                <div className="text-[7.5px] text-slate-300 mt-0.5 leading-snug">Bilik tertutup menjamin asas Rahasia & Bebas.</div>
              </div>
            </div>

            {/* Step 9 (Coblos Calon - Highlight Red Card) */}
            <div
              className="rounded-lg p-2 flex flex-col justify-between"
              style={{
                background: 'linear-gradient(145deg, #2a1515 0%, #1a0d0d 100%)',
                border: '1.2px solid #ef4444',
                boxShadow: '0 3px 8px rgba(239,68,68,0.25)'
              }}
            >
              <div className="flex items-center justify-between">
                <span className="w-5 h-5 rounded-md bg-red-500 text-white font-black text-[10px] flex items-center justify-center shadow">9</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-red-400" />
              </div>
              <div contentEditable suppressContentEditableWarning className="mt-1">
                <div className="font-extrabold text-[9.5px] text-red-300 leading-tight">Coblos 1 Calon</div>
                <div className="text-[7.5px] text-slate-300 mt-0.5 leading-snug">Coblos pada nomor urut, foto, atau nama.</div>
              </div>
            </div>

            {/* Step 10 */}
            <div
              className="rounded-lg p-2 flex flex-col justify-between"
              style={{
                background: 'linear-gradient(145deg, #132742 0%, #0d1b2e 100%)',
                border: '1px solid rgba(255,255,255,0.15)',
                boxShadow: '0 3px 8px rgba(0,0,0,0.2)'
              }}
            >
              <div className="flex items-center justify-between">
                <span className="w-5 h-5 rounded-md bg-amber-400 text-slate-950 font-black text-[10px] flex items-center justify-center shadow">10</span>
                <FoldHorizontal className="w-3.5 h-3.5 text-amber-400" />
              </div>
              <div contentEditable suppressContentEditableWarning className="mt-1">
                <div className="font-extrabold text-[9.5px] text-white leading-tight">Lipat Rapi</div>
                <div className="text-[7.5px] text-slate-300 mt-0.5 leading-snug">Lipat kembali surat suara sesuai lipatan awal.</div>
              </div>
            </div>

            {/* Step 11 */}
            <div
              className="rounded-lg p-2 flex flex-col justify-between"
              style={{
                background: 'linear-gradient(145deg, #132742 0%, #0d1b2e 100%)',
                border: '1px solid rgba(255,255,255,0.15)',
                boxShadow: '0 3px 8px rgba(0,0,0,0.2)'
              }}
            >
              <div className="flex items-center justify-between">
                <span className="w-5 h-5 rounded-md bg-amber-400 text-slate-950 font-black text-[10px] flex items-center justify-center shadow">11</span>
                <Inbox className="w-3.5 h-3.5 text-amber-400" />
              </div>
              <div contentEditable suppressContentEditableWarning className="mt-1">
                <div className="font-extrabold text-[9.5px] text-white leading-tight">Masukkan Kotak</div>
                <div className="text-[7.5px] text-slate-300 mt-0.5 leading-snug">Masukkan ke kotak suara resmi disaksikan KPPS.</div>
              </div>
            </div>

            {/* Step 12 */}
            <div
              className="rounded-lg p-2 flex flex-col justify-between"
              style={{
                background: 'linear-gradient(145deg, #132742 0%, #0d1b2e 100%)',
                border: '1px solid rgba(255,255,255,0.15)',
                boxShadow: '0 3px 8px rgba(0,0,0,0.2)'
              }}
            >
              <div className="flex items-center justify-between">
                <span className="w-5 h-5 rounded-md bg-amber-400 text-slate-950 font-black text-[10px] flex items-center justify-center shadow">12</span>
                <PenTool className="w-3.5 h-3.5 text-cyan-400" />
              </div>
              <div contentEditable suppressContentEditableWarning className="mt-1">
                <div className="font-extrabold text-[9.5px] text-cyan-300 leading-tight">Celup Jari Tinta</div>
                <div className="text-[7.5px] text-slate-300 mt-0.5 leading-snug">Celup satu jari tanda bukti telah memilih.</div>
              </div>
            </div>
          </div>
        </div>

        {/* ─── 5. FASE 4: SELESAI (Gold Hero Banner) ─────────────────────────── */}
        <div
          className="rounded-xl p-2.5 mt-1.5 flex items-center justify-between gap-2.5 relative z-10 shrink-0"
          style={{
            background: 'linear-gradient(135deg, #ffc700 0%, #f59f00 50%, #d97706 100%)',
            border: '1.5px solid #ffe066',
            boxShadow: '0 4px 14px rgba(245,159,0,0.3)'
          }}
        >
          <div className="w-7 h-7 rounded-lg bg-slate-950 text-amber-300 flex items-center justify-center font-black text-xs shrink-0 shadow">
            13
          </div>
          <div className="flex-1" contentEditable suppressContentEditableWarning>
            <div className="text-slate-950 font-black text-[10.5px] uppercase tracking-wide flex items-center gap-1">
              <PartyPopper className="w-3.5 h-3.5 text-slate-950" />
              SELESAI — HAK PILIH ANDA TELAH DIGUNAKAN UNTUK DESA {formData.inputNamaDesa}
            </div>
            <div className="text-slate-900 font-bold text-[8px] mt-0.2 leading-tight">
              Terima kasih telah berpartisipasi aktif mewujudkan Pemilihan Kepala Desa yang Demokratis, Jujur, dan Damai.
            </div>
          </div>
        </div>

        {/* ─── 6. FOOTER (Posko & Hotline) ────────────────────────────────────── */}
        <footer
          className="rounded-lg px-2.5 py-1.5 mt-1.5 flex items-center justify-between text-[8px] text-slate-300 border border-slate-700/60 relative z-10 shrink-0"
          style={{ background: 'rgba(7,21,43,0.85)' }}
          contentEditable suppressContentEditableWarning
        >
          <div className="flex items-center gap-1.5">
            <span className="font-bold text-amber-400">SEKRETARIAT:</span>
            <span>{formData.poskoAlamat}</span>
          </div>
          <div className="font-mono font-bold text-cyan-300">
            Hotline: {formData.inputHotline}
          </div>
        </footer>

      </div>
    </article>
  );
}
