export interface User {
    id?: number;
    name: string;
    email: string;
    password: string;
    is_agent:boolean;
    is_admin:boolean;
  }