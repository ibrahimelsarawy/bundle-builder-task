import { FiShield } from "react-icons/fi";
import type { ProductCardProps } from "../../types/product";

import ReviewQuantity from "../ReviewQuantity/ReviewQuantity";
import ReviewPrice from "../ReviewPrice/ReviewPrice";

type ReviewItemProps = {
  product: ProductCardProps;
  quantity: number;
  color?: string;
};

export default function ReviewItem({
  product,
  quantity,
  color,
}: ReviewItemProps) {
  return (
    <div className="flex items-center justify-between gap-4 py-3">
      <div className="flex min-w-0 flex-1 items-center gap-3">
        {product.category !== "plan" && (
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white xl:h-14 xl:w-14">
            <img
              src={product.image}
              alt={product.title}
              className="h-8 w-8 object-contain xl:h-10 xl:w-10"
            />
          </div>
        )}

        {product.category === "plan" ? (
          <div className="flex items-center gap-2">
            <FiShield size={28} className="text-blue-500" />

            <h3 className="text-xl font-extrabold xl:text-[32px]">
              <span className="text-black">Cam </span>
              <span className="text-violet-600">Unlimited</span>
            </h3>
          </div>
        ) : (
          <p className="line-clamp-2 text-sm font-medium">
            {product.title}
            {color && ` - ${color}`}
          </p>
        )}
      </div>

      {product.category !== "plan" ? (
        <ReviewQuantity
          productId={product.id}
          quantity={quantity}
          color={color}
        />
      ) : (
        <div className="w-20" />
      )}

      <ReviewPrice
        product={product}
        quantity={quantity}
      />
    </div>
  );
}