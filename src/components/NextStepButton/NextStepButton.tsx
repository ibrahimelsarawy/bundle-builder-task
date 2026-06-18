import { ArrowDown } from "lucide-react";

type Props = {
  title: string;
  onClick: () => void;
};

export default function NextStepButton({
  title,
  onClick,
}: Props) {
  return (
    <div className="mt-6 flex justify-center">
      <button
        onClick={onClick}
        className="
          inline-flex
          items-center
          gap-2
          rounded-md
          bg-violet-600
          px-5
          py-3
          text-sm
          font-medium
          text-white
          transition-colors
          hover:bg-violet-700
        "
      >
        Next: {title}
        <ArrowDown size={16} />
      </button>
    </div>
  );
}