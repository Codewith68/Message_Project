import {Router} from 'express';

import { signIn, signUp } from '../../controllers/user.controller.js';
import { userSignInSchema, userSignUpSchema } from '../../validators/userSchema.validator.js';
import { validate } from '../../validators/zod.validator.js';

const UserRouter=Router();

UserRouter.post("/signup",validate(userSignUpSchema),signUp)
UserRouter.post("/signin",validate(userSignInSchema),signIn)

export default UserRouter;