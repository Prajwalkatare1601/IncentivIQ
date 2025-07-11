
import React from 'react';
import { TrendingUp, Target, BarChart3, Users, Award, Zap } from 'lucide-react';

const LoginBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />
      
      {/* Animated geometric shapes */}
      <div className="absolute top-10 left-10 w-16 h-16 border-2 border-brand-accent/30 rounded-full animate-float" 
           style={{ animationDelay: '0s' }} />
      <div className="absolute top-32 right-20 w-12 h-12 bg-state-success/20 rounded-lg rotate-45 animate-float" 
           style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-40 left-20 w-20 h-20 border-2 border-state-warning/40 rounded-full animate-float" 
           style={{ animationDelay: '4s' }} />
      <div className="absolute bottom-20 right-32 w-8 h-8 bg-brand-accent/30 rounded-full animate-float" 
           style={{ animationDelay: '1s' }} />
      
      {/* Floating Icons */}
      <div className="absolute top-20 right-1/4 text-brand-accent/20 animate-float" style={{ animationDelay: '0.5s' }}>
        <TrendingUp size={32} />
      </div>
      <div className="absolute top-1/3 left-1/4 text-state-success/25 animate-float" style={{ animationDelay: '1.5s' }}>
        <Target size={28} />
      </div>
      <div className="absolute bottom-1/3 right-1/3 text-state-warning/30 animate-float" style={{ animationDelay: '2.5s' }}>
        <BarChart3 size={24} />
      </div>
      <div className="absolute top-1/2 left-16 text-content-secondary/20 animate-float" style={{ animationDelay: '3s' }}>
        <Users size={20} />
      </div>
      <div className="absolute bottom-1/4 left-1/3 text-brand-accent/25 animate-float" style={{ animationDelay: '3.5s' }}>
        <Award size={26} />
      </div>
      <div className="absolute top-3/4 right-16 text-state-success/20 animate-float" style={{ animationDelay: '4.5s' }}>
        <Zap size={22} />
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-[linear-gradient(rgba(255,79,89,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,79,89,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>
      
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(14,15,12,0.8)_100%)]" />
    </div>
  );
};

export default LoginBackground;
