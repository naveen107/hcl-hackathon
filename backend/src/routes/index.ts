import { Router } from 'express';
import userRoutes from './userRoute';
import categoryRoutes from './categoryRoute'
import productRoutes from './productRoute'
import subcategoryRoutes from './subcategoryRoute'

const router = Router();

// Mount routes
router.use('/user', userRoutes);
router.use('/category', categoryRoutes);
router.use('/products', productRoutes)
router.use('/subcategories', subcategoryRoutes)

export default router;
