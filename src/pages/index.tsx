import Head from 'next/head';
import React from 'react'

export default function Home() {

  return (
    <>
      <Head>
        <title>রঙিন | Rongin</title>
      </Head>
      <main className={`grid p-10 bg-gradient-to-tr from-pink-600 via-purple-800 to-rose-700 items-center justify-items-center min-h-screen`}>
        <div className="flex text-3xl">
          <div className='rounded-2xl ring-4 w-[300px] grid items-center justify-center h-[500px] mx-auto ring-white'>
            <p>Colorful</p>
          </div>
        </div>

      </main>
    </>
  );
}
