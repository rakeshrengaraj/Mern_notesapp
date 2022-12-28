const express = require('express');
const app = express();

const notes = require('./data/notes')

const dotenv = require('dotenv');
dotenv.config()


app.get('/',(req, res) => {
    res.send("Welcome to notes app")
})

app.get('/api/notes', (req,res) => {
    res.json(notes)
})

app.get('/api/notes/:id', (req,res) => {
    const note = notes.find((n) => {
        return n._id == req.params.id
    })
    console.log(note)
    res.json(note)
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`);
})