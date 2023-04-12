import Link from 'next/link';
import Image from 'next/image';
import LogoIcon from '@/components/icons/LogoIcon';
import HomeIcon from '../icons/HomeIcon';
import MovieIcon from '../icons/MovieIcon';
import TvIcon from '../icons/TvIcon';
import BookmarkIcon from '../icons/BookmarkIcon';
import ProfileImg from '@/assets/image-avatar.png';

function NavBar() {
  return (
    <nav className="flex items-center px-4 py-5 bg-semi-dark-blue">
      <Link href="/">
        <LogoIcon />
      </Link>
      <div className="flex gap-6 mx-auto">
        <Link href="/">
          <HomeIcon />
        </Link>
        <Link href="/movies/popular">
          <MovieIcon classname={'nav-icon'} />
        </Link>
        <Link href="/tv/popular">
          <TvIcon />
        </Link>
        <BookmarkIcon />
      </div>
      <Image
        className="w-6 h-6 border border-pure-white rounded-full"
        src={ProfileImg}
        alt="User profile"
      />
    </nav>
  );
}

export default NavBar;
