const express = require('express')
const cors = require('cors')
const mysql = require('mysql2/promise')
const config = require('./config')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))


app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
  })

app.get('/v1dataga', async (req, res) => {
  try{
    const connection = await mysql.createConnection(config.db)
    const [result,] = await connection.execute('select * from v1dataga')

    if(!result) result=[]
    res.status(200).json(result)
  }catch(err){
    res.status(500).json({error: err.message})
  }
})

app.get('/v1datagan', async (req, res) => {
  try{
    const connection = await mysql.createConnection(config.db)
    const [result,] = await connection.execute('select * from v1datagan')

    if(!result) result=[]
    res.status(200).json(result)
  }catch(err){
    res.status(500).json({error: err.message})
  }
})

app.get('/v1datagas', async (req, res) => {
  try{
    const connection = await mysql.createConnection(config.db)
    const [result,] = await connection.execute('select * from v1datagas')

    if(!result) result=[]
    res.status(200).json(result)
  }catch(err){
    res.status(500).json({error: err.message})
  }
})

app.get('/v1datagm', async (req, res) => {
  try{
    const connection = await mysql.createConnection(config.db)
    const [result,] = await connection.execute('select * from v1datagm')

    if(!result) result=[]
    res.status(200).json(result)
  }catch(err){
    res.status(500).json({error: err.message})
  }
})

app.get('/v1datagmn', async (req, res) => {
  try{
    const connection = await mysql.createConnection(config.db)
    const [result,] = await connection.execute('select * from v1datagmn')

    if(!result) result=[]
    res.status(200).json(result)
  }catch(err){
    res.status(500).json({error: err.message})
  }
})

app.get('/v1datagms', async (req, res) => {
  try{
    const connection = await mysql.createConnection(config.db)
    const [result,] = await connection.execute('select * from v1datagms')

    if(!result) result=[]
    res.status(200).json(result)
  }catch(err){
    res.status(500).json({error: err.message})
  }
})
app.get('/v2data', async (req, res) => {
  try{
    const connection = await mysql.createConnection(config.db)
    const [result,] = await connection.execute('select * from v2data')

    if(!result) result=[]
    res.status(200).json(result)
  }catch(err){
    res.status(500).json({error: err.message})
  }
})

app.get('/v3data', async (req, res) => {
  try{
    const connection = await mysql.createConnection(config.db)
    const [result,] = await connection.execute('select * from v3data')

    if(!result) result=[]
    res.status(200).json(result)
  }catch(err){
    res.status(500).json({error: err.message})
  }
})

app.get('/v3datam', async (req, res) => {
  try{
    const connection = await mysql.createConnection(config.db)
    const [result,] = await connection.execute('select * from v3datam')

    if(!result) result=[]
    res.status(200).json(result)
  }catch(err){
    res.status(500).json({error: err.message})
  }
})

app.get('/v4data', async (req, res) => {
  try{
    const connection = await mysql.createConnection(config.db)
    const [result,] = await connection.execute('select * from v4data')

    if(!result) result=[]
    res.status(200).json(result)
  }catch(err){
    res.status(500).json({error: err.message})
  }
})

app.get('/V5data', async (req, res) => {
  try{
    const connection = await mysql.createConnection(config.db)
    const [result,] = await connection.execute('select * from v5data')

    if(!result) result=[]
    res.status(200).json(result)
  }catch(err){
    res.status(500).json({error: err.message})
  }
})

app.get('/v6data', async (req, res) => {
  try{
    const connection = await mysql.createConnection(config.db)
    const [result,] = await connection.execute('select * from v6data')

    if(!result) result=[]
    res.status(200).json(result)
  }catch(err){
    res.status(500).json({error: err.message})
  }
})
 
app.get('/V5data', async (req, res) => {
  try{
    const connection = await mysql.createConnection(config.db)
    const [result,] = await connection.execute('select * from v5data')

    if(!result) result=[]
    res.status(200).json(result)
  }catch(err){
    res.status(500).json({error: err.message})
  }
})

app.get('/v7data', async (req, res) => {
  try{
    const connection = await mysql.createConnection(config.db)
    const [result,] = await connection.execute('select * from v7data')

    if(!result) result=[]
    res.status(200).json(result)
  }catch(err){
    res.status(500).json({error: err.message})
  }
})

  const PORT = 3001
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
