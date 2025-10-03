"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false); 
  };

  const navLinks = [
    { href: "#keunggulan", label: "Keunggulan" },
    { href: "#kelas", label: "Kelas" },
    { href: "#testimoni", label: "Testimoni" },
    { href: "#guru", label: "Guru Kami" },
  ];

  return (
    <div className="bg-white sticky top-0 z-50 w-full shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
         <div className="w-10 h-10 sm:w-16 sm:h-16 relative">
            <Image
              src="/Ajib Course 4000px plus-01.png"
              alt="logo"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <nav className="hidden md:flex space-x-6 text-gray-600 font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href.substring(1))}
              className="hover:text-primary-pink transition duration-300 cursor-pointer"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="#kontak"
          onClick={(e) => handleScroll(e, "kontak")}
          className="hidden md:block bg-primary-blue text-white px-4 py-2 rounded-full font-semibold hover:bg-opacity-90 transition duration-300 cursor-pointer shadow-lg"
        >
          Daftar Sekarang
        </Link>

        <button
          className="md:hidden p-2 rounded-md text-gray-600 hover:text-primary-pink hover:bg-gray-100 transition duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 py-3 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href.substring(1))}
                className="block py-2 px-4 text-gray-600 hover:text-primary-pink hover:bg-gray-50 rounded-lg transition duration-300 font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#kontak"
              onClick={(e) => handleScroll(e, "kontak")}
              className="block py-3 px-4 bg-primary-blue text-white text-center rounded-full font-semibold hover:bg-opacity-90 transition duration-300 shadow-lg mt-2"
            >
              Daftar Sekarang
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}