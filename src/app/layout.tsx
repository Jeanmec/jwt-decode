import "~/styles/globals.css";

import { Inter } from "next/font/google";

import { FaGithub } from "react-icons/fa";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "JWT decoder",
  description: "Decode your JWT token easily",
  icons: [{ rel: "icon", url: "/favicon.svg" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`font-sans ${inter.variable} bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-sky-600 via-indigo-950 to-sky-600`}
      >
        {children}
        <a
          target="_blank"
          href="https://github.com/Jeanmec"
          className="absolute bottom-4 right-4 text-3xl text-white transition hover:text-blue-500"
        >
          <FaGithub />
        </a>
      </body>
    </html>
  );
}
