import { Request, Response } from 'express';
import { AppError } from '../middlewares/errorMiddleware';
import { PlayerService } from '../services/PlayerService';

export class PlayerController {
  private playerService: PlayerService;
  
  constructor(PlayerService: PlayerService) {
    this.playerService = PlayerService;
  }
  
  getAllPlayers = async (req: Request, res: Response) => {
    try {
      const allPlayers = await this.playerService.getAllPlayers()
      res.status(200).json(allPlayers);
    } catch (error) {
      console.log("UseControllerERROR: Failed to register Player. ",error);
      if (error instanceof AppError) {
         error;
      }
      throw new AppError('Failed to register Player', 500);
    }
  };

  getPayerByEmail = async (req: Request, res: Response) => {
    try {
      const email = req.params.email
      const player = this.playerService.getPlayerByEmail(email)
      res.status(200).json(player);
    } catch (error) {
      console.log("UseControllerERROR: Failed to register Player. ",error);
      if (error instanceof AppError) {
         error;
      }
      throw new AppError('Failed to register Player', 500);
    }
  };
 
  updatePayer = async (req: Request, res: Response) => {
    try {

      const player = this.playerService.updatePlayer({...req.body})
      res.status(200).json(player);
    } catch (error) {
      console.log("UseControllerERROR: Failed to register Player. ",error);
      if (error instanceof AppError) {
         error;
      }
      throw new AppError('Failed to register Player', 500);
    }
  };
}