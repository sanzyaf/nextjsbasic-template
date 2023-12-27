import { Inter as FontSans } from "next/font/google";
import { Provider } from "@/components/provider";

import "@/styles/globals.css";

const fontsans = FontSans({ subsets: ["latin"] });

export const metadata = {
  title: "Jajanan",
  description: "Batch 3 Demo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={fontsans.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
