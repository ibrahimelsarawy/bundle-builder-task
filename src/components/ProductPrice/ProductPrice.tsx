type ProductPriceProps = {
  price: number;
  oldPrice?: number;
};

export default function ProductPrice({
  price,
  oldPrice,
}: ProductPriceProps) {
  return (
    <div className="text-right flex flex-col xl:flex-row xl:items-center xl:gap-2">
      {oldPrice && (
        <div className="text-[9px] lg:text-[10px] xl:text-[11px] text-red-400 line-through">
          ${oldPrice.toFixed(2)}
        </div>
      )}

      <div className="text-xs lg:text-[13px] xl:text-sm font-semibold text-gray-700">
        ${price.toFixed(2)}
      </div>
    </div>
  );
}