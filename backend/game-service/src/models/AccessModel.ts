export interface Access {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_channel?: string;
  id_player: string;
}
export interface AccessData extends Access {
  id: string;
}