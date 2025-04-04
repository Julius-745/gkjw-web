import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type HeadingLevel = 1 | 2 | 3 | 'paragraph';

interface ThemeContextType {
  getResponsiveHeadingClass: (level: HeadingLevel) => string;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : 1024
  );
  
  const getResponsiveHeadingClass = (level: HeadingLevel): string => {
    if (windowWidth < 640) {
      // Mobile
      return {
        1: 'text-3xl font-bold text-white',
        2: 'text-2xl font-bold text-white',
        3: 'text-sm font-medium text-white',
        'paragraph': 'text-sm text-white',
      }[level];
    } else if (windowWidth < 1024) {
      // Tablet
      return {
        1: 'text-4xl font-bold text-white',
        2: 'text-3xl font-bold text-white',
        3: 'text-base font-medium text-white',
        'paragraph': 'text-base text-white',
      }[level];
    } else {
      // Desktop
      return {
        1: 'text-6xl font-bold text-white',
        2: 'text-5xl font-bold text-white',
        3: 'text-lg font-medium text-white',
        'paragraph': 'text-lg text-white',
      }[level];
    }
  };

  useEffect(() => {
    const handleResize = (): void => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <ThemeContext.Provider value={{ getResponsiveHeadingClass }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};