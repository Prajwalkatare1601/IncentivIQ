
import React, { useState } from 'react';
import { Brain, Wand2, FileText, CheckCircle, AlertCircle, TrendingUp, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import ExcelUpload from '@/components/ExcelUpload';

const PlanAutomation = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedPlan, setGeneratedPlan] = useState(null);
  const [uploadedData, setUploadedData] = useState<any[]>([]);
  const [formData, setFormData] = useState({
    department: '',
    targetRevenue: '',
    teamSize: '',
    industry: ''
  });

  const handleFileUpload = (file: File, data: any[]) => {
    setUploadedData(data);
    console.log('Uploaded data:', data);
    // Auto-populate form fields if data is available
    if (data.length > 0) {
      setFormData(prev => ({
        ...prev,
        teamSize: data.length.toString(),
        targetRevenue: data.reduce((sum, rep) => sum + (rep.quota || 0), 0).toString()
      }));
    }
  };

  const handleGenerate = async () => {
    setIsGenerating(true);
    // Simulate AI processing
    setTimeout(() => {
      setGeneratedPlan({
        planName: `${formData.department || 'Sales'} Incentive Plan 2024`,
        baseCommission: '3.5%',
        accelerators: ['5% at 110% quota attainment', '7% at 125% quota attainment'],
        kickers: ['$2,000 bonus for new account acquisition'],
        aiRecommendations: [
          'Increase accelerator threshold to 108% based on historical performance',
          'Add team-based bonus component for better collaboration',
          'Implement quarterly spiffs for product mix optimization',
          ...(uploadedData.length > 0 ? ['Customize individual quotas based on uploaded territory data'] : [])
        ],
        riskScore: 'Low',
        complianceStatus: 'Approved',
        uploadedDataInsights: uploadedData.length > 0 ? {
          totalReps: uploadedData.length,
          avgQuota: uploadedData.reduce((sum, rep) => sum + (rep.quota || 0), 0) / uploadedData.length,
          topPerformer: uploadedData.reduce((max, rep) => rep.sales > max.sales ? rep : max, uploadedData[0])
        } : null
      });
      setIsGenerating(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center space-x-3">
          <Brain className="w-8 h-8 text-brand-accent" />
          <h1 className="text-3xl font-bold text-content-primary">Plan Automation</h1>
        </div>
        
        <p className="text-content-secondary text-lg">
          Generate comprehensive incentive compensation plans using AI-powered business rules and recommendations.
        </p>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Input Form */}
          <div className="space-y-6">
            <Card className="bg-card/50 border-content-secondary/20">
              <CardHeader>
                <CardTitle className="text-content-primary flex items-center space-x-2">
                  <Wand2 className="w-5 h-5 text-brand-accent" />
                  <span>Plan Generator</span>
                </CardTitle>
                <CardDescription>
                  Provide business context for AI-powered plan generation
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="department">Department</Label>
                  <Input
                    id="department"
                    placeholder="e.g., Sales, Customer Success"
                    value={formData.department}
                    onChange={(e) => setFormData({...formData, department: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="revenue">Target Revenue ($)</Label>
                  <Input
                    id="revenue"
                    placeholder="e.g., 5000000"
                    value={formData.targetRevenue}
                    onChange={(e) => setFormData({...formData, targetRevenue: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="teamSize">Team Size</Label>
                  <Input
                    id="teamSize"
                    placeholder="e.g., 25"
                    value={formData.teamSize}
                    onChange={(e) => setFormData({...formData, teamSize: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="industry">Industry</Label>
                  <Input
                    id="industry"
                    placeholder="e.g., SaaS, Manufacturing"
                    value={formData.industry}
                    onChange={(e) => setFormData({...formData, industry: e.target.value})}
                  />
                </div>
                <Button 
                  onClick={handleGenerate}
                  disabled={isGenerating}
                  className="w-full bg-brand-accent hover:bg-brand-accent/90"
                >
                  {isGenerating ? (
                    <>
                      <Brain className="w-4 h-4 mr-2 animate-spin" />
                      AI Generating Plan...
                    </>
                  ) : (
                    <>
                      <Wand2 className="w-4 h-4 mr-2" />
                      Generate Plan
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>

            {/* Excel Upload */}
            <ExcelUpload
              onFileUpload={handleFileUpload}
              placeholder="Upload sales team data to enhance AI recommendations"
              acceptedFormats={['.xlsx', '.xls', '.csv']}
            />

            {uploadedData.length > 0 && (
              <Card className="bg-card/50 border-content-secondary/20">
                <CardHeader>
                  <CardTitle className="text-content-primary flex items-center space-x-2">
                    <FileText className="w-5 h-5 text-state-success" />
                    <span>Uploaded Data Preview</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {uploadedData.slice(0, 3).map((rep, idx) => (
                      <div key={idx} className="flex justify-between items-center p-2 bg-content-secondary/5 rounded">
                        <span className="text-content-primary">{rep.name}</span>
                        <div className="flex space-x-2">
                          <Badge className="bg-brand-accent/20 text-brand-accent">
                            ${rep.sales?.toLocaleString()}
                          </Badge>
                          <Badge className="bg-content-secondary/20 text-content-secondary">
                            ${rep.quota?.toLocaleString()} quota
                          </Badge>
                        </div>
                      </div>
                    ))}
                    {uploadedData.length > 3 && (
                      <p className="text-sm text-content-secondary text-center">
                        +{uploadedData.length - 3} more records
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Generated Plan */}
          <Card className="bg-card/50 border-content-secondary/20">
            <CardHeader>
              <CardTitle className="text-content-primary flex items-center space-x-2">
                <FileText className="w-5 h-5 text-state-success" />
                <span>Generated Plan</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {generatedPlan ? (
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-content-primary mb-2">{generatedPlan.planName}</h3>
                    <div className="flex space-x-2 mb-4">
                      <Badge className="bg-state-success/20 text-state-success border-state-success/30">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        {generatedPlan.complianceStatus}
                      </Badge>
                      <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                        Risk: {generatedPlan.riskScore}
                      </Badge>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-content-primary mb-2">Commission Structure</h4>
                    <p className="text-content-secondary">Base Commission: {generatedPlan.baseCommission}</p>
                  </div>

                  <div>
                    <h4 className="font-medium text-content-primary mb-2">Accelerators</h4>
                    <ul className="text-content-secondary space-y-1">
                      {generatedPlan.accelerators.map((acc, idx) => (
                        <li key={idx} className="flex items-center">
                          <TrendingUp className="w-3 h-3 mr-2 text-state-success" />
                          {acc}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {generatedPlan.uploadedDataInsights && (
                    <div>
                      <h4 className="font-medium text-content-primary mb-2">Data-Driven Insights</h4>
                      <div className="bg-brand-accent/10 p-3 rounded-lg space-y-2">
                        <p className="text-sm text-content-secondary">
                          <strong>Team Size:</strong> {generatedPlan.uploadedDataInsights.totalReps} reps
                        </p>
                        <p className="text-sm text-content-secondary">
                          <strong>Average Quota:</strong> ${generatedPlan.uploadedDataInsights.avgQuota?.toLocaleString()}
                        </p>
                        <p className="text-sm text-content-secondary">
                          <strong>Top Performer:</strong> {generatedPlan.uploadedDataInsights.topPerformer?.name}
                        </p>
                      </div>
                    </div>
                  )}

                  <div>
                    <h4 className="font-medium text-content-primary mb-2">AI Recommendations</h4>
                    <ul className="text-content-secondary space-y-1">
                      {generatedPlan.aiRecommendations.map((rec, idx) => (
                        <li key={idx} className="flex items-start">
                          <Brain className="w-3 h-3 mr-2 mt-1 text-brand-accent" />
                          {rec}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="text-center text-content-secondary py-8">
                  <Brain className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>Generate a plan to see AI-powered recommendations</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PlanAutomation;
