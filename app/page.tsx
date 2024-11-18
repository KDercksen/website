import {
  PersonalInfoAvatar,
  PersonalInfoCard,
  PersonalInfoContent,
  PersonalInfoDescription,
  PersonalInfoHeader,
  PersonalInfoTitle,
} from "@/components/personal-info";
import Headshot from "@/assets/images/headshot.jpg";
import { Github, GraduationCap, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const PersonalInfoBox = () => (
  <PersonalInfoCard>
    <PersonalInfoHeader>
      <PersonalInfoAvatar
        imagePath={Headshot}
        name="Koen Dercksen"
        avatarFallback="KD"
      />
      <PersonalInfoTitle
        name="Koen Dercksen"
        title="AI Researcher & Software Engineer"
      />
    </PersonalInfoHeader>
    <PersonalInfoContent>
      <PersonalInfoDescription>
        I am an AI researcher with a focus on natural language processing and
        information retrieval. I have a background in academia, and I am
        currently building cool products with AI.
      </PersonalInfoDescription>
      <div className="flex flex-row w-full items-center justify-center gap-4">
        <Link
          href="mailto:mail@koendercksen.com"
          className="hover:scale-105 hover:-translate-y-1 hover:transition-all duration-300"
        >
          <Mail className="size-6" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/koen-dercksen-083a835b/"
          className="hover:scale-105 hover:-translate-y-1 hover:transition-all duration-300"
        >
          <Linkedin className="size-6" />
        </Link>
        <Link
          href="https://github.com/KDercksen"
          className="hover:scale-105 hover:-translate-y-1 hover:transition-all duration-300"
        >
          <Github className="size-6" />
        </Link>
        <Link
          href="https://scholar.google.com/citations?user=SVRCUlEAAAAJ"
          className="hover:scale-105 hover:-translate-y-1 hover:transition-all duration-300"
        >
          <GraduationCap className="size-6" />
        </Link>
      </div>
    </PersonalInfoContent>
  </PersonalInfoCard>
);

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen justify-center w-full flex-grow relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.5)_2px,transparent_2px)] bg-[length:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />
      <div className="max-w-screen-sm px-8 lg:px-16 py-8 relative">
        <div className="grid grid-cols-1 gap-4">
          <PersonalInfoBox />
        </div>
      </div>
    </div>
  );
}
