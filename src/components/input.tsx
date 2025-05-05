"use client";

import React, { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import { IoCopyOutline } from "react-icons/io5";
import { useJwtStore } from "~/store/jwtStore";

const SearchBar: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [debouncedInput] = useDebounce(input, 500);

  const setJWT = useJwtStore((state) => state.setJwt);
  const jwt = useJwtStore((state) => state.jwt);

  const [hoverTextColor, setHoverTextColor] = useState<string>("#ffffff");

  useEffect(() => {
    if (debouncedInput) {
      setJWT(debouncedInput);
    }
  }, [debouncedInput, setJWT]);

  useEffect(() => {
    if (jwt) {
      setInput(jwt);
    }
  }, [jwt]);

  const handleHover = () => {
    setHoverTextColor(getRandomColor());
  };

  const getRandomColor = (): string => {
    const letters = "0123456789ABCDEF";
    return (
      "#" +
      Array.from(
        { length: 6 },
        () => letters[Math.floor(Math.random() * 16)],
      ).join("")
    );
  };

  const getRandomJwt = async () => {
    try {
      const response = await fetch("/api/jwt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: input }),
      });

      const data = (await response.json()) as { token: string };
      setInput(data.token);
    } catch (error) {
      console.error("Erreur lors de la génération du JWT :", error);
    }
  };

  const handleClipboardCopy = async () => {
    try {
      if (navigator.clipboard) {
        const text = await navigator.clipboard.readText();
        setInput(text);
      }
    } catch (err) {
      console.error("Erreur lors de la lecture du presse-papiers :", err);
    }
  };

  return (
    <div className="group flex items-center">
      <div className="relative flex h-16 w-full group-hover:text-[#00B9F1]">
        <input
          type="text"
          className="bg h-16 w-full rounded-lg bg-[#22222347] px-6 py-1 pr-24 text-xl text-white outline outline-1 outline-[#0088ff] duration-300 focus:outline-8 group-hover:outline-8"
          onChange={(e) => setInput(e.target.value)}
          value={input ?? ""}
        />

        <div className="absolute right-2 flex h-full items-center justify-center gap-2 text-4xl">
          <button
            className="h-fit text-white"
            onClick={handleClipboardCopy}
            title="Coller depuis le presse-papiers"
          >
            <IoCopyOutline />
          </button>
          <button
            className="h-fit rounded-r-lg text-white transition-colors duration-300"
            style={{ color: hoverTextColor }}
            onMouseEnter={handleHover}
            onMouseLeave={() => setHoverTextColor("#ffffff")}
            onClick={getRandomJwt}
            title="Générer un JWT aléatoire"
          >
            <GiPerspectiveDiceSixFacesRandom />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
