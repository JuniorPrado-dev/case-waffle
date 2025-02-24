import styled from 'styled-components';
import { device } from '@/utils/sizeDevices';

// To accept props
interface ContainerProps {
    $op?: number;
}

export const Container = styled.div<ContainerProps>`
    position: static;
    z-index: 1;
    opacity: ${props => props.$op};
    width: 100%;
    height: fit-content;
    transition-duration: 0.5s;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media ${device.tablet} { // iPad Mini
        margin-top: 0;
    }
`;

export const ContainerBanner = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 0 auto;
    height: 100%;
    width: 100%;
    overflow: hidden;
    position: relative;

    @media ${device.tablet} { // iPad Mini
        height: 150px; // Reduz a altura do banner
    }
`;

// To accept props
interface InternalContainerBannerProps {
    $p?: number;
}

export const InternalContainerBanner = styled.div<InternalContainerBannerProps>`
    display: flex;
    justify-content: left;
    align-items: center;
    margin: 0 auto;
    transition-duration: 2s;
    position: relative;
    left: ${props => props.$p}vw;

    @media ${device.tablet} { // iPad Mini
        left: ${props => props.$p}vw; // Mantém a lógica de posicionamento
    }
`;

export const ImageB = styled.img`
    min-width: 100vw;
    height: 240px;
    transition-duration: 0.4s;
    padding-inline: 10vw;

    @media ${device.tablet} { // iPad Mini
        height: 150px; // Reduz a altura das imagens
        padding-inline: 4vw; // Reduz o padding lateral
    }
`;

export const ContSeta = styled.div`
    position: absolute;
    z-index: 1;
    display: flex;
    height: 33vw;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    justify-items: center;

    @media ${device.tablet} { // iPad Mini
        height: 25vw; // Reduz a altura do container das setas
    }
`;

// To accept props
interface ImageSetaProps {
    $left?: number;
    $top?: number;
    $right?: number;
}

export const ImageSeta = styled.div<ImageSetaProps>`
    height: 6vw;
    margin-left: ${props => props.$left}vw;
    margin-right: ${props => props.$right}vw;
    fill: white !important;
    filter: brightness(0) invert(0); // Transforma a imagem em branco

    &:hover {
        height: 4.5vw;
        cursor: pointer;
    }
    &:active {
        height: 3.8vw;
    }

    @media ${device.tablet} { // iPad Mini
        height: 8vw; // Aumenta o tamanho das setas para melhor visibilidade
        &:hover {
            height: 7vw;
        }
        &:active {
            height: 6vw;
        }
    }
`;