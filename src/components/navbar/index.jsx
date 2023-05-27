import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import "./style/index.css";
import { Link } from "react-router-dom";

export function NavBar() {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="flex justify-around items-center h-20 w-full p-3  bg-transparent">
      <div>
        <Link to="/" className="text-black text-xl font-bold">
          Fabíola TuppeWare©
        </Link>
      </div>

      <div
        className={
          isMobile
            ? "nav-links-mobile"
            : "nav-links flex items-center list-none gap-10"
        }
        onClick={() => setIsMobile(false)}
      >
        <li
          className={
            isMobile
              ? "font-bold hover:border-b-2 hover:border-b-black"
              : "hover:border-b-2 hover:border-b-black"
          }
        >
          <Link to="/">Home</Link>
        </li>
        <li
          className={
            isMobile
              ? "font-bold hover:border-b-2 hover:border-b-black"
              : "hover:border-b-2 hover:border-b-black"
          }
        >
          <Link to="/about">Sobre nos</Link>
        </li>
        <li
          className={
            isMobile
              ? "font-bold hover:border-b-2 hover:border-b-black"
              : "hover:border-b-2 hover:border-b-black"
          }
        >
          <Link to="/location">Localização</Link>
        </li>
      </div>

      <button
        className="mobile-menu-icon"
        onClick={() => setIsMobile(!isMobile)}
      >
        {isMobile ? (
          <i className="fas fa-times">
            <FaTimes size={26} />
          </i>
        ) : (
          <i className="fas fa-bars">
            <FaBars size={26} />
          </i>
        )}
      </button>
    </nav>
  );
}
