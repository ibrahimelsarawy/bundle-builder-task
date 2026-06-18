import { toast } from "sonner";
import { useBundleStore } from "../../store/bundle-store";

import ShippingItem from "../ShippingItem/ShippingItem";
import OrderSummary from "../OrderSummary/OrderSummary";
import ReviewItemsSection from "../ReviewItemsSection/ReviewItemsSection";

import { useReviewSummary } from "../../hooks/useReviewSummary";
import { useState } from "react";

export default function ReviewPanel() {
  const { saveBundle, clearBundle } = useBundleStore();

  const {
    selectedProducts,
    totalPrice,
    originalPrice,
    savings,
    groupedProducts,
  } = useReviewSummary();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  if (!selectedProducts.length) {
    return (
      <div className="sticky top-6 rounded-xl bg-[#EEF3FB] p-6 shadow-sm">
        <p className="text-sm text-gray-500">No items selected</p>
      </div>
    );
  }

  return (
    <div className="sticky top-6 rounded-xl bg-[#EEF3FB] p-6 shadow-sm">
      <h2 className="text-3xl font-semibold">Your security system</h2>

      <p className="mt-2 text-lg text-gray-500">
        Review your personalized protection system designed to keep what matters
        most safe.
      </p>

      <div className="mt-6 border-t border-gray-200 pt-4">
        <div className="xl:grid xl:grid-cols-[1fr_380px] xl:gap-10">
          <div>
            <ReviewItemsSection groupedProducts={groupedProducts} />

            <ShippingItem />
          </div>

          <OrderSummary
            totalPrice={totalPrice}
            originalPrice={originalPrice}
            savings={savings}
            isCheckingOut={isCheckingOut}
            onCheckout={() => {
              setIsCheckingOut(true);

              const toastId = toast.loading("Processing payment...");

              setTimeout(() => {
                clearBundle();

                toast.success("Payment successful 🎉", {
                  id: toastId,
                  description: "Your order has been placed successfully.",
                });

                setIsCheckingOut(false);
              }, 2000);
            }}
            onSave={() => {
              saveBundle();

              toast.success("Bundle Saved 🎉");
            }}
          />
        </div>
      </div>
    </div>
  );
}
