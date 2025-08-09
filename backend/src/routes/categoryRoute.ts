import express from 'express';
import { createCategory, getCategories,updateCategory ,getCategory,deleteCategory} from '../controllers/categoryController';
import { authMiddleware } from '../middleware/auth';

const router = express.Router();

router.post('/create',authMiddleware, createCategory);
router.get('/get',authMiddleware, getCategory);
router.get('/get',authMiddleware, getCategories);
router.put('/update', authMiddleware,updateCategory)
router.delete('/delete',authMiddleware,deleteCategory)

export default router;
