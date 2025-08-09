import express from 'express';
import { createProduct, getProducts,getProduct,updateProduct ,deleteProduct, searchProducts, addProductIndex} from '../controllers/productController';
import { authMiddleware } from '../middleware/auth';

const router = express.Router();

router.post('/create',authMiddleware, createProduct);
router.get('/list', getProducts);
router.get('/get',authMiddleware, getProduct);
router.put('/updatecatgory', authMiddleware,updateProduct)
router.delete('/deleteproduct',authMiddleware,deleteProduct)
router.get('/search', searchProducts); 
router.post('/add-index', addProductIndex); // For Algolia search


export default router;
