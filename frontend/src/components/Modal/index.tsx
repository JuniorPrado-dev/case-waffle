import * as S from "./style";
import React, { useState, useEffect } from "react";

interface ModalProps {
  visible: boolean;
  fullWidth?: boolean;
  fullHeight?: boolean;
  setVisible: (value: boolean) => void;
  children: React.ReactNode;
  onClose?: () => void; // Função opcional a ser executada ao fechar o modal
}

export default function Modal({ visible, setVisible, children, onClose,fullWidth,fullHeight }: ModalProps) {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);

    // Executa a função opcional onClose se ela for passada
    if (onClose) onClose();

    setTimeout(() => {
      setVisible(false);
      setIsClosing(false);
    }, 500); // Tempo para o fade-out, deve corresponder ao tempo da animação de saída
  };

  useEffect(() => {
    if (visible) {
      setIsClosing(false);
    }
  }, [visible]);

  if (!visible && !isClosing) return null;

  return (
    <S.Overlay onClick={handleClose} isClosing={isClosing}>
      <S.Container fullHeight={fullHeight} fullWidth={fullWidth} onClick={(e) => e.stopPropagation()} isClosing={isClosing}>
        <S.CloseButton onClick={handleClose}>×</S.CloseButton>
        {children}
      </S.Container>
    </S.Overlay>
  );
}
