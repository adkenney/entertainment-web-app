import { API_BASE_URL, API_IMAGE_PATH, API_KEY } from '@/utils';
import Head from 'next/head';
import Card from '@/components/Card/Card';

export default function PopularMovies({ movies }) {
  console.log(movies);
  return (
    <>
      <Head>
        <title>Popular Movies - Entertainment App</title>
        <meta
          name="description"
          content="A exhaustive list of up to date popular movies"
        ></meta>
      </Head>
      <section>
        <h2>Popular Movies</h2>
        {movies?.results.map(item => {
          const image =
            item.backdrop_path === null
              ? `${API_IMAGE_PATH}${item.poster_path}`
              : `${API_IMAGE_PATH}${item.backdrop_path}`;
          return (
            <Card
              key={item.id}
              id={item.id}
              releaseDate={item.release_date}
              mediaType={'Movie'}
              title={item.title}
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
  const response = await fetch(
    `${API_BASE_URL}/movie/popular?api_key=${API_KEY}`
  );
  const data = await response.json();
  return {
    props: {
      movies: data,
    },
  };
}
