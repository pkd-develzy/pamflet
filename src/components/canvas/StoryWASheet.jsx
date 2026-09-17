import React from 'react';
import { usePoster } from '../../context/PosterContext';

// ─── Color Palette & Design Tokens ───────────────────────────────────────────
const C = {
  navyDark: '#081735',
  navy: '#0d224d',
  navyMid: '#133570',
  navyLight: '#1d4ed8',
  bgSoft: '#f0f4f9',
  cardBg: '#ffffff',
  gold: '#ffc700',
  goldDark: '#d9a300',
  goldLight: '#fff9db',
  
  // Section Accents
  teal: '#0891b2',
  tealSoft: '#e0f2fe',
  green: '#059669',
  greenSoft: '#dcfce7',
  blue: '#2563eb',
  blueSoft: '#dbeafe',
  purple: '#7c3aed',
  purpleSoft: '#f3e8ff',
  amber: '#d97706',
  amberSoft: '#fef3c7',
  red: '#dc2626',
  redSoft: '#fee2e2',

  textNavy: '#0f172a',
  textBody: '#334155',
  textMuted: '#64748b',
  borderLight: '#e2e8f0',
  borderBlue: '#cbd5e1',
};

const W = 1080;
const H = 1920;

// ─── Hexagonal Pilkades Badge SVG ────────────────────────────────────────────
function HexPilkadesBadge({ tahun, desa }) {
  return (
    <div style={{ position: 'relative', width: 92, height: 92, flexShrink: 0 }}>
      <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%', filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.35))' }}>
        <defs>
          <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffe066" />
            <stop offset="50%" stopColor="#f59f00" />
            <stop offset="100%" stopColor="#d9480f" />
          </linearGradient>
          <linearGradient id="navyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e3a8a" />
            <stop offset="100%" stopColor="#0a192f" />
          </linearGradient>
        </defs>
        {/* Hexagon Outer Gold */}
        <polygon points="50,3 93,25 93,75 50,97 7,75 7,25" fill="url(#goldGrad)" />
        {/* Hexagon Inner Navy */}
        <polygon points="50,8 88,28 88,72 50,92 12,72 12,28" fill="url(#navyGrad)" stroke="#ffe066" strokeWidth="2" />
        {/* Ballot box icon */}
        <rect x="36" y="24" width="28" height="22" rx="3" fill="#ffffff" />
        <path d="M32 30 H68 V46 H32 Z" fill="#ffe066" />
        <rect x="44" y="20" width="12" height="6" rx="2" fill="#ef4444" />
        <path d="M48 22 L52 22" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
        {/* Text */}
        <text x="50" y="58" textAnchor="middle" fill="#ffe066" fontSize="8.5" fontWeight="900" fontFamily="sans-serif" letterSpacing="0.05em">PILKADES</text>
        <text x="50" y="68" textAnchor="middle" fill="#ffffff" fontSize="7" fontWeight="700" fontFamily="sans-serif">DESA {desa}</text>
        <text x="50" y="80" textAnchor="middle" fill="#ffe066" fontSize="11" fontWeight="900" fontFamily="sans-serif">{tahun}</text>
      </svg>
    </div>
  );
}

// ─── 3D Megaphone SVG ────────────────────────────────────────────────────────
function MegaphoneHero() {
  return (
    <div style={{
      width: 140, height: 140, borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(255,255,255,0.25) 0%, rgba(30,58,138,0.3) 70%, transparent 100%)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      flexShrink: 0,
      position: 'relative'
    }}>
      <svg viewBox="0 0 100 100" style={{ width: 120, height: 120, filter: 'drop-shadow(0 8px 20px rgba(0,0,0,0.45))' }}>
        {/* Sound Waves */}
        <path d="M72 32 C 80 40, 80 60, 72 68" stroke="#ffc700" strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.9" />
        <path d="M82 24 C 94 36, 94 64, 82 76" stroke="#ffc700" strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.6" />
        {/* Sound Sparks */}
        <line x1="68" y1="20" x2="78" y2="12" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
        <line x1="72" y1="80" x2="82" y2="88" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
        {/* Megaphone Body */}
        <polygon points="62,24 34,36 34,64 62,76" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" />
        <path d="M50 29 L46 31 V69 L50 71 Z" fill="#2563eb" />
        {/* Cone Rim */}
        <ellipse cx="62" cy="50" rx="7" ry="26" fill="#ef4444" stroke="#ffffff" strokeWidth="2" />
        <ellipse cx="62" cy="50" rx="3.5" ry="18" fill="#1e1b4b" />
        {/* Back Chamber */}
        <rect x="20" y="38" width="15" height="24" rx="4" fill="#ef4444" stroke="#b91c1c" strokeWidth="1" />
        {/* Handle */}
        <path d="M28 62 L22 84 C21.5 86 20 87 18 86 C16 85 15.5 83 16 81 L20 62 Z" fill="#ffffff" stroke="#94a3b8" strokeWidth="1" />
      </svg>
    </div>
  );
}

// ─── 3D Calendar SVG ─────────────────────────────────────────────────────────
function CalendarIcon3D() {
  return (
    <div style={{ width: 100, height: 100, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%', filter: 'drop-shadow(0 6px 14px rgba(0,0,0,0.15))' }}>
        {/* Calendar Body */}
        <rect x="12" y="24" width="76" height="66" rx="14" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2" />
        {/* Top Header */}
        <path d="M12 38 C12 28 16 24 26 24 H74 C84 24 88 28 88 38 V42 H12 Z" fill="#ef4444" />
        {/* Rings */}
        <rect x="28" y="14" width="8" height="18" rx="4" fill="#64748b" />
        <rect x="64" y="14" width="8" height="18" rx="4" fill="#64748b" />
        {/* Grid Dots / Day matrix */}
        <rect x="22" y="52" width="10" height="8" rx="2" fill="#cbd5e1" />
        <rect x="38" y="52" width="10" height="8" rx="2" fill="#cbd5e1" />
        <rect x="54" y="52" width="10" height="8" rx="2" fill="#cbd5e1" />
        <rect x="70" y="52" width="10" height="8" rx="2" fill="#cbd5e1" />
        <rect x="22" y="66" width="10" height="8" rx="2" fill="#cbd5e1" />
        <rect x="38" y="66" width="10" height="8" rx="2" fill="#ef4444" />
        <rect x="54" y="66" width="10" height="8" rx="2" fill="#cbd5e1" />
        <rect x="70" y="66" width="10" height="8" rx="2" fill="#cbd5e1" />
        {/* Clock Badge bottom right */}
        <circle cx="76" cy="76" r="15" fill="#2563eb" stroke="#ffffff" strokeWidth="2" />
        <polyline points="76,68 76,76 82,76" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    </div>
  );
}

// ─── 3D Ballot Box SVG ───────────────────────────────────────────────────────
function BallotBox3D() {
  return (
    <div style={{ width: 140, height: 120, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg viewBox="0 0 140 120" style={{ width: '100%', height: '100%', filter: 'drop-shadow(0 10px 20px rgba(15,23,42,0.15))' }}>
        <defs>
          <linearGradient id="boxTop" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f8fafc" />
            <stop offset="100%" stopColor="#e2e8f0" />
          </linearGradient>
          <linearGradient id="boxFront" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#e2e8f0" />
            <stop offset="100%" stopColor="#cbd5e1" />
          </linearGradient>
          <linearGradient id="boxSide" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#cbd5e1" />
            <stop offset="100%" stopColor="#94a3b8" />
          </linearGradient>
        </defs>
        {/* Ballot Paper (Red-White Merah Putih inserting into slot) */}
        <g transform="translate(68, 8) rotate(-15)">
          <rect x="-24" y="0" width="48" height="22" rx="3" fill="#ef4444" stroke="#b91c1c" strokeWidth="1" />
          <rect x="-24" y="22" width="48" height="22" rx="3" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
          <circle cx="0" cy="11" r="5" fill="#ffffff" />
          <line x1="-15" y1="33" x2="15" y2="33" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" />
        </g>
        {/* 3D Box Top Isometric */}
        <polygon points="70,36 125,58 70,80 15,58" fill="url(#boxTop)" stroke="#94a3b8" strokeWidth="1.5" />
        {/* Slot */}
        <polygon points="56,54 84,65 80,68 52,57" fill="#0f172a" />
        {/* Box Left Front Face */}
        <polygon points="15,58 70,80 70,115 15,93" fill="url(#boxFront)" stroke="#94a3b8" strokeWidth="1.5" />
        {/* Box Right Front Face */}
        <polygon points="70,80 125,58 125,93 70,115" fill="url(#boxSide)" stroke="#94a3b8" strokeWidth="1.5" />
        {/* Lock / Padlock in center */}
        <rect x="66" y="78" width="8" height="7" rx="1.5" fill="#ffc700" />
        <path d="M68 78 V75 C68 73 72 73 72 75 V78" fill="none" stroke="#ffc700" strokeWidth="1.5" />
      </svg>
    </div>
  );
}

// ─── Shared Header Bar ───────────────────────────────────────────────────────
function HeaderBar({ formData }) {
  return (
    <div style={{
      background: 'linear-gradient(180deg, #071735 0%, #0d224d 100%)',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '24px 44px 20px',
      borderBottom: `3.5px solid ${C.gold}`,
      position: 'relative',
      zIndex: 20,
      flexShrink: 0
    }}>
      {/* Logo Pemda */}
      <div style={{ width: 84, height: 84, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img
          src={formData.logoPemdaUrl}
          alt="Logo Pemda"
          style={{ width: 78, height: 78, objectFit: 'contain', filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.3))' }}
        />
      </div>

      {/* Center Title */}
      <div style={{ flex: 1, textAlign: 'center', padding: '0 16px' }}>
        <div style={{
          color: '#ffffff',
          fontWeight: 900,
          fontSize: 23,
          letterSpacing: '0.08em',
          lineHeight: 1.15,
          textTransform: 'uppercase',
          textShadow: '0 2px 8px rgba(0,0,0,0.5)'
        }}>
          PANITIA PILKADES DESA {formData.inputNamaDesa}
        </div>
        <div style={{
          color: '#93c5fd',
          fontWeight: 700,
          fontSize: 16,
          letterSpacing: '0.18em',
          lineHeight: 1.2,
          marginTop: 6,
          textTransform: 'uppercase'
        }}>
          KEC. {formData.inputKecamatan} · KAB. {formData.inputKabupaten}
        </div>
      </div>

      {/* Hexagonal Pilkades Badge */}
      <HexPilkadesBadge tahun={formData.inputTahun} desa={formData.inputNamaDesa} />
    </div>
  );
}

// ─── Shared Footer Bar ───────────────────────────────────────────────────────
function FooterBar({ slideNum, total = 5, formData }) {
  return (
    <div style={{
      background: 'linear-gradient(180deg, #0a1b38 0%, #061124 100%)',
      borderTop: `3px solid ${C.gold}`,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '16px 44px',
      flexShrink: 0,
      position: 'relative',
      zIndex: 20
    }}>
      <div style={{
        color: '#ffffff',
        fontWeight: 800,
        fontSize: 18,
        letterSpacing: '0.12em',
        lineHeight: 1,
        textTransform: 'uppercase',
        opacity: 0.9
      }}>
        {formData.inputNamaDesa} · {formData.inputKecamatan} · {formData.inputKabupaten}
      </div>

      {/* Slide Pagination Dots */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        {Array.from({ length: total }).map((_, i) => (
          <div
            key={i}
            style={{
              borderRadius: 999,
              background: i + 1 === slideNum ? C.gold : 'rgba(255,255,255,0.25)',
              width: i + 1 === slideNum ? 34 : 12,
              height: 12,
              boxShadow: i + 1 === slideNum ? '0 0 10px rgba(255,199,0,0.7)' : 'none'
            }}
          />
        ))}
      </div>

      <div style={{ color: C.gold, fontWeight: 900, fontSize: 20, lineHeight: 1 }}>
        {slideNum} / {total}
      </div>
    </div>
  );
}

// ─── Shared Row Item Component ───────────────────────────────────────────────
function NumberedRowItem({ no, title, date, color = C.green, bgSoft = C.greenSoft, isLast = false }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '10px 18px',
      borderBottom: isLast ? 'none' : '1px solid #f1f5f9',
      background: no % 2 === 0 ? '#fafcff' : '#ffffff',
    }}>
      {/* Circle Number */}
      <div style={{
        width: 32,
        height: 32,
        borderRadius: '50%',
        background: color,
        color: '#ffffff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 900,
        fontSize: 16,
        lineHeight: 1,
        flexShrink: 0
      }}>
        {no}
      </div>

      {/* Title */}
      <div style={{
        flex: 1,
        color: '#1e293b',
        fontSize: 17.5,
        fontWeight: 600,
        lineHeight: 1.25
      }}>
        {title}
      </div>

      {/* Date Chip */}
      {date && (
        <div style={{
          background: bgSoft,
          color: color,
          borderRadius: 999,
          padding: '4px 14px',
          fontSize: 15,
          fontWeight: 800,
          lineHeight: 1,
          whiteSpace: 'nowrap',
          flexShrink: 0,
          border: `1px solid ${color}30`
        }}>
          {date}
        </div>
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// SLIDE 1: Cover Hero & Pengumuman Utama
// ═══════════════════════════════════════════════════════════════════════════════
function Slide1({ formData }) {
  return (
    <article
      id="storySlide1"
      style={{
        width: W, height: H,
        display: 'flex', flexDirection: 'column',
        position: 'relative', overflow: 'hidden',
        background: 'linear-gradient(180deg, #0a1e45 0%, #0e2b60 45%, #153c82 100%)',
        flexShrink: 0
      }}
    >
      <HeaderBar formData={formData} />

      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '36px 44px 28px',
        position: 'relative',
        zIndex: 10
      }}>
        {/* Top Tag */}
        <div style={{ textAlign: 'center' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 12,
            background: 'rgba(255,199,0,0.12)', border: '2px solid rgba(255,199,0,0.5)',
            borderRadius: 999, padding: '10px 32px'
          }}>
            <span style={{ fontSize: 24 }}>📢</span>
            <span style={{ color: C.gold, fontWeight: 900, fontSize: 20, letterSpacing: '0.15em', lineHeight: 1, textTransform: 'uppercase' }}>
              PENGUMUMAN RESMI PILKADES {formData.inputTahun}
            </span>
          </div>
        </div>

        {/* Hero Section */}
        <div style={{
          background: 'rgba(255,255,255,0.06)',
          border: '2px solid rgba(255,255,255,0.15)',
          borderRadius: 28,
          padding: '36px 40px',
          display: 'flex',
          alignItems: 'center',
          gap: 32,
          position: 'relative',
          overflow: 'hidden'
        }}>
          <MegaphoneHero />
          <div style={{ flex: 1 }}>
            <div style={{ color: '#ffffff', fontWeight: 900, fontSize: 78, lineHeight: 0.9, textTransform: 'uppercase', letterSpacing: '0.02em' }}>
              GUNAKAN
            </div>
            <div style={{ color: C.gold, fontWeight: 900, fontSize: 78, lineHeight: 1.05, textTransform: 'uppercase', letterSpacing: '0.02em', textShadow: '0 4px 16px rgba(255,199,0,0.4)' }}>
              HAK PILIH!
            </div>
            <div style={{ color: 'rgba(255,255,255,0.9)', fontSize: 24, fontWeight: 600, lineHeight: 1.35, marginTop: 12 }}>
              Satu Suara Anda Menentukan Masa Depan<br />
              <span style={{ color: C.gold, fontWeight: 900, fontSize: 28 }}>Desa {formData.inputNamaDesa}</span>
            </div>
          </div>
          {/* Suara Anda Berarti decorative script */}
          <div style={{
            position: 'absolute', right: 28, top: 24, textAlign: 'center', transform: 'rotate(7deg)'
          }}>
            <div style={{
              color: '#ffffff', fontWeight: 900, fontSize: 26, lineHeight: 1.2, fontStyle: 'italic',
              textShadow: '0 2px 10px rgba(0,0,0,0.6)'
            }}>
              Suara<br />Anda<br /><span style={{ color: C.gold }}>Berarti!</span>
            </div>
            <div style={{ width: 64, height: 3, background: C.gold, marginTop: 6, marginLeft: 'auto', borderRadius: 2 }} />
          </div>
        </div>

        {/* Card: Hari Pemungutan Suara */}
        <div style={{
          background: '#ffffff',
          borderRadius: 24,
          padding: '28px 36px',
          display: 'flex',
          alignItems: 'center',
          gap: 28,
          boxShadow: '0 12px 36px rgba(0,0,0,0.25)'
        }}>
          <CalendarIcon3D />
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
              <span style={{ fontSize: 20 }}>🗓️</span>
              <span style={{ color: C.textMuted, fontWeight: 800, fontSize: 18, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                HARI PEMUNGUTAN SUARA
              </span>
            </div>
            <div style={{ color: C.navy, fontWeight: 900, fontSize: 52, lineHeight: 1.05, letterSpacing: '0.02em' }}>
              {formData.inputHariTanggal}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 10 }}>
              <span style={{ fontSize: 20 }}>⏰</span>
              <span style={{ color: C.textNavy, fontSize: 21, fontWeight: 700 }}>{formData.inputWaktuTPS}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 6 }}>
              <span style={{ fontSize: 20 }}>📍</span>
              <span style={{ color: C.textNavy, fontSize: 21, fontWeight: 700 }}>{formData.inputTempatTPS}</span>
            </div>
          </div>
          <BallotBox3D />
        </div>

        {/* Card: Posko & QR Code */}
        <div style={{ display: 'flex', gap: 20 }}>
          {/* Posko Info */}
          <div style={{
            flex: 1,
            background: 'linear-gradient(135deg, #0d224d 0%, #153c82 100%)',
            borderRadius: 22,
            padding: '24px 30px',
            border: '2px solid rgba(255,255,255,0.15)',
            display: 'flex', flexDirection: 'column', justifyContent: 'space-between'
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                <span style={{ fontSize: 24 }}>📍</span>
                <span style={{ color: C.gold, fontWeight: 900, fontSize: 22, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  POSKO SEKRETARIAT
                </span>
              </div>
              <div style={{ color: 'rgba(255,255,255,0.9)', fontSize: 18, fontWeight: 500, lineHeight: 1.4 }}>
                🏛️ {formData.poskoAlamat}
              </div>
            </div>
            <div style={{
              marginTop: 14,
              background: '#2563eb',
              borderRadius: 999,
              padding: '10px 24px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              width: 'fit-content'
            }}>
              <span style={{ fontSize: 20 }}>📞</span>
              <span style={{ color: '#ffffff', fontWeight: 800, fontSize: 20, letterSpacing: '0.04em' }}>
                {formData.inputHotline}
              </span>
            </div>
          </div>

          {/* QR Portal */}
          <div style={{
            width: 220,
            background: '#ffffff',
            borderRadius: 22,
            padding: '16px',
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8,
            boxShadow: '0 8px 24px rgba(0,0,0,0.2)'
          }}>
            <div style={{ width: 140, height: 140, padding: 6, background: '#ffffff', borderRadius: 12, border: '1.5px solid #e2e8f0' }}>
              <img src={formData.qrCodeUrl} alt="QR Code" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
            <div style={{
              background: C.gold,
              borderRadius: 999,
              padding: '6px 16px',
              color: C.navyDark,
              fontWeight: 900,
              fontSize: 14,
              display: 'flex', alignItems: 'center', gap: 6,
              letterSpacing: '0.05em'
            }}>
              <span>🌐</span>
              <span>PORTAL RESMI</span>
            </div>
          </div>
        </div>

        {/* Periode Footer Note */}
        <div style={{ textAlign: 'center', color: 'rgba(255,255,255,0.65)', fontSize: 18, fontWeight: 600, letterSpacing: '0.1em' }}>
          Masa Jabatan & Periode Kepemimpinan {formData.inputPeriode}
        </div>
      </div>

      <FooterBar slideNum={1} formData={formData} />
    </article>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// SLIDE 2: Susunan Panitia Pilkades
// ═══════════════════════════════════════════════════════════════════════════════
function Slide2({ formData }) {
  const inti = [
    { no: 1, jabatan: 'KETUA PANITIA', nama: formData.inputKetuaPanitia, color: C.gold, bgGrad: 'linear-gradient(145deg, #78350f, #0d224d)' },
    { no: 2, jabatan: 'SEKRETARIS', nama: formData.inputSekretaris, color: '#93c5fd', bgGrad: 'linear-gradient(145deg, #1e3a8a, #0d224d)' },
    { no: 3, jabatan: 'BENDAHARA', nama: formData.inputBendahara, color: '#6ee7b7', bgGrad: 'linear-gradient(145deg, #065f46, #0d224d)' },
  ];

  const seksi = [
    { no: 4, jabatan: 'SEKSI PENDAFTARAN PEMILIH', nama: formData.inputSeksiDaftar, icon: '📝' },
    { no: 5, jabatan: 'SEKSI PENJARINGAN', nama: formData.inputSeksiJaring, icon: '🔍' },
    { no: 6, jabatan: 'SEKSI PENYARINGAN', nama: formData.inputSeksiSaring, icon: '⚖️' },
    { no: 7, jabatan: 'SEKSI PEMUNGUTAN & HITUNG', nama: formData.inputSeksiHitung, icon: '🗳️' },
    { no: 8, jabatan: 'SEKSI KEAMANAN & KETERTIBAN', nama: formData.inputSeksiAman, icon: '🛡️' },
    { no: 9, jabatan: 'SEKSI PERLENGKAPAN & LOGISTIK', nama: formData.inputSeksiLengkap, icon: '📦' },
  ];

  return (
    <article
      id="storySlide2"
      style={{
        width: W, height: H,
        display: 'flex', flexDirection: 'column',
        position: 'relative', overflow: 'hidden',
        background: C.bgSoft,
        flexShrink: 0
      }}
    >
      <HeaderBar formData={formData} />

      <div style={{
        flex: 1,
        padding: '36px 44px 24px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}>
        {/* Title Card */}
        <div style={{
          background: 'linear-gradient(135deg, #0d224d 0%, #153c82 100%)',
          borderRadius: 24,
          padding: '28px 36px',
          textAlign: 'center',
          boxShadow: '0 8px 24px rgba(13,34,77,0.2)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14 }}>
            <span style={{ fontSize: 32 }}>🏛️</span>
            <div style={{ color: '#ffffff', fontWeight: 900, fontSize: 38, letterSpacing: '0.08em', textTransform: 'uppercase', lineHeight: 1 }}>
              SUSUNAN PANITIA
            </div>
            <span style={{ fontSize: 32 }}>🏛️</span>
          </div>
          <div style={{ color: C.gold, fontWeight: 800, fontSize: 22, letterSpacing: '0.15em', marginTop: 10, textTransform: 'uppercase', lineHeight: 1 }}>
            PILKADES DESA {formData.inputNamaDesa} TAHUN {formData.inputTahun}
          </div>

          {/* Pelindung & Penanggung Jawab */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 20, marginTop: 18 }}>
            <div style={{
              background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.25)',
              borderRadius: 999, padding: '8px 24px', display: 'flex', alignItems: 'center', gap: 10
            }}>
              <span style={{ fontSize: 18 }}>🛡️</span>
              <span style={{ color: '#ffffff', fontSize: 18, fontWeight: 700 }}>Pelindung: {formData.inputPelindung}</span>
            </div>
            <div style={{
              background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.25)',
              borderRadius: 999, padding: '8px 24px', display: 'flex', alignItems: 'center', gap: 10
            }}>
              <span style={{ fontSize: 18 }}>👥</span>
              <span style={{ color: '#ffffff', fontSize: 18, fontWeight: 700 }}>PJ: {formData.inputPenanggungJawab}</span>
            </div>
          </div>
        </div>

        {/* Top 3 Inti Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20 }}>
          {inti.map(item => (
            <div
              key={item.no}
              style={{
                background: item.bgGrad,
                borderRadius: 22,
                padding: '28px 20px 24px',
                textAlign: 'center',
                position: 'relative',
                border: `2.5px solid ${item.color}50`,
                boxShadow: '0 10px 28px rgba(0,0,0,0.15)'
              }}
            >
              <div style={{
                position: 'absolute', top: -14, right: 16,
                width: 36, height: 36, borderRadius: '50%',
                background: item.color, color: C.navyDark,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontWeight: 900, fontSize: 18, lineHeight: 1
              }}>
                {item.no}
              </div>
              <div style={{ color: item.color, fontWeight: 900, fontSize: 17, letterSpacing: '0.08em', textTransform: 'uppercase', lineHeight: 1.2 }}>
                {item.jabatan}
              </div>
              <div style={{ width: '60%', height: 1.5, background: 'rgba(255,255,255,0.2)', margin: '14px auto' }} />
              <div style={{ color: '#ffffff', fontWeight: 800, fontSize: 22, lineHeight: 1.3 }}>
                {item.nama}
              </div>
            </div>
          ))}
        </div>

        {/* 6 Seksi Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          {seksi.map(item => (
            <div
              key={item.no}
              style={{
                background: '#ffffff',
                borderRadius: 18,
                padding: '18px 20px',
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                border: '1.5px solid #e2e8f0',
                boxShadow: '0 4px 14px rgba(0,0,0,0.04)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{
                width: 44, height: 44, borderRadius: '50%',
                background: '#0d224d', color: C.gold,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontWeight: 900, fontSize: 18, lineHeight: 1, flexShrink: 0
              }}>
                {item.no}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ color: C.textMuted, fontWeight: 800, fontSize: 14, letterSpacing: '0.04em', textTransform: 'uppercase', lineHeight: 1.2 }}>
                  {item.icon} {item.jabatan}
                </div>
                <div style={{ color: C.textNavy, fontWeight: 800, fontSize: 20, lineHeight: 1.3, marginTop: 4 }}>
                  {item.nama}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner Posko */}
        <div style={{
          background: '#ffffff',
          borderRadius: 18,
          padding: '16px 28px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          border: '1.5px solid #e2e8f0'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ fontSize: 24 }}>🏛️</span>
            <div>
              <span style={{ color: C.textMuted, fontSize: 14, fontWeight: 700, textTransform: 'uppercase' }}>Sekretariat: </span>
              <span style={{ color: C.textNavy, fontSize: 16, fontWeight: 700 }}>{formData.poskoAlamat}</span>
            </div>
          </div>
          <div style={{ color: '#2563eb', fontWeight: 800, fontSize: 17 }}>
            📞 {formData.inputHotline}
          </div>
        </div>
      </div>

      <FooterBar slideNum={2} formData={formData} />
    </article>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// SLIDE 3: Tahapan Pencalonan Kepala Desa (10 Tahapan)
// ═══════════════════════════════════════════════════════════════════════════════
function Slide3({ formData, rows }) {
  return (
    <article
      id="storySlide3"
      style={{
        width: W, height: H,
        display: 'flex', flexDirection: 'column',
        position: 'relative', overflow: 'hidden',
        background: C.bgSoft,
        flexShrink: 0
      }}
    >
      <HeaderBar formData={formData} />

      <div style={{
        flex: 1,
        padding: '32px 44px 20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}>
        {/* Section Header */}
        <div style={{
          background: 'linear-gradient(135deg, #0d224d 0%, #0891b2 100%)',
          borderRadius: 22,
          padding: '22px 32px',
          display: 'flex',
          alignItems: 'center',
          gap: 20,
          boxShadow: '0 8px 24px rgba(8,145,178,0.2)'
        }}>
          <div style={{
            width: 60, height: 60, borderRadius: 16,
            background: 'rgba(255,255,255,0.18)', border: '2px solid rgba(255,255,255,0.3)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 32, flexShrink: 0
          }}>
            📋
          </div>
          <div>
            <div style={{ color: '#ffffff', fontWeight: 900, fontSize: 32, letterSpacing: '0.04em', textTransform: 'uppercase', lineHeight: 1.1 }}>
              TAHAPAN PENCALONAN KADES
            </div>
            <div style={{ color: '#a5f3fc', fontWeight: 700, fontSize: 18, marginTop: 4, lineHeight: 1.2 }}>
              Penjaringan & Penyaringan Bakal Calon Kepala Desa {formData.inputNamaDesa}
            </div>
          </div>
        </div>

        {/* 10 Numbered Rows Table Card */}
        <div style={{
          background: '#ffffff',
          borderRadius: 22,
          overflow: 'hidden',
          border: '1.5px solid #e2e8f0',
          boxShadow: '0 8px 24px rgba(0,0,0,0.06)'
        }}>
          {/* Header Row */}
          <div style={{
            background: '#0d224d',
            padding: '14px 24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <span style={{ color: C.gold, fontWeight: 900, fontSize: 17, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              URAIAN KEGIATAN PENJARINGAN & PENYARINGAN
            </span>
            <span style={{ color: C.gold, fontWeight: 900, fontSize: 17, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              WAKTU PELAKSANAAN
            </span>
          </div>

          {rows.map((row, i) => (
            <NumberedRowItem
              key={i}
              no={row.no}
              title={typeof row.kegiatan === 'string' ? row.kegiatan : row.kegiatan?.title}
              date={row.waktu}
              color={C.teal}
              bgSoft={C.tealSoft}
              isLast={i === rows.length - 1}
            />
          ))}
        </div>

        {/* Info Note */}
        <div style={{
          background: '#ffffff',
          borderRadius: 16,
          padding: '14px 24px',
          display: 'flex',
          alignItems: 'center',
          gap: 14,
          border: '1.5px solid #e2e8f0'
        }}>
          <span style={{ fontSize: 24 }}>💡</span>
          <div style={{ color: C.textNavy, fontSize: 16, fontWeight: 600 }}>
            Pendaftaran bakal calon dibuka secara transparan di Sekretariat Panitia. Seluruh berkas diverifikasi sesuai peraturan perundang-undangan.
          </div>
        </div>
      </div>

      <FooterBar slideNum={3} formData={formData} />
    </article>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// SLIDE 4: Tahapan Pemilih, Undian, Kampanye & Pemungutan (Split Breakdown)
// ═══════════════════════════════════════════════════════════════════════════════
function Slide4({ formData, pendataan, kampanye, pemungutan }) {
  return (
    <article
      id="storySlide4"
      style={{
        width: W, height: H,
        display: 'flex', flexDirection: 'column',
        position: 'relative', overflow: 'hidden',
        background: C.bgSoft,
        flexShrink: 0
      }}
    >
      <HeaderBar formData={formData} />

      <div style={{
        flex: 1,
        padding: '28px 44px 18px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}>
        {/* Section 1: Pendataan Pemilih (8 Items) */}
        <div style={{
          background: '#ffffff',
          borderRadius: 20,
          overflow: 'hidden',
          border: '1.5px solid #e2e8f0',
          boxShadow: '0 6px 18px rgba(0,0,0,0.05)'
        }}>
          <div style={{
            background: 'linear-gradient(90deg, #059669, #0d224d)',
            padding: '12px 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ fontSize: 20 }}>📝</span>
              <span style={{ color: '#ffffff', fontWeight: 900, fontSize: 18, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                1. PENDAFTARAN & PENETAPAN PEMILIH
              </span>
            </div>
            <span style={{ color: C.gold, fontWeight: 800, fontSize: 15 }}>WAKTU</span>
          </div>
          {pendataan.map((row, i) => (
            <NumberedRowItem
              key={i}
              no={row.no}
              title={typeof row.kegiatan === 'string' ? row.kegiatan : row.kegiatan?.title}
              date={row.waktu}
              color={C.green}
              bgSoft={C.greenSoft}
              isLast={i === pendataan.length - 1}
            />
          ))}
        </div>

        {/* Section 2: Undian & Kampanye (3 Items) */}
        <div style={{
          background: '#ffffff',
          borderRadius: 20,
          overflow: 'hidden',
          border: '1.5px solid #e2e8f0',
          boxShadow: '0 6px 18px rgba(0,0,0,0.05)'
        }}>
          <div style={{
            background: 'linear-gradient(90deg, #2563eb, #0d224d)',
            padding: '12px 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ fontSize: 20 }}>📣</span>
              <span style={{ color: '#ffffff', fontWeight: 900, fontSize: 18, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                2. UNDIAN NOMOR, KAMPANYE & MASA TENANG
              </span>
            </div>
            <span style={{ color: C.gold, fontWeight: 800, fontSize: 15 }}>WAKTU</span>
          </div>
          {kampanye.map((row, i) => (
            <NumberedRowItem
              key={i}
              no={row.no}
              title={typeof row.kegiatan === 'string' ? row.kegiatan : row.kegiatan?.title}
              date={row.waktu}
              color={C.blue}
              bgSoft={C.blueSoft}
              isLast={i === kampanye.length - 1}
            />
          ))}
        </div>

        {/* Section 3: Pemungutan & Penetapan (2 Items) */}
        <div style={{
          background: '#ffffff',
          borderRadius: 20,
          overflow: 'hidden',
          border: '1.5px solid #e2e8f0',
          boxShadow: '0 6px 18px rgba(0,0,0,0.05)'
        }}>
          <div style={{
            background: 'linear-gradient(90deg, #7c3aed, #0d224d)',
            padding: '12px 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ fontSize: 20 }}>🏆</span>
              <span style={{ color: '#ffffff', fontWeight: 900, fontSize: 18, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                3. PEMUNGUTAN SUARA & PENETAPAN KADES
              </span>
            </div>
            <span style={{ color: C.gold, fontWeight: 800, fontSize: 15 }}>WAKTU</span>
          </div>
          {pemungutan.map((row, i) => (
            <NumberedRowItem
              key={i}
              no={row.no}
              title={typeof row.kegiatan === 'string' ? row.kegiatan : row.kegiatan?.title}
              date={row.waktu}
              color={C.purple}
              bgSoft={C.purpleSoft}
              isLast={i === pemungutan.length - 1}
            />
          ))}
        </div>
      </div>

      <FooterBar slideNum={4} formData={formData} />
    </article>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// SLIDE 5: Full Infographic Summary (EXACT 1:1 Match with User Reference Photo)
// ═══════════════════════════════════════════════════════════════════════════════
function Slide5({ formData, pendataan, kampanye, pemungutan }) {
  return (
    <article
      id="storySlide5"
      style={{
        width: W, height: H,
        display: 'flex', flexDirection: 'column',
        position: 'relative', overflow: 'hidden',
        background: 'linear-gradient(180deg, #0a1f47 0%, #10346c 28%, #dce7f5 35%, #eef4fb 100%)',
        flexShrink: 0
      }}
    >
      <HeaderBar formData={formData} />

      {/* Top Hero Banner */}
      <div style={{
        padding: '24px 44px 18px',
        display: 'flex',
        alignItems: 'center',
        gap: 24,
        position: 'relative'
      }}>
        <MegaphoneHero />
        <div style={{ flex: 1 }}>
          <div style={{ color: '#ffffff', fontWeight: 900, fontSize: 62, lineHeight: 0.9, textTransform: 'uppercase', letterSpacing: '0.02em' }}>
            GUNAKAN
          </div>
          <div style={{ color: C.gold, fontWeight: 900, fontSize: 62, lineHeight: 1.05, textTransform: 'uppercase', letterSpacing: '0.02em' }}>
            HAK PILIH!
          </div>
          <div style={{ color: 'rgba(255,255,255,0.9)', fontSize: 20, fontWeight: 600, lineHeight: 1.3, marginTop: 6 }}>
            Satu Suara Anda Menentukan<br />
            Masa Depan Desa <span style={{ color: C.gold, fontWeight: 900 }}>{formData.inputNamaDesa}</span>
          </div>
        </div>

        {/* Suara Anda Berarti Script */}
        <div style={{
          textAlign: 'center', transform: 'rotate(7deg)', marginRight: 8
        }}>
          <div style={{
            color: '#ffffff', fontWeight: 900, fontSize: 28, lineHeight: 1.2, fontStyle: 'italic',
            textShadow: '0 2px 10px rgba(0,0,0,0.5)'
          }}>
            Suara<br />Anda<br /><span style={{ color: C.gold }}>Berarti!</span>
          </div>
          <div style={{ width: 68, height: 3.5, background: C.gold, marginTop: 4, marginLeft: 'auto', borderRadius: 2 }} />
        </div>
      </div>

      {/* Main Content Area */}
      <div style={{
        flex: 1,
        padding: '0 44px 20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}>
        {/* Card 1: Hari Pemungutan Suara */}
        <div style={{
          background: '#ffffff',
          borderRadius: 22,
          padding: '18px 28px',
          display: 'flex',
          alignItems: 'center',
          gap: 20,
          boxShadow: '0 8px 24px rgba(15,23,42,0.1)',
          border: '1.5px solid #e2e8f0'
        }}>
          <CalendarIcon3D />
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 2 }}>
              <span style={{ fontSize: 18 }}>🗓️</span>
              <span style={{ color: C.textMuted, fontWeight: 800, fontSize: 16, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                HARI PEMUNGUTAN SUARA
              </span>
            </div>
            <div style={{ color: C.navy, fontWeight: 900, fontSize: 44, lineHeight: 1.05, letterSpacing: '0.02em' }}>
              {formData.inputHariTanggal}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 6 }}>
              <span style={{ fontSize: 18 }}>⏰</span>
              <span style={{ color: C.textNavy, fontSize: 18, fontWeight: 700 }}>{formData.inputWaktuTPS}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 4 }}>
              <span style={{ fontSize: 18 }}>📍</span>
              <span style={{ color: C.textNavy, fontSize: 18, fontWeight: 700 }}>{formData.inputTempatTPS}</span>
            </div>
          </div>
          <BallotBox3D />
        </div>

        {/* Card 2: Posko Sekretariat + QR Portal */}
        <div style={{ display: 'flex', gap: 16 }}>
          {/* Posko Box */}
          <div style={{
            flex: 1,
            background: 'linear-gradient(135deg, #0d224d 0%, #133570 100%)',
            borderRadius: 20,
            padding: '18px 24px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '0 6px 18px rgba(13,34,77,0.15)'
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                <span style={{ fontSize: 22 }}>📍</span>
                <span style={{ color: C.gold, fontWeight: 900, fontSize: 20, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  POSKO SEKRETARIAT
                </span>
              </div>
              <div style={{ color: 'rgba(255,255,255,0.9)', fontSize: 16, fontWeight: 500, lineHeight: 1.35 }}>
                🏛️ Alamat Sekretariat: {formData.poskoAlamat}
              </div>
            </div>
            <div style={{
              marginTop: 10,
              background: '#2563eb',
              borderRadius: 999,
              padding: '8px 20px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              width: 'fit-content'
            }}>
              <span style={{ fontSize: 18 }}>📞</span>
              <span style={{ color: '#ffffff', fontWeight: 800, fontSize: 17, letterSpacing: '0.02em' }}>
                {formData.inputHotline}
              </span>
            </div>
          </div>

          {/* QR Portal Box */}
          <div style={{
            width: 170,
            background: '#ffffff',
            borderRadius: 20,
            padding: '12px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 6,
            border: '1.5px solid #e2e8f0',
            boxShadow: '0 6px 18px rgba(0,0,0,0.06)'
          }}>
            <div style={{ width: 104, height: 104, padding: 4, background: '#ffffff', borderRadius: 8 }}>
              <img src={formData.qrCodeUrl} alt="QR Code" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
            <div style={{
              background: C.gold,
              borderRadius: 999,
              padding: '4px 14px',
              color: C.navyDark,
              fontWeight: 900,
              fontSize: 12.5,
              display: 'flex', alignItems: 'center', gap: 4,
              letterSpacing: '0.04em'
            }}>
              <span>🌐</span>
              <span>PORTAL RESMI</span>
            </div>
          </div>
        </div>

        {/* Card 3: Combined Tahapan Sections Card (Matching exact user photo!) */}
        <div style={{
          background: '#ffffff',
          borderRadius: 22,
          padding: '16px 20px',
          border: '1.5px solid #e2e8f0',
          boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
          display: 'flex',
          flexDirection: 'column',
          gap: 12
        }}>
          {/* Section 1: Green Tahapan Pemilih */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
              <div style={{
                width: 38, height: 38, borderRadius: 10,
                background: C.greenSoft, border: `1.5px solid ${C.green}40`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 20, color: C.green, flexShrink: 0
              }}>
                📄
              </div>
              <div>
                <div style={{ color: C.green, fontWeight: 900, fontSize: 18, letterSpacing: '0.04em', textTransform: 'uppercase', lineHeight: 1 }}>
                  TAHAPAN PEMILIH & KAMPANYE
                </div>
                <div style={{ color: C.textMuted, fontSize: 13, fontWeight: 600, marginTop: 2, lineHeight: 1 }}>
                  Pilkades Desa {formData.inputNamaDesa} {formData.inputTahun}
                </div>
              </div>
            </div>

            <div style={{ borderRadius: 12, overflow: 'hidden', border: '1px solid #f1f5f9' }}>
              {pendataan.map((row, i) => (
                <NumberedRowItem
                  key={i}
                  no={row.no}
                  title={typeof row.kegiatan === 'string' ? row.kegiatan : row.kegiatan?.title}
                  date={row.waktu}
                  color={C.green}
                  bgSoft={C.greenSoft}
                  isLast={i === pendataan.length - 1}
                />
              ))}
            </div>
          </div>

          {/* Section 2: Blue Undian & Kampanye */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
              <div style={{
                width: 34, height: 34, borderRadius: 10,
                background: C.blueSoft, border: `1.5px solid ${C.blue}40`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 18, color: C.blue, flexShrink: 0
              }}>
                📣
              </div>
              <div style={{ color: C.blue, fontWeight: 900, fontSize: 17, letterSpacing: '0.04em', textTransform: 'uppercase', lineHeight: 1 }}>
                UNDIAN, KAMPANYE & MASA TENANG
              </div>
            </div>

            <div style={{ borderRadius: 12, overflow: 'hidden', border: '1px solid #f1f5f9' }}>
              {kampanye.map((row, i) => (
                <NumberedRowItem
                  key={i}
                  no={row.no}
                  title={typeof row.kegiatan === 'string' ? row.kegiatan : row.kegiatan?.title}
                  date={row.waktu}
                  color={C.blue}
                  bgSoft={C.blueSoft}
                  isLast={i === kampanye.length - 1}
                />
              ))}
            </div>
          </div>

          {/* Section 3: Purple Pemungutan & Penetapan */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
              <div style={{
                width: 34, height: 34, borderRadius: 10,
                background: C.purpleSoft, border: `1.5px solid ${C.purple}40`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 18, color: C.purple, flexShrink: 0
              }}>
                🏆
              </div>
              <div style={{ color: C.purple, fontWeight: 900, fontSize: 17, letterSpacing: '0.04em', textTransform: 'uppercase', lineHeight: 1 }}>
                PEMUNGUTAN & PENETAPAN
              </div>
            </div>

            <div style={{ borderRadius: 12, overflow: 'hidden', border: '1px solid #f1f5f9' }}>
              {pemungutan.map((row, i) => (
                <NumberedRowItem
                  key={i}
                  no={row.no}
                  title={typeof row.kegiatan === 'string' ? row.kegiatan : row.kegiatan?.title}
                  date={row.waktu}
                  color={C.purple}
                  bgSoft={C.purpleSoft}
                  isLast={i === pemungutan.length - 1}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <FooterBar slideNum={5} formData={formData} />
    </article>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// MAIN COMPONENT: Render All 5 Slides in Vertical Stack
// ═══════════════════════════════════════════════════════════════════════════════
export default function StoryWASheet() {
  const { formData } = usePoster();

  const pencalonanRows = formData.tahapanPencalonan?.length >= 10 ? formData.tahapanPencalonan : [];
  const pendataanRows = formData.tahapanPendataan?.length >= 8 ? formData.tahapanPendataan : [];
  const kampanyeRows = formData.tahapanKampanye?.length >= 3 ? formData.tahapanKampanye : [];
  const pemungutanRows = formData.tahapanPemungutan?.length >= 2 ? formData.tahapanPemungutan : [];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 40, alignItems: 'center', paddingBottom: 60 }}>
      <Slide1 formData={formData} />
      <Slide2 formData={formData} />
      <Slide3 formData={formData} rows={pencalonanRows} />
      <Slide4 formData={formData} pendataan={pendataanRows} kampanye={kampanyeRows} pemungutan={pemungutanRows} />
      <Slide5 formData={formData} pendataan={pendataanRows} kampanye={kampanyeRows} pemungutan={pemungutanRows} />
    </div>
  );
}
