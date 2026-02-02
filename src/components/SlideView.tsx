import { Mic, Image, MessageSquare, Play, MousePointer } from 'lucide-react';
import type { Slide } from '../types';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

interface SlideViewProps {
  slide: Slide;
}

export function SlideView({ slide }: SlideViewProps) {
  // Simple markdown-like parser for content
  const parseContent = (content: string): React.ReactNode[] => {
    const lines = content.split('\n');
    const elements: React.ReactNode[] = [];
    let currentList: string[] = [];

    const flushList = () => {
      if (currentList.length > 0) {
        elements.push(
          <ul key={`list-${elements.length}`} className="list-disc pl-5 space-y-1 mb-4">
            {currentList.map((item, i) => (
              <li key={i} className="text-gray-700">{item.replace(/^[-*]\s*/, '')}</li>
            ))}
          </ul>
        );
        currentList = [];
      }
    };

    lines.forEach((line, index) => {
      const trimmed = line.trim();
      
      if (!trimmed) {
        flushList();
        return;
      }

      // Header lines (ALL CAPS or ending with :)
      if ((trimmed === trimmed.toUpperCase() && trimmed.length > 3 && !trimmed.startsWith('-')) || 
          (trimmed.endsWith(':') && trimmed.length < 50)) {
        flushList();
        elements.push(
          <h4 key={index} className="font-bold text-navy-900 mt-4 mb-2">
            {trimmed}
          </h4>
        );
      }
      // List items
      else if (trimmed.startsWith('-') || trimmed.startsWith('*')) {
        currentList.push(trimmed);
      }
      // Numbered items
      else if (/^\d+\./.test(trimmed)) {
        flushList();
        elements.push(
          <div key={index} className="flex gap-2 mb-2">
            <span className="font-medium text-navy-900 min-w-[1.5rem]">
              {trimmed.match(/^\d+/)?.[0]}.
            </span>
            <span className="text-gray-700">{trimmed.replace(/^\d+\.\s*/, '')}</span>
          </div>
        );
      }
      // Regular paragraph
      else {
        flushList();
        elements.push(
          <p key={index} className="text-gray-700 mb-3 leading-relaxed">
            {trimmed}
          </p>
        );
      }
    });

    flushList();
    return elements;
  };

  return (
    <div className="space-y-6">
      {/* Slide Header */}
      <div className="border-b pb-4">
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="secondary">Slide {slide.slideNumber}</Badge>
          <Badge variant="outline">{slide.part}</Badge>
        </div>
        <h1 className="text-3xl font-bold text-navy-900">{slide.headline}</h1>
        <p className="text-gray-500 mt-1">{slide.sectionTitle}</p>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column - Content */}
        <div className="space-y-6">
          {/* Course Content */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-navy-900 text-white flex items-center justify-center text-sm">
                  {slide.slideNumber}
                </span>
                Course Content
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-sm max-w-none">
                {parseContent(slide.content)}
              </div>
            </CardContent>
          </Card>

          {/* VO Intent */}
          <Card className="bg-blue-50 border-blue-200">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2 text-blue-900">
                <Mic size={20} />
                VO Intent
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-blue-800">{slide.voIntent}</p>
            </CardContent>
          </Card>

          {/* Voiceover Script */}
          <Card className="bg-amber-50 border-amber-200">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2 text-amber-900">
                <Play size={20} />
                Voiceover Script
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-amber-800 italic">"{slide.voiceoverScript}"</p>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Meta Info */}
        <div className="space-y-6">
          {/* Interaction Type */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <MousePointer size={20} />
                Interaction Type
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Badge className="text-base px-3 py-1">{slide.interaction}</Badge>
            </CardContent>
          </Card>

          {/* Image Placeholder */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <Image size={20} />
                Visual Placeholder
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <Image className="mx-auto mb-3 text-gray-400" size={48} />
                <p className="text-gray-600 text-sm">{slide.imagePlaceholder}</p>
              </div>
            </CardContent>
          </Card>

          {/* Assessment */}
          {slide.assessment && (
            <Card className="bg-green-50 border-green-200">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2 text-green-900">
                  <MessageSquare size={20} />
                  Assessment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-800">{slide.assessment}</p>
              </CardContent>
            </Card>
          )}

          {/* Slide Info */}
          <Card className="bg-gray-50">
            <CardContent className="pt-6">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-500">Slide ID:</span>
                  <p className="font-mono text-navy-900">{slide.id}</p>
                </div>
                <div>
                  <span className="text-gray-500">Part:</span>
                  <p className="text-navy-900">{slide.part}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
