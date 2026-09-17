import React from 'react';
import { usePoster } from '../../context/PosterContext';
import { CheckCircle, AlertCircle, Info } from 'lucide-react';

export default function Toast() {
  const { toast } = usePoster();

  if (!toast.visible) return null;

  const icons = {
    success: <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />,
    error: <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />,
    info: <Info className="w-5 h-5 text-amber-400 shrink-0" />
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-slate-900/95 text-white px-4 py-3 rounded-xl shadow-2xl border border-amber-500/40 backdrop-blur-md animate-fade-in text-sm font-medium">
      {icons[toast.type] || icons.info}
      <span>{toast.message}</span>
    </div>
  );
}
