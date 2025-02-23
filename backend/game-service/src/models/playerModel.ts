export interface Player {
  email: string
}

export interface PlayerData extends Player  {
  id: string;
  scores: number;
  last_check_date: number;
}
export interface PlayerUpdate extends Player  {
  scores: number;
  last_check_date: number;
}