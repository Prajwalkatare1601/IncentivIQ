
import React, { useState } from 'react';
import { Shield, FileText, Clock, AlertTriangle, CheckCircle, Eye, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';

const Governance = () => {
  const [selectedAudit, setSelectedAudit] = useState(null);

  const auditTrail = [
    {
      id: 1,
      timestamp: '2024-01-15 14:30:22',
      user: 'Sarah Johnson',
      action: 'Plan Modified',
      details: 'Updated commission rate from 3.2% to 3.5%',
      status: 'Approved',
      approver: 'Mike Chen (Director)'
    },
    {
      id: 2,
      timestamp: '2024-01-15 11:15:45',
      user: 'David Kim',
      action: 'Override Applied',
      details: 'Manual quota adjustment for Q4 territory change',
      status: 'Pending Review',
      approver: 'Pending'
    },
    {
      id: 3,
      timestamp: '2024-01-14 16:22:11',
      user: 'Emily Rodriguez',
      action: 'Rule Updated',
      details: 'Added accelerator tier at 125% quota attainment',
      status: 'Approved',
      approver: 'Lisa Thompson (Manager)'
    },
    {
      id: 4,
      timestamp: '2024-01-14 09:45:33',
      user: 'System',
      action: 'Compliance Check',
      details: 'Automated SOX compliance validation completed',
      status: 'Passed',
      approver: 'Automated'
    }
  ];

  const complianceRules = [
    {
      id: 1,
      title: 'SOX Compliance',
      description: 'Sarbanes-Oxley financial reporting requirements',
      status: 'Active',
      lastChecked: '2024-01-15',
      violations: 0
    },
    {
      id: 2,
      title: 'ASC 606 Revenue Recognition',
      description: 'Revenue recognition standard compliance',
      status: 'Active',
      lastChecked: '2024-01-15',
      violations: 0
    },
    {
      id: 3,
      title: 'Fair Labor Standards',
      description: 'FLSA overtime and minimum wage compliance',
      status: 'Active',
      lastChecked: '2024-01-14',
      violations: 1
    },
    {
      id: 4,
      title: 'Data Privacy (GDPR)',
      description: 'Personal data protection compliance',
      status: 'Active',
      lastChecked: '2024-01-15',
      violations: 0
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Approved': case 'Passed': case 'Active':
        return 'bg-state-success/20 text-state-success border-state-success/30';
      case 'Pending Review': case 'Pending':
        return 'bg-state-warning/20 text-state-warning border-state-warning/30';
      case 'Rejected': case 'Failed':
        return 'bg-state-error/20 text-state-error border-state-error/30';
      default:
        return 'bg-content-secondary/20 text-content-secondary border-content-secondary/30';
    }
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center space-x-3">
          <Shield className="w-8 h-8 text-brand-accent" />
          <h1 className="text-3xl font-bold text-content-primary">Governance & Compliance</h1>
        </div>
        
        <p className="text-content-secondary text-lg">
          Complete audit trail, override controls, and regulatory compliance monitoring.
        </p>

        {/* Compliance Dashboard */}
        <div className="grid lg:grid-cols-4 gap-4 mb-6">
          <Card className="bg-card/50 border-content-secondary/20">
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-state-success" />
                <div>
                  <div className="text-2xl font-bold text-content-primary">98.5%</div>
                  <p className="text-xs text-content-secondary">Compliance Score</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-card/50 border-content-secondary/20">
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <AlertTriangle className="w-5 h-5 text-state-warning" />
                <div>
                  <div className="text-2xl font-bold text-content-primary">1</div>
                  <p className="text-xs text-content-secondary">Open Violations</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-card/50 border-content-secondary/20">
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <Eye className="w-5 h-5 text-brand-accent" />
                <div>
                  <div className="text-2xl font-bold text-content-primary">247</div>
                  <p className="text-xs text-content-secondary">Audit Events</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-card/50 border-content-secondary/20">
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <Lock className="w-5 h-5 text-content-primary" />
                <div>
                  <div className="text-2xl font-bold text-content-primary">12</div>
                  <p className="text-xs text-content-secondary">Active Rules</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Audit Trail */}
          <Card className="bg-card/50 border-content-secondary/20">
            <CardHeader>
              <CardTitle className="text-content-primary flex items-center space-x-2">
                <Clock className="w-5 h-5 text-brand-accent" />
                <span>Audit Trail</span>
              </CardTitle>
              <CardDescription>
                Complete history of all system changes and approvals
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {auditTrail.map((entry) => (
                  <div
                    key={entry.id}
                    className="p-3 bg-background/50 rounded-lg border border-content-secondary/10 hover:border-brand-accent/30 cursor-pointer transition-colors"
                    onClick={() => setSelectedAudit(entry)}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-medium text-content-primary">{entry.action}</h4>
                        <p className="text-sm text-content-secondary">{entry.user}</p>
                      </div>
                      <Badge className={getStatusColor(entry.status)}>
                        {entry.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-content-secondary mb-1">{entry.details}</p>
                    <p className="text-xs text-content-secondary">{entry.timestamp}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Compliance Rules */}
          <Card className="bg-card/50 border-content-secondary/20">
            <CardHeader>
              <CardTitle className="text-content-primary flex items-center space-x-2">
                <Shield className="w-5 h-5 text-state-success" />
                <span>Compliance Rules</span>
              </CardTitle>
              <CardDescription>
                Active compliance monitoring and rule enforcement
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {complianceRules.map((rule) => (
                  <div key={rule.id} className="p-3 bg-background/50 rounded-lg border border-content-secondary/10">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-medium text-content-primary">{rule.title}</h4>
                        <p className="text-sm text-content-secondary">{rule.description}</p>
                      </div>
                      <Badge className={getStatusColor(rule.status)}>
                        {rule.status}
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-content-secondary">
                        Last checked: {rule.lastChecked}
                      </span>
                      {rule.violations > 0 ? (
                        <span className="text-state-error">
                          {rule.violations} violation{rule.violations > 1 ? 's' : ''}
                        </span>
                      ) : (
                        <span className="text-state-success">No violations</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Audit Detail Modal */}
        {selectedAudit && (
          <Card className="bg-card/50 border-brand-accent/30">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-content-primary">Audit Entry Details</CardTitle>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedAudit(null)}
                  className="text-content-secondary hover:text-content-primary"
                >
                  ✕
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-content-primary mb-2">Event Information</h4>
                  <div className="space-y-2 text-sm">
                    <div><span className="text-content-secondary">Action:</span> {selectedAudit.action}</div>
                    <div><span className="text-content-secondary">User:</span> {selectedAudit.user}</div>
                    <div><span className="text-content-secondary">Timestamp:</span> {selectedAudit.timestamp}</div>
                    <div><span className="text-content-secondary">Status:</span> 
                      <Badge className={`ml-2 ${getStatusColor(selectedAudit.status)}`}>
                        {selectedAudit.status}
                      </Badge>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-content-primary mb-2">Details</h4>
                  <p className="text-sm text-content-secondary mb-2">{selectedAudit.details}</p>
                  <div className="text-sm">
                    <span className="text-content-secondary">Approver:</span> {selectedAudit.approver}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Compliance Alert */}
        <Alert className="border-state-warning/30">
          <AlertTriangle className="h-4 w-4 text-state-warning" />
          <AlertDescription className="text-content-secondary">
            <strong className="text-state-warning">Compliance Notice:</strong> One FLSA violation detected in overtime calculations. 
            Review required within 24 hours to maintain compliance status.
          </AlertDescription>
        </Alert>
      </div>
    </div>
  );
};

export default Governance;
