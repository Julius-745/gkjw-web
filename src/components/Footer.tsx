"use client";

import React from "react";
import { Link } from "react-router";
import { FooterNav } from "@/constant/navigation";
import Logo from '../assets/image/gkjw.svg'

const Footer = () => {
  return (
    <div className="w-full bg-[#161722] py-20 px-10">
      <div className="flex flex-col md:flex-row justify-between gap-10">
        <div className="flex flex-col gap-8 max-w-lg">
          <div className="flex items-center">
            <img src={Logo} alt="Logo" width={96} height={96} className="invert"/>
            <span className="text-white text-lg ml-4">GKJW Jemaat Probolinggo</span>
          </div>
          <p className="text-white">Advance your life with comprehensive program together with Perumdam Tirta Argapura</p>
          <p className="text-white text-sm">Copyright GKJW Jemaat Probolinggo</p>
        </div>
        
        <div className="flex flex-col gap-8 max-w-lg">
          <h3 className="text-white text-2xl">Kontak</h3>
          <p className="text-white">perumdam.argapura@gmail.com</p>
          <p className="text-white">Jl. Raya Dringu, Krajan, Tamansari, Kec. Dringu, Kabupaten Probolinggo, Jawa Timur</p>
          <p className="text-white">+62 264 2185 605</p>
        </div>

        <div className="flex flex-col gap-5 mt-10 md:mt-0">
          <h3 className="text-white text-2xl">Pelayanan</h3>
          {FooterNav.map((item, idx) => (
            <Link to={`${item.link}`} key={idx} className="text-white text-lg hover:text-[#FFBFFC]">
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
