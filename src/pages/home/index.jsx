import { Link } from "react-router-dom";
import "../../index.css";
import Download from "./Download";

import { BsWhatsapp, BsInstagram } from "react-icons/bs";
// import { HiOutlineLocationMarker } from "react-icons/hi";

import Logo from "../../assets/logo.jpeg";
import * as catalogo from '../../assets'




function Home() {
  return (
    <div className="flex flex-col  justify-center">
      <div className="flex flex-col gap-6 justify-evenly items-center my-20">
        <div className="flex flex-col gap-1  items-center">
          <img
            src={Logo}
            alt="Imagem ilustrativa"
            className="w-48 rounded-full border-2"
          />
          <h1 className="text-xl text-[#000] font-bold font-['DM Sans']">
            Fabíola Tuppeware©
          </h1>
          <p className="text-black text-sm text-center">
            Oi oi, cliente tupperware. Seja bem vindo(a) ao mundo de variedades
            que irá colorir sua cozinha! &#128521;
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <a
            href="https://api.whatsapp.com/send?phone=558399484587&text=Ol%C3%A1,%20gostaria%20de%20saber%20sobre%20os%20produtos%20Tuppeware."
            target="_blank"
            className="flex justify-center gap-2 items-center shadow-xl bg-white w-60 h-10 rounded-full text-[#E8CEAB] text-center font-bold border-2 border-[#E8CEAB] hover:bg-[#E8CEAB]/75 hover:text-white"
          >
            {" "}
            <BsWhatsapp /> WhatsApp Profissional
          </a>
          <a
            href="https://instagram.com/jf_tupperwarre?igshid=MzRlODBiNWFlZA=="
            target="_blank"
            className="flex justify-center gap-2 items-center shadow-xl bg-white h-10 rounded-full text-[#E8CEAB] text-center font-bold border-2 border-[#E8CEAB] hover:bg-[#E8CEAB]/75 hover:text-white"
          >
            {" "}
            <BsInstagram /> Instagram Profissional
          </a>
          <Link
            to="/products"
            className="flex justify-center gap-1 items-center shadow-xl bg-white  h-10 rounded-full text-[#E8CEAB] text-center font-bold border-2 border-[#E8CEAB] hover:bg-[#E8CEAB]/75 hover:text-white"
          >
            {" "}
             Qualidade Tuppeware{" "}
          </Link>
            
          {/* <a
            href={Catalogo}
            download="catalogo-junho"
            className="flex justify-evenly gap-1 items-center shadow-xl bg-white  h-10 rounded-full text-[#E8CEAB] text-center font-bold border-2 border-[#E8CEAB] hover:bg-[#E8CEAB]/75 hover:text-white"
          >
            {" "}
            Vitrine Do Mês{" "}
          </a> */}

          {console.log(import.meta.env.VITE_APP_ACCESS)}

          <Download 
            title="Vitrine Do Mês"
            archive={catalogo.catalogo_agosto}
          />
        </div>
      </div>
    </div>
  );
}
export default Home;
