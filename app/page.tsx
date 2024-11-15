import PersonalInfo from "@/components/personal-info";
import Headshot from "@/assets/images/headshot.jpg";

const PersonalInfoBox = () => (
  <PersonalInfo
    imagePath={Headshot}
    name="Koen Dercksen"
    avatarFallback="KD"
    title="AI Researcher & Software Engineer"
    description="I am an AI researcher with a focus on natural language processing and information retrieval. I have a background in academia, and I am currently building cool products with AI."
    email="mail@koendercksen.com"
    linkedinUrl="https://www.linkedin.com/in/koen-dercksen-083a835b/"
    githubUrl="https://github.com/KDercksen"
    scholarUrl="https://scholar.google.com/citations?user=SVRCUlEAAAAJ"
  />
);

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen justify-center w-full flex-grow relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.3)_2px,transparent_2px)] bg-[length:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />
      <div className="max-w-screen-sm px-8 lg:px-16 py-8 relative">
        <div className="grid grid-cols-1 gap-4">
          <PersonalInfoBox />
        </div>
      </div>
    </div>
  );
}
