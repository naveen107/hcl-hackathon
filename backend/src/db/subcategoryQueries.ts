import { supabase } from '../config/superbaseClient';

// CREATE
export const createSubcategoryQuery = async (req: any) => {
  try {
    const { name, description,images, category_id } = req;
    const { data, error } = await supabase
      .from('sub_category')
      .insert([{ name, description,images, category_id }])
      .select('id');

    if (error) {
      console.error('DB Error creating subcategory:', error);
      return { success: false, error: error.message };
    }

    return { success: true, data: data?.[0] };
  } catch (err: any) {
    console.error('Unexpected DB Error:', err);
    return { success: false, error: 'Internal server error while creating subcategory.' };
  }
};

// READ - All
export const getSubcategoriesQuery = async () => {
  try {
    const { data, error } = await supabase
      .from('sub_category')
      .select('*');

    if (error) {
      console.error('DB Error fetching subcategories:', error);
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (err: any) {
    console.error('Unexpected DB Error:', err);
    return { success: false, error: 'Internal server error while fetching subcategories.' };
  }
};

// READ - Single
export const getSubcategoryQuery = async (id: number) => {
  try {
    const { data, error } = await supabase
      .from('sub_category')
      .select('*')
      .eq('id', id);

    if (error) {
      console.error('DB Error fetching subcategory:', error);
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (err: any) {
    console.error('Unexpected DB Error:', err);
    return { success: false, error: 'Internal server error while fetching subcategory.' };
  }
};

// READ - By Category ID
export const getSubcategoriesByCategoryQuery = async (category_id: number) => {
  try {
    const { data, error } = await supabase
      .from('sub_category')
      .select('*')
      .eq('category_id', category_id);

    if (error) {
      console.error('DB Error fetching subcategories by category:', error);
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (err: any) {
    console.error('Unexpected DB Error:', err);
    return { success: false, error: 'Internal server error while fetching subcategories by category.' };
  }
};

// UPDATE
export const updateSubcategoryQuery = async (req: any) => {
  try {
    const { id, name, description, category_id } = req;
    const { data, error } = await supabase
      .from('sub_category')
      .update({ name, description, category_id })
      .eq('id', id)
      .select('id');

    if (error) {
      console.error('DB Error updating subcategory:', error);
      return { success: false, error: error.message };
    }

    return { success: true, data: data?.[0] };
  } catch (err: any) {
    console.error('Unexpected DB Error:', err);
    return { success: false, error: 'Internal server error while updating subcategory.' };
  }
};

// DELETE
export const deleteSubcategoryQuery = async (id: number) => {
  try {
    const { error } = await supabase
      .from('sub_category')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('DB Error deleting subcategory:', error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (err: any) {
    console.error('Unexpected DB Error:', err);
    return { success: false, error: 'Internal server error while deleting subcategory.' };
  }
};
