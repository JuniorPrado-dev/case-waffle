// src/@types/global.d.ts
declare global {
  interface TypeDataKCookies {
    key: string;
    value: string;
    expires?: number;
    path?:string;
    security?:boolean;
    sameSite?:boolean;
  }
}

// Para evitar que o TypeScript considere este arquivo como um módulo,
// você pode exportar algo vazio.
export { };
