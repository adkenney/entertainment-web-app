import { useRouter } from 'next/router';
import useSWR from 'swr';
import { API_IMAGE_PATH, fetcher } from '@/utils';
import Head from 'next/head';
import MediaDetails from '@/components/MediaDetails/MediaDetails';
export default function Movie() {
  const router = useRouter();
  const { movieId } = router.query;
  const { data: movie, error: movieError } = useSWR(
    `/api/movies/${movieId}`,
    fetcher
  );
  if (movieError) return <p>{movieError}</p>;
  if (!movie) return <p>{movieError}</p>;
  return (
    <>
      <Head>
        <title>{movie.details.title} - Entertainment App</title>
        <meta name="description" content={movie.details.overview}></meta>
      </Head>
      {movie && (
        <MediaDetails
          posterImg={`${API_IMAGE_PATH}${movie.details.poster_path}`}
          title={movie.details.title}
          releaseDate={movie.details.release_date}
          runtime={movie.details.runtime}
          rating={movie.details.vote_average}
          genres={movie.details.genres}
          overview={movie.details.overview}
          cast={movie.credits.cast}
          mediaType={'movie'}
        />
      )}
    </>
  );
}
