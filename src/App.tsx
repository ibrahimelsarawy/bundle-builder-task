import { useEffect } from "react";

import BuilderSteps from "./components/BuilderSteps/BuilderSteps";
import ReviewPanel from "./components/ReviewPanel/ReviewPanel";

import { useBundleStore } from "./store/bundle-store";

function App() {
  const { loadBundle } = useBundleStore();

  useEffect(() => {
    loadBundle();
  }, [loadBundle]);

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-[2fr_1fr] xl:grid-cols-1">
          <BuilderSteps />
          <ReviewPanel />
        </div>
      </div>
    </div>
  );
}

export default App;