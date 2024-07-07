import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Intercom from "@intercom/messenger-js-sdk";

export default function App({ Component, pageProps }: AppProps) {


  return <Component {...pageProps} />;
}
