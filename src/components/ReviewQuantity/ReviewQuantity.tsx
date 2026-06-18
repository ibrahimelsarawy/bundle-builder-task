import { useBundleStore } from "../../store/bundle-store";

type ReviewQuantityProps = {
  productId: number;
  quantity: number;
  color?: string;
};

export default function ReviewQuantity({
  productId,
  quantity,
  color,
}: ReviewQuantityProps) {
  const { addProduct, removeProduct } = useBundleStore();

  return (
    <div className="flex shrink-0 items-center gap-2 xl:gap-3">
      <button
        onClick={() => removeProduct(productId, color)}
        className="
          flex h-6 w-6 items-center justify-center
          rounded bg-gray-100 text-gray-600
          transition hover:bg-gray-200
          xl:h-8 xl:w-8
        "
      >
        -
      </button>

      <span className="min-w-[20px] text-center text-sm font-medium xl:text-base">
        {quantity}
      </span>

      <button
        onClick={() => addProduct(productId, color)}
        className="
          flex h-6 w-6 items-center justify-center
          rounded bg-gray-100 text-gray-600
          transition hover:bg-gray-200
          xl:h-8 xl:w-8
        "
      >
        +
      </button>
    </div>
  );
}