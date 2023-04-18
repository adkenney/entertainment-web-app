import Head from 'next/head';
import SearchBar from '@/components/SearchBar/SearchBar';
import Card from '@/components/Card/Card';
import TrendingCard from '@/components/Card/TrendingCard';
import EntertainmentView from '@/components/EntertainmentView/EntertainmentView';

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
        <EntertainmentView
          isTrendingView
          Component={TrendingCard}
          endpoint="/api/all/trending"
          resultLimit={10}
          title="Trending All"
        />
        <EntertainmentView
          Component={Card}
          endpoint="/api/movies/popular"
          resultLimit={8}
          title="Popular Movies"
          defaultMediaType="Movie"
        />
        <EntertainmentView
          Component={Card}
          endpoint="/api/movies/now-playing"
          resultLimit={8}
          title="In Theatres Now"
          defaultMediaType="Movie"
        />
        <EntertainmentView
          Component={Card}
          endpoint="/api/movies/upcoming"
          resultLimit={8}
          title="Upcoming Movies"
          defaultMediaType="Movie"
        />
        <EntertainmentView
          Component={Card}
          endpoint="/api/tv/popular"
          resultLimit={8}
          title="Popular TV"
          defaultMediaType="TV"
        />
        <EntertainmentView
          Component={Card}
          endpoint="/api/tv/airing"
          resultLimit={8}
          title="Airing Now"
          defaultMediaType="TV"
        />
      </>
    </>
  );
}
