const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth'); // 👈 use auth.js
const app = express();
const dotenv = require('dotenv'); //👈👈👈👈
dotenv.config(); // 👈
const mongoose = require('mongoose'); 
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes); // 👈 this becomes /api/auth/register and /api/auth/login

mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('✅ MongoDB connected');
  app.listen(5000, () => console.log('✅ Server started on port 5000'));
})
.catch(err => console.error('❌ MongoDB connection error:', err));
