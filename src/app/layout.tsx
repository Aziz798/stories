import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "./_components/shared/navbar";
import Footer from "./_components/shared/footer";
import StoriesSearched from "./_components/shared/stories-searched";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stories",
  description: "Story telling app powered by AI assistantce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en">
      <ClerkProvider>
        <body className={inter.className}>
          <Navbar />
          <StoriesSearched/>
          {children}
          <Footer />
        </body>
      </ClerkProvider>
    </html>

  );
}
