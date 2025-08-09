import express from 'express';
import { 
  createSubcategory, 
  getSubcategories, 
  getSubcategory, 
  updateSubcategory, 
  deleteSubcategory 
} from '../controllers/subcategoryController';
import { authMiddleware } from '../middleware/auth';

const router = express.Router();

// Create new subcategory
router.post('/create', authMiddleware, createSubcategory);

// List all subcategories
router.get('/list',authMiddleware, getSubcategories);

// Get single subcategory
router.get('/get', authMiddleware, getSubcategory);

// Update subcategory
router.put('/update', authMiddleware, updateSubcategory);

// Delete subcategory
router.delete('/delete', authMiddleware, deleteSubcategory);

export default router;
