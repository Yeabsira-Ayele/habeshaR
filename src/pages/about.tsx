import { Link } from "react-router-dom";
import PageHeader from "../components/pageHeader";
import CtaBand from "../components/ctaBand";
import { aboutData } from "../Data/aboutData";
import { btnPrimary } from "../Data/homePageData";

function About() {
  return (
    <>
      <PageHeader title={aboutData.title} subtitle={aboutData.subtitle} />

      {/* Story */}
      <section className="container-page section grid gap-8 lg:grid-cols-2 lg:gap-20">
        <h2 className="display text-4xl md:text-6xl">{aboutData.statement}</h2>
        <div className="flex max-w-xl flex-col gap-5 text-base leading-relaxed text-gray-600 md:text-lg">
          {aboutData.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      {/* Banner */}
      <div className="container-page">
        <img
          src={aboutData.banner}
          alt="A traditional Ethiopian platter"
          loading="lazy"
          className="h-[240px] w-full rounded-xl object-cover md:h-[420px]"
        />
      </div>

      {/* Values */}
      <section className="container-page section grid gap-10 md:grid-cols-3 md:gap-8">
        {aboutData.values.map((value) => (
          <div key={value.title} className="border-t-2 border-black pt-5">
            <h3 className="text-xl font-bold">{value.title}</h3>
            <p className="mt-2 text-gray-600">{value.text}</p>
          </div>
        ))}
      </section>

      <CtaBand title="Hungry? Come say hello.">
        <Link to="/order" className="btn btn-primary btn-lg">
          {btnPrimary.order}
        </Link>
        <Link to="/branches" className="btn btn-outline btn-lg">
          Find a Branch
        </Link>
      </CtaBand>
    </>
  );
}

export default About;
