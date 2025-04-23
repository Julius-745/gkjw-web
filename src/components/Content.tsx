import React from "react";
import { useTheme } from "@/theme/themeContext";
import { ContactSectionProps } from "@/types";
import { ArticleData } from "@/constant/articles";
import ContentCard from "./ContentCad";

const ContentSection: React.FC<ContactSectionProps> = ({
  title = "GKJW UPDATES",
  description = "Untuk informasi mengenai jadwal ibadah dan kegiatan gereja, GKJW Jemaat Probolinggo memiliki beberapa pelayanan yang dapat Anda akses. Kami menyediakan Radio Sate Pari, yang digunakan untuk saat teduh bersama. Selain itu, ada juga Liputan Khusus GKJW, yang berisi informasi terkait agenda dan event di gereja. Untuk pertanyaan lebih lanjut atau jika Anda ingin menitipkan jemaat, Anda dapat menghubungi kami melalui email di gkjwprolingg@gmail.com, telepon di +6285257284172, atau melalui media sosial kami di Instagram, Facebook, dan WhatsApp. Kami siap membantu Anda mendapatkan informasi yang Anda butuhkan.",
}) => {
  const { getResponsiveHeadingClass } = useTheme();

  return (
    <section className="py-16 px-6 md:px-16 max-w-7xl mx-auto">
      <h2 className={`${getResponsiveHeadingClass(2, true)} text-center mb-6`}>{title}</h2>
      <p className="text-center mx-auto mb-12">{description}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
      {ArticleData.map((article, index) => (
        <ContentCard key={index} {...article} />
      ))}
    </div>
    </section>
  );
};

export default ContentSection;
