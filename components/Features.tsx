// components/Features.tsx
import Image from 'next/image'

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the difference with our premium transportation services
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative h-96 rounded-xl overflow-hidden">
              <Image
                src="/why.jpg"
                alt="Professional driver assisting senior"
                fill
                className="object-cover"
              />
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="bg-teal-100 p-3 rounded-full mr-4">
                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Safety First</h3>
                <p className="text-gray-600">Our vehicles are regularly maintained and our drivers are thoroughly vetted and trained.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-teal-100 p-3 rounded-full mr-4">
                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Punctuality</h3>
                <p className="text-gray-600">We understand the importance of being on time, especially for medical appointments.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-teal-100 p-3 rounded-full mr-4">
                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Compassionate Staff</h3>
                <p className="text-gray-600">Our drivers are trained to provide compassionate care and assistance to all passengers.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}