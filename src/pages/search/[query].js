import Head from 'next/head';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { fetcher } from '@/utils';
import Card from '@/components/Card/Card';
import { API_IMAGE_PATH } from '@/utils';
import SearchBar from '@/components/SearchBar/SearchBar';
import MovieIcon from '../../assets/icon-category-movie.svg';
import TvIcon from '../../assets/icon-category-tv.svg';

export default function SearchResults() {
  const router = useRouter();
  const { query } = router.query;
  const { data, dataError } = useSWR(`/api/search/${query}`, fetcher);
  if (dataError) return <p>{dataError}</p>;
  if (!data) return <p>{dataError}</p>;
  return (
    <div>
      <Head>
        <title>{query} - Search Results</title>
      </Head>
      <SearchBar />
      <h2 className="text-heading-s md:text-heading-l md:p-6 p-4">
        Search results for &ldquo;{query}&rdquo;
      </h2>
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-6 gap-3 md:p-6 p-4">
        {data &&
          data.media.results
            // filter people out of results
            .filter(item => item.media_type !== 'person')
            .map(item => {
              const mediaType = item.media_type === 'movie' ? 'Movie' : 'TV';
              const image =
                item.backdrop_path === null
                  ? `${API_IMAGE_PATH}${item.poster_path}`
                  : `${API_IMAGE_PATH}${item.backdrop_path}`;
              const icon = item.media_type === 'movie' ? MovieIcon : TvIcon;

              return (
                <Card
                  key={item.id}
                  id={item.id}
                  releaseDate={
                    item.release_date || item.first_air_date || 'N/A'
                  }
                  mediaType={mediaType}
                  title={item.title || item.name}
                  imgSrc={image}
                  iconSrc={icon}
                />
              );
            })}
      </div>
    </div>
  );
}
