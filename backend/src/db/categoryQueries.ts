import { supabase } from '../config/superbaseClient';

export const createCategoryQuery = async (req: any) => {
  try {
    const { name, description } = req;
    const { data, error } = await supabase
      .from('category')
      .insert([{ name, description }])
      .select('id');

    if (error) {
      console.error('DB Error creating category:', error);
      return { success: false, error: error.message };
    }

    return { success: true, data: data?.[0] };
  } catch (err: any) {
    console.error('Unexpected DB Error:', err);
    return { success: false, error: 'Internal server error while creating category.' };
  }
};

export const getCategoriesQuery = async () => {
  try {
    const { data, error } = await supabase
      .from('category')
      .select('*');
    if (error) {
      console.error('DB Error fetching categories:', error);
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (err: any) {
    console.error('Unexpected DB Error:', err);
    return { success: false, error: 'Internal server error while fetching categories.' };
  }
};

export const getCategoryQuery = async (id:number) => {
    try {
      const { data, error } = await supabase
        .from('category')
        .select('*')
        .eq('id',id);
  
      if (error) {
        console.error('DB Error fetching categories:', error);
        return { success: false, error: error.message };
      }
  
      return { success: true, data };
    } catch (err: any) {
      console.error('Unexpected DB Error:', err);
      return { success: false, error: 'Internal server error while fetching categories.' };
    }
  };

export const updateCategoryQuery = async (req: any) => {
  try {
    const { id, name, description } = req;
    const { data, error } = await supabase
      .from('category')
      .update({ name, description })
      .eq('id', id)
      .select('id');

    if (error) {
      console.error('DB Error updating category:', error);
      return { success: false, error: error.message };
    }

    return { success: true, data: data?.[0] };
  } catch (err: any) {
    console.error('Unexpected DB Error:', err);
    return { success: false, error: 'Internal server error while updating category.' };
  }
};

export const deleteCategoryQuery = async (id: number) => {
  try {
    const { error } = await supabase
      .from('category')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('DB Error deleting category:', error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (err: any) {
    console.error('Unexpected DB Error:', err);
    return { success: false, error: 'Internal server error while deleting category.' };
  }
};
