import type { Part } from '@/types';
import { ChevronRight, ChevronDown, Ship, Anchor, Users, MessageSquare, Globe, Shield } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface SidebarProps {
  parts: Part[];
  currentSlideId: string | null;
  onSlideSelect: (slideId: string) => void;
}

const partIcons: Record<string, React.ReactNode> = {
  part1: <Ship className="w-4 h-4" />,
  part2: <Users className="w-4 h-4" />,
  part3: <Anchor className="w-4 h-4" />,
  part4: <MessageSquare className="w-4 h-4" />,
  part5: <Globe className="w-4 h-4" />,
  part6: <Shield className="w-4 h-4" />,
};

export function Sidebar({ parts, currentSlideId, onSlideSelect }: SidebarProps) {
  const [expandedParts, setExpandedParts] = useState<Set<string>>(new Set(['part1']));

  const togglePart = (partId: string) => {
    setExpandedParts(prev => {
      const next = new Set(prev);
      if (next.has(partId)) {
        next.delete(partId);
      } else {
        next.add(partId);
      }
      return next;
    });
  };

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-slate-200 bg-gradient-to-r from-blue-900 to-blue-800">
        <h1 className="text-white font-bold text-lg leading-tight">
          Unit 23 Storyboard
        </h1>
        <p className="text-blue-200 text-xs mt-1">
          Introduction to Yachting
        </p>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto py-2">
        {parts.map((part) => (
          <div key={part.id} className="mb-1">
            {/* Part Header */}
            <button
              onClick={() => togglePart(part.id)}
              className={cn(
                "w-full flex items-center gap-2 px-3 py-2 text-sm font-medium transition-colors",
                "hover:bg-slate-100 text-slate-700"
              )}
            >
              {expandedParts.has(part.id) ? (
                <ChevronDown className="w-4 h-4 text-slate-400" />
              ) : (
                <ChevronRight className="w-4 h-4 text-slate-400" />
              )}
              <span className="text-blue-600">
                {partIcons[part.id]}
              </span>
              <span className="truncate">{part.title}</span>
            </button>

            {/* Slides */}
            {expandedParts.has(part.id) && (
              <div className="ml-4 border-l border-slate-200">
                {part.slides.map((slide) => (
                  <button
                    key={slide.id}
                    onClick={() => onSlideSelect(slide.id)}
                    className={cn(
                      "w-full text-left px-4 py-2 text-sm transition-colors",
                      currentSlideId === slide.id
                        ? "bg-blue-50 text-blue-700 border-r-2 border-blue-600"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    )}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-slate-400">
                        {slide.slideNumber}
                      </span>
                      <span className="truncate">{slide.sectionTitle}</span>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="p-3 border-t border-slate-200 bg-slate-50">
        <p className="text-xs text-slate-500 text-center">
          21 Slides • 6 Parts • Rise 360
        </p>
      </div>
    </div>
  );
}
