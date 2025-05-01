import React from "react";
import Navbar from "./Navbar";
import { Footer } from "./Footer";
import { Navigation } from "@/constant/navigation";


interface ILayout {
  children: React.ReactNode;
}

export const Layout: React.FC<ILayout> = ({ children }) => {

  return (
    <div className="w-full overflow-auto">
      <Navbar data={Navigation} />
      <div className="mt-24 space-y-20">{children}</div>
      <Footer />
    </div>
  );
};
