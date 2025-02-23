import { AppError } from '../middlewares/errorMiddleware';
import { PlayerRepository } from '../repositories/PlayerRepository';
import { Player } from '../models/playerModel';

export class PlayerService {
  private playerRepository: PlayerRepository;
  
  constructor(playerRepository: PlayerRepository) {
    this.playerRepository = playerRepository;
  }
  
  registerPlayer = async (player: Player): Promise<Player | undefined> => {
    try {
      const existingPlayer = await this.playerRepository.findPlayerByEmail(player.email);
      if (existingPlayer) {
        this.playerRepository.updatePlayerByEmail(existingPlayer)
      }else{
        return await this.playerRepository.createPlayer(player);
      }
    } catch (error) {
      throw new AppError("ErrorPlayerService on creating player", 400)
    }
  };
  // getPlayerByEmail = async (id:string): Promise<Player[] | undefined> => {
  //   try {
  //     const player = await this.playerRepository.getUserById;
  //     if (!player) {
  //       throw new AppError('player not found', 404);
  //     }
  //     return player;
  //   } catch (error) {
  //     console.log("ErrorplayerService ongetplayerById",error)
  //     throw new AppError("ErrorplayerService ongetplayerById", 400)
  //   }
  // };

  // getAllplayers = async (): Promise<player[] | undefined> => {
  //   try {
  //     const allplayers = await this.playerRepository.getAllplayers();
  //     if (!allplayers || allplayers.length === 0) {
  //       throw new AppError('players not found', 404);
  //     }
  //     return allplayers;
  //   } catch (error) {
  //     console.log("ErrorplayerService on getAllplayers",error)
  //     throw new AppError("ErrorplayerService on getAllplayers", 400)
  //   }
  // };


  // loginplayer = async (email: string, password: string): Promise<string | null> => {
  //   const player = await this.playerRepository.findplayerByEmail(email);
  //   if (!player) {
  //     throw new AppError('player not found', 404);
  //   }

  //   const isPasswordValid = await comparePasswords(password, player.password);
  //   if (!isPasswordValid) {
  //     throw new AppError('Invalid credentials', 401);
  //   }

  //   const playerPayload: playerPayload = {
  //     id: player.id,
  //     name: player.name,
  //     email: player.email,
  //     role: player.role,
  //   }
  //   return generateToken(playerPayload);
  // };
}