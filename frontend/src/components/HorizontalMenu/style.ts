import COLORS from '@/constants/colors';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  `;
export const MenuItemContainer = styled.div`
display: flex;
background-color: ${COLORS.darkBlue};
border-bottom: 2px solid #ddd; /* Linha abaixo do menu para separar */
justify-content: start; /* Ajuste automático para o espaço */
overflow-x: scroll; /* Permite rolar horizontalmente se necessário */
  

  /* Estilo para navegadores baseados em WebKit */
  ::-webkit-scrollbar {
    height: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${COLORS.green};
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: ${COLORS.green};
  }
  ::-webkit-scrollbar-track {
    background-color: ${COLORS.green};
  }

  /* Estilo para Firefox */
 // scrollbar-color: #888 #f1f1f1;
  //scrollbar-width: thin; /* Opções: auto | thin | none */

  /* Fallback (opcional) */
 // -ms-overflow-style: none; /* Para IE e Edge legado */
 // scrollbar-width: none; /* Remove para navegadores que não suportam */

/* Oculta a barra de rolagem no Webkit (Chrome, Safari) */
  /* &::-webkit-scrollbar {
    display: none;
  } */

  /* Oculta a barra de rolagem para navegadores compatíveis com scrollbar-width */
 // scrollbar-width: none; /* Firefox */
 
`

export const ContentWrapper = styled.div`
  padding: 16px;
`;

interface MenuItemWrapperProps {
  isSelected: boolean;
}

export const MenuItemWrapper = styled.div<MenuItemWrapperProps>`
  padding: 8px 16px;
  cursor: pointer;
  color: ${({ isSelected }) => (isSelected ? '#333' : '#555')};
  border-bottom: ${({ isSelected }) => (isSelected ? '2px solid #333' : 'none')};  
  &:hover {
    background-color: #f0f0f0;
  }
`;
