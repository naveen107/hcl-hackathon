import express from 'express';
import { createProduct, getProducts,getProduct,updateProduct ,deleteProduct} from '../controllers/productController';
import { authMiddleware } from '../middleware/auth';

const router = express.Router();

router.post('/create',authMiddleware, createProduct);
router.get('/list',authMiddleware, getProducts);
router.get('/get',authMiddleware, getProduct);
router.put('/updatecatgory', authMiddleware,updateProduct)
router.delete('/deleteproduct',authMiddleware,deleteProduct)

export default router;
