import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({ origin: process.env.CORS_ORIGIN }))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))

app.use(cookieParser())

import userRouter from "./routes/user.routes.js"
app.get("/", (req, res) => {
    res.send("Hello World")
})
app.use("/api/users", userRouter)

export { app }