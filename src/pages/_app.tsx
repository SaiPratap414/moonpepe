import "@/styles/globals.scss";
import type { AppProps } from "next/app";

import localFont from "@next/font/local";

const txtgroovysmooth = localFont({
  src: [
    {
      path: "../../public/fonts/txtgroovysmooth.ttf",
      weight: "400",
    },
  ],
  variable: "--font-txtgroovysmooth",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        * {
          font-family: ${txtgroovysmooth.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />;
    </>
  );
}
