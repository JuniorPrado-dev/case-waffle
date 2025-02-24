// style.ts
import { device } from '@/utils/sizeDevices';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
    from {
        opacity: 0;
        transform: translate(-50%, -60%);
    }
    to {
        opacity: 1;
        transform: translate(-50%, -50%);
    }
`;

const fadeOut = keyframes`
    from {
        opacity: 1;
        transform: translate(-50%, -50%);
    }
    to {
        opacity: 0;
        transform: translate(-50%, -60%);
    }
`;

interface AnimationProps {
    isClosing?: boolean;
    fullHeight?: boolean
    fullWidth?: boolean
}

export const Overlay = styled.div<AnimationProps>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 4;
    opacity: ${({ isClosing }) => (isClosing ? 0 : 1)};
    transition: opacity 0.3s ease;
`;

export const Container = styled.div<AnimationProps>`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: ${({ fullWidth }) => (fullWidth ? "100vw" : "90vw")}; /* Limita a largura máxima */
    max-height: ${({ fullHeight }) => (fullHeight ? "100vh" : "80vh")}; /* Limita a altura máxima */
    overflow-y: auto; /* Permite scroll vertical se o conteúdo for grande */
    z-index: 5;
    padding:1vw ; /* Adiciona espaço ao redor do conteúdo */
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 8px;

    animation: ${({ isClosing }) => (isClosing ? fadeOut : fadeIn)} 0.5s ease-out;
    /* Oculta a barra de rolagem no Webkit (Chrome, Safari) */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Oculta a barra de rolagem para navegadores compatíveis com scrollbar-width */
  scrollbar-width: none; /* Firefox */

  @media ${device.mobileM} {
    min-width:90vw ;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 10px;
  background-color: rgba(255, 0, 0, 0.8);
  color: white;
  border: none;
  /* border-radius: 50%; */
  font-size: 28px;
  width: 30px;
  height: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: rgba(255, 0, 0, 1);
    transform: scale(1.1);
  }

  &:focus {
    outline: 2px solid rgba(255, 255, 255, 0.7);
  }
`;
