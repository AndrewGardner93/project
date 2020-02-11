const express = require('express')
const cors = require('cors')
const iconCtrl = require('./controllers/iconcontrollers') 


const app = express()
const PORT = 5000

app.use(express.json())
app.use(cors())

app.get('/api/icons', iconCtrl.getResults)

app.post('/api/icons', iconCtrl.highScore)

app.put('/api/icons', iconCtrl.resultName)

app.delete('/api/icons', iconCtrl.erase)

app.listen(PORT, () => console.log(`running on port ${PORT}`))