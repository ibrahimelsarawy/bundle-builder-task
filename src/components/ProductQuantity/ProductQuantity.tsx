import { useBundleStore } from "../../store/bundle-store";

type ProductQuantityProps = {
  id: number;
  quantity: number;
  currentColor?: string;
};

export default function ProductQuantity({
  id,
  quantity,
  currentColor,
}: ProductQuantityProps) {
  const { addProduct, removeProduct } = useBundleStore();

  return (
    <div className="flex items-center gap-1">
      <button
        disabled={quantity === 0}
        onClick={() => removeProduct(id, currentColor)}
        className="
    flex h-6 w-6 items-center justify-center
    rounded border border-gray-300
    text-sm font-bold
    lg:h-5 lg:w-5 lg:text-xs
    xl:h-6 xl:w-6 xl:text-sm

    disabled:cursor-not-allowed
    disabled:opacity-50
    disabled:border-gray-200
    disabled:text-gray-300

    hover:bg-gray-50
  "
      >
        -
      </button>
      <span className="w-4 text-center text-xs font-medium">{quantity}</span>

      <button
        onClick={() => addProduct(id, currentColor)}
        className="
          flex h-6 w-6 items-center justify-center
          rounded border border-gray-300
          text-sm font-bold text-gray-600
          lg:h-5 lg:w-5 lg:text-xs
          xl:h-6 xl:w-6 xl:text-sm
        "
      >
        +
      </button>
    </div>
  );
}
