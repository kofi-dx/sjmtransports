// components/Services.tsx
import Image from 'next/image'

const services = [
  {
    title: "Medical Appointments",
    description: "Reliable transportation to and from medical facilities, ensuring you never miss important appointments.",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80"
  },
  {
    title: "Senior Transportation",
    description: "Specialized services for seniors with trained drivers and accessible vehicles.",
    image: "/one.jpg"
  },
  {
    title: "Hospital Transfers",
    description: "Comfortable and safe transfers between medical facilities and homes.",
    image: "/tt.jpg"
  },
  {
    title: "24/7 Availability",
    description: "Round-the-clock service for your urgent transportation needs.",
    image: "/three.jpg"
  }
]

export default function Services() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Providing exceptional non-emergency transportation solutions tailored to your specific needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}