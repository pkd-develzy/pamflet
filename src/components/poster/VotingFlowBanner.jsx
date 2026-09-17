import React from 'react';

export default function VotingFlowBanner() {
  return (
    <section className="w-full overflow-hidden rounded-md border border-slate-300 shadow-xs bg-white">
      <img
        src="/images/Tahapan.png"
        alt="Panduan Pemilih - Alur Lengkap Penduduk Menggunakan Hak Pilih pada Pilkades Serentak Desa Kalisalak 2026"
        className="w-full h-auto block object-contain select-none"
        style={{ imageRendering: '-webkit-optimize-contrast' }}
        loading="eager"
        decoding="sync"
      />
    </section>
  );
}
