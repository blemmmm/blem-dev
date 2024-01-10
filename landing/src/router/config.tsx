import { RouteObject } from "react-router-dom";
import { Route } from "./components/Route";
import { HomePage } from "@pages/index";

export const config: RouteObject[] = [
  {
    path: "/",
    element: (
      <Route>
        <HomePage />
      </Route>
    ),
  },
];
