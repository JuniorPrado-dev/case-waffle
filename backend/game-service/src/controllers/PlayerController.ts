import { NextFunction, Request, Response } from 'express';
import { AppError } from '../middlewares/errorMiddleware';
import { PlayerService } from '../services/PlayerService';

export class PlayerController {
  private playerService: PlayerService;

  constructor(PlayerService: PlayerService) {
    this.playerService = PlayerService;
  }

  getAllPlayers = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const allPlayers = await this.playerService.getAllPlayers()
      res.status(200).json(allPlayers);
    } catch (error) {
      next(error);
    }
  };

  getPayerByEmail = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const email = req.params.email
      const player = this.playerService.getPlayerByEmail(email)
      res.status(200).json(player);
    } catch (error) {
      next(error);
    }
  };

  updatePayer = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const player = this.playerService.updatePlayer({ ...req.body })
      res.status(200).json(player);
    } catch (error) {
      next(error);
    }
  };
}