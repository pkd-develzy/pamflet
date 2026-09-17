import React, { useState } from 'react';
import { usePoster } from '../../context/PosterContext';
import {
  Building2,
  Calendar,
  Users,
  Stamp,
  Image as ImageIcon,
  ChevronDown,
  ChevronRight,
  Info
} from 'lucide-react';

export default function Sidebar() {
  const {
    isSidebarOpen,
    formData,
    updateFormField,
    stampState,
    updateStamp,
    showToast
  } = usePoster();

  const [activeSection, setActiveSection] = useState('identitas');

  if (!isSidebarOpen) return null;

  const toggleSection = (section) => {
    setActiveSection(prev => (prev === section ? '' : section));
  };

  const handleFileUpload = (field, e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        updateFormField(field, event.target.result);
        showToast('Gambar berhasil diperbarui', 'success');
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <aside className="no-print w-80 md:w-96 bg-slate-900/95 border-r border-slate-800 flex flex-col h-[calc(100vh-4rem)] shrink-0 overflow-hidden shadow-2xl z-30 transition-all">
      {/* Sidebar Header */}
      <div className="p-3.5 border-b border-slate-800 bg-slate-950/50 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-1.5 bg-amber-500/10 rounded-md text-amber-400 border border-amber-500/30">
            <Building2 className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-xs font-bold text-slate-100 uppercase tracking-wider">Editor Langsung</h2>
            <p className="text-[10px] text-slate-400">Data tersinkron otomatis ke poster</p>
          </div>
        </div>
        <div className="text-[10px] text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded-full font-mono">
          Auto-Saved
        </div>
      </div>

      {/* Accordion Content */}
      <div className="flex-1 overflow-y-auto p-3 space-y-2.5 text-xs">
        {/* Section 1: Identitas Desa */}
        <div className="border border-slate-800 rounded-xl overflow-hidden bg-slate-950/30">
          <button
            onClick={() => toggleSection('identitas')}
            className="w-full px-3 py-2.5 flex items-center justify-between bg-slate-800/40 hover:bg-slate-800/70 transition text-left"
          >
            <div className="flex items-center gap-2 text-slate-200 font-semibold">
              <Building2 className="w-4 h-4 text-amber-400" />
              <span>1. Identitas Wilayah & Kop</span>
            </div>
            {activeSection === 'identitas' ? <ChevronDown className="w-4 h-4 text-slate-400" /> : <ChevronRight className="w-4 h-4 text-slate-400" />}
          </button>

          {activeSection === 'identitas' && (
            <div className="p-3 space-y-2.5 bg-slate-900/50">
              <div>
                <label className="block text-[11px] font-medium text-slate-400 mb-1">Nama Desa</label>
                <input
                  type="text"
                  value={formData.inputNamaDesa}
                  onChange={e => updateFormField('inputNamaDesa', e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-2.5 py-1.5 text-slate-100 focus:outline-none focus:border-amber-500 uppercase font-semibold"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-[11px] font-medium text-slate-400 mb-1">Kecamatan</label>
                  <input
                    type="text"
                    value={formData.inputKecamatan}
                    onChange={e => updateFormField('inputKecamatan', e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-2.5 py-1.5 text-slate-100 focus:outline-none focus:border-amber-500 uppercase"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-medium text-slate-400 mb-1">Kabupaten</label>
                  <input
                    type="text"
                    value={formData.inputKabupaten}
                    onChange={e => updateFormField('inputKabupaten', e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-2.5 py-1.5 text-slate-100 focus:outline-none focus:border-amber-500 uppercase"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-[11px] font-medium text-slate-400 mb-1">Tahun Pilkades</label>
                  <input
                    type="text"
                    value={formData.inputTahun}
                    onChange={e => updateFormField('inputTahun', e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-2.5 py-1.5 text-slate-100 focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-medium text-slate-400 mb-1">Periode Jabatan</label>
                  <input
                    type="text"
                    value={formData.inputPeriode}
                    onChange={e => updateFormField('inputPeriode', e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-2.5 py-1.5 text-slate-100 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Section 2: Jadwal Hari-H */}
        <div className="border border-slate-800 rounded-xl overflow-hidden bg-slate-950/30">
          <button
            onClick={() => toggleSection('jadwal')}
            className="w-full px-3 py-2.5 flex items-center justify-between bg-slate-800/40 hover:bg-slate-800/70 transition text-left"
          >
            <div className="flex items-center gap-2 text-slate-200 font-semibold">
              <Calendar className="w-4 h-4 text-rose-400" />
              <span>2. Hari-H & Info Pemungutan</span>
            </div>
            {activeSection === 'jadwal' ? <ChevronDown className="w-4 h-4 text-slate-400" /> : <ChevronRight className="w-4 h-4 text-slate-400" />}
          </button>

          {activeSection === 'jadwal' && (
            <div className="p-3 space-y-2.5 bg-slate-900/50">
              <div>
                <label className="block text-[11px] font-medium text-slate-400 mb-1">Hari & Tanggal Coblosan</label>
                <input
                  type="text"
                  value={formData.inputHariTanggal}
                  onChange={e => updateFormField('inputHariTanggal', e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-2.5 py-1.5 text-slate-100 focus:outline-none focus:border-amber-500 font-semibold"
                />
              </div>

              <div>
                <label className="block text-[11px] font-medium text-slate-400 mb-1">Waktu Pemungutan di TPS</label>
                <input
                  type="text"
                  value={formData.inputWaktuTPS}
                  onChange={e => updateFormField('inputWaktuTPS', e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-2.5 py-1.5 text-slate-100 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-[11px] font-medium text-slate-400 mb-1">Lokasi / Tempat TPS</label>
                <input
                  type="text"
                  value={formData.inputTempatTPS}
                  onChange={e => updateFormField('inputTempatTPS', e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-2.5 py-1.5 text-slate-100 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-[11px] font-medium text-slate-400 mb-1">Hotline / WA</label>
                  <input
                    type="text"
                    value={formData.inputHotline}
                    onChange={e => updateFormField('inputHotline', e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-2.5 py-1.5 text-slate-100 focus:outline-none focus:border-amber-500 font-mono"
                  />
                </div>
                <div className="border-t border-slate-800 pt-2 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-amber-400 uppercase tracking-wider font-semibold">Posko Sekretariat &amp; Informasi</span>
                    <span className="text-[9px] text-slate-400 font-mono">{formData.poskoSpacing ?? 8}px spasi</span>
                  </div>

                  {/* Spacing Slider */}
                  <div>
                    <label className="block text-[10px] text-slate-400 mb-1">Jarak Antar Baris (Spasi / Enter):</label>
                    <input
                      type="range"
                      min="2"
                      max="28"
                      step="2"
                      value={formData.poskoSpacing ?? 8}
                      onChange={e => updateFormField('poskoSpacing', parseInt(e.target.value, 10))}
                      className="w-full accent-amber-500 cursor-pointer"
                    />
                    <div className="grid grid-cols-4 gap-1 mt-1">
                      <button
                        type="button"
                        onClick={() => updateFormField('poskoSpacing', 4)}
                        className={`py-0.5 text-[9px] rounded border ${
                          (formData.poskoSpacing ?? 8) === 4
                            ? 'bg-amber-500 text-slate-950 font-bold border-amber-400'
                            : 'bg-slate-800 text-slate-300 border-slate-700'
                        }`}
                      >
                        Rapat (4px)
                      </button>
                      <button
                        type="button"
                        onClick={() => updateFormField('poskoSpacing', 8)}
                        className={`py-0.5 text-[9px] rounded border ${
                          (formData.poskoSpacing ?? 8) === 8
                            ? 'bg-amber-500 text-slate-950 font-bold border-amber-400'
                            : 'bg-slate-800 text-slate-300 border-slate-700'
                        }`}
                      >
                        Normal (8px)
                      </button>
                      <button
                        type="button"
                        onClick={() => updateFormField('poskoSpacing', 14)}
                        className={`py-0.5 text-[9px] rounded border ${
                          (formData.poskoSpacing ?? 8) === 14
                            ? 'bg-amber-500 text-slate-950 font-bold border-amber-400'
                            : 'bg-slate-800 text-slate-300 border-slate-700'
                        }`}
                      >
                        Renggang (14px)
                      </button>
                      <button
                        type="button"
                        onClick={() => updateFormField('poskoSpacing', 20)}
                        className={`py-0.5 text-[9px] rounded border ${
                          (formData.poskoSpacing ?? 8) === 20
                            ? 'bg-amber-500 text-slate-950 font-bold border-amber-400'
                            : 'bg-slate-800 text-slate-300 border-slate-700'
                        }`}
                      >
                        Lebar (20px)
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] text-slate-400 mb-0.5">Baris 1 (Alamat Sekretariat):</label>
                    <textarea
                      rows={2}
                      value={formData.poskoAlamat ?? `Alamat Sekretariat: Balai Desa ${formData.inputNamaDesa}, Kec. ${formData.inputKecamatan}, Kab. ${formData.inputKabupaten}.`}
                      onChange={e => updateFormField('poskoAlamat', e.target.value)}
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-2.5 py-1.5 text-slate-100 focus:outline-none focus:border-amber-500 text-[11px]"
                      placeholder="Bisa tekan Enter untuk baris baru"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] text-slate-400 mb-0.5">Baris 2 (Syarat Mencoblos):</label>
                    <textarea
                      rows={2}
                      value={formData.poskoSyarat ?? 'Syarat Mencoblos: Membawa Surat Undangan (C6) & e-KTP / KK Asli.'}
                      onChange={e => updateFormField('poskoSyarat', e.target.value)}
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-2.5 py-1.5 text-slate-100 focus:outline-none focus:border-amber-500 text-[11px]"
                      placeholder="Bisa tekan Enter untuk baris baru"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] text-slate-400 mb-0.5">Baris 3 (Kontak Person):</label>
                    <textarea
                      rows={3}
                      value={formData.poskoKontak ?? "KONTAK PERSON:\n0878-3018-8452\n0857-8635-5600"}
                      onChange={e => updateFormField('poskoKontak', e.target.value)}
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-2.5 py-1.5 text-slate-100 focus:outline-none focus:border-amber-500 text-[11px] font-mono"
                      placeholder="Bisa tekan Enter untuk baris baru"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Section 3: Panitia & Penandatangan */}
        <div className="border border-slate-800 rounded-xl overflow-hidden bg-slate-950/30">
          <button
            onClick={() => toggleSection('panitia')}
            className="w-full px-3 py-2.5 flex items-center justify-between bg-slate-800/40 hover:bg-slate-800/70 transition text-left"
          >
            <div className="flex items-center gap-2 text-slate-200 font-semibold">
              <Users className="w-4 h-4 text-sky-400" />
              <span>3. Panitia & Penandatangan</span>
            </div>
            {activeSection === 'panitia' ? <ChevronDown className="w-4 h-4 text-slate-400" /> : <ChevronRight className="w-4 h-4 text-slate-400" />}
          </button>

          {activeSection === 'panitia' && (
            <div className="p-3 space-y-2.5 bg-slate-900/50">
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-[11px] font-medium text-slate-400 mb-1">Ketua Panitia</label>
                  <input
                    type="text"
                    value={formData.inputKetuaPanitia}
                    onChange={e => updateFormField('inputKetuaPanitia', e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-2.5 py-1.5 text-slate-100 focus:outline-none focus:border-amber-500 font-medium"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-medium text-slate-400 mb-1">Sekretaris</label>
                  <input
                    type="text"
                    value={formData.inputSekretaris}
                    onChange={e => updateFormField('inputSekretaris', e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-2.5 py-1.5 text-slate-100 focus:outline-none focus:border-amber-500 font-medium"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-[11px] font-medium text-slate-400 mb-1">Tanggal TTD</label>
                  <input
                    type="text"
                    value={formData.inputTglPenetapan}
                    onChange={e => updateFormField('inputTglPenetapan', e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-2.5 py-1.5 text-slate-100 focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-medium text-slate-400 mb-1">Lokasi TTD</label>
                  <input
                    type="text"
                    value={formData.inputLokasiPenetapan}
                    onChange={e => updateFormField('inputLokasiPenetapan', e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-2.5 py-1.5 text-slate-100 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>


              <div className="border-t border-slate-800 pt-2 space-y-2">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Pejabat & Seksi Lengkap</span>
                <div>
                  <label className="block text-[10px] text-slate-400">Pelindung:</label>
                  <input
                    type="text"
                    value={formData.inputPelindung}
                    onChange={e => updateFormField('inputPelindung', e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 rounded px-2 py-1 text-slate-200 text-xs"
                  />
                </div>
                <div>
                  <label className="block text-[10px] text-slate-400">Penanggung Jawab:</label>
                  <input
                    type="text"
                    value={formData.inputPenanggungJawab}
                    onChange={e => updateFormField('inputPenanggungJawab', e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 rounded px-2 py-1 text-slate-200 text-xs"
                  />
                </div>
                <div>
                  <label className="block text-[10px] text-slate-400">Bendahara:</label>
                  <input
                    type="text"
                    value={formData.inputBendahara}
                    onChange={e => updateFormField('inputBendahara', e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 rounded px-2 py-1 text-slate-200 text-xs"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Section 4: Stempel Panitia */}
        <div className="border border-slate-800 rounded-xl overflow-hidden bg-slate-950/30">
          <button
            onClick={() => toggleSection('stempel')}
            className="w-full px-3 py-2.5 flex items-center justify-between bg-slate-800/40 hover:bg-slate-800/70 transition text-left"
          >
            <div className="flex items-center gap-2 text-slate-200 font-semibold">
              <Stamp className="w-4 h-4 text-purple-400" />
              <span>4. Pengaturan Stempel</span>
            </div>
            {activeSection === 'stempel' ? <ChevronDown className="w-4 h-4 text-slate-400" /> : <ChevronRight className="w-4 h-4 text-slate-400" />}
          </button>

          {activeSection === 'stempel' && (
            <div className="p-3 space-y-3 bg-slate-900/50">
              <div className="flex items-center justify-between">
                <span className="text-slate-300 font-medium">Tampilkan Stempel</span>
                <input
                  type="checkbox"
                  checked={stampState.visible}
                  onChange={e => updateStamp({ visible: e.target.checked })}
                  className="w-4 h-4 text-amber-500 rounded focus:ring-0 cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-[11px] text-slate-400 mb-1">
                  <span>Ukuran Stempel:</span>
                  <span className="font-mono text-amber-400 font-bold">{Math.round(stampState.scale * 100)}%</span>
                </div>
                <input
                  type="range"
                  min="0.5"
                  max="1.6"
                  step="0.05"
                  value={stampState.scale}
                  onChange={e => updateStamp({ scale: parseFloat(e.target.value) })}
                  className="w-full accent-amber-500 cursor-pointer"
                />
              </div>

              {/* Kemiringan / Rotasi Stempel */}
              <div>
                <div className="flex justify-between text-[11px] text-slate-400 mb-1">
                  <span>Kemiringan / Rotasi:</span>
                  <span className="font-mono text-amber-400 font-bold">
                    {(typeof stampState.rotation === 'number' ? stampState.rotation : -8) > 0
                      ? `+${stampState.rotation}°`
                      : `${typeof stampState.rotation === 'number' ? stampState.rotation : -8}°`}
                  </span>
                </div>
                <input
                  type="range"
                  min="-45"
                  max="45"
                  step="1"
                  value={typeof stampState.rotation === 'number' ? stampState.rotation : -8}
                  onChange={e => updateStamp({ rotation: parseInt(e.target.value, 10) })}
                  className="w-full accent-amber-500 cursor-pointer"
                />

                {/* Preset Kemiringan */}
                <div className="grid grid-cols-4 gap-1 mt-1.5">
                  <button
                    type="button"
                    onClick={() => updateStamp({ rotation: 0 })}
                    className={`py-0.5 text-[9.5px] rounded border transition ${
                      (stampState.rotation || 0) === 0
                        ? 'bg-amber-500 text-slate-950 font-bold border-amber-400'
                        : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
                    }`}
                  >
                    Tegak (0°)
                  </button>
                  <button
                    type="button"
                    onClick={() => updateStamp({ rotation: -8 })}
                    className={`py-0.5 text-[9.5px] rounded border transition ${
                      (stampState.rotation || 0) === -8
                        ? 'bg-amber-500 text-slate-950 font-bold border-amber-400'
                        : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
                    }`}
                  >
                    Alami (-8°)
                  </button>
                  <button
                    type="button"
                    onClick={() => updateStamp({ rotation: -15 })}
                    className={`py-0.5 text-[9.5px] rounded border transition ${
                      (stampState.rotation || 0) === -15
                        ? 'bg-amber-500 text-slate-950 font-bold border-amber-400'
                        : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
                    }`}
                  >
                    Kiri (-15°)
                  </button>
                  <button
                    type="button"
                    onClick={() => updateStamp({ rotation: 10 })}
                    className={`py-0.5 text-[9.5px] rounded border transition ${
                      (stampState.rotation || 0) === 10
                        ? 'bg-amber-500 text-slate-950 font-bold border-amber-400'
                        : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
                    }`}
                  >
                    Kanan (+10°)
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between pt-1">
                <button
                  type="button"
                  onClick={() => updateStamp({ position: { x: 38, y: -25 }, scale: 0.95, rotation: -8 })}
                  className="px-2.5 py-1 text-[11px] bg-slate-800 hover:bg-slate-700 text-slate-300 rounded border border-slate-700"
                >
                  Reset Posisi & Kemiringan
                </button>
                <span className="text-[10px] text-slate-400 italic">Bisa digeser & diputar</span>
              </div>
            </div>
          )}
        </div>

        {/* Section 5: Ganti Gambar / Logo */}
        <div className="border border-slate-800 rounded-xl overflow-hidden bg-slate-950/30">
          <button
            onClick={() => toggleSection('gambar')}
            className="w-full px-3 py-2.5 flex items-center justify-between bg-slate-800/40 hover:bg-slate-800/70 transition text-left"
          >
            <div className="flex items-center gap-2 text-slate-200 font-semibold">
              <ImageIcon className="w-4 h-4 text-emerald-400" />
              <span>5. Ganti Logo & Stempel</span>
            </div>
            {activeSection === 'gambar' ? <ChevronDown className="w-4 h-4 text-slate-400" /> : <ChevronRight className="w-4 h-4 text-slate-400" />}
          </button>

          {activeSection === 'gambar' && (
            <div className="p-3 space-y-3 bg-slate-900/50">
              <div>
                <label className="block text-[11px] text-slate-400 mb-1">Logo Kabupaten Tegal (Kiri)</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={e => handleFileUpload('logoPemdaUrl', e)}
                  className="w-full text-slate-400 file:mr-2 file:py-1 file:px-2 file:rounded file:border-0 file:text-[11px] file:bg-slate-800 file:text-slate-300 hover:file:bg-slate-700 cursor-pointer"
                />
              </div>
              <div>
                <label className="block text-[11px] text-slate-400 mb-1">Logo Pilkades (Kanan)</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={e => handleFileUpload('logoPilkadesUrl', e)}
                  className="w-full text-slate-400 file:mr-2 file:py-1 file:px-2 file:rounded file:border-0 file:text-[11px] file:bg-slate-800 file:text-slate-300 hover:file:bg-slate-700 cursor-pointer"
                />
              </div>
              <div>
                <label className="block text-[11px] text-slate-400 mb-1">Stempel Panitia</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={e => handleFileUpload('stempelPanitiaUrl', e)}
                  className="w-full text-slate-400 file:mr-2 file:py-1 file:px-2 file:rounded file:border-0 file:text-[11px] file:bg-slate-800 file:text-slate-300 hover:file:bg-slate-700 cursor-pointer"
                />
              </div>
              <div>
                <label className="block text-[11px] text-slate-400 mb-1">QR WhatsApp Kontak 1</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={e => handleFileUpload('qrWa1Url', e)}
                  className="w-full text-slate-400 file:mr-2 file:py-1 file:px-2 file:rounded file:border-0 file:text-[11px] file:bg-slate-800 file:text-slate-300 hover:file:bg-slate-700 cursor-pointer"
                />
              </div>
              <div>
                <label className="block text-[11px] text-slate-400 mb-1">QR WhatsApp Kontak 2</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={e => handleFileUpload('qrWa2Url', e)}
                  className="w-full text-slate-400 file:mr-2 file:py-1 file:px-2 file:rounded file:border-0 file:text-[11px] file:bg-slate-800 file:text-slate-300 hover:file:bg-slate-700 cursor-pointer"
                />
              </div>
            </div>
          )}
        </div>

        {/* Info Box */}
        <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-xl flex gap-2.5 items-start">
          <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <p className="text-[11px] text-amber-200/90 leading-relaxed">
            <strong>Petunjuk:</strong> Anda juga dapat mengklik langsung tulisan pada poster untuk mengeditnya secara instan. Drag tabel menggunakan handle ☰ untuk mengatur ulang urutan.
          </p>
        </div>
      </div>
    </aside>
  );
}
