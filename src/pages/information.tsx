import React from "react";
import "../styles/globals.scss";

import { Inter } from "next/font/google";
import Link from "next/link";

import { SiLetsencrypt } from "react-icons/si";
import Github from "~/components/github";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const JwtInfoPage: React.FC = () => {
  return (
    <div
      className={`min-h-screen w-screen overflow-y-auto font-sans ${inter.variable} flex items-center justify-center bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-sky-600 via-indigo-950 to-sky-600`}
    >
      <div className="w-9/12 py-6 text-white">
        <h1 className="pb-3	text-center text-5xl font-bold">
          Understanding JSON Web Tokens (JWTs)
        </h1>
        <p className="pb-5 text-center">
          JSON Web Tokens (JWTs) serve as an open standard (RFC-7519) for
          securely transmitting information between two parties. Think of them
          as digital keys, unlocking access to resources. JWTs find common use
          in authentication and authorization processes.
        </p>
        <div className="flex w-full items-center justify-center p-2">
          <button className="group relative mb-2 me-2 inline-flex  overflow-hidden rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-cyan-200 group-hover:from-cyan-500 group-hover:to-blue-500 dark:text-white dark:focus:ring-cyan-800">
            <Link
              href="/"
              className=" relative flex items-baseline justify-center gap-1 rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900"
            >
              Easily decode your jwt
              <SiLetsencrypt />
            </Link>
          </button>
        </div>
        <h2 className="py-3 text-3xl">How JWTs Operate</h2>
        <p>A JWT consists of three components:</p>
        <ul>
          <li>
            <strong>Header:</strong> Contains token details like type and
            signing algorithm.
          </li>
          <li>
            <strong>Payload:</strong> Holds claims – information being
            transmitted (e.g., users name, email, and role).
          </li>
          <li>
            <strong>Signature:</strong> A cryptographic hash of the header and
            payload, signed with the users secret key.
          </li>
        </ul>
        <p>
          To verify a JWT, the recipient uses the users public key. A valid
          signature assures the tokens integrity and authenticates the claims.
        </p>
        <h2>Common Uses of JWTs</h2>
        <p>JWTs find application in various scenarios, including:</p>
        <ul>
          <li>
            <strong>Web applications:</strong> Authenticating and authorizing
            users.
          </li>
          <li>
            <strong>APIs:</strong> User authentication and authorization for
            APIs.
          </li>
          <li>
            <strong>Microservices:</strong> Authentication and authorization
            between microservices.
          </li>
          <li>
            <strong>Single sign-on (SSO):</strong> Implementing SSO for users
            across multiple applications.
          </li>
        </ul>
        <h2 className="py-3 text-3xl">Advantages of JWTs</h2>
        <p>Embracing JWTs offers numerous benefits such as:</p>
        <ul>
          <li>
            <strong>Security:</strong> JWTs are signed, enhancing application
            security.
          </li>
          <li>
            <strong>Flexibility:</strong> Transmit various information like user
            identity, roles, and permissions.
          </li>
          <li>
            <strong>Performance:</strong> Lightweight and efficient, enhancing
            overall application performance.
          </li>
        </ul>
        <h2 className="py-3 text-3xl">Example of JWT Usage</h2>
        <p>
          Consider developing a web application using JWTs for user
          authentication and authorization:
        </p>
        <ol>
          <li>
            Upon user login, generate a JWT token and send it back to the user.
          </li>
          <li>User stores the JWT token in their browser.</li>
          <li>
            Subsequent requests include the JWT token in the HTTP Authorization
            header.
          </li>
          <li>
            Verify the JWT token to authenticate and authorize user access to
            requested resources.
          </li>
        </ol>
      </div>
      <Github />
    </div>
  );
};

export default JwtInfoPage;
