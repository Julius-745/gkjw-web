import { INavigation } from "@/types";
import { Menu } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import Logo from '../assets/image/gkjw.svg'

interface INavbar {
  data: INavigation[];
}

const MenuList: React.FC<INavbar> = ({ data }) => {
    return (
      <nav className="flex flex-col space-y-4 p-10 lg:flex-row lg:space-x-6 lg:space-y-0 lg:p-0">
        {data.map((item, idx) => (
          <a key={idx} href={`${item.link}`} className="text-md font-medium hover:underline text-black lg:text-white base:hover:bg-gray-500/50">
            {item.name}
          </a>
        ))}
      </nav>
    );
  };

const Navbar: React.FC<INavbar> = ({ data }) => {

  return (
    <header className="fixed top-0 w-full bg-[#161722] shadow-md z-50">
      <div className="container mx-auto px-6 flex items-center justify-between py-4">
        <div className="flex items-center space-x-4">
          <a href={"/"}>
            <img src={Logo} alt="Logo" width={40} height={40} className="invert"/>
          </a>
          <span className="text-lg font-bold text-white">GKJW Jemaat Probolinggo</span>
        </div>

        <div className="hidden lg:flex items-center space-x-8">
          <MenuList data={data} />
        </div>

        <Sheet>
          <SheetTrigger className="lg:hidden">
            <Menu color="white"/>
          </SheetTrigger>
          <SheetContent>
            <MenuList data={data} />
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;
