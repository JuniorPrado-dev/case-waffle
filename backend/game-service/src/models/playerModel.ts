export interface Player {
  name: string;
  email: string;
  scores: number;
  last_check_date: number;
  }
export interface PlayerData extends Player  {
  id: string;
}