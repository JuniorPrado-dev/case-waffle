import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

// Definindo a interface para as props do componente
interface ComponentSliderProps {
  components: React.ReactNode[];
}

// Animação de entrada da esquerda
const slideInFromLeft = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

// Animação de entrada da direita
const slideInFromRight = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

// Estilo do container do componente
const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  min-width: 100vw;
  min-height: 100vw;
`;

// Estilo do wrapper que contém os componentes
const ComponentWrapper = styled.div<{ direction: 'left' | 'right' }>`
  position: absolute;
  width: 100%;
  height: 100%;
  animation: ${({ direction }) => (direction === 'left' ? slideInFromLeft : slideInFromRight)} 0.5s ease-in-out;
`;

// Estilo dos botões de navegação
const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 10;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

const PrevButton = styled(Button)`
  left: 100px;
`;

const NextButton = styled(Button)`
  right: 10px;
`;

const Slider: React.FC<ComponentSliderProps> = ({ components }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('left');

  const handleNext = () => {
    setDirection('right');
    setCurrentIndex((prevIndex) => (prevIndex + 1) % components.length);
  };

  const handlePrev = () => {
    setDirection('left');
    setCurrentIndex((prevIndex) => (prevIndex - 1 + components.length) % components.length);
  };

  return (
    <Container>
      <ComponentWrapper direction={direction}>
        {components[currentIndex]}
      </ComponentWrapper>
      <PrevButton onClick={handlePrev}>Voltar</PrevButton>
      <NextButton onClick={handleNext}>Próximo</NextButton>
    </Container>
  );
};

export default Slider;