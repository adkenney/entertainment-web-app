import Image from 'next/image';

function TrendingCard({ releaseDate, mediaType, title, imgSrc, iconSrc }) {
  return (
    <div className="h-[8.74em] w-[15em] relative rounded-lg overflow-hidden mx-3 my-3 flex-0 cursor-pointer">
      <Image
        className="brightness-75"
        src={imgSrc}
        alt={title}
        fill
        sizes="(max-width: 29.375em) 100vw"
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
          <h3 className="truncate w-[14em]">{title}</h3>
        </div>
      </div>
    </div>
  );
}

export default TrendingCard;
