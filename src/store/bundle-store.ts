import { create } from "zustand";
type SelectedProduct = {
  id: number;
  color?: string;
  quantity: number;
};
type BundleStore = {
  selectedProducts: SelectedProduct[];
  currentColors: Record<number, string>;

  addProduct: (id: number, color?: string) => void;
  removeProduct: (id: number, color?: string) => void;
  setSelectedColor: (id: number, color: string) => void;
  selectPlan: (id: number) => void;
  saveBundle: () => void;
  loadBundle: () => void;
  clearBundle: () => void;
};

export const useBundleStore = create<BundleStore>((set) => ({
  selectedProducts: [],
  currentColors: {},
  addProduct: (id, color) =>
    set((state) => {
      const existingProduct = state.selectedProducts.find(
        (product) => product.id === id && product.color === color,
      );

      if (existingProduct) {
        return {
          selectedProducts: state.selectedProducts.map((product) =>
            product.id === id && product.color === color
              ? {
                  ...product,
                  quantity: product.quantity + 1,
                }
              : product,
          ),
        };
      }

      return {
        selectedProducts: [
          ...state.selectedProducts,
          {
            id,
            color,
            quantity: 1,
          },
        ],
      };
    }),

  removeProduct: (id, color) =>
    set((state) => {
      const existingProduct = state.selectedProducts.find(
        (product) => product.id === id && product.color === color,
      );

      if (!existingProduct) {
        return state;
      }

      if (existingProduct.quantity === 1) {
        return {
          selectedProducts: state.selectedProducts.filter(
            (product) => !(product.id === id && product.color === color),
          ),
        };
      }

      return {
        selectedProducts: state.selectedProducts.map((product) =>
          product.id === id && product.color === color
            ? {
                ...product,
                quantity: product.quantity - 1,
              }
            : product,
        ),
      };
    }),

  setSelectedColor: (id, color) =>
    set((state) => ({
      currentColors: {
        ...state.currentColors,
        [id]: color,
      },
    })),

  selectPlan: (id) =>
    set((state) => ({
      selectedProducts: [
        ...state.selectedProducts.filter(
          (product) => product.id < 300 || product.id > 399,
        ),
        {
          id,
          color: undefined,
          quantity: 1,
        },
      ],
    })),

  saveBundle: () =>
    set((state) => {
      localStorage.setItem(
        "security-bundle",
        JSON.stringify({
          selectedProducts: state.selectedProducts,
          currentColors: state.currentColors,
        }),
      );

      return state;
    }),

  loadBundle: () =>
    set(() => {
      const saved = localStorage.getItem("security-bundle");

      if (!saved) {
        return {
          selectedProducts: [],
          currentColors: {},
        };
      }

      const data = JSON.parse(saved);

      return {
        selectedProducts: data.selectedProducts ?? [],
        currentColors: data.currentColors ?? {},
      };
    }),
  clearBundle: () =>
    set(() => {
      localStorage.removeItem("security-bundle");

      return {
        selectedProducts: [],
        currentColors: {},
      };
    }),
}));
