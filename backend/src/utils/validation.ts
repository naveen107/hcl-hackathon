// Email validation
export const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  // Password validation - at least 8 chars, 1 uppercase, 1 lowercase, 1 number
  export const validatePassword = (password: string): boolean => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return passwordRegex.test(password);
  };
  
  // Request body validation for create user
  export const validateUserFields = (
   req:any
  ): string | null => {
    const {name,email,mobile,password}=req
    if (!name || !email || !mobile || !password) {
      return 'All fields are required';
    }
    if (!email || !password) {
        return 'Email and password are required' ;
    }
    if (!validateEmail(email)) {
      return 'Invalid email format';
    }
    if (!validatePassword(password)) {
      return 'Password must be at least 8 characters long and contain uppercase, lowercase, and numbers';
    }
    return null;
  };
  