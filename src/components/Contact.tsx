import Link from "next/link";
import { FaWhatsapp, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactCTA() {
  const contacts = [
    {
      icon: <FaWhatsapp className="text-2xl" />,
      label: "WhatsApp",
      value: "0851-5698-5265",
      href: "https://wa.me/6285156985265",
      description: "Hubungi kami via WhatsApp",
    },
    {
      icon: <FaInstagram className="text-2xl" />,
      label: "Instagram",
      value: "@ajib.courser",
      href: "https://www.instagram.com/ajib.course",
      description: "Follow kami di Instagram",
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      label: "Alamat",
      value: "Lihat di Google Maps",
      href: "https://maps.app.goo.gl/K4zJAWJqEH9woUiH6",
      description: "Kunjungi lokasi kami",
    },
  ];

  return (
    <section className="w-full py-16 lg:py-24 px-4 sm:px-6 lg:px-8  bg-primary-pink ">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-white space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              SIAP BERGABUNG BERSAMA <span className="text-primary-blue">AJIB COURSE?</span>
            </h1>

            <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed">Hubungi kami sekarang untuk mendapatkan informasi pendidikan dan sebuah kelas terbaru.</p>
          </div>

          <div className="space-y-6">
            {contacts.map((contact, index) => (
              <Link
                key={index}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-6 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
              >
                <div className="flex items-center justify-center w-14 h-14 bg-primary-blue rounded-xl text-white group-hover:bg-primary-pink transition-colors">{contact.icon}</div>

                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 text-lg">{contact.label}</h3>
                  <p className="text-gray-700 font-semibold">{contact.value}</p>
                  <p className="text-gray-500 text-sm mt-1">{contact.description}</p>
                </div>

                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-primary-blue group-hover:text-white transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
