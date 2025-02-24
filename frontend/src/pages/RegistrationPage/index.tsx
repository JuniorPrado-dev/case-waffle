import UserForm from "@/components/UserForm";
import * as S from "./style";
import imageDetective from "@/assets/images-detective";
import Header from "@/components/Header";
export default function RegistrationPage() {
  return (
    <S.Container>
      <Header/>
      <S.MainContent>
        <S.Image src={imageDetective.parado_direita} />
        <UserForm />
      </S.MainContent>
    </S.Container>
  );
}
