import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="h-screen bg-[#fffffe] dark:bg-[#000] text-black dark:text-white">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </>
  );
}
