import { supabase } from '../config/superbaseClient';

export const createUser = async (
req:any,
) => {
  try {
    const {name,email,mobile,hashedPassword}=req
    const { data, error } = await supabase
      .from('user')
      .insert([
        {
          name,
          mobile,
          email,
          is_agent: false,
          is_admin: false,
          password: hashedPassword,
        }
      ])
      .select('id');

    if (error) {
      console.error('DB Error creating user:', error);
      return { success: false, error: error.message };
    }

    return { success: true, data: data?.[0] };
  } catch (err: any) {
    console.error('Unexpected DB Error:', err);
    return { success: false, error: 'Internal server error while creating user.' };
  }
};


export const LoginUser = async (req: any) => {
  try {
    const { emailOrMobile, password } = req;

    // Fetch user by email  with is_agent=false & is_admin=false
    const { data, error } = await supabase
      .from('user')
      .select('*')
      .or(`email.eq.${emailOrMobile}`)
      .eq('is_agent', false)
      .eq('is_admin', false)
      .limit(1);

    if (error) {
      console.error('DB Error fetching user:', error);
      return { success: false, error: error.message };
    }

    const user = data?.[0];
    if (!user) {
      return { success: false, error: 'User not found.' };
    }

    return { success: true, data: user };
  } catch (err: any) {
    console.error('Unexpected DB Error:', err);
    return { success: false, error: 'Internal server error while logging in.' };
  }
};
