import { Request, Response, Router } from "express";
import { getItem, getItems, postItem } from "../controller/item";

const router = Router()


router.get('/', (req: Request, res: Response) => {
    res.send({data: "ñema"})
})
router.get('/:id', getItem)
router.get('/', getItems)
router.post('/', postItem)

export {router}