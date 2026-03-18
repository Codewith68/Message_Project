import {Router} from 'express';

import UserRouter from './users.routes.js';

const V1router=Router();


V1router.use('/users',UserRouter)
export default V1router;