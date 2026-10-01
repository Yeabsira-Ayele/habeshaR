import { navbarData } from "../Data/navbarData";
import { NavLink } from "react-router";
import { ClipboardList, Menu, X } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  

  return (
    <nav className="fixed top-0 left-0 bg-white w-full z-50 shadow-sm flex justify-between items-center px-10 py-2">
      {/* Logo */}
      <div className="flex flex-col items-center">
        <h1 className="font-bold leading-none m-0">ABTAM</h1>
        <p className="text-sm text-gray-500 leading-none m-0">Fast Food</p>
      </div>

      {/* Desktop links */}
      <div className="hidden md:flex gap-4">
        {navbarData.map((elmnt) => (
          <NavLink
            to={elmnt.to}
            key={elmnt.to}
            className={({isActive}) => isActive?"text-black" : "text-gray-600 text-sm hover:text-black transition-colors duration-300"}
          >
            {elmnt.name}
          </NavLink>
        ))}
      </div>

      {/* Actions */}
      <div className="flex gap-4 items-center">
        <button
          type="button"
          className="bg-black flex gap-1 items-center text-white px-4 py-2 text-sm hover:bg-black/90 transition-colors duration-300"
        >
          <ClipboardList size={16} /> Order
        </button>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          className="md:hidden flex"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full right-10 z-50 flex flex-col gap-4 bg-white p-4 shadow-md">
          {navbarData.map((elmnt) => (
            <NavLink
              to={elmnt.to}
              key={elmnt.to}
              onClick={() => setMenuOpen(false)}
              className={ ({isActive}) => isActive? "text-black" : "text-gray-600 text-sm hover:text-black transition-colors duration-300"}
            >
              {elmnt.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;