import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-blue-100 via-white to-green-100 text-center px-4">
    <h1 className="text-5xl font-extrabold mb-4 text-gray-800">Welcome to Interactive Learning</h1>
    <p className="mb-6 text-lg text-gray-700 max-w-2xl">
      Dive into interactive courses, take quizzes, and track your progress — all in one platform built for learners.
    </p>
    <div className="flex gap-4 mb-8">
      <Link to="/login" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-xl transition-all duration-200">Login</Link>
      <Link to="/register" className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-xl transition-all duration-200">Register</Link>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10 w-full max-w-5xl">
      <div className="bg-white shadow-lg rounded-2xl p-6">
        <h2 className="text-xl font-bold mb-2">Courses</h2>
        <p className="text-gray-600">Explore engaging courses across various subjects.</p>
      </div>
      <div className="bg-white shadow-lg rounded-2xl p-6">
        <h2 className="text-xl font-bold mb-2">Quizzes</h2>
        <p className="text-gray-600">Test your knowledge with interactive quizzes.</p>
      </div>
      <div className="bg-white shadow-lg rounded-2xl p-6">
        <h2 className="text-xl font-bold mb-2">Progress</h2>
        <p className="text-gray-600">Track your learning journey over time.</p>
      </div>
    </div>
  </div>
);

export default Home;
