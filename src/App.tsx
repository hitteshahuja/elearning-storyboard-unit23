import { useState, useEffect } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { SlideView } from '@/components/SlideView';
import { CoverPage } from '@/components/CoverPage';
import { parts } from '@/data/slides';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

function App() {
  const [currentSlideId, setCurrentSlideId] = useState<string | null>(null);
  const [showCover, setShowCover] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleSlideSelect = (slideId: string) => {
    setCurrentSlideId(slideId);
    setShowCover(false);
    if (window.innerWidth < 1024) {
      setSidebarOpen(false);
    }
  };

  const handleStart = () => {
    setShowCover(false);
    setCurrentSlideId('slide1');
  };

  // Listen for navigation events from SlideView
  useEffect(() => {
    const handleNavigate = (e: CustomEvent<string>) => {
      setCurrentSlideId(e.detail);
    };
    window.addEventListener('navigateToSlide', handleNavigate as EventListener);
    return () => {
      window.removeEventListener('navigateToSlide', handleNavigate as EventListener);
    };
  }, []);

  const currentSlide = currentSlideId 
    ? parts.flatMap(p => p.slides).find(s => s.id === currentSlideId)
    : null;

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Mobile Sidebar Toggle */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 lg:hidden"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <Menu className="h-6 w-6" />
      </Button>

      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-40 w-80 bg-white border-r border-slate-200 
        transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:relative lg:translate-x-0
      `}>
        <Sidebar 
          parts={parts}
          currentSlideId={currentSlideId}
          onSlideSelect={handleSlideSelect}
        />
      </div>

      {/* Main Content */}
      <main className="flex-1 min-h-screen overflow-auto">
        {showCover ? (
          <CoverPage onStart={handleStart} />
        ) : currentSlide ? (
          <SlideView slide={currentSlide} />
        ) : (
          <div className="flex items-center justify-center h-screen">
            <p className="text-slate-500">Select a slide from the sidebar</p>
          </div>
        )}
      </main>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}

export default App;
