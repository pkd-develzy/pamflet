import * as htmlToImage from 'html-to-image';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

/**
 * Wait for all document fonts, images, and layout reflow to be fully rendered
 */
async function prepareExportEnvironment() {
  if (document.fonts && document.fonts.ready) {
    await document.fonts.ready;
  }
  // Allow time for browser layout tick and reflow at 1:1 scale
  await new Promise(resolve => setTimeout(resolve, 250));
}

/**
 * Filter function to ignore editor controls and interactive guides
 */
function exportFilter(node) {
  if (!node) return true;
  if (node.classList && (
    node.classList.contains('no-print') ||
    node.classList.contains('editor-control') ||
    node.classList.contains('table-actions-toolbar')
  )) {
    return false;
  }
  if (node.getAttribute && (
    node.getAttribute('data-html2canvas-ignore') === 'true' ||
    node.getAttribute('data-no-print') === 'true'
  )) {
    return false;
  }
  return true;
}

/**
 * Render DOM element to high-res PNG Data URL using native browser SVG engine
 * with fallback to html2canvas
 */
async function renderElementToDataUrl(element, renderScale) {
  try {
    return await htmlToImage.toPng(element, {
      pixelRatio: renderScale,
      backgroundColor: '#ffffff',
      cacheBust: true,
      skipAutoScale: true,
      filter: exportFilter
    });
  } catch (err) {
    console.warn('htmlToImage fell back to html2canvas:', err);
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
      ignoreElements: (el) => !exportFilter(el)
    });
    return canvas.toDataURL('image/png', 1.0);
  }
}

/**
 * Render DOM element to high-res Blob using native browser SVG engine
 * with fallback to html2canvas
 */
async function renderElementToBlob(element, renderScale) {
  try {
    return await htmlToImage.toBlob(element, {
      pixelRatio: renderScale,
      backgroundColor: '#ffffff',
      cacheBust: true,
      skipAutoScale: true,
      filter: exportFilter
    });
  } catch (err) {
    console.warn('htmlToImage toBlob fell back to html2canvas:', err);
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
      ignoreElements: (el) => !exportFilter(el)
    });
    return await new Promise((resolve, reject) => {
      canvas.toBlob((b) => {
        if (b) resolve(b);
        else reject(new Error('Gagal konversi canvas ke Blob PNG'));
      }, 'image/png', 1.0);
    });
  }
}

/**
 * Export element to ultra-sharp, pixel-perfect PDF using native browser rendering + jsPDF
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

    // Temporarily reset preview scale so the element is measured at full 1:1 physical size
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

    // Scale 3.5 provides true 300+ DPI print-ready density without hitting memory limits
    const renderScale = isA4 ? 4 : 3.5;

    // Use native browser rendering to preserve exact text baseline & vertical alignment
    const dataUrl = await renderElementToDataUrl(element, renderScale);

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
 * Export element to ultra-sharp, lossless PNG image (300+ DPI, non-pixelated, exact vertical alignment)
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

    // Use native browser rendering to preserve exact text baseline & vertical alignment
    const blob = await renderElementToBlob(element, renderScale);

    // Stream download via Blob URL for high memory efficiency on high-megapixel image
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.download = fileName || `Pamflet_Pilkades_${formatName}_HDPlus_Lossless.png`;
    link.href = url;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => URL.revokeObjectURL(url), 4000);

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
