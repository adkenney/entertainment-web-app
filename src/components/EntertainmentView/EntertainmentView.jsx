import { API_IMAGE_PATH, fetcher } from '@/utils';
import useSWR from 'swr';
import MovieIcon from '../../assets/icon-category-movie.svg';
import TvIcon from '../../assets/icon-category-tv.svg';

function EntertainmentView({
  Component,
  endpoint,
  resultLimit,
  title,
  defaultMediaType,
  isTrendingView,
}) {
  const { data, error } = useSWR(endpoint, fetcher);
  if (error) return <p>Error</p>;
  return (
    <section>
      <h2 className="p-4 md:p-6">{title}</h2>
      <div
        className={
          isTrendingView
            ? 'relative flex overflow-x-auto scrollbar scrollbar-thumb-primary-red scrollbar-thumb-rounded-full scrollbar-h-1'
            : 'grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 md:p-6 lg:grid-cols-4 gap-4 p-3 lg:gap-8'
        }
      >
        {data &&
          data.results.slice(0, resultLimit).map(item => {
            const movieReleaseDate = item.release_date;
            const tvReleaseDate = item.first_air_date;
            const mediaType = item.media_type === 'movie' ? 'Movie' : 'TV';
            const image = `${API_IMAGE_PATH}${
              item.backdrop_path || item.poster_path
            }`;
            const icon = item.media_type === 'movie' ? MovieIcon : TvIcon;
            return (
              <Component
                key={item.id}
                id={item.id}
                releaseDate={movieReleaseDate || tvReleaseDate}
                mediaType={defaultMediaType || mediaType}
                title={item.title || item.name}
                imgSrc={image}
                iconSrc={icon}
              />
            );
          })}
      </div>
    </section>
  );
}

export default EntertainmentView;
