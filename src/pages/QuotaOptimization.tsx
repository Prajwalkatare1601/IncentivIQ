
import React, { useState } from 'react';
import { Target, BarChart3, Users, TrendingUp, AlertTriangle, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const QuotaOptimization = () => {
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimizedQuotas, setOptimizedQuotas] = useState(null);

  const currentQuotas = [
    { rep: 'Sarah Johnson', current: 850000, territory: 'West Coast', experience: 'Senior' },
    { rep: 'Mike Chen', current: 750000, territory: 'East Coast', experience: 'Mid-Level' },
    { rep: 'Emily Rodriguez', current: 650000, territory: 'Central', experience: 'Junior' },
    { rep: 'David Kim', current: 800000, territory: 'International', experience: 'Senior' },
    { rep: 'Lisa Thompson', current: 700000, territory: 'Midwest', experience: 'Mid-Level' }
  ];

  const handleOptimize = async () => {
    setIsOptimizing(true);
    setTimeout(() => {
      setOptimizedQuotas([
        { 
          rep: 'Sarah Johnson', 
          current: 850000, 
          optimized: 920000, 
          change: '+8.2%',
          reason: 'Territory expansion opportunity',
          fairnessScore: 95
        },
        { 
          rep: 'Mike Chen', 
          current: 750000, 
          optimized: 780000, 
          change: '+4.0%',
          reason: 'Market growth potential',
          fairnessScore: 92
        },
        { 
          rep: 'Emily Rodriguez', 
          current: 650000, 
          optimized: 680000, 
          change: '+4.6%',
          reason: 'Skills development trajectory',
          fairnessScore: 90
        },
        { 
          rep: 'David Kim', 
          current: 800000, 
          optimized: 750000, 
          change: '-6.3%',
          reason: 'Market saturation adjustment',
          fairnessScore: 88
        },
        { 
          rep: 'Lisa Thompson', 
          current: 700000, 
          optimized: 720000, 
          change: '+2.9%',
          reason: 'Territory optimization',
          fairnessScore: 94
        }
      ]);
      setIsOptimizing(false);
    }, 2500);
  };

  const getFairnessColor = (score) => {
    if (score >= 90) return 'text-state-success';
    if (score >= 80) return 'text-state-warning';
    return 'text-state-error';
  };

  const getChangeColor = (change) => {
    return change.startsWith('+') ? 'text-state-success' : 'text-state-warning';
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center space-x-3">
          <Target className="w-8 h-8 text-brand-accent" />
          <h1 className="text-3xl font-bold text-content-primary">Quota Optimization</h1>
        </div>
        
        <p className="text-content-secondary text-lg">
          AI-powered quota optimization ensuring fairness and opportunity alignment across your sales team.
        </p>

        <div className="grid lg:grid-cols-3 gap-6 mb-6">
          <Card className="bg-card/50 border-content-secondary/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-content-secondary">Team Quota</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-content-primary">$3.75M</div>
              <p className="text-xs text-state-success">+12% vs last year</p>
            </CardContent>
          </Card>
          
          <Card className="bg-card/50 border-content-secondary/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-content-secondary">Fairness Index</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-state-success">92.4</div>
              <p className="text-xs text-content-secondary">Excellent balance</p>
            </CardContent>
          </Card>
          
          <Card className="bg-card/50 border-content-secondary/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-content-secondary">Optimization Potential</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-brand-accent">+$180K</div>
              <p className="text-xs text-content-secondary">Revenue upside</p>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-content-primary">Quota Analysis</h2>
          <Button
            onClick={handleOptimize}
            disabled={isOptimizing}
            className="bg-brand-accent hover:bg-brand-accent/90"
          >
            {isOptimizing ? (
              <>
                <BarChart3 className="w-4 h-4 mr-2 animate-pulse" />
                Optimizing...
              </>
            ) : (
              <>
                <Target className="w-4 h-4 mr-2" />
                Optimize Quotas
              </>
            )}
          </Button>
        </div>

        <div className="grid gap-4">
          {(optimizedQuotas || currentQuotas).map((rep, index) => (
            <Card key={index} className="bg-card/50 border-content-secondary/20">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div>
                      <h3 className="font-semibold text-content-primary">{rep.rep}</h3>
                      <p className="text-sm text-content-secondary">
                        {optimizedQuotas ? rep.reason : `${rep.territory} • ${rep.experience}`}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-6">
                    {optimizedQuotas ? (
                      <>
                        <div className="text-right">
                          <p className="text-sm text-content-secondary">Current → Optimized</p>
                          <p className="font-semibold text-content-primary">
                            ${(rep.current / 1000).toFixed(0)}K → ${(rep.optimized / 1000).toFixed(0)}K
                          </p>
                        </div>
                        <Badge className={`${getChangeColor(rep.change)} bg-transparent border-current`}>
                          {rep.change}
                        </Badge>
                        <div className="text-right">
                          <p className="text-sm text-content-secondary">Fairness Score</p>
                          <p className={`font-semibold ${getFairnessColor(rep.fairnessScore)}`}>
                            {rep.fairnessScore}/100
                          </p>
                        </div>
                      </>
                    ) : (
                      <div className="text-right">
                        <p className="text-sm text-content-secondary">Current Quota</p>
                        <p className="font-semibold text-content-primary">
                          ${(rep.current / 1000).toFixed(0)}K
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {optimizedQuotas && (
          <Card className="bg-card/50 border-content-secondary/20">
            <CardHeader>
              <CardTitle className="text-content-primary flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-state-success" />
                <span>Optimization Summary</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-state-success">+4.8%</div>
                  <p className="text-sm text-content-secondary">Average Quota Increase</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-brand-accent">91.8</div>
                  <p className="text-sm text-content-secondary">Improved Fairness Score</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-content-primary">100%</div>
                  <p className="text-sm text-content-secondary">Territory Coverage</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default QuotaOptimization;
