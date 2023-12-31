import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "./NavBar";
import { Container } from "postcss";
import Conatiner from "@/components/Conatiner";
import Hydrate from "@/components/Hydrate";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Hydrate>
          <NavBar />
          <main className="p-5">
            <Conatiner>{children}</Conatiner>
          </main>
        </Hydrate>
      </body>
    </html>
  );
}
