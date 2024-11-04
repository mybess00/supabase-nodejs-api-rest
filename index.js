import express from "express"
import 'dotenv/config'
import { dataRouter } from "./routes/data.js"
import { rpcRouter } from "./routes/rpc.js"
import multer from "multer"

function startServer () {
    const { PORT } = process.env
    const app = express()
    const formParse = multer()
    
    app.use(express.json())
    app.use(formParse.any())

    app.use("/api/data", dataRouter)
    app.use("/api/rpc", rpcRouter)

    app.listen(PORT, () => console.log(`Server is running in port: http://localhost:${PORT}`))
}

startServer()