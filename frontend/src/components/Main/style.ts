import styled from 'styled-components';
import { device } from "@/utils/sizeDevices";
import COLORS from '@/constants/colors';

// Contêiner principal com melhorias de responsividade e animação de entrada
export const Container = styled.div`
  @media ${device.mobileM} {
    display: none;
    background-color: ${COLORS.darkBlue};
    height: auto;
    padding: 5vw 0;
  }
`;

// Container para imagens com alinhamento e espaçamento aprimorado
export const ImagesContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: #f1f2f3;
  padding: 2vw 0;
  @media ${device.mobileM} {
    display: none;
    background-color: ${COLORS.darkBlue};
  }
  
`;

// Estilo para a imagem principal com ajuste de margem e tamanho para diferentes dispositivos
export const Image = styled.img`
  height: 26vw;
  margin: 0 3vw;

  @media ${device.mobileM} {
    display: none;
  }
`;

// Imagem principal, cobrindo a largura total do contêiner
export const MainImage = styled.img`
  width: 100%;
  margin: 0 3vw;

  @media ${device.mobileM} {
    display: none;
  }
`;

// Estilo para imagem alinhada à esquerda, com clip-path para um efeito de corte
export const ImageLeft = styled.img`
  float: left;
  margin-top: 5vw;
  margin-right: 50vw;
  height: 23vw;
  clip-path: polygon(0% 0%, 100% 0%, 100% 80%, 0% 80%);

  @media ${device.mobileM} {
    margin-left: 40vw;
    height: 65vw;
    width: 65vw;
    clip-path: none;
  }
`;

// Estilo para conteúdo à esquerda com organização de layout melhorada
export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 10px;

  @media ${device.mobileM} {
    margin: 0;
    display: none;
  }
`;

// Texto com links personalizados e melhor espaçamento
export const LinkText = styled.p`
  text-align: left;
  color: #011E49;
  font-size: 2.5vw;
  margin-top: -4vw;
  margin-right: 33vw;

  a {
    font-weight: bold;
    text-decoration: none;
    color: inherit;
  }

  b {
    font-weight: bold;
    color: #99BD3A;
  }

  @media ${device.mobileM} {
    display: none;
    margin: 0;
    width: 100%;
    font-size: 4vw;
  }
`;

// Texto na parte inferior, com tamanho de fonte fixo
export const BottomText = styled.p`
  font-size: 1rem;
  color: #555;
`;

// Texto centralizado com ajustes de responsividade
export const CenterText = styled.p`
  font-size: 2vw;
  color: #011E49;
  text-align: center;
  margin-top: 18vw;

  @media ${device.mobileM} {
    font-size: 3vw;
    width: 90vw;
    display: none;
    margin-top: 10vw;
  }
`;

// Animação de entrada para suavizar a transição
// @keyframes fadeIn {
//   from {
//     opacity: 0;
//   }
//   to {
//     opacity: 1;
//   }
// }
