import { Link } from "react-router-dom";
import { navbarData } from "../Data/navbarData";
import { branches, workingHours } from "../Data/branchData";
import { telHref } from "../utils/format";

function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white text-sm text-gray-600">
      <div className="container-page grid gap-10 py-12 md:grid-cols-3 md:gap-12">
        <div>
          <p className="font-condensed text-2xl font-bold tracking-wide text-black">Habesha Food</p>
          <p className="mt-1">Fast Delivary · Addis Ababa</p>
          <p className="mt-4 max-w-xs">Fresh Ethiopian flavors, served fast.</p>
        </div>

        <nav aria-label="Footer">
          <p className="eyebrow">Explore</p>
          <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 md:grid-cols-1">
            {navbarData.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="transition-colors duration-200 hover:text-black">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="eyebrow">Visit us</p>
          <p className="mt-4 text-black">
            {workingHours.days}, {workingHours.time}
          </p>
          <ul className="mt-3 space-y-2">
            {branches.map((branch) => (
              <li key={branch.id} className="flex justify-between gap-4">
                <span>{branch.name.replace(" Branch", "")}</span>
                <a href={telHref(branch.phone)} className="tabular-nums transition-colors duration-200 hover:text-black">
                  {branch.phone}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-200">
        <p className="container-page py-5 text-xs text-gray-500">© {new Date().getFullYear()} Habesha Food. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
