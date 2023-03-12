import Head from 'next/head';
import { Inter } from 'next/font/google';
import SearchBar from '@/components/SearchBar/SearchBar';
import Trending from '@/components/Trending/Trending';
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
      <>
        <SearchBar placeholder="Search for movies or TV series" />
        <Trending endpoint="/api/movies/trending" resultLimit={10} />
      </>
    </>
  );
}
