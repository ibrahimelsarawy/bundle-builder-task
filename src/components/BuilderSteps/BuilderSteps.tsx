import { useState } from "react";

import AccordionStep from "../AccordionStep/AccordionStep";
import ProductCard from "../ProductCard/ProductCard";
import NextStepButton from "../NextStepButton/NextStepButton";

import { builderSections } from "../../config/builder-sections";
import { useSelectedCounts } from "../../hooks/useSelectedCounts";

export default function BuilderSteps() {
  const [openStep, setOpenStep] = useState(1);

  const {
    camerasSelected,
    plansSelected,
    sensorsSelected,
    accessoriesSelected,
  } = useSelectedCounts();

  const counts = [
    camerasSelected,
    plansSelected,
    sensorsSelected,
    accessoriesSelected,
  ];

  return (
    <div className="rounded-lg bg-white p-6 shadow">
      <div className="space-y-4">
        {builderSections.map((section) => (
          <AccordionStep
            key={section.step}
            step={section.step}
            title={section.title}
            selectedCount={counts[section.step - 1]}
            isOpen={openStep === section.step}
            onToggle={() => setOpenStep(section.step)}
          >
            <div
              className={`grid gap-4 md:grid-cols-2 ${section.cols}`}
            >
              {section.products.map((product) => (
                <ProductCard
                  key={product.id}
                  {...product}
                />
              ))}
            </div>

            {section.step < builderSections.length &&
              openStep === section.step && (
                <NextStepButton
                  title={
                    builderSections[section.step]?.title ??
                    ""
                  }
                  onClick={() =>
                    setOpenStep((prev) => prev + 1)
                  }
                />
              )}
          </AccordionStep>
        ))}
      </div>
    </div>
  );
}