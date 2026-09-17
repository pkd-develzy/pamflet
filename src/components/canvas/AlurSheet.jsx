import React from 'react';
import { usePoster } from '../../context/PosterContext';
import {
  IdCard,
  FileCheck2,
  Vote,
  Inbox,
  PenTool,
  Trophy,
  Building2,
  PhoneCall,
  ShieldCheck
} from 'lucide-react';

export default function AlurSheet() {
  const { formData } = usePoster();

  const steps3D = [
    {
      no: 1,
      title: 'Pendaftaran & KTP/KK',
      desc: 'Tunjukkan C6 & KTP/KK Berdomisili di Desa Kalisalak kepada petugas KPPS.',
      icon: <IdCard className="w-4 h-4 text-cyan-400" />,
      color: '#06b6d4',
      bgGrad: 'linear-gradient(135deg, rgba(6,182,212,0.15) 0%, rgba(8,145,178,0.25) 100%)'
    },
    {
      no: 2,
      title: 'Ambil Surat Suara',
      desc: 'Terima surat suara resmi, pastikan dalam kondisi baik & bertandatangan.',
      icon: <FileCheck2 className="w-4 h-4 text-blue-400" />,
      color: '#3b82f6',
      bgGrad: 'linear-gradient(135deg, rgba(59,130,246,0.15) 0%, rgba(29,78,216,0.25) 100%)'
    },
    {
      no: 3,
      title: 'Coblos di Bilik Suara',
      desc: 'Coblos 1 calon pilihan hati nurani pada nomor/foto/nama calon.',
      icon: <Vote className="w-4 h-4 text-amber-400" />,
      color: '#f59f00',
      bgGrad: 'linear-gradient(135deg, rgba(245,159,0,0.15) 0%, rgba(217,119,6,0.25) 100%)'
    },
    {
      no: 4,
      title: 'Masukkan ke Kotak',
      desc: 'Lipat rapi sesuai lipatan awal lalu masukkan ke kotak suara resmi.',
      icon: <Inbox className="w-4 h-4 text-red-400" />,
      color: '#ef4444',
      bgGrad: 'linear-gradient(135deg, rgba(239,68,68,0.15) 0%, rgba(185,28,28,0.25) 100%)'
    },
    {
      no: 5,
      title: 'Pencelupan Tinta',
      desc: 'Celupkan salah satu jari ke botol tinta bukti sah telah memilih.',
      icon: <PenTool className="w-4 h-4 text-purple-400" />,
      color: '#a855f7',
      bgGrad: 'linear-gradient(135deg, rgba(168,85,247,0.15) 0%, rgba(126,34,206,0.25) 100%)'
    },
    {
      no: 6,
      title: 'Hasil & Penetapan',
      desc: 'Suara Anda sah terhitung untuk menentukan Kepala Desa terpilih.',
      icon: <Trophy className="w-4 h-4 text-emerald-400" />,
      color: '#10b981',
      bgGrad: 'linear-gradient(135deg, rgba(16,185,129,0.15) 0%, rgba(5,150,105,0.25) 100%)'
    }
  ];

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
        padding: '6mm',
        boxSizing: 'border-box',
        background: '#060d1a',
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
        className="flex flex-col flex-1 justify-between rounded-2xl p-3 relative overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, #091933 0%, #0d2347 45%, #07142b 100%)',
          border: '2.5px solid #ffc700',
          boxShadow: '0 0 35px rgba(255,199,0,0.25), inset 0 0 20px rgba(0,0,0,0.6)',
          boxSizing: 'border-box'
        }}
      >
        {/* ─── 1. TOP HEADER ─────────────────────────────────────────────────── */}
        <header
          className="rounded-xl px-4 py-2 flex items-center justify-between relative z-10 shrink-0"
          style={{
            background: 'linear-gradient(135deg, #06152b 0%, #0f2b57 50%, #091c38 100%)',
            border: '1.5px solid rgba(255,199,0,0.7)',
            boxShadow: '0 4px 16px rgba(0,0,0,0.4)'
          }}
        >
          {/* Logo Pemda Left */}
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
          <div className="text-center flex-1 px-4">
            <div
              className="text-[9.5px] font-black uppercase tracking-[0.25em] text-cyan-300"
              contentEditable suppressContentEditableWarning
            >
              DIAGRAM 3D RESMI TATA CARA PEMUNGUTAN SUARA
            </div>
            <h1
              contentEditable
              suppressContentEditableWarning
              className="text-[16px] font-black uppercase tracking-wider leading-tight text-white mt-0.5"
              style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}
            >
              ALUR PENDUDUK MENGGUNAKAN HAK PILIH PILKADES {formData.inputTahun}
            </h1>
            <div className="flex items-center justify-center gap-2 mt-0.5">
              <span
                contentEditable
                suppressContentEditableWarning
                className="px-3 py-0.2 rounded-full font-black text-[10.5px] uppercase tracking-wider text-slate-950"
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
                className="text-[10.5px] font-bold text-slate-300 tracking-wide"
              >
                KEC. {formData.inputKecamatan} · KAB. {formData.inputKabupaten}
              </span>
            </div>
          </div>

          {/* Logo Pilkades Right */}
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

        {/* ─── 2. MAIN 3D ISOMETRIC FLOWCHART VISUAL STAGE ────────────────────── */}
        <div
          className="flex-1 my-2 rounded-xl relative overflow-hidden flex items-center justify-center"
          style={{
            background: '#040b17',
            border: '1.5px solid rgba(6,182,212,0.4)',
            boxShadow: '0 8px 24px rgba(0,0,0,0.5)'
          }}
        >
          <img
            src="/images/alur_3d_chart.jpg"
            alt="3D Isometric Alur Pemilihan Pilkades"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block'
            }}
          />
        </div>

        {/* ─── 3. STEP-BY-STEP 3D ACTION CARDS (6 Sequential Nodes) ──────────── */}
        <div className="grid grid-cols-6 gap-2 mb-1.5 shrink-0">
          {steps3D.map(step => (
            <div
              key={step.no}
              className="rounded-lg p-1.5 flex flex-col justify-between"
              style={{
                background: step.bgGrad,
                border: `1.2px solid ${step.color}60`,
                boxShadow: '0 4px 10px rgba(0,0,0,0.25)'
              }}
            >
              <div className="flex items-center justify-between">
                <span
                  className="w-4 h-4 rounded-md text-slate-950 font-black text-[9px] flex items-center justify-center shadow"
                  style={{ background: step.color }}
                >
                  {step.no}
                </span>
                {step.icon}
              </div>
              <div contentEditable suppressContentEditableWarning className="mt-1">
                <div
                  className="font-black text-[8.5px] uppercase leading-tight"
                  style={{ color: step.color }}
                >
                  {step.title}
                </div>
                <div className="text-[7px] text-slate-200 mt-0.5 leading-snug">
                  {step.desc}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ─── 4. BOTTOM FOOTER BAR ───────────────────────────────────────────── */}
        <footer
          className="rounded-lg px-3 py-1 flex items-center justify-between text-[8px] text-slate-400 border border-slate-700/50 shrink-0 relative z-10"
          style={{ background: 'rgba(5,15,31,0.9)' }}
          contentEditable suppressContentEditableWarning
        >
          <div className="flex items-center gap-2">
            <span className="font-bold text-amber-400 flex items-center gap-1">
              <Building2 className="w-3 h-3" />
              SEKRETARIAT:
            </span>
            <span className="text-slate-200">{formData.poskoAlamat}</span>
          </div>

          <div className="flex items-center gap-1 font-bold text-cyan-300">
            <PhoneCall className="w-3 h-3" />
            Hotline: {formData.inputHotline}
          </div>

          <div className="flex items-center gap-1 font-extrabold text-emerald-400 uppercase tracking-wider">
            <ShieldCheck className="w-3 h-3" />
            LUBER &amp; JURDIL
          </div>
        </footer>

      </div>
    </article>
  );
}
