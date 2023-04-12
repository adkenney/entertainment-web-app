import { useRouter } from 'next/router';
import useSWR from 'swr';
import { API_IMAGE_PATH, fetcher } from '@/utils';
import Head from 'next/head';
import MediaDetails from '@/components/MediaDetails/MediaDetails';

export default function TV() {
  const router = useRouter();
  const { tvId } = router.query;
  const { data: tv, error: tvError } = useSWR(`/api/tv/${tvId}`, fetcher);
  if (tvError) return <p>{tvError}</p>;
  if (!tv) return <p>{tvError}</p>;
  console.log(tv.details.seasons.length);
  return (
    <>
      <Head>
        <title>{tv.details.name} - Entertainment App</title>
        <meta name="description" content={tv.details.overview}></meta>
      </Head>
      {tv && (
        <MediaDetails
          posterImg={`${API_IMAGE_PATH}${tv.details.poster_path}`}
          title={tv.details.name}
          releaseDate={tv.details.first_air_date}
          seasons={tv.details.seasons.length}
          status={tv.details.status}
          rating={tv.details.vote_average}
          genres={tv.details.genres}
          overview={tv.details.overview}
          cast={tv.credits.cast}
        />
      )}
    </>
  );
}
