import React from 'react';
import * as S from './style';

const NotFound: React.FC = () => {
  return (
    <S.Container>
      <S.Title>Oops! Página não encontrada.</S.Title>
      <S.Message>
        Desculpe, mas a página que você está procurando não existe ou foi movida.
      </S.Message>
      <S.HomeButton href="/">Voltar para a Página Inicial</S.HomeButton>
    </S.Container>
  );
};

export default NotFound;
