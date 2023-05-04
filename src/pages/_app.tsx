import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { addListener, launch } from "devtools-detector";
export default function App({ Component, pageProps }: AppProps) {
  addListener((isOpen) =>
    isOpen ? window.location.replace("https://observersteam.ir") : ""
  );
  // 2. launch detect
  // launch();
  return <Component {...pageProps} />;
}
