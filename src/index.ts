import express from 'express'
import cors from 'cors'
import { router } from './routes'
import db from './config/mongo'

const app = express()
const POORT = process.env.PORT || 54699

app.use(express.json())
app.use(cors())
app.use(router)

db().then(() => "Connection db ready")

app.listen(POORT, () => {
    console.log("Server running on port" + POORT)
})