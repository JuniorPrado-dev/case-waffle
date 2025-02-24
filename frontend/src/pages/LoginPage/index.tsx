import Header from "@/components/Header";
import * as S from "./style";
import LoginForm from "@/components/LoginForm";
import { useEffect } from "react";
import imageDetective from "@/assets/images-detective";
export default function LoginPage() {
  useEffect(() => {
  }, []);
  return (
    <S.Container>
      <Header />
      <S.MainContent>
        <LoginForm />
        <S.Image src={imageDetective.procurando_esquerda} />
      </S.MainContent>
    </S.Container>
  );
}
