import React from 'react'
import Navbar from './Navbar'

const Services = () => {
  return <>
    <Navbar/>
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Our Services</h1>
      <p className="text-gray-700 mb-8">
        The Movie Search App is designed to make finding movies fast, simple, and enjoyable. Below are the core features and services we offer to enhance your movie discovery experience.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="bg-white shadow-md p-6 rounded-lg border border-gray-200">
          <h2 className="text-xl font-semibold mb-2">🎬 Movie Search</h2>
          <p className="text-gray-600">
            Instantly search for any movie by title using real-time API integration. Get fast and relevant results as you type.
          </p>
        </div>

        <div className="bg-white shadow-md p-6 rounded-lg border border-gray-200">
          <h2 className="text-xl font-semibold mb-2">📄 Detailed Movie Info</h2>
          <p className="text-gray-600">
            Access detailed information including movie name, release year.
          </p>
        </div>

        <div className="bg-white shadow-md p-6 rounded-lg border border-gray-200">
          <h2 className="text-xl font-semibold mb-2">📱 Responsive Design</h2>
          <p className="text-gray-600">
            Enjoy a seamless experience across all devices—desktop, tablet, or mobile—thanks to a responsive UI built with Tailwind CSS.
          </p>
        </div>

        <div className="bg-white shadow-md p-6 rounded-lg border border-gray-200">
          <h2 className="text-xl font-semibold mb-2">🌐 API Integration</h2>
          <p className="text-gray-600">
            Powered by public movie databases OMDB, our app ensures accurate and up-to-date movie data.
          </p>
        </div>
      </div>

      <p className="mt-10 text-gray-600 text-sm">
        This app is built as a learning project using React JS, with the goal of demonstrating modern web development practices.
      </p>
    </div>
  </>
}

export default Services