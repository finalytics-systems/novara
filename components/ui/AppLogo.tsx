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
            style={{ filter: 'none' }}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
          />
          {!imageLoaded && !imageError && (
            <div className="w-16 h-16 rounded-lg flex items-center justify-center animate-pulse" style={{ backgroundColor: '#f3f4f6' }}>
              <span className="font-bold text-xs" style={{ color: '#09293B' }}>{name}</span>
            </div>
          )}
        </>
      ) : (
        <div className="w-full h-full rounded-lg flex items-center justify-center" style={{ backgroundColor: '#f3f4f6' }}>
          <span className="font-semibold text-sm" style={{ color: '#09293B' }}>{name}</span>
        </div>
      )}
    </div>
  );
}

