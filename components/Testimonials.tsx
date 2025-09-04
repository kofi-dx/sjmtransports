// components/Testimonials.tsx
const testimonials = [
  {
    name: "Mary J.",
    role: "Senior Client",
    content: "St. Joseph Metro Transport has been a blessing. Their drivers are always punctual and so kind.",
    rating: 5
  },
  {
    name: "Robert K.",
    role: "Family Member",
    content: "Peace of mind knowing my father gets to his appointments safely. Professional service every time.",
    rating: 5
  },
  {
    name: "Dr. Susan M.",
    role: "Medical Professional",
    content: "We recommend SJM Transport to all our patients. Reliable and caring service.",
    rating: 5
  }
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-teal-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">Don&apos;t just take our word for it - hear from our satisfied customers</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6 italic">&quot;{testimonial.content}&quot;</p>
              <div>
                <p className="font-semibold text-gray-800 dark:text-white">{testimonial.name}</p>
                <p className="text-teal-600 dark:text-teal-400 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}