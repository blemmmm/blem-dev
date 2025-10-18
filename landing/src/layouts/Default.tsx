import Navbar from "@/components/Navbar/Navbar";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const DefaultLayout = ({ children }: Props) => {
  return (
    <div className="scrollbar">
      <div className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 2xl:px-64">
        <Navbar />
        <div className="h-auto pb-10">{children}</div>
      </div>
    </div>
  );
};
