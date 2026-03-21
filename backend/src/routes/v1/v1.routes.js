import {Router} from 'express';

import UserRouter from './users.routes.js';
import workspaceRouter from './workspaces.js';
const V1router=Router();


V1router.use('/users',UserRouter)
V1router.use('/workspaces', workspaceRouter);
export default V1router;