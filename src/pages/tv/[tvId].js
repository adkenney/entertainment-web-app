import { useRouter } from 'next/router';
import useSWR from 'swr';
import { fetcher } from '@/utils';
import Head from 'next/head';
export default function TV() {
  const router = useRouter();
  const { tvId } = router.query;
  const { data: tv, error: tvError } = useSWR(`/api/tv/${tvId}`, fetcher);
  if (tvError) return <p>{tvError}</p>;
  if (!tv) return <p>{tvError}</p>;
  console.log(tvId);
  return (
    <>
      <Head>
        <title>{tv.details.name} - Entertainment App</title>
        <meta name="description" content={tv.details.overview}></meta>
      </Head>
      {tv && (
        <div>
          <h2>{tv.details.name}</h2>
        </div>
      )}
    </>
  );
}
