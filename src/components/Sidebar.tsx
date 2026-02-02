import { useState } from 'react';
import { ChevronDown, ChevronRight, Menu, X, Ship } from 'lucide-react';
import type { Slide } from '../types';
import { cn } from '../lib/utils';

interface SidebarProps {
  slides: Slide[];
  currentSlideId: string;
  onSlideSelect: (slideId: string) => void;
  isOpen: boolean;
  onToggle: () => void;
}

interface PartGroup {
  part: string;
  slides: Slide[];
}

export function Sidebar({ slides, currentSlideId, onSlideSelect, isOpen, onToggle }: SidebarProps) {
  const [expandedParts, setExpandedParts] = useState<Set<string>>(() => {
    // Start with all parts expanded
    const parts = new Set(slides.map(s => s.part));
    return parts;
  });

  // Group slides by part
  const partGroups: PartGroup[] = slides.reduce((acc, slide) => {
    const existing = acc.find(g => g.part === slide.part);
    if (existing) {
      existing.slides.push(slide);
    } else {
      acc.push({ part: slide.part, slides: [slide] });
    }
    return acc;
  }, [] as PartGroup[]);

  const togglePart = (part: string) => {
    setExpandedParts(prev => {
      const next = new Set(prev);
      if (next.has(part)) {
        next.delete(part);
      } else {
        next.add(part);
      }
      return next;
    });
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={onToggle}
        className="fixed top-4 left-4 z-50 lg:hidden bg-navy-900 text-white p-2 rounded-md shadow-lg"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-80 bg-navy-900 text-white overflow-y-auto transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "-translate-x-full",
          "lg:translate-x-0 lg:static lg:block"
        )}
      >
        <div className="p-4 border-b border-navy-800">
          <div className="flex items-center gap-2 mb-2">
            <Ship className="text-gold-400" size={24} />
            <h1 className="text-lg font-bold">Unit 23</h1>
          </div>
          <p className="text-xs text-gray-400">Introduction to Yachting Specifications</p>
        </div>

        <nav className="p-2">
          {partGroups.map((group, partIndex) => (
            <div key={group.part} className="mb-2">
              <button
                onClick={() => togglePart(group.part)}
                className="w-full flex items-center justify-between p-2 rounded hover:bg-navy-800 transition-colors"
              >
                <span className="text-sm font-medium text-gold-400">
                  Part {partIndex + 1}
                </span>
                {expandedParts.has(group.part) ? (
                  <ChevronDown size={16} />
                ) : (
                  <ChevronRight size={16} />
                )}
              </button>

              {expandedParts.has(group.part) && (
                <div className="ml-2 mt-1 space-y-1">
                  {group.slides.map((slide) => (
                    <button
                      key={slide.id}
                      onClick={() => {
                        onSlideSelect(slide.id);
                        if (window.innerWidth < 1024) {
                          onToggle();
                        }
                      }}
                      className={cn(
                        "w-full text-left p-2 rounded text-sm transition-colors",
                        currentSlideId === slide.id
                          ? "bg-gold-400 text-navy-900 font-medium"
                          : "text-gray-300 hover:bg-navy-800 hover:text-white"
                      )}
                    >
                      <span className="inline-block w-6 text-xs opacity-70">
                        {slide.slideNumber}
                      </span>
                      <span className="truncate">{slide.headline}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={onToggle}
        />
      )}
    </>
  );
}
