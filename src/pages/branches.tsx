import { useState } from "react";
import { Link } from "react-router-dom";
import { Check, Clock, Copy, MapPin, MessageCircle, Phone } from "lucide-react";
import PageHeader from "../components/pageHeader";
import CtaBand from "../components/ctaBand";
import { branches, type Branch } from "../Data/branchData";
import { btnPrimary, btnSecondary } from "../Data/homePageData";
import { mapsHref, telHref, whatsappHref } from "../utils/format";

function BranchCard({ branch, index }: { branch: Branch; index: number }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(branch.phone);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard can be blocked (e.g. non-https); fail quietly.
    }
  };

  return (
    <article className="grid grid-cols-1 overflow-hidden rounded-xl border border-gray-200 md:grid-cols-5">
      {/* Image */}
      <div className="relative min-h-[220px] md:col-span-2">
        <img
          src={branch.image}
          alt={`Food served at ${branch.name}`}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <span className="absolute left-6 top-5 font-condensed text-5xl font-bold leading-none text-white/70">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* Details */}
      <div className="flex flex-col p-6 md:col-span-3 md:p-10">
        <p className="eyebrow">{branch.area}</p>
        <h2 className="display mt-2 text-4xl md:text-5xl">{branch.name}</h2>

        <div className="mt-6 space-y-2 text-gray-600">
          <p className="flex items-start gap-2">
            <MapPin size={18} className="mt-0.5 shrink-0 text-gray-500" aria-hidden /> {branch.address}
          </p>
          <p className="flex items-start gap-2">
            <Clock size={18} className="mt-0.5 shrink-0 text-gray-500" aria-hidden /> {branch.hours}
          </p>
        </div>

        <div className="mt-6 rounded-lg bg-gray-50 px-5 py-4">
          <p className="eyebrow">Phone</p>
          <p className="mt-1 font-condensed text-3xl font-bold tabular-nums">{branch.phone}</p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <a href={telHref(branch.phone)} className="btn btn-primary">
            <Phone size={16} /> {btnPrimary.callNow}
          </a>

          <button type="button" onClick={handleCopy} className="btn btn-outline">
            {copied ? <Check size={16} /> : <Copy size={16} />}
            {copied ? "Copied" : btnSecondary.copyNo}
          </button>

          <a href={whatsappHref(branch.phone)} target="_blank" rel="noreferrer" className="btn btn-whatsapp">
            <MessageCircle size={16} /> WhatsApp
          </a>

          <a
            href={mapsHref(`${branch.name} ${branch.address}`)}
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline"
          >
            <MapPin size={16} /> {btnSecondary.viewLocation}
          </a>
        </div>
      </div>
    </article>
  );
}

function Branches() {
  return (
    <>
      <PageHeader title="Our Branches" subtitle="Three locations across Addis Ababa, open every day." />

      <div className="container-page flex flex-col gap-8 py-10 md:py-14">
        {branches.map((branch, index) => (
          <BranchCard key={branch.id} branch={branch} index={index} />
        ))}
      </div>

      <CtaBand eyebrow="Pick one and order" title="Ready to order?">
        <Link to="/order" className="btn btn-primary btn-lg">
          {btnPrimary.order}
        </Link>
        <Link to="/contact" className="btn btn-outline btn-lg">
          Contact us
        </Link>
      </CtaBand>
    </>
  );
}

export default Branches;
