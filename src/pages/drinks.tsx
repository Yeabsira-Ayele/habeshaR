import { Plus } from "lucide-react";
import PageHeader from "../components/pageHeader";
import NextSteps from "../components/nextSteps";
import { drinkItems, type MenuItem } from "../Data/menuData";
import { btnPrimary } from "../Data/homePageData";
import drinksImg from "../assets/drinks.jpg";
import { useOrder } from "../store/orderStore";
import { formatBirr } from "../utils/format";

function DrinkRow({ item }: { item: MenuItem }) {
  const qty = useOrder((state) => state.lines[item.id] ?? 0);
  const add = useOrder((state) => state.add);

  return (
    <li className="flex flex-col gap-4 border-b border-gray-200 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
      <div className="max-w-xl">
        <div className="flex flex-wrap items-baseline gap-x-3">
          <h2 className="text-xl font-bold">{item.nameEng}</h2>
          <span className="text-gray-500">{item.nameAmh}</span>
        </div>
        <p className="mt-1 text-sm text-gray-600">{item.description}</p>
      </div>

      <div className="flex items-center justify-between gap-6 sm:justify-end">
        <p className="text-lg font-semibold tabular-nums">{formatBirr(item.price)}</p>
        <button
          type="button"
          onClick={() => add(item.id)}
          aria-label={`Add ${item.nameEng} to order`}
          className="btn btn-outline btn-sm w-44 hover:bg-black hover:text-white"
        >
          <Plus size={16} />
          {qty > 0 ? `Add another (${qty})` : btnPrimary.add}
        </button>
      </div>
    </li>
  );
}

function Drinks() {
  return (
    <>
      <PageHeader title="Drinks" subtitle="Fresh juices, Ethiopian coffee, and tea to go with your meal." />

      <div className="container-page py-10 md:py-14">
        <div className="grid gap-8 lg:grid-cols-[1fr_2fr] lg:gap-14">
          <img
            src={drinksImg}
            alt="Fresh juice and a traditional coffee pot"
            className="aspect-[4/3] w-full rounded-xl object-cover lg:sticky lg:top-24 lg:aspect-[3/4] lg:self-start"
          />

          <ul className="border-t border-gray-200">
            {drinkItems.map((item) => (
              <DrinkRow key={item.id} item={item} />
            ))}
          </ul>
        </div>

        <NextSteps to="/foods" label={btnPrimary.browseFoods} />
      </div>
    </>
  );
}

export default Drinks;
