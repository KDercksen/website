import Image from "next/image";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import headshot from "../public/images/headshot.jpg";

export default function Header() {
  return (
    <div className="flex flex-row items-center space-x-2">
      <Image
        src={headshot}
        alt="Koen Dercksen"
        className="object-cover h-24 w-24 rounded-full border-2"
      />
      <div className="flex flex-col items-start text-left space-y-1">
        <h1 className="text-3xl font-normal">Koen Dercksen</h1>
        <h1 className="text-md font-extralight text-slate-600">
          PhD candidate at Radboud University Nijmegen
        </h1>
        <div className="flex flex-row items-center space-x-2">
          <a href="https://github.com/KDercksen/">
            <FaGithub />
          </a>
          <a href="https://twitter.com/DercksenKoen/">
            <FaTwitter />
          </a>
          <a href="https://linkedin.com/in/koen-dercksen-083a835b/">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
}
