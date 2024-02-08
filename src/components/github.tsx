import { FaGithub } from "react-icons/fa";

const Github = () => {
  return (
    <a
      target="_blank"
      href="https://github.com/Jeanmec"
      className="absolute bottom-4 right-4 text-3xl text-white transition hover:text-blue-500"
    >
      <FaGithub />
    </a>
  );
};

export default Github;
