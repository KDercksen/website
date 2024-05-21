import { FiMail } from "react-icons/fi";

export default function Home() {
  return (
    <div className="flex max-w-2xl flex-col font-light text-center space-y-5">
      <h1 className="pt-5 font-bold text-3xl">Hi there!</h1>
      <p>
        I am currently employed as a researcher at the{" "}
        <a
          className="text-blue-600 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
          href="https://ru.nl"
        >
          Radboud University Nijmegen
        </a>{" "}
        and{" "}
        <a
          className="text-blue-600 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
          href="https://world-brain.eu/scholar"
        >
          World Brain Scholar
        </a>
        .
      </p>
      <p>
        At World Brain Scholar, we work on innovative AI-based solutions for
        academic publishing companies. My work primarily focuses on enhancing
        the publishing process using state-of-the-art information retrieval and
        natural language processing techniques.
      </p>
      <p>
        My PhD research (currently being finalized) focused on finding and
        developing solutions for patient-friendly presentation of Dutch medical
        reports (
        <a
          className="text-blue-600 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
          href="https://ai-for-health.nl/projects/mihracle"
        >
          MIHRACLE
        </a>
        ). My main research interests are information retrieval, natural
        language processing, and in particular the application of large language
        models.
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
          AI for Health (no longer active)
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
        <a
          className="text-blue-600 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
          href="https://ru.nl"
        >
          Radboud University Nijmegen
        </a>
        <a
          className="text-blue-600 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
          href="https://world-brain.eu/scholar"
        >
          World Brain Scholar
        </a>
      </div>
    </div>
  );
}
