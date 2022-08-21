// server.js

const dotenv = require('dotenv').config();
const { application } = require('express');
const express = require('express'); 

const colors = require('colors');
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
const PORT = process.env.PORT || 5000;

// Connect to database
connectDB()

const app = express(); 

// body parser raw jason middleware
app.use(express.json());
// body parser urlencoded 
app.use(express.urlencoded({ extended: false }));

//Routes
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the support desk API' });
});

app.use('/api/users', require('./routes/userRoutes'));

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
