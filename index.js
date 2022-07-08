const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3000

// app, use middleware that parse request body
app.use(express.json())
app.use(cors())
app.use()


let courses = [
    { id: 1, title: "js" },
    { id: 2, title: "html" },
    { id: 3, title: "nodejs" },
]

app.get('/', function (req, res) {
    res.send('Hello World! IT-INCUBATOR!!!')
})

// Read
app.get('/courses', (req, res) => {
    res.send(courses)
})

// Create
app.post('/courses', function (req, res) {
    courses.push({
        id: +(new Date()),
        title: req.body.title
    })
    res.send(courses)
})

// Delete
app.delete('/courses/:id', function (req, res) {
    const id = +req.params.id

    courses = courses.filter(c => c.id !== id)

    res.send(courses)
})

// Update
app.put('/courses/:id', function (req, res) {
    const id = +req.params.id

    const course = courses.find(c => c.id === id)

    course.title = req.body.title

    res.send(courses)
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})