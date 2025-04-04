import React from 'react';
import { useTheme } from '@/theme/themeContext';

interface BannerSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
}

const Banner: React.FC<BannerSectionProps> = ({ 
  title = "GEREJA KRISTEN JAWI WETAN JEMAAT PROBOLINGGO",
  subtitle = "SELAMAT DATANG WARGA NYAWIJI",
  description = "Menjadi rekan kerja Tuhan dalam mewujudkan kerajaan Allah didunia",
  backgroundImage = "https://ik.imagekit.io/uavheojaq/GKJW/header-image.png?updatedAt=1743749972728"
}) => {
  const { getResponsiveHeadingClass } = useTheme();
  
  const titleParts = title.split(' JEMAAT ');
  
  return (
    <section className="-mt-8 relative w-full h-[70vh] md:h-[80vh] lg:h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src={backgroundImage} 
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>
      </div>
      <div className="relative z-10 text-center px-6 md:px-16 max-w-7xl mx-auto">
        <h3 className={`${getResponsiveHeadingClass(3)} uppercase tracking-wider mb-3 md:mb-4`}>
          {subtitle}
        </h3>
        
        <h1 className={`${getResponsiveHeadingClass(1)} leading-tight mb-4 md:mb-8`}>
          {titleParts[0]}
          <br className="hidden sm:block" />
          {titleParts.length > 1 ? `JEMAAT ${titleParts[1]}` : ''}
        </h1>
        
        <p className={`${getResponsiveHeadingClass('paragraph')} max-w-3xl mx-auto`}>
          {description}
        </p>
      </div>
    </section>
  );
};

export default Banner;