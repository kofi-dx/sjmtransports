// app/about/page.tsx
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Image from 'next/image'

export default function About() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-teal-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-teal-800 dark:text-teal-400 mb-6">About St. Joseph Metro Transport</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Providing compassionate, reliable transportation services for seniors and individuals throughout Maryland
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative h-96 rounded-xl overflow-hidden">
                <Image
                  src="/one.jpg"
                  alt="St. Joseph Metro Transport team"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-teal-800 dark:text-teal-400 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                At St. Joseph Metro Transport, we are dedicated to providing safe, reliable, and compassionate 
                transportation services to seniors and individuals with mobility challenges throughout the 
                Maryland Metropolitan Area.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Founded on the principles of dignity, respect, and exceptional service, we understand the 
                importance of maintaining independence and ensuring our clients can access essential services, 
                medical appointments, and social engagements without transportation barriers.
              </p>
              <div className="bg-teal-50 dark:bg-teal-900 p-6 rounded-lg">
                <p className="text-teal-800 dark:text-teal-200 font-semibold italic">
                  &quot;Our commitment is to treat every client like family, ensuring their safety and comfort 
                  throughout every journey.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-teal-800 dark:text-teal-400 mb-12 text-center">Our Values</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-teal-100 dark:bg-teal-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-teal-600 dark:text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Safety First</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our vehicles are regularly maintained and our drivers undergo thorough background checks and training.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-teal-100 dark:bg-teal-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-teal-600 dark:text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Reliability</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We understand the importance of punctuality, especially for medical appointments and time-sensitive engagements.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-teal-100 dark:bg-teal-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-teal-600 dark:text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 极速 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Compassion</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our drivers are trained to provide compassionate care and assistance to all passengers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-teal-800 dark:text-teal-400 mb-12 text-center">Why Choose Us</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 dark:text-teal-400 mb-2">50+</div>
              <p className="text-gray-600 dark:text-gray-300">Years of Combined Experience</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 dark:text-teal-400 mb-2">1000+</div>
              <p className="text-gray-600 dark:text-gray-300">Satisfied Clients</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 dark:text-teal-400 mb-2">24/7</div>
              <p className="text-gray-600 dark:text-gray-300">Availability</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 dark:text-teal-400 mb-2">100%</div>
              <p className="text-gray-600 dark:text-gray-300">Safety Record</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}