import Image from 'next/image';
import tmdbLogo from '../../assets/icon-tmdb.svg';

export default function Attribution() {
  return (
    <footer className="flex justify-center text-center mt-auto pb-6 pt-10">
      <div>
        <p className="opacity-60 mb-1">Powered by</p>
        <a
          className="cursor-pointer"
          href="https://www.themoviedb.org/"
          target="_blank"
        >
          <Image
            src={tmdbLogo}
            height={75}
            width={75}
            alt="The Movie Database"
          />
        </a>
      </div>
    </footer>
  );
}
