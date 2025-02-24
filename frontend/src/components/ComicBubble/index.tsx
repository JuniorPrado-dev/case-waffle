import React from 'react';
import * as S from "./style"
// Definindo a interface para as props do componente
interface ComicBubbleProps {
  imageUrl: string; // URL da imagem
  text: string;     // Texto que será exibido no balão
}

const ComicBubble: React.FC<ComicBubbleProps> = ({ imageUrl, text }) => {
  return (
    <S.Container>
      <S.Bubble>{text}</S.Bubble>
      <S.Image src={imageUrl} alt="Comic Image" />
    </S.Container>
  );
};

export default ComicBubble;