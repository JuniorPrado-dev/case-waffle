import React from 'react';
import * as S from './style';
import MenuItem from './MenuItem';

interface MenuItemType {
  label: string;
  content: React.ReactNode;
}

interface MenuContainerProps {
  items: MenuItemType[];
  selectedItemIndex:number;
  setSelectedItemIndex:(v:number) => void;
}

const HorizontalMenu: React.FC<MenuContainerProps> = ({ items, selectedItemIndex, setSelectedItemIndex }) => {

  return (
    <S.Container>
      <S.MenuItemContainer>
        {items.map((item, index) => (
          <MenuItem
            key={index}
            isSelected={selectedItemIndex === index}
            onClick={() => setSelectedItemIndex(index)}
          >
            {item.label}
          </MenuItem>
        ))}
      </S.MenuItemContainer>
      <S.ContentWrapper>
        {items[selectedItemIndex].content}
      </S.ContentWrapper>
    </S.Container>
  );
};

export default HorizontalMenu;
