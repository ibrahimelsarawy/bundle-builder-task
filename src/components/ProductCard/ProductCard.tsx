import { useBundleStore } from "../../store/bundle-store";
import type { ProductCardProps } from "../../types/product";
import ProductColors from "./../ProductColors/ProductColors";
import ProductQuantity from "./../ProductQuantity/ProductQuantity";
import ProductPrice from "./../ProductPrice/ProductPrice";

export default function ProductCard({
  id,
  title,
  description,
  category,
  image,
  price,
  oldPrice,
  discountPercentage,
  colors,
  learnMoreUrl,
}: ProductCardProps) {
  const { selectedProducts, currentColors, selectPlan } = useBundleStore();

  const currentColor = currentColors[id] ?? colors?.[0]?.name;
  const quantity =
    selectedProducts.find(
      (product) => product.id === id && product.color === currentColor,
    )?.quantity ?? 0;

  const isSelected = quantity > 0;
  return (
    <div
      className={`
  relative
  rounded-[10px]
  border-2
  bg-white
  p-[15px]
  transition-all
  ${isSelected ? "border-violet-600" : "border-gray-300"}
`}
    >
      <div
        className={`flex gap-4 ${
          category === "plan" ? "flex-col" : "flex-col lg:flex-row xl:flex-col"
        }`}
      >
        <div className="shrink-0">
          {discountPercentage !== undefined && (
            <span
              className="
                absolute
                left-3
                top-3
                rounded-full
                bg-violet-600
                px-2
                py-1
                text-[10px]
                font-bold
                text-white
              "
            >
              Save {discountPercentage}%
            </span>
          )}

          {category === "plan" ? (
            <div
              className="
                mx-auto
                mt-3
                flex
                h-20
                items-center
                justify-center
                lg:mx-0
                xl:mx-auto
              "
            >
              <h2 className="text-2xl font-extrabold">
                <span className="text-black">Cam </span>

                <span className="text-violet-600">Unlimited</span>
              </h2>
            </div>
          ) : (
            <img
              src={image}
              alt={title}
              className="
                mx-auto
                mt-3
                h-20
                w-20
                object-contain
                lg:mx-0
                xl:mx-auto
              "
            />
          )}
        </div>

        <div className="flex flex-1 flex-col">
          <h3 className="line-clamp-2 font-semibold">{title}</h3>

          <p className="line-clamp-2 text-sm text-gray-500">{description}</p>

          {learnMoreUrl && (
            <a
              href={learnMoreUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-1 text-sm font-medium text-violet-600"
            >
              Learn More
            </a>
          )}

          {colors && (
            <ProductColors
              id={id}
              colors={colors}
              currentColor={currentColor}
            />
          )}

          <div className="mt-auto flex items-end justify-between pt-3">
            {category === "plan" ? (
              <button
                type="button"
                onClick={() => selectPlan(id)}
                className={`
                  rounded-md
                  border
                  p-2
                  text-sm
                  font-medium
                  transition-all
                  ${
                    isSelected
                      ? "border-violet-600 bg-violet-50 text-violet-700"
                      : "border-gray-300 hover:border-violet-400"
                  }
                `}
              >
                {isSelected ? "✓ Selected Plan" : "Choose Plan"}
              </button>
            ) : (
              <ProductQuantity
                id={id}
                quantity={quantity}
                currentColor={currentColor}
              />
            )}

            <ProductPrice price={price} oldPrice={oldPrice} />
          </div>
        </div>
      </div>
    </div>
  );
}
