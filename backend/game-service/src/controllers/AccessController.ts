import { Request, Response } from 'express';
import { AppError } from '../middlewares/errorMiddleware';
import { AccessService } from '../services/AccessService';
import { Player } from '../models/playerModel';
import { Access } from '../models/AccessModel';


export class AccessController {
  private accessService: AccessService;

  constructor(accessService: AccessService) {
    this.accessService = accessService;
  }

  getAllAccess = async (req: Request, res: Response) => {
    try {
      const allAccess = await this.accessService.getAllAccess()
      res.status(200).json(allAccess);
    } catch (error) {
      console.log("AccessControllerERROR: Failed get all accesses. ", error);
      if (error instanceof AppError) {
        error;
      }
      throw new AppError('Failed to get all access', 500);
    }
  };

  newRegister = async (req: Request, res: Response) => {
    try {
      const player: Player = {
        email: req.body.email,
      }
      const access: Access = {
        email: req.body.email,
        id_post: req.body.id_post,
        utm_campaign: req.body.id_post || "",
        utm_channel: req.body.utm_channel || "",
        utm_medium: req.body.utm_medium || "",
        utm_source: req.body.utm_source || ""
      }
      const allAccess = await this.accessService.registerAccess(access, player)
      res.status(200).json(allAccess);
    } catch (error) {
      console.log("AccessControllerERROR: Failed get all accesses. ", error);
      if (error instanceof AppError) {
        error;
      }
      throw new AppError('Failed to get all access', 500);
    }


  }


}