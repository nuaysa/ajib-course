import Image from "next/image";

const FacilityIcons = {
  certificate: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
  ),
  book: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
    </svg>
  ),
  chart: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
    </svg>
  ),
  teacher: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
    </svg>
  )
};

export default function Facilities() {
  const facilities = [
    { 
      name: "E-Certificate", 
      icon: FacilityIcons.certificate 
    },
    { 
      name: "Kurikulum & Buku Paket Spesial", 
      icon: FacilityIcons.book 
    },
    { 
      name: "Progress Report Berkala", 
      icon: FacilityIcons.chart 
    },
    { 
      name: "Guru Berpengalaman & Ramah Anak", 
      icon: FacilityIcons.teacher 
    }
  ];

  return (
    <section className="bg-white w-full py-16 lg:py-24 px-10 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          <div className="space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <h1 className="font-bold text-xl lg:text-4xl text-gray-900 leading-tight">
                Fasilitas Lengkap untuk{" "}
                <span className="text-primary-blue">Kenyamanan Belajar</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Kami menyediakan berbagai fasilitas pendukung agar proses belajar menjadi lebih efektif, terstruktur, dan menyenangkan bagi anak.
              </p>
            </div>

            <div className="space-y-1">
              {facilities.map((facility, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-2 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="w-6 h-6 p-1 bg-primary-pink bg-opacity-5 rounded-full flex items-center justify-center flex-shrink-0 text-white">
                    {facility.icon}
                  </div>
                  <span className="text-base text-gray-800">
                    {facility.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative order-1 w-full h-full lg:order-2">
            <div className="relative bg-gray-200 rounded-2xl lg:rounded-3xl w-full h-72 lg:h-96 shadow-xl overflow-hidden">
              <Image 
                src="/class.jpeg" 
                alt="Kelas outdoor yang menyenangkan" 
                fill
                className="object-cover rounded-md"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                priority
              />
            </div>

            <div className="absolute -top-6 -right-4 w-20 h-20 bg-primary-pink rounded-full opacity-50 z-10"></div>
            <div className="absolute -bottom-1 -left-8 w-28 h-28 bg-primary-blue rounded-full opacity-50 z-10"></div>
          </div>

        </div>
      </div>
    </section>
  );
}