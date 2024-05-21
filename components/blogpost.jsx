import { HiLink } from "react-icons/hi";
import Link from "next/link";

export default function Blogpost({ title, date, link }) {
  return (
    <Link
      className="flex flex-col sm:flex-row gap-x-2 justify-center items-center font-medium text-base hover:underline"
      href={link}
    >
      <span className="inline-flex items-center gap-2">
        <HiLink />
        {title}
      </span>
      <span className="font-extralight">[{date}]</span>
    </Link>
  );
}
