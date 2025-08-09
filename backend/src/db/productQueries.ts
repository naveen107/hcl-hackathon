import { supabase } from '../config/superbaseClient';

// CREATE
export const createProductQuery = async (req: any) => {
  try {
    const {
      subcategory_id,
      name,
      title,
      description,
      available_counts,
      fast_moving = true,
      images
    } = req;

    const { data, error } = await supabase
      .from('products')
      .insert([
        {
          subcategory_id,
          name,
          title,
          description,
          available_counts,
          fast_moving,
          images
        }
      ])
      .select('id');

    if (error) {
      console.error('DB Error creating product:', error);
      return { success: false, error: error.message };
    }

    return { success: true, data: data?.[0] };
  } catch (err: any) {
    console.error('Unexpected DB Error:', err);
    return { success: false, error: 'Internal server error while creating product.' };
  }
};

// READ ALL
export const getProductsQuery = async () => {
  try {
    const { data, error } = await supabase
    .from('products')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(10);
  
    if (error) {
      console.error('DB Error fetching products:', error);
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (err: any) {
    console.error('Unexpected DB Error:', err);
    return { success: false, error: 'Internal server error while fetching products.' };
  }
};

// READ SINGLE
export const getProductQuery = async (id: number) => {
  try {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('id', id);

    if (error) {
      console.error('DB Error fetching product:', error);
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (err: any) {
    console.error('Unexpected DB Error:', err);
    return { success: false, error: 'Internal server error while fetching product.' };
  }
};

// UPDATE
export const updateProductQuery = async (req: any) => {
  try {
    const {
      id,
      subcategory_id,
      name,
      title,
      description,
      available_counts,
      fast_moving = true,
      images
    } = req;

    const { data, error } = await supabase
      .from('products')
      .update({
        subcategory_id,
        name,
        title,
        description,
        available_counts,
        fast_moving,
        images
      })
      .eq('id', id)
      .select('id');

    if (error) {
      console.error('DB Error updating product:', error);
      return { success: false, error: error.message };
    }

    return { success: true, data: data?.[0] };
  } catch (err: any) {
    console.error('Unexpected DB Error:', err);
    return { success: false, error: 'Internal server error while updating product.' };
  }
};

// DELETE
export const deleteProductQuery = async (id: number) => {
  try {
    const { error } = await supabase
      .from('products')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('DB Error deleting product:', error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (err: any) {
    console.error('Unexpected DB Error:', err);
    return { success: false, error: 'Internal server error while deleting product.' };
  }
};
