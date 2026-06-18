import type { ProductCardProps } from "../../types/product";

type ReviewPriceProps = {
  product: ProductCardProps;
  quantity: number;
};

export default function ReviewPrice({
  product,
  quantity,
}: ReviewPriceProps) {
  return (
    <div className="w-[90px] shrink-0 text-right xl:w-[120px]">
      {product.oldPrice && (
        <p className="text-xs text-gray-400 line-through xl:text-lg">
          {product.category === "plan"
            ? `$${product.oldPrice.toFixed(2)}/mo`
            : `$${(product.oldPrice * quantity).toFixed(2)}`}
        </p>
      )}

      <p className="whitespace-nowrap text-sm font-bold text-violet-600 xl:text-xl">
        {product.price === 0
          ? "FREE"
          : product.category === "plan"
            ? `$${product.price.toFixed(2)}/mo`
            : `$${(product.price * quantity).toFixed(2)}`}
      </p>
    </div>
  );
}