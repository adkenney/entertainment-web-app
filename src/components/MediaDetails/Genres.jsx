export default function Genres({ genres }) {
  return (
    <>
      <div>
        <h3>Genres</h3>
        <div>
          <ul className="flex flex-wrap gap-1 mt-1">
            {genres.map(genre => {
              return (
                <li className="genre-items" key={genre.id}>
                  {genre.name}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
