import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle"
import { saveItem } from "../service/item"
 

const getItem = (req:Request, res:Response) => {
    try {

    } catch (error) {
        handleHttp(res, 'ERROR_GET_ITEM')
    }
}

const getItems = (req:Request, res:Response) => { try {
        
    } catch (error) {
        handleHttp(res, 'ERROR_GET_ITEMS')
    }}

const postItem = async (req:Request, res:Response) => { 
    try {
        const {body} = req
        const insertItem = await saveItem(body)

        res.status(201).json(insertItem)

    } catch (error) {
        handleHttp(res, 'ERROR_POST_ITEM')
    }}


export { getItem, getItems,postItem }