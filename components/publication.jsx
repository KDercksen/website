export default function Publication({
  authors,
  title,
  published_at,
  description,
  link,
}) {
  return (
    <div className="flex flex-col text-left justify-between rounded-md border-2 p-2">
      <div>
        <p className="text-xs font-thin border-3 rounded-md">{published_at}</p>
        <p className="font-medium text-base">{title}</p>
        <p className="font-light text-xs text-slate-400">{authors}</p>
        <p className="pt-2 font-extralight text-sm text-slate-600">
          {description}
        </p>
      </div>
      <a
        className="justify-self-end pt-2 hover:underline font-extralight text-xs text-blue-600"
        target="_blank"
        rel="noopener noreferrer"
        href={link}
      >
        Click to read more
      </a>
    </div>
  );
}
