import { Loader2 } from "lucide-react";

type Props = {
  totalPrice: number;
  originalPrice: number;
  savings: number;
  onCheckout: () => void;
  onSave: () => void;
  isCheckingOut: boolean;
};

export default function OrderSummary({
  totalPrice,
  originalPrice,
  savings,
  onCheckout,
  isCheckingOut,

  onSave,
}: Props) {
  return (
    <div className="mt-4">
      <div className="flex gap-4">
        <img
          src="/checkout.png"
          alt="100% Satisfaction Guarantee"
          className="h-24 w-24 shrink-0 object-contain"
        />

        <div>
          <h4 className="text-2xl font-semibold text-gray-900">
            30-day hassle-free returns
          </h4>

          <p className="mt-3 text-base leading-relaxed text-gray-500">
            If you're not totally in love with the product, we will refund you
            100%.
          </p>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <span className="rounded-md bg-violet-600 px-4 py-2 text-sm font-medium text-white">
          as low as $19.19/mo
        </span>

        <div className="flex items-end gap-3">
          <span className="text-lg text-gray-400 line-through">
            ${originalPrice.toFixed(2)}
          </span>

          <span className="text-2xl font-bold text-violet-600">
            ${totalPrice.toFixed(2)}
          </span>
        </div>
      </div>

      {savings > 0 && (
        <p className="mt-3 text-center text-sm font-medium text-emerald-600">
          Congrats! You're saving ${savings.toFixed(2)} on your security bundle!
        </p>
      )}

      <button
        disabled={isCheckingOut}
        onClick={onCheckout}
        className="
    mt-4
    flex
    w-full
    items-center
    justify-center
    gap-2
    rounded-md
    bg-violet-600
    py-4
    text-xl
    font-bold
    text-white
    transition-colors
    hover:bg-violet-700

    disabled:cursor-not-allowed
    disabled:opacity-70
  "
      >
        {isCheckingOut ? (
          <>
            <Loader2 size={20} className="animate-spin" />
            Processing...
          </>
        ) : (
          "Checkout"
        )}
      </button>
      <button
        onClick={onSave}
        className=" cursor-pointer
          mt-4
          w-full
          text-center
          text-sm
          italic
          text-gray-500
          underline
        "
      >
        Save my system for later
      </button>
    </div>
  );
}
