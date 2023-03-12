import Image from 'next/image';
import { API_IMAGE_PATH, fetcher } from '@/utils';
import useSWR from 'swr';
import TrendingCard from '../Card/TrendingCard';
import MovieIcon from '../../assets/icon-category-movie.svg';
import TvIcon from '../../assets/icon-category-tv.svg';

function Trending({ endpoint, resultLimit }) {
  const { data, error } = useSWR(endpoint, fetcher);
  if (error) return <p>Error</p>;
  console.log(data);
  return (
    <section className="">
      <h2 className="p-4">Trending</h2>
      <div>
        <div className="relative flex overflow-x-auto">
          {data &&
            data.results.slice(0, resultLimit).map(res => {
              const releaseDate = res.release_date
                ? res.release_date.slice(0, 4)
                : res.first_air_date.slice(0, 4);
              const mediaType = res.media_type === 'movie' ? 'Movie' : 'TV';
              return (
                <TrendingCard key={res.id}>
                  <Image
                    className="brightness-75"
                    src={`${API_IMAGE_PATH}${res.backdrop_path}`}
                    alt={res.title || res.name}
                    fill
                  ></Image>
                  <div className="absolute bottom-2 left-3">
                    <div className="flex gap-1 items-center opacity-[.75]">
                      <p className="mr-1 text-end">{releaseDate}</p>
                      <div className="flex items-center gap-1">
                        <div className="flex items-center gap-2">
                          {res.media_type === 'movie' ? (
                            <Image src={MovieIcon} alt="" />
                          ) : (
                            <Image src={TvIcon} alt="" />
                          )}
                          <p>{mediaType}</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="truncate w-[14em]">
                        {res.title || res.name}
                      </h3>
                    </div>
                  </div>
                </TrendingCard>
              );
            })}
        </div>
      </div>
    </section>
  );
}

export default Trending;
