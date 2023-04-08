import Image from 'next/image';
import { useRouter } from 'next/router';

function Card({ id, releaseDate, mediaType, title, imgSrc, iconSrc }) {
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
      className="h-[9.625em] w-[10.25em] rounded-t-lg overflow-hidden cursor-pointer"
      onClick={handleClick}
    >
      <div className="h-[6.785em] relative rounded-lg overflow-hidden" id={id}>
        <Image
          className="brightness-75"
          src={imgSrc}
          alt={title}
          fill
          sizes="(max-width: 29.375em) 100vw"
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
          <h3 className="truncate w-[9em]">{title}</h3>
        </div>
      </div>
    </div>
  );
}

export default Card;
