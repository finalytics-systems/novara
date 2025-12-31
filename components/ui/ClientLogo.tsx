'use client';

import Image from 'next/image';
import { useState } from 'react';

interface ClientLogoProps {
  name: string;
  logo: string;
  className?: string;
}

export default function ClientLogo({ name, logo, className = '' }: ClientLogoProps) {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className={`relative w-full h-20 mb-3 flex items-center justify-center ${className}`}>
      {!imageError ? (
        <>
          <Image
            src={`/images/logos/${logo}`}
            alt={name}
            width={120}
            height={60}
            className={`object-contain max-h-16 transition-opacity duration-300 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
          />
          {!imageLoaded && !imageError && (
            <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg mx-auto flex items-center justify-center shadow-md animate-pulse">
              <span className="text-white font-bold text-xl">{name.charAt(0)}</span>
            </div>
          )}
        </>
      ) : (
        <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg mx-auto flex items-center justify-center shadow-md">
          <span className="text-white font-bold text-xl">{name.charAt(0)}</span>
        </div>
      )}
    </div>
  );
}

