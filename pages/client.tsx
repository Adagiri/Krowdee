import Head from "next/head";
import Link from "next/link";
import ClientOnly from "../components/clientOnly";
import Countries from "../components/countries";

export default function ClientSide() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <Link href="/app/">
        <a>Go Dashboard</a>
        </Link>
        <h1>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <ClientOnly>
          <Countries />
        </ClientOnly>
      </main>

      <footer>
        <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">
          Powered by <img src="/vercel.svg" alt="Vercel Logo" />
        </a>
      </footer>
    </div>
  );
}
