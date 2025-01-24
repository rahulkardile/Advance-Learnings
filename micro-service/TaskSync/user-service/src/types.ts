export interface CreateUserRequest {
    name: string;
    email: string;
    password: string;
  }
  
  export interface UpdateUserRequest {
    name?: string;
    email?: string;
  }
  
  export interface UserResponse {
    id: string;
    name: string;
    email: string;
  }
  