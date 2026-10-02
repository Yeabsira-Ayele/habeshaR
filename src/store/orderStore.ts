import { create } from "zustand";
import { persist } from "zustand/middleware";

type OrderState = {
  /** menu item id -> quantity */
  lines: Record<string, number>;
  add: (id: string) => void;
  decrement: (id: string) => void;
  remove: (id: string) => void;
  clear: () => void;
};

export const useOrder = create<OrderState>()(
  persist(
    (set) => ({
      lines: {},
      add: (id) =>
        set((state) => ({ lines: { ...state.lines, [id]: (state.lines[id] ?? 0) + 1 } })),
      decrement: (id) =>
        set((state) => {
          const qty = (state.lines[id] ?? 0) - 1;
          const { [id]: _removed, ...rest } = state.lines;
          return { lines: qty > 0 ? { ...rest, [id]: qty } : rest };
        }),
      remove: (id) =>
        set((state) => {
          const { [id]: _removed, ...rest } = state.lines;
          return { lines: rest };
        }),
      clear: () => set({ lines: {} }),
    }),
    { name: "abtam-order" }
  )
);

export const useOrderCount = () =>
  useOrder((state) => Object.values(state.lines).reduce((sum, qty) => sum + qty, 0));
