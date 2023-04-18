import Image from 'next/image';
import Cast from './Cast';
import DetailsHeading from './DetailsHeading';
import Overview from './Overview';
import SearchBar from '../SearchBar/SearchBar';
import { useState } from 'react';
import errImg from '../../assets/error-img.png';

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
  const [imgSource, setImgSource] = useState(posterImg);
  return (
    <>
      <SearchBar />
      <div className="flex flex-col md:flex-row md:p-6 p-4 gap-6">
        {/* //TODO: LEFT OFF HERE */}
        <div className="md:self-start self-center lg:w-2/5">
          <Image
            className="object-cover rounded-lg"
            src={imgSource}
            alt={title}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNMqQcAAU0A5aSPMbMAAAAASUVORK5CYII="
            height={300}
            width={500}
            onError={() => {
              setImgSource(errImg);
            }}
          />
        </div>
        <div className="flex flex-grow flex-col gap-6 md:w-4/5">
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
