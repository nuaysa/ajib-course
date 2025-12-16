import React from "react";
import ClassCard from "./Class-Card";

export default function Classes() {
  const classes = [
    {
      id: 1,
      title: "B. INGGRIS",
      sessions: "1 pertemuan/pekan",
      sessionType: "Online interaktif via Zoom",
      maxStudents: "Max. 10 murid per kelas",
      days: "Hari: Senin, Selasa",
      price: "150k",
      period: "/bulan",
      buttonText: "Daftar B. Inggris",
      variant: "primary" as const,
    },
    {
      id: 2,
      title: "B. INGGRIS+",
      sessions: "2 pertemuan/pekan",
      sessionType: "Tersedia kelas Offline dan Online",
      maxStudents: "Max. 10 murid per kelas",
      days: "Hari: Rabu, Kamis, Jumat",
      price: "250k",
      period: "/bulan",
      buttonText: "Daftar B. Inggris+",
      variant: "premium" as const,
    },
    {
      id: 3,
      title: "PRIVAT",
      description: "Belajar materi sesuai kebutuhan murid. Menerima SD-SMP-SMA-Dewasa",
      sessions: "Tersedia kelas Offline dan Online",
      maxStudents: "Individu / Kelompok",
      days: "Fokus sesuai kebutuhan murid",
      price: "Hubungi Kami",
      period: "",
      buttonText: "Daftar Privat",
      variant: "primary" as const,
    },
  ];

  return (
    <div className="w-full py-16 bg-gradient-to-br from-primary-blue to-blue-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            PILIHAN KELAS TERBAIK KAMI
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Temukan kelas yang paling sesuai dengan kebutuhan belajar Anda
          </p>
        </div>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
            {classes.map((classItem) => (
              <ClassCard key={classItem.id} {...classItem} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}