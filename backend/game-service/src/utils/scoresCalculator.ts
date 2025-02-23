import { Player, PlayerUpdate } from "../models/playerModel";
  
export  function calculateNewScore(player: PlayerUpdate, currentDate: number): PlayerUpdate {
    const ONE_DAY = 24 * 60 * 60 * 1000; // Um dia em milissegundos
    const lastCheckDate = new Date(player.last_check_date);
    const currentCheckDate = new Date(currentDate);
  
    // Verifica se é domingo (domingo = 0 no objeto Date)
    if (currentCheckDate.getDay() === 0) {
      return {
        ...player,
        last_check_date: currentDate, // Atualiza a data de verificação
      };
    }
  
    // Calcula a diferença em dias entre a última verificação e a data atual
    const diffDays = Math.floor(
      (currentCheckDate.getTime() - lastCheckDate.getTime()) / ONE_DAY
    );
  
    let newScores = player.scores;
  
    // Se for segunda-feira, permite uma diferença de até 2 dias (considerando domingo)
    if (currentCheckDate.getDay() === 1 && diffDays <= 2) {
      newScores += 1;
    } else if (diffDays === 1) {
      // Acesso em dias consecutivos: incrementa a pontuação
      newScores += 1;
    } else if (diffDays > 1) {
      // Acesso após mais de um dia: reinicia a pontuação para 1
      newScores = 1;
    }
  
    return {
      ...player,
      scores: newScores,
      last_check_date: currentDate, // Atualiza a data de verificação
    };
  }