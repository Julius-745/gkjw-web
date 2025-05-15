import React from "react";
import { useTheme } from "@/theme/themeContext";
import { ContactSectionProps } from "@/types";
import useFetchData from "@/hooks/fetchData";
import { useLocation } from "wouter";
import ContentCardSkeleton from "./ContentCardSkeleton";
import WartaCard from "./WartaCard";

export const WartaSection: React.FC<ContactSectionProps> = ({
  title = "WARTA GKJW",
  description = "Untuk informasi mengenai jadwal ibadah dan kegiatan gereja, GKJW Jemaat Probolinggo memiliki beberapa pelayanan yang dapat Anda akses. Kami menyediakan Radio Sate Pari, yang digunakan untuk saat teduh bersama. Selain itu, ada juga Liputan Khusus GKJW, yang berisi informasi terkait agenda dan event di gereja. Untuk pertanyaan lebih lanjut atau jika Anda ingin menitipkan jemaat, Anda dapat menghubungi kami melalui email di gkjwprolingg@gmail.com, telepon di +6285257284172, atau melalui media sosial kami di Instagram, Facebook, dan WhatsApp. Kami siap membantu Anda mendapatkan informasi yang Anda butuhkan.",
}) => {
  const [, navigate] = useLocation();
  const { data, loading } = useFetchData<any>("warta-jemaats?populate=*", []);
  const { getResponsiveHeadingClass } = useTheme();

  return (
    <section className="py-16 px-6 md:px-16 max-w-7xl mx-auto">
      <h2 className={`${getResponsiveHeadingClass(2, true)} text-center mb-6`}>{title}</h2>
      <p className="text-center mx-auto mb-12">{description}</p>
      <div id="Gkjwupdates" className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
        {loading ? (
          Array.from({ length: 4 }).map((_, i) => <ContentCardSkeleton key={i} />)
        ) : data.length > 0 ? (
          data.map((data: any, idx: number) => (
            <WartaCard key={idx} createdAt={data.createdAt} tanggal={data.tanggal} onClick={() => navigate(`warta/${data.documentId}`)} nomor_edisi={data.nomor_edisi}/>
          ))
        ) : (
          <p className="col-span-full text-center">Warta Belum Tersedia</p>
        )}
      </div>
    </section>
  );
};

