import { PlayerRepository } from './../repositories/PlayerRepository';
import { AppError } from '../middlewares/errorMiddleware';
import { Player, PlayerData, PlayerUpdate } from '../models/playerModel';
import { IdGenerator } from '../utils/idGenerator';
import { calculateNewScore } from '../utils/scoresCalculator';
import { AccessRepository } from '../repositories/AccessRepository';
import { Access, AccessData, InfoAccessGeneral } from '../models/AccessModel';
import { PlayerService } from './PlayerService';

export class AccessService {
    private accessRepository: AccessRepository;
    private playerService: PlayerService;
    private playerRepository: PlayerRepository;

    constructor(accessRepository: AccessRepository, playerService: PlayerService, playerRepository: PlayerRepository) {
        this.playerService = playerService;
        this.playerRepository = playerRepository;
        this.accessRepository = accessRepository;
    }

    registerAccess = async (access: Access, player: Player): Promise<InfoAccessGeneral | undefined> => {
        try {
            //search Access
            const existingPlayer = await this.playerRepository.findPlayerByEmail(player.email);
            //update player and add new register
            if (existingPlayer) {
                const newInfoPlayer: PlayerUpdate = calculateNewScore({
                    email: existingPlayer.email,
                    scores: existingPlayer.scores,
                    last_check_date: existingPlayer.last_check_date
                }, Date.now())

                const updatePlayer = await this.playerService.updatePlayer(newInfoPlayer)

                if (updatePlayer) {
                    const id = IdGenerator.generateId()
                    const newAccess = await this.accessRepository.registerAccess({ id, ...access })
                    if (newAccess) {
                        const generalAccess: InfoAccessGeneral = {
                            access: newAccess,
                            player: updatePlayer
                        }
                        return generalAccess
                    }
                    throw new AppError("ErrorAccessService on creating Access", 400)
                }
                //add new player and add new register
            } else {
                const addPlayer = await this.playerService.registerPlayer(player)
                if (addPlayer) {
                    const id = IdGenerator.generateId()
                    const newAccess = await this.accessRepository.registerAccess({ id, ...access })
                    if (newAccess) {
                        const generalAccess: InfoAccessGeneral = {
                            access: newAccess,
                            player: addPlayer
                        }
                        return generalAccess
                    }
                    throw new AppError("ErrorAccessService on creating Access", 400)
                } else {
                    throw new AppError("ErrorAccessService on creating Access", 400)
                }
            }
        } catch (error) {
            throw new AppError("ErrorAccessService on creating Access", 400)
        }
    };

    getAllAccess = async (): Promise<AccessData[] | undefined> => {
        try {
            const allAccess = await this.accessRepository.getAllAccesses();
            if (!allAccess || allAccess.length === 0) {
                throw new AppError('players not found', 404);
            }
            return allAccess;

        } catch (error) {
            console.log("Error playerService on getAllAccess", error)
            throw new AppError("Error playerService on getAllAccessById", 400)
        }
    };
}