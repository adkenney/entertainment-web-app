export default function Overview({ overview }) {
  return (
    <div className="flex flex-col gap-1">
      <h3>Synopsis</h3>
      <p className="text-body-md">{overview}</p>
    </div>
  );
}
