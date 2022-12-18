import { ReactElement } from "react";
import { HiAcademicCap, HiHome } from "react-icons/hi";
import Link from "next/link";

type ButtonProps = {
  text: string;
  icon?: ReactElement;
  href: string;
};

function NavButton({ text, icon, href }: ButtonProps) {
  return (
    <Link
      className="flex flex-row font-semibold hover:text-blue-700 space-x-1 items-center p-1 rounded-md hover:bg-slate-100"
      href={href}
    >
      {icon ? icon : ""}
      <span>{text}</span>
    </Link>
  );
}

export default function Navigation() {
  return (
    <div className="grid grid-flow-col auto-cols-max rounded-md border-2 min-w-full justify-start p-1 space-x-2">
      <NavButton text="Home" icon={<HiHome />} href="/" />
      <NavButton
        text="Publications"
        icon={<HiAcademicCap />}
        href="/publications"
      />
    </div>
  );
}
