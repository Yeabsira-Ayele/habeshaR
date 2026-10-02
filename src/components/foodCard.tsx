import { Plus } from "lucide-react";
import type { MenuItem } from "../Data/menuData";
import { useOrder } from "../store/orderStore";
import { formatBirr } from "../utils/format";

function FoodCard({ item }: { item: MenuItem }) {
  const qty = useOrder((state) => state.lines[item.id] ?? 0);
  const add = useOrder((state) => state.add);

  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white transition-colors duration-200 hover:border-gray-400">
      {item.img && (
        <img
          src={item.img}
          alt={item.nameEng}
          loading="lazy"
          className="aspect-[4/3] w-full object-cover"
        />
      )}

      <div className="flex flex-1 flex-col p-3 sm:p-4">
        <h2 className="text-lg font-bold leading-snug">{item.nameAmh}</h2>
        <p className="text-sm text-gray-500">{item.nameEng}</p>
        <p className="mt-2 text-sm leading-relaxed text-gray-600 line-clamp-3">{item.description}</p>

        <div className="mt-auto pt-4">
          <p className="mb-3 text-base font-semibold tabular-nums">{formatBirr(item.price)}</p>
          <button
            type="button"
            onClick={() => add(item.id)}
            aria-label={`Add ${item.nameEng} to order`}
            className="btn btn-outline btn-sm w-full hover:bg-black hover:text-white"
          >
            <Plus size={16} />
            {qty > 0 ? `Add another (${qty})` : "Add to order"}
          </button>
        </div>
      </div>
    </article>
  );
}

export default FoodCard;
