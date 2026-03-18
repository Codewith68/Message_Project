import mongoose from 'mongoose';

import { DEV_DB_URI,NODE_ENV,PROD_DB_URI } from './server.config.js';


export const connectDB=async()=>{
    try {
        if(NODE_ENV==='development'){
            await mongoose.connect(DEV_DB_URI)
        }
        else if(NODE_ENV==='production'){
            await mongoose.connect(PROD_DB_URI)
        }
        console.log(`Connected to database ${NODE_ENV}`)
    } catch (error) {
        console.log("Error connecting to database",error)
    }
}