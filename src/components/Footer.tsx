import { Link } from "react-router";
import { FooterNav } from "@/constant/navigation";
import Logo from '../assets/image/gkjw.svg'
import Kmti from '../assets/image/kmti.svg'

export const Footer = () => {
  return (
    <div className="w-full bg-[#161722] py-20 px-10">
      <div className="flex flex-col md:flex-row justify-between gap-10">
        <div className="flex flex-col gap-8 max-w-lg">
          <div className="flex items-center">
            <img src={Logo} alt="Logo" width={96} height={96} className="invert"/>
            <span className="text-white text-lg ml-4">GKJW Jemaat Probolinggo</span>
          </div>
          <div className={"flex flex-row items-center gap-3"}>
            <img src={Kmti} alt="Logo" width={56} height={56}/>
            <p className="text-white text-sm">Copyright KMTI GKJW Jemaat Probolinggo</p>
          </div>
        </div>
        
        <div className="flex flex-col gap-8 max-w-lg">
          <h3 className="text-white text-2xl">Kontak</h3>
          <Link to={'mailto:gkjwprolingg@gmail.com'} style={{cursor: 'pointer'}} target="blank">
            <p className="text-white">gkjwprolingg@gmail.com</p>
          </Link>
          <p className="text-white">Jl. Dr Cipto Mangunkusumo 1 Sukabumi Mayangan Kota Probolinggo 68118, Jl. Ahmad Yani No.22, Sukabumi, Mayangan, Probolinggo City, East Java 67219</p>
          <Link to={'https://wa.me/6285257284172'} style={{cursor: 'pointer'}} target="blank">
            <p className="text-white">+6285257284172</p>
          </Link>
        </div>

        <div className="flex flex-col gap-5 mt-10 md:mt-0">
          <h3 className="text-white text-2xl">Pelayanan</h3>
          {FooterNav.map((item, idx) => (
            <Link to={`${item.link}`} key={idx} className="text-white text-lg hover:text-[#FFBFFC]" target="blank">
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
