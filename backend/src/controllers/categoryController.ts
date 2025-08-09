import { Request, Response } from 'express';
import {
  createCategoryQuery,
  getCategoriesQuery,
  updateCategoryQuery,
  deleteCategoryQuery,
  getCategoryQuery
} from '../db/categoryQueries';

// CREATE
export const createCategory = async (req: Request, res: Response) => {
  try {
    const { data, error } = await createCategoryQuery(req.body);

    if (error) {
      return res.status(400).json({ success: false, error: error });
    }

    return res.status(201).json({
      success: true,
      message: 'Category created successfully',
    //   data: data?.[0] || null
    });
  } catch (err: any) {
    return res.status(500).json({
      success: false,
      error: 'Internal server error while creating category'
    });
  }
};

// READAll categories
export const getCategories = async (req: Request, res: Response) => {
  try {
    const { data, error } = await getCategoriesQuery();

    if (error) {
      return res.status(400).json({ success: false, error: error });
    }
    return res.status(200).json({ success: true, data });
  } catch (err: any) {
    return res.status(500).json({
      success: false,
      error: 'Internal server error while fetching categories'
    });
  }
};

export const getCategory = async (req: Request, res: Response) => {
    try {
        const { id } = req.query;

    if (!id) {
      return res.status(400).json({ success: false, error: 'Category ID is required' });
    }
      const { data, error } = await getCategoryQuery(Number(id));
  
      if (error) {
        return res.status(400).json({ success: false, error: error });
      }
  
      return res.status(200).json({ success: true, data });
    } catch (err: any) {
      return res.status(500).json({
        success: false,
        error: 'Internal server error while fetching categories'
      });
    }
  };

// UPDATE
export const updateCategory = async (req: Request, res: Response) => {
  try {
    const { id } = req.query;

    if (!id) {
      return res.status(400).json({ success: false, error: 'Category ID is required' });
    }

    const { error } = await updateCategoryQuery( req.body);

    if (error) {
      return res.status(400).json({ success: false, error: error });
    }

    return res.status(200).json({
      success: true,
      message: 'Category updated successfully'
    });
  } catch (err: any) {
    return res.status(500).json({
      success: false,
      error: 'Internal server error while updating category'
    });
  }
};

// DELETE
export const deleteCategory = async (req: Request, res: Response) => {
  try {
    const { id } = req.query;

    if (!id) {
      return res.status(400).json({ success: false, error: 'Category ID is required' });
    }

    const { error } = await deleteCategoryQuery(Number(id));

    if (error) {
      return res.status(400).json({ success: false, error: error });
    }

    return res.status(200).json({
      success: true,
      message: 'Category deleted successfully'
    });
  } catch (err: any) {
    return res.status(500).json({
      success: false,
      error: 'Internal server error while deleting category'
    });
  }
};
