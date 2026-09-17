import * as htmlToImage from 'html-to-image';
import { jsPDF } from 'jspdf';

/**
 * Wait for all document fonts and images to be fully rendered
 */
async function prepareExportEnvironment() {
  if (document.fonts && document.fonts.ready) {
    await document.fonts.ready;
  }
  // Brief pause for browser rendering tick & reflow
  await new Promise(resolve => setTimeout(resolve, 100));
}

/**
 * Export element to ultra-sharp, pixel-perfect PDF using native browser engine
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

    const isA4 = paperSize.toLowerCase() === 'a4';
    const isA3 = paperSize.toLowerCase() === 'a3';
    const formatName = isA4 ? 'A4' : (isA3 ? 'A3' : 'A3Plus_Master');
    const pdfFormat = isA4 ? 'a4' : (isA3 ? 'a3' : [329, 483]);

    // pixelRatio 3 provides crystal-clear 300+ DPI resolution without memory crashes
    const dataUrl = await htmlToImage.toPng(element, {
      pixelRatio: 3,
      cacheBust: true,
      skipAutoScale: true,
      backgroundColor: '#ffffff',
      style: {
        transform: 'none',
        margin: '0',
      }
    });

    // Create jsPDF document with exact paper size
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: pdfFormat,
      compress: true
    });

    const pdfWidth = doc.internal.pageSize.getWidth();
    const pdfHeight = doc.internal.pageSize.getHeight();

    doc.addImage(dataUrl, 'PNG', 0, 0, pdfWidth, pdfHeight, undefined, 'FAST');
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
 * Export element to ultra-sharp, lossless PNG image using native browser engine
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

    const isA4 = paperSize.toLowerCase() === 'a4';
    const isA3 = paperSize.toLowerCase() === 'a3';
    const formatName = isA4 ? 'A4' : (isA3 ? 'A3' : 'A3Plus_Master');

    // Use pixelRatio: 3 for high-density 300+ DPI output
    const dataUrl = await htmlToImage.toPng(element, {
      pixelRatio: 3,
      cacheBust: true,
      skipAutoScale: true,
      backgroundColor: '#ffffff',
      style: {
        transform: 'none',
        margin: '0',
      }
    });

    // Trigger direct lossless download
    const link = document.createElement('a');
    link.download = fileName || `Pamflet_Pilkades_${formatName}_HDPlus_Lossless.png`;
    link.href = dataUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

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
