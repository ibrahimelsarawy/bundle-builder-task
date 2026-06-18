import { useBundleStore } from "../../store/bundle-store";

type Props = {
  id: number;
  selected: boolean;
};

export default function PlanSelector({
  id,
  selected,
}: Props) {
  const { selectPlan } =
    useBundleStore();

  return (
    <button
      onClick={() =>
        selectPlan(id)
      }
    >
      {selected
        ? "✓ Selected Plan"
        : "Choose Plan"}
    </button>
  );
}