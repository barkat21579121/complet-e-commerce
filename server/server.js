const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config();

const app = express();
app.use(express.json())
app.use(cors())
mongoose.connect(process.env.DB_URL).then(() => {
    console.log("database connected")
}).catch((err) => {
    console.log("error database connection", err)
})
const PORT = process.env.PORT || 8090
app.listen(PORT, () => {
    console.log(`app is Runing on port ${PORT}`)
})
