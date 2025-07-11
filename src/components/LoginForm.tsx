
import React, { useState } from 'react';
import { Eye, EyeOff, LogIn, User, Crown, Shield, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import RoleCard from './RoleCard';

const roles = [
  {
    id: 'sales-rep',
    title: 'Sales Rep',
    description: 'Track your performance and commissions',
    icon: User
  },
  {
    id: 'manager',
    title: 'Manager',
    description: 'Manage team performance and targets',
    icon: Crown
  },
  {
    id: 'director',
    title: 'Director',
    description: 'Strategic oversight and analytics',
    icon: Shield
  },
  {
    id: 'admin',
    title: 'Admin',
    description: 'System configuration and management',
    icon: Settings
  }
];

const LoginForm = () => {
  const [selectedRole, setSelectedRole] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedRole) {
      alert('Please select your role');
      return;
    }
    
    setIsLoading(true);
    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
      console.log('Login attempt:', { email, role: selectedRole });
      alert(`Login attempted for ${selectedRole} role`);
    }, 2000);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-content-primary mb-2">
          Welcome Back
        </h1>
        <p className="text-content-secondary">
          Sign in to your incentive compensation portal
        </p>
      </div>

      {/* Role Selection */}
      <div className="mb-8">
        <Label className="text-content-primary font-medium mb-4 block">
          Select Your Role
        </Label>
        <div className="grid grid-cols-2 gap-3">
          {roles.map((role) => (
            <RoleCard
              key={role.id}
              title={role.title}
              description={role.description}
              icon={role.icon}
              isSelected={selectedRole === role.id}
              onClick={() => setSelectedRole(role.id)}
            />
          ))}
        </div>
      </div>

      {/* Login Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Email Field */}
        <div className="space-y-2">
          <Label htmlFor="email" className="text-content-primary font-medium">
            Email Address
          </Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="bg-card/50 border-content-secondary/20 text-content-primary placeholder:text-content-secondary/60 focus:border-brand-accent focus:ring-brand-accent/20"
          />
        </div>

        {/* Password Field */}
        <div className="space-y-2">
          <Label htmlFor="password" className="text-content-primary font-medium">
            Password
          </Label>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              className="bg-card/50 border-content-secondary/20 text-content-primary placeholder:text-content-secondary/60 focus:border-brand-accent focus:ring-brand-accent/20 pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-content-secondary hover:text-brand-accent transition-colors"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        {/* Remember Me & Forgot Password */}
        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center space-x-2 text-content-secondary">
            <input 
              type="checkbox" 
              className="rounded border-content-secondary/20 text-brand-accent focus:ring-brand-accent/20" 
            />
            <span>Remember me</span>
          </label>
          <a 
            href="#" 
            className="text-brand-accent hover:text-brand-accent/80 transition-colors"
          >
            Forgot password?
          </a>
        </div>

        {/* Login Button */}
        <Button
          type="submit"
          disabled={isLoading || !selectedRole}
          className="w-full bg-brand-accent hover:bg-brand-accent/90 text-white py-6 text-lg font-semibold transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          {isLoading ? (
            <div className="flex items-center space-x-2">
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              <span>Signing In...</span>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <LogIn size={20} />
              <span>Sign In</span>
            </div>
          )}
        </Button>
      </form>

      {/* Footer */}
      <div className="mt-8 text-center text-content-secondary text-sm">
        <p>
          Need access? Contact your{' '}
          <a href="#" className="text-brand-accent hover:text-brand-accent/80 transition-colors">
            system administrator
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
