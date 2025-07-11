
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface RoleCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  isSelected: boolean;
  onClick: () => void;
}

const RoleCard: React.FC<RoleCardProps> = ({ title, description, icon: Icon, isSelected, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`
        relative group cursor-pointer transition-all duration-300 transform hover:scale-105
        ${isSelected 
          ? 'bg-brand-accent/20 border-brand-accent shadow-lg shadow-brand-accent/25' 
          : 'bg-card/80 border-content-secondary/20 hover:border-brand-accent/50'
        }
        backdrop-blur-sm border-2 rounded-xl p-6 min-h-[140px] flex flex-col items-center justify-center text-center
      `}
    >
      {/* Selection indicator */}
      {isSelected && (
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-brand-accent rounded-full flex items-center justify-center">
          <div className="w-2 h-2 bg-white rounded-full" />
        </div>
      )}
      
      {/* Icon */}
      <div className={`mb-3 p-3 rounded-full transition-all duration-300 ${
        isSelected 
          ? 'bg-brand-accent text-white' 
          : 'bg-content-secondary/10 text-content-secondary group-hover:bg-brand-accent/20 group-hover:text-brand-accent'
      }`}>
        <Icon size={24} />
      </div>
      
      {/* Title */}
      <h3 className={`font-semibold text-lg mb-2 transition-colors duration-300 ${
        isSelected ? 'text-brand-accent' : 'text-content-primary group-hover:text-brand-accent'
      }`}>
        {title}
      </h3>
      
      {/* Description */}
      <p className="text-sm text-content-secondary leading-relaxed">
        {description}
      </p>
      
      {/* Shimmer effect on hover */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-shimmer" />
    </div>
  );
};

export default RoleCard;
