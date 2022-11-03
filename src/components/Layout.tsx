import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface Props {
  children: Node;
}

const Layout = (props: Props) => {
  return (
    <>
      <Head>
        <title>Looking forward</title>
      </Head>
      <Navbar />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
