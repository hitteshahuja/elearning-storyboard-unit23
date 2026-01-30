import { Button } from '@/components/ui/button';
import { Ship, Anchor, Users, MessageSquare, Globe, Shield, BookOpen } from 'lucide-react';

interface CoverPageProps {
  onStart: () => void;
}

export function CoverPage({ onStart }: CoverPageProps) {
  const parts = [
    { icon: Ship, title: 'Part 1', desc: 'Introduction to Yachting' },
    { icon: Users, title: 'Part 2', desc: 'Departments & Hierarchy' },
    { icon: Anchor, title: 'Part 3', desc: 'Behaviour & Work Ethics' },
    { icon: MessageSquare, title: 'Part 4', desc: 'Effective Communication' },
    { icon: Globe, title: 'Part 5', desc: 'Cultural Diversity' },
    { icon: Shield, title: 'Part 6', desc: 'Maritime Law & Safety' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 flex flex-col">
      {/* Hero Section */}
      <div className="flex-1 flex flex-col items-center justify-center px-8 py-16 text-center">
        <div className="mb-6">
          <BookOpen className="w-16 h-16 text-amber-400 mx-auto" />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          eLearning Storyboard
        </h1>
        
        <div className="w-24 h-1 bg-amber-400 mx-auto mb-6" />
        
        <h2 className="text-2xl md:text-3xl font-semibold text-blue-200 mb-4">
          Unit 23: Introduction to Yachting Specifications
        </h2>
        
        <p className="text-blue-300 max-w-2xl mb-8 text-lg">
          Client Presentation for Interior Hospitality Yacht Training - Level 1
        </p>

        {/* Course Details Card */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8 max-w-md w-full">
          <h3 className="text-amber-400 font-semibold mb-4 text-center">Course Details</h3>
          <div className="space-y-2 text-left">
            <div className="flex justify-between text-white">
              <span className="text-blue-200">Authoring Tool:</span>
              <span>Rise 360</span>
            </div>
            <div className="flex justify-between text-white">
              <span className="text-blue-200">Target Audience:</span>
              <span>Entry-level yacht crew</span>
            </div>
            <div className="flex justify-between text-white">
              <span className="text-blue-200">Duration:</span>
              <span>Full Unit (Parts 1-6)</span>
            </div>
            <div className="flex justify-between text-white">
              <span className="text-blue-200">Certification:</span>
              <span>DNV Certified</span>
            </div>
          </div>
        </div>

        <Button 
          onClick={onStart}
          className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-6 text-lg font-semibold rounded-lg shadow-lg transition-all hover:scale-105"
        >
          View Storyboard
        </Button>
      </div>

      {/* Parts Overview */}
      <div className="bg-white/5 backdrop-blur-sm py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-center text-white/80 mb-6 text-sm uppercase tracking-wider">
            6 Comprehensive Parts • 21 Interactive Slides
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {parts.map((part, index) => (
              <div 
                key={index}
                className="bg-white/10 rounded-lg p-4 text-center hover:bg-white/20 transition-colors"
              >
                <part.icon className="w-8 h-8 text-amber-400 mx-auto mb-2" />
                <p className="text-white font-medium text-sm">{part.title}</p>
                <p className="text-blue-300 text-xs">{part.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
