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
        I am the founder of{" "}
        <Link
          href="https://www.avirai.com"
          className="font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text relative hover:after:w-full after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-gradient-to-r after:from-blue-500 after:to-purple-500 after:transition-all after:duration-300"
        >
          avirai
        </Link>
        , a company dedicated to leveraging AI for innovative business
        solutions.
      </PersonalInfoDescription>
      <PersonalInfoDescription>
        I am an AI researcher and developer with a focus on natural language
        processing and information retrieval. I have a background in academia,
        and I am currently building cool products with AI.
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
    <div className="bg-[radial-gradient(circle_at_center,hsl(var(--background))_0%,black_100%)] flex flex-col items-center min-h-screen justify-center w-full flex-grow relative">
      <div className="animate-[pulse_10s_ease-in-out_infinite] absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.5)_1px,transparent_1px)] bg-[length:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />
      <div className="max-w-screen-sm px-8 lg:px-16 py-8 relative">
        <div className="grid grid-cols-1 gap-4">
          <PersonalInfoBox />
        </div>
      </div>
    </div>
  );
}
