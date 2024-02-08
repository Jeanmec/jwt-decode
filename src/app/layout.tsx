import "~/styles/globals.scss";

import { Inter } from "next/font/google";

import { FaGithub } from "react-icons/fa";
import Github from "~/components/github";

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
        <Github />
      </body>
    </html>
  );
}
