// components/CTA.tsx
import Link from 'next/link'

export default function CTA() {
  return (
    <section className="py-20 bg-teal-700 dark:bg-teal-900">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Ready to Experience Premium Transportation?
        </h2>
        <p className="text-xl text-teal-100 dark:text-teal-200 mb-8 max-w-3xl mx-auto">
          Don&apos;t settle for anything less than the best non-emergency transportation services for seniors. 
          Contact us today to schedule your ride.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/contact">
            <button className="bg-white dark:bg-gray-100 text-teal-700 dark:text-teal-900 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-300 transition-colors">
              Get Started
            </button>
          </Link>
          <Link href="/about">
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-teal-700 dark:hover:text-teal-900 transition-colors">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}