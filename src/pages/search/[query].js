import Head from 'next/head';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { fetcher } from '@/utils';

export default function SearchResults(props) {
  const router = useRouter();
  const { query } = router.query;
  const { data, dataError } = useSWR(`/api/search/${query}`, fetcher);
  if (dataError) return <p>{dataError}</p>;
  if (!data) return <p>{dataError}</p>;
  console.log(data);
  return (
    <div>
      <Head>
        <title>Search results for "{query}" - Entertainment App</title>
      </Head>
      {/* {data &&
        data.map(result => {
          return <div>{result.name || result.title}</div>;
        })} */}
    </div>
  );
}
