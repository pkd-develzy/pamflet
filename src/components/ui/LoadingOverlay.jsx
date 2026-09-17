import React from 'react';
import { usePoster } from '../../context/PosterContext';
import { Loader2 } from 'lucide-react';

export default function LoadingOverlay() {
  const { loading } = usePoster();

  if (!loading.active) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex flex-col items-center justify-center text-white">
      <Loader2 className="w-12 h-12 text-amber-500 animate-spin mb-4" />
      <h3 className="text-xl font-bold tracking-wide">{loading.message || 'Memproses Dokumen...'}</h3>
      <p className="text-sm text-slate-300 mt-2">Mohon tunggu, resolusi tinggi sedang di-render</p>
    </div>
  );
}
