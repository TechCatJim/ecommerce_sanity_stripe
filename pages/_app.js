import React from "react";
import { useRouter } from "next/router";
import { Toaster } from "react-hot-toast";
import { Layout } from "../components";
import { StateContext } from "../context/StateContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <StateContext>
        <Layout>
          <Toaster />
          <Component {...pageProps} key={router.asPath} />
        </Layout>
      </StateContext>
    </>
  );
}

export default MyApp;
