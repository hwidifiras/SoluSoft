import React, { memo, useMemo } from 'react';

const OptimizedLogo = memo(({ 
  variant = 'navbar', 
  darkMode, 
  className = '', 
  alt = 'Solusoft',
  priority = false 
}) => {
  const logoSrc = useMemo(() => {
    return darkMode 
      ? `/img/logo/solusoft-logo-${variant}-dark.svg`
      : `/img/logo/solusoft-logo-${variant}-light.svg`;
  }, [variant, darkMode]);

  const fallbackSrc = useMemo(() => {
    return `/img/logo/solusoft-logo-${variant}-dark.svg`;
  }, [variant]);

  return (
    <img 
      src={logoSrc}
      alt={alt}
      className={`transition-opacity duration-200 ${className}`}
      loading={priority ? 'eager' : 'lazy'}
      onError={(e) => {
        if (e.target.src !== fallbackSrc) {
          e.target.src = fallbackSrc;
        }
      }}
    />
  );
});

OptimizedLogo.displayName = 'OptimizedLogo';

export default OptimizedLogo;
