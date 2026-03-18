import {Router} from 'express';
import { StatusCodes } from 'http-status-codes';

const UserRouter=Router();

UserRouter.get('/',(req,res)=>{
    return  res.status(StatusCodes.OK).json({
        message:"Hello Users"
    })
})

export default UserRouter;