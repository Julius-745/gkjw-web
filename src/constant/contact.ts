import { ContactItems } from "@/types";
import { Tag } from "lucide-react";
import React from "react";

/**
 * Bagian ini akan memandu Anda untuk menghubungi GKJW, 
 * baik untuk menanyakan informasi terkait "warga titipan" 
 * maupun jadwal ibadah gereja. Silakan pilih salah satu 
 * kontak di bawah ini untuk mendapatkan informasi lebih lanjut.
 */
export const ContactData: Array<ContactItems> = [
    {
        icon: React.createElement(Tag),
        title: "Radio Swara Nyawiji",
        description: "Dengarkan Radio Saat Teduh Pagi Hari Setiap Jam 5 Pagi & Radio Saat Teduh Malam Hari Setiap Jam 5 Sore",
        link: "https://radiogkjwprob.caster.fm/"
    },
    {
        icon: React.createElement(Tag),
        title: "Journal Gallery",
        description: "Akses liputan khusus gereja yang menampilkan acara gereja dengan desain modern melalui Instagram.",
        link: "https://www.instagram.com/gkjwprobolinggo?igsh=cGltZ2hyZ3N4ZGQ3"
    },
    { 
        icon: React.createElement(Tag),
        title: "Kontak GKJW",
        description: "Bagian ini akan memandu Anda untuk menghubungi GKJW, baik untuk menanyakan informasi terkait jadwal ibadah gereja atau menitipkan warga jemaat. Silakan pilih salah satu kontak di bawah ini untuk mendapatkan informasi lebih lanjut.",
        link: "https://wa.me/6285257284172"
    }
];