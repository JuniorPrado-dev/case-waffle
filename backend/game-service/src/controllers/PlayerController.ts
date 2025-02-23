import { Request, Response } from 'express';
import { AppError } from '../middlewares/errorMiddleware';
import { PlayerService } from '../services/PlayerService';

export class PlayerController {
  private PlayerService: PlayerService;
  
  constructor(PlayerService: PlayerService) {
    this.PlayerService = PlayerService;
  }
  
  register = async (req: Request, res: Response) => {
    try {
      const Player = await this.PlayerService.registerPlayer(req.body);
      res.status(200).json(Player);
    } catch (error) {
      console.log("UseControllerERROR: Failed to register Player. ",error);
      if (error instanceof AppError) {
         error;
      }
      throw new AppError('Failed to register Player', 500);
    }
  };

  // getPlayerById = async (req: Request, res: Response) => {
  //   try {
  //     const id = req.params.id;
  //     if (!id){
  //       throw new AppError('Player id is required !',404);
  //     }
  //     const allPlayers = await this.PlayerService.getPlayerById(id);
  //     res.status(200).json(allPlayers);
  //   } catch (error) {
  //     console.log("UseControllerERROR: Failed to get all Players. ",error);
  //     if (error instanceof AppError) {
  //        error;
  //       }
  //     throw new AppError('Failed to get all Players', 500);
  //   }
  // };

  // getAllPlayers = async (req: Request, res: Response) => {
  //   try {
  //     const allPlayers = await this.PlayerService.getAllPlayers();
  //     res.status(200).json(allPlayers);
  //   } catch (error) {
  //     console.log("UseControllerERROR: Failed to get all Players. ",error);
  //     if (error instanceof AppError) {
  //        error;
  //     }
  //     throw new AppError('Failed to get all Players', 500);
  //   }
  // };
  
  // login = async (req: Request, res: Response) => {
  //   try {
  //     const token = await this.PlayerService.loginPlayer(req.body.email, req.body.password);
  //     if (token) {
  //       res.json({ token });
  //     } else {
  //       throw new AppError('Invalid credentials', 401);
  //     }
  //   } catch (error) {
  //     if (error instanceof AppError) {
  //       throw error;
  //     }
  //     throw new AppError('Failed to login', 500);
  //   }
  // };
}