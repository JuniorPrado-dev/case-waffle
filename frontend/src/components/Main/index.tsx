import * as S from "./style";
import image1 from "@/assets/images/main/main_img.png";
import ativo10 from "@/assets/images/main/ativo10.png";

const Main = () => {
  return (
    <S.Container>
      <S.ImagesContainer>
        <S.Image src={image1} />
      </S.ImagesContainer>
      <S.ImagesContainer>
        <S.MainImage src={ativo10} />
      </S.ImagesContainer>
    </S.Container>
  );
};

export default Main;
