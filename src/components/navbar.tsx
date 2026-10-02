import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ClipboardList, Menu, X } from "lucide-react";
import { navbarData } from "../Data/navbarData";
import { useOrderCount } from "../store/orderStore";

const desktopLink = ({ isActive }: { isActive: boolean }) =>
  `relative py-1 text-sm font-medium transition-colors duration-200 ${
    isActive ? "text-black after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:bg-black" : "text-gray-600 hover:text-black"
  }`;

const mobileLink = ({ isActive }: { isActive: boolean }) =>
  `block rounded-lg px-3 py-3 text-base font-medium ${
    isActive ? "bg-gray-100 text-black" : "text-gray-600 hover:bg-gray-50 hover:text-black"
  }`;

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const orderCount = useOrderCount();
  const { pathname } = useLocation();

  // Close the mobile menu on navigation or Escape
  useEffect(() => setMenuOpen(false), [pathname]);
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
      <nav aria-label="Main" className="container-page flex h-16 items-center justify-between gap-6">
        <Link to="/" className="flex items-baseline gap-2" aria-label="ABTAM Fast Food, home">
          <span className="font-condensed text-2xl font-bold leading-none tracking-wide">ABTAM</span>
          <span className="hidden text-sm leading-none text-gray-500 sm:inline">Fast Food</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navbarData.map((link) => (
            <NavLink to={link.to} key={link.to} end={link.to === "/"} className={desktopLink}>
              {link.name}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link to="/order" className="btn btn-primary btn-sm" aria-label={`Order${orderCount ? `, ${orderCount} items` : ""}`}>
            <ClipboardList size={16} />
            Order
            {orderCount > 0 && (
              <span className="ml-0.5 min-w-5 rounded-full bg-white px-1.5 text-center text-xs font-semibold leading-5 text-black">
                {orderCount}
              </span>
            )}
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            className="flex h-9 w-9 items-center justify-center rounded-lg hover:bg-gray-100 md:hidden"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div id="mobile-menu" className="border-t border-gray-200 bg-white md:hidden">
          <div className="container-page flex flex-col gap-1 py-3">
            {navbarData.map((link) => (
              <NavLink to={link.to} key={link.to} end={link.to === "/"} className={mobileLink}>
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
