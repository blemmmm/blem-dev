import { lazy, Suspense } from "react";

const Home = lazy(() => import("./HomeView"));

export const HomePage = () => {
  return (
    <Suspense>
      <Home />
    </Suspense>
  );
};
