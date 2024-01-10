import { ReactNode } from "react";
import { DefaultLayout } from "@layouts/Default";

export type Layouts = "default";

interface Props {
  children: ReactNode;
  layout?: Layouts;
}

export const RouteLayout = ({ children, layout = "default" }: Props) => {
  switch (layout) {
    default:
      return <DefaultLayout>{children}</DefaultLayout>;
  }
};
