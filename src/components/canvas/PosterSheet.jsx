import React from 'react';
import { usePoster } from '../../context/PosterContext';
import PosterHeader from '../poster/PosterHeader';
import VotingFlowBanner from '../poster/VotingFlowBanner';
import BannerHariH from '../poster/BannerHariH';
import PanitiaShowcase from '../poster/PanitiaShowcase';
import TableBlock from '../poster/TableBlock';
import QrCard from '../poster/QrCard';
import PosterFooter from '../poster/PosterFooter';
import { DEFAULT_POSTER_DATA } from '../../data/defaultData';

export default function PosterSheet() {
  const { paperSize, formData } = usePoster();

  // Exact data definitions from the official reference poster
  const pencalonanRows = (formData.tahapanPencalonan && formData.tahapanPencalonan.length >= 10)
    ? formData.tahapanPencalonan
    : DEFAULT_POSTER_DATA.tahapanPencalonan;

  const pendataanRows = (formData.tahapanPendataan && formData.tahapanPendataan.length >= 8)
    ? formData.tahapanPendataan
    : DEFAULT_POSTER_DATA.tahapanPendataan;

  const kampanyeRows = (formData.tahapanKampanye && formData.tahapanKampanye.length >= 3)
    ? formData.tahapanKampanye
    : DEFAULT_POSTER_DATA.tahapanKampanye;

  const pemungutanRows = (formData.tahapanPemungutan && formData.tahapanPemungutan.length >= 2)
    ? formData.tahapanPemungutan
    : DEFAULT_POSTER_DATA.tahapanPemungutan;

  return (
    <article
      id="posterContent"
      className={`poster-sheet page-${paperSize} flex flex-col`}
      spellCheck={false}
    >
      {/* Official Government Double-Rule Frame (Navy Outer + Gold Inner Line) */}
      <div className="border-[3px] border-[#1e3a8a] rounded-xl p-1 bg-[#1e3a8a]/5 flex flex-col flex-1 shadow-md relative">
        <div className="poster-inner-frame border-[1.5px] border-amber-500/80 rounded-lg p-2 sm:p-2.5 bg-white flex flex-col flex-1 gap-1.5 shadow-xs relative overflow-hidden">

          {/* Authentic Government Seal Watermark (Ultra-fine 3.5% Opacity) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
            <img
              src={formData.logoPemdaUrl}
              alt="Watermark Lambang Daerah Resmi"
              className="w-[360px] h-[360px] sm:w-[460px] sm:h-[460px] object-contain opacity-[0.035] filter grayscale contrast-125"
            />
          </div>

          <div className="poster-content-flow relative z-10 flex flex-col flex-1 gap-1.5">
            {/* 1. Header / Kop (Dark Navy Bar with Logos & Decree Number) */}
            <PosterHeader />

            {/* 2. Voting Flow Infografis Banner (Tahapan.png) */}
            <VotingFlowBanner />

            {/* 3. Banner Hari-H (Split White Calendar Info / Sovereign Maroon Gunakan Hak Pilih) */}
            <BannerHariH />

            {/* 4. Susunan Panitia Showcase (Pill & 9 Horizontal Cards) */}
            <PanitiaShowcase />

            {/* 5. Two-Column Tables Section - Perfectly Balanced with Zero Gaps */}
            <div className="poster-tables-section flex-1 grid grid-cols-2 gap-2 my-0.5 min-h-0 items-stretch">
              
              {/* Kolom Kiri: Pencalonan (10 items) + Pendataan (8 items) -> Fills 100% height */}
              <div id="tableColLeft" className="col-left flex flex-col gap-2 h-full min-h-0">
                <TableBlock
                  blockId="blockPencalonan"
                  title="TAHAPAN PENCALONAN KEPALA DESA"
                  theme="blue"
                  headers={['NO', 'KEGIATAN PENCALONAN', 'WAKTU (BULAN)']}
                  rows={pencalonanRows}
                  className="flex-[1.25] min-h-0"
                />

                <TableBlock
                  blockId="blockPendataan"
                  title="TAHAPAN PENDAFTARAN & PENETAPAN PEMILIH"
                  theme="green"
                  headers={['NO', 'KEGIATAN PENDAFTARAN PEMILIH', 'WAKTU (BULAN)']}
                  rows={pendataanRows}
                  className="flex-[1] min-h-0"
                />
              </div>

              {/* Kolom Kanan: Kampanye (3 items) + Pemungutan (2 items) + QR Portal (stretches to baseline) */}
              <div id="tableColRight" className="col-right flex flex-col gap-2 h-full min-h-0">
                <TableBlock
                  blockId="blockKampanye"
                  title="UNDIAN NOMOR URUT, KAMPANYE & MASA TENANG"
                  theme="amber"
                  headers={['NO', 'KEGIATAN KAMPANYE', 'WAKTU (BULAN)']}
                  rows={kampanyeRows}
                  className="flex-[0.4] min-h-0"
                />

                <TableBlock
                  blockId="blockPemungutan"
                  title="PEMUNGUTAN, PERHITUNGAN & PENETAPAN"
                  theme="red"
                  headers={['NO', 'KEGIATAN PEMUNGUTAN', 'WAKTU (BULAN)']}
                  rows={pemungutanRows}
                  className="flex-[0.3] min-h-0"
                />

                <QrCard className="flex-[1] min-h-0" />
              </div>

            </div>

            {/* 6. Footer: Posko & Tanda Tangan */}
            <PosterFooter />
          </div>

        </div>
      </div>
    </article>
  );
}
