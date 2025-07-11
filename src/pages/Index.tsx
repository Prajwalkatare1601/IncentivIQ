
import React from 'react';
import LoginBackground from '@/components/LoginBackground';
import LoginForm from '@/components/LoginForm';

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative">
      {/* Animated Background */}
      <LoginBackground />
      
      {/* Main Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Branding */}
          <div className="hidden lg:block space-y-6">
            <div className="space-y-4">
              <h1 className="text-5xl font-bold text-content-primary leading-tight">
                Incentive
                <span className="text-brand-accent"> Compensation</span>
                <br />
                Portal
              </h1>
              <p className="text-xl text-content-secondary leading-relaxed">
                Track performance, manage commissions, and drive results with our comprehensive compensation management platform.
              </p>
            </div>
            
            {/* Feature highlights */}
            <div className="space-y-4 pt-8">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-state-success rounded-full" />
                <span className="text-content-secondary">Real-time performance tracking</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-state-warning rounded-full" />
                <span className="text-content-secondary">Automated commission calculations</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-brand-accent rounded-full" />
                <span className="text-content-secondary">Comprehensive analytics dashboard</span>
              </div>
            </div>
          </div>
          
          {/* Right Side - Login Form */}
          <div className="w-full">
            <div className="bg-card/10 backdrop-blur-lg border border-content-secondary/10 rounded-2xl p-8 shadow-2xl">
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile branding */}
      <div className="lg:hidden absolute top-8 left-1/2 -translate-x-1/2 z-10">
        <h1 className="text-2xl font-bold text-content-primary text-center">
          <span className="text-brand-accent">IC</span> Portal
        </h1>
      </div>
    </div>
  );
};

export default Index;
