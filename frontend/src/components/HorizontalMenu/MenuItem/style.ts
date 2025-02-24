import COLORS from '@/constants/colors';
import { device } from '@/utils/sizeDevices';
import styled from 'styled-components';

export const MenuContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  
  .menu {
    display: flex;
    border-bottom: 2px solid #ddd; /* Linha abaixo do menu para separar */
    justify-content: space-between; /* Ajuste automático para o espaço */
    overflow-x: auto; /* Permite rolar horizontalmente se necessário */
  }
`;

export const ContentWrapper = styled.div`
  padding: 16px;
  width: 100%;
`;

interface MenuItemWrapperProps {
  isSelected: boolean;
}

export const MenuItemWrapper = styled.div<MenuItemWrapperProps>`
display: flex;
  align-items: center;
  justify-content: center;
  padding: 1%;
  min-width: max-content;
  width: 100%;
  cursor: pointer;
  background-color: ${({ isSelected }) => (isSelected ? '#3f4147' : 'transparent')};
  border-bottom: ${COLORS.green} solid ${({ isSelected }) => (isSelected ? '6px' : '0px')}; ;
  &:hover {
    background-color: #3f4147;
  }
  @media ${device.mobileM} {
    padding: 5px 14px;
    border-right: solid 1px ${COLORS.white};
  }
  `;

export const MenuLabel = styled.p<{ selected: boolean }>`
  @media ${device.mobileM} {
    
  }
  font-family: 'Montserrat', sans-serif;
  font-size: ${({ selected }) => (selected ? '18px' : '15px')};
  font-weight: ${({ selected }) => (selected ? '600' : 'normal')};
  color: #FFF;
  @media ${device.mobileM} {
    font-size: ${({ selected }) => (selected ? '15px' : '15px')};
    font-weight: ${({ selected }) => (selected ? '600' : 'normal')};
    
  }
`;
