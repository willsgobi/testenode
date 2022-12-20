import express from 'express'
import { Router } from 'express'
const app = express()

const router = Router()

router.get("/", (req, res) => {
    res.status(200).json({"success": true, message: "Sucesso!"})
})

app.use(router)

app.listen(4000, () => {
    console.log("rodando na porta 4000")
})
