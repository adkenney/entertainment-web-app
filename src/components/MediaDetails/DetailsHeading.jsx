import React from 'react';
import Genres from './Genres';
import { FaStar } from 'react-icons/fa';

export default function DetailsHeading({
  title,
  releaseDate,
  runtime,
  status,
  seasons,
  rating,
  genres,
  mediaType,
}) {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-center">{title}</h2>
      <div className="flex justify-between text-center gap-1 mt-2">
        {mediaType === 'movie' ? (
          <>
            <div>
              <h3>Year</h3>
              <p>{releaseDate.slice(0, 4)}</p>
            </div>
            <div>
              <h3>Runtime</h3>
              <p>{runtime} min.</p>
            </div>
            <div>
              <h3>Rating</h3>
              <p className="flex items-center gap-1">
                <FaStar className="fill-primary-red" />
                {rating.toFixed(1)} / 10
              </p>
            </div>
          </>
        ) : (
          <>
            <div>
              <h3>Year</h3>
              <p>{releaseDate.slice(0, 4)}</p>
            </div>
            <div>
              <h3>Seasons</h3>
              <p>{seasons}</p>
            </div>
            <div>
              <h3>Status</h3>
              <p>{status}</p>
            </div>
            <div>
              <h3>Rating</h3>
              <p className="flex items-center gap-1">
                <FaStar className="fill-primary-red" />
                {rating.toFixed(1)} / 10
              </p>
            </div>
          </>
        )}
      </div>
      <Genres genres={genres} />
    </div>
  );
}
