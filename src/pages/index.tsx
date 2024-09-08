import Head from 'next/head';
import React from 'react'

export default function Home() {

  return (
    <>
      <Head>
        <title>রঙিন | Rongin</title>
      </Head>
      <main className={`grid grid-rows-[20px_1fr_20px] bg-gradient-to-tr from-pink-600 via-purple-800 to-rose-700 items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}>
        <div className="flex text-3xl flex-col gap-8 row-start-2 items-center sm:items-start">

          Colorful
        </div>

      </main>
    </>
  );
}
