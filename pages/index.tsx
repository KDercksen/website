import { FiMail } from "react-icons/fi";

export default function Home() {
  return (
    <div className="flex max-w-2xl flex-col font-light text-center space-y-5">
      <h1 className="pt-5 font-bold text-3xl">Hi there!</h1>
      <p>
        I am currently employed as a PhD candidate at the Radboud University
        Nijmegen.
      </p>
      <p>
        My research aims to find and develop solutions for patient-friendly
        presentation of Dutch medical reports (
        <a
          className="text-blue-600 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
          href="https://ai-for-health.nl/projects/mihracle"
        >
          MIHRACLE
        </a>
        ). My main interests are entity linking, search and text generation.
      </p>
      <div className="flex flex-row justify-center items-center space-x-2">
        <FiMail />
        <span className="text-sm font-mono">mail AT koendercksen DOT com</span>
      </div>
      <h1 className="pt-5 font-bold text-xl">Links</h1>
      <div className="flex flex-col space-y-1">
        <a
          className="text-blue-600 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
          href="https://ai-for-health.nl"
        >
          AI for Health
        </a>
        <a
          className="text-blue-600 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
          href="https://diagnijmegen.nl"
        >
          DIAG Nijmegen
        </a>
        <a
          className="text-blue-600 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
          href="https://informagus.nl"
        >
          Informagus
        </a>
      </div>
    </div>
  );
}
