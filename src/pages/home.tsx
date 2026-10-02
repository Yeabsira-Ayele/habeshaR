import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import FoodCard from "../components/foodCard";
import SectionHeading from "../components/sectionHeading";
import CtaBand from "../components/ctaBand";
import { useDocumentTitle } from "../components/useDocumentTitle";
import { homePageData, LocationData, btnPrimary } from "../Data/homePageData";
import { foodlist, categoryList } from "../Data/foodList";

function Home() {
  useDocumentTitle();

  return (
    <>
      {/* Hero */}
      <section
        style={{ backgroundImage: `url(${homePageData.banner})` }}
        className="relative bg-cover bg-center text-white"
      >
        <div className="absolute inset-0 bg-black/55" />
        <div className="container-page relative flex min-h-[460px] flex-col items-start justify-center gap-6 py-20 md:min-h-[560px]">
          <h1 className="display text-6xl md:text-8xl">
            {homePageData.heading1[0].trim()}
            <br />
            {homePageData.heading1[1].trim()}
          </h1>

          <p className="max-w-md text-base text-gray-100 md:text-lg">
            {homePageData.content[0]} {homePageData.content[1]}
          </p>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Link to="/order" className="btn btn-light btn-lg">
              {btnPrimary.order}
            </Link>
            <Link to="/foods" className="btn btn-outline-light btn-lg">
              {btnPrimary.menu}
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section bg-gray-50">
        <div className="container-page">
          <SectionHeading eyebrow="Browse the menu" title="Categories" />

          <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-4">
            {categoryList.map((category) => (
              <Link
                to={category.to}
                key={category.en}
                className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-200 md:aspect-[3/4]"
              >
                <img
                  src={category.img}
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                  <span className="block text-lg font-bold leading-tight">{category.am}</span>
                  <span className="text-sm text-gray-200">{category.en}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular */}
      <section className="section">
        <div className="container-page">
          <SectionHeading
            eyebrow="Customer favorites"
            title={homePageData.heading2}
            action={
              <Link to="/foods" className="link-arrow">
                {btnPrimary.allFood} <ArrowRight size={16} />
              </Link>
            }
          />

          <div className="card-grid">
            {foodlist.map((food) => (
              <FoodCard key={food.id} item={food} />
            ))}
          </div>

          <Link to="/foods" className="link-arrow mt-8 sm:hidden">
            {btnPrimary.allFood} <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Locations */}
      <section className="section bg-neutral-950 text-white">
        <div className="container-page">
          <SectionHeading
            tone="dark"
            eyebrow="Find us near you"
            title={homePageData.heading3}
            action={
              <Link to="/branches" className="link-arrow text-gray-300 hover:text-white">
                View all branches <ArrowRight size={16} />
              </Link>
            }
          />

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
            {LocationData.map((location) => (
              <Link
                to="/branches"
                key={location.id}
                className="group flex flex-col gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-6 transition-colors duration-200 hover:border-white/30"
              >
                <p className="font-mono text-xs text-gray-500">{location.id}</p>
                <h3 className="font-condensed text-3xl font-bold">{location.name}</h3>
                <p className="text-sm leading-relaxed text-gray-400">{location.address}</p>

                <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-4">
                  <p className="font-semibold tabular-nums">{location.phone}</p>
                  <ArrowRight
                    size={16}
                    className="text-gray-500 transition-all duration-200 group-hover:translate-x-1 group-hover:text-white"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <CtaBand eyebrow="Ready to eat?" title="Hungry?">
        <Link to="/order" className="btn btn-primary btn-lg">
          {btnPrimary.order}
        </Link>
      </CtaBand>
    </>
  );
}

export default Home;
