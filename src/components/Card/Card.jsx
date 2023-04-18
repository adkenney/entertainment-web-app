import Image from 'next/image';
import { useRouter } from 'next/router';
import errImg from '../../assets/error-img.png';
import { useState } from 'react';
function Card({ id, releaseDate, mediaType, title, imgSrc, iconSrc }) {
  const [imgSource, setImageSource] = useState(imgSrc);
  const router = useRouter();
  function handleClick(e) {
    e.preventDefault();
    if (mediaType === 'Movie') {
      router.push(`/movies/${id}`);
    } else {
      router.push(`/tv/${id}`);
    }
  }
  return (
    <div
      className="overflow-hidden cursor-pointer hover:scale-105"
      onClick={handleClick}
      id={id}
    >
      <div className="relative h-36 rounded-lg overflow-hidden">
        <Image
          className="brightness-75 object-cover rounded-lg"
          src={imgSource}
          alt={title}
          fill
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNMqQcAAU0A5aSPMbMAAAAASUVORK5CYII="
          sizes="(min-width: 60em) 25vw, (min-width:28em) 45vw, 100vw"
          onError={() => {
            setImageSource(errImg);
          }}
        ></Image>
      </div>
      <div className="mt-2">
        <div className="flex gap-1 items-center opacity-[.75]">
          <p className="mr-1 text-end">{releaseDate.slice(0, 4)}</p>
          <div className="flex items-center gap-1">
            <div className="flex items-center gap-2">
              <Image src={iconSrc} alt="" />
              <p>{mediaType}</p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="truncate text-heading-xs">{title}</h3>
        </div>
      </div>
    </div>
  );
}

export default Card;
