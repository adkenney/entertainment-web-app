import { API_BASE_URL, API_IMAGE_PATH, API_KEY } from '@/utils';
import Head from 'next/head';
import Card from '@/components/Card/Card';
import TvIcon from '../../../assets/icon-category-tv.svg';
import SearchBar from '@/components/SearchBar/SearchBar';

export default function PopularTV({ tvShows }) {
  return (
    <>
      <Head>
        <title>Popular TV - Entertainment App</title>
        <meta
          name="description"
          content="A exhaustive list of up to date popular television shows"
        ></meta>
      </Head>
      <section>
        <SearchBar />
        <h2 className="p-4 md:p-6">Popular TV</h2>
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 md:p-6 lg:grid-cols-4 lg:gap-6 gap-4 p-4 min-w-full">
          {tvShows &&
            tvShows.results.map(item => {
              const image =
                item.backdrop_path === null
                  ? `${API_IMAGE_PATH}${item.poster_path}`
                  : `${API_IMAGE_PATH}${item.backdrop_path}`;
              return (
                <Card
                  key={item.id}
                  id={item.id}
                  releaseDate={item.first_air_date}
                  mediaType={'TV'}
                  title={item.name}
                  imgSrc={image}
                  iconSrc={TvIcon}
                />
              );
            })}
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch(`${API_BASE_URL}/tv/popular?api_key=${API_KEY}`);
  const data = await response.json();
  return {
    props: {
      tvShows: data,
    },
  };
}
