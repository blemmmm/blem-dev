import Navbar from "@components/Navbar/Navbar";
import "@styles/scrollbar.css";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const DefaultLayout = ({ children }: Props) => {
  return (
    <main className="scrollbar px-4 sm:px-8 md:px-16 lg:px-32 xl:px-96">
      <Navbar />
      <div className="h-auto px-4 sm:px-8 2xl:px-32  pb-10">{children}</div>
    </main>
  );
};
