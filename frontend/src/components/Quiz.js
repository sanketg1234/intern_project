import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Quiz = () => {
  const navigate = useNavigate();
  const [quizData, setQuizData] = useState([]);
  const [error, setError] = useState('');
  const name = localStorage.getItem('username');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }

    axios.get('/api/quiz', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(res => {
      setQuizData(res.data.quiz);
    })
    .catch(err => {
      console.error(err);
      setError('Failed to load quiz data');
    });
  }, [navigate]);

  if (error) {
    return <div className="text-red-500 text-center mt-4">{error}</div>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-yellow-100 to-pink-100 px-4">
      <h1 className="text-4xl font-bold mb-4 text-gray-800">Welcome, {name}!</h1>
      <p className="text-lg text-gray-700 mb-6">You are now logged in and can start the quiz.</p>

      {quizData.length > 0 ? (
        <div className="w-full max-w-2xl">
          {quizData.map((q, index) => (
            <div key={q.id} className="bg-white shadow-md rounded-xl p-6 mb-6">
              <h2 className="font-semibold mb-2">{index + 1}. {q.question}</h2>
              <ul className="list-disc ml-6 text-gray-700">
                {q.options.map((option, i) => (
                  <li key={i}>{option}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading quiz...</p>
      )}
    </div>
  );
};

export default Quiz;
