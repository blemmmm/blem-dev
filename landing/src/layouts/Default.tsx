import CurrentlyLooking from "@components/CurrentlyLooking/CurrentlyLooking";
import Navbar from "@components/Navbar/Navbar";
import "@styles/scrollbar.css";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const DefaultLayout = ({ children }: Props) => {
  return (
    <main className="scrollbar px-96">
      <CurrentlyLooking />
      <Navbar />
      <div className="h-auto px-40 pb-10">{children}</div>
    </main>
  );
};
