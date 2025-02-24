// src/@types/global.d.ts
declare global {
  interface TypePlayer {
    email: string
  }

  interface TypePlayerData extends TypePlayer {
    id: string;
    scores: number;
    last_check_date: number;
  }
  interface TypePlayerUpdate extends TypePlayer {
    scores: number;
    last_check_date: number;
  }
}

// Para evitar que o TypeScript considere este arquivo como um módulo,
// você pode exportar algo vazio.
export { };
