import { API_IMAGE_PATH } from '@/utils';
import { useState } from 'react';
import Image from 'next/image';
import errImg from '../../assets/error-img.png';

export default function Cast({ cast }) {
  const [imgSource, setImgSource] = useState();
  return (
    <div>
      <h3 className="mb-2">Cast</h3>
      <ul className="flex flex-wrap gap-4">
        {cast.slice(0, 10).map(member => {
          const castImg =
            member.profile_path === null
              ? errImg
              : `${API_IMAGE_PATH}${member.profile_path}`;
          return (
            <li
              key={member.id}
              className="flex flex-col items-center text-center"
            >
              <div className="relative overflow-hidden h-14 w-14 rounded-full">
                <Image
                  className="object-cover"
                  src={castImg}
                  alt={member.name}
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNMqQcAAU0A5aSPMbMAAAAASUVORK5CYII="
                  onError={() => {
                    setImgSource(errImg);
                  }}
                  sizes="(min-width: 60em) 25vw, (min-width:28em) 45vw, 100vw"
                  fill
                />
              </div>
              <div>
                <p>{member.name}</p>
                <p className="opacity-60">{member.character}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
