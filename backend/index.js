import express from "express"
import connectToDB from "./connection.js"
import dotenv from "dotenv"

dotenv.config()
const app = express()
const port = 3000

connectToDB(process.env.DB_USERNAME,process.env.DB_PASSWORD)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})