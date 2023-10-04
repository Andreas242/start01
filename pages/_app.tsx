import Navbar from "@/components/Navabar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="mainContainer">
        <Navbar />
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
