
const express = require('express')
const app = express()

app.use(express.json())

let persons = [
    { 
      id: 1,
      name: "Arto Hellas", 
      number: "040-123456"
    },
    { 
      id: 2,
      name: "Ada Lovelace", 
      number: "39-44-5323523"
    },
    { 
      id: 3,
      name: "Dan Abramov", 
      number: "12-43-234345"
    },
    { 
      id: 4,
      name: "Mary Poppendieck", 
      number: "39-23-6423122"
    }
]

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

app.get('/api/persons', (request, response) => {
  response.end(JSON.stringify(persons))
  })
// http://localhost:3001/api/persons

app.get('/info', (request, response) => {
    const num = persons.length
    const now = new Date().toString();
    const resp = "Phonebook has info for " + num + " people <br/> " + now

    response.send(resp)
  })
// http://localhost:3001/info
  
const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)