// web application framework
const express = require('express');
const app = express();
// web application framework

const notes = require('./data/notes')

// loading environment variables .env
const dotenv = require('dotenv');
dotenv.config()
// loading environment variables .env


// Connected to mongo db
const connectDB = require('./config/db');
connectDB();
// Connected to mongo db


// Routes
app.get('/',(req, res) => {
    res.send("Welcome to notes app")
})

app.get('/api/notes', (req,res) => {
    res.json(notes)
})


const userRoutes = require('./routes/userRoutes');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');
app.use(express.json());
app.use('/api/users', userRoutes)


// Error Handling middlewares
app.use(notFound);
app.use(errorHandler);

// Routes

const PORT = process.env.PORT || 5000

app
app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`);
})