import React from 'react';
import { usePoster } from '../../context/PosterContext';
import {
  UserCheck,
  FileCheck2,
  ListOrdered,
  HelpCircle,
  Building2,
  IdCard,
  FileText,
  Vote,
  CheckCircle2,
  FoldHorizontal,
  Inbox,
  PenTool,
  PartyPopper,
  ArrowRight,
  ArrowDown,
  AlertCircle
} from 'lucide-react';

export default function AlurSheet() {
  const { paperSize, formData } = usePoster();

  return (
    <article
      id="posterAlurContent"
      className={`poster-sheet page-${paperSize} flex flex-col justify-between`}
      spellCheck={false}
      style={{
        background: '#0b192e',
        color: '#ffffff',
        fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
      }}
    >
      {/* Outer Glow Border Frame */}
      <div
        className="flex flex-col flex-1 rounded-2xl p-5 md:p-6 relative overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, #0b1a33 0%, #0f274c 40%, #0b1c36 100%)',
          border: '3px solid #ffc700',
          boxShadow: '0 0 35px rgba(255,199,0,0.25), inset 0 0 20px rgba(0,0,0,0.5)'
        }}
      >
        {/* Background decorative mesh & lights */}
        <div
          style={{
            position: 'absolute', top: -120, right: -120, width: 450, height: 450,
            borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.2) 0%, transparent 70%)',
            pointerEvents: 'none'
          }}
        />
        <div
          style={{
            position: 'absolute', bottom: -100, left: -100, width: 400, height: 400,
            borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,199,0,0.12) 0%, transparent 70%)',
            pointerEvents: 'none'
          }}
        />

        {/* ─── 1. HEADER ──────────────────────────────────────────────────────── */}
        <header
          className="rounded-2xl p-4 md:p-5 flex items-center justify-between relative z-10 shrink-0"
          style={{
            background: 'linear-gradient(135deg, #07152b 0%, #112d59 50%, #0d2244 100%)',
            border: '2px solid rgba(255,199,0,0.6)',
            boxShadow: '0 10px 30px rgba(0,0,0,0.4), inset 0 1px 1px rgba(255,255,255,0.2)'
          }}
        >
          {/* Logo Pemda Left */}
          <div
            className="w-16 h-16 md:w-20 md:h-20 shrink-0 rounded-2xl p-2 flex items-center justify-center"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.02))',
              border: '1.5px solid rgba(255,255,255,0.2)',
              boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
            }}
          >
            <img
              src={formData.logoPemdaUrl}
              alt="Logo Pemda"
              className="max-h-full max-w-full object-contain filter drop-shadow"
            />
          </div>

          {/* Main Title Center */}
          <div className="text-center flex-1 px-3">
            <div
              className="text-[11px] md:text-xs font-extrabold uppercase tracking-[0.25em] text-cyan-300 mb-1"
              contentEditable suppressContentEditableWarning
            >
              PANDUAN RESMI TATA CARA PEMUNGUTAN SUARA
            </div>
            <h1
              contentEditable
              suppressContentEditableWarning
              className="text-base sm:text-xl md:text-2xl font-black uppercase tracking-wider leading-tight text-white"
              style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}
            >
              ALUR PENDUDUK MENGGUNAKAN HAK PILIH
            </h1>
            <div className="flex items-center justify-center gap-2 mt-2">
              <span
                contentEditable
                suppressContentEditableWarning
                className="px-3.5 py-0.5 rounded-full font-black text-xs md:text-sm uppercase tracking-widest text-slate-950"
                style={{
                  background: 'linear-gradient(135deg, #ffe066 0%, #f59f00 100%)',
                  boxShadow: '0 2px 10px rgba(245,159,0,0.5)'
                }}
              >
                PILKADES DESA {formData.inputNamaDesa}
              </span>
              <span
                contentEditable
                suppressContentEditableWarning
                className="px-3 py-0.5 rounded-full font-black text-xs md:text-sm text-cyan-200 border border-cyan-400/40 bg-cyan-950/60"
              >
                TAHUN {formData.inputTahun}
              </span>
            </div>
          </div>

          {/* Logo Pilkades Right */}
          <div
            className="w-16 h-16 md:w-20 md:h-20 shrink-0 rounded-2xl p-2 flex items-center justify-center"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.02))',
              border: '1.5px solid rgba(255,255,255,0.2)',
              boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
            }}
          >
            <img
              src={formData.logoPilkadesUrl}
              alt="Logo Pilkades"
              className="max-h-full max-w-full object-contain filter drop-shadow"
            />
          </div>
        </header>

        {/* ─── 2. FLOWCHART 3D BODY CONTAINER ─────────────────────────────────── */}
        <div className="flex-1 flex flex-col justify-between my-3 space-y-3 relative z-10">

          {/* ═══ FASE 1: SYARAT & DATA PEMILIH (2 COLUMNS 3D CARDS) ═════════════ */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            
            {/* Card 1: Kependudukan */}
            <div
              className="rounded-xl p-3 flex items-start gap-3 relative overflow-hidden"
              style={{
                background: 'linear-gradient(145deg, #132a4e 0%, #0d1e38 100%)',
                border: '1.5px solid #2563eb',
                boxShadow: '0 8px 20px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.1)'
              }}
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center font-black text-base shrink-0 text-white"
                style={{
                  background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                  boxShadow: '0 4px 10px rgba(59,130,246,0.4)'
                }}
              >
                1
              </div>
              <div className="flex-1" contentEditable suppressContentEditableWarning>
                <div className="flex items-center gap-2">
                  <UserCheck className="w-4 h-4 text-cyan-400" />
                  <span className="font-extrabold text-xs md:text-sm text-white uppercase tracking-wide">
                    PENDUDUK DESA {formData.inputNamaDesa}
                  </span>
                </div>
                <p className="text-[10px] md:text-[11px] text-slate-300 mt-1 leading-snug">
                  Warga Negara Indonesia yang secara sah dan resmi bertempat tinggal serta terdaftar di wilayah Desa {formData.inputNamaDesa}.
                </p>
              </div>
            </div>

            {/* Card 2: Syarat Pemilih */}
            <div
              className="rounded-xl p-3 flex items-start gap-3 relative overflow-hidden"
              style={{
                background: 'linear-gradient(145deg, #132a4e 0%, #0d1e38 100%)',
                border: '1.5px solid #2563eb',
                boxShadow: '0 8px 20px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.1)'
              }}
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center font-black text-base shrink-0 text-white"
                style={{
                  background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                  boxShadow: '0 4px 10px rgba(59,130,246,0.4)'
                }}
              >
                2
              </div>
              <div className="flex-1" contentEditable suppressContentEditableWarning>
                <div className="flex items-center gap-2">
                  <FileCheck2 className="w-4 h-4 text-cyan-400" />
                  <span className="font-extrabold text-xs md:text-sm text-white uppercase tracking-wide">
                    MEMENUHI SYARAT HAK PILIH
                  </span>
                </div>
                <ul className="text-[9.5px] md:text-[10px] text-slate-300 mt-1 space-y-0.5 leading-tight list-disc pl-3">
                  <li>Genap berusia 17 tahun atau sudah / pernah kawin.</li>
                  <li>Berdiam di desa sekurang-kurangnya 6 bulan sebelum pengesahan DPS.</li>
                  <li>Tidak sedang dicabut hak pilihnya oleh putusan pengadilan.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Connecting Indicator */}
          <div className="flex items-center justify-center gap-2 text-cyan-400">
            <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent flex-1" />
            <span className="text-[10px] uppercase font-bold tracking-widest text-cyan-300 flex items-center gap-1">
              Tahap Pemutakhiran Data <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
            </span>
            <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent flex-1" />
          </div>

          {/* ═══ FASE 2: STATUS PEMILIH & DPT DECISION 3D BOX ════════════════════ */}
          <div
            className="rounded-2xl p-3.5 relative overflow-hidden"
            style={{
              background: 'linear-gradient(145deg, #0e294b 0%, #091c33 100%)',
              border: '2px solid #06b6d4',
              boxShadow: '0 10px 25px rgba(6,182,212,0.15)'
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
              
              {/* Step 3: Proses DPT */}
              <div className="md:col-span-4 flex items-start gap-2.5">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center font-black text-sm shrink-0 text-slate-950"
                  style={{
                    background: 'linear-gradient(135deg, #22d3ee 0%, #06b6d4 100%)',
                    boxShadow: '0 2px 8px rgba(34,211,238,0.4)'
                  }}
                >
                  3
                </div>
                <div contentEditable suppressContentEditableWarning>
                  <div className="font-extrabold text-xs uppercase text-white flex items-center gap-1.5">
                    <ListOrdered className="w-3.5 h-3.5 text-cyan-400" />
                    Proses Daftar Pemilih
                  </div>
                  <div className="text-[10px] text-cyan-200 mt-1 font-semibold leading-tight">
                    DPS &rarr; Pemutakhiran &rarr; <span className="text-amber-400 font-bold">DPT Sah</span>
                  </div>
                </div>
              </div>

              {/* Step 4: Decision Status Branch */}
              <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-2">
                
                {/* Sudah Terdaftar */}
                <div
                  className="rounded-xl p-2.5 flex items-center gap-2.5"
                  style={{
                    background: 'linear-gradient(135deg, rgba(5,150,105,0.2) 0%, rgba(6,95,70,0.3) 100%)',
                    border: '1.5px solid #10b981'
                  }}
                  contentEditable suppressContentEditableWarning
                >
                  <div className="w-7 h-7 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-xs shrink-0 shadow">
                    ✓
                  </div>
                  <div>
                    <span className="font-black text-xs text-emerald-300 block uppercase">TERDAFTAR DALAM DPT</span>
                    <span className="text-[9.5px] text-slate-200 leading-tight block">Mendapat Surat Undangan (C6) & siap ke TPS.</span>
                  </div>
                </div>

                {/* Belum Terdaftar */}
                <div
                  className="rounded-xl p-2.5 flex items-center gap-2.5"
                  style={{
                    background: 'linear-gradient(135deg, rgba(220,38,38,0.15) 0%, rgba(153,27,27,0.25) 100%)',
                    border: '1.5px solid #ef4444'
                  }}
                  contentEditable suppressContentEditableWarning
                >
                  <div className="w-7 h-7 rounded-full bg-red-500 text-white flex items-center justify-center font-bold text-xs shrink-0 shadow">
                    !
                  </div>
                  <div>
                    <span className="font-black text-xs text-red-300 block uppercase">BELUM TERDAFTAR</span>
                    <span className="text-[9.5px] text-slate-200 leading-tight block">Segera lapor Panitia untuk masuk Daftar DPTb.</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* ═══ FASE 3: 8 LANGKAH DI TPS (GRID 4x2 3D ACTION CARDS) ════════════ */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[10px] font-black uppercase tracking-wider">
                  PELAKSANAAN HARI-H
                </span>
                <span className="font-extrabold text-xs md:text-sm text-white uppercase tracking-wide">
                  8 TATA CARA PEMUNGUTAN SUARA DI TPS
                </span>
              </div>
              <span className="text-[10px] text-slate-400 hidden sm:inline">Pukul 07.00 - 13.00 WIB</span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              
              {/* Step 5 */}
              <div
                className="rounded-xl p-2.5 flex flex-col justify-between"
                style={{
                  background: 'linear-gradient(145deg, #132742 0%, #0d1b2e 100%)',
                  border: '1.5px solid rgba(255,255,255,0.12)',
                  boxShadow: '0 6px 14px rgba(0,0,0,0.2)'
                }}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="w-6 h-6 rounded-lg bg-amber-400 text-slate-950 font-black text-xs flex items-center justify-center shadow">5</span>
                  <Building2 className="w-4 h-4 text-amber-400" />
                </div>
                <div contentEditable suppressContentEditableWarning>
                  <div className="font-extrabold text-[11px] text-white leading-tight">Hadir di TPS Tepat Waktu</div>
                  <div className="text-[9px] text-slate-300 mt-0.5">Datang ke TPS sesuai lokasi undangan (07.00 - 13.00 WIB).</div>
                </div>
              </div>

              {/* Step 6 */}
              <div
                className="rounded-xl p-2.5 flex flex-col justify-between"
                style={{
                  background: 'linear-gradient(145deg, #132742 0%, #0d1b2e 100%)',
                  border: '1.5px solid rgba(255,255,255,0.12)',
                  boxShadow: '0 6px 14px rgba(0,0,0,0.2)'
                }}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="w-6 h-6 rounded-lg bg-amber-400 text-slate-950 font-black text-xs flex items-center justify-center shadow">6</span>
                  <IdCard className="w-4 h-4 text-amber-400" />
                </div>
                <div contentEditable suppressContentEditableWarning>
                  <div className="font-extrabold text-[11px] text-white leading-tight">Registrasi Petugas</div>
                  <div className="text-[9px] text-slate-300 mt-0.5">Serahkan Surat Undangan (C6) & tunjukkan e-KTP / KTP-el.</div>
                </div>
              </div>

              {/* Step 7 */}
              <div
                className="rounded-xl p-2.5 flex flex-col justify-between"
                style={{
                  background: 'linear-gradient(145deg, #132742 0%, #0d1b2e 100%)',
                  border: '1.5px solid rgba(255,255,255,0.12)',
                  boxShadow: '0 6px 14px rgba(0,0,0,0.2)'
                }}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="w-6 h-6 rounded-lg bg-amber-400 text-slate-950 font-black text-xs flex items-center justify-center shadow">7</span>
                  <FileText className="w-4 h-4 text-amber-400" />
                </div>
                <div contentEditable suppressContentEditableWarning>
                  <div className="font-extrabold text-[11px] text-white leading-tight">Terima Surat Suara</div>
                  <div className="text-[9px] text-slate-300 mt-0.5">Periksa fisik surat suara dari KPPS pastikan bersih & berttd.</div>
                </div>
              </div>

              {/* Step 8 */}
              <div
                className="rounded-xl p-2.5 flex flex-col justify-between"
                style={{
                  background: 'linear-gradient(145deg, #132742 0%, #0d1b2e 100%)',
                  border: '1.5px solid rgba(255,255,255,0.12)',
                  boxShadow: '0 6px 14px rgba(0,0,0,0.2)'
                }}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="w-6 h-6 rounded-lg bg-amber-400 text-slate-950 font-black text-xs flex items-center justify-center shadow">8</span>
                  <Vote className="w-4 h-4 text-amber-400" />
                </div>
                <div contentEditable suppressContentEditableWarning>
                  <div className="font-extrabold text-[11px] text-white leading-tight">Masuk ke Bilik Suara</div>
                  <div className="text-[9px] text-slate-300 mt-0.5">Bilik tertutup menjamin asas Langsung, Umum, Bebas, Rahasia.</div>
                </div>
              </div>

              {/* Step 9 */}
              <div
                className="rounded-xl p-2.5 flex flex-col justify-between relative overflow-hidden"
                style={{
                  background: 'linear-gradient(145deg, #2a1515 0%, #1a0d0d 100%)',
                  border: '1.5px solid #ef4444',
                  boxShadow: '0 6px 14px rgba(239,68,68,0.2)'
                }}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="w-6 h-6 rounded-lg bg-red-500 text-white font-black text-xs flex items-center justify-center shadow">9</span>
                  <CheckCircle2 className="w-4 h-4 text-red-400" />
                </div>
                <div contentEditable suppressContentEditableWarning>
                  <div className="font-extrabold text-[11px] text-red-300 leading-tight">Coblos 1 (Satu) Calon</div>
                  <div className="text-[9px] text-slate-300 mt-0.5">Gunakan paku coblos pada nomor urut, foto, atau nama calon.</div>
                </div>
              </div>

              {/* Step 10 */}
              <div
                className="rounded-xl p-2.5 flex flex-col justify-between"
                style={{
                  background: 'linear-gradient(145deg, #132742 0%, #0d1b2e 100%)',
                  border: '1.5px solid rgba(255,255,255,0.12)',
                  boxShadow: '0 6px 14px rgba(0,0,0,0.2)'
                }}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="w-6 h-6 rounded-lg bg-amber-400 text-slate-950 font-black text-xs flex items-center justify-center shadow">10</span>
                  <FoldHorizontal className="w-4 h-4 text-amber-400" />
                </div>
                <div contentEditable suppressContentEditableWarning>
                  <div className="font-extrabold text-[11px] text-white leading-tight">Lipat Surat Suara</div>
                  <div className="text-[9px] text-slate-300 mt-0.5">Lipat kembali surat suara dengan rapi sesuai lipatan awal.</div>
                </div>
              </div>

              {/* Step 11 */}
              <div
                className="rounded-xl p-2.5 flex flex-col justify-between"
                style={{
                  background: 'linear-gradient(145deg, #132742 0%, #0d1b2e 100%)',
                  border: '1.5px solid rgba(255,255,255,0.12)',
                  boxShadow: '0 6px 14px rgba(0,0,0,0.2)'
                }}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="w-6 h-6 rounded-lg bg-amber-400 text-slate-950 font-black text-xs flex items-center justify-center shadow">11</span>
                  <Inbox className="w-4 h-4 text-amber-400" />
                </div>
                <div contentEditable suppressContentEditableWarning>
                  <div className="font-extrabold text-[11px] text-white leading-tight">Masukkan ke Kotak</div>
                  <div className="text-[9px] text-slate-300 mt-0.5">Masukkan surat suara ke dalam kotak suara disaksikan petugas.</div>
                </div>
              </div>

              {/* Step 12 */}
              <div
                className="rounded-xl p-2.5 flex flex-col justify-between"
                style={{
                  background: 'linear-gradient(145deg, #132742 0%, #0d1b2e 100%)',
                  border: '1.5px solid rgba(255,255,255,0.12)',
                  boxShadow: '0 6px 14px rgba(0,0,0,0.2)'
                }}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="w-6 h-6 rounded-lg bg-amber-400 text-slate-950 font-black text-xs flex items-center justify-center shadow">12</span>
                  <PenTool className="w-4 h-4 text-cyan-400" />
                </div>
                <div contentEditable suppressContentEditableWarning>
                  <div className="font-extrabold text-[11px] text-cyan-300 leading-tight">Celup Jari ke Tinta</div>
                  <div className="text-[9px] text-slate-300 mt-0.5">Celupkan satu jari ke botol tinta khusus sebagai tanda telah memilih.</div>
                </div>
              </div>

            </div>
          </div>

          {/* ═══ FASE 4: SELESAI & HAK PILIH TERSALURKAN (3D GOLD HERO BANNER) ═ */}
          <div
            className="rounded-2xl p-3 md:p-3.5 flex items-center justify-between gap-3 relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #ffc700 0%, #f59f00 50%, #d97706 100%)',
              border: '2px solid #ffe066',
              boxShadow: '0 10px 25px rgba(245,159,0,0.35)'
            }}
          >
            <div className="w-10 h-10 rounded-xl bg-slate-950 text-amber-300 flex items-center justify-center font-black text-lg shrink-0 shadow-md">
              13
            </div>
            <div className="flex-1" contentEditable suppressContentEditableWarning>
              <div className="text-slate-950 font-black text-xs md:text-sm uppercase tracking-wide flex items-center gap-1.5">
                <PartyPopper className="w-4 h-4 text-slate-950" />
                SELESAI — HAK PILIH ANDA TELAH DIGUNAKAN UNTUK DESA {formData.inputNamaDesa}
              </div>
              <div className="text-slate-900 font-bold text-[9.5px] md:text-[10.5px] mt-0.5">
                Terima kasih atas partisipasi aktif Anda dalam mewujudkan Pemilihan Kepala Desa yang Demokratis, Jujur, dan Damai.
              </div>
            </div>
          </div>

        </div>

        {/* ─── 3. FOOTER ──────────────────────────────────────────────────────── */}
        <footer
          className="rounded-xl p-2.5 flex items-center justify-between text-[9px] md:text-[10px] text-slate-300 border border-slate-700/60 shrink-0"
          style={{ background: 'rgba(7,21,43,0.8)' }}
          contentEditable suppressContentEditableWarning
        >
          <div className="flex items-center gap-2">
            <span className="font-bold text-amber-400">PANITIA PILKADES:</span>
            <span>{formData.poskoAlamat}</span>
          </div>
          <div className="flex items-center gap-2 font-mono font-bold text-cyan-300">
            <span>Hotline: {formData.inputHotline}</span>
          </div>
        </footer>

      </div>
    </article>
  );
}
