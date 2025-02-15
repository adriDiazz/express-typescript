
import { Error } from "mongoose";
import { Car } from "../interfaces/car.interface"
import ItemModel from "../model/item.model"

const saveItem = async (item: Car) => {
    try {
        const responseInsert = await ItemModel.create(item)
        return responseInsert;
    } catch (error) {
        throw new Error((error as Error).message);
    }
}



export {saveItem}