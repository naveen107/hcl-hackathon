import { Request, Response } from 'express';
import {
  createSubcategoryQuery,
  getSubcategoriesQuery,
  getSubcategoryQuery,
  updateSubcategoryQuery,
  deleteSubcategoryQuery,
  getSubcategoriesByCategoryQuery
} from '../db/subcategoryQueries';

// CREATE
export const createSubcategory = async (req: Request, res: Response) => {
  try {
    const { data, error } = await createSubcategoryQuery(req.body);

    if (error) {
      return res.status(400).json({ success: false, error });
    }

    return res.status(201).json({
      success: true,
      message: 'Subcategory created successfully',
      // data: data?.[0] || null
    });
  } catch (err: any) {
    return res.status(500).json({
      success: false,
      error: 'Internal server error while creating subcategory'
    });
  }
};

// READ - All subcategories
export const getSubcategories = async (req: Request, res: Response) => {
  try {
    const { data, error } = await getSubcategoriesQuery();

    if (error) {
      return res.status(400).json({ success: false, error });
    }
    return res.status(200).json({ success: true, data });
  } catch (err: any) {
    return res.status(500).json({
      success: false,
      error: 'Internal server error while fetching subcategories'
    });
  }
};

// READ - Single subcategory
export const getSubcategory = async (req: Request, res: Response) => {
  try {
    const { category_id } = req.query;

    if (!category_id) {
      return res.status(400).json({ success: false, error: 'Subcategory ID is required' });
    }

    const { data, error } = await getSubcategoriesByCategoryQuery(Number(category_id));

    if (error) {
      return res.status(400).json({ success: false, error });
    }

    return res.status(200).json({ success: true, data });
  } catch (err: any) {
    return res.status(500).json({
      success: false,
      error: 'Internal server error while fetching subcategory'
    });
  }
};

// UPDATE
export const updateSubcategory = async (req: Request, res: Response) => {
  try {
    const { id } = req.query;

    if (!id) {
      return res.status(400).json({ success: false, error: 'Subcategory ID is required' });
    }

    const { error } = await updateSubcategoryQuery(req.body);

    if (error) {
      return res.status(400).json({ success: false, error });
    }

    return res.status(200).json({
      success: true,
      message: 'Subcategory updated successfully'
    });
  } catch (err: any) {
    return res.status(500).json({
      success: false,
      error: 'Internal server error while updating subcategory'
    });
  }
};

// DELETE
export const deleteSubcategory = async (req: Request, res: Response) => {
  try {
    const { id } = req.query;

    if (!id) {
      return res.status(400).json({ success: false, error: 'Subcategory ID is required' });
    }

    const { error } = await deleteSubcategoryQuery(Number(id));

    if (error) {
      return res.status(400).json({ success: false, error });
    }

    return res.status(200).json({
      success: true,
      message: 'Subcategory deleted successfully'
    });
  } catch (err: any) {
    return res.status(500).json({
      success: false,
      error: 'Internal server error while deleting subcategory'
    });
  }
};
