import type { ReactNode } from "react";

type CtaBandProps = {
  eyebrow?: string;
  title: string;
  children: ReactNode;
};

/** Closing call-to-action used at the end of a page */
function CtaBand({ eyebrow, title, children }: CtaBandProps) {
  return (
    <section className="bg-gray-100">
      <div className="container-page section flex flex-col items-center text-center">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2 className="display mt-3 text-5xl md:text-7xl">{title}</h2>
        <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">{children}</div>
      </div>
    </section>
  );
}

export default CtaBand;
