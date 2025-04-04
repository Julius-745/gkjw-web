import { ContactItems } from "@/types";
import { Tag } from "lucide-react";
import React from "react";

export const ContactData: Array<ContactItems> = [
    {
        icon: React.createElement(Tag),
        title: "Radio Sate Pari",
        description: "Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit. Maecenas ultrices.",
        link: "https://radiogkjwprob.caster.fm/"
    },
    {
        icon: React.createElement(Tag),
        title: "Liputan Khusus GKJW",
        description: "Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit. Maecenas ultrices.",
        link: "https://www.instagram.com/gkjwprolinggo/"
    },
    { 
        icon: React.createElement(Tag),
        title: "Kontak GKJW",
        description: "Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit. Maecenas ultrices.",
        link: "https://wa.me/6285257284172"
    }
];