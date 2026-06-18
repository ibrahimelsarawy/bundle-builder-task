import type { ProductCardProps } from "../../types/product";
import ReviewItem from "../ReviewItem/ReviewItem";

type ReviewGroupItem = {
  product: ProductCardProps;
  quantity: number;
  color?: string;
};

type Props = {
  groupedProducts: Record<string, ReviewGroupItem[]>;
};
const categoryLabels = {
  camera: "CAMERAS",
  sensor: "SENSORS",
  accessory: "ACCESSORIES",
  plan: "PLAN",
};

const categoryOrder = [
  "camera",
  "sensor",
  "accessory",
  "plan",
] as const;

export default function ReviewItemsSection({
  groupedProducts,
}: Props) {
  return (
    <>
      {categoryOrder.map((category) => {
        const items = groupedProducts[category];

        if (!items?.length) return null;

        return (
          <div
            key={category}
            className="mb-6 border-b border-gray-200 pb-4"
          >
            <h3 className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-gray-400">
              {
                categoryLabels[
                  category as keyof typeof categoryLabels
                ]
              }
            </h3>

            {items.map((item) => (
              <ReviewItem
                key={`${item.product.id}-${item.color ?? "default"}`}
                product={item.product}
                quantity={item.quantity}
                color={item.color}
              />
            ))}
          </div>
        );
      })}
    </>
  );
}