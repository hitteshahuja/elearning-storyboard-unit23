import type { Slide } from '@/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Mic, 
  MousePointer, 
  Image as ImageIcon, 
  ClipboardCheck, 
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  BookOpen
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { parts } from '@/data/slides';

interface SlideViewProps {
  slide: Slide;
}

export function SlideView({ slide }: SlideViewProps) {
  // Get prev/next slides
  const allSlides = parts.flatMap(p => p.slides);
  const currentIndex = allSlides.findIndex(s => s.id === slide.id);
  const prevSlide = currentIndex > 0 ? allSlides[currentIndex - 1] : null;
  const nextSlide = currentIndex < allSlides.length - 1 ? allSlides[currentIndex + 1] : null;

  const navigateToSlide = (slideId: string) => {
    const event = new CustomEvent('navigateToSlide', { detail: slideId });
    window.dispatchEvent(event);
  };

  // Parse content markdown
  const renderContent = (content: string): React.ReactNode[] => {
    const lines = content.split('\n');
    const elements: React.ReactNode[] = [];
    let listItems: string[] = [];
    let tableRows: string[] = [];

    const flushList = () => {
      if (listItems.length > 0) {
        elements.push(
          <ul key={`list-${elements.length}`} className="list-disc pl-6 space-y-1 my-4">
            {listItems.map((item, i) => (
              <li key={i} className="text-slate-700">{item.replace(/^[\-\*]\s*/, '')}</li>
            ))}
          </ul>
        );
        listItems = [];
      }
    };

    const flushTable = () => {
      if (tableRows.length > 2) {
        const headers = tableRows[0].split('|').filter(c => c.trim()).map(c => c.trim());
        const dataRows = tableRows.slice(2).filter(r => r.includes('|') && !r.match(/^\s*[-|]+\s*$/));
        
        elements.push(
          <div key={`table-${elements.length}`} className="overflow-x-auto my-4">
            <table className="min-w-full border-collapse border border-slate-300">
              <thead>
                <tr className="bg-slate-100">
                  {headers.map((h, i) => (
                    <th key={i} className="border border-slate-300 px-4 py-2 text-left text-sm font-semibold text-slate-700">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {dataRows.map((row, ri) => {
                  const cells = row.split('|').filter(c => c.trim()).map(c => c.trim());
                  return (
                    <tr key={ri} className={ri % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                      {cells.map((cell, ci) => (
                        <td key={ci} className="border border-slate-300 px-4 py-2 text-sm text-slate-700">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        );
        tableRows = [];
      }
    };

    lines.forEach((line, idx) => {
      const trimmed = line.trim();

      // Handle code blocks
      if (trimmed.startsWith('```')) {
        flushList();
        flushTable();
        return;
      }

      // Handle tables
      if (trimmed.startsWith('|')) {
        tableRows.push(trimmed);
        return;
      } else if (tableRows.length > 0) {
        flushTable();
      }

      // Handle headings
      if (trimmed.startsWith('## ')) {
        flushList();
        elements.push(
          <h2 key={`h2-${idx}`} className="text-xl font-bold text-slate-800 mt-6 mb-3">
            {trimmed.replace('## ', '')}
          </h2>
        );
        return;
      }

      if (trimmed.startsWith('### ')) {
        flushList();
        elements.push(
          <h3 key={`h3-${idx}`} className="text-lg font-semibold text-slate-700 mt-5 mb-2">
            {trimmed.replace('### ', '')}
          </h3>
        );
        return;
      }

      // Handle blockquotes
      if (trimmed.startsWith('> ')) {
        flushList();
        elements.push(
          <blockquote key={`bq-${idx}`} className="border-l-4 border-amber-400 pl-4 py-2 my-4 bg-amber-50 italic text-slate-600">
            {trimmed.replace('> ', '')}
          </blockquote>
        );
        return;
      }

      // Handle horizontal rules
      if (trimmed === '---') {
        flushList();
        elements.push(<hr key={`hr-${idx}`} className="my-6 border-slate-200" />);
        return;
      }

      // Handle list items
      if (trimmed.match(/^[\-\*]\s/)) {
        listItems.push(trimmed);
        return;
      } else if (listItems.length > 0 && trimmed === '') {
        flushList();
        return;
      }

      // Handle empty lines
      if (trimmed === '') {
        return;
      }

      // Handle bold text
      let processedLine = trimmed;
      processedLine = processedLine.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      processedLine = processedLine.replace(/__(.*?)__/g, '<strong>$1</strong>');
      
      // Handle italic
      processedLine = processedLine.replace(/\*(.*?)\*/g, '<em>$1</em>');
      processedLine = processedLine.replace(/_(.*?)_/g, '<em>$1</em>');

      flushList();
      elements.push(
        <p 
          key={`p-${idx}`} 
          className="text-slate-700 my-3 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: processedLine }}
        />
      );
    });

    flushList();
    flushTable();

    return elements;
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      {/* Slide Header */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <Badge variant="secondary" className="text-sm font-mono">
            {slide.slideNumber}
          </Badge>
          <span className="text-slate-500 text-sm">{slide.sectionTitle}</span>
        </div>
        <h1 className="text-3xl font-bold text-slate-900">{slide.headline}</h1>
      </div>

      {/* Main Content Grid */}
      <div className="space-y-6">
        {/* VO Intent & Interaction */}
        <div className="grid md:grid-cols-2 gap-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-slate-500 flex items-center gap-2">
                <Mic className="w-4 h-4" />
                VO Intent
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-700">{slide.voIntent}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-slate-500 flex items-center gap-2">
                <MousePointer className="w-4 h-4" />
                Interaction Type
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-700">{slide.interaction}</p>
            </CardContent>
          </Card>
        </div>

        {/* Course Content */}
        {slide.content && (
          <Card className="border-purple-200 bg-purple-50/30">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-purple-700 flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                Course Content
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-slate max-w-none">
                {renderContent(slide.content)}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Image Placeholder */}
        <Card className="border-amber-200 bg-amber-50/50">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-amber-700 flex items-center gap-2">
              <ImageIcon className="w-4 h-4" />
              Visual Placeholder
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-amber-100 border-2 border-dashed border-amber-300 rounded-lg p-8 text-center">
              <ImageIcon className="w-12 h-12 text-amber-400 mx-auto mb-3" />
              <p className="text-amber-800 font-medium">{slide.imagePlaceholder}</p>
            </div>
          </CardContent>
        </Card>

        {/* Assessment (if present) */}
        {slide.assessment && (
          <Card className="border-blue-200 bg-blue-50/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-blue-700 flex items-center gap-2">
                <ClipboardCheck className="w-4 h-4" />
                Assessment Placeholder
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-blue-100 rounded-lg p-4">
                <pre className="text-blue-800 text-sm whitespace-pre-wrap font-sans">
                  {slide.assessment}
                </pre>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Voiceover Script */}
        <Card className="border-emerald-200 bg-emerald-50/50">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-emerald-700 flex items-center gap-2">
              <MessageCircle className="w-4 h-4" />
              Voiceover Script
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-emerald-100 rounded-lg p-4">
              <p className="text-emerald-800 leading-relaxed">
                {slide.voiceoverScript}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center mt-8 pt-6 border-t border-slate-200">
        <Button
          variant="outline"
          disabled={!prevSlide}
          onClick={() => prevSlide && navigateToSlide(prevSlide.id)}
          className="flex items-center gap-2"
        >
          <ChevronLeft className="w-4 h-4" />
          {prevSlide ? prevSlide.sectionTitle : 'Previous'}
        </Button>

        <span className="text-sm text-slate-500">
          Slide {currentIndex + 1} of {allSlides.length}
        </span>

        <Button
          variant="outline"
          disabled={!nextSlide}
          onClick={() => nextSlide && navigateToSlide(nextSlide.id)}
          className="flex items-center gap-2"
        >
          {nextSlide ? nextSlide.sectionTitle : 'Next'}
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
