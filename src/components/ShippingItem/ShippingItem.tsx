import { FaTruckFast } from "react-icons/fa6";

export default function ShippingItem() {
  return (
    <div className="border-b border-gray-200 pb-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white">
            <FaTruckFast
              size={18}
              className="text-green-400"
            />
          </div>

          <div>
            <p className="font-medium text-gray-800">
              Fast Shipping
            </p>

            <p className="text-xs text-gray-500">
              Delivered faster to your door
            </p>
          </div>
        </div>

        <div className="text-right">
          <div className="text-sm text-gray-400 line-through">
            $5.99
          </div>

          <div className="text-lg font-bold text-violet-600">
            FREE
          </div>
        </div>
      </div>
    </div>
  );
}