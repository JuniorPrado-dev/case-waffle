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

  getAllAccess = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const allAccess = await this.accessService.getAllAccess()
      res.status(200).json(allAccess);
    } catch (error) {
      next(error);
    }
  };

  newRegister = async (req: Request, res: Response, next: NextFunction) => {

    console.log("req.body.data --> ", req.body.data)
    console.log("req.body.params --> ", req.params.email)
    console.log("req.body.params --> ", req.params.id)

    try {
      const dateString = req.body.data.created_at
      const date = dateString ? new Date(dateString):null; // Converte a string para um objeto Date
      const timestamp = date? date.getTime():Date.now();  // Obtém o timestamp em milissegundos

      console.log(timestamp); // Exibe o timestamp
      const player: Player = {
        email: req.body.data.email,
      }
      const access: Access = {
        email: req.body.data.email,
        id_post: req.body.data.id,
      status: req.body.data.status || "",
        utm_campaign: req.body.data.id_post || "",
        utm_channel: req.body.data.utm_channel || "",
        utm_medium: req.body.data.utm_medium || "",
        utm_source: req.body.data.utm_source || "",
        created_at: timestamp,
      }
      const allAccess = await this.accessService.registerAccess(access, player)
      res.status(200).json(allAccess);
    } catch (error) {
      next(error)
    }
  }


}