import { Lora, Poppins } from "next/font/google";
import '../styles/globals.css';
import Head from "next/head";

const lora = Lora({ subsets: ["latin"], weight: ['400','500','600','700'], variable: '--font-lora' });
const poppins = Poppins({ subsets: ["latin"], weight: ['100','200','300','400','500','600','700','800','900'], variable: '--font-poppins' });

export default function MyApp({ Component, pageProps }) {
  return (
    <div className={`${lora.variable} ${poppins.variable}`}>
      <Head>
        <title>Restauracja Plaża Stogi</title>
        {/* Można tutaj dodać inne meta tagi, favicony itd. */}
      </Head>
      <Component {...pageProps} />
    </div>
  );
}
