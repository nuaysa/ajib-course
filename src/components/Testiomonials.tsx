"use client";
import React, { useState, useEffect } from "react";

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const testimonials = [
    {
      id: 1,
      text: "The teaching is super clear and easy to follow. The lessons are really interactive, which helps my son understand the material better. Ust Reyhan is very patient and always provides great examples. Overall, my son really enjoys the classes and looks forward to them every week! The program has been fun and effective for him.",
      author: "Ummu Aqeel",
      role: "MA Sabilunnajah",
    },
    {
      id: 2,
      text: "Ada main game, terus pelajarannya mudah dipahami. Yang paling Ana sukain lomba.",
      author: "Fayyadh Arjuna Airiel",
      role: "Kelas 4 MI An-Najiyah",
    },
    {
      id: 3,
      text: "les di Ajib seru gak bikin bosen karena cara belajarnya gak bikin bosen, ada gamenya juga jadi tambah seru... Kata2 bahasa inggris nya nambah terus, jadi sedikit2 sudah mulai diterapkan di obrolan sehari2..... Sama temen2 apalagi kalau lagi Mabar...",
      author: "Kalila Rifda Handiana",
      role: "Kelas 6 MI An-Najiyah Bandung",
    },
    {
      id: 4,
      text: "Les di Mr menyenangkan dan tidak membosankan. Les di Mr seru, jadi kita belajar seperti sedang bermain.",
      author: "Faqih",
      role: "Kelas 3 MI An-Najiyah Bandung",
    },
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isMobile, testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimoni" className="bg-primary-blue py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 lg:mb-16">
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">APA KATA MEREKA?</h1>
          <p className="text-lg lg:text-xl text-white max-w-3xl mx-auto">
Dengarkan langsung dari mereka yang telah bergabung bersama Ajib Course</p>
        </div>

        <div className="md:hidden relative">
          <div className="overflow-hidden rounded-2xl">
            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-2">
                  <div className={`bg-white border-l-4 rounded-2xl shadow-lg p-6 ${testimonial.id % 2 === 0 ? "border-primary-blue" : "border-primary-pink"}`}>
                    <blockquote className="text-gray-700 text-sm italic leading-relaxed mb-6">&quot;{testimonial.text}&quot;</blockquote>

                    <div className="border-t border-gray-100 pt-4">
                      <div className={`font-semibold text-base ${testimonial.id % 2 === 0 ? "text-primary-blue" : "text-primary-pink"}`}>{testimonial.author}</div>
                      <div className={`text-sm ${testimonial.id % 2 === 0 ? "text-primary-blue" : "text-primary-pink"}`}>{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/30 border border-gray-200 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200 z-10"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/30 border border-gray-200 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200 z-10"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button key={index} onClick={() => setCurrentSlide(index)} className={`w-3 h-3 rounded-full transition-colors duration-200 ${index === currentSlide ? "bg-white" : "bg-white bg-opacity-50"}`} />
            ))}
          </div>
        </div>

        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className={`bg-white border-l-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 lg:p-8 ${testimonial.id % 2 === 0 ? "border-primary-blue" : "border-primary-pink"}`}>
              <blockquote className="text-gray-700 text-sm lg:text-base italic leading-relaxed lg:leading-loose mb-6">&quot;{testimonial.text}&quot;</blockquote>

              <div className="border-t border-gray-100 pt-4">
                <div className={`font-semibold text-base lg:text-lg ${testimonial.id % 2 === 0 ? "text-primary-blue" : "text-primary-pink"}`}>{testimonial.author}</div>
                <div className={`text-sm lg:text-base ${testimonial.id % 2 === 0 ? "text-primary-blue" : "text-primary-pink"}`}>{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
