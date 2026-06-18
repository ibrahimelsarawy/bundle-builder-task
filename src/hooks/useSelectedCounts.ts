import { useBundleStore } from "../store/bundle-store";

export function useSelectedCounts() {
  const { selectedProducts } = useBundleStore();

  return {
    camerasSelected: new Set(
      selectedProducts
        .filter((p) => p.id >= 1 && p.id <= 99)
        .map((p) => p.id),
    ).size,

    sensorsSelected: new Set(
      selectedProducts
        .filter((p) => p.id >= 100 && p.id <= 199)
        .map((p) => p.id),
    ).size,

    accessoriesSelected: new Set(
      selectedProducts
        .filter((p) => p.id >= 200 && p.id <= 299)
        .map((p) => p.id),
    ).size,

    plansSelected: new Set(
      selectedProducts
        .filter((p) => p.id >= 300 && p.id <= 399)
        .map((p) => p.id),
    ).size,
  };
}