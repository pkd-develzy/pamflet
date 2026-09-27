import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

/**
 * Wait for all document fonts and images to be fully rendered
 */
async function prepareExportEnvironment() {
  if (document.fonts && document.fonts.ready) {
    await document.fonts.ready;
  }
  // Brief pause for browser rendering tick & reflow
  await new Promise(resolve => setTimeout(resolve, 150));
}

/**
 * Export element to ultra-sharp, pixel-perfect PDF using native high-res canvas + jsPDF
 */
export async function exportToPdf({ elementId, paperSize = 'a3plus', fileName, onStart, onComplete, onError }) {
  const element = document.getElementById(elementId);
  if (!element) {
    const err = new Error(`Elemen #${elementId} tidak ditemukan.`);
    if (onError) onError(err);
    return;
  }

  const scaleBox = document.getElementById('posterScaleBox');
  const originalTransform = scaleBox ? scaleBox.style.transform : '';
  const originalTransition = scaleBox ? scaleBox.style.transition : '';

  try {
    if (onStart) onStart();

    // Temporarily disable preview scale so the element is measured at full 1:1 physical size
    if (scaleBox) {
      scaleBox.style.transition = 'none';
      scaleBox.style.transform = 'none';
    }

    await prepareExportEnvironment();

    const isAlur = elementId === 'posterAlurContent';
    const isA4 = paperSize.toLowerCase() === 'a4';
    const isA3 = paperSize.toLowerCase() === 'a3';
    const formatName = isAlur ? 'A4_Landscape' : (isA4 ? 'A4' : (isA3 ? 'A3' : 'A3Plus_Master'));
    const pdfFormat = isAlur ? 'a4' : (isA4 ? 'a4' : (isA3 ? 'a3' : [329, 483]));
    const orientation = isAlur ? 'landscape' : 'portrait';

    // Scale 3.5 provides true 300+ DPI print-ready density without hitting canvas memory limits
    const renderScale = isA4 ? 4 : 3.5;

    const canvas = await html2canvas(element, {
      scale: renderScale,
      useCORS: true,
      allowTaint: true,
      letterRendering: false,
      backgroundColor: '#ffffff',
      imageTimeout: 20000,
      scrollX: 0,
      scrollY: 0,
      windowWidth: element.scrollWidth,
      windowHeight: element.scrollHeight,
      onclone: (clonedDoc) => {
        const style = clonedDoc.createElement('style');
        style.textContent = `
          * {
            -webkit-font-smoothing: antialiased !important;
            -moz-osx-font-smoothing: grayscale !important;
            text-rendering: optimizeLegibility !important;
          }
          th, td {
            vertical-align: middle !important;
          }
        `;
        clonedDoc.head.appendChild(style);

        const imgs = clonedDoc.getElementsByTagName('img');
        for (let i = 0; i < imgs.length; i++) {
          imgs[i].style.imageRendering = '-webkit-optimize-contrast';
        }
      },
      ignoreElements: (el) => {
        if (!el) return false;
        if (el.classList && (el.classList.contains('no-print') || el.classList.contains('editor-control'))) return true;
        if (el.getAttribute && (el.getAttribute('data-html2canvas-ignore') === 'true' || el.getAttribute('data-no-print') === 'true')) return true;
        return false;
      }
    });

    // Create jsPDF document with exact paper size & orientation
    const doc = new jsPDF({
      orientation: orientation,
      unit: 'mm',
      format: pdfFormat,
      compress: true
    });

    const pdfWidth = doc.internal.pageSize.getWidth();
    const pdfHeight = doc.internal.pageSize.getHeight();

    // Embed high-res PNG image into jsPDF
    const dataUrl = canvas.toDataURL('image/png', 1.0);
    doc.addImage(dataUrl, 'PNG', 0, 0, pdfWidth, pdfHeight, undefined, 'SLOW');
    doc.save(fileName || `Pamflet_Pilkades_${formatName}_HDPlus_Siap_Cetak.pdf`);

    if (onComplete) onComplete();
  } catch (err) {
    console.error('Export to PDF error:', err);
    if (onError) onError(err);
  } finally {
    // Restore preview transform
    if (scaleBox) {
      scaleBox.style.transition = originalTransition;
      scaleBox.style.transform = originalTransform;
    }
  }
}

/**
 * Export element to ultra-sharp, lossless PNG image (300+ DPI, non-pixelated)
 */
export async function exportToImage({ elementId, paperSize = 'a3plus', fileName, onStart, onComplete, onError }) {
  const element = document.getElementById(elementId);
  if (!element) {
    const err = new Error(`Elemen #${elementId} tidak ditemukan.`);
    if (onError) onError(err);
    return;
  }

  const scaleBox = document.getElementById('posterScaleBox');
  const originalTransform = scaleBox ? scaleBox.style.transform : '';
  const originalTransition = scaleBox ? scaleBox.style.transition : '';

  try {
    if (onStart) onStart();

    // Temporarily reset preview scaling for unscaled rasterization
    if (scaleBox) {
      scaleBox.style.transition = 'none';
      scaleBox.style.transform = 'none';
    }

    await prepareExportEnvironment();

    const isAlur = elementId === 'posterAlurContent';
    const isA4 = paperSize.toLowerCase() === 'a4';
    const isA3 = paperSize.toLowerCase() === 'a3';
    const formatName = isAlur ? 'A4_Landscape' : (isA4 ? 'A4' : (isA3 ? 'A3' : 'A3Plus_Master'));

    // Scale 3.5 provides true 300+ DPI print-ready density (A3 ~ 3928 x 5556 px) with zero pixelation
    const renderScale = isA4 ? 4 : 3.5;

    const canvas = await html2canvas(element, {
      scale: renderScale,
      useCORS: true,
      allowTaint: true,
      letterRendering: false,
      backgroundColor: '#ffffff',
      imageTimeout: 20000,
      scrollX: 0,
      scrollY: 0,
      windowWidth: element.scrollWidth,
      windowHeight: element.scrollHeight,
      onclone: (clonedDoc) => {
        const style = clonedDoc.createElement('style');
        style.textContent = `
          * {
            -webkit-font-smoothing: antialiased !important;
            -moz-osx-font-smoothing: grayscale !important;
            text-rendering: optimizeLegibility !important;
          }
          th, td {
            vertical-align: middle !important;
          }
        `;
        clonedDoc.head.appendChild(style);

        const imgs = clonedDoc.getElementsByTagName('img');
        for (let i = 0; i < imgs.length; i++) {
          imgs[i].style.imageRendering = '-webkit-optimize-contrast';
        }
      },
      ignoreElements: (el) => {
        if (!el) return false;
        if (el.classList && (el.classList.contains('no-print') || el.classList.contains('editor-control'))) return true;
        if (el.getAttribute && (el.getAttribute('data-html2canvas-ignore') === 'true' || el.getAttribute('data-no-print') === 'true')) return true;
        return false;
      }
    });

    // Stream download via Blob URL for high memory efficiency on high-megapixel image
    await new Promise((resolve, reject) => {
      canvas.toBlob((blob) => {
        if (!blob) {
          reject(new Error('Gagal mengonversi canvas ke Blob PNG'));
          return;
        }
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.download = fileName || `Pamflet_Pilkades_${formatName}_HDPlus_Lossless.png`;
        link.href = url;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setTimeout(() => URL.revokeObjectURL(url), 4000);
        resolve();
      }, 'image/png', 1.0);
    });

    if (onComplete) onComplete();
  } catch (err) {
    console.error('Export to Image error:', err);
    if (onError) onError(err);
  } finally {
    if (scaleBox) {
      scaleBox.style.transition = originalTransition;
      scaleBox.style.transform = originalTransform;
    }
  }
}
