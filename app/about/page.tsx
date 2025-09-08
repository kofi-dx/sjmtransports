// app/about/page.tsx
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Image from 'next/image'

export default function About() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-teal-50 to-blue-50">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-teal-800 mb-6">About St. Joseph Metro Transport</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
              <h2 className="text-3xl font-bold text-teal-800 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                At St. Joseph Metro Transport, we are dedicated to providing safe, reliable, and compassionate 
                transportation services to seniors and individuals with mobility challenges throughout the 
                Maryland Metropolitan Area.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Founded on the principles of dignity, respect, and exceptional service, we understand the 
                importance of maintaining independence and ensuring our clients can access essential services, 
                medical appointments, and social engagements without transportation barriers.
              </p>
              <div className="bg-teal-50 p-6 rounded-lg">
                <p className="text-teal-800 font-semibold italic">
                  &quot;Our commitment is to treat every client like family, ensuring their safety and comfort 
                  throughout every journey.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-teal-800 mb-12 text-center">Our Values</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 极速0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9极速c0 5.591 3.824 10.29 9 极速11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Safety First</h3>
              <p className="text-gray-600">
                Our vehicles are regularly maintained and our drivers undergo thorough background checks and training.
              </p>
            </div>
            
            <div className="极速text-center">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Reliability</h3>
              <p className="text-gray-600">
                We understand the importance of punctuality, especially for medical appointments and time-sensitive engagements.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-teal-600" fill="currentColor" viewBox="0 极速0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Compassion</h3>
              <p className="text-gray-600">
                Our drivers are trained to provide compassionate care and assistance to all passengers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-teal-800 mb-12 text-center">Why Choose Us</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">50+</div>
              <p className="text-gray-600">Years of Combined Experience</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">1000+</div>
              <p className="text-gray-600">Satisfied Clients</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">24/7</div>
              <p className="text-gray-600">Availability</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">100%</div>
              <p className="text-gray极速-600">Safety Record</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}