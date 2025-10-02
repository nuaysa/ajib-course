import Image from "next/image";
import Link from "next/link";

export default function Navbar(){
    return (
         <div className="bg-white sticky top-0 z-10 w-full shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
            <div className="flex items-center space-x-2">
                <Image
                src="/logo 512.webp"
                alt="logo"
                width={40}
                height={40}
                />
                <span className="text-xl font-extrabold text-primary-pink">Ajib Course</span>
            </div>
            <nav className="hidden md:flex space-x-6 text-gray-600 font-medium">
                <Link href="#keunggulan" className="hover:text-primary-pink transition duration-300 cursor-pointer">Keunggulan</Link>
                <Link href="#kelas" className="hover:text-primary-pink transition duration-300 cursor-pointer">Kelas</Link>
                <Link href="#testimoni" className="hover:text-primary-pink transition duration-300 cursor-pointer">Testimoni</Link>
                <Link href="#guru" className="hover:text-primary-pink transition duration-300 cursor-pointer">Guru Kami</Link>
            </nav>
            <Link href="#kontak" className="hidden md:block bg-primary-blue text-white px-4 py-2 rounded-full font-semibold hover:bg-opacity-90 transition duration-300 cursor-pointer shadow-lg">Daftar Sekarang</Link>
        </div>
    </div>
    )
}