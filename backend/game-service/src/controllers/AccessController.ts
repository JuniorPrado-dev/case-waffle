import { NextFunction, Request, Response } from 'express';
import { AppError } from '../middlewares/errorMiddleware';
import { AccessService } from '../services/AccessService';
import { Player } from '../models/playerModel';
import { Access } from '../models/AccessModel';


export class AccessController {
  private accessService: AccessService;

  constructor(accessService: AccessService) {
    this.accessService = accessService;
  }

  getAllAccess = async (req: Request, res: Response,next:NextFunction) => {
    try {
      const allAccess = await this.accessService.getAllAccess()
      res.status(200).json(allAccess);
    } catch (error) {
      next(error);
    }
  };

  newRegister = async (req: Request, res: Response,next:NextFunction) => {
    
    console.log("req.body.data --> ",req.body.data)
    
    try {
      const player: Player = {
        email: req.body.data.email,
      }
      const access: Access = {
        email: req.body.data.email,
        id_post: req.body.data.id,
        utm_campaign: req.body.data.id_post || "",
        utm_channel: req.body.data.utm_channel || "",
        utm_medium: req.body.data.utm_medium || "",
        utm_source: req.body.data.utm_source || ""
      }
      const allAccess = await this.accessService.registerAccess(access, player)
      res.status(200).json(allAccess);
    } catch (error) {
      next(error)
    }
  }


}