import publications from "../public/publications.json";
import Publication from "../components/publication";

export default function Publications() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
      {publications.map((item, key) => {
        return <Publication key={key} {...item} />;
      })}
    </div>
  );
}
