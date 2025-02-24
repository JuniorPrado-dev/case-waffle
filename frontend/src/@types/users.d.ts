// src/@types/global.d.ts
declare global {
    interface TypeUserRequest {
        name: string;
        email: string;
        password: string;
        role: string;
    }
    
    export interface TypeUserLogin {
        email: string;
        password: string;
    }

    export interface TypeUser {
        id: string;
        name: string;
        email: string;
        role: string;
    }

}

// Para evitar que o TypeScript considere este arquivo como um módulo,
// você pode exportar algo vazio.
export { };
