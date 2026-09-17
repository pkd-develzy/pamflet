import React from 'react';
import { PosterProvider } from './context/PosterContext';
import AppHeader from './components/layout/AppHeader';
import Sidebar from './components/layout/Sidebar';
import CanvasViewport from './components/canvas/CanvasViewport';
import Toast from './components/ui/Toast';
import LoadingOverlay from './components/ui/LoadingOverlay';

function MainLayout() {
  return (
    <div className="flex flex-col h-screen overflow-hidden bg-slate-950 text-slate-100">
      <AppHeader />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <CanvasViewport />
      </div>
      <Toast />
      <LoadingOverlay />
    </div>
  );
}

export default function App() {
  return (
    <PosterProvider>
      <MainLayout />
    </PosterProvider>
  );
}
