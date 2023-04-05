import Head from "next/head";
import React, { ReactNode } from "react";

type PropType = {
  children: ReactNode;
};

export default function Layout({ children }: PropType) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>{children}</main>
    </div>
  );
}
