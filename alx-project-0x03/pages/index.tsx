import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import Layout from "@/components/layouts/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="p-8">
        <h1 className="text-3xl font-bold">Welcome to Splash App</h1>
      </div>
    </Layout>
  );
}

