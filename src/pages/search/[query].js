import Head from 'next/head';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { fetcher } from '@/utils';
import Card from '@/components/Card/Card';
import { API_IMAGE_PATH } from '@/utils';
import SearchBar from '@/components/SearchBar/SearchBar';

export default function SearchResults(props) {
  const router = useRouter();
  const { query } = router.query;
  const { data, dataError } = useSWR(`/api/search/${query}`, fetcher);
  if (dataError) return <p>{dataError}</p>;
  if (!data) return <p>{dataError}</p>;
  console.log(data.media.results);
  return (
    <div>
      <Head>
        <title>{query} - Search Results</title>
      </Head>
      <SearchBar />
      {data &&
        data.media.results.map(item => {
          const movieReleaseDate = item.release_date;
          const tvReleaseDate = item.first_air_date;
          const mediaType = item.media_type === 'movie' ? 'Movie' : 'TV';
          const image =
            item.backdrop_path === null
              ? `${API_IMAGE_PATH}${item.poster_path}`
              : `${API_IMAGE_PATH}${item.backdrop_path}`;
          return (
            <Card
              key={item.id}
              id={item.id}
              releaseDate={movieReleaseDate || tvReleaseDate}
              mediaType={mediaType}
              title={item.title || item.name}
              imgSrc={image}
              // iconSrc={icon}
            />
          );
        })}
    </div>
  );
}
