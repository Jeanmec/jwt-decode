import { useState, useEffect } from "react";
import { useDebounce } from "use-debounce";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";

export default function SearchBar({ setJwt }) {
  const [input, setInput] = useState("");
  const [value] = useDebounce(input, 500);

  const [hoverTextColor, setHoverTextColor] = useState("#ffffff");

  const handleHover = () => {
    const randomColor = getRandomColor();
    setHoverTextColor(randomColor);
  };

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const generateRandomJwt = async () => {
    try {
      // fetch the generated text from the Next.js API server
      const response = await fetch("/api/randomjwt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();

      setInput(data.token);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (value) {
      setJwt({ value, origin: "clipboard" });
    }
  }, [value]);

  const handleClipboardCopy = async () => {
    try {
      if (navigator.clipboard) {
        setInput(await navigator.clipboard.readText());
      }
    } catch (err) {
      console.error("Erreur lors de la lecture du presse-papiers:", err);
    }
  };

  return (
    <div className="group flex items-center">
      <label htmlFor="simple-search" className="sr-only">
        Search
      </label>

      <div className="relative flex h-16 w-full group-hover:text-[#00B9F1]">
        <input
          type="text"
          className=" bg h-16 w-full rounded-lg bg-[#22222347] px-6 py-1 pr-12 text-xl text-white outline outline-1 outline-[#0088ff] duration-300 focus:outline-8 group-hover:outline-8"
          onChange={(e) => {
            setInput(e.target.value);
          }}
          onClick={() => handleClipboardCopy()}
          value={input}
        />

        <div className="absolute right-2 flex h-full items-center justify-center">
          <button
            className="h-fit rounded-r-lg text-4xl text-white transition-colors duration-300"
            style={{ color: hoverTextColor }}
            onMouseEnter={handleHover}
            onMouseLeave={() => setHoverTextColor("#ffffff")}
            onClick={() => {
              generateRandomJwt();
            }}
          >
            <GiPerspectiveDiceSixFacesRandom />
          </button>
        </div>
      </div>
    </div>
  );
}
