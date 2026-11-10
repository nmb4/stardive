import type { Metadata } from "next";
import { Donut } from "./donut";

export const metadata: Metadata = {
  title: "Donut stop. — Stardive",
  description: "A spinning glass donut. An easter egg from Stardive.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <Donut />;
}
