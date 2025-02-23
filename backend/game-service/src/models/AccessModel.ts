import { PlayerData } from "./playerModel";

export interface Access {
  id_post: string;
  email: string;
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