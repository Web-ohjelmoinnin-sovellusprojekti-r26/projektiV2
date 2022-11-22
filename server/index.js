const express = require('express')
const cors = require('cors')
const mysql = require('mysql2/promise')
const config = require('./config')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

let notes = [
  {
    id: 1,
    content: "HTML is easy",
    date: "2022-01-10T17:30:31.098Z",
    important: true
  },
  {
    id: 2,
    content: "Browser can execute only Javascript",
    date: "2022-01-10T18:39:34.091Z",
    important: false
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    date: "2022-01-10T19:20:14.298Z",
    important: true
  }
]

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
  })

app.get('/v1data', async (req, res) => {
  try{
    const connection = await mysql.createConnection(config.db)
    const [result,] = await connection.execute('select * from v1data')

    if(!result) result=[]
    res.status(200).json(result)
  }catch(err){
    res.status(500).json({error: err.message})
  }
})
  
  app.get('/api/notes', (req, res) => {
    res.json(notes)
  })
  
  const PORT = 3001
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })


  app.post('/api/notes', (request, response) => {
    const note = request.body
    console.log(note)
    response.json(note)
  })
 