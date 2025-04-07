import React from 'react';

const Courses = () => {
  const courses = [
    { title: "JavaScript Basics", description: "Learn variables, loops, and functions." },
    { title: "React for Beginners", description: "Build dynamic UIs with React." },
    { title: "HTML & CSS", description: "Master layout and design for the web." },
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Available Courses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <div key={index} className="bg-white shadow-md p-6 rounded-xl">
            <h2 className="text-xl font-semibold">{course.title}</h2>
            <p className="text-gray-600 mt-2">{course.description}</p>
            <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-1 px-4 rounded">Start</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
