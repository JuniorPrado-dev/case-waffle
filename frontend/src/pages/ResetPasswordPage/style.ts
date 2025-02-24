import styled from "styled-components";
import background from "@/assets/images/login-register-back.jpg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Garante que o contêiner ocupe toda a altura da viewport */
  background-color: #E2E2E2;
`;

export const MainContent = styled.main`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3% 0%;
    //background-image: url(${background}); /* Referência à imagem importada */
    //background-size: cover; /* Ajusta a imagem para cobrir todo o componente */
    //background-repeat: no-repeat; /* Evita a repetição da imagem */
    //background-position: center; /* Centraliza a imagem no componente */
`;
