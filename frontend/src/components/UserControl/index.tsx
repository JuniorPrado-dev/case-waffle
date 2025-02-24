import React, { useEffect, useState } from "react";
import HorizontalMenu from "../HorizontalMenu";
import * as S from "./style";
import { updateCategoryList } from "@/services/categories";
import { useAppDispatch } from "@/redux/hooks";
import AddAdminForm from "../AddAdminForm";
import UserRemoveForm from "../UserRemoveForm";
const UserControl: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    updateCategoryList(dispatch);
  }, []);

  const menuItems = [
    { label: "Cadastrar Administrador".toUpperCase(), content: <AddAdminForm/> },
    { label: "Remover usuário".toUpperCase(), content: <UserRemoveForm /> },
  ];

  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  return (
    <S.Container>
      <HorizontalMenu
        items={menuItems}
        selectedItemIndex={selectedItemIndex}
        setSelectedItemIndex={setSelectedItemIndex}
      />
    </S.Container>
  );
};

export default UserControl;
