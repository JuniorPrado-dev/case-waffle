import * as S from "./style";
import Modal from "../Modal";

interface AlertButton {
  label: string;
  onClick: () => void;
}

interface AlertProps {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  title?: string;
  fullWidth?: boolean;
  fullHeight?: boolean;
  content?: string;
  children?: React.ReactNode;
  buttons?: AlertButton[];
  onClose?: () => void;
  imageUrl?: string; // Nova prop opcional para a imagem
}

const Alert: React.FC<AlertProps> = ({
  visible,
  setVisible,
  title,
  content,
  buttons,
  onClose,
  children,
  imageUrl,
  fullWidth,
  fullHeight,
}) => {
  const alertRender = (
    <S.AlertWrapper hasImage={!!imageUrl}>
      {" "}
      {/* Ajuste condicional baseado na imagem */}
      {imageUrl && <S.AlertImage src={imageUrl} alt="Alert Image" />}{" "}
      {/* Exibe a imagem, se existir */}
      {title && 
      <S.AlertTitle>{title.toUpperCase()}</S.AlertTitle>
      }
      {content && 
      <S.AlertContent>{content.toUpperCase()}</S.AlertContent>
  }
      {children && children}
      <S.ButtonContainer>
        {buttons &&
          buttons.map((button, index) => (
            <S.AlertButton key={index} onClick={button.onClick}>
              {button.label}
            </S.AlertButton>
          ))}
      </S.ButtonContainer>
    </S.AlertWrapper>
  );

  return (
    <Modal
      fullHeight={fullHeight}
      fullWidth={fullWidth}
      visible={visible}
      setVisible={setVisible}
      children={alertRender}
      onClose={onClose}
    />
  );
};

export default Alert;
