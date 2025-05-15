import React from 'react'
import Navbar from './Navbar'

const About = () => {
  return <>
    <Navbar/>
    <div className='max-w-full'>
      <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">About Movie Search App</h1>
      <p className="mb-4 text-gray-700">
        The Movie Search App is a simple React-based web application that allows users to search for movies and view detailed information about them. It's designed as a mini project to demonstrate core React concepts such as components, hooks, API integration, and responsive design.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Key Features</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Search for movies by title.</li>
        <li>View movie details including name, poster, release year.</li>
        <li>Responsive design that works on desktop and mobile.</li>
        <li>Powered by a public movie API OMDB.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Technologies Used</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>React JS (Functional Components & Hooks).</li>
        <li>Tailwind CSS for styling.</li>
        <li>Axios or Fetch API for HTTP requests.</li>
        <li>Vite for fast development and build.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Purpose</h2>
      <p className="text-gray-700">
        This project is intended for learning and practice purposes. It helps beginners understand how to build real-world React applications, use external APIs, manage state, and build user-friendly interfaces.
      </p>
    </div>
    </div>
  </>
}

export default About