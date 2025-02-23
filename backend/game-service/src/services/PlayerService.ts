import { AppError } from '../middlewares/errorMiddleware';
import { PlayerRepository } from '../repositories/PlayerRepository';
import { Player, PlayerData } from '../models/playerModel';
import { IdGenerator } from '../utils/idGenerator';
import { calculateNewScore } from '../utils/scoresCalculator';

export class PlayerService {
  private playerRepository: PlayerRepository;

  constructor(playerRepository: PlayerRepository) {
    this.playerRepository = playerRepository;
  }

  registerPlayer = async (player: Player): Promise<Player | undefined> => {
    try {
      //search player
      const existingPlayer = await this.playerRepository.findPlayerByEmail(player.email);
      if (existingPlayer) {
        throw new AppError("Player already exists", 401)
      } else {
        const id = IdGenerator.generateId()
        player.last_check_date = Date.now()
        player.scores = 1
        return await this.playerRepository.createPlayer({ id, ...player });
      }
    } catch (error) {
      throw new AppError("ErrorPlayerService on creating player", 400)
    }
  };

  updatePlayer = async (player: Player): Promise<PlayerData | undefined> => {
    try {
      const existingPlayer = await this.playerRepository.findPlayerByEmail(player.email);
      if (!existingPlayer) {
        throw new AppError("Player don't exists", 401)
      } else {
        let updatePayer: Player = {
          email: player.email.length > 0 ? player.email : existingPlayer.email,
          name: player.name.length > 0 ? player.name : existingPlayer.name,
          scores: player.scores,
          last_check_date: player.last_check_date
        }

        updatePayer = calculateNewScore(updatePayer, Date.now())
        return await this.playerRepository.updatePlayerByEmail(player);
      }
    } catch (error) {
      throw new AppError("ErrorPlayerService on creating player", 400)
    }
  };

  getPlayerByEmail = async (email: string): Promise<PlayerData | undefined> => {
    try {
      const player = await this.playerRepository.findPlayerByEmail(email);
      if (!player) {
        throw new AppError('player not found', 404);
      }
      return player;

    } catch (error) {
      console.log("ErrorplayerService ongetplayerById", error)
      throw new AppError("ErrorplayerService ongetplayerById", 400)
    }
  };
  
  getAllPlayers = async (): Promise<PlayerData[] | undefined> => {
    try {
      const players = await this.playerRepository.getAllPlayers();
      if (!players || players.length === 0) {
        throw new AppError('players not found', 404);
      }
      return players;

    } catch (error) {
      console.log("Error playerService on getAllPlayerById", error)
      throw new AppError("Error playerService on getAllPlayerById", 400)
    }
  };
}