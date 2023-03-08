import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import SearchBar from '@/components/SearchBar/SearchBar';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Entertainment</title>
        <meta
          name="description"
          content="A large collection of movies and TV shows, from trending titles to top picks."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <SearchBar placeholder="Search for movies or TV series" />
      </main>
    </>
  );
}
