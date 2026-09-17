import html2pdf from 'html2pdf.js';

/**
 * Export poster element to true HD+ Ultra Resolution PDF for Sticker / Vinyl / Large Format printing
 */
export async function exportToPdf({ elementId, paperSize, fileName, onStart, onComplete, onError }) {
  const element = document.getElementById(elementId);
  if (!element) {
    if (onError) onError(new Error(`Element #${elementId} tidak ditemukan`));
    return;
  }

  const scaleBox = document.getElementById('posterScaleBox');
  const originalTransform = scaleBox ? scaleBox.style.transform : '';
  const originalTransition = scaleBox ? scaleBox.style.transition : '';

  try {
    if (onStart) onStart();

    // Temporarily reset CSS scale transform to 'none' so html2canvas captures at full 1:1 physical unscaled dimensions
    if (scaleBox) {
      scaleBox.style.transition = 'none';
      scaleBox.style.transform = 'none';
    }

    // Small delay to allow layout recalculation at 1:1 scale
    await new Promise(resolve => setTimeout(resolve, 80));

    const isA4 = paperSize.toLowerCase() === 'a4';
    const isA3 = paperSize.toLowerCase() === 'a3';
    const pdfFormat = isA4 ? 'a4' : (isA3 ? 'a3' : [329, 483]);
    const formatName = isA4 ? 'A4' : (isA3 ? 'A3' : 'A3Plus_Master');

    // Scale 4 on 1:1 physical size yields approx 4972 x 7304 pixels (over 36 MegaPixels),
    // delivering true 300-450 DPI print-ready density with zero blur or pixelation on sticker vinyl.
    const opt = {
      margin: 0,
      filename: fileName || `Pamflet_Pilkades_Kalisalak_2026_${formatName}_HDPlus_Cetak_Stiker.pdf`,
      image: { type: 'png', quality: 1.0 }, // PNG lossless avoids JPEG mosquito noise around text & QR code
      html2canvas: {
        scale: 4,
        useCORS: true,
        allowTaint: true,
        logging: false,
        letterRendering: true,
        backgroundColor: '#ffffff',
        imageTimeout: 15000,
        scrollX: 0,
        scrollY: 0,
        windowWidth: element.scrollWidth,
        windowHeight: element.scrollHeight
      },
      jsPDF: {
        unit: 'mm',
        format: pdfFormat,
        orientation: 'portrait',
        compress: true
      }
    };

    await html2pdf().set(opt).from(element).save();

    if (onComplete) onComplete();
  } catch (err) {
    console.error('Error generating HD+ PDF:', err);
    if (onError) onError(err);
  } finally {
    // Restore original viewport scale transform
    if (scaleBox) {
      scaleBox.style.transform = originalTransform;
      scaleBox.style.transition = originalTransition;
    }
  }
}

/**
 * Export poster directly as Lossless HD+ Ultra PNG image file (preferred by many print shops / CorelDRAW)
 */
export async function exportToImage({ elementId, paperSize, fileName, onStart, onComplete, onError }) {
  const element = document.getElementById(elementId);
  if (!element) {
    if (onError) onError(new Error(`Element #${elementId} tidak ditemukan`));
    return;
  }

  const scaleBox = document.getElementById('posterScaleBox');
  const originalTransform = scaleBox ? scaleBox.style.transform : '';
  const originalTransition = scaleBox ? scaleBox.style.transition : '';

  try {
    if (onStart) onStart();

    if (scaleBox) {
      scaleBox.style.transition = 'none';
      scaleBox.style.transform = 'none';
    }

    await new Promise(resolve => setTimeout(resolve, 80));

    const isA4 = paperSize.toLowerCase() === 'a4';
    const isA3 = paperSize.toLowerCase() === 'a3';
    const formatName = isA4 ? 'A4' : (isA3 ? 'A3' : 'A3Plus_Master');

    const opt = {
      margin: 0,
      image: { type: 'png', quality: 1.0 },
      html2canvas: {
        scale: 4,
        useCORS: true,
        allowTaint: true,
        logging: false,
        letterRendering: true,
        backgroundColor: '#ffffff',
        imageTimeout: 15000,
        scrollX: 0,
        scrollY: 0,
        windowWidth: element.scrollWidth,
        windowHeight: element.scrollHeight
      }
    };

    // Use html2pdf's bundled worker to obtain the canvas
    const worker = html2pdf().set(opt).from(element).toCanvas();
    const canvas = await worker.outputCanvas();

    // Trigger download of lossless high-res PNG
    const imageUri = canvas.toDataURL('image/png', 1.0);
    const downloadLink = document.createElement('a');
    downloadLink.href = imageUri;
    downloadLink.download = fileName || `Pamflet_Pilkades_Kalisalak_2026_${formatName}_HDPlus_Lossless.png`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);

    if (onComplete) onComplete();
  } catch (err) {
    console.error('Error generating HD+ Image:', err);
    if (onError) onError(err);
  } finally {
    if (scaleBox) {
      scaleBox.style.transform = originalTransform;
      scaleBox.style.transition = originalTransition;
    }
  }
}
