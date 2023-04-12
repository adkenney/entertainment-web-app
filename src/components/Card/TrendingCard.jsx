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
      className="relative h-36 w-60 rounded-lg overflow-hidden mx-3 my-3 flex-0 cursor-pointer hover:scale-105"
      onClick={handleClick}
    >
      <Image
        className="brightness-75 object-cover"
        src={imgSrc}
        alt={title}
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
          <h3 className="truncate w-52">{title}</h3>
        </div>
      </div>
    </div>
  );
}

export default TrendingCard;
