export interface Player {
  name: string;
  email: string;
  scores: number;
  last_check_date: string;
  }
export interface PlayerData extends Player  {
  id: string;
}