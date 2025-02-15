import "dotenv/config"

import mongoose from 'mongoose'

async function dbConnect(): Promise<void> {
    const DB_URI = process.env.DB_URI as string
    await mongoose.connect(DB_URI)
    await mongoose?.connection?.db?.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

}

export default dbConnect