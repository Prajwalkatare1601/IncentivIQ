
import React, { useState, useEffect } from 'react';
import { TrendingUp, Upload, Play, Award, Target, DollarSign, Activity, Pill, FileSpreadsheet, Calculator, Zap, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';

const SalesRepJourney = () => {
  const [incentiveType, setIncentiveType] = useState('flat');
  const [salesAmount, setSalesAmount] = useState(100000);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentMilestone, setCurrentMilestone] = useState(0);

  const milestones = [
    { sales: 25000, title: "First Quarter", description: "Build territory foundation", pharmaFocus: "Establish physician relationships" },
    { sales: 50000, title: "Mid-Year", description: "Momentum building", pharmaFocus: "Clinical data presentations" },
    { sales: 75000, title: "Third Quarter", description: "Performance acceleration", pharmaFocus: "KOL engagement programs" },
    { sales: 100000, title: "Annual Target", description: "Goal achievement", pharmaFocus: "Market share expansion" },
    { sales: 125000, title: "Overachievement", description: "Excellence tier", pharmaFocus: "Therapeutic area leadership" }
  ];

  const calculateCommission = (sales: number, type: string) => {
    switch (type) {
      case 'flat':
        return sales * 0.05; // 5% flat rate
      case 'progressive':
        if (sales <= 50000) return sales * 0.03;
        if (sales <= 100000) return 50000 * 0.03 + (sales - 50000) * 0.05;
        return 50000 * 0.03 + 50000 * 0.05 + (sales - 100000) * 0.07;
      case 'tier':
        if (sales <= 25000) return sales * 0.02;
        if (sales <= 75000) return sales * 0.04;
        if (sales <= 125000) return sales * 0.06;
        return sales * 0.08;
      default:
        return 0;
    }
  };

  const getIncentiveDescription = (type: string) => {
    switch (type) {
      case 'flat':
        return { rate: "5%", description: "Consistent commission rate across all sales levels" };
      case 'progressive':
        return { rate: "3-7%", description: "Increasing rates: 3% (0-50k), 5% (50-100k), 7% (100k+)" };
      case 'tier':
        return { rate: "2-8%", description: "Tier-based: 2% (0-25k), 4% (25-75k), 6% (75-125k), 8% (125k+)" };
      default:
        return { rate: "0%", description: "" };
    }
  };

  const startAnimation = () => {
    setIsAnimating(true);
    setCurrentMilestone(0);
    
    const interval = setInterval(() => {
      setCurrentMilestone(prev => {
        if (prev >= milestones.length - 1) {
          clearInterval(interval);
          setIsAnimating(false);
          return prev;
        }
        return prev + 1;
      });
    }, 1500);
  };

  const commission = calculateCommission(salesAmount, incentiveType);
  const incentiveInfo = getIncentiveDescription(incentiveType);

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center space-x-3">
          <Activity className="w-8 h-8 text-brand-accent" />
          <h1 className="text-3xl font-bold text-content-primary">Sales Rep Journey - Pharma Industry</h1>
        </div>
        
        <p className="text-content-secondary text-lg">
          Visualize your pharmaceutical sales career progression with different incentive structures and real-time commission calculations.
        </p>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Controls */}
          <Card className="bg-card/50 border-content-secondary/20">
            <CardHeader>
              <CardTitle className="text-content-primary flex items-center space-x-2">
                <Settings className="w-5 h-5 text-brand-accent" />
                <span>Incentive Configuration</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="incentiveType">Incentive Rate Type</Label>
                <Select value={incentiveType} onValueChange={setIncentiveType}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="flat">Flat Rate</SelectItem>
                    <SelectItem value="progressive">Progressive</SelectItem>
                    <SelectItem value="tier">Tier Rate</SelectItem>
                  </SelectContent>
                </Select>
                <div className="mt-2 p-3 bg-brand-accent/10 rounded-lg">
                  <div className="text-sm text-brand-accent font-medium">{incentiveInfo.rate}</div>
                  <div className="text-xs text-content-secondary">{incentiveInfo.description}</div>
                </div>
              </div>

              <div>
                <Label htmlFor="sales">Annual Sales Target ($)</Label>
                <Input
                  id="sales"
                  type="number"
                  value={salesAmount}
                  onChange={(e) => setSalesAmount(Number(e.target.value))}
                  min="0"
                  step="1000"
                />
              </div>

              <div className="p-4 bg-state-success/10 rounded-lg">
                <div className="text-lg font-bold text-state-success">
                  ${commission.toLocaleString()}
                </div>
                <div className="text-sm text-content-secondary">Projected Annual Commission</div>
              </div>

              <Button 
                onClick={startAnimation}
                disabled={isAnimating}
                className="w-full bg-brand-accent hover:bg-brand-accent/90"
              >
                {isAnimating ? (
                  <>
                    <Activity className="w-4 h-4 mr-2 animate-spin" />
                    Animating Journey...
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 mr-2" />
                    Start Journey Animation
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Journey Visualization */}
          <Card className="lg:col-span-2 bg-card/50 border-content-secondary/20">
            <CardHeader>
              <CardTitle className="text-content-primary flex items-center space-x-2">
                <Pill className="w-5 h-5 text-brand-accent" />
                <span>Pharma Sales Journey</span>
              </CardTitle>
              <CardDescription>
                Track your progress through pharmaceutical sales milestones
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {milestones.map((milestone, index) => {
                  const isActive = index <= currentMilestone;
                  const isCurrent = index === currentMilestone && isAnimating;
                  const commission = calculateCommission(milestone.sales, incentiveType);
                  
                  return (
                    <div 
                      key={index}
                      className={`flex items-center space-x-4 p-4 rounded-lg transition-all duration-500 ${
                        isActive ? 'bg-brand-accent/10 border-l-4 border-brand-accent' : 'bg-content-secondary/5'
                      } ${isCurrent ? 'animate-pulse scale-105' : ''}`}
                    >
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        isActive ? 'bg-brand-accent text-white' : 'bg-content-secondary/20 text-content-secondary'
                      }`}>
                        {isActive ? <Award className="w-6 h-6" /> : <Target className="w-6 h-6" />}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className={`font-semibold ${isActive ? 'text-content-primary' : 'text-content-secondary'}`}>
                            {milestone.title}
                          </h3>
                          <Badge className={`${isActive ? 'bg-state-success/20 text-state-success' : 'bg-content-secondary/20 text-content-secondary'}`}>
                            ${milestone.sales.toLocaleString()}
                          </Badge>
                        </div>
                        <p className="text-sm text-content-secondary mb-1">{milestone.description}</p>
                        <p className="text-xs text-brand-accent font-medium">{milestone.pharmaFocus}</p>
                        {isActive && (
                          <div className="mt-2 flex items-center space-x-2">
                            <DollarSign className="w-4 h-4 text-state-success" />
                            <span className="text-sm font-medium text-state-success">
                              Commission: ${commission.toLocaleString()}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Pharma-Specific Features */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-card/50 border-content-secondary/20">
            <CardHeader>
              <CardTitle className="text-content-primary flex items-center space-x-2">
                <Pill className="w-5 h-5 text-state-success" />
                <span>Drug Portfolio</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-content-secondary">Oncology Products</span>
                  <Badge className="bg-state-success/20 text-state-success">40%</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-content-secondary">Cardiology Line</span>
                  <Badge className="bg-state-warning/20 text-state-warning">30%</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-content-secondary">Diabetes Care</span>
                  <Badge className="bg-brand-accent/20 text-brand-accent">30%</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-content-secondary/20">
            <CardHeader>
              <CardTitle className="text-content-primary flex items-center space-x-2">
                <Target className="w-5 h-5 text-brand-accent" />
                <span>KPI Metrics</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-content-secondary">Physician Calls</span>
                  <span className="text-content-primary font-medium">250/month</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-content-secondary">New Prescribers</span>
                  <span className="text-content-primary font-medium">15/quarter</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-content-secondary">Market Share</span>
                  <span className="text-content-primary font-medium">12.5%</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-content-secondary/20">
            <CardHeader>
              <CardTitle className="text-content-primary flex items-center space-x-2">
                <Zap className="w-5 h-5 text-state-warning" />
                <span>Bonus Opportunities</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-content-secondary">Launch Bonus</span>
                  <span className="text-state-success font-medium">$5,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-content-secondary">Territory Growth</span>
                  <span className="text-state-success font-medium">$3,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-content-secondary">Clinical Study</span>
                  <span className="text-state-success font-medium">$2,500</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SalesRepJourney;
