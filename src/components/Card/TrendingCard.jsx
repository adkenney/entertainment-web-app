import Image from 'next/image';
import { useRouter } from 'next/router';

function TrendingCard({ id, releaseDate, mediaType, title, imgSrc, iconSrc }) {
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
      className="relative h-44 w-80 md:h-52 md:w-96 rounded-lg overflow-hidden mx-3 my-3 flex-0 cursor-pointer hover:scale-105"
      onClick={handleClick}
    >
      <Image
        className="brightness-75 object-cover"
        src={imgSrc}
        alt={title}
        sizes="(min-width: 60em) 25vw, (min-width:28em) 45vw, 100vw"
        fill
      ></Image>
      <div className="absolute bottom-2 left-3">
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
          <h3 className="truncate w-72 md:w-[23rem]">{title}</h3>
        </div>
      </div>
    </div>
  );
}

export default TrendingCard;
