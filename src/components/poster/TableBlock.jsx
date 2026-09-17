import React from 'react';
import { usePoster } from '../../context/PosterContext';
import {
  ClipboardList,
  Contact,
  Megaphone,
  CalendarCheck,
  LayoutGrid
} from 'lucide-react';

export default function TableBlock({
  blockId,
  title,
  theme = 'blue',
  headers = ['NO', 'KEGIATAN', 'WAKTU (BULAN)'],
  rows = [],
  className = '',
  style = {}
}) {
  const { tableScales, formData, updateFormField } = usePoster();

  // Sovereign & Executive government palette
  const themeConfig = {
    blue: {
      bar: 'bg-gradient-to-r from-[#1e3a8a] to-[#172554] text-white border-b-2 border-amber-400',
      th: 'bg-[#f0f7ff] text-slate-900 border-slate-300',
      icon: <ClipboardList className="w-3.5 h-3.5 text-amber-300 shrink-0" />
    },
    green: {
      bar: 'bg-gradient-to-r from-[#0f766e] to-[#134e4a] text-white border-b-2 border-amber-400',
      th: 'bg-[#f0fdfa] text-slate-900 border-slate-300',
      icon: <Contact className="w-3.5 h-3.5 text-amber-300 shrink-0" />
    },
    amber: {
      bar: 'bg-gradient-to-r from-[#b45309] to-[#78350f] text-white border-b-2 border-amber-400',
      th: 'bg-[#fffbeb] text-slate-900 border-slate-300',
      icon: <Megaphone className="w-3.5 h-3.5 text-amber-300 shrink-0" />
    },
    red: {
      bar: 'bg-gradient-to-r from-[#991b1b] to-[#7f1d1d] text-white border-b-2 border-amber-400',
      th: 'bg-[#fef2f2] text-slate-900 border-slate-300',
      icon: <CalendarCheck className="w-3.5 h-3.5 text-amber-300 shrink-0" />
    }
  }[theme] || {
    bar: 'bg-slate-800 text-white border-b-2 border-amber-400',
    th: 'bg-slate-50 text-slate-900 border-slate-300',
    icon: <LayoutGrid className="w-3.5 h-3.5 text-amber-300 shrink-0" />
  };

  const currentScale = tableScales[blockId] || 1.0;

  // Pre-calculate merged cells for consecutive identical 'waktu' values (rowSpan)
  const rowSpanInfo = [];
  for (let i = 0; i < rows.length; i++) {
    const currentWaktu = (rows[i].waktu || '').trim();
    if (i > 0 && currentWaktu === (rows[i - 1].waktu || '').trim()) {
      rowSpanInfo.push({ shouldRender: false, span: 0 });
    } else {
      let span = 1;
      while (
        i + span < rows.length &&
        (rows[i + span].waktu || '').trim() === currentWaktu
      ) {
        span++;
      }
      rowSpanInfo.push({ shouldRender: true, span });
    }
  }

  // Handle editing kegiatan directly on canvas
  const handleKegiatanBlur = (e, rowIdx) => {
    const newText = e.currentTarget.textContent.trim();
    const fieldKey = blockId === 'blockPencalonan' ? 'tahapanPencalonan'
      : blockId === 'blockPendataan' ? 'tahapanPendataan'
      : blockId === 'blockKampanye' ? 'tahapanKampanye'
      : blockId === 'blockPemungutan' ? 'tahapanPemungutan' : null;

    if (fieldKey && formData[fieldKey]) {
      const updated = formData[fieldKey].map((r, i) => {
        if (i === rowIdx) {
          if (typeof r.kegiatan === 'string') {
            return { ...r, kegiatan: newText };
          } else if (r.kegiatan?.title) {
            return { ...r, kegiatan: { ...r.kegiatan, title: newText } };
          }
        }
        return r;
      });
      updateFormField(fieldKey, updated);
    }
  };

  // Handle editing waktu directly on canvas (updates all merged rows)
  const handleWaktuBlur = (e, startIdx, span) => {
    const newWaktu = e.currentTarget.textContent.trim();
    const fieldKey = blockId === 'blockPencalonan' ? 'tahapanPencalonan'
      : blockId === 'blockPendataan' ? 'tahapanPendataan'
      : blockId === 'blockKampanye' ? 'tahapanKampanye'
      : blockId === 'blockPemungutan' ? 'tahapanPemungutan' : null;

    if (fieldKey && formData[fieldKey]) {
      const updated = formData[fieldKey].map((r, i) => {
        if (i >= startIdx && i < startIdx + span) {
          return { ...r, waktu: newWaktu };
        }
        return r;
      });
      updateFormField(fieldKey, updated);
    }
  };

  return (
    <div
      id={blockId}
      style={style}
      className={`table-block-wrapper flex flex-col border border-slate-300 rounded overflow-hidden bg-white shadow-2xs ${className}`}
    >
      {/* Header Bar: Sovereign Executive Style with Gold Hairline */}
      <div className={`px-2.5 py-1.5 flex items-center justify-between ${themeConfig.bar} select-none shrink-0`}>
        <div className="flex items-center gap-1.5 flex-1 min-w-0">
          <LayoutGrid className="w-3 h-3 text-amber-300/80 shrink-0" />
          {themeConfig.icon}
          <span
            contentEditable
            suppressContentEditableWarning
            className="table-header-title font-black text-[9.5px] sm:text-[10px] tracking-wider uppercase font-sans text-white drop-shadow-2xs"
          >
            {title}
          </span>
        </div>
      </div>

      {/* Table Content Container: expands flexibly to eliminate empty space */}
      <div
        className="flex-1 flex flex-col min-h-0 overflow-hidden"
        style={{ fontSize: `${currentScale * 100}%` }}
      >
        <table className="w-full h-full border-collapse text-left border border-slate-300">
          <thead>
            <tr className={`border-b border-slate-300 font-extrabold text-[8px] sm:text-[8.5px] uppercase tracking-wider ${themeConfig.th} shrink-0`}>
              <th className="w-7 text-center py-1 border-r border-slate-300">{headers[0]}</th>
              <th className="py-1 px-2 border-r border-slate-300">{headers[1]}</th>
              <th className="w-32 text-center py-1 px-1.5">{headers[2]}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 text-[8px] sm:text-[8.5px] leading-snug text-slate-900 font-sans">
            {rows.map((row, idx) => (
              <tr
                key={idx}
                className={`border-b border-slate-200 ${
                  row.highlight ? 'bg-red-50/70 font-bold' : 'hover:bg-slate-50/80'
                }`}
              >
                <td className="w-7 text-center font-bold py-1 border-r border-slate-200 align-middle text-slate-800">
                  {row.no}
                </td>
                <td className="py-1 px-2 border-r border-slate-200 align-middle">
                  {typeof row.kegiatan === 'string' ? (
                    <div
                      contentEditable
                      suppressContentEditableWarning
                      onBlur={e => handleKegiatanBlur(e, idx)}
                    >
                      {row.kegiatan}
                    </div>
                  ) : row.kegiatan?.title ? (
                    <div>
                      <div
                        contentEditable
                        suppressContentEditableWarning
                        onBlur={e => handleKegiatanBlur(e, idx)}
                        className="font-bold text-slate-950"
                      >
                        {row.kegiatan.title}
                      </div>
                      {row.kegiatan.sublist && (
                        <ul className="table-sublist list-none text-[7.5px] sm:text-[8px] text-slate-800 pl-1 space-y-0.5 mt-0.5 font-normal">
                          {row.kegiatan.sublist.map((sub, sIdx) => (
                            <li key={sIdx} contentEditable suppressContentEditableWarning>
                              {sub}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    row.kegiatan
                  )}
                </td>
                {rowSpanInfo[idx]?.shouldRender && (
                  <td
                    rowSpan={rowSpanInfo[idx].span}
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={e => handleWaktuBlur(e, idx, rowSpanInfo[idx].span)}
                    className={`w-32 text-center px-1.5 py-1 align-middle font-black border-l border-b border-slate-300 bg-slate-50/75 tracking-wide ${
                      row.highlight ? 'text-red-700 font-black' : 'text-slate-900'
                    }`}
                  >
                    {row.waktu}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
