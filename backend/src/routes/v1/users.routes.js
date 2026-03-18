import {Router} from 'express';

import { signUp } from '../../controllers/user.controller.js';
import { userSignUpSchema } from '../../validators/userSchema.validator.js';
import { validate } from '../../validators/zod.validator.js';

const UserRouter=Router();

UserRouter.post("/signup",validate(userSignUpSchema),signUp)

export default UserRouter;