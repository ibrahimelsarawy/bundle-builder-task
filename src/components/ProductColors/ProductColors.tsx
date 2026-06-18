import { useBundleStore } from "../../store/bundle-store";
import type { Color } from "../../types/product";

type ProductColorsProps = {
  id: number;
  colors: Color[];
  currentColor: string;
};

export default function ProductColors({
  id,
  colors,
  currentColor,
}: ProductColorsProps) {
  const { setSelectedColor } = useBundleStore();

  return (
    <div className="mt-3 flex flex-wrap items-center gap-1.5">
      {colors.map((color) => (
        <button
          key={color.name}
          onClick={() => setSelectedColor(id, color.name)}
          className={`
            flex h-6 items-center gap-1
            rounded border px-2
            text-[10px] font-medium
            whitespace-nowrap
            transition-all
            ${
              currentColor === color.name
                ? "border-green-600 bg-green-50"
                : "border-gray-300 bg-white hover:border-gray-400"
            }
          `}
        >
          <img
            src={color.image}
            alt={color.name}
            className="h-3.5 w-3.5 object-contain"
          />

          <span>{color.name}</span>
        </button>
      ))}
    </div>
  );
}