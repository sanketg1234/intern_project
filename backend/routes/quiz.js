const express = require('express');
const router = express.Router();
const authenticateToken = require('../middleware/authMiddleware');

router.get('/', authenticateToken, (req, res) => {
  res.json({
    message: 'This is a protected quiz route',
    user: req.user,
    quiz: [
      { id: 1, question: 'What is React?', options: ['Library', 'Framework'], answer: 'Library' },
      { id: 2, question: 'What is JSX?', options: ['HTML', 'XML-like'], answer: 'XML-like' },
    ]
  });
});

module.exports = router;
