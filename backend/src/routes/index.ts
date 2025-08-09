import { Router } from 'express';
import userRoutes from './userRoute';
import categoryRoutes from './categoryRoute'
import productRoutes from './productRoute'

const router = Router();

// Mount routes
router.use('/user', userRoutes);
router.use('/category', categoryRoutes);
router.use('/products', productRoutes)

export default router;
