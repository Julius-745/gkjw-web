import React from "react";
import { useTheme } from "@/theme/themeContext";
import { ContactSectionProps } from "@/types";
import { ContactData } from "@/constant/contact";

const ContactSection: React.FC<ContactSectionProps> = ({
  title = "PELAYANAN GKJW",
  description =
    "Untuk informasi mengenai jadwal ibadah dan kegiatan gereja, GKJW Jemaat Probolinggo memiliki beberapa pelayanan yang dapat Anda akses. Kami menyediakan Radio Sate Pari, yang digunakan untuk saat teduh bersama. Selain itu, ada juga Liputan Khusus GKJW, yang berisi informasi terkait agenda dan event di gereja. Untuk pertanyaan lebih lanjut atau jika Anda ingin menitipkan jemaat, Anda dapat menghubungi kami melalui email di gkjwprolingg@gmail.com, telepon di +6285257284172, atau melalui media sosial kami di Instagram, Facebook, dan WhatsApp. Kami siap membantu Anda mendapatkan informasi yang Anda butuhkan.",
  contactItems = ContactData,
  imageUrl = "https://ik.imagekit.io/uavheojaq/GKJW/dummyAsset.png?updatedAt=1743756756176"
}) => {
  const { getResponsiveHeadingClass } = useTheme();

  return (
    <section className="py-16 px-6 md:px-16 max-w-7xl mx-auto">
      <h2 className={`${getResponsiveHeadingClass(2, true)} text-center mb-6`}>{title}</h2>
      <p className="text-center mx-auto mb-12">{description}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src={imageUrl}
            alt="Church Service"
            width={600}
            height={400}
            className="rounded-lg"
          />
        </div>
        <div className="space-y-6 cursor-pointer">
          {contactItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-100 transition duration-200 border border-gray-200">
                <div key={index} className="flex items-start space-x-4">
                <div className="text-gray-500 text-xl">{item.icon}</div>
                <div>
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                </div>
                </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
