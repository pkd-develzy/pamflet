import React, { useRef, useEffect, useState } from 'react';
import { usePoster } from '../../context/PosterContext';
import PosterSheet from './PosterSheet';
import AlurSheet from './AlurSheet';
import StoryWASheet from './StoryWASheet';

export default function CanvasViewport() {
  const {
    activeTemplate,
    paperSize,
    zoomLevel,
    setZoomLevel,
    isFitMode
  } = usePoster();

  const viewportRef = useRef(null);
  const [autoScale, setAutoScale] = useState(0.65);

  // Auto-fit calculation with ResizeObserver for true realtime responsiveness
  useEffect(() => {
    const calculateFit = () => {
      if (!viewportRef.current) return;
      const viewport = viewportRef.current;
      const vw = Math.max(viewport.clientWidth - 48, 200); // 24px padding on each side
      const vh = Math.max(viewport.clientHeight - 48, 200);

      // Sheet pixel sizes based on standard 96 DPI:
      // A3+: 329mm x 483mm ~ 1243px x 1826px (Acuan Utama)
      // A3:  297mm x 420mm ~ 1122px x 1587px
      // A4:  210mm x 297mm ~ 794px x 1122px
      let targetW = 1243;
      let targetH = 1826;
      if (paperSize === 'a4') {
        targetW = 794;
        targetH = 1122;
      } else if (paperSize === 'a3') {
        targetW = 1122;
        targetH = 1587;
      }
      // Story WA: 1080px wide, single slide fit (1920px tall — show one slide at a time)
      if (activeTemplate === 'story') {
        targetW = 1080;
        targetH = 1920;
      }

      const scaleW = vw / targetW;
      const scaleH = vh / targetH;
      const fit = Math.min(scaleW, scaleH);
      const clampedFit = Math.max(0.2, Math.min(fit, 1.4));
      setAutoScale(clampedFit);
    };

    calculateFit();

    // Use ResizeObserver for instant 반응형 adaptation when sidebar opens/closes or layout shifts
    let resizeObserver = null;
    if (typeof ResizeObserver !== 'undefined' && viewportRef.current) {
      resizeObserver = new ResizeObserver(() => {
        calculateFit();
      });
      resizeObserver.observe(viewportRef.current);
    }

    window.addEventListener('resize', calculateFit);
    return () => {
      window.removeEventListener('resize', calculateFit);
      if (resizeObserver) resizeObserver.disconnect();
    };
  }, [paperSize, activeTemplate]);

  const effectiveScale = isFitMode ? autoScale : zoomLevel;

  return (
    <main
      ref={viewportRef}
      id="previewArea"
      className="flex-1 bg-slate-950/80 overflow-auto p-6 flex items-start justify-center min-h-0 relative select-none"
    >
      <div
        id="posterScaleBox"
        style={{
          transform: `scale(${effectiveScale})`,
          transformOrigin: 'top center',
          transition: 'transform 0.15s ease-out'
        }}
        className="shrink-0 mb-12"
      >
        {activeTemplate === 'pamflet' ? <PosterSheet /> : activeTemplate === 'story' ? <StoryWASheet /> : <AlurSheet />}
      </div>
    </main>
  );
}
