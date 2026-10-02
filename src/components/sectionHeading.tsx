import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  action?: ReactNode;
  tone?: "light" | "dark";
};

function SectionHeading({ eyebrow, title, action, tone = "light" }: SectionHeadingProps) {
  return (
    <div className="mb-8 flex items-end justify-between gap-4 md:mb-10">
      <div>
        {eyebrow && <p className={`eyebrow ${tone === "dark" ? "text-gray-400" : ""}`}>{eyebrow}</p>}
        <h2 className="display mt-2 text-4xl md:text-5xl">{title}</h2>
      </div>
      {action && <div className="hidden shrink-0 sm:block">{action}</div>}
    </div>
  );
}

export default SectionHeading;
