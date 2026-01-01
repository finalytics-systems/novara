'use client';

import Image from 'next/image';
import { useState } from 'react';

interface AppLogoProps {
  name: string;
  logo: string;
  className?: string;
}

export default function AppLogo({ name, logo, className = '' }: AppLogoProps) {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className={`relative w-full h-20 flex items-center justify-center ${className}`}>
      {!imageError ? (
        <>
          <Image
            src={`/images/logos/${logo}`}
            alt={name}
            width={120}
            height={60}
            className={`object-contain max-h-12 max-w-24 transition-opacity duration-300 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
          />
          {!imageLoaded && !imageError && (
            <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg flex items-center justify-center animate-pulse">
              <span className="text-primary-600 font-bold text-xs">{name}</span>
            </div>
          )}
        </>
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg flex items-center justify-center">
          <span className="text-primary-600 font-semibold text-sm">{name}</span>
        </div>
      )}
    </div>
  );
}

