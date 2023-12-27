import { Inter, Libre_Baskerville, Poppins } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });

export const titleFont = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const bodyFont = Poppins({
  subsets: ["latin"],
  weight: ["100","400", "500", "700"],
});
