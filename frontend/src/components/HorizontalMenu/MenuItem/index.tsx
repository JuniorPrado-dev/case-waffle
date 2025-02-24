import React from 'react';
import * as S from './style';

interface MenuItemProps {
  isSelected: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const MenuItem: React.FC<MenuItemProps> = ({ isSelected, onClick, children }) => {
  return (
    <S.MenuItemWrapper isSelected ={isSelected} onClick={onClick}>
      <S.MenuLabel selected={isSelected}>
        {children} 
        </S.MenuLabel>
    </S.MenuItemWrapper>
  );
};

export default MenuItem;
