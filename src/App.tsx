import { useState, useMemo } from 'react';
import { ChevronLeft, ChevronRight, Ship } from 'lucide-react';
import { slides } from './data/slides';
import { Sidebar } from './components/Sidebar';
import { SlideView } from './components/SlideView';
import { Button } from './components/ui/button';
import { cn } from './lib/utils';

function App() {
  const [currentSlideId, setCurrentSlideId] = useState<string>(slides[0]?.id || '');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const currentSlideIndex = useMemo(() => {
    return slides.findIndex(s => s.id === currentSlideId);
  }, [currentSlideId]);

  const currentSlide = slides[currentSlideIndex];

  const goToNextSlide = () => {
    if (currentSlideIndex < slides.length - 1) {
      setCurrentSlideId(slides[currentSlideIndex + 1].id);
    }
  };

  const goToPreviousSlide = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideId(slides[currentSlideIndex - 1].id);
    }
  };

  const progress = ((currentSlideIndex + 1) / slides.length) * 100;

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <Sidebar
        slides={slides}
        currentSlideId={currentSlideId}
        onSlideSelect={setCurrentSlideId}
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen lg:ml-0">
        {/* Header */}
        <header className="bg-white border-b px-4 py-3 sticky top-0 z-20">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Ship className="text-navy-900" size={28} />
              <div>
                <h1 className="font-bold text-navy-900 text-lg leading-tight">
                  Unit 23: Introduction to Yachting Specifications
                </h1>
                <p className="text-xs text-gray-500">Interior Hospitality Yacht Training - Level 1</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">
                Slide {currentSlideIndex + 1} of {slides.length}
              </span>
            </div>
          </div>
          {/* Progress Bar */}
          <div className="max-w-6xl mx-auto mt-2">
            <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gold-400 transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </header>

        {/* Slide Content */}
        <main className="flex-1 p-4 lg:p-8 overflow-y-auto">
          <div className="max-w-6xl mx-auto">
            {currentSlide ? (
              <SlideView slide={currentSlide} />
            ) : (
              <div className="text-center py-20">
                <p className="text-gray-500">Slide not found</p>
              </div>
            )}
          </div>
        </main>

        {/* Navigation Footer */}
        <footer className="bg-white border-t px-4 py-4 sticky bottom-0 z-20">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <Button
              variant="outline"
              onClick={goToPreviousSlide}
              disabled={currentSlideIndex === 0}
              className="flex items-center gap-2"
            >
              <ChevronLeft size={18} />
              Previous
            </Button>

            <div className="flex items-center gap-2">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  onClick={() => setCurrentSlideId(slide.id)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all",
                    index === currentSlideIndex
                      ? "bg-navy-900 w-6"
                      : "bg-gray-300 hover:bg-gray-400"
                  )}
                  title={`Slide ${index + 1}: ${slide.headline}`}
                />
              ))}
            </div>

            <Button
              onClick={goToNextSlide}
              disabled={currentSlideIndex === slides.length - 1}
              className="flex items-center gap-2"
            >
              Next
              <ChevronRight size={18} />
            </Button>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
