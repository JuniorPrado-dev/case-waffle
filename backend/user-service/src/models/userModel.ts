enum userRole {
    ADMIN="admin",
    USER='user'
}

export interface User {
    name: string;
    email: string;
    password: string;
    role: userRole;
  }
  
export interface UserData {
    id: string;
    name: string;
    email: string;
    password: string;
    role: userRole;
  }

  export interface UserPayload {
    id: string;
    name: string;
    email: string;
    role: userRole;
  }