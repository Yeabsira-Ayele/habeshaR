import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { btnPrimary } from "../Data/homePageData";

type NextStepsProps = {
  to: string;
  label: string;
};

/** Bottom-of-menu row: browse the other menu, or go to the order */
function NextSteps({ to, label }: NextStepsProps) {
  return (
    <div className="mt-12 flex flex-col gap-4 border-t border-gray-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
      <Link to={to} className="link-arrow">
        {label} <ArrowRight size={16} />
      </Link>
      <Link to="/order" className="btn btn-primary btn-lg">
        {btnPrimary.order}
      </Link>
    </div>
  );
}

export default NextSteps;
