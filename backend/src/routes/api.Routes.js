import {Router} from 'express';

import V1router from './v1/v1.routes.js';

const router=Router();


router.use('/v1',V1router)
export default router;