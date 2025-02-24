import styled from 'styled-components';
import background from "@/assets/images/login-register-back.jpg";

export const Container = styled.div`
    background-color:#070d19;
    min-height: 100vh;
    `;


// Conteúdo principal expande para ocupar o espaço restante
export const MainContent = styled.main`
  flex: 1;
  padding: 3% 0%;
  background-image: url(${background}); /* Referência à imagem importada */
  background-size: cover; /* Ajusta a imagem para cobrir todo o componente */
  background-repeat: no-repeat; /* Evita a repetição da imagem */
  background-position: center; /* Centraliza a imagem no componente */
  `;
