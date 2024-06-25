import { Lora, Poppins } from "next/font/google";
import "./globals.css";

const lora = Lora({ subsets: ["latin"], weight: ['400','500','600','700'], variable: '--font-lora' });

const poppins = Poppins({ subsets: ["latin"], weight: ['100','200','300','400','500','600','700','800','900'], variable: '--font-poppins' });

export const metadata = {
  title: "Restauracja Plaza Stogi",
  description: "Restauracja Plaza Stogi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lora.variable} ${poppins.variable}`}>{children}</body>
    </html>
  );
}
