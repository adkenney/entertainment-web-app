import Image from 'next/image';
import Cast from './Cast';
import DetailsHeading from './DetailsHeading';
import Overview from './Overview';
import SearchBar from '../SearchBar/SearchBar';

export default function MediaDetails({
  posterImg,
  title,
  releaseDate,
  seasons,
  status,
  runtime,
  rating,
  genres,
  overview,
  cast,
  mediaType,
}) {
  return (
    <>
      <SearchBar />
      <div className="flex flex-col p-4 gap-4">
        <div className="self-center">
          <Image src={posterImg} width={200} height={300} alt={title} />
        </div>
        <div>
          {mediaType === 'movie' ? (
            <DetailsHeading
              title={title}
              releaseDate={releaseDate}
              runtime={runtime}
              rating={rating}
              genres={genres}
              mediaType={mediaType}
            />
          ) : (
            <DetailsHeading
              title={title}
              releaseDate={releaseDate}
              status={status}
              seasons={seasons}
              rating={rating}
              genres={genres}
              mediaType={mediaType}
            />
          )}
          <Overview overview={overview} />
          <Cast cast={cast} />
        </div>
      </div>
    </>
  );
}
