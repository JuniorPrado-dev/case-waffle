import { device } from '@/utils/sizeDevices';
import styled, { keyframes } from 'styled-components';

// Animação para o alerta aparecer suavemente com um leve efeito de zoom
const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.9);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

export const AlertWrapper = styled.div<{ hasImage: boolean }>`
  width: ${({ hasImage }) => (hasImage ? 'auto' : '340px')};  // Ajuste de largura baseado na imagem
  padding: 24px;
  background-color: #f9f9f9;
  border: 1px solid #d3d3d3;
  border-radius: 8px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${fadeIn} 0.3s ease-in-out;
  @media ${device.mobileM} {
        width: 80vw;
      }
`;

export const AlertImage = styled.img`
  width: auto;   /* Ajuste automático da largura */
  max-height: 40vw;
  margin-bottom: 16px;
  border-radius: 6px;  /* Opcional, para suavizar a borda da imagem */
`;

export const AlertTitle = styled.h2`
  font-size: 22px;
  font-family: "Montserrat", sans-serif;
  color: #333;
  text-align: center;
  margin: 0 0 14px 0;
  
  @media ${device.mobileM} {
    font-size: 22px;
    margin-top:30px;
    max-width: 80vw;
  }
`;

export const AlertContent = styled.p`
  font-size: 18px;
  font-family: "Montserrat", sans-serif;
  color: #555;
  text-align: center;
  margin-bottom: 24px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;
`;

export const AlertButton = styled.button`
  padding: 12px 20px;
  background-color: #e2e2e2;
  color: #333;
  border: 1px solid #b3b3b3;
  border-radius: 4px;
  font-size: 16px;
  font-family: "Montserrat", sans-serif;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #ccc;
    color: #000;
    font-weight: 600;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.98);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(100, 255, 155, 0.5);
  }
`;
