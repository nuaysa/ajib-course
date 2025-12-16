import { FaUserGraduate, FaQuoteLeft } from "react-icons/fa";
import CountUp from "./CountUp";

export default function StatsTestimonial() {
  return (
    <section className="w-full pt-16  px-4 sm:px-6 lg:px-8 bg-primary-blue">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-4 bg-white rounded-2xl shadow-lg px-8 py-6 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center">
                <FaUserGraduate className="text-white text-2xl" />
              </div>
              <div className="text-left">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl lg:text-5xl font-bold text-gray-900">
                    <CountUp 
                    from={0} 
                    to={65} 
                    separator="," 
                    direction="up" 
                    duration={1} 
                    className="count-up-text"  />
                  </span>
                  <span className="text-xl text-primary-blue font-semibold">orang</span>
                </div>
                <p className="text-gray-600 text-sm mt-1">(SD-SMP-SMA-DEWASA)</p>
              </div>
            </div>
          </div>

          <p className="text-lg text-gray-700 max-w-2xl mx-auto">Telah bergabung dan merasakan metode belajar yang menyenangkan di AJIB Course</p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Dipercaya oleh Orang Tua dan Ahli Pendidikan</h2>
            <p className="text-gray-600 text-lg">Berikut adalah sebagian dari orang tua yang telah mempercayakan buah hatinya kepada kami</p>
          </div>

          <div className="bg-gradient-to-r from-primary-blue to-blue-600 rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="absolute top-4 right-4 opacity-20">
              <FaQuoteLeft className="text-6xl" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold">BS</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Ustadz Beni Sarbeni, Lc, M.Pd</h4>
                  <p className="text-blue-100 opacity-90">Mudir Ma&apos;had Sabilunnajah Bandung</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
