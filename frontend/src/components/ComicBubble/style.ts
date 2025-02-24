import { device } from '@/utils/sizeDevices';
import styled from 'styled-components';

// Estilo do container principal
export const Container = styled.div`
  position: relative;
  display: inline-block;
  height: 15vw;
  width: 40vw;
  @media ${device.mobileM} {
    top:40vh ;
    height: auto;
    width: 80vw;
    }
    `;

// Estilo da imagem
export const Image = styled.img`
  display: block;
  margin-top: 8vw;
  width: 100%;
  max-width: 100vw; // Ajuste o tamanho máximo da imagem conforme necessário
  height: auto;
  @media ${device.mobileM} {
    }
    `;

// Estilo do balão de fala
export const Bubble = styled.div`
  position: absolute;
  top: -50px; // Posiciona o balão acima da imagem
  left: 50%;
  transform: translateX(-50%);
  background-color: white;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  font-family: 'Comic Sans MS', cursive, sans-serif; // Fonte estilizada para parecer um gibi
  font-size: 20px;
  text-align: center;
  max-width: 90%; // Largura máxima do balão
  word-wrap: break-word;
  @media ${device.mobileM} {
      top: -16vh; // Posiciona o balão acima da imagem
      padding: 10px;
      min-width: 80vw;
      max-width: 100%; // Largura máxima do balão
    }
  
  // Triângulo do balão de fala
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid white;
  }
`;
