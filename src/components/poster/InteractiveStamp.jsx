import React, { useRef, useState } from 'react';
import { usePoster } from '../../context/PosterContext';
import { RotateCw, RotateCcw, RefreshCw } from 'lucide-react';

export default function InteractiveStamp() {
  const { stampState, updateStamp, resetStampPosition } = usePoster();
  const [isDragging, setIsDragging] = useState(false);
  const [isRotating, setIsRotating] = useState(false);
  const stampRef = useRef(null);
  const dragStartRef = useRef({ mouseX: 0, mouseY: 0, posX: 0, posY: 0 });

  if (!stampState.visible) return null;

  const currentRotation = typeof stampState.rotation === 'number' ? stampState.rotation : -8;

  // Handle Drag Position
  const handleMouseDown = (e) => {
    // Only left click
    if (e.button !== 0) return;
    setIsDragging(true);
    dragStartRef.current = {
      mouseX: e.clientX,
      mouseY: e.clientY,
      posX: stampState.position.x,
      posY: stampState.position.y
    };

    const handleMouseMove = (moveEvent) => {
      const deltaX = moveEvent.clientX - dragStartRef.current.mouseX;
      const deltaY = moveEvent.clientY - dragStartRef.current.mouseY;
      updateStamp({
        position: {
          x: dragStartRef.current.posX + deltaX,
          y: dragStartRef.current.posY + deltaY
        }
      });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  // Handle Rotate Drag (Canvas style)
  const handleRotateMouseDown = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(true);

    const stampEl = stampRef.current;
    if (!stampEl) return;
    const rect = stampEl.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const handleMouseMove = (moveEvent) => {
      const deltaX = moveEvent.clientX - centerX;
      const deltaY = moveEvent.clientY - centerY;
      // angle from 12 o'clock
      const rad = Math.atan2(deltaY, deltaX);
      let deg = Math.round(rad * (180 / Math.PI)) + 90;
      if (deg > 180) deg -= 360;
      if (deg < -180) deg += 360;
      updateStamp({ rotation: deg });
    };

    const handleMouseUp = () => {
      setIsRotating(false);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  return (
    <div
      ref={stampRef}
      style={{
        transform: `translate(${stampState.position.x}px, ${stampState.position.y}px) rotate(${currentRotation}deg) scale(${stampState.scale})`,
        transformOrigin: 'center center'
      }}
      className={`absolute z-20 select-none cursor-move group ${
        isDragging || isRotating ? 'opacity-90' : 'opacity-95'
      }`}
      onMouseDown={handleMouseDown}
      title="Klik dan seret (drag) untuk mengatur posisi cap stempel"
    >
      {/* Quick controls on hover (Scale & Rotate & Degree indicator & Reset) */}
      <div data-html2canvas-ignore="true" className="no-print opacity-0 group-hover:opacity-100 transition-opacity absolute -top-8 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-slate-900/95 text-white rounded-full px-2.5 py-1 shadow-lg border border-amber-500/50 text-[9px] font-bold whitespace-nowrap z-30">
        {/* Rotate Left button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            updateStamp({ rotation: currentRotation - 5 });
          }}
          className="hover:text-amber-400 p-0.5"
          title="Miringkan ke Kiri (-5°)"
        >
          <RotateCcw className="w-2.5 h-2.5" />
        </button>

        {/* Degree display & click to toggle straight/tilted */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            updateStamp({ rotation: currentRotation === 0 ? -8 : 0 });
          }}
          className="hover:text-amber-300 font-mono text-[8px] bg-slate-800 px-1.5 py-0.5 rounded border border-slate-700 mx-0.5"
          title="Klik untuk ubah Tegak (0°) / Miring (-8°)"
        >
          {currentRotation > 0 ? `+${currentRotation}` : currentRotation}&deg;
        </button>

        {/* Rotate Right button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            updateStamp({ rotation: currentRotation + 5 });
          }}
          className="hover:text-amber-400 p-0.5"
          title="Miringkan ke Kanan (+5°)"
        >
          <RotateCw className="w-2.5 h-2.5" />
        </button>

        <span className="text-slate-600">|</span>

        {/* Scale Controls */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            updateStamp({ scale: Math.max(stampState.scale - 0.05, 0.4) });
          }}
          className="hover:text-amber-400 px-0.5 font-bold text-xs"
          title="Perkecil Stempel"
        >
          &minus;
        </button>
        <span className="text-[8px] text-slate-300 font-mono">{Math.round(stampState.scale * 100)}%</span>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            updateStamp({ scale: Math.min(stampState.scale + 0.05, 2.0) });
          }}
          className="hover:text-amber-400 px-0.5 font-bold text-xs"
          title="Perbesar Stempel"
        >
          +
        </button>

        <span className="text-slate-600">|</span>

        {/* Reset to Authentic Placement Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            resetStampPosition();
          }}
          className="hover:text-amber-300 text-[8px] bg-amber-500/20 text-amber-300 hover:bg-amber-500/30 px-1.5 py-0.5 rounded font-bold"
          title="Kembalikan ke posisi & ukuran standar resmi"
        >
          Reset
        </button>
      </div>

      {/* Rotation Handle Pin on Top (Drag to rotate freely like Figma/Canva) */}
      <div
        data-html2canvas-ignore="true"
        className="no-print opacity-0 group-hover:opacity-100 transition-opacity absolute -top-4 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-grab active:cursor-grabbing z-30"
        onMouseDown={handleRotateMouseDown}
        title="Seret bulatan ini untuk memutar / memiringkan stempel secara bebas"
      >
        <div className="w-3.5 h-3.5 rounded-full bg-amber-400 hover:bg-amber-300 border border-slate-900 shadow-md flex items-center justify-center text-slate-950">
          <RefreshCw className="w-2 h-2" />
        </div>
        <div className="w-[1px] h-1.5 bg-amber-500/80"></div>
      </div>

      <img
        src={stampState.imageUrl || '/images/stempel_panitia_kalisalak_transparan.png'}
        alt="Cap Stempel Asli Panitia"
        className="w-26 h-26 sm:w-28 sm:h-28 object-contain pointer-events-none drop-shadow-sm mix-blend-multiply"
        draggable={false}
      />
    </div>
  );
}
