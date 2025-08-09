import { Request, Response } from 'express';
import { validateUserFields } from '../utils/validation';
import { hashPassword, comparePassword } from '../utils/passwordUtils';
import { generateToken } from '../utils/tokenUtils';
import { createUser, LoginUser } from '../db/userQueries';

export const registerUser = async (req: Request, res: Response): Promise<void> => {
    try {

        // Validation
        await validateUserFields(req.body)

        // Hash password
        const hashedPassword = await hashPassword(req.body.password);
        req.body.hashedPassword=hashedPassword
        // Insert user
        const result = await createUser(req.body);

        if (result.error) {
            res.status(400).json({ error: result.error });
            return
        }

        res.status(201).json({
            message: 'User registered successfully',
            userId: result?.data?.id
        });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const loginUser = async (req: Request, res: Response): Promise<void> => {
    try {

        await validateUserFields(req.body)
        // Get user
        const { data: user } =  await LoginUser(req.body);
        // Token
        const token = generateToken(user.id as number);
        res.status(200).json({
            message: 'Login successful',
            token,
            user: {
                id: user.id,
                name: user.name,
                email: user.email
            }
        });
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

