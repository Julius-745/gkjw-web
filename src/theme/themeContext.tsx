import React, { createContext, useContext, useState, useEffect, ReactNode, useMemo } from 'react';

type HeadingLevel = 1 | 2 | 3 | 'paragraph';

interface ThemeContextType {
  getResponsiveHeadingClass: (level: HeadingLevel, isBGWhite: boolean) => string;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1024
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getResponsiveHeadingClass = useMemo(() => {
    return (level: HeadingLevel, isBGWhite: boolean): string => {
      const colorClass = isBGWhite ? 'text-black' : 'text-white';

      const fontSizes = {
        mobile: { 1: 'text-3xl', 2: 'text-2xl', 3: 'text-sm', paragraph: 'text-sm' },
        tablet: { 1: 'text-4xl', 2: 'text-3xl', 3: 'text-base', paragraph: 'text-base' },
        desktop: { 1: 'text-6xl', 2: 'text-5xl', 3: 'text-lg', paragraph: 'text-lg' },
      };

      const fontWeights = {
        1: 'font-bold',
        2: 'font-bold',
        3: 'font-medium',
        paragraph: '',
      };

      const sizeKey = windowWidth < 640 ? 'mobile' : windowWidth < 1024 ? 'tablet' : 'desktop';
      
      return `${fontSizes[sizeKey][level]} ${fontWeights[level]} ${colorClass}`;
    };
  }, [windowWidth]);

  return (
    <ThemeContext.Provider value={{ getResponsiveHeadingClass }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
