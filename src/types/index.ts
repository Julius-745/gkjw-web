import React from "react";
interface INavChild {
    title: string;
    link: string;
  }
  
  export interface INavigation {
    name: string;
    link?: string;
    icon?: string;
    children?: INavChild[];
  }


export interface ThemeSettings {
  colorScheme: 'light' | 'dark';
  fontSizes: {
    heading1: string;
    heading2: string;
    heading3: string;
    paragraph: string;
  };
}

export interface HeroContent {
  title: string;
  subtitle: string;
  description: string;
  backgroundImage: string;
}
export interface ContactItems {
  icon: React.ReactNode; 
  title: string; 
  description: string, 
  link: string;
}

export interface ContactSectionProps {
  title?: string;
  description?: string;
  contactItems?: ContactItems[];
  imageUrl?: string;
}

export interface ArticleCardProps {
  createdAt: string;
  documentId: string;
  imageUrl: string;
  title: string;
  source: string;
  description: string;
  loading?: boolean;
  cover_image?: string;
  article_category?: {
    nama_kategori?: string;
  };
  onClick?: () => void;
}



