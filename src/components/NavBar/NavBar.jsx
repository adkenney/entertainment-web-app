import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import LogoIcon from '@/components/icons/LogoIcon';
import HomeIcon from '../icons/HomeIcon';
import MovieIcon from '../icons/MovieIcon';
import TvIcon from '../icons/TvIcon';
// import BookmarkIcon from '../icons/BookmarkIcon';
import ProfileImg from '@/assets/image-avatar.png';

function NavBar() {
  const router = useRouter();
  const currRoute = router.pathname;
  console.log(currRoute);
  return (
    <nav className="sticky top-0 z-50 flex items-center px-4 py-5 bg-semi-dark-blue md:mx-6 md:my-6 md:rounded-lg lg:flex-col lg:h-[46em] lg:gap-14">
      <Link href="/">
        <LogoIcon />
      </Link>
      <div className="flex gap-6 mx-auto lg:flex-col lg:mb-auto">
        <Link href="/">
          <HomeIcon classname={currRoute === '/' ? 'active' : ''} />
        </Link>
        <Link href="/movies/popular">
          <MovieIcon
            classname={currRoute === '/movies/popular' ? 'active' : ''}
          />
        </Link>
        <Link href="/tv/popular">
          <TvIcon classname={currRoute === '/tv/popular' ? 'active' : ''} />
        </Link>
        {/* //TODO:Implement bookmark feature */}
        {/* <BookmarkIcon /> */}
      </div>
      <Image
        className="w-6 h-6 border border-pure-white rounded-full lg:mt-auto md:w-8 md:h-8"
        src={ProfileImg}
        alt="User profile"
      />
    </nav>
  );
}

export default NavBar;
