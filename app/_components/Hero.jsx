import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const Hero = () => {
  return (
    <section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
        <Image
          alt="doctor image"
          src="/doctor.jpg"
          width = {800}
          height = {800}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div className="lg:py-24">
        <h2 className="text-3xl font-bold sm:text-4xl">Book the appoiment</h2>

        <p className="mt-4 text-gray-600">Discover the perfect doctor for your needs and easily book an appointment with just a few clicks. Our platform provides a comprehensive directory of medical professionals, allowing you to search by specialty, location, and availability. With user-friendly features and detailed profiles, you can make an informed choice and secure your appointment hassle-free. Start your journey to better health today by finding and booking with confidence
        </p>

        <Button className = 'mt-10'>Get Started</Button>
        
      </div>
    </div>
  </div>
</section>
  )
}

export default Hero