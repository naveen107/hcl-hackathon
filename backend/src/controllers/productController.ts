import { Request, Response } from 'express';
import {
  createProductQuery,
  getProductsQuery,
  getProductQuery,
  updateProductQuery,
  deleteProductQuery
} from '../db/productQueries';

// CREATE
export const createProduct = async (req: Request, res: Response) => {
  try {
    const { data, error } = await createProductQuery(req.body);

    if (error) {
      return res.status(400).json({ success: false, error });
    }

    return res.status(201).json({
      success: true,
      message: 'Product created successfully',
      // data: data?.[0] || null
    });
  } catch (err: any) {
    return res.status(500).json({
      success: false,
      error: 'Internal server error while creating product'
    });
  }
};

// READ - All Products
export const getProducts = async (req: Request, res: Response) => {
  try {
    const { data, error } = await getProductsQuery();

    if (error) {
      return res.status(400).json({ success: false, error });
    }
    return res.status(200).json({ success: true, data });
  } catch (err: any) {
    return res.status(500).json({
      success: false,
      error: 'Internal server error while fetching products'
    });
  }
};

// READ - Single Product
export const getProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.query;

    if (!id) {
      return res.status(400).json({ success: false, error: 'Product ID is required' });
    }

    const { data, error } = await getProductQuery(Number(id));

    if (error) {
      return res.status(400).json({ success: false, error });
    }

    return res.status(200).json({ success: true, data });
  } catch (err: any) {
    return res.status(500).json({
      success: false,
      error: 'Internal server error while fetching product'
    });
  }
};

// UPDATE
export const updateProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.query;

    if (!id) {
      return res.status(400).json({ success: false, error: 'Product ID is required' });
    }

    const { error } = await updateProductQuery(req.body);

    if (error) {
      return res.status(400).json({ success: false, error });
    }

    return res.status(200).json({
      success: true,
      message: 'Product updated successfully'
    });
  } catch (err: any) {
    return res.status(500).json({
      success: false,
      error: 'Internal server error while updating product'
    });
  }
};

// DELETE
export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.query;

    if (!id) {
      return res.status(400).json({ success: false, error: 'Product ID is required' });
    }

    const { error } = await deleteProductQuery(Number(id));

    if (error) {
      return res.status(400).json({ success: false, error });
    }

    return res.status(200).json({
      success: true,
      message: 'Product deleted successfully'
    });
  } catch (err: any) {
    return res.status(500).json({
      success: false,
      error: 'Internal server error while deleting product'
    });
  }
};
