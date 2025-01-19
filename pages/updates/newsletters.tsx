// pages/newsletters.tsx

import Head from 'next/head';

export default function Newsletters() {
  return (
    <div className="container">
      <Head>
        <title>Newsletters | Kaladhaara</title>
      </Head>
      <h1 className="text-3xl font-semibold text-center">Kaladhaara Newsletters</h1>
      <p className="text-center text-lg my-4">Explore our past newsletters below.</p>
      <div className="newsletters-list">
        <ul>
          <li>
            <a href="/newsletter.pdf" target="_blank" className="text-lg text-blue-500 underline">2024 Newsletter - Vol 1</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
