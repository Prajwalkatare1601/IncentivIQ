
import React, { useState } from 'react';
import { Play, BarChart3, TrendingUp, DollarSign, Sliders } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const SimulationEngine = () => {
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulationResults, setSimulationResults] = useState(null);
  const [scenarioInputs, setScenarioInputs] = useState({
    quotaAttainment: '110',
    baseCommission: '3.5',
    accelerator: '5.0',
    teamSize: '10',
    avgDealSize: '50000'
  });

  const handleRunSimulation = async () => {
    setIsSimulating(true);
    setTimeout(() => {
      const quotaAttainment = parseFloat(scenarioInputs.quotaAttainment) / 100;
      const baseComm = parseFloat(scenarioInputs.baseCommission) / 100;
      const accelerator = parseFloat(scenarioInputs.accelerator) / 100;
      const teamSize = parseInt(scenarioInputs.teamSize);
      const avgDeal = parseInt(scenarioInputs.avgDealSize);
      
      const baseRevenue = avgDeal * 20 * teamSize; // 20 deals per rep
      const actualRevenue = baseRevenue * quotaAttainment;
      const basePayout = actualRevenue * baseComm;
      const acceleratorPayout = quotaAttainment > 1.1 ? (actualRevenue - baseRevenue * 1.1) * accelerator : 0;
      const totalPayout = basePayout + acceleratorPayout;

      setSimulationResults({
        totalRevenue: actualRevenue,
        totalPayout: totalPayout,
        payoutRatio: (totalPayout / actualRevenue) * 100,
        avgRepPayout: totalPayout / teamSize,
        scenarios: [
          { attainment: '90%', payout: totalPayout * 0.85, revenue: actualRevenue * 0.9 },
          { attainment: '100%', payout: totalPayout * 0.91, revenue: actualRevenue * 0.91 },
          { attainment: '110%', payout: totalPayout, revenue: actualRevenue },
          { attainment: '125%', payout: totalPayout * 1.25, revenue: actualRevenue * 1.14 },
          { attainment: '150%', payout: totalPayout * 1.68, revenue: actualRevenue * 1.36 }
        ]
      });
      setIsSimulating(false);
    }, 2000);
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center space-x-3">
          <Play className="w-8 h-8 text-brand-accent" />
          <h1 className="text-3xl font-bold text-content-primary">Simulation Engine</h1>
        </div>
        
        <p className="text-content-secondary text-lg">
          Real-time "what-if" modeling for payout scenarios and performance impact analysis.
        </p>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Scenario Inputs */}
          <Card className="bg-card/50 border-content-secondary/20">
            <CardHeader>
              <CardTitle className="text-content-primary flex items-center space-x-2">
                <Sliders className="w-5 h-5 text-brand-accent" />
                <span>Scenario Parameters</span>
              </CardTitle>
              <CardDescription>
                Adjust parameters to model different scenarios
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="quota">Quota Attainment (%)</Label>
                  <Input
                    id="quota"
                    value={scenarioInputs.quotaAttainment}
                    onChange={(e) => setScenarioInputs({...scenarioInputs, quotaAttainment: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="base">Base Commission (%)</Label>
                  <Input
                    id="base"
                    value={scenarioInputs.baseCommission}
                    onChange={(e) => setScenarioInputs({...scenarioInputs, baseCommission: e.target.value})}
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="accelerator">Accelerator Rate (%)</Label>
                  <Input
                    id="accelerator"
                    value={scenarioInputs.accelerator}
                    onChange={(e) => setScenarioInputs({...scenarioInputs, accelerator: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="team">Team Size</Label>
                  <Input
                    id="team"
                    value={scenarioInputs.teamSize}
                    onChange={(e) => setScenarioInputs({...scenarioInputs, teamSize: e.target.value})}
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="deal">Average Deal Size ($)</Label>
                <Input
                  id="deal"
                  value={scenarioInputs.avgDealSize}
                  onChange={(e) => setScenarioInputs({...scenarioInputs, avgDealSize: e.target.value})}
                />
              </div>

              <Button
                onClick={handleRunSimulation}
                disabled={isSimulating}
                className="w-full bg-brand-accent hover:bg-brand-accent/90"
              >
                {isSimulating ? (
                  <>
                    <BarChart3 className="w-4 h-4 mr-2 animate-pulse" />
                    Running Simulation...
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 mr-2" />
                    Run Simulation
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Results */}
          <Card className="bg-card/50 border-content-secondary/20">
            <CardHeader>
              <CardTitle className="text-content-primary flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-state-success" />
                <span>Simulation Results</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {simulationResults ? (
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-background/50 rounded-lg">
                      <div className="text-2xl font-bold text-content-primary">
                        {formatCurrency(simulationResults.totalRevenue)}
                      </div>
                      <p className="text-sm text-content-secondary">Total Revenue</p>
                    </div>
                    <div className="text-center p-4 bg-background/50 rounded-lg">
                      <div className="text-2xl font-bold text-brand-accent">
                        {formatCurrency(simulationResults.totalPayout)}
                      </div>
                      <p className="text-sm text-content-secondary">Total Payout</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-background/50 rounded-lg">
                      <div className="text-2xl font-bold text-state-success">
                        {simulationResults.payoutRatio.toFixed(1)}%
                      </div>
                      <p className="text-sm text-content-secondary">Payout Ratio</p>
                    </div>
                    <div className="text-center p-4 bg-background/50 rounded-lg">
                      <div className="text-2xl font-bold text-state-warning">
                        {formatCurrency(simulationResults.avgRepPayout)}
                      </div>
                      <p className="text-sm text-content-secondary">Avg Rep Payout</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-content-primary mb-3">Scenario Analysis</h4>
                    <div className="space-y-2">
                      {simulationResults.scenarios.map((scenario, idx) => (
                        <div key={idx} className="flex justify-between items-center p-2 bg-background/30 rounded">
                          <span className="text-content-secondary">{scenario.attainment} Attainment</span>
                          <div className="text-right">
                            <div className="font-semibold text-content-primary">
                              {formatCurrency(scenario.payout)}
                            </div>
                            <div className="text-xs text-content-secondary">
                              {formatCurrency(scenario.revenue)} revenue
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center text-content-secondary py-8">
                  <BarChart3 className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>Run a simulation to see results</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SimulationEngine;
