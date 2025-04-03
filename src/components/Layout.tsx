"use client";

import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Navigation } from "@/constant/navigation";
import { Dialog, DialogContent, DialogTrigger, DialogClose } from "@/components/ui/dialog";


interface ILayout {
  children: React.ReactNode;
}

const Layout: React.FC<ILayout> = ({ children }) => {
  const [open, setOpen] = useState<boolean>(true);

  useEffect(() => {
    setOpen(true);
  }, []);

  return (
    <div className="w-full overflow-auto">
      <Navbar data={Navigation} />
      <div className="mt-24 space-y-20">{children}</div>
      <Footer />
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl">
          <DialogClose className="absolute top-2 right-2" onClick={() => setOpen(false)} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Layout;
