import { useRouter } from 'next/router';
import useSWR from 'swr';
import { fetcher } from '@/utils';
import Head from 'next/head';
export default function Movie() {
  const router = useRouter();
  const { movieId } = router.query;
  const { data: movie, error: movieError } = useSWR(
    `/api/movies/${movieId}`,
    fetcher
  );
  if (movieError) return <p>{movieError}</p>;
  if (!movie) return <p>{movieError}</p>;
  console.log(movie);
  return (
    <>
      <Head>
        <title>{movie.details.title} - Entertainment App</title>
        <meta name="description" content={movie.details.overview}></meta>
      </Head>
      {movie && (
        <div>
          <h2>{movie.details.title}</h2>
        </div>
      )}
    </>
  );
}
