"use client";
import Input from "~/components/input";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useJwtStore } from "~/store/jwtStore";

import Title from "~/components/Title";

import Decoder from "~/components/decoder";

export default function HomePage() {
  const jwtDecoded = useJwtStore((state) => state.jwtDecoded);

  return (
    <div
      className={`mx-auto flex min-h-screen flex-col items-center gap-y-8 px-8 md:w-9/12 xl:w-6/12 ${
        jwtDecoded ? "transition" : "h-screen w-screen justify-center"
      }`}
    >
      <ToastContainer />
      <Title />

      <div className={`w-full  ${jwtDecoded ? "h-1/6" : "h-2/4"}`}>
        <Input />
      </div>

      <div className={` w-full ${jwtDecoded ? "h-4/6" : "h-0"}`}>
        <Decoder />
      </div>
    </div>
  );
}
