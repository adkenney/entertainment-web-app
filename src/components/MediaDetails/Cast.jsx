import { API_IMAGE_PATH } from '@/utils';
import Image from 'next/image';

export default function Cast({ cast }) {
  return (
    <div className="mt-2">
      <h3 className="mb-2">Cast</h3>
      <ul className="grid grid-cols-2 gap-2">
        {cast.slice(0, 10).map(member => {
          return (
            <li
              key={member.id}
              className="flex flex-col items-center text-center"
            >
              <div className="relative overflow-hidden h-14 w-14 rounded-full">
                <Image
                  src={`${API_IMAGE_PATH}${member.profile_path}`}
                  fill
                  style={{ objectFit: 'cover' }}
                  alt={member.name}
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
