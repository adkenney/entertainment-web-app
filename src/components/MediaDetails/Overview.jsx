export default function Overview({ overview }) {
  return (
    <div className="flex flex-col gap-1 mt-2">
      <h3>Synopsis</h3>
      <p>{overview}</p>
    </div>
  );
}
