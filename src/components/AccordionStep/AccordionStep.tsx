import { ChevronDown, Camera, Shield, Waves, Grid3X3 } from "lucide-react";

type AccordionStepProps = {
  step: number;
  title: string;
  selectedCount?: number;
  isOpen: boolean;
  onToggle: () => void;
  children?: React.ReactNode;
};

export default function AccordionStep({
  step,
  title,
  selectedCount = 0,
  isOpen,
  onToggle,
  children,
}: AccordionStepProps) {
  const icons = {
    1: Camera,
    2: Shield,
    3: Waves,
    4: Grid3X3,
  };

  const Icon = icons[step as keyof typeof icons];

  return (
    <div
      className={`
        border-t border-gray-300
        ${step === 4 ? "border-b border-gray-300" : ""}
      `}
    >
      <div
        onClick={onToggle}
        className={`
          cursor-pointer
          px-4
          py-3
          ${isOpen ? "bg-[#EEF3FB]" : "bg-white"}
        `}
      >
        <p className="text-[10px] uppercase tracking-wider text-gray-500">
          Step {step} of 4
        </p>

        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Icon size={22} className="text-gray-500" />

            <h3 className="text-[22px] font-semibold">{title}</h3>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-violet-600">
              {selectedCount} selected
            </span>

            <ChevronDown
              size={18}
              className={`
      text-violet-600
      transition-transform
      ${isOpen ? "rotate-180" : ""}
    `}
            />
          </div>
        </div>
      </div>

      {isOpen && <div className="bg-[#EEF3FB] px-4 pb-4">{children}</div>}
    </div>
  );
}
