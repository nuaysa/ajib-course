import Image from "next/image";
import Card from "./Card";

export default function WhyUs() {
  return (
    <div className="max-w-screen h-full py-10 flex flex-col text-black justify-center items-center bg-white px-4">
      <h1 className="text-lg sm:text-4xl md:text-6xl font-bold text-primary-pink bg-white rounded-md pt-2 px-3 leading-snug">
        KENAPA MEMILIH KAMI?
      </h1>

      <div className="flex flex-col md:flex-row justify-center items-stretch mt-10 gap-6 w-full max-w-7xl">
        <Card>
          <div className="flex flex-col flex-1">
            <span className="space-y-3">
              <Image src="/icon_kitab.webp" alt="Icon 1" width={80} height={80} />
              <p className="font-semibold text-lg">Sesuai Syariat Islam</p>
            </span>
            <p className="mt-2">
              Materi dan metode yang menyesuaikan dengan syariat Islam. Tidak ada
              bernyanyi, musik, dll.
            </p>
          </div>
        </Card>

        <Card>
          <div className="flex flex-col flex-1">
            <span className="space-y-3">
              <Image src="/icon_kelas.webp" alt="Icon 2" width={60} height={60} />
              <p className="font-semibold text-lg">Kelas Ikhwan & Akhwat</p>
            </span>
            <p className="mt-2">
              Tersedia kelas online dan offline, Ikhwan dan Akhwat dalam kelas
              yang berbeda (terjaga batasan).
            </p>
          </div>
        </Card>

        <Card>
          <div className="flex flex-col flex-1">
            <span className="space-y-3">
              <Image src="/icon_pembelajaran.webp" alt="Icon 3" width={80} height={80} />
              <p className="font-semibold text-lg">Pembelajaran Inklusif</p>
            </span>
            <p className="mt-2">
              Pembelajaran inklusif dan menghargai setiap tahapan perkembangan murid.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
