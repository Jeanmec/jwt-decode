"use client";
import { PiSealQuestion } from "react-icons/pi";
import Link from "next/link";
import { useJwtStore } from "~/store/jwtStore";

export default function Title() {
  const jwtDecoded = useJwtStore((state) => state.jwtDecoded);
  return (
    <div
      className={`flex items-center justify-center font-bold text-white ${
        jwtDecoded ? "h-1/6 text-5xl" : "h-2/4 text-7xl"
      }`}
    >
      <h1 className="flex items-baseline">
        <span className="mr-5 bg-gradient-to-r from-[#00B9F1] to-[#0182fb] bg-[length:100%_10px] bg-bottom bg-no-repeat">
          Decode
        </span>
        your
        <span className="ml-5 bg-gradient-to-r from-[#0182fb] to-[#00B9F1] bg-clip-text text-transparent">
          JWT
        </span>
        <Link href="/information" className="text-xl">
          <PiSealQuestion />
        </Link>
      </h1>
    </div>
  );
}
