"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import Logo from "@/assets/logo.png";

export default function NotFoundPreview() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6 text-center">
      
      {/* Logo */}
      <Image src={Logo} alt="Logo" width={400} height={200} className="mb-4" />

      {/* 404 */}
      <motion.h2
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="text-7xl font-extrabold text-red-600 mb-4"
      >
        404
      </motion.h2>

      {/* Headline */}
      <p className="text-2xl font-semibold text-gray-800 mb-2">
        Breaking News: Page Not Found
      </p>

      {/* Description */}
      <p className="text-gray-600 max-w-md mb-6">
        The article you are looking for might have been removed, renamed, or never existed.
      </p>

      

      {/* Buttons */}
      <div className="flex gap-4">
        <Link
          href="/"
          className="px-6 py-3 bg-red-600 text-white rounded-xl shadow hover:bg-red-700 transition"
        >
          Go to Homepage
        </Link>

        <Link
          href="/latest"
          className="px-6 py-3 border border-gray-300 rounded-xl hover:bg-gray-100 transition"
        >
          Latest News
        </Link>
      </div>

      {/* Categories */}
      <div className="mt-10 text-sm text-gray-500">
        <p>Explore sections:</p>
        <div className="flex gap-4 justify-center mt-2">
          <Link href="/world" className="hover:underline">
            World
          </Link>
          <Link href="/sports" className="hover:underline">
            Sports
          </Link>
          <Link href="/technology" className="hover:underline">
            Technology
          </Link>
        </div>
      </div>

      {/* Footer note */}
      <p className="text-gray-400 text-xs mt-8">
        Even our reporters could not find this story.
      </p>
    </div>
  );
}
