export interface Player {
  name: string;
  email: string;
  scores: number;
  last_check_date: string;
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_channel: string;
  }
export interface PlayerData extends Player  {
  id: string;
}