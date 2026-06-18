
import { useBundleStore } from './../store/bundle-store';
import { products } from './../data/products';
export function useReviewSummary() {
  const { selectedProducts } = useBundleStore();

  const totalPrice = selectedProducts.reduce((total, selectedProduct) => {
    const product = products.find(
      (item) => item.id === selectedProduct.id,
    );

    return total + (product?.price ?? 0) * selectedProduct.quantity;
  }, 0);

  const originalPrice = selectedProducts.reduce((total, selectedProduct) => {
    const product = products.find(
      (item) => item.id === selectedProduct.id,
    );

    const price = product?.oldPrice ?? product?.price ?? 0;

    return total + price * selectedProduct.quantity;
  }, 0);

  const savings = originalPrice - totalPrice;

  const selectedItems = selectedProducts
    .map((selectedProduct) => {
      const product = products.find(
        (item) => item.id === selectedProduct.id,
      );

      if (!product) return null;

      return {
        product,
        quantity: selectedProduct.quantity,
        color: selectedProduct.color,
      };
    })
    .filter(
      (item): item is NonNullable<typeof item> =>
        item !== null,
    );

  const groupedProducts = selectedItems.reduce(
    (groups, item) => {
      const category = item.product.category;

      if (!groups[category]) {
        groups[category] = [];
      }

      groups[category].push(item);

      return groups;
    },
    {} as Record<string, typeof selectedItems>,
  );

  return {
    selectedProducts,
    totalPrice,
    originalPrice,
    savings,
    groupedProducts,
  };
}