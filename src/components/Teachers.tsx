import Image from "next/image";
import { TbPodium } from "react-icons/tb";

const teachers = [
  {
    id: 1,
    nama: "Reyhan Delvari Suryansyah",
    image: "/podium.svg",
    desc: "Alumnus Al-Irsyad Satya Islamic School, Juara nasional pidato bahasa Inggris",
  },
  {
    id: 2,
    nama: "Rahmah Niyati Hasyim",
    image: "/ITB.jpeg",
    desc: "Alumnus S2 Institut Teknologi Bandung",
  },
  {
    id: 3,
    nama: "Jiilan Sausan Salsabiila",
    image: "/IOU.jpg",
    desc: "Mahasiswi International Open University",
  },
  {
    id: 4,
    nama: "Ismi Ulfah",
    image: "/IOU.jpg",
    desc: "Mahasiswi International Open University & Mahasiswi jurusan Pendidikan Bahasa Inggris",
  },
];

export default function Teachers() {
  return (
    <div className="bg-white w-full py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Guru Kami Yang Berpengalaman
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Bertemu dengan tim pengajar profesional yang berdedikasi untuk kesuksesan belajar anak Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
          {teachers.map((teacher) => (
            <div 
              key={teacher.id} 
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300"
            >
              <div className="relative mb-6">
                <div className={`w-32 h-32 rounded-full border-4 border-dashed ${
                  teacher.id ==1 
                    ? "border-primary-blue" 
                    : "border-primary-pink"
                } overflow-hidden bg-gray-200 flex items-center justify-center`}>
                  {teacher.image ? (
                    <Image
                      src={teacher.image}
                      alt={teacher.nama}
                      width={80}
                      height={80}
                      className="object-cover bg-white px-3 pb-3 pt-2 w-full h-full"
                    />
                  ) : (
                    <div className="text-4xl text-gray-400">
                     <TbPodium />
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-bold text-xl text-gray-900">
                  {teacher.nama}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {teacher.desc}
                </p>
              </div>

              <div className={`w-16 h-1 rounded-full mt-4 ${
                teacher.id == 1 
                  ? "bg-primary-blue" 
                  : "bg-primary-pink"
              }`}></div>
            </div>
          ))}
        </div>

       
      </div>
    </div>
  );
}