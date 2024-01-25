"use client";
import SearchBar from "~/components/searchBar";
import { jwtDecode } from "jwt-decode";

import { useEffect, useState } from "react";
import Decoder from "~/components/decoder";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Bounce } from "react-toastify";

import { FaGithub } from "react-icons/fa";

import { setCookie, getCookie, hasCookie } from "cookies-next";

interface jwtInterface {
  value: string;
  origin: "clipboard" | "cookie" | "";
}

interface JwtDecodedInterface {
  payload: any;
  header: any;
}

export default function HomePage() {
  const [jwtDecoded, setJwtDecoded] = useState<JwtDecodedInterface>({
    payload: null,
    header: null,
  });

  const [jwt, setJwt] = useState<jwtInterface>({
    value: "",
    origin: "",
  });

  useEffect(() => {
    if (checkJwt(jwt.value)) {
      decodeJWT(jwt);
    } else if (jwt.origin) {
      notify("Invalid JWT");
    }
  }, [jwt]);

  const checkJwt = (jwt: string) => {
    if (jwt) {
      const splittedJwt = jwt.split(".");
      if (splittedJwt.length === 3) {
        return true;
      } else {
        return false;
      }
    }
  };

  const decodeJWT = (token: jwtInterface) => {
    const decodedPayload = jwtDecode(token.value);
    const decodedHeader = jwtDecode(token.value, { header: true });

    console.log(decodedPayload);
    console.log(decodedHeader);

    setJwtDecoded({
      payload: decodedPayload,
      header: decodedHeader,
    });
  };

  // setCookie("token", "salut");

  if (hasCookie("token")) {
    const token: string = getCookie("token")!;
    console.log(token);
    if (checkJwt(token)) {
      decodeJWT({ value: token, origin: "cookie" });
    }
  }

  const notify = (message: string) =>
    toast.error(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });

  return (
    <div
      className={`container mx-auto flex h-screen w-screen flex-col items-center  gap-y-8 ${
        jwtDecoded.payload ? "transition	" : "justify-center"
      }`}
    >
      <ToastContainer />
      <div
        className={`flex   items-center justify-center  font-bold text-white  ${
          jwtDecoded.payload ? "h-1/6	text-5xl" : "h-2/4 text-7xl"
        }`}
      >
        <h1>
          <span className="mr-5 bg-gradient-to-r from-[#00B9F1]  to-[#0182fb] bg-[length:100%_10px] bg-bottom bg-no-repeat">
            Decode
          </span>
          your
          <span className="ml-5 bg-gradient-to-r from-[#0182fb]  to-[#00B9F1] bg-clip-text text-transparent">
            JWT
          </span>
        </h1>
      </div>
      <div className={` w-full ${jwtDecoded.payload ? "h-1/6" : "h-2/4"}`}>
        <SearchBar setJwt={setJwt} />
      </div>
      <div className={` w-full ${jwtDecoded.payload ? "h-4/6" : "h-0"}`}>
        <Decoder header={jwtDecoded.header} payload={jwtDecoded.payload} />
      </div>
      <a
        target="_blank"
        href="https://github.com/Jeanmec"
        className="absolute bottom-4 right-4 text-3xl text-white transition hover:text-blue-500"
      >
        <FaGithub />
      </a>
    </div>
  );
}
