import React from 'react';
import { usePoster } from '../../context/PosterContext';
import { Download } from 'lucide-react';
import { exportToImage } from '../../utils/exportPdf';

export default function StoryWASheet() {
  const { showToast, setLoading } = usePoster();

  const slides = [
    {
      id: 'storySlide1',
      title: 'Slide 1 · Pengumuman Resmi Hari-H',
      src: '/images/story/story_slide_1.jpg',
      fileName: 'Story_WA_Slide_1_Pengumuman_Pilkades.jpg'
    },
    {
      id: 'storySlide2',
      title: 'Slide 2 · Syarat Pemilih Tetap',
      src: '/images/story/story_slide_2.jpg',
      fileName: 'Story_WA_Slide_2_Syarat_Pemilih.jpg'
    },
    {
      id: 'storySlide3',
      title: 'Slide 3 · 5 Langkah di TPS',
      src: '/images/story/story_slide_3.jpg',
      fileName: 'Story_WA_Slide_3_Tata_Cara_TPS.jpg'
    },
    {
      id: 'storySlide4',
      title: 'Slide 4 · Ketentuan Coblos Sah',
      src: '/images/story/story_slide_4.jpg',
      fileName: 'Story_WA_Slide_4_Ketentuan_Suara_Sah.jpg'
    },
    {
      id: 'storySlide5',
      title: 'Slide 5 · Ajakan & Posko Layanan',
      src: '/images/story/story_slide_5.jpg',
      fileName: 'Story_WA_Slide_5_Posko_Hotline_CTA.jpg'
    }
  ];

  const handleDownloadSingle = async (slide) => {
    setLoading({ active: true, message: `Mengunduh ${slide.title}...` });
    try {
      const link = document.createElement('a');
      link.href = slide.src;
      link.download = slide.fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setLoading({ active: false, message: '' });
      showToast(`${slide.title} berhasil diunduh!`, 'success');
    } catch (e) {
      setLoading({ active: false, message: '' });
      showToast('Gagal mengunduh slide', 'error');
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 48, alignItems: 'center', paddingBottom: 80 }}>
      {slides.map((slide, index) => (
        <div key={slide.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
          {/* Slide Header Tag & Quick Download Button */}
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            width: 1080, padding: '0 8px'
          }}>
            <div style={{
              background: 'rgba(15,23,42,0.85)',
              border: '1.5px solid rgba(255,199,0,0.5)',
              borderRadius: 999,
              padding: '8px 24px',
              color: '#ffc700',
              fontWeight: 800,
              fontSize: 18,
              letterSpacing: '0.08em',
              textTransform: 'uppercase'
            }}>
              {slide.title}
            </div>

            <button
              onClick={() => handleDownloadSingle(slide)}
              style={{
                background: '#ffc700',
                color: '#091528',
                border: 'none',
                borderRadius: 999,
                padding: '8px 24px',
                fontWeight: 900,
                fontSize: 16,
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(255,199,0,0.4)',
                transition: 'transform 0.15s ease'
              }}
            >
              <Download style={{ width: 18, height: 18 }} />
              <span>Unduh Slide {index + 1}</span>
            </button>
          </div>

          {/* 9:16 Vertical Story Image Container */}
          <article
            id={slide.id}
            style={{
              width: 1080,
              height: 1920,
              borderRadius: 32,
              overflow: 'hidden',
              boxShadow: '0 25px 60px rgba(0,0,0,0.6), 0 0 0 2px rgba(255,255,255,0.1)',
              background: '#091528',
              flexShrink: 0,
              position: 'relative'
            }}
          >
            <img
              src={slide.src}
              alt={slide.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block'
              }}
            />
          </article>
        </div>
      ))}
    </div>
  );
}
