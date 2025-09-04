// app/services/page.tsx (updated with dark mode)
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'

const services = [
  {
    id: "senior",
    title: "Senior Transportation",
    description: "Specialized transportation services for seniors with trained drivers and accessible vehicles. We ensure comfortable and safe rides for all our elderly passengers.",
    image: "https://images.unsplash.com/photo-1476234251651-f353703a034d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    features: ["Door-to-door service", "Trained assistance", "Comfortable vehicles", "Flexible scheduling"]
  },
  {
    id: "medical",
    title: "Medical Appointments",
    description: "Reliable transportation to and from medical facilities, ensuring you never miss important appointments. We understand the importance of punctuality for healthcare visits.",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
    features: ["On-time guarantee", "Wait time included", "Direct facility access", "Document assistance"]
  },
  {
    id: "hospital",
    title: "Hospital Transfers",
    description: "Comfortable and safe transfers between medical facilities and homes. Our trained staff ensures smooth transitions with minimal stress for patients.",
    image: "/ama.jpg",
    features: ["Non-emergency medical transport", "Wheelchair accessible", "Stretcher options", "Professional medical assistants"]
  },
  {
    id: "shopping",
    title: "Shopping Transportation",
    description: "Assisted transportation for shopping needs. We help seniors maintain their independence by providing reliable transportation for errands and shopping trips.",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    features: ["Door-through-door service", "Shopping assistance", "Package handling", "Flexible duration"]
  },
  {
    id: "wheelchair",
    title: "Wheelchair Accessible Transportation",
    description: "Fully accessible vehicles equipped to accommodate wheelchairs and mobility devices. We ensure safe and comfortable transportation for passengers with mobility challenges.",
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
    features: ["ADA compliant vehicles", "Trained assistance", "Secure fastening systems", "Ramp or lift access"]
  },
  {
    id: "holiday",
    title: "Holiday Service Transportation",
    description: "Special holiday transportation services to help seniors visit family and friends during festive seasons. Spread joy without transportation worries.",
    image: "https://images.unsplash.com/photo-1543083115-638c32cd3d58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2032&q=80",
    features: ["Holiday scheduling", "Family visit assistance", "Gift transportation", "Extended service hours"]
  }
]

export default function Services() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-teal-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-teal-800 dark:text-teal-400 mb-6">Our Services</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Providing exceptional non-emergency transportation solutions tailored to your specific needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-teal-900 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>
                  
                  <ul className="mb-6 space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-600 dark:text-gray-400">
                        <svg className="w-4 h-4 text-teal-600 dark:text-teal-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    href={`/contact?service=${service.id}`}
                    className="inline-flex items-center text-teal-600 dark:text-teal-400 font-semibold hover:text-teal-700 dark:hover:text-teal-300 transition-colors"
                  >
                    Schedule this service
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-teal-700 dark:bg-teal-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Need Special Transportation?</h2>
          <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
            We customize our services to meet your specific needs. Contact us to discuss how we can help with your unique transportation requirements.
          </p>
          <Link 
            href="/contact"
            className="bg-white text-teal-700 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}