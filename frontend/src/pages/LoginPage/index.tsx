import Header from "@/components/Header";
import * as S from "./style";
import Footer from "@/components/Footer";
import LoginForm from "@/components/LoginForm";
import { useEffect } from "react";
import { googleLogout } from "@react-oauth/google";
export default function LoginPage() {
  useEffect(() => {
    googleLogout();
  }, []);
  return (
    <S.Container>
      <Header />
      <S.MainContent>
        <LoginForm />
      </S.MainContent>
      <Footer />
    </S.Container>
  );
}
