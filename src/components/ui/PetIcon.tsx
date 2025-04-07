
import React from 'react';
import { Cat, Dog, Bird, Fish, HelpCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

type PetIconProps = {
  type: 'cat' | 'dog' | 'bird' | 'fish' | 'other';
  className?: string;
  size?: number;
  color?: string;
};

export const PetIcon: React.FC<PetIconProps> = ({ 
  type, 
  className, 
  size = 24,
  color
}) => {
  const iconProps = {
    size,
    className: cn('transition-all duration-300', className),
    color: color || undefined
  };

  switch(type) {
    case 'cat':
      return <Cat {...iconProps} />;
    case 'dog':
      return <Dog {...iconProps} />;
    case 'bird':
      return <Bird {...iconProps} />;
    case 'fish':
      return <Fish {...iconProps} />;
    case 'other':
    default:
      return <HelpCircle {...iconProps} />;
  }
};

export default PetIcon;
