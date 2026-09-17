import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  DEFAULT_POSTER_DATA,
  INITIAL_LAYOUT,
  INITIAL_SCALES,
  INITIAL_HEIGHT_WEIGHTS
} from '../data/defaultData';

const STORAGE_KEYS = {
  FORM_DATA: 'pilkades_form_data_v4',
  LAYOUT: 'pilkades_column_layout_v4',
  SCALES: 'pilkades_table_scales_v4',
  HEIGHT_WEIGHTS: 'pilkades_table_height_weights_v4',
  STAMP: 'pilkades_stamp_state_v4',
  PAPER: 'pilkades_paper_size_v5',
  TEMPLATE: 'pilkades_active_template_v4'
};

const PosterContext = createContext(null);

export function PosterProvider({ children }) {
  // 1. Form Data
  const [formData, setFormData] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.FORM_DATA);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.tahapanPencalonan && parsed.tahapanPencalonan.length >= 10) {
          if (!parsed.poskoKontak || parsed.poskoKontak.includes('Kontak Informasi RT/RW')) {
            parsed.poskoKontak = DEFAULT_POSTER_DATA.poskoKontak;
          }
          if (!parsed.inputHotline || parsed.inputHotline === '0812-3456-7890') {
            parsed.inputHotline = DEFAULT_POSTER_DATA.inputHotline;
          }
          if (!parsed.inputWaktuTPS || parsed.inputWaktuTPS.includes('13.00')) {
            parsed.inputWaktuTPS = DEFAULT_POSTER_DATA.inputWaktuTPS;
          }
          if (!parsed.inputTempatTPS || parsed.inputTempatTPS.includes('TPS Masing-Masing')) {
            parsed.inputTempatTPS = DEFAULT_POSTER_DATA.inputTempatTPS;
          }
          if (parsed.tahapanPencalonan?.[0]?.kegiatan?.sublist) {
            parsed.tahapanPencalonan[0].kegiatan.sublist = parsed.tahapanPencalonan[0].kegiatan.sublist
              .filter(item => !item.includes('TANPA PUNGUTAN BIAYA'))
              .map((item, idx) => {
                const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
                return item.replace(/^[a-z]\./i, `${letters[idx]}.`);
              });
          }
          return { ...DEFAULT_POSTER_DATA, ...parsed };
        }
      }
    } catch {}
    return DEFAULT_POSTER_DATA;
  });

  // 2. Column Layout (Strictly matching reference image)
  const [columnLayout, setColumnLayout] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.LAYOUT);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (
          parsed.leftColumn &&
          parsed.leftColumn.includes('blockPencalonan') &&
          parsed.leftColumn.includes('blockPendataan')
        ) {
          return parsed;
        }
      }
    } catch {}
    return {
      leftColumn: ['blockPencalonan', 'blockPendataan'],
      rightColumn: ['blockKampanye', 'blockPemungutan', 'blockQR']
    };
  });

  // 3. Table Font Scales
  const [tableScales, setTableScales] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.SCALES);
      return saved ? JSON.parse(saved) : INITIAL_SCALES;
    } catch {
      return INITIAL_SCALES;
    }
  });

  // 4. Table Height Weights
  const [tableHeightWeights, setTableHeightWeights] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.HEIGHT_WEIGHTS);
      return saved ? JSON.parse(saved) : INITIAL_HEIGHT_WEIGHTS;
    } catch {
      return INITIAL_HEIGHT_WEIGHTS;
    }
  });

  // 5. Stamp State
  const [stampState, setStampState] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.STAMP);
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          visible: true,
          scale: 0.95,
          position: { x: 35, y: -20 },
          imageUrl: DEFAULT_POSTER_DATA.stempelPanitiaUrl,
          ...parsed,
          rotation: typeof parsed.rotation === 'number' ? parsed.rotation : -8
        };
      }
    } catch {}
    return {
      visible: true,
      scale: 0.95,
      rotation: -8,
      position: { x: 35, y: -20 },
      imageUrl: DEFAULT_POSTER_DATA.stempelPanitiaUrl
    };
  });

  // 6. Paper Size ('a3plus' | 'a3' | 'a4') - A3+ is the master reference default
  const [paperSize, setPaperSize] = useState(() => {
    return localStorage.getItem(STORAGE_KEYS.PAPER) || 'a3plus';
  });

  // 7. Active Template ('pamflet' | 'alur')
  const [activeTemplate, setActiveTemplate] = useState(() => {
    return localStorage.getItem(STORAGE_KEYS.TEMPLATE) || 'pamflet';
  });

  // 8. Viewport & UI State
  const [zoomLevel, setZoomLevel] = useState(0.65);
  const [isFitMode, setIsFitMode] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [toast, setToast] = useState({ message: '', visible: false, type: 'info' });
  const [loading, setLoading] = useState({ active: false, message: '' });

  // Persistence
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.FORM_DATA, JSON.stringify(formData));
  }, [formData]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.LAYOUT, JSON.stringify(columnLayout));
  }, [columnLayout]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.SCALES, JSON.stringify(tableScales));
  }, [tableScales]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.HEIGHT_WEIGHTS, JSON.stringify(tableHeightWeights));
  }, [tableHeightWeights]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.STAMP, JSON.stringify(stampState));
  }, [stampState]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.PAPER, paperSize);
  }, [paperSize]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.TEMPLATE, activeTemplate);
  }, [activeTemplate]);

  // Actions
  const updateFormField = (key, value) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const showToast = (message, type = 'info', duration = 3000) => {
    setToast({ message, visible: true, type });
    setTimeout(() => {
      setToast(prev => ({ ...prev, visible: false }));
    }, duration);
  };

  const changeTableScale = (blockId, delta) => {
    setTableScales(prev => {
      const current = prev[blockId] || 1.0;
      const next = Math.max(0.65, Math.min(1.4, Math.round((current + delta) * 100) / 100));
      showToast(`Skala ${blockId}: ${(next * 100).toFixed(0)}%`);
      return { ...prev, [blockId]: next };
    });
  };

  const changeTableHeightWeight = (blockId, delta) => {
    setTableHeightWeights(prev => {
      const current = prev[blockId] || 1.0;
      const next = Math.max(0.3, Math.min(3.0, Math.round((current + delta) * 100) / 100));
      showToast(`Proporsi tinggi ${blockId}: ${next.toFixed(2)}x`);
      return { ...prev, [blockId]: next };
    });
  };

  const moveTableBlock = (blockId, targetCol, targetIndex) => {
    setColumnLayout(prev => {
      const newLayout = {
        leftColumn: prev.leftColumn.filter(id => id !== blockId),
        rightColumn: prev.rightColumn.filter(id => id !== blockId)
      };
      const destList = [...newLayout[targetCol]];
      if (typeof targetIndex === 'number' && targetIndex >= 0) {
        destList.splice(targetIndex, 0, blockId);
      } else {
        destList.push(blockId);
      }
      newLayout[targetCol] = destList;
      return newLayout;
    });
    showToast('Posisi tabel berhasil dipindahkan');
  };

  const moveBlockOrder = (blockId, direction) => {
    setColumnLayout(prev => {
      const colKey = prev.leftColumn.includes(blockId) ? 'leftColumn' : 'rightColumn';
      const list = [...prev[colKey]];
      const index = list.indexOf(blockId);
      if (index === -1) return prev;

      const targetIndex = direction === 'up' ? index - 1 : index + 1;
      if (targetIndex < 0 || targetIndex >= list.length) return prev;

      const [removed] = list.splice(index, 1);
      list.splice(targetIndex, 0, removed);

      showToast(`Tabel digeser ke ${direction === 'up' ? 'atas' : 'bawah'}`);
      return { ...prev, [colKey]: list };
    });
  };

  const updateStamp = updates => {
    setStampState(prev => ({ ...prev, ...updates }));
  };

  const resetAllToDefault = () => {
    if (window.confirm('Kembalikan semua data, layout, dan ukuran ke preset standar resmi Kalisalak 2026?')) {
      setPaperSize('a3plus');
      setFormData(DEFAULT_POSTER_DATA);
      setColumnLayout(INITIAL_LAYOUT);
      setTableScales(INITIAL_SCALES);
      setTableHeightWeights(INITIAL_HEIGHT_WEIGHTS);
      setStampState({
        visible: true,
        scale: 0.95,
        rotation: -8,
        position: { x: 35, y: -20 },
        imageUrl: DEFAULT_POSTER_DATA.stempelPanitiaUrl
      });
      localStorage.clear();
      showToast('Seluruh data berhasil di-reset ke standar resmi (A3+)', 'success');
    }
  };

  return (
    <PosterContext.Provider
      value={{
        formData,
        updateFormField,
        setFormData,
        columnLayout,
        moveTableBlock,
        moveBlockOrder,
        setColumnLayout,
        tableScales,
        changeTableScale,
        tableHeightWeights,
        changeTableHeightWeight,
        stampState,
        updateStamp,
        paperSize,
        setPaperSize,
        activeTemplate,
        setActiveTemplate,
        zoomLevel,
        setZoomLevel,
        isFitMode,
        setIsFitMode,
        isSidebarOpen,
        setIsSidebarOpen,
        toast,
        showToast,
        loading,
        setLoading,
        resetAllToDefault
      }}
    >
      {children}
    </PosterContext.Provider>
  );
}

export function usePoster() {
  const context = useContext(PosterContext);
  if (!context) {
    throw new Error('usePoster must be used within a PosterProvider');
  }
  return context;
}
