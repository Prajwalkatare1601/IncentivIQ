import React from 'react';
import { Brain, TrendingUp, Target, BarChart3, Users, Award, Zap, Eye, Shield, Clock, Lightbulb, Cpu, Play, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const coreFeatures = [
    {
      icon: Brain,
      title: "Plan Automation",
      description: "End-to-end IC plan generation based on business rules + AI recommendations",
      path: "/plan-automation",
      category: "AI Innovation",
      demo: true
    },
    {
      icon: Target,
      title: "Quota Optimization",
      description: "Fairness-aware, opportunity-aligned quotas with AI-powered analysis",
      path: "/quota-optimization", 
      category: "Intelligence",
      demo: true
    },
    {
      icon: Play,
      title: "Simulation Engine",
      description: "Real-time 'what-if' payout and performance modeling with scenario analysis",
      path: "/simulation-engine",
      category: "Analytics",
      demo: true
    },
    {
      icon: Shield,
      title: "Governance & Compliance",
      description: "Full audit trail, override control, and rule documentation",
      path: "/governance",
      category: "Security",
      demo: true
    }
  ];

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Optimization",
      description: "Advanced machine learning algorithms automatically optimize commission structures and identify performance patterns to maximize team productivity.",
      category: "AI Innovation"
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "Forecast future performance, identify at-risk deals, and predict commission payouts with 95% accuracy using our proprietary AI models.",
      category: "Intelligence"
    },
    {
      icon: Target,
      title: "Smart Goal Setting",
      description: "AI automatically suggests optimal targets based on historical data, market conditions, and individual performance capabilities.",
      category: "AI Innovation"
    },
    {
      icon: BarChart3,
      title: "Real-Time Dashboards",
      description: "Dynamic, interactive dashboards that update in real-time with beautiful visualizations and actionable insights.",
      category: "Analytics"
    },
    {
      icon: Users,
      title: "Team Performance Intelligence",
      description: "AI-driven team analytics that identify top performers, coaching opportunities, and optimal team compositions.",
      category: "Intelligence"
    },
    {
      icon: Award,
      title: "Automated Recognition",
      description: "Intelligent recognition system that automatically identifies achievements and suggests personalized rewards and incentives.",
      category: "Automation"
    },
    {
      icon: Zap,
      title: "Instant Commission Calculations",
      description: "Lightning-fast, accurate commission calculations with complex rule engines and real-time dispute resolution.",
      category: "Performance"
    },
    {
      icon: Eye,
      title: "Transparent Tracking",
      description: "Complete visibility into commission calculations, performance metrics, and goal progress with detailed audit trails.",
      category: "Transparency"
    },
    {
      icon: Shield,
      title: "Compliance Monitoring",
      description: "AI-powered compliance checking ensures all incentive plans meet regulatory requirements and company policies.",
      category: "Security"
    },
    {
      icon: Clock,
      title: "Historical Trend Analysis",
      description: "Deep historical analysis with AI-identified patterns and trends to inform strategic compensation decisions.",
      category: "Intelligence"
    },
    {
      icon: Lightbulb,
      title: "Smart Recommendations",
      description: "Intelligent suggestions for plan improvements, target adjustments, and performance enhancement strategies.",
      category: "AI Innovation"
    },
    {
      icon: Cpu,
      title: "Advanced Automation",
      description: "Fully automated workflows for plan creation, approval processes, and payout management with minimal human intervention.",
      category: "Automation"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI Innovation': return 'bg-brand-accent/20 text-brand-accent border-brand-accent/30';
      case 'Intelligence': return 'bg-state-success/20 text-state-success border-state-success/30';
      case 'Analytics': return 'bg-state-warning/20 text-state-warning border-state-warning/30';
      case 'Performance': return 'bg-purple-500/20 text-purple-300 border-purple-500/30';
      case 'Automation': return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
      case 'Transparency': return 'bg-green-500/20 text-green-300 border-green-500/30';
      case 'Security': return 'bg-red-500/20 text-red-300 border-red-500/30';
      default: return 'bg-content-secondary/20 text-content-secondary border-content-secondary/30';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/lovable-uploads/4cae95bd-90f7-4b4f-a75f-226fab14ed54.png" 
            alt="IncentivIQ Hero" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/70" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
          <div className="text-center space-y-6">
            <h1 className="text-6xl font-bold text-content-primary leading-tight">
              Welcome to <span className="text-brand-accent">IncentivIQ</span>
            </h1>
            <p className="text-2xl text-content-secondary max-w-3xl mx-auto leading-relaxed">
              The world's most advanced AI-powered incentive compensation platform. 
              Transform your sales performance with intelligent automation and predictive insights.
            </p>
          </div>
        </div>
      </div>

      {/* Core Features - Interactive Demos */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-content-primary mb-4">
            Core Features - Interactive Demos
          </h2>
          <p className="text-xl text-content-secondary max-w-3xl mx-auto">
            Experience our revolutionary AI-powered features with live, working demonstrations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {coreFeatures.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-card/50 border-content-secondary/20 hover:border-brand-accent/50 transition-all duration-300 hover:scale-105 group cursor-pointer"
              onClick={() => navigate(feature.path)}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-full bg-brand-accent/20 group-hover:bg-brand-accent/30 transition-colors">
                    <feature.icon className="w-6 h-6 text-brand-accent" />
                  </div>
                  <div className="flex space-x-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(feature.category)}`}>
                      {feature.category}
                    </span>
                    {feature.demo && (
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-brand-accent/20 text-brand-accent border border-brand-accent/30">
                        Live Demo
                      </span>
                    )}
                  </div>
                </div>
                <CardTitle className="text-content-primary group-hover:text-brand-accent transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-content-secondary leading-relaxed mb-4">
                  {feature.description}
                </CardDescription>
                <Button 
                  className="w-full bg-brand-accent hover:bg-brand-accent/90"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(feature.path);
                  }}
                >
                  Try Interactive Demo
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Additional Features */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-content-primary mb-4">
            Additional AI-Powered Capabilities
          </h2>
          <p className="text-xl text-content-secondary max-w-3xl mx-auto">
            Comprehensive suite of intelligent features for complete incentive management.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card/50 border-content-secondary/20 hover:border-brand-accent/50 transition-all duration-300 hover:scale-105 group">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-full bg-brand-accent/20 group-hover:bg-brand-accent/30 transition-colors">
                    <feature.icon className="w-6 h-6 text-brand-accent" />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(feature.category)}`}>
                    {feature.category}
                  </span>
                </div>
                <CardTitle className="text-content-primary group-hover:text-brand-accent transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-content-secondary leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-card/20 border-y border-content-secondary/10">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-brand-accent">95%</div>
              <div className="text-content-secondary">Prediction Accuracy</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-state-success">40%</div>
              <div className="text-content-secondary">Performance Increase</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-state-warning">85%</div>
              <div className="text-content-secondary">Time Saved</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-content-primary">24/7</div>
              <div className="text-content-secondary">AI Monitoring</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-4xl font-bold text-content-primary mb-6">
          Ready to Transform Your Incentive Programs?
        </h2>
        <p className="text-xl text-content-secondary mb-8 max-w-2xl mx-auto">
          Join thousands of companies already using IncentivIQ to drive unprecedented sales performance 
          with AI-powered insights and automation.
        </p>
        <Button className="bg-brand-accent hover:bg-brand-accent/90 text-white px-12 py-6 text-lg">
          Start Your AI Journey Today
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;
