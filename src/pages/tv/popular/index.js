import { API_BASE_URL, API_IMAGE_PATH, API_KEY } from '@/utils';
import Head from 'next/head';
import Card from '@/components/Card/Card';

export default function PopularTV({ tvShows }) {
  console.log(tvShows);
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
        <h2>Popular TV</h2>
        {tvShows?.results.map(item => {
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
              // iconSrc={icon}
            />
          );
        })}
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
