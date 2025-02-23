import { PlayerData } from "./playerModel";

export interface Access {
  email: string;
  id_post?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_channel?: string;
}
export interface AccessData extends Access {
  id: string;
}
export interface InfoAccessGeneral {
  access:AccessData;
  player: PlayerData;
}