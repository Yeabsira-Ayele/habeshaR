import { NavLink } from "react-router";
import { footerData } from "../Data/footerData";

const headingClass = "text-xs uppercase tracking-[0.2em] text-neutral-500";

function Footer() {
  const { heading, description, columns, hours, copyright, location } = footerData;

  return (
    <footer className="bg-neutral-900 text-white px-6 md:px-12 pt-12 pb-8">
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
        {/* Brand */}
        <div className="max-w-sm">
          <h2 className="font-['Barlow_Condensed'] text-6xl font-bold leading-none tracking-wide">
            {heading}
          </h2>
          <p className="mt-6 text-neutral-400 leading-relaxed">{description}</p>
        </div>

        {/* Link columns */}
        {columns.map((col) => (
          <div key={col.title}>
            <h3 className={headingClass}>{col.title}</h3>
            <ul className="mt-6 flex flex-col gap-4">
              {col.links.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className="text-neutral-300 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Hours */}
        <div>
          <h3 className={headingClass}>{hours.title}</h3>
          <div className="mt-6 flex flex-col gap-2">
            <p className="text-neutral-300">{hours.days}</p>
            <p className="font-['Barlow_Condensed'] text-3xl font-bold">{hours.time}</p>
            <p className="text-sm text-neutral-500">{hours.note}</p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-12 pt-6 border-t border-neutral-800 flex flex-col gap-2 sm:flex-row sm:justify-between text-sm text-neutral-600">
        <p>{copyright}</p>
        <p>{location}</p>
      </div>
    </footer>
  );
}

export default Footer;