import { HiLink } from "react-icons/hi";
import Link from "next/link";

export default function Blogpost({ title, date, link }) {
  return (
    <Link
      className="flex flex-row gap-x-2 items-center font-medium text-base hover:underline"
      href={link}
    >
      <HiLink />
      {title}
      <span className="font-extralight">[{date}]</span>
    </Link>
  );
}
