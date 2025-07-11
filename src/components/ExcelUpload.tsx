
import React, { useState, useRef } from 'react';
import { Upload, FileSpreadsheet, Check, AlertCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ExcelUploadProps {
  onFileUpload: (file: File, data: any[]) => void;
  acceptedFormats?: string[];
  maxSize?: number; // in MB
  placeholder?: string;
}

const ExcelUpload: React.FC<ExcelUploadProps> = ({
  onFileUpload,
  acceptedFormats = ['.xlsx', '.xls', '.csv'],
  maxSize = 10,
  placeholder = "Upload your Excel document to import data"
}) => {
  const [dragActive, setDragActive] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'uploading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const mockParseExcel = (file: File): Promise<any[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Mock data based on file name or type
        const mockData = [
          { id: 1, name: 'John Smith', territory: 'North', sales: 125000, quota: 100000 },
          { id: 2, name: 'Sarah Johnson', territory: 'South', sales: 98000, quota: 95000 },
          { id: 3, name: 'Mike Davis', territory: 'East', sales: 110000, quota: 105000 },
          { id: 4, name: 'Lisa Chen', territory: 'West', sales: 87000, quota: 90000 }
        ];
        resolve(mockData);
      }, 1500);
    });
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = async (file: File) => {
    // Validate file type
    const fileExtension = '.' + file.name.split('.').pop()?.toLowerCase();
    if (!acceptedFormats.includes(fileExtension)) {
      setErrorMessage(`File type not supported. Please upload: ${acceptedFormats.join(', ')}`);
      setUploadStatus('error');
      return;
    }

    // Validate file size
    if (file.size > maxSize * 1024 * 1024) {
      setErrorMessage(`File size too large. Maximum size: ${maxSize}MB`);
      setUploadStatus('error');
      return;
    }

    setUploadedFile(file);
    setUploadStatus('uploading');
    setErrorMessage('');

    try {
      const data = await mockParseExcel(file);
      setUploadStatus('success');
      onFileUpload(file, data);
    } catch (error) {
      setUploadStatus('error');
      setErrorMessage('Failed to parse file. Please check the format.');
    }
  };

  const removeFile = () => {
    setUploadedFile(null);
    setUploadStatus('idle');
    setErrorMessage('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <Card className="bg-card/50 border-content-secondary/20">
      <CardContent className="p-6">
        <div
          className={`relative border-2 border-dashed rounded-lg p-6 transition-colors ${
            dragActive 
              ? 'border-brand-accent bg-brand-accent/10' 
              : uploadStatus === 'success'
              ? 'border-state-success bg-state-success/10'
              : uploadStatus === 'error'
              ? 'border-state-error bg-state-error/10'
              : 'border-content-secondary/30 hover:border-brand-accent/50'
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <input
            ref={fileInputRef}
            type="file"
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            onChange={handleChange}
            accept={acceptedFormats.join(',')}
          />

          <div className="text-center">
            {uploadStatus === 'uploading' ? (
              <div className="space-y-4">
                <Upload className="w-12 h-12 mx-auto text-brand-accent animate-bounce" />
                <div>
                  <p className="text-content-primary font-medium">Uploading and processing...</p>
                  <p className="text-sm text-content-secondary">Please wait while we analyze your file</p>
                </div>
              </div>
            ) : uploadedFile && uploadStatus === 'success' ? (
              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-3">
                  <Check className="w-8 h-8 text-state-success" />
                  <FileSpreadsheet className="w-8 h-8 text-state-success" />
                </div>
                <div>
                  <p className="text-content-primary font-medium">{uploadedFile.name}</p>
                  <p className="text-sm text-state-success">File uploaded successfully</p>
                  <div className="flex items-center justify-center space-x-2 mt-2">
                    <Badge className="bg-state-success/20 text-state-success">
                      {(uploadedFile.size / 1024).toFixed(1)} KB
                    </Badge>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={removeFile}
                      className="h-6 px-2"
                    >
                      <X className="w-3 h-3 mr-1" />
                      Remove
                    </Button>
                  </div>
                </div>
              </div>
            ) : uploadStatus === 'error' ? (
              <div className="space-y-4">
                <AlertCircle className="w-12 h-12 mx-auto text-state-error" />
                <div>
                  <p className="text-state-error font-medium">Upload Failed</p>
                  <p className="text-sm text-content-secondary">{errorMessage}</p>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setUploadStatus('idle')}
                    className="mt-2"
                  >
                    Try Again
                  </Button>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <FileSpreadsheet className="w-12 h-12 mx-auto text-content-secondary" />
                <div>
                  <p className="text-content-primary font-medium">Upload Excel Document</p>
                  <p className="text-sm text-content-secondary">{placeholder}</p>
                  <div className="mt-2 flex flex-wrap gap-1 justify-center">
                    {acceptedFormats.map(format => (
                      <Badge key={format} className="bg-content-secondary/20 text-content-secondary text-xs">
                        {format}
                      </Badge>
                    ))}
                  </div>
                </div>
                <Button className="bg-brand-accent hover:bg-brand-accent/90">
                  <Upload className="w-4 h-4 mr-2" />
                  Choose File
                </Button>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ExcelUpload;
