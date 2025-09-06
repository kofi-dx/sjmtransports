// components/Hero.tsx
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center mt-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-teal-900 opacity-60 dark:opacity-70"></div>
        <Image
          src="/four.jpg"
          alt="Comfortable transportation for seniors"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Premium Non-Emergency Transportation
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Safe, reliable transportation services for seniors and individuals throughout the Maryland Metropolitan Area
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-teal-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-teal-700 transition-colors">
            Send Us a Message
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}