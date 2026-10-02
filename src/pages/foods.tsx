import { useSearchParams } from "react-router-dom";
import PageHeader from "../components/pageHeader";
import FoodCard from "../components/foodCard";
import NextSteps from "../components/nextSteps";
import { foodCategories, foodItems } from "../Data/menuData";
import { btnSecondary } from "../Data/homePageData";

const tabs = ["All", ...foodCategories] as const;

function Foods() {
  const [params, setParams] = useSearchParams();
  const selected = foodCategories.find(
    (category) => category.toLowerCase() === params.get("category")
  );

  const items = selected
    ? foodItems.filter((item) => item.category === selected)
    : foodItems;

  const choose = (tab: (typeof tabs)[number]) =>
    setParams(tab === "All" ? {} : { category: tab.toLowerCase() }, { replace: true });

  return (
    <>
      <PageHeader title="Foods" subtitle="Cooked fresh daily. Add what you like and order from your nearest branch." />

      <div className="container-page py-10 md:py-14">
        {/* Category filter */}
        <div role="group" aria-label="Filter by category" className="flex flex-wrap gap-2">
          {tabs.map((tab) => {
            const active = (selected ?? "All") === tab;
            return (
              <button
                key={tab}
                type="button"
                aria-pressed={active}
                onClick={() => choose(tab)}
                className={`h-10 rounded-full border px-5 text-sm font-semibold transition-colors duration-200 ${
                  active
                    ? "border-black bg-black text-white"
                    : "border-gray-300 text-gray-600 hover:border-black hover:text-black"
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Menu */}
        <div className="card-grid mt-8">
          {items.map((item) => (
            <FoodCard key={item.id} item={item} />
          ))}
        </div>

        <NextSteps to="/drinks" label={btnSecondary.browseDrinks} />
      </div>
    </>
  );
}

export default Foods;
