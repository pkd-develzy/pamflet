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
  ArrowRight,
  ShieldCheck,
  PhoneCall
} from 'lucide-react';

export default function AlurSheet() {
  const { formData } = usePoster();

  return (
    <article
      id="posterAlurContent"
      className="poster-sheet alur-horizontal-a4"
      spellCheck={false}
      style={{
        width: '297mm',
        height: '210mm',
        minWidth: '297mm',
        minHeight: '210mm',
        maxWidth: '297mm',
        maxHeight: '210mm',
        padding: '7mm',
        boxSizing: 'border-box',
        background: '#071326',
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
        className="flex flex-col flex-1 justify-between rounded-2xl p-4 relative overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, #0a1b38 0%, #0d2347 45%, #08162e 100%)',
          border: '2.5px solid #ffc700',
          boxShadow: '0 0 30px rgba(255,199,0,0.22), inset 0 0 20px rgba(0,0,0,0.5)',
          boxSizing: 'border-box'
        }}
      >
        {/* Background decorative radial lights */}
        <div
          style={{
            position: 'absolute', top: -100, right: 200, width: 450, height: 450,
            borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.2) 0%, transparent 70%)',
            pointerEvents: 'none'
          }}
        />
        <div
          style={{
            position: 'absolute', bottom: -100, left: 100, width: 450, height: 450,
            borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,199,0,0.15) 0%, transparent 70%)',
            pointerEvents: 'none'
          }}
        />

        {/* ─── 1. TOP HEADER (Landscape Wide Bar) ─────────────────────────────── */}
        <header
          className="rounded-xl px-4 py-2 flex items-center justify-between relative z-10 shrink-0"
          style={{
            background: 'linear-gradient(135deg, #06152b 0%, #0f2b57 50%, #091c38 100%)',
            border: '1.5px solid rgba(255,199,0,0.7)',
            boxShadow: '0 6px 20px rgba(0,0,0,0.35)'
          }}
        >
          {/* Logo Pemda Left */}
          <div
            className="w-12 h-12 shrink-0 rounded-xl p-1 flex items-center justify-center"
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
          <div className="text-center flex-1 px-4">
            <div
              className="text-[10px] font-black uppercase tracking-[0.25em] text-cyan-300"
              contentEditable suppressContentEditableWarning
            >
              BAGAN ALUR RESMI TATA CARA PEMUNGUTAN SUARA
            </div>
            <h1
              contentEditable
              suppressContentEditableWarning
              className="text-[17px] font-black uppercase tracking-wider leading-tight text-white mt-0.5"
              style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}
            >
              ALUR PENDUDUK MENGGUNAKAN HAK PILIH PADA PILKADES {formData.inputTahun}
            </h1>
            <div className="flex items-center justify-center gap-2 mt-0.5">
              <span
                contentEditable
                suppressContentEditableWarning
                className="px-3 py-0.2 rounded-full font-black text-[11px] uppercase tracking-wider text-slate-950"
                style={{
                  background: 'linear-gradient(135deg, #ffe066 0%, #f59f00 100%)',
                  boxShadow: '0 2px 8px rgba(245,159,0,0.4)'
                }}
              >
                DESA {formData.inputNamaDesa}
              </span>
              <span
                contentEditable
                suppressContentEditableWarning
                className="text-[11px] font-bold text-slate-300 tracking-wide"
              >
                KEC. {formData.inputKecamatan} · KAB. {formData.inputKabupaten}
              </span>
            </div>
          </div>

          {/* Logo Pilkades Right */}
          <div
            className="w-12 h-12 shrink-0 rounded-xl p-1 flex items-center justify-center"
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

        {/* ─── 2. MAIN HORIZONTAL 3-STAGE PIPELINE BODY ───────────────────────── */}
        <div className="flex-1 flex items-stretch gap-2.5 my-2.5 relative z-10">

          {/* ════ STAGE 1: SYARAT & STATUS DPT (Left Column ~27%) ══════════════ */}
          <div
            className="flex flex-col justify-between rounded-xl p-2.5"
            style={{
              width: '27%',
              background: 'linear-gradient(160deg, #0d2244 0%, #08162d 100%)',
              border: '1.5px solid #2563eb',
              boxShadow: '0 6px 18px rgba(0,0,0,0.25)'
            }}
          >
            {/* Stage Tag */}
            <div className="flex items-center gap-1.5 pb-1.5 border-b border-blue-500/30">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span className="font-black text-[10.5px] uppercase tracking-wider text-blue-300">
                FASE 1: SYARAT &amp; STATUS DPT
              </span>
            </div>

            {/* Step 1 */}
            <div
              className="rounded-lg p-2 flex items-start gap-2"
              style={{
                background: 'linear-gradient(135deg, rgba(37,99,235,0.15) 0%, rgba(30,58,138,0.25) 100%)',
                border: '1px solid rgba(59,130,246,0.4)'
              }}
            >
              <span className="w-5 h-5 rounded-md bg-blue-500 text-white font-black text-[10px] flex items-center justify-center shrink-0 shadow">1</span>
              <div className="flex-1" contentEditable suppressContentEditableWarning>
                <div className="flex items-center gap-1 font-bold text-[10px] text-white uppercase">
                  <UserCheck className="w-3 h-3 text-cyan-400" />
                  Penduduk Desa
                </div>
                <div className="text-[8px] text-slate-300 mt-0.5 leading-snug">WNI yang sah &amp; resmi berdomisili di Desa {formData.inputNamaDesa}.</div>
              </div>
            </div>

            {/* Step 2 */}
            <div
              className="rounded-lg p-2 flex items-start gap-2"
              style={{
                background: 'linear-gradient(135deg, rgba(37,99,235,0.15) 0%, rgba(30,58,138,0.25) 100%)',
                border: '1px solid rgba(59,130,246,0.4)'
              }}
            >
              <span className="w-5 h-5 rounded-md bg-blue-500 text-white font-black text-[10px] flex items-center justify-center shrink-0 shadow">2</span>
              <div className="flex-1" contentEditable suppressContentEditableWarning>
                <div className="flex items-center gap-1 font-bold text-[10px] text-white uppercase">
                  <FileCheck2 className="w-3 h-3 text-cyan-400" />
                  Syarat Hak Pilih
                </div>
                <ul className="text-[7.8px] text-slate-300 mt-0.5 space-y-0.2 leading-tight list-disc pl-2.5">
                  <li>Genap 17 th / pernah kawin.</li>
                  <li>Domisili ≥ 6 bulan sebelum DPS.</li>
                  <li>Hak pilih tidak dicabut.</li>
                </ul>
              </div>
            </div>

            {/* Step 3 & 4: DPT Decision Box */}
            <div
              className="rounded-lg p-2"
              style={{
                background: 'linear-gradient(135deg, rgba(6,182,212,0.12) 0%, rgba(8,145,178,0.2) 100%)',
                border: '1px solid rgba(6,182,212,0.5)'
              }}
            >
              <div className="flex items-center justify-between mb-1" contentEditable suppressContentEditableWarning>
                <div className="flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-md bg-cyan-500 text-slate-950 font-black text-[10px] flex items-center justify-center shadow">3</span>
                  <span className="font-bold text-[9.5px] text-cyan-200 uppercase">Status Daftar Pemilih (DPT)</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-1.5 mt-1.5">
                <div
                  className="rounded-md p-1.5 text-center"
                  style={{ background: 'rgba(16,185,129,0.2)', border: '1px solid #10b981' }}
                  contentEditable suppressContentEditableWarning
                >
                  <span className="text-[8px] font-black text-emerald-300 block">✓ TERDAFTAR</span>
                  <span className="text-[7px] text-slate-200 block leading-tight mt-0.5">Dapat Undangan C6</span>
                </div>
                <div
                  className="rounded-md p-1.5 text-center"
                  style={{ background: 'rgba(239,68,68,0.2)', border: '1px solid #ef4444' }}
                  contentEditable suppressContentEditableWarning
                >
                  <span className="text-[8px] font-black text-red-300 block">! BELUM</span>
                  <span className="text-[7px] text-slate-200 block leading-tight mt-0.5">Lapor Layanan DPTb</span>
                </div>
              </div>
            </div>
          </div>

          {/* Connector Arrow 1 */}
          <div className="flex items-center justify-center shrink-0">
            <div className="w-7 h-7 rounded-full bg-blue-900 border border-amber-400/60 flex items-center justify-center text-amber-400 shadow-md">
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* ════ STAGE 2: 8 TATA CARA PENCOBLOSAN TPS (Center Column ~47%) ══════ */}
          <div
            className="flex-1 flex flex-col justify-between rounded-xl p-2.5"
            style={{
              background: 'linear-gradient(160deg, #112644 0%, #0b1a30 100%)',
              border: '1.5px solid #f59f00',
              boxShadow: '0 6px 18px rgba(0,0,0,0.25)'
            }}
          >
            {/* Stage Tag */}
            <div className="flex items-center justify-between pb-1.5 border-b border-amber-500/30">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span className="font-black text-[10.5px] uppercase tracking-wider text-amber-300">
                  FASE 2: 8 TATA CARA PENCOBLOSAN DI TPS
                </span>
              </div>
              <span className="text-[8.5px] font-bold text-amber-200">WAKTU: 07.00 – 13.00 WIB</span>
            </div>

            {/* Grid 4x2 Cards */}
            <div className="grid grid-cols-4 gap-1.5 my-1 flex-1">
              
              {/* Step 5 */}
              <div
                className="rounded-lg p-1.5 flex flex-col justify-between"
                style={{
                  background: 'linear-gradient(145deg, #162f52 0%, #0f2038 100%)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.2)'
                }}
              >
                <div className="flex items-center justify-between">
                  <span className="w-4 h-4 rounded bg-amber-400 text-slate-950 font-black text-[9px] flex items-center justify-center">5</span>
                  <Building2 className="w-3 h-3 text-amber-400" />
                </div>
                <div contentEditable suppressContentEditableWarning className="mt-1">
                  <div className="font-extrabold text-[8.5px] text-white leading-tight">Hadir di TPS</div>
                  <div className="text-[6.8px] text-slate-300 mt-0.5 leading-snug">Datang sesuai lokasi TPS undangan.</div>
                </div>
              </div>

              {/* Step 6 */}
              <div
                className="rounded-lg p-1.5 flex flex-col justify-between"
                style={{
                  background: 'linear-gradient(145deg, #162f52 0%, #0f2038 100%)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.2)'
                }}
              >
                <div className="flex items-center justify-between">
                  <span className="w-4 h-4 rounded bg-amber-400 text-slate-950 font-black text-[9px] flex items-center justify-center">6</span>
                  <IdCard className="w-3 h-3 text-amber-400" />
                </div>
                <div contentEditable suppressContentEditableWarning className="mt-1">
                  <div className="font-extrabold text-[8.5px] text-white leading-tight">Registrasi C6</div>
                  <div className="text-[6.8px] text-slate-300 mt-0.5 leading-snug">Tunjukkan form C6 &amp; e-KTP ke KPPS.</div>
                </div>
              </div>

              {/* Step 7 */}
              <div
                className="rounded-lg p-1.5 flex flex-col justify-between"
                style={{
                  background: 'linear-gradient(145deg, #162f52 0%, #0f2038 100%)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.2)'
                }}
              >
                <div className="flex items-center justify-between">
                  <span className="w-4 h-4 rounded bg-amber-400 text-slate-950 font-black text-[9px] flex items-center justify-center">7</span>
                  <FileText className="w-3 h-3 text-amber-400" />
                </div>
                <div contentEditable suppressContentEditableWarning className="mt-1">
                  <div className="font-extrabold text-[8.5px] text-white leading-tight">Terima Surat Suara</div>
                  <div className="text-[6.8px] text-slate-300 mt-0.5 leading-snug">Pastikan fisik surat bersih &amp; berttd.</div>
                </div>
              </div>

              {/* Step 8 */}
              <div
                className="rounded-lg p-1.5 flex flex-col justify-between"
                style={{
                  background: 'linear-gradient(145deg, #162f52 0%, #0f2038 100%)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.2)'
                }}
              >
                <div className="flex items-center justify-between">
                  <span className="w-4 h-4 rounded bg-amber-400 text-slate-950 font-black text-[9px] flex items-center justify-center">8</span>
                  <Vote className="w-3 h-3 text-amber-400" />
                </div>
                <div contentEditable suppressContentEditableWarning className="mt-1">
                  <div className="font-extrabold text-[8.5px] text-white leading-tight">Masuk Bilik Suara</div>
                  <div className="text-[6.8px] text-slate-300 mt-0.5 leading-snug">Bilik tertutup menjamin asas Rahasia.</div>
                </div>
              </div>

              {/* Step 9 (Coblos 1 Calon - Red 3D Card) */}
              <div
                className="rounded-lg p-1.5 flex flex-col justify-between"
                style={{
                  background: 'linear-gradient(145deg, #2b1414 0%, #170a0a 100%)',
                  border: '1.2px solid #ef4444',
                  boxShadow: '0 2px 8px rgba(239,68,68,0.3)'
                }}
              >
                <div className="flex items-center justify-between">
                  <span className="w-4 h-4 rounded bg-red-500 text-white font-black text-[9px] flex items-center justify-center">9</span>
                  <CheckCircle2 className="w-3 h-3 text-red-400" />
                </div>
                <div contentEditable suppressContentEditableWarning className="mt-1">
                  <div className="font-extrabold text-[8.5px] text-red-300 leading-tight">Coblos 1 Calon</div>
                  <div className="text-[6.8px] text-slate-300 mt-0.5 leading-snug">Coblos pada nomor, foto, atau nama.</div>
                </div>
              </div>

              {/* Step 10 */}
              <div
                className="rounded-lg p-1.5 flex flex-col justify-between"
                style={{
                  background: 'linear-gradient(145deg, #162f52 0%, #0f2038 100%)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.2)'
                }}
              >
                <div className="flex items-center justify-between">
                  <span className="w-4 h-4 rounded bg-amber-400 text-slate-950 font-black text-[9px] flex items-center justify-center">10</span>
                  <FoldHorizontal className="w-3 h-3 text-amber-400" />
                </div>
                <div contentEditable suppressContentEditableWarning className="mt-1">
                  <div className="font-extrabold text-[8.5px] text-white leading-tight">Lipat Rapi</div>
                  <div className="text-[6.8px] text-slate-300 mt-0.5 leading-snug">Lipat kembali sesuai lipatan awal.</div>
                </div>
              </div>

              {/* Step 11 */}
              <div
                className="rounded-lg p-1.5 flex flex-col justify-between"
                style={{
                  background: 'linear-gradient(145deg, #162f52 0%, #0f2038 100%)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.2)'
                }}
              >
                <div className="flex items-center justify-between">
                  <span className="w-4 h-4 rounded bg-amber-400 text-slate-950 font-black text-[9px] flex items-center justify-center">11</span>
                  <Inbox className="w-3 h-3 text-amber-400" />
                </div>
                <div contentEditable suppressContentEditableWarning className="mt-1">
                  <div className="font-extrabold text-[8.5px] text-white leading-tight">Masukkan Kotak</div>
                  <div className="text-[6.8px] text-slate-300 mt-0.5 leading-snug">Masukkan ke kotak disaksikan KPPS.</div>
                </div>
              </div>

              {/* Step 12 */}
              <div
                className="rounded-lg p-1.5 flex flex-col justify-between"
                style={{
                  background: 'linear-gradient(145deg, #162f52 0%, #0f2038 100%)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.2)'
                }}
              >
                <div className="flex items-center justify-between">
                  <span className="w-4 h-4 rounded bg-amber-400 text-slate-950 font-black text-[9px] flex items-center justify-center">12</span>
                  <PenTool className="w-3 h-3 text-cyan-400" />
                </div>
                <div contentEditable suppressContentEditableWarning className="mt-1">
                  <div className="font-extrabold text-[8.5px] text-cyan-300 leading-tight">Celup Jari Tinta</div>
                  <div className="text-[6.8px] text-slate-300 mt-0.5 leading-snug">Tanda resmi Anda telah memilih.</div>
                </div>
              </div>

            </div>
          </div>

          {/* Connector Arrow 2 */}
          <div className="flex items-center justify-center shrink-0">
            <div className="w-7 h-7 rounded-full bg-emerald-950 border border-emerald-400/60 flex items-center justify-center text-emerald-400 shadow-md">
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* ════ STAGE 3: SELESAI & INFORMASI POSKO (Right Column ~24%) ═══════ */}
          <div
            className="flex flex-col justify-between rounded-xl p-2.5"
            style={{
              width: '24%',
              background: 'linear-gradient(160deg, #09261f 0%, #051a14 100%)',
              border: '1.5px solid #10b981',
              boxShadow: '0 6px 18px rgba(0,0,0,0.25)'
            }}
          >
            {/* Stage Tag */}
            <div className="flex items-center gap-1.5 pb-1.5 border-b border-emerald-500/30">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-black text-[10.5px] uppercase tracking-wider text-emerald-300">
                FASE 3: SUKSES &amp; SELESAI
              </span>
            </div>

            {/* Step 13: Gold Success Box */}
            <div
              className="rounded-lg p-2 text-center"
              style={{
                background: 'linear-gradient(135deg, #ffc700 0%, #f59f00 50%, #d97706 100%)',
                border: '1.5px solid #ffe066',
                boxShadow: '0 4px 12px rgba(245,159,0,0.35)'
              }}
            >
              <div className="flex items-center justify-center gap-1 text-slate-950 font-black text-[10.5px] uppercase">
                <PartyPopper className="w-3.5 h-3.5" />
                HAK PILIH SAH DIGUNAKAN!
              </div>
              <p className="text-slate-950 font-extrabold text-[7.5px] mt-0.5 leading-snug">
                Satu suara Anda menentukan masa depan Desa {formData.inputNamaDesa} 6 tahun ke depan.
              </p>
            </div>

            {/* Info Posko & Hotline Card */}
            <div
              className="rounded-lg p-2"
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.15)'
              }}
            >
              <div className="flex items-center gap-1 text-[8.5px] font-bold text-amber-300 uppercase">
                <Building2 className="w-3 h-3" />
                Posko Sekretariat:
              </div>
              <div className="text-[7.5px] text-slate-300 mt-0.5 leading-tight">
                {formData.poskoAlamat}
              </div>

              <div className="flex items-center gap-1 text-[8px] font-bold text-cyan-300 mt-1.5 pt-1.5 border-t border-slate-700/60">
                <PhoneCall className="w-3 h-3 text-cyan-400" />
                Hotline: {formData.inputHotline}
              </div>
            </div>

            {/* Asas Tag */}
            <div className="flex items-center justify-center gap-1 text-[7.5px] text-emerald-300 font-extrabold uppercase tracking-wider text-center bg-emerald-950/80 py-1 rounded border border-emerald-500/30">
              <ShieldCheck className="w-3 h-3" />
              PILKADES LUBER JURDIL
            </div>
          </div>

        </div>

        {/* ─── 3. BOTTOM FOOTER BAR ───────────────────────────────────────────── */}
        <footer
          className="rounded-lg px-3 py-1 flex items-center justify-between text-[8px] text-slate-400 border border-slate-700/50 shrink-0 relative z-10"
          style={{ background: 'rgba(7,21,43,0.85)' }}
          contentEditable suppressContentEditableWarning
        >
          <div className="flex items-center gap-2">
            <span className="font-bold text-amber-400">PANITIA PEMILIHAN KEPALA DESA {formData.inputNamaDesa}</span>
            <span>·</span>
            <span>KECAMATAN {formData.inputKecamatan}, KABUPATEN {formData.inputKabupaten}</span>
          </div>
          <div className="font-semibold text-slate-300">
            Tata Tertib Berdasarkan Peraturan Bupati &amp; Keputusan Panitia Pilkades {formData.inputTahun}
          </div>
        </footer>

      </div>
    </article>
  );
}
