import {z} from 'zod';

export const userSignUpSchema = z.object({
    userName: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(8),
})