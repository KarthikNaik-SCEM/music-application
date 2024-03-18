import express from "express"
import connectToDB from "./connection.js"
import dotenv from "dotenv"
import route from "./routes/route.js"
import musicRoutes from "./routes/musicRoutes.js"
import bodyParser from "body-parser"
import cors from "cors"



dotenv.config()
const app = express()
const port = 3000

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

connectToDB(process.env.DB_USERNAME,process.env.DB_PASSWORD)

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.use("/",route)
app.use("/musicroutes",musicRoutes)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})