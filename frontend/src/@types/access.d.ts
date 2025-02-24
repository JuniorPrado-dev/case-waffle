// src/@types/global.d.ts
declare global {
  interface TypeAccess {
    email: string;
    id_post?: string;
    utm_source?: string;
    utm_medium?: string;
    utm_campaign?: string;
    utm_channel?: string;
    status?: string;
    created_at?: number;
  }
  interface TypeAccessData extends TypeAccess {
    id: string;
  }
  
  interface TypeInfoAccessGeneral {
    access: AccessData;
    player: PlayerData;
  }
}

// Para evitar que o TypeScript considere este arquivo como um módulo,
// você pode exportar algo vazio.
export { };
