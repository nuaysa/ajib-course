export default function Hero() {
  return (
    <div className="max-w-screen h-full py-20 md:py-36 flex justify-center bg-primary-blue px-4">
      <div className="flex flex-col justify-center items-center space-y-3 text-center">
        <h1 className="text-xl sm:text-5xl md:text-7xl font-bold text-white leading-tight">
          LES INGGRIS & MATEMATIKA
        </h1>

        <h1 className="text-lg sm:text-4xl md:text-6xl font-bold text-primary-pink bg-white rounded-md pt-2 px-3 leading-snug">
          Menyenangkan dan Terjaga!
        </h1>

        <div className="text-white max-w-md sm:max-w-xl text-sm sm:text-base md:text-lg space-y-2">
          <p>Belajar Ilmu Umum tanpa mengabaikan Syariat.</p>
          <p>
            Kami berkomitmen menyediakan materi dan metode yang menyesuaikan
            dengan ajaran Islam.
          </p>
        </div>

        <button className="bg-primary-pink text-white px-5 sm:px-6 py-2 sm:py-3 rounded-full font-semibold hover:bg-opacity-90 transition duration-300 shadow-lg mt-5 text-sm sm:text-base cursor-pointer">
          Lihat Pilihan Kelas
        </button>

        <p className="text-xs sm:text-sm md:text-base text-white mt-3">
          Tersedia kelas Online & Offline | Ikhwan & Akhwat Terpisah
        </p>
      </div>
    </div>
  );
}
