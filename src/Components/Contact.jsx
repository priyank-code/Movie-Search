import React from 'react'
import Navbar from './Navbar'

const Contact = () => {
  return <>
    <Navbar/>
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="mb-6 text-gray-700">
        We'd love to hear from you! Whether you have feedback, questions, or feature suggestions for the Movie Search App, feel free to reach out.
      </p>

      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
        <ul className="text-gray-700 space-y-2">
          <li>
            📧 <strong>Email: </strong><a href="mailto:vaghanipriyank1@gmail.com" className='text-blue-700'> vaghanipriyank1@gmail.com</a>
          </li>
          <li>
            🐙 <strong>GitHub:</strong> <a href="https://github.com/priyank-code" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">github.com/priyank-code</a>
          </li>
        </ul>
      </div>

      <p className="mt-6 text-gray-600 text-sm">
        This app is a mini project built with React JS, designed to help users quickly search for movies and view details using a public API.
      </p>
    </div>
  </>
}

export default Contact