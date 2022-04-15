import express from "express"
import studentRouter from "./routes/students"

const app = express()
app.use(express.json()) //middleware que transforma la req.body a un json

const PORT = process.env.PORT  || 8000

app.get("/ping", (_req, res) => {
    console.log("ping!!!")
    res.send("pong")
})
 
app.use("/api/students", studentRouter)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`) 
})  