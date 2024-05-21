import { FaRegCopyright } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="flex flex-row min-w-full justify-center items-center space-x-1 text-sm">
      <FaRegCopyright />
      <span>Koen Dercksen, 2024</span>
    </div>
  );
}
